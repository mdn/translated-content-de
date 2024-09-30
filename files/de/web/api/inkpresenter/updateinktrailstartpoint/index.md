---
title: "InkPresenter: updateInkTrailStartPoint() Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/InkPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`**-Methode des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Interfaces gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Renderpunkt für den aktuellen Frame verwendet wurde. Dadurch kann der Betriebssystem-Level-Kompositor eine delegierte Tintenspur vor dem nächsten zu versendenden Zeigerereignis rendern.

## Syntax

```js-nolint
requestPresenter(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil der Spur definiert und die folgenden Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}} mit einem gültigen CSS-Farbcode, der angibt, welche Farbe der Presenter beim Rendern der Tintenspur verwendet.
    - `diameter`
      - : Eine Zahl, die den Durchmesser angibt, den der Presenter beim Rendern der Tintenspur verwendet.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang abgebrochen, wenn die:
    - `color`-Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - `diameter`-Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - [`presentationArea`](/de/docs/Web/API/InkPresenter/presentationArea)-Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenspur

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben der Methode die Leinwand als Präsentationsbereich zur Verwahrung und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später wird im `pointermove`-Ereignis-Listener die neue Position des Spurkopfs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Außerdem wird die Methode `updateInkTrailStartPoint()` des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekts, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird, aufgerufen; dies ist mit den folgenden Informationen übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Renderpunkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenspur im Namen der App in dem angegebenen Stil vor der Standardbrowserdarstellung gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
  if (move_cnt == 20) {
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

{{EmbedLiveSample("Zeichnen einer Tintenspur")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
