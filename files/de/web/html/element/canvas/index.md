---
title: "<canvas>: Das Grafik-Canvas-Element"
slug: Web/HTML/Element/canvas
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Verwenden Sie das **HTML `<canvas>`-Element** mit entweder der [Canvas-Scripting-API](/de/docs/Web/API/Canvas_API) oder der [WebGL API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die Höhe des Koordinatenraums in CSS-Pixeln. Standardwert ist 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Gibt dem Canvas an, ob Transluzenz ein Faktor sein wird. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Dies wird nur von Mozilla-basierten Browsern unterstützt; verwenden Sie stattdessen die standardisierte {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}}.
- `width`
  - : Die Breite des Koordinatenraums in CSS-Pixeln. Standardwert ist 300.

## Verwendungshinweise

### Alternativer Inhalt

Sie sollten alternativen Inhalt innerhalb des `<canvas>`-Blocks bereitstellen. Dieser Inhalt wird sowohl in älteren Browsern, die Canvas nicht unterstützen, als auch in Browsern mit deaktiviertem JavaScript gerendert.

### Schließendes `</canvas>`-Tag

Im Gegensatz zum {{HTMLElement("img")}}-Element erfordert das `<canvas>`-Element das Schließen mit einem Tag (`</canvas>`).

### Größenänderung des Canvas mit CSS vs. HTML

Die angezeigte Größe des Canvas kann mit CSS geändert werden. Wenn Sie dies tun, wird das Bild während der Wiedergabe skaliert, um die gestylte Größe zu passen, was dazu führen kann, dass die endgültige Grafikdarstellung verzerrt wird.

Es ist besser, die Abmessungen Ihres Canvas festzulegen, indem Sie die `width`- und `height`-Attribute direkt an den `<canvas>`-Elementen entweder direkt im HTML oder mithilfe von JavaScript festlegen.

### Maximale Canvas-Größe

Die genaue maximale Größe eines `<canvas>`-Elements hängt vom Browser und der Umgebung ab. Während in den meisten Fällen die maximalen Abmessungen 10.000 x 10.000 Pixel überschreiten, begrenzen iOS-Geräte die Canvas-Größe auf nur 4.096 x 4.096 Pixel. Siehe [Canvas-Größenlimits in verschiedenen Browsern und Geräten](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Das Überschreiten der maximalen Abmessungen oder Fläche macht das Canvas unbrauchbar — Zeichenbefehle funktionieren nicht.

### Verwendung eines Offscreen-Canvas

Ein Canvas kann mithilfe der {{domxref("OffscreenCanvas")}}-API gerendert werden, wobei das Dokument und das Canvas entkoppelt sind. Der Vorteil ist, dass ein [Worker-Thread](/de/docs/Web/API/Web_Workers_API/Using_web_workers) die Canvas-Rendition übernehmen kann und der Haupt-Thread Ihrer Webanwendung nicht durch Canvas-Operationen blockiert wird. Durch die Parallelisierung der Arbeit bleiben andere UI-Elemente Ihrer Webanwendung reaktionsfähig, auch wenn Sie komplexe Grafiken auf einem Offscreen-Canvas ausführen. Weitere Informationen finden Sie in der {{domxref("OffscreenCanvas")}}-API-Dokumentation.

## Barrierefreiheit

### Alternativer Inhalt

Das `<canvas>`-Element selbst ist nur ein Bitmap und bietet keine Informationen über gezeichnete Objekte. Canvas-Inhalte werden im Gegensatz zu semantischem HTML nicht für Barrierefreiheits-Tools zugänglich gemacht. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Die folgenden Leitfäden können helfen, es zugänglicher zu machen.

- [Canvas-Benutzungsfälle für Barrierefreiheit](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Barrierefreiheitsprobleme des Canvas-Elements](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – von Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best Practices für interaktive Canvas-Elemente](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Beispiele

### HTML

Dieser Code-Schnipsel fügt dem HTML-Dokument ein Canvas-Element hinzu. Ein Fallback-Text wird bereitgestellt, falls ein Browser das Canvas nicht lesen oder rendern kann.

```html
<canvas width="120" height="120">
  Ein alternativer Text, der beschreibt, was Ihr Canvas anzeigt.
</canvas>
```

### JavaScript

Rufen Sie dann im JavaScript-Code {{domxref("HTMLCanvasElement.getContext()")}} auf, um einen Zeichenkontext zu erhalten und anfangen, auf das Canvas zu zeichnen:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Fügen Sie ein Rechteck an Position (10, 10) mit der Größe 100x100 Pixel hinzu
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
          >Phraseinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >, greifbarer Inhalt.
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
        Nachkommen außer für {{HTMLElement("a")}}-Elemente,
        {{HTMLElement("button")}}-Elemente,
        {{HTMLElement("input")}}-Elemente, deren
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a>-Attribut
        <code>checkbox</code>, <code>radio</code> oder <code>button</code> ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>{{domxref("HTMLCanvasElement")}}</td>
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
- [Safari HTML Canvas-Leitfaden](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) über Apple (2013)
- [`CanvasRenderingContext2D` 2D-Zeichenkontext für ein Canvas-Element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) über Apple.com
- [WebGL](/de/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/de/docs/Web/SVG)
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
