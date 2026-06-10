---
title: contextualIdentities.getSupportedIcons()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedIcons
l10n:
  sourceCommit: 6203b96117ae35099df06d08f6a037bf2dff1d80
---

Gibt die vom Browser unterstützten Symbole für kontextuelle Identitäten zurück.

## Syntax

```js-nolint
let icons = browser.contextualIdentities.getSupportedIcons()
```

### Parameter

Keine.

### Rückgabewert

Ein mit einem Array von Objekten erfülltes [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), eines für jedes unterstützte Symbol. Jedes Objekt hat die folgenden Eigenschaften:

- `icon`
  - : `string`. Der Name des Symbols (zum Beispiel, `"fingerprint"`). Dies ist der Wert, der in der `icon`-Eigenschaft von {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} verwendet wird.
- `iconUrl`
  - : `string`. Eine `resource://` URL, die auf die SVG-Datei des Symbols verweist (zum Beispiel, `"resource://usercontext-content/fingerprint.svg"`).

Wenn das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Rufen Sie alle unterstützten Symbole ab und protokollieren Sie deren Namen und URLs:

```js
function onGot(icons) {
  for (const { icon, iconUrl } of icons) {
    console.log(`${icon}: ${iconUrl}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.getSupportedIcons().then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
