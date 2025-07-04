---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`DelegatedInkTrailPresenter`**-Schnittstelle der [Ink API](/de/docs/Web/API/Ink_API) ermöglicht es, den Betriebssystem-Kompositor anzuweisen, Tintenstriche zwischen Zeiger-Ereignis-Dispatches zu rendern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`expectedImprovement`](/de/docs/Web/API/DelegatedInkTrailPresenter/expectedImprovement) {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt einen Wert in Millisekunden zurück, der die erwartete Latenzverbesserung angibt, die mit diesem Presenter erzielt werden kann.
- [`presentationArea`](/de/docs/Web/API/DelegatedInkTrailPresenter/presentationArea) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem die Darstellung von Tintenstrichen eingegrenzt ist.

## Instanz-Methoden

- [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) {{Experimental_Inline}}
  - : Übermittelt das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das als letzter Rendering-Punkt für das aktuelle Frame verwendet wurde, und ermöglicht es dem Betriebssystem-Kompositor, einen delegierten Tintenpfad im Voraus für das nächste zu versendende Zeigerereignis zu rendern.

## Beispiel

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, indem wir ihm die Leinwand als Präsentationsbereich übergeben, den es verwalten soll, und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position der Spurspitze jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des `DelegatedInkTrailPresenter`-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; ihr wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendepunkt für das aktuelle Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass ein delegierter Tintenpfad im Namen der App, im angegebenen Stil, vor dem Standard-Browser-Rendering gezeichnet wird, bis das nächste `pointermove`-Ereignis empfangen wird.

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
> Sehen Sie dieses Beispiel live — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
