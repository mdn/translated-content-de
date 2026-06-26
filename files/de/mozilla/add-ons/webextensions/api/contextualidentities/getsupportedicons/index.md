---
title: contextualIdentities.getSupportedIcons()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedIcons
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Gibt die vom Browser unterstützten Symbole für kontextuelle Identitäten zurück.

Für Firefox 153 und später sollten Sie diese Methode verwenden, anstatt Symbolnamen in Ihrer Erweiterung fest zu codieren. Auch wenn sich die unterstützten Symbole seit der Einführung von kontextuellen Identitäten nicht geändert haben, stellt die Verwendung dieser Methode sicher, dass Ihre Erweiterung mit jeglichen Änderungen kompatibel bleibt.

Diese Symbolnamen werden unterstützt:

- `"briefcase"`
- `"cart"`
- `"chill"`
- `"circle"`
- `"dollar"`
- `"fence"`
- `"fingerprint"`
- `"food"`
- `"fruit"`
- `"gift"`
- `"pet"`
- `"tree"`
- `"vacation"`

## Syntax

```js-nolint
let icons = browser.contextualIdentities.getSupportedIcons()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jedes unterstützte Symbol. Jedes Objekt hat folgende Eigenschaften:

- `icon`
  - : `string`. Der Name des Symbols (zum Beispiel, `"fingerprint"`). Dies ist der Wert, der in der `icon`-Eigenschaft von {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} verwendet wird.
- `iconUrl`
  - : `string`. Eine `resource://`-URL, die auf die SVG-Datei des Symbols verweist (zum Beispiel, `"resource://usercontext-content/fingerprint.svg"`).

Wenn das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

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
