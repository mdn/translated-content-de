---
title: Erstellen von CSS-Carousels
short-title: Erstellen von Carousels
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die die Erstellung von flexiblen und barrierefreien reinen CSS-Carousels mit von Browser generierten und von Entwicklern gestalteten Scroll-Schaltflächen und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie Sie ein Carousel mit diesen Funktionen erstellen können.

## Konzept von Carousels

**Carousels** sind ein häufiges Merkmal im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z. B. Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können sich durch die Elemente bewegen, indem sie Navigationsschaltflächen anklicken oder aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Schaltflächen**
  - : In der Regel "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Link-Symbolen, die jeweils ein oder mehrere Elemente darstellen, abhängig davon, wie viele Elemente an jeder Scroll-Position im Carousel angezeigt werden.

![Ein Carousel mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts, und Scroll-Marker unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wesentliches Merkmal von Carousels ist die **Paginierung** — die Elemente wirken wie separate Inhaltsstücke, zwischen denen gewechselt wird, anstatt ein kontinuierlicher Inhaltsabschnitt zu sein. Sie könnten ein Element gleichzeitig oder mehrere Elemente auf jeder Carousel-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie bei jedem Drücken der "nächsten" oder "vorherigen" Schaltfläche eine völlig neue Gruppe von Elementen anzeigen. Alternativ könnten Sie jeweils ein neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Sichtbereich verschwindet.

Carousels mit JavaScript zu erstellen, kann ziemlich empfindlich und herausfordernd sein. Sie erfordern Skripte, um Scroll-Marker mit den von ihnen dargestellten Elementen zu verknüpfen und die Scroll-Schaltflächen kontinuierlich zu aktualisieren, damit sie korrekt funktionieren. Wenn Carousels mit JavaScript erstellt werden, muss die Barrierefreiheit des Carousels und der zugehörigen Steuerelemente hinzugefügt werden.

Glücklicherweise können wir barrierefreie Carousels mit zugehörigen Steuerelementen ohne die Verwendung von JavaScript erstellen, indem wir die CSS-Carousel-Funktionen nutzen.

## CSS Carousel-Funktionen

Die CSS Carousel-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die die Erstellung von Carousels nur mit CSS und HTML ermöglichen, wobei der Browser den größten Teil des Scrollens und der Linkreferenzen auf eine barrierefreie, flexible und konsistente Weise übernimmt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudo-Elemente Scroll-Schaltflächen, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; dient zum Sammeln und Anordnen von Scroll-Markern.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Vorfahren-Scroll-Containers oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Marker darzustellen. Diese können ausgewählt werden, um den Container zu seinen assoziierten Kinderelementen oder Spalten zu scrollen, und werden zur Layout-Zwecken innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um den aktuell aktiven Scroll-Marker auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für den aktuell aktiven Marker bereitzustellen, was wichtig für Benutzerfreundlichkeit und Barrierefreiheit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container auf die Anzeige seines Inhalts in mehreren Spalten über das [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) eingestellt ist. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um für jede Spalte einen Scroll-Marker zu generieren.

## Carousel mit Einzelseiten

Unser erstes Beispiel ist ein Carousel aus Einzelseiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu navigieren.

Wir werden [Flexbox](#carousel-layout_mit_flexbox) verwenden, um das Carousel zu gestalten, [Scroll-Snapping](#einrichten_des_scroll-snapping_auf_der_liste), um eine klare Paginierung durchzusetzen, und Ankerpositionierung, um die Scroll-Schaltflächen und Scroll-Marker relativ zum Carousel zu positionieren.

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

### Carousel-Layout mit Flexbox

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>` Kindelemente der Liste werden horizontal angezeigt, wobei jedes Element die volle Breite des Carousels einnimmt.

Die ungeordnete Liste ist so gestaltet, dass sie die volle Breite des Ansichtsfensters mit einer Breite von `100vw` einnimmt; es wird auch eine {{cssxref("height")}} von `300px` und ein {{cssxref("padding")}} hinzugefügt. Dann verwenden wir Flexbox, um die Liste zu gestalten — durch Festlegen eines {{cssxref("display")}}-Werts von `flex`, damit die Kind-Listenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts von `row` für {{cssxref("flex-direction")}}), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem einzelnen.

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

Nun ist es an der Zeit, die Listenelemente zu gestalten. Die ersten Deklarationen bieten rudimentäre Stile. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Infolgedessen wird der Inhalt seinen Container überlaufen, und das Ansichtsfenster wird horizontal scrollen.

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

Zusätzlich wird jedem geradzahligen Listenelement über {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe zugewiesen, sodass der Scroll-Effekt leichter zu erkennen ist.

### Einrichten des Scroll-Snapping auf der Liste

In diesem Abschnitt setzen wir einen Überlauf-Wert auf das `<ul>`, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und wenden dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) an, um die Liste beim Scrollen des Inhalts in die Mitte jedes Listenelements schnappen zu lassen.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, damit dessen Inhalt horizontal innerhalb der Liste scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Die `x`-Option führt dazu, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während die Option `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass beim Scrollen der Liste diese in die Mitte jedes Listenelements schnappen.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder mit der Bildlaufleiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an Ort und Stelle "schnappen".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht obligatorisch, um die CSS-Carousel-Funktionen zu nutzen. Allerdings funktionieren Carousels viel besser mit eingeschlossenem Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird minderwertig sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir dem Beispiel "Vorherige" und "Nächste" Scroll-Schaltflächen hinzu, um ein Werkzeug bereitzustellen, mit dem zwischen den Carousel-Seiten navigiert werden kann. Dies wird erreicht, indem das {{cssxref("::scroll-button()")}}-Pseudo-Element verwendet wird.

Die `::scroll-button()`-Pseudo-Elemente generieren Schaltflächen innerhalb eines Scroll-Containers nur, wenn deren {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors spezifiziert ist. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers zum Anfang oder Ende der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument `*` angeben, um alle `::scroll-button()`-Pseudo-Elemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Schaltflächen mit einigen rudimentären Stilen sowie Styling basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer festzulegen. Da Scroll-Schaltflächen jedoch automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiterer Bildlauf in dieser Richtung mehr möglich ist, verwenden wir die {{cssxref(":disabled")}}-Pseudo-Klasse, um diesen Zustand zu adressieren.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um es offensichtlicher zu machen, dass sie interagiert werden können (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und heben ihn auf, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird auf den linken und rechten Scroll-Schaltflächen über die `content`-Eigenschaft ein entsprechendes Symbol gesetzt, was auch dazu führt, dass die Scroll-Schaltflächen generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen werden automatisch mit einem passenden barrierefreien Namen versehen, sodass sie von unterstützenden Technologien korrekt angesagt werden. Zum Beispiel haben die obigen Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button`, und ihre {{Glossary("accessible_name", "barrierefreien Namen")}} sind "scroll left" und "scroll right".

### Positionierung von Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Jetzt werden wir sie relativ zum Carousel positionieren, indem wir [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwenden.

Zunächst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Danach wird die {{cssxref("position")}} jeder Scroll-Schaltfläche auf `absolute` gesetzt, und deren {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen, der auf der Liste definiert ist, um die beiden miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um tatsächlich jede Scroll-Schaltfläche zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Carousels zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen dem Rand der Schaltfläche und dem Rand des Carousels hinzuzufügen. Beispielsweise wird der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Carousels positioniert.

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

Indem wir den Scroll-Schaltflächen-Code hinzufügen, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die Schaltflächen "vorherige" und "nächste" zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei das Scroll-Snapping-Verhalten respektiert wird. Beachten Sie auch, wie die Schaltfläche "vorherige" automatisch deaktiviert wird, wenn die Liste an den Anfang des Inhalts gescrollt wird, während die Schaltfläche "nächste" automatisch deaktiviert wird, wenn die Liste an das Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Schaltflächen, von denen jede das Carousel an eine Position im Zusammenhang mit einer der Inhaltsseiten scrollt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Carousel-Seiten anzeigt.

In diesem Abschnitt werden wir dem Carousel Scroll-Marker hinzufügen, was drei Hauptmerkmale beinhaltet:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Sie muss auf einen anderen als `none` gesetzten Wert gesetzt werden, damit das {{cssxref("::scroll-marker-group")}}-Pseudo-Element generiert wird; deren Wert gibt an, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Carousels erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Schaltflächen, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudo-Elemente existieren innerhalb der Kinder- und {{cssxref("::column")}}-Fragmente eines Vorfahren-Scroll-Containers und repräsentieren deren Scroll-Marker. Diese werden zur Layout-Zwecken innerhalb der {{cssxref("::scroll-marker-group")}}-des Vorfahren gesammelt.

Zunächst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudo-Element in der Fokus- und Layout-Box-Reihenfolge nach dem DOM-Inhalt der Liste platziert wird; dies bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als Nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste relativ zum Carousel unter Verwendung der CSS-Ankerpositionierung positioniert, ähnlich wie bei der Scroll-Schaltfläche, außer dass es horizontal auf dem Carousel mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` zentriert wird. Die Gruppe wird mit Flexbox angeordnet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einer Lücke zwischen jedem sind.

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

Als nächstes kümmern wir uns um das Aussehen und die Haptik der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen anderen als `none` eingestellten Wert für die `content`-Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige rudimentäre Stile, um die Marker als umrissene Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente ausgelegt werden.

Schließlich wird für diesen Abschnitt die {{cssxref(":target-current")}}-Pseudo-Klasse verwendet, um auszuwählen, welcher Scroll-Marker der aktuell sichtbaren "Seite" entspricht, und anzeigt, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Aus Barrierefreiheitsgründen wird die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe mit <kbd>Tab</kbd> wechseln, verhält es sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste wird an der Gruppe vorbei zum nächsten Element führen), und Sie können mit den Pfeiltasten der linken und rechten (oder nach oben und unten) zwischen den verschiedenen Scroll-Markern wechseln.

## Endergebnis des Carousels mit Einzelseiten

Der gesamte obige Code ergibt folgendes Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, dass der aktuelle Marker hervorgehoben ist, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu blättern.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Carousel: Mehrere Elemente pro Seite

Das zweite Beispiel ist ein Carousel mit mehreren Elementen pro Seite, das wiederum [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Marker](#erstellen_von_scroll-markern) zur Navigation durch die Seiten enthält. Dieses Beispiel ist auch responsiv — je nach Ansichtsfensterbreite erscheinen unterschiedliche Mengen an Elementen auf jeder Seite.

Dieses Beispiel ähnelt dem Beispiel [Carousel mit Einzelseiten](#carousel_mit_einzelseiten) sehr, außer dass es statt Flexbox für das Layout [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}}-Pseudo-Element verwendet, um willkürliche Spalten zu erstellen, die die volle Breite des Carousels einnehmen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicher sein, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, nie ein teilweise angezeigtes Element über den Rand des Scroll-Ports hinausragt. In diesem Fall werden die Scroll-Marker auf den durch Spalten generierten Scroll-Container/Fragmenten erstellt, nicht auf den Kinder-Elementen.

Das HTML ist sehr ähnlich zu dem des vorherigen Beispiels, außer dass es erheblich mehr Listenelemente gibt, und da mehrere Elemente gleichzeitig sichtbar sein werden, bezeichnen wir diese als Elemente statt Seiten:

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

### Carousel-Layout mit Spalten

Dieses Beispiel verwendet das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anstelle von Flexbox, um die Carousel-Elemente anzuordnen. Der {{cssxref("columns")}}-Wert von `1` erzwingt, dass jede Spalte die volle Breite des Containers hat, wobei die Inhalte immer nur eine Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, was die Inhalte mit der Mitte der Liste ausrichtet.

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

Wir bieten rudimentäre Box-Styling für die Listenelemente, dann wenden wir Layout-Stile an, die es erlauben, dass eines oder mehrere Elemente dynamisch je nach Ansichtsfensterbreite in die einzelne Inhaltsspalte passen. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde festgelegt, um die Listenelemente nebeneinander anzuordnen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass sich in einer Spalte, die zusammen mit der Breite des Ansichtsfensters wächst und schrumpft, eines oder mehreres passt.
- Ein `text-align`-Wert von `left` ist auf ihnen gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt ist, außer Kraft zu setzen, sodass der Inhalt der Elemente linksbündig ausgeführt wird.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird jetzt auf die {{cssxref("::column")}}-Pseudo-Elemente gesetzt — die die Inhaltsspalten darstellen, die durch die `columns`-Eigenschaft generiert werden — statt auf die Listenelemente. Wir möchten zu jeder vollständigen Spalte schnappen, anstatt zu jedem einzelnen Listenelement, wodurch bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden.

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

Das CSS für die Erstellung der Scroll-Marker in diesem Beispiel ist fast identisch mit dem des [vorherigen Beispiel](#erstellen_von_scroll-markern), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column`-Scroll-Markern und nicht auf den Listenelementen erstellt (beachten Sie, wie wir hier zwei Pseudo-Elemente einfügen, um Scroll-Marker auf den generierten Spalten zu erstellen).

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

## Endergebnis des responsiven Carousels

Das Responsive Carousel wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, den Scroll-Balken verwenden, die Scroll-Schaltflächen drücken und die Scroll-Marker drücken. Die Funktionalität ist ähnlich der des Einseiten-Flexbox-Beispiels, außer dass sich jetzt mehrere Listenelemente in jeder navigierten Position befinden; die Scroll-Marker sind auf Spaltenfragmenten gesetzt, die potenziell mehrere Elemente enthalten, statt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Marker-Gruppe dargestellt wird.

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
