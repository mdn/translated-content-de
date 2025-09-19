---
title: Erstellen von CSS-Karussellen
short-title: Erstellen von Karussellen
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: ad57cae3faaec374c3e712d6994e7fc3cb9318db
---

Das Modul [CSS overflow](/de/docs/Web/CSS/CSS_overflow) definiert Funktionen, die es ermöglichen, flexible und zugängliche rein-CSS-Karusselle mit browsergenerierten und entwicklergestalteten Scroll-Schaltflächen und Scroll-Markern zu erstellen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Konzepte des Karussells

**Karusselle** sind ein häufiges Merkmal im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z.B. Präsentationsfolien, Werbung, Schlagzeilen aus der Nachrichtenwelt oder wesentliche Produktmerkmale.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen anklicken oder aktivieren oder durch Wischen. Die Navigation beinhaltet in der Regel:

- **Scroll-Schaltflächen**
  - : Allgemein "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Icons, von denen jedes ein oder mehrere Elemente repräsentiert, abhängig davon, wie viele Elemente an jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts, und Scroll-Markern unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Schlüsselmerkmal von Karussellen ist die **Seitennummerierung** — die Elemente fühlen sich wie separate Inhalte an, die bewegt werden, anstatt eine kontinuierliche Inhaltssektion zu bilden. Sie können ein Element zu einer Zeit oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnte mit jedem "nächsten" oder "vorherigen" Tastendruck eine ganz neue Gruppe von Elementen angezeigt werden. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem sichtbaren Bereich bewegt wird.

Karusselle können ziemlich fragil und herausfordernd mit JavaScript zu implementieren sein. Es sind Skripte erforderlich, um Scroll-Marker mit den Elementen zu verknüpfen, die sie darstellen, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, um sie korrekt zu betreiben. Wenn Karusselle mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerelemente hinzugefügt werden.

Glücklicherweise können wir zugängliche Karusselle mit zugehörigen Steuerelementen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussell-Funktionen nutzen.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die die Erstellung von Karussellen allein mit CSS und HTML ermöglichen, wobei der Browser den Großteil des Scrollens und der Linkreferenzen in einer zugänglichen, flexiblen und konsistenten Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "scroll containers")}} generierte Pseudo-Elemente, die Scroll-Schaltflächen darstellen, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; dient dazu, Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Marker darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kindelementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zu Layout-Zwecken zusammengefasst.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um den aktuell aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um einen Hervorhebungseffekt zum aktuell aktiven Marker hinzuzufügen, was für Benutzerfreundlichkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die individuellen Spalten, die beim Anzeigen von Inhalten in mehreren Spalten durch [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) generiert werden. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} genutzt werden, um einen Scroll-Marker für jede Spalte zu erzeugen.

## Karussell mit Einzel-Seiten

