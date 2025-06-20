---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{CSSRef}}

Das [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karussells mit browsergenerierten und entwicklergestalteten Scroll-Schaltflächen und Scroll-Markierungen ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karussells** sind ein häufiges Feature im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente wie Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produktmerkmale enthält.

Benutzer können durch Klicken oder Aktivieren von Navigationstasten oder durch Wischen durch die Elemente navigieren. Die Navigation umfasst in der Regel:

- **Scroll-Schaltflächen**
  - : Im Allgemeinen "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Reihe von Schaltflächen- oder Link-Symbolen, von denen jedes ein oder mehrere Elemente darstellt, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherigen und nächsten Schaltflächen links und rechts und Scroll-Markierungen unten](carousel.png)

Ein Hauptmerkmal von Karussells ist die **Paginierung** — die Elemente fühlen sich wie separate Inhaltsstücke an, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Inhaltsbereich zu bilden. Sie könnten ein Element auf einmal anzeigen oder mehrere Elemente auf jeder Karussell-"Seite". Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Drücken der "nächsten" oder "vorherigen" Schaltfläche eine ganz neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein einziges neues Element an ein Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld verschoben wird.

Karussells mit JavaScript zu erstellen kann ziemlich anfällig und herausfordernd in der Implementierung sein. Sie erfordern Skripte, um Scroll-Markierungen den Elementen zuzuordnen, die sie repräsentieren, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, um korrekt zu funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Bedienelemente hinzugefügt werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Bedienelementen ohne Verwendung von JavaScript erstellen, indem wir die CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussells nur mit CSS und HTML ermöglichen, wobei der Browser den Großteil der Scroll- und Linkverweise auf zugängliche, flexible und konsistente Weise übernimmt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert; diese Pseudoelemente repräsentieren Scroll-Schaltflächen, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um deren Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kind-Elementen oder Spalten zu scrollen, und werden innerhalb der Scroll-Container-{{cssxref("::scroll-marker-group")}}-Anordnung gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um die derzeit aktive Scroll-Markierung auszuwählen. Sie kann verwendet werden, um einen hervorgehobenen Stil für die derzeit aktive Markierung bereitzustellen, was wichtig für Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass sein Inhalt in mehreren Spalten über das [CSS mehrspaltige Layout](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt wird. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um eine Scroll-Markierung für jede Spalte zu generieren.

## Karussell mit einseitigen Seiten

Unser erstes Demo ist ein Karussell mit einseitigen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Markierungen](#scroll-markierungen_erstellen) als untere Navigation und [Scroll-Schaltflächen](#scroll-schaltflächen_erstellen) an den Seiten der Seite, die dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir werden [Flexbox](#karussell-layout_mit_flexbox) verwenden, um das Karussell zu gestalten, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten), um eine klare Paginierung sicherzustellen, und die Positionsverankerung, um die [Positionsrollen](#scroll-schaltflächen_positionieren) und Scroll-Markierungen relativ zum Karussell zu positionieren.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzige Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>`-Kinder-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters mit einer Breite {{cssxref("width")}} von `100vw` ausfüllt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste anzuordnen — indem wir einen {{cssxref("display")}} Wert von `flex` einstellen, damit die Kinder-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts von {{cssxref("flex-direction")}} `row`) und einen {{cssxref("gap")}} von `4vw` zwischen jedem Element festlegen.

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

Nun ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtigste Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container zu sein (das `<ul>`). Dadurch wird der Inhalt seinen Container überlaufen, und das Ansichtsfenster wird horizontal scrollen.

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

Zusätzlich erhält jedes gerade Listenelement eine andere Hintergrundfarbe durch {{cssxref(":nth-child()")}}, damit der Scrolling-Effekt leichter zu sehen ist.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt werden wir einen Überlaufwert auf das `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste beim Scrollen in der Mitte jedes Listenelements einzurasten.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt dass das gesamte Ansichtsfenster scrollt. [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x` Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das `mandatory` Schlüsselwort bedeutet, dass der Container immer an einem Snap-Ziel am Ende einer Scroll-Aktion einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}} Wert von `center` auf die Listenelemente gesetzt, sodass die Liste beim Scrollen an der Mitte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Bildlaufleiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer "einrasten".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu verwenden. Karussells arbeiten jedoch wesentlich besser mit Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Markierungen wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird unzureichend sein.

