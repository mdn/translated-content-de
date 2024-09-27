---
title: InkPresenter
slug: Web/API/InkPresenter
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`InkPresenter`** Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, den OS-Level-Compositor anzuweisen, Tintenstriche zwischen der Verteilung von Zeigerereignissen zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/InkPresenter/expectedImprovement) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die zu erwartende Latenzverbesserung bei der Verwendung dieses Presenters angibt.
- [`presentationArea`](/de/docs/Web/API/InkPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem das Rendern von Tintenstrichen eingeschlossen ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/InkPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Überträgt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde, sodass der OS-Level-Compositor einen delegierten Tintentrail vor dem nächsten zu verteilenden Zeigerereignis rendern kann.

## Beispiel

In diesem Beispiel zeichnen wir einen Trail auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben ihm die Leinwand als Präsentationsfläche, die er verwalten soll, und speichern das Versprechen, das er zurückgibt, in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Trailkopfs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die `updateInkTrailStartPoint()`-Methode des `InkPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; es wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt mit Farb- und Durchmessereinstellungen.

Das Ergebnis ist, dass ein delegierter Tintentrail im Auftrag der App vor dem Standard-Browser-Rendering in dem angegebenen Stil gezeichnet wird, bis das nächste `pointermove`-Ereignis eintrifft.

```js
const ctx = canvas.getContext("2d");
let presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 0 255 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", (evt) => {
  const pointSize = 10;
  ctx.fillStyle = "#000000";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt == 50) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    style = {
      color: "rgb(" + r + " " + g + " " + b + " / 100%)",
      diameter: 10,
    };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      "rgb(" + r + " " + g + " " + b + " / 100%)";
  }
  move_cnt += 1;
  presenter.then(function (v) {
    v.updateInkTrailStartPoint(evt, style);
  });
});

window.addEventListener("pointerdown", (evt) => {
  evt.pointerId;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

> [!NOTE]
> Sehen Sie dieses Beispiel live — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
