
var tabela = new Array();
tabela[500] = new Array('2','4','4','5','6','7','9','9','10','12');
tabela[1000] = new Array('4','6','8','8','9','9','11','12','13','13');
tabela[2000] = new Array('5','6','9','12','14','16','18','20','23','25');
tabela[3000] = new Array('6','9','12','16','20','24','26','30','34','38');
tabela[4000] = new Array('8','13','16','22','25','30','35','40','45','50');
tabela[5000] = new Array('12','15','20','25','31','38','44','50','56','63');
tabela[10000] = new Array('15','25','38','50','63','75','88','100','113','125');
tabela[15000] = new Array('20','38','56','75','94','113','131','150','169','188');
tabela[20000] = new Array('25','50','75','100','125','150','175','200','225','250');
tabela[25000] = new Array('38','69','99','130','160','191','221','252','282','313');
tabela[30000] = new Array('46','82','119','156','192','229','266','302','339','376');
tabela[35000] = new Array('53','96','139','181','224','267','310','352','395','438');
tabela[40000] = new Array('61','109','158','207','256','305','354','403','452','501');
tabela[45000] = new Array('68','123','178','233','288','343','398','453','508','563');
tabela[50000] = new Array('76','137','198','259','320','381','442','503','564','626');
tabela[55000] = new Array('83','150','217','285','352','419','486','554','621','688');
tabela[60000] = new Array('91','164','237','311','384','457','531','604','677','751');
tabela[65000] = new Array('98','177','257','336','416','495','575','653','734','813');
tabela[70000] = new Array('106','191','277','362','448','533','619','704','790','876');
tabela[75000] = new Array('113','205','296','388','480','571','663','755','846','938');
tabela[80000] = new Array('121','218','316','414','512','609','707','805','903','1001');
tabela[85000] = new Array('128','232','336','440','544','647','751','855','959','1063');
tabela[90000] = new Array('136','246','356','466','576','686','796','906','1016','1126');
tabela[95000] = new Array('143','259','375','491','607','724','840','956','1072','1188');
tabela[100000] = new Array('151','273','395','517','639','762','884','1006','1128','1251');
            
		
			$(function() {
				$( "#slider-trabaladores-max" ).slider({
					range: "max",
					min: 0,
					max: 500,
					value: 0,
					change: calculoobra,
					slide: function( event, ui ) {
						$( "#trabaladores" ).val( ui.value );
					}
				});
				$( "#trabaladores" ).val( $( "#slider-trabaladores-max" ).slider( "value" ) );
				
				$( "#slider-horas-max" ).slider({
					range: "max",
					min: 1,
					max: 10,
					value: 0,
					change: calculoevento,
					slide: function( event, ui ) {
						$( "#horas" ).val( ui.value );
					}
				});
				$( "#horas" ).val( $( "#slider-horas-max" ).slider( "value" ) );			
				
				
				var select = $( "#pessoas" );
				var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
					min: 0,
					max: 24,					
					range: "max",
					value: select[ 0 ].selectedIndex,
					change: calculoevento,
					slide: function( event, ui ) {
						select[ 0 ].selectedIndex = ui.value;
						$( "#uqtde" ).val( $('#pessoas').val() );
					}
				});
				$( "#pessoas" ).change(function() {
					slider.slider( "value", this.selectedIndex + 1 );
				});			
				
			});
			
			
            function calculoobra(){
                var qtde = $('#trabaladores').val();
				
				var ps1 = $("#1porsemana").is(":checked");		
				var ps2 = $("#2porsemana").is(":checked");					
				var f=10;
				
				if(ps1) f=10;
				if(ps2) f=15; 				
				if(isNaN(qtde))qtde=0;
				var total = (qtde/f);
				
				total = Math.ceil(total);
				if(total<1) total=1;
                $('#obraresult').html(total);
            }
			
            function calculoevento(){
                var x = parseInt($('#pessoas').val());
                var y = parseInt($('#horas').val()) - 1;
				var a = $("#bebida_alcoolica").is(":checked");	
				var l = $("#equipe_limpeza").is(":checked");						
						
				if(a) a=1.1; else a=1;
				if(l) l=0.9; else l=1;
				
				var total = tabela[x][y]*a*l;
				total = Math.ceil(total);
                $('#eventoresult').html(total);				
            }     
            
            
            


            function simula(pessoas, horas) {
                var simulacao = new Array();
                simulacao[500]   = new Array(0,2,4,4,5,6,7,9,9,10,12);
                simulacao[1000]  = new Array(0,4,6,8,8,9,9,11,12,13,13);
                simulacao[2000]  = new Array(0,5,6,9,12,14,16,18,20,23,25);  
                simulacao[3000]  = new Array(0,6,9,12,16,20,24,26,30,34,38); 
                simulacao[4000]  = new Array(0,8,13,16,22,25,30,35,40,45,50);
                simulacao[5000]  = new Array(0,12,15,20,25,31,38,44,50,56,63);   
                simulacao[6000]  = new Array(0,12,15,23,30,38,45,53,60,68,75);   
                simulacao[7000]  = new Array(0,12,18,26,35,44,53,61,70,79,88);   
                simulacao[8000]  = new Array(0,12,20,30,40,50,60,70,80,90,100);   
                simulacao[10000] = new Array(0,15,25,38,50,63,75,88,100,113,125);   
                simulacao[12500] = new Array(0,18,31,47,63,78,94,109,125,141,156);   
                simulacao[15000] = new Array(0,20,38,56,75,94,113,131,150,169,188);
                simulacao[17500] = new Array(0,22,44,66,88,109,131,153,175,197,219);   
                simulacao[20000] = new Array(0,25,50,75,100,125,150,175,200,225,250);  
                
                return simulacao[pessoas][horas];
            }

            function simulaObra(pessoas) {
                var simulacao = new Array();
                simulacao[1]   = 1;
                simulacao[10]  = 2;
                simulacao[20]  = 3;  
                simulacao[30]  = 4;
                
                return simulacao[pessoas];
            }

