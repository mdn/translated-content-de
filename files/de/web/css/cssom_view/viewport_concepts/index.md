---
title: Konzepte des Viewports
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "viewports")}} — was er ist und seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion eines Benutzeragenten, die verwendet wird, um den initialen enthaltenden Block für kontinuierliche Medien zu bestimmen.

Der generische Begriff _viewport_ bezieht sich im Allgemeinen auf den Bereich in der Computergrafik, der gerade angezeigt wird. In Bezug auf Webbrowser entspricht dies im Allgemeinen dem Browserfenster, abzüglich der Benutzeroberfläche, Menüleiste usw. Dies ist der Teil des Dokuments, den Sie gerade betrachten.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezeichnet das Fenster oder den Anzeigebereich des Benutzeragenten, bevor Benutzeragentenstile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder des Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports im Vollbildmodus eines Benutzeragenten variiert je nach Ausrichtung und Gerät, bleibt jedoch für dasselbe Gerät in derselben Ausrichtung immer gleich.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports gestaltet sind, können verschiedene Fehler aufweisen, wenn sie in kleineren Viewports angezeigt werden, einschließlich unerwünschtem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag gibt Hinweise auf die initiale Größe des Viewports. Der tatsächliche Viewport ist die Größe, die durch das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definiert ist. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mit einer festen Breite des initialen enthaltenden Blocks, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt herunter, um ihn anzupassen, wodurch die CSS-Pixelgröße kleiner als ein tatsächliches Pixel wird.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was gerade sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist und davon, ob der Browser herangezoomt ist. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, werden wahrscheinlich nicht sichtbar sein, bis sie in den Sichtbereich gescrollt werden.

- Auf größeren Monitoren, wo Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [seitentrennende Medien](/de/docs/Web/CSS/CSS_paged_media) basiert der initiale enthaltende Block auf dem Seitenbereich. Der Seitenbereich kann über {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Grunde der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, erhalten Sie möglicherweise:

```js
document.documentElement.clientWidth; /* 1200 */
window.innerWidth; /* 1200 */
window.outerWidth; /* 1200 */
```

```js
document.documentElement.clientHeight; /* 800 */
window.innerHeight; /* 800 */
window.outerHeight; /* 900 */
```

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Viewport-Größe und andere ähnliche Längen abzufragen:

- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Padding (aber nicht Rändern, Rändern oder vertikalen Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports, einschließlich, falls gerendert, der vertikalen Scrollleiste.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters, einschließlich des gesamten Fenster-Chroms.

In einem Experiment mit diesen Maßen war `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100 px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrom einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit einer Gesamthöhe von 100 px, aber keinem Chrom links oder rechts des Fensters durchgeführt.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als der **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrom wird nicht als Teil des Viewports betrachtet.

Wenn hereingezoomt, melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixelgröße zurück. Wenn Sie hereingezoomt haben, könnten Sie Folgendes erhalten:

```js
document.documentElement.clientWidth; /* 800 */
window.innerWidth; /* 800 */
window.outerWidth; /* 800 in Firefox, 1200 in chrome */
```

```js
document.documentElement.clientHeight; /* 533 */
window.innerHeight; /* 533 */
window.outerHeight; /* 596 in Firefox, 900 in chrome */
```

Der Viewport betrug ursprünglich 1200 x 800 Pixel. Beim Heranzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Feste Header oder Footer, mit den folgenden Stilen, bleiben zum oberen bzw. unteren Rand des _Layout-Viewports_ haften.

```css
body > header {
  position: fixed;
  top: 0;
}
body > footer {
  position: fixed;
  bottom: 0;
}
```

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur hereingezoomt haben. Der Header und Footer blieben bündig mit dem oberen und unteren Rand des Fensters. Aber was wäre, wenn wir auf einem Tablet gezoomt hätten? Was wäre, wenn eine dynamische Tastatur auf einem Telefon erschienen wäre?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der gerade im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite heranzoomt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt.

[Feste](/de/docs/Web/CSS/position#fixed_positioning) Header oder Footer, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher im Sichtbereich, wenn wir mit der Tastatur zoomen. Wenn Sie heranzoomen, ist möglicherweise der Layout-Viewport nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, erweitert sich der Inhalt in alle vier Richtungen. Wenn Sie einen festen Header oder Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports haften, sind aber möglicherweise nicht oben und unten auf dem Geräteschirm sichtbar — das ist der visuelle Viewport. Der visuelle Viewport ist der momentan sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports zur Ansicht, wodurch der feste Footer angezeigt wird, der dann am unteren Rand bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms, der keine On-Screen-Tastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Funktionen einschließt, die nicht mit den Dimensionen einer Seite skalieren. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die enthaltenden Seiten als auch jede eingebundene Datei ihr einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebundene Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Die oben beschriebenen Layout- und visuellen Viewports sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der innerhalb des Layout-Viewports vollständig oder teilweise angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height)-Media-Queries relativ zur Breite und Höhe des Browserfensters sind. Sie sind tatsächlich relativ zum Viewport, der das Fenster im Hauptdokument ist, aber die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes und nicht des übergeordneten Dokuments. Sie können irgendeine Höhe und Breite auf ein Iframe setzen, aber das ganze Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, ist `1vh` 1 % der Höhe des Iframes und `1vw` ist 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das Iframe auf 50vw gesetzt ist, beträgt es 50 % der Breite des übergeordneten Dokuments von `1200px` in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` ist. Wenn heringezoomt, schrumpft das Iframe auf `400px` und `1vw` wird `4px`.

Eine breitengestützte Media-Query innerhalb des Iframe-Dokuments bezieht sich auf den Viewport des Iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hereingezoomt hat, aber dieser Stil gilt nicht im nicht hereingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können irgendeine Höhe und Breite auf ein {{SVGElement("svg")}} setzen, aber das ganze Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit generell ein CSS-Pixel ist.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird, das nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einschließen, ist der Viewport des SVG der initiale enthaltende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVG ist relativ zu diesem Container und nicht zur Browserbreite.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Allgemein, wenn Sie die obige Media-Query schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breitensicht in der SVG basiert auf dem Element, in dem die SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, die SVG selbst, wenn die SVG direkt in das HTML eingebunden ist, oder das übergeordnete Element, wenn das übergeordnete Element eine Breite zugewiesen hat — und nicht die Breite des Viewports. Mit der obigen Media-Query in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Modifizieren der Eigenschaften des visuellen Viewports.

Die [Viewport API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Modifizieren der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen mit unterschiedlichen {{Glossary("device_pixel", "device pixel")}}-Verhältnissen. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind, was nicht unbedingt derselben Größe wie die gerenderte Seite entspricht. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, die normalerweise breiter als der Bildschirm ist, und dann wird das gerenderte Ergebnis verkleinert, damit es alles gleichzeitig angezeigt werden kann. Benutzer können dann pannen und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie verkleinert, um in den 320px-Raum zu passen, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite ein- oder auszoomen können, aber die Standardwerte sind am besten für Barrierefreiheit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM view](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, speziell [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM view](/de/docs/Web/CSS/CSSOM_view)-Modul
