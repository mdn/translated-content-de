---
title: browserAction.getBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeBackgroundColor
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermittelt die Hintergrundfarbe des Badges der Browser-Aktion.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.browserAction.getBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Gibt den Tab an, von dem die Hintergrundfarbe des Badges ermittelt werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, von dem die Hintergrundfarbe des Badges ermittelt werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird die globale Hintergrundfarbe des Badges zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('browserAction.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren der Hintergrundfarbe des Badges:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeBackgroundColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getBadgeBackgroundColor) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverteilung und Verwendung in Quell- und Binärformen, mit oder ohne
// Veränderungen, sind unter den folgenden Bedingungen zulässig:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diesen Bedingungstext und den folgenden Haftungsausschluss behalten.
//    * Weiterverteilungen in Binärform müssen den obigen Copyright-Hinweis,
// diesen Bedingungstext und den folgenden Haftungsausschluss in der
// Dokumentation und/oder in anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software entstehen, ohne vorherige ausdrückliche schriftliche Genehmigung
// zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER KONKLUDENTEN
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE KONKLUDENTE
// GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHT-INHABER ODER MITWIRKENDE
// HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; VERLUST VON
// NUTZUNG, DATEN ODER GEWINNEN; ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART, DIE
// AUF JEGLICHE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN
// AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
