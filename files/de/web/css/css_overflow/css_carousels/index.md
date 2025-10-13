---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Das [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow) definiert Funktionen, die es ermöglichen, flexible und zugängliche, reine CSS-Karussells mit browsergenerierten und vom Entwickler gestalteten Scroll-Schaltflächen und Scroll-Markierungen zu erstellen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karussells** sind ein gängiges Merkmal im Web. Sie nehmen in der Regel die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z. B. Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch Klicken oder Aktivieren von Navigationsschaltflächen oder durch Wischen durch die Elemente navigieren. Die Navigation umfasst in der Regel:

- **Scroll-Schaltflächen**
  - : Im Allgemeinen "Vorherige" und "Nächste" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Serie von Schaltflächen- oder Link-Symbolen, die jeweils ein oder mehrere Elemente darstellen, je nachdem, wie viele Elemente an jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts und Scroll-Markierungen unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Hauptmerkmal von Karussells ist die **Paginierung** — die Elemente wirken wie separate Inhaltsteile, zwischen denen gewechselt wird, anstatt einen durchgängigen Inhaltsabschnitt zu bilden. Man könnte ein Element nach dem anderen oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnte bei jedem Druck auf die "Nächste"- oder "Vorherige"-Schaltfläche eine völlig neue Gruppe von Elementen angezeigt werden. Alternativ könnte man ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Sichtfeld verschoben wird.

Karussells können ziemlich empfindlich und schwierig mit JavaScript zu implementieren sein. Sie erfordern Skripte, um Scroll-Markierungen mit den Elementen zu verknüpfen, die sie darstellen, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, um korrekt zu funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerungen hinzugefügt werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Steuerungen ohne die Verwendung von JavaScript erstellen, indem wir die Funktionen des CSS-Karussells verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die es ermöglichen, Karussells ausschließlich mit CSS und HTML zu erstellen, wobei der Browser den größten Teil der Scroll- und Linkverweise auf eine zugängliche, flexible und konsistente Weise übernimmt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudo-Elemente Scroll-Schaltflächen, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kinderelementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zum Layout-Zweck gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um die derzeit aktive Scroll-Markierung auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für die derzeit aktive Markierung bereitzustellen, was für die Benutzbarkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container auf die Anzeige seines Inhalts in mehreren Spalten über das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) eingestellt ist. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um für jede Spalte eine Scroll-Markierung zu erzeugen.

## Karussell mit einzelnen Seiten

