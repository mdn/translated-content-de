---
title: "DelegatedInkTrailPresenter: Methode updateInkTrailStartPoint()"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die Methode **`updateInkTrailStartPoint()`** der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. Dies ermöglicht es dem Betriebssystem-Compositor, eine delegierte Ink-Trail-Darstellung vor dem nächsten Zeigerereignis zu rendern.

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
      - : Ein {{jsxref("String")}}, der einen gültigen CSS-Farbcode enthält, der die Farbe angibt, die der Presenter beim Rendern der Ink-Spur verwenden wird.
    - `diameter`
      - : Eine Zahl, die den Durchmesser angibt, den der Presenter beim Rendern der Ink-Spur verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn:
    - die `color`-Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - die `diameter`-Eigenschaft keine Zahl oder kleiner als 1 ist.
    - das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea)-Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Ink-Spur

In diesem Beispiel zeichnen wir eine Spur auf ein 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben das Canvas als Präsentationsbereich, um es zu verwalten, und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position des Spurkopfs jedes Mal, wenn das Ereignis ausgelöst wird, auf das Canvas gezeichnet. Zusätzlich wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird, mit seiner `updateInkTrailStartPoint()`-Methode aufgerufen; übergeben werden hierbei:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt mit Farb- und Durchmessereinstellungen.

Das Ergebnis ist, dass eine delegierte Ink-Spur vor dem Standard-Browser-Rendering im Namen der App mit dem angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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

{{EmbedLiveSample("Drawing an ink trail")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
