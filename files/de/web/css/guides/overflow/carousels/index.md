---
title: Erstellen von CSS-Karussellen
short-title: Erstellen von Karussellen
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 1c7047748e75084c65a2c4f36ef2f0b5e10f8cc4
---

Das [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow) definiert Funktionen, die die Erstellung flexibler reiner CSS-Karusselle mit browsergenerierten und vom Entwickler gestalteten Scroll-Schaltflächen und Scroll-Markierungen ermöglichen. Dieser Leitfaden erklärt, wie Sie ein Karussell mit diesen Funktionen erstellen.

## Karussellkonzepte

**Karusselle** sind ein häufiges Feature im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie Präsentationsfolien, Anzeigen, Schlagzeilennachrichten oder wichtige Produkteigenschaften.

Benutzer können durch Klicken oder Aktivieren von Navigationsschaltflächen oder durch Wischen durch die Elemente navigieren. Die Navigation umfasst in der Regel:

- **Scrollschaltflächen**
  - : In der Regel "Zurück" und "Weiter" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Serie von Schaltflächen- oder Link-Icons, die jeweils ein oder mehrere Elemente repräsentieren, je nachdem, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts und Scroll-Markierungen unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein wesentliches Merkmal von Karussellen ist die **Seitennavigation** – die Elemente fühlen sich an wie separate Inhaltsstücke, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Inhaltsabschnitt zu bilden. Sie könnten ein Element nach dem anderen oder mehrere Elemente auf jeder Karussell-"Seite" zeigen. Wenn mehrere Elemente sichtbar sind, könnten Sie eine völlig neue Gruppe von Elementen jedes Mal anzeigen, wenn die Schaltfläche "Weiter" oder "Zurück" gedrückt wird. Alternativ könnten Sie ein einzelnes neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus der Ansicht verschoben wird.

Karusselle können ziemlich brüchig und herausfordernd sein, wenn sie mit JavaScript umgesetzt werden. Sie erfordern Skripte, um Scroll-Markierungen mit den Elementen zu verknüpfen, die sie darstellen, während sie die Scrollschaltflächen ständig aktualisieren, damit sie korrekt funktionieren.

Glücklicherweise können wir Karusselle mit zugehörigen Steuerungen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussellfunktionen verwenden.

## CSS-Karussellfunktionen

Die CSS-Karussellfunktionen bieten Pseudoelemente und Pseudoklassen, die die Erstellung von Karussellen nur mit CSS und HTML ermöglichen, wobei der Browser die meisten Scroll- und Linkreferenzen auf flexible und konsistente Weise behandelt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : In einem {{Glossary("scroll_container", "Scroll-Container")}} generiert, repräsentieren diese Pseudoelemente Scrollschaltflächen, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um deren Scroll-Markierungen zu repräsentieren. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kind-Elementen oder Spalten zu scrollen, und werden innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers zur Layoutzwecken gesammelt.
- {{cssxref(":target-current")}}
  - : Wird verwendet, um die aktuell aktive Scroll-Markierung auszuwählen und zu stylen. Die Fähigkeit, die aktive Scroll-Markierung zu stylen, ist wichtig für sowohl die Benutzerfreundlichkeit als auch Zugänglichkeit.
- {{cssxref(":target-before")}} und {{cssxref(":target-after")}}
  - : Werden verwendet, um Scroll-Markierungen vor und nach der aktuell aktiven Scroll-Markierung auszuwählen und zu stylen. Sie sind nützlich, um Navigationspunkte zu stylen, die vor und nach der aktiven Navigationsposition liegen, und zeigen an, welche Elemente der Benutzer bereits gesehen hat und welche noch kommen.
- {{cssxref("::column")}}
  - : Repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) anzeigt. Das `::column` Pseudoelement kann zusammen mit {{cssxref("::scroll-marker")}} verwendet werden, um eine Scroll-Markierung für jede Spalte zu erzeugen.

## Karussell mit einzelnen Seiten

