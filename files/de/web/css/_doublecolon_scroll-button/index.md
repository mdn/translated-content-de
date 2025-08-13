---
title: ::scroll-button()
slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Das **`::scroll-button()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche zur Steuerung des Scrollens eines {{Glossary("scroll_container", "Scroll-Containers")}}. Sie werden auf Scroll-Containern erzeugt, wenn ihr {{cssxref("content")}}-Wert nicht `none` ist. Die Richtung des Scrollens wird durch den Parameterwert bestimmt.

## Syntax

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Parameter

- `<scroll-button-direction>`
  - : Ein Wert, der angibt, welche Richtung der Scroll-Schaltfläche Sie auswählen möchten. Die folgenden Werte sind verfügbar:
    - `*`
      - : Wählt alle Scroll-Schaltflächen des Ursprungselements aus, sodass Stile auf jede von ihnen in einer einzigen Regel angewendet werden können.
    - `down`
      - : Wählt die Schaltfläche aus, die den Inhalt nach unten scrollt.
    - `left`
      - : Wählt die Schaltfläche aus, die den Inhalt nach links scrollt.
    - `right`
      - : Wählt die Schaltfläche aus, die den Inhalt nach rechts scrollt.
    - `up`
      - : Wählt die Schaltfläche aus, die den Inhalt nach oben scrollt.
    - `block-end`
      - : Wählt die Schaltfläche aus, die den Inhalt in Blockende-Richtung scrollt.
    - `block-start`
      - : Wählt die Schaltfläche aus, die den Inhalt in Blockstart-Richtung scrollt.
    - `inline-end`
      - : Wählt die Schaltfläche aus, die den Inhalt in Inline-Ende-Richtung scrollt.
    - `inline-start`
      - : Wählt die Schaltfläche aus, die den Inhalt in Inline-Start-Richtung scrollt.

    Die Spezifikation definiert außerdem zwei weitere Werte — `next` und `prev` — aber diese werden derzeit in keinem Browser unterstützt.

## Beschreibung

Die `::scroll-button()` Pseudoelemente werden innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} nur erzeugt, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Sie werden als Geschwister der Kind-DOM-Elemente des Scroll-Containers erzeugt, unmittelbar ihnen vorausgehend und allen auf dem Container generierten {{cssxref("::scroll-marker-group")}}.

Es können bis zu vier Scroll-Schaltflächen pro Scroll-Container erzeugt werden, die den Inhalt zum Anfang und Ende der Block- und Inline-Achsen scrollen. Das Argument des Selektors gibt an, welche Scrollrichtung ausgewählt wird. Sie können auch einen Wert von `*` angeben, um alle `::scroll-button()` Pseudoelemente anzuwählen und allen Schaltflächen in einer einzigen Regel Stile zuzuweisen.

Die generierten Schaltflächen verhalten sich genauso wie reguläre {{htmlelement("button")}}-Elemente, einschließlich der gemeinsamen Standard-Browserstile. Sie sind fokussierbar, barrierefrei und können wie reguläre Schaltflächen aktiviert werden. Beim Drücken einer Scroll-Schaltfläche wird der Inhalt des Scroll-Containers in die angegebene Richtung um eine "Seite" oder ungefähr die Dimension des Scroll-Containers gescrollt, ähnlich wie beim Drücken der Tasten <kbd>PgUp</kbd> und <kbd>PgDn</kbd>.

Es wird empfohlen, [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) auf dem Scroll-Container einzurichten und jedes separate Inhaltselement, das Sie scrollen möchten, als {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} zu verwenden. In diesem Fall wird beim Aktivieren einer Scroll-Schaltfläche der Inhalt zum Snap-Ziel gescrollt, das eine "Seite" entfernt ist. Während die Scroll-Schaltflächen auch ohne Scroll-Snapping funktionieren, könnte das gewünschte Ergebnis ausbleiben.

Wenn in der Scrollrichtung einer bestimmten Scroll-Schaltfläche nicht weiter gescrollt werden kann, wird die Schaltfläche automatisch deaktiviert, andernfalls ist sie aktiviert. Sie können die Scroll-Schaltflächen in ihren aktivierten und deaktivierten Zuständen mit den {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudoklassen gestalten.

## Beispiele

Sehen Sie sich [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele an.

### Erstellen von Scroll-Schaltflächen

In diesem Beispiel demonstrieren wir, wie man Scroll-Schaltflächen auf einem CSS-Karussell erstellt.

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

##### Stil des Karussells

Wir wandeln unser `<ul>` in ein Karussell um, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrochene Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente in ihrer Behälterachse überlaufen, der Inhalt horizontal scrollt. Dann machen wir das `<ul>` zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, indem wir sicherstellen, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie 100% der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an die linke Kante des Containers schnappt, wenn der Inhalt gescrollt wird.

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

##### Erstellen der Scroll-Schaltflächen

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer festzulegen. Da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn in diese Richtung nicht weiter gescrollt werden kann, verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um deutlicher zu machen, dass Sie interaktiv sind (eine Verbesserung sowohl für das allgemeine {{Glossary("UX", "UX")}} als auch die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird ein geeignetes Symbol für die linken und rechten Scroll-Schaltflächen über die `content`-Eigenschaft gesetzt, was auch die Erzeugung der Scroll-Schaltflächen bewirkt:

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Wir müssen keinen [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für die Symbole auf dem `content` setzen, da der Browser automatisch angemessene {{Glossary("accessible_name", "barrierefreie Namen")}} bereitstellt.

#### Ergebnis

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

Beachten Sie, wie die Scroll-Schaltflächen unten links auf dem Karussell erstellt werden. Versuchen Sie, sie zu drücken, um zu sehen, wie sie den Inhalt scrollen lassen.

### Positionierung der Scroll-Schaltflächen

Das vorherige Beispiel funktioniert, aber die Schaltflächen sind nicht optimal platziert. In diesem Abschnitt fügen wir etwas CSS hinzu, um sie mithilfe der [Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren.

#### CSS

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf das `<ul>` gesetzt, um es als benannten Anker zu definieren. Anschließend hat jede Scroll-Schaltfläche ihre {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ihre {{cssxref("position-anchor")}}-Eigenschaft auf den `anchor-name` der Liste gesetzt, um [die beiden zu verbinden](/de/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements).

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir zuerst einen {{cssxref("align-self")}}-Wert von `anchor-center` auf beide, um sie vertikal auf dem Karussell zu zentrieren:

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Dann setzen wir Werte auf ihre {{Glossary("inset_properties", "Einfüge-Eigenschaften")}}, um die horizontale Positionierung zu handhaben. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen der Schaltflächenkante und der Karussellkante hinzuzufügen. Zum Beispiel wird die rechte Kante der linken Scroll-Schaltfläche 45 Pixel rechts der linken Kante des Karussells positioniert.

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
- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
