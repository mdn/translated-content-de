---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was er ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und differenziert zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der aktuell betrachtet wird. In Bezug auf Webbrowser ist er im Allgemeinen dasselbe wie das Browserfenster, abgesehen von der Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie ansehen.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport umfasst alles, was derzeit sichtbar ist; insbesondere, der Abschnitt "Was ist ein Viewport" und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Bildschirmgröße ab, davon ob der Browser im Vollbildmodus ist oder nicht, und davon ob der Browser herangezoomt ist oder nicht. Inhalt außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, ist wahrscheinlich nicht sichtbar, bis er in den sichtbaren Bereich gescrollt wird.

- Auf größeren Monitoren, wo Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammenfassend ist der Viewport im Grunde der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie in Chrome oder Firefox die Breite oder Höhe des Fensters und Dokuments abfragen, erhalten Sie möglicherweise:

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

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokument-Elements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), inklusive Padding (aber ohne Ränder, Außenabstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite des Browserfensters in CSS-Pixeln, inklusive, falls gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters inklusive der gesamten Fenster{{Glossary("chrome", "chrome")}}.

In einem Experiment mit diesen Werten wurden `innerWidth` und `outerWidth` als gleich erkannt, aber die `outerHeight` war 100px höher als die `innerHeight`. Dies liegt daran, dass die `outerHeight` die Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste, die insgesamt 100px hoch sind, aber ohne Chrome an den Seiten des Fensters vorgenommen.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als der **{{Glossary("layout_viewport", "Layout-Viewport")}}** angesehen. Die Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn herangezoomt wird, geben sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth` zurück. Die Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Wenn herangezoomt wird, erhalten Sie möglicherweise:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Beim Heranzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Feste Kopf- oder Fußzeilen mit den folgenden Stilen bleiben jeweils am oberen und unteren Rand des _Layout-Viewports_ haften.

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

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur herangezoomt haben. Der Header und Footer blieben bündig am oberen und unteren Fensterrand. Aber was, wenn wir auf einem Tablet gezoomt hätten? Was, wenn sich eine dynamische Tastatur auf einem Telefon öffnet?

### Layout- und visuelle Viewports

Das Web beinhaltet zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der momentan im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite heranzoomt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt.

[Fixed](/de/docs/Web/CSS/position#fixed_positioning) Kopf- oder Fußzeilen, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher sichtbar, wenn Sie mit der Tastatur heranzoomen. Wenn Sie mit den Fingern heranzoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie in der Mitte des Layout-Viewports vergrößern, expandiert der Inhalt in alle vier Richtungen. Wenn Sie eine feste Kopf- oder Fußzeile haben, haften diese weiterhin am oberen oder unteren Rand des Layout-Viewports, können jedoch im oberen und unteren Bereich des Geräts — der das visuelle Viewport ist — nicht sichtbar sein. Der visuelle Viewport ist der aktuell sichtbare Teil des Layout-Viewports. Wenn Sie herunter scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports ins Bild, wodurch der feste Footer angezeigt wird, der dann am unteren Rand bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms ohne On-Screen-Tastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder anderen Funktionen, die sich nicht mit den Dimensionen einer Seite skalieren lassen. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit eingebetteten iframes, Objekten oder externem SVG haben sowohl die umgebenden Seiten als auch jede einbezogene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout- und visuelle Viewport sind nicht die einzigen Viewports, die Sie antreffen werden. Jeder Sub-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, gilt als visueller Viewport.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height) Media Queries relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, jedoch die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1% der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, anstatt des übergeordneten Dokuments. Sie können eine beliebige Höhe und Breite für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, entspricht `1vh` 1% der Höhe des iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt wird, entspricht es 50% der Breite des `1200px`-Elterndokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` ist. Beim Heranzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine medienbasierte Abfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht-herangezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG/) Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite für ein {{htmlelement("SVG")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann durch die Breiten- und Höhenattribute des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert ist und nicht im Zusammenhang mit dieser Viewport-Diskussion steht.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der initiale enthaltende Block oder die Breite und Höhe des SVG-Containers. Die {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container und nicht auf das Browserfenster.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media Query schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px inklusive ist. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt ist, oder dem Eltern, wenn das Elternelement eine Breite zugewiesen hat — nicht die Breite des Viewports. Mit der obigen Media Query in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte gesehen werden können, was nicht notwendigerweise die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, üblicherweise bei 980px, was normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es alles auf einmal gesehen werden kann. Benutzer können dann die Seite verschieben und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann würde sie verkleinert, um in den 320px-Raum zu passen. Dies ist je nach Design für viele oder sogar alle Benutzer unleserlich. Um einem mobilen Browser zu sagen, dass er die Breite des Viewports anstelle der Standard-980px als Breite des Bildschirms verwenden soll, können Entwickler ein Viewport-Meta-Tag einschließen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind am besten für die Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM view](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, speziell `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)