Unser erstes Demo ist ein Karussell einzelner Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Markierungen](#erstellen_von_scroll-markierungen) als untere Navigation und [Scrollschaltflächen](#erstellen_von_scrollschaltflächen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scroll-Snap](#einrichten_von_scroll-snap_auf_der_liste), um eine klare Seitennavigation zu erzwingen, und Anker-Positionierung, um die [Position der Scrollschaltflächen](#positionierung_der_scrollschaltflächen) und Scroll-Markierungen relativ zum Karussell festzulegen.

Das HTML besteht aus einem [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) Beispielinhalte zusammen mit einem benutzerdefinierten `data-` Attribut enthält (das wir mit dem Styling erklären):

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

### Karussell-Layout mit Flexbox

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; Die `<ul>` ist der Flex-Container, und die `<li>` Kind-Listenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gestaltet, dass sie die volle Breite des Ansichtsfensters mit einer Breite von `100vw` ausfüllt; es wird auch eine {{cssxref("height")}} von `300px` und ein bisschen {{cssxref("padding")}} angewendet. Wir verwenden dann Flexbox, um die Liste zu layouten – wir setzen einen {{cssxref("display")}}-Wert von `flex`, um die Kind-Listenelemente in einer Reihe anzuzeigen (aufgrund des Standardwerts {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem.

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

Jetzt ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäres Styling. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element dazu zwingt, so breit wie der Container (die `<ul>`) zu sein. Dadurch wird der Inhalt den Container überfließen, und das Ansichtsfenster wird horizontal scrollen.

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

Darüber hinaus erhält jedes gerade nummerierte Listenelement eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, damit der Scrolleffekt leichter zu sehen ist.

### Einrichten von Scroll-Snap auf der Liste

In diesem Abschnitt setzen wir einen Überlaufwert auf die `<ul>`, um sie in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und wenden dann [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) an, damit die Liste zu einem bestimmten Punkt jedes Listenelements einrastet, wenn der Inhalt gescrollt wird.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf die `<ul>` gesetzt, sodass ihr Inhalt horizontal innerhalb der Liste scrollt, anstatt dass das gesamte Ansichtsfenster scrollt. [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um zu jeder "Seite" zu springen – ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort sorgt dafür, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Bewegung einrasten wird.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als Nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, damit die Liste beim Scrollen in der Mitte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden des Scrollbalkens zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an seinem Platz "einrasten".

> [!NOTE]
> CSS-Scroll-Snap ist nicht obligatorisch, um die CSS-Karussellfunktionen zu verwenden. Karusselle funktionieren jedoch viel besser mit Scroll-Snap. Ohne Scroll-Snap ist es unwahrscheinlich, dass die Scrollschaltflächen und Markierungen sauber zwischen Seiten navigieren, und das Ergebnis wird unbefriedigend sein.

### Erstellen von Scrollschaltflächen

In diesem Abschnitt fügen wir dem Demo "vorherige" und "nächste" Scrollschaltflächen hinzu, um ein Werkzeug zur Navigation zwischen den Karussellseiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudoelement erreicht.

Die `::scroll-button()` Pseudoelemente generieren Schaltflächen innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}} Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scrollrichtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, die jeweils den Inhalt des Containers in Richtung des Starts oder Endes der Block- oder Inline-Achse scrollen.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudoelemente mit Styles zu versehen.

Zuerst werden alle Scrollschaltflächen mit einigen grundlegenden Styles versehen, sowie Styles basierend auf unterschiedlichen Zuständen. Es ist wichtig, {{cssxref(":focus")}}-Styles für Tastaturnutzer zu setzen. Außerdem werden die Scrollschaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn kein weiteres Scrollen in diese Richtung möglich ist; wir verwenden die {{cssxref(":disabled")}} Pseudoklasse, um diesen Zustand zu adressieren.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scrollschaltflächen, um klarer zu machen, dass sie interagiert werden können (eine Verbesserung für sowohl allgemeine {{Glossary("UX", "UX")}} als auch [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), und deaktivieren diesen, wenn die Scrollschaltflächen `:disabled` sind.

Als nächstes wird ein passendes Icon auf die linken und rechten Scrollschaltflächen über die {{cssxref("content")}} Eigenschaft gesetzt, was auch verursacht, dass die Scrollschaltflächen generiert werden. Dieses Icon muss auch einen entsprechenden Klartext-bezogenen Namen haben, daher wird die [Alternative Text](/de/docs/Web/CSS/Reference/Properties/content#adding_an_image_with_alternative_text) Funktion der `content` Eigenschaft verwendet (mit dem Hinweis, dass [dies immer noch unzureichend sein kann, um WCAG zu erfüllen](/de/docs/Web/CSS/Reference/Properties/content#accessibility)):

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄" / "Previous";
}

ul::scroll-button(right) {
  content: "►" / "Next";
}
```

> [!NOTE]
> Benutzeragenten sollten automatisch einen entsprechenden zugänglichen Namen für generierte Scrollschaltflächen festlegen, damit assistive Technologien diese angemessen erläutern können, und die Schaltflächen sollten eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` haben. Die Bereitstellung von [alternativem Text für generierte Inhalte](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) stellt sicher, dass die Schaltflächen die {{Glossary("accessible_name", "zugänglichen Namen")}} "scroll left" und "scroll right" in Benutzeragenten ohne native Scrollschaltflächen-Zugänglichkeitsfunktionen haben.

### Positionierung der Scrollschaltflächen

Wir haben die Scrollschaltflächen erstellt. Nun werden wir sie relativ zum Karussell positionieren, indem wir [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwenden.

Zunächst wird ein Referenz-{{cssxref("anchor-name")}} auf der Liste gesetzt. Anschließend hat jede Scroll-Schaltfläche ihre {{cssxref("position")}} auf `absolute` gesetzt, und ihre {{cssxref("position-anchor")}} Eigenschaft auf denselben Referenznamen definiert, um die beiden miteinander zu verbinden.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "Einrückungseigenschaften")}}. Wir verwenden {{cssxref("anchor()")}} Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}} Funktion verwendet, um etwas Platz zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Zum Beispiel wird der rechte Rand der linken Scroll-Schaltfläche 70 Pixel rechts vom linken Rand des Karussells positioniert.

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

