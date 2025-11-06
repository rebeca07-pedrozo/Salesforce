//3c52e3212b2ca319
//88b27f6d84594a91
//rebeca

Evergage.init({
    cookieDomain: "ciencuadras.com", 
  }).then(() => {
      console.log("MCP Ciencuadras v89");
      
        let countList = 0;
  
      const sitemapConfig = {
      global: {
        onActionEvent: (actionEvent) => {
          console.log("MCP event: ",actionEvent);
          return actionEvent;
        }, 
        listeners: [
            //Ciencuadras WEB  - Boton ingresar
            Evergage.DisplayUtils.pageElementLoaded(".link.ingresar-label.d-none.d-lg-block.ng-star-inserted").then(ele=>{ 
                document.querySelector("button.nav-list__item.ingresar.ng-star-inserted").addEventListener("click", ()=> {
                    Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton Ingresar"
                    });
                });
            }),
            
            //Ciencuadras WEB  - Boton iniciar sesión
            Evergage.DisplayUtils.pageElementLoaded(".login__body").then(ele=>{ 
                document.querySelector(".login__login-btn").addEventListener("click", ()=> {
                    let emailVl;
                    let email = document.querySelector('input[formControlName="username"]').value;
                    
                    const regexEmail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/);
                    
                    if(email && email.length > 0 && regexEmail.test(email)){
                        emailVl = email;
                        
                    Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton iniciar sesion",
                      user: {
                          attributes: {
                              emailAddress: emailVl
                          }
                      }
                    });
                    }
                    
                });
            }),
            
            //Ciencuadras WEB  - Boton registrate
            Evergage.DisplayUtils.pageElementLoaded(".login__body").then(ele=>{ 
                document.querySelector(".login__link.text-bold.text-link--underline").addEventListener("click", ()=> {

                    Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton Registrate"
                    });
                    
                });
            }),

            //Ciencuadras WEB  - Boton CustomerType
            Evergage.DisplayUtils.pageElementLoaded(".register__body").then(ele=>{ 
                document.querySelector("mat-radio-group").addEventListener("click", (event)=> {
                    if(event.target.closest('mat-radio-group')){
                        let profile = event.target.closest('.mat-radio-label-content').innerText;

                        Evergage.sendEvent({
                        action: "Ciencuadras WEB  - Boton CustomerType ",
                        user: {
                            attributes:{
                              customerType: profile
                            }
                        }
                    });
                    }
                });
            }),
            
            //Ciencuadras WEB  - Boton Registrarme
            Evergage.DisplayUtils.pageElementLoaded(".register__form.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted").then(ele=>{ 
                document.querySelector("button.register__register-btn").addEventListener("click", ()=> {
                    let docType = document.querySelector('mat-select[formControlName="customerIdType"]').innerText.trim();
                    let docNumber = document.querySelector('input[formControlName="customerDocument"]').value;
                    let customerName = document.querySelector('input[formControlName="customerName"]').value;
                    let customerEmail = document.querySelector('input[formControlName="customerEmail"]').value;
                    let customerIdent = docType + docNumber;

                    if(docType && docNumber && customerName && customerEmail){

                        Evergage.sendEvent({
                            action: "Ciencuadras WEB  - Boton Registrarme",
                            user: {
                                attributes: {
                                    name: customerName,
                                    tipoDocumento: docType,
                                    numeroDocumento: docNumber,
                                    emailAddress: customerEmail,
                                    customerId : customerIdent
                                }
                            }
                        });
                    }
                    
                });
            }),
            
            //Ciencuadras WEB  - Boton publicar//
            Evergage.DisplayUtils.pageElementLoaded("header a[href='/publicacion-inmuebles'].rounded").then(ele=>{
                document.querySelector("header a[href='/publicacion-inmuebles'].rounded").addEventListener("click", ()=> {
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton publicar"
                  });
              });
                
            }),
            //Ciencuadras WEB  - Boton Ver Telefonos//
            //desktop
            Evergage.DisplayUtils.pageElementLoaded("ciencuadras-contact-sales-tabs div div:nth-child(1) ciencuadras-contact div div.contact__card div.contact__actions.ng-star-inserted ciencuadras-button-contact button[class='ccbutton button  block tertiary btn-phone rounded button-preview']").then(ele=>{
              document.querySelector("ciencuadras-contact-sales-tabs div div:nth-child(1) ciencuadras-contact div div.contact__card div.contact__actions.ng-star-inserted ciencuadras-button-contact button[class='ccbutton button  block tertiary btn-phone rounded button-preview']").addEventListener("click", ()=> {
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton Ver Telefonos"
                  });
              });
                
            }),
             
            //Ciencuadras WEB  - Boton contactar por Whatsapp//
            Evergage.listener("click", ".ccbutton.button.outline.block.tertiary.btn-whatsapp.rounded", (event) => {
                Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton contactar por Whatsapp"
                  });
            }),
            
            
            Evergage.listener("click", ".ccbutton.button.outline.block.tertiary.btn-contactme.rounded", (event) => {
                Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton quiero que me contacten"
                  });
            }),
            
            //Ciencuadras WEB  - Boton quiero que me contacten//
            Evergage.DisplayUtils.pageElementLoaded("div:nth-child(1) > ciencuadras-contact div div.contact__card div.contact__actions.ng-star-inserted ciencuadras-button.tertiary.btn-contactme.ng-star-inserted").then(ele=>{
              document.querySelector("div:nth-child(1) > ciencuadras-contact div div.contact__card div.contact__actions.ng-star-inserted ciencuadras-button.tertiary.btn-contactme.ng-star-inserted").addEventListener("click", ()=> {
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton quiero que me contacten"
                  });
              });
                
            }),
            
            //Ciencuadras WEB  - Boton contactar
            Evergage.DisplayUtils.pageElementLoaded("[data-qa-id='cc-rs-dt-div_contact_builder']").then(ele=>{
              document.querySelector("[data-qa-id='cc-rs-dt-div_contact_builder']").addEventListener("click", ()=> {
                  let buttonName = document.querySelector("[data-qa-id='cc-rs-dt-div_contact_builder']").innerText.trim();
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton " + buttonName,
                  });
              });
            }),
            
            //Ciencuadras WEB  - Boton Dudas
            Evergage.DisplayUtils.pageElementLoaded("[data-qa-id='cc-rs-dt-div_on_have_doubts']").then(ele=>{
              document.querySelector("[data-qa-id='cc-rs-dt-div_on_have_doubts']").addEventListener("click", ()=> {
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton ¿Aún tienes dudas? ¡Hablemos!",
                  });
              });    
            }),
            //Ciencuadras WEB  - Boton Continuar
            Evergage.DisplayUtils.pageElementLoaded(".container.project-contact").then(ele=>{
              document.querySelector(".ccbutton.button.button.block.secondary.rounded").addEventListener("click", ()=> {
                  let username = document.querySelector("[id='mat-input-0']");
                  let email = document.querySelector("[id='mat-input-1']");
                  let phoneNum = document.querySelector("[id='mat-input-2']");
                  let docType = document.querySelector("[id='mat-select-value-3']");
                  console.log('MCP - docType', docType);
                  console.log('MCP - docNum', docNum);
                  
                  let opt = document.querySelector('mat-checkbox.mat-checkbox-checked input[type="checkbox"]');
                  
                  if(username && email && phoneNum && docType && docNum && opt){
                      console.log('MCP- entro al if');
                      let userVl = username.value;
                      let emailVl = email.value;
                      let phoneVl = phoneNum.value;
                      let doctypeVl = docType.innerText.trim();
                      let docNumVl = docNum.value;
                      let optVl = opt.checked;
                      let customerIdent = doctypeVl.split('-')[0].trim() + docNumVl;
                      
                      Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton continuar",
                      user: {
                            attributes: {
                                name: userVl,
                                customerId: customerIdent,
                                tipoDocumento: doctypeVl,
                                numeroDocumento: docNumVl,
                                emailAddress: emailVl,
                                celular: phoneVl,
                                Optin: optVl
                            }
                        }
                  });
                  }
              });    
            }),
            //Ciencuadras WEB  - Boton Solicitar crédito//
            Evergage.DisplayUtils.pageElementLoaded("button[class='button rounded secondary text-center text-small").then(ele=>{
              document.querySelector("button[class='button rounded secondary text-center text-small").addEventListener("click", ()=> {
                  Evergage.sendEvent({
                      action: "Ciencuadras WEB  - Boton Solicitar crédito"
                  });
              });
                
            }),
            //Ciencuadras WEB  - Boton Comprar seguro//
            Evergage.DisplayUtils.pageElementLoaded("div.horizontal__card.avaluo.seguroHogar div[class='container-button']").then(ele=>{
             document.querySelector("div.horizontal__card.avaluo.seguroHogar div[class='container-button']").addEventListener("click", ()=>{
                 Evergage.sendEvent({
                     action: "Ciencuadras WEB  - Boton Comprar seguro"
                 });
             });   
            }),
           // Ciencuadras WEB - Boton Aplicar Filtros
            Evergage.DisplayUtils.pageElementLoaded(".container.morefilters").then(ele=>{
              document.querySelector("[data-qa-id='cc-rs-rs-btn_apply_filters']").addEventListener("click", ()=> {
                    let place = document.querySelector("[id='mat-input-0']").value;
                    let category = document.querySelector('.morefilters__pagesection').querySelector('.multiple__item--active').innerText;
                    //Tipo de inmueble
                    let buildType = document.querySelector('.morefilters__realestatetype').querySelectorAll('.multiple__item--active');
                    let activeBuildOptions = [];
                    buildType.forEach(item => {
                        let buildTypeItems = item.querySelector('span').innerText.trim();
                        activeBuildOptions.push(buildTypeItems);
                    });
                    //Area
                    let areaMin = document.querySelector("[data-qa-id='cc-rs-rs-input_area_min']").value;
                    let areaMax = document.querySelector("[data-qa-id='cc-rs-rs-input_area_max']").value;

                    //Num de habitaciones
                    let roomNum = document.querySelector("[tagqa='cc-rs-rs-option_rooms']").querySelectorAll('.multiplenumber__item--active');
                    let activeRoomOptions = [];
                    roomNum.forEach(item => {
                        let roomNumItems = item.querySelector('span').innerText.trim();
                        activeRoomOptions.push(roomNumItems);
                    });
                    //Num de baños
                    let bathroomNum = document.querySelector("[tagqa='cc-rs-rs-option_bathrooms']").querySelectorAll('.multiplenumber__item--active');
                    let activeBathroomOptions = [];
                    bathroomNum.forEach(item => {
                        let bathroomNumItems = item.querySelector('span').innerText.trim();
                        activeBathroomOptions.push(bathroomNumItems);
                    });
                    //Num de parqueadero
                    let garageNum = document.querySelector("[tagqa='cc-rs-rs-option_garages']").querySelectorAll('.multiplenumber__item--active');
                    let activeGarageOptions = [];
                    garageNum.forEach(item => {
                        let garageNumItems = item.querySelector('span').innerText.trim();
                        activeGarageOptions.push(garageNumItems);
                    });
                    //Estrato
                    let stratumNum = document.querySelector("[tagqa='cc-rs-rs-option_stratum']").querySelectorAll('.multiplenumber__item--active');
                    let activeStratumOptions = [];
                    stratumNum.forEach(item => {
                        let stratumNumItems = item.querySelector('span').innerText.trim();
                        activeStratumOptions.push(stratumNumItems);
                    });
                    
                    const today = new Date();
                    const formattedDate = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
                    console.log(formattedDate);
                    let rcoObject = {};
                    if(activeBuildOptions.length > 0){
                        rcoObject = {...rcoObject,TipoInmueble: activeBuildOptions}
                    }
                    if(areaMin.length > 0){
                        rcoObject = {...rcoObject,Area: [areaMin]}
                    }
                    if(activeRoomOptions.length > 0){
                        rcoObject = {...rcoObject,Habitaciones: activeRoomOptions}
                    }
                    if(activeBathroomOptions.length > 0){
                        rcoObject = {...rcoObject,Banos: activeBathroomOptions}
                    }
                    if(activeGarageOptions.length > 0){
                        rcoObject = {...rcoObject,Garaje: activeGarageOptions}
                    }
                    if( activeStratumOptions.length > 0){
                        rcoObject = {...rcoObject, Estrato: activeStratumOptions}
                    }

                    Evergage.sendEvent({
                        action: "Ciencuadras WEB  - Boton aplicar filtros",
                        itemAction:Evergage.ItemAction.ViewItem,
                        catalog: {
                            Categoria:{
                                id : category
                            } 
                        },
                        user: {
                            attributes:{
                                ultimaBusqueda: place
                            },
                            profileObjects: {
                                UltimaBusqueda: [
                                    {
                                        id: formattedDate,
                                        relatedCatalogObjects: rcoObject
                                    }
                                ]
                            },
                        }
                    })
                    
                    
                    /*Evergage.sendEvent({
                      
                      Product: {
                              relatedCatalogObjects:{
                              Category : [category],
                              
                          }
                    profileObjects: {
                        TipoInmueble: activeBuildOptions,
                        Area: [areaMin] ,
                        Habitaciones: [activeRoomOptions],
                        Banos: activeBathroomOptions,
                        Garaje: activeGarageOptions,
                        Estrato: activeStratumOptions
                    }
                  });*/
              });    
            }),
            //Menu Servicios y Tramites
            Evergage.DisplayUtils.pageElementLoaded("[id='mat-menu-panel-1']").then(ele => {

                const menuItems = document.querySelectorAll(".mat-focus-indicator.link.menu-options.mat-menu-item");
                
                menuItems.forEach(item => {
                    item.addEventListener("click", (event) => {
                        let label = event.target.innerText;

                        Evergage.sendEvent({
                            action: "Ciencuadras WEB - Opción " + label,
                            
                        });
                    });
                });
            }),
            
            //Menu Servicios y Tramites - Mobile
            Evergage.DisplayUtils.pageElementLoaded("[id='cdk-accordion-child-1']").then(ele => {

                const menuItems = document.querySelectorAll(".mat-focus-indicator.link.offer-options.ng-tns-c47-5.mat-menu-item");
                
                menuItems.forEach(item => {
                    item.addEventListener("click", (event) => {
                        let label = event.target.innerText;

                        Evergage.sendEvent({
                            action: "Ciencuadras WEB - Opción " + label,
                            
                        });
                    });
                });
            })
      ]
      },
       pageTypeDefault: {
          name: "Default Page"
      },      
      pageTypes: [
            //Ciencuadras WEB - Vista Homepage
                {
                name: "Ciencuadras_web_Vista_Homepage",
                isMatch: () => window.location.pathname === "/",
                action: "Ciencuadras web - Vista Homepage",
                listeners:[
                    //Botón Buscar
                    Evergage.listener("click", "button.btnSearch.activeBtn.ng-star-inserted", (event) => {
                        let ciudad = document.querySelector("[id='inputSearch']");
                        let categ = document.querySelector("[id='mat-select-value-1']");
                        let tipoInm = document.querySelector("[id='mat-select-value-3']");
                        
                        if(ciudad && categ && tipoInm){
                            let ciudadVl = ciudad.value;
                            let categVl = categ.innerText;
                            let tipoInmVl = tipoInm.innerText;

                            Evergage.sendEvent({
                            action: "Ciencuadras WEB  - Boton Buscar",
                            user: {
                                attributes:{
                                    ultimaBusqueda: ciudadVl,
                                    busquedaCategory: categVl,
                                    busquedaTipoInmueble: tipoInmVl
                                }
                            }
                            });
                        }
                    }),
                    //Cards hom
                    /*Evergage.listener("click", "div.owl-item.ng-tns-c130-15.ng-trigger.ng-trigger-autoHeight.active.ng-star-inserted", (event) =>{
                                            
                        let nameCard = document.querySelector("h2").textContent;
                        
                        Evergage.sendEvent(
                            {
                            action: `Ciencuadras WEB  -card ${nameCard}`
                            }
                        )
                    })*/
                ],
                onActionEvent: (actionEvent) => {
                    if(actionEvent.action === "Ciencuadras web - Vista Homepage") {
                        document.addEventListener("click",(event)=>{
                             if(event.target.closest("div.owl-item.ng-tns-c130-15.ng-trigger.ng-trigger-autoHeight.active.ng-star-inserted")){
                                let nameCard = document.querySelector("h2").textContent;
                                Evergage.sendEvent(
                                    {
                                    action: `Ciencuadras WEB  -card ${nameCard}`
                                    }
                                )
                            }
                        })
                    }
                    return actionEvent;
                }
                },

                {
                    name: "Ciencuadras_web_inmuebles_inmobiliaria",
                    isMatch: ()=> /^\/publicacion-inmuebles\/inmobiliaria\/?$/.test(window.location.pathname),
                    action: "Ciencuadras WEB - Vista Publicacion inmueble - Inmobiliaria",
                    contentZones: [
                        {
                        name: "mcp_banner_inmuebles_inmobiliaria",
                        selector:"ciencuadras-banner"
                        },
                        {
                            name: "mcp_banner_fijo_inmuebles_inmobiliaria",
                            selector: ".footercontainer"
                        }
                    ],
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
                 //BEGIN REBECA
                            {
                name: "Ciencuadras WEB  - Vista Colombianos Exterior",
                isMatch: () => window.location.pathname === "/colombianos/exterior",
                action: "Ciencuadras WEB  - Vista Colombianos Exterior",
                },

                {
                name: "Ciencuadras WEB - Vista Avaluo",
                isMatch: () => /^\/avaluos-en-linea\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo",
                },

                {
                name: "Ciencuadras WEB - Vista Publicacion inmueble",
                isMatch: () => /^\/publicacion-inmuebles\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.primary.rounded", (event) => {
                    console.log("MCP - click en plan");
                    const planCard = event.target.closest(".owner-card.ng-star-inserted");
                    if (planCard) {
                        const planVl = planCard.querySelector(".owner-card__title").childNodes[0].textContent;
                        Evergage.sendEvent({
                        action: "Ciencuadras WEB  - Boton Plan - " + planVl,
                        });
                    }
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - Vista Publicacion inmueble - Personas",
                isMatch: () => /^\/publicacion-inmuebles\/personas\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble - Personas",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.primary.rounded", (event) => {
                    console.log("MCP - click en plan");
                    const planCard = event.target.closest(".owner-card.ng-star-inserted");
                    if (planCard) {
                        const planVl = planCard.querySelector(".owner-card__title").childNodes[0].textContent;
                        Evergage.sendEvent({
                        action: "Ciencuadras WEB  - Boton Plan - " + planVl,
                        });
                    } else if (event.target.closest(".owner-card__detail.ng-star-inserted")) {
                        const planCard = event.target.closest(".owner-card.ng-star-inserted");
                        if (planCard) {
                        const planVl = planCard.querySelector(".owner-card__title").childNodes[0].textContent;
                        console.log("Este es el nombre del plan: " + planVl);
                        }
                    }
                    }),

                    Evergage.listener("click", ".back", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - regresar" });
                    }),

                    Evergage.listener("click", ".ccbutton.button.button.secondary.block.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - plan de publicacion modal" });
                    }),

                    Evergage.listener("click", ".ccbutton.button.button.secondary.btn-pay.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - ir a pagar" });
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - Vista Publicacion inmueble - Agente Inmobiliario",
                isMatch: () => /^\/publicacion-inmuebles\/agente-inmobiliario\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble - Agente Inmobiliario",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.primary.rounded", (event) => {
                    const planCard = event.target.closest(".owner-card.ng-star-inserted");
                    if (planCard) {
                        const planVl = planCard.querySelector(".owner-card__title").childNodes[0].textContent;
                        Evergage.sendEvent({
                        action: "Ciencuadras WEB  - Boton Plan - " + planVl,
                        });
                    }
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - Vista Publicacion inmueble - Inmobiliaria",
                isMatch: () => /^\/productos\/seleccion-ideal\/constructora\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Publicacion inmueble - Inmobiliaria",
                },

                {
                name: "Ciencuadras WEB - Vista Avaluo - Verificacion Cobertura",
                isMatch: () => /^\/avaluos-en-linea\/verificacion-cobertura\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Verificacion Cobertura",
                listeners: [
                    Evergage.listener("click", ".button.secondary.rounded.mb-base.message-sent-buttons.mt-small", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - verificar cobertura" });
                    }),
                    Evergage.listener("click", ".button.block.rounded.tertiary.text-center.mb-thumb.mt-thumb.text-xsmall.btn-mobile", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - sin cobertura" });
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - Vista Avaluo - Diligenciar Solicitud",
                isMatch: () => /^\/avaluos-en-linea\/diligenciar-solicitud\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Diligenciar Solicitud",
                listeners: [
                    Evergage.listener("click", ".button.secondary.rounded.m-base.text-small", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - formulario avaluo - continuar" });
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - Vista Avaluo - Pago Exitoso",
                isMatch: () => /^\/avaluos-en-linea\/pago-exitoso\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - Vista Avaluo - Pago Exitoso",
                listeners: [
                    Evergage.listener("click", ".button.secondary.rounded.m-base.text-small", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - formulario avaluo - pagar" });
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - vista crear cuenta",
                isMatch: () => window.location.pathname.includes("/publicacion-inmuebles/datos-facturacion"),
                action: "Ciencuadras WEB - vista crear cuenta",
                listeners: [
                    Evergage.DisplayUtils.pageElementLoaded(".ccbutton.button.button.primary.rounded").then(() => {
                    console.log("entro buscar el boton");
                    const botonGuardarRegistro = document.querySelectorAll(".ccbutton.button.button.primary.rounded")[1];
                    if (botonGuardarRegistro) {
                        console.log(`boton ${botonGuardarRegistro.innerText} encontrado`);
                        botonGuardarRegistro.addEventListener("click", () => {
                        Evergage.sendEvent({ action: "Ciencuadras WEB - crear cuenta" });
                        console.log("evento enviado");
                        });
                    } else {
                        console.log("boton guardar mi registro no existe");
                    }
                    }),
                ],
                },

                {
                name: "Ciencuadras WEB - calcula tu credito",
                isMatch: () => /^\/zona-privada\/publicaciones\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - calcula tu credito",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.medium.tertiary.btn-phone.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - calcula tu credito" });
                    }),
                    Evergage.listener("click", ".align-right.custom-theme.ng-star-inserted", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - exportar contactos" });
                    }),
                    Evergage.listener("click", ".mat-tab-list", ()=> {
                        Evergage.sendEvent({action: "Ciencuadras WEB - menu publicaciones"});
                    }),
                    SalesforceInteractions.DisplayUtils.pageElementLoaded("ciencuadras-search-code").then(()=>{
                        console.log("existe este modal")
                    }),
                    Evergage.listener("click", ".private-card__button-pack.ng-star-inserted", ()=>{
                        Evergage.sendEvent({action: "Ciencuadras WEB - acciones con el inmueble"})
                    })
                ],
                },

                {
                name: "Ciencuadras WEB - tipo de inmueble",
                isMatch: () => /^\/publicacion-inmuebles\/publicar\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - tipo de inmueble",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.primary.block.property-type__continue.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - tipo de inmueble" });
                    }),
                    Evergage.listener("click", ".back", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - salir ubicacion de inmueble" });
                    }),
                    Evergage.listener("click", ".ccbutton.button.button.primary.block.container-button__button-continue.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - ubicacion de inmueble" });
                    }),
                    Evergage.listener("click", "ciencuadras-cc-p-toggle", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - activar pin ubicacion" });
                    }),
                ],
                },
                {
                name: "Ciencuadras WEB - editar datos personales",
                isMatch: () => /^\/zona-privada\/perfil\/?$/.test(window.location.pathname),
                action: "Ciencuadras WEB - editar datos personales",
                listeners: [
                    Evergage.listener("click", ".ccbutton.button.button.profile-header__edit__btn.rounded", () => {
                    Evergage.sendEvent({ action: "Ciencuadras WEB - editar datos personales"});
                    }),
                ],
                },

              
              //END REBECA
               //Ciencuadras WEB - Sección Publicación Inmuebles
                {
                name: "Ciencuadras_web_publicacion_planes",
                isMatch: () => window.location.pathname.includes('/publicacion-inmuebles/'),
                action: "Ciencuadras WEB - Planes",
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
                    }),

                    //pendiente revisar
                    Evergage.listener("click", ".owner-card.ng-star-inserted", (event) => {
                        console.log('MCP - click en ver detalle');
                        if(event.target.closest(".owner-card.ng-star-inserted")){
                            let planName = event.target.closest(".owner-card.ng-star-inserted");
                            let planVl = planName.querySelector('.owner-card__title').childNodes[0].textContent;

                            console.log(`click en datelle: ${planVl}`)
                        }
                    })
                ]
              },
              //Ciencuadras WEB - Sección Publicación CustomerType
                {
                name: "Ciencuadras_web_publicacion_inmuebles",
                isMatch: () => window.location.pathname === "/publicacion-inmuebles",
                action: "Ciencuadras WEB - Vista publicar",
                listeners: [
                    //Botón Plan
                    Evergage.listener("click", ".right-arrow.ng-star-inserted", (event) => {
                        console.log('MCP - click en customerType');
                        if(event.target.closest(".card-container")){
                            let btnName = event.target.closest(".card-content");
                            let btnVl = btnName.querySelector('.card-title').childNodes[0].textContent;

                            Evergage.sendEvent({
                                action: "Ciencuadras WEB  - Boton CustomerType",
                                user: {
                                    attributes:{
                                      customerType: btnVl
                                    }
                                }
                            });
                        }
                    })
                ]
              },
              {
                name: "Ciencuadras_web_proyectos_vivienda_nueva",
                isMatch: () => window.location.pathname === "/proyectos-vivienda-nueva",
                action: "Ciencuadras WEB - proyectos vivienda nueva",
                contentZones: [
                    {
                       name: "mcp_poppup_vivienda-nueva",
                    }
                ]
                
              },
              {
                name: "Ciencuadras_web_inmuebles_en_remate",
                isMatch: () => window.location.pathname === "/inmuebles-en-remate",
                action: "Ciencuadras WEB - inmuebles en remate",
                contentZones: [
                    {
                       name: "mcp_poppup_inmuebles_en_remate",
                    }
                ]
                
              },
              {
                name: "Ciencuadras_web_venta",
                isMatch: () => window.location.pathname === "/venta",
                action: "Ciencuadras_web_venta",
                contentZones: [
                    {
                       name: "Ciencuadras_web_venta",
                    }
                ]
                
              },
              {
                name: "Vista - Ciencuadras_web_arriendo",
                isMatch: () => window.location.pathname === "/arriendo",
                action: "Vista -Ciencuadras_web_arriendo",
                contentZones: [
                    {
                       name: "Ciencuadras_web_arriendo",
                    },
                    {
                       name: "sticky_banner_arriendo",
                       selector: "footer[_ngcontent-result-c206]"
                    }
                ]
                
              },
             
         
              //Ciencuadras WEB - Categorias
              {
                name: "Ciencuadras WEB - home categoria",
                action: "Ciencuadras WEB - Vista home categoria",
                isMatch: () => {
                      let pathname = window.location.pathname;
                      switch (pathname) {
                        //case "/proyectos-vivienda-nueva":
                        //case "/inmuebles-en-remate":
                        //case "/venta":
                        //case "/arriendo":
                        case "/servicios-en-linea":
                        case "/colombianos/exterior":
                        case "/inmobiliarias":
                        case "/constructoras":
                        case "/blog":
                          return true;
                        default:
                          return false;
                      }
                },
                itemAction: Evergage.ItemAction.ViewItem,
                
                catalog: {
                  Categoria: {
                    _id: () => {
                      let pathname = window.location.pathname;
                      switch (pathname) {
                        //case "/proyectos-vivienda-nueva":
                          //return "Proyectos Vivienda Nueva";
                        //case "/inmuebles-en-remate":
                          //return "Remates";
                        case "/venta":
                          return "Compra Usado";
                        case "/arriendo":
                          return "Arriendo";
                        case "/servicios-en-linea":
                          return "Servicios en línea";
                        case "/colombianos/exterior":
                          return "Desde el exterior";
                        case "/inmobiliarias":
                          return "Aliados Inmobiliarias";
                        case "/constructoras":
                          return "Aliados Constructoras";
                        case "/blog":
                          return "Blog";
                      }
                    },
                  },
                },
              },
                //Vista Inmuebles
              {
                name: "Ciencuadras_web_inmuebles",
                isMatch : () => {
                    return new Promise((resolve) => {
                        /*let name = document.querySelector('h1.semibold.breadcrum').textContent.trim();
                        if (name.length > 0) {*/
                            resolve(window.location.pathname.includes('/inmueble/') || window.location.pathname.includes('/proyecto-de-vivienda/')) ;
                        //}
                    });
                },
                action: "Ciencuadras WEB - Vista de detalle de producto",
                onActionEvent: (actionEvent) => {
                    if (actionEvent.action === "Ciencuadras WEB - Vista de detalle de producto") {
                        
                        // Vista Inmuebles 2
                        console.log("MCP - before inmueble attributes");
                        
                        function handleScroll() {
                            const scrollPosition = window.scrollY;
                            const windowHeight = window.innerHeight;
                            const documentHeight = document.documentElement.scrollHeight;
                        
                            const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
                        
                            if (scrollPercent >= 35) {
                                window.removeEventListener("scroll", handleScroll);
                        
                                setTimeout(() => {
                                    let obj = {};
                                    let productArray = dataLayer.filter(item => item.event === "view_item");
                                    const lastProduct = productArray[productArray.length - 1].ecommerce.items[0];
                        
                                    if (lastProduct.item_id) { obj = { ...obj, _id: lastProduct.item_id }; } // id
                        
                                    // Nombre con querySelector
                                    const nombreElement = document.querySelector('h1.semibold.breadcrum');
                                    const nombreSubElement = document.querySelector('.semibold.breadcrum-subtext');
                                    
                                    if (nombreElement && nombreSubElement) {
                                        const nombre = nombreElement.textContent.trim();
                                        const nombreSub = nombreSubElement.textContent.trim();
                                        const nombreFinal = `${nombre} ${nombreSub}`;
                                        
                                        console.log(`Nombre encontrado: ${nombre}`);
                                        
                                        obj = {
                                            ...obj,
                                            nombre: nombreFinal,
                                            nombreInmueble: nombre,
                                        };
                                    } else {
                                    console.log('El elemento con el selector "h1.semibold.breadcrum" no se encontró.');
                                }
                        
                                    // Descripción con querySelector (máx. 100 caracteres)
                                    let descripcionElement = document.querySelector('p.expansion-panel__description');
                                    if (descripcionElement) {
                                        let descripcion = descripcionElement.innerText;
                                        if (descripcion.length > 100) {
                                            descripcion = descripcion.substring(0, 97) + '...';
                                        }
                                        obj = { ...obj, descripcion: descripcion };
                                    }
                        
                                    // Precio con querySelector (sin signo y sin puntos)
                                    let precioElement = document.querySelector('span.bold');
                                    if (precioElement) {
                                        let precio = precioElement.innerText.replace(/[^\d]/g, ''); 
                                        obj = { ...obj, precio: precio };
                                    }
                        
                                    // URL e imagen
                                    const picture = document.querySelector(".gallery__image.detail.ng-star-inserted img");

                                    obj = {
                                        ...obj,
                                        url: window.location.href,
                                        imageUrl: picture ? picture.src : "URL de imagen no disponible"
                                    };
                        
                                    // Definiendo los relatedCatalogObjects
                                    let relatedCatalogObjects = {};
                                    if (lastProduct.nro_habitaciones) { relatedCatalogObjects = { ...relatedCatalogObjects, Habitaciones: [String(lastProduct.nro_habitaciones)] }; }
                                    if (lastProduct.nro_banos) { relatedCatalogObjects = { ...relatedCatalogObjects, Baños: [String(lastProduct.nro_banos)] }; }
                                    if (lastProduct.nro_parquederos) { relatedCatalogObjects = { ...relatedCatalogObjects, Garaje: [String(lastProduct.nro_parquederos)] }; }
                                    if (lastProduct.area_inmueble) { relatedCatalogObjects = { ...relatedCatalogObjects, Area: [String(lastProduct.area_inmueble)] }; }
                                    if (lastProduct.estrato) { relatedCatalogObjects = { ...relatedCatalogObjects, Estrato: [String(lastProduct.estrato)] }; }
                                    if (lastProduct.item_category3) { relatedCatalogObjects = { ...relatedCatalogObjects, TipoInmueble: [String(lastProduct.item_category3)] }; }
                                    if (lastProduct.departamento) { relatedCatalogObjects = { ...relatedCatalogObjects, Departamento: [String(lastProduct.departamento)] }; }
                                    if (lastProduct.item_category2) { relatedCatalogObjects = { ...relatedCatalogObjects, Ciudad: [String(lastProduct.item_category2)] }; }
                        
                                    // Barrio y Localidad con querySelector
                                    let barrioElement = document.querySelector('a[data-qa-id="_route_4"]');
                                    if (barrioElement) {
                                        let barrio = barrioElement.innerText;
                                        relatedCatalogObjects = { ...relatedCatalogObjects, Barrio: [barrio] };
                                    }
                        
                                    let localidadElement = document.querySelector('a[data-qa-id="_route_3"]');
                                    if (localidadElement) {
                                        let localidad = localidadElement.innerText;
                                        relatedCatalogObjects = { ...relatedCatalogObjects, Localidad: [localidad] };
                                    }
                        
                                    // Agregando relatedCatalogObjects si tiene valores
                                    if (Object.keys(relatedCatalogObjects).length > 0) {
                                        obj = { ...obj, relatedCatalogObjects: relatedCatalogObjects };
                                    }
                        
                                    // Categoria
                                    const categoria = () => {
                                        return new Promise((resolve) => {
                                            const dataLayerEvent = window.dataLayer.find(event => event.event === 'view_item');
                                            if (dataLayerEvent && dataLayerEvent.ecommerce && dataLayerEvent.ecommerce.items.length > 0) {
                                                const type = dataLayerEvent.ecommerce.items[0].item_variant;
                                                const code = dataLayerEvent.ecommerce.items[0].item_id;
                                                if (type.includes('Arriendo')) {
                                                    resolve(['Arriendo']);
                                                }
                                                if (type.includes('Venta') || type.includes('venta')) {
                                                    if (code.includes('P')) {
                                                        resolve(['Compra Nuevo']);
                                                    } else {
                                                        resolve(['Compra Usado']);
                                                    }
                                                }
                                            } else {
                                                resolve([0]);
                                            }
                                        });
                                    };
                        
                                    categoria().then(categoriaValue => {
                                        if (categoriaValue[0] !== 0) {
                                            relatedCatalogObjects = { ...relatedCatalogObjects, Categoria: [categoriaValue[0]] };
                                            obj = { ...obj, relatedCatalogObjects: relatedCatalogObjects };
                                        }
                        
                                        if (window.location.pathname.split("/").length === 4) {
                                            obj = {
                                                ...obj,
                                                sku: {
                                                    codeProyect: window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]
                                                        .split("-")
                                                        .slice(-1)[0]
                                                }
                                            };
                                        }
                        
                                        if (Object.keys(obj).length > 0) {
                                            Evergage.sendEvent({
                                                itemAction: Evergage.ItemAction.ViewItem,
                                                catalog: {
                                                    Inmueble: obj
                                                }
                                            });
                                        }
                                    });
                                }, 1000);
                            }
                        }
                        window.addEventListener("scroll", handleScroll);
                        
                        
                        
                        
                listeners: [
                    Evergage.listener('click', "#mat-tab-label-0-0", () => {
                        Evergage.sendEvent({
                            action: 'Ciencuadras WEB  - Boton contactar'
                        });
                    }),
                    //web
                    Evergage.listener('click', "#mat-tab-label-0-1", () => {
                        Evergage.sendEvent({
                            action: 'Ciencuadras WEB  - Boton hacer oferta'
                        });
                    }),
                    //mobile
                    Evergage.listener('click', ".ccbutton.button.outline.block.tertiary.btn-offer.rounded", () => {
                        Evergage.sendEvent({
                            action: 'Ciencuadras WEB  - Boton hacer oferta'
                        });
                    }),
                    //web
                   /* Evergage.listener('click', "[data-qa-id='cc-rs-dt-btn_send_offer']", () => {
                        console.log('MCP - click en realizar oferta');
                        let offerVl = document.querySelector('[data-qa-id="cc-rs-dt-input-offer"]').value;
                        let phoneNumber = document.querySelector('#mat-input-15').value;
                        if(window.innerWidth > 1279){
                            Evergage.sendEvent({
                                action: 'Ciencuadras WEB  - Boton realizar oferta',
                                user: {
                                    attributes: {
                                        celular: phoneNumber,
                                        valorOferta: offerVl
                                    }
                                }
                            });
                        }
                        
                    })*/
                ],
                        
                        document.addEventListener("click", e=>{
                            //realizar oferta 
                            //mobile
                            if (e.target.closest(".modal-xs.noCustomStyles .submit button")) {
                                let numCel = document.querySelector(".modal-xs.noCustomStyles .phone-input input").value.split(".").join("");
                                let precioOf = document.querySelector(".modal-xs.noCustomStyles .offer-input input").value.split(".").join("");
                                if(numCel && precioOf) {
                                    Evergage.sendEvent({
                                        action: 'Ciencuadras WEB  - Boton realizar oferta',
                                        user: {
                                            attributes: {
                                                celular: numCel,
                                                valorOferta: precioOf
                                            }
                                        }
                                    });
                                }
                            }
                            //desktop
                            if (e.target.closest("[data-qa-id='cc-rs-dt-btn_send_offer']")) {
                                let offerVl =document.querySelector('[data-qa-id="cc-rs-dt-input-offer"]').value.split(".").join("");
                                let phoneNumber = document.querySelector('.phone-input input').value;
                                if(phoneNumber.length > 0 && offerVl.length > 0) {
                                    Evergage.sendEvent({
                                        action: 'Ciencuadras WEB  - Boton realizar oferta',
                                        user: {
                                            attributes: {
                                                celular:phoneNumber,
                                                valorOferta: offerVl
                                            }
                                        }
                                    });
                                }
                            }
                            //ver telefonos 
                            //mobile

                            if(e.target.closest("[data-qa-id='cc-rs-dt-expansion_panel_contact'] button#buttoncontact")){
                                  Evergage.sendEvent({
                                      action: "Ciencuadras WEB  - Boton Ver Telefonos"
                                  });
                                
                            }
                            
                        })
                    }
                    return actionEvent;
                }
              }
          ]
          //damian
          
    };
    const handleSPAPageChange = () => {
        let url = window.location.href;
        const urlChangeInterval = setInterval(() => {
            if (url !== window.location.href) {
                url = window.location.href;
                Evergage.reinit();
            }
        }, 1000);
    };
                            
    handleSPAPageChange();
    
    Evergage.initSitemap(sitemapConfig); 
  });