Unser erstes Beispiel ist ein Karussell von Einzel-Seiten, bei dem jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scroll-Snapping](#einrichten_des_scroll-snappings_auf_der_liste) um klare Seitennummerierung zu erzwingen, und die Positionierung von Ankern, um die [Scroll-Schaltflächen zu positionieren](#positionierung_von_scroll-schaltflächen) und Scroll-Marker relativ zum Karussell anzuordnen.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzige Reihe von Elementen zu erstellen; die `<ul>` ist der Flex-Container, und die `<li>`-Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird auf die volle Breite des Viewports eingestellt mit einer {{cssxref("width")}} von `100vw`; es erhält außerdem eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten - setzen einen {{cssxref("display")}}-Wert von `flex`, um die Kind-Listenelemente in einer Reihe anzeigen zu lassen (aufgrund des Standardwerts der {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

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

Nun ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element dazu zwingt, so breit wie der Container zu sein (die `<ul>`). Infolgedessen wird der Inhalt seinen Container überlaufen und das Ansichtsfenster wird horizontal scrollen.

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

Zusätzlich wird jedem geradzahligen Listenelement eine andere Hintergrundfarbe durch {{cssxref(":nth-child()")}} zugewiesen, sodass der Scroll-Effekt leichter zu erkennen ist.

### Einrichten des Scroll-Snappings auf der Liste

In diesem Abschnitt werden wir einen Overflow-Wert auf der `<ul>` setzen, um einen {{Glossary("scroll_container", "scroll container")}} zu erstellen, dann [CSS scroll snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste dazu zu bringen, beim Scrollen des Inhalts auf die Mitte jedes Listenelements zu snappen.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf die `<ul>` gesetzt, sodass der Inhalt innerhalb der Liste horizontal scrollen kann, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um auf jede "Seite" zu snappen - ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird festgelegt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll snap container")}} zu verwandeln. Das `x`-Schlüsselwort lässt die {{Glossary("Scroll_snap#snap_target", "snap targets")}} des Containers horizontal snappen, während das `mandatory`-Schlüsselwort bedeutet, dass der Container am Ende einer Scroll-Aktion immer zu einem Snap-Ziel snappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als Nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass die Liste beim Scrollen auf die Mitte jedes Listenelements snappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt dargestellt:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden des Scrollbalkens zu scrollen, um den Scroll-Snapping-Effekt zu sehen. Egal wo Sie Ihr Scroll-Bewegung beenden, ein Element wird immer "schnappen".

> [!NOTE]
> CSS scroll snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu nutzen. Allerdings funktionieren Karusselle viel besser mit enthaltenem Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird unzureichend sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir "vorherige" und "nächste" Scroll-Schaltflächen zur Demo hinzu, um ein Werkzeug zum Navigieren zwischen Karussell-Seiten bereitzustellen. Dies wird durch das {{cssxref("::scroll-button()")}}-Pseudo-Element erreicht.

Die `::scroll-button()`-Pseudo-Elemente erzeugen Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors spezifiziert wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container erzeugen, die jeweils den Inhalt des Containers in Richtung des Beginns oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()`-Pseudo-Elemente mit Stilen anzusprechen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie mit Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da die Scroll-Schaltflächen auch automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in diese Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um deutlicher zu machen, dass sie interagiert werden können (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), der bei `:disabled` wieder aufgehoben wird.

Als Nächstes wird mithilfe der `content`-Eigenschaft ein geeignetes Icon auf den linken und rechten Scroll-Schaltflächen gesetzt, was auch bewirkt, dass die Scroll-Schaltflächen erzeugt werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Beispielsweise haben die obigen Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} lauten "scroll left" und "scroll right", jeweils.

### Positionierung von Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Nun werden wir sie relativ zum Karussell unter Verwendung der [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren.

Zuerst wird auf der Liste ein Referenz-{{cssxref("anchor-name")}} gesetzt. Als Nächstes hat jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}}-Eigenschaft auf den gleichen Referenz-Namen, der auf der Liste definiert ist, um die beiden miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "inset properties")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Kanten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Beispielsweise ist der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Wenn wir den Scroll-Schaltflächen-Code hinzufügen, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherige" und "nächste" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, unter Beachtung des Scroll-Snapping-Verhaltens. Beachten Sie auch, wie die "vorherige" Schaltfläche automatisch deaktiviert wird, wenn die Liste an das Ende des Inhalts gescrollt wird, während die "nächste" Schaltfläche automatisch deaktiviert wird, wenn die Liste an das Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position verschiebt, die mit einer der Inhaltsseiten zu tun hat. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihre Fortschritte durch die Karussell-Seiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Marker hinzufügen, die drei Hauptmerkmale umfassen:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Es muss auf einen anderen Wert als `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}}-Pseudo-Element erzeugt wird; sein Wert bestimmt, wo die Scroll-Marker-Gruppe in der Tabulator- und Layoutbox-Reihenfolge des Karussells erscheint (jedoch nicht in der DOM-Struktur) — `before` setzt es am Beginn, vor den Scroll-Schaltflächen, während `after` es am Ende setzt.
- Das {{cssxref("::scroll-marker-group")}}-Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker als ganze Gruppe zusammenzufassen, einzuschließen und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren, und repräsentieren deren Scroll-Marker. Diese werden innerhalb des Vorfahren {{cssxref("::scroll-marker-group")}} zu Layout-Zwecken zusammengefasst.

Zunächst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudo-Element in der Fokus- und Layoutbox-Reihenfolge nach dem DOM-Inhalt der Liste platziert wird; das bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppen-Container von einem vorhandenen Element erstellt werden, das eine Menge von {{htmlelement("a")}}-Elementen enthält, indem {{cssxref("scroll-target-group")}} verwendet wird.

Als Nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste relativ zum Karussell mit CSS-Anker-Positionierung positioniert, ähnlich wie die Scroll-Schaltfläche, außer dass es horizontal auf dem Karussell mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` zentriert ist. Die Gruppe wird mit Flexbox angeordnet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudo-Elemente) in der `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem.

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

