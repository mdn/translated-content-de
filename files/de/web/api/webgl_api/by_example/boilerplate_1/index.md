---
title: Boilerplate 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Canvas_size_and_WebGL","Learn/WebGL/By_example/Scissor_animation")}}

Dieses Beispiel beschreibt sich wiederholende Code-Abschnitte, die von nun an ausgeblendet werden, sowie die Definition einer JavaScript-Hilfsfunktion, um die Initialisierung von WebGL zu erleichtern.

## Boilerplate-Code zur Einrichtung des WebGL-Rendering-Kontexts

Bis jetzt sind Sie es gewohnt, dieselben Abschnitte von [HTML](/de/docs/Glossary/HTML), [CSS](/de/docs/Glossary/CSS) und [JavaScript](/de/docs/Glossary/JavaScript) immer wieder zu sehen. Daher werden wir sie von nun an ausblenden. Dies ermöglicht es uns, uns auf die interessanten Code-Teile zu konzentrieren, die am relevantesten für das Lernen von [WebGL](/de/docs/Glossary/WebGL) sind.

Konkret hat das HTML ein {{HTMLElement("p")}}-Element, das einige beschreibende Texte über die Seite enthält und möglicherweise auch Fehlermeldungen; ein {{HTMLElement("canvas")}}-Element; und optional ein {{HTMLElement("button")}}. Das CSS enthält Regeln für `body`, `canvas` und `button`. Jegliches zusätzliche nicht-triviale CSS und HTML wird auf den Seiten spezifischer Beispiele angezeigt.

In den folgenden Beispielen verwenden wir eine JavaScript-Hilfsfunktion, `getRenderingContext()`, um den {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}} zu initialisieren. Sie sollten inzwischen verstehen, was die Funktion tut. Im Wesentlichen holt sie den WebGL-Rendering-Kontext vom Canvas-Element, initialisiert den Zeichenpuffer, leert ihn schwarz und gibt den initialisierten Kontext zurück. Im Fehlerfall wird eine Fehlermeldung angezeigt und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Abschließend wird der gesamte JavaScript-Code innerhalb einer unmittelbaren Funktion ausgeführt, was eine gängige JavaScript-Technik ist (siehe [Funktion](/de/docs/Glossary/Function)). Die Funktionsdeklaration und der Aufruf werden ebenfalls ausgeblendet.

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
