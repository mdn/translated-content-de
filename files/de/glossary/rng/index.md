---
title: Zufallsgenerator
slug: Glossary/RNG
l10n:
  sourceCommit: c8522f47d8123fe529f39851b13b9fc01345ffbf
---

Ein **PRNG** (Pseudozufallszahlengenerator) ist ein Algorithmus, der Zahlen in einem komplexen, scheinbar unvorhersehbaren Muster ausgibt. Echte Zufallszahlen (zum Beispiel aus einer radioaktiven Quelle) sind absolut unvorhersehbar, während alle Algorithmen vorhersagbar sind und ein PRNG bei denselben Startparametern oder _seed_ dieselben Zahlen zurückgibt.

PRNGs können für eine Vielzahl von Anwendungen verwendet werden, wie zum Beispiel Spiele.

Ein kryptographisch sicherer PRNG ist ein PRNG mit bestimmten zusätzlichen Eigenschaften, die ihn für den Einsatz in der Kryptographie geeignet machen. Dazu gehören:

- dass es für einen Angreifer (ohne Kenntnis des Seeds) rechnerisch nicht machbar ist, seine Ausgabe vorherzusagen
- dass, wenn ein Angreifer seinen aktuellen Zustand herausfinden kann, dies dem Angreifer nicht ermöglichen sollte, zuvor ausgegebene Zahlen zu ermitteln.

Die meisten PRNGs sind nicht kryptografisch sicher.

## Siehe auch

- JavaScript's {{jsxref("Math.random()")}} und CSS's {{cssxref("random()")}} eingebaute PRNG-Funktionen. Beachten Sie, dass diese keinen kryptografisch sicheren PRNG darstellen.
- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues): Diese Funktion ist dazu gedacht, kryptografisch sichere Zahlen bereitzustellen.
- [Pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) auf Wikipedia
