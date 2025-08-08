---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`DelegatedInkTrailPresenter`**-Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, dem Betriebssystemkompositor anzuweisen, Tintenstriche zwischen Zeigerereignis-Dispatches zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die mit diesem Presenter erwartet werden kann.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem das Rendern von Tintenstrichen beschränkt ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Überträgt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Rendering-Punkt für den aktuellen Frame verwendet wurde, damit der Betriebssystemkompositor eine delegierte Tintenspur vor dem nächsten Zeigerereignis rendern kann.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben das Canvas als Präsentationsbereich, um es zu verwalten, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position des Spurkopfs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; diese Methode wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenspur im Auftrag der App vor dem Standardrendervorgang des Browsers in dem angegebenen Stil gezeichnet wird, bis das nächste `pointermove`-Ereignis empfangen wird.

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
  ctx.fillStyle = "black";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt === 50) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    style = {
      color: `rgb(${r} ${g} ${b} / 100%)`,
      diameter: 10,
    };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 100%)`;
  }
  move_cnt += 1;
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
> Sehen Sie sich dieses Beispiel live an – [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
