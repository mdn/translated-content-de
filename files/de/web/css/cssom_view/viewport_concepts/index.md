---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist und welchen Einfluss es in Bezug auf CSS, SVG und mobile Geräte hat. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist ein Feature des Benutzeragenten, das den initialen enthaltenen Block für kontinuierliche Medien festlegt.

Der generische Begriff _Viewport_ bezieht sich im Allgemeinen auf den Bereich in der Computergrafik, der derzeit angezeigt wird. In Bezug auf Webbrowser ist das im Allgemeinen dasselbe wie das Browserfenster, wobei die Benutzeroberfläche, die Menüleiste usw. ausgeschlossen sind. Das ist der Teil des Dokuments, den Sie sich ansehen.

Während ein Dokument geladen wird, durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des Benutzeragenten, bevor Benutzeragentenstile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder des Anzeigebereichs, nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzeragenten variiert zwischen Ausrichtungen und Geräten, ist jedoch immer gleich für dasselbe Gerät in derselben Ausrichtung.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports entworfen wurden, können eine Vielzahl von Fehlern aufweisen, wenn sie in kleineren Viewports angezeigt werden, einschließlich unerwarteten Umbrüchen, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag gibt Hinweise auf die Anfangsgröße des Viewports. Der tatsächliche Viewport ist die durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definierte Größe. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser den Inhalt mit einer festen Anfangsbreite des enthaltenen Blocks, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren dann den Inhalt herunter, um ihn anzupassen, wodurch die CSS-Pixelgröße kleiner als ein tatsächlicher Pixel wird.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist. Inhalt außerhalb des Viewports, wie der Abschnitt _See Also_ in diesem Dokument, ist wahrscheinlich nicht sichtbar, bis er in den Blick gescrollt wird.

- Bei größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Gerätescreen, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media) basiert der initiale enthaltene Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammenfassend ist der Viewport im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

- Die Dokumentenelementeigenschaft [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Polsterung (aber nicht Ränder, Außenabstände oder vertikalen Scrollbalken, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls gerendert, des vertikalen Scrollbalkens.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fensters {{Glossary("chrome", "Chrome")}}.

In einem Experiment mit diesen wurde beobachtet, dass der `innerWidth` und `outerWidth` gleich waren, aber der `outerHeight` 100px höher als der `innerHeight`. Dies liegt daran, dass der `outerHeight` das Chrome des Browsers umfasst: Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit insgesamt 100px Höhe, aber keiner Chrome auf der linken oder rechten Seite des Fensters, durchgeführt.

Der Bereich innerhalb des `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Chrome des Browsers wird nicht als Teil des Viewports betrachtet.

Wenn gezoomt wird, melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixelgröße zurück. Beim Zoomen erhalten Sie möglicherweise:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Durch das Hineinzoomen wurde der Viewport 800 x 533 Pixel groß. Dies ist der _Layout-Viewport_. Sticky-Header oder -Fußzeilen mit den folgenden Stilen bleiben respektive am oberen und unteren Rand des _Layout-Viewports_ haften.

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

Beim Vergrößern mit der Tastatur erhielten wir die Messung 800 x 533. Der Header und die Fußzeile blieben bündig am oberen und unteren Rand des Fensters. Aber was, wenn wir auf einem Tablet herangezoomt hätten? Was, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer per Kneifzoom die Seite vergrößert, eine dynamische Tastatur öffnet oder sich eine zuvor versteckte Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixed](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Sticky-Header oder -Fußzeilen, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher im Blickfeld, wenn wir mit der Tastatur heranzoomen. Wenn Sie per Kneifzoom vergrößern, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports heraus vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky-Header oder eine Sticky-Fußzeile haben, bleiben diese am oberen bzw. unteren Rand des Layout-Viewports haften, sind jedoch möglicherweise nicht oben und unten auf dem Bildschirm des Geräts sichtbar — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports, bringen den unteren Rand des Layout-Viewports in den Sichtbereich und zeigen die sticky Fußzeile an, die dann unten kleben bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms und schließt auf dem Bildschirm angezeigte Tastaturen, Bereiche außerhalb eines Kneifzoom-Bereichs oder andere Funktionen, die sich nicht mit den Seitenabmessungen skalieren, nicht ein. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit iFrames, Objekten oder externem SVG haben sowohl die enthaltenen Seiten als auch die einzelnen enthaltenen Dateien ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für enthaltene Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, auf die Sie stoßen werden. Jeder Unter-Viewport, der innerhalb des Layout-Viewports vollständig oder teilweise angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height)-Media Queries relativ zur Breite und Höhe des Browserfensters sind. Sie sind tatsächlich relativ zum Viewport, der im Hauptdokument das Fenster ist, aber bei einem eingebetteten Browsing-Kontext wie Objekten, iFrames und SVG die intrinsische Größe des Elternelements ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iFrames, nicht des Elterndokuments. Sie können jedem iFrame eine beliebige Höhe und Breite zuweisen, aber möglicherweise ist das gesamte Dokument nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iFrame-Dokuments verwenden, entspricht `1vh` 1 % der Höhe des iFrames, und `1vw` entspricht 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der iFrame auf 50vw gesetzt ist, entspricht er 50 % der Breite des `1200px` großen Elterndokuments in unserem obigen Beispiel, oder `600px`, wobei `1vw` `6px` entspricht. Beim Hineinzoomen schrumpft der iFrame auf `400px` und `1vw` wird zu `4px`.

Eine auf der Breite basierende Media Query innerhalb des iFrame-Dokuments ist relativ zum Viewport des iFrames.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iFrame enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht eingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jedem {{SVGElement("svg")}} eine beliebige Höhe und Breite zuweisen, aber möglicherweise ist das gesamte Bild nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mithilfe der Breiten- und Höhenattribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und mit dieser Viewport-Diskussion nicht in Zusammenhang steht.

Wenn Sie eine SVG-Datei in Ihr HTML einbinden, ist der Viewport des SVG der initiale enthaltene Block oder die Breite und Höhe des SVG-Containers. Die {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVGs bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media Query schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingebettet ist, oder dem Elternelement, wenn das Elternelement eine zugewiesene Breite hat — nicht der Breite des Viewports. Wenn die obige Media Query in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px breit ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Die [Viewport API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalt gesehen werden kann, was nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, was normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass es auf einmal gesehen werden kann. Benutzer können dann pannen und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann in den 320px-Raum verkleinert werden, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der Standard-980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag hinzufügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was der Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% entspricht. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite herein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view)-Modul
