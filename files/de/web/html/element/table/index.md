---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element stellt tabellarische Daten dar, also Informationen, die in einer zweidimensionalen Tabelle präsentiert werden, bestehend aus Zeilen und Spalten von Zellen, die Daten enthalten.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz für die Aktualisierung bestehender Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#`-Präfix oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negative Ganzzahl (in Pixeln). Wenn auf `0` gesetzt, wird das Attribut [`frame`](#frame) auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Stattdessen sollte die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente angewendet werden.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Stattdessen sollte die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element gesetzt werden. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo in der Tabelle Regeln (Rahmen) angezeigt werden. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut beinhaltet, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertlose Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn als Prozentwert gesetzt, wird die minimale Tabellengröße relativ zur Höhe des Elternelements sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout der Tabelleninhalte

Die folgenden Elemente gehören zur Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Das `<table>`-Box etabliert einen Tabellen-Formatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box nimmt entsprechend der folgenden Regeln eine Anzahl von Tabellenzellen ein:

1. Die Zeilenboxen füllen die Tabelle in der Quelltextreihenfolge von oben nach unten. Jede Zeilenbox nimmt eine Reihe von Zellen ein.
2. Eine Zeilengruppebox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden in Quelltextreihenfolge nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributs sind die Spalten in einer von links nach rechts oder von rechts nach links Richtung angeordnet. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppebox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen zu, damit sie in die verfügbare Anzahl von Zeilen und Spalten passen.

Tabellenzellen haben Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Für Stylingzwecke können die Tabellenelemente als in sechs übereinandergelegte Schichten eingebracht betrachtet werden:

