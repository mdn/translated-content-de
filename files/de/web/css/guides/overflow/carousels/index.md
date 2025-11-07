---
title: Erstellen von CSS-Karussellen
short-title: Karussells erstellen
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karusselle mit vom Browser generierten und vom Entwickler gestalteten Scroll-Schaltflächen und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie Sie ein Karussell mithilfe dieser Funktionen erstellen.

## Karussell-Konzepte

**Karusselle** sind ein übliches Merkmal im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z.B. Präsentationsfolien, Anzeigen, Schlagzeilen oder zentrale Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie auf Navigationsschaltflächen klicken oder wischen. Die Navigation umfasst normalerweise:

- **Scroll-Schaltflächen**
  - : Dies sind im Allgemeinen "zurück" und "weiter"-Schaltflächen oder -Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Icons, von denen jede ein oder mehrere Elemente repräsentiert, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts, und Scroll-Marker unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Schlüsselmerkmal von Karussellen ist die **Paginierung** — die Elemente fühlen sich wie separate Inhaltsstücke an, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Inhalt zu bilden. Sie könnten ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Drücken der "weiter"- oder "zurück"-Schaltfläche eine komplett neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus der Ansicht verschoben wird.

Karusselle können ziemlich brüchig und schwierig mit JavaScript zu implementieren sein. Sie erfordern Skripte, um Scroll-Marker mit den dargestellten Elementen zu verknüpfen und die Scroll-Schaltflächen kontinuierlich zu aktualisieren, damit sie korrekt funktionieren. Wenn Karusselle mit JavaScript erstellt werden, muss die Barrierefreiheit des Karussells und der zugehörigen Steuerelemente zusätzlich implementiert werden.

Glücklicherweise können wir zugängliche Karusselle mit zugehörigen Steuerelementen ohne die Nutzung von JavaScript erstellen, indem wir die CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussellen ausschließlich mit CSS und HTML ermöglichen, wobei der Browser den Großteil des Scrollens und der Linkverweise in einer zugänglichen, flexiblen und konsistenten Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudoelemente Scroll-Schaltflächen, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Werden innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Marker zu repräsentieren. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kindelementen oder Spalten zu scrollen, und werden in der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zur Layout-Zwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudoklasse kann verwendet werden, um den aktuell aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für den aktuell aktiven Marker bereitzustellen, was wichtig für Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudoelement repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container darauf eingestellt ist, seinen Inhalt in mehreren Spalten anzuzeigen, mittels [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout). Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu generieren.

## Karussell mit Einzelseiten

Unser erstes Demo ist ein Karussell mit Einzelseiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#scroll-marker_erstellen) als untere Navigation und [Scroll-Schaltflächen](#scroll-schaltflächen_erstellen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox) zur Layout des Karussells, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten) zur Durchsetzung einer klaren Paginierung und Ankerpositionierung, um [die Scroll-Schaltflächen](#scroll-schaltflächen_positionieren) und Scroll-Marker in Bezug auf das Karussell zu positionieren.

