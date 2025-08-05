---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul definiert Funktionen, die die Erstellung von flexiblen und zugänglichen reinen CSS-Karussells mit vom Browser generierten und vom Entwickler gestalteten Scroll-Buttons und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussellkonzepte

**Karussells** sind ein gängiges Merkmal im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen klicken oder aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Buttons**
  - : In der Regel "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Symbolen, von denen jedes je nach Anzahl der angezeigten Elemente an jeder Scrollposition im Karussell ein oder mehrere Elemente repräsentiert.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts und Scroll-Marker am unteren Rand](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wichtiges Merkmal von Karussells ist die **Paginierung** — die Elemente wirken wie separate Inhaltsteile, zwischen denen gewechselt wird, anstatt eines kontinuierlichen Inhaltsbereichs. Sie können ein einzelnes Element oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie jedes Mal, wenn die "nächste" oder "vorherige" Schaltfläche gedrückt wird, eine völlig neue Gruppe von Elementen anzeigen. Alternativ können Sie ein einzelnes neues Element ans Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Sichtbereich verschoben wird.

Karussells mit JavaScript zu erstellen, kann recht anfällig und schwer zu implementieren sein. Sie erfordern Skripte, um Scroll-Marker den Elementen zuzuordnen, die sie darstellen, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, um ordnungsgemäß zu funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerungen hinzugefügt werden.

Glücklicherweise können wir mit den CSS-Karussell-Funktionen zugängliche Karussells mit zugehörigen Steuerungen ohne JavaScript erstellen.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussells nur mit CSS und HTML ermöglichen, wobei der Browser die meisten der Scrolling- und Linkreferenzen in einer zugänglichen, flexiblen und konsistenten Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudoelemente Scroll-Buttons, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um ihre Scroll-Marker darzustellen. Diese können ausgewählt werden, um den Container zu ihrem zugehörigen Kind-Element oder ihrer Spalte zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers für Layout-Zwecke zusammengefasst.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um den aktuell aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um dem aktuell aktiven Marker einen Hervorhebungsstil zu geben, was für die Benutzerfreundlichkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten anzeigt, über [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout). Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um für jede Spalte einen Scroll-Marker zu erzeugen.

## Karussell mit Einzelseiten

Unser erstes Beispiel ist ein Karussell mit Einzelseiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#scroll-marker_erstellen) als untere Navigation und [Scroll-Buttons](#scroll-buttons_erstellen) an den Seiten der Seite, die den Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karusselllayout_mit_flexbox), um das Karussell zu gestalten, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten), um eine klare Paginierung zu erzwingen, und Ankerpositionierung, um die [Scroll-Buttons zu positionieren](#scroll-buttons_positionieren) und die Scroll-Marker relativ zum Karussell zu platzieren.

Das HTML besteht aus einem [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) etwas Beispielinhalt enthält:

```html live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
<h1>CSS carousel single item per page</h1>
<ul>
  <li>
    <h2>Page 1</h2>
  </li>
  <li>
    <h2>Page 2</h2>
  </li>
  <li>
    <h2>Page 3</h2>
  </li>
  <li>
    <h2>Page 4</h2>
  </li>
</ul>
```

### Karusselllayout mit Flexbox

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Zeile von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>`-Kind-Listenelemente werden horizontal dargestellt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die gesamte Breite des Viewports ausfüllt, mit einer {{cssxref("width")}} von `100vw`; sie erhält außerdem eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu layouten — indem wir einen {{cssxref("display")}}-Wert von `flex` setzen, um die Kind-Listenelemente in einer Zeile darzustellen (aufgrund des Standardwerts von {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

```css hidden live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.7rem;
}
```

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  width: 100vw;
  height: 300px;
  padding: 20px;
  display: flex;
  gap: 4vw;
}
```

