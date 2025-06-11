---
title: "<table>: Das Table-Element"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten – Informationen, die in einer zweidimensionalen Tabelle aus Zeilen und Spalten von Zellen mit Daten dargestellt werden.

{{InteractiveExample("HTML Demo: &lt;table&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, um bestehenden Code zu aktualisieren oder aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Spezifiziert die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert, als nicht-negativer Ganzzahlwert (in Pixeln), die Größe des Rahmens um die Tabelle. Wenn auf `0` gesetzt, wird das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Verwenden Sie stattdessen die {{cssxref("padding")}} CSS-Eigenschaft auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Verwenden Sie stattdessen die {{cssxref("border-spacing")}} CSS-Eigenschaft auf dem `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die {{cssxref("border-collapse")}} CSS-Eigenschaft des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie die {{cssxref("border-style")}} und {{cssxref("border-width")}} CSS-Eigenschaften stattdessen, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Ränder) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rand um jede Zelle). Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie das {{htmlelement("caption")}}-Element stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Spezifiziert die Breite der Tabelle. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut enthält, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertelose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn als Prozentwert festgelegt, wird die minimale Tabellenhöhe relativ zur Höhe des Elternelements angegeben. Verwenden Sie die {{cssxref("min-height")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Visuelle Struktur von Tabelleneinhalten

Die folgenden Elemente sind Teil der Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Die `<table>`-Box stellt einen Tabellengliederungskontext her. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln in Anspruch:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox belegt eine Zeile von Zellen.
2. Eine Zeilengruppenbox belegt eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden nebeneinander in der Reihenfolge des Quellcodes platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attributs werden die Spalten von links nach rechts oder von rechts nach links angeordnet. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppenbox belegt eine oder mehrere Spaltenboxen.
5. Eine Zellenbox kann über mehrere Zeilen und Spalten reichen. Benutzeragenten passen die Zellen an, um in die verfügbaren Zeilen und Spalten zu passen.

Tabellenzellen haben Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Für Stilzwecke kann man sich die Tabellenelemente auf sechs übereinanderliegenden Schichten vorstellen:

![Table element layers](table_element_layers.png)

Ein Hintergrund, der auf ein Element in einer Schicht gesetzt wird, ist nur sichtbar, wenn die Schichten darüber einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz einnimmt.

## Barrierefreiheit

### Beschriftungen

Indem man ein {{HTMLElement("caption")}}-Element bereitstellt, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft es den Leuten zu entscheiden, ob sie den restlichen Tabelleninhalt überprüfen oder überspringen müssen.

Dies hilft Menschen, die mit Hilfstechnologie wie Bildschirmlesegeräten navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Bedenken.

- [MDN Adding a caption to your table with \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Scoping von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut bei Kopfzellen ({{HTMLElement("th")}} Elemente) ist in einfachen Kontexten überflüssig, da die Reichweite abgeleitet wird. Einige Hilfstechnologien ziehen jedoch möglicherweise keine korrekten Schlüsse, daher kann die Angabe des Kopfbereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einem Header verbundenen Zellen bereitzustellen.

- [MDN table accessibility guide](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tables with two headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tables with irregular headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Bildschirmlesegeräte können Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Kopfzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten alternative Möglichkeiten in Betracht gezogen werden, um den Inhalt der Tabelle darzustellen, darunter das Aufteilen in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Zusätzlich zur Unterstützung von Personen, die Hilfstechnologien einsetzen, um den Tabelleninhalt zu verstehen, kann dies auch Menschen mit kognitiven Herausforderungen zugutekommen, die Schwierigkeiten haben, die durch die Tabellenlayout beschriebenen Assoziationen zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um programmgesteuert jede Tabellenzelle mit der damit verbundenen(n) Kopfzelle(n) ({{HTMLElement("th")}}-Elemente) zu verknüpfen.

- [MDN table accessibility guide](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tables with multi-level headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die nachfolgenden Beispiele zeigen Tabellen von zunehmender Komplexität. Siehe auch unseren Anfänger-[Leitfaden zum Stylen von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Styling-Informationen einschließlich nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Daher ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur einfacher zu stylen, sondern ermöglicht nützliche und barrierefreie Tabellen, die von jedem, einschließlich Suchmaschinen und Nutzern von Hilfstechnologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, mit den nachfolgenden Beispielen, die in der Komplexität zunehmen. Zunächst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellspanne oder explizit definierte Zellbeziehungen. Nicht einmal eine Beschriftung ist gegeben. Während wir die Beispiele durcharbeiten, werden sie schrittweise erweitert, um alle Tabelleneigenschaften zu enthalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel zeigt eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS hinzugefügt.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen darin definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in ihrer jeweiligen Spalte – das ist, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile ist in der zweiten Spalte.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Maria Sanchez</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Michael Johnson</td>
    <td>34</td>
  </tr>
</table>
```

#### Ergebnis

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-St Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling resultiert ausschließlich aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen), jeweils mit vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen beinhalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da Tabellensektionselemente nicht verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppe, d.h. alle Zeilen sind innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

```html
<table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Member Since</th>
    <th>Balance</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

#### CSS

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle herum zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derer, die mit {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen angegeben sind, wodurch jede Kopf- und Datenzelle abgegrenzt wird.

```css
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Expanded_table_with_header_cells", 650, 110)}}

### Spezifizierung von Tabellenbeziehungen

Bevor die Tabelle auf erweiterte Weise erweitert wird, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf die entsprechenden `col` (Spalte) oder `row` (Zeile) gesetzt werden.

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">ID</th>
    <th scope="col">Member Since</th>
    <th scope="col">Balance</th>
  </tr>
  <tr>
    <th scope="row">Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th scope="row">Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th scope="row">Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung liefert wertvolle kontextuelle Informationen für Hilfstechnologien wie Screenreader, um zu identifizieren, welche Zellen zu den Kopfzeilen gehören.

> [!NOTE]
> Ist die Tabellenstruktur noch komplexer, kann die (zusätzliche) Nutzung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs bei den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplexe_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Neben der Verbesserung der Barrierefreiheit durch [Spezifizierung der Zellbeziehungen](#spezifizierung_von_tabellenbeziehungen) können die {{Glossary("semantics", "Semantiken")}} der Tabelle durch Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest der Tabelleninhalte bietet, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um explizit diese Zeile als Kopfsektion der Tabelle anzugeben. Darüber hinaus kann das, was der Browser automatisch erreicht, auch explizit definiert werden – der Körper der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">Member Since</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

Erneut bleiben das CSS und das visuelle Ergebnis unverändert – die Spezifizierung solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für Hilfstechnologien, einschließlich Screenreadern und Suchmaschinen sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspannung

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird eine neue Spalte für ein "Mitgliedschafts-Enddatum" in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Darüber hinaus wird eine Zeile ({{HTMLElement("tr")}}-Element) innerhalb der Kopfsektion ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschafts-Daten"-Kopfzeile als Überschrift für die "Beitritts-" und "Abbruch"-Spalten einzuführen.

Das Erstellen der zweiten Kopfzeile beinhaltet das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Reihen zuzuordnen.

```html
<table>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 130)}}

Die Kopfsektion hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elementen) "Name", "ID", "Mitgliedschafts-Daten" und "Guthaben", und eine "Mitgliedschafts-Daten"-Kopfzeile mit zwei Unterüberschriften, die in einer zweiten Zeile sind: "Beitritt" und "Abbruch". Dies wird erreicht durch:

- Die erste Zeile's "Name", "ID", und "Guthaben" Kopfzellen spannen beide Tabellenkopfzeilen mit dem [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribut, wodurch sie je zwei Zeilen hoch werden.
- Die erste Zeile's "Mitgliedschafts-Daten"-Kopfzelle spannt zwei Spalten mit dem [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut, was sie zwei Spalten breit macht.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beitritt" und "Abbruch", da die anderen drei Spalten mit den Zellen in der ersten Zeile, die zwei Zeilen spannen, verbunden sind. Die zwei Kopfzellen sind korrekt unter der "Mitgliedschafts-Daten"-Kopfzeile positioniert.

### Tabellenschriftzug und Spaltenübersicht

Es ist eine übliche und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, damit Benutzer schnell die Relevanz der Tabelle bestimmen können. Darüber hinaus wird die "Guthaben"-Spalte zusammengefasst, indem die Summe der Guthaben der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellen-Zusammenfassung wird durch die Verwendung einer Tabellen [caption](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt. Die Caption stellt die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} der Tabelle bereit.

Schließlich wird ein Tabellenfußbereich ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Guthaben"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

```html
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Table_caption_and_column_summary", 650, 180)}}

### Grundlegendes Tabelenstyling

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und einen {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Das HTML bleibt dieses Mal unverändert, also lassen Sie uns direkt in das CSS eintauchen.

```html hidden
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Während eine {{cssxref("font")}}-Eigenschaft hier auf das `<table>`-Element angewendet wird, um eine optisch ansprechendere Schriftart (oder eine, je nach persönlicher Meinung, schreckliche serifenlose Schriftart) einzustellen, ist der interessante Teil die zweite Stilregel, bei der die {{HTMLElement("tr")}}-Elemente innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} durch die hinzugefügte hellblaue {{cssxref("background-color")}} gestylt werden. Dies ist eine Möglichkeit, schnell einen Hintergrundfarbe auf alle Zellen in bestimmten Sektionen gleichzeitig anzuwenden.

```css
table {
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
}

thead > tr,
tfoot > tr {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_table_styling", 650, 180)}}

### Fortgeschrittenes Tabellenstyling

Jetzt gehen wir aufs Ganze, mit Stilen sowohl für die Zeilen im Kopf- als auch im Körperbereich, einschließlich wechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben in Abhängigkeit von deren Position innerhalb einer Zeile, und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderungen am HTML erneut. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur erreichen kann?

```html hidden
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Das CSS ist diesmal viel detaillierter. Es ist nicht kompliziert, aber es passiert eine Menge. Lassen Sie es uns aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und sich berührende Rahmen zu einem einzigen Rahmen statt zu doppelten zusammenzufalten. Zusätzlich wird das {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft am `bottom` der Tabelle positioniert:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}
```

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was bei den Zellen im Kopfbereich sichtbar wird, die zwei Zeilen spannen:

```css
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 6px;
}

th {
  vertical-align: bottom;
}
```

Die nächste CSS-Regel legt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf fest (wie mit {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfs auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweiten_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen vorhanden sind; den Stil auf die erste Zeile anzuwenden würde uns nicht das erwartete Ergebnis bringen:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beitritt" und "Abbruch" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und den "Wermutstropfen" einer gekündigten Mitgliedschaft zu repräsentieren. Hier graben wir in die letzte Zeile des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selektor und geben die erste Kopfzelle darin (die "Beitritt"-Kopfzeile) eine grünliche Farbe und die zweite Kopfzelle darin (die "Abbruch"-Kopfzeile) einen rötlichen Ton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls auffallen sollte, wird auch hier ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Reihe des Tabellenteils mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch abwechselnde Zeilenfarben zu verbessern – dies wird manchmal als "Zebramuster" bezeichnet. Lassen Sie uns ein bisschen {{cssxref("background-color")}} auf jede gerade Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es üblich ist, Währungswerte in Tabellen rechtsbündig auszurichten, machen wir das hier. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich werden einige Stile ähnlich wie der Kopf auch auf den Fußbereich der Tabelle angewendet, um ihn ebenfalls hervorzuheben:

```css
tfoot > tr {
  border-top: 2px dashed rgb(140 140 140);
  background-color: rgb(228 240 245);
}

tfoot th,
tfoot td {
  text-align: right;
  font-weight: bold;
}
```

### Große Tabellen in kleinen Räumen anzeigen

Ein häufiges Problem bei Tabellen im Web ist, dass sie in kleinen Bildschirmen nicht sehr gut funktionieren, wenn die Menge an Inhalt groß ist, und die Möglichkeit, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht geändert werden kann, um eine Hülle zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist, und es gibt nichts Bemerkenswertes daran. Das CSS ist in diesem Beispiel nützlicher, um es zu inspizieren.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:</th>
      <th>2<sup>3</sup> equals:</th>
      <th>3<sup>3</sup> equals:</th>
      <th>4<sup>3</sup> equals:</th>
      <th>5<sup>3</sup> equals:</th>
      <th>6<sup>3</sup> equals:</th>
      <th>7<sup>3</sup> equals:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>row 1: 1</td>
      <td>row 1: 8</td>
      <td>row 1: 27</td>
      <td>row 1: 64</td>
      <td>row 1: 125</td>
      <td>row 1: 216</td>
      <td>row 1: 343</td>
    </tr>
    <tr>
      <td>row 2: 1</td>
      <td>row 2: 8</td>
      <td>row 2: 27</td>
      <td>row 2: 64</td>
      <td>row 2: 125</td>
      <td>row 2: 216</td>
      <td>row 2: 343</td>
    </tr>
    <tr>
      <td>row 3: 1</td>
      <td>row 3: 8</td>
      <td>row 3: 27</td>
      <td>row 3: 64</td>
      <td>row 3: 125</td>
      <td>row 3: 216</td>
      <td>row 3: 343</td>
    </tr>
    <tr>
      <td>row 4: 1</td>
      <td>row 4: 8</td>
      <td>row 4: 27</td>
      <td>row 4: 64</td>
      <td>row 4: 125</td>
      <td>row 4: 216</td>
      <td>row 4: 343</td>
    </tr>
    <tr>
      <td>row 5: 1</td>
      <td>row 5: 8</td>
      <td>row 5: 27</td>
      <td>row 5: 64</td>
      <td>row 5: 125</td>
      <td>row 5: 216</td>
      <td>row 5: 343</td>
    </tr>
    <tr>
      <td>row 6: 1</td>
      <td>row 6: 8</td>
      <td>row 6: 27</td>
      <td>row 6: 64</td>
      <td>row 6: 125</td>
      <td>row 6: 216</td>
      <td>row 6: 343</td>
    </tr>
    <tr>
      <td>row 7: 1</td>
      <td>row 7: 8</td>
      <td>row 7: 27</td>
      <td>row 7: 64</td>
      <td>row 7: 125</td>
      <td>row 7: 216</td>
      <td>row 7: 343</td>
    </tr>
    <tr>
      <td>row 8: 1</td>
      <td>row 8: 8</td>
      <td>row 8: 27</td>
      <td>row 8: 64</td>
      <td>row 8: 125</td>
      <td>row 8: 216</td>
      <td>row 8: 343</td>
    </tr>
    <tr>
      <td>row 9: 1</td>
      <td>row 9: 8</td>
      <td>row 9: 27</td>
      <td>row 9: 64</td>
      <td>row 9: 125</td>
      <td>row 9: 216</td>
      <td>row 9: 343</td>
    </tr>
    <tr>
      <td>row 10: 1</td>
      <td>row 10: 8</td>
      <td>row 10: 27</td>
      <td>row 10: 64</td>
      <td>row 10: 125</td>
      <td>row 10: 216</td>
      <td>row 10: 343</td>
    </tr>
    <tr>
      <td>row 11: 1</td>
      <td>row 11: 8</td>
      <td>row 11: 27</td>
      <td>row 11: 64</td>
      <td>row 11: 125</td>
      <td>row 11: 216</td>
      <td>row 11: 343</td>
    </tr>
    <tr>
      <td>row 12: 1</td>
      <td>row 12: 8</td>
      <td>row 12: 27</td>
      <td>row 12: 64</td>
      <td>row 12: 125</td>
      <td>row 12: 216</td>
      <td>row 12: 343</td>
    </tr>
    <tr>
      <td>row 13: 1</td>
      <td>row 13: 8</td>
      <td>row 13: 27</td>
      <td>row 13: 64</td>
      <td>row 13: 125</td>
      <td>row 13: 216</td>
      <td>row 13: 343</td>
    </tr>
    <tr>
      <td>row 14: 1</td>
      <td>row 14: 8</td>
      <td>row 14: 27</td>
      <td>row 14: 64</td>
      <td>row 14: 125</td>
      <td>row 14: 216</td>
      <td>row 14: 343</td>
    </tr>
    <tr>
      <td>row 15: 1</td>
      <td>row 15: 8</td>
      <td>row 15: 27</td>
      <td>row 15: 64</td>
      <td>row 15: 125</td>
      <td>row 15: 216</td>
      <td>row 15: 343</td>
    </tr>
    <tr>
      <td>row 16: 1</td>
      <td>row 16: 8</td>
      <td>row 16: 27</td>
      <td>row 16: 64</td>
      <td>row 16: 125</td>
      <td>row 16: 216</td>
      <td>row 16: 343</td>
    </tr>
    <tr>
      <td>row 17: 1</td>
      <td>row 17: 8</td>
      <td>row 17: 27</td>
      <td>row 17: 64</td>
      <td>row 17: 125</td>
      <td>row 17: 216</td>
      <td>row 17: 343</td>
    </tr>
    <tr>
      <td>row 18: 1</td>
      <td>row 18: 8</td>
      <td>row 18: 27</td>
      <td>row 18: 64</td>
      <td>row 18: 125</td>
      <td>row 18: 216</td>
      <td>row 18: 343</td>
    </tr>
    <tr>
      <td>row 19: 1</td>
      <td>row 19: 8</td>
      <td>row 19: 27</td>
      <td>row 19: 64</td>
      <td>row 19: 125</td>
      <td>row 19: 216</td>
      <td>row 19: 343</td>
    </tr>
    <tr>
      <td>row 20: 1</td>
      <td>row 20: 8</td>
      <td>row 20: 27</td>
      <td>row 20: 64</td>
      <td>row 20: 125</td>
      <td>row 20: 216</td>
      <td>row 20: 343</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle ein wenig von ihrer Integrität und die Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` auf dem {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel die Spalten breiter machen, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenüberschriften auf der Seite zu halten, während Sie nach unten scrollen, haben wir {{cssxref("position")}} auf sticky auf den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da die Kopfzeile sonst nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das auf `auto` gesetzte {{cssxref("overflow")}} hier der wichtige Teil, da es die Tabelle scrollbar macht.

```css
table,
th,
td {
  border: 1px solid black;
}

table {
  overflow: auto;
  width: 100%;
  max-width: 400px;
  height: 240px;
  display: block;
  margin: 0 auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Displaying_large_tables_in_small_spaces', '100%', 240)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            eins von Folgendem:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}}-Elemente</li>
              <li>eins oder mehr {{HTMLElement("tr")}}-Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Learn: HTML table basics](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle einzustellen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Kontrolle des Aussehens von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und zum Festlegen von Abständen bei Zellinhalten
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung von Tabellenzellinhalten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung von Tabellenzellinhalten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
