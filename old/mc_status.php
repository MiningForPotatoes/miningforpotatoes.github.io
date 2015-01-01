<?php

function check($ip="192.3.90.101", $port=25565) {
	$socket = @fsockopen($ip, $port, $empty, $empty, 1);
	if ($socket !== FALSE)
		return true;
	else
		return false;
}

function info($ip="192.3.90.101", $port=25565) {
	$sock = @stream_socket_client("tcp://" . $ip . ":" . $port, $empty, $empty, 1);
	if (!$sock) {
		return false;
	} else {
		fwrite($sock, "\xFE");
		$result = fread($sock, 2048);
		$result = str_replace("\x00", '', $result);
		$result = substr($result, 2);
		$data = array();
		$data = explode("\xA7", $result);
		fclose($sock);
		return $data;
	}
}

?>
