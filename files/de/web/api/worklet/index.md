---
title: Worklet
slug: Web/API/Worklet
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

Das **`Worklet`**-Interface ist eine leichtgewichtige Version von [Web Workers](/de/docs/Web/API/Web_Workers_API) und ermöglicht Entwicklern den Zugriff auf niedrigstufige Teile der Rendering-Pipeline.

Mit Worklets können Sie JavaScript- und [WebAssembly](/de/docs/WebAssembly)-Code für Grafik-Rendering oder Audioverarbeitung ausführen, wo hohe Leistung erforderlich ist.

Worklets erlauben den statischen Import von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), falls unterstützt, mit `import`. Der dynamische Import ist durch die Spezifikation untersagt — ein Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird eine Ausnahme auslösen.

## Worklet-Typen

Worklets sind auf spezifische Anwendungsfälle beschränkt; sie können nicht für beliebige Berechnungen wie Web Workers verwendet werden. Das `Worklet`-Interface abstrahiert Eigenschaften und Methoden, die allen Arten von Worklets gemeinsam sind und kann nicht direkt erstellt werden. Stattdessen können Sie eine der folgenden Klassen verwenden:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Beschreibung</th>
      <th>Ort</th>
      <th>Spezifikation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`AudioWorklet`](/de/docs/Web/API/AudioWorklet)</td>
      <td>Zur Audiobearbeitung mit benutzerdefinierten AudioNodes.</td>
      <td>Web-Audio-Render-Thread</td>
      <td>
        <a href="https://webaudio.github.io/web-audio-api/#AudioWorklet"
          >Web Audio API</a
        >
      </td>
    </tr>
    <tr>
      <td>[`AnimationWorklet`](/de/docs/Web/API/AnimationWorklet)</td>
      <td>
        Für die Erstellung von scroll-verknüpften und anderen hoch performanten prozeduralen Animationen.
      </td>
      <td>Kompositor-Thread</td>
      <td>
        <a href="https://wicg.github.io/animation-worklet/"
          >CSS Animation Worklet API</a
        >
      </td>
    </tr>
    <tr>
      <td>[`LayoutWorklet`](/de/docs/Web/API/LayoutWorklet)</td>
      <td>Zur Definition der Positionierung und Abmessungen von benutzerdefinierten Elementen.</td>
      <td></td>
      <td>
        <a
          href="https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet"
          >CSS Layout API</a
        >
      </td>
    </tr>
    <tr>
      <td>[`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)</td>
      <td>Für das Ausführen privater Operationen an websiteübergreifenden Daten, ohne Risiko eines Datenlecks.</td>
      <td>Hauptthread</td>
      <td>
        <a
          href="https://wicg.github.io/shared-storage/"
          >Shared Storage API</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Mal-Worklets, die durch die [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) definiert sind, sind keine Subklassen von `Worklet`. Sie werden über ein reguläres `Worklet`-Objekt aufgerufen, das mittels [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) erhalten wird.

Für 3D-Rendering mit [WebGL](/de/docs/Web/API/WebGL_API) verwenden Sie keine Worklets. Stattdessen schreiben Sie Vertex-Shader und Fragment-Shader mit GLSL-Code, und diese Shader werden dann auf der Grafikkarte ausgeführt.

## Instanzeigenschaften

_Das Worklet-Interface definiert keine Eigenschaften._

## Instanzmethoden

- [`Worklet.addModule()`](/de/docs/Web/API/Worklet/addModule)
  - : Fügt das Skriptmodul an der angegebenen URL dem aktuellen Worklet hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Houdini: Entmystifizierung von CSS](https://developer.chrome.com/docs/css-ui/houdini) auf Google Developers (2016)
- [AudioWorklet :: Was, Warum und Wie](https://www.youtube.com/watch?v=g1L4O1smMC0&t=1m33s) auf YouTube (2017)
- [Enter AudioWorklet](https://developer.chrome.com/blog/audio-worklet/) auf Google Developers (2017)
- [Animation Worklet - HTTP203 Advent](https://www.youtube.com/watch?v=ZPkMMShYxKU&t=0m19s) auf YouTube (2017)
