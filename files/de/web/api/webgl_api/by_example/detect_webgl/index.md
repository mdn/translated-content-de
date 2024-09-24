---
title: WebGL erkennen
slug: Web/API/WebGL_API/By_example/Detect_WebGL
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}

Dieses Beispiel demonstriert, wie Sie einen {{Glossary("WebGL")}}-Rendering-Kontext erkennen und das Ergebnis dem Benutzer mitteilen.

## WebGL Feature-Erkennung

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In diesem ersten Beispiel prüfen wir, ob der Browser {{Glossary("WebGL")}} unterstützt. Zu diesem Zweck versuchen wir, den {{domxref("WebGLRenderingContext","WebGL rendering context","",1)}} von einem {{domxref("HTMLCanvasElement","canvas")}}-Element zu erhalten. Der {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}} ist eine Schnittstelle, über die Sie den Status der Grafikmaschine einstellen und abfragen, Daten an das WebGL senden und Zeichenbefehle ausführen können.

Das Speichern des Status der Grafikmaschine innerhalb einer einzelnen Kontextschnittstelle ist nicht einzigartig für {{Glossary("WebGL")}}. Dies wird auch in anderen Grafik-{{Glossary("API")}} durchgeführt, wie dem {{domxref("CanvasRenderingContext2D","canvas 2D rendering context", "", 1)}}. Die Eigenschaften und Variablen, die Sie anpassen können, unterscheiden sich jedoch je nach {{Glossary("API")}}.

```html
<p>[ Hier würde das Ergebnis der WebGL-Feature-Erkennung angezeigt ]</p>
<button>Hier drücken, um WebGLRenderingContext zu erkennen</button>
```

```css
body {
  text-align: center;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
// Führen Sie alles innerhalb des Fensterladeereignis-Handlers aus, um sicherzustellen,
// dass der DOM vollständig geladen und gestylt ist, bevor Sie versuchen, ihn zu manipulieren.
window.addEventListener(
  "load",
  () => {
    const paragraph = document.querySelector("p");
    const button = document.querySelector("button");

    // Klickenereignis-Handler zum Button hinzufügen.
    button.addEventListener("click", detectWebGLContext, false);
    function detectWebGLContext() {
      // Canvas-Element erstellen. Das Canvas wird nicht in das
      // Dokument selbst hinzugefügt und wird daher nie im
      // Browserfenster angezeigt.
      const canvas = document.createElement("canvas");

      // WebGLRenderingContext vom Canvas-Element abrufen.
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      // Ergebnis berichten.
      paragraph.textContent =
        gl instanceof WebGLRenderingContext
          ? "Glückwunsch! Ihr Browser unterstützt WebGL."
          : "Fehlgeschlagen. Ihr Browser oder Gerät unterstützt möglicherweise kein WebGL.";
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl) verfügbar.

{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}
