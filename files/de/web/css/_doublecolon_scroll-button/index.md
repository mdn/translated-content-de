---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Knopf zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Sie werden auf Scroll-Containern generiert, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Richtung des Scrollens wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der angibt, in welcher Richtung sich der gewählte Scroll-Knopf befinden soll. Folgende Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Knöpfe des Ursprungselements aus, sodass Stile auf jeden von ihnen in einer einzelnen Regel angewendet werden können.
    - `down`
      - : Wählt den Knopf, der den Inhalt nach unten scrollen wird.
    - `left`
      - : Wählt den Knopf, der den Inhalt nach links scrollen wird.
    - `right`
      - : Wählt den Knopf, der den Inhalt nach rechts scrollen wird.
    - `up`
      - : Wählt den Knopf, der den Inhalt nach oben scrollen wird.
    - `block-end`
      - : Wählt den Knopf, der den Inhalt in Block-End-Richtung scrollen wird.
    - `block-start`
      - : Wählt den Knopf, der den Inhalt in Block-Start-Richtung scrollen wird.
    - `inline-end`
      - : Wählt den Knopf, der den Inhalt in Inline-End-Richtung scrollen wird.
    - `inline-start`
      - : Wählt den Knopf, der den Inhalt in Inline-Start-Richtung scrollen wird.

    Die Spezifikation definiert auch zwei andere Werte — `next` und `prev` — die jedoch derzeit in keinem Browser unterstützt werden.

## Beschreibung

Die `::scroll-button()`-Pseudoelemente werden nur in einem {{Glossary("scroll_container", "Scroll-Container")}} generiert, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers erzeugt und stehen diesen sowie allen auf dem Container erzeugten {{cssxref("::scroll-marker-group")}} direkt voran.

Sie können bis zu vier Scroll-Knöpfe pro Scroll-Container erzeugen, die den Inhalt zu den Start- und Endpunkten der Block- und Inline-Achsen scrollen werden. Das Argument des Selektors gibt an, welche Scroll-Richtung ausgewählt wird. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()`-Pseudoelemente zu zielgerichtet zu stylen und so mit einer einzigen Regel auf alle Knöpfe Stile anzuwenden.

Die generierten Knöpfe verhalten sich wie reguläre {{htmlelement("button")}}-Elemente, einschließlich der gemeinsamen Nutzung ihrer Standard-Browser-Stile. Sie sind fokussierbar, zugänglich und können wie reguläre Knöpfe aktiviert werden. Wenn ein Scroll-Knopf gedrückt wird, wird der Inhalt des Scroll-Containers in die angegebene Richtung um eine "Seite" gescrollt, oder in etwa die Abmessung des Scroll-Containers, ähnlich wie beim Drücken der Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd>.

Es wird empfohlen, auf dem Scroll-Container [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) einzurichten und jedes einzelne Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} festzulegen. In diesem Fall bewirkt das Aktivieren eines Scroll-Knopfs, dass der Inhalt zum Snap-Ziel gescrollt wird, das eine "Seite" entfernt ist. Obwohl die Scroll-Knöpfe auch ohne Scroll-Snapping funktionieren, erzielen Sie möglicherweise nicht den gewünschten Effekt.

Wenn es nicht möglich ist, in einer bestimmten Scroll-Richtung eines Scroll-Knopfs weiter zu scrollen, wird der Knopf automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Knöpfe in ihren aktivierten und deaktivierten Zuständen mit den {{cssxref(":enabled")}}- und {{cssxref(":disabled")}}-Pseudoklassen stylen.

## Beispiele

Für weitere Beispiele für Karussells siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels).

### Erstellen von Scroll-Knöpfen

In diesem Beispiel zeigen wir, wie Sie Scroll-Knöpfe auf einem CSS-Karussell erstellen.

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

##### Das Karussell stylen

Wir konvertieren unser `<ul>` in ein Karussell, indem wir die {{cssxref("display")}}-Eigenschaft auf `flex` setzen, was eine einzelne, nicht umbruchende Zeile von `<li>`-Elementen erzeugt. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container in der x-Achse überschreiten, der Inhalt horizontal gescrollt wird. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} und stellen sicher, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, wobei wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf 100% der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements bei gescrolltem Inhalt an die linke Kante des Containers angedockt wird.

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

##### Erstellen der Scroll-Knöpfe

Zuerst werden alle Scroll-Knöpfe mit grundlegenden Stilen sowie Stilen basierend auf verschiedenen Zuständen gezielt angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da Scroll-Knöpfe automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand zu adressieren.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Knöpfe, um deutlicher zu machen, dass mit ihnen interagiert werden kann (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Knöpfe `:disabled` sind.

Als nächstes wird ein passendes Icon auf den linken und rechten Scroll-Knopf über die `content`-Eigenschaft gesetzt, was auch bewirkt, dass die Scroll-Knöpfe erzeugt werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Es ist nicht nötig, [Alternativtext](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Icons im `content` festzulegen, da der Browser automatisch für geeignete {{Glossary("accessible_name", "zugängliche Namen")}} sorgt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Knöpfe unten links im Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Positionierung der Scroll-Knöpfe

Das vorherige Beispiel funktioniert, aber die Knöpfe sind nicht optimal platziert. In diesem Abschnitt fügen wir etwas CSS hinzu, um sie mit [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zunächst wird ein Referenz-{{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Als nächstes wird bei jedem Scroll-Knopf die {{cssxref("position")}} auf `absolute` und die {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden miteinander zu verknüpfen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Knopf tatsächlich zu positionieren, setzen wir zunächst einen {{cssxref("align-self")}}-Wert von `anchor-center` für beide, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Anschließend setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}, um die horizontale Positionierung zu steuern. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Knöpfe relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen der Knopfkante und der Karussellkante hinzuzufügen. Zum Beispiel ist die rechte Kante des linken Scroll-Knopfs 45 Pixel rechts von der linken Kante des Karussells positioniert.

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
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
