---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) stellt einen Button dar, der zur Steuerung des Scrollens eines {{Glossary("scroll_container", "scroll container")}} dient. Diese werden auf Scroll-Containern generiert, wenn deren {{cssxref("content")}}-Wert nicht `none` ist. Die Scroll-Richtung wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`

  - : Ein Wert, der angibt, in welche Richtung der Scroll-Button ausgewählt werden soll. Die folgenden Werte sind verfügbar:

    - `*`
      - : Wählt alle Scroll-Buttons des Ursprungs-Elements aus, sodass Stile in einer einzigen Regel auf alle angewendet werden können.
    - `down`
      - : Wählt den Button, der den Inhalt nach unten scrollen wird.
    - `left`
      - : Wählt den Button, der den Inhalt nach links scrollen wird.
    - `right`
      - : Wählt den Button, der den Inhalt nach rechts scrollen wird.
    - `up`
      - : Wählt den Button, der den Inhalt nach oben scrollen wird.
    - `block-end`
      - : Wählt den Button, der den Inhalt in Richtung des Block-Endes scrollen wird.
    - `block-start`
      - : Wählt den Button, der den Inhalt in Richtung des Block-Beginns scrollen wird.
    - `inline-end`
      - : Wählt den Button, der den Inhalt in Richtung des Inline-Endes scrollen wird.
    - `inline-start`
      - : Wählt den Button, der den Inhalt in Richtung des Inline-Beginns scrollen wird.

    Die Spezifikation definiert zusätzlich die Werte `next` und `prev`, die jedoch derzeit in keinem Browser unterstützt werden.

## Beschreibung

Die `::scroll-button()`-Pseudo-Elemente werden innerhalb eines {{Glossary("scroll_container", "scroll container")}} nur dann generiert, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen Wert gesetzt sind, der nicht `none` ist. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, direkt vor diesen und jedem auf dem Container generierten {{cssxref("::scroll-marker-group")}}. 

Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die den Inhalt in Richtung Anfang und Ende der Block- und Inline-Achse scrollen. Das Argument des Selektors gibt an, welche Scroll-Richtung ausgewählt wird. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()`-Pseudo-Elemente anzusprechen und so allen Buttons in einer einzigen Regel Stile zuzuweisen.

Die generierten Buttons verhalten sich wie normale {{htmlelement("button")}}-Elemente, einschließlich der gemeinsamen Standard-Stile des Browsers. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in die spezifizierte Richtung um eine "Seite" oder ungefähr das Maß des Scroll-Containers gescrollt, ähnlich wie beim Drücken der Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd>.

Es wird empfohlen, [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) auf dem Scroll-Container einzurichten und jedes separate Inhaltselement, zu dem Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} zu setzen. In diesem Fall scrollt das Aktivieren eines Scroll-Buttons den Inhalt zum Snap-Ziel, das um eine "Seite" entfernt ist. Während die Scroll-Buttons auch ohne Scroll-Snapping funktionieren, könnten Sie nicht den gewünschten Effekt erzielen.

Wenn es nicht mehr möglich ist, in eine bestimmte Scroll-Richtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls bleibt er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudo-Klassen stylen.

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Erstellen von Scroll-Buttons

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

Wir konvertieren unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umschlagende Zeile von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap container")}}, und stellen sicher, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Anschließend stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf 100 % der Breite des Containers einzustellen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des sichtbarsten Elements links an die linke Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

##### Erstellen der Scroll-Buttons

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer einzustellen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in diese Richtung erfolgen kann, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Buttons `:disabled` sind.

Anschließend wird ein geeignetes Symbol auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft eingestellt, was auch der Grund ist, warum die Scroll-Buttons generiert werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Symbole im `content` setzen, da der Browser automatisch für passende {{Glossary("accessible_name", "zugängliche Namen")}} sorgt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links auf dem Karussell erstellt werden. Versuchen Sie, diese zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal platziert. In diesem Abschnitt werden wir etwas CSS hinzufügen, um sie mit [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zunächst wird eine {{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Anschließend wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` und die {{cssxref("position-anchor")}}-Eigenschaft auf den Ankernamen der Liste gesetzt, um [die beiden gemeinsam zuzuweisen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um tatsächlich jeden Scroll-Button zu positionieren, setzen wir zunächst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beiden, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "inset properties")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Raum zwischen dem Kanten des Buttons und der Karussellkante hinzuzufügen. Zum Beispiel ist die rechte Kante des linken Scroll-Buttons 45 Pixel rechts von der linken Kante des Karussells positioniert.

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) via chrome.dev (2025)
