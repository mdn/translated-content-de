---
title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Sie werden in Scroll-Containern generiert, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Richtung des Scrollings wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der angibt, in welche Richtung der Scroll-Button ausgewählt werden soll. Folgende Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Buttons des Ursprungs-Elements aus, sodass Stile auf jeden von ihnen in einer einzigen Regel angewendet werden können.
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

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` —, aber diese werden derzeit in keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()` Pseudo-Elemente werden innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} nur dann generiert, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, unmittelbar zuvor und vor jedem auf dem Container generierten {{cssxref("::scroll-marker-group")}}.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die den Inhalt in Richtung des Starts und Endes der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt ist. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente anzusprechen und Stile für alle Buttons in einer einzigen Regel bereitzustellen.

Die generierten Buttons verhalten sich genauso wie reguläre {{htmlelement("button")}}-Elemente, einschließlich der Teilung ihrer Standard-Browser-Stile. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in die angegebene Richtung um eine "Seite" gescrollt, oder ungefähr um die Dimension des Scroll-Containers, ähnlich wie das Drücken der Tasten <kbd>PgUp</kbd> und <kbd>PgDn</kbd>.

Die Empfehlung ist, im Scroll-Container das [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) einzurichten und jedes separate Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} festzulegen. In diesem Fall scrollt das Aktivieren eines Scroll-Buttons den Inhalt zu dem Snap-Ziel, das eine "Seite" entfernt ist. Während die Scroll-Buttons auch ohne Scroll-Snapping funktionieren, erhalten Sie möglicherweise nicht den gewünschten Effekt.

Wenn es in einer bestimmten Scrollrichtung eines Scroll-Buttons nicht möglich ist, weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mithilfe der Pseudo-Klassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} stylen.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Erstellung von Scroll-Buttons

In diesem Beispiel demonstrieren wir, wie man Scroll-Buttons auf einem CSS-Karussell erstellt.

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

##### Das Karussell stylen

Wir wandeln unser `<ul>` in ein Karussell um, indem wir das {{cssxref("display")}} auf `flex` setzen, so dass eine einzelne, nicht umgebrochene Zeile von `<li>`-Elementen entsteht. Die {{cssxref("overflow-x")}}-Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überfließen, der Inhalt horizontal scrollt. Wir wandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, der sicherstellt, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Als Nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie zu 100 % der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers einrastet, wenn der Inhalt gescrollt wird.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

##### Erstellung der Scroll-Buttons

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer festzulegen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: black;
  opacity: 0.7;
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  opacity: 1;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  opacity: 0.2;
  cursor: unset;
}
```

> [!NOTE]
> Wir setzen außerdem einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um es offensichtlicher zu machen, dass sie interagierbar sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Als Nächstes wird über die `content`-Eigenschaft ein geeignetes Symbol auf den linken und rechten Scroll-Buttons gesetzt, was auch der Grund dafür ist, dass die Scroll-Buttons generiert werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für die Symbole im `content` setzten, da der Browser automatisch für entsprechende {{Glossary("accessible_name", "zugängliche Namen")}} sorgt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links auf dem Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal platziert. In diesem Abschnitt werden wir etwas CSS hinzufügen, um sie mithilfe von [Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf dem `<ul>` gesetzt, um es als benannten Anker zu definieren. Dann wird das {{cssxref("position")}} jeder Scroll-Button auf `absolute` gesetzt und die {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden miteinander zu verknüpfen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "inselt-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen dem Rand des Buttons und dem Rand des Karussells hinzuzufügen. Beispielsweise wird der rechte Rand des linken Scroll-Buttons 45 Pixel rechts von Rand des Karussells positioniert.

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
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
