---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`DelegatedInkTrailPresenter`**-Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, dem OS-Level-Compositor Anweisungen zu geben, Tintenstriche zwischen der Zustellung von `PointerEvent`s zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, welcher die Latenzverbesserung angibt, die bei Verwendung dieses Presenters erwartet werden kann.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem die Darstellung der Tintenstriche eingeschränkt ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übermittelt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Darstellungspunkt für den aktuellen Frame verwendet wurde, um dem OS-Level-Compositor zu ermöglichen, eine delegierte Tintenspur vor dem nächsten zuzustellenden `PointerEvent` zu rendern.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf ein 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf und übergeben ihm das Canvas als Darstellungbereich, um es zu verwalten. Das von der Methode zurückgegebene Promise wird in der Variablen `presenter` gespeichert.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Spurkopfes jedes Mal auf das Canvas gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Promise erfüllt wird; dabei werden folgende Argumente übergeben:

- Das letzte vertrauenswürdige `PointerEvent`, das den Darstellungspunkt für den aktuellen Frame repräsentiert.
- Ein `style`-Objekt, das Farbe und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Auftrag der App mit dem angegebenen Stil vor der Standardbrowserdarstellung gezogen wird, bis das nächste `pointermove`-Ereignis empfangen wird.

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
> Sie können dieses Beispiel live sehen — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
