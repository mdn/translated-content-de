---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 9f1ac4351350c32273d5e0501c2fb895d561a0e8
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} - was es ist und seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion von Benutzeragenten, die verwendet wird, um den initialen umgebenden Block für kontinuierliche Medien festzulegen.

Der generische Begriff _Viewport_ bezieht sich allgemein auf den Bereich in der Computergrafik, der derzeit angezeigt wird. In Bezug auf Webbrowser entspricht dies in der Regel dem Browserfenster, abzüglich der Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie anzeigen.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Betrachtungsbereich des Benutzeragenten, bevor Benutzeragentenstile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder Betrachtungsbereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Benutzeragenten im Vollbildmodus variiert je nach Orientierung und Gerät, bleibt jedoch für dasselbe Gerät in derselben Orientierung immer gleich.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports gestaltet sind, können bei der Betrachtung in kleineren Viewports eine Vielzahl von Fehlern aufweisen, einschließlich unbeabsichtigtem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag gibt Hinweise zur initialen Größe des Viewports. Der tatsächliche Viewport ist die durch das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definierte Größe. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mit einer festen initialen Blockbreite, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt nach unten, um ihn anzupassen, sodass die CSS-Pixelgröße kleiner als ein tatsächliches Pixel ist.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser hineingezoomt ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den Ansichtsbereich gescrollt werden.

- Auf größeren Monitoren, wo Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) basiert der initiale umgebende Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Größe des Viewports und andere ähnliche Längen abzufragen:

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Polsterung (aber nicht Ränder, Außenabstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die `Window.innerWidth` ist die Breite, in CSS-Pixel, des Browserfenster-Viewports einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fenster-{{Glossary("chrome", "Chroms")}}.

In einem Experiment mit diesen Messungen wurde festgestellt, dass die `innerWidth` und `outerWidth` gleich waren, aber die `outerHeight` um 100px höher als die `innerHeight` war. Dies liegt daran, dass die `outerHeight` das Browser-Chrom einschließt: Die Messungen wurden an einem Browser mit Adressleiste und Lesezeichenleiste, die insgesamt 100px hoch waren, aber ohne Chrom auf der linken oder rechten Seite des Fensters vorgenommen.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** angesehen. Das Browser-Chrom wird nicht als Teil des Viewports betrachtet.

Wenn hineingezoomt wird, melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixel zurück, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Hineinzoomen können Sie erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Beim Hineinzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen werden jeweils am oberen und unteren Rand des _Layout-Viewports_ haften:

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

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur hineingezoomt haben. Der Header und Footer blieben an der Ober- und Unterkante des Fensters haften. Aber was, wenn wir auf einem Tablet mit zwei Fingern hineingezoomt hätten? Was, wenn auf einem Telefon eine dynamische Tastatur geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Nutzer die Seite mit zwei Fingern zoomen, eine dynamische Tastatur geöffnet wird oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Feste](/de/docs/Web/CSS/position#fixed_positioning) Sticky-Header oder -Footer, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher im Blick, wenn wir mit der Tastatur hineinzommen. Wenn Sie mit zwei Fingern zoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen expandiert. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben sie dennoch am oberen oder unteren Rand des Layout-Viewports haften, sind jedoch möglicherweise nicht am oberen und unteren Rand des Geräteschirms sichtbar - das ist der visuelle Viewport. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports in den Ansichtsbereich, wobei der Sticky-Footer angezeigt wird, der dann am unteren Rand bleibt haften.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms, ohne auf dem Bildschirm angezeigte Tastaturen, Bereiche außerhalb eines Zwei-Finger-Zoom-Bereichs oder andere Funktionen, die nicht mit den Abmessungen einer Seite skaliert werden. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die iframes, Objekte oder externes SVG enthält, haben sowohl die einschließenden Seiten als auch jede enthaltene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Der oben beschriebene Layout-Viewport und der visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Teil-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken allgemein an [`width`](/de/docs/Web/CSS/@media/width)- und [`height`](/de/docs/Web/CSS/@media/height)-Media-Queries als relativ zur Breite und Höhe des Browserfensters. Sie sind tatsächlich relativ zum Viewport, das ist das Fenster im Hauptdokument, aber ist die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekten, Iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1% der Höhe des Layout-Viewports. Ähnlich ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes, anstatt des übergeordneten Dokuments. Sie können beliebige Höhe und Breite auf einem Iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, entspricht `1vh` 1% der Höhe des Iframes, und `1vw` entspricht 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das Iframe auf 50vw gesetzt ist, beträgt es 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` ist. Beim hineingezoomten Zustand schrumpft das Iframe auf `400px` und `1vw` wird `4px`.

Eine media-Query basierend auf der Breite innerhalb des Iframe-Dokuments bezieht sich auf den Viewport des Iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht hereingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können beliebige Höhe und Breite auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann durch die Breiten- und Höhenattribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit generell ein CSS-Pixel ist.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der initiale umgebende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Query in Ihrer SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Generell, wenn Sie die obige Media-Query schreiben, werden die Stile angewendet, wenn der Viewport, in der Regel das Browserfenster, zwischen 400px und 500px, einschließlich, liegt. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist - dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingebunden ist, oder dem Elternteil, wenn das Elternelement eine zugewiesene Breite hat - und nicht der Breite des Viewports. Mit der obigen Media-Query, die sich in unserer SVG-Datei befindet, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [Viewport API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte kommen in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, der nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel mit 980px, das normalerweise breiter als der Bildschirm ist, und dann verkleinern sie das gerenderte Ergebnis, damit es alles auf einmal betrachtet werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert und dann auf die 320px verkleinert werden, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, die Breite des Viewports anstelle der Standard-980px als Bildschirmbreite zu verwenden, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixel bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite ein- oder auszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- {{HTMLElement("meta")}} und [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [Verwendung des Viewport-Meta-Tag zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS-Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view)-Modul
