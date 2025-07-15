---
title: Erstellung von CSS-Karussells
short-title: Erstellung von Karussells
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karussells mit vom Browser generierten und vom Entwickler gestalteten Scroll-Buttons und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie man mit diesen Funktionen ein Karussell erstellt.

## Konzepte von Karussells

**Karussells** sind ein häufiges Merkmal im Web. Sie erscheinen typischerweise als scrollbares Inhaltsfeld mit mehreren Elementen, wie Präsentationsfolien, Werbung, aktuelle Nachrichten oder wichtige Produkteigenschaften.

Benutzer können die Elemente durch Klicken oder Aktivieren der Navigationsschaltflächen oder durch Wischen durchblättern. Die Navigation umfasst gewöhnlich:

- **Scroll-Buttons**
  - : Im Allgemeinen "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Symbolen, die jeweils eines oder mehrere Elemente repräsentieren, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorangegangenen und nächsten Schaltflächen links und rechts und Scroll-Markern unten](carousel.png)

Ein wesentliches Merkmal von Karussells ist die **Paginierung** — die Elemente wirken wie separate Inhalte, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Inhalt zu bilden. Sie können ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Drücken der "nächsten" oder "vorherigen" Schaltflächen eine ganz neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein neues Element an einem Ende der Liste hinzufügen, während das am anderen Ende aus dem Blickfeld verschwindet.

Das Erstellen von Karussells mit JavaScript kann ziemlich unstabil und herausfordernd sein. Es erfordert Skripte, um Scroll-Marker mit den Elementen zu verknüpfen, die sie repräsentieren, und gleichzeitig die Scroll-Buttons kontinuierlich zu aktualisieren, um sie korrekt zu betreiben. Wird ein Karussell mit JavaScript erstellt, muss die Barrierefreiheit des Karussells sowie der zugehörigen Steuerungen zusätzlich integriert werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Steuerungen ohne JavaScript erstellen, indem wir die CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die die Erstellung von Karussells nur mit CSS und HTML ermöglichen, wobei der Browser den größten Teil des Scrollens und der Linkreferenzen auf eine zugängliche, flexible und konsistente Weise übernimmt. Diese Funktionen umfassen:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudo-Elemente Scroll-Buttons, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um deren Scroll-Markierungen zu repräsentieren. Diese können ausgewählt werden, um den Container zu den assoziierten Kinder-Elementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zur Layout-Zwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um den aktuell aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um dem derzeit aktiven Marker einen Hervorhebungsstil zu verleihen, was wichtig für Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die individuellen Spalten, die erstellt werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu generieren.

## Karussell mit Einzelseiten

