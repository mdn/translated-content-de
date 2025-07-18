---
title: extension.isAllowedIncognitoAccess()
slug: Mozilla/Add-ons/WebExtensions/API/extension/isAllowedIncognitoAccess
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Prüft, ob die Erweiterung Zugriff auf Tabs im "Privatbrowsing"-Modus hat.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let isAllowed = browser.extension.isAllowedIncognitoAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem boolean erfüllt wird: `true`, wenn die Erweiterung Zugriff auf private Tabs hat, `false` andernfalls.

## Beispiele

```js
function logIsAllowed(answer) {
  console.log(`Is allowed: ${answer}`);
}

let isAllowed = browser.extension.isAllowedIncognitoAccess();
isAllowed.then(logIsAllowed);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-isAllowedIncognitoAccess) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, reproduzieren.
//    * Weder der Name Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet werden, ohne vorherige schriftliche Zustimmung
// zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE COPYRIGHT-INHABER
// ODER MITWIRKENDEN HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, SPEZIELLE,
// BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN
// ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER
// JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, KLAUSEL ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DER NUTZUNG DER SOFTWARE
// ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WIRD.
-->
