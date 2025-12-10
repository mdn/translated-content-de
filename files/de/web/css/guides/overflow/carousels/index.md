---
title: Erstellen von CSS-Karussells
short-title: Karussells erstellen
slug: Web/CSS/Guides/Overflow/Carousels
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

Das [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul definiert Funktionen, die es ermöglichen, flexible und zugängliche reine CSS-Karussells mit vom Browser generierten und vom Entwickler gestalteten Scroll-Buttons und Scroll-Markierungen zu erstellen. Dieser Leitfaden erklärt, wie man ein Karussell mit diesen Funktionen erstellt.

## Karussellkonzepte

**Karussells** sind eine gängige Funktion im Web. Sie nehmen typischerweise die Form eines scrollenden Inhaltsbereichs ein, der mehrere Elemente wie Präsentationsfolien, Anzeigen, Nachrichtenüberschriften oder wichtige Produkteigenschaften enthält.

Benutzer können durch die Elemente navigieren, indem sie auf Navigationsbuttons klicken oder diese aktivieren oder durch Wischen. Die Navigation umfasst in der Regel:

- **Scroll-Buttons**
  - : In der Regel "Zurück"- und "Weiter"-Buttons oder Links.
- **Scroll-Markierungen**
  - : Eine Reihe von Button- oder Link-Icons, die jeweils eines oder mehrere Elemente repräsentieren, je nachdem, wie viele Elemente an jeder Scroll-Position innerhalb des Karussells angezeigt werden.

![Ein Karussell mit einem Inhaltsbereich in der Mitte, Zurück- und Weiter-Buttons links und rechts sowie Scroll-Markierungen unten](/shared-assets/images/diagrams/css/carousels/carousel.svg)

Ein Hauptmerkmal von Karussells ist die **Paginierung** — die Elemente fühlen sich wie separate Inhaltsstücke an, die bewegt werden, anstatt einen kontinuierlichen Inhaltsbereich zu bilden. Sie könnten ein Element nach dem anderen anzeigen oder mehrere Elemente auf jeder Karussell-"Seite". Wenn mehrere Elemente sichtbar sind, könnten Sie jedes Mal eine völlig neue Gruppe von Elementen anzeigen, wenn der "Weiter"- oder "Zurück"-Button gedrückt wird. Alternativ könnte ein einziges neues Element an einem Ende der Liste hinzugefügt werden, während das Element am anderen Ende aus der Sicht verschwindet.

Karussells können recht empfindlich und schwierig mit JavaScript zu implementieren sein. Sie erfordern Skripte, um Scroll-Markierungen den Elementen zuzuordnen, die sie repräsentieren, während die Scroll-Buttons kontinuierlich aktualisiert werden müssen, um ein korrektes Funktionieren zu gewährleisten. Wenn Karussells mit JavaScript erstellt werden, muss die Zugänglichkeit des Karussells und der zugehörigen Steuerungen hinzugefügt werden.

Glücklicherweise können wir zugängliche Karussells mit zugehörigen Steuerungen ohne die Verwendung von JavaScript erstellen, indem wir CSS-Karussell-Funktionen nutzen.

## CSS-Karussell-Funktionen

Die CSS-Karussell-Funktionen bieten Pseudo-Elemente und Pseudo-Klassen, die es ermöglichen, Karussells nur mit CSS und HTML zu erstellen, wobei der Browser die meiste Scroll- und Link-Referenzierung auf eine zugängliche, flexible und konsistente Weise übernimmt. Diese Funktionen sind wie folgt:

- {{cssxref("::scroll-button()")}}
  - : Innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert, repräsentieren diese Pseudo-Elemente Scroll-Buttons, die den Container in eine angegebene Richtung scrollen.
- {{cssxref("::scroll-marker-group")}}
  - : Innerhalb eines Scroll-Containers generiert; wird verwendet, um Scroll-Markierungen zusammenzufügen und anzuordnen.
- {{cssxref("::scroll-marker")}}
  - : Generiert innerhalb der Kinder eines Scroll-Container-Vorfahren oder innerhalb der Spalten eines Scroll-Containers, um deren Scroll-Markierungen darzustellen. Diese können ausgewählt werden, um den Container zu ihren zugehörigen Kindelementen oder Spalten zu scrollen, und werden für Layout-Zwecke innerhalb der {{cssxref("::scroll-marker-group")}} des Scroll-Containers gesammelt.
- {{cssxref(":target-current")}}
  - : Wird verwendet, um die derzeit aktive Scroll-Markierung auszuwählen und zu gestalten. Die Fähigkeit, die aktive Scroll-Markierung zu gestalten, ist sowohl für die Benutzerfreundlichkeit als auch für die Zugänglichkeit wichtig.
- {{cssxref(":target-before")}} und {{cssxref(":target-after")}}
  - : Wird verwendet, um Scroll-Markierungen vor beziehungsweise nach der derzeit aktiven Scroll-Markierung auszuwählen und zu gestalten. Sie sind nützlich, um Navigationspunkte zu gestalten, die vor und nach der aktiven Navigationsposition kommen, um anzuzeigen, welche Elemente der Benutzer bereits angesehen hat und welche noch bevorstehen.
- {{cssxref("::column")}}
  - : Repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten darstellt über [CSS-Multicol-Layout](/de/docs/Web/CSS/Guides/Multicol_layout). Das `::column` Pseudo-Element kann in Verbindung mit {{cssxref("::scroll-marker")}} verwendet werden, um eine Scroll-Markierung für jede Spalte zu erzeugen.

## Karussell mit Einzelseiten

Unser erstes Demo-Beispiel ist ein Karussell von Einzelseiten, wobei jedes Element die volle Seite einnimmt. Wir haben [Scroll-Markierungen](#scroll-markierungen_erstellen) als untere Navigation und [Scroll-Buttons](#scroll-buttons_erstellen) an den Seiten der Seite, die es dem Benutzer ermöglichen, zu den nächsten und vorherigen Seiten zu gelangen.

Wir verwenden [Flexbox](#karussell-layout_mit_flexbox), um das Karussell zu layouten, [Scroll-Snapping](#scroll-snapping_bei_der_liste_einrichten), um klare Paginierung zu erzwingen, und Ankerpositionierung, um die [Scroll-Buttons zu positionieren](#scroll-buttons_positionieren) und Scroll-Markierungen relativ zum Karussell zu setzen.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um eine einzelne Reihe von Elementen zu erstellen; die `<ul>` ist der Flex-Container, und die `<li>` Kindelemente werden horizontal angezeigt, wobei jedes Element die volle Breite des Karussells einnimmt.

Die ungeordnete Liste wird so gemacht, dass sie die volle Breite des Ansichtsfensters mit einer Breite {{cssxref("width")}} von `100vw` füllt; es bekommt auch eine {{cssxref("height")}} von `300px` und einigen {{cssxref("padding")}}. Wir verwenden dann Flexbox, um die Liste zu layouten — indem wir einen {{cssxref("display")}}-Wert von `flex` setzen, damit die Kindelemente in einer Reihe angezeigt werden (aufgrund des Standard-{{cssxref("flex-direction")}}-Werts von `row`), mit einem {{cssxref("gap")}} von `4vw` zwischen jedem Element.

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

Jetzt ist es an der Zeit, die Listenelemente zu stylen. Die ersten Deklarationen bieten rudimentäre Styles. Die wichtige Deklaration ist der {{cssxref("flex")}}-Wert von `0 0 100%`, der jedes Element dazu zwingt, so breit wie der Container (das `<ul>`) zu sein. Dadurch wird der Inhalt seinen Container überfluten und das Ansichtsfenster scrollt horizontal.

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

Zusätzlich wird jedem ungeraden Listenelement mit {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe zugewiesen, damit der Scroll-Effekt leichter erkennbar ist.

### Scroll-Snapping bei der Liste einrichten

In diesem Abschnitt werden wir einen Überlaufwert auf dem `<ul>` setzen, um es in einen {{Glossary("scroll_container", "Scroll-Container")}} zu verwandeln, und dann [CSS Scroll Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) anwenden, damit die Liste beim Scrollen zum Mittelpunkt jedes Listenelements einrastet.

Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird auf das `<ul>` gesetzt, sodass sein Inhalt horizontal innerhalb der Liste scrollt, anstatt das gesamte Ansichtsfenster zu scrollen. [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird dann verwendet, um zu jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird gesetzt, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden, während das Schlüsselwort `mandatory` bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappt.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

Als nächstes wird ein {{cssxref("scroll-snap-align")}}-Wert von `center` auf die Listenelemente gesetzt, sodass die Liste beim Scrollen zum Mittelpunkte jedes Listenelements einrastet.

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

Der bisher gezeigte Code wird wie folgt gerendert:

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

Versuchen Sie, die Liste durch Wischen oder mit der Scroll-Leiste zu scrollen, um den Scroll-Snap-Effekt zu sehen. Egal wo Sie Ihre Scroll-Bewegung beenden, ein Element wird immer an Ort und Stelle "schnappen".

> [!NOTE]
> CSS Scroll Snapping ist nicht obligatorisch, um die CSS-Karussell-Funktionen zu verwenden. Karussells funktionieren jedoch viel besser mit eingeschlossenem Scroll Snapping. Ohne Scroll Snapping ist es unwahrscheinlich, dass die Scroll-Buttons und Markierungen sauber zwischen den Seiten navigieren, und das Ergebnis wird unterdurchschnittlich sein.

### Scroll-Buttons erstellen

In diesem Abschnitt fügen wir der Demo "Zurück"- und "Weiter"-Scroll-Buttons hinzu, um ein Werkzeug zum Navigieren zwischen den Karussell-Seiten bereitzustellen. Dies wird mit dem {{cssxref("::scroll-button()")}} Pseudo-Element erreicht.

Die `::scroll-button()` Pseudo-Elemente erzeugen Buttons innerhalb eines Scroll-Containers nur, wenn ihre {{cssxref("content")}} Eigenschaften auf einen Wert ungleich `none` gesetzt sind. Jedes `::scroll-button()` repräsentiert einen Scroll-Button, dessen Scroll-Richtung durch das Argument des Selektors angegeben wird. Pro Scroll-Container können bis zu vier Scroll-Buttons generiert werden, wobei jeder den Inhalt des Containers in Richtung des Starts oder Endes der Block- oder Inline-Achse scrollt.

Es kann auch ein Argument von `*` angegeben werden, um alle `::scroll-button()` Pseudo-Elemente mit Styles anzusprechen.

Zuerst werden alle Scroll-Buttons mit einigen rudimentären Styles versehen, sowie Styles basierend auf verschiedenen Zuständen. Es ist wichtig, {{cssxref(":focus")}} Styles für Tastaturbenutzer zu setzen. Außerdem sind Scroll-Buttons automatisch auf [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) gesetzt, wenn keine weitere Scroll-Möglichkeit in dieser Richtung besteht, daher verwenden wir die {{cssxref(":disabled")}} Pseudo-Klasse, um diesen Zustand anzusprechen.

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
> Wir setzen ebenfalls einen {{cssxref("cursor")}}-Wert von `pointer` auf die Scroll-Buttons, um es offensichtlicher zu machen, dass sie interaktiv sind (eine Verbesserung sowohl für die allgemeine {{Glossary("UX", "UX")}} als auch für die [kognitive Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)) und setzen ihn zurück, wenn die Scroll-Buttons `:disabled` sind.

Als Nächstes wird ein passendes Icon auf den linken und rechten Scroll-Buttons über die `content`-Eigenschaft gesetzt, was auch die Erzeugung der Scroll-Buttons bewirkt:

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> Die Scroll-Buttons erhalten automatisch einen geeigneten zugänglichen Namen, sodass sie von unterstützenden Technologien angemessen bekannt gegeben werden. Zum Beispiel haben die oben genannten Buttons eine implizite [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von `button` und ihre {{Glossary("accessible_name", "zugänglichen Namen")}} lauten "scroll left" und "scroll right".

### Scroll-Buttons positionieren

Wir haben die Scroll-Buttons erstellt. Jetzt werden wir sie relativ zum Karussell positionieren, indem wir [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) verwenden.

Zuerst wird ein Referenz-{{cssxref("anchor-name")}} auf die Liste gesetzt. Dann wird bei jedem Scroll-Button die {{cssxref("position")}} auf `absolute` gesetzt und seine {{cssxref("position-anchor")}}-Eigenschaft auf denselben Referenznamen, der in der Liste definiert ist, um die beiden zu assoziieren.

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}
```

Um jeden Scroll-Button tatsächlich zu positionieren, setzen wir Werte auf ihren {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Wir verwenden {{cssxref("anchor()")}}-Funktionen, um die angegebenen Seiten der Buttons relativ zu den Seiten des Karussells zu positionieren. In jedem Fall wird die {{cssxref("calc()")}}-Funktion verwendet, um etwas Abstand zwischen der Kante des Buttons und der Kante des Karussells hinzuzufügen. Beispielsweise wird die rechte Kante des linken Scroll-Buttons 70 Pixel rechts von der linken Kante des Karussells positioniert.

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

Indem wir den Scroll-Button-Code hinzufügen, erhalten wir das folgende Ergebnis:

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

Versuchen Sie, die "Zurück"- und "Weiter"-Scroll-Buttons zu drücken, um zu sehen, wie die Seiten gescrollt werden, unter Berücksichtigung des Scroll-Snapping-Verhaltens. Beachten Sie auch, wie der "Zurück"-Button automatisch deaktiviert wird, wenn die Liste zum Anfang des Inhalts gescrollt wird, während der "Weiter"-Button automatisch deaktiviert wird, wenn die Liste zum Ende des Inhalts gescrollt wird.

### Scroll-Markierungen erstellen

Scroll-Markierungen sind eine Gruppe von Buttons, die jeweils das Karussell zu einer Position scrollen, die einem der Inhaltsseiten entspricht. Sie bieten ein zusätzliches Navigationswerkzeug, das auch Ihren Fortschritt durch die Karussellseiten anzeigt.

In diesem Abschnitt fügen wir dem Karussell Scroll-Markierungen hinzu, die drei Hauptfunktionen beinhalten:

- Die {{cssxref("scroll-marker-group")}}-Eigenschaft wird auf das Scroll-Container-Element gesetzt. Sie muss auf einen ungleich `none` Wert gesetzt werden, damit das {{cssxref("::scroll-marker-group")}}-Pseudo-Element generiert wird; sein Wert gibt an, wo die Scroll-Markierungen in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Karussells erscheinen (aber nicht in der DOM-Struktur) — `before` platziert es am Anfang, vor den Scroll-Buttons, während `after` es am Ende platziert.
- Das {{cssxref("::scroll-marker-group")}}-Pseudo-Element existiert innerhalb eines Scroll-Containers und wird verwendet, um Scroll-Markierungen als ganze Gruppe zusammenzufassen, zu enthalten und anzuordnen.
- {{cssxref("::scroll-marker")}}-Pseudo-Elemente existieren innerhalb der Kinder und {{cssxref("::column")}}-Fragmente eines Scroll-Container-Vorfahren und repräsentieren ihre Scroll-Markierungen. Diese werden für Layoutzwecke innerhalb der {{cssxref("::scroll-marker-group")}} des Vorfahren gesammelt.

Zu Beginn wird die `scroll-marker-group`-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudo-Element nach dem DOM-Inhalt der Liste in der Fokus- und Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

> [!NOTE]
> Alternativ kann ein Scroll-Markierungensammler aus einem bestehenden Element erstellt werden, das eine Reihe von {{htmlelement("a")}}-Elementen enthält, indem {{cssxref("scroll-target-group")}} verwendet wird.

Als Nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste relativ zum Karussell positioniert, indem CSS Ankerpositionierung verwendet wird, ähnlich wie die der Scroll-Buttons, außer dass es horizontal auf dem Karussell zentriert wird, indem ein {{cssxref("justify-self")}}-Wert von `anchor-center` verwendet wird. Die Gruppe wird mit Flexbox ausgelegt, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass ihre Kinder (die `::scroll-marker`-Pseudo-Elemente) in der Mitte der `::scroll-marker-group` mit einem Abstand zwischen jedem Element zentriert sind.

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

Als Nächstes kümmern wir uns um das Aussehen und Gefühl der Scroll-Markierungen selbst; sie können wie jedes andere [generierte Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gestylt werden. Es ist wichtig zu beachten, dass wir einen ungleich `none` Wert für die `content`-Eigenschaft setzen müssen, damit die Scroll-Markierungen tatsächlich generiert werden. Wir setzen auch einige grundlegende Styles, um die Markierungen als umrissene Kreise erscheinen zu lassen:

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, da sie als Flex-Elemente ausgelegt werden.

Schließlich für diesen Abschnitt wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um die Scroll-Markierung auszuwählen, die der aktuellen sichtbaren "Seite" entspricht, die den Fortschritt des Benutzers durch den Inhalt anzeigt. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt wird.

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> Wenn ein Scroll-Markierungengruppencontainer bei einem Scroll-Container mithilfe der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/ [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Sie können mit der Tastatur darauf zugreifen, dann mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Markierungen und -Buttons wie erwartet ändert. Die Scroll-Markierungen können auch wie erwartet normal durchlaufen werden.

## Finale Ergebnis des Einzelseiten-Karussells

Aller obiger Code wird zusammengefügt, um das folgende Ergebnis zu erstellen:

{{EmbedLiveSample("first-example", "100%", "400px")}}

Seit dem letzten Livebeispiel wurden die Scroll-Markierungen hinzugefügt — versuchen Sie, auf sie zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie die aktuelle Markierung hervorgehoben wird, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um jede Seite durchzugehen.

Sie können auch zwischen Seiten navigieren, indem Sie nach links und rechts wischen, die Scroll-Leiste ziehen oder die Scroll-Buttons drücken.

## Responsives Karussell: Mehrere Elemente pro Seite

Das zweite Demo ist ein Karussell mit mehreren Elementen pro Seite, welche wieder [Scroll-Buttons](#scroll-buttons_erstellen) und [Scroll-Markierungen](#scroll-markierungen_erstellen) zum Navigieren durch die Seiten enthalten. Diese Demonstration ist auch responsiv — je nach Breite des Ansichtsfensters erscheinen unterschiedliche Anzahl von Elementen auf jeder Seite.

Dieses Demo ist dem [Karussell mit Einzelseiten](#karussell_mit_einzelseiten) sehr ähnlich, außer dass anstelle von Flexbox für das Layout das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) und das {{cssxref("::column")}} Pseudo-Element verwendet werden, um willkürliche Spalten zu erstellen, die die gesamte Breite des Karussells überspannen und mehrere Elemente enthalten können.

Mit diesem Ansatz können wir sicherstellen, dass, wenn das Ansichtsfenster wächst oder schrumpft, während die Elementgröße konstant bleibt, nie ein Teil eines Elements außerhalb des Scroll-Ports angezeigt wird. In diesem Fall werden die Scroll-Markierungen auf Scroll-Container-Fragmenten pro Spalte erstellt, anstatt auf Kindern pro Element.

Das HTML ist dem des vorherigen Demos sehr ähnlich, mit der Ausnahme, dass es deutlich mehr Listenelemente gibt und, da mehrere Elemente auf einmal sichtbar sein werden, wir sie als Elemente statt als Seiten beschriften:

```html-nolint
...
  <li>
    <h2>Item 1</h2>
  </li>
...
```

Dieses Demo hat auch sehr ähnliche CSS, mit Ausnahme der im folgenden Abschnitt erklärten Regeln.

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

Dieses Beispiel verwendet [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) anstelle von Flexbox, um die Karussell-Elemente zu layouten. Der {{cssxref("columns")}} Wert von `1` zwingt jede Spalte dazu, die volle Breite des Containers einzunehmen, wobei der Inhalt eine einzelne Spalte auf einmal anzeigt. Ein {{cssxref("text-align")}} Wert von `center` wird auch angewendet, der den Inhalt zwingt, sich mit der Mitte der Liste auszurichten.

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

Wir bieten rudimentäre Box-Styling für die Listenelemente, dann wenden wir Layout-Styles an, um ein oder mehrere Elemente in der einzelnen Inhaltsspalte unterzubringen, abhängig von der Ansichtsfensterbreite. Die Anzahl ändert sich dynamisch, während die Liste breiter oder schmaler wird.

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

Die wichtigen Layout-Eigenschaften sind wie folgt:

- Ein {{cssxref("display")}} Wert von `inline-block` wurde gesetzt, um die Listenelemente nebeneinander zu setzen und die Liste horizontal scrollbar zu machen.
- Eine absolute {{cssxref("width")}} von `200px` wurde auf sie gesetzt, um ihre Größe zu kontrollieren, was bedeutet, dass ein oder mehrere in eine Spalte passen, die wächst und schrumpft, zusammen mit der Breite des Ansichtsfensters.
- Ein `text-align` Wert von `left` wird auf sie gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt ist, zu überschreiben, sodass der Elementinhalt links ausgerichtet wird.

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird nun auf die {{cssxref("::column")}} Pseudo-Elemente gesetzt — die die Inhaltsspalten repräsentieren, die durch die `columns` Eigenschaft generiert werden — anstatt auf die Listenelemente. Wir möchten auf jede vollständige Spalte einrasten, anstatt auf jedes einzelne Listenelement, und alle neuen Elemente bei jeder Scroll-Aktion anzeigen.

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

### Spaltenroll-Markierungen

Das CSS zur Erstellung der Scroll-Markierungen in diesem Demo ist nahezu identisch mit dem [vorherigen Demo](#scroll-markierungen_erstellen), außer dass die Selektoren unterschiedlich sind — die Scroll-Markierungen werden auf den generierten `::column` Pseudo-Elementen erstellt, nicht auf den Listenelementen. Beachten Sie, dass wir hier zwei Pseudo-Elemente einfügen, um Scroll-Markierungen auf den generierten Spalten zu erzeugen.

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

Schließlich verwenden wir die `:target-current` Pseudo-Klasse, um die aktive Scroll-Markierung zu markieren und dem Benutzer eine Vorstellung davon zu geben, wo er sich in der Navigation befindet. Wir verwenden auch die {{cssxref(":target-before")}} und {{cssxref(":target-after")}} Pseudo-Klassen, um einige benutzerdefinierte Styles auf die Scroll-Markierungen vor und nach der aktiven anzuwenden. Wir setzen auch eine {{cssxref("transition")}} auf die `ul::column::scroll-marker:target-current` Regel, damit die Style-Änderungen zwischen den verschiedenen Zuständen reibungslos animieren.

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

## Finale Ergebnis des responsiven Karussells

Das responsive Karussell wird wie folgt gerendert:

{{EmbedLiveSample("second-example", "100%", "400px")}}

Versuchen Sie, zwischen den verschiedenen Seiten zu wechseln, indem Sie nach links und rechts wischen, die Scroll-Leiste verwenden, die Scroll-Buttons drücken und die Scroll-Markierungen betätigen. Die Funktionalität ähnelt dem Einzelseiten-Flexbox-Beispiel, außer dass jetzt mehrere Listenelemente in jeder navigierten Position sind; die Scroll-Markierungen sind auf Spaltenfragmenten, die möglicherweise mehrere Elemente enthalten, anstatt auf jedem Element gesetzt.

Versuchen Sie auch, die Bildschirmbreite zu ändern, und Sie werden sehen, dass sich die Anzahl der Listenelemente, die in die Liste passen, ändert — und daher ändert sich auch die Anzahl der generierten Spalten. Wenn sich die Anzahl der Spalten ändert, aktualisiert sich die Anzahl der Scroll-Markierungen dynamisch, sodass jede Spalte in der Scroll-Markierungsgruppe dargestellt wird.

## Siehe auch

- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
