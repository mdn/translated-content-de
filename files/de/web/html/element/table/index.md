---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten—das heißt, Informationen, die in einer zweidimensionalen Tabelle dargestellt werden, bestehend aus Zeilen und Spalten von Zellen, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier noch zu Referenzzwecken dokumentiert, wenn bestehender Code aktualisiert wird und aus rein historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` vorangestellt ist, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert die Größe des Rahmens, der die Tabelle umgibt, als nicht-negativen ganzzahligen Wert (in Pixeln). Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf `void` gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Raums zwischen zwei Zellen. Dieses Attribut ist veraltet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo die Linien (Ränder) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rand um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>`, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}} Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut enthält, unterstützen einige Browser eine nicht-standardisierte Interpretation von `height`. Der wertlose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn er als Prozentwert gesetzt wird, ist die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout des Tabelleninhalts

Folgende Elemente gehören zur Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Das `<table>`-Element etabliert einen Tabellen-Formatierungskontext. Elemente innerhalb des `<table>` generieren rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilenbox nimmt eine Zeile von Zellen ein.
2. Eine Zeilengruppenbox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen sind in der Quellcode-Reihenfolge nebeneinander angeordnet. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributes werden die Spalten von links nach rechts oder von rechts nach links ausgelegt. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen zu, um sie in die verfügbaren Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben eine Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Zu Styling-Zwecken können Sie sich die Tabellenelemente als in sechs übereinanderliegenden Schichten angeordnet vorstellen:

![Tabellenelement-Schichten](table_element_layers.png)

Der Hintergrund, der auf einem Element in einer Ebene gesetzt ist, wird nur sichtbar sein, wenn die darüberliegenden Schichten einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz eingenommen hätte.

## Barrierefreiheit

### Beschriftungen

Das Bereitstellen eines {{HTMLElement("caption")}} Elements, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Menschen, die mit Unterstützungstechnologien wie einem Screenreader navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Einschränkungen.

- [MDN: Einem Tabelle eine Beschriftung mit \<caption> hinzufügen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Scoping von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elementen) ist in einfachen Kontexten redundant, da der Bereich abgeleitet wird. Einige Unterstützungstechnologien können jedoch möglicherweise keine korrekten Ableitungen ziehen, sodass das Angeben des Kopfbereichs die Benutzererfahrung verbessern kann. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die Zellen bereitzustellen, die zu einem Header gehören.

