---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint() Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`** Methode der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Schnittstelle gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzte Rendering-Position für den aktuellen Frame verwendet wurde. Dadurch kann der Betriebssystem-Level-Compositor einen delegierten Tintenverlauf vor dem Versenden des nächsten Zeigerereignisses rendern.

## Syntax

```js-nolint
requestPresenter(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent).
- `style`
  - : Ein Objekt, das den Stil des Verlaufs definiert und die folgenden Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}}, der einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Presenter beim Rendern des Tintenverlaufs verwenden wird.
    - `diameter`
      - : Eine Zahl, die den Durchmesser darstellt, den der Presenter beim Rendern des Tintenverlaufs verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn:
    - die `color` Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - die `diameter` Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen eines Tintenverlaufs

In diesem Beispiel zeichnen wir einen Verlauf auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben ihm die Leinwand als Präsentationsbereich, um diesen zu verwalten, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove` Ereignis-Listener, wird die neue Position des Trailkopfs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird das `updateInkTrailStartPoint()` Methode des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Objekts, das zurückgegeben wird, wenn das `presenter` Versprechen erfüllt ist, aufgerufen; hierbei wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style` Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass ein delegierter Tintenverlauf im Namen der App vor dem Standard-Browser-Rendering im angegebenen Stil gezeichnet wird, bis es das nächste Mal ein `pointermove` Ereignis empfängt.

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
