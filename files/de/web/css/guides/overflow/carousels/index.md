---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

Das [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul definiert Funktionen, die die Erstellung flexibler reiner CSS-Karussells mit browsergenerierten und von Entwicklern gestalteten Scroll-Buttons und Scroll-Markern ermöglichen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussellkonzepte

**Karussells** sind ein häufiges Feature im Web. Sie nehmen normalerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z. B. Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie auf Navigations-Buttons klicken oder diese aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Buttons**
  - : Im Allgemeinen "Voriges" und "Nächstes" Buttons oder Links.
- **Scroll-Marker**
  - : Eine Reihe von Button- oder Link-Icons, die jeweils ein oder mehrere Elemente repräsentieren, je nachdem, wie viele Elemente bei jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorigen und nächsten Buttons links und rechts und Scroll-Markern am unteren Rand](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wesentliches Merkmal von Karussells ist **Paginierung** — die Elemente fühlen sich wie separate Inhaltsstücke an, zwischen denen man wechselt, anstatt einen kontinuierlichen Abschnitt zu bilden. Sie können ein Element zu einer Zeit oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, können Sie jedes Mal eine ganz neue Gruppe von Elementen anzeigen, wenn die Schaltfläche "Nächste" oder "Vorherige" gedrückt wird. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Sichtbereich verschwindet.

Karussells können ziemlich fehleranfällig und herausfordernd in der Implementierung mit JavaScript sein. Sie erfordern Skripte, um Scroll-Marker mit den Elementen zu verknüpfen, die sie darstellen, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, damit sie korrekt funktionieren.

Glücklicherweise können wir Karussells mit zugehörigen Steuerelementen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussellfunktionen nutzen.

## CSS-Karussellfunktionen

Die CSS-Karussellfunktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussells mit nur CSS und HTML ermöglichen, wobei der Browser die meisten Scroll- und Linkreferenzen auf flexible und konsistente Weise handhabt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Diese Pseudoelemente werden innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und repräsentieren die Scroll-Buttons, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Wird innerhalb eines Scroll-Containers erzeugt und dient dazu, Scroll-Marker zu sammeln und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Wird innerhalb der Kinder eines Vorfahren-Scrollcontainers oder innerhalb der Spalten eines Scrollcontainers erzeugt, um deren Scrollmarker darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kind-Elementen oder Spalten zu scrollen, und werden im {{cssxref("::scroll-marker-group")}} des Scrollcontainers zu Layoutzwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Wird verwendet, um den aktuell aktiven Scroll-Marker auszuwählen und zu stylen. Die Möglichkeit, den aktiven Scroll-Marker zu stylen, ist sowohl für die Benutzerfreundlichkeit als auch für die Zugänglichkeit wichtig.
- {{cssxref(":target-before")}} und {{cssxref(":target-after")}}
  - : Werden verwendet, um Scroll-Marker vor und nach dem aktuell aktiven Scroll-Marker auszuwählen und zu stylen. Sie sind nützlich, um Navigationsobjekte zu stylen, die sich vor und nach der aktiven Navigationsposition befinden und anzugeben, welche Elemente der Benutzer bereits angesehen hat und welche noch kommen werden.
- {{cssxref("::column")}}
  - : Repräsentiert die einzelnen Spalten, die erstellt werden, wenn ein Container so eingestellt ist, dass sein Inhalt über mehrere Spalten via [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt wird. Das `::column` Pseudoelement kann zusammen mit {{cssxref("::scroll-marker")}} verwendet werden, um einen Scroll-Marker für jede Spalte zu erstellen.

## Karussell mit Einzelseiten

Unser erstes Beispiel ist ein Karussell aus Einzelseiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Marker](#scroll-marker_erstellen) als untere Navigation und [Scroll-Buttons](#scroll-buttons_erstellen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir werden [Flexbox](#karusselllayout_mit_flexbox) verwenden, um das Karussell zu layouten, [Scroll-Snapping](#scroll-snapping_auf_der_liste_einrichten) verwenden, um eine klare Paginierung durchzusetzen, und Ankerpositionierung, um die Scroll-Buttons zu [positionieren](#positionierung_der_scroll-buttons) und Scroll-Marker relativ zum Karussell anzubringen.

Das HTML besteht aus einem [Heading-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält, zusammen mit einem benutzerdefinierten `data-` Attribut (welches wir mit dem Styling erklären):

```html live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
<h1>CSS carousel single item per page</h1>
<ul>
  <li data-accName="Item 1">
    <h2>Page 1</h2>
  </li>
  <li data-accName="Item 2">
    <h2>Page 2</h2>
  </li>
  <li data-accName="Item 3">
    <h2>Page 3</h2>
  </li>
  <li data-accName="Item 4">
    <h2>Page 4</h2>
  </li>
</ul>
```

### Karusselllayout mit Flexbox

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um eine einzelne Zeile von Elementen zu erstellen; das `<ul>` ist der Flexcontainer, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsbereichs mit einer Breite {{cssxref("width")}} von `100vw` füllt; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu layouten – indem wir einen {{cssxref("display")}} Wert von `flex` setzen, um die Kinderlistenelemente in einer Zeile anzuzeigen (aufgrund des Standardwertes {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Jetzt ist es Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}} Wert von `0 0 100%`, welcher jedes Element dazu zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überlaufen, und der Ansichtsbereich wird horizontal scrollen.

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

Zusätzlich erhält jedes gerade nummerierte Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scrolleffekt leichter zu erkennen ist.

### Scroll-Snapping auf der Liste einrichten

In diesem Abschnitt setzen wir einen Overflow-Wert auf das `<ul>`, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und wenden dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) an, um die Liste in die Mitte jedes Listenelements zu schnappen, wenn der Inhalt gescrollt wird.

Ein {{cssxref("overflow-x")}} Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt dass der gesamte Ansichtsbereich scrollt. [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x` Schlüsselwort führt dazu, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal geschnappt werden, während das `mandatory` Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappen wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}} Wert von `center` auf die Listenelemente gesetzt, sodass, wenn die Liste gescrollt wird, sie in die Mitte jedes Listenelements schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bis jetzt gezeigte Code wird wie folgt dargestellt:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder mit der Scrollleiste zu scrollen, um den Scroll-Snapshot zu sehen. Egal wo Ihre Scroll-Bewegung endet, ein Element wird immer in seine Position "schnappen".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussellfunktionen zu verwenden. Allerdings funktionieren Karussells mit Scroll-Snapping viel besser. Ohne Scroll-Snapping werden die Scroll-Buttons und Marker wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird unterdurchschnittlich sein.

### Scroll-Buttons erstellen

In diesem Abschnitt fügen wir der Demo "Vorherige" und "Nächste" Scroll-Buttons hinzu, um ein Tool für die Navigation zwischen Karussellseiten bereitzustellen. Dies wird unter Verwendung des {{cssxref("::scroll-button()")}} Pseudoelements erreicht.

Die `::scroll-button()` Pseudoelemente erzeugen nur dann Buttons innerhalb eines Scroll-Containers, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert einen Scroll-Button, dessen Scrollrichtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Buttons pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung des Anfangs oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudoelemente mit Stilen zu versehen.

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Stilen sowie Stylings basierend auf verschiedenen Zuständen versehen. Es ist wichtig, {{cssxref(":focus")}} Stile für Tastaturbenutzer zu setzen. Da Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt werden, wenn kein weiteres Scrollen in dieser Richtung mehr möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand anzusprechen.

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
> Wir setzen auch ein {{cssxref("cursor")}} Wert von `pointer` auf die Scroll-Buttons, um es offensichtlicher zu machen, dass mit ihnen interagiert werden kann (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), wobei dies nicht gesetzt wird, wenn die Scroll-Buttons `:disabled` sind.

Als nächstes wird ein entsprechendes Icon auf die linken und rechten Scroll-Buttons über die {{cssxref("content")}} Eigenschaft gesetzt, was auch das ist, was die Scroll-Buttons tatsächlich erzeugt. Dieses Icon muss auch einen entsprechenden einfachen Text-Zugänglichen Namen haben, also verwenden Sie die [Alternative-Text](/de/docs/Web/CSS/Reference/Properties/content#adding_an_image_with_alternative_text) Funktion der `content` Eigenschaft (mit dem Vorbehalt, dass [dies möglicherweise immer noch nicht ausreicht, um WCAG zu erfüllen](/de/docs/Web/CSS/Reference/Properties/content#accessibility)):

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄" / "Previous";
}

ul::scroll-button(right) {
  content: "►" / "Next";
}
```

> [!NOTE]
> Benutzeragenten sollten den generierten Scroll-Buttons automatisch einen geeigneten zugänglichen Namen geben, damit Unterstützungstechnologien sie entsprechend ankündigen können, und die Buttons sollten eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` haben. Das Bereitstellen von [alternativem Text für generierten Content](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) sorgt dafür, dass die Buttons in Benutzeragenten, die keine scroll-spezifischen Zugänglichkeitsfunktionen nativ einschließen, die {{Glossary("accessible_name", "zugänglichen Namen")}} "nach links scrollen" und "nach rechts scrollen" haben.

### Positionierung der Scroll-Buttons

Wir haben die Scroll-Buttons erstellt. Nun werden wir sie relativ zum Karussell mit Hilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positionieren.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf der Liste gesetzt. Als nächstes wird die {{cssxref("position")}} jedes Scroll-Buttons auf `absolute` gesetzt, und seine {{cssxref("position-anchor")}} Eigenschaft auf denselben Referenznamen, der auf der Liste definiert ist, um die beiden zu verknüpfen.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Einfügungs-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Abstand zwischen dem Buttonrand und dem Karussellrand hinzuzufügen. Zum Beispiel wird die rechte Kante des linken Scroll-Buttons 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Wenn wir den Scroll-Button-Code einfügen, erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherigen" und "nächsten" Scroll-Buttons zu drücken, um zu sehen, wie die Seiten gescrollt werden, wobei die Scroll-Snapping-Funktionalität respektiert wird. Beachten Sie auch, dass der "vorherige" Button automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt ist, während der "nächste" Button automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt ist.

### Scroll-Marker erstellen

Scroll-Marker sind eine Gruppe von Buttons, von denen jeder das Karussell zu einer Position in Bezug auf eine der Inhaltsseiten scrollt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir Scroll-Marker zum Karussell hinzufügen, was drei Hauptmerkmale beinhaltet:

- Die {{cssxref("scroll-marker-group")}} Eigenschaft wird auf das Scroll-Containerelement gesetzt. Sie muss auf einen nicht `none` Wert gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudoelement erzeugt wird; sein Wert gibt an, wo die Scroll-Marker-Gruppe in der Tabulatorreihenfolge des Karussells und der Layout-Box-Reihenfolge erscheint (aber nicht der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scroll-Buttons, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudoelement existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Marker als ganze Gruppe zu sammeln, zu enthalten und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Vorfahren-Scroll-Containers und repräsentieren ihre Scroll-Marker. Diese werden innerhalb des Vorfahren-{{cssxref("::scroll-marker-group")}} zu Layoutzwecken gesammelt.

Zunächst wird die `scroll-marker-group` Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; dies bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element erstellt werden, das eine Reihe von {{htmlelement("a")}} Elementen enthält, indem {{cssxref("scroll-target-group")}} verwendet wird.

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste relativ zum Karussell mit CSS-Ankerpositionierung positioniert, ähnlich wie die der Scroll-Buttons, außer dass es horizontal auf das Karussell zentriert wird, indem ein {{cssxref("justify-self")}} Wert von `anchor-center` genutzt wird. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einer {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker` Pseudoelemente) in der `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem Element.

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

Als nächstes kümmern wir uns um das Aussehen und das Gefühl der Scroll-Marker selbst; sie können wie jeder andere [generierte Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen nicht `none` Wert für die `content` Eigenschaft setzen müssen, damit die Scroll-Marker tatsächlich erzeugt werden. Ein Wert von `""` erzeugt einen leeren zugänglichen Namen (ein WCAG SC [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) Verstoß), daher ist es notwendig, einen Textwert bereitzustellen. Da das gleiche Aktualisieren eines jeden Markers möglicherweise für Benutzer nicht nützlich ist, sollten Sie `attr()` verwenden, um den Wert aus einem benutzerdefinierten `data-` Attribut auf dem `<li>` zu ziehen (dieses Beispiel sucht nach einem Attribut `data-accName`). Verstehen Sie, dass dieser Wert nicht von automatisierten Übersetzungsdiensten erkannt wird.

Wir setzen auch einige rudimentäre Stile, damit die Marker als umrandete Kreise erscheinen, während der Textinhalt visuell ausgeblendet wird, den wir hinzugefügt haben:

```css live-sample___first-example
li::scroll-marker {
  content: attr(data-accName);
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
  text-indent: 16px;
}
```

> [!NOTE]
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Items layoutet werden.

Schließlich verwenden wir die {{cssxref(":target-current")}} Pseudoklasse, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und damit anzuzeigen, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis gestylt ist.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mithilfe der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> zu ihm wechseln und dann mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen "Seiten" wechseln, was auch den Status der zugehörigen Scroll-Marker und Scroll-Buttons wie erwartet ändert. Die Scroll-Marker können auch wie erwartet mit der Tabulatortaste normal durchschaltet werden.

## Endergebnis des Karussells mit einer einzigen Seite

Aller obiger Code kombiniert ergibt folgendes Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Marker hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu wechseln und dann die Pfeiltasten zu verwenden, um durch jede Seite zu blättern.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Scrollleiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Beim zweiten Beispiel handelt es sich um ein Karussell mit mehreren Elementen pro Seite, das erneut [Scroll-Buttons](#scroll-buttons_erstellen) und [Scroll-Marker](#scroll-marker_erstellen) zum Navigieren durch die Seiten enthält. Dieses Beispiel ist auch responsiv — je nach Breite des Ansichtsbereichs erscheinen unterschiedliche Anzahlen von Elementen auf jeder Seite.

Dieses Beispiel ähnelt sehr dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten), außer dass es anstelle von Flexbox für das Layout [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}} Pseudoelement verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells über die [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Funktion und das {{cssxref("::column")}} Pseudoelement erstrecken, um beliebige Spalten zu erstellen, die die volle Breite des Karussells einnehmen und mehrere Elemente enthalten können.

> [!NOTE]
> Derzeit gibt es keine Möglichkeit, einen zugänglichen Namen für die Scroll-Marker anzugeben (es gibt kein entsprechendes HTML-Element, von dem ein `data-` Wert gezogen werden könnte wie im vorherigen Beispiel). Die Verwendung dieses Musters führt zu einem WCAG SC [4.1.2 Name, Rolle, Wert](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) Verstoß.

Mit diesem Ansatz können wir sicherstellen, dass, wenn der Ansichtsbereich wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein teilweise ausgeblendetes Element am Rand des Scrollports angezeigt wird. In diesem Fall werden die Scroll-Marker auf Scrollcontainer-Fragmenten, pro Spalte, anstatt auf Kindern, pro Element, erstellt.

Das HTML ist dem des vorherigen Beispiels sehr ähnlich, außer dass es deutlich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, beschriften wir sie als Elemente statt Seiten:

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

### Karusselllayout mit Spalten

Dieses Beispiel verwendet [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout), anstelle von Flexbox, um die Karussellelemente zu layouten. Der {{cssxref("columns")}} Wert von `1` erzwingt, dass jede Spalte die volle Breite des Containers einnimmt, wobei die Inhalte eine einzige Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um die Inhalte mit der Mitte der Liste auszurichten.

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

Wir bieten rudimentäres Box-Styling für die Listenelemente an, dann wenden wir Layout-Stile an, die es ermöglichen, dass ein oder mehrere Elemente in die einzelne Inhalts Spalte passen, abhängig von der Breite des Ansichtsbereichs. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

Die Hauptlayout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass eine oder mehrere in einer Spalte passen werden, die mit der Breite des Ansichtsbereichs wächst und schrumpft.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um das `text-align: center` zu überschreiben, das auf den übergeordneten Container gesetzt ist, sodass der Elementinhalt linksbündig ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird nun auf die {{cssxref("::column")}} Pseudoelemente gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns` Eigenschaft generiert werden — statt auf die Listenelemente. Wir wollen zu jeder vollständigen Spalte schnappen, anstatt zu jedem einzelnen Listenelement, und bei jeder Scroll-Aktion alle neuen Elemente anzeigen.

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

Das CSS zur Erstellung der Scroll-Marker in diesem Beispiel ist nahezu identisch zum [vorherigen Beispiel](#scroll-marker_erstellen), außer dass die Selektoren unterschiedlich sind — die Scroll-Marker werden auf den generierten `::column` Pseudoelementen erstellt statt auf den Listenelementen. Beachten Sie, wie wir hier zwei Pseudoelemente hinzufügen, um Scroll-Marker auf den generierten Spalten zu erstellen.

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

Schließlich verwenden wir die `:target-current` Pseudoklasse, um den aktiven Scroll-Marker zu markieren, was dem Benutzer eine Idee gibt, wo er sich in der Navigation befindet. Wir verwenden auch die {{cssxref(":target-before")}} und {{cssxref(":target-after")}} Pseudoklassen, um ein benutzerdefiniertes Styling auf die Scroll-Marker vor und nach dem aktiven zu setzen. Wir setzen auch eine {{cssxref("transition")}} auf die `ul::column::scroll-marker:target-current` Regel, sodass die Stiländerungen zwischen den verschiedenen Zuständen nahtlos animieren.

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

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Scrollleiste verwenden, die Scroll-Buttons drücken und die Scroll-Marker drücken. Die Funktionalität ist ähnlich wie beim flexiblen Einzelseitigen Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Marker werden auf Spalten-Fragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu verändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher ändert sich auch die Anzahl der generierten Spalten. Da sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Marker dynamisch, sodass jede Spalte in der Scroll-Marker-Gruppe repräsentiert ist.

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
