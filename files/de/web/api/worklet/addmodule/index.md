---
title: "Worklet: addModule() Methode"
short-title: addModule()
slug: Web/API/Worklet/addModule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

Die **`addModule()`** Methode des
[`Worklet`](/de/docs/Web/API/Worklet)-Interfaces lädt das Modul in der angegebenen JavaScript-Datei und
fügt es dem aktuellen `Worklet` hinzu.

## Syntax

```js-nolint
addModule(moduleURL)
addModule(moduleURL, options)
```

### Parameter

- `moduleURL`
  - : Ein {{jsxref("String")}}, der die URL einer JavaScript-Datei enthält, die das hinzuzufügende Modul enthält.
- `options` {{optional_inline}}
  - : Ein Objekt mit einer der folgenden Optionen:
    - `credentials`
      - : Ein [`Request.credentials`](/de/docs/Web/API/Request/credentials)-Wert, der angibt, ob beim Laden des Moduls Anmeldeinformationen (z.B. Cookies und HTTP-Authentifizierung) gesendet werden sollen. Kann einer der folgenden Werte sein: `"omit"`, `"same-origin"` oder `"include"`. Standardwert ist `"same-origin"`. Siehe auch [`Request.credentials`](/de/docs/Web/API/Request/credentials).

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald das Modul von der angegebenen URL hinzugefügt wurde. Das Versprechen liefert keinen Wert zurück.

### Ausnahmen

Wenn `addModule()` fehlschlägt, wird das Versprechen zurückgewiesen und einer der folgenden Fehler an den Ablehnungshandler geliefert.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das angegebene Skript ist ungültig oder konnte nicht geladen werden.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die angegebene `moduleURL` ist ungültig.

## Beispiele

### AudioWorklet Beispiel

```js
const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
audioWorklet.addModule("modules/bypassFilter.js", {
  credentials: "omit",
});
```

### PaintWorklet Beispiel

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

Sobald das Skript dem [Paint-Worklet](/de/docs/Web/API/CSS/paintWorklet_static) hinzugefügt wurde, kann die CSS {{cssxref("image/paint", "paint()")}}-Funktion verwendet werden, um das vom Worklet erstellte Bild einzubinden:

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
