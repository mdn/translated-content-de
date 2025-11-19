---
title: Erstellen von CSS-Karussells
short-title: Erstellen von Karussells
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karussells mit durch den Browser generierten und von Entwicklern gestalteten Scroll-Schaltflächen und Scroll-Markierungen ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karussells** sind ein häufiges Merkmal im Web. Sie haben typischerweise die Form eines scrollbaren Inhaltsbereichs, der mehrere Elemente enthält, wie Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen anklicken oder aktivieren oder wischen. Die Navigation umfasst normalerweise:

- **Scroll-Schaltflächen**
  - : Im Allgemeinen "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Reihe von Schalt- oder Link-Icons, von denen jedes ein oder mehrere Elemente darstellt, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts, und Scroll-Markierungen am unteren Rand](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Hauptmerkmal von Karussells ist die **Paginierung** — die Elemente wirken wie separate Inhalte, zwischen denen man wechselt, anstatt einen zusammenhängenden Inhaltsbereich zu bilden. Sie könnten ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie mit jeder Betätigung der "nächsten" oder "vorherigen" Schaltfläche eine völlig neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Sichtfeld verschoben wird.

Karussells können recht anfällig und herausfordernd zu implementieren sein, insbesondere mit JavaScript. Sie erfordern Skripte, um Scroll-Markierungen mit den Elementen zu verknüpfen, die sie repräsentieren, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, damit sie korrekt funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerelemente hinzugefügt werden.

Zum Glück können wir mit den CSS-Karussell-Funktionen zugängliche Karussells mit zugehörigen Steuerelementen ohne den Einsatz von JavaScript erstellen.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die es ermöglichen, Karussells nur mit CSS und HTML zu erstellen, wobei der Browser den größten Teil des Scrollens und der Verweislinks auf eine zugängliche, flexible und konsistente Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Generiert in einem {{Glossary("scroll_container", "scroll container")}}, repräsentieren diese Pseudoelemente Scroll-Schaltflächen, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Wird innerhalb der Kinder eines Vorfahren eines Scroll-Containers oder in den Spalten eines Scroll-Containers generiert, um deren Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kinder-Elementen oder Spalten zu scrollen, und sie werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers für Layoutzwecke gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um die derzeit aktive Scroll-Markierung auszuwählen. Sie kann verwendet werden, um der derzeit aktiven Markierung einen Hervorhebungsstil zu geben, was wichtig für die Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container darauf eingestellt ist, seinen Inhalt in mehreren Spalten mittels [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) anzuzeigen. Es kann zusammen mit {{cssxref("::scroll-marker")}} verwendet werden, um eine Scroll-Markierung für jede Spalte zu erzeugen.

## Karussell mit einzelnen Seiten

