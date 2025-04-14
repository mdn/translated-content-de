---
title: Erstellen von CSS-Karussells
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 8c0f4d9b9d335105107b15be55e06ca5619a0054
---

{{CSSRef}}

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die die Erstellung von flexiblen und zugänglichen reinen CSS-Karussells ermöglichen, mit vom Browser generierten und von Entwicklern gestalteten Scroll-Schaltflächen und Scroll-Markern. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karussells** sind ein häufiges Merkmal im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente wie Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften enthält.

Benutzer können durch die Elemente navigieren, indem sie auf Navigationsschaltflächen klicken oder diese aktivieren oder durch Wischen. Die Navigation umfasst normalerweise:

- **Scroll-Schaltflächen**
  - : Allgemein "Vorherige" und "Nächste" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Serie von Schaltflächen- oder Link-Icons, die jeweils ein oder mehrere Elemente darstellen, abhängig davon, wie viele Elemente an jeder Scrollposition innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts und Scroll-Marker unten](carousel.png)

Ein Hauptmerkmal von Karussells ist die **Paginierung** — die Elemente fühlen sich wie separate Inhalte an, zwischen denen man bewegt wird, anstatt einen durchgehenden Inhaltsabschnitt zu bilden. Sie könnten ein Element auf einmal oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Drücken der "Nächste" oder "Vorherige"-Schaltfläche eine komplett neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein neues Element an ein Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld bewegt wird.

Das Erstellen von Karussells mit JavaScript kann ziemlich brüchig und schwierig zu implementieren sein. Sie benötigen Skripte, um Scroll-Marker mit den von ihnen vertretenen Elementen zu verknüpfen und die Scroll-Schaltflächen kontinuierlich zu aktualisieren, damit sie korrekt funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Bedienelemente hinzugefügt werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Bedienelementen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussellfunktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussells mithilfe von nur CSS und HTML ermöglichen, wobei der Browser die meiste Scroll- und Linkreferenzierung auf eine zugängliche, flexible und konsistente Weise behandelt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "scroll container")}} generiert, repräsentieren diese Pseudoelemente Scroll-Schaltflächen, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Marker zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um ihre Scroll-Marker zu repräsentieren. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kind-Elementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers für Layout-Zwecke gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um den derzeit aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für den derzeit aktiven Marker bereitzustellen, was für die Benutzerfreundlichkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass seine Inhalte in mehreren Spalten angezeigt werden, mithilfe des [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout). Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu generieren.

## Karussell mit einzelnen Seiten

