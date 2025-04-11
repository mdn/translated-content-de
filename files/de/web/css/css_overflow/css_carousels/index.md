---
title: Erstellen Sie CSS-Karusselle
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karusselle mit browsergenerierten und entwicklergestalteten Scroll-Buttons und Scroll-Markierungen ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karusselle** sind ein häufiges Feature im Web. Sie nehmen typischerweise die Form eines scrollenden Inhaltsbereichs an, der mehrere Elemente enthält, wie z.B. Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen anklicken oder aktivieren oder durch Wischen. Die Navigation umfasst normalerweise:

- **Scroll-Buttons**
  - : Im Allgemeinen "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Serie von Schalt- oder Link-Symbolen, von denen jedes ein oder mehrere Elemente repräsentiert, abhängig davon, wie viele Elemente an jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherigen und nächsten Schaltflächen links und rechts und Scroll-Markierungen unten](carousel.png)

Ein zentrales Merkmal von Karussellen ist die **Paginierung** — die Elemente wirken wie separate Inhaltsteile, zwischen denen navigiert wird, anstatt eine durchgehende Inhaltssektion zu bilden. Sie könnten ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Druck der Schaltfläche "nächste" oder "vorherige" eine vollständig neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld verschoben wird.

Die Erstellung von Karussellen mit JavaScript kann ziemlich fragil und herausfordernd sein. Sie erfordern Skripte, um die Scroll-Markierungen mit den Elementen zu verknüpfen, die sie repräsentieren, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, um sie korrekt zu bedienen. Wenn Karusselle mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerungen hinzugefügt werden.

Glücklicherweise können wir zugängliche Karusselle mit zugehörigen Steuerungen ohne den Einsatz von JavaScript erstellen, indem wir CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussellen mit nur CSS und HTML ermöglichen, wobei der Browser die meisten Scrolling- und Link-Referenzen auf eine zugängliche, flexible und konsistente Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, stellen diese Pseudoelemente Scroll-Buttons dar, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; zum Sammeln und Anordnen von Scroll-Markierungen verwendet.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kind-Elementen oder Spalten zu scrollen, und sind im {{cssxref("::scroll-marker-group")}} des Scroll-Containers für Layoutzwecke gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um die derzeit aktive Scroll-Markierung auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für die derzeit aktive Markierung bereitzustellen, was für Benutzerfreundlichkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement stellt die einzelnen Spalten dar, die generiert werden, wenn ein Container darauf eingestellt ist, seinen Inhalt in mehreren Spalten anzuzeigen, über [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout). Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um für jede Spalte eine Scroll-Markierung zu erzeugen.

## Karussell mit einzelnen Seiten