Indem wir den Scrollschaltcode hinzufügen, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die Schaltflächen "Zurück" und "Weiter" zu drücken, um zu sehen, wie die Seiten gescrollt werden, respektierend das Scroll-Snap-Verhalten. Beachten Sie auch, wie die Schaltfläche "Zurück" automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während die "Weiter" Schaltfläche automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markierungen

Scroll-Markierungen sind eine Gruppe von Schaltflächen, von denen jeder das Karussell zu einer Position im Zusammenhang mit einer der Inhaltsseiten scrollt. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt werden wir Scroll-Markierungen zum Karussell hinzufügen, was drei Hauptfunktionen umfasst:

- Die Eigenschaft {{cssxref("scroll-marker-group")}} wird auf das Scroll-Container-Element gesetzt. Es muss auf einen Wert ungleich `none` gesetzt werden, damit das {{cssxref("::scroll-marker-group")}} Pseudoelement generiert wird; ihr Wert gibt an, wo die Scroll-Markierungsgruppe in der Tabulator- und Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, vor den Scrollschaltflächen, während `after` sie am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}} Pseudoelement existiert in einem Scroll-Container und wird verwendet, um Scroll-Markierungen als gesamte Gruppe zu sammeln, zu enthalten und anzuordnen.
- {{cssxref("::scroll-marker")}} Pseudoelemente existieren innerhalb der Kinder und {{cssxref("::column")}} Fragmente eines Scroll-Container-Vorfahren und repräsentieren deren Scroll-Markierungen. Diese werden innerhalb des Vorfahren’s {{cssxref("::scroll-marker-group")}} für Layoutzwecke gesammelt.

