---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint() Methode"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`** Methode der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Schnittstelle zeigt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde, um dem OS-level Compositor zu ermöglichen, eine delegierte Tintenlinie vor dem nächsten Zeigereignis zu rendern, das versendet wird.

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
      - : Ein {{jsxref("String")}}, das einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Presenter beim Rendern der Tintenlinie verwenden wird.
    - `diameter`
      - : Eine Zahl, die den Durchmesser darstellt, den der Presenter beim Rendern der Tintenlinie verwenden wird.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird geworfen und der Vorgang abgebrochen, wenn:
    - die `color` Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - die `diameter` Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - das [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Nahe dem Anfang des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Leinwand als Präsentationsbereich zur Bearbeitung und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später im `pointermove` Ereignis-Listener wird die neue Position des Linienstücks jedes Mal, wenn das Ereignis ausgelöst wird, auf die Leinwand gezeichnet. Zusätzlich wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Objekt, das zurückgegeben wird, wenn das `presenter` Versprechen erfüllt ist, seine `updateInkTrailStartPoint()` Methode aufgerufen; dies wird übergeben:

- Das letzte vertrauenswürdige Zeigereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style` Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Namen der App im angegebenen Stil vor dem Standard-Browser-Rendering gezeichnet wird, bis es das nächste Mal ein `pointermove` Ereignis erhält.

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

- [Verbesserung des Tintenschreibens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
