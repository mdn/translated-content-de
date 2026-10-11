---
title: Viewport-Konzepte
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: d00cd7171957c1510c2e7ff855196df01530a09c
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} – was er ist und welche Auswirkungen er auf CSS, SVG und Mobilgeräte hat. Er definiert den initialen und den tatsächlichen Viewport und erläutert den Unterschied zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion des User Agents, mit der der initiale Containing Block für kontinuierliche Medien festgelegt wird.

Der allgemeine Begriff _Viewport_ bezeichnet in der Computergrafik üblicherweise den Bereich, der gerade betrachtet wird. Bei Webbrowsern entspricht dies in der Regel dem Browserfenster ohne Benutzeroberfläche, Menüleiste usw. Es ist der Teil des Dokuments, den Sie sehen.

Beim Laden eines Dokuments durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ ist das Fenster oder der Anzeigebereich des User Agents, bevor User-Agent-Styles, HTML-{{htmlelement("meta")}}-Tags oder CSS-Styles seine Größe verändert haben. Seine Größe richtet sich nach der Größe des Fensters oder Anzeigebereichs, nicht nach dem Inhalt. Die Größe des initialen Viewports eines User Agents im Vollbildmodus unterscheidet sich je nach Bildschirmausrichtung und Gerät, ist aber auf demselben Gerät bei derselben Ausrichtung immer gleich.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ergibt sich nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport). Inhalte, die für große Viewports entworfen wurden, können in kleineren Viewports verschiedene Probleme aufweisen, darunter unbeabsichtigte Zeilenumbrüche, abgeschnittene Inhalte und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. Das Viewport-Meta-Tag gibt Hinweise zur anfänglichen Größe des Viewports. Die Größe des tatsächlichen Viewports wird durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut festgelegt. Wenn das Tag fehlt, stellen einige mobile Browser Inhalte mit einer festen Breite des initialen Containing Blocks dar, üblicherweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und verkleinern anschließend den Inhalt so, dass er hineinpasst. Dadurch wird ein CSS-Pixel kleiner als ein tatsächlicher Pixel.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport umfasst alles, was gerade sichtbar ist – insbesondere den Abschnitt „Was ist ein Viewport?“ und möglicherweise einen Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Bildschirmgröße, davon, ob sich der Browser im Vollbildmodus befindet, und von der Zoomstufe des Browsers ab. Inhalte außerhalb des Viewports, etwa der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich erst auf dem Bildschirm sichtbar, wenn Sie zu ihnen scrollen.

- Auf größeren Bildschirmen, auf denen Anwendungen nicht unbedingt im Vollbildmodus laufen, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten Mobilgeräten und wenn sich der Browser im Vollbildmodus befindet, umfasst der Viewport den gesamten Bildschirm.
- Im Vollbildmodus ist der Viewport der Gerätebildschirm. Das Fenster ist das Browserfenster, das genauso groß wie der Viewport oder kleiner sein kann. Das Dokument ist die Website, die wesentlich höher oder breiter als der Viewport sein kann.

