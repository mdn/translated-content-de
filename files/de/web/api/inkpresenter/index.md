---
title: InkPresenter
slug: Web/API/InkPresenter
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`InkPresenter`**-Schnittstelle der [Ink API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, dem Betriebssystem-Kompositor zu instruieren, Tintenstriche zwischen Zeigerereignis-Dispatches zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/InkPresenter/expectedImprovement) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die mit diesem Presenter erwartet werden kann.
- [`presentationArea`](/de/docs/Web/API/InkPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem die Darstellung der Tintenstriche eingeschränkt ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/InkPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übermittelt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Darstellungspunkt für den aktuellen Frame verwendet wurde, sodass der Betriebssystem-Kompositor eine delegierte Tintenlinie vor dem nächsten Zeigerereignis rendern kann.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Leinwand als Präsentationsbereich, um den es sich kümmern soll, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Startpunkts der Spur jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die `InkPresenter`-Objektaktualisierungsmethode [`updateInkTrailStartPoint()`](/de/docs/Web/API/InkPresenter/updateInkTrailStartPoint) aufgerufen, wenn das `presenter`-Versprechen erfüllt wird; dies wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Darstellungspunkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie vor der Standard-Browserdarstellung im Auftrag der App in dem angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
> Sehen Sie sich dieses Beispiel live an — [Delegierte Tintenlinie](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Tinte auf dem Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
