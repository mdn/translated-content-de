---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<table>`**-Element repräsentiert tabellarische Daten — also Informationen, die in einer zweidimensionalen Tabelle bestehend aus Reihen und Spalten von Zellen mit Daten dargestellt werden.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier lediglich zu Referenzzwecken dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), mit einem `#` versehen, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert die Größe des Rahmens, der die Tabelle umgibt, als nicht-negative Ganzzahl (in Pixeln). Bei einem Wert von `0` wird das `frame`-Attribut auf `void` gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Statt dieses Attribut zu verwenden, sollten Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente anwenden.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Statt dieses Attribut zu verwenden, sollten Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element setzen. Beachten Sie, dass dies keinen Effekt hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo in der Tabelle Regeln (Ränder) angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rand um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als Attribut eines `<table>` enthält, unterstützen einige Browser eine nicht standardmäßige Interpretation von `height`. Der werteinheitslose Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn er als Prozentwert festgelegt wird, ist die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout des Tabelleninhalts

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

Der `<table>`-Block stellt einen Tabellenformatierungskontext bereit. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box besetzt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox besetzt eine Reihe von Zellen.
2. Eine Zeilengruppe-Box besetzt eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden nebeneinander in Quellcode-Reihenfolge platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten von links nach rechts oder von rechts nach links ausgelegt. Eine Spaltenbox besetzt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppe-Box besetzt eine oder mehrere Spaltenboxen.
5. Eine Zellbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten passen Zellen an, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben Polsterungen. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenebenen und Transparenz

Zu Stilzwecken können die Tabellenelemente als auf sechs sich überlagernden Ebenen platziert angesehen werden:

![Tabellenebenen](table_element_layers.png)

Der Hintergrund, der auf einem Element einer Ebene festgelegt ist, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme table-cell-Box diesen Platz eingenommen hätte.

## Barrierefreiheit

### Beschriftungen

Durch Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, hilft es den Personen, zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies unterstützt Menschen, die mit Hilfe von unterstützender Technologie wie einem Bildschirmleseprogramm navigieren, Personen mit eingeschränktem Sehvermögen und Personen mit kognitiven Problemen.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Zeilen- und Spaltenreichweite

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Geltungsbereich abgeleitet wird. Allerdings können einige Hilfstechnologien möglicherweise keine korrekten Schlüsse ziehen, sodass die Angabe des Kopfbereichs die Benutzererfahrung verbessern kann. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einem Kopf verbundenen Zellen bereitzustellen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Köpfen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Köpfen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Bildschirmleseprogramme können Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Kopfzellen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch die Anwesenheit der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten in Betracht ziehen, den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Zusätzlich dazu, denjenigen zu helfen, die Hilfstechnologien verwenden, um den Inhalt der Tabelle zu verstehen, kann dies auch Personen mit kognitiven Problemen helfen, die Schwierigkeiten haben könnten, die Assoziationen, die das Tabellenlayout beschreibt, zu verstehen.

