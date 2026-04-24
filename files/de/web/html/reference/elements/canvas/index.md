---
title: "`<canvas>` HTML Grafik-Canvas-Element"
short-title: <canvas>
slug: Web/HTML/Reference/Elements/canvas
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Verwenden Sie das **HTML `<canvas>` Element** zusammen mit der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardwert ist 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Gibt an, ob Transparenz ein Faktor sein wird. Wenn das Canvas weiß, dass es keine Transparenz gibt, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen die standardisierte Methode [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardwert ist 300.

## Verwendungsnotizen

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>` Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript gerendert.

### Schließendes `</canvas>` Tag

Im Gegensatz zum {{HTMLElement("img")}} Element **benötigt** das `<canvas>` Element das schließende Tag (`</canvas>`).

### Größenänderung des Canvas mit CSS gegenüber HTML

Die angezeigte Größe des Canvas kann mit CSS geändert werden. Wenn Sie dies tun, wird das Bild jedoch während des Renderings skaliert, um die gestylte Größe zu erreichen, was dazu führen kann, dass das endgültige Grafikrendering verzerrt wird.

Es ist besser, die Dimensionen Ihres Canvas durch die direkte Festlegung der Attribute `width` und `height` auf den `<canvas>` Elementen festzulegen, entweder direkt im HTML oder mithilfe von JavaScript.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>` Elements hängt vom Browser und der Umgebung ab. In den meisten Fällen übersteigen die maximalen Abmessungen 10.000 x 10.000 Pixel, jedoch beschränken iOS-Geräte die Canvas-Größe auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenbeschränkungen in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Das Überschreiten der maximalen Abmessungen oder Fläche macht das Canvas unbrauchbar — Zeichenbefehle funktionieren nicht.

### Verwendung eines Offscreen-Canvas

Ein Canvas kann mit der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API gerendert werden, bei der das Dokument und das Canvas entkoppelt sind. Der Vorteil besteht darin, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) das Canvas-Rendering übernehmen kann, und der Haupt-Thread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird. Durch die Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, selbst wenn Sie komplexe Grafiken auf einem Offscreen-Canvas ausführen. Weitere Informationen finden Sie in der Dokumentation zur [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>` Element an sich ist nur eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden nicht wie semantisches HTML zu Barrierefreiheits-Tools exponiert. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas Accessibility Use Cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas Element Accessibility Issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [Best Practices for Interactive Canvas Elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieses Codebeispiel fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein alternativer Text wird bereitgestellt, falls ein Browser das Canvas nicht lesen oder rendern kann.

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Rufen Sie dann im JavaScript-Code [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf, um einen Zeichenkontext zu erhalten und mit dem Zeichnen auf das Canvas zu beginnen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
ctx.fillRect(10, 10, 100, 100);
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 150)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Transparent, jedoch ohne
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        >
        als Nachkommen außer {{HTMLElement("a")}} Elemente,
        {{HTMLElement("button")}} Elemente,
        {{HTMLElement("input")}} Elemente, deren
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>-Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas)
- [Canvas Spickzettel](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas Spickzettel](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML-Canvas-Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
