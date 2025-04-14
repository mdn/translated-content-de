---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element stellt tabellarische Daten dar, das heißt, Informationen, die in einer zweidimensionalen Tabelle präsentiert werden, bestehend aus Zeilen und Spalten von Zellen, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier nur aus Referenzgründen dokumentiert, um bei der Aktualisierung vorhandenen Codes zu helfen und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Bestimmt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert als nicht-negative Ganzzahl (in Pixeln) die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("padding")}} auf die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}}.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Anstelle dessen setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft des `<table>`-Elements {{cssxref("border-collapse")}} auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens rund um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf die entsprechenden tabellenbezogenen Elemente sowie auf das `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das Element {{htmlelement("caption")}}, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Bestimmt die Breite der Tabelle. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut enthält, unterstützen einige Browser eine nicht standardmäßige Interpretation von `height`. Der einheitenlose Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn als Prozentwert festgelegt, bezieht sich die minimale Tabellenhöhe relativ zur Höhe des Elternelements. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout von Tabelleninhalten

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

Der `<table>`-Block erzeugt einen Tabellen-Formatierungs-Kontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box belegt eine Anzahl von Tabellenzellen nach folgenden Regeln:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox belegt eine Reihe von Zellen.
2. Eine Zeilengruppe-Box belegt eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden in der Reihenfolge des Quellcodes nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten von links nach rechts oder von rechts nach links angeordnet. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppe-Box belegt eine oder mehrere Spaltenboxen.
5. Eine Zellbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten trimmen Zellen, um sie in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Für Styling-Zwecke können die Tabellenelemente als auf sechs übereinanderliegenden Schichten angeordnet betrachtet werden:

![Tabellenelement-Schichten](table_element_layers.png)

Der auf einem Element in einer Schicht festgelegte Hintergrund ist nur sichtbar, wenn die darüber liegenden Schichten einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz einnahm.

## Barrierefreiheit

### Beschriftungen

Das Bereitstellen eines {{HTMLElement("caption")}}-Elements, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts prüfen oder überspringen sollen.

Dies hilft Menschen, die mit der Unterstützung von Assistenztechnologie navigieren, wie z.B. einem Bildschirmleser, Menschen, die von Sehbehinderungen betroffen sind, und Menschen mit kognitiven Problemen.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Beschriftung & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reichweite von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Umfang abgeleitet wird. Einige Assistenztechnologien könnten jedoch keine korrekten Schlüsse ziehen, daher könnte das Angeben des Kopfbereichs die Benutzererfahrungen verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einem Header verbundenen Zellen bereitzustellen.

- [MDN Leitfaden zur Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Attribut "scope" verwenden, um Kopfzellen und Datenzellen in Datentabellen zu assoziieren | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistive Technologien wie Bildschirmleser können Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Kopfzellen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten alternative Wege in Betracht gezogen werden, um den Inhalt der Tabelle zu präsentieren, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Dies könnte nicht nur Menschen helfen, die Assistenztechnologien verwenden, um den Inhalt der Tabelle zu verstehen, sondern auch Menschen mit kognitiven Problemen zugutekommen, die Schwierigkeiten haben könnten, die durch das Tabellendesign beschriebenen Assoziationen zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit dem oder den Header(s) ({{HTMLElement("th")}}-Elemente) zu assoziieren, mit denen die Zelle verbunden ist.

- [MDN Leitfaden zur Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von id- und headers-Attributen zur Assoziation von Datenzellen mit Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die untenstehenden Beispiele beinhalten Tabellen mit zunehmender Komplexität. Siehe auch unseren Anfänger-["Styling tables"](/de/docs/Learn_web_development/Core/Styling_basics/Tables)-Leitfaden für Styling-Informationen über Tabellen, einschließlich gängiger, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente sowie verschiedener zugehöriger Attribute erfordert, sind die folgenden Beispiele dazu gedacht, eine vereinfachte Erklärung zu liefern, die die Grundlagen und gängigen Standards abdeckt. Weitere und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt werden kann, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wurde.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell wachsen. Daher ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur einfacher zu stylen, sondern ermöglicht auch nützliche und barrierefreie Tabellen, die von jedem, einschließlich Suchmaschinen und Benutzern von Assistenztechnologien verstanden und navigiert werden können.

Das erste Beispiel ist einfach, während die nachfolgenden Beispiele in ihrer Komplexität zunehmen. Zuerst werden wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle entwickeln. Die ersten beiden Beispiele enthalten keine Tabellengruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Zellen-Spanning oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Beschriftung bereitgestellt. Im Verlauf der Beispiele werden sie schrittweise um alle die Tabellen-Features erweitert, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS hinzugefügt.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen innerhalb dieser definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte, das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte und das zweite Element dieser Zeile in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling ergibt sich ausschließlich aus dem [Benutzer-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem der Inhalt erweitert und grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle umfasst jetzt vier Zeilen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, das heißt, alle Zeilen sind im Körper der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um das `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die mit sowohl {{HTMLElement("th")}}- als auch {{HTMLElement("td")}}-Elementen angegeben sind, und markiert jedes Kopf- und Datenzelle.

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

### Angeben von Tabellenzellen-Beziehungen