![Schichten der Tabellenelemente](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Schicht festgelegt ist, wird nur sichtbar sein, wenn die Schichten darüber transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz einnähme.

## Barrierefreiheit

### Überschriften

Indem Sie ein {{HTMLElement("caption")}}-Element bereitstellen, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, helfen Sie den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts prüfen oder es überspringen müssen.

Dies hilft Menschen, die mit der Hilfe von Hilfstechnologien wie einem Bildschirmleser navigieren, Personen mit Sehschwächen und Menschen mit kognitiven Einschränkungen.

- [MDN Überschrift zu Ihrer Tabelle hinzufügen mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spalten-Scope

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Scope abgeleitet wird. Einige Hilfstechnologien könnten jedoch falsche Schlussfolgerungen ziehen, daher kann das Angeben des Kopfbereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die mit einem Kopfbereich verbundenen Zellen bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit zwei Kopfbereichen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfbereichen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributs zur Zuordnung von Kopfzellen zu Datenzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Bildschirmleser können Schwierigkeiten beim Parsen von Tabellen haben, die so komplex sind, dass Kopfzellen nicht auf strikt horizontale oder vertikale Weise zugeordnet werden können. Dies wird typischerweise durch die Anwesenheit der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten zur Darstellung des Inhalts der Tabelle in Erwägung ziehen, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Dies hilft nicht nur Menschen, die Hilfstechnologien verwenden, den Inhalt der Tabelle zu verstehen, sondern kann auch Menschen mit kognitiven Einschränkungen zugutekommen, die Schwierigkeiten haben, die Assoziationen der Tabellenlayout zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination aus den Attributen [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um jede Tabellenzelle programmatisch mit dem Kopfbereich ({{HTMLElement("th")}}-Elemente) zu verknüpfen, mit dem sie verbunden ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Kopfbereichen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der id- und headers-Attribute zur Zuordnung von Datenzellen zu Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen mit stetig zunehmender Komplexität. Siehe auch unseren Einsteiger-[Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zur Gestaltung von Tabellen, einschließlich üblicher, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen verbundenen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechend verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wird.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck der Tabelle und die endgültige Darstellung klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur mit {{Glossary("semantics", "semantischem")}} Markup ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von allen, einschließlich Suchmaschinen und Benutzern von Hilfstechnologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach gehalten, mit nachfolgenden Beispielen, die an Komplexität zunehmen. Zuerst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Cell-Spanning oder explizit definierte Zellbeziehungen. Nicht einmal eine Überschrift wird bereitgestellt. Im Verlauf der Beispiele werden sie schrittweise um alle Tabelleigenschaften erweitert, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standardstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS eingefügt.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen darin definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Die Gestaltung ergibt sich ausschließlich aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle umfasst jetzt vier Zeilen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Zeile ist eine Reihe von Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kinderlemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensetzungselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Zeilen sind innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements enthalten.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt eine durchgezogene Linie um die `<table>` und um jede Zelle der Tabelle hinzu, einschließlich der mit {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen spezifizierten, die jede Kopf- und Datumszelle abgrenzen.

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

### Spezifizieren von Zellbeziehungen

Bevor Sie fortfahren, die Tabelle auf komplexere Weise zu erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf den entsprechenden `col` (Spalten-) oder `row` (Zeilen-) Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung bietet wertvolle kontextbezogene Informationen für Hilfstechnologien wie Bildschirmleser, um zu helfen, zu identifizieren, welche Zellen zu welchen Köpfen gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Spezifizierung von Tabellenabschnittsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch das [Speichern von Zellbeziehungen](#spezifizieren_von_zellbeziehungen) können die {{Glossary("semantics", "Semantik")}} der Tabelle durch das Einführen von Tabellenabschnittsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest des Tabelleninhalts bereitstellt, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als den Oberabschnitt der Tabelle zu kennzeichnen. Darüber hinaus kann das, was automatisch durch den Browser erreicht wird, auch ausdrücklich definiert werden – der Körperabschnitt der Tabelle, der die Hauptdaten der Tabelle enthält, wird angegeben, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Wieder einmal bleiben das CSS und das visuelle Ergebnis unverändert – die explizite Angabe solcher Tabellenabschnittsgruppen bietet wertvolle kontextbezogene Informationen für Hilfstechnologien, einschließlich Bildschirmleser und Suchmaschinen, sowie für das Styling im CSS, was in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilen-Spannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfbereich einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird in jeder Körperzeile eine neue Spalte für ein "Membership End Date" mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird auch innerhalb des Kopfbereichs ({{HTMLElement("thead")}}-Element) hinzugefügt, um einen "Membership Dates"-Kopfbereich als Überschrift für die "Joined" und "Canceled"-Spalten einzuführen.

Das Erstellen der zweiten Kopfzeile beinhaltet das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den korrekten Spalten und Zeilen zuzuweisen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Kopfzeilen ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Membership Dates" und "Balance", und ein "Membership Dates"-Kopfbereich mit zwei Unterköpfen, die sich in einer zweiten Zeile befinden: "Joined" und "Canceled". Dies wird erreicht, indem:

- Die "Name"-, "ID"- und "Balance"-Kopfzellen der ersten Zeile beide Tabellenkopfzeilen durch das Verwenden des [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attributs überspannen, wodurch sie jeweils zwei Zeilen hoch sind.
- Die "Membership Dates"-Kopfzelle der ersten Zeile zwei Spalten durch das Verwenden des [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attributs überspannt, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die beiden Kopfzellen "Joined" und "Canceled", da die anderen drei Spalten mit den Zellen der ersten Zeile zusammengeführt sind, die zwei Zeilen überspannen. Die beiden Kopfzellen sind korrekt unter dem "Membership Dates"-Kopfbereich positioniert.

### Tabellenüberschrift und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, die es den Benutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Überdies wird die "Balance"-Spalte durch die Anzeige der Summe der Kontostände der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung einer Tabellensummary ({{HTMLElement("caption")}}-Element) als erstes Kind des `<table>` hinzugefügt. Die Zusammenfassung liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Zuletzt wird ein Tabellenfuß ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Balance"-Spalte durch die Anzeige einer Summe zusammenfasst. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegendes Table-Styling

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Header- und Footer-Zeilen hinzuzufügen. Dieses Mal ändert sich das HTML nicht, also lassen Sie uns direkt in das CSS eintauchen.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element hinzugefügt wird, um eine optisch ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} einen hellblauen {{cssxref("background-color")}} erhalten. Dies ist eine Möglichkeit, einer Hintergrundfarbe schnell auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Fortgeschrittenes Table-Styling

Jetzt werden wir alles daransetzen, mit Stilen auf den Zeilen im Kopf- und Körperbereich, einschließlich alternierender Zeilenfarben, Zellen mit verschiedenen Farben je nach Position innerhalb einer Zeile und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderung am HTML. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel aufwendiger. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie uns das aufschlüsseln.

Hier werden die Eigenschaften {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und angrenzende Ränder zu einem einzigen Rand anstelle von doppelten Rändern zusammenzufassen. Zusätzlich wird das {{HTMLElement("caption")}} mit der Eigenschaft {{CSSxRef("caption-side")}} an das `bottom` der Tabelle gesetzt:

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

Als Nächstes wird die Eigenschaft {{CSSxRef("padding")}} verwendet, um allen Tabellenzellen Platz um ihren Inhalt herum zu geben. Die Eigenschaft {{CSSxRef("vertical-align")}} richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was bei den Zellen im Kopfbereich zu sehen ist, die zwei Zeilen überspannen:

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

Die nächste CSS-Regel legt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf fest (wie durch {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfbereichs auf eine Linie von zwei Pixel Breite gesetzt. Beachten Sie jedoch, dass wir den Selektor {{CSSxRef(":nth-of-type")}} verwenden, um die Eigenschaft {{CSSxRef("border-bottom")}} auf die _zweite_ Reihe im Kopfbereich anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt sind. Das bedeutet, dass dort tatsächlich zwei Reihen vorhanden sind; die Anwendung des Stils auf die erste Reihe würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Joined" und "Canceled" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Schlechte" einer stornierten Mitgliedschaft darzustellen. Hier graben wir uns mit dem Selektor {{CSSxRef(":last-of-type")}} in die letzte Zeile des Kopfbereichs der Tabelle und geben der ersten Kopfzelle darin (der "Joined"-Kopfzeile) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Canceled"-Kopfzeile) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorgehoben werden soll, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der Eigenschaft {{CSSxRef("text-align")}} zur linksbündigen Ausrichtung der Mitgliedsnamen und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, zur Verbesserung der Lesbarkeit von Tabellendaten wechselnde Zeilenfarben hinzuzufügen – dies wird manchmal als "Zebra-Stripping" bezeichnet. Fügen wir jedem geraden Reihe eine {{cssxref("background-color")}} hinzu:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es gängige Praxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns das hier tun. Dies setzt einfach die Eigenschaft {{CSSxRef("text-align")}} für das letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Abschließend wird dem Fußbereich der Tabelle ein ähnliches Styling wie dem Kopfbereich zugewiesen, um ihn ebenfalls hervorzuheben:

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

Ein häufiges Problem mit Tabellen im Web ist, dass sie auf kleinen Bildschirmen bei großen Inhaltsmengen nicht gut funktionieren und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht in einen Wrapper geändert werden kann.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Besonderes daran ist. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Obwohl dies ein Scrollen ermöglicht, verliert die Tabelle einen Teil seiner Integrität und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem abzumildern, haben wir auf dem {{HTMLElement("tbody")}} die {{cssxref("white-space")}} auf `nowrap` gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel Spalten breiter machen, als sie für die Anzeige der Daten sein müssen.

Um die Tabellenüberschriften beim Scrollen am Seitenanfang zu halten, haben wir auf den {{HTMLElement("th")}}-Elementen die {{cssxref("position")}} auf sticky gesetzt. Beachten Sie, dass wir **nicht** die {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da der Kopf ansonsten nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist das hier wichtig gesetzte {{cssxref("overflow")}} auf `auto`, da es die Tabelle scrollbar macht.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
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
      <td>Jede Komponente, die Flussinhalt akzeptiert</td>
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
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aussehens von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und zur Festlegung des Abstands auf Zellinhalten
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung von Tabellenzellinhalten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung von Tabellenzellinhalten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
