---
title: Ansichten-Konzepte
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: a7da8b5f8846bb412400c41e27525760df35f54e
---

Dieser Artikel erklärt das Konzept der {{Glossary("viewport", "Ansicht")}} — was sie ist und ihre Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert die initiale Ansicht und die tatsächliche Ansicht und unterscheidet zwischen der {{Glossary("visual_viewport", "visuellen Ansicht")}} und der {{Glossary("layout_viewport", "Layout-Ansicht")}}.

## Was ist eine Ansicht?

Eine **Ansicht** ist eine Funktion des Benutzeragenten, die verwendet wird, um den anfänglichen umgebenden Block für kontinuierliche Medien zu erstellen.

Der generische Begriff _Ansicht_ bezieht sich im Allgemeinen auf den Bereich in Computergrafiken, der derzeit angesehen wird. In Bezug auf Webbrowser ist das im Allgemeinen dasselbe wie das Browserfenster, ausgenommen die Benutzeroberfläche, die Menüleiste usw. Das ist der Teil des Dokuments, den Sie sich ansehen.

Während ein Dokument geladen wird, durchläuft die Ansicht zwei Phasen:

- **Initiale Ansicht**
  - : Die _initiale Ansicht_ bezieht sich auf das Fenster oder den Ansichtsbereich des Benutzeragenten, bevor Benutzeragenten-Stile, HTML {{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die initiale Ansichtsgröße basiert auf der Größe des Fensters oder des Ansichtsbereichs und nicht auf dem Inhalt. Die Größe der initialen Ansicht eines Vollbild-Benutzeragenten unterscheidet sich je nach Orientierung und Gerät, bleibt jedoch immer gleich für dasselbe Gerät in derselben Orientierung.

- **Tatsächliche Ansicht**
  - : Die _tatsächliche Ansicht_ ist die Ansicht, die Sie nach der Verarbeitung des [Ansicht-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Ansichten entworfen sind, können eine Vielzahl von Fehlern aufweisen, wenn sie in kleineren Ansichten betrachtet werden, einschließlich unbeabsichtigter Umbrüche, abgeschnittener Inhalte und falsch dimensionierter {{Glossary("scroll_container", "Scroll-Container")}}. Das Ansichts-Meta-Tag bietet Hinweise zur anfänglichen Größe der Ansicht. Die tatsächliche Ansicht ist die durch ihr [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definierte Größe. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mit einer festen initialen umgebenden Blockbreite, normalerweise `980px`. Sie setzen die Breite der tatsächlichen Ansicht auf diesen Wert und verkleinern dann den Inhalt, um ihn anzupassen, wodurch die CSS-Pixel-Größe kleiner als ein tatsächliches Pixel wird.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihre Ansicht ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist eine Ansicht" und vielleicht ein Teil des Navigationsmenüs. Die Größe der Ansicht hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser herangezoomt ist. Inhalte außerhalb der Ansicht, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus laufen, entspricht die Ansicht der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist die Ansicht der gesamte Bildschirm.
- Im Vollbildmodus ist die Ansicht der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie die Ansicht oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als die Ansicht sein kann.

Für [paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media) basiert der anfängliche umgebende Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist die Ansicht im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Ansichtsgrößen sind veränderlich

Die Breite der Ansicht entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, erhalten Sie möglicherweise:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Größe der Ansicht und andere ähnliche Längen abzufragen:

- Die Dokumentelement-Länge [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Padding (aber nicht Ränder, Margen oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Ansichtsbreite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Ansichtsbereichs des Browserfensters einschließlich, wenn gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters, einschließlich des gesamten Fenster-Cromes.

In einem Experiment mit diesen, wurde festgestellt, dass `innerWidth` und `outerWidth` gleich sind, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrom enthält: Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste aufgenommen, die insgesamt 100px hoch waren, aber kein Chrom auf der linken oder rechten Seite des Fensters.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird allgemein als die **{{Glossary("layout_viewport", "Layout-Ansicht")}}** angesehen. Das Browser-Chrom wird nicht als Teil der Ansichts-Konzeption betrachtet.

Wenn hineingezoomt wird, berichten sowohl Firefox als auch Chrome über die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln zurück, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Hineinzoomen erhalten Sie möglicherweise:

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

Die Ansicht war ursprünglich 1200 x 800 Pixel. Nach dem Hineinzoomen wurde die Ansicht 800 x 533 Pixel. Dies ist die _Layout-Ansicht_. Haftende Kopf- oder Fußzeilen mit den folgenden Stilen haften jeweils an der oberen und unteren Grenze der _Layout-Ansicht_.

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

Wir erhielten die Messung 800 x 533, als wir mit der Tastatur hineingezoomt haben. Die Kopf- und Fußzeilen blieben bündig an der oberen und unteren Grenze des Fensters haften. Aber was, wenn wir auf einem Tablet mit Pinch-Zoom gezoomt hätten? Was, wenn sich auf einem Telefon eine dynamische Tastatur öffnet?

### Layout- und visuelle Ansichten

Das Web enthält zwei Ansichten, die **Layout-Ansicht** und die **visuelle Ansicht**. Die visuelle Ansicht ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einer Pinch-Geste zoomt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft die visuelle Ansicht, aber die Layout-Ansicht bleibt unverändert.

[Fixed](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) haftende Kopf- oder Fußzeilen, wie oben erwähnt, haften an der oberen und unteren Grenze der _Layout-Ansicht_ und bleiben somit im Blick, wenn wir mit der Tastatur hineinzoomen. Wenn Sie mit Pinch-Gesten zoomen, ist die Layout-Ansicht möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte der Layout-Ansicht vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie eine haftende Kopf- oder Fußzeile haben, bleiben sie weiterhin an der oberen oder unteren Grenze der Layout-Ansicht haften, können jedoch möglicherweise nicht oben und unten auf dem Bildschirm des Geräts sichtbar sein — das ist die visuelle Ansicht. Die visuelle Ansicht ist der derzeit sichtbare Teil der Layout-Ansicht. Wenn Sie nach unten scrollen, ändern Sie den Inhalt der visuellen Ansicht und bringen den unteren Teil der Layout-Ansicht ins Sichtfeld, wobei die haftende Fußzeile angezeigt wird, die dann am unteren Rand haften bleibt.

Die visuelle Ansicht ist der visuelle Teil eines Bildschirms, der Tastaturen auf dem Bildschirm, Bereiche außerhalb des Pinch-Zoom-Bereichs oder andere Funktionen, die nicht mit den Dimensionen einer Seite skaliert werden, nicht einschließt. Die visuelle Ansicht hat dieselbe Größe wie die Layout-Ansicht oder ist kleiner.

Für eine Seite, die Iframes, Objekte oder externe SVGs enthält, hat sowohl die umschließende Seite als auch jede enthaltene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat eine visuelle Ansicht, die sich von der Layout-Ansicht unterscheiden kann. Für eingebundene Dokumente sind die visuelle Ansicht und die Layout-Ansicht gleich.

### CSS

Die oben beschriebene Layout-Ansicht und visuelle Ansicht sind nicht die einzigen Ansichten, auf die Sie stoßen werden. Jedes Unteransicht, das vollständig oder teilweise innerhalb der Layout-Ansicht angezeigt wird, wird als visuelle Ansicht betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width) und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Medienabfragen relativ zur Breite und Höhe des Browserfensters sind. Sie beziehen sich tatsächlich auf die Ansicht, die das Fenster im Hauptdokument ist, aber die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekte, Iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Größe der Ansicht](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1% der Höhe der Layout-Ansicht. Ebenso ist die `vw`-Einheit 1% der Breite der Layout-Ansicht.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist die visuelle Ansicht die Größe der inneren Breite und Höhe des Iframes, nicht des übergeordneten Dokuments. Sie können jede Höhe und Breite auf einem Iframe einstellen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Ansichtlängen-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, ist `1vh` 1% der Höhe des Iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der Iframe auf 50vw gesetzt ist, wird er 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel ausmachen, d.h. `600px`, wobei `1vw` `6px` entspricht. Beim Herausscrollen verkleinert sich der Iframe auf `400px` und `1vw` wird `4px`.

Eine Breiten-basierte Medienabfrage innerhalb des Iframe-Dokuments ist relativ zur Ansicht des Iframes.

```css
@media screen and (width <= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht hineingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG) Dokument ist die Ansicht der sichtbare Bereich des SVG-Bildes. Sie können jede Höhe und Breite auf einem {{SVGElement("svg")}} einstellen, aber das gesamte Bild könnte möglicherweise nicht sichtbar sein. Der sichtbare Bereich wird als die Ansicht bezeichnet. Die Größe der Ansicht kann mit den Breiten- und Höhenattributen des `<svg>` Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat die Ansicht ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 x 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG verfügt auch über ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut definiert wird und nicht mit dieser Ansichts-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist die Ansicht des SVG der anfängliche umgebende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}} Abfrage im CSS Ihres SVGs ist relativ zu diesem Container, nicht zum Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn die Ansicht, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breite basierte Medienabfrage im SVG basiert auf dem Element, in dem sich das SVG befindet — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt ist, oder dem übergeordneten Element, wenn das übergeordnete Element eine zugewiesene Breite hat und — nicht die Breite der Ansicht. Mit der oben genannten Medienabfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples) Schnittstelle bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften der visuellen Ansicht.

Die [`Viewport`](/de/docs/Web/API/Viewport) Schnittstelle bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften der visuellen Ansicht.

## Mobile Ansichten

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Die Ansicht des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, was nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder einer Ansicht, allgemein bei 980px, die normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass es auf einmal sichtbar ist. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einer virtuellen Ansicht von 980px gerendert werden, und dann wird sie auf den 320px großen Bereich verkleinert, was je nach Design für viele, wenn nicht sogar alle, unleserlich ist. Um einem mobilen Browser zu sagen, dass er die Ansichtsbreite anstelle der Standardgröße von 980px als Breite des Bildschirms verwenden soll, können Entwickler ein Ansichts-Meta-Tag einschließen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die Eigenschaft `width` steuert die Größe der Ansicht. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Bildschirmbreite in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Zugänglichkeit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [CSSOM-Ansicht API](/de/docs/Web/API/CSSOM_view_API)
- {{HTMLElement("meta")}}, speziell [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [CSS-Ansicht](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
