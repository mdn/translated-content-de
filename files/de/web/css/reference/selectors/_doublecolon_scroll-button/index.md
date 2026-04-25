---
title: "`::scroll-button()` CSS pseudo-element"
short-title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Diese Pseudoelemente werden für Scroll-Container generiert, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Scroll-Richtung wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der die Richtung des gescrollten Buttons angibt, den Sie auswählen möchten. Die folgenden Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Buttons des ursprünglichen Elements aus, wodurch Stile in einer einzigen Regel auf alle angewendet werden können.
    - `down`
      - : Wählt den Button aus, der den Inhalt nach unten scrollt.
    - `left`
      - : Wählt den Button aus, der den Inhalt nach links scrollt.
    - `right`
      - : Wählt den Button aus, der den Inhalt nach rechts scrollt.
    - `up`
      - : Wählt den Button aus, der den Inhalt nach oben scrollt.
    - `block-end`
      - : Wählt den Button aus, der den Inhalt in die Block-End-Richtung scrollt.
    - `block-start`
      - : Wählt den Button aus, der den Inhalt in die Block-Start-Richtung scrollt.
    - `inline-end`
      - : Wählt den Button aus, der den Inhalt in die Inline-End-Richtung scrollt.
    - `inline-start`
      - : Wählt den Button aus, der den Inhalt in die Inline-Start-Richtung scrollt.

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` — die derzeit in keinem Browser unterstützt werden.

## Beschreibung

Die `::scroll-button()` Pseudoelemente werden in einem {{Glossary("scroll_container", "Scroll-Container")}} nur dann generiert, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Scroll-Container-Kind-DOM-Elemente generiert und erscheinen direkt vor diesen und jedem {{cssxref("::scroll-marker-group")}}, das auf dem Container generiert wird.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die den Inhalt in den Start- und Endpunkten der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scroll-Richtung ausgewählt ist. Sie können auch den Wert `*` angeben, um alle `::scroll-button()` Pseudoelemente zu adressieren, was es ermöglicht, Stile für alle Buttons in einer einzigen Regel bereitzustellen.

Die generierten Buttons verhalten sich wie reguläre {{htmlelement("button")}}-Elemente und teilen deren standardmäßige Browser-Stile. Sie sind fokussierbar, zugänglich und können wie reguläre Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in der angegebenen Richtung um eine "Seite" gescrollt, also ungefähr um die Dimension des Scroll-Containers, ähnlich wie beim Drücken der <kbd>BildAuf</kbd> und <kbd>BildAb</kbd>-Tasten.

Es wird empfohlen, [CSS-Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) auf dem Scroll-Container einzurichten und jedes separate Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} festzulegen. Wenn dies der Fall ist, wird durch Aktivieren eines Scroll-Buttons der Inhalt zu dem Snap-Ziel gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Buttons auch ohne Scroll-Snapping funktionieren, könnte das gewünschte Ergebnis ausbleiben.

Wenn es nicht möglich ist, in eine bestimmte Scrollrichtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudoklassen stylen.

## Beispiele

Sehen Sie sich [Erstellen von CSS-Carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Carousel-Beispiele an.

### Erstellen von Scroll-Buttons

In diesem Beispiel demonstrieren wir, wie man Scroll-Buttons auf einem CSS-Carousel erstellt.

#### HTML

Wir haben eine grundlegende HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenpunkten.

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

##### Styling des Carousels

Wir konvertieren unser `<ul>` in ein Carousel, indem wir das {{cssxref("display")}} auf `flex` setzen, wodurch eine einzelne, nicht umgebrochene Reihe von `<li>`-Elementen entsteht. Die Eigenschaft {{cssxref("overflow-x")}} wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überfüllen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass Elemente immer an ihren Platz schnappen, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf 100 % der Containerbreite zu setzen. Der {{cssxref("scroll-snap-align")}} Wert `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements zur linken Kante des Containers schnappen, wenn der Inhalt gescrollt wird.

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

##### Erstellen der Scroll-Buttons

Zuerst werden alle Scroll-Buttons mit einigen einfachen Stilen adressiert, sowie Stile basierend auf verschiedenen Zuständen angewendet. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn in diese Richtung kein weiteres Scrollen möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand zu adressieren.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein entsprechendes Icon auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, was auch dazu führt, dass die Scroll-Buttons generiert werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Es ist nicht nötig, [Alternativtext](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für die Icons im `content` zu setzen, da der Browser automatisch geeignete {{Glossary("accessible_name", "zugängliche Namen")}} bereitstellt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links am Carousel erstellt werden. Versuchen Sie, diese zu drücken, um zu sehen, wie der Inhalt gescrollt wird.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht optimal platziert. In diesem Abschnitt werden wir etwas CSS hinzufügen, um sie mithilfe der [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren.

#### CSS

Zunächst wird eine Referenz {{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Dann wird jedem Scroll-Button seine {{cssxref("position")}} auf `absolute` gesetzt und die {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden miteinander zu verknüpfen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zunächst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal auf dem Carousel zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}} zur Handhabung der horizontalen Positionierung. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Carousels zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen dem Rand des Buttons und dem Rand des Carousels zu schaffen. Zum Beispiel wird der rechte Rand des linken Scroll-Buttons 45 Pixel rechts vom linken Rand des Carousels positioniert.

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
- [Erstellen von CSS-Carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
