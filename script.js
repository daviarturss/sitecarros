document.getElementById('sim-form').addEventListener('submit', e=>{
e.preventDefault();
const valor = parseFloat(new FormData(e.target).get('valor')) || 0;
const entrada = parseFloat(new FormData(e.target).get('entrada')) || 0;
const prazo = parseInt(new FormData(e.target).get('prazo').replace('x','')) || 36;
const taxa = 0.0129; // 1,29% a.m.
const saldo = Math.max(valor - entrada,0);
if(saldo<=0){document.getElementById('resultado').textContent='Valor inválido';return}
const parcela = saldo * taxa * Math.pow(1+taxa, prazo) / (Math.pow(1+taxa, prazo)-1);
document.getElementById('resultado').textContent = `Parcela estimada: R$ ${parcela.toFixed(2)} /mês*`;
document.getElementById('resultado').textContent += '\n*Simulação ilustrativa';
});

document.getElementById('form-venda').addEventListener('submit', e=>{
e.preventDefault();
alert('Obrigado! Nossa equipe entrará em contato via WhatsApp em até 30 minutos.');
e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
const id=a.getAttribute('href');
if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
});
});
