---
title: "<canvas>: Das Grafik-Zeichenfläche Element"
slug: Web/HTML/Reference/Elements/canvas
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Verwenden Sie das **HTML `<canvas>` Element** zusammen mit entweder der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardmäßig 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Informiert die Canvas darüber, ob Transluzenz eine Rolle spielt. Wenn die Canvas weiß, dass keine Transluzenz vorliegt, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten Aufruf [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardmäßig 300.

## Anwendungshinweise

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>` Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript gerendert.

### Schließendes `</canvas>` Tag

Im Gegensatz zum {{HTMLElement("img")}} Element **erfordert** das `<canvas>` Element das Schließen des Tags (`</canvas>`).

### Größenanpassung der Canvas mit CSS versus HTML

Die angezeigte Größe der Canvas kann mit CSS geändert werden, aber wenn Sie dies tun, wird das Bild während des Renderings skaliert, um die gestylte Größe anzupassen, was dazu führen kann, dass die endgültige Grafikverarbeitung verzerrt wird.

Es ist besser, die Dimensionen Ihrer Canvas durch Setzen der `width` und `height` Attribute direkt auf den `<canvas>` Elementen zu spezifizieren, entweder direkt im HTML oder mittels JavaScript.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>` Elements hängt vom Browser und der Umgebung ab. Während in den meisten Fällen die maximalen Abmessungen 10.000 x 10.000 Pixel überschreiten, beschränken iOS-Geräte die Canvas-Größe auffällig auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenlimits in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Das Überschreiten der maximalen Dimensionen oder Fläche macht die Canvas unbrauchbar — Zeichenbefehle werden nicht funktionieren.

### Verwenden einer Offscreen-Canvas

Eine Canvas kann mit der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API gerendert werden, bei der Dokument und Canvas entkoppelt sind.
Der Vorteil besteht darin, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) die Canvas-Rendering übernehmen kann und der Haupt-Thread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird.
Durch die Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung auch dann reaktionsfähig, wenn Sie komplexe Grafiken auf einer Offscreen-Canvas ausführen.
Weitere Informationen finden Sie in der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API-Dokumentation.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>` Element ist für sich genommen nur ein Bitmap und liefert keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden nicht als semantisches HTML an Barrierefreiheitstools weitergegeben. Im Allgemeinen sollten Sie vermeiden, Canvas auf einer zugänglichen Website oder App zu verwenden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas Accessibility Use Cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas Element Accessibility Issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best Practices for Interactive Canvas Elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieses Code-Snippet fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, falls ein Browser die Canvas nicht lesen oder rendern kann.

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Anschließend rufen Sie im JavaScript-Code [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf, um einen Zeichenkontext zu erhalten und beginnen, auf die Canvas zu zeichnen:

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
          >Fließender Inhalt</a
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
        Transparent, aber ohne
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktive Inhalte</a
        >
        als Nachkommen, außer für {{HTMLElement("a")}} Elemente,
        {{HTMLElement("button")}} Elemente,
        {{HTMLElement("input")}} Elemente, deren
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
- [Canvas Cheat Sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas Cheat Sheet](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML Canvas Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