Unser erstes Demo ist ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Markierungen](#erstellung_von_scroll-markierungen) als untere Navigation und [Scroll-Schaltflächen](#erstellung_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scrollen-Schnappen](#einrichten_des_scroll-schnappens_auf_der_liste), um eine klare Paginierung zu erzwingen, und Ankerpositionierung, um [die Scroll-Schaltflächen zu positionieren](#positionierung_von_scroll-schaltflächen) und Scroll-Markierungen relativ zum Karussell zu positionieren.

Das HTML besteht aus einem [Heading-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>`-Kindlistenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters mit einer Breite {{cssxref("width")}} von `100vw` einnimmt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste anzuordnen – indem wir einen {{cssxref("display")}}-Wert von `flex` festlegen, damit die Kindlistenelemente in einer Reihe angezeigt werden (aufgrund des Standardwertes von {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Nun ist es an der Zeit, die Listenelemente zu gestalten. Die ersten Deklarationen bieten eine rudimentäre Gestaltung. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Infolgedessen wird der Inhalt sein Container überlaufen und das Ansichtsfenster horizontal scrollen.

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

Zusätzlich bekommt jedes gerade Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, damit der Scroll-Effekt leichter sichtbar ist.

### Einrichten des Scroll-Schnappens auf der Liste

In diesem Abschnitt werden wir einen Overflow-Wert auf der `<ul>` setzen, um sie in einen {{Glossary("scroll_container", "scroll container")}} zu verwandeln, und dann [CSS scroll snapping](/de/docs/Web/CSS/Guides/Scroll_snap) anwenden, damit die Liste bei jedem Listenelement mittig einrastet, wenn der Inhalt gescrollt wird.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf der `<ul>` gesetzt, sodass ihr Inhalt horizontal innerhalb der Liste scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um auf jede "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird festgelegt, um die Liste in ein {{Glossary("Scroll_snap#scroll_snap_container", "scroll snap container")}} zu verwandeln. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "snap targets")}} des Containers horizontal angeschnappt werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container am Ende einer Scroll-Aktion immer auf ein Snap-Ziel schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Anschließend wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass, wenn die Liste gescrollt wird, sie zum Zentrum jedes Listenelements schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Bildlaufleiste zu scrollen, um den Scroll-Schnapp-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an Ort und Stelle "schnappen".

> [!NOTE]
> CSS scroll snapping ist nicht obligatorisch, um die CSS-Karussell-Funktionen zu nutzen. Allerdings funktionieren Karussells mit Scroll-Schnappen viel besser. Ohne Scroll-Schnappen werden die Scroll-Schaltflächen und Markierungen wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird unterdurchschnittlich sein.

### Erstellung von Scroll-Schaltflächen

In diesem Abschnitt fügen wir der Demo die Scroll-Schaltflächen "vorherige" und "nächste" hinzu, um ein Werkzeug zu bieten, mit dem zwischen den Karussellseiten navigiert werden kann. Dies wird unter Verwendung des {{cssxref("::scroll-button()")}} Pseudoelements erreicht.

Die `::scroll-button()` Pseudoelemente erzeugen Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scrollrichtung durch das Argument des Selektors spezifiziert wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container erzeugen, von denen jede den Inhalt des Containers in Richtung des Starts oder Endes der Block- oder Inline-Achse scrollt.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudoelemente mit Stilen anzusteuern.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Stilen basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturbenutzer zu setzen. Da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt sind, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um es offensichtlicher zu machen, dass mit ihnen interagiert werden kann (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Schaltflächen `:disabled` sind.

Als Nächstes wird ein geeignetes Symbol auf den linken und rechten Scroll-Schaltflächen über die `content`-Eigenschaft gesetzt, was auch die Generierung der Scroll-Schaltflächen verursacht:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien richtig angesagt werden. Zum Beispiel haben die oben genannten Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Positionierung von Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Jetzt werden wir sie relativ zum Karussell mit [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren.

Zunächst wird ein Referenz {{cssxref("anchor-name")}} auf die Liste gesetzt. Dann wird die {{cssxref("position")}} jeder Scroll-Schaltfläche auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}}-Eigenschaft wird auf denselben Referenznamen gesetzt, der in der Liste definiert ist, um die beiden zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um dort tatsächlich jede Scroll-Schaltfläche zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um einen Abstand zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Zum Beispiel wird der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Unter Einbeziehung des Scroll-Schaltflächen-Codes erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die Scroll-Schaltflächen "vorherige" und "nächste" zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Schnappverhalten respektiert wird. Beachten Sie auch, wie die "vorherige" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Beginn des Inhalts gescrollt wird, während die "nächste" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Erstellung von Scroll-Markierungen

Scroll-Markierungen sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position verschiebt, die sich auf eine der Inhaltsseiten bezieht. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Markierungen hinzufügen, die drei Hauptfunktionen umfassen:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf das Element des Scroll-Containers gesetzt. Sie muss auf einen Wert ungleich `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}}-Pseudoelement generiert wird; ihr Wert gibt an, wo die Scroll-Markierungsgruppe in der Tab-Reihenfolge und Layout-Box-Reihenfolge (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` setzt es an den Anfang, vor den Scroll-Schaltflächen, während `after` es am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Markierungen zusammenzufassen, zu enthalten und als ganze Gruppe anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Markierungen. Diese werden innerhalb des Vorfahren's {{cssxref("::scroll-marker-group")}} für Layout-Zwecke gesammelt.

Zuerst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; das bedeutet, es kommt nach den Scroll-Schaltflächen:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Container der Scroll-Markierungsgruppe aus einem vorhandenen Element mit einer Reihe von {{htmlelement("a")}}-Elementen mittels {{cssxref("scroll-target-group")}} erstellt werden.

Als Nächstes wird das `::scroll-marker-group`-Pseudoelement der Liste relativ zum Karussell unter Verwendung der CSS-Ankerpositionierung positioniert, ähnlich derer der Scroll-Schaltfläche, außer dass es horizontal am Karussell mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` zentriert wird. Die Gruppe wird mit Flexbox angeordnet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudoelemente) innerhalb der `::scroll-marker-group` zentriert mit einem Abstand zwischen jedem von ihnen sind.

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

