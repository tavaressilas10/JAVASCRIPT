let dias,  anos, meses,  dia

dias  =  prompt ( "Quantos dias de vida você tem: " )

anos  =  ( dias  /  365 )
meses  =  ( dias  /  30 )
dia  =  ( dias  -  ( anos  *  365 )  -  ( meses  *  30 ) )
alert ( "\nSeus anos são de: "  + anos +  
"\nSeus meses de vida são de: "  + meses +  
"\nSeus dias de vida são de: "  + dias )