Unser erstes Beispiel ist ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [flexbox](#karussell-layout_mit_flexbox) zur Anordnung des Karussells, [Scroll-Snapping](#einrichten_des_scroll-snapping_auf_der_liste) zur Durchsetzung klarer Paginierung und Ankerpositionierung, um die [Position der Scroll-Schaltflächen](#positionierung_der_scroll-schaltflächen) und die Scroll-Marker relativ zum Karussell zu bestimmen.

Das HTML besteht aus einem [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

### Karussell-Layout mit Flexbox

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>`-Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so angepasst, dass sie die volle Breite des Viewports mit einer {{cssxref("width")}} von `100vw` einnimmt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu gestalten, indem wir einen {{cssxref("display")}}-Wert von `flex` setzen, damit die Kind-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts von {{cssxref("flex-direction")}} `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem einzelnen.

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

Jetzt ist es an der Zeit, die Listenelemente zu gestalten. Die ersten Deklarationen bieten rudimentäre Stile. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überlaufen und der Viewport horizontal scrollen.

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

Darüber hinaus wird jedem geradzahligen Listenelement eine andere Hintergrundfarbe mittels {{cssxref(":nth-child()")}} zugewiesen, sodass der Scrolling-Effekt leichter zu erkennen ist.

### Einrichten des Scroll-Snapping auf der Liste

In diesem Abschnitt setzen wir einen Überlaufwert auf das `<ul>`, um ihn in einen {{Glossary("scroll_container", "scroll container")}} zu verwandeln, und wenden dann [CSS scroll snapping](/de/docs/Web/CSS/CSS_scroll_snap) an, um die Liste beim Scrollen des Inhalts zur Mitte jedes Listenelements zu schnappen.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, sodass dessen Inhalt horizontal innerhalb der Liste scrollt, anstatt dass der gesamte Viewport scrollt. Dann wird [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll snap container")}} zu verwandeln. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass beim Scrollen der Liste zur Mitte jedes Listenelements geschnappt wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt angezeigt:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste zu scrollen, indem Sie wischen oder die Scroll-Leiste verwenden, um den Scroll-Snap-Effekt zu sehen. Unabhängig davon, wo Sie Ihr Scrollen beenden, wird immer ein Element in Position "schnappen".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussellfunktionen zu nutzen. Allerdings funktionieren Karussells viel besser mit aktiviertem Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren können und das Ergebnis wird suboptimal sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir der Demo "Vorherige" und "Nächste" Scroll-Schaltflächen hinzu, um ein Werkzeug zur Navigation zwischen den Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}}-Pseudoelement erreicht.

Die `::scroll-button()`-Pseudoelemente erzeugen Schaltflächen innerhalb eines Scroll-Containers, sobald ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scrollrichtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung Start oder Ende der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()`-Pseudoelemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer festzulegen. Da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn in dieser Richtung kein weiteres Scrollen möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um es offensichtlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird ein geeignetes Icon auf den linken und rechten Scroll-Schaltflächen über die `content`-Eigenschaft gesetzt, was auch dazu führt, dass die Scroll-Schaltflächen generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien entsprechend angekündigt werden. Zum Beispiel haben die obigen Schaltflächen eine implizierte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right", entsprechend.

### Positionierung der Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Nun werden wir sie relativ zum Karussell mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Dann wird der {{cssxref("position")}}-Wert jeder Scroll-Schaltfläche auf `absolute` gesetzt und ihre {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen festgelegt, der auf die Liste gesetzt wurde, um die beiden miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "inset properties")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen der Schaltflächenkante und der Karussellkante hinzuzufügen. Zum Beispiel wird die rechte Kante der linken Scroll-Schaltfläche 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Wenn wir den Code für die Scroll-Schaltflächen hinzufügen, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "Vorherige" und "Nächste" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, und beachten Sie dabei das Scroll-Snap-Verhalten. Beachten Sie auch, wie die "Vorherige" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt ist, während die "Nächste" Schaltfläche automatisch deaktiviert ist, wenn die Liste zum Ende des Inhalts gescrollt ist.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position in Bezug auf eine der Inhaltsseiten scrollt. Sie bieten ein zusätzliches Navigationstool, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir Scroll-Marker zum Karussell hinzufügen, was drei Hauptfunktionen umfasst:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf das Scroll-Container-Element gesetzt. Sie muss auf einen anderen Wert als `none` gesetzt sein, damit das {{cssxref("::scroll-marker-group")}}-Pseudoelement generiert wird; ihr Wert gibt an, wo die Scroll-Marker-Gruppe in der Tabulatorreihenfolge und Layoutbox-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Schaltflächen, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Vorfahren des Scroll-Containers und repräsentieren ihre Scroll-Marker. Diese werden innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren zum Layout gesammelt.

Zuerst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layoutbox-Reihenfolge platziert wird; dies bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group`-Pseudoelement der Liste relativ zum Karussell mittels CSS-Ankerpositionierung positioniert, ähnlich wie bei den Scroll-Schaltflächen, außer dass es horizontal auf dem Karussell zentriert wird, indem ein {{cssxref("justify-self")}}-Wert von `anchor-center` verwendet wird. Die Gruppe wird mit Flexbox ausgelegt, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudoelemente) innerhalb der `::scroll-marker-group` zentriert mit einem Abstand dazwischen angeordnet sind.

```css live-sample___first-example
ul::scroll-marker-group {
  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;

  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes behandeln wir das Aussehen und das Empfinden der eigentlichen Scroll-Marker; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) stilisiert werden. Es ist wichtig zu beachten, dass wir einen anderen Wert als `none` für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen außerdem einige grundlegende Stile, um die Marker als umrissene Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flexitems ausgelegt werden.

Schließlich in diesem Abschnitt wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um auszuwählen, welcher Scroll-Marker derzeit der sichtbaren "Seite" entspricht und damit hervorheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als gefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf die Zugänglichkeit werden die Scroll-Marker-Gruppe und die darin enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe mittels <kbd>Tab</kbd> wechseln, verhält sie sich wie ein einzelnes Element (das bedeutet, dass ein erneutes Drücken der <kbd>Tab</kbd>-Taste an der Gruppe vorbeigeht und zum nächsten Element wechselt), und Sie können mit den Pfeiltasten (links/rechts oder oben/unten) zwischen den verschiedenen Scroll-Markers wechseln.

## Abschließendes Ergebnis des einfachen Karussells

Alles aus dem obigen Code kombiniert sich zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben und dann die Pfeiltasten zu verwenden, um durch jede Seite zu blättern.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Die zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Marker](#erstellen_von_scroll-markern) zur Navigation durch die Seiten enthält. Diese Demo ist ebenfalls responsiv — je nach Viewport-Breite erscheinen verschiedene Anzahlen von Elementen auf jeder Seite.

Diese Demo ist sehr ähnlich der [Karussell mit einzelnen Seiten](#karussell_mit_einzelnen_seiten) Demo, außer dass anstelle von Flexbox für das Layout [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudoelement verwendet werden, um beliebige Spalten zu erstellen, die die volle Breite des Karussells einnehmen und mehrere Elemente enthalten können.

Wenn wir diesen Ansatz verwenden, können wir sicher sein, dass, wenn der Viewport wächst oder schrumpft, während die Elementgröße konstant bleibt, nie ein teilweise angezeigtes Element über den Rand des Scrollports hinaus angezeigt wird. In diesem Fall werden die Scroll-Marker auf den Fragmenten des Scroll-Containers pro Spalte erstellt, anstatt auf den Kindern pro Element.

Das HTML ist dem der vorherigen Demo sehr ähnlich, außer dass es deutlich mehr Listenelemente gibt und da mehrere Elemente auf einmal sichtbar sind, wir sie als Items und nicht als Seiten bezeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Diese Demo hat ebenfalls sehr ähnliches CSS, mit Ausnahme der in den folgenden Abschnitten erläuterten Regeln.

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

Dieses Beispiel verwendet [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout), anstelle von Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei die Inhalte eine einzelne Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, wodurch die Inhalte mit der Mitte der Liste ausgerichtet werden.

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

Wir liefern rudimentäre Box-Styling für die Listenelemente und wenden dann Layout-Stile an, um ein oder mehrere Elemente in die einzelne Inhaltsspalte zu passen, abhängig von der Viewport-Breite. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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
- Eine absolute {{cssxref("width")}} von `200px` wurde auf ihnen gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass ein oder mehrere in eine Spalte passen, die sich zusammen mit der Breite des Viewports ausdehnt und zusammenzieht.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center` am übergeordneten Container zu überschreiben, damit der Inhalt der Elemente linksbündig ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird nun auf die {{cssxref("::column")}}-Pseudoelemente gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns`-Eigenschaft generiert werden — statt auf die Listenelemente. Wir möchten zu jeder vollständigen Spalte anstatt zu jedem einzelnen Listenelement schnappen, um bei jedem Scrollvorgang neue Elemente anzuzeigen.

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
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
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
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

### Spalten-Scroll-Marker

Das CSS zur Erstellung der Scroll-Marker in diesem Demo ist fast identisch mit dem der [vorherigen Demo](#erstellen_von_scroll-markern), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column`-Scrollmarkern anstelle der Listenelemente erstellt (beachten Sie, wie wir hier zwei Pseudoelemente einbeziehen, um Scroll-Marker auf den generierten Spalten zu erzeugen).

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

## Abschließendes Ergebnis des responsiven Karussells

Das Responsive Karussell wird wie folgt dargestellt:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Marker betätigen. Die Funktionalität ist ähnlich der des flexiblen Ein-Seiten-Karussell-Beispiels, außer dass jetzt mehrere Listenelemente in jeder navigierten Position vorhanden sind; die Scroll-Marker sind auf den Spaltenfragmenten gesetzt, die potenziell mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, werden die Scroll-Marker dynamisch aktualisiert, sodass jede Spalte in der Scroll-Marker-Gruppe dargestellt wird.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
