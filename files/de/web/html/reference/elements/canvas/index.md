---
title: "<canvas>: Das Grafik-Canvas-Element"
slug: Web/HTML/Reference/Elements/canvas
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Verwenden Sie das **HTML-`<canvas>`-Element** zusammen mit entweder der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardwert ist 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Lässt das Canvas wissen, ob Transparenz eine Rolle spielt. Wenn das Canvas weiß, dass keine Transparenz vorliegt, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen die standardisierte Methode [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardwert ist 300.

## Verwendungshinweise

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>`-Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript angezeigt.

### Schließendes `</canvas>`-Tag

Im Gegensatz zum {{HTMLElement("img")}}-Element **erfordert** das `<canvas>`-Element das Schließen des Tags (`</canvas>`).

### Die Größe des Canvas mit CSS gegenüber HTML anpassen

Die angezeigte Größe des Canvas kann mit CSS geändert werden, aber wenn Sie dies tun, wird das Bild während des Renderings skaliert, um die gestylte Größe anzupassen, was dazu führen kann, dass die endgültige Grafikdarstellung verzerrt wird.

Es ist besser, Ihre Canvas-Abmessungen direkt über die `width`- und `height`-Attribute an den `<canvas>`-Elementen festzulegen, entweder direkt im HTML oder über JavaScript.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>`-Elements hängt vom Browser und der Umgebung ab. Während in den meisten Fällen die maximalen Abmessungen über 10.000 x 10.000 Pixel hinausgehen, beschränken iOS-Geräte die Canvas-Größe auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenlimits in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Wenn die maximalen Abmessungen oder die Fläche überschritten werden, wird das Canvas unbrauchbar — Zeichenbefehle funktionieren nicht.

### Verwenden eines Offscreen-Canvas

Ein Canvas kann mit der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API gerendert werden, bei der das Dokument und das Canvas entkoppelt sind. Der Vorteil ist, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) das Canvas-Rendering übernehmen kann und der Hauptthread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird. Durch Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, selbst wenn Sie komplexe Grafiken auf einem Offscreen-Canvas ausführen. Weitere Informationen finden Sie in der Dokumentation zur [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>`-Element selbst ist nur eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden Barrierefreiheitstools nicht wie semantisches HTML bereitgestellt. Im Allgemeinen sollten Sie darauf verzichten, Canvas auf einer zugänglichen Website oder App zu verwenden. Die folgenden Leitfäden können Ihnen helfen, es zugänglicher zu machen.

- [Canvas-Zugänglichkeitsanwendungsfälle](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Probleme der Barrierefreiheit des Canvas-Elements](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas-Zugänglichkeit in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best Practices für interaktive Canvas-Elemente](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieses Codebeispiel fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, falls ein Browser das Canvas nicht lesen oder rendern kann.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließ-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Transparenter Inhalt, aber ohne
        <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiven Inhalt</a>
        als Nachkommen, außer für {{HTMLElement("a")}}-Elemente,
        {{HTMLElement("button")}}-Elemente,
        {{HTMLElement("input")}}-Elemente, deren
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>-Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keiner, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing-Inhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
- [Canvas-Spickzettel](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas-Spickzettel](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML-Canvas-Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` Kontext zum Zeichnen in 2D für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
