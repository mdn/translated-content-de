---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink API erlaubt es Browsern, direkt verfügbare Betriebssystem-Komponisten beim Zeichnen von Stiftstrichen in einer Zeichenanwendung zu nutzen, wodurch die Latenz verringert und die Leistung gesteigert wird.

## Konzepte und Verwendung

Zeichnen im Web bezieht sich auf Anwendungsmerkmale, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen flüssigen Stiftstrich zu erstellen — zum Beispiel eine Zeichenanwendung oder ein Dokumentensignierungstool.

Pointer Events werden in der Regel zuerst an den Browser-Prozess gesendet, der dann diese Events an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der Anwendung darzustellen. Die Zeitverzögerung zwischen dem Start und dem Abschluss dieses Prozesses kann beträchtlich sein, was zu einer Latenz zwischen dem Zeitpunkt führt, an dem der Benutzer beginnt zu zeichnen (zum Beispiel mit einem Stift oder einer Maus), und dem Zeitpunkt, an dem der Strich auf dem Bildschirm angezeigt wird.

Die Ink API reduziert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, geben Browser solche Rendering-Anweisungen direkt an OS-Komponisten weiter. Wenn das zugrunde liegende Betriebssystem keinen spezialisierten OS-Komponisten für diesen Zweck besitzt, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsfähig wie ein Komponist, bietet jedoch dennoch einige Verbesserungen.

> [!NOTE]
> Komponisten sind Teil der Rendering-Mechanik, die die Benutzeroberfläche auf dem Bildschirm in einem Browser oder Betriebssystem zeichnet. Weitere interessante Einblicke, wie ein Komponist innerhalb eines Webbrowsers funktioniert, finden Sie unter [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/).

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekts erfüllt wird. Dies weist den OS-Komponisten an, Erstellungsstriche zwischen den Dispatches von Pointer Events im jeweils nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink)
  - : Bietet Zugriff auf [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekte, die von der Anwendung verwendet werden können, um die Striche zu rendern.
- [`InkPresenter`](/de/docs/Web/API/InkPresenter)
  - : Weist den OS-Komponisten an, Erstellungsstriche zwischen den Dispatches von Pointer Events zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen eines Tintenpfads

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben ihm die Leinwand als Präsentationsbereich zur Verwaltung und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später wird im `pointermove`-Ereignislistener die neue Position des Spurkopfs bei jedem Auftreten des Ereignisses auf die Leinwand gezeichnet. Zusätzlich wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/InkPresenter/updateInkTrailStartPoint) des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; hierfür werden folgende Parameter übergeben:

- Das letzte vertrauenswürdige Pointer-Ereignis, das den Renderpunkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenspur im Namen der App vor dem Standard-Browser-Rendering in dem angegebenen Stil gezeichnet wird, bis sie das nächste Mal ein `pointermove`-Ereignis empfängt.

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
  if (move_cnt == 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
  await presenter.updateInkTrailStartPoint(evt, style);
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

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
