---
title: Ink-Präsentator
slug: Web/API/InkPresenter
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`InkPresenter`** Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, dem betriebssystembasierten Compositor Anweisungen zum Rendern von Tintenstrichen zwischen Zeigerereignis-Dispatches zu geben.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("InkPresenter.expectedImprovement", "expectedImprovement")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die erwartete Latenzverbesserung angibt, die mit diesem Präsentator erzielt werden kann.
- {{domxref("InkPresenter.presentationArea", "presentationArea")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Element")}} zurück, in dem das Rendern von Tintenstrichen eingeschränkt ist.

## Instanz-Methoden

- {{domxref("InkPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} {{Experimental_Inline}}
  - : Übermittelt das {{domxref("PointerEvent")}}, das als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde, sodass der betriebssystembasierte Compositor eine delegierte Tinten-Spur vor dem nächsten Zeigerereignis rendern kann.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir {{domxref("Ink.requestPresenter()")}} auf, übergeben die Leinwand als Präsentationsbereich und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove` Ereignis-Listener, wird die neue Position des Spurenkopf jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird die Methode {{domxref("InkPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} des `InkPresenter` Objekts, das zurückgegeben wird, wenn das `presenter` Versprechen erfüllt wird, aufgerufen. Diese Methode wird mit folgendem übergeben:

- Dem letzten vertrauenswürdigen Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Einem `style` Objekt, das Farb- und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tinten-Spur im Namen der App und im angegebenen Stil vor dem Standard-Browser-Rendering gezeichnet wird, bis das nächste Mal ein `pointermove` Ereignis empfangen wird.

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
> Sehen Sie sich dieses Beispiel live an — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Schreibens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
