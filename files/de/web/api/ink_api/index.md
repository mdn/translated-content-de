---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink-API ermöglicht es Browsern, direkt verfügbare Betriebssystem-Kompositors zu nutzen, wenn Stiftstriche in einer Zeichenanwendung gezeichnet werden, wodurch die Latenz reduziert und die Leistung erhöht wird.

## Konzepte und Verwendung

Zeichnen im Web bezieht sich auf App-Funktionen, die [Pointer-Events](/de/docs/Web/API/Pointer_events) verwenden, um einen gleichmäßigen Stiftstrich zu zeichnen — beispielsweise eine Zeichen-App oder eine Dokumenten-Signaturfunktion.

Pointer-Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die Zeitverzögerung zwischen dem Start und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen dem Beginn des Zeichnens durch den Benutzer (zum Beispiel mit einem Stift oder einer Maus) und dem Auftauchen des Strichs auf dem Bildschirm führt.

Die Ink-API reduziert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, leiten Browser solche Rendering-Anweisungen direkt an die Betriebssystem-Kompositors weiter. Wenn das zugrunde liegende Betriebssystem keinen spezialisierten Betriebssystem-Kompositor für diesen Zweck hat, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsfähig wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositors sind Teil der Render-Mechanik, die das UI auf dem Bildschirm in einem Browser oder Betriebssystem zeichnet. Sehen Sie sich [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) für einige interessante Einblicke an, wie ein Kompositor in einem Webbrowser funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts erfüllt wird. Dies weist den Betriebssystem-Kompositor an, Stiftstriche zwischen Pointer-Event-Dispatches in dem jeweils nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugang zu [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekten, die von der Anwendung zur Darstellung der Striche verwendet werden können.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den Betriebssystem-Kompositor an, Stiftstriche zwischen Pointer-Event-Dispatches zu rendern.

### Erweiterungen für andere Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben ihm die Leinwand als Präsentationsbereich, den es verwalten soll, und speichern das zurückgegebene Promise in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Linienkopfes jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Promise erfüllt wird, mit seiner Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen; es wird übergeben:

- Das letzte vertraute Pointer-Event, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass im Namen der App eine delegierte Tintenlinie in dem angegebenen Stil vor dem Standard-Browser-Rendering gezeichnet wird, bis zum nächsten Mal, wenn ein `pointermove`-Ereignis empfangen wird.

#### HTML

```html
<canvas id="canvas"></canvas>
<div id="div">Delegated ink trail should match the color of this div.</div>
```

#### CSS

```css
div {
  background-color: lime;
  position: fixed;
  top: 1rem;
  left: 1rem;
}
```

#### JavaScript

```js
const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let moveCnt = 0;
let style = { color: "lime", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  const pointSize = 10;
  ctx.fillStyle = style.color;
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (moveCnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    moveCnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  moveCnt += 1;
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