### Scroll-Schaltflächen erstellen

In diesem Abschnitt fügen wir der Demo "vorherige" und "nächste" Scroll-Schaltflächen hinzu, um ein Werkzeug zur Navigation zwischen Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudoelement erreicht.

Die `::scroll-button()` Pseudoelemente erzeugen Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jede `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung Anfang oder Ende der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudoelemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturnutzer festzulegen. Außerdem werden die Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn in dieser Richtung kein Scrollen mehr erfolgen kann. Wir verwenden die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand zu adressieren.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf den Scroll-Schaltflächen, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung für sowohl allgemeine {{Glossary("UX", "UX")}} als auch [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), wobei er zurückgesetzt wird, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird durch die `content`-Eigenschaft ein entsprechendes Symbol auf den linken und rechten Scroll-Schaltflächen gesetzt, was auch dazu führt, dass die Scroll-Schaltflächen generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Den Scroll-Schaltflächen wird automatisch ein geeigneter zugänglicher Name zugewiesen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Zum Beispiel haben die obigen Schaltflächen eine implizite [`Rolle`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind entsprechend "nach links scrollen" und "nach rechts scrollen".

### Scroll-Schaltflächen positionieren

Wir haben die Scroll-Schaltflächen erstellt. Nun werden wir sie relativ zum Karussell positionieren, unter Verwendung des [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning).

Zuerst wird ein referenzierter {{cssxref("anchor-name")}} auf der Liste festgelegt. Danach hat jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}} Eigenschaft wird auf denselben Referenznamen festgelegt, der in der Liste definiert wurde, um die beiden zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Einsetzeigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Abstand zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Zum Beispiel ist der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Durch Hinzufügen des Scroll-Schaltflächencodes erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherigen" und "nächsten" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snap-Verhalten respektiert wird. Beachten Sie auch, dass die "vorherige" Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Anfang des Inhalts gescrollt wird, während die "nächste" Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Ende des Inhalts gescrollt wird.

### Scroll-Markierungen erstellen

Scroll-Markierungen sind eine Gruppe von Schaltflächen, von denen jede das Karussell an eine Position von einer der Inhaltsseiten rollt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussell-Seiten anzeigt.

In diesem Abschnitt werden wir Scroll-Markierungen zum Karussell hinzufügen, was drei Hauptfunktionen umfasst:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Sie muss auf einen Wert, der nicht `none` ist, eingestellt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudoelement generiert wird; ihr Wert legt fest, wo die Gruppe der Scroll-Markierungen im Fokus- und Layoutbox-Reihenfolge (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` plaziert sie am Anfang, vor den Scroll-Schaltflächen, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Markierungen zu sammeln und zu gestalten.
- {{cssxref("::scroll-marker")}} Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Markierungen. Diese werden innerhalb des Vorfahren {{cssxref("::scroll-marker-group")}} zur Layoutzwecken gesammelt.

