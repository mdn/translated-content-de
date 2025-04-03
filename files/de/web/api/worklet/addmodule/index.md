---
title: "Worklet: addModule()-Methode"
short-title: addModule()
slug: Web/API/Worklet/addModule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

Die **`addModule()`**-Methode der
[`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle lädt das Modul aus der angegebenen JavaScript-Datei und
fügt es dem aktuellen `Worklet` hinzu.

## Syntax

```js-nolint
addModule(moduleURL)
addModule(moduleURL, options)
```

### Parameter

- `moduleURL`
  - : Ein {{jsxref("String")}}, das die URL einer JavaScript-Datei mit dem hinzuzufügenden Modul enthält.
- `options` {{optional_inline}}

  - : Ein Objekt mit beliebigen der folgenden Optionen:

    - `credentials`
      - : Ein [`Request.credentials`](/de/docs/Web/API/Request/credentials)-Wert, der
        angibt, ob Anmeldeinformationen (z.B. Cookies und HTTP-Authentifizierung)
        beim Laden des Moduls gesendet werden sollen. Kann einer von `"omit"`,
        `"same-origin"` oder `"include"` sein. Der Standardwert ist
        `"same-origin"`. Siehe auch [`Request.credentials`](/de/docs/Web/API/Request/credentials).

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, sobald das Modul von der angegebenen URL hinzugefügt wurde. Das Versprechen liefert keinen Wert zurück.

### Ausnahmen

Wenn `addModule()` fehlschlägt, lehnt es das Versprechen ab und liefert einen der
folgenden Fehler an den Ablehnungs-Handler.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das angegebene Skript ist ungültig oder konnte nicht geladen werden.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die angegebene `moduleURL` ist ungültig.

## Beispiele

### AudioWorklet-Beispiel

```js
const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
audioWorklet.addModule("modules/bypassFilter.js", {
  credentials: "omit",
});
```

### PaintWorklet-Beispiel

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

Sobald das Skript zum [PaintWorklet](/de/docs/Web/API/CSS/paintWorklet_static) hinzugefügt wurde, kann die CSS {{cssxref("image/paint", "paint()")}}-Funktion
verwendet werden, um das vom Worklet erstellte Bild einzubinden:

```css
@supports (background-image: paint(id)) {
  h1 {
    background-image: paint(hollowHighlights, filled, 3px);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
