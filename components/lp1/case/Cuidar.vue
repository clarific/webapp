<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-12">
					<h2 class="lp">Cuidar</h2>
					<div class="container-fluid">
						<section class="section is-paddingless">
							<div class="container">
								<div class="columns is-centered">
									<div class="column">
										<script src="https://fast.wistia.com/embed/medias/8n6rwc5b2e.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding projectImg" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_8n6rwc5b2e videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/8n6rwc5b2e/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="container">
								<div class="columns">
									<div class="column">
										<img src="~/assets/project/cuidar/mockup1.png">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Oportunidade
										</span>
										<h2 class="title">Esqueça O Tradicional</h2>
										<p class="text">
											O que você faz quando precisa de uma consulta médica? Liga para o consultório, agenda sua visita e, na maioria das vezes, sai da consulta com uma receita de medicamentos para resolver o seu problema. Certo? <br />
											É justamente esse processo que a Cuidar pretende revolucionar com seu modelo de negócios inovador. A proposta é um atendimento completo. O paciente é recebido por uma equipe interdisciplinar que se coloca a disposição para melhorar não apenas a saúde como a qualidade de vida do mesmo. Mas havia um problema... pouca gente sabia que a proposta da clínica era esta.
										</p>
									</div>
								</div>
							</div>
						</section>
						<section class="section mt">
							<div class="container">
								<div class="columns">
									<div class="column">
										<span class="subtitle is-spaced">
											Solução
										</span>
										<h2 class="title">Uma Boa História Pra Contar</h2>
										<p class="text">
											Assim que conversamos com o Dr. Walter, a cabeça por trás de toda a iniciativa, sabíamos que tínhamos o desafio de contar esta história que já era boa por si só. Todo o impacto positivo que as ações desse inovador modelo gerava não só nas vidas dos pacientes que passavam pela clínica mas, também, na própria equipe era algo inspirador. Por isto, criamos um website no modelo <em>one page</em> e um vídeo onde pudemos mostrar os valores que motivam a equipe e toda a estrutura por trás do negócio.
										</p>
									</div>
									<div class="column">
										<img src="~/assets/project/cuidar/mockup2.png">
									</div>
								</div>
							</div>
						</section>
						<section class="section has-background-light mt is-hidden">
							<div class="container">
								<div class="columns is-multiline is-centered">
									<div class="column is-full has-text-centered">
										<img src="~/assets/project/partiu/logo.png" width="15%">
									</div>
									<div class="column is-7 has-text-centered is-paddingless">
										<blockquote>
											"A plataforma da Partiu Ingresso é de longe a melhor que eu já trabalhei. As constantes atualizações com novas ferramentas nos deixam confortáveis em saber que estamos usando um produto de qualidade para nos ajudar na principal atividade do nosso negócio que é a venda dos ingressos de nossos eventos."
										</blockquote>
										<br />
										<p class="text">AD Produtora</p>
									</div>
								</div>
							</div>
						</section>
						<section class="section mt">
							<div class="container">
								<div class="columns">
									<div class="column">
										<img src="~/assets/project/cuidar/img.jpg">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Processo
										</span>
										<h2 class="title">Mais Que Digital</h2>
										<p class="text">
											Como a clínica é composta por um grande número de profissionais, acompanhamos algumas de suas reuniões para entender nos mínimos detalhes os objetivos e expectativas da equipe. A coleta de materiais foi a primeira etapa do trabalho da Clarific, foram alguns dias de fotografias e filmagens tanto dos profissionais quanto da estrutura da clínica. Após isto, seguindo as decisões que tomamos em conjunto com a Cuidar, preparamos o vídeo e o website além de todo o conjunto de papelaria como cartões de visita e receituário.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

	.section {
		background: transparent;
		@media (max-width: 769px) {
			padding-top: 48px;
		}
	}

	.back {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 24px;
		color: #161719;
		@media (max-width: 769px) {
			margin-bottom: 42px;
			display: inline-block;
		}
		> span {
			position: relative;
			&::after {
				content: '';
				width: 0%;
				height: 4px;
				background-color: #EA9A00;
				position: absolute;
				bottom: 0;
				left: 0;
				transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
				@media (max-width: 769px) {
					width: 100%;
				}
			}
		}
		@media (min-width: 769px) {
			&:hover {
				> span:after {
					width: 100%;
				}
			}
		}
	}

.container-fluid {
	background: #ffffff;
	height: 100%;
	display: block;
	padding: 32px;
	margin-top: 42px;
	border-radius: 10px;
	box-shadow: 0px 0.996212px 2.85027px rgba(22, 23, 25, 0.0590406), 0px 2.39404px 6.84961px rgba(22, 23, 25, 0.0848175), 0px 4.50776px 12.8972px rgba(22, 23, 25, 0.105), 0px 8.04107px 23.0064px rgba(22, 23, 25, 0.125183), 0px 15.0399px 43.0309px rgba(22, 23, 25, 0.150959), 0px 36px 103px rgba(22, 23, 25, 0.10);
	> section { padding-top: 0; }
	.subtitle:first-of-type {
		margin-top: 70px;
		@media (max-width: 769px) {
			margin-top: unset;
		}
	}
	.projectImg {
		transform: translateY(0);
	}
	@media (max-width: 769px) {
		padding: unset;
		box-shadow: unset;
		background: transparent;
	}
}
.subtitle {
	display: inline-block;
	// border-bottom: 2px solid #6BCCA4;
	padding-bottom: 8px;
	text-transform: uppercase;
	color: #5E5F62;
	font-weight: 300;
	font-size: 16px;
	line-height: 16px;
	letter-spacing: 0.05em;
}
.title {
	font-size: 28px;
}
.text {
	font-size: 18px;
}
.section.mt {
	margin-top: 60px;
}
blockquote {
	font-weight: 400;
	font-style: italic;
	font-size: 18px;
	line-height: 28px;
	text-align: center;
	color: rgba(0, 0, 0, 0.55);
	margin-top: -28px;
}
@media screen and (max-width: 769px) {
	.hero {
		flex-direction: column;
		align-items: unset;
		margin-top: 30px;
		padding: calc(6.25vw + 12px);
		.title { max-width: 230px; }
		> div:last-of-type {
			margin-top: 30px;
			max-width: unset;
			text-align: unset;
			align-items: unset;
		}
	}
	.container-fluid {
		.projectImg {
			transform: translateY(0);
		}
		> section.section { padding: unset; }
	}
	.container-fluid > section:first-of-type .columns {
		display: flex;
		flex-direction: column;
		> .column:first-of-type {
			order: 1;
			margin-top: -200px;
			@media (max-width: 769px) {
				margin-top: unset;
			}
		}
		> .column:last-of-type {
			order: 0;
		}
	}
	.container-fluid > section:nth-of-type(2n) .columns {
		margin-top: 30px;
		> .column:last-of-type {
			margin-top: -150px;
			@media (max-width: 769px) {
				margin-top: unset;
			}
		}
	}
	.container-fluid > section:nth-of-type(3n) .columns {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		> .column:last-of-type {
			order: -1;
			margin-bottom: -60px;
			@media (max-width: 769px) {
				margin-bottom: unset;
			}
		}
	}
}
</style>