Zunächst wird die Eigenschaft `scroll-marker-group` der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Fokus- und Layoutbox-Reihenfolge platziert wird; dies bedeutet, dass es nach den Scrollschaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Markierungsgruppen-Container aus einem vorhandenen Element erstellt werden, das eine Reihe von {{htmlelement("a")}} Elementen enthält, die mit dem {{cssxref("scroll-target-group")}} selektiert werden.

Als nächstes wird das `::scroll-marker-group` Pseudoelement positioniert, ähnlich wie die Scroll-Schaltflächen, außer dass es horizontal auf dem Karussell mit einem {{cssxref("justify-self")}} Wert von `anchor-center` zentriert ist. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, damit ihre Kinder (die `::scroll-marker` Pseudoelemente) innerhalb des `::scroll-marker-group` zentriert werden, mit einem Abstand zwischen jedem.

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

Als nächstes behandeln wir das Aussehen und Gefühl der Scroll-Markierungen selbst; sie können wie jeder andere [erzeugte Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen nicht-`none`-Wert für die Eigenschaft `content` setzen müssen, damit die Scroll-Markierungen tatsächlich erzeugt werden. Ein Wert von `""` produziert einen leeren zugänglichen Namen (ein WCAG SC [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) Verstoß), daher ist es notwendig, einen Textwert anzugeben. Da jeder Scroll-Markierung denselben Namen zugeordnet zu haben möglicherweise für Benutzer nicht nützlich ist, sollten Sie `attr()` verwenden, um den Wert aus einem benutzerdefinierten `data-` Attribut auf der `<li>` zu ziehen (in diesem Beispiel wird nach einem Attribut `data-accName` gesucht). Seien Sie sich bewusst, dass dieser Wert nicht von automatisierten Übersetzungsdiensten aufgenommen wird.

Wir setzen auch einige rudimentäre Styles, um die Markierungen als umrandete Kreise darzustellen, während wir den Textinhalt, den wir hinzugefügt haben, visuell ausblenden:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, weil sie als flex-Items layoutet werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um auszuwählen, welche Scroll-Markierung der aktuell sichtbaren "Seite" entspricht, und hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als gefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Markierungsgruppen-Container auf einem Scroll-Container mit der Eigenschaft `scroll-marker-group` erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken gerendert. Man kann mit der Tastatur auf ihn zugreifen, und dann zwischen den verschiedenen "Seiten" mit den linken und rechten (oder oberen und unteren) Pfeiltasten wechseln, was auch den Zustand der zugehörigen Scroll-Markierungen und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Markierungen können auch normal angetabbt werden, wie erwartet.

## Endergebnis des einzelnen Seiten-Karussells

All dieser Code führt gemeinsam zum folgenden Ergebnis:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt – versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie die aktuelle Markierung hervorgehoben wird, damit Sie sehen können, wo Sie sich in der Seitennavigation befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben und dann die Pfeiltasten zu verwenden, um jede Seite zu durchlaufen.

Sie können auch zwischen Seiten navigieren, indem Sie nach links und rechts wischen, den Scrollbalken ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Die zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das erneut [Scrollschaltflächen](#erstellen_von_scrollschaltflächen) und [Scroll-Markierungen](#erstellen_von_scroll-markierungen) enthält, um durch die Seiten zu navigieren. Diese Demo ist auch responsiv – je nach Ansichtsfensterbreite erscheinen unterschiedliche Anzahl von Elementen auf jeder Seite.

Diese Demo ist dem [Karussell mit einzelnen Seiten](#karussell_mit_einzelnen_seiten) Demo sehr ähnlich, außer dass sie anstelle von Flexbox für das Layout [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}} Pseudoelement verwendet, um beliebige Spalten zu erstellen, die die volle Breite des Karussells einnehmen und mehrere Elemente enthalten können.

> [!NOTE]
> Derzeit gibt es keine Möglichkeit, einen zugänglichen Namen für die Scroll-Markierungen bereitzustellen (es gibt kein entsprechendes HTML-Element, aus dem ein `data-` Wert gezogen werden könnte wie im vorherigen Beispiel). Bei Verwendung dieses Musters wird ein WCAG SC [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) Verstoß erzeugt.

Durch diese Herangehensweise können wir sicherstellen, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, nie ein teilweise angezeigt wird, das über den Rand des Scrollports hinausragt. In diesem Fall werden die Scroll-Markierungen auf Scroll-Container-Fragmenten, pro Spalte, erstellt anstatt auf den Kindern, pro Element.

Das HTML ähnelt stark dem der vorherigen Demo, außer dass es erheblich mehr Listenelemente gibt, und da mehrere Elemente auf einmal sichtbar sein werden, bezeichnen wir sie als Elemente anstatt als Seiten:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Diese Demo hat auch sehr ähnliches CSS, mit Ausnahme der Regeln, die in den folgenden Abschnitten erklärt werden.

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

Dieses Beispiel verwendet [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout), anstatt von Flexbox, um die Karussellelemente anzuordnen. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte dazu, die volle Breite des Containers einzunehmen, wobei die Inhalte eine einzelne Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um die Inhalte mit dem Zentrum der Liste auszurichten.

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

Wir stellen rudimentäre Kastenstile für die Listenelemente bereit und wenden dann Layout-Stile an, um ein oder mehrere Elemente in die einzelne Inhalts-Spalte zu passen, abhängig von der Ansichtsfensterbreite. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander sitzen zu lassen und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größensteuerung zu ermöglichen. Dies bedeutet, dass eine oder mehrere in eine Spalte passen, die zusammen mit der Breite des Ansichtsfensters wächst und schrumpft.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um die `text-align: center` des übergeordneten Containers zu überschreiben, sodass der Inhalt der Elemente linksbündig ist.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird nun auf die {{cssxref("::column")}} Pseudoelemente gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns` Eigenschaft generiert werden — anstatt der Listenelemente. Wir möchten auf jede vollständige Spalte anstelle eines einzelnen Listenelements einrasten, wobei bei jeder Scroll-Aktion alle neuen Elemente angezeigt werden.

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

Das CSS zum Erstellen der Scroll-Markierungen in diesem Demo ist nahezu identisch mit dem im [vorherigen Demo](#erstellen_von_scroll-markierungen), außer dass die Selektoren unterschiedlich sind — die Scroll-Markierungen werden auf den generierten `::column` Pseudoelementen anstelle von Listenelementen erstellt. Beachten Sie, dass wir hier zwei Pseudoelemente einschließen, um Scroll-Markierungen auf den generierten Spalten zu erstellen.

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

Zum Schluss verwenden wir die `:target-current` Pseudoklasse, um die aktive Scroll-Markierung zu markieren und dem Benutzer eine Vorstellung davon zu geben, wo er sich in der Navigation befindet. Wir verwenden auch die {{cssxref(":target-before")}} und {{cssxref(":target-after")}} Pseudoklassen, um benutzerdefinierte Stile auf die Scroll-Markierungen vor und nach der aktiven anzuwenden. Wir setzen auch eine {{cssxref("transition")}} auf die `ul::column::scroll-marker:target-current` Regel, damit die Stiländerungen zwischen den verschiedenen Zuständen reibungslos animiert werden.

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

## Finales Ergebnis des responsiven Karussells

Das Responsiv-Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, den Scrollbalken verwenden, die Scroll-Schaltflächen drücken und die Scroll-Markierungen betätigen. Die Funktionalität ist ähnlich wie im Flexbox-Einzelseitendemonstration, außer dass jetzt mehrere Listenelemente bei jeder navigierten Position vorhanden sind; die Scroll-Markierungen werden auf den Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstelle jedes Elements.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und damit ändert sich auch die Anzahl der erzeugten Spalten. Wenn sich die Anzahl der Spalten ändert, wird die Anzahl der Scroll-Markierungen dynamisch aktualisiert, sodass jede Spalte in der Scroll-Markierungsgruppe vertreten ist.

## Siehe auch

- [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
