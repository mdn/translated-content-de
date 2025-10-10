---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} — was es ist und seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion des User-Agents, die genutzt wird, um den anfänglichen Block für kontinuierliche Medien zu etablieren.

Der generische Begriff _Viewport_ bezieht sich allgemein auf den Bereich in der Computergrafik, der derzeit betrachtet wird. In den Begriffen des Webbrowsers ist das in der Regel das gleiche wie das Browserfenster, abzüglich der Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie betrachten.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Betrachtungsbereich des User Agents, bevor User-Agent-Stile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder des Betrachtungsbereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-User Agents wird sich je nach Ausrichtung und Gerät unterscheiden, ist jedoch immer gleich für dasselbe Gerät in derselben Ausrichtung.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Für große Viewports entworfener Inhalt kann beim Betrachten in kleineren Viewports eine Vielzahl von Fehlern aufweisen, einschließlich unbeabsichtigtem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag gibt Hinweise auf die anfängliche Größe des Viewports. Der tatsächliche Viewport wird durch sein [`content`]-Attribut(/de/docs/Web/HTML/Reference/Elements/meta#content) definiert. Wird dieses Tag ausgelassen, rendern einige mobile Browser den Inhalt mit einer festen anfänglichen Blöckbreite, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt herunter, um ihn anzupassen, wodurch die CSS-Pixelgröße kleiner als ein tatsächliches Pixel wird.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise Teile des Navigationsmenüs. Die Größe des Viewports hängt von der Bildschirmgröße ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser hineinzoomt. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind möglicherweise nicht sichtbar, bis sie in den Blickpunkt gescrollt werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) basiert der anfängliche Block auf dem Seitenbereich. Der Seitenbereich kann über {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammenfassend ist der Viewport im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie folgende Werte erhalten:

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

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Padding (aber ohne Ränder, Margen oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports, einschließlich der vertikalen Scrollleiste, falls gerendert.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite des äußeren Browserfensters, einschließlich aller {{Glossary("chrome", "Chrome")}} des Fensters.

In einem Experiment mit diesen Werten waren `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden an einem Browser durchgeführt, der eine Adressleiste und eine Lesezeichenleiste mit einer Gesamthöhe von 100px, aber kein Chrome an der linken oder rechten Seite des Fensters hatte.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Beim Vergrößern melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Vergrößern können Sie erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Nach dem Vergrößern wurde der Viewport 800 x 533 Pixel groß. Dies ist der _Layout-Viewport_. Feste Header oder Footer mit den folgenden Stilen haften jeweils oben und unten am _Layout-Viewport_.

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

Beim Vergrößern mit der Tastatur erhielten wir die Messung von 800 x 533. Der Header und der Footer blieben bündig gegen die Ober- und Unterseite des Fensters. Aber was, wenn wir auf einem Tablet näher herangezoomt hätten? Was, wenn eine dynamische Tastatur auf einem Telefon erscheint?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einer Pinch-Zoom-Geste vergrößert, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Feste](/de/docs/Web/CSS/position#fixed_positioning) Header oder Footer, wie oben diskutiert, haften jeweils oben und unten am _Layout-Viewport_ und bleiben daher im Blick, wenn wir mit der Tastatur hineinzoomen. Wenn Sie mit Pinch-Zoom vergrößern, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen vergrößert. Wenn Sie einen festen Header oder Footer haben, haften sie weiterhin oben oder unten am Layout-Viewport, aber sie sind möglicherweise nicht sichtbar oben und unten am Bildschirm des Geräts — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports in den Blick, wodurch der feste Footer angezeigt wird, der dann am unteren Rand verbleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, ohne Bildschirmtastaturen, Bereiche außerhalb einer Pinch-Zoom-Zone oder andere Merkmale, die sich nicht mit den Seitenabmessungen skalieren. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die enthaltenden Seiten als auch jede eingeschlossene Datei ihr eigenes, einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingeschlossene Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, die Sie antreffen werden. Jeder Teil-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir betrachten [`width`](/de/docs/Web/CSS/@media/width)- und [`height`](/de/docs/Web/CSS/@media/height)-Medienanfragen im Allgemeinen als relativ zur Breite und Höhe des Browserfensters. Sie sind tatsächlich relativ zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des übergeordneten Elements in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG. In CSS haben wir auch [Längeneinheiten, die auf der Viewport-Größe basieren](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes und nicht des übergeordneten Dokuments. Sie können beliebige Höhen und Breiten für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, ist `1vh` 1 % der Höhe des iframes und `1vw` 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, wird es 50 % der Breite des `1200px` breiten übergeordneten Dokuments in unserem obigen Beispiel sein, oder `600px`, wobei `1vw` `6px` ist. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine auf Breite basierende Medienabfrage innerhalb des iframe-Dokuments ist relativ zum Viewport des iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hereingezoomt hat, aber dieser Stil gilt nicht im Zustand ohne Hineinzoomen.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können beliebige Höhe und Breite auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Attributen `width` und `height` des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG verfügt außerdem über ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das `viewBox`-Attribut definiert wird, das nicht zu dieser Viewport-Erörterung gehört.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS des SVG ist relativ zu diesem Container und nicht zum Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breitenmedienanfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder das übergeordnete Element, wenn dem übergeordneten Element eine Breite zugewiesen wurde — nicht die Breite des Viewports. Mit der oben in unserer SVG-Datei enthaltenen Medienabfrage wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport-API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [Viewport-API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, was normalerweise breiter als der Bildschirm ist, und schrumpfen das gerenderte Ergebnis dann so, dass alles auf einmal sichtbar ist. Benutzer können dann zoomen und verschieben, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, wird eine Website möglicherweise mit einem virtuellen Viewport von 980px gerendert und dann so verkleinert, dass sie in den 320px-Bereich passt, was je nach Design für viele oder sogar alle unleserlich ist. Um einem mobilen Browser zu sagen, dass er die Viewport-Breite anstelle der Standard-980px als Breite des Bildschirms verwenden soll, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Das `width`-Eigenschaft steuert die Größe des Viewports. Es sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einer Skalierung von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Zugänglichkeit und Benutzerfreundlichkeit, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-Ansichts](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, speziell `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS-Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM-Ansichts](/de/docs/Web/CSS/CSSOM_view)-Modul