Wenn die Tabelle nicht auseinandergebrochen werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit den Kopfzellen ({{HTMLElement("th")}}-Elemente) zu assoziieren, mit denen die Zelle verknüpft ist.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Köpfen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen mit zunehmend komplexeren Anforderungen. Weitere Informationen zur Stilgestaltung von Tabellen, einschließlich gängiger, nützlicher Techniken, finden Sie in unserem Einsteigerleitfaden zum [Stilgestalten von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente sowie verschiedener zugehöriger Attribute umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und allgemeinen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wurde.

Aufgrund der Art und Weise, wie HTML-Tabellen strukturiert sind, kann die {{Glossary("markup", "Auszeichnung")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischer")}} Auszeichnung entwickelt wurde, ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem, einschließlich Suchmaschinen und Nutzern von unterstützenden Technologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, während die nachfolgenden Beispiele an Komplexität zunehmen. Zuerst entwickeln wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Ausdehnen von Zellen oder explizit definierte Zellbeziehungen. Noch nicht einmal eine Beschriftung wird bereitgestellt. Während wir die Beispiele durcharbeiten, werden sie schrittweise verbessert, um alle Funktionen zu enthalten, die eine komplexe Datentabelle aufweisen sollte.

### Einfache Tabelle

Dieses Beispiel umfasst eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standardstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS verwendet.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten sind mit Tabellenkopf- und Datenzellen innerhalb von ihnen definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte — das heißt, das erste Element einer Zeile steht in der ersten Spalte und das zweite Element dieser Zeile in der zweiten Spalte.

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

Es wird kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets) auf diese Tabelle angewendet. Die Gestaltung resultiert rein aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [einfache Tabelle](#einfache_tabelle) und erweitert den Inhalt, indem grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle besteht jetzt aus vier Reihen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Reihe ist eine Reihe von Kopfzellen (die erste Reihe enthält nur {{HTMLElement("th")}}-Elemente). Anschließende Reihen umfassen eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Reihe) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Reihen sind innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingewickelt.

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

Mit CSS bieten wir die grundlegende Gestaltung, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rand um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die sowohl mit {{HTMLElement("th")}}- als auch {{HTMLElement("td")}}-Elementen spezifiziert sind, und markiert jede Kopf- und Datenzelle.

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

### Spezifizierung von Tabellenzellen-Beziehungen

Bevor Sie die Tabelle auf weiterführende Weise erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definiert werden.

#### HTML

Dies wird durch Einführung des [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attributs auf den {{HTMLElement("th")}}-Elementen erreicht und setzt die Werte auf den entsprechenden `col` (Spalte) oder `row` Wert.

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

Das CSS und das visuelle Ergebnis sind unverändert — die Anpassung liefert wertvolle kontextbezogene Informationen für unterstützende Technologien wie Bildschirmleseprogramme, um zu helfen, welche Zellen die Kopfzeilen betreffen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Angabe von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Zellspezifizierung](#spezifizierung_von_tabellenzellen-beziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Reihe ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest der Tabelleninhalte bietet, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Reihe ausdrücklich als den Kopfabschnitt der Tabelle zu spezifizieren. Darüber hinaus kann das, was automatisch vom Browser erreicht wird, auch ausdrücklich angegeben werden — der Hauptabschnitt der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Einschließen der entsprechenden Reihen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Wiederum sind CSS und visuelles Ergebnis unverändert — die Angabe solcher Tabellensektionsgruppen liefert wertvolle kontextbezogene Informationen für unterstützende Technologien, einschließlich Bildschirmleseprogrammen und Suchmaschinen, sowie zur Gestaltung mit CSS, was in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilen-Spannen

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfabschnitt einführen.

#### HTML

Aufbauend auf der erstellten Tabelle wird eine neue Spalte für ein "Ablaufdatum der Mitgliedschaft" in jeder Körperreihe mit dem {{HTMLElement("td")}}-Element hinzugefügt. Ein weiterer Reihe ({{HTMLElement("tr")}}-Element) wird ebenfalls im Kopfabschnitt ({{HTMLElement("thead")}}-Element) hinzugefügt, um einen "Mitgliedschaftsdaten"-Kopffeld als Überschrift für die "Beitritt" und "Abgebrochen" Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile beinhaltet das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfabschnitt hat nun zwei Reihen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elementen) "Name", "ID", "Mitgliedschaftsdaten" und "Bilanz", und eine "Mitgliedschaftsdaten"-Kopfzelle mit zwei Unterköpfen, die sich in einer zweiten Reihe befinden: "Beitritt" und "Abgebrochen". Dies wird erreicht durch:

- Die erste Reihe der Kopfzellen "Name", "ID" und "Bilanz" erstreckt sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribut verwendet wird, wodurch sie jeweils zwei Reihen hoch sind.
- Die Kopfzelle der ersten Reihe "Mitgliedschaftsdaten" erstreckt sich über zwei Spalten unter Verwendung des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs, wodurch sie zwei Spalten breit ist.
- Die zweite Reihe enthält nur die beiden Kopfzellen "Beitritt" und "Abgebrochen", da die anderen drei Spalten mit den Zellen der ersten Reihe zusammengeführt sind, die sich über zwei Reihen erstrecken. Die beiden Kopfzellen sind korrekt unter der "Mitgliedschaftsdaten"-Kopfzelle positioniert.

### Tabellenüberschrift und Spaltenzusammenfassung

Es ist eine gebräuchliche und empfehlenswerte Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, um Benutzern schnell die Relevanz der Tabelle zu zeigen. Außerdem wird die "Bilanz"-Spalte durch die Anzeige der Summe der individuellen Mitgliedsbilanzen zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellenbeschriftung ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` verwendet wird. Die Beschriftung bietet den {{Glossary("accessible_name", "zugänglichen Namen")}} oder die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfußabschnitt ({{HTMLElement("tfoot")}}-Element) hinzugefügt, der unterhalb des Körpers eine Reihe enthält, die die "Bilanz"-Spalte durch Anzeigen einer Summe zusammenfasst. Es werden die zuvor eingeführten Elemente und Attribute verwendet.

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

### Grundlegende Tabellenstilgestaltung

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und einen {{cssxref("background-color")}} auf die Kopf- und Fußzeilenhinzuzufügen. Der HTML-Code bleibt diesmal unverändert, also tauchen wir direkt in das CSS ein.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine visuell ansprechendere Schriftart (oder eine abstoßende serifenfreie Schriftart, je nach persönlicher Meinung) festzulegen, ist das interessante Teil der zweite Stil, wo die {{HTMLElement("tr")}}-Elemente innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} mit einer hellblauen {{cssxref("background-color")}} gestylt werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

```css
table {
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
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

### Fortgeschrittene Tabellenstilgestaltung

Jetzt gehen wir aufs Ganze, mit Stilen auf Reihen in den Kopf- und Körperbereichen, einschließlich alternierender reihenfarbiger Zeilen, Zellen mit unterschiedlichen Farben in Abhängigkeit von der Position innerhalb einer Reihe und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderungen am HTML-Code. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel komplexer. Es ist nicht kompliziert, aber es gibt viel zu beachten. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und sich berührende Begrenzungen zu einer einzigen Begrenzung zusammenzufassen, anstatt mit doppelten Begrenzungen zu enden. Darüber hinaus wird das {{HTMLElement("caption")}} mit der Eigenschaft {{CSSxRef("caption-side")}} an den `bottom` der Tabelle platziert:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}
```

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Platz um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am unteren Rand der Zelle aus, was an den Zellen im Kopf gesehen werden kann, die sich über zwei Reihen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf (wie durch {{HTMLElement("thead")}} spezifiziert). Dann wird die untere Grenze des Kopfes so gesetzt, dass sie eine zwei Pixel breite Linie ist. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Reihe im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Reihen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Reihen sind; die Anwendung des Stils auf die erste Reihe würde nicht das erwartete Ergebnis bringen:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beitritt" und "Abgebrochen" mit grünen und roten Farbtönen stylen, um das „Gute“ eines neuen Mitglieds und das „Bedauerliche“ einer abgebrochenen Mitgliedschaft darzustellen. Hier graben wir uns mit dem {{CSSxRef(":last-of-type")}}-Selektor in die letzte Reihe des Kopfabschnitts der Tabelle und geben der ersten Kopfzelle darin (der "Beitritt"-Kopf) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Abgebrochen"-Kopf) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da sich die erste Spalte ebenfalls abheben sollte, wird hier ein benutzerdefinierter Stil hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Reihe des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch abwechselnde Zeilenfarben zu verbessern — dies wird manchmal als „Zebra-Streifen“ bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} für jede gerade Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es allgemeine Praxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, tun wir das hier. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für die letzte {{HTMLElement("td")}} in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird der Fußabschnitt der Tabelle ähnlich wie der Kopf gestaltet, um ihn ebenfalls hervorzuheben:

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

### Große Tabellen in kleinen Bereichen anzeigen

Ein häufiges Problem bei Tabellen im Internet ist, dass sie von Natur aus nicht gut auf kleinen Bildschirmen funktionieren, wenn die Inhaltsmenge groß ist, und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup von einem CMS stammt und nicht verändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr umfangreich ist und nichts Bemerkenswertes daran ist. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Stile werden Sie bemerken, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle etwas von ihrer Integrität, und die Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu lindern, haben wir {{cssxref("white-space")}} auf `nowrap` auf das {{HTMLElement("tbody")}} gesetzt. Allerdings tun wir dies nicht für das {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel die Spalten breiter machen, als sie für die Darstellung der Daten sein müssen.

Um die Tabellenköpfe auf der Seite zu halten, während Sie nach unten scrollen, haben wir die {{cssxref("position")}}-Eigenschaft auf sticky auf den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir **nicht** die {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da wenn wir dies tun, der Kopf nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist das auf `auto` gesetzte {{cssxref("overflow")}} hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
  background: white;
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
          >Fließender Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eines der folgenden:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}}-Elemente</li>
              <li>ein oder mehr {{HTMLElement("tr")}}-Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Fließinhalt akzeptiert</td>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aussehens von Zellrändern, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Abstand auf den Zellinhalt festzulegen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt von Tabellenzellen horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt von Tabellenzellen vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
