/* eslint-disable no-undef */

test('Verifica palavras dentro de um array', () => {
  const cestaDeFrutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Melancia', 'Pera'];

  expect(cestaDeFrutas).toContain('Uva');
});

test('Verifica se não há aquele nome', () => {
  const cestaDeFrutas = ['Pera', 'Maçã', 'Manga', 'Melancia', 'Pera']; // Sem uva

  expect(cestaDeFrutas).toContain('Uva');
});
