{
                name: "Ciencuadras WEB  - Vista Colombianos Exterior",
                isMatch: () => window.location.pathname === "/colombianos/exterior",
                action: "Ciencuadras WEB  - Vista Colombianos Exterior",
              },
              
              {
                name: "Ciencuadras WEB - Vista Avaluo",
                isMatch: ()=> /^\/avaluos-en-linea\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo",
              },
              
              {
                name: "Ciencuadras WEB - Vista Publicacion inmueble",
                isMatch: ()=> /^\/publicacion-inmuebles\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble",
                listeners: [
                    //Botón Plan
                    Evergage.listener("click", ".ccbutton.button.button.primary.rounded ", (event) => {
                        console.log('MCP - click en plan');
                        if(event.target.closest(".owner-card.ng-star-inserted")){
                            let planName = event.target.closest(".owner-card.ng-star-inserted");
                            let planVl = planName.querySelector('.owner-card__title').childNodes[0].textContent;

                            Evergage.sendEvent({
                            action: "Ciencuadras WEB  - Boton Plan - " + planVl,
                            });
                        }
                    })
                ]
              },
          {
              name: "Ciencuadras WEB - Vista Publicacion inmueble - Personas",
              isMatch: () => /^\/publicacion-inmuebles\/personas\/?$/.test(window.location.pathname),
              action: "Ciencuadras WEB - Vista Publicacion inmueble - Personas",
              listeners: [
                  //Botón Plan
                  Evergage.listener("click", ".ccbutton.button.button.primary.rounded", (event) => {
                      console.log('MCP - click en plan');
                      if (event.target.closest(".owner-card.ng-star-inserted")) {
                          let planName = event.target.closest(".owner-card.ng-star-inserted");
                          let planVl = planName.querySelector('.owner-card__title').childNodes[0].textContent;

                          Evergage.sendEvent({
                              action: "Ciencuadras WEB  - Boton Plan - " + planVl,

                          });
                      } else if (event, target.cosest(".owner-card__detail.ng-star-inserted")) {
                          let planName = event.target.closest(".owner-card.ng-star-inserted");
                          let planVl = planName.querySelector('.owner-card__title').childNodes[0].textContent;
                          console.log("este  es el nombre del plan:" + planV1)
                      }
                  }),
                  Evergage.listener("click", ".back", (event) => {

                          Evergage.sendEvent({
                              action: "Ciencuadras WEB - regresar",
                          });
                  }),
                  Evergage.listener("click", ".ccbutton.button.button.secondary.block.rounded", (event)=>{
                    Evergage.sendEvent({
                        action:"Ciencuadras WEB - plan de publicacion modal",
                    })
                  }),
                  Evergage.listener("click", ".ccbutton.button.button.secondary.btn-pay.rounded", (event)=>{
                    Evergage.sendEvent({
                        action:"Ciencuadras WEB - ir a pagar",
                    })
                  })
              ]
          },
              {
                name: "Ciencuadras WEB - Vista Publicacion inmueble - Agente Inmobiliario",
                isMatch: ()=> /^\/publicacion-inmuebles\/agente-inmobiliario\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble - Agente Inmobiliario",
                listeners: [
                    //Botón Plan
                    Evergage.listener("click", ".ccbutton.button.button.primary.rounded", (event) => {
                        console.log('MCP - click en plan');
                        if(event.target.closest(".owner-card.ng-star-inserted")){
                            let planName = event.target.closest(".owner-card.ng-star-inserted");
                            let planVl = planName.querySelector('.owner-card__title').childNodes[0].textContent;

                            Evergage.sendEvent({
                            action: "Ciencuadras WEB  - Boton Plan - " + planVl,
                            });
                        }
                    })
                ]
              },
              {
                name: "Ciencuadras WEB - Vista Publicacion inmueble - Inmobiliaria",
                isMatch: ()=> /^\/productos\/seleccion-ideal\/constructora\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble - Inmobiliaria",
                
              },
               {
                name: "Ciencuadras WEB - Vista Avaluo - Verificacion Cobertura",
                isMatch: ()=> /^\/avaluos-en-linea\/verificacion-cobertura\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Verificacion Cobertura",
                listeners: [
                    //Botón Plan
                    Evergage.listener("click", ".button.secondary.rounded.mb-base.message-sent-buttons.mt-small", (event) => {
                        
                            Evergage.sendEvent({
                            action: "Ciencuadras WEB - verificar cobertura",
                            });
                       

                        }),
                    Evergage.listener("click", ".button.block.rounded.tertiary.text-center.mb-thumb.mt-thumb.text-xsmall.btn-mobile", (event) => {
                        
                            Evergage.sendEvent({
                            action: "Ciencuadras WEB - sin cobertura",
                            });
                       

                        })
                ]
              },
              {
                name: "Ciencuadras WEB - Vista Avaluo - Diligenciar Solicitud",
                isMatch: ()=> /^\/avaluos-en-linea\/diligenciar-solicitud\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Diligenciar Solicitud",
                listeners: [
                    //Botón Plan
                  Evergage.listener("click", ".button.secondary.rounded.m-base.text-small", (event) => {
                      Evergage.sendEvent({
                          action: "Ciencuadras WEB - formulario avaluo - continuar",
                      });
                    }),
                ]
            },
              {
                name: "Ciencuadras WEB - Vista Avaluo - Pago Exitoso",
                isMatch: ()=> /^\/avaluos-en-linea\/pago-exitoso\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Pago Exitoso",
                listeners: [
                    //Botón Plan
                  Evergage.listener("click", ".button.secondary.rounded.m-base.text-small", (event) => {
                      Evergage.sendEvent({
                          action: "Ciencuadras WEB - formulario avaluo - pagar",
                      });
                    }),
                ]
            },
            {
                name: "Ciencuadras WEB - vista crear cuenta",
                isMatch: ()=> window.location.pathname.includes('/publicacion-inmuebles/datos-facturacion'),
                
                action: "Ciencuadras WEB - vista crear cuenta",
                listeners: [
                    Evergage.DisplayUtils.pageElementLoaded(".ccbutton.button.button.primary.rounded").then(()=>{
                        console.log("entro buscar el boton")
                        const botonGuardarRegistro = document.querySelectorAll(".ccbutton.button.button.primary.rounded")[1]
                        if(botonGuardarRegistro){
                            console.log(`boton ${botonGuardarRegistro.innerText} encontrado `)
                            botonGuardarRegistro.addEventListener("click",()=>{

                                Evergage.sendEvent({
                                    action: "Ciencuadras WEB - crear cuenta"
                                });
                                console.log("evento enviado")
                            })
                            
                        }else{
                            console.log("boton guardar mi registro no existe")
                        }
                    })
                ]
            },
                 {
                    name: "Ciencuadras WEB - tipo de inmueble",
                    isMatch: () => /^\/publicacion-inmuebles\/publicar\/?$/.test(window.location.pathname),
                    action: "Ciencuadras WEB - tipo de inmueble",
                    listeners: [
                        Evergage.listener("click", ".ccbutton.button.button.primary.block.property-type__continue.rounded", (event) => {
                            Evergage.sendEvent({
                                action: "Ciencuadras WEB - tipo de inmueble"
                            });
                        })
                    ]
                },

                    
              