Unser erstes Beispiel ist ein Karussell mit einzelnen Seiten, wobei jedes Element die ganze Seite einnimmt. Wir haben [Scroll-Markierungen](#erstellen_von_scroll-markierungen) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu navigieren.

Wir werden [flexbox](#karussell-layout_mit_flexbox) verwenden, um das Karussell zu gestalten, [Scroll-Snapping](#festlegen_des_scroll-snappings_auf_der_liste), um eine klare Paginierung zu erzwingen, und Anchor-Positionierung, um die [Scroll-Schaltflächen zu positionieren](#positionierung_von_scroll-schaltflächen) und Scroll-Markierungen relativ zum Karussell zu positionieren.

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; die `<ul>` ist der Flex-Container, und die `<li>`-Kindlistenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters mit einer Breite {{cssxref("width")}} von `100vw` einnimmt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten — ein {{cssxref("display")}}-Wert von `flex` wird gesetzt, damit die Kinderlistenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen ihnen.

```css hidden live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
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

Jetzt ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element dazu zwingt, so breit wie der Container (die `<ul>`) zu sein. Infolgedessen wird der Inhalt seinen Container überlaufen, und das Ansichtsfenster wird horizontal scrollen.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  flex: 0 0 100%;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Zudem erhält jedes gerade Listenelement über {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe, sodass der Scrolleffekt leichter zu erkennen ist.

### Festlegen des Scroll-Snappings auf der Liste

In diesem Abschnitt werden wir einen Überlaufwert auf der `<ul>` setzen, um sie in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste dazu zu bringen, beim Scrollen des Inhalts in die Mitte jedes Listenelements zu schnappen.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf die `<ul>` gesetzt, sodass ihr Inhalt horizontal innerhalb der Liste scrollen kann, anstatt dass das gesamte Ansichtsfenster scrollt. Dann wird [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappen wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird auf den Listenelementen ein {{cssxref("scroll-snap-align")}}-Wert von `center` gesetzt, sodass die Liste, wenn sie gescrollt wird, in die Mitte jedes Listenelements schnappen kann.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste zu scrollen, indem Sie wischen oder die Bildlaufleiste verwenden, um den Scroll-Snap-Effekt zu sehen. Egal wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an seinen Platz "schnappen".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu nutzen. Allerdings funktionieren Karussells mit Scroll-Snapping viel besser. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Markierungen wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird mangelhaft sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir dem Demo "Vorherige" und "Nächste" Scroll-Schaltflächen hinzu, um ein Werkzeug zur Navigation zwischen den Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudo-Element erreicht.

Die `::scroll-button()`-Pseudo-Elemente generieren Schaltflächen innerhalb eines Scroll-Containers nur dann, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors definiert wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung des Anfangs- oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()`-Pseudo-Elemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Schaltflächen mit einigen grundlegenden Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer zu setzen. Zudem, da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in diese Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

```css live-sample___first-example live-sample___first-example-step2
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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um deutlicher zu machen, dass sie interagiert werden können (eine Verbesserung sowohl für den allgemeinen {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Schaltflächen auf `:disabled` stehen.

Als nächstes wird über die `content`-Eigenschaft ein passendes Icon auf die linke und rechte Scroll-Schaltfläche gesetzt, was auch dazu führt, dass die Scroll-Schaltflächen generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien korrekt angekündigt werden. Zum Beispiel haben die oben genannten Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Positionierung von Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Jetzt werden wir sie relativ zum Karussell positionieren, indem wir [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Als nächstes hat jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen, der auf der Liste definiert wurde, um die beiden miteinander zu verbinden.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Einrückungseigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um einen gewissen Abstand zwischen dem Schaltflächenrand und dem Karussellrand hinzuzufügen. Beispielsweise wird der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Indem wir den Code für die Scroll-Schaltflächen hinzufügen, erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "Vorherige" und "Nächste" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snapping-Verhalten respektiert wird. Beachten Sie auch, wie die "Vorherige"-Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Anfang des Inhalts gescrollt ist, während die "Nächste"-Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Ende des Inhalts gescrollt ist.

### Erstellen von Scroll-Markierungen

Scroll-Markierungen sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position scrollt, die mit einer der Inhaltsseiten zusammenhängt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir Scroll-Markierungen zu dem Karussell hinzufügen, was drei Hauptfunktionen umfasst:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf das Scroll-Container-Element gesetzt. Sie muss auf einen Wert ungleich `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}}-Pseudo-Element generiert wird; ihr Wert gibt an, wo die Scroll-Markierungsgruppe in der Tabulator- und Layout-Box-Reihenfolge des Karussells (aber nicht in der DOM-Struktur) erscheint — `before` setzt sie an den Anfang, vor die Scroll-Schaltflächen, während `after` sie ans Ende setzt.
- Das {{cssxref("::scroll-marker-group")}}-Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Markierungen als Gruppe zusammenzufassen, zu enthalten und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Markierungen. Diese sind innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahrens zum Layout-Zweck gesammelt.

Zunächst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudo-Element nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; das bedeutet, es kommt nach den Scroll-Schaltflächen:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Markierungsgruppenbehälter von einem vorhandenen Element, das eine Gruppe von {{htmlelement("a")}}-Elementen enthält, mit {{cssxref("scroll-target-group")}} erstellt werden.

