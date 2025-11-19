---
title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll Containers")}}. Sie werden auf Scroll-Containern generiert, wenn deren {{cssxref("content")}}-Wert nicht `none` ist. Die Richtung des Scrollens wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der die Richtung des zu wählenden Scroll-Buttons repräsentiert. Die folgenden Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Buttons des ursprünglichen Elements aus und ermöglicht das Anwenden von Stilen auf alle in einer einzigen Regel.
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

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` —, die jedoch derzeit von keinem Browser unterstützt werden.

## Beschreibung

Die `::scroll-button()` Pseudoelemente werden nur in einem {{Glossary("scroll_container", "Scroll Container")}} generiert, wenn deren {{cssxref("content")}}-Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll Containers generiert, unmittelbar vor diesen und jedem auf dem Container generierten {{cssxref("::scroll-marker-group")}}.

Sie können bis zu vier Scroll-Buttons pro Scroll Container erzeugen, die den Inhalt in Richtung Anfang und Ende der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt wird. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudoelemente anzusprechen und allen Buttons in einer einzigen Regel Stile zu geben.

Die generierten Buttons verhalten sich wie reguläre {{htmlelement("button")}}-Elemente und teilen auch deren standardmäßige Browser-Stile. Sie sind fokussierbar, zugänglich und können wie reguläre Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, scrollt der Inhalt des Scroll Containers in die angegebene Richtung um eine "Seite", oder ungefähr in der Dimension des Scroll Containers, ähnlich wie beim Drücken der Tasten <kbd>PgUp</kbd> und <kbd>PgDn</kbd>.

Es wird empfohlen, [CSS-Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) auf dem Scroll Container einzurichten und jedes separate Inhalts-Element, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} zu definieren. In diesem Fall wird durch Aktivieren eines Scroll-Buttons der Inhalt zum ein "Seite" entfernten Snap-Ziel gescrollt. Auch wenn die Scroll-Buttons ohne Scroll-Snapping funktionieren, wird möglicherweise nicht der gewünschte Effekt erzielt.

Wenn es nicht möglich ist, in einer bestimmten Scrollrichtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls bleibt er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den Pseudo-Klassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} stylen.

## Beispiel

Siehe [Erstellung von CSS-Carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Carousel-Beispiele.

### Erstellung von Scroll-Buttons

In diesem Beispiel zeigen wir, wie Sie Scroll-Buttons auf einem CSS-Carousel erstellen.

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

##### Styling des Carousels

Wir wandeln unser `<ul>` in ein Carousel um, indem wir das {{cssxref("display")}} auf `flex` setzen, und so eine einzige, nicht umbruchende Reihe von `<li>`-Elementen schaffen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt bei Überlauf auf der x-Achse horizontal scrollt. Danach wird das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} umgewandelt und so sichergestellt, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Anschließend stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf 100% der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an der linken Kante des Containers einrastet.

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

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen sowie einem Zustands-basierten Styling angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung stattfinden kann, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um es offensichtlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für allgemeines {{Glossary("UX", "UX")}} als auch für [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn außer Kraft, wenn die Scroll-Buttons `:disabled` sind.

Dann wird über die `content`-Eigenschaft ein passendes Icon auf den linken und rechten Scroll-Buttons gesetzt, was ebenfalls dazu führt, dass die Scroll-Buttons generiert werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Für die Icons im `content` müssen keine [Alternativtexte](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) festgelegt werden, da der Browser automatisch passende {{Glossary("accessible_name", "zugängliche Namen")}} bereitstellt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links im Carousel erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal positioniert. In diesem Abschnitt fügen wir etwas CSS hinzu, um sie mit [Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren.

#### CSS

Zuerst wird auf dem `<ul>` ein Referenz-{{cssxref("anchor-name")}} gesetzt, um es als benannten Anker zu definieren. Anschließend wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` und die {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden zu verbinden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements).

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

Dann setzen wir Werte für ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Carousels zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen der Button-Kante und der Carousel-Kante hinzuzufügen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 45 Pixel rechts der linken Kante des Carousels positioniert.

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
- [Erstellung von CSS-Carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
