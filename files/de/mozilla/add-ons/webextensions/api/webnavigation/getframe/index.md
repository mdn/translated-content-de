---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab sein oder ein verschachteltes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), und ist eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameter

- `details`
  - : `object`. Informationen über den Frame, zu dem Informationen abgerufen werden sollen.
    - `tabId`
      - : `integer`. Die ID des Tabs, in dem sich der Frame befindet.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt wurde, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
    - `frameId`
      - : `integer`. Die ID des Frames im angegebenen Tab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das entweder mit einem Objekt mit den folgenden Eigenschaften erfüllt wird:

- `errorOccurred`
  - : `boolean`. Wahr, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis ausgelöst wurde.
- `url`
  - : `string`. Die aktuell mit diesem Frame assoziierte URL, falls der durch `frameId` identifizierte Frame zu einem bestimmten Zeitpunkt im durch `tabId` identifizierten Tab existierte. Die Tatsache, dass eine URL mit einer bestimmten `frameId` assoziiert ist, impliziert nicht, dass der entsprechende Frame noch existiert.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Diese ist -1, wenn es keinen übergeordneten Frame gibt: Das heißt, wenn dieser Frame der oberste Browser-Kontext im Tab ist.

Wenn der Tab verworfen wird, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn die angegebene Tab- oder Frame-ID nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537,
});

// Edge specific - processId is required not optional, must be integer not null
// let gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getFrame)-API von Chromium. Diese Dokumentation ist aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-
//      Vermerk, diese Liste von Bedingungen und den folgenden Haftungsausschluss
//      enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Copyright-
//      Vermerk, diese Liste von Bedingungen und den folgenden Haftungsausschluss
//      in der Dokumentation und/oder anderen Materialien enthalten, die mit der
//      Verbreitung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen seiner
//      Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
//      abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige
//      schriftliche Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
//      "WIE BEFINDLICH" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
//      IMPLIZIERTE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
//      DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG
//      FÜR EINEN BESTIMMTEN ZWECK SIND AUSGESCHLOSSEN. IN KEINEM FALL
//      SIND DIE URHEBERRECHTSINHABER ODER MITWIRKENDE HAFTBAR FÜR
//      DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER
//      FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
//      BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
//      DATEN ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART
//      UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB AUS VERTRAG,
//      STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
//      ODER ANDERWEITIG) ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
//      SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