- [MDN: Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit zwei Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwendung des Scope-Attributs zur Zuordnung von Kopfzellen und Datentabellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Unterstützungstechnologien wie Screenreader können Schwierigkeiten beim Parsen von Tabellen haben, die so komplex sind, dass Header-Zellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten in Betracht ziehen, den Inhalt der Tabelle zu präsentieren, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Dies hilft nicht nur Menschen, die Unterstützungstechnologien verwenden, den Inhalt der Tabelle zu verstehen, sondern kann auch Menschen mit kognitiven Einschränkungen zugute kommen, die Schwierigkeiten haben könnten, die Zuordnungen zu verstehen, die der Tabellenlayout beschreibt.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um programmatisch jede Tabellenzelle mit dem oder den Headern ({{HTMLElement("th")}}-Elementen) zu assoziieren, mit denen die Zelle verbunden ist.

- [MDN: Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit mehrstöckigen Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von ID- und Header-Attributen zur Zuordnung von Datenzellen zu Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen von zunehmender Komplexität. Siehe auch unseren Anfänger-[Tabellenstyling](/de/docs/Learn_web_development/Core/Styling_basics/Tables)-Leitfaden für Informationen zum Tabellenstyling, einschließlich üblicher, nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Strukturierung von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell an Umfang zunehmen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur einfacher zu stylen, sondern ermöglicht auch nützliche und barrierefreie Tabellen, die von jedem verstanden und navigiert werden können, einschließlich Suchmaschinen und Nutzer von Unterstützungstechnologien.

Das erste Beispiel ist grundlegend, wobei die anschließenden Beispiele an Komplexität zunehmen. Zunächst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine tabellenabschnittsbezogenen Gruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellenüberspannung oder explizit definierte Zellbeziehungen. Nicht einmal eine Beschriftung wird bereitgestellt. Während wir die Beispiele durchgehen, werden sie schrittweise erweitert, um alle Tabellenmerkmale zu enthalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel umfasst eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standardbrowser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS beibehalten.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und -datenspalten darin definiert. Die erste Zeile enthält die Kopfzeilen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte—das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling ergibt sich rein aus dem [Benutzer-Agent-Stil-Dokument](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzeilen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle besteht nun aus vier Zeilen ({{HTMLElement("tr")}}-Elementen), mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen umfassen eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionen verwendet werden, definiert der Browser automatisch die Content-Gruppenstruktur, d. h. alle Zeilen sind innerhalb des Tabelleikörpers eines impliziten {{HTMLElement("tbody")}}-Elementes eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derer, die sowohl mit {{HTMLElement("th")}} als auch {{HTMLElement("td")}}-Elementen angegeben sind, und markiert jede Kopf- und Datenzelle ab.

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

### Spezifizieren von Tabellenzellbeziehungen

Bevor Sie die Tabelle auf fortgeschrittene Weise erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Sie Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}) definieren.

#### HTML

Dies wird erreicht, indem Sie das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen einführen und die Werte auf die entsprechenden `col` (Spalte) oder `row` (Zeile) einstellen.

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

Das CSS und das visuelle Ergebnis bleiben unverändert—die Anpassung bietet wertvolle kontextuelle Informationen für Unterstützungstechnologien wie Screenreader, um zu helfen, welche Zellen die Header betreffen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und Unterstützungstechnologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Angabe von Tabellenabschnittsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Angabe von Zellbeziehungen](#spezifizieren_von_tabellenzellbeziehungen) können die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellenabschnittsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Header für den Rest des Tabelleninhalts bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfabschnitt der Tabelle anzugeben. Darüber hinaus kann das, was vom Browser automatisch gemacht wird, auch explizit definiert werden—der Hauptdatenteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird angegeben, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die vorgesehene Tabellenstruktur zu erstellen, um unerwünschte Ergebnisse zu vermeiden.

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

Wieder einmal sind das CSS und das visuelle Ergebnis unverändert—die Angabe solcher Tabellenabschnittsgruppen bietet wertvolle kontextuelle Informationen für Unterstützungstechnologien, einschließlich Screenreadern und Suchmaschinen, sowie zum Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenüberspannung

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfabschnitt einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird in jedem Körperabschnitt eine neue Spalte für ein "Mitgliedschafts-Enddatum" hinzugefügt, die mithilfe des {{HTMLElement("td")}}-Elements hinzugefügt wird. Zusätzlich wird im Kopfabschnitt ({{HTMLElement("thead")}}-Element) eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) hinzugefügt, um eine Überschrift "Mitgliedschaftsdaten" als Überschrift für die Spalten "Beigetreten" und "Storniert" hinzuzufügen.

Das Erstellen der zweiten Kopfzeile beinhaltet das Hinzufügen von [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) Attributen zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuweisen.

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

Der Kopfabschnitt hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedsdaten" und "Bilanz", und eine "Mitgliedsdaten"-Kopfzeile mit zwei Unterkopfzeilen, die in einer zweiten Zeile sind: "Beigetreten" und "Storniert". Dies wird erreicht durch:

- Die erste Zeile mit den Kopfzellen "Name", "ID" und "Bilanz" erstrecken sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribut verwendet wird, wodurch sie jeweils zwei Zeilen hoch sind.
- Die erste Zeile mit der Kopfzelle "Mitgliedsdaten" erstreckt sich über zwei Spalten, indem das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet wird, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Storniert", weil die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt sind, die sich über zwei Zeilen erstrecken. Die zwei Kopfzellen sind korrekt unter der "Mitgliedsdaten"-Kopfzeile positioniert.

### Tabellenüberschrift und Spaltensumme

