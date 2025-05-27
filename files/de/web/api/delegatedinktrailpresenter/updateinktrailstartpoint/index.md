---
title: "DelegatedInkTrailPresenter: Methode updateInkTrailStartPoint()"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die Methode **`updateInkTrailStartPoint()`** der Schnittstelle [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) gibt an, welches [`PointerEvent`](/de/docs/Web/API/PointerEvent) als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. Dadurch kann der Betriebssystem-Kompositor eine delegierte Tintenlinie vor dem nächsten Zeigerereignis rendern.

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
      - : Ein {{jsxref("String")}}, der einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Presenter beim Rendern der Tintenlinie verwendet.
    - `diameter`
      - : Eine Zahl, die den Durchmesser darstellt, den der Presenter beim Rendern der Tintenlinie verwendet.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang abgebrochen, wenn:
    - die Eigenschaft `color` keinen gültigen CSS-Farbcode enthält.
    - die Eigenschaft `diameter` keine Zahl ist oder kleiner als 1 ist.
    - das Element [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben diesem die Leinwand als Präsentationsbereich zur Bearbeitung und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Linienkopfes bei jedem Auftreten des Ereignisses auf die Leinwand gezeichnet. Zusätzlich wird das `updateInkTrailStartPoint()`-Metode-Objekt des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter), das beim Erfüllen des `presenter`-Versprechens zurückgegeben wird, aufgerufen; dies erhält:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame repräsentiert.
- Ein `style`-Objekt mit Farb- und Durchmessereinstellungen.

Das Ergebnis ist, dass eine delegierte Tintenlinie im angegebenen Stil im Voraus auf der Anwendungsebene vor der Standard-Browser-Darstellung gezeichnet wird, bis das nächste `pointermove`-Ereignis eintrifft.

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

## Siehe auch

- [Verbesserung von Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
