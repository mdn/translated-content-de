---
title: Erstellen von CSS-Karussells
short-title: Erstellen von Karussells
slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul definiert Funktionen, die das Erstellen flexibler und zugänglicher reiner CSS-Karussells mit vom Browser generierten und vom Entwickler gestalteten Scroll-Schaltflächen und Scroll-Markierungen ermöglichen. Dieser Leitfaden erklärt, wie Sie ein Karussell mit diesen Funktionen erstellen.

## Karussellkonzepte

**Karussells** sind eine häufige Funktion im Web. Sie nehmen typischerweise die Form eines scrollbaren Inhaltsbereichs an, der mehrere Elemente enthält, wie z. B. Präsentationsfolien, Anzeigen, Schlagzeilen oder wichtige Produkteigenschaften.

Benutzer können durch die Elemente navigieren, indem sie Navigationsschaltflächen anklicken oder aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Schaltflächen**
  - : Im Allgemeinen "vorherige" und "nächste" Schaltflächen oder Links.
- **Scroll-Markierungen**
  - : Eine Reihe von Schaltflächen- oder Link-Icons, die jeweils ein oder mehrere Elemente repräsentieren, abhängig davon, wie viele Elemente an jeder Scroll-Position im Karussell angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, vorherige und nächste Schaltflächen links und rechts und Scroll-Markierungen unten](carousel.png)

Ein wesentliches Merkmal von Karussells ist die **Paginierung** — die Elemente wirken wie separate Inhalte, zwischen denen gewechselt wird, anstatt einen kontinuierlichen Abschnitt zu bilden. Sie können ein Element gleichzeitig oder mehrere Elemente auf jeder Karussell-"Seite" anzeigen. Wenn mehrere Elemente sichtbar sind, können Sie jedes Mal eine völlig neue Gruppe von Elementen anzeigen, wenn die Schaltfläche "nächste" oder "vorherige" gedrückt wird. Alternativ können Sie ein neues Element an einem Ende der Liste hinzufügen, während das Element am anderen Ende aus dem Blickfeld verschoben wird.

Das Erstellen von Karussells mit JavaScript kann recht anfällig und schwierig umzusetzen sein. Sie erfordern Skripte, um Scroll-Markierungen mit den von ihnen repräsentierten Elementen zu verknüpfen, während die Scroll-Schaltflächen kontinuierlich aktualisiert werden müssen, um sie korrekt funktionsfähig zu halten. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerungen hinzugefügt werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Steuerungen ohne den Einsatz von JavaScript erstellen, indem wir die CSS-Karussell-Funktionen verwenden.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die das Erstellen von Karussells nur mit CSS und HTML ermöglichen, wobei der Browser den Großteil des Scrollens und der Link-Referenzen auf zugängliche, flexible und konsistente Weise übernimmt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudo-Elemente Scroll-Schaltflächen, die den Container in eine bestimmte Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers generiert, um ihre Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu seinen zugehörigen Kindelementen oder Spalten zu scrollen, und werden zur Layout-Zwecken innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers gesammelt.
- {{cssxref(":target-current")}}
  - : Diese Pseudo-Klasse kann verwendet werden, um die aktuell aktive Scroll-Markierung auszuwählen. Sie kann verwendet werden, um einen Hervorhebungsstil für die aktuell aktive Markierung bereitzustellen, was wichtig für die Benutzerfreundlichkeit und Zugänglichkeit ist.
