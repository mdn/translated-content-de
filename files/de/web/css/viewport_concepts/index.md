---
title: Viewport-Konzepte
slug: Web/CSS/Viewport_concepts
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des Viewports – was er ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte – und unterscheidet zwischen dem visuellen Viewport und dem Layout-Viewport.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der gerade betrachtet wird. In Browserbegriffen ist er im Allgemeinen dasselbe wie das Browserfenster, abzüglich der Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie betrachten.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist, insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, ob der Browser im Vollbildmodus ist oder nicht, und ob der Benutzer hereingezoomt hat oder nicht. Inhalt außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, ist wahrscheinlich nicht sichtbar, bis er in den Anzeigebereich gescrollt wird.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der gerade sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, könnten Sie Folgendes erhalten:

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

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich Polsterung (aber ohne Ränder, Abstände oder vertikale Scrollleisten, falls vorhanden). **Das ist die Viewport-Breite**.
- Die `Window.innerWidth` ist die Breite des Browserfenster-Viewports in CSS-Pixeln, einschließlich der vertikalen Scrollleiste, falls dargestellt.
- Die `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich aller Fensterchroms.

In einem Experiment mit diesen wurden `innerWidth` und `outerWidth` als identisch angesehen, aber die `outerHeight` war 100px höher als die `innerHeight`. Dies liegt daran, dass die `outerHeight` das Browser-Chrom einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichensymbolleiste mit insgesamt 100px Höhe, aber keinem Chrom auf der linken oder rechten Seite des Fensters durchgeführt.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird im Allgemeinen als **Layout-Viewport** betrachtet. Das Browser-Chrom wird nicht als Teil des Viewports betrachtet.

Wenn hineingezoomt wird, berichten sowohl Firefox als auch Chrome die neue CSS-Pixelgröße für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixelgröße zurück. Beim Hineinzoomen könnten Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Beim Hineinzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Sticky Headers oder Footers mit den folgenden Stilen kleben oben und unten am _Layout-Viewport_.

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

Wir erhielten die Messung von 800 x 533, als wir mit der Tastatur hineingezoomt haben. Der Header und Footer blieben eng am oberen und unteren Rand des Fensters haften. Aber was wäre, wenn wir auf einem Tablet mit einer Pinch-Geste gezoomt hätten? Was passiert, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einer Pinch-Geste zoomt, eine dynamische Tastatur öffnet oder wenn eine vorher unsichtbare Adressleiste sichtbar wird, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt.

Sticky Headers oder Footers, wie oben beschrieben, bleiben oben und unten am _Layout-Viewport_ haften und bleiben daher im Sichtfeld, wenn wir mit der Tastatur zoomen. Wenn Sie mit einer Pinch-Geste zoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, dehnt sich der Inhalt in alle vier Richtungen aus. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben sie oben oder unten am Layout-Viewport haften, sie sind jedoch möglicherweise nicht am oberen und unteren Rand des Geräteschirms sichtbar – das ist der visuelle Viewport. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports ins Sichtfeld, wodurch der Sticky-Footer angezeigt wird, der dann am unteren Rand haftet.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, einschließlich nicht Bildschirmtastaturen oder Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Features, die nicht mit den Seitenmaßen skalieren. Der visuelle Viewport hat dieselbe Größe wie der Layout-Viewport oder ist kleiner.

Für Seiten, die iframes, Objekte oder externe SVG enthalten, haben sowohl die einbettenden Seiten als auch jede includierte Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei includierten Dokumenten sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Sub-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass Breiten- und Höhen-Media-Queries relativ zur Breite und Höhe des Browserfensters sind. Sie sind tatsächlich relativ zum Viewport, der das Fenster im Hauptdokument ist, aber die intrinsische Größe des übergeordneten Elements in einem verschachtelten Browsing-Kontext wie bei Objekten, iframes und SVG ist. In CSS haben wir auch Längeneinheiten basierend auf der Viewportgröße. Eine `vh`-Einheit entspricht 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines iframes entspricht der visuelle Viewport der Breite und Höhe des inneren Rahmens des iframes, anstatt des übergeordneten Dokuments. Sie können jede Höhe und Breite für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie Viewport-Längeneinheiten in Ihrem CSS innerhalb des iframe-Dokuments verwenden, entspricht `1vh` 1 % der Höhe des iframes und `1vw` 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, entspricht es 50 % der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel, oder `600px`, wobei `1vw` `6px` ist. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine medienbasierte Breitenabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht gezoomten Zustand.

#### SVG

In einem SVG-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können für ein SVG jede Höhe und Breite festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes Koordinatensystem, das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert wird, das nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der ursprüngliche enthaltene Block oder die Breite und Höhe des SVG-Containers. Die {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Wenn Sie die obige Media-Abfrage schreiben, werden die Styles angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px ist, einschließlich. Die medienbasierte Breitenabfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist – das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingebettet ist, oder das übergeordnete Element, wenn das übergeordnete Element eine Breite zugewiesen hat – und nicht die Breite des Viewports. Mit der obigen Media-Abfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400 und 500px ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen mit Bildschirmen unterschiedlicher Geräte-Pixel-Dichte. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalt angezeigt werden kann, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, was normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es alles auf einmal gesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, kann eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie auf den 320px-Raum verkleinert, was je nach Design für viele, wenn nicht alle, unlesbar ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag wie das folgende einfügen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Es sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite ein- oder auszoomen können, aber die Standardwerte sind am besten für Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)
