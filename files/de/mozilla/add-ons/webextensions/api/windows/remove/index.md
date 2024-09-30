---
title: windows.remove()
slug: Mozilla/Add-ons/WebExtensions/API/windows/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Schließt ein Fenster und alle darin enthaltenen Tabs, basierend auf der ID des Fensters.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.windows.remove(
  windowId        // integer
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, das geschlossen werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Fenster geschlossen wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Symbol einer Browser-Aktion klickt, schließen Sie das Fenster, in dem das Symbol angeklickt wurde:

```js
function onRemoved() {
  console.log(`Removed window`);
}

function onError(error) {
  console.error(`Error:`, error);
}

browser.browserAction.onClicked.addListener((tab) => {
  let removing = browser.windows.remove(tab.windowId);
  removing.then(onRemoved, onError);
});
```

Schließen Sie das aktuelle, z. B. Popup-Fenster, wenn der Benutzer auf eine Schaltfläche auf der Seite klickt:

```js
// in a script loaded by the page in the window
document.querySelector("#close").addEventListener(async ({ button }) => {
  try {
    if (button) return; // not a left click
    const windowId = (await browser.windows.getCurrent()).id;
    await browser.windows.remove(windowId);
    // this point will never be reached, since the window is gone
  } catch (error) {
    console.error("Closing failed:", error);
  }
});
```

In Firefox könnte dies mit der `.allowScriptsToClose`-Eigenschaft des Fenstererstellungsprozesses und `window.close()` erreicht werden.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-remove). Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Vervielfältigung und Verwendung des Quellcodes und der binären Formen, 
// mit oder ohne Änderungen, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss in der 
// Dokumentation und/oder anderen Materialien, die mit der Verteilung geliefert 
// werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner Mitwirkenden 
// dürfen verwendet werden, um Produkte, die aus dieser Software abgeleitet 
// wurden, ohne vorherige ausdrückliche schriftliche Genehmigung zu unterstützen 
// oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN "WIE BESEHEN" 
// BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDEN GARANTIEN, 
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GARANTIEN 
// DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK SIND 
// AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN 
// HAFTBAR FÜR DIREKTE, INDIREKTE, BEILÄUFIGE, SPEZIELLE, EXEMPLARISCHE ODER 
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG 
// VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER GEWINNE; 
// ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART UND WEISE UND UNTER JEDEM 
// HAFTUNGSPRINZIP, OB IN VERTRAG, STRIKTHAFTUNG ODER UNERLAUBTER HANDLUNG 
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER NUTZUNG 
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN 
// HINGEWIESEN WURDE.
-->
