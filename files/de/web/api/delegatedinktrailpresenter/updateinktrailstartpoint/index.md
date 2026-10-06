---
title: "DelegatedInkTrailPresenter: Methode updateInkTrailStartPoint()"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: aba807125c2353106efb38decb31def1c5236224
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die Methode **`updateInkTrailStartPoint()`** des Interfaces [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. So kann der Compositor des Betriebssystems eine delegierte Ink-Spur rendern, bevor das nächste Pointer-Event ausgelöst wird.

## Syntax

```js-nolint
updateInkTrailStartPoint(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil der Spur festlegt und die folgenden Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}} mit einem gültigen CSS-Farbwert, der die Farbe angibt, die der Presenter beim Rendern der Ink-Spur verwendet.
    - `diameter`
      - : Eine Zahl, die den Durchmesser angibt, den der Presenter beim Rendern der Ink-Spur verwendet.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang abgebrochen, wenn:
    - die Eigenschaft `color` keinen gültigen CSS-Farbwert enthält.
    - die Eigenschaft `diameter` keine Zahl oder kleiner als 1 ist.
    - das Element [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Ink-Spur

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Canvas als Präsentationsbereich und speichern das zurückgegebene Promise in der Variablen `presenter`.

Später wird im Event-Listener für `pointermove` bei jedem Auslösen des Events die neue Position der Spurspitze auf die Canvas gezeichnet. Zusätzlich wird die Methode `updateInkTrailStartPoint()` des Objekts [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) aufgerufen, das nach Erfüllung des Promises `presenter` zurückgegeben wird. Dabei werden folgende Argumente übergeben:

- Das letzte vertrauenswürdige Pointer-Event, das den Rendering-Punkt für den aktuellen Frame repräsentiert.
- Ein `style`-Objekt mit Einstellungen für Farbe und Durchmesser.

Dadurch wird im Namen der Anwendung eine delegierte Ink-Spur im angegebenen Stil vor dem standardmäßigen Rendering des Browsers gezeichnet, bis das nächste `pointermove`-Event empfangen wird.

#### HTML

```html
<canvas id="my-canvas"></canvas>
<div id="div">Delegated ink trail should match the color of this div.</div>
```

#### CSS

```css
div {
  background-color: lime;
  position: fixed;
  top: 1rem;
  left: 1rem;
}
```

#### JavaScript

```js
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let moveCnt = 0;
let style = { color: "lime", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  const pointSize = 10;
  ctx.fillStyle = style.color;
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (moveCnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    moveCnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  moveCnt += 1;
  await presenter.updateInkTrailStartPoint(evt, style);
});

window.addEventListener("pointerdown", () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### Ergebnis

{{EmbedLiveSample("Drawing an ink trail")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
