---
title: "`<table>` HTML-Tabellenelement"
short-title: <table>
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten – Informationen, die in einer zweidimensionalen Tabelle mit Zeilen und Spalten von Zellen dargestellt werden, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um als Referenz beim Aktualisieren von bestehendem Code und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Stattdessen sollten Sie die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} verwenden, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), vorangestellt durch ein `#`, oder ein [Farbennamen](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("background-color")}} verwenden, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert als nicht-negativer Ganzzahlenwert (in Pixel) die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, ist das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("padding")}} an den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen ein.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo in der Tabelle Regeln (Rahmen) angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

  > [!NOTE]
  > Obwohl keine HTML-Spezifikation `height` als Attribut für `<table>` einschließt, unterstützen einige Browser eine nicht standardisierte Interpretation von `height`. Der wertlose Wert setzt eine minimale absolute Höhe in Pixel. Wenn er als Prozentwert gesetzt wird, ist die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visueller Aufbau von Tabelleninhalten

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

Die `<table>`-Box richtet einen Tabellenformatierungskontext ein. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box beansprucht eine Anzahl von Tabellenzellen gemäß den folgenden Regeln:

1. Die Zeilenboxen füllen die Tabelle im Quellcode von oben nach unten. Jede Zeilenbox beansprucht eine Zeile von Zellen.
2. Eine Zeilengruppenbox umfasst eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden nebeneinander im Quellcode platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten in Links-nach-Rechts- oder Rechts-nach-Links-Richtung verlegt. Eine Spaltenbox beansprucht eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppenbox umfasst eine oder mehrere Spaltenboxen.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen zurecht, damit sie in die verfügbaren Reihen und Spalten passen.

Tabellenzellen haben einen Innenabstand. Boxen, die eine Tabelle bilden, haben keinen Außenabstand.

### Tabellenebenen und Transparenz

Für Gestaltungszwecke können die Tabellenelemente als sechs überlagerte Ebenen betrachtet werden:

