---
title: Erstellen von CSS-Karussells
short-title: Erstellen von Karussells
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

Das [CSS Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die es ermöglichen, flexible und zugängliche Karussells nur mit CSS zu erstellen, mit vom Browser generierten und von Entwicklern gestalteten Scroll-Buttons und Scroll-Markern. Dieser Leitfaden erklärt, wie Sie ein Karussell mit diesen Funktionen erstellen können.

## Karussellkonzepte

**Karussells** sind ein übliches Feature im Web. Sie nehmen typischerweise die Form eines scrollenden Inhaltsbereichs an, der mehrere Elemente enthält, wie Präsentationsfolien, Anzeigen, Schlagzeilen-Nachrichten oder Schlüsselproduktmerkmale.

Benutzer können durch die Elemente navigieren, indem sie navigierende Schaltflächen anklicken oder aktivieren oder durch Wischen. Die Navigation beinhaltet normalerweise:

- **Scroll-Buttons**
  - : Allgemein bestehen sie aus „Vorherigen“ und „Nächsten“ Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Icons, die jeweils ein oder mehrere Elemente darstellen, abhängig davon, wie viele Elemente an jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherigen und nächsten Buttons links und rechts und Scroll-Markern unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wichtiges Merkmal von Karussells ist die **Seitennummerierung** — die Elemente wirken wie separate Inhaltsteile, die bewegt werden, anstatt eine kontinuierliche Inhaltssektion zu bilden. Sie könnten ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Druck auf die Schaltfläche „Weiter“ oder „Zurück“ eine völlig neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen und das andere Element aus dem Blickfeld verschieben.

Karussells mit JavaScript zu erstellen, kann ziemlich brüchig und herausfordernd in der Implementierung sein. Sie erfordern Skripte, um Scroll-Marker mit den von ihnen dargestellten Elementen zu assoziieren, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, damit sie korrekt funktionieren. Wenn Karussells mit JavaScript erstellt werden, muss ihre Zugänglichkeit und die der zugehörigen Kontrollen zusätzlich eingebaut werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Steuerungen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussellfunktionen verwenden.

## CSS-Karussellfunktionen

Die CSS-Karussellfunktionen bieten Pseudo-Elemente und Pseudo-Klassen, die die Erstellung von Karussells ausschließlich mit CSS und HTML ermöglichen, wobei der Browser den Großteil der Scroll- und Link-Referenzen auf eine zugängliche, flexible und konsistente Weise behandelt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, stellen diese Pseudo-Elemente Scroll-Buttons dar, die den Container in eine festgelegte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; dient zum Sammeln und Anordnen von Scroll-Markern.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Vorfahren-Scroll-Containers oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Marker darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugeordneten Kindelementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zur Layout-Zwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um den derzeit aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um dem aktuell aktiven Marker ein Hervorhebungsstil zu geben, was wichtig für Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element stellt die einzelnen Spalten dar, die generiert werden, wenn ein Container auf die Darstellung seines Inhalts in mehreren Spalten durch [CSS mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) eingestellt ist. Es kann zusammen mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu generieren.

## Karussell mit einzelnen Seiten

Unser erstes Beispiel ist ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als Navigationsschaltflächen unten und [Scroll-Buttons](#erstellen_von_scroll-buttons) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu navigieren.

Wir werden [Flexbox](#karusselllayout_mit_flexbox) verwenden, um das Karussell zu gestalten, [Scroll-Snapping](#einrichten_von_scroll-snapping_in_der_liste) einrichten, um eine klare Seitennummerierung zu erzielen, und die Positionierung von Ankern verwenden, um die [Position der Scroll-Buttons](#positionierung_von_scroll-buttons) und Scroll-Marker relativ zum Karussell festzulegen.

Das HTML besteht aus einem [Überschrift-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Zeile von Elementen zu erstellen; das `<ul>` ist der Flex-Container und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird auf die volle Breite des Ansichtsfensters eingestellt, mit einer {{cssxref("width")}} von `100vw`; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu gestalten — setzen einen {{cssxref("display")}}-Wert von `flex`, um die Kind-Listenelemente in einer Zeile anzuzeigen (aufgrund des Standardwerts von {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

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

Nun ist es Zeit, die Listenelemente zu gestalten. Die ersten Deklarationen bieten rudimentäre Stilvorgaben. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Daher wird der Inhalt seinen Container überlaufen und das Ansichtsfenster wird horizontal scrollen.

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

Darüber hinaus erhält jedes zweite Listenelement einen anderen Hintergrund über {{cssxref(":nth-child()")}}, sodass der Scrolleffekt leichter erkennbar ist.

### Einrichten von Scroll-Snapping in der Liste

In diesem Abschnitt legen wir einen Überlaufwert auf das `<ul>` fest, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und wenden [CSS Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) an, um die Liste beim Scrollen des Inhalts in die Mitte jedes Listenelements einrasten zu lassen.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt innerhalb der Liste horizontal scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder „Seite“ einzurasten — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass, wenn die Liste gescrollt wird, es in die Mitte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Bildlaufleiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer „einrasten“.

> [!NOTE]
> CSS Scroll Snapping ist nicht zwingend erforderlich, um die CSS-Karussellfunktionen zu nutzen. Allerdings funktionieren Karussells viel besser mit einbezogenem Scroll Snapping. Ohne Scroll Snapping werden die Scroll-Buttons und Marker wahrscheinlich nicht sauber zwischen Seiten navigieren, und das Ergebnis wird unterdurchschnittlich sein.

### Erstellen von Scroll-Buttons

In diesem Abschnitt fügen wir „Vorherigen“ und „Nächsten“ Scroll-Buttons zum Beispiel hinzu, um ein Werkzeug zur Navigation zwischen den Karussellseiten bereitzustellen. Dies wird unter Verwendung des {{cssxref("::scroll-button()")}} Pseudo-Elements erreicht.

Die `::scroll-button()` Pseudo-Elemente erzeugen Buttons innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` stellt einen Scroll-Button dar, dessen Scroll-Richtung durch das Argument des Selektors festgelegt ist. Sie können pro Scroll-Container bis zu vier Scroll-Buttons generieren, die jeweils den Inhalt des Containers in Richtung des Anfangs oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente mit Stilen adressieren.

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen adressiert, sowie Stile basierend auf verschiedenen Zuständen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in diese Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf den Scroll-Buttons, um es offensichtlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für das allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein passendes Icon auf den linken und rechten Scroll-Buttons über die `content` Eigenschaft gesetzt, was auch dazu führt, dass die Scroll-Buttons generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Buttons erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Zum Beispiel haben die obigen Buttons eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} sind „nach links scrollen“ und „nach rechts scrollen“.

### Positionierung von Scroll-Buttons

Wir haben die Scroll-Buttons erstellt. Jetzt werden wir sie relativ zum Karussell positionieren, indem wir [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuerst wird eine {{cssxref("anchor-name")}} Referenz auf der Liste festgelegt. Als nächstes wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` gesetzt und dessen {{cssxref("position-anchor")}}-Eigenschaft auf dasselbe Referenzname gesetzt, der auf der Liste definiert ist, um die beiden miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um die Scroll-Buttons tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. Dabei wird jeweils die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen dem Buttonrand und dem Karussellrand hinzuzufügen. Beispielsweise wird der rechte Rand des linken Scroll-Buttons 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Durch Hinzufügen des Scroll-Button-Codes erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die „Vorherigen“ und „Nächsten“ Scroll-Buttons zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snap-Verhalten berücksichtigt wird. Beachten Sie auch, wie der "Vorherige" Button automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während der „Nächste“ Button automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position scrollt, die mit einer der Inhaltsseiten zusammenhängt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseite anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Marker hinzufügen, wozu drei Hauptfunktionen gehören:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf das Element des Scroll-Containers gesetzt. Sie muss auf einen anderen Wert als `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird; sein Wert gibt an, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und Layout-Box-Reihenfolge (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` platziert es am Anfang, vor den Scroll-Buttons, während `after` es am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und stellen ihre Scroll-Marker dar. Diese werden innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren zur Layout-Zwecken gesammelt.

Zunächst wird die `scroll-marker-group` Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; das bedeutet, es erscheint nach den Scroll-Buttons:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste relativ zum Karussell mit CSS-Anker-Positionierung positioniert, ähnlich wie die Scroll-Buttons, außer dass es horizontal auf dem Karussell zentriert wird, indem ein {{cssxref("justify-self")}}-Wert von `anchor-center` verwendet wird. Die Gruppe wird mit Flexbox gestaltet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass die Kinder (die `::scroll-marker`-Pseudo-Elemente) innerhalb des `::scroll-marker-group` in der Mitte mit einem Abstand dazwischen sind.

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

Als nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Marker selbst; sie können wie jedes andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen anderen Wert als `none` für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Marker als umrissene Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unseren Scroll-Markern anwenden, weil sie als Flex-Elemente gestaltet werden.

Abschließend für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren „Seite“ entspricht, und zeigt an, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf Zugänglichkeit werden die Scroll-Marker-Gruppe und die darin enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik wiedergegeben. Wenn Sie mit der Tastatur auf die Gruppe <kbd>Tab</kbd> drücken, verhält sie sich wie ein einzelnes Element (das heißt, ein erneutes Drücken der <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können mit den Pfeiltasten nach links und rechts (oder oben und unten) zwischen den verschiedenen Scroll-Markern wechseln.

## Endergebnis des Karussells auf einer einzigen Seite

Alle obigen Codes kombinieren sich zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, damit Sie sehen können, wo Sie sich in der Seitennummerierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu wechseln, und verwenden Sie dann die Pfeiltasten, um jede Seite durchzugehen.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das wiederum [Scroll-Buttons](#erstellen_von_scroll-buttons) und [Scroll-Marker](#erstellen_von_scroll-markern) zur Navigation durch die Seiten enthält. Dieses Beispiel ist auch responsiv — je nach Ansichtsfensterbreite erscheinen unterschiedlich viele Elemente auf jeder Seite.

Dieses Beispiel ist dem [Karussell mit einzelnen Seiten](#karussell_mit_einzelnen_seiten) sehr ähnlich, außer dass es anstelle von Flexbox für das Layout [CSS mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudo-Element verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells überspannen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicher sein, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein unvollständiges Element am Rand des Scrollports angezeigt wird. In diesem Fall werden die Scroll-Marker auf Scroll-Containern erstellt und vertreten jeweils eine Spalte statt ein einzelnes Element.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es wesentlich mehr Listenelemente gibt. Da mehrere Elemente gleichzeitig sichtbar sein werden, bezeichnen wir sie als Elemente anstelle von Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Beispiel hat auch sehr ähnliche CSS-Regeln, mit Ausnahme der Regeln, die in den folgenden Abschnitten erklärt werden.

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

### Karusselllayout mit Spalten

Dieses Beispiel verwendet [CSS mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox zum Erstellen von Karussell-Elementen. Der {{cssxref("columns")}}-Wert von `1` zwingt jede Spalte, die volle Breite des Containers zu haben, mit den Inhalten, die eine einzelne Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, wodurch die Inhalte in der Mitte der Liste ausgerichtet werden.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente, dann wenden wir Layout-Stile an, die es ermöglichen, dass ein oder mehrere Elemente in die einzelne Inhalts-Spalte passen, abhängig von der Ansichtsfensterbreite. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde gesetzt, um die Listelemente nebeneinander zu bringen und die Liste horizontal scrollbar zu machen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu steuern, was bedeutet, dass ein oder mehrere in eine Spalte passen, die wächst und schrumpft, je nach Breite des Ansichtsfensters.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center` der übergeordneten Container zu überschreiben, sodass der Artikelinhalt linksbündig wird.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft ist nun auf den {{cssxref("::column")}}-Pseudo-Elementen gesetzt — die die Inhaltsspalten darstellen, die durch die Eigenschaft `columns` generiert werden — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte einrasten anstatt zu jedem einzelnen Listenelement, wobei bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden sollen.

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

Das CSS zum Erstellen der Scroll-Marker in diesem Beispiel ist nahezu identisch mit dem der [vorherigen Demo](#erstellen_von_scroll-markern), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column`-Scroll-Markern und nicht auf den Listenelementen erstellt (beachten Sie, wie wir hier zwei Pseudo-Elemente einbeziehen, um Scroll-Marker auf den generierten Spalten zu erstellen).

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

## Responsives Karussell Endergebnis

Das responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Buttons drücken und die Scroll-Marker drücken. Die Funktionalität ist ähnlich dem Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente an jeder navigierten Position sind; die Scroll-Marker sind auf Spaltenfragmenten gesetzt, die potenziell mehrere Elemente enthalten können, anstatt auf jedem einzelnen Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher ändert sich auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, aktualisieren sich die Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Marker-Gruppe vertreten ist.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
