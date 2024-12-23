---
title: Boilerplate 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Canvas_size_and_WebGL","Web/API/WebGL_API/By_example/Scissor_animation")}}

Dieses Beispiel beschreibt wiederkehrende Codeabschnitte, die von nun an ausgeblendet werden, und definiert eine JavaScript-Hilfsfunktion, um die WebGL-Initialisierung zu erleichtern.

## Boilerplate-Code für das Einrichten des WebGL-Rendering-Kontexts

Mittlerweile sind Sie daran gewöhnt, dieselben {{Glossary("HTML", "HTML")}}-, {{Glossary("CSS", "CSS")}}- und {{Glossary("JavaScript", "JavaScript")}}-Elemente immer wieder zu sehen. Wir werden sie daher von nun an ausblenden. Dies ermöglicht es uns, uns auf die interessanten Codeabschnitte zu konzentrieren, die für das Lernen von {{Glossary("WebGL", "WebGL")}} am relevantesten sind.

Konkret enthält das HTML ein {{HTMLElement("p")}}-Element, das einige beschreibende Texte über die Seite enthält und möglicherweise auch Fehlermeldungen; ein {{HTMLElement("canvas")}}-Element und optional ein {{HTMLElement("button")}}. Das CSS enthält Regeln für `body`, `canvas` und `button`. Jegliches zusätzliche nicht-triviale CSS und HTML wird auf den Seiten der spezifischen Beispiele angezeigt.

In den folgenden Beispielen werden wir eine JavaScript-Hilfsfunktion, `getRenderingContext()`, verwenden, um den [WebGL-Renderingkontext](/de/docs/Web/API/WebGLRenderingContext) zu initialisieren. Bis jetzt sollten Sie verstehen, was die Funktion macht. Grundsätzlich erhält sie den WebGL-Renderingkontext vom Canvas-Element, initialisiert den Zeichenpuffer, löscht ihn schwarz und gibt den initialisierten Kontext zurück. Im Fehlerfall zeigt sie eine Fehlermeldung an und gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

Schließlich wird der gesamte JavaScript-Code in einer direkten Funktion ausgeführt, was eine häufige JavaScript-Technik ist (siehe {{Glossary("Function", "Funktion")}}). Die Funktionsdeklaration und der Aufruf werden ebenfalls verborgen.

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

{{PreviousNext("Web/API/WebGL_API/By_example/Canvas_size_and_WebGL","Web/API/WebGL_API/By_example/Scissor_animation")}}
