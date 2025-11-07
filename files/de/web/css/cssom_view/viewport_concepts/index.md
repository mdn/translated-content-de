---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist und seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Benutzeragenten-Funktion, die verwendet wird, um den initialen umschließenden Block für kontinuierliche Medien zu etablieren.

Der generische Begriff _Viewport_ bezieht sich allgemein auf den Bereich in der Computergrafik, der aktuell betrachtet wird. In Webbrowser-Begriffen ist das im Allgemeinen dasselbe wie das Browserfenster, allerdings ohne die Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie sehen.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des Benutzeragenten, bevor Benutzeragentenstile, HTML {{htmlelement("meta")}}-Tags oder CSS-Stile dessen Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzeragenten unterscheidet sich je nach Ausrichtung und Gerät, bleibt jedoch für dasselbe Gerät in derselben Ausrichtung immer gleich.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports ausgelegt sind, können in kleineren Viewports eine Vielzahl von Fehlern aufweisen, einschließlich unbeabsichtigtem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. Das Viewport-Meta-Tag gibt Hinweise zur initialen Größe des Viewports. Der tatsächliche Viewport ist die Größe, die durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut definiert wird. Wenn dieses Tag weggelassen wird, rendern einige mobile Browser Inhalte mithilfe einer festen initialen Blockbreite, die normalerweise `980px` beträgt. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren den Inhalt, um ihn einzupassen, wodurch die CSS-Pixelgröße kleiner als ein tatsächliches Pixel wird.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise Teile des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis man dorthin scrollt.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn sich der Browser im Vollbildmodus befindet, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Webseite, die viel höher oder breiter als der Viewport sein kann.

Für [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media) basiert der initiale umschließende Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der gerade sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und Dokuments in Chrome oder Firefox abfragen, erhalten Sie möglicherweise:

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