Unser erstes Beispiel ist ein Karussell mit Einzelseiten, bei dem jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Buttons](#erstellen_von_scroll-buttons) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir werden [Flexbox](#karussell-layout_mit_flexbox) verwenden, um das Karussell zu gestalten, [Scroll Snapping](#scroll_snapping_auf_der_liste_einrichten) einrichten, um klare Paginierung zu erzwingen, und Ankerpositionierung verwenden, um die [Scroll-Buttons und Scroll-Marker](#positionierung_von_scroll-buttons) relativ zum Karussell zu positionieren.

Das HTML besteht aus einem [Überschriften-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) um eine einzige Reihe von Elementen zu erstellen; das `<ul>` ist der Flexbox-Container, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste füllt die volle Breite des Viewports mit einer {{cssxref("width")}} von `100vw`; sie erhält auch eine {{cssxref("height")}} von `300px`, und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu gestalten — indem wir einen {{cssxref("display")}} Wert von `flex` setzen, damit die Kinder-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standard-{{cssxref("flex-direction")}} Wertes von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

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

Nun ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Infolgedessen wird der Inhalt seinen Container überlaufen, und der Viewport wird horizontal scrollen.

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

Zusätzlich erhält jedes gerade Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scrolling-Effekt leichter zu erkennen ist.

### Scroll Snapping auf der Liste einrichten

In diesem Abschnitt werden wir einen Overflow-Wert auf das `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste beim Scrollen des Inhalts in der Mitte jedes Listenelements einrasten zu lassen.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, damit sein Inhalt innerhalb der Liste horizontal scrollt, anstatt dass der gesamte Viewport scrollt. [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um auf jede "Seite" einzuschnappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} umzuwandeln. Das `x` Schlüsselwort bewirkt, dass die Scroll-Snap-Ziele des Containers horizontal eingerastet werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion einschnappen wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird auf den Listenelementen ein {{cssxref("scroll-snap-align")}} Wert von `center` gesetzt, sodass sie beim Scrollen der Liste in der Mitte jedes Listenelements einrasten.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code ergibt folgendes Ergebnis:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Bildlaufleiste zu scrollen, um den Scroll-Snapping-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an eine Stelle "einrasten".

> [!NOTE]
> CSS Scroll Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu verwenden. Carousels funktionieren jedoch wesentlich besser mit eingeschlossenem Scroll Snapping. Ohne Scroll Snapping werden die Scroll-Buttons und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird unterdurchschnittlich sein.

### Erstellen von Scroll-Buttons

In diesem Abschnitt fügen wir dem Demo "vorherige" und "nächste" Scroll-Buttons hinzu, um ein Werkzeug zum Navigieren zwischen Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudo-Element erreicht.

Die `::scroll-button()` Pseudo-Elemente generieren Schaltflächen innerhalb eines Scroll-Containers nur dann, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` eingestellt sind. Jedes `::scroll-button()` repräsentiert einen Scroll-Button, dessen Scroll-Richtung durch das Argument des Selektors festgelegt wird. Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung des Anfangs oder des Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente mit Stilen zu versehen.

Zunächst werden alle Scroll-Buttons mit einige rudimentären Stilen versehen, sowie Stilen, die auf verschiedenen Zuständen basieren. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturnutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Buttons, um es offensichtlicher zu gestalten, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und entfernen ihn, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird über die `content` Eigenschaft ein entsprechendes Symbol auf die linke und rechte Scroll-Schaltfläche gesetzt, was auch dazu führt, dass die Scroll-Buttons generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Den Scroll-Buttons wird automatisch ein geeigneter zugänglicher Name zugewiesen, sodass sie von unterstützenden Technologien angemessen angekündigt werden. Beispielsweise haben die obigen Buttons eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind "scroll left" und "scroll right".

### Positionierung von Scroll-Buttons

Wir haben die Scroll-Buttons erstellt. Nun werden wir sie relativ zum Karussell positionieren, indem wir [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Als nächstes wird auf jeden Scroll-Button {{cssxref("position")}} auf `absolute` gesetzt, und seine {{cssxref("position-anchor")}} Eigenschaft auf denselben Referenznamen definiert, der auf die Liste gesetzt wird, um die beiden zu verbinden.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Einfüge-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Platz zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Zum Beispiel wird die rechte Kante der linken Scroll-Schaltfläche 70 Pixel von der linken Rand des Karussells nach rechts positioniert.

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

Mit dem Hinzufügen des Scroll-Button-Codes haben wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherige" und "nächste" Scroll-Buttons zu drücken, um zu sehen, wie die Seiten gescrollt werden und das Scroll-Snapping-Verhalten respektieren. Beachten Sie auch, wie der "vorherige" Button automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während der "nächste" Button automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position scrollt, die sich auf eine der Inhaltsseiten bezieht. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Marker hinzufügen, die drei Hauptfunktionen beinhalten:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf das Scroll-Container-Element gesetzt. Sie muss auf einen nicht-`none` Wert gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird; ihr Wert legt fest, wo die Scroll-Marker-Gruppe in der Tabulator- und Layout-Reihenfolge (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` platziert sie am Anfang, vor den Scroll-Buttons, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudo-Elemente existieren innerhalb der Kinder-Elemente und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Marker. Diese werden innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren zur Layout-Zwecken gesammelt.

Zunächst wird auf die Liste die `scroll-marker-group` Eigenschaft mit dem Wert `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element in der Fokus- und Layout-Box-Reihenfolge nach den DOM-Inhalten der Liste platziert wird; das bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste relativ zum Karussell unter Verwendung der CSS Ankerpositionierung positioniert, ähnlich wie bei den Scroll-Buttons, jedoch dass es horizontal am Karussell mit einem {{cssxref("justify-self")}} Wert von `anchor-center` zentriert wird. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker` Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand dazwischen sind.

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

Als nächstes bearbeiten wir das Aussehen und Gefühl der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen nicht-`none` Wert für die `content` Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Marker als umrissene Kreise darzustellen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, da sie als Flex-Elemente angeordnet werden.

Abschließend für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den jeweils sichtbaren "Seite" entsprechenden Scroll-Marker auszuwählen und zu markieren, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass er als ausgefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Zugänglichkeitsmäßig werden die Scroll-Marker-Gruppe und die darin enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe gelangen, verhält sie sich wie ein einzelnes Element (das heißt, ein weiterer Druck der <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können zwischen den verschiedenen Scroll-Markern mit den linken und rechten (oder oben und unten) Cursor-Tasten wechseln.

## Endergebnis des Einzelseiten-Karussells

Alle obigen Codes kombinieren sich, um das folgende Ergebnis zu erzeugen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, auf sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, damit Sie sehen, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben und dann die Cursortasten zu verwenden, um jede Seite durchzulaufen.

Sie können auch zwischen Seiten wechseln, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das ebenfalls [Scroll-Buttons](#erstellen_von_scroll-buttons) und [Scroll-Marker](#erstellen_von_scroll-markern) zum Navigieren durch die Seiten enthält. Dieses Demo ist auch responsiv — je nach Viewport-Breite erscheinen verschiedene Mengen von Elementen auf jeder Seite.

Dieses Demo ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass es anstelle von Flexbox zur Anordnung [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudo-Element verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells überspannen und möglicherweise mehrere Elemente enthalten.

Mit diesem Ansatz können wir sicherstellen, dass wenn der Viewport größer oder kleiner wird, während die Elementgröße konstant bleibt, nie ein Teil eines Elements außerhalb des scrollbaren Bereichs angezeigt wird. In diesem Fall werden die Scroll-Marker auf den Rollcontainerfragmenten pro Spalte erstellt, anstatt auf den Kindern pro Element.

Das HTML ist dem des vorherigen Demos sehr ähnlich, mit der Ausnahme, dass es erheblich mehr Listenelemente gibt, und da mehrere Elemente gleichzeitig sichtbar sein werden, beschriften wir sie als Elemente statt Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliches CSS, mit der Ausnahme der in den folgenden Abschnitten erklärten Regeln.

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

Dieses Beispiel verwendet das [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte, die volle Breite des Containers zu sein, wobei die Inhalte eine einzige Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, wodurch die Inhalte mit der Mitte der Liste ausgerichtet werden.

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

Wir bieten rudimentäres Boxenstyling für die Listenelemente, dann setzen wir Layout-Stile, damit ein oder mehrere Elemente in die einzelne Content-Spalte passen, je nach Viewport-Breite. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander erscheinen zu lassen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu kontrollieren, wodurch ein oder mehrere in eine Spalte passen, die entlang der Breite des Viewports wächst und schrumpft.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um das `text-align: center` zu überschreiben, das auf den übergeordneten Container gesetzt ist, sodass der Inhalt der Elemente linksbündig ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird jetzt auf den {{cssxref("::column")}} Pseudo-Elementen gesetzt — die die Inhaltsspalten repräsentieren, die von der `columns` Eigenschaft generiert werden — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte anstelle jedes einzelnen Listenelements einrasten, wobei bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden.

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

Das CSS zum Erstellen der Scroll-Marker in diesem Demo ist nahezu identisch mit dem im [vorherigen Demo](#erstellen_von_scroll-markern), außer dass die Selektoren anders sind — die Scroll-Marker werden auf den generierten `::column` Scroll-Markern anstelle der Listenelemente erstellt (beachten Sie, dass wir hier zwei Pseudo-Elemente einbeziehen, um Scroll-Marker auf den generierten Spalten zu erstellen).

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

Das responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Buttons drücken und auf die Scroll-Marker drücken. Die Funktionalität ist ähnlich wie im Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Marker sind an Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in der Liste passen, ändert — und somit auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Markerruppe vertreten ist.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) auf chrome.dev (2025)
