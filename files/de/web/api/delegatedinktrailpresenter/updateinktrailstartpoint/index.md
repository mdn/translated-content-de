---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint() Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`** Methode des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Interfaces gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. Dies ermöglicht dem Betriebssystem-Kompositor, eine delegierte Tintenlinie vor dem nächsten Zeigerereignis zu rendern, das gesendet wird.

## Syntax

```js-nolint
updateInkTrailStartPoint(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil der Linie definiert und die folgenden Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}} mit einem gültigen CSS-Farbcode, der die Farbe angibt, die der Presenter beim Rendern der Tintenlinie verwenden wird.
    - `diameter`
      - : Eine Zahl, die den Durchmesser repräsentiert, den der Presenter beim Rendern der Tintenlinie verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn:
    - Die `color` Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - Die `diameter` Eigenschaft keine Zahl oder kleiner als 1 ist.
    - Das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben dieser die Leinwand als Präsentationsbereich, den sie betreuen soll, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove` Ereignis-Listener, wird die neue Position der Linienführung jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird das `updateInkTrailStartPoint()`-Methode des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird, aufgerufen. Dies geschieht mit:

- Dem letzten vertrauenswürdigen Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Einem `style` Objekt, das Farb- und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Auftrag der App vor dem standardmäßigen Browser-Rendering im angegebenen Stil gezeichnet wird, bis das nächste `pointermove`-Ereignis empfangen wird.

#### HTML

```html
<canvas id="canvas"></canvas>
<div id="div">Delegated ink trail should match the color of this div.</div>
```

#### CSS

```css
div {
  background-color: rgb(0 255 0 / 100%);
  position: fixed;
  top: 1rem;
  left: 1rem;
}
```

#### JavaScript

```js
const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 255 0 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  const pointSize = 10;
  ctx.fillStyle = style.color;
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
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