Als Nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Markierungen selbst; sie können genauso wie andere [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Wert ungleich `none` für die `content`-Eigenschaft setzen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Markierungen als umrandete Kreise erscheinen zu lassen:

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
> Generierte Inhalte sind standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, da sie als Flex-Elemente angeordnet werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}}-Pseudoklasse verwendet, um die Scroll-Markierung auszuwählen, die der derzeit sichtbaren "Seite" entspricht, und wie weit der Benutzer durch den betreffenden Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Container der Scroll-Markierungsgruppe auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur zu ihm mit <kbd>Tab</kbd> gehen, dann mit den Pfeiltasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Markierungen und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Markierungen können auch wie erwartet zwischen den Tab-Tasten eingegeben werden.

## Endergebnis des Karussells mit Einzelseiten

Der gesamte oben stehende Code kombiniert ergibt folgendes Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, sodass Sie sehen können, wo Sie sich in der Seitennummerierung befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu wechseln.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Das zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das erneut [Scroll-Schaltflächen](#erstellung_von_scroll-schaltflächen) und [Scroll-Markierungen](#erstellung_von_scroll-markierungen) für die Navigation durch die Seiten enthält. Dieses Demo ist auch responsiv — es erscheinen unterschiedliche Anzahl von Elementen auf jeder Seite, abhängig von der Breite des Ansichtsfensters.

Dieses Demo ist sehr ähnlich wie das [Karussell mit Einzelseiten](#karussell_mit_einzelnen_seiten)-Demo, mit der Ausnahme, dass es anstelle von Flexbox zum Layout [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}}-Pseudoelement verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells einnehmen und möglicherweise mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein teilweise sichtbares Element am Rand des Scrollports angezeigt wird. In diesem Fall werden die Scroll-Markierungen auf Scroll-Container-Fragmenten pro Spalte erstellt, anstatt auf den Kindern pro Element.

Das HTML ist dem des vorherigen Demos sehr ähnlich, mit der Ausnahme, dass es deutlich mehr Listenelemente gibt und, da jetzt mehrere Elemente gleichzeitig sichtbar sind, wir sie als Elemente anstelle von Seiten bezeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliche CSS, mit der Ausnahme der in den folgenden Abschnitten erklärten Regeln.

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

Dieses Beispiel verwendet [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) anstelle von Flexbox, um die Karussellelemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` erzwingt, dass jede Spalte die volle Breite des Containers hat, wobei der Inhalt jeweils eine einzelne Spalte anzeigt. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt mit der Mitte der Liste zu zentrieren.

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

Wir bieten eine grundlegende Box-Gestaltung für die Listenelemente, dann wenden wir Layout-Stile an, um ein oder mehrere Elemente in die einzelne Inhalts-Spalte zu passen, abhängig von der Ansichtsfensterbreite. Die Anzahl ändert sich dynamisch, während die Liste breiter oder schmaler wird.

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

Die wesentlichen Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listenelemente dazu zu zwingen, sich nebeneinander zu setzen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf ihnen gesetzt, um ihre Größe zu steuern, sodass ein oder mehrere in eine Spalte passen, die mit der Breite des Ansichtsfensters wächst und schrumpft.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center` zu überschreiben, das auf den Elterncontainer gesetzt wurde, damit der Elementinhalt linksbündig ausgerichtet ist.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird jetzt auf den {{cssxref("::column")}}-Pseudoelementen gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns`-Eigenschaft generiert werden — anstelle der Listenelemente. Wir möchten auf jede vollständige Spalte schnappen, anstatt jedes einzelne Listenelement, und bei jeder Scroll-Aktion alle neuen Items anzeigen.

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

Das CSS zur Erstellung der Scroll-Markierungen in diesem Demo ist nahezu identisch mit dem im [vorherigen Demo](#erstellung_von_scroll-markierungen), außer dass die Selektoren anders sind — die Scroll-Markierungen werden auf den generierten `::column`-Pseudoelementen statt auf den Listenelementen erstellt. Beachten Sie, dass wir hier zwei Pseudoelemente hinzufügen, um Scroll-Markierungen auf den generierten Spalten zu erzeugen.

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

Das Responsive-Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie zwischen den verschiedenen Seiten zu navigieren, indem Sie links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Markierungen betätigen. Die Funktionalität ist ähnlich dem Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Markierungen werden auf Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändern — und daher auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Markierungen dynamisch, sodass jede Spalte in der Scroll-Markierungsgruppe dargestellt wird.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) auf chrome.dev (2025)
