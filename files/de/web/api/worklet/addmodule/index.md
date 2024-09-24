---
title: "Worklet: addModule()-Methode"
short-title: addModule()
slug: Web/API/Worklet/addModule
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

Die **`addModule()`**-Methode des
{{domxref("Worklet")}}-Interfaces lädt das Modul aus der angegebenen JavaScript-Datei und
fügt es dem aktuellen `Worklet` hinzu.

## Syntax

```js-nolint
addModule(moduleURL)
addModule(moduleURL, options)
```

### Parameter

- `moduleURL`
  - : Ein {{jsxref("String")}}, der die URL einer JavaScript-Datei mit dem hinzuzufügenden Modul enthält.
- `options` {{optional_inline}}

  - : Ein Objekt mit einer der folgenden Optionen:

    - `credentials`
      - : Ein {{domxref("Request.credentials")}}-Wert, der angibt, ob beim Laden des Moduls Berechtigungsnachweise (z.B. Cookies und HTTP-Authentifizierung) gesendet werden sollen. Kann einer der folgenden Werte sein: `"omit"`, `"same-origin"` oder `"include"`. Standardwert ist `"same-origin"`. Siehe auch {{domxref("Request.credentials")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald das Modul von der angegebenen URL hinzugefügt wurde. Das Promise gibt keinen Wert zurück.

### Ausnahmen

Wenn `addModule()` fehlschlägt, wird das Promise abgelehnt und einer der folgenden Fehler an den Ablehnungs-Handler übergeben.

- `AbortError` {{domxref("DOMException")}}
  - : Das angegebene Skript ist ungültig oder konnte nicht geladen werden.
- `SyntaxError` {{domxref("DOMException")}}
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

Sobald das Skript zum [Paint Worklet](/de/docs/Web/API/CSS/paintWorklet_static) hinzugefügt wurde, kann die CSS-{{cssxref("image/paint", "paint()")}}-Funktion verwendet werden, um das vom Worklet erstellte Bild einzufügen:

```css
@supports (background-image: paint(id)) {
  h1 {
    background-image: paint(hollowHighlights, filled, 3px);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
