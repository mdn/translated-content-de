---
title: "<canvas>: Das Grafikelement Leinwand"
slug: Web/HTML/Element/canvas
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Nutzen Sie das **HTML-`<canvas>`-Element** zusammen mit entweder der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardmäßig auf 150 gesetzt.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Lässt die Leinwand wissen, ob Transluzenz ein Faktor sein wird. Wenn die Leinwand weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; stattdessen die standardisierte Methode [`canvas.getContext('2d', { alpha: false })`](/de/docs/Web/API/HTMLCanvasElement/getContext) verwenden.
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardmäßig auf 300 gesetzt.

## Verwendungshinweise

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>`-Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript angezeigt.

### Schließender `</canvas>`-Tag

Im Gegensatz zum {{HTMLElement("img")}}-Element erfordert das `<canvas>`-Element den Schlusstag (`</canvas>`).

### Größe der Leinwand mit CSS versus HTML

Die angezeigte Größe der Leinwand kann mit CSS geändert werden, aber wenn Sie dies tun, wird das Bild während des Renderings skaliert, um die gestaltete Größe zu erreichen, was dazu führen kann, dass die endgültige Grafik verzerrt wird.

Es ist besser, Ihre Leinwandabmessungen durch Festlegen der `width`- und `height`-Attribute direkt auf den `<canvas>`-Elementen anzugeben, entweder direkt im HTML oder mithilfe von JavaScript.

### Maximale Leinwandgröße

Die genaue Maximalgröße eines `<canvas>`-Elements hängt vom Browser und der Umgebung ab. In den meisten Fällen überschreiten die Höchstabmessungen 10.000 x 10.000 Pixel, insbesondere auf iOS-Geräten ist die Leinwandgröße jedoch auf nur 4.096 x 4.096 Pixel begrenzt. Siehe [Größenbeschränkungen der Leinwand in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Das Überschreiten der maximalen Dimensionen oder Fläche macht die Leinwand unbrauchbar – Zeichenbefehle funktionieren nicht.

### Verwendung einer Offscreen-Leinwand

Eine Leinwand kann mit der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API gerendert werden, wobei das Dokument und die Leinwand entkoppelt sind. Der Vorteil besteht darin, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) das Rendern der Leinwand übernimmt und der Haupt-Thread Ihrer Webanwendung nicht durch Leinwandoperationen blockiert wird. Durch die Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, auch wenn Sie komplexe Grafiken auf einer Offscreen-Leinwand ausführen. Für mehr Informationen siehe die [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-API-Dokumentation.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>`-Element ist allein eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden Barrierefreiheitstools nicht wie semantisches HTML zugänglich gemacht. Im Allgemeinen sollten Sie es vermeiden, Canvas in einer zugänglichen Website oder App zu verwenden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas-Zugänglichkeitsanwendungsfälle](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas-Element-Zugänglichkeitsprobleme](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Beste Praktiken für interaktive Canvas-Elemente](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieses Code-Snippet fügt Ihrem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, falls ein Browser die Leinwand nicht lesen oder darstellen kann.

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Rufen Sie dann im JavaScript-Code [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf, um einen Zeichenkontext zu erhalten und mit dem Zeichnen auf der Leinwand zu beginnen:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Transparent, aber ohne
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        >
        außer für {{HTMLElement("a")}}-Elemente,
        {{HTMLElement("button")}}-Elemente,
        {{HTMLElement("input")}}-Elemente, deren
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a>-Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Schlusstag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
      <td>Jede</td>
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
- [Safari-HTML-Canvas-Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
