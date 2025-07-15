---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Sie werden auf Scroll-Containern generiert, wenn deren {{cssxref("content")}}-Wert nicht `none` ist. Die Scrollrichtung wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der angibt, welche Scrollrichtung Sie auswählen möchten. Die folgenden Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Buttons des Ursprungselements aus, sodass Stile in einer einzigen Regel angewendet werden können.
    - `down`
      - : Wählt den Button, der den Inhalt nach unten scrollt.
    - `left`
      - : Wählt den Button, der den Inhalt nach links scrollt.
    - `right`
      - : Wählt den Button, der den Inhalt nach rechts scrollt.
    - `up`
      - : Wählt den Button, der den Inhalt nach oben scrollt.
    - `block-end`
      - : Wählt den Button, der den Inhalt in die Block-End-Richtung scrollt.
    - `block-start`
      - : Wählt den Button, der den Inhalt in die Block-Start-Richtung scrollt.
    - `inline-end`
      - : Wählt den Button, der den Inhalt in die Inline-End-Richtung scrollt.
    - `inline-start`
      - : Wählt den Button, der den Inhalt in die Inline-Start-Richtung scrollt.

    Die Spezifikation definiert auch zwei andere Werte – `next` und `prev` –, aber diese werden derzeit in keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()`-Pseudoelemente werden in einem {{Glossary("scroll_container", "Scroll-Container")}} nur erstellt, wenn deren {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, unmittelbar vor ihnen und jedem auf dem Container generierten {{cssxref("::scroll-marker-group")}}.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die den Inhalt in Richtung des Starts und Endes der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt ist. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()`-Pseudoelemente zu markieren und allen Buttons in einer einzigen Regel Stile zuzuweisen.

Die generierten Buttons verhalten sich genauso wie reguläre {{htmlelement("button")}}-Elemente, inklusive ihrer Standard-Browser-Stile. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in der angegebenen Richtung um eine "Seite" gescrollt, was ungefähr der Dimension des Scroll-Containers entspricht, ähnlich wie beim Drücken der <kbd>BildAuf</kbd> und <kbd>BildAb</kbd>-Tasten.

Es wird empfohlen, [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) im Scroll-Container einzurichten und jedes einzelne Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Target")}} zu setzen. In diesem Fall wird beim Aktivieren eines Scroll-Buttons der Inhalt zum Snap-Target gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Buttons ohne Scroll-Snapping funktionieren, erzielen Sie möglicherweise nicht den gewünschten Effekt.

Wenn es nicht möglich ist, in einer bestimmten Scroll-Richtung eines Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den Pseudoklassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} stylen.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Scroll-Buttons erstellen

In diesem Beispiel wird demonstriert, wie Scroll-Buttons auf einem CSS-Karussell erstellt werden.

#### HTML

Wir haben eine grundlegende HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenelementen.

```html live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
```

#### CSS

##### Das Karussell gestalten

Wir konvertieren unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzige, nicht umbruchende Zeile von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überfließen, der Inhalt horizontal scrollt. Wir wandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, um sicherzustellen, dass Elemente beim Scrollen des Containers immer an ihrem Platz einrasten, mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory`.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Als nächstes gestalten wir die `<li>`-Elemente und verwenden die {{cssxref("flex")}}-Eigenschaft, um sie 100% der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhaltes an der linken Kante des Containers einrastet.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

##### Die Scroll-Buttons erstellen

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen und Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer zu setzen. Außerdem werden Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn in dieser Richtung kein weiteres Scrollen möglich ist. Wir verwenden die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand anzusprechen.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: rgb(0 0 0 / 1);
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
  cursor: unset;
}
```

> [!NOTE]
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Buttons, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und entfernen ihn, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein entsprechendes Icon auf die linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, was auch die Erstellung der Scroll-Buttons bewirkt:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternative Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Icons im `content` setzen, da der Browser automatisch geeignete {{Glossary("accessible_name", "zugängliche Namen")}} bereitstellt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links im Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen lassen.

### Die Scroll-Buttons positionieren

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal platziert. In diesem Abschnitt werden wir etwas CSS hinzufügen, um sie mit der [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zuerst wird eine Referenz {{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Als nächstes wird jedem Scroll-Button seine {{cssxref("position")}} auf `absolute` gesetzt und seine {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste, um [die beiden zu verbinden](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}} für die horizontale Positionierung. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die spezifizierten Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen der Buttonkante und der Karussellkante zu lassen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 45 Pixel rechts von der linken Kante des Karussells positioniert.

```css live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  right: calc(anchor(left) - 45px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 45px);
}
```

#### Ergebnis

{{EmbedLiveSample("positioning-scroll-buttons", '', '220')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
