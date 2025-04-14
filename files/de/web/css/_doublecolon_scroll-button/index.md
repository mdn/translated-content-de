---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Button zum Steuern des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Sie werden auf Scroll-Containern erzeugt, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Scrollrichtung wird durch den Parameterwert bestimmt.

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
      - : Wählt alle Scroll-Buttons des ursprünglichen Elements aus, sodass Stile in einem einzelnen Regelwerk auf jeden von ihnen angewendet werden können.
    - `down`
      - : Wählt den Button aus, der den Inhalt nach unten scrollt.
    - `left`
      - : Wählt den Button aus, der den Inhalt nach links scrollt.
    - `right`
      - : Wählt den Button aus, der den Inhalt nach rechts scrollt.
    - `up`
      - : Wählt den Button aus, der den Inhalt nach oben scrollt.
    - `block-end`
      - : Wählt den Button aus, der den Inhalt in Richtung des Blockendes scrollt.
    - `block-start`
      - : Wählt den Button aus, der den Inhalt in Richtung des Blockanfangs scrollt.
    - `inline-end`
      - : Wählt den Button aus, der den Inhalt in Richtung des Inline-Endes scrollt.
    - `inline-start`
      - : Wählt den Button aus, der den Inhalt in Richtung des Inline-Anfangs scrollt.

    Die Spezifikation definiert auch zwei weitere Werte — `next` und `prev` —, die jedoch derzeit in keinem Browser unterstützt werden.

## Beschreibung

Die `::scroll-button()` Pseudo-Elemente werden nur innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers erzeugt, unmittelbar vor ihnen und jedem auf dem Container erzeugten {{cssxref("::scroll-marker-group")}}.

Sie können bis zu vier Scroll-Buttons pro Scroll-Container erzeugen, die den Inhalt in Richtung Anfang und Ende der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt wird. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente zu targeten und allen Buttons in einer einzigen Regel Stile zuzuweisen.

Die erzeugten Buttons verhalten sich wie reguläre {{htmlelement("button")}}-Elemente, einschließlich ihrer Standard-Browser-Stile. Sie sind fokussierbar, zugänglich und können wie normale Buttons aktiviert werden. Wenn ein Scroll-Button gedrückt wird, wird der Inhalt des Scroll-Containers um eine "Seite", oder ungefähr die Dimension des Scroll-Containers, in die angegebene Richtung gescrollt, ähnlich wie beim Drücken der <kbd>PgUp</kbd> und <kbd>PgDn</kbd> Tasten.

Es wird empfohlen, [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) auf dem Scroll-Container einzurichten und jedes separate Inhaltselement, das gescrollt werden soll, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} festzulegen. In diesem Fall wird durch die Aktivierung eines Scroll-Buttons der Inhalt zum Snap-Ziel gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Buttons ohne Scroll Snap funktionieren, erhalten Sie möglicherweise nicht den gewünschten Effekt.

Wenn es nicht mehr möglich ist, in eine bestimmte Scroll-Richtung eines Scroll-Buttons weiter zu scrollen, wird der Button automatisch deaktiviert, andernfalls bleibt er aktiviert. Sie können die Scroll-Buttons in ihren aktivierten und deaktivierten Zuständen mit den Pseudo-Klassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} stylen.

## Beispiele

Siehe [CSS-Karussells erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

### Scroll-Buttons erstellen

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

Wir verwandeln unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umschlagende Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal gescrollt wird. Wir verwandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer an ihren Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Anschließend stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie 100% der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an die linke Kante des Containers schnappen, wenn der Inhalt gescrollt wird.

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

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen anvisiert, sowie Stile basierend auf verschiedenen Zuständen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer zu setzen. Außerdem werden Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn in dieser Richtung nicht mehr gescrollt werden kann. Wir verwenden die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand zu targeten.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Buttons, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für das allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Buttons `:disabled` sind.

Anschließend wird ein entsprechendes Icon auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, was auch dazu führt, dass die Scroll-Buttons erzeugt werden.

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Icons auf dem `content` setzen, da der Browser automatisch für geeignete {{Glossary("accessible_name", "zugängliche Namen")}} sorgt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Buttons unten links auf dem Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen.

### Positionierung der Scroll-Buttons

Das vorherige Beispiel funktioniert, aber die Buttons sind nicht ideal platziert. In diesem Abschnitt werden wir etwas CSS hinzufügen, um sie mithilfe der [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zuerst wird ein {{cssxref("anchor-name")}}-Referenz auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Anschließend wird jede Scroll-Button-{{cssxref("position")}} auf `absolute` gesetzt und ihre {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste, um die beiden [miteinander zu verbinden](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal im Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "Einsetz-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen der Button-Kante und der Karussell-Kante hinzuzufügen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 45 Pixel rechts von der linken Kante des Karussells positioniert.

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
- [CSS-Karussells erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
