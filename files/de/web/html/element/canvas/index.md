---
title: "<canvas>: Das Graphics Canvas-Element"
slug: Web/HTML/Element/canvas
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Verwenden Sie das **HTML-`<canvas>`-Element** entweder mit der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardwert ist 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Gibt an, ob Transluzenz ein Faktor sein wird. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen den standardisierten [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext).
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardwert ist 300.

## Verwendungshinweise

### Alternative Inhalte

Sie sollten alternativen Inhalt innerhalb des `<canvas>`-Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern angezeigt, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript.

### Abschließendes `</canvas>`-Tag

Im Gegensatz zum {{HTMLElement("img")}}-Element **benötigt** das `<canvas>`-Element das abschließende Tag (`</canvas>`).

### Größenanpassung des Canvas mit CSS versus HTML

Die angezeigte Größe des Canvas kann mithilfe von CSS geändert werden, aber wenn Sie dies tun, wird das Bild während des Renderings skaliert, um in die gestylte Größe zu passen, was dazu führen kann, dass das endgültige Grafik-Rendering verzerrt wird.

Es ist besser, Ihre Canvas-Dimensionen zu spezifizieren, indem Sie die Attribute `width` und `height` direkt auf die `<canvas>`-Elemente setzen, entweder direkt im HTML oder durch Verwendung von JavaScript.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>`-Elements hängt vom Browser und der Umgebung ab. Während in den meisten Fällen die maximalen Abmessungen über 10.000 x 10.000 Pixel liegen, begrenzen iOS-Geräte die Canvas-Größe bemerkenswerterweise auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenbeschränkungen in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Wenn die maximalen Abmessungen oder der Bereich überschritten werden, wird das Canvas unbrauchbar — Zeichenbefehle funktionieren nicht.

### Verwenden eines Offscreen-Canvas

Ein Canvas kann mit der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API gerendert werden, wobei das Dokument und das Canvas entkoppelt sind. Der Vorteil besteht darin, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) die Canvas-Renderings behandeln kann und der Haupt-Thread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird. Durch Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, selbst wenn Sie komplexe Grafiken auf einem Offscreen-Canvas ausführen. Weitere Informationen finden Sie in der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API-Dokumentation.

## Barrierefreiheit

### Alternative Inhalte

Das `<canvas>`-Element allein ist nur eine Bitmap und bietet keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden für Barrierefreiheitstools nicht als semantisches HTML offengelegt. Im Allgemeinen sollten Sie die Verwendung von Canvas auf einer barrierefreien Website oder App vermeiden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas-Zugänglichkeitsanwendungsfälle](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Zugänglichkeitsprobleme des Canvas-Elements](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best Practices für interaktive Canvas-Elemente](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieser Codeausschnitt fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, wenn ein Browser das Canvas nicht lesen oder rendern kann.

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Rufen Sie dann im JavaScript-Code [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf, um einen Zeichenkontext zu erhalten und mit dem Zeichnen auf dem Canvas zu beginnen:

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierungselemente</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebettete Inhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Transparent, aber ohne
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktive Inhalte</a
        >
        Nachfahren abgesehen von {{HTMLElement("a")}}-Elementen,
        {{HTMLElement("button")}}-Elementen,
        {{HTMLElement("input")}}-Elementen, deren
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a>-Attribut
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierungselemente</a
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas)
- [Canvas-Spickzettel](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas-Spickzettel](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML Canvas Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [Verwenden von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