Es ist übliche und empfehlenswerte Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, damit Benutzer schnell erkennen können, ob die Tabelle relevant ist. Darüber hinaus wird die "Bilanz"-Spalte durch die Anzeige der Summe der Bilanzen der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung einer Tabellen[beschriftung](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt. Die Beschriftung bietet die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfußabschnitt ({{HTMLElement("tfoot")}}-Element) unter dem Körper hinzugefügt, mit einer Zeile, die die "Bilanz"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die früher eingeführten Elemente und Attribute werden angewendet.

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

Lassen Sie uns der Tabelle einen grundlegenden Stil hinzufügen, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Der HTML-Code bleibt unverändert, also lassen Sie uns direkt in das CSS eintauchen.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element gesetzt wird, um eine visuell ansprechendere Schriftart (oder eine scheußliche serifenlose Schriftart, abhängig von Ihrer persönlichen Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, gestylt werden, indem eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Erweitertes Tabellenstyling

Jetzt werden wir alles geben, mit Stilen auf Zeilen in den Header- und Körperbereichen, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben abhängig von der Position innerhalb einer Zeile und so weiter. Lassen Sie uns zuerst das Ergebnis sehen.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderung im HTML. Sehen Sie, was die richtige Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal wesentlich umfassender. Es ist nicht kompliziert, aber es gibt eine Menge zu beachten. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}}- und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und aneinanderstoßende Ränder auf eine einzige Grenze zu reduzieren, anstatt mit doppelten Grenzen zu enden. Zusätzlich wird der {{HTMLElement("caption")}} unten an der Tabelle platziert, indem die {{CSSxRef("caption-side")}}-Eigenschaft verwendet wird:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am unteren Rand der Zelle aus, was an den Zellen im Kopfbereich zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopfbereich der Tabelle (wie durch {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfbereichs auf eine Linie mit zwei Pixel Breite gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopfbereich anzuwenden. Warum? Weil der Kopfbereich aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen vorhanden sind; durch Anwendung des Stils auf die erste Zeile würden wir nicht das erwartete Ergebnis erzielen:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Storniert" mit Grün- und Rottönen gestalten, um das "Gute" eines neuen Mitglieds und das "Üble" eines stornierten Mitglieds zu repräsentieren. Hier tauchen wir in die letzte Zeile des Kopfbereichs der Tabelle ein, indem wir den {{CSSxRef(":last-of-type")}}-Selektor verwenden und der ersten Kopfzelle darin (der "Beigetreten"-Kopfzeile) eine grünliche Farbe geben, und der zweiten Kopfzelle darin (der "Storniert"-Kopfzeile) einen rötlichen Farbton verleihen:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da sich die erste Spalte ebenfalls hervortun soll, wird hier auch benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Reihe des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedernamen links auszurichten, sowie mit einem etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem abwechselnde Zeilenfarben hinzugefügt werden—dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns etwas {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es übliche Praxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns das hier tun. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Zeile des Körperbereichs auf `right`:

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

### Große Tabellen in kleinen Räumen anzeigen

Ein häufiges Problem mit Tabellen im Web ist, dass sie nicht sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge des Inhalts groß ist, und die Art und Weise, sie scrollbar zu machen, ist nicht offensichtlich, besonders wenn das Markup möglicherweise von einem CMS stammt und nicht geändert werden kann, um einen Wrapper hinzuzufügen.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr umfangreich ist, und es gibt nichts Bemerkenswertes daran. Das CSS ist in diesem Beispiel nützlicher zu untersuchen.

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

Beim Betrachten dieser Stile wird Ihnen auffallen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Dies ermöglicht das Scrollen, aber die Tabelle verliert etwas von ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` auf dem {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie zum Anzeigen der Daten sein müssen.

Um die Tabellenköpfe auf der Seite zu halten, während nach unten gescrollt wird, haben wir die {{cssxref("position")}} auf den {{HTMLElement("th")}}-Elementen auf sticky gesetzt. Beachten Sie, dass wir {{cssxref("border-collapse")}} **nicht** auf `collapse` gesetzt haben, da, wenn wir dies tun, der Header nicht korrekt von der restlichen Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist das hier wichtige die auf `auto` gesetzte {{cssxref("overflow")}}, da dies die Tabelle scrollbar macht.

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
          >Fließinhalte</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}} Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}} Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}} Element,</li>
          <li>
            entweder eines der folgenden:
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
      <td>Keine, sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Fließinhalte akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/table_role"
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

- [Lernen: Grundlegende HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Erscheinungsbild von Zellgrenzen, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Abstand des Zellinhalts festzulegen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Tabellenzelleninhalt horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Tabellenzelleninhalt vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
