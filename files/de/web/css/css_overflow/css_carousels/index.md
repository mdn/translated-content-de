---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die die Erstellung flexibler und zugänglicher reiner CSS-Karussells mit vom Browser generierten und von Entwicklern gestalteten Scroll-Schaltflächen und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussellkonzepte

**Karussells** sind eine gängige Funktion im Web. Sie haben typischerweise die Form eines scrollenden Inhaltsbereichs, der mehrere Elemente enthält, wie Präsentationsfolien, Anzeigen, Schlagzeilen oder Hauptmerkmale eines Produkts.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen klicken oder aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Schaltflächen**
  - : Im Allgemeinen "zurück" und "weiter" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Icons, die jeweils ein oder mehrere Elemente darstellen, je nachdem, wie viele Elemente in jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherigen und nächsten Schaltflächen links und rechts und Scroll-Markern am unteren Rand](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Schlüsselelement von Karussells ist die **Paginierung** — die Elemente fühlen sich wie separate Inhaltsteile an, zwischen denen gewechselt wird, anstatt eine durchgehende Inhaltssektion zu bilden. Sie können ein Element auf einmal oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie eine völlig neue Gruppe von Elementen jedes Mal anzeigen, wenn die "nächste" oder "vorherige" Schaltfläche gedrückt wird. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld verschoben wird.

Karussells mit JavaScript zu erstellen, kann recht anfällig und kompliziert sein. Sie erfordern Skripte, um Scroll-Marker mit den Elementen zu verknüpfen, die sie darstellen, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, um ihre korrekte Funktion sicherzustellen. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Bedienelemente hinzugefügt werden.

Glücklicherweise können wir mit den CSS-Karussellfunktionen zugängliche Karussells mit zugehörigen Bedienelementen ohne den Einsatz von JavaScript erstellen.

## CSS Karussell-Funktionen

Die CSS-Karussellfunktionen bieten Pseudo-Elemente und Pseudo-Klassen, die die Erstellung von Karussells ausschließlich mit CSS und HTML ermöglichen, wobei der Browser die meisten Scroll- und Linkreferenzen in einer zugänglichen, flexiblen und konsistenten Weise verarbeitet. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Generiert innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}}, stellen diese Pseudo-Elemente Scroll-Schaltflächen dar, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Generiert innerhalb eines Scroll-Containers; wird verwendet, um Scroll-Marker zusammenzufassen und zu layouten.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um ihre Scroll-Marker darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kindelementen oder Spalten zu scrollen, und sind innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zum Layout-Zweck zusammengefasst.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um den derzeit aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um einen hervorgehobenen Stil für den derzeit aktiven Marker bereitzustellen, was für die Benutzerfreundlichkeit und Zugänglichkeit wichtig ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die individuellen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über das [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu generieren.

## Karussell mit Einzelseiten

Unser erstes Demo ist ein Karussell mit Einzelseiten, wobei jedes Element den gesamten Bildschirm einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir werden [flexbox](#karussell-layout_mit_flexbox) verwenden, um das Karussell zu layouten, [Scroll-Snapping](#einrichten_des_scroll-snappings_auf_der_liste), um eine klare Paginierung zu erzwingen und Ankerpositionierung, um die [Scroll-Schaltflächen und Scroll-Marker relativ zum Karussell](#positionierung_der_scroll-schaltflächen) zu positionieren.

Das HTML besteht aus einem [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einen Beispielinhalt enthält:

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so eingestellt, dass sie die volle Breite des Anzeigebereichs mit einer {{cssxref("width")}} von `100vw` ausfüllt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten — indem wir einen {{cssxref("display")}} Wert von `flex` einstellen, sodass die Kind-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Jetzt ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten ein einfaches Styling. Die wichtige Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container zu sein (das `<ul>`). Infolgedessen wird der Inhalt seinen Container überlaufen, und der Anzeigebereich wird horizontal scrollen.

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

Zusätzlich erhält jedes zweite Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, um den Scroll-Effekt leichter sichtbar zu machen.

### Einrichten des Scroll-Snappings auf der Liste

In diesem Abschnitt werden wir einen Overflow-Wert auf das `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann das [CSS Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste so einzurichten, dass sie beim Scrollen auf die Mitte jedes Listenelements springt.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, damit sein Inhalt horizontal innerhalb der Liste scrollt, anstatt dass der gesamte Anzeigebereich scrollt. [CSS Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um auf jede "Seite" zu springen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x` Schlüsselwort sorgt dafür, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal angesprungen werden, während das `mandatory` Schlüsselwort bedeutet, dass der Container immer an einem Snap-Ziel am Ende einer Scroll-Aktion geschnappt wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als Nächstes wird ein {{cssxref("scroll-snap-align")}} Wert von `center` auf die Listenelemente gesetzt, sodass die Liste, wenn sie gescrollt wird, in die Mitte jedes Listenelements springt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste zu scrollen, indem Sie wischen oder die Bildlaufleiste verwenden, um den Scroll-Snapping-Effekt zu sehen. Egal, wo Sie Ihren Scroll-Vorgang beenden, ein Element wird immer in Position "springen".

> [!NOTE]
> CSS-Scroll-Snapping muss nicht zwingend verwendet werden, um die CSS-Karussellfunktionen zu nutzen. Jedoch funktionieren Karussells viel besser, wenn Scroll-Snapping eingebunden ist. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren und das Ergebnis wird suboptimal sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir "zurück"- und "weiter"-Scroll-Schaltflächen zum Demo hinzu, um ein Werkzeug zur Navigation zwischen Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudo-Element erreicht.

Die `::scroll-button()` Pseudo-Elemente generieren Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}} Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Jedes `::scroll-button()` stellt eine Scroll-Schaltfläche dar, wobei die Scroll-Richtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung des Anfangs oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente mit Stilen anzusprechen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Stil basierend auf verschiedenen Zuständen angesprochen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturbenutzer zu setzen. Da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand zu berücksichtigen.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Schaltflächen, um deutlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), den wir zurücksetzen, wenn die Scroll-Schaltflächen `:disabled` sind.