Nun ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten grundlegendes Styling. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch fließt der Inhalt über seinen Container hinaus, und der Viewport wird horizontal scrollen.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  list-style-type: none;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;

  flex: 0 0 100%;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Zusätzlich wird jedes gerade nummerierte Listenelement über {{cssxref(":nth-child()")}} mit einer anderen Hintergrundfarbe versehen, um den Scroll-Effekt deutlicher sichtbar zu machen.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt werden wir einen Überlaufwert auf das `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, damit die Liste beim Scrollen des Inhalts zur Mitte jedes Listenelements schnappt.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, damit sein Inhalt horizontal innerhalb der Liste scrollt, anstatt dass der gesamte Viewport scrollt. [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap-container")}} zu verwandeln. Der `x`-Schlüsselwort sorgt dafür, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass, wenn die Liste gescrollt wird, sie zur Mitte jedes Listenelements schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt angezeigt:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Scroll-Leiste zu scrollen, um den Scroll-Snapping-Effekt zu beobachten. Egal wo Sie Ihr Scrollen beenden, ein Element wird immer an seinen Platz "schnappen".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu nutzen. Dennoch funktionieren Karussells viel besser mit eingeschlossenem Scroll-Snapping. Ohne Scroll-Snapping ist es unwahrscheinlich, dass die Scroll-Buttons und Marker sauber zwischen den Seiten navigieren, und das Ergebnis wird suboptimal sein.

### Scroll-Buttons erstellen

In diesem Abschnitt fügen wir "vorherige" und "nächste" Scroll-Buttons zu dem Beispiel hinzu, um ein Werkzeug zur Navigation zwischen Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}}-Pseudoelement erreicht.

Die `::scroll-button()`-Pseudoelemente generieren Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scrollrichtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, von denen jeder den Inhalt des Containers in Richtung des Beginns oder Endes der Block- oder Inline-Achse scrollt.

Sie können auch ein Argument von `*` spezifizieren, um alle `::scroll-button()`-Pseudoelemente mit Stilen anzusprechen.

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen sowie Stilen basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer festzulegen. Außerdem werden Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn kein weiteres Scrollen in diese Richtung erfolgen kann. Daher verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand anzusprechen.

```css live-sample___first-example live-sample___first-example-step2
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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Buttons, um es offensichtlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein passendes Symbol über die `content`-Eigenschaft auf den linken und rechten Scroll-Buttons gesetzt, was gleichzeitig auch bewirkt, dass die Scroll-Buttons generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Buttons erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Beispielsweise haben die obigen Buttons implizit die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Scroll-Buttons positionieren

Wir haben die Scroll-Buttons erstellt. Nun positionieren wir sie relativ zum Karussell, indem wir [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf der Liste gesetzt. Danach wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` gesetzt und die {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen festgelegt, der auf der Liste definiert wurde, um die beiden zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen dem Buttonrand und dem Karussellrand hinzuzufügen. Beispielsweise wird der rechte Rand des linken Scroll-Buttons 70 Pixel rechts vom linken Rand des Karussells positioniert.

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}
```

Durch Hinzufügen des Scroll-Button-Codes erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherigen" und "nächsten" Scroll-Buttons zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snapping-Verhalten respektiert wird. Beachten Sie auch, wie die "vorherige" Taste automatisch deaktiviert wird, wenn die Liste zum Start des Inhalts gescrollt ist, während die "nächste" Taste automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt ist.

### Scroll-Marker erstellen

Scroll-Marker sind eine Gruppe von Schaltflächen, die jeweils das Karussell zu einer Position verschieben, die mit einer der Inhaltsseiten zusammenhängt. Sie bieten ein zusätzliches Navigationstool, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt fügen wir dem Karussell Scroll-Marker hinzu, was drei Hauptmerkmale umfasst:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Sie muss auf einen Wert ungleich `none` gesetzt sein, damit das {{cssxref("::scroll-marker-group")}}-Pseudoelement generiert wird; deren Wert bestimmt, wo die Scroll-Marker-Gruppe in der Tabulator- und Layout-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Buttons, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und stellen deren Scroll-Marker dar. Diese werden innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren für Layout-Zwecke zusammengefasst.

Zu Beginn wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudoelement in der Fokus- und Layout-Box-Reihenfolge nach dem DOM-Inhalt der Liste platziert wird.; dies bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Anschließend wird das `::scroll-marker-group`-Pseudoelement der Liste relativ zum Karussell unter Verwendung der CSS-Ankerpositionierung positioniert, ähnlich wie die Scroll-Buttons, außer dass es horizontal auf dem Karussell zentriert wird, indem {{cssxref("justify-self")}} auf `anchor-center` gesetzt wird. Die Gruppe wird mit Flexbox angeordnet, mit {{cssxref("justify-content")}} auf `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker` Pseudoelemente) in der `::scroll-marker-group` zentriert sind, mit einem Abstand dazwischen.

