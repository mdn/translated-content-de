---
title: Viewport-Konzepte
slug: Web/CSS/Viewport_concepts
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des Viewports — was er ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und unterscheidet zwischen dem visuellen Viewport und dem Layout-Viewport.

## Was ist ein Viewport?

Ein Viewport stellt den Bereich in der Computer-Grafik dar, der momentan angezeigt wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, ohne die Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist, insbesondere der Abschnitt „Was ist ein Viewport“ und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und ob der Benutzer herangezoomt hat oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der ganze Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Kurz zusammengefasst: Der Viewport ist im Grunde der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

- Die `Element.clientWidth` des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich der Auffüllung (aber ohne Rahmen, Ränder oder vertikale Bildlaufleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, wenn gerendert, der vertikalen Bildlaufleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters einschließlich aller Fensterelemente ({{Glossary("chrome", "chrome")}}).

In einem Experiment mit diesen Eigenschaften wurde beobachtet, dass `innerWidth` und `outerWidth` identisch waren, aber `outerHeight` 100px höher war als `innerHeight`. Der Grund dafür ist, dass `outerHeight` das Browser-Chrome einschließt: Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste vorgenommen, die zusammen 100px in der Höhe ausmachten, jedoch kein Chrome auf der linken oder rechten Seite des Fensters vorhanden war.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird im Allgemeinen als **Layout-Viewport** betrachtet. Der Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Bei herangezoomtem Zustand geben sowohl Firefox als auch Chrome die neue CSS-Pixelgröße für `innerWidth` und `clientWidth` an. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln an, während Chrome die Länge in der Standard-Pixelgröße ausgibt. Bei herangezoomtem Zustand könnten Sie erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Beim Hereinzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Statische Header oder Footer mit den folgenden Stilen bleiben am oberen und unteren Rand des _Layout-Viewports_ haften.

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

Wir erhielten die Messung von 800 x 533, als wir mit der Tastatur hereinzoomten. Der Header und Footer blieben am oberen und unteren Rand des Fensters. Aber was wäre, wenn wir auf einem Tablet herausgezoomt hätten? Was wäre, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser angezeigt wird und sich ändern kann. Wenn der Benutzer die Seite herauszoomt, eine dynamische Tastatur aufpopt oder eine vorher versteckte Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

Statische Header oder Footer, wie oben erwähnt, bleiben am oberen und unteren Rand des _Layout-Viewports_ haften und bleiben daher sichtbar, wenn wir mit der Tastatur hereinzoomen. Wenn Sie herauszoomen, könnte der Layout-Viewport möglicherweise nicht vollständig sichtbar sein. Wenn Sie vom Zentrum des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen statischen Header oder Footer haben, werden diese weiterhin oben oder unten am Layout-Viewport kleben, könnten aber möglicherweise nicht oben und unten auf dem Geräteschirm sichtbar sein — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie die Inhalte des visuellen Viewports und bringen den unteren Teil des Layout-Viewports ins Sichtfeld, wobei der statische Footer angezeigt wird, der dann weiterhin am unteren Rand kleben bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms ohne auf dem Bildschirm angezeigte Tastaturen, Bereiche außerhalb eines Zoom-Bereichs oder andere Merkmale, die nicht mit den Dimensionen einer Seite skalieren. Der visuelle Viewport ist genauso groß wie der Layout-Viewport oder kleiner.

Für eine Seite, die iframes, Objekte oder externes SVG enthält, haben sowohl die integrierten Seiten als auch jede eingefügte Datei ihr eigenes einzigartiges Fensterobjekt. Nur das Top-Level-Fenster hat einen visuellen Viewport, der sich möglicherweise vom Layout-Viewport unterscheidet. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Teil-Viewport, der im Layout-Viewport vollständig oder teilweise angezeigt wird, wird als visueller Viewport betrachtet.

Im Allgemeinen denken wir bei Breiten- und Höhen-Medienabfragen daran, dass sie relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der das Fenster im Hauptdokument ist, aber in einem eingebetteten Browsingkontext wie Objekten, iframes und SVG die intrinsische Größe des Elternteils ist. In CSS haben wir auch Längeneinheiten, die auf der Größe des Viewports basieren. Eine `vh` Einheit ist 1 % der Höhe des Layout-Viewports. Ähnlich ist die `vw` Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines iframes ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, anstatt des übergeordneten Dokuments. Sie können jede beliebige Höhe und Breite in einem iframe einstellen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie Viewport-Längeneinheiten in Ihrem CSS innerhalb des iframe-Dokuments verwenden, wird `1vh` 1 % der Höhe des iframes sein, und `1vw` wird 1 % der Breite des Dokuments sein.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw eingestellt ist, wird es 50 % der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel sein, oder `600px`, wobei `1vw` `6px` ist. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird `4px`.

Eine Breiten-basierte Medienabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herauszoomt, aber dieser Stil gilt nicht im nicht-zoomenden Zustand.

#### SVG

In einem SVG-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können in einem SVG jede beliebige Höhe und Breite festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mithilfe der Breiten- und Höhenattribute des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten, wobei eine Einheit im Allgemeinen ein CSS-Pixel ist.

SVG hat auch ein internes Koordinatensystem, das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert wird, welches nicht mit dieser Viewport-Diskussion verbunden ist.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, wird der Viewport des SVG der anfängliche Container-Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container und nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, in der Regel das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breiten-Medienabfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist — dem {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, dem SVG selbst, wenn das SVG direkt in das HTML eingefügt ist, oder dem übergeordneten Element, wenn das übergeordnete Element eine zugewiesene Breite hat — und nicht der Breite des Viewports. Da die obige Medienabfrage in unserer SVG-Datei ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400 und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte kommen in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Web-Inhalte angesehen werden können, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, was meistens breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es insgesamt angesehen werden kann. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Beispielsweise, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und sie wird dann verkleinert, um in den 320px-Bereich zu passen, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, dass die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms zu verwenden ist, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale`, und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzerfreundlichkeit, sodass diese weggelassen werden können.

## Siehe auch

- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts in mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)
