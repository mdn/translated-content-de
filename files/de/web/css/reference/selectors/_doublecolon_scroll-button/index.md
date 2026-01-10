---
title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Diese werden auf Scroll-Containern erzeugt, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Richtung des Scrollens wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der angibt, welche Richtung des Scroll-Buttons ausgewählt werden soll. Folgende Werte stehen zur Verfügung:
    - `*`
      - : Wählt alle Scroll-Buttons des ursprünglichen Elements aus und ermöglicht es, Stile für jeden von ihnen in einer einzigen Regel anzuwenden.
    - `down`
      - : Wählt den Button, der den Inhalt nach unten scrollen wird.
    - `left`
      - : Wählt den Button, der den Inhalt nach links scrollen wird.
    - `right`
      - : Wählt den Button, der den Inhalt nach rechts scrollen wird.
    - `up`
      - : Wählt den Button, der den Inhalt nach oben scrollen wird.
    - `block-end`
      - : Wählt den Button, der den Inhalt in der Blockende-Richtung scrollen wird.
    - `block-start`
      - : Wählt den Button, der den Inhalt in der Blockstart-Richtung scrollen wird.
    - `inline-end`
      - : Wählt den Button, der den Inhalt in der Inlineende-Richtung scrollen wird.
    - `inline-start`
      - : Wählt den Button, der den Inhalt in der Inlinestart-Richtung scrollen wird.

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` — aber diese werden derzeit in keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()` Pseudo-Elemente werden nur dann innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt, wenn deren {{cssxref("content")}}-Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers erzeugt, unmittelbar vor ihnen und allen auf dem Container erzeugten {{cssxref("::scroll-marker-group")}}.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container erzeugen, die den Inhalt zu den Anfängen und Enden der Block- und Inline-Axen scrollen. Das Argument des Selektors gibt an, welche Scroll-Richtung ausgewählt ist. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente zu adressieren und Stile für alle Buttons in einer einzigen Regel bereitzustellen.

Die erzeugten Buttons verhalten sich wie reguläre {{htmlelement("button")}}-Elemente, einschließlich der gemeinsamen Standardbrowserstile. Sie sind fokussierbar, zugänglich und können wie reguläre Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers in die angegebene Richtung um eine "Seite" gescrollt oder ungefähr um die Dimension des Scroll-Containers, ähnlich wie beim Drücken der Tasten <kbd>PgUp</kbd> und <kbd>PgDn</kbd>.

Es wird empfohlen, [CSS-Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) auf dem Scroll-Container einzurichten und jedes einzelne Inhaltsstück, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} zu setzen. In diesem Fall wird durch Aktivierung eines Scroll-Buttons der Inhalt zu dem Snap-Ziel gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Buttons auch ohne Scroll-Snapping funktionieren, erzielen Sie möglicherweise nicht den gewünschten Effekt.

Wenn es nicht mehr möglich ist, in der spezifischen Scroll-Richtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls ist er aktiviert. Sie können die Scroll-Buttons in ihrem aktivierten und deaktivierten Zustand mithilfe der {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudo-Klassen stylen.

## Beispiele

Weitere Karussell-Beispiele finden Sie unter [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels).

### Scroll-Buttons erstellen

In diesem Beispiel zeigen wir, wie man Scroll-Buttons auf einem CSS-Karussell erstellt.

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

Wir konvertieren unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umgebrochene Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} und stellen sicher, dass die Elemente immer in Position einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie 100 % der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnellt, wenn der Inhalt gescrollt wird.

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

##### Scroll-Buttons erstellen

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen und entsprechend unterschiedlichen Zuständen adressiert. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer einzurichten. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt sind, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf den Scroll-Buttons, um deutlicher zu machen, dass sie interagierbar sind (eine Verbesserung für sowohl die allgemeine {{Glossary("UX", "UX")}} als auch die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Anschließend wird ein passendes Symbol auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, die auch dafür verantwortlich ist, dass die Scroll-Buttons erzeugt werden:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für die Symbole im `content` festlegen, da der Browser automatisch sorgt für passende {{Glossary("accessible_name", "barrierefreie Namen")}}.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links auf dem Karussell erstellt werden. Versuchen Sie, diese zu drücken, um zu sehen, wie sie den Inhalt verschieben.

### Die Scroll-Buttons positionieren

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht optimal platziert. In diesem Abschnitt fügen wir einige CSS hinzu, um sie mit [Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren.

#### CSS

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Als nächstes wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` gesetzt und die {{cssxref("position-anchor")}} Eigenschaft auf den `anchor-name` der Liste, um [die beiden zu verknüpfen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal im Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Wir setzen dann Werte auf ihren {{Glossary("inset_properties", "Einsetz-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen dem Rand des Buttons und dem Rand des Karussells hinzuzufügen. Zum Beispiel wird der rechte Rand des linken Scroll-Buttons 45 Pixel rechts vom linken Rand des Karussells positioniert.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
