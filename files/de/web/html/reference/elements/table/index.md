---
title: "<table>: Das Table-Element"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten—das heißt, Informationen, die in einer zweidimensionalen Tabelle, bestehend aus Reihen und Spalten von Zellen mit Daten, präsentiert werden.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz dokumentiert, um vorhandenen Code zu aktualisieren und aus rein historischem Interesse.

- `align` {{deprecated_inline}}

  - : Spezifiziert die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger Hexadezimal-RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` vorangestellt ist, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert, als ein nicht-negativer ganzzahliger Wert (in Pixeln), die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, wird das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Stattdessen verwenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Raums zwischen zwei Zellen. Dieses Attribut ist obsolet: Stattdessen setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>` Element. Beachten Sie, dass dies keine Auswirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>` Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden soll. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}} stattdessen, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}} Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Spezifiziert die Breite der Tabelle. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als `<table>` Attribut enthält, unterstützen einige Browser eine nicht standardisierte Interpretation von `height`. Der wertlose Wert legt eine minimale absolute Höhe in Pixel fest. Wenn als Prozentwert festgelegt, ist die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

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

Der `<table>`-Kasten etabliert einen Tabellen-Formatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Kästen. Jeder Kasten belegt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln:

1. Die Reihen-Kästen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten auf. Jeder Reihen-Kasten belegt eine Reihe von Zellen.
2. Ein Reihen-Gruppen-Kasten belegt eine oder mehrere Reihen-Kästen.
3. Spalten-Kästen werden nebeneinander in Quellcode-Reihenfolge platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attributs, werden die Spalten in links-nach-rechts oder rechts-nach-links Richtung angelegt. Ein Spalten-Kasten belegt eine oder mehrere Spalten von Tabellenzellen.
4. Ein Spalten-Gruppen-Kasten belegt eine oder mehrere Spalten-Kästen.
5. Ein Zellen-Kasten kann sich über mehrere Reihen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um sie an die verfügbare Anzahl von Reihen und Spalten anzupassen.

Tabellenzellen haben Padding. Kästen, die eine Tabelle bilden, haben keine Ränder.

### Tabelleebenen und Transparenz

Für Styling-Zwecke können die Tabellenelemente als auf sechs überlagerte Ebenen gelegt betrachtet werden:

![Ebenen von Tabellenelementen](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wird, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob dort ein anonymer Tabellenzellenkasten wäre.

## Barrierefreiheit

### Überschriften

Indem ein {{HTMLElement("caption")}} Element bereitgestellt wird, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft es den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Menschen, die mit Hilfe von assistiver Technologie wie einem Bildschirmlesegerät navigieren, Menschen mit eingeschränktem Sehvermögen und Menschen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spaltenscoping

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut bei Header-Zellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Scope abgeleitet wird. Einige assistive Technologien könnten jedoch keine korrekten Ableitungen machen, also kann das Spezifizieren des Header-Scopes die Benutzererfahrungen verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die mit einem Header verbundenen Zellen bereitzustellen.

- [MDN Tabellen-Barrierefreiheit Leitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributs zur Assoziation von Header- und Datentabellenzellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistive Technologien wie Bildschirmlesegeräte könnten Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Header-Zellen nicht in einer strikt horizontalen oder vertikalen Weise zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribute angezeigt.

Idealerweise betrachten Sie alternative Möglichkeiten, den Tabelleninhalt zu präsentieren, einschließlich das Aufbrechen in eine Sammlung von kleineren, verwandten Tabellen, die nicht auf die Verwendung der [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribute angewiesen sind. Neben der Unterstützung von Menschen, die Hilfstechnologien nutzen, um den Tabelleninhalt zu verstehen, könnte dies auch Menschen mit kognitiven Bedenken zugutekommen, die möglicherweise Schwierigkeiten haben, die Zuordnungen zu verstehen, die vom Tabellenlayout beschrieben werden.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination aus den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) Attributen, um programmgesteuert jede Tabellenzelle mit den Header(n) ({{HTMLElement("th")}}-Elemente) zu assoziieren, mit denen die Zelle verbunden ist.

- [MDN Tabellen-Barrierefreiheit Leitfaden](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der id- und headers-Attribute zur Assoziation von Datentabellenzellen mit Headerzellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die untenstehenden Beispiele beinhalten Tabellen mit progressiv zunehmender Komplexität. Siehe auch unseren Anfängerleitfaden zum [Stylen von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Table-Styling-Informationen einschließlich gängiger, nützlicher Techniken.

Da die Struktur eines `<table>` den Gebrauch mehrerer tabellenbezogener HTML-Elemente sowie verschiedenen zugehörigen Attributen beinhaltet, sind die folgenden Beispiele dazu gedacht, eine vereinfachte Erklärung zu bieten, die die Grundlagen und allgemeinen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellbeispiele zeigen, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt wird.

Aufgrund der Art und Weise, wie HTML-Tabellen strukturiert sind, kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und die endgültige Erscheinung der Tabelle klar zu definieren, um die passende Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wird, ist nicht nur einfacher zu stylen, sondern ermöglicht nützliche und zugängliche Tabellen, die von allen, einschließlich Suchmaschinen und Benutzern von assistiven Technologien, verstanden und navigiert werden können.

Das erste Beispiel ist simpel, gefolgt von Beispielen, die in ihrer Komplexität zunehmen. Zunächst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellenschnittgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellübergreifung oder explizit definierte Zellbeziehungen. Nicht einmal eine Beschriftung wird bereitgestellt. Während wir die Beispiele durchgehen, werden sie schrittweise erweitert, um alle Table-Merkmale zu enthalten, die eine komplexe Datentabelle haben sollte.

### Einfache Tabelle

Dieses Beispiel umfasst eine _sehr_ einfache Tabelle mit drei Reihen und zwei Spalten. Um die Standardstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS eingebunden.

#### HTML

Die Tabellenreihen werden mit {{HTMLElement("tr")}} Elementen definiert, und die Spalten werden innerhalb dieser mit Tabellenkopf- und Datenzellen definiert. Die erste Reihe enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Reihe befindet sich in der entsprechenden Spalte—das heißt, das erste Element einer Reihe ist in der ersten Spalte, und das zweite Element dieser Reihe ist in der zweiten Spalte.

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

Es wird kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets) auf diese Tabelle angewendet. Das Styling ergibt sich ausschließlich aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [einfache Tabelle](#einfache_tabelle), indem es den Inhalt erweitert und grundlegende CSS-Stile hinzufügt.

#### HTML

Die Tabelle umfasst nun vier Reihen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Reihe ist eine Reihe von Kopfzellen (Die erste Reihe enthält nur {{HTMLElement("th")}}-Elemente). Die folgenden Reihen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erster Kind-Elemente jeder Reihe) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppe, d.h. alle Reihen sind innerhalb des Korpus der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS stellen wir das grundlegende Styling bereit, um Linien um die Komponenten der Tabelle herum zu erstellen, um die Datenstruktur klarer zu gestalten. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derer, die sowohl durch {{HTMLElement("th")}} als auch {{HTMLElement("td")}} spezifiziert sind, und markiert so jede Kopf- und Datenzelle.

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

### Spezifizieren von Zellbeziehungen der Tabelle

Bevor wir die Tabelle auf fortgeschrittenere Weise erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem man die Beziehungen zwischen Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definiert.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt wird und die Werte auf den entsprechenden `col` (Spalte) oder `row` Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert—die Anpassung liefert wertvolle kontextuelle Informationen für assistive Technologien wie Bildschirmlesegeräte, um zu helfen, welche Zellen zu den Überschriften gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und assistierenden Technologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizites Spezifizieren von Tabellenschnittgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch das [Spezifizieren von Zellbeziehungen](#spezifizieren_von_zellbeziehungen_der_tabelle), kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch das Einführen von Tabellenschnittgruppen verbessert werden.

#### HTML

Da die erste Reihe ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und die Kopfzeile für den Rest der Tabelleninhalte bereitstellt, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Reihe als Kopfsektion der Tabelle explizit zu spezifizieren. Darüber hinaus kann das, was automatisch durch den Browser erreicht wird, auch explizit definiert werden—die Korpussektion der Tabelle, die die Hauptdaten der Tabelle enthält, wird durch das Umfassen der entsprechenden Reihen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu verhindern.

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

Erneut bleiben das CSS und das visuelle Ergebnis unverändert—solche Tabellenschnittgruppen zu spezifizieren, liefert wertvolle kontextuelle Informationen für assistive Technologien, einschließlich Bildschirmlesegeräte und Suchmaschinen, sowie zum Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Reihenübergreifung

In diesem Beispiel erweitern wir die Tabelle noch weiter durch das Hinzufügen einer Spalte und das Einführen einer mehrreihigen Kopfsektion.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird eine neue Spalte für ein "Mitgliedschafts-Enddatum" in jeder Korpusreihe mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine weitere Reihe ({{HTMLElement("tr")}}-Element) wird ebenfalls in der Kopfsektion ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschafts-Daten"-Überschrift als Überschrift für die Spalten "Beigetreten" und "Gekündigt" einzuführen.

Die Erstellung der zweiten Kopfreihe beinhaltet das Hinzufügen der [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) Attribute zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Reihen zuzuordnen.

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

Die Kopfsektion hat nun zwei Reihen, eine mit den Überschriften ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschaftsdaten" und "Guthaben", und eine "Mitgliedschaftsdaten"-Überschrift mit zwei Unterüberschriften, die sich in einer zweiten Zeile befinden: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die erste Reihe der "Name", "ID" und "Balance" Kopfzellen erstreckt sich über beide Tabellenkopfzeilen durch die Verwendung des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributs, wodurch sie jeweils zwei Reihen hoch sind.
- Die "Mitgliedschaftsdaten"-Kopfzelle in der ersten Reihe erstreckt sich über zwei Spalten mit dem [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut, wodurch sie zwei Spalten breit ist.
- Die zweite Reihe enthält nur die zwei Kopfzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten mit den Zellen in der ersten Reihe, die sich über zwei Reihen erstrecken, kombiniert werden. Die zwei Kopfzellen befinden sich richtig unter der "Mitgliedschaftsdaten"-Überschrift.

### Tabellenüberschrift und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, die es den Benutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Darüber hinaus wird die "Guthaben"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung einer Tabellen[Überschrift](#überschriften) ({{HTMLElement("caption")}}-Element) als erstes Kind-Element der `<table>` hinzugefügt. Die Überschrift bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird eine Tabellenfußsektion ({{HTMLElement("tfoot")}}-Element) unter dem Korpus hinzugefügt, mit einer Reihe, die die "Guthaben"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegende Tabellenstile

Lassen Sie uns der Tabelle einen grundlegenden Stil verleihen, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Diesmal ändert sich der HTML-Code nicht, also lassen Sie uns direkt in das CSS eintauchen.

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

Während eine {{cssxref("font")}}-Eigenschaft hier auf das `<table>`-Element addiert wird, um eine visuell ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung) zu setzen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} gestylt werden, indem eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

Jetzt werden wir alles ausschöpfen, mit Stilen auf Reihen sowohl in den Kopf- als auch in den Korpusbereichen, einschließlich abwechselnder Reihenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Reihe, und so weiter. Lassen Sie uns zunächst das Ergebnis betrachten.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Auch hier gibt es keine Änderung am HTML. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel umfangreicher. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie es uns aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und sich berührende Rahmen zusammenzufalten, um ein einzelner Rahmen zu sein, anstelle von doppelten Rahmen. Zusätzlich wird die {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft an den `bottom` der Tabelle positioniert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Platz um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was bei den Zellen im Kopfbereich zu sehen ist, die sich über zwei Reihen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopfbereich der Tabelle (wie durch {{HTMLElement("thead")}} angegeben). Dann wird der untere Rahmen des Kopfes als eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Reihe im Kopfbereich anzuwenden. Warum? Weil der Kopfbereich aus zwei Reihen besteht, die von einigen Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Reihen sind; das Anwenden des Stils auf die erste Reihe würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Bummer" einer gekündigten Mitgliedschaft darzustellen. Hier graben wir uns in die letzte Zeile des Kopfabschnitts der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selektor ein und geben der ersten Kopfzelle darin (der "Beigetreten" Kopf) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Gekündigt" Kopf) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte hervorstechen sollte, wird hier ebenfalls ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Reihe des Tabellenkorpus mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedernamen linksbündig auszurichten, sowie mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch Wechseln der Reihenfarben zu verbessern—dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns etwas {{cssxref("background-color")}} auf jede gerade Reihe anwenden:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns das hier machen. Dies setzt lediglich die {{CSSxRef("text-align")}}-Eigenschaft für die letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein Styling ähnlich dem im Kopfbereich auf den Fußbereich der Tabelle angewendet, um diesen ebenfalls hervorzuheben:

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

### Große Tabellen in kleinen Räumen darstellen

Ein häufiges Problem bei Tabellen im Web ist, dass sie auf kleinen Bildschirmen, wenn der Inhalt umfangreich ist, nicht von Natur aus gut funktionieren, und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, besonders wenn das Markup aus einem CMS kommen mag und nicht geändert werden kann, um eine Umhüllung zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen darzustellen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Besonderes daran ist. Das CSS ist in diesem Beispiel nützlicher zur Inspektion.

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

Beim Betrachten dieser Stile bemerken Sie, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle einige ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu lindern, haben wir {{cssxref("white-space")}} auf `nowrap` auf den {{HTMLElement("tbody")}} gesetzt. Allerdings tun wir dies nicht für den {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter als nötig machen, um die Daten anzuzeigen.

Um die Tabellenüberschriften auf der Seite beim Herunterscrollen zu halten, haben wir {{cssxref("position")}} auf den {{HTMLElement("th")}}-Elementen auf sticky gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da wenn wir es tun, die Kopfzeile nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist die auf `auto` gesetzte {{cssxref("overflow")}} hier wichtig, da sie die Tabelle scrollbar macht.

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
          >Fließinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}} Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eines der folgenden:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}} Elemente</li>
              <li>eins oder mehr {{HTMLElement("tr")}} Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das Fließinhalt akzeptiert</td>
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
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Erscheinungsbild von Zellrahmen, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Abstand auf Zellinhalten zu setzen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Tabellenzellinhalt horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Tabellenzellinhalt vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