Das HTML besteht aus einem [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so eingestellt, dass sie die volle Breite des Viewports mit einer {{cssxref("width")}} von `100vw` füllt; sie bekommt auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste anzuordnen, indem wir einen {{cssxref("display")}}-Wert von `flex` setzen, damit die Kinder-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts für die {{cssxref("flex-direction")}}-Eigenschaft `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

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

Jetzt ist es Zeit, die Listenelemente zu stylen. Die ersten Erklärungen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überlaufen und der Viewport horizontal scrollen.

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

Zusätzlich erhält jedes gerade Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scroll-Effekt leichter zu erkennen ist.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt werden wir einen Overflow-Wert auf dem `<ul>` setzen, um daraus einen {{Glossary("scroll_container", "Scroll-Container")}} zu machen, und dann [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) anwenden, um die Liste so zu gestalten, dass sie beim Scrollen des Inhalts zur Mitte jedes Listenelements einrastet.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, statt dass der gesamte Viewport scrollt. [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um zu jeder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container zu verwandeln")}}. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das `mandatory`-Schlüsselwort bedeutet, dass der Container immer an einem Snap-Ziel am Ende einer Scroll-Aktion einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass, wenn die Liste gescrollt wird, sie zur Mitte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bislang gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden des Scrollbalkens zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer in Position „einrasten“.

> [!NOTE]
> CSS Scroll Snap ist nicht zwingend erforderlich für die Nutzung der CSS-Karussell-Funktionen. Karusselle funktionieren jedoch viel besser mit Scroll Snap. Ohne Scroll Snap werden die Scroll-Schaltflächen und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird nicht zufriedenstellend sein.

### Scroll-Schaltflächen erstellen

In diesem Abschnitt fügen wir "zurück"- und "weiter"-Scroll-Schaltflächen zum Demo hinzu, um ein Werkzeug zur Navigation zwischen Karussell-Seiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}}-Pseudoelement erreicht.

Die `::scroll-button()`-Pseudoelemente generieren Schaltflächen innerhalb eines Scroll-Containers nur dann, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors angegeben ist. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die den Inhalt des Containers zum Anfang oder Ende der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()`-Pseudoelemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Styling basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturnutzer festzulegen. Außerdem werden Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn in diese Richtung kein weiteres Scrollen möglich ist, daher verwenden wir die {{cssxref(":disabled")}}-Pseudoklasse, um diesen Zustand abzudecken.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird ein passendes Icon auf den linken und rechten Scroll-Schaltflächen über die `content`-Eigenschaft festgelegt, was auch die Generierung der Scroll-Schaltflächen verursacht:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen bekommen automatisch einen passenden zugänglichen Namen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Beispielsweise haben die oben bezeichneten Schaltflächen eine implizierte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Scroll-Schaltflächen positionieren

Wir haben die Scroll-Schaltflächen erstellt. Jetzt werden wir sie relativ zum Karussell mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf der Liste gesetzt. Dann bekommt jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}}-Eigenschaft erhält denselben Referenznamen, der auf der Liste definiert ist, um beide miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall verwenden wir die {{cssxref("calc()")}}-Funktion, um etwas Abstand zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Beispielsweise wird der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts des linken Randes des Karussells positioniert.

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

Mit dem Hinzufügen des Scroll-Schaltflächen-Codes erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherige" und "nächste" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snapping-Verhalten respektiert wird. Beachten Sie auch, wie die "vorherige" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während die "nächste" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Scroll-Marker erstellen

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell an eine Position verschiebt, die mit einer der Inhaltsseiten zusammenhängt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussell-Seiten anzeigt.

In diesem Abschnitt fügen wir dem Karussell Scroll-Marker hinzu, was drei Hauptfunktionen umfasst:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Diese muss auf einen nicht-`none`-Wert gesetzt sein, damit das {{cssxref("::scroll-marker-group")}}-Pseudoelement generiert wird; ihr Wert gibt an, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Schaltflächen, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker als ganze Gruppe zusammenzufassen, zu enthalten und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Marker. Diese werden innerhalb der Vorfahren-{{cssxref("::scroll-marker-group")}} zur Layout-Zwecken gesammelt.

Zunächst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; dadurch kommt es nach den Scroll-Schaltflächen:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element mit einer Reihe von {{htmlelement("a")}}-Elementen mit {{cssxref("scroll-target-group")}} erstellt werden.

