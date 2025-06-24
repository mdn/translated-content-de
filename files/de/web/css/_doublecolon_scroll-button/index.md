---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Button, der die Steuerung des Scrollens eines {{Glossary("scroll_container", "Scrollcontainers")}} ermöglicht. Diese werden in Scrollcontainern erzeugt, wenn ihr {{cssxref("content")}} Wert nicht `none` ist. Die Scrollrichtung wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`

  - : Ein Wert, der angibt, welche Richtung des Scroll-Buttons Sie auswählen möchten. Die folgenden Werte sind verfügbar:

    - `*`
      - : Wählt alle Scroll-Buttons des Ursprungs-Elements aus, sodass Stile in einer einzigen Regel auf alle angewendet werden können.
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

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` — aber diese werden derzeit von keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()` Pseudoelemente werden in einem {{Glossary("scroll_container", "Scrollcontainer")}} nur dann erzeugt, wenn deren {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scrollcontainers erzeugt, die ihnen und jedem auf dem Container erzeugten {{cssxref("::scroll-marker-group")}} unmittelbar vorausgehen.

Sie können bis zu vier Scroll-Buttons pro Scrollcontainer erzeugen, die den Inhalt zu den Start- und Endpunkten der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt ist. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudoelemente zu zielen und allen Buttons in einer einzigen Regel Stile zuzuweisen.

Die generierten Buttons verhalten sich wie reguläre {{htmlelement("button")}} Elemente, einschließlich der gemeinsamen Standard-Browser-Stile. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scrollcontainers in die angegebene Richtung um eine "Seite" gescrollt, oder ungefähr um das Maß des Scrollcontainers, ähnlich wie beim Drücken der <kbd>Bild-Auf</kbd> und <kbd>Bild-Ab</kbd> Tasten.

Es wird empfohlen, [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) auf den Scrollcontainer einzurichten und jedes einzelne Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} zu setzen. Daher wird beim Aktivieren eines Scroll-Buttons der Inhalt zum Snap-Ziel gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Buttons ohne Scroll Snap funktionieren, erreichen Sie möglicherweise nicht den gewünschten Effekt.

Wenn es nicht möglich ist, weiter in eine bestimmte Scrollrichtung zu scrollen, wird der Button automatisch deaktiviert, ansonsten ist er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudoklassen stylen.

## Beispiele

Siehe [CSS-Karussells Erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Scroll-Buttons Erstellen

In diesem Beispiel demonstrieren wir, wie man Scroll-Buttons auf einem CSS-Karussell erstellt.

#### HTML

Wir haben eine grundlegende HTML {{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listenelementen.

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

##### Das Karussell Stylen

Wir verwandeln unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und so eine einzelne, nicht-umgebrochene Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, indem wir sicherstellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Anschließend stylen wir die `<li>` Elemente und verwenden die {{cssxref("flex")}} Eigenschaft, um sie 100% der Breite des Containers ausmachen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an die linke Kante des Containers schnappen, wenn der Inhalt gescrollt wird.

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

##### Die Scroll-Buttons Erstellen

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturnutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in diese Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen außerdem einen {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Buttons, um es deutlicher zu machen, dass mit ihnen interagiert werden kann (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und entfernen ihn, wenn die Scroll-Buttons `:disabled` sind.

Anschließend wird ein passendes Symbol auf die linken und rechten Scroll-Buttons über die `content` Eigenschaft gesetzt, welche auch für die Generierung der Scroll-Buttons sorgt:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir brauchen keinen [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Symbole im `content` zu setzen, da der Browser automatisch für passende {{Glossary("accessible_name", "zugängliche Namen")}} sorgt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links auf dem Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Die Scroll-Buttons Positionieren

Das vorherige Beispiel funktioniert, jedoch sind die Buttons nicht ideal platziert. In diesem Abschnitt fügen wir etwas CSS hinzu, um sie mit [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zunächst einmal wird ein Verweis {{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Danach wird das {{cssxref("position")}} jedes Scroll-Buttons auf `absolute` gesetzt und ihre {{cssxref("position-anchor")}} Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden miteinander zu verknüpfen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um die Scroll-Buttons tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}} Wert von `anchor-center` auf beide, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Platz zwischen der Buttonkante und der Karussellkante hinzuzufügen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 45 Pixel rechts von der linken Kante des Karussells positioniert.

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
- [CSS-Karussells Erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
