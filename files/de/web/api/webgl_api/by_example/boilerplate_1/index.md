---
title: Boilerplate 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Canvas_size_and_WebGL","Learn/WebGL/By_example/Scissor_animation")}}

Dieses Beispiel beschreibt wiederkehrende Codeabschnitte, die ab jetzt verborgen werden, sowie die Definition einer JavaScript-Hilfsfunktion, um die WebGL-Initialisierung zu erleichtern.

## Boilerplate-Code zur Einrichtung des WebGL-Rendering-Kontexts

Mittlerweile sind Sie es gewohnt, immer wieder die gleichen Stücke von [HTML](/de/docs/Glossary/HTML), [CSS](/de/docs/Glossary/CSS) und [JavaScript](/de/docs/Glossary/JavaScript) zu sehen. Deshalb werden wir sie von nun an verbergen. Dies ermöglicht es uns, uns auf die interessanten Codeabschnitte zu konzentrieren, die für das Lernen von [WebGL](/de/docs/Glossary/WebGL) am relevantesten sind.

Konkret enthält das HTML ein {{HTMLElement("p")}}-Element, das einige beschreibende Texte über die Seite enthält und auch Fehlermeldungen aufnehmen kann; ein {{HTMLElement("canvas")}}-Element; und optional ein {{HTMLElement("button")}}. Das CSS enthält Regeln für `body`, `canvas` und `button`. Alle zusätzlichen nicht-trivialen CSS- und HTML-Codes werden auf den Seiten spezifischer Beispiele angezeigt.

In den folgenden Beispielen werden wir eine JavaScript-Hilfsfunktion `getRenderingContext()` verwenden, um den {{domxref("WebGLRenderingContext","WebGL-Rendering-Kontext", "", 1)}} zu initialisieren. Sie sollten inzwischen verstehen, was diese Funktion tut. Grundsätzlich holt sie den WebGL-Rendering-Kontext vom Canvas-Element, initialisiert den Zeichnungspuffer, löscht ihn schwarz und gibt den initialisierten Kontext zurück. Im Fehlerfall zeigt sie eine Fehlermeldung an und gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

Schließlich wird der gesamte JavaScript-Code in einer unmittelbaren Funktion laufen, was eine gängige JavaScript-Technik ist (siehe [Function](/de/docs/Glossary/Function)). Die Funktionsdeklaration und der Aufruf werden ebenfalls verborgen.

### HTML

```html
<p>[ Some descriptive text about the example. ]</p>
<button>[ Optional button element. ]</button>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

### CSS

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

### JavaScript

```js
function getRenderingContext() {
  const canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    const paragraph = document.querySelector("p");
    paragraph.textContent =
      "Failed to get WebGL context. Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/boilerplate-1) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Canvas_size_and_WebGL","Learn/WebGL/By_example/Scissor_animation")}}
