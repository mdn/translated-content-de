---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} – was er ist und seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Benutzeragentenfunktion, die verwendet wird, um den initialen Containing-Block für kontinuierliche Medien festzulegen.

Der generische Begriff _Viewport_ bezieht sich im Allgemeinen auf den Bereich in der Computergrafik, der derzeit angezeigt wird. In Bezug auf Webbrowser ist dies im Allgemeinen identisch mit dem Browserfenster, abzüglich der Benutzeroberfläche, der Menüleiste usw. Dies ist der Teil des Dokuments, den Sie sich ansehen.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des UA, bevor Benutzeragentenstile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzeragenten unterscheidet sich je nach Orientierung und Gerät, ist jedoch immer gleich für dasselbe Gerät in derselben Ausrichtung.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports gestaltet sind, können verschiedene Fehler aufweisen, wenn sie in kleineren Viewports angezeigt werden, einschließlich unerwartetem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag bietet Hinweise auf die anfängliche Größe des Viewports. Der tatsächliche Viewport ist die durch das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definierte Größe. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mithilfe einer festen anfänglichen Blockbreite, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt auf diese Größe herunter, wodurch die CSS-Pixelgröße kleiner als ein tatsächlicher Pixel wird.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den Blick gescrollt werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel größer als der Viewport sein kann.

Für [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) basiert der initiale Containing-Block auf dem Seitenbereich. Der Seitenbereich kann über {{cssxref("@page")}}-Regeln eingestellt werden.

Zusammenfassend ist der Viewport im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports entspricht nicht immer der Fensterbreite. Wenn Sie die Breite oder Höhe des Fensters und Dokumentes in Chrome oder Firefox abfragen, erhalten Sie möglicherweise:

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

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Padding (aber ohne Rahmen, Ränder oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die `Window.innerWidth` ist die Breite des Browserfensters in CSS-Pixel, einschließlich der Anzeige der vertikalen Scrollleiste, falls gerendert.
- Die `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fenster-{{Glossary("chrome", "Chrome")}}.

Bei einem Experiment mit diesen Werten zeigte sich, dass `innerWidth` und `outerWidth` gleich waren, aber die `outerHeight` 100px höher als die `innerHeight` war. Dies liegt daran, dass die `outerHeight` das Browser-Chrome beinhaltet: Die Messungen wurden an einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit einer Höhe von insgesamt 100px durchgeführt, aber ohne Chrome auf der linken oder rechten Seite des Fensters.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als der **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Beim Hineinzoomen geben sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth` zurück. Die für die `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixel zurück, aber Chrome gibt die Länge in der Standard-Pixelgröße an. Beim Hineinzoomen erhalten Sie möglicherweise:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Beim Hineinzoomen wurde der Viewport 800 x 533 Pixel groß. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen bleiben jeweils oben und unten am _Layout-Viewport_ haften.

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

Wir erhielten die Messung von 800 x 533, als wir mit der Tastatur hineingezoomt haben. Der Header und Footer blieben oben und unten am Fenster anliegend. Aber was wäre, wenn wir auf einem Tablet herangezoomt hätten? Was wäre, wenn eine dynamische Tastatur auf einem Telefon erscheinen würde?

### Layout und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite per Pinch-Zoom vergrößert, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixierte](/de/docs/Web/CSS/position#fixed_positioning) sticky-Header oder -Footer, wie oben besprochen, haften an der Ober- und Unterseite des _Layout-Viewports_ und bleiben daher sichtbar, wenn wir mit der Tastatur hineinzoomen. Wenn Sie per Pinch-Zoom heran zoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen fixierten Header oder Footer haben, bleibt er oben oder unten am Layout-Viewport haften, ist möglicherweise jedoch nicht oben und unten am Geräteschirm sichtbar – das ist der visuelle Viewport. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie herunterscrollen, ändern Sie den Inhalt des visuellen Viewports und bringen die Unterseite des Layout-Viewports in den Blick, was den fixierten Footer sichtbar macht, der dann unten sichtbar bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms ohne on-Screen-Tastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Funktionen, die nicht mit den Abmessungen einer Seite skaliert werden. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die iframes, Objekte oder externes SVG enthält, haben sowohl die Seiten, die einbetten, als auch jede eingebettete Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei eingebetteten Dokumenten sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Die oben beschriebenen Layout- und visuellen Viewports sind nicht die einzigen Viewports, die Sie antreffen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken normalerweise, dass [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height)-Media-Abfragen relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, jedoch die intrinsische Größe des Eltern-Elements in einem verschachtelten Browsing-Kontext wie Objekte, iframes und SVG ist. In CSS haben wir auch [Längeneinheiten, die auf der Viewport-Größe basieren](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, und nicht des Elterndokuments. Sie können jede beliebige Höhe und Breite für ein iframe festlegen, jedoch kann das gesamte Dokument möglicherweise nicht sichtbar sein.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, wird `1vh` 1 % der Höhe des iframes sein und `1vw` wird 1 % der Breite des Dokuments sein.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt wird, wird es 50 % der Breite des `1200px` Elterndokuments in unserem obigen Beispiel sein, oder `600px`, wobei `1vw` `6px` ist. Bei Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine breitebasierte Media-Abfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht herangezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede beliebige Höhe und Breite für ein {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann durch die `width`- und `height`-Attribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und beträgt standardmäßig 400 mal 300 Einheiten, wobei eine Einheit im Allgemeinen ein CSS-Pixel ist.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird, das mit dieser Viewport-Diskussion nicht in Zusammenhang steht.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der initiale Containing-Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media-Abfrage schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breite der Media-Abfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder dem Elternelement, wenn dieses Element eine zugewiesene Breite hat — und nicht der Breite des Viewports. Mit der obigen Media-Abfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [Viewport API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte zu sehen sind, der nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, typischerweise bei 980px, was im Allgemeinen breiter als der Bildschirm ist, und schrumpft dann das gerenderte Ergebnis, damit alles auf einmal gesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann wird sie verkleinert, um in den 320px-Bereich zu passen, was, je nach Design, für viele, wenn nicht alle unleserlich ist. Um einem mobilen Browser mitzuteilen, dass er die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms verwendet, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixel bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererlebnis, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view)-Modul
