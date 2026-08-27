---
title: Viewport-Konzepte
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was er ist und seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte. Dieser Artikel definiert den initialen Viewport und den tatsächlichen Viewport und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein **Viewport** ist eine Funktion des User Agents, die genutzt wird, um den initialen Block für kontinuierliche Medien festzulegen.

Der generische Begriff _Viewport_ bezieht sich im Allgemeinen auf den Bereich in der Computergrafik, der gerade angesehen wird. In Bezug auf Webbrowser entspricht das normalerweise dem Browserfenster, ausgenommen die Benutzeroberfläche, die Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Während ein Dokument geladen wird, durchläuft der Viewport zwei Phasen:

- **Initialer Viewport**
  - : Der _initiale Viewport_ bezieht sich auf das Fenster oder den Anzeigebereich des Benutzer-Agents, bevor Benutzer-Agent-Stile, HTML-{{htmlelement("meta")}}-Tags oder CSS-Stile seine Größe überschrieben haben. Die Größe des initialen Viewports basiert auf der Größe des Fensters oder Anzeigebereichs und nicht auf dem Inhalt. Die Größe des initialen Viewports eines Vollbild-Benutzer-Agents variiert zwischen Ausrichtungen und Geräten, bleibt jedoch bei demselben Gerät in derselben Ausrichtung immer gleich.

- **Tatsächlicher Viewport**
  - : Der _tatsächliche Viewport_ ist der Viewport, den Sie nach der Verarbeitung des [Viewport-`<meta>`-Tags](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) erhalten. Inhalte, die für große Viewports entworfen wurden, können in kleineren Viewports verschiedene Fehler zeigen, einschließlich unbeabsichtigtem Zeilenumbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scrollcontainern")}}. Das Viewport-Meta-Tag gibt Hinweise auf die anfängliche Größe des Viewports. Der tatsächliche Viewport ist die durch sein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut definierte Größe. Wenn dieses Tag fehlt, rendern einige mobile Browser Inhalte mit einer festen Anfangsblockbreite, typischerweise `980px`. Sie setzen die Breite des tatsächlichen Viewports auf diesen Wert und skalieren den Inhalt dann, um ihn anzupassen, wodurch die CSS-Pixelgröße kleiner als ein tatsächlicher Pixel wird.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt „Was ist ein Viewport“ und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser herein- oder herausgezoomt ist. Inhalte außerhalb des Viewports, wie der Abschnitt „Siehe auch“ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und im Vollbildmodus des Browsers ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das genauso groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Für [seitenbasierte Medien](/de/docs/Web/CSS/Guides/Paged_media) basiert der initiale Block auf dem Seitenbereich. Der Seitenbereich kann durch {{cssxref("@page")}}-Regeln festgelegt werden.

Zusammengefasst, der Viewport ist im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#screen_density), einschließlich Polsterung (aber nicht der Ränder, Ränder oder vertikalen Bildlaufleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- `Window.innerWidth` ist die Breite des Browserfensters in CSS-Pixel inklusive, falls gerendert, der vertikalen Bildlaufleiste.
- `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich aller Fensterlemente {{Glossary("chrome", "chrome")}}.

In einem Experiment mit diesen waren `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome beinhaltet: Die Messungen wurden bei einem Browser mit einer Adressleiste und einer Lesezeichenleiste durchgeführt, die insgesamt 100px hoch waren, jedoch kein Chrome auf der linken oder rechten Seite des Fensters.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Beim Hineinzoomen geben sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth` an. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox berichtet den neuen Wert in CSS-Pixel, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Hineinzoomen können Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Nach dem Hineinzoomen wurde der Viewport 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen haften am oberen und unteren Rand des _Layout-Viewports_.

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

Wir erhielten die Messung 800 x 533, als wir mit der Tastatur hineingezoomt haben. Der Header und Footer blieben bündig am oberen und unteren Rand des Fensters. Aber was wäre, wenn wir auf einem Tablet gezoomt hätten? Was wäre, wenn auf einem Telefon eine dynamische Tastatur auftaucht?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite per Pinch-Zoom vergrößert, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Feste](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Sticky-Header oder -Footer, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher im Blick, wenn wir per Tastatur hineinzoomen. Wenn Sie per Pinch-Zoom vergrößern, ist möglicherweise nicht der gesamte Layout-Viewport sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports haften, aber sie sind möglicherweise nicht oben und unten auf dem Bildschirm des Geräts sichtbar — das ist der visuelle Viewport. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Scrollen Sie nach unten, ändern Sie den Inhalt des visuellen Viewports und bringen Sie den unteren Teil des Layout-Viewports ins Sichtfeld, wodurch der Sticky-Footer angezeigt wird, der dann am unteren Rand kleben bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms ohne Bildschirmtastaturen, Bereiche außerhalb eines Zoom-Bereichs oder andere Funktionen, die nicht mit den Abmessungen einer Seite skalieren. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die iframes, Objekte oder externe SVGs enthält, haben sowohl die enthaltenden Seiten als auch jede enthaltene Datei ihr eigenes eindeutiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei enthaltenen Dokumenten sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken allgemein, dass [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width)- und [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Medienabfragen relativ zur Breite und Höhe des Browserfensters sind. Sie stehen tatsächlich im Verhältnis zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des Elternelements in einem verschachtelten Browserkontext wie Objekte, iframes und SVG ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1% der Höhe des Layout-Viewports. Ähnlich ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes und nicht des übergeordneten Dokuments. Sie können jede Höhe und Breite auf einem iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie in Ihrem CSS im iframe-Dokument [Viewport-Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) verwenden, ist `1vh` 1% der Höhe des iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, entspricht es 50% der Breite des `1200px`-Elterndokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` ist. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine auf Breite basierende Medienabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (width <= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht hineingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Attributen „width“ und „height“ des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten, wobei eine Einheit normalerweise einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird, das in dieser Viewport-Diskussion nicht berücksichtigt wird.

Wenn Sie eine SVG-Datei in Ihr HTML aufnehmen, ist der Viewport des SVG der initiale Block, oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container und nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, also das Browserfenster, zwischen 400px und 500px, einschließlich, liegt. Die Breiten-Medienabfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, falls die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML aufgenommen wird, oder das Elternelement, falls das Elternelement eine Breite zugewiesen hat — und nicht die Breite des Viewports. Mit der oben genannten Medienabfrage, die in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px ist.

### JavaScript

Das [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples)-Interface bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

Das [`Viewport`](/de/docs/Web/API/Viewport)-Interface bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sind, was nicht unbedingt der gleichen Größe wie die gerenderte Seite entspricht. Mobilbrowser rendern Seiten in einem virtuellen Fenster oder Viewport, normalerweise bei 980px, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es alles auf einmal sichtbar ist. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie verkleinert, um in den 320px-Bereich zu passen, was abhängig von dem Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag wie das folgende einfügen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite herein- oder herauszoomen können, aber die Standardwerte sind die besten für Zugänglichkeit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [CSSOM-Ansicht-API](/de/docs/Web/API/CSSOM_view_API)
- {{HTMLElement("meta")}}, speziell [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
