function pwCalc()
{
  var C = document.getElementById("fin_mr_num").value / (document.getElementById("fin_mr_den").value * 1.0 + document.getElementById("fin_mr_num").value * 1.0) * (document.getElementById("pw_mr_den").value * 1.0 + document.getElementById("pw_mr_num").value * 1.0) / document.getElementById("pw_mr_num").value;
  document.getElementById("premixConcentration").innerHTML = `${(C * 100).toFixed(2)} %`;
  document.getElementById("detergent_vol").innerHTML = `${(C * document.getElementById("premix_vol").value).toFixed(4)} gal = ${(C * document.getElementById("premix_vol").value * 128).toFixed(1)} fl. oz`;
  // document.getElementById("detergent_vol_oz").innerHTML = `${(C * document.getElementById("premix_vol").value * 128).toFixed(1)} fl. oz`;
  document.getElementById("water_vol").innerHTML = `${((1-C) * document.getElementById("premix_vol").value).toFixed(4)} gal = ${((1-C) * document.getElementById("premix_vol").value * 128).toFixed(1)} fl. oz`;
  // document.getElementById("water_vol_oz").innerHTML = `${((1-C) * document.getElementById("premix_vol").value * 128).toFixed(1)} fl. oz`;
}
// function pwCalc()
// {
//   var C = document.getElementById("fin_mr_num").value / (document.getElementById("fin_mr_den").value * 1.0 + document.getElementById("fin_mr_num").value * 1.0) * (document.getElementById("pw_mr_den").value * 1.0 + document.getElementById("pw_mr_num").value * 1.0) / document.getElementById("pw_mr_num").value;
//   document.getElementById("premixConcentration").value = (C * 100).toFixed(2);
//   document.getElementById("detergent_vol").value = (C * document.getElementById("premix_vol").value).toFixed(4);
//   document.getElementById("detergent_vol_oz").value = (C * document.getElementById("premix_vol").value * 128).toFixed(1);
//   document.getElementById("water_vol").value = ((1-C) * document.getElementById("premix_vol").value).toFixed(4);
//   document.getElementById("water_vol_oz").value = ((1-C) * document.getElementById("premix_vol").value * 128).toFixed(1);
// }