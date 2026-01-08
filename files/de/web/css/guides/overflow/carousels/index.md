---
title: Erstellen von CSS-Karussells
short-title: Erstellen von Karussells
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 8bc7e01da04509fae8264e26bfd456166832a62e
---

Das [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul definiert Funktionen, die die Erstellung von flexiblen reinen CSS-Karussells ermöglichen, mit durch den Browser generierten und vom Entwickler gestalteten Scroll-Buttons und Scroll-Markern. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussell-Konzepte

**Karussells** sind ein gängiges Feature im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z.B. Präsentationsfolien, Anzeigen, Schlagzeilennachrichten oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen anklicken oder aktivieren oder durch Streichen. Die Navigation beinhaltet in der Regel:

- **Scroll-Buttons**
  - : In der Regel "vorherige" und "nächste" Tasten oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Schaltflächen- oder Linksymbolen, die jeweils ein oder mehrere Elemente darstellen, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherigen und nächsten Tasten links und rechts und Scroll-Markern unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wesentliches Merkmal von Karussells ist die **Seitennummerierung** — die Elemente fühlen sich wie separate Inhalte an, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Inhaltsabschnitt zu bilden. Sie könnten ein Element nach dem anderen anzeigen oder mehrere Elemente auf jeder Karussell-"Seite". Wenn mehrere Elemente sichtbar sind, könnten Sie jedes Mal, wenn die "nächste" oder "vorherige" Taste gedrückt wird, eine völlig neue Gruppe von Elementen anzeigen. Alternativ könnten Sie ein neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld bewegt wird.

Karussells können mit JavaScript recht störanfällig und herausfordernd zu implementieren sein. Sie erfordern Skripte, um Scroll-Marker mit den Elementen zu verknüpfen, die sie darstellen, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, um ordnungsgemäß zu funktionieren.

Glücklicherweise können wir Karussells mit zugehörigen Steuerelementen ohne JavaScript erstellen, indem wir CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussells nur mit CSS und HTML ermöglichen, wobei der Browser den Großteil des Scrollens und der Linkreferenzen auf flexible und konsistente Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Generiert innerhalb eines {{Glossary("scroll_container", "scroll containers")}}, diese Pseudoelemente repräsentieren Scroll-Buttons, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Generiert innerhalb eines Scroll-Containers; verwendet, um Scroll-Marker zu sammeln und zu layouten.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um deren Scroll-Marker zu repräsentieren. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kinderelementen oder Spalten zu scrollen, und werden innerhalb des Scroll-Containers {{cssxref("::scroll-marker-group")}} zu Layout-Zwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Wird verwendet, um den aktuell aktiven Scroll-Marker auszuwählen und zu stylen. Die Fähigkeit, den aktiven Scroll-Markern zu stylen, ist sowohl für die Benutzbarkeit als auch für die Zugänglichkeit wichtig.
- {{cssxref(":target-before")}} und {{cssxref(":target-after")}}
  - : Wird verwendet, um Scroll-Marker vor und nach dem aktuell aktiven Scroll-Marker auszuwählen und zu stylen. Sie sind nützlich, um Navigationsobjekte zu stylen, die vor und nach der aktiven Navigationsposition kommen, und zeigen an, welche Elemente der Benutzer bereits gesehen hat und welche noch kommen werden.
- {{cssxref("::column")}}
  - : Repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container seine Inhalte in mehreren Spalten über das [CSS Multicol Layout](/de/docs/Web/CSS/Guides/Multicol_layout) anzeigt. Das `::column` Pseudoelement kann zusammen mit {{cssxref("::scroll-marker")}} verwendet werden, um für jede Spalte einen Scroll-Marker zu generieren.

## Karussell mit Einzelseiten

Unser erstes Beispiel ist ein Karussell mit Einzelseiten, wobei jedes Element die volle Seite einnimmt. Wir haben [Scroll-Marker](#erstellen_von_scroll-markern) als untere Navigation und [Scroll-Buttons](#erstellen_von_scroll-buttons) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten), um eine klare Paginierung zu erzwingen, und Ankerpositionierung, um [die Scroll-Buttons zu positionieren](#scroll-buttons_positionieren) und Scroll-Marker relativ zum Karussell.

Das HTML besteht aus einem [Heading Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters ausfüllt, mit einer {{cssxref("width")}} von `100vw`; sie erhält auch eine {{cssxref("height")}} von `300px` sowie etwas {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten — indem wir einen {{cssxref("display")}} Wert von `flex` setzen, damit die Kind-Listenelemente sich in einer Reihe anordnen (aufgrund des standardmäßigen {{cssxref("flex-direction")}} Wertes von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Jetzt ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten grundlegende Stile. Die wichtige Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überfüllen, und das Ansichtsfenster wird horizontal scrollen.

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

Zusätzlich erhält jedes gerade Listenelement über {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe, damit der Scrolleffekt leichter zu erkennen ist.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt werden wir einen Overflow-Wert auf das `<ul>` einstellen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, dann CSS-Scroll-Snapping anwenden, um die Liste in die Mitte jedes Listenelements zu schnappen, wenn der Inhalt gescrollt wird.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, so dass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt dass das gesamte Ansichtsfenster scrollt. [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen - ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x` Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal angeschnappt werden, während das `mandatory` Schlüsselwort bedeutet, dass der Container bei jedem Ende eines Scrollvorgangs immer an einem Snap-Ziel anschnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}} Wert von `center` auf den Listenelementen gesetzt, so dass die Liste, wenn sie gescrollt wird, in die Mitte jedes Listenelements schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder mit der Scrollleiste zu scrollen, um den Scroll-Snapping-Effekt zu sehen. Egal, wo Sie Ihre Scrollbewegung beenden, ein Element wird immer "einrasten".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht unbedingt erforderlich, um die CSS-Karussell-Funktionen zu verwenden. Karussells funktionieren jedoch viel besser mit eingeschlossenem Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Buttons und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird suboptimal sein.

### Erstellen von Scroll-Buttons

In diesem Abschnitt fügen wir dem Beispiel "vorherige" und "nächste" Scroll-Buttons hinzu, um ein Werkzeug bereitzustellen, das es ermöglicht, zwischen Karussell-Seiten zu navigieren. Dies wird mit dem Pseudoelement {{cssxref("::scroll-button()")}} erreicht.

Die `::scroll-button()` Pseudoelemente generieren Buttons innerhalb eines Scroll-Containers nur dann, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert einen Scroll-Button, dessen Scroll-Richtung durch das Argument des Selektors spezifiziert wird. Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, wobei jeder den Inhalt des Containers zum Anfang oder Ende der Block- oder Inline-Achse scrollt.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudoelemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Buttons mit einigen grundlegenden Stilen versehen, sowie Styling basierend auf verschiedenen Zuständen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturbenutzer festzulegen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung erfolgen kann, verwenden wir die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch einen {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Buttons, um offensichtlicher zu machen, dass sie interagierbar sind (eine Verbesserung sowohl für allgemeine {{Glossary("UX", "UX")}} als auch [kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein entsprechendes Icon über die `content` Eigenschaft auf den linken und rechten Scroll-Buttons gesetzt, was auch bewirkt, dass die Scroll-Buttons generiert werden:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Buttons erhalten automatisch einen geeigneten zugänglichen Namen, so dass sie von unterstützenden Technologien angemessen angesagt werden. Zum Beispiel haben die oben genannten Buttons eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} lauten "scroll left" und "scroll right", jeweils.

### Scroll-Buttons positionieren

Wir haben die Scroll-Buttons erstellt. Jetzt werden wir sie relativ zum Karussell positionieren, indem wir die [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Danach wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` gesetzt, und die {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen wie auf der Liste gesetzt, um die beiden miteinander zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Platz zwischen dem Button-Rand und dem Karussellrand hinzuzufügen. Zum Beispiel ist der rechte Rand des linken Scroll-Buttons 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Wenn wir den Scroll-Button-Code hinzufügen, erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherigen" und "nächsten" Scroll-Buttons zu drücken, um zu sehen, wie sich die Seiten scrollen und das Scroll-Snapping-Verhalten respektieren. Beachten Sie auch, wie die "vorherige" Taste automatisch aktiviert ist, wenn die Liste zum Anfang des Inhalts gescrollt ist, während die "nächste" Taste automatisch deaktiviert ist, wenn die Liste bis zum Ende des Inhalts gescrollt ist.

### Erstellen von Scroll-Markern

Scroll-Marker sind eine Gruppe von Buttons, wobei jeder von ihnen das Karussell zu einer Position im Zusammenhang mit einer der Inhaltsseiten scrollt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir Scroll-Marker zum Karussell hinzufügen, was drei Hauptfunktionen umfasst:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf dem Scroll-Container-Element gesetzt. Sie muss auf einen nicht-`none` Wert gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudoelement generiert wird; ihr Wert gibt an, wo die Scroll-Marker-Gruppe im Tabulator- und Layout-Box-Ordnung des Karussells erscheint (aber nicht im DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Buttons, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker als ganze Gruppe zusammenzufassen, zu enthalten und zu layouten.
- {{cssxref("::scroll-marker")}} Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und repräsentieren ihre Scroll-Marker. Diese werden innerhalb des Vorfahren {{cssxref("::scroll-marker-group")}} zu Layout-Zwecken gesammelt.

Zunächst wird die `scroll-marker-group` Eigenschaft der Liste auf `after` gesetzt, so dass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Ordnung positioniert wird; dies bedeutet, dass es nach den Scroll-Buttons folgt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer von einem bestehenden Element erstellt werden, das eine Gruppe von {{htmlelement("a")}} Elementen enthält, indem die {{cssxref("scroll-target-group")}} verwendet wird.

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste relativ zum Karussell positioniert, indem die CSS-Ankerpositionierung ähnlich wie die Scroll-Buttons verwendet wird, mit der Ausnahme, dass es horizontal im Karussell zentriert wird, indem ein {{cssxref("justify-self")}} Wert von `anchor-center` verwendet wird. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, so dass ihre Kinder (die `::scroll-marker` Pseudoelemente) innerhalb der `::scroll-marker-group` genaust zwischen jedem von ihnen zentriert sind.

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

Als nächstes kümmern wir uns um das Aussehen und das Gefühl der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen nicht-`none` Wert für die `content` Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich generiert werden. Wir setzen auch einige grundlegende Stile, damit die Marker als umrissene Kreise erscheinen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, da sie als Flex-Elemente layoutet werden.

Finally, for this section, we use the {{cssxref(":target"")}} pseudo-class to select whichever scroll marker corresponds to the currently visible "page", highlighting how far the user has scrolled through the content. In this case, we set the `background-color` to `black` so it is styled as a filled-in circle.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mit der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Man kann mit der Tastatur zu ihm wechseln, dann mit den linken und rechten (oder auf- und abwärts) Pfeiltasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Buttons entsprechend ändert. Die Scroll-Marker können auch wie erwartet zwischen\registerwlkonre\ung normal getabbt werden.

## Endergebnis des Einzelseiten-Karussells

All der oben genannte Code wird kombiniert zu folgendem Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt - versuchen Sie, diese zu drücken, um direkt zu jeder Seite zu wechseln. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, so dass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zu der Scroll-Marker-Gruppe zu wechseln, dann verwenden Sie die Pfeiltasten, um durch jede Seite zu blättern.

Sie können auch zwischen Seiten navigieren, indem Sie nach links und rechts wischen, die Scrollleiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: mehrere Elemente pro Seite

Das zweite Beispiel ist ein Karussell mit mehreren Elementen pro Seite, das wiederum [Scroll-Buttons](#erstellen_von_scroll-buttons) und [Scroll-Marker](#erstellen_von_scroll-markern) zum Navigieren durch die Seiten enthält. Dieses Beispiel ist auch responsiv - es erscheinen verschiedene Anzahl von Elementen auf jeder Seite, abhängig von der Breite des Ansichtsfensters.

Dieses Beispiel ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass anstatt Flexbox für das Layout zu verwenden, das [CSS Multicol Layout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}} Pseudoelement verwendet werden, um beliebige Spalten zu erstellen, die die volle Breite des Karussells umfassen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein Teilslement außerhalb des Scrollports sichtbar wird. In diesem Fall werden die Scroll-Marker für die Spaltenfragmente erstellt, nicht für Kinder, pro Element.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es bedeutend mehr Listenelemente gibt, und da mehrere Elemente auf einmal angezeigt werden, bezeichnen wir sie als Elemente anstelle von Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Beispiel hat auch sehr ähnliches CSS, mit Ausnahme der Regeln, die in den folgenden Abschnitten erklärt werden.

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

### Karussell-Layout unter Verwendung von Spalten

Dieses Beispiel verwendet [CSS Multicol-Layout](/de/docs/Web/CSS/Guides/Multicol_layout), anstatt Flexbox, um die Karussellelemente zu layouten. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte, die volle Breite des Containers zu sein, wobei der Inhalt jeweils eine einzelne Spalte anzeigt. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um den Inhalt mit dem Zentrum der Liste auszurichten.

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

Wir bieten grundlegende Box-Stil für die Listenelemente an, dann Layout-Stile anwenden, die es ermöglichen, dass ein oder mehrere Elemente in das einzelne Inhaltscolonne passen, abhängig von der Ansichtsbreite. Die Anzahl ändert sich dynamisch, wenn die Ebene breiter oder schmaler wird.

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

Die Schlüssel-Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf diese gesetzt, um deren Größe zu steuern, was bedeutet, dass ein oder mehrere in eine Spalte passen, die wächst und schrumpft zusammen mit der Breite der Ansicht.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um die `text-align: center` auf den übergeordneten Container zu überschritieren, damit der Elementinhalt links ausgerichtet ist.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird jetzt auf die {{cssxref("::column")}} Pseudoelemente gesetzt, welche die Inhaltszyklen darstellen, die durch die `columns`-Eigenschaft generiert wird - wir wollen zu jeder vollständigen Säule schnappen, anstatt zu jedem einzelnen Element, wobei alle neuen Elemente mit jedem Scrollvorgang angezeigt werden.

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

Das CSS zum Erstellen der Scroll-Marker in diesem Beispiel ist fast identisch mit dem [vorherigen Beispiel](#erstellen_von_scroll-markern), außer dass die Selektoren anders sind - die Scroll-Marker werden auf den generierten `::column` Pseudoelementen anstelle der Listenelemente erstellt. Beachten Sie, wie wir hier zwei Pseudoelemente hinzufügen, um Scroll-Marker auf den generierten Spalten zu erzeugen.

```css live-sample___second-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}
```

Zuletzt verwenden wir die `:target-current` Pseudoklasse, um den aktiven Scroll-Marker zu markieren, dem Benutzer eine Vorstellung davon zu geben, wo sie in der Navigation sind. Wir verwenden auch die {{cssxref(":target-before")}} und {{cssxref(":target-after")}} Pseudoklassen, um einige benutzerdefinierte Stile auf die Scroll-Marker vor und nach dem aktiven zu anwenden. Wir setzen auch eine {{cssxref("transition")}} auf die `ul::column::scroll-marker:target-current` Regel, damit die Stiländerungen zwischen den verschiedenen Zuständen sanft animiert werden.

```css live-sample___second-example
ul::column::scroll-marker:target-before {
  border: 2px solid gray;
}

ul::column::scroll-marker:target-current {
  background-color: black;
  transition: all 0.7s;
}

ul::column::scroll-marker:target-after {
  border: 2px solid red;
  background-color: red;
}
```

## Endergebnis des responsiven Karussells

Das Responsive-Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scrollleiste verwenden, die Scroll-Buttons drücken und die Scroll-Marker drücken. Die Funktionalität ist der des einseitigen Flexbox-Beispiels ähnlich, außer dass jetzt mehrere Listenelemente an jeder navigierten Position vorhanden sind; die Scroll-Marker werden auf Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden feststellen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert - und damit ändern sich auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, werden die Anzahl der Scroll-Marker dynamisch aktualisiert, sodass jede Spalte in der Scroll-Marker-Gruppe dargestellt ist.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
