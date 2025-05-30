---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`DelegatedInkTrailPresenter`**-Interface der [Ink-API](/de/docs/Web/API/Ink_API) bietet die Möglichkeit, den Kompositor auf Betriebssystemebene anzuweisen, Tintenstriche zwischen dem Versand von Zeigerereignissen zu rendern.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die mit diesem Presenter erwartet werden kann.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem die Darstellung der Tintenstriche eingeschränkt ist.

## Instanzmethoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übergibt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Renderpunkt für den aktuellen Frame verwendet wurde, und ermöglicht dem Kompositor auf Betriebssystemebene, eine delegierte Tintenspur vor dem nächsten Zeigerereignis zu rendern.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben ihm die Leinwand als Darstellungsbereich, um ihn zu verwalten, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position des Anfangspunktes der Spur jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; dies wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Renderpunkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenspur im Voraus der Standard-Browser-Darstellung im Namen der App im angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
> Sehen Sie sich dieses Beispiel in Aktion an — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Schreibens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
