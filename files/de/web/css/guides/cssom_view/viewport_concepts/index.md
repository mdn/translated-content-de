---
title: Viewport-Konzepte
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist und welche Auswirkungen es in Bezug auf CSS, SVG und mobile Geräte hat. In diesem Artikel werden der anfängliche Viewport und der tatsächliche Viewport definiert, sowie der Unterschied zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}} beschrieben.

## Was ist ein Viewport?

Ein **Viewport** ist eine Eigenschaft des Benutzeragenten, die verwendet wird, um den initialen umschließenden Block für kontinuierliche Medien festzulegen.

Der generische Begriff _Viewport_ bezieht sich in der Regel auf den Bereich in der Computergrafik, der gerade angezeigt wird. In Webbrowser-Begriffen ist das im Allgemeinen dasselbe wie das Browserfenster, ausgenommen die Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade sehen.

Während ein Dokument geladen wird, durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des Benutzeragenten, bevor Benutzeragentur-Stile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die anfängliche Viewport-Größe basiert auf der Größe des Fensters oder Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzeragenten unterscheidet sich zwischen Ausrichtungen und Geräten, bleibt jedoch immer gleich für dasselbe Gerät in derselben Ausrichtung.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports entworfen wurden, können auf kleineren Viewports eine Vielzahl von Fehlern aufweisen, wie unbeabsichtigtes Umfließen, abgeschnittene Inhalte und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. Das Viewport-Meta-Tag gibt Hinweise zur anfänglichen Größe des Viewports. Der tatsächliche Viewport wird durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut definiert. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mit einer festen Breite des initialen umschließenden Blocks, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt, um in ihn zu passen, wodurch die CSS-Pixel-Größe kleiner als ein tatsächliches Pixel wird.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Bildschirmgröße ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser herangezoomt ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den Sichtbereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) basiert der initiale umschließende Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen bei der Abfrage der Viewport-Größe und anderer ähnlicher Längen helfen können:

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich des Paddings (jedoch ohne Ränder, Ränder oder vertikale Scrollleisten, falls vorhanden). **Das ist die Viewport-Breite**.
- Die `Window.innerWidth` ist die Breite, in CSS-Pixel, des Browserfenster-Viewports, einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die `Window.outerWidth` ist die Breite des Äußeren des Browserfensters, einschließlich des gesamten Fenster-{{Glossary("chrome", "Chrome")}}.

In einem Experiment mit diesen war `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste von insgesamt 100px Höhe vorgenommen, aber ohne Chrome links oder rechts vom Fenster.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als der **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports angesehen.

Beim Zoomen melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Zoomen können Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Beim Zoomen wurde der Viewport 800 x 533 Pixel groß. Das ist der _Layout-Viewport_. Sticky-Header oder Fußzeilen, mit den folgenden Stilen, werden oben und unten im _Layout-Viewport_ kleben bleiben.

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

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur herangezoomt haben. Der Header und die Fußzeile blieben bündig am oberen und unteren Rand des Fensters. Aber was, wenn wir auf einem Tablet gezoomt hätten? Was passiert, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite zoomt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixed positionierte](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Sticky-Header oder Fußzeilen kleben am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher im Blickfeld, wenn wir mit der Tastatur hereinzoomen. Wenn Sie jedoch hereinzoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Vergrößern Sie aus der Mitte des Layout-Viewports, wird der Inhalt in alle vier Richtungen expandieren. Wenn Sie einen Sticky Header oder Footer haben, bleiben diese oben oder unten im Layout-Viewport kleben, können jedoch oben oder unten auf dem Bildschirm des Geräts — dem visuellen Viewport — unsichtbar sein. Der visuelle Viewport ist der aktuell sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports in den Blick, wobei der Sticky Footer angezeigt wird, der dann am unteren Rand bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms ohne eingeblendete Tastaturen, Bereiche außerhalb eines Zoom-Bereichs oder andere Elemente, die nicht im Verhältnis zu den Seitenmaßen skalieren. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die iframes, Objekte oder externe SVG enthält, haben sowohl die einbettenden Seiten als auch jede eingefügte Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout- und visuelle Viewport sind nicht die einzigen Viewports, auf die Sie stoßen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport angesehen.

Wir denken in der Regel an [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width) und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height) Media-Queries als relativ zur Breite und Höhe des Browserfensters. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekte, iframes und SVG darstellt. In CSS haben wir auch [Längeneinheiten, die auf der Viewport-Größe basieren](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units). Eine `vh` Einheit beträgt 1% der Höhe des Layout-Viewports. Ebenso ist die `vw` Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, nicht des übergeordneten Dokuments. Sie können innerhalb eines iframes jede Höhe und Breite festlegen, aber das komplette Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, entspricht `1vh` 1% der Höhe des iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, wird es 50% der Breite des `1200px` großen Elterndokuments in unserem obigen Beispiel oder `600px` betragen, wobei `1vw` `6px` ist. Beim Zoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine auf Breite basierende Media-Query innerhalb des iframe-Dokuments ist relativ zum Viewport des iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten wird, werden die Absätze beim Zoomen rot, jedoch gilt dieser Stil nicht im nicht herein gezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede Höhe und Breite auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild könnte möglicherweise nicht sichtbar sein. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mithilfe der Breiten- und Höhenattribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG verfügt auch über ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert ist und nicht Teil dieser Viewport-Diskussion ist.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche umschließende Block oder die Breite und Höhe des SVG-Containers. Die Nutzung der {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media-Query schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder dem Elternelement, falls dem Elternelement eine Breite zugewiesen ist — und nicht auf der Breite des Viewports. Mit der obigen Media-Query in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [Viewport API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte kommen in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport eines mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind, was nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, das normalerweise breiter als der Bildschirm ist, und schrumpfen dann das gerenderte Ergebnis, damit es auf einmal sichtbar ist. Benutzer können dann schwenken und zoomen, um unterschiedliche Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert und dann auf die 320px angepasst werden, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, dass er die Viewport-Breite und nicht die standardmäßigen 980px als Breite des Bildschirms verwenden soll, können Entwickler ein Viewport-Meta-Tag einschließen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einer Skala von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite herein- oder herauszoomen können, aber die Standardwerte sind am besten für die Zugänglichkeit und Benutzererfahrung geeignet, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [Visuelle Viewport-API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [Visuelle Viewport-API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
