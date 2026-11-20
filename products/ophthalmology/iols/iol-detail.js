(() => {
  const product = document.body.dataset.product;
  const data = {
    'spirant-cla': {
      brand:'SPIRANT',name:'CLA',full:'SPIRANT CLA',model:'PVB105CLA',category:'Monofocal (Clear)',material:'Spirant / Co-polymer',image:'/assets/iol/spirant-cla.png',
      overview:'SPIRANT CLA is listed in the supplied portfolio as a clear monofocal IOL. The supplied packaging describes a hydrophilic IOL with a negative aspheric optic design.',
      features:['Negative Aspheric Optic Design (as stated on packaging)','Packaging also identifies the product as a Hydrophilic IOL.'],
      materialNote:'Material terminology requires confirmation: the supplied portfolio classification is “Spirant / Co-polymer”, while the product packaging states “Hydrophilic IOL”. These descriptions are shown separately and have not been reconciled.',
      optic:'Negative aspheric (packaging statement)'
    },
    'strident-scolorito': {
      brand:'STRIDENT',name:'SCOLORITO',full:'STRIDENT SCOLORITO',model:'DRVVB100SCA',category:'Monofocal (Clear)',material:'Strident / Hydrophobic',image:'/assets/iol/strident-scolorito.png',
      overview:'STRIDENT SCOLORITO is listed as a clear monofocal hydrophobic IOL. Supplied packaging describes a negative aspheric optic design and a contrast sensitivity enhancement feature.',
      features:['Negative Aspheric Optic Design','Contrast sensitivity enhancement (packaging statement)'],
      materialNote:'The product packaging identifies this as a hydrophobic acrylic foldable IOL. Further material and dimensional specifications will be added after verification against official product literature.',
      optic:'Negative aspheric (packaging statement)'
    },
    'spirant-edof': {
      brand:'SPIRANT',name:'EDOF',full:'SPIRANT EDOF',model:'PVB105CLS',category:'EDOF',material:'Spirant / Co-polymer',image:'/assets/iol/spirant-edof.png',
      overview:'SPIRANT EDOF is described on the supplied packaging as a single-piece posterior chamber IOL and an acrylic foldable aspheric EDOF IOL.',
      features:['Single-piece posterior chamber IOL (packaging statement)','Acrylic foldable aspheric EDOF IOL (packaging statement)'],
      materialNote:'The supplied portfolio classifies this product as Spirant / Co-polymer. The packaging wording “acrylic foldable” is retained as a separate supplied description pending verification of the exact material terminology.',
      optic:'Aspheric (packaging statement)'
    },
    'strident-edof': {
      brand:'STRIDENT',name:'EDOF',full:'STRIDENT EDOF',model:'Awaiting confirmation',category:'EDOF',material:'Strident / Hydrophobic',image:null,
      overview:'This product entry is reserved for STRIDENT EDOF. The model number, official product photograph and verified product literature have not yet been supplied.',
      features:['Product entry pending verified model and product literature.'],
      materialNote:'Material classification follows the supplied portfolio instruction: Strident / Hydrophobic. Confirm against official product literature before publishing detailed technical claims.',
      optic:'Pending verification'
    },
    'spirant-autofocus-pro': {
      brand:'SPIRANT',name:'AUTOFOCUS PRO',full:'SPIRANT AUTOFOCUS PRO',model:'Awaiting confirmation',category:'Autofocus Pro',material:'Spirant / Co-polymer',image:'/assets/iol/spirant-autofocus-pro.png',
      overview:'SPIRANT AUTOFOCUS PRO is described on the supplied packaging as a Progressive Polyfocal Intra Ocular Lens. The packaging also lists aspheric, clear and foldable acrylic descriptors.',
      features:['Progressive Polyfocal Intra Ocular Lens (packaging statement)','Aspheric','Clear','Foldable Acrylic (packaging statement)'],
      materialNote:'The supplied portfolio classification is Spirant / Co-polymer. Packaging terminology is retained separately; confirm the exact material description and model number against official product literature.',
      optic:'Aspheric (packaging statement)'
    },
    'strident-autofocus-pro': {
      brand:'STRIDENT',name:'AUTOFOCUS PRO',full:'STRIDENT AUTOFOCUS PRO',model:'VVB10ASCA',category:'Autofocus Pro',material:'Strident / Hydrophobic',image:'/assets/iol/strident-autofocus-pro.png',
      overview:'STRIDENT AUTOFOCUS PRO is listed in the supplied portfolio as a hydrophobic Autofocus Pro IOL. Supplied packaging describes an aspheric, hydrophobic, foldable acrylic lens. Earlier supplied product information also identifies a design without diffractive rings.',
      features:['Aspheric (packaging statement)','Hydrophobic (packaging statement)','Foldable Acrylic (packaging statement)','Without diffractive rings (previously supplied product description; verify before clinical use)'],
      materialNote:'Material classification follows the supplied portfolio instruction: Strident / Hydrophobic. The packaging description and the ringless design statement should be verified against current official product literature.',
      optic:'Aspheric (packaging statement)'
    }
  };
  const d=data[product]; if(!d) return;
  const $=id=>document.getElementById(id);
  $('productName').textContent=d.name; $('productBrand').textContent=d.brand; $('productFullName').textContent=d.full; $('productModel').textContent='Model: '+d.model; $('productCategory').textContent=d.category; $('productMaterial').textContent=d.material; $('productOverview').textContent=d.overview; $('materialNote').textContent=d.materialNote;
  const img=$('productImage'); if(d.image){img.src=d.image;img.alt='Original '+d.full+' product photograph';}else{img.remove();$('imagePending').hidden=false;}
  const featureList=$('featureList'); d.features.forEach(t=>{const li=document.createElement('li');li.textContent=t;featureList.appendChild(li);});
  $('opticDesign').textContent=d.optic;
  const pending='Pending – to be added after verification';
  ['opticDiameter','overallDiameter','powers','aConstant','hapticDesign'].forEach(id=>$(id).textContent=pending);
  $('year').textContent=new Date().getFullYear();
  const backdrop=$('enquiryBackdrop'); const open=()=>{backdrop.classList.add('open');backdrop.setAttribute('aria-hidden','false');$('closeModal').focus();}; const close=()=>{backdrop.classList.remove('open');backdrop.setAttribute('aria-hidden','true');$('requestInfo').focus();};
  $('requestInfo').addEventListener('click',open); $('closeModal').addEventListener('click',close); backdrop.addEventListener('click',e=>{if(e.target===backdrop)close();}); document.addEventListener('keydown',e=>{if(e.key==='Escape'&&backdrop.classList.contains('open'))close();});
  const subject=encodeURIComponent('Product information request: '+d.full+' ('+d.model+')');
  const body=encodeURIComponent('Hello ViLYNC Medtech,\n\nI would like to request more information about:\n\nProduct: '+d.full+'\nModel: '+d.model+'\n\nPlease share the product specifications, brochure and pricing details.\n\nThank you.');
  $('emailChoice').href='mailto:sales@vilyncmedtech.com?subject='+subject+'&body='+body;
  $('whatsappChoice').href='https://wa.me/918188886788?text='+body;
})();
