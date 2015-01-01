<?php
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
	require __DIR__ . '/MinecraftQuery.class.php';
	
	$Query = new MinecraftQuery( );
	
	try
	{
		$Query->Connect( 'miningforpotatoes.com', 25565 );
		
	echo json_encode($Query->GetInfo( ) );
	//echo json_encode( $Query->GetPlayers( ) );
		
	}
	catch( MinecraftQueryException $e )
	{
		echo $e->getMessage();
	}
?>