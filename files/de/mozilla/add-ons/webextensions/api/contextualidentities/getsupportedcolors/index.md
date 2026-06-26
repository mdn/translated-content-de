---
title: contextualIdentities.getSupportedColors()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedColors
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Gibt die vom Browser für kontextuelle Identitäten unterstützten Farben zurück.

Für Firefox 153 und später verwenden Sie diese Methode anstelle der festen Codierung von Farbnamen in Ihrer Erweiterung. Während die unterstützten Farben seit der Einführung kontextueller Identitäten stabil waren, hat Firefox 153 zwei Farben umbenannt und eine neue eingeführt (um sich mit einem Update der Firefox Benutzeroberfläche abzustimmen). Das Abfragen der Methode stellt sicher, dass Ihre Erweiterung mit etwaigen Änderungen kompatibel bleibt.

Diese Farben werden in Firefox 152 und früher unterstützt:

- `"blue"`
- `"green"`
- `"orange"`
- `"pink"`
- `"purple"`
- `"red"`
- `"toolbar"` (In Firefox 153 umbenannt in `"gray"`)
- `"turquoise"` (In Firefox 153 umbenannt in `"cyan"`)
- `"yellow"`

Diese Farben werden in Firefox 153 und später unterstützt:

- `"blue"`
- `"cyan"` (neu in Firefox 153)
- `"gray"` (neu in Firefox 153)
- `"green"`
- `"orange"`
- `"pink"`
- `"purple"`
- `"red"`
- `"violet"` (neu in Firefox 153)
- `"yellow"`

Die veralteten Werte `"turquoise"` und `"toolbar"` werden akzeptiert und zu `"cyan"` bzw. `"gray"` aufgelöst.

## Syntax

```js-nolint
let colors = browser.contextualIdentities.getSupportedColors()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem Array von Objekten erfüllt wird, eines für jede unterstützte Farbe. Jedes Objekt hat folgende Eigenschaften:

- `color`
  - : `string`. Der Name der Farbe (zum Beispiel `"blue"`). Dies ist der Wert, der in der `color`-Eigenschaft von {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} verwendet wird.
- `colorCode`
  - : `string`. Ein Hex-Code für die Farbe (zum Beispiel `"#37adff"`).

Falls die Funktion kontextuelle Identitäten nicht aktiviert ist, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Alle unterstützten Farben abrufen und ihre Namen und Hex-Codes protokollieren:

```js
function onGot(colors) {
  for (const { color, colorCode } of colors) {
    console.log(`${color}: ${colorCode}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.getSupportedColors().then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
