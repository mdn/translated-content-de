---
title: action.getBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/getBadgeText
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft den Text des Browser-Action-Badges ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingText = browser.action.getBadgeText(
  details               // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Gibt die Registerkarte an, von der der Badge-Text abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, von dem der Badge-Text abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Badge-Text zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Badge-Text enthält.

## Beispiele

Protokollierung des Badge-Texts:

```js
function gotBadgeText(text) {
  console.log(text);
}

let gettingBadgeText = browser.action.getBadgeText({});
gettingBadgeText.then(gotBadgeText);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getBadgeText) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter der Voraussetzung erlaubt, dass die folgenden Bedingungen
// erfüllt sind:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Bedingungsliste und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Copyright-Hinweis, diese Bedingungsliste und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung einhergehen, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen dazu verwendet werden, Produkte, die aus dieser Software
// abgeleitet wurden, zu empfehlen oder zu bewerben, ohne eine spezifische vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SOLLTEN DIE INHABER UND MITWIRKENDEN FÜR DIREKTE, INDIREKTE, NEBEN-,
// SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; VERLUST DER NUTZUNG,
// VON DATEN ODER GEWINNEN; ODER BETRIEBSUNTERBRECHUNG) HAFTBAR GEMACHT WERDEN, WIE AUCH
// IMMER VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG,
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERER),
// DIE AUF IRGENDEINE WEISE AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN
// AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
