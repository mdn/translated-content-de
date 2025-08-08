---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Das Ink-API ermöglicht es Browsern, direkt die verfügbaren Betriebssystem-Kompositore zu nutzen, wenn sie Pinselstriche in einer Zeichenanwendung zeichnen, wodurch die Latenz verringert und die Leistung gesteigert wird.

## Konzepte und Verwendung

Zeichnen im Web bezieht sich auf Anwendungsfunktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen sanften Pinselstrich zu zeichnen - zum Beispiel eine Zeichenanwendung oder eine Dokumentensignaturfunktion.

Pointer-Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugeordneten Handlerfunktionen auszuführen und das Ergebnis in der App darzustellen. Die Zeitverzögerung zwischen Beginn und Abschluss dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen dem Beginn des Zeichnens durch den Benutzer (zum Beispiel mit einem Stift oder einer Maus) und dem Erscheinen des Strichs auf dem Bildschirm führt.

Das Ink-API reduziert diese Latenz erheblich, indem es den Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo immer möglich, übergeben Browser solche Rendering-Anweisungen direkt an Betriebssystem-Kompositore. Wenn das zugrunde liegende Betriebssystem keinen spezialisierten OS-Kompositor für diesen Zweck hat, verwenden Browser ihren eigenen optimierten Rendering-Code. Das ist nicht so leistungsstark wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositore sind Teil der Rendering-Maschine, die die Benutzeroberfläche auf dem Bildschirm in einem Browser oder Betriebssystem zeichnet. Siehe [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) für interessante Einblicke, wie ein Kompositor in einem Webbrowser funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts erfüllt wird. Dies weist den OS-Kompositor an, Tintenstriche zwischen der Dispatch von Pointer-Events in jedem Fall im nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die die Anwendung nutzen kann, um die Striche zu rendern.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den Betriebssystem-Kompositor an, Tintenstriche zwischen der Dispatch von Pointer-Events zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Nahe dem Anfang des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben der Methode die Leinwand als Präsentationsbereich, um sich darum zu kümmern, und speichern das von ihr zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Eventlistener, wird die neue Position des Linienkopfs jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird, mit seiner Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen; diesem wird Folgendes übergeben:

- Das letzte vertrauenswürdige Pointer-Event, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farb- und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im voraus der Standardbrowser-Rendering auf der App-Basis, im angegebenen Stil, bis zum nächsten Eingang eines `pointermove`-Ereignisses gezeichnet wird.

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
let move_cnt = 0;
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
