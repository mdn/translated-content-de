---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: aba807125c2353106efb38decb31def1c5236224
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink API ermöglicht es Browsern, beim Zeichnen von Stiftstrichen in einer Zeichenfunktion einer Anwendung direkt verfügbare Compositors auf Betriebssystemebene zu nutzen. Dadurch werden die Latenz verringert und die Leistung verbessert.

## Konzepte und Verwendung

Das Zeichnen mit einem Stift im Web bezeichnet Funktionen von Anwendungen, bei denen [Pointer Events](/de/docs/Web/API/Pointer_events) verwendet werden, um einen flüssigen Stiftstrich zu zeichnen – beispielsweise in einer Zeichenanwendung oder beim Unterzeichnen eines Dokuments.

Pointer Events werden normalerweise zuerst an den Browserprozess gesendet. Dieser leitet sie an die JavaScript-Ereignisschleife weiter, damit die zugehörigen Handler-Funktionen ausgeführt und das Ergebnis in der Anwendung gerendert werden kann. Die Zeit zwischen Beginn und Ende dieses Vorgangs kann erheblich sein. Dadurch entsteht eine Verzögerung zwischen dem Beginn des Zeichnens durch die nutzende Person (beispielsweise mit einem Eingabestift oder einer Maus) und der Anzeige des Strichs auf dem Bildschirm.

Die Ink API verringert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, leiten Browser die Rendering-Anweisungen direkt an Compositors auf Betriebssystemebene weiter. Verfügt das zugrunde liegende Betriebssystem nicht über einen dafür geeigneten spezialisierten Compositor, verwenden Browser ihren eigenen optimierten Rendering-Code. Dieser ist zwar nicht so leistungsfähig wie ein Compositor, bringt aber dennoch Verbesserungen.

> [!NOTE]
> Compositors sind Teil der Rendering-Infrastruktur, die in einem Browser oder Betriebssystem die Benutzeroberfläche auf dem Bildschirm zeichnet. [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) bietet interessante Einblicke in die Funktionsweise eines Compositors innerhalb eines Webbrowsers.

Der Einstiegspunkt ist die Eigenschaft [`Navigator.ink`](/de/docs/Web/API/Navigator/ink), die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des Objekts [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) erfüllt wird. Dadurch wird der Compositor auf Betriebssystemebene angewiesen, Stiftstriche jeweils zwischen der Auslösung von Pointer Events im nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Ermöglicht der Anwendung den Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte zum Rendern der Striche.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den Compositor auf Betriebssystemebene an, Stiftstriche zwischen der Auslösung von Pointer Events zu rendern.

### Erweiterungen anderer Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Stiftspur

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf. Dabei übergeben wir die Canvas als Anzeigebereich, für den die Methode zuständig sein soll, und speichern das zurückgegebene Promise in der Variablen `presenter`.

Später wird im Event Listener für `pointermove` bei jedem Auslösen des Events die neue Position der Spurspitze auf die Canvas gezeichnet. Zusätzlich wird für das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, mit dem das Promise `presenter` erfüllt wird, die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen. Dabei werden ihr folgende Werte übergeben:

- Das letzte vertrauenswürdige Pointer Event, das den Rendering-Punkt für den aktuellen Frame angibt.
- Ein `style`-Objekt mit Einstellungen für Farbe und Durchmesser.

Dadurch wird im angegebenen Stil stellvertretend für die Anwendung eine Stiftspur gezeichnet, noch bevor das standardmäßige Rendering des Browsers erfolgt – bis zum nächsten `pointermove`-Event.

#### HTML

```html
<canvas id="my-canvas"></canvas>
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
const canvas = document.getElementById("my-canvas");
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