Bei [seitenbasierten Medien](/de/docs/Web/CSS/Guides/Paged_media) richtet sich der initiale Containing Block nach dem Seitenbereich. Der Seitenbereich kann mit {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der gerade sichtbar ist.

### Viewport-Größen können sich ändern

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie in Chrome oder Firefox die Breite oder Höhe des Fensters und des Dokuments abfragen, erhalten Sie möglicherweise:

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

Mehrere DOM-Eigenschaften helfen Ihnen, die Viewport-Größe und ähnliche Maße abzufragen:

- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Padding, aber ohne Rahmen, Margins oder gegebenenfalls vertikale Scrollleisten. **Dies ist die Breite des Viewports.**
- [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite des Viewports des Browserfensters in CSS-Pixeln, einschließlich der vertikalen Scrollleiste, falls sie angezeigt wird.
- [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die äußere Breite des Browserfensters einschließlich der gesamten {{Glossary("chrome", "Browseroberfläche")}}.

Bei einem Versuch mit diesen Eigenschaften waren `innerWidth` und `outerWidth` gleich, während `outerHeight` um 100px größer als `innerHeight` war. Das liegt daran, dass `outerHeight` die Browseroberfläche einschließt: Die Messungen wurden in einem Browser vorgenommen, dessen Adress- und Lesezeichenleiste zusammen 100px hoch waren, der aber links und rechts vom Fenster keine weiteren Oberflächenelemente hatte.

Der Bereich innerhalb von `innerHeight` und `innerWidth` gilt im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}**. Die Browseroberfläche zählt nicht zum Viewport.

Beim Hineinzoomen geben sowohl Firefox als auch Chrome für `innerWidth` und `clientWidth` die neue Größe in {{Glossary("CSS_pixel", "CSS-Pixeln")}} an. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln an, Chrome dagegen das Maß in der ursprünglichen Pixelgröße. Beim Hineinzoomen erhalten Sie möglicherweise:

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

Ursprünglich war der Viewport 1200 × 800 Pixel groß. Nach dem Hineinzoomen war er 800 × 533 Pixel groß. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Styles bleiben jeweils am oberen beziehungsweise unteren Rand des _Layout-Viewports_ haften.

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

Die Messung von 800 × 533 ergab sich, als wir mit der Tastatur hineingezoomt haben. Header und Footer blieben bündig am oberen und unteren Rand des Fensters. Was passiert aber, wenn wir auf einem Tablet mit einer Spreizgeste zoomen? Oder wenn sich auf einem Smartphone eine Bildschirmtastatur öffnet?

### Layout- und visuelle Viewports

Im Web gibt es zwei Viewports: den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der gerade im Browser sichtbar ist, und kann sich verändern. Wenn Benutzer die Seite mit einer Spreizgeste vergrößern, eine Bildschirmtastatur öffnen oder eine zuvor ausgeblendete Adressleiste sichtbar wird, verkleinert sich der visuelle Viewport. Der Layout-Viewport bleibt unverändert.

Wie oben beschrieben, bleiben [fixierte](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) oder sticky Header und Footer am oberen beziehungsweise unteren Rand des _Layout-Viewports_ haften. Daher bleiben sie sichtbar, wenn wir mit der Tastatur hineinzoomen. Beim Zoomen mit einer Spreizgeste ist der Layout-Viewport möglicherweise nicht mehr vollständig sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, dehnt sich der Inhalt in alle vier Richtungen aus. Ein Sticky-Header oder -Footer bleibt weiterhin am oberen beziehungsweise unteren Rand des Layout-Viewports haften, ist aber möglicherweise nicht mehr am oberen oder unteren Rand des Gerätebildschirms – also des visuellen Viewports – sichtbar. Der visuelle Viewport ist der aktuell sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports in den sichtbaren Bereich. Dadurch wird der Sticky-Footer angezeigt, der dann am unteren Rand haften bleibt.

Der visuelle Viewport ist der sichtbare Teil des Bildschirms. Er umfasst keine Bildschirmtastaturen, Bereiche außerhalb des durch eine Zoomgeste sichtbaren Ausschnitts oder andere Funktionen, deren Größe sich nicht mit den Abmessungen einer Seite verändert. Der visuelle Viewport ist höchstens so groß wie der Layout-Viewport.

Bei einer Seite mit iframes, Objekten oder externen SVG-Dateien haben sowohl die einbettende Seite als auch jede eingebundene Datei ein eigenes Window-Objekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei eingebundenen Dokumenten sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und der visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen. Jeder untergeordnete Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, gilt als visueller Viewport.

Üblicherweise gehen wir davon aus, dass sich [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width)- und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Media-Queries auf die Breite und Höhe des Browserfensters beziehen. Tatsächlich beziehen sie sich auf den Viewport: Im Hauptdokument ist dies das Fenster, in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG dagegen die intrinsische Größe des übergeordneten Elements. CSS bietet außerdem [Längeneinheiten, die auf der Viewport-Größe basieren](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1 % der Höhe des Layout-Viewports. Entsprechend entspricht eine `vw`-Einheit 1 % seiner Breite.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} entspricht der visuelle Viewport der inneren Breite und Höhe des iframe, nicht denen des übergeordneten Dokuments. Sie können für einen iframe eine beliebige Höhe und Breite festlegen; möglicherweise ist dann aber nicht das gesamte Dokument sichtbar.

Wenn Sie im CSS des iframe-Dokuments [Viewport-Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) verwenden, entspricht `1vh` 1 % der Höhe des iframe und `1vw` 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der iframe auf 50vw gesetzt wird, entspricht seine Breite in unserem obigen Beispiel 50 % der Breite des übergeordneten Dokuments von `1200px`, also `600px`. Dabei entspricht `1vw` einem Wert von `6px`. Beim Hineinzoomen schrumpft der iframe auf `400px`, und `1vw` entspricht `4px`.

Eine breitenbasierte Media-Query innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframe.

```css
@media screen and (width <= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, sobald Benutzer hineingezoomt haben. Ohne Zoom wird dieser Style nicht angewendet.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können für ein {{SVGElement("svg")}} eine beliebige Höhe und Breite festlegen, aber möglicherweise ist nicht das gesamte Bild sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Seine Größe lässt sich über die Attribute width und height des `<svg>`-Elements festlegen.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 × 300 Einheiten groß, wobei eine Einheit üblicherweise einem CSS-Pixel entspricht.

SVG verfügt außerdem über ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und mit dem hier besprochenen Viewport nicht zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einbinden, ist der Viewport des SVG der initiale Containing Block beziehungsweise die Breite und Höhe des SVG-Containers. Eine {{CSSxRef("@media")}}-Query im CSS Ihres SVG bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Wenn Sie die obige Media-Query schreiben, werden die Styles normalerweise angewendet, sofern der Viewport – üblicherweise das Browserfenster – zwischen 400px und 500px breit ist, einschließlich der Grenzwerte. Die width-Media-Query im SVG richtet sich jedoch nach dem Element, das das SVG enthält: nach dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist; nach dem SVG selbst, wenn es direkt in das HTML eingebunden ist; oder nach dem übergeordneten Element, wenn diesem eine Breite zugewiesen wurde – nicht nach der Breite des Viewports. Befindet sich die obige Media-Query in unserer SVG-Datei, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px breit ist.

### JavaScript

Die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples)-Schnittstelle bietet eine Möglichkeit, Eigenschaften des visuellen Viewports abzufragen und zu ändern.

Die [`Viewport`](/de/docs/Web/API/Viewport)-Schnittstelle bietet eine Möglichkeit, Eigenschaften des visuellen Viewports abzufragen und zu ändern.

## Viewports auf Mobilgeräten

Mobilgeräte gibt es in unterschiedlichsten Formen und Größen; ihre Bildschirme weisen unterschiedliche Verhältnisse von {{Glossary("device_pixel", "Gerätepixeln")}} zu CSS-Pixeln auf. Der Viewport eines mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind. Er ist nicht unbedingt genauso groß wie die gerenderte Seite. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, der üblicherweise 980px breit und damit meist breiter als der Bildschirm ist. Anschließend verkleinern sie das gerenderte Ergebnis, sodass alles auf einmal sichtbar ist. Benutzer können die Ansicht dann verschieben und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise 320px breit ist, kann eine Website mit einem virtuellen Viewport von 980px gerendert und anschließend auf die verfügbaren 320px verkleinert werden. Je nach Gestaltung ist sie dadurch für viele oder sogar alle Menschen unleserlich. Damit ein mobiler Browser statt der standardmäßigen 980px die Viewport-Breite als Bildschirmbreite verwendet, können Entwickler ein Viewport-Meta-Tag wie das folgende einbinden:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, also auf die Breite des Bildschirms in CSS-Pixeln bei einem Skalierungsfaktor von 100 %. Andere Eigenschaften wie `maximum-scale`, `minimum-scale` und `user-scalable` steuern, ob Benutzer die Seite vergrößern oder verkleinern können. Die Standardwerte sind jedoch am besten für die Barrierefreiheit und Benutzerfreundlichkeit geeignet, weshalb diese Eigenschaften weggelassen werden können.

## Siehe auch

- [CSSOM-View](/de/docs/Web/CSS/Guides/CSSOM_view)-Modul
- [CSSOM-View-API](/de/docs/Web/API/CSSOM_view_API)
- {{HTMLElement("meta")}}, insbesondere [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport)-Modul
