---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint() Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`** Methode der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Schnittstelle gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. Dies ermöglicht es dem Betriebssystem-Compositor, eine delegierte Tintenlinie vor dem nächsten versendeten Zeigerereignis zu rendern.

## Syntax

```js-nolint
updateInkTrailStartPoint(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil der Spur definiert und folgende Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}}, der einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Presenter beim Rendern der Tintenlinie verwenden wird.
    - `diameter`
      - : Eine Zahl, die den Durchmesser darstellt, den der Presenter beim Rendern der Tintenlinie verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und die Operation wird abgebrochen, wenn:
    - die `color` Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - die `diameter` Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) Element vor oder während des Renderings aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben dabei die Leinwand als Präsentationsbereich zur Verwaltung und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove` Ereignis-Listener, wird die neue Position des Spurkopfes auf die Leinwand gezeichnet, jedes Mal wenn das Ereignis ausgelöst wird. Außerdem wird das `updateInkTrailStartPoint()` Methode des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter` Versprechen erfüllt ist; es werden übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame repräsentiert.
- Ein `style` Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie vor dem Standard-Browser-Rendering im Namen der App in dem angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove` Ereignis empfangen wird.

#### HTML

```html
<canvas id="canvas"></canvas>
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
