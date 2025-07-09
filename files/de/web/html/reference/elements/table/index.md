---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten – das heißt, Informationen, die in einer zweidimensionalen Tabelle dargestellt sind, die aus Zeilen und Spalten von Zellen besteht, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), eingeleitet durch ein `#`, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negative ganze Zahl (in Pixeln). Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Verwenden Sie statt dessen die {{cssxref("padding")}} CSS-Eigenschaft auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Verwenden Sie stattdessen die {{cssxref("border-spacing")}} CSS-Eigenschaft auf dem `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die {{cssxref("border-collapse")}} CSS-Eigenschaft des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die {{cssxref("border-style")}} und {{cssxref("border-width")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo in der Tabelle Linien (Rahmen) angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie statt dessen die {{cssxref("border")}} CSS-Eigenschaft auf den entsprechenden tabellebezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Während keine HTML-Spezifikation `height` als `<table>`-Attribut beinhaltet, unterstützen einige Browser eine nicht standardisierte Interpretation von `height`. Der einheitenlose Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn als Prozentwert festgelegt, wird die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers sein. Verwenden Sie stattdessen die {{cssxref("min-height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Visuelles Layout von Tabelleninhalten

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

Das `<table>`-Element erstellt einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` generieren rechteckige Boxen. Jede Box füllt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln:

1. Die Zeilen-Boxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilen-Box füllt eine Zeile von Zellen.
2. Eine Zeilengruppen-Box füllt eine oder mehrere Zeilen-Boxen.
3. Spalten-Boxen werden in Quellcode-Reihenfolge nebeneinander platziert. Je nach Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten in links-nach-rechts- oder rechts-nach-links-Richtung ausgelegt. Eine Spaltenbox füllt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppe-Box füllt eine oder mehrere Spalten-Boxen.
5. Eine Zellen-Box kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten passen die Zellen an, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben Abstände. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenebenen und Transparenz

Zum Zweck des Stylings können die Tabellenelemente als auf sechs überlagerte Ebenen gelegt betrachtet werden:

![Table element layers](table_element_layers.png)

Der auf einem Element in einer Ebene gesetzte Hintergrund ist nur sichtbar, wenn die über ihn liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz einnimmt.

## Barrierefreiheit

### Beschriftungen

Durch die Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, wird den Menschen geholfen, zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Personen, die mit Unterstützungstechnologie wie einem Bildschirmleser navigieren, Menschen mit Sehbehinderungen und Personen mit kognitiven Beeinträchtigungen.

- [MDN: Eine Überschrift zu Ihrer Tabelle mit \<caption> hinzufügen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web-Barrierefreiheits-Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Festlegen des Bereichs von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elementen) ist in einfachen Kontexten redundant, da der Bereich abgeleitet wird. Einige Unterstützungs-Technologien können jedoch versagen, korrekte Ableitungen zu ziehen, daher kann die Angabe des Kopfbereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die Zellen bereitzustellen, die sich auf eine Kopfzelle beziehen.

- [MDN: Leitfaden zur Zugänglichkeit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Kopfzellen • Tabellen • W3C WAI Web-Barrierefreiheits-Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfzellen • Tabellen • W3C WAI Web-Barrierefreiheits-Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des Scope-Attributs, um Kopfzellen und Datenzellen in Datentabellen zuzuordnen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistierende Technologien wie Bildschirmleser können Schwierigkeiten beim Parsen von Tabellen haben, die so komplex sind, dass Kopfzellen nicht in einer strikt horizontalen oder vertikalen Weise zugeordnet werden können. Dies wird typischerweise durch die Anwesenheit der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribute angezeigt.

Idealerweise sollten alternative Möglichkeiten zur Darstellung des Tabelleninhalts in Betracht gezogen werden, einschließlich des Aufbrechens in eine Sammlung von kleineren, verwandten Tabellen, die nicht von der Nutzung der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribute abhängen. Zusätzlich dazu, dass Menschen, die unterstützende Technologien verwenden, den Inhalt der Tabelle verstehen, kann dies auch Menschen mit kognitiven Beeinträchtigungen helfen, die Schwierigkeiten haben könnten, die Verknüpfungen, die das Tabellenlayout beschreibt, zu verstehen.

Wenn die Tabelle nicht aufgebrochen werden kann, verwenden Sie eine Kombination der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) Attribute, um programmatisch jede Tabellenzelle mit den Kopfzellen ({{HTMLElement("th")}}-Elemente) zu verknüpfen, auf die sich die Zelle bezieht.