- {{cssxref("::column")}}
  - : Dieses Pseudo-Element repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seine Inhalte in mehreren Spalten über das [CSS-Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Es kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um eine Scroll-Markierung für jede Spalte zu generieren.

## Karussell mit Einzelseiten

Unser erstes Beispiel ist ein Karussell mit Einzelseiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben [Scroll-Markierungen](#erstellen_von_scroll-markierungen) als untere Navigation und [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) an den Seiten der Seite, die dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu wechseln.

Wir verwenden [flexbox](#karussell-layout_mit_flexbox), um das Karussell anzuordnen, [Scroll-Snapping](#einstellen_von_scroll-snapping_auf_der_liste), um eine klare Paginierung zu erzwingen, und Ankerpositionierung, um [die Scroll-Schaltflächen](#positionieren_von_scroll-schaltflächen) und Scroll-Markierungen relativ zum Karussell zu positionieren.

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um eine einzige Reihe von Elementen zu erstellen; das `<ul>` ist der Flex-Container, und die `<li>`-Kindlistenelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so eingestellt, dass sie die volle Breite des Ansichtsfensters ausfüllt, mit einer {{cssxref("width")}} von `100vw`; sie erhält auch eine {{cssxref("height")}} von `300px` und etwas {{cssxref("padding")}}. Dann verwenden wir Flexbox, um die Liste zu gestalten — indem wir einen {{cssxref("display")}}-Wert von `flex` einstellen, sodass die Kindlistenelemente in einer Reihe angezeigt werden (aufgrund des Standardwerts {{cssxref("flex-direction")}} von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Nun ist es an der Zeit, die Listenelemente zu gestalten. Die ersten Deklarationen bieten grundlegende Formatierungen. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element zwingt, so breit wie der Container zu sein (das `<ul>`). Infolgedessen wird der Inhalt seinen Container überfluten, und das Ansichtsfenster wird horizontal scrollen.

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

### Einstellen von Scroll-Snapping auf der Liste

In diesem Abschnitt werden wir einen Überlauf-Wert auf das `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS-Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) anwenden, um die Liste so einrasten zu lassen, dass sie zur Mitte jedes Listenelements schnellt, wenn der Inhalt gescrollt wird.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird eingestellt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Action einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, damit die Liste, wenn sie gescrollt wird, zur Mitte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder Verwenden der Bildlaufleiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal, wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an seinen Platz "einrasten".

> [!NOTE]
> CSS-Scroll-Snapping ist nicht zwingend erforderlich, um die CSS-Karussell-Funktionen zu verwenden. Karussells funktionieren jedoch viel besser mit Scroll-Snapping. Ohne Scroll-Snapping werden die Scroll-Schaltflächen und Markierungen wahrscheinlich nicht sauber zwischen den Seiten navigieren, und das Ergebnis wird substandard sein.

### Erstellen von Scroll-Schaltflächen

In diesem Abschnitt fügen wir dem Demo "vorherige" und "nächste" Scroll-Schaltflächen hinzu, um ein Werkzeug zum Navigieren zwischen den Karussell-Seiten bereitzustellen. Dies wird mit Hilfe des {{cssxref("::scroll-button()")}} Pseudo-Elements erreicht.

Die `::scroll-button()` Pseudo-Elemente generieren nur Schaltflächen innerhalb eines Scroll-Containers, wenn ihre {{cssxref("content")}}-Eigenschaften auf einen anderen Wert als `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert eine Scroll-Schaltfläche, deren Scroll-Richtung durch das Argument des Selektors angegeben wird. Sie können bis zu vier Scroll-Schaltflächen pro Scroll-Container generieren, wobei jede den Inhalt des Containers in Richtung des Anfangs oder Endes der Block- oder Inline-Achse scrollt.

Sie können auch ein Argument von `*` angeben, um alle `::scroll-button()` Pseudo-Elemente mit Stilen anzupassen.

Zuerst werden alle Scroll-Schaltflächen mit einigen grundlegenden Stilen sowie Stilen für verschiedene Zustände angepasst. Es ist wichtig, {{cssxref(":focus")}}-Stile für Tastaturbenutzer zu setzen. Da Scroll-Schaltflächen automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) eingestellt werden, wenn kein weiteres Scrollen in dieser Richtung mehr möglich ist, verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand anzupassen.

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
> Wir setzen auch einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Schaltflächen, um offensichtlicher zu machen, dass sie interagiert werden können (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)), wobei wir ihn zurücksetzen, wenn die Scroll-Schaltflächen `:disabled` sind.

Als nächstes wird über die `content`-Eigenschaft ein geeignetes Icon auf den linken und rechten Scroll-Schaltflächen gesetzt, was auch die Generierung der Scroll-Schaltflächen verursacht:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Schaltflächen erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien entsprechend angekündigt werden. Beispielsweise haben die oben genannten Schaltflächen eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} lauten "scroll left" und "scroll right".

### Positionieren von Scroll-Schaltflächen

Wir haben die Scroll-Schaltflächen erstellt. Nun werden wir sie relativ zum Karussell mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positionieren.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Als nächstes wird jede Scroll-Schaltfläche so eingestellt, dass ihre {{cssxref("position")}} auf `absolute` gesetzt ist und ihre {{cssxref("position-anchor")}}-Eigenschaft auf den gleichen Referenznamen wie die Liste gesetzt ist, um die beiden miteinander zu verbinden.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

Um jede Scroll-Schaltfläche tatsächlich zu positionieren, setzen wir Werte auf ihre {{Glossary("inset_properties", "inset properties")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Schaltflächen relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Platz zwischen dem Rand der Schaltfläche und dem Rand des Karussells hinzuzufügen. Zum Beispiel wird die rechte Kante der linken Scroll-Schaltfläche 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Durch das Hinzufügen des Scroll-Schaltflächen-Codes erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "vorherige" und "nächste" Scroll-Schaltflächen zu drücken, um zu sehen, wie die Seiten gescrollt werden, unter Einhaltung des Scroll-Snapping-Verhaltens. Beachten Sie auch, wie die "vorherige"-Schaltfläche automatisch deaktiviert wird, wenn die Liste an den Anfang des Inhalts gescrollt wird, während die "nächste"-Schaltfläche automatisch deaktiviert wird, wenn die Liste an das Ende des Inhalts gescrollt wird.

### Erstellen von Scroll-Markierungen

Scroll-Markierungen sind eine Gruppe von Schaltflächen, von denen jede das Karussell zu einer Position scrollt, die einem der Inhaltsseiten entspricht. Sie bieten ein zusätzliches Navigationstool, das auch Ihren Fortschritt durch die Karussell-Seiten anzeigt.

In diesem Abschnitt werden wir dem Karussell Scroll-Markierungen hinzufügen, die drei Hauptmerkmale umfassen:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf das Scroll-Container-Element gesetzt. Sie muss auf einen anderen Wert als `none` gesetzt sein, damit das {{cssxref("::scroll-marker-group")}}-Pseudo-Element generiert wird; ihr Wert gibt an, wo die Scroll-Markierungsgruppe in der Tab-Reihenfolge und Box-Reihenfolge des Karussells (aber nicht in der DOM-Struktur) erscheint — `before` setzt sie an den Anfang, vor den Scroll-Schaltflächen, während `after` sie an das Ende setzt.
- Das {{cssxref("::scroll-marker-group")}}-Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Markierungen zusammenzufassen und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und repräsentieren ihre Scroll-Markierungen. Diese werden innerhalb des Vorfahren's {{cssxref("::scroll-marker-group")}} zur Layout-Zwecken gesammelt.

Zuerst wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudo-Element nach dem DOM-Inhalt der Liste in der Fokus- und Box-Reihenfolge platziert wird; dies bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste relativ zum Karussell mithilfe der CSS-Ankerpositionierung positioniert, ähnlich wie die Scroll-Schaltflächen, mit der Ausnahme, dass es horizontal zentriert auf dem Karussell mit einem {{cssxref("justify-self")}}-Wert von `anchor-center` wird. Die Gruppe wird mit Flexbox layoutet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`) innerhalb der `::scroll-marker-group` zentriert mit einem Abstand zwischen jedem von ihnen sind.

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

Als nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Markierungen selbst; sie können wie jedes andere [generierte Element](/de/docs/Web/CSS/CSS_generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen anderen Wert als `none` für die `content`-Eigenschaft einstellen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige grundlegende Stile, um die Markierungen als umrissene Kreise erscheinen zu lassen:

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
> Generierte Inhalte sind standardmäßig Inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, da sie als Flex-Elemente layoutet werden.

Schließlich wird für diesen Abschnitt die {{cssxref(":target-current")}}-Pseudo-Klasse verwendet, um die Scroll-Markierung auszuwählen, die der aktuell sichtbaren "Seite" entspricht, und hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir den `background-color` auf `black`, damit sie als ausgefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> In Bezug auf die Zugänglichkeit werden die Scroll-Markierungsgruppe und die enthaltenen Scroll-Markierungen mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Wenn Sie mit der Tastatur zur Gruppe tabben, verhält sie sich wie ein einzelnes Element (d.h. ein weiterer Tastendruck wird die Gruppe umgehen und zum nächsten Element springen), und Sie können mit den linken und rechten (oder oberen und unteren) Cursortasten zwischen den verschiedenen Scroll-Markierungen wechseln.

## Endgültiges Ergebnis des Einzelseiten-Karussells

All die obigen Codes fügen sich zusammen, um das folgende Ergebnis zu erzeugen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem vorherigen Live-Beispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie, sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie die aktuelle Markierung hervorgehoben ist, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben, und verwenden Sie dann die Cursortasten, um durch jede Seite zu wechseln.

Sie können auch zwischen den Seiten navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste ziehen oder die Scroll-Schaltflächen drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Das zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, das erneut [Scroll-Schaltflächen](#erstellen_von_scroll-schaltflächen) und [Scroll-Markierungen](#erstellen_von_scroll-markierungen) zum Navigieren durch die Seiten enthält. Dieses Demo ist auch responsiv — je nach Breite des Ansichtsfensters erscheinen unterschiedliche Mengen an Elementen auf jeder Seite.

Dieses Demo ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass anstelle von Flexbox für das Layout [CSS-Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) und das {{cssxref("::column")}}-Pseudo-Element verwendet werden, um beliebige Spalten zu erstellen, die sich über die gesamte Breite des Karussells erstrecken und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicher sein, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, niemals ein Teil eines Elements außerhalb des Scrollports angezeigt wird. In diesem Fall werden die Scroll-Markierungen an Scroll-Container-Fragmenten, pro Spalte, anstelle von an Kindern, pro Element, erstellt.

Das HTML ist dem des vorherigen Demos sehr ähnlich, mit der Ausnahme, dass es erheblich mehr Listenelemente gibt und, da mehrere Elemente gleichzeitig sichtbar sein werden, wir sie als Elemente statt als Seiten kennzeichnen:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliche CSS, mit Ausnahme der Regeln, die in den folgenden Abschnitten erklärt werden.

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

Dieses Beispiel verwendet [CSS-Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout), anstelle von Flexbox, um die Karussellelemente zu layouten. Der {{cssxref("columns")}}-Wert von `1` zwingt jede Spalte, die volle Breite des Containers einzunehmen, wobei die Inhalte jeweils eine Spalte gleichzeitig anzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird auch angewendet, um die Inhalte mit dem Mittelpunkt der Liste abzustimmen.

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

Wir stellen grundlegendes Box-Styling für die Listenelemente zur Verfügung und dann Layout-Stile, um ein oder mehrere Elemente in die einzelne Inhalts-Spalte passen zu lassen, abhängig von der Breite des Ansichtsfensters. Die Anzahl ändert sich dynamisch, wenn die Liste breiter oder schmaler wird.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wurde eingestellt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf ihnen eingestellt, um ihre Größe zu kontrollieren, was bedeutet, dass ein oder mehrere in eine Spalte passen, die sich zusammen mit der Breite des Ansichtsfensters ausdehnt und zusammenzieht.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center`, das auf den übergeordneten Container angewendet wurde, zu überschreiben, damit der Inhalt der Elemente linksbündig ist.

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird jetzt auf die {{cssxref("::column")}}-Pseudo-Elemente gesetzt — die die Inhalts-Spalten repräsentieren, die von der `columns`-Eigenschaft generiert werden — anstelle auf die Listenelemente. Wir möchten zu jeder vollständigen Spalte und nicht zu jedem einzelnen Listenelement einrasten, wobei mit jeder Scroll-Action alle neuen Elemente gezeigt werden.

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

### Spalten-Scroll-Markierungen

Das CSS zum Erstellen der Scroll-Markierungen in diesem Demo ist nahezu identisch mit dem [vorherigen Demo](#erstellen_von_scroll-markierungen), mit der Ausnahme, dass die Selektoren unterschiedlich sind — die Scroll-Markierungen werden auf den generierten `::column` Scroll-Markierungen und nicht auf den Listenelementen erstellt (beachten Sie, wie wir hier zwei Pseudo-Elemente einschließen, um Scroll-Markierungen auf den generierten Spalten zu erzeugen).

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

## Endgültiges Ergebnis des responsiven Karussells

Das responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu navigieren, indem Sie nach links und rechts wischen, die Bildlaufleiste verwenden, die Scroll-Schaltflächen drücken und die Scroll-Markierungen drücken. Die Funktionalität ist ähnlich wie im Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Markierungen sind auf Spaltenfragmenten gesetzt, die möglicherweise mehrere Elemente enthalten, anstelle auf jedem Element.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in der Liste Platz finden, ändert — und daher auch die Anzahl der generierten Spalten. Mit der Änderung der Spaltenanzahl aktualisiert sich die Anzahl der Scroll-Markierungen dynamisch, sodass jede Spalte in der Scroll-Markierungsgruppe vertreten ist.

## Siehe auch

- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
