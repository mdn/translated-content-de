---
title: "<table>: Das Tabelle-Element"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<table>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten, das heißt, Informationen in einer zweidimensionalen Tabelle, bestehend aus Reihen und Spalten von Zellen, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier zu Referenzzwecken dokumentiert, wenn vorhandener Code aktualisiert wird, sowie aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb des übergeordneten Elements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), mit einem `#` vorangestellt, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negative Ganzzahl (in Pixeln). Wenn es auf `0` gesetzt ist, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und deren Umrandung. Dieses Attribut ist obsolet: Statt es zu verwenden, wenden Sie die {{cssxref("padding")}} CSS-Eigenschaft auf die {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente an.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Statt es zu verwenden, setzen Sie die {{cssxref("border-spacing")}} CSS-Eigenschaft auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die {{cssxref("border-collapse")}} CSS-Eigenschaft des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die {{cssxref("border-style")}} und {{cssxref("border-width")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft auf den relevanten tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Während keine HTML-Spezifikation `height` als `<table>`-Attribut berücksichtigt, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertlose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn er als Prozentwert gesetzt ist, wird die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers sein. Verwenden Sie stattdessen die {{cssxref("min-height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

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

Die `<table>`-Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Kästchen. Jedes Kästchen nimmt eine Anzahl von Tabellenzellen entsprechend den folgenden Regeln ein:

1. Die Zeilenkästchen füllen die Tabelle in der Reihenfolge der Quellcode-Reihenfolge von oben nach unten. Jedes Zeilenkästchen nimmt eine Reihe von Zellen ein.
2. Ein Zeilengruppenkästchen nimmt ein oder mehrere Zeilenkästchen ein.
3. Spaltenkästchen werden in der Quellcode-Reihenfolge nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten von links nach rechts oder von rechts nach links ausgelegt. Ein Spaltenkästchen nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Ein Spaltengruppenkästchen nimmt ein oder mehrere Spaltenkästchen ein.
5. Ein Zellenkästchen kann sich über mehrere Reihen und Spalten erstrecken. Benutzeragenten trimmen Zellen so, dass sie in die verfügbare Anzahl von Zeilen und Spalten passen.

Tabellenzellen haben Innenabstand. Kästchen, die eine Tabelle bilden, haben keinen Außenabstand.

### Tabellebenen und Transparenz

Zu Stylingzwecken können die Tabellenelemente wie auf sechs übereinandergelegten Ebenen positioniert betrachtet werden:

![Table element layers](table_element_layers.png)

Der auf einem Element gesetzte Hintergrund auf einer Ebene wird nur sichtbar sein, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob ein anonymes table-cell-Kästchen diesen Platz einnimmt.

## Barrierefreiheit

### Überschriften

Indem Sie ein {{HTMLElement("caption")}}-Element verwenden, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, helfen Sie den Menschen dabei zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Personen, die mit Hilfe von Hilfstechnologien wie einem Screenreader navigieren, Personen mit Sehbehinderungen und Personen mit kognitiven Beeinträchtigungen.

- [MDN Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Zuordnung von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten überflüssig, da der Geltungsbereich abgeleitet wird. Einige Hilfstechnologien können jedoch falsche Schlussfolgerungen ziehen, sodass die Angabe des Kopfbereichs die Benutzererfahrung verbessern kann. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einem Kopf verknüpften Zellen bereitzustellen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwendung des scope-Attributs zur Zuordnung von Kopfzellen und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Hilfstechnologien wie Screenreader können Schwierigkeiten haben, Tabellen zu interpretieren, die so komplex sind, dass Kopfzellen nicht auf streng horizontale oder vertikale Weise zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan)-Attribute angezeigt.

Erwägen Sie idealerweise alternative Möglichkeiten zur Darstellung des Tabelleninhalts, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan)-Attribute angewiesen sind. Dies kann nicht nur Menschen helfen, die Hilfstechnologien verwenden, um den Tabelleninhalt zu verstehen, sondern auch Menschen mit kognitiven Beeinträchtigungen, die Schwierigkeiten haben könnten, die Zuordnungen zu verstehen, die durch das Tabellenlayout beschrieben werden.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination aus den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attributen, um jede Tabellenzelle programmatisch mit dem bzw. den Kopf(en) ({{HTMLElement("th")}}-Elemente), mit denen sie assoziiert ist, zu verknüpfen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwendung von id und headers-Attributen zur Zuordnung von Datenzellen zu Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die untenstehenden Beispiele umfassen Tabellen von zunehmender Komplexität. Siehe auch unseren Anfänger-[Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zum Styling von Tabellen einschließlich üblicher, nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen assoziierten Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängige Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie Sie eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellen, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Da HTML-Tabellen strukturiert sind, kann das {{Glossary("markup", "Markup")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur einfacher zu stylen, sondern ermöglicht auch nützliche und zugängliche Tabellen, die von allen, einschließlich Suchmaschinen und Nutzern von Hilfstechnologien, verstanden und navigiert werden können.

Das erste Beispiel ist grundlegend, mit darauf folgenden Beispielen, die in der Komplexität zunehmen. Zuerst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellenüberbrückung oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Überschrift bereitgestellt. Wenn wir die Beispiele durcharbeiten, werden sie schrittweise mit allen Tabellenfunktionen verbessert, die eine komplexe Datentabelle haben sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standardtabellenstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS einbezogen.

#### HTML

Die Tabellenzeilen sind mit {{HTMLElement("tr")}}-Elementen definiert und die Spalten sind mit Tabellenkopf- und Datenzellen innerhalb dieser definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte, das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheets](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling resultiert rein aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle umfasst jetzt vier Zeilen ({{HTMLElement("tr")}}-Elemente), mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erstes Kindelement jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellenselektionselemente verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppe, d. h. alle Zeilen sind im Hauptteil der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingebettet.

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

Mit CSS stellen wir das grundlegende Styling bereit, um Linien um die Komponenten der Tabelle zu erstellen und die Datenstruktur klarer zu machen. Das CSS fügt eine durchgehende Umrahmung um die `<table>` und um jede der Zellen der Tabelle hinzu, einschließlich derer, die mit sowohl {{HTMLElement("th")}}- als auch {{HTMLElement("td")}}-Elementen spezifiziert sind, wodurch jede Kopf- und Datenzelle begrenzt wird.

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

### Spezifikation von Tabellenzellenbeziehungen

Bevor Sie zur Erweiterung der Tabelle in komplexere Weise übergehen, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem die Beziehungen zwischen Header- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt wird, wobei die Werte auf die entsprechenden `col`- (Spalte) oder `row`- (Reihe) Werte gesetzt werden.

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

Das CSS- und visuelle Ergebnis bleibt unverändert – die Anpassung bietet wertvolle kontextuelle Informationen für Hilfstechnologien wie Screenreader, um zu identifizieren, mit welchen Zellen die Überschriften zusammenhängen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Angabe von Tabellensektionsgruppen

Neben der Verbesserung der Barrierefreiheit durch die [Spezifikation von Zellbeziehungen](#spezifikation_von_tabellenzellenbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch das Einführen von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und die Überschrift für den Rest des Tabelleninhalts bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfbereich der Tabelle zu spezifizieren. Darüber hinaus kann auch das automatisch vom Browser Erreichte explizit definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird spezifiziert, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Erneut bleibt das CSS- und visuelle Ergebnis unverändert – die Spezifikation solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für Hilfstechnologien, einschließlich Screenreader und Suchmaschinen, sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spannen von Spalten und Zeilen

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfbereich einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird in jeder Körperzeile eine neue Spalte für ein "Membership End Date" mit dem {{HTMLElement("td")}}-Element hinzugefügt. Außerdem wird eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) im Kopfbereich ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Membership Dates"-Überschrift als Überschrift für die "Joined"- und "Canceled"-Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile erfolgt durch Hinzufügen von [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributen zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen korrekt auf die Spalten und Zeilen zu verteilen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Überschriften ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Membership Dates" und "Balance", und eine "Membership Dates"-Überschrift mit zwei Unterüberschriften, die sich in einer zweiten Zeile befinden: "Joined" und "Canceled". Dies wird erreicht durch:

- Die erste Zeile enthält die "Name"-, "ID"- und "Balance"-Kopfzellen, die beide Tabellenkopfzeilen mit dem [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribut überspannen, wodurch sie jeweils zwei Zeilen hoch werden.
- Die "Membership Dates"-Kopfzeile der ersten Zeile überspannt zwei Spalten mithilfe des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs und ist somit zwei Spalten breit.
- Die zweite Zeile enthält nur die beiden Kopfzellen "Joined" und "Canceled", weil die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt sind, die zwei Zeilen spannen. Die beiden Kopfzellen befinden sich korrekt unter der "Membership Dates"-Überschrift.

### Tabellenüberschrift und Spaltensumme

Es ist eine weit verbreitete und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, damit Benutzer schnell die Relevanz der Tabelle bestimmen können. Darüber hinaus wird die "Balance"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellenüberschrift ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt wird. Die Überschrift bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfußbereich ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Balance"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die bereits eingeführten Elemente und Attribute werden angewendet.

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

Lassen Sie uns der Tabelle ein grundlegendes Styling hinzufügen, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Der HTML-Inhalt bleibt dieses Mal unverändert, also schauen wir uns das CSS genauer an.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element gesetzt wird, um eine optisch ansprechendere Schriftart zu setzen (oder eine abstoßende serifenlose Schrift, je nachdem, wie Ihre persönliche Meinung dazu steht), ist der interessante Teil der zweite Stil, wo die {{HTMLElement("tr")}}-Elemente, die sich im {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, mit einer hellblauen {{cssxref("background-color")}} gestylt werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Sektionen gleichzeitig anzuwenden.

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

Jetzt gehen wir aufs Ganze, mit Stilen für Zeilen sowohl in den Kopf- als auch in den Körperbereichen, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach ihrer Position innerhalb einer Zeile, und so weiter. Lassen Sie uns zunächst das Ergebnis ansehen.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderung mehr am HTML. Sehen Sie, was die richtige Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist dieses Mal viel ausführlicher. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie uns das Stück für Stück durchgehen.

Hier werden die {{CSSxRef("border-collapse")}}- und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und berührende Rahmen zu einem einzigen Rahmen zusammenzulegen, anstatt doppelte Rahmen zu erhalten. Außerdem wird das {{HTMLElement("caption")}} am Ende der Tabelle mit dem {{CSSxRef("caption-side")}}-Eigenschaft platziert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am Boden der Zelle aus, was bei den Zellen im Kopf, die sich über zwei Zeilen erstrecken, zu sehen ist:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf (wie durch {{HTMLElement("thead")}} spezifiziert). Dann wird der untere Rahmen des Kopfs als zweipixelbreite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen sind; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die zwei Kopfzellen "Joined" und "Canceled" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Schlechte" einer stornierten Mitgliedschaft darzustellen. Hier greifen wir in die letzte Zeile des Kopfbereichs der Tabelle ein, indem wir den {{CSSxRef(":last-of-type")}}-Selektor verwenden, und geben der ersten Kopfzelle darin (der "Joined"-Überschrift) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Canceled"-Überschrift) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte auch auffallen sollte, wird hier ebenfalls ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist gängig, die Lesbarkeit von Tabellendaten zu verbessern, indem abwechselnde Zeilenfarben verwendet werden – manchmal wird dies als "Zebra-Striping" bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns das hier tun. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein ähnliches Styling wie im Kopf auf den Fußbereich der Tabelle angewendet, um auch ihn hervorzuheben:

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

### Anzeige großer Tabellen in kleinen Bereichen

Ein häufiges Problem bei Tabellen im Web ist, dass sie nicht nativen in kleinen Bildschirmen gut funktionieren, wenn der Inhalt umfangreich ist, und es ist nicht offensichtlich, wie man sie scrollbar macht, insbesondere wenn das Markup aus einem CMS stammt und nicht geändert werden kann, um eine Umhüllung hinzuzufügen.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen darzustellen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr umfangreich ist und es nichts Bemerkenswertes daran gibt. Das CSS ist in diesem Beispiel nützlicher zu betrachten.

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

Beim Betrachten dieser Stile werden Sie bemerken, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Obwohl dies das Scrollen ermöglicht, verliert die Tabelle etwas an Integrität und versucht, die Tabellenzellen möglichst klein zu machen. Um dieses Problem abzumildern, haben wir {{cssxref("white-space")}} auf `nowrap` auf dem {{HTMLElement("tbody")}} gesetzt. Dennoch tun wir das nicht für den {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie für die Datenanzeige sein müssen.

Um die Tabellenüberschriften auf der Seite zu halten, während nach unten gescrollt wird, haben wir {{cssxref("position")}} auf sticky für die {{HTMLElement("th")}}-Elemente gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da der Header auf diese Weise nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das {{cssxref("overflow")}} auf `auto` hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">
          Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">
          Flussinhalt</a
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
              <li>eins oder mehr {{HTMLElement("tr")}}-Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role">
            table</a
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

- [Lernen: Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Erscheinungsbild von Zellrahmen, Linien und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und Festlegen von Abständen im Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt von Tabellenzellen horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt von Tabellenzellen vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Tabellenbreite
