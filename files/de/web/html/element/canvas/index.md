---
title: "<canvas>: Das Grafik-Canvas-Element"
slug: Web/HTML/Element/canvas
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Verwenden Sie das **HTML `<canvas>` Element** zusammen mit der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardwert ist 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Lässt das Canvas wissen, ob Transluzenz berücksichtigt wird. Wenn das Canvas weiß, dass keine Transluzenz vorliegt, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen die standardisierte Methode [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardwert ist 300.

## Nutzungshinweise

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>`-Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript angezeigt.

### Abschluss-Tag `</canvas>`

Im Gegensatz zum {{HTMLElement("img")}} Element **erfordert** das `<canvas>` Element das schließende Tag (`</canvas>`).

### Größenanpassung des Canvas mit CSS im Vergleich zu HTML

Die angezeigte Größe des Canvas kann mit CSS geändert werden, aber wenn Sie dies tun, wird das Bild während der Wiedergabe skaliert, um der gestylten Größe zu entsprechen, was dazu führen kann, dass die endgültige Grafikdarstellung verzerrt wird.

Es ist besser, die Canvas-Dimensionen festzulegen, indem Sie die `width` und `height` Attribute direkt auf den `<canvas>` Elementen setzen, entweder direkt im HTML oder durch die Verwendung von JavaScript.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>` Elements hängt vom Browser und der Umgebung ab. Während in den meisten Fällen die maximalen Abmessungen über 10.000 x 10.000 Pixel hinausgehen, beschränken insbesondere iOS-Geräte die Canvas-Größe auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenbeschränkungen in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Wenn die maximalen Abmessungen oder der Bereich überschritten werden, wird das Canvas unbrauchbar — Zeichenbefehle funktionieren nicht.

### Verwendung eines Offscreen-Canvas

Ein Canvas kann mithilfe der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API gerendert werden, bei der das Dokument und das Canvas entkoppelt sind.
Der Vorteil ist, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) das Canvas-Rendering übernehmen kann und der Haupt-Thread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird.
Durch die Parallelisierung von Aufgaben bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, selbst wenn Sie komplexe Grafiken auf einem Offscreen-Canvas ausführen.
Für weitere Informationen siehe die [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) API-Dokumentation.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>` Element ist für sich genommen nur ein Bitmap und bietet keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden Barrierefreiheitswerkzeugen nicht wie semantisches HTML zugänglich gemacht. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas-Barrierefreiheits-Anwendungsfälle](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Barrierefreiheitsthemen des Canvas-Elements](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Beste Praktiken für interaktive Canvas-Elemente](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieses Code-Snippet fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, falls ein Browser das Canvas nicht lesen oder rendern kann.

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Dann rufen Sie im JavaScript-Code [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf, um einen Zeichenkontext zu erhalten und beginnen, auf dem Canvas zu zeichnen:

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Transparent, jedoch ohne
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktive Inhalt</a
        >
        Nachkommen außer {{HTMLElement("a")}} Elementen,
        {{HTMLElement("button")}} Elementen,
        {{HTMLElement("input")}} Elementen, deren
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a> Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
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
- [Canvas Anleitung](/de/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas)
- [Canvas Cheat Sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas Cheat Sheet](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML Canvas Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) via Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) via Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
