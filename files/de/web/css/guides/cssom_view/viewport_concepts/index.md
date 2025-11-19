---
title: Viewport-Konzepte
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} — was es ist und seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion des Benutzeragenten, die verwendet wird, um den anfänglichen enthaltenden Block für kontinuierliche Medien zu bestimmen.

Der generische Begriff _Viewport_ bezieht sich im Allgemeinen auf den Bereich in der Computergrafik, der gerade betrachtet wird. Im Zusammenhang mit Webbrowsern entspricht dies im Allgemeinen dem Browserfenster, ausgenommen der Benutzeroberfläche, der Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Während ein Dokument lädt, durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des Benutzeragenten, bevor Benutzeragent-Stile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile dessen Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzeragenten variiert je nach Orientierung und Gerät, bleibt aber immer gleich bei demselben Gerät in derselben Orientierung.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalt, der für große Viewports entworfen wurde, kann eine Vielzahl von Fehlern zeigen, wenn er in kleineren Viewports angezeigt wird, einschließlich unbeabsichtigtes Umbruchverhalten, abgeschnittener Inhalt und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. Das Viewport-Meta-Tag bietet Hinweise zur anfänglichen Größe des Viewports. Der tatsächliche Viewport ist die durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definierte Größe. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser den Inhalt mit einer festen Breite des anfänglichen enthaltenden Blocks, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt, um ihn anzupassen, was die CSS-Pixelgröße kleiner macht als ein tatsächliches Pixel.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was gerade sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie durch Scrollen in das Sichtfeld gebracht werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der ganze Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [seitenumbruchfähige Medien](/de/docs/Web/CSS/Guides/Paged_media) basiert der anfängliche enthaltende Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie in Chrome oder Firefox die Breite oder Höhe des Fensters und Dokuments abfragen, erhalten Sie möglicherweise:

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

Es gibt verschiedene DOM-Eigenschaften, die Ihnen helfen können, die Viewport-Größe und andere ähnliche Längen abzufragen:

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Padding (jedoch ohne Ränder, Abstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite des äußeren Teils des Browserfensters, einschließlich aller Fenster-{{Glossary("chrome", "Chrom")}}.

In einem Experiment mit diesen waren `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px größer als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browserchrom enthält: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste aufgenommen, die zusammen 100px hoch waren, aber kein Chrom auf der linken oder rechten Seite des Fensters hatten.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browserchrom wird nicht als Teil des Viewports betrachtet.

Bei Vergrößerung melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Bei Vergrößerung können Sie erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Bei Vergrößerung wurde der Viewport auf 800 x 533 Pixel geändert. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen haften entsprechend am oberen und unteren Rand des _Layout-Viewports_.

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

Wir erhielten die 800 x 533 Messwerte, als wir mit der Tastatur vergrößerten. Der Header und Footer blieben bündig mit der Ober- und Unterkante des Fensters. Aber was, wenn wir auf einem Tablet gekniffen und gezoomt hätten? Was passiert, wenn auf einem Telefon eine dynamische Tastatur geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einem Kneifzoom vergrößert, eine dynamische Tastatur öffnet oder wenn eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixierte](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Sticky-Header oder -Footer bleiben, wie oben diskutiert, am oberen und unteren Rand des _Layout-Viewports_ haften und bleiben daher im Blick, wenn wir mit der Tastatur vergrößern. Wenn Sie mit einem Kneifzoom vergrößern, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports haften, sind jedoch möglicherweise nicht am oberen und unteren Rand des Geräteschirms sichtbar — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports ins Sichtfeld, wobei der Sticky-Footer angezeigt wird, der dann am unteren Rand haften bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, der On-Screen-Tastaturen, Bereiche außerhalb eines Kneifzoombereichs oder andere Funktionen, die sich nicht mit den Seitendimensionen skalieren, nicht einschließt. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die Frames, Objekte oder externe SVG enthält, haben sowohl die enthaltenden Seiten als auch jede inkludierte Datei ihr eigenes einzigartiges Fensterobjekt. Nur das Top-Level-Fenster hat einen visuellen Viewport, der sich möglicherweise vom Layout-Viewport unterscheidet. Für inkludierte Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Der oben beschriebene Layout-Viewport und der visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width)- und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Medienabfragen relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der das Fenster im Hauptdokument ist, jedoch die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekte, Frames und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1% der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes, anstatt des übergeordneten Dokuments. Sie können in einem Iframe jede Höhe und Breite festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, beträgt `1vh` 1% der Höhe des Iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der Iframe auf 50vw gesetzt ist, beträgt er 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` entspricht. Bei Vergrößerung schrumpft der Iframe auf `400px` und `1vw` wird `4px`.

Eine Breiten-basierte Medienabfrage innerhalb des Iframe-Dokuments bezieht sich auf den Viewport des Iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer vergrößert hat, aber dieser Stil gilt nicht im ungezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können in einem {{SVGElement("svg")}} jede Höhe und Breite festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 x 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert ist, was mit dieser Diskussion über den Viewport nicht zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport der SVG der anfängliche enthaltende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen werden die Stile angewendet, wenn der obige Medienabfrage der Ansicht entspricht, dass der Viewport, normalerweise das Browserfenster, zwischen 400px und 500px, einschließlich, liegt. Die Breitenmedienabfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingebettet ist, oder dem Elternteil, wenn das übergeordnete Element eine Breite zugewiesen hat, und nicht auf der Breite des Viewports. Da die obige Medienabfrage in unserer SVG-Datei ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples)-Schnittstelle bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [`Viewport`](/de/docs/Web/API/Viewport)-Schnittstelle bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalt gesehen werden kann, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, normalerweise bei 980px, das normalerweise breiter ist als der Bildschirm, und verkleinern dann das gerenderte Ergebnis, damit es auf einmal gesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie verkleinert, um in den 320px-Raum zu passen, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um dem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der Standard-980px-Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einer Skalierung von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite ein- oder auszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [CSSOM-Ansicht-API](/de/docs/Web/API/CSSOM_view_API)
- {{HTMLElement("meta")}}, speziell [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