Als Nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Marker selbst; sie können wie anderer [erzeugter Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestaltet werden. Es ist wichtig zu beachten, dass wir einen von `none` abweichenden Wert für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich erzeugt werden. Wir setzen auch einige rudimentäre Stile, damit die Marker als umrissene Kreise erscheinen:

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
> Erzeugter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente angeordnet werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}}-Pseudo-Klasse verwendet, um auszuwählen, welcher Scroll-Marker der momentan sichtbaren "Seite" entspricht, und zeigt an, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Marker-Gruppen-Container auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> dorthin gelangen, dann zwischen den verschiedenen "Seiten" mit den Pfeiltasten links und rechts (oder oben und unten) wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Schaltflächen nach Bedarf ändert. Die Scroll-Marker können auch auf normale Weise, wie erwartet, tabbed werden.

## Endergebnis des Einzel-Seiten-Karussells

All der oben stehende Code fügt sich zusammen, um das folgende Ergebnis zu erzeugen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, sodass Sie sehen können, wo Sie in der Seitennummerierung sind. Versuchen Sie auch, zum Scroll-Marker-Group zu tabben, dann benutzen Sie die Pfeiltasten, um durch jede Seite zu wechseln.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Marker](#erstellen_von_scroll-markern) umfasst, um durch die Seiten zu navigieren. Dieses Beispiel ist ebenfalls responsiv — je nach Breite des Ansichtsfensters erscheinen unterschiedliche Anzahlen von Elementen auf jeder Seite.

Dieses Beispiel ist dem [Karussell mit Einzel-Seiten](#karussell_mit_einzel-seiten) sehr ähnlich, außer dass statt Flexbox für das Layout, [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}}-Pseudo-Element verwendet werden, um beliebige Spalten zu erzeugen, die die volle Breite des Karussells überspannen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, wir nie ein teilweise aus dem Sichtbereich herausstehendes Element haben. In diesem Fall werden die Scroll-Marker an den Scroll-Container-Fragmenten und nicht an den Kindern erstellt.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es deutlich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, wir sie als Elemente und nicht als Seiten kennzeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Beispiel hat auch sehr ähnliches CSS, mit der Ausnahme der in den folgenden Abschnitten erläuterten Regeln.

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

Dieses Beispiel verwendet [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei die Inhalte, die gleichzeitig angezeigt werden, eine einzelne Spalte bilden. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, wodurch die Inhalte mit der Mitte der Liste zentriert werden.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente an, dann wenden wir Layout-Stile an, um ein oder mehrere Elemente in die einzelne Inhaltsspalte passen zu lassen, abhängig von der Breite des Ansichtsfensters. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

Die wichtigsten Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander stehen zu lassen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde darauf gesetzt, um ihre Größe zu steuern, was bedeutet, dass eins oder mehrere in eine Spalte passen, die mit der Breite des Ansichtsfensters wächst oder schrumpft.
- Ein `text-align`-Wert von `left` wird darauf gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt wurde, zu überschreiben, sodass der Elementinhalt linksbündig ausgerichtet ist.

Die {{cssxref("scroll-snap-align")}}-Eigentum ist jetzt auf die {{cssxref("::column")}}-Pseudo-Elemente gesetzt — die die durch die `columns`-Eigenschaft generierten Inhaltsspalten darstellen — anstatt auf die Listenelemente. Wir möchten auf jede komplette Spalte statt auf jedes einzelne Listenelement snappen, sodass bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden.

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

### Spalten-Scroll-Marker

Das CSS zur Erstellung der Scroll-Marker in diesem Beispiel ist nahezu identisch mit dem [vorherigen Beispiel](#erstellen_von_scroll-markern), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column`-Pseudo-Elementen anstelle der Listenelemente erstellt. Beachten Sie, dass wir hier zwei Pseudo-Elemente hinzufügen, um Scroll-Marker auf den generierten Spalten zu erzeugen.

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

## Endergebnis des responsiven Karussells

Das Responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Marker drücken. Die Funktionalität ist der des Einzel-Seiten-Flexbox-Beispiels ähnlich, außer dass es jetzt mehrere Listenelemente in jeder navigierten Position gibt; die Scroll-Marker sind auf Spaltenfragmenten gesetzt, die potenziell mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie außerdem, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, wird auch die Anzahl der Scroll-Marker dynamisch aktualisiert, sodass jede Spalte in der Scroll-Marker-Group vertreten ist.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
