---
title: tabs.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Erkennt die primäre Sprache des Inhalts in einem Tab unter Verwendung des [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let detecting = browser.tabs.detectLanguage(
  tabId,                  // optional integer
  callback                // optional function
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.
- `callback` {{optional_inline}}
  - : `function`. Derzeit wird, wenn ein `tabId` angegeben ist, dieser Rückruf verwendet, um die Ergebnisse zurückzugeben, anstatt ein Promise zurückzugeben. Der Rückruf erhält als einziges Eingabeparameter einen String, der den erkannten Sprachcode wie `en` oder `fr` enthält.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der einen ISO-Sprachcode wie `en` oder `fr` darstellt. Für eine vollständige Liste der von dieser Methode unterstützten Sprachen sehen Sie [kLanguageInfoTable](https://source.chromium.org/chromium/chromium/src/+/main:third_party/ced/src/util/languages/languages.cc;l=35). Für eine unbekannte Sprache wird `"und"` zurückgegeben (siehe [Fehler 1288263](https://bugzil.la/1288263)). Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Erkennt und protokolliert die Sprache des aktiven Tabs, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
function onLanguageDetected(lang) {
  console.log(`Language is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.detectLanguage().then(onLanguageDetected, onError);
});
```

Erkennt und protokolliert die Sprache jedes offenen Tabs, wenn der Benutzer auf eine Browser-Aktion klickt (beachten Sie, dass dieses Beispiel die Berechtigung "tabs" erfordert):

```js
function onLanguageDetected(url, lang) {
  console.log(`Language in ${url} is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function detectLanguages(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .detectLanguage(tab.id)
      .then((lang) => onLanguageDetected(tab.url, lang), onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({}).then(detectLanguages, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-detectLanguage) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributionen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien,
// die mit der Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragsleistenden dürfen ohne spezifische vorherige schriftliche
// Genehmigung verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGSLEISTENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK SIND ABGELEHNT. IN KEINEM FALL SIND DIE
// URHEBERRECHTSINHABER ODER BEITRAGSLEISTENDEN HAFTBAR FÜR JEGLICHE
// DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFÄLLE;
// DATENVERLUSTE; ODER GEWINNVERLUSTE; ODER GESCHÄFTSUNTERBRECHUNGEN),
// JEDOCH VERURSACHT UND AUF JEDER THEORIE DER HAFTUNG, SEI ES IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER NUTZUNG DIESER
// SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