![Tabellenebenen der Elemente](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wird, ist nur sichtbar, wenn die Ebenen darüber einen transparenten Hintergrund haben. Eine fehlende Zelle wird gerendert, als ob eine anonyme Tabellenzellen-Box diesen Platz eingenommen hätte.

## Barrierefreiheit

### Untertitel

Durch die Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, hilft es den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder ihn überspringen müssen.

Dies hilft Menschen, die sich mit Hilfe von Hilfstechnologien wie einem Bildschirmlesegerät orientieren, Menschen mit eingeschränktem Sehvermögen und Menschen mit kognitiven Einschränkungen.

- [MDN, Einen Untertitel zu Ihrer Tabelle hinzufügen mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Untertitel und Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Abgrenzung von Reihen und Spalten

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut an Kopfzeilen ({{HTMLElement("th")}}-Elementen) ist in einfachen Kontexten redundant, da der Geltungsbereich abgeleitet wird. Einige Hilfstechnologien können jedoch möglicherweise keine korrekten Schlussfolgerungen ziehen, daher kann das Festlegen des Kopffb ereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einer Kopfzeile verbundenen Zellen bereitzustellen.

- [MDN Tabelllen Zugänglichkeitsleitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Hilfstechnologien wie Bildschirmlesegeräte können Schwierigkeiten haben, Tabellen zu interpretieren, die so komplex sind, dass Kopfzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribute angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten in Betracht ziehen, die Inhalte der Tabelle zu präsentieren, einschließlich der Unterteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht darauf angewiesen sein müssen, die Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) zu verwenden. Neben der Unterstützung von Menschen, die Hilfstechnologien verwenden, um den Inhalt der Tabelle zu verstehen, könnte dies auch Menschen mit kognitiven Einschränkungen zugutekommen, die möglicherweise Schwierigkeiten haben, die durch das Layout der Tabelle beschriebenen Assoziationen zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit den Kopfzellen ({{HTMLElement("th")}}-Elementen) zu verknüpfen, mit denen die Zelle verknüpft ist.

- [MDN Tabelllen Zugänglichkeitsleitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die untenstehenden Beispiele beinhalten Tabellen mit zunehmender Komplexität. Sehen Sie sich auch unseren Anfänger-[Leitfaden: Tabellen stilisieren](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zur Tabellenstilierung, einschließlich üblicher, nützlicher Techniken, an.

Da die Struktur einer `<table>` mehrere tabellenbezogene HTML-Elemente sowie verschiedene zugehörige Attribute umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und allgemeinen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den jeweiligen verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie Sie eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellen, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und das Endergebnis der Tabelle klar zu definieren, um die richtige Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wurde, ist nicht nur leichter zu gestalten, sondern ermöglicht auch nützliche und zugängliche Tabellen, die von jedem verstanden und navigiert werden können, einschließlich Suchmaschinen und Nutzern von Hilftechnologien.

Das erste Beispiel ist einfach, mit nachfolgenden Beispielen, die in ihrer Komplexität zunehmen. Zunächst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellenspannung oder explizit definierte Zellbeziehungen. Es wird noch nicht einmal eine Beschriftung bereitgestellt. Während wir die Beispiele durcharbeiten, werden sie schrittweise erweitert, um alle Funktionen zu enthalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel umfasst eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Tabellenstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS eingefügt.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen innerhalb derselben definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte - das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling ergibt sich rein aus dem [Benutzeragenten-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle) durch erweiterte Inhalte und das Hinzufügen grundlegender CSS-Stile.

#### HTML

Die Tabelle umfasst jetzt vier Zeilen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Zeile besteht aus Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Die nachfolgenden Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppen, d.h. alle Zeilen sind innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS stellen wir das grundlegende Styling zur Verfügung, um Linien um die Komponenten der Tabelle zu erzeugen, um die Datenstruktur deutlicher zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich solcher, die mit sowohl {{HTMLElement("th")}} als auch {{HTMLElement("td")}}-Elementen angegeben werden, um jede Kopf- und Datenzelle abzugrenzen.

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

### Spezifizierung von Tabellenzellenbeziehungen

Bevor wir dazu übergehen, die Tabelle in fortgeschrittenerer Weise zu erweitern, ist es ratsam, die {{Glossary("accessibility", "Zugänglichkeit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die entsprechenden `col` (Spalte) oder `row` (Reihe)-Werte zugewiesen werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert - die Anpassung bietet wertvolle kontextuelle Informationen für Hilfstechnologien wie Bildschirmlesegeräte, um zu helfen, die Zellen zu identifizieren, mit denen die Kopfzellen in Beziehung stehen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen Zellen zu erkennen; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Zugänglichkeit durch [Spezifizierung von Zellbeziehungen](#spezifizierung_von_tabellenzellenbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzeilen enthält und die Kopfzeilen für den Rest des Tabelleninhalts bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile als Kopfsektion der Tabelle explizit zu kennzeichnen. Darüber hinaus kann, was bereits automatisch vom Browser erreicht wird, auch explizit definiert werden - die Hauptinhaltssektion der Tabelle, die die Hauptinhalte der Tabelle enthält, wird durch das Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erzeugen und unerwünschte Ergebnisse zu vermeiden.

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

Auch hier bleibt das CSS und das visuelle Ergebnis unverändert - die Spezifizierung solcher Tabellensektionsgruppen bietet wertvolle kontextuelle Informationen für Hilfstechnologien, einschließlich Bildschirmlesegeräte und Suchmaschinen, sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Reihenübergreifung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Ausgehend von der bislang erstellten Tabelle wird eine neue Spalte für ein "Ablaufdatum der Mitgliedschaft" in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine weitere Zeile ({{HTMLElement("tr")}}-Element) wird innerhalb des Kopfbereichs ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdaten"-Kopfzeile als Überschrift für die Spalten "Beigetreten" und "Abgebrochen" einzuführen.

Die Erstellung der zweiten Kopfzeile beinhaltet das Hinzufügen von [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attributen zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich besteht jetzt aus zwei Zeilen, einer mit den Kopfzeilen ({{HTMLElement("th")}}-Elementen) "Name", "ID", "Mitgliedschaftsdaten" und "Balance" und einer "Mitgliedschaftsdaten"-Kopfzeile mit zwei Unterkopfteilen, die in einer zweiten Zeile stehen: "Beigetreten" und "Abgebrochen". Dies wird erreicht durch:

- Die Kopfzellen "Name", "ID" und "Balance" in der ersten Kopfzeile erstrecken sich über beide Kopfzeilen der Tabelle, indem das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attribut verwendet wird, wodurch sie jeweils zwei Zeilen hoch sind.
- Die Kopfzeile "Mitgliedschaftsdaten" in der ersten Reihe erstreckt sich über zwei Spalten mittels des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die beiden Kopfzellen "Beigetreten" und "Abgebrochen", da die anderen drei Spalten mit den Zellen der ersten Zeile zusammengeführt sind, die sich über zwei Zeilen erstrecken. Die beiden Kopfzellen sind korrekt unter dem "Mitgliedschaftsdaten"-Header positioniert.

### Tabellenunterschrift und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, damit Benutzer schnell die Relevanz der Tabelle bestimmen können. Darüber hinaus wird die "Balance"-Spalte durch die Anzeige der Summe der Guthaben der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung einer Tabelllen-[Unterzeile](#untertitel) ({{HTMLElement("caption")}}-Element) als erstes Kindelement des `<table>` hinzugefügt. Die Unterschrift bietet den {{Glossary("accessible_name", "barrierefreien Namen")}} oder die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfußbereich ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Balance"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewandt.

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

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} für die Kopf- und Fußzeilen hinzuzufügen. Der HTML-Code bleibt diesmal unverändert, lassen Sie uns also direkt in das CSS eintauchen.

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

Während eine {{cssxref("font")}}-Eigenschaft hier auf das `<table>`-Element angewendet wird, um eine visuell ansprechendere Schriftart festzulegen (oder eine abscheuliche Serifenlose-Schriftart, je nach persönlicher Meinung), ist der interessante Teil die zweite Regel, wo die {{HTMLElement("tr")}}-Elemente, die sich innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, mit einem hellblauen {{cssxref("background-color")}} versehen sind. Dies ist eine Möglichkeit, schnell einen Hintergrundfarbton für alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Erweitertes Tabellenstyling

Jetzt gehen wir aufs Ganze mit Stilen für Reihen in den Kopf- und Körperbereichen, einschließlich wechselnder Reihenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Reihe und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderungen am HTML-Code. Sehen Sie, was die richtige Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist dieses Mal viel umfangreicher. Es ist nicht kompliziert, aber es gibt viel, das vor sich geht. Lassen Sie es uns aufschlüsseln.

Hier wurden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und Berührungen von Rahmen zu einer einzigen Leiste anstelle von doppelten Rahmen zusammenzuschließen. Zusätzlich wird das {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft am `bottom` der Tabelle platziert:

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

Als Nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Platz um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft ausrichtet den Inhalt der Kopfzellen am `bottom` der Zelle, was an den Zellen im Kopfbereich, die sich über zwei Zeilen erstrecken, zu sehen ist:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} von allen {{HTMLElement("tr")}}-Elementen im Tabellenkopf (wie durch {{HTMLElement("thead")}} festgelegt). Dann wird der untere Rand des Kopfbereichs auf eine zweipixelbreite Linie gesetzt. Allerdings verwenden wir den {{CSSxRef(":nth-of-type")}}-Selektor, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopfbereich anzuwenden. Warum? Weil der Kopfbereich aus zwei Zeilen besteht, die von einigen Zellen überbrückt werden. Das bedeutet, dass tatsächlich zwei Zeilen vorhanden sind. Wenn wir den Stil auf die erste Zeile anwenden, erhalten wir nicht das erwartete Ergebnis:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Abgebrochen" mit grünen und roten Farbtönen versehen, um das "Gute" eines neuen Mitglieds und das "Traurige" einer gekündigten Mitgliedschaft darzustellen. Hier dringen wir in die letzte Zeile des Tabellenkopfes ein, indem wir den {{CSSxRef(":last-of-type")}}-Selektor verwenden und der ersten Kopfzeile darin (die "Beigetreten"-Kopfzeile) einen grünen Farbton und der zweiten Kopfzeile darin (die "Abgebrochen"-Kopfzeile) einen rötlichem Farbton geben:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls auffallen sollte, werden hier einige benutzerdefinierte Stile hinzugefügt. Diese CSS-Regel gestaltet die erste Kopfzeile in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig zu machen, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem man Reihenfarben abwechselt – dies wird manchmal als "Zebramuster" bezeichnet. Lassen Sie uns jedem geraden Zeilenpaar etwas {{cssxref("background-color")}} verleihen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardverfahrend ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns dies hier tun. Hierbei wird die {{CSSxRef("text-align")}}-Eigenschaft für den letzten {{HTMLElement("td")}} in jeder Körperzeile auf `right` gesetzt:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich werden dem Fußbereich der Tabelle ähnliche Stile wie im Kopfbereich hinzugefügt, um diesen hervorzuheben:

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

### Darstellung großer Tabellen in kleinen Bereichen

Ein häufiges Problem bei Tabellen im Web ist, dass sie auf kleinen Bildschirmen bei großer Inhaltsmenge nicht nativ gut funktionieren, und der Weg, um sie scrollbar zu machen, ist nicht offensichtlich, besonders wenn das Markup von einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr umfangreich ist und nichts Bemerkenswertes über ihn vorhanden ist. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Wenn Sie sich diese Stile ansehen, werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Dies ermöglicht das Scrollen, aber die Tabelle verliert etwas von ihrer Integrität, und die Tabellenzellen versuchen so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir auf dem {{HTMLElement("tbody")}} den {{cssxref("white-space")}} auf `nowrap` gesetzt. Wir tun dies jedoch nicht für die {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel Spalten zwingen, breiter zu sein, als sie es sein müssen, um die Daten darzustellen.

Um die Tabellenköpfe auf der Seite zu halten, während nach unten gescrollt wird, haben wir {{cssxref("position")}} auf sticky auf den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da die Kopfzeile nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das hier wesentliche Teil das auf `auto` gesetzte {{cssxref("overflow")}}, da es die Tabelle scrollbar macht.

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
          >Flussinhalt</a
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Einstellung der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Kontrolle des Aussehens von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und Einstellen des Abstands auf Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten von Tabellenzellinhalt
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten von Tabellenzellinhalt
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der Breite der Tabelle
