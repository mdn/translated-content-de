---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten—das sind Informationen, die in einer zweidimensionalen Tabelle dargestellt werden, bestehend aus Reihen und Spalten von Zellen, die Daten enthalten.

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie werden hier nur als Referenz zur Aktualisierung bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Bestimmt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negativen Ganzzahlenwert (in Pixeln). Wenn auf `0` gesetzt, wird das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>` Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>` Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Bestimmt, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien), und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den passenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}} Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Bestimmt die Breite der Tabelle. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>` Attribut enthält, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der Wert ohne Einheit gibt eine minimale Höhe in Pixeln an. Wird ein Prozentwert gesetzt, bezieht sich die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout des Tabelleninhalts

Folgende Elemente sind Teil der Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Die `<table>` Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilenbox nimmt eine Reihe von Zellen ein.
2. Eine Zeilengruppe-Box nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden nebeneinander in der Quellcode-Reihenfolge platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attributs werden die Spalten in Links-nach-Rechts- oder Rechts-nach-Links-Richtung angeordnet. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppe-Box nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellenbox kann sich über mehrere Reihen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um in die verfügbare Anzahl von Reihen und Spalten zu passen.

Tabellenzellen haben einen Innenabstand. Boxen, die eine Tabelle bilden, haben keinen Außenabstand.

### Tabellenebenen und Transparenz

Für Stilzwecke können die Tabellenelemente als auf sechs übereinanderliegenden Ebenen platziert betrachtet werden:

![Tabellenelement-Ebenen](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wird, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz eingenommen hätte.

## Barrierefreiheit

### Bildunterschriften

Indem ein {{HTMLElement("caption")}} Element bereitgestellt wird, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft es den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Menschen, die mit Hilfe von unterstützender Technologie, wie einem Bildschirmlesegerät, navigieren, Personen, die von Sehbehinderungen betroffen sind, und Menschen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spaltenzuweisung

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut auf Kopfzellen ({{HTMLElement("th")}} Elemente) ist in einfachen Kontexten redundant, da der Bereich abgeleitet wird. Allerdings können einige unterstützende Technologien möglicherweise keine korrekten Schlussfolgerungen ziehen, daher kann die Angabe des Überschriftenbereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die Zellen, die zu einer Kopfzeile gehören, bereitzustellen.

- [MDN Tabelle Barrierefreiheitsleitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Kopfzeilen • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfzeilen • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Nutzung des scope-Attributs zur Verknüpfung von Kopfzellen und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Unterstützende Technologien wie Bildschirmlesegeräte können Schwierigkeiten beim Parsing von Tabellen haben, die so komplex sind, dass Kopfzellen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise erwägen Sie alternative Möglichkeiten, den Inhalt der Tabelle zu präsentieren, einschließlich der Aufteilung in eine Sammlung kleinerer, zusammenhängender Tabellen, die nicht auf den Einsatz von [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Zusätzlich zur Unterstützung von Personen, die unterstützende Technologie verwenden, um den Inhalt der Tabelle zu verstehen, kann dies auch Personen mit kognitiven Problemen zugute kommen, die möglicherweise Schwierigkeiten haben, die Beziehungen zu verstehen, die durch das Tabellenlayout beschrieben werden.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination aus den Attributen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit den Kopfzeilen ({{HTMLElement("th")}} Elemente) zu verknüpfen, mit denen die Zelle assoziiert ist.

- [MDN Tabelle Barrierefreiheitsleitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Kopfzeilen • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwendung der Attribute id und headers zur Verknüpfung von Datenzellen mit Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen mit zunehmend gesteigerter Komplexität. Siehe auch unseren Anfänger-[Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zum Tabellendesign einschließlich allgemeiner, nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden sich auf den entsprechend verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wird.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die passende Struktur zu erstellen. Eine mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und barrierefreie Tabellen, die von allen verstanden und navigiert werden können, einschließlich Suchmaschinen und Nutzern von unterstützenden Technologien.

Das erste Beispiel ist einfach gehalten, während die nachfolgenden Beispiele an Komplexität zunehmen. Zunächst entwickeln wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellspannungen oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Bildunterschrift bereitgestellt. Während wir uns durch die Beispiele arbeiten, werden sie schrittweise erweitert, um alle Tabellenfunktionen zu enthalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel beinhaltet eine _sehr_ einfache Tabelle mit drei Reihen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS hinzugefügt.

#### HTML

Die Tabellenreihen sind mit {{HTMLElement("tr")}} Elementen definiert, und die Spalten sind mit Tabellenkopf- und Datenzellen darin definiert. Die erste Reihe enthält die Kopfzellen ({{HTMLElement("th")}} Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}} Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Reihe befindet sich in seiner jeweiligen Spalte—das heißt, das erste Element einer Reihe ist in der ersten Spalte, und das zweite Element dieser Reihe ist in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Die Stilergebnisse resultieren ausschließlich aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem der Inhalt erweitert und einfache CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle umfasst jetzt vier Reihen ({{HTMLElement("tr")}} Elemente), mit jeweils vier Spalten. Die erste Reihe ist eine Reihe von Kopfzellen (die erste Reihe enthält nur {{HTMLElement("th")}} Elemente). Nachfolgende Reihen enthalten eine Kopfspalte ({{HTMLElement("th")}} Elemente als erste Kindelemente jeder Reihe) und drei Datenspalten ({{HTMLElement("td")}} Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Reihen sind in den Körper der Tabelle eines impliziten {{HTMLElement("tbody")}} Elements eingeschlossen.

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

Mit CSS fügen wir grundlegende Stile hinzu, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die sowohl mit {{HTMLElement("th")}} als auch {{HTMLElement("td")}} Elementen spezifiziert wurden, wodurch jede Kopf- und Datenzelle abgegrenzt wird.

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

### Spezifizierung von Zellbeziehungen in der Tabelle

Bevor Sie weitermachen, um die Tabelle auf erweiterte Weise zu erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem die Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) Attribut bei den {{HTMLElement("th")}} Elementen eingeführt und die Werte auf das entsprechende `col` (Spalte) oder `row` (Reihe) gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert—die Anpassung bietet wertvolle kontextbezogene Informationen für unterstützende Technologien wie Bildschirmlesegeräte, um zu helfen, zu identifizieren, mit welchen Zellen die Kopfzellen in Beziehung stehen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers) Attributs bei den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen die Zugänglichkeit verbessern und unterstützenden Technologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch die [Spezifikation von Zellbeziehungen](#spezifizierung_von_zellbeziehungen_in_der_tabelle) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch die Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Reihe ({{HTMLElement("tr")}} Element) nur Spaltenkopfzeilen enthält und die Kopfzeile für den Rest des Tabelleninhalts bereitstellt, kann sie in das {{HTMLElement("thead")}} Element eingeschlossen werden, um diese Reihe explizit als Kopfzeilenabschnitt der Tabelle anzugeben. Darüber hinaus kann das, was der Browser automatisch erledigt, auch explizit definiert werden—der Hauptdatenabschnitt der Tabelle, der die Hauptdaten der Tabelle enthält, wird spezifiziert, indem die entsprechenden Reihen im {{HTMLElement("tbody")}} Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}} Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen, um unerwünschte Ergebnisse zu vermeiden.

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

Wiederum bleibt das CSS und das visuelle Ergebnis unverändert—diese Tabellensektionsgruppen zu spezifizieren bietet wertvolle kontextbezogene Informationen für unterstützende Technologien, einschließlich Bildschirmlesegeräte und Suchmaschinen, sowie für die Gestaltung im CSS, was in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenüberspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem eine Spalte hinzugefügt und ein mehrzeiliger Kopfabschnitt eingeführt wird.

#### HTML

Aufbauend auf der bisher erstellten Tabelle, wird jeder Körperreihe eine neue Spalte für ein "Mitgliedschafts-Enddatum" hinzugefügt, mit dem {{HTMLElement("td")}} Element. Eine zusätzliche Reihe ({{HTMLElement("tr")}} Element) wird ebenfalls innerhalb des Kopfbereichs ({{HTMLElement("thead")}} Element) hinzugefügt, um eine "Mitgliedschafts-Daten"-Überschrift als Überschrift für die "Beitritt" und "Kündigung"-Spalten einzuführen.

Die Erstellung der zweiten Kopfreihenreihe beinhaltet das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) zu den {{HTMLElement("th")}} Elementen, um die Kopfzellen den richtigen Spalten und Reihen zuzuordnen.

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

Der Kopfbereich hat jetzt zwei Reihen, eine mit den Überschriften ({{HTMLElement("th")}} Elemente) "Name", "ID", "Mitgliedschafts-Daten", und "Saldo", und eine "Mitgliedschafts-Daten"-Überschrift mit zwei Unterüberschriften in einer zweiten Reihe: "Beitritt" und "Kündigung". Dies wird erreicht durch:

- Die ersten Reihe der Kopfzellen "Name", "ID" und "Saldo" erstrecken sich über beide Tabellenkopfreihen mithilfe des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attributs, wodurch sie jeweils zwei Reihen hoch sind.
- Die "Mitgliedschafts-Daten"-Kopfzelle der ersten Reihe erstreckt sich über zwei Spalten unter Verwendung des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) Attributs, was sie zwei Spalten breit macht.
- Die zweite Reihe enthält nur die zwei Kopfzellen "Beitritt" und "Kündigung", da die anderen drei Spalten mit den Zellen in der ersten Reihe zusammengeführt werden, die sich über zwei Reihen erstrecken. Die beiden Kopfzellen sind korrekt unter der "Mitgliedschafts-Daten"-Überschrift positioniert.

### Tabellenunterschrift und Spaltenzusammenfassung

Es ist eine übliche und empfehlenswerte Praxis, eine Zusammenfassung des Tabelleninhalts bereitzustellen, sodass Benutzer schnell die Relevanz der Tabelle bestimmen können. Außerdem wird die "Saldo"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellen[Bildunterschrift](#bildunterschriften) ({{HTMLElement("caption")}} Element) als erstes Kindelement der `<table>` verwendet wird. Die Bildunterschrift bietet die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Zuletzt wird ein Tabellenfußbereich ({{HTMLElement("tfoot")}} Element) unter dem Hauptteil hinzugefügt, mit einer Reihe, die die "Saldo"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegendes Styling der Tabelle

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußreihen hinzuzufügen. Der HTML-Code bleibt diesmal unverändert, daher gehen wir direkt in das CSS.

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

Während hier eine {{cssxref("font")}} Eigenschaft dem `<table>` Element hinzugefügt wird, um eine visuell ansprechendere Schriftart (oder eine abstoßende sans-serif Schriftart, je nach persönlicher Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}} Elemente innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} mit einer hellblauen {{cssxref("background-color")}} gestylt werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Erweiterte Tabellenstile

Jetzt gehen wir aufs Ganze, mit Stilen sowohl auf Reihen in den Kopf- und Körperbereichen, einschließlich abwechselnder Reihenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Reihe und so weiter. Lassen Sie uns zunächst einen Blick auf das Ergebnis werfen.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderungen an der HTML wieder. Sehen Sie, was eine ordentliche Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel aufwändiger. Es ist nicht kompliziert, aber es gibt viel zu tun. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und angrenzende Rahmen zu einem einzelnen Rahmen zu kollabieren, anstatt doppelte Rahmen zu erhalten. Zusätzlich wird das {{HTMLElement("caption")}} am `bottom` der Tabelle mit der {{CSSxRef("caption-side")}} Eigenschaft platziert:

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

Als nächstes wird die {{CSSxRef("padding")}} Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt herum zu geben. Die {{CSSxRef("vertical-align")}} Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was in den Zellen im Kopfbereich zu sehen ist, die sich über zwei Reihen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}} Elemente im Kopfbereich der Tabelle (wie durch {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfbereichs als ein zwei Pixel breiter Strich festgelegt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}} Selektor verwenden, um die {{CSSxRef("border-bottom")}} Eigenschaft auf die _zweite_ Reihe im Kopfbereich anzuwenden. Warum? Weil der Kopfbereich aus zwei Reihen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Reihen sind; das Anwenden des Stil auf die erste Reihe würde uns nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Jetzt stylen wir die beiden Kopfzellen "Beitritt" und "Kündigung" mit grünen und roten Tönen, um das "Gute" eines neuen Mitglieds und das "Ärgerliche" einer gekündigten Mitgliedschaft darzustellen. Hier graben wir uns in die letzte Reihe des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}} Selektor ein und geben der ersten Kopfzelle darin (der "Beitritt" Kopfzelle) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Kündigung" Kopfzelle) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte auch hervorstechen sollte, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stilt die erste Kopfzelle in jeder Reihe des Körpers der Tabelle mit der {{CSSxRef("text-align")}} Eigenschaft, um die Mitgliedsnamen links auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem die Reihenfarben abwechseln, dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns etwas {{cssxref("background-color")}} zu jeder geraden Reihe hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es in Tabellen Standardpraxis ist, Währungswerte rechts auszurichten, tun wir das hier. Dies setzt einfach die {{CSSxRef("text-align")}} Eigenschaft für den letzten {{HTMLElement("td")}} in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird dem Fußbereich der Tabelle ein ähnliches Styling wie dem Kopfbereich hinzugefügt, um ihn ebenfalls hervorzuheben:

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

### Große Tabellen auf kleinem Raum anzeigen

Ein häufiges Problem mit Tabellen auf dem Web ist, dass sie nicht von Natur aus gut auf kleinen Bildschirmen funktionieren, wenn die Menge des Inhalts groß ist, und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, besonders wenn das Markup aus einem CMS stammen kann und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet einen Weg, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt verborgen, da er sehr groß ist und es daran nichts Bemerkenswertes gibt. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:
      <th>2<sup>3</sup> equals:
      <th>3<sup>3</sup> equals:
      <th>4<sup>3</sup> equals:
      <th>5<sup>3</sup> equals:
      <th>6<sup>3</sup> equals:
      <th>7<sup>3</sup> equals:
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

#### CSS

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}} Eigenschaft der Tabelle auf `block` gesetzt wurde. Obwohl dies das Scrollen ermöglicht, verliert die Tabelle etwas von ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir auf dem {{HTMLElement("tbody")}} {{cssxref("white-space")}} auf `nowrap` gesetzt. Wir machen dies jedoch nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten zwingen, breiter zu werden, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenköpfe auf der Seite zu halten, während man nach unten scrollt, haben wir bei den {{HTMLElement("th")}} Elementen {{cssxref("position")}} auf sticky gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da wenn wir dies tun, der Kopfbereich nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist {{cssxref("overflow")}} auf `auto` gesetzt der wichtige Teil hier, da es die Tabelle scrollbar macht.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}} Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}} Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}} Element,</li>
          <li>
            eine der folgenden Optionen:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}} Elemente</li>
              <li>eins oder mehr {{HTMLElement("tr")}} Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}} Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>Jede</td>
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
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Erscheinungsbildes von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und zum Festlegen von Abständen im Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