- [MDN: Leitfaden zur Zugänglichkeit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Kopfzellen • Tabellen • W3C WAI Web-Barrierefreiheits-Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von id- und header-Attributen, um Datenzellen mit Kopfzellen in Datentabellen zu verknüpfen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele enthalten Tabellen von zunehmender Komplexität. Siehe auch unseren Anfänger-[Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zum Tabellendesign, einschließlich allgemeiner, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugeordneten Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und üblichen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logisch entwickelte Struktur mit {{Glossary("semantics", "semantischem")}} Markup ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem verstanden und navigiert werden können, einschließlich Suchmaschinen und Benutzern unterstützender Technologien.

Das erste Beispiel ist grundlegend, mit nachfolgenden Beispielen, die in der Komplexität wachsen. Zuerst werden wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle entwickeln. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Zellen-Spanning oder explizit definierte Zellbeziehungen. Nicht einmal eine Überschrift wird bereitgestellt. Während wir die Beispiele durcharbeiten, werden sie schrittweise erweitert, um alle die Tabelleneigenschaften zu enthalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS eingebunden.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden innerhalb dieser mit Tabellenkopf- und Datenzellen definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es wurde kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) auf diese Tabelle angewendet. Das Styling resultiert ausschließlich aus dem [Benutzer-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem es den Inhalt erweitert und grundlegende CSS-Stile hinzufügt.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen) mit jeweils vier Spalten. Die erste Zeile ist eine Reihe von Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen beinhalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als Erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionierungselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppierung, d.h. alle Zeilen werden innerhalb des Körpers der Tabelle mit einem impliziten {{HTMLElement("tbody")}}-Element eingeschlossen.

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

Mit CSS gestalten wir die grundlegende Stilisierung, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur deutlicher darzustellen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenelemente, einschließlich derjenigen, die mit sowohl {{HTMLElement("th")}} als auch {{HTMLElement("td")}} Elementen spezifiziert sind, hinzu, wodurch jede Kopf- und Datenzelle abgegrenzt wird.

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

### Festlegen der Beziehungen von Tabellenzellen

Bevor wir mit der Erweiterung der Tabelle auf fortgeschrittene Weise fortfahren, ist es ratsam, die {{Glossary("accessibility", "Zugänglichkeit")}} zu verbessern, indem wir Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definieren.

#### HTML

Dies wird durch das Einführen des [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attributs auf den {{HTMLElement("th")}}-Elementen erreicht und durch Setzen der Werte auf die entsprechenden `col` (Spalte) oder `row` Werte.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung bietet wertvolle kontextuelle Informationen für Assistive Technologien wie Bildschirmleser, um zu identifizieren, zu welchen Zellen die Kopfzellen gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und Assistive Technologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Angabe von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Zugänglichkeit durch [Festlegen von Zellbeziehungen](#festlegen_der_beziehungen_von_tabellenzellen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest des Tabelleninhalts bietet, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfteil der Tabelle zu spezifizieren. Außerdem kann das, was vom Browser automatisch erreicht wird, auch explizit definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen, um unerwünschte Ergebnisse zu vermeiden.

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

Auch hier ändern sich das CSS und das visuelle Ergebnis nicht – das Spezifizieren solcher Tabellensektionsgruppen bietet wertvolle kontextuelle Informationen für Assistive Technologien, einschließlich Bildschirmlesern und Suchmaschinen, sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenübergreifende Zellen

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfbereich einführen.

#### HTML

Basierend auf der bisher erstellten Tabelle wird eine neue Spalte für ein „Mitgliedschafts-Enddatum“ in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird auch im Kopfbereich ({{HTMLElement("thead")}}-Element) hinzugefügt, um einen „Mitgliedschaftsdaten“-Kopf als Überschrift für die "Beitritt" und "Storniert" Spalten einzuführen.

Das Erstellen der zweiten Kopfzeile beinhaltet das Hinzufügen von [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributen zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich hat nun zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elementen) „Name“, „ID“, „Mitgliedschaftsdaten“ und „Kontostand“ und einen „Mitgliedschaftsdaten“-Kopf mit zwei Unterkapiteln, die in einer zweiten Zeile sind: „Beitritt“ und „Storniert“. Dies wird erreicht durch:

- Die "Name", "ID" und "Balance" Kopfzellen der ersten Zeile erstrecken sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribut verwendet wird, wodurch sie alle zwei Zeilen hoch sind.
- Die „Mitgliedschaftsdaten“-Kopfzelle der ersten Zeile erstreckt sich über zwei Spalten mithilfe des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die zwei Kopfzellen „Beitritt“ und „Storniert“, da die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt sind, die sich über zwei Zeilen erstrecken. Die beiden Kopfzellen sind korrekt unter dem „Mitgliedschaftsdaten“ Kopf positioniert.

### Tabellenüberschrift und Spaltenzusammenfassung

Es ist eine übliche und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, sodass Benutzer schnell die Relevanz der Tabelle bestimmen können. Darüber hinaus wird die „Balance“-Spalte durch die Anzeige der Summe der Salden der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Zusammenfassung der Tabelle wird bereitgestellt, indem eine [Beschriftung](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt wird. Die Beschriftung bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfuß-Bereich ({{HTMLElement("tfoot")}}-Element) unter dem Körper hinzugefügt, mit einer Zeile, die die „Balance“-Spalte zusammenfasst, indem die Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} auf die Kopf- und Fußzeilen hinzuzufügen. Diesmal bleibt das HTML unverändert, daher tauchen wir direkt in das CSS ein.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine visuell ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} gestylt werden, indem eine leichte blaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell allen Zellen in bestimmten Abschnitten gleichzeitig eine Hintergrundfarbe zuzuweisen.

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

### Erweiterte Tabellenstilgestaltung

Jetzt werden wir alles ausreizen, mit Stilen sowohl auf den Zeilen in den Kopf- und Körperbereichen, einschließlich alternierender Zeilenfarben, Zellen mit verschiedenen Farben abhängig von ihrer Position innerhalb einer Zeile und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

Hier sieht die finale Tabelle so aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderungen am HTML wieder. Sehen Sie, was die richtige Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel umfassender. Es ist nicht kompliziert, aber es passiert eine Menge. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} Eigenschaften hinzugefügt, um den Abstand zwischen Zellen zu eliminieren und Grenzen, die sich berühren, zusammenzubrechen, sodass sie eine einzige Grenze und nicht eine doppelte Grenze resultieren. Zusätzlich wird das {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}} Eigenschaft am `bottom` der Tabelle platziert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen auf den `bottom` der Zelle aus, wie auf den Zellen im Kopf zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente in den Kopf der Tabelle (wie durch {{HTMLElement("thead")}} angegeben). Dann wird die untere Grenze des Kopfes als eine Linie von zwei Pixeln Breite gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass tatsächlich zwei Zeilen dort sind; die Anwendung des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Stylisieren wir die beiden Kopfzellen "Beitritt" und "Storniert" mit grünen und roten Farbtönen, um das "Gute" eines neuen Mitglieds und das "Ärgernis" einer stornierten Mitgliedschaft darzustellen. Hier graben wir in die letzte Zeile des Tabellenkopfes mit dem {{CSSxRef(":last-of-type")}}-Selektor und geben der ersten Kopfzelle darin (dem "Beitritt"-Header) eine grünliche Farbe und der zweiten Kopfzeile darin (dem "Storniert"-Header) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte hervorstechen sollte, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedernamen linksbündig zu machen, und mit einem etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem alternierende Zeilenfarben verwendet werden – dies wird manchmal als "Zebra-Streifen" bezeichnet. Fügen wir jeder geraden Zeile etwas {{cssxref("background-color")}} hinzu:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, tun wir das hier. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für den letzten {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein ähnliches Styling wie im Kopf auf den Fußteil der Tabelle angewendet, um ihn auch hervorzuheben:

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

### Darstellung großer Tabellen in kleinen Räumen

Ein häufiges Problem bei Tabellen im Web ist, dass sie nativ nicht sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge des Inhalts groß ist, und die Möglichkeit, sie scrollbar zu machen, ist nicht offensichtlich, besonders wenn das Markup von einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen darzustellen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und es nichts Bemerkenswertes daran gibt. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Wenn Sie sich diese Stile ansehen, werden Sie bemerken, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle etwas von ihrer Integrität, und die Tabellenelemente versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` am {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für den {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel Spalten breiter machen, als sie zum Anzeigen der Daten sein müssen.

Um die Tabellenüberschriften auf der Seite zu halten, während man nach unten scrollt, haben wir {{cssxref("position")}} auf 'sticky' an den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da die Überschrift sonst nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist das auf `auto` gesetzte {{cssxref("overflow")}} der wichtige Teil hier, da es die Tabelle scrollbar macht.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>Null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eines der folgenden:
            <ul>
              <li>Null oder mehr {{HTMLElement("tbody")}}-Elemente</li>
              <li>Ein oder mehrere {{HTMLElement("tr")}}-Elemente</li>
            </ul>
          </li>
          <li>Ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das fließenden Inhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >Tabelle</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle zu setzen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Aussehen von Zellrahmen, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und zum Setzen von Abständen beim Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung von Tabellenzelleninhalten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung von Tabellenzelleninhalten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
