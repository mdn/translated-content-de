---
title: tabs.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Erkennt die Hauptsprache des Inhalts in einem Tab mithilfe des [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

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
  - : `integer`. Voreinstellung ist der aktive Tab des aktuellen Fensters.
- `callback` {{optional_inline}}
  - : `function`. Derzeit, wenn eine `tabId` angegeben ist, verwendet diese Methode diesen Callback, um die Ergebnisse zurückzugeben, anstatt ein Promise zurückzugeben. Der Callback erhält als einzigen Eingabeparameter einen String, der den erkannten Sprachcode enthält, wie `en` oder `fr`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der einen ISO-Sprachcode darstellt, wie `en` oder `fr`. Eine vollständige Liste der von dieser Methode unterstützten Sprachen finden Sie unter [kLanguageInfoTable](https://source.chromium.org/chromium/chromium/src/+/main:third_party/ced/src/util/languages/languages.cc;l=35). Für eine unbekannte Sprache wird `"und"` zurückgegeben (siehe jedoch [Fehler 1288263](https://bugzil.la/1288263)). Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Erkennen und protokollieren Sie die Sprache des aktiven Tabs, wenn der Benutzer auf eine Browseraktion klickt:

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

Erkennen und protokollieren Sie die Sprache jedes offenen Tabs, wenn der Benutzer auf eine Browseraktion klickt (beachten Sie, dass dieses Beispiel die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) erfordert):

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-detectLanguage) API von Chromium. Diese Dokumentation wird abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
