---
title: Random Number Generator
slug: Glossary/RNG
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **PRNG** (pseudorandom number generator) ist ein Algorithmus, der Zahlen in einem komplexen, scheinbar unvorhersehbaren Muster ausgibt. Wirklich zufällige Zahlen (zum Beispiel von einer radioaktiven Quelle) sind absolut unvorhersehbar, während alle Algorithmen vorhersagbar sind und ein PRNG die gleichen Zahlen zurückgibt, wenn es mit den gleichen Startparameter oder _Seed_ ausgeführt wird.

PRNGs können für eine Vielzahl von Anwendungen genutzt werden, wie zum Beispiel Spiele.

Ein kryptographisch sicherer PRNG ist ein PRNG mit bestimmten zusätzlichen Eigenschaften, die ihn für den Einsatz in der Kryptographie geeignet machen. Dazu gehören:

- dass es rechnerisch nicht machbar ist, dass ein Angreifer (ohne Kenntnis des Seeds) seine Ausgabe vorhersagt
- dass, wenn ein Angreifer seinen aktuellen Zustand ermitteln kann, dies dem Angreifer nicht ermöglichen sollte, zuvor ausgegebene Zahlen zu ermitteln.

Die meisten PRNGs sind nicht kryptographisch sicher.

## Siehe auch

- [Pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) auf Wikipedia
- {{jsxref("Math.random()")}}, eine eingebaute JavaScript-PRNG-Funktion. Beachten Sie, dass dies kein kryptographisch sicherer PRNG ist.
- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues): Dies ist darauf ausgelegt, kryptographisch sichere Zahlen bereitzustellen.
