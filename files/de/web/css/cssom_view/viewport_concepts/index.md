---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} — was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der aktuell betrachtet wird. In Bezug auf Webbrowser entspricht das im Allgemeinen dem Browserfenster, abzüglich der Benutzeroberfläche, der Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; bemerkenswert sind der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie beispielsweise der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Webseite, die viel höher oder breiter als der Viewport sein kann.

Zusammenfassend ist der Viewport im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Viewport-Größe abzufragen und andere ähnliche Längen:

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Polsterung (nicht jedoch Rahmen, Ränder oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, wenn gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fenster-{{Glossary("chrome", "Chrome")}}.

In einem Experiment mit diesen Werten wurde festgestellt, dass `innerWidth` und `outerWidth` gleich waren, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit insgesamt 100px Höhe, aber ohne Chrome an der linken oder rechten Seite des Fensters durchgeführt.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports angesehen.

Wenn gezoomt wird, geben sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth` an. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln an, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Wenn Sie hineinzoomen, erhalten Sie möglicherweise:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Nach dem Reinzoomen wurde der Viewport 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Sticky Header oder Footer mit den folgenden Stilen bleiben oben und unten im _Layout-Viewport_ kleben.

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

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur hineinzoomten. Der Header und Footer blieben flach an der Ober- und Unterseite des Fensters. Aber was wäre, wenn wir auf einem Tablet per Pinch-Zoom hineinzoomen? Was wäre, wenn auf einem Telefon eine dynamische Tastatur geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite per Pinch-Zoom vergrößert, eine dynamische Tastatur öffnet oder eine zuvor versteckte Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixed](/de/docs/Web/CSS/position#fixed_positioning) Sticky Header oder Footer, wie oben besprochen, bleiben oben und unten im _Layout-Viewport_ haften und bleiben daher sichtbar, wenn wir mit der Tastatur hineinzoomen. Wenn Sie per Pinch-Zoom vergrößern, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky Header oder Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports kleben, jedoch sind sie möglicherweise nicht oben und unten auf dem Geräteschirm sichtbar — was der visuelle Viewport ist. Der visuelle Viewport ist der aktuell sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports in die Ansicht, wodurch der Sticky Footer angezeigt wird, der dann am unteren Rand haften bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, der keine On-Screen-Tastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Merkmale umfasst, die nicht mit den Abmessungen einer Seite skalieren. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit Iframes, Objekten oder externem SVG haben sowohl die enthaltenden Seiten als auch jede enthaltene Datei ihr eigenes einzigartiges Fensterelement. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für enthaltene Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Die oben beschriebenen Layout- und visuellen Viewports sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, gilt als visueller Viewport.

Wir betrachten allgemein [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height) Media Queries als relativ zur Breite und Höhe des Browserfensters. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe eines Elternelements in einem verschachtelten Browsing-Kontext wie Objekten, Iframes und SVG ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1% der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes, nicht des übergeordneten Dokuments. Sie können beliebige Höhe und Breite auf einem Iframe festlegen, aber möglicherweise ist das gesamte Dokument nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, ist `1vh` 1% der Höhe des Iframes, und `1vw` ist 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der Iframe auf 50vw eingestellt ist, beträgt er 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` ist. Bei Reinzoomen schrumpft der Iframe auf `400px` und `1vw` wird `4px`.

Eine Breiten-basierte Media Query innerhalb des Iframe-Dokuments ist relativ zum Viewport des Iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht-vergrößerten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können beliebige Höhe und Breite auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG verfügt außerdem über ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihrem HTML einfügen, ist der Viewport des SVG der anfängliche umgebende Block oder die Breite und Höhe des SVG-Containers. Die Nutzung des {{CSSxRef("@media")}}-Querys in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen werden die oben genannten Styles angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breiten-bedingte Media Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder dem Elternelement, wenn das Elternelement eine Breite zugewiesen hat — und nicht auf der Breite des Viewports. Mit der oben genannten Media Query in unserer SVG-Datei wird die CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen mit Bildschirmen unterschiedlichen {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnissen. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte gesehen werden können, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, was normalerweise breiter als der Bildschirm ist und dann das gerenderte Ergebnis verkleinert, damit alles auf einmal sichtbar ist. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Webseite mit einem virtuellen Viewport von 980px gerendert werden und dann wird sie geschrumpft, um in den 320px Raum zu passen, was, abhängig vom Design, unleserlich für viele, wenn nicht alle ist. Um einem mobilen Browser zu sagen, dass die Viewport-Breite anstelle der Standard-980px als Breite des Bildschirms verwendet werden soll, können Entwickler ein Viewport-Meta-Tag wie das folgende einschließen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind für Barrierefreiheit und Benutzererfahrung am besten geeignet, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM-Ansichtsmodul](/de/docs/Web/CSS/CSSOM_view)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Guides/Viewport_meta_element)