Als nächstes wird das `::scroll-marker-group`-Pseudoelement der Liste relativ zum Karussell mit CSS-Ankerpositionierung positioniert, ähnlich wie die Scroll-Schaltflächen, außer dass es horizontal zentriert auf dem Karussell mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` zentriert wird. Die Gruppe wird mit Flexbox angeordnet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudoelemente) innerhalb der `::scroll-marker-group` zentriert werden mit einem Abstand zwischen jedem.

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

Als nächstes kümmern wir uns um das Aussehen und Verhalten der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen nicht-`none`-Wert für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Marker als umrandete Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können unseren Scroll-Markern `width` und `height` zuweisen, weil sie als Flex-Elemente angeordnet werden.

Abschließend für diesen Abschnitt wird die {{cssxref(":target-current")}}-Pseudoklasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und den Fortschritt des Benutzers durch den Inhalt hervorzuheben. In diesem Fall setzen wir die `background-color` auf `black`, damit es als gefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur dorthin navigieren, dann zwischen den verschiedenen "Seiten" mit den Links- und Rechts- (oder Hoch- und Runter-) Cursortasten wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Schaltflächen nach Bedarf ändert. Die Scroll-Marker können auch wie erwartet normal tabbar sein.

## Endergebnis des Einzelseiten-Karussells

Der gesamte obige Code kombiniert sich, um das folgende Ergebnis zu erstellen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorhergehenden Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu wechseln und dann mit den Cursortasten schrittweise durch jede Seite zu gehen.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scrollleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Das zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Schaltflächen](#scroll-schaltflächen_erstellen) und [Scroll-Marker](#scroll-marker_erstellen) zur Navigation durch die Seiten enthält. Dieses Demo ist auch responsiv — es erscheinen unterschiedliche Anzahlen von Elementen auf jeder Seite, abhängig von der Breite des Viewports.

Dieses Demo ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, verwendet jedoch anstelle von Flexbox für das Layout [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}}-Pseudoelement, um willkürliche Spalten zu erzeugen, die die gesamte Breite des Karussells überspannen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn der Viewport größer oder kleiner wird, während die Elementgröße konstant bleibt, niemals ein Teil eines Elements außerhalb des Scrollport angezeigt wird. In diesem Fall werden die Scroll-Marker auf den Scroll-Container-Fragmenten pro Spalte und nicht auf den Kindern pro Element erstellt.

Das HTML ist dem des vorhergehenden Demos sehr ähnlich, mit der Ausnahme, dass es erheblich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, wir sie als Elemente anstelle von Seiten bezeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliche CSS, mit Ausnahme der in den folgenden Abschnitten erläuterten Regeln.

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

Dieses Beispiel verwendet [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout), anstelle von Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` erzwingt, dass jede Spalte die volle Breite des Containers hat, wobei der Inhalt eine einzelne Spalte auf einmal anzeigt. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, wodurch der Inhalt mit der Mitte der Liste ausgerichtet wird.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente an und wenden dann Layout-Stile an, um ein oder mehrere Elemente in der einzigen Inhaltskolumne anzupassen, je nach Breite des Viewports. Die Anzahl ändert sich dynamisch, während die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listenelemente dazu zu bringen, nebeneinander zu sitzen und die Liste horizontal zu scrollen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass eine oder mehrere in eine Spalte passen, die mit der Breite des Viewports wächst und schrumpft.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center` zu überschreiben, das auf den Eltern-Container eingestellt ist, sodass der Inhalt des Elements linksbündig ist.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird jetzt auf die {{cssxref("::column")}}-Pseudoelemente gesetzt — die die von der `columns`-Eigenschaft generierten Inhaltskolumnen darstellen — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte anstelle jedes einzelnen Listenelements snappen und mit jeder Scroll-Aktion alle neuen Elemente anzeigen.

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

Das CSS zum Erstellen der Scroll-Marker in diesem Demo ist nahezu identisch mit dem [vorherigen Demo](#scroll-marker_erstellen), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column`-Pseudoelementen anstelle der Listenelemente erstellt. Beachten Sie, dass wir hier zwei Pseudoelemente einbeziehen, um Scroll-Marker auf den generierten Kolumnen zu erstellen.

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

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scrollleiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Marker drücken. Die Funktionalität ist ähnlich dem Einzelseiten-Flexbox-Beispiel, mit dem Unterschied, dass jetzt mehrere Listenelemente in jeder navigierten Position vorhanden sind; die Scroll-Marker sind auf Spaltenfragmente gesetzt, die möglicherweise mehrere Elemente enthalten, anstelle auf jedes Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden feststellen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und somit auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Marker-Gruppe vertreten ist.

## Siehe auch

- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS-Karussellgalerie](https://chrome.dev/carousel/) über chrome.dev (2025)