Zuerst wird die `scroll-marker-group` Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layoutbox-Reihenfolge erscheint; das bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste relativ zum Karussell positioniert, indem CSS-Ankerpositionierung verwendet wird, ähnlich wie bei den Scroll-Schaltflächen, außer dass es horizontal auf dem Karussell zentriert wird, indem ein {{cssxref("justify-self")}} Wert von `anchor-center` verwendet wird. Die Gruppe wird mit Flexbox layoutiert, wobei ein {{cssxref("justify-content")}} Wert von `center` und ein {{cssxref("gap")}} von `20px` verwendet werden, sodass ihre Kinder (die `::scroll-marker` Pseudoelemente) innerhalb der `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem.

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

Als nächstes gehen wir auf das Erscheinungsbild und die Haptik der Scroll-Markierungen ein; sie können wie jedes andere [generierte Inhaltsstück](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Wert, der nicht `none` ist, für die `content` Eigenschaft festlegen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Markierungen als umrissene Kreise anzuzeigen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, weil sie als Flex-Items layoutiert werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um die Scroll-Markierung auszuwählen, die der aktuell sichtbaren "Seite" entspricht, und hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf Zugänglichkeit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Markierungen mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe navigieren, verhält sie sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen Scroll-Markierungen wechseln.

## Endergebnis des einseitigen Karussells

Der gesamte obenstehende Code fügt sich zusammen, um das folgende Ergebnis zu erzeugen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu navigieren.

Sie können auch zwischen Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Demo zeigt ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Schaltflächen](#scroll-schaltflächen_erstellen) und [Scroll-Markierungen](#scroll-markierungen_erstellen) zur Navigation durch die Seiten beinhaltet. Dieses Demo ist auch responsive — je nach Breite des Ansichtsfensters erscheinen unterschiedliche Anzahlen von Elementen auf jeder Seite.

Dieses Demo ist dem [Karussell mit einseitigen Seiten](#karussell_mit_einseitigen_seiten) Demo sehr ähnlich, abgesehen davon, dass es statt Flexbox für das Layout [CSS mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudoelement verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells überspannen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn das Ansichtsfenster größer oder kleiner wird, während die Elementgröße konstant bleibt, niemals ein teilweises Element am Rand des Scroll-Ports angezeigt wird. In diesem Fall werden die Scroll-Markierungen auf Scroll-Container-Fragmente, pro Spalte, anstatt auf Kinder, pro Element, erstellt.

Das HTML ist dem des vorherigen Demos sehr ähnlich, abgesehen davon, dass es deutlich mehr Listenelemente gibt und, da mehrere Elemente auf einmal sichtbar sein werden, wir sie als Elemente anstatt Seiten kennzeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliches CSS, mit Ausnahme der in den folgenden Abschnitten erläuterten Regeln.

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

Dieses Beispiel verwendet [CSS mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox, um die Karussell-Elemente anzuordnen. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei die Inhalte eine einzelne Spalte auf einmal anzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um die Inhalte mit der Mitte der Liste auszurichten.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente und wenden dann Layout-Stile an, um ein oder mehrere Elemente in der einzelnen Inhaltsspalte zu platzieren, je nach Breite des Ansichtsfensters. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

Die Schlüssel-Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu zwingen und die Liste horizontal zu scrollen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf ihnen gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass eines oder mehrere in eine Spalte passen, die mit der Breite des Ansichtsfensters wächst und schrumpft.
- Ein `text-align` Wert von `left` wird auf ihnen gesetzt, um das `text-align: center` aufzuheben, das auf den übergeordneten Container gesetzt ist, sodass der Inhalt des Elements links ausgerichtet ist.

Die {{cssxref("scroll-snap-align")}} Eigenschaft ist jetzt auf den {{cssxref("::column")}} Pseudoelementen gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns` Eigenschaft generiert werden — anstelle der Listenelemente. Wir wollen zu jedem vollständigen Spaltenblock snappen, anstatt zu jedem einzelnen Listenelement, und bei jeder Scroll-Aktion alle neuen Elemente anzeigen.

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

### Spalten-Scroll-Markierungen

Das CSS zur Erstellung der Scroll-Markierungen in diesem Demo ist fast identisch mit dem [vorhergehenden Demo](#scroll-markierungen_erstellen), außer dass die Selektoren anders sind — die Scroll-Markierungen werden auf den generierten `::column` Scroll-Markierungen erstellt, anstatt auf den Listenelementen (beachten Sie, dass wir hier zwei Pseudoelemente einbinden, um Scroll-Markierungen auf den generierten Spalten zu generieren).

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

## Responsives Karussell-Endergebnis

Das Responsive-Karussell wird wie folgt dargestellt:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Markierungen drücken. Die Funktionalität ist ähnlich der des einseitigen Flexbox-Beispiels, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Markierungen befinden sich auf Spaltenfragmenten, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie sehen, dass die Anzahl der Listenelemente, die in die Liste passen, sich ändert — und somit ändert sich auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, wird die Anzahl der Scroll-Markierungen dynamisch aktualisiert, sodass jede Spalte in der Scroll-Markierungsgruppe vertreten ist.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
