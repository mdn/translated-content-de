---
title: Zufallszahlengenerator
slug: Glossary/RNG
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **PRNG** (pseudorandom number generator) ist ein Algorithmus, der Zahlen in einem komplexen, scheinbar unvorhersehbaren Muster ausgibt. Wirklich zufällige Zahlen (zum Beispiel von einer radioaktiven Quelle) sind völlig unvorhersehbar, während alle Algorithmen vorhersehbar sind, und ein PRNG die gleichen Zahlen ausgibt, wenn er mit den gleichen Startparametern oder einem _Seed_ verwendet wird.

PRNGs können für eine Vielzahl von Anwendungen verwendet werden, wie zum Beispiel in Spielen.

Ein kryptographisch sicherer PRNG ist ein PRNG mit bestimmten zusätzlichen Eigenschaften, die ihn für die Verwendung in der Kryptographie geeignet machen. Diese umfassen:

- dass es für einen Angreifer (ohne Kenntnis des Seeds) rechnerisch unpraktikabel ist, seine Ausgabe vorherzusagen
- dass wenn ein Angreifer seinen aktuellen Zustand herausfinden kann, dies den Angreifer nicht in die Lage versetzen sollte, zuvor ausgegebene Zahlen herauszufinden.

Die meisten PRNGs sind nicht kryptographisch sicher.

## Siehe auch

- [Pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) auf Wikipedia
- {{jsxref("Math.random()")}}, eine eingebaute JavaScript-PRNG-Funktion. Beachten Sie, dass dies kein kryptographisch sicherer PRNG ist.
- {{domxref("Crypto.getRandomValues()")}}: Dies ist dazu gedacht, kryptographisch sichere Zahlen bereitzustellen.
