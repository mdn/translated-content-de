---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink-API ermöglicht es Browsern, direkt die verfügbaren OS-Level-Kompositoren beim Zeichnen von Stiftstrichen in einer Zeichenanwendungsfunktion zu nutzen, wodurch die Latenz reduziert und die Leistung erhöht wird.

## Konzepte und Nutzung

Inking im Web bezieht sich auf Anwendungsfunktionen, die [Pointer-Events](/de/docs/Web/API/Pointer_events) nutzen, um einen gleichmäßigen Stiftstrich zu zeichnen — zum Beispiel in einer Zeichenanwendung oder beim Unterschreiben eines Dokuments.

Pointer-Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der Anwendung darzustellen. Die Zeitverzögerung zwischen dem Beginn und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen dem Beginn des Zeichnens durch den Benutzer (zum Beispiel mit einem Stift oder einer Maus) und dem Erscheinen des Strichs auf dem Bildschirm führt.

Die Ink-API reduziert diese Latenz erheblich, indem sie Browsern erlaubt, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, übermitteln Browser solche Rendering-Anweisungen direkt an OS-Level-Kompositoren. Hat das zugrunde liegende Betriebssystem keinen spezialisierten OS-Level-Kompositor für diesen Zweck, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsfähig wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositoren sind Teil der Rendering-Maschine, die die Benutzeroberfläche auf dem Bildschirm in einem Browser oder Betriebssystem zeichnet. Siehe [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) für interessante Einblicke, wie ein Kompositor in einem Webbrowser funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objektinstanz erfüllt wird. Dies weist den OS-Level-Kompositor an, Tintenstriche zwischen dem Versand von Pointer-Events im nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung verwendet werden können, um die Striche zu rendern.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den OS-Level-Kompositor an, Tintenstriche zwischen dem Versand von Pointer-Events zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen eines Tintenpfades

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf und übergeben die Leinwand als Präsentationsbereich, damit er sich darum kümmern kann, und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später wird im `pointermove`-Ereignislistener die neue Position des Trail-Kopfes jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts, das erfüllt wird, nachdem das `presenter`-Versprechen abgeschlossen ist, aufgerufen; dabei wird übergeben:

- Das letzte vertraute Pointer-Event, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass ein delegierter Tintenpfad vor dem standardmäßigen Browser-Rendering im Namen der Anwendung im angegebenen Stil gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
  if (move_cnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
  (await presenter).updateInkTrailStartPoint(evt, style);
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

## Browser-Kompatibilität

{{Compat}}