Bevor Sie fortfahren, um die Tabelle auf fortgeschrittenere Weise zu erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen definiert werden ({{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente).

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf den entsprechenden `col` (Spalte)- oder `row`-Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung liefert wertvolle kontextuelle Informationen für Assistenztechnologien wie Bildschirmleser, um zu helfen, zu identifizieren, auf welche Zellen sich die Kopfzellen beziehen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Accessibility verbessern und Assistenztechnologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Angabe von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Accessibility durch [Angeben von Zellbeziehungen](#angeben_von_tabellenzellen-beziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest des Tabelleninhalts bereitstellt, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile ausdrücklich als Kopfsektion der Tabelle zu spezifizieren. Darüber hinaus kann das, was automatisch durch den Browser erledigt wird, auch explizit definiert werden – die Körpersektion der Tabelle, die die Hauptdaten der Tabelle enthält, wird spezifiziert, indem die entsprechenden Zeilen in das {{HTMLElement("tbody")}}-Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erzeugen, wodurch unerwünschte Ergebnisse vermieden werden.

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

Erneut sind das CSS und das visuelle Ergebnis unverändert — das Spezifizieren solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für Assistenztechnologien, einschließlich Bildschirmleser und Suchmaschinen, sowie für das Styling im CSS, was in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspanning

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Der auf der bisherigen Tabelle aufbauend, wird eine neue Spalte für ein "Mitgliedschafts-Enddatum" in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird auch innerhalb der Kopfsektion ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdaten"-Überschrift als Kopfzeile für die "Beigetreten" und "Storniert"-Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile umfasst das Hinzufügen der [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)- und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribute zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Die Kopfsektion hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschaftsdaten" und "Saldo", und eine "Mitgliedschaftsdaten"-Kopfzeile mit zwei Unterüberschriften, die in einer zweiten Zeile stehen: "Beigetreten" und "Storniert". Dies wird erreicht durch:

- Die erste Zeile der Knoten "Name", "ID" und "Saldo"-Kopfzellen erstreckt sich über beide Tabellenkopfzeilen durch Verwendung des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributs, wodurch sie jeweils zwei Zeilen hoch sind.
- Die erste Zeilenkopfzeile "Mitgliedschaftsdaten"-Kopfzeile erstreckt sich über zwei Spalten unter Verwendung des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Storniert", da die anderen drei Spalten mit den Zellen in der ersten Zeile, die sich über zwei Zeilen erstrecken, zusammengeführt sind. Die zwei Kopfzellen sind korrekt unter der "Mitgliedschaftsdaten"-Kopfzeile positioniert.

### Tabellenbeschriftung und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, die es den Benutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Zudem wird die "Saldo"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine [caption](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` verwendet wird. Die Beschriftung liefert die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Abschließend wird eine Fußsektion ({{HTMLElement("tfoot")}}-Element) unter dem Körper hinzugefügt, mit einer Zeile, die die "Saldo"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegendes Tabellenstyling

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} auf den Kopf- und Fußzeilen hinzuzufügen. Der HTML-Code bleibt diesmal unverändert, also lassen Sie uns direkt in das CSS eintauchen.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine visuell ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, je nach Ihrer persönlichen Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem die Elemente {{HTMLElement("tr")}}, sich innerhalb des {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}}, positionieren und eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Sektionen gleichzeitig anzuwenden.

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

Jetzt gehen wir aufs Ganze, mit Stilen auf Zeilen in den Kopf- und Körperbereichen, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter. Werfen wir zuerst einen Blick auf das Ergebnis.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderung im HTML. Sehen Sie, was richtige Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal wesentlich aufwendiger. Es ist nicht kompliziert, aber es passiert eine Menge. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}}- und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und die sich berührenden Rahmen zu einem einzigen Rahmen zusammenzubrechen, anstatt mit doppelten Rahmen zu enden. Darüber hinaus wird der Position der {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft am `bottom` der Tabelle positioniert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was bei den Zellen im Kopfbereich zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel legt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente des Tabellenkopfes (wie durch {{HTMLElement("thead")}} spezifiziert) fest. Dann wird der untere Rahmen des Kopfes auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopfbereich aus zwei Zeilen besteht, die von einigen Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen vorhanden sind; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Storniert" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Enttäuschende" einer stornierten Mitgliedschaft zu repräsentieren. Hier tauchen wir mit dem {{CSSxRef(":last-of-type")}}-Selektor in die letzte Zeile der Kopfsektion der Tabelle ein und geben der ersten Kopfzelle darin (der "Beigetreten"-Kopfzeile) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Storniert"-Kopfzeile) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorgehoben werden soll, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Reihe der Tabellenkörpersektion mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedernamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch abwechselnde Zeilenfarben zu verbessern, was manchmal als "Zebra-Streifen" bezeichnet wird. Lassen Sie uns ein wenig {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns dies hier tun. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein ähnliches Styling wie im Kopf auch auf den Fußbereich der Tabelle angewendet, um ihn ebenfalls hervorzuheben:

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

### Anzeigen großer Tabellen in kleinen Räumen

Ein häufiges Problem mit Tabellen im Web ist, dass sie nicht nativ sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge des Inhalts groß ist, und der Weg, um sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist, und es an ihm nichts Besonderes gibt. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Styles werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle etwas von ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mindern, haben wir das {{cssxref("white-space")}} auf `nowrap` für das {{HTMLElement("tbody")}} gesetzt. Dies jedoch nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie zur Darstellung der Daten sein müssen.

Um die Tabellenspaltenüberschriften zu behalten, während nach unten gescrollt wird, haben wir die Position mit dem {{cssxref("position")}}-Wert auf sticky auf den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da wenn wir es tun, die Kopfzeile nicht korrekt vom Rest der Tabelle getrennt werden kann.

Angesichts der Tatsache, dass die `<table>` eine feste Größe hat, ist das auf `auto` gesetzte {{cssxref("overflow")}} hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
            entweder einer der folgenden:
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das fließenden Inhalt akzeptiert</td>
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

- [Lernen: HTML Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle zu setzen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Erscheinungsbilds von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und zum Festlegen von Abständen zum Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
