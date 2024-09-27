---
title: menus.removeAll()
slug: Mozilla/Add-ons/WebExtensions/API/menus/removeAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt alle von der Erweiterung hinzugefügten Menüpunkte.

Zur Kompatibilität mit anderen Browsern stellt Firefox diese Methode sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` zur Verfügung.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.menus.removeAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle Elemente entfernt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel fügt zwei Menüpunkte hinzu. Wenn der Benutzer auf den mit "Remove all!" beschrifteten Punkt klickt, entfernt die Erweiterung beide Punkte mit `removeAll()`.

```js
function onRemoved() {
  console.log("items removed successfully");
}

browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.create({
  id: "remove-all",
  title: "Remove all!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "remove-all") {
    let removing = browser.menus.removeAll();
    removing.then(onRemoved);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-removeAll) API. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

<!--
Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.

Weiterverbreitung und Nutzung in sowohl Quell- als auch Binärformen, mit oder ohne
Änderung, sind unter den folgenden Bedingungen zulässig:

   * Weiterverbreitungen des Quellcodes müssen das obige Urheberrecht
     sowie diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
   * Weiterverbreitungen in binärer Form müssen das oben stehende
     Urheberrecht, diese Liste von Bedingungen und den folgenden Haftungsausschluss
     in der Dokumentation und/oder anderen Materialien, die mit der
     Distribution bereitgestellt werden, enthalten.
   * Weder der Name von Google Inc. noch die Namen seiner
     Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet
     wurden, ohne spezifische vorherige schriftliche Genehmigung zu kennzeichnen oder zu
     bewerben.

DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
"WIE BESEHEN" UND OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN ZUR VERFÜGUNG GESTELLT, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. IN KEINEM FALL HAFTEN DIE URHEBERRECHTSINHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTE, INDIREKTE, ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSSCHÄDEN, DATENVERLUST ODER GEWINNAUSFALL; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER WELCHER HAFTUNGSTHEORIE AUCH IMMER, SEI ES IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
