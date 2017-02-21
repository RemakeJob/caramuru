<?
	switch ($_GET["referencia"])
	{
		case "evento":
			include("interna_evento.php");
		break;
		case "programacao":
			include("interna_programacao.php");
		break;
		case "blog":
			include("interna_blog.php");
		break;
		case "blog-detalhado":
			include("interna_blog-detalhado.php");
		break;
		case "familia":
			include("interna_familia.php");
		break;
		case "contato":
			include("interna_contato.php");
		break;
	}
?>
<div class="clear"></div>