Als Nächstes setzen wir ein geeignetes Icon auf die linke und rechte Scroll-Schaltfläche über die `content`-Eigenschaft, was auch dazu führt, dass die Scroll-Schaltflächen generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Den Scroll-Schaltflächen wird automatisch ein geeigneter zugänglicher Name zugewiesen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Zum Beispiel haben die oben genannten Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} lauten "scroll links" und "scroll rechts", jeweils.

### Positionierung der Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Jetzt werden wir sie relativ zum Karussell positionieren, indem wir [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf der Liste gesetzt. Als Nächstes hat jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt und ihre {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen, der auf die Liste definiert ist, um die beiden zu verbinden.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um die Scroll-Schaltflächen tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen der Kante der Schaltfläche und der Karussellkante hinzuzufügen. Zum Beispiel wird die rechte Kante der linken Scroll-Schaltfläche 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Wenn wir den Scroll-Schaltflächen-Code hinzufügen, erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die Schaltflächen "zurück" und "weiter" zu drücken, um zu sehen, wie die Seiten gescrollt werden, unter Berücksichtigung des Scroll-Snapping Verhaltens. Beachten Sie auch, wie die "zurück" Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Anfang des Inhalts gescrollt wird, während die "weiter" Schaltfläche automatisch deaktiviert wird, wenn die Liste bis zum Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position scrollt, die zu einer der Inhaltsseiten gehört. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Marker hinzufügen, was drei Hauptfunktionen beinhaltet:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Es muss auf einen Wert ungleich `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird; sein Wert gibt an, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` setzt sie am Anfang, vor den Scroll-Schaltflächen, während `after` sie am Ende setzt.
- Das {{cssxref("::scroll-marker-group")}} Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zusammenzufassen und zu layouten.
- {{cssxref("::scroll-marker")}} Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Marker. Diese werden innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren zur Layout-Zwecken gesammelt.

Zuerst wird die `scroll-marker-group` Eigenschaft auf der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Schaltflächen liegt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als Nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste relativ zum Karussell unter Verwendung der CSS-Ankerpositionierung positioniert, ähnlich den Scroll-Schaltflächen, außer dass es horizontal in der Mitte des Karussells mit einem {{cssxref("justify-self")}} Wert von `anchor-center` zentriert ist. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker` Pseudo-Elemente) innerhalb der `::scroll-marker-group` mit einem Abstand zwischen jedem zentriert sind.

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

Als Nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen Wert ungleich `none` für die `content` Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch ein einfaches Styling, um die Marker als umrandete Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente layoutet werden.

Zum Schluss für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um auszuwählen, welcher Scroll-Marker zurzeitig sichtbare "Seite" zugeordnet ist, und hervorzuheben, wie viele Inhalte der Benutzer durchgescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt sind.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf die Zugänglichkeit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe gelangen, verhält es sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd> Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können zwischen den verschiedenen Scroll-Markern mithilfe der Pfeiltasten links und rechts (oder oben und unten) navigieren.

## Endergebnis des Einzel-Seiten-Karussells

Aller obige Code kombiniert sich zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass sichtbar ist, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben und dann die Pfeiltasten zu verwenden, um durch jede Seite zu wechseln.

Sie können auch zwischen Seiten navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Die zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das wiederum [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Marker](#erstellen_von_scroll-markern) zum Navigieren durch die Seiten umfasst. Diese Demo ist auch responsiv — verschiedene Anzahlen an Elementen erscheinen auf jeder Seite, abhängig von der Anzeigebreite.

Diese Demo ist dem [Karussell mit Einzel-Seiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass anstelle von Flexbox für das Layout [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}} Pseudo-Element verwendet werden, um beliebige Spalten zu erstellen, die die volle Breite des Karussells einnehmen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicher sein, dass, wenn der Anzeigebereich wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein teilweise dargestelltes Element am Rand des Scroll-Containers erscheint. In diesem Fall werden die Scroll-Marker an den Splittern des Scroll-Containers erstellt, pro Spalte, anstatt an den Kindern, pro Element.

Das HTML ist dem des vorherigen Demos sehr ähnlich, mit der Ausnahme, dass es erheblich mehr Listenelemente gibt, und da mehrere Elemente gleichzeitig sichtbar sein werden, bezeichnen wir sie als Elemente statt Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliches CSS, mit Ausnahme der in den folgenden Abschnitten erklärten Regeln.

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

Dieses Beispiel verwendet [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), anstatt Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte, die volle Breite des Containers zu haben, wobei die Inhalte eine einzelne Spalte jeder Zeit anzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, der die Inhalte auf das Zentrum der Liste ausrichtet.

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

Wir stellen rudimentäre Box-Styling für die Listenelemente bereit und verwenden dann Layout-Stile, um ein oder mehrere Elemente in die einzelne Inhaltsspalte passen zu lassen, abhängig von der Anzeigebreite. Die Anzahl ändert sich dynamisch, während die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente dazu zu bringen, nebeneinander zu sitzen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde darauf gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass eine oder mehrere in eine Spalte passen, die zusammen mit der Breite des Anzeigebereichs wächst und schrumpft.
- Ein `text-align` Wert von `left` wird darauf gesetzt, um das `text-align: center` des übergeordneten Containers zu überschreiben, sodass der Inhalt des Elements linksbündig dargestellt wird.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird nun auf den {{cssxref("::column")}} Pseudo-Elementen gesetzt — die die Inhaltsspalten darstellen, die durch die `columns` Eigenschaft generiert werden — anstelle der Listenelemente. Wir möchten zu jeder vollständigen Spalte anstelle jedes einzelnen Listenelements springen, um mit jeder Scroll-Aktion neue Elemente anzuzeigen.

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

Das CSS zum Erstellen der Scroll-Marker in diesem Demo ist fast identisch mit dem [vorherigen Demo](#erstellen_von_scroll-markern), außer dass die Selektoren anders sind — die Scroll-Marker werden auf den generierten `::column` Scroll-Markern anstelle der Listenelemente erstellt (beachten Sie, dass wir hier zwei Pseudo-Elemente verwenden, um Scroll-Marker auf den generierten Spalten zu erzeugen).

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

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Schaltflächen oder die Scroll-Markierungen drücken. Die Funktionalität ist ähnlich wie im Einzel-Seiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position vorhanden sind; die Scroll-Marker sind auf Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher ändert sich auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, wird die Anzahl der Scroll-Marker dynamisch aktualisiert, sodass jede Spalte in der Scroll-Marker-Gruppe repräsentiert wird.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
