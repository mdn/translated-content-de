---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens in einem {{Glossary("scroll_container", "Scroll-Container")}}. Sie werden auf Scroll-Containern generiert, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Scrollrichtung wird durch den Parameterwert bestimmt.

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
      - : Wählt alle Scroll-Buttons des Ursprungselements aus und ermöglicht so das Anwenden von Stilen auf jeden von ihnen in einer einzigen Regel.
    - `down`
      - : Wählt den Button aus, der den Inhalt nach unten scrollt.
    - `left`
      - : Wählt den Button aus, der den Inhalt nach links scrollt.
    - `right`
      - : Wählt den Button aus, der den Inhalt nach rechts scrollt.
    - `up`
      - : Wählt den Button aus, der den Inhalt nach oben scrollt.
    - `block-end`
      - : Wählt den Button aus, der den Inhalt in Block-End-Richtung scrollt.
    - `block-start`
      - : Wählt den Button aus, der den Inhalt in Block-Start-Richtung scrollt.
    - `inline-end`
      - : Wählt den Button aus, der den Inhalt in Inline-End-Richtung scrollt.
    - `inline-start`
      - : Wählt den Button aus, der den Inhalt in Inline-Start-Richtung scrollt.

    Die Spezifikation definiert auch zwei andere Werte — `next` und `prev` — aber diese werden derzeit in keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()` Pseudo-Elemente werden innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} nur dann generiert, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der untergeordneten DOM-Elemente des Scroll-Containers generiert, unmittelbar vor ihnen und vor jedem {{cssxref("::scroll-marker-group")}}, das auf dem Container generiert wurde.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die den Inhalt in Richtung des Starts und Endes der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt ist. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente anzusprechen und alle Buttons in einer einzigen Regel zu gestalten.

Die generierten Buttons verhalten sich wie normale {{htmlelement("button")}}-Elemente, einschließlich der gemeinsamen Standardstile des Browsers. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in die angegebene Richtung um eine "Seite" gescrollt, ungefähr der Dimension des Scroll-Containers, ähnlich wie das Drücken der Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd>.

Es wird empfohlen, [CSS Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) auf dem Scroll-Container einzurichten und jedes einzelne Element des Inhalts, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} festzulegen. In diesem Fall bewirkt das Aktivieren eines Scroll-Buttons, dass der Inhalt zum Snap-Ziel gescrollt wird, das eine "Seite" entfernt ist. Auch wenn die Scroll-Buttons ohne Scroll-Snapping funktionieren, könnte das Ergebnis nicht wie gewünscht sein.

Wenn es nicht möglich ist, in eine bestimmte Scrollrichtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den Pseudo-Klassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gestalten.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Erstellen von Scroll-Buttons

In diesem Beispiel zeigen wir, wie man Scroll-Buttons auf einem CSS-Karussell erstellt.

#### HTML

Wir haben eine einfache HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenelementen.

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

##### Styling des Karussells

Wir wandeln unser `<ul>` in ein Karussell um, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzige, nicht umbrochene Reihe von `<li>`-Elementen zu erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente ihren Container auf der x-Achse überlaufen. Wir wandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, wodurch sichergestellt wird, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf 100% der Breite des Containers einzustellen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen sowie Styling basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturnutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn in dieser Richtung keine weitere Scrollen möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand zu erfassen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um es deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein geeignetes Symbol auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, die auch die Scroll-Buttons generiert:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für die Symbole auf dem `content` setzen, da der Browser automatisch geeignete {{Glossary("accessible_name", "zugängliche Namen")}} bereitstellt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links im Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen lassen.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal platziert. In diesem Abschnitt fügen wir etwas CSS hinzu, um sie mit [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zunächst wird ein Referenz-{{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Als nächstes erhält jeder Scroll-Button seine {{cssxref("position")}} auf `absolute` und seine {{cssxref("position-anchor")}}-Eigenschaft wird auf den `anchor-name` der Liste gesetzt, um die beiden miteinander zu [assoziieren](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}} Wert von `anchor-center` auf beide, um sie vertikal im Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "Insets-Eigenschaften")}}, um die horizontale Positionierung zu bearbeiten. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen dem Buttonrand und dem Karussellrand hinzuzufügen. Zum Beispiel wird der rechte Rand des linken Scroll-Buttons 45 Pixel rechts vom linken Rand des Karussells positioniert.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
