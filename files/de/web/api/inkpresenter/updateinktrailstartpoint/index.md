---
title: "InkPresenter: Methode updateInkTrailStartPoint()"
short-title: updateInkTrailStartPoint()
slug: Web/API/InkPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`updateInkTrailStartPoint()`** Methode der {{domxref("InkPresenter")}} Schnittstelle zeigt an, welches {{domxref("PointerEvent")}} als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde. Dadurch kann der Betriebssystem-Kompositor eine zugeordnete Tintenlinie vor dem nächsten Zeigerereignis rendern, das gesendet wird.

## Syntax

```js-nolint
requestPresenter(event, style)
```

### Parameter

- `event` {{optional_inline}}
  - : Ein {{domxref("PointerEvent")}}.
- `style`
  - : Ein Objekt, das den Stil der Linie definiert und die folgenden Eigenschaften enthält:
    - `color`
      - : Ein {{jsxref("String")}}, das einen gültigen CSS-Farbcode enthält und die Farbe angibt, die der Präsentator beim Rendern der Tintenlinie verwendet.
    - `diameter`
      - : Eine Zahl, die den Durchmesser angibt, den der Präsentator beim Rendern der Tintenlinie verwendet.

### Rückgabewert

`undefined`.

### Ausnahmen

- `Error` {{domxref("DOMException")}}
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn:
    - die `color` Eigenschaft keinen gültigen CSS-Farbcode enthält.
    - die `diameter` Eigenschaft keine Zahl ist oder kleiner als 1 ist.
    - das {{domxref("InkPresenter.presentationArea", "presentationArea")}} Element vor oder während des Renderns aus dem Dokument entfernt wird.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir {{domxref("Ink.requestPresenter()")}} auf, übergeben die Leinwand als Präsentationsbereich, der behandelt werden soll, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove` Ereignis-Listener, wird die neue Position des Linienanfangs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die Methode `updateInkTrailStartPoint()` des {{domxref("InkPresenter")}} Objekts, das beim Erfüllen des `presenter` Versprechens zurückgegeben wird, aufgerufen; dies wird übergeben:

- Das letzte verifizierte Pointer-Ereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style` Objekt, das Farbe und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass eine zugeordnete Tintenlinie im Namen der App im angegebenen Stil vor dem Standard-Browser-Rendering gezeichnet wird, bis zum nächsten Mal, wenn ein `pointermove` Ereignis empfangen wird.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
