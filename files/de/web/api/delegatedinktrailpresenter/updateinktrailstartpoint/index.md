---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint()-Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`**-Methode der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für die aktuelle Frame verwendet wurde. Dadurch kann der Betriebssystem-Compositor eine delegierte Tintenlinie vor dem nächsten Zeigervorgang rendern.

## Syntax

```js-nolint
updateInkTrailStartPoint(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil der Linie definiert und folgende Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}}, das einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Presenter verwendet, um die Tintenlinie zu rendern.
    - `diameter`
      - : Eine Zahl, die den Durchmesser angibt, den der Presenter beim Rendern der Tintenlinie verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und die Operation abgebrochen, wenn:
    - Die `color`-Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - Die `diameter`-Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - Das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea)-Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Nahe dem Anfang des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Leinwand als Präsentationsbereich und speichern das von der Rückgabe-Promise erstellte Objekt in der Variablen `presenter`.

Später wird im `pointermove`-Ereignis-Listener die neue Position des Linienanfangs bei jedem Auftreten des Ereignisses auf die Leinwand gezeichnet. Darüber hinaus wird die `updateInkTrailStartPoint()`-Methode des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn die `presenter`-Promise erfüllt wird. Dieser wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt mit Farb- und Durchmessereinstellungen.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Namen der App im angegebenen Stil vor dem standardmäßigen Browser-Rendering gezeichnet wird, bis das nächste `pointermove`-Ereignis eintritt.

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
let move_cnt = 0;
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

{{EmbedLiveSample("Zeichnen einer Tintenlinie")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
