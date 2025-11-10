---
title: Zufallszahlengenerator
slug: Glossary/RNG
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **PRNG** (pseudorandom number generator) ist ein Algorithmus, der Zahlen in einem komplexen, scheinbar unvorhersehbaren Muster ausgibt. Wirklich zufällige Zahlen (zum Beispiel von einer radioaktiven Quelle) sind völlig unvorhersehbar, während alle Algorithmen vorhersehbar sind, und ein PRNG gibt die gleichen Zahlen aus, wenn er mit denselben Startparametern oder _Seed_ gestartet wird.

PRNGs können für eine Vielzahl von Anwendungen verwendet werden, wie zum Beispiel Spiele.

Ein kryptografisch sicherer PRNG ist ein PRNG mit bestimmten zusätzlichen Eigenschaften, die ihn für den Einsatz in der Kryptografie geeignet machen. Diese beinhalten:

- dass es für einen Angreifer (ohne Kenntnis des Seeds) rechnerisch nicht möglich ist, seine Ausgabe vorherzusagen
- dass, wenn ein Angreifer seinen aktuellen Zustand herausfinden kann, dies den Angreifer nicht in die Lage versetzen sollte, zuvor ausgegebene Zahlen herauszufinden.

Die meisten PRNGs sind nicht kryptografisch sicher.

## Siehe auch

- [Pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) auf Wikipedia
- {{jsxref("Math.random()")}}, eine eingebaute JavaScript-PRNG-Funktion. Beachten Sie, dass dies kein kryptografisch sicherer PRNG ist.
- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues): dies ist vorgesehen, um kryptografisch sichere Zahlen bereitzustellen.
