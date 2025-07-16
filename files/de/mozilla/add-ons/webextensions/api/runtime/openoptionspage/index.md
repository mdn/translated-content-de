---
title: runtime.openOptionsPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wenn Ihre Erweiterung eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) definiert hat, öffnet diese Methode sie.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let openingPage = browser.runtime.openOptionsPage()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Optionsseite erfolgreich erstellt wurde, oder mit einer Fehlermeldung abgelehnt wird, wenn der Vorgang fehlgeschlagen ist.

## Beispiele

Öffnen Sie die Optionsseite, wenn der Benutzer auf das Symbol einer Browseraktion klickt:

```js
function onOpened() {
  console.log(`Options page opened`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let opening = browser.runtime.openOptionsPage();
opening.then(onOpened, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-openOptionsPage) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtsvermerk, diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen Urheberrechtsvermerk, diese Liste von Bedingungen und den folgenden Haftungsausschluss in der Dokumentation und/oder anderen Materialien, die mit der Weiterverteilung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen der Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet wurden, ohne spezifische vorherige schriftliche Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER KONKLUDENTEN GARANTIEN, EINSCHLIESSLICH ABER NICHT BESCHRÄNKT AUF DIE KONKLUDENTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE URHEBERRECHTSINHABER ODER MITWIRKENDE FÜR JEGLICHE DIREKTE, INDIREKTE, BEILÄUFIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER JEDER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