```css live-sample___first-example
ul::scroll-marker-group {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;

  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes kümmern wir uns um das Aussehen der Scroll-Marker selbst; sie können wie alle anderen [generierten Inhalte](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Wert ungleich `none` für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige grundlegende Stile, damit die Marker als umrandete Kreise erscheinen:

```css live-sample___first-example
li::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}
```

> [!NOTE]
> Generierte Inhalte sind standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente layoutet werden.

Zum Schluss für diesen Abschnitt wird die {{cssxref(":target-current")}}-Pseudoklasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und anzuzeigen, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis angezeigt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf die Barrierefreiheit wird die Scroll-Marker-Gruppe zusammen mit den darin enthaltenen Scroll-Markern mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik dargestellt. Wenn Sie mit der Tastatur zur Gruppe <kbd>Tab</kbd> erreichen, verhält sie sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können mit den Links- und Rechts- (oder Hoch- und Runter-)Pfeiltasten zwischen den verschiedenen Scroll-Markern navigieren.

## Finale Ergebnis eines einzelnen Seitenkarussells

All diese Codes kombinieren sich zu dem folgenden Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll Marker-Gruppe zu tabben und dann mit den Cursortasten durch jede Seite zu navigieren.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scrollleiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Buttons](#scroll-buttons_erstellen) und [Scroll-Marker](#scroll-marker_erstellen) zum Navigieren durch die Seiten umfasst. Dieses Beispiel ist auch reaktionsfähig — auf jeder Seite erscheinen je nach Viewport-Breite unterschiedliche Mengen an Elementen.

Dieses Beispiel ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass es anstelle von Flexbox für das Layout [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}}-Pseudoelement verwendet, um willkürliche Spalten zu erstellen, die die vollständige Breite des Karussells einnehmen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, falls der Viewport wächst oder schrumpft, während die Größe der Elemente konstant bleibt, nie ein teilweise anzuzeigendes Element außerhalb des Scrollbereichs dargestellt wird. In diesem Fall werden die Scroll-Marker auf Scroll-Container-Fragmente, spaltenweise, statt auf Kinder, elementweise, erstellt.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es beträchtlich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, wir sie als Elemente anstelle von Seiten kennzeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Beispiel hat auch sehr ähnliche CSS, mit Ausnahme der in den folgenden Abschnitten erklärten Regeln.

```html hidden live-sample___second-example
<h1>CSS carousel multiple items per page</h1>
<ul>
  <li>
    <h2>Item 1</h2>
  </li>
  <li>
    <h2>Item 2</h2>
  </li>
  <li>
    <h2>Item 3</h2>
  </li>
  <li>
    <h2>Item 4</h2>
  </li>
  <li>
    <h2>Item 5</h2>
  </li>
  <li>
    <h2>Item 6</h2>
  </li>
  <li>
    <h2>Item 7</h2>
  </li>
  <li>
    <h2>Item 8</h2>
  </li>
  <li>
    <h2>Item 9</h2>
  </li>
  <li>
    <h2>Item 10</h2>
  </li>
  <li>
    <h2>Item 11</h2>
  </li>
  <li>
    <h2>Item 12</h2>
  </li>
  <li>
    <h2>Item 13</h2>
  </li>
  <li>
    <h2>Item 14</h2>
  </li>
  <li>
    <h2>Item 15</h2>
  </li>
</ul>
```

### Karussell-Layout mit Spalten

Dieses Beispiel verwendet [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), anstelle von Flexbox, um die Karussell-Elemente anzuordnen. Der {{cssxref("columns")}}-Wert von `1` sorgt dafür, dass jede Spalte die volle Breite des Containers einnimmt, wobei die Inhalte in einer einzigen Spalte auf einmal dargestellt werden. Ein {{cssxref("text-align")}}-Wert von `center` wird auch angewendet, sodass die Inhalte mit der Mitte der Liste ausgerichtet sind.

```css hidden live-sample___second-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.7rem;
}
```

```css live-sample___second-example
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

Wir stellen rudimentäre Box-Styling für die Listenelemente bereit und wenden dann Layoutstile an, die es ermöglichen, dass ein oder mehrere Elemente in die einzelne Inhalts-Spalte passen, je nach Breite des Viewports. Die Anzahl ändert sich dynamisch, da die Liste breiter oder schmaler wird.

```css live-sample___second-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;

  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 0 10px;

  text-align: left;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Die wichtigsten Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu setzen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf ihnen gesetzt, um ihre Dimensionierung zu steuern, was bedeutet, dass eine oder mehrere in eine Spalte passen, die mit der Breite des Viewports wächst und schrumpft.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center` auf dem Elternelement zu überschreiben, sodass der Inhalt der Elemente links ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft ist nun auf den {{cssxref("::column")}}-Pseudoelementen gesetzt — die die Inhaltsspalten repräsentieren, die von der `columns`-Eigenschaft generiert werden — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte schnappen, anstatt zu jedem einzelnen Listenelement, und zeigen alle neuen Elemente mit jeder Scroll-Aktion an.

```css live-sample___second-example
ul::column {
  scroll-snap-align: center;
}
```

```css hidden live-sample___second-example
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

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul {
  scroll-marker-group: after;
}

ul::scroll-marker-group {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

### Spaltenscroll-Marker

Das CSS zum Erstellen der Scroll-Marker in diesem Beispiel ist fast identisch mit dem [vorherigen Beispiel](#scroll-marker_erstellen), außer dass die Selektoren anders sind — die Scroll-Marker werden an den generierten `::column` Scroll-Markern erstellt und nicht an den Listenelementen (beachten Sie, dass wir hier zwei Pseudoelemente einschließen, um Scroll-Marker auf den generierten Spalten zu erzeugen).

```css live-sample___second-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

## Finales Ergebnis des responsiven Karussells

Das Responsive-Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Buttons drücken und die Scroll-Marker drücken. Die Funktionalität ähnelt dem Single-Page-Flexbox-Beispiel, außer dass sich nun mehrere Listenelemente in jeder navigierten Position befinden; die Scroll-Marker sind auf Spaltenfragmente gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedes Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und damit ändert sich auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Marker-Gruppe vertreten ist.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS-Karussellgalerie](https://chrome.dev/carousel/) über chrome.dev (2025)
