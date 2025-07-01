---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} — was er ist, sein Einfluss im Hinblick auf CSS, SVG und mobile Geräte — und differenziert zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der momentan betrachtet wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, abgesehen von der Benutzeroberfläche, der Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist, insbesondere der Abschnitt "Was ist ein Viewport" und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _See Also_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis Sie in den Sichtbereich gescrollt haben.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammenfassend ist der Viewport im Wesentlichen der Teil des Dokuments, der momentan sichtbar ist.

### Viewport-Größen sind veränderbar

Die Breite des Viewports entspricht nicht immer der Fensterbreite. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, erhalten Sie möglicherweise:

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

- Die Document-Element-Eigenschaft [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Padding (aber keine Rahmen, Margen oder vertikalen Scrollbars, falls vorhanden). **Das ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls angezeigt, der vertikalen Scrollbar.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters einschließlich sämtlicher Fenster-{{Glossary("chrome", "chrome")}}.

In einem Experiment mit diesen Werten wurde beobachtet, dass `innerWidth` und `outerWidth` gleich waren, aber die `outerHeight` war 100px höher als die `innerHeight`. Das liegt daran, dass die `outerHeight` das Browser-Chrome mit einbezieht: Es wurden Messungen in einem Browser mit einer Adressleiste und Lesezeichenleiste, die insgesamt 100px hoch sind, aber kein Chrome links oder rechts des Fensters, vorgenommen.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird generell als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Beim Heranzoomen melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Heranzoomen könnten Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Beim Heranzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Feststehende Header oder Footer mit den folgenden Stilen bleiben jeweils am oberen und unteren Rand des _Layout-Viewports_ haften.

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

Wir erhielten die Messung 800 x 533, als wir mithilfe der Tastatur heranzoomen. Der Header und der Footer blieben am oberen und unteren Rand des Fensters ausgerichtet. Aber was wäre, wenn wir auf einem Tablet mit dem Finger herangezoomt hätten? Was passiert, wenn auf einem Telefon eine dynamische Tastatur geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, die derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einer Zoomgeste vergrößert, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixed](/de/docs/Web/CSS/position#fixed_positioning) Sticky-Header oder -Footer, wie oben beschrieben, bleiben am oberen und unteren Rand des _Layout-Viewports_ haften und bleiben daher sichtbar, wenn wir mit der Tastatur heranzoomen. Wenn Sie mit dem Finger heranzoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports haften, sie sind jedoch möglicherweise nicht am oberen und unteren Rand des Gerätscreens sichtbar — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports ins Bild, wodurch der Sticky-Footer angezeigt wird, der dann am unteren Rand klebt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms ohne Bildschirmtastaturen, Bereiche außerhalb eines Zoombereichs oder andere Merkmale, die nicht im Verhältnis zu den Dimensionen der Seite skaliert werden. Der visuelle Viewport ist gleich groß oder kleiner als der Layout-Viewport.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die umgebenden Seiten als auch jede eingefügte Datei ihr eigenes einzigartiges Fensterobjekt. Nur das Top-Level-Fenster hat einen visuellen Viewport, der sich möglicherweise vom Layout-Viewport unterscheidet. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen über [`width`](/de/docs/Web/CSS/@media/width)- und [`height`](/de/docs/Web/CSS/@media/height)-Media-Queries in Bezug auf die Breite und Höhe des Browserfensters nach. Sie beziehen sich tatsächlich auf den Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des Elternelements in einem verschachtelten Browsing-Kontext wie Objekte, iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1% der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, und nicht des übergeordneten Dokuments. Sie können beliebige Höhen und Breiten in einem iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, wird `1vh` 1% der Höhe des iframes betragen, und `1vw` wird 1% der Breite des Dokuments sein.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw eingestellt ist, beträgt es 50% der Breite des `1200px`-übergeordneten Dokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` ist. Beim Heranzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine medienabfragebasierte Breite innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil wird im nicht herangezoomten Zustand nicht angewendet.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können beliebige Höhen und Breiten auf einem {{SVGElement("svg")}} festlegen, aber das gesamte Bild könnte möglicherweise nicht sichtbar sein. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert ist, das nicht im Zusammenhang mit dieser Viewport-Diskussion steht.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche umschließende Block oder die Breite und Höhe des SVG-Containers. Mit der {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVG wird relativ zu diesem Container und nicht zum Browser gearbeitet.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Generell gilt, dass die oben genannte Medienabfrage die Stile anwendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breitenmedienabfrage im SVG basiert auf dem Element, in dem das SVG eingebettet ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder dem Elternelement, wenn ihm eine Breite zugewiesen wurde — und nicht auf der Breite des Viewports. Da die obige Medien-Abfrage in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px breit ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern von Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen mit Bildschirmen mit unterschiedlichen {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnissen. Der mobile Browser-Viewport ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, der nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, das im Allgemeinen bei 980px liegt, was normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass es auf einmal gesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn zum Beispiel ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann wird sie verkleinert, um in den 320px-Raum zu passen, was, je nach Design, für viele, wenn nicht alle Personen unleserlich ist. Um einem mobilen Browser mitzuteilen, dass die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms verwendet werden soll, können Entwickler einen Viewport-Meta-Tag wie den folgenden einfügen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was der Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% entspricht. Es gibt weitere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite heran- oder herauszoomen können, aber die Standardwerte sind für Barrierefreiheit und Benutzererfahrung am besten geeignet, sodass sie weggelassen werden können.

## Siehe auch

- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)