- Die `Element.clientWidth` des Dokument-Elements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Polsterung (aber nicht Ränder, Rahmen oder vertikaler Bildlaufleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die `Window.innerWidth` ist die Breite des Browserfenster-Viewports in CSS-Pixeln, einschließlich der vertikalen Bildlaufleiste, falls vorhanden.
- Die `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fenster-{{Glossary("chrome", "Chroms")}}.

In einem Experiment mit diesen wurde festgestellt, dass `innerWidth` und `outerWidth` gleich waren, aber die `outerHeight` 100 Pixel höher als die `innerHeight`. Dies liegt daran, dass die `outerHeight` das Browser-Chrom umfasst: Die Messungen wurden an einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit einer Gesamthöhe von 100 Pixeln, aber keinem Chrom auf der linken oder rechten Seite des Fensters, durchgeführt.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrom gilt nicht als Teil des Viewports.

Bei Vergrößerung melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixelgröße zurück. Bei Vergrößerung erhalten Sie möglicherweise:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Nach der Vergrößerung wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Feste Kopf- oder Fußzeilen mit den folgenden Stilen bleiben jeweils am oberen und unteren Rand des _Layout-Viewports_ haften.

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

Wir erhielten die Messung von 800 x 533, als wir die Vergrößerung über die Tastatur vorgenommen haben. Die Kopf- und Fußzeile blieben bündig am oberen und unteren Fensterrand. Aber was wäre, wenn wir auf einem Tablet durch Spreizen gezoomt hätten? Was wäre, wenn auf einem Smartphone eine dynamische Tastatur aufpoppen würde?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der aktuell im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite durch Spreizen zoomt, eine dynamische Tastatur aufpoppt oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt.

[Feste](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) klebrige Kopf- oder Fußzeilen, wie oben erwähnt, bleiben am oberen und unteren Ende des _Layout-Viewports_ haften und bleiben daher im Sichtfeld, wenn wir mit der Tastatur hereinzoomen. Wenn Sie durch Spreizen hereinzoomen, ist möglicherweise nicht der gesamte Layout-Viewport sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, erweitert sich der Inhalt in alle vier Richtungen. Wenn Sie eine klebrige Kopf- oder Fußzeile haben, bleibt diese am oberen oder unteren Rand des Layout-Viewports haften, aber möglicherweise nicht sichtbar am oberen und unteren Rand des Bildschirm – was der visuelle Viewport ist. Der visuelle Viewport ist der momentan sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports, bringen den unteren Teil des Layout-Viewports ins Sichtfeld und zeigen die klebrige Fußzeile, die dann am unteren Rand kleben bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms, der jedoch keine Elemente wie Bildschirmtastaturen, Bereiche außerhalb eines Spreizzoom-Bereichs oder andere Funktionen umfasst, die sich nicht mit den Dimensionen einer Seite skalieren. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit Iframes, Objekten oder externem SVG haben sowohl die umgebenden Seiten als auch jede Datei ihre eigenen einzigartigen Fenster-Objekte. Nur das übergeordnete Fenster hat einen visuellen Viewport, der sich von dem Layout-Viewport unterscheiden kann. Bei den eingebetteten Dokumenten ist der visuelle Viewport derselbe wie der Layout-Viewport.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Teilausschnitt, der innerhalb des Layout-Viewports ganz oder teilweise angezeigt wird, wird als visueller Viewport betrachtet.

Im Allgemeinen denken wir, dass [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width)- und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Media-Abfragen relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der das Fenster im Hauptdokument ist, jedoch die intrinsische Größe des Elternelements in einem geschachtelten Browsing-Kontext wie Objekten, Iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes und nicht des übergeordneten Dokuments. Sie können jede Höhe und Breite in einem Iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, wird `1vh` als 1 % der Höhe des Iframes definiert und `1vw` als 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der Iframe auf 50vw gesetzt ist, beträgt er 50 % der Breite des `1200px`-übergeordneten Dokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` ist. Bei Vergrößerung schrumpft der Iframe auf `400px` und `1vw` wird `4px`.

Eine auf Breite basierende Media-Abfrage innerhalb des Iframe-Dokuments bezieht sich auf den Viewport des Iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS in dem Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hereingezoomt hat, aber dieser Stil wird im nicht vergrößerten Zustand nicht angewendet.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede Höhe und Breite auf einem {{SVGElement("svg")}}-Element festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann durch die Breiten- und Höhenattribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 x 300 Einheiten, wobei eine Einheit allgemein einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion in Zusammenhang steht.

Wenn Sie eine SVG-Datei in Ihr HTML einbinden, ist der Viewport der SVG der initiale umschließende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihrer SVG bezieht sich auf diesen Container und nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen werden die Stile angewendet, wenn Sie die obige Media-Abfrage schreiben, und der Viewport, also das Browserfenster im Allgemeinen, liegt zwischen 400px und 500px, einschließlich. Die Breiten-Media-Abfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingebunden ist, oder dem Elternteil, wenn das Elternelement eine zugewiesene Breite hat und nicht der Breite des Viewports. Mit der obigen Media-Abfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Modifizieren der Eigenschaften des visuellen Viewports.

Die [Viewport-API](/de/docs/Web/API/Viewport_API) bietet einen Mechanismus zum Abfragen und Modifizieren der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte sind in allen Formen und Größen erhältlich, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, was nicht unbedingt mit der Größe der gerenderten Seite übereinstimmt. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, das normalerweise breiter ist als der Bildschirm, und reduzieren dann das gerenderte Ergebnis, damit es alles gleichzeitig gesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, um dann auf den 320px-Bereich geschrumpft zu werden, was je nach Design für viele, wenn nicht alle, unlesbar ist. Um einem mobilen Browser mitzuteilen, die Breite des Viewports anstelle der standardmäßigen 980px als Bildschirmbreite zu verwenden, können Entwickler ein Viewport-Meta-Tag einschließen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` eingestellt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite herein- oder herauszoomen können, aber die Standardwerte sind am besten für Barrierefreiheit und Benutzererfahrung geeignet, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [CSS-Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view)-Modul
