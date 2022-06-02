function mesesDelAnio(){


    while (true) {
        const meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
    
        var element="";
    
        for (let index = 0; index < meses.length; index++) {
             element += (index+1)+"."+meses[index]+"\n";
        }
        var mess = prompt(`MESES DEL AÑO:\n${element}`+"\n"+"¿quiere ordernar los meses en orden: \n1=ASCENDENTE\n2=DESCENDENTE");
    
        var me="";
        if (mess==1) {
            //meses clasificado alfabéticamente
            //y posteriormente ordenado en orden ascendente
            meses.sort();
            //recorrido de cada mes agregandole un salto de linea a cada uno
            meses.forEach(mes => {
                me += mes+"\n";
            });
            //mostrando en una ventana emergente todo los meses ya clasificados ascendentemente
            confirm(`Meses Ordenados de Forma Ascendente: \n${me}`);
    
        } else {
            meses.sort();
            meses.reverse();
    
            //recorrido de cada mes agregandole un salto de linea a cada uno
            meses.forEach(mes => {
                me += mes+"\n";
            });
    
    
            //mostrando en una ventana emergente todo los meses ya clasificados descendentemente
            confirm(`Meses Ordenados de Forma Descendente: \n${me}`);
        }

        var control = prompt("¿Quiere continuar ordenando la lista?\n1=SI\n2=NO");
        if (control==1) {
            continue;          
        } else {
            break;
        }
    }


}

//llamada de la funcion que crea los meses del año y los procesa
//mesesDelAnio();

function alumnoNotas(){
    const alumnos=["Carlos","Jazmin","Benjamín","Nathaly","Abraham","Zulma","Keiry"];
    const notas=[0,0,0,0,0,0,0];
    var alums="";

    var indice = 1;
    alumnos.forEach(element => {
        alums+=(indice++)+". "+element+"\n";    
    });

    var alumno = prompt(`Elija el alumno Para Asignar su Nota:\n(Escriba el número del alumno) \n${alums}`);

    //


    
    var resultado="";

    if (alumno==1) {

        alumnos.forEach((elem,ind) => {
            if (ind==0) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==0 && indice2==0) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });
            }

        });


    } else if(alumno==2){
        alumnos.forEach((elem,ind) => {
            if (ind==1) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==1 && indice2==1) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });        
            } else {
                
            }
        });

        
    } else if(alumno==3){
        alumnos.forEach((elem,ind) => {
            if (ind==2) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==2 && indice2==2) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });        
            } else {
                
            }
        });


        
    }else if(alumno==4){
        alumnos.forEach((elem,ind) => {
            if (ind==3) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        notas[indice2]=calificacion;
                        if (indice1==3 && indice2==3) {
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });          
            } else {
                
            }
        });


      
    }else if(alumno==5){
        alumnos.forEach((elem,ind) => {
            if (ind==4) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==4 && indice2==4) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });        
            } else {
                
            }
        });


        
    }else if(alumno==6){
        alumnos.forEach((elem,ind) => {
            if (ind==5) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==5 && indice2==5) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });         
            } else {
                
            }
        });


       
    }else if(alumno==7){
        alumnos.forEach((elem,ind) => {
            if (ind==6) {
                var calificacion = prompt(`${elem} Ingrese la nota: `);
                alumnos.forEach((alum,indice1) => {
                    notas.forEach((nota,indice2) => {
                        if (indice1==6 && indice2==6) {
                            notas[indice2]=calificacion;
                            resultado+=`Indice ${indice1+1} Alumno seleccionado: ${alum} Su nota es: ${calificacion}\n`;
                            confirm(`${resultado}`);
            
                        }
                    });
                });        
            } else {
                
            }
        });


        
    }

    var result =""; 
    var result2="";

    
    notas.forEach((ele,ind) => {
        result2+=(ind+1)+". "+alumnos[ind]+"\t\t\t\t\t\t\t\t\t"+ele+"\n";
    });
    confirm(`LISTADO DE ALUMNOS Y SUS CALIFICACIONES\n${result} ${result2}`);

    //notas.forEach((element,ind) => {
    //    confirm(`${(ind+1)+"."+element}`)
  //  });


}

alumnoNotas();