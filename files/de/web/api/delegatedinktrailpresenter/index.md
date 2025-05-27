---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`DelegatedInkTrailPresenter`**-Interface der [Ink-API](/de/docs/Web/API/Ink_API) ermöglicht es, dem Betriebssystem-Kompositor anzuweisen, Tintenstriche zwischen den Verteilungen von Pointer-Ereignissen zu rendern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die zu erwartende Latenzverbesserung bei Verwendung dieses Präsentators angibt.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung der Tintenstriche erfolgt.

## Instanz-Methoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übergibt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde, damit der Betriebssystem-Kompositor einen delegierten Tintenstrich vor dem nächsten Pointer-Ereignis rendert, das verteilt wird.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf ein 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben dabei das Canvas als Präsentationsbereich, um den es sich kümmern soll, und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position der Spurspitze jedes Mal gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die `DelegatedInkTrailPresenter`-Objektmethode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen; diese wird übergeben:

- Das letzte vertrauenswürdige Pointer-Ereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass ein delegierter Tintenstrich im Voraus vor dem Standardbrowser-Rendering im Namen der App in dem angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
  if (move_cnt === 50) {
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
