<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
	rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../css/estilo.css">

<link rel="stylesheet" type="text/css" href="../css/form_simulador.css"
	media="all">

<!-- <script type="text/javascript" src="../js/jquery.coda-slider-2.0.js"></script> -->
<script type="text/javascript" src="../js/formula.js"></script>

<title>AV.EVENT - Assistente Virtual para Eventos</title>
</head>
<body>

	<h1>AV.EVENT</h1>

	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#myNavbar">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>


			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<li><a href="#">Início</a></li>
					<li><a href="#">Qtd. Banheiros</a></li>
					<li><a href="#">Outro APP</a></li>
					<li><a href="#">Outro APP</a></li>
					<li><a href="#">Outro APP</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#"><span class="glyphicon glyphicon-log-in"></span>
							Login</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-body pagination-centered">
						<form id="form_eventos" class="form_elementos" method="post"
							action="">
							<h2>Ajuste as Informa&ccedil;&otilde;es do Evento e veja a
								quantidade nescess&aacute;ria de banheiros:</h2>

							<label class="description" for="numero_usuarios">Numero
								de usu&aacute;rios <input name="" type="text" id="uqtde"
								value="500" /> <input type="range" name="qtdUsuarios"
								id="qtdUsuarios" min="100" max="100000" step="100" value="100" />
							</label> <br /> 
							
							<label class="description" for="evento_horas">
								Dura&ccedil;&atilde;o do evento<small> <input name=""
									type="text" id="horas" />( horas ) 
									
									<input type="range" name="qtdHoras" id="qtdHoras" min="1" max="10" step="1" value="1"/>
							</small>
							</label> <br />


							<br />

								Bebida Alcoolica: <input onchange="calculoevento()" id="bebida_alcoolica" name="bebida_alcoolica" class="checkbox" type="checkbox" value="1" />
								Equipe de Limpeza: <input onchange="calculoevento()" id="equipe_limpeza" name="equipe_limpeza" class="element checkbox" type="checkbox" value="1" />
							</div>

							<hr />
							<div class="clear"></div>

							<strong>Quantidade de Banheiros Recomendada:<input type="text" readonly></strong>

						</form>

					</div>
				</div>
			</div>
		</div>
	</div>

	<footer class="container-fluid text-center">

		<p>Footer Text</p>
	</footer>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

</body>

</html>
