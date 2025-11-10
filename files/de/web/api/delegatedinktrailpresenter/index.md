---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`DelegatedInkTrailPresenter`**-Schnittstelle der [Ink API](/de/docs/Web/API/Ink_API) ermöglicht es, dem Betriebssystem-Kompositor anzuleiten, Tintenstriche zwischen der Dispatching von Zeigerereignissen zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die erwartete Latenzverbesserung beim Einsatz dieses Presenters angibt.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem das Rendern der Tintenstriche beschränkt ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übergibt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Rendering-Punkt für das aktuelle Bild genutzt wurde, damit der Betriebssystem-Kompositor eine delegierte Tintenspur vor dem nächsten Zeigerereignis rendern kann.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Leinwand als Präsentationsbereich und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Spurkopfes jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; dieses wird übergeben:

- Der letzte vertrauenswürdige Zeigerereignis, der den Rendering-Punkt für das aktuelle Bild darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie, in dem angegebenen Stil, vor dem Standard-Browser-Rendering im Auftrag der App gezeichnet wird, bis zum nächsten Empfang eines `pointermove`-Ereignisses.

```js
const ctx = canvas.getContext("2d");
let presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let moveCnt = 0;
let style = { color: "rgb(0 0 255 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", (evt) => {
  const pointSize = 10;
  ctx.fillStyle = "black";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (moveCnt === 50) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    style = {
      color: `rgb(${r} ${g} ${b} / 100%)`,
      diameter: 10,
    };
    moveCnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 100%)`;
  }
  moveCnt += 1;
  presenter.then((v) => {
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