Als nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste relativ zum Karussell unter Verwendung der CSS-Anker-Positionierung positioniert, ähnlich wie bei den Scroll-Schaltflächen, außer dass es horizontal zentriert auf dem Karussell mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` ist. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand zwischen jedem sind.

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

Als nächstes behandeln wir das Aussehen und die Anmutung der Scroll-Markierungen selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Wert ungleich `none` für die `content`-Eigenschaft setzen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Markierungen als umrandete Kreise erscheinen zu lassen:

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
> Generierte Inhalte sind standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, weil sie als Flex-Elemente layoutet werden.

Schließlich verwenden wir für diesen Abschnitt die {{cssxref(":target-current")}}-Pseudo-Klasse, um die Scroll-Markierung auszuwählen, die der derzeit sichtbaren "Seite" entspricht, und so hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Markierungsgruppenbehälter auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur zu ihm navigieren und dann mit den Cursor-Tasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Markierungen und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Markierungen können auch wie erwartet zwischen einem Tabulatoren normal gewechselt werden.

## Finale Ergebnis des Karussells mit Einzelseiten

Der gesamte obige Code kombiniert sich zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie, diese zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie die aktuelle Markierung hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben und dann die Cursor-Tasten zu verwenden, um durch jede Seite zu wechseln.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Markierungen](#erstellen_von_scroll-markierungen) enthält, um durch die Seiten zu navigieren. Dieses Beispiel ist ebenfalls responsiv — je nach Ansichtsfensterbreite erscheinen unterschiedlich viele Elemente auf jeder Seite.

Dieses Beispiel ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelnen_seiten) sehr ähnlich, außer dass anstelle der Flexbox für das Layout [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}}-Pseudo-Element verwendet werden, um beliebige Spalten zu erstellen, die die volle Breite des Karussells umfassen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass bei Vergrößerung oder Verkleinerung des Ansichtsfensters, während die Elementgröße konstant bleibt, niemals ein unvollständiges Element außerhalb des Scrollport angezeigt wird. In diesem Fall werden die Scroll-Markierungen auf den Scroll-Container-Fragmenten, pro Spalte, anstelle der Kinder, pro Element, erstellt.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es deutlich mehr Listenelemente gibt und da mehrere Elemente gleichzeitig sichtbar sein werden, bezeichnen wir sie als Elemente statt Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Beispiel hat auch sehr ähnliche CSS, mit Ausnahme der Regeln, die in den folgenden Abschnitten erklärt werden.

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

In diesem Beispiel verwenden wir anstelle der Flexbox [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei die Inhalte eine Spalte nach der anderen anzeigen. Auch ein {{cssxref("text-align")}}-Wert von `center` wird angewendet, um die Inhalte mittig in der Liste auszurichten.

```css hidden live-sample___second-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
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

Wir bieten rudimentäres Box-Styling für die Listenelemente an und wenden dann Layout-Stile an, um mehrere Elemente in die einzelne Inhalts-Spalte einzufügen, abhängig von der Breite des Ansichtsfensters. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

```css live-sample___second-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;

  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 0 10px;

  text-align: left;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Die entscheidenden Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größensteuerung zu ermöglichen, sodass eine oder mehrere in eine Spalte passen, die beim Ändern der Breite des Ansichtsfensters wächst und schrumpft.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt wurde, zu überschreiben, damit der Elementinhalt linksbündig ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft ist jetzt auf den {{cssxref("::column")}}-Pseudo-Elementen gesetzt, die die Inhalts-Spalten darstellen, die durch die `columns`-Eigenschaft erzeugt werden — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte schnappen und nicht zu jedem einzelnen Listenelement, sodass bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden.

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

### Spalten-Scroll-Markierungen

Das CSS zum Erstellen der Scroll-Markierungen in diesem Beispiel ist nahezu identisch mit dem im [vorherigen Beispiel](#erstellen_von_scroll-markierungen), außer dass die Selektoren unterschiedlich sind — die Scroll-Markierungen werden an den generierten `::column`-Pseudo-Elementen statt an den Listenelementen erstellt. Beachten Sie, dass wir hier zwei Pseudo-Elemente einfügen, um Scroll-Markierungen an den generierten Spalten zu erzeugen.

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

## Finale Ergebnis des responsiven Karussells

Das responsive Karussell wird wie folgt dargestellt:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Markierungen drücken. Die Funktionalität ist ähnlich wie beim Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Markierungen sind an Spalten-Fragmenten, die potenziell mehrere Elemente enthalten, anstelle an jedem einzelnen Element eingestellt.

Versuchen Sie auch, die Bildschirmbreite zu ändern und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändern — und damit auch die Anzahl der erzeugten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Markierungen dynamisch, sodass jede Spalte in der Scroll-Markierungsgruppe dargestellt wird.

## Siehe auch

- [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow)
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