Unser erstes Beispiel ist ein Karussell mit einzelnen Seiten, wobei jedes Element die ganze Seite einnimmt. Wir haben [Scroll-Markierungen](#scroll-markierungen_erstellen) als untere Navigation und [Scroll-Buttons](#scroll-buttons_erstellen) an den Seiten der Seite, die dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten), um klare Paginierung zu erzwingen, und Ankerpositionierung, um die [Scroll-Buttons zu positionieren](#scroll-buttons_positionieren) und die Scroll-Markierungen relativ zum Karussell zu positionieren.

Das HTML besteht aus einem [Überschrift-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) Platzhalterinhalt enthält:

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) um eine einzige Zeile von Elementen zu erzeugen; das `<ul>` ist der Flexcontainer, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters ausfüllt mit einer {{cssxref("width")}} von `100vw`; sie hat auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten — indem ein {{cssxref("display")}} Wert von `flex` gesetzt wird, um die Kindelemente in einer Zeile anzuzeigen (aufgrund des Standardwertes {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` dazwischen.

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

Nun ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten grundlegende Styling. Die wichtige Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überlaufen, und das Ansichtsfenster scrollt horizontal.

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

Zusätzlich erhält jedes gerade Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, damit der Scrolling-Effekt besser sichtbar wird.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt verwenden wir einen Überlaufwert am `<ul>`, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und wenden dann [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) an, damit die Liste beim Scrollen des Inhalts zum Zentrum jedes Listenelements schnappen kann.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} zu verwandeln. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion springen wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}} Wert von `center` auf die Listenelemente gesetzt, damit die Liste beim Scrollen zum Zentrum jedes Listenelements schnappen kann.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird folgendermaßen gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Scroll-Leiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Unabhängig davon, wo Sie Ihre Scroll-Bewegung beenden, wird ein Element immer "einrasten".

> [!NOTE]
> CSS Scroll Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu verwenden. Allerdings funktionieren Karusselle mit aktiviertem Scroll Snapping wesentlich besser. Ohne Scroll Snapping werden die Scroll-Buttons und Markierungen wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird nicht zufriedenstellend sein.

### Scroll-Buttons erstellen

In diesem Abschnitt fügen wir "vorherige" und "nächste" Scroll-Buttons zur Demo hinzu, um ein Werkzeug zur Navigation zwischen den Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudoelement erreicht.

Die `::scroll-button()` Pseudo-Elemente generieren Buttons innerhalb eines Scroll-Containers nur dann, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert einen Scroll-Button, dessen Scroll-Richtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die jeweils den Inhalt des Containers entweder zum Anfang oder zum Ende der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente mit Stilen zu versehen.

Zunächst werden alle Scroll-Buttons mit einigen grundlegenden Stilen sowie Stilen basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturbenutzer festzulegen. Da Scroll-Buttons automatisch auf `disabled` gesetzt werden, wenn kein weiteres Scrollen in diese Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Buttons, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein geeignetes Symbol auf die linken und rechten Scroll-Buttons über die `content` Eigenschaft gesetzt, was auch das Erzeugen der Scroll-Buttons bewirkt:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Buttons erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien angemessen angekündigt werden. Zum Beispiel haben die obigen Buttons eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Scroll-Buttons positionieren

Wir haben die Scroll-Buttons erstellt. Nun werden wir sie relativ zum Karussell positionieren, indem wir [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuallererst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Als nächstes hat jeder Scroll-Button seine {{cssxref("position")}} auf `absolute` und seine {{cssxref("position-anchor")}} Eigenschaft auf den gleichen Referenznamen gesetzt, der auf die Liste definiert ist, um die beiden gemeinsam zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um tatsächlich jeden Scroll-Button zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Einpassungseigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die spezifizierten Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Platz zwischen der Button-Kante und der Karussell-Kante hinzuzufügen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Nachdem wir den Scroll-Button Code hinzugefügt haben, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherige" und "nächste" Scroll-Buttons zu drücken, um zu sehen, wie sich die Seiten scrollen, und beachten Sie die Scroll-Snapping-Funktionalität. Beachten Sie auch, wie der "vorherige" Button automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während der "nächste" Button automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Scroll-Markierungen erstellen

Scroll-Markierungen sind eine Gruppe von Buttons, von denen jeder das Karussell zu einer Position scrollt, die mit einer der Inhaltsseiten in Zusammenhang steht. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Markierungen hinzufügen, was drei Hauptmerkmale umfasst:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Sie muss auf einen Wert gesetzt werden, der nicht `none` ist, damit das {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird; sein Wert gibt an, wo die Scroll-Markierungsgruppe in der Tabulator- und Layout-Box-Reihenfolge des Karussells angezeigt wird (jedoch nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Buttons, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudo-Element existiert in einem Scroll-Container und wird verwendet, um Scroll-Markierungen zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudo-Elemente existieren in den Kindern und {{cssxref("::column")}} Fragmenten eines Scroll-Container-Vorfahren und stellen deren Scroll-Markierungen dar. Diese werden in der {{cssxref("::scroll-marker-group")}} des Vorfahren für Layout-Zwecke gesammelt.

Zu Beginn wird die `scroll-marker-group` Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element in der Fokus- und Layout-Box-Reihenfolge nach dem DOM-Inhalt der Liste platziert wird; das bedeutet, dass es nach den Scroll-Buttons erscheint:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste relativ zum Karussell unter Verwendung der CSS Ankerpositionierung positioniert, ähnlich wie die Scroll-Buttons, außer dass es horizontal auf das Karussell mit einem {{cssxref("justify-self")}} Wert von `anchor-center` zentriert wird. Die Gruppe wird mit Flexbox ausgelegt, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker` Pseudo-Elemente) innerhalb des `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem von ihnen.

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

Als nächstes kümmern wir uns um das Aussehen und das Gefühl der Scroll-Markierungen selbst; sie können genauso wie jedes andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Nicht-`none` Wert für die `content` Eigenschaft festlegen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige grundlegende Stile, um die Markierungen als umrissene Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, weil sie als Flex-Items angelegt werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um zu bestimmen, welche Scroll-Markierung der aktuell sichtbaren "Seite" entspricht, und sie hervorzuheben, um anzuzeigen, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als durchgehender Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf die Zugänglichkeit werden die Scroll-Markierungsgruppe und die enthaltenen Scroll-Markierungen mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik dargestellt. Wenn Sie mit der Tastatur <kbd>Tab</kbd> auf die Gruppe gelangen, verhält sie sich wie ein einzelnes Element (das heißt, ein weiterer Druck auf die <kbd>Tab</kbd>-Taste bewegt die Gruppe zum nächsten Element), und Sie können mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen Scroll-Markierungen wechseln.

## Endergebnis eines Karussells mit einzelnen Seiten

Aller bisherige Code kombiniert sich zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie die aktuelle Markierung hervorgehoben wird, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben und dann die Pfeiltasten zu verwenden, um durch jede Seite zu navigieren.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Buttons](#scroll-buttons_erstellen) und [Scroll-Markierungen](#scroll-markierungen_erstellen) zur Navigation durch die Seiten enthält. Dieses Beispiel ist auch responsiv — unterschiedliche Anzahl von Elementen erscheinen auf jeder Seite, abhängig von der Breite des Ansichtsfensters.

Dieses Beispiel ist sehr ähnlich zum [Karussell mit einzelnen Seiten](#karussell_mit_einzelnen_seiten), mit dem Unterschied, dass anstelle von Flexbox für das Layout der [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudo-Element verwendet werden, um willkürliche Spalten zu erstellen, die die volle Breite des Karussells einnehmen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, nie ein Teil eines Elements außerhalb des Randes des Scrollbereichs angezeigt wird. In diesem Fall werden die Scroll-Markierungen auf den erzeugten Scroll-Container-Fragmenten pro Spalte statt auf den Kindern pro Element erstellt.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es deutlich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, wir sie als Elemente und nicht als Seiten bezeichnen:

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

In diesem Beispiel verwenden wir den [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox, um die Karussellelemente zu layouten. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei der Inhalt jeweils eine einzige Spalte anzeigt. Ein {{cssxref("text-align")}} Wert von `center` wird auch angewendet, um den Inhalt mit der Mitte der Liste auszurichten.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente an und wenden dann Layout-Stile an, damit eines oder mehrere Elemente in die einzelne Inhaltsspalte passen, abhängig von der Breite des Ansichtsfensters. Die Anzahl ändert sich dynamisch, während die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu steuern, was bedeutet, dass eine oder mehrere in eine Spalte passen, die zusammen mit der Breite des Ansichtsfensters wächst und schrumpft.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um das `text-align: center`, das auf das übergeordnete Container gesetzt ist, zu überschreiben, sodass der Inhalt der Elemente linksbündig ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird nun auf die {{cssxref("::column")}} Pseudo-Elemente gesetzt—die die durch die Eigenschaft `columns` erzeugten Inhaltsspalten darstellen—anstatt auf die Listenelemente. Wir wollen zu jeder vollständigen Spalte schnappen, anstatt jedes einzelne Listenelement nacheinander zu zeigen, und bei jeder Scroll-Aktion neue Elemente anzuzeigen.

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

Das CSS zum Erstellen der Scroll-Markierungen in diesem Beispiel ist fast identisch mit dem des [vorherigen Beispiels](#scroll-markierungen_erstellen), mit Ausnahme der unterschiedlichen Selektoren—die Scroll-Markierungen werden auf den erzeugten `::column` Scroll-Markierungen anstelle der Listenelemente erstellt (beachten Sie, wie wir hier zwei Pseudo-Elemente einschließen, um Scroll-Markierungen auf den erzeugten Spalten zu generieren).

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

Das responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Buttons drücken und die Scroll-Markierungen betätigen. Die Funktionalität ist ähnlich wie bei dem Einzelseiten-Beispiel mit Flexbox, außer dass jetzt mehrere Listenelemente in jeder navigierten Position vorhanden sind; die Scroll-Markierungen befinden sich auf Spalten-Fragmenten, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem einzelnen Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert—und damit auch die Anzahl der erzeugten Spalten. Während sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Markierungen dynamisch, sodass jede Spalte in der Scroll-Markierungsgruppe repräsentiert ist.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
