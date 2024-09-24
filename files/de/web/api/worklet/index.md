---
title: Worklet
slug: Web/API/Worklet
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

Die **`Worklet`**-Schnittstelle ist eine leichtgewichtige Version von [Web Workers](/de/docs/Web/API/Web_Workers_API) und gibt Entwicklern Zugriff auf niedere Teile der Rendering-Pipeline.

Mit Worklets können Sie JavaScript- und [WebAssembly](/de/docs/WebAssembly)-Code für Grafik-Rendering oder Audioverarbeitung ausführen, wo eine hohe Leistung erforderlich ist.

Worklets erlauben den statischen Import von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), falls unterstützt, mit Hilfe von [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
Dynamischer Import ist laut Spezifikation untersagt — das Aufrufen von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler hervorrufen.

## Worklet-Typen

Worklets sind auf spezifische Anwendungsfälle beschränkt; sie können nicht für beliebige Berechnungen wie Web Workers verwendet werden. Die `Worklet`-Schnittstelle abstrahiert Eigenschaften und Methoden, die allen Arten von Worklets gemeinsam sind, und kann nicht direkt erstellt werden. Stattdessen können Sie eine der folgenden Klassen verwenden:

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
      <td>{{domxref("AudioWorklet")}}</td>
      <td>Für die Audiobearbeitung mit benutzerdefinierten AudioNodes.</td>
      <td>Web Audio Render-Thread</td>
      <td>
        <a href="https://webaudio.github.io/web-audio-api/#AudioWorklet"
          >Web Audio API</a
        >
      </td>
    </tr>
    <tr>
      <td>{{domxref("AnimationWorklet")}}</td>
      <td>
        Zum Erstellen von scroll-verknüpften und anderen hochleistungsfähigen prozeduralen
        Animationen.
      </td>
      <td>Compositor-Thread</td>
      <td>
        <a href="https://wicg.github.io/animation-worklet/"
          >CSS Animation Worklet API</a
        >
      </td>
    </tr>
    <tr>
      <td>{{domxref("LayoutWorklet")}}</td>
      <td>Zum Definieren der Positionierung und Dimensionen von benutzerdefinierten Elementen.</td>
      <td></td>
      <td>
        <a
          href="https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet"
          >CSS Layout API</a
        >
      </td>
    </tr>
    <tr>
      <td>{{domxref("SharedStorageWorklet")}}</td>
      <td>Für die Durchführung privater Operationen auf domänenübergreifenden Daten, ohne Risiko eines Datenlecks.</td>
      <td>Haupt-Thread</td>
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
> Paint Worklets, definiert durch die [CSS Painting API](/de/docs/Web/API/CSS_Painting_API), sind keine Unterklassen von `Worklet`. Sie werden über ein reguläres `Worklet`-Objekt aufgerufen, das durch {{DOMxref("CSS.paintWorklet_static", "CSS.paintWorklet")}} gewonnen wird.

Für 3D-Rendering mit [WebGL](/de/docs/Web/API/WebGL_API) verwenden Sie keine Worklets. Stattdessen schreiben Sie Vertex-Shader und Fragment-Shader mit GLSL-Code, und diese Shader werden dann auf der Grafikkarte ausgeführt.

## Instanz-Eigenschaften

_Die Worklet-Schnittstelle definiert keine Eigenschaften._

## Instanz-Methoden

- {{domxref("Worklet.addModule()")}}
  - : Fügt das Skriptmodul von der angegebenen URL zum aktuellen Worklet hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Houdini: Demystifying CSS](https://developer.chrome.com/docs/css-ui/houdini) auf Google Developers (2016)
- [AudioWorklet :: What, Why, and How](https://www.youtube.com/watch?v=g1L4O1smMC0&t=1m33s) auf YouTube (2017)
- [Enter AudioWorklet](https://developer.chrome.com/blog/audio-worklet/) auf Google Developers (2017)
- [Animation Worklet - HTTP203 Advent](https://www.youtube.com/watch?v=ZPkMMShYxKU&t=0m19s) auf YouTube (2017)
