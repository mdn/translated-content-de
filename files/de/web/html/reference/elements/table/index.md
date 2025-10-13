---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Das **`<table>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert tabellarische Daten – das heißt, Informationen, die in einer zweidimensionalen Tabelle dargestellt werden, die aus Reihen und Spalten von Zellen besteht, die Daten enthalten.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren vorhandenen Codes als Referenz und aus historischem Interesse zu dienen.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negativen Integerwert (in Pixeln). Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rahmen. Dieses Attribut ist obsolet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}} an.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien), und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Zwar enthält keine HTML-Spezifikation `height` als `<table>`-Attribut, doch einige Browser unterstützen eine nicht normgerechte Interpretation von `height`. Der dimensionslose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn als Prozentwert festgelegt, wird die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

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

Die `<table>`-Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilenbox nimmt eine Reihe von Zellen ein.
2. Eine Zeilengruppenbox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden nebeneinander in der Quellcode-Reihenfolge platziert. Je nach Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten in der Richtung von links nach rechts oder von rechts nach links angeordnet. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen ab, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben keine Abstände. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Table layers und Transparenz

Für Styling-Zwecke können die Tabellenelemente als auf sechs übereinandergelegte Schichten verteilt betrachtet werden:

![Ebenen des Table-Elements](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wird, ist nur sichtbar, wenn die Ebenen darüber einen durchsichtigen Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob sich an dieser Stelle eine anonyme Tabellenzellen-Box befindet.

## Barrierefreiheit

### Beschriftungen

Durch die Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert deutlich und prägnant den Zweck der Tabelle beschreibt, wird Menschen geholfen, zu entscheiden, ob sie den Rest des Tabellinhalts prüfen oder überspringen müssen.

Dies hilft Menschen, die mit Hilfe assistiver Technologien wie Screenreadern navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Beeinträchtigungen.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Beschriftung & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spaltenumgrenzung

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, weil der Scope abgeleitet wird. Einige assistive Technologien können jedoch möglicherweise keine korrekten Schlussfolgerungen ziehen, daher kann die Angabe des Headerscope die Benutzererfahrung verbessern. In komplexen Tabellen kann der [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um notwendige Informationen über die Zellen zu liefern, die mit einem Header zusammenhängen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributes, um Kopfzellen und Datenzellen in Datentabellen zu verknüpfen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistive Technologien wie Screenreader können Schwierigkeiten beim Parsen von Tabellen haben, die so komplex sind, dass Kopfzellen nicht auf strikt horizontale oder vertikale Weise zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Methoden in Betracht ziehen, um den Inhalt der Tabelle darzustellen, etwa indem Sie sie in eine Sammlung kleinerer, zusammenhängender Tabellen aufteilen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Dadurch wird nicht nur Menschen, die assistive Technologien verwenden, das Verständnis des Tabelleninhalts erleichtert, sondern es kann auch Menschen mit kognitiven Beeinträchtigungen nützen, die Schwierigkeiten haben können, die Assoziationen zu verstehen, die der Tabellenlayout beschreibt.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit den Header(s) ({{HTMLElement("th")}}-Elemente) zu assoziieren, mit denen die Zelle verbunden ist.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von Id- und Headers-Attributen, um Datenzellen mit Kopfzellen in Datentabellen zu verbinden | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen mit zunehmender Komplexität. Siehe auch unser Anfänger-[Leitfaden für das Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zum Tabellenstyling, einschließlich allgemeiner, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards umfasst. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logisch mit {{Glossary("semantics", "semantischem")}} Markup entwickelte Struktur ist nicht nur einfacher zu stylen, sondern ermöglicht auch nützliche und zugängliche Tabellen, die für alle, einschließlich Suchmaschinen und Benutzer assistiver Technologien, verständlich und navigierbar sind.

Das erste Beispiel ist grundlegend, während die nachfolgenden Beispiele an Komplexität zunehmen. Zunächst entwickeln wir eine sehr grundsätzliche HTML-Tabellenstruktur. Die ersten beiden Beispiele enthalten keine Tabellenabschnittsgruppen wie einen definierten Kopf-, Körper- oder Fußteil und beinhalten keine Zellspanne oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Beschriftung angegeben. Während wir die Beispiele durchgehen, werden sie schrittweise erweitert, um alle Tabellenfunktionen zu beinhalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ grundlegende Tabelle mit drei Zeilen und zwei Spalten. Um die Standarddarstellung im Browser für Tabellen zu demonstrieren, wurde in diesem Beispiel kein CSS eingefügt.

#### HTML

Die Tabellenreihen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenspalten- und Datenzellen darin definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [benutzerdefiniertes Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling ergibt sich ausschließlich aus dem [Benutzeragenten-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem der Inhalt erweitert und grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle besteht nun aus vier Reihen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen umfassen eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellenabschnittselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Zeilen sind im Tabellenkörper eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die durch sowohl {{HTMLElement("th")}}- als auch {{HTMLElement("td")}}-Elemente spezifiziert werden, wodurch jede Kopf- und Datenzelle abgegrenzt wird.

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

### Angabe von Tabellenzellenbeziehungen

Bevor wir dazu übergehen, die Tabelle auf fortgeschrittenere Weise zu erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} durch Definition von Beziehungen zwischen Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) zu verbessern.

#### HTML

Dies wird durch Einführung des [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attributs auf den {{HTMLElement("th")}}-Elementen erreicht und durch Setzen der Werte auf die entsprechenden `col` (Spalte) oder `row` (Zeile).

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung liefert wertvolle kontextuelle Informationen für assistive Technologien wie Screenreader, um zu helfen, welche Zellen zu den Headern gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und assistive Technologien dabei unterstützen, die Beziehungen zwischen Zellen zu erkennen. Siehe [komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Angabe von Tabellenabschnittsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Spezifizierung von Zellbeziehungen](#angabe_von_tabellenzellenbeziehungen) können die {{Glossary("semantics", "Semantiken")}} der Tabelle durch Einführung von Tabellenabschnittsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest des Tabelinhalts bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfteil der Tabelle anzugeben. Darüber hinaus kann das, was automatisch durch den Browser erreicht wird, auch explizit definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird explizit durch Einschließen der entsprechenden Reihen in das {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Das CSS und das visuelle Ergebnis bleiben erneut unverändert – die Angabe solcher Tabellenabschnittsgruppen liefert wertvolle kontextuelle Informationen für assistive Technologien wie Screenreader und Suchmaschinen und für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und einen Kopfbereich mit mehreren Zeilen einführen.

#### HTML

Basierend auf der bisher erstellten Tabelle wird in jeder Inhaltszeile eine neue Spalte für ein "Mitgliedschaft Enddatum" mit dem {{HTMLElement("td")}}-Element hinzugefügt. Außerdem wird eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) innerhalb des Kopfbereichs ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschafts-Daten" Kopfzeile als Überschrift für die "Beigetreten" und "Abgebrochen" Spalten einzuführen.

Das Erstellen der zweiten Kopfzeilenzeile umfasst das Hinzufügen von [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)- und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributen zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschafts-Daten" und "Balance", und eine "Mitgliedschafts-Daten" Kopfzelle mit zwei Unterüberschriften, die sich in einer zweiten Zeile befinden: "Beigetreten" und "Abgebrochen". Dies wird erreicht durch:

- Die Kopfzellen der ersten Zeile “Name”, “ID” und “Balance” erstrecken sich über beide Kopfzeilen der Tabelle mithilfe des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) -Attributs, wodurch sie jeweils zwei Zeilen hoch sind.
- Die Kopfzelle "Mitgliedschaftsdaten" in der ersten Zeile erstreckt sich mit dem [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attribut über zwei Spalten, was sie zwei Spalten breit macht.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Abgebrochen", da die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt werden, die zwei Zeilen umfassen. Die beiden Kopfzellen sind korrekt unter der Kopfzelle "Mitgliedschaftsdaten" positioniert.

### Tabellenbeschriftung und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung des Tabelleninhalts bereitzustellen, die es den Nutzern ermöglicht, schnell zu bestimmen, ob die Tabelle relevant ist. Darüber hinaus wird die "Balance"-Spalte zusammengefasst, indem die Summe der individuellen Mitgliedergleichgewichte angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine [Beschriftung](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt wird. Die Beschriftung liefert den {{Glossary("accessible_name", "barrierefreien Namen")}} oder die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Abschließend wird ein Tabellenfußteil ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt und eine Zeile eingefügt, die die "Balance"-Spalte zusammenfasst, indem sie eine Summe anzeigt. Die zuvor eingeführte Elemente und Attribute werden angewendet.

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

### Grundlagen des Tabellenstylings

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Diesmal bleibt das HTML unverändert, also beginnen wir direkt mit dem CSS.

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

Während ein {{cssxref("font")}}-Eigenschaft hier dem `<table>`-Element hinzugefügt wird, um eine visuell ansprechendere Schriftart (oder eine abominable sans-serif-Schriftart, je nach Ihrer Meinung) einzustellen, ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente im {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} gestylt werden, indem eine hellblaue {{cssxref("background-color")}}-Farbe hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

Jetzt gehen wir aufs Ganze, mit Stilen sowohl auf den Zeilen in den Kopf- als auch in den Körperbereichen, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter. Lassen Sie uns zuerst das Ergebnis ansehen.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt wieder keine Änderung im HTML. Sehen Sie, was eine ordentliche Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist dieses Mal viel umfassender. Es ist nicht kompliziert, aber es gibt viel zu sehen. Lassen Sie es uns aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}}- und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und angrenzende Rahmen zu einem einzigen Rahmen zusammenzuführen, anstatt doppelte Rahmen zu erhalten. Zusätzlich wird das {{HTMLElement("caption")}} am `bottom` der Tabelle mit der {{CSSxRef("caption-side")}}-Eigenschaft platziert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Platz um ihren Inhalt herum zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, wie es bei den Zellen in der Kopfzeile zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopf der Tabelle (wie durch {{HTMLElement("thead")}} angegeben). Dann wird die untere Grenze des Kopfbereichs auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die durch einige der Zellen überspannt werden. Das bedeutet, dass es dort tatsächlich zwei Zeilen gibt; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Abgebrochen" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Pech" eines abgebrochenen Mitglieds darzustellen. Hier greifen wir in die letzte Zeile des Tabellenkopfes mit dem {{CSSxRef(":last-of-type")}}-Selektor ein und geben der ersten Kopfzelle in dieser Zeile (der "Beigetreten"-Kopf) eine grünen Farbton und der zweiten Kopfzelle (der "Abgebrochen"-Kopf) einen roten Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorgehoben werden sollte, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Namen der Mitglieder linksbündig zu setzen, und mit einer leicht unterschiedlichen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem abwechselnde Zeilenfarben verwendet werden – dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns etwas {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es gängige Praxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, werden wir das hier tun. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für die letzte {{HTMLElement("td")}} in jeder Körperteilzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird dem Fußbereich der Tabelle ein ähnliches Styling wie dem Kopfbereich zugewendet, um ihn ebenfalls hervorzuheben:

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

Ein häufiges Problem bei Tabellen im Web ist, dass sie auf kleinen Bildschirmen nicht gut funktionieren, wenn der Inhalt umfangreich ist und die Art und Weise, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht geändert werden kann, um einen Wrapper aufzuweisen.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen darzustellen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist, und es gibt nichts Bemerkenswertes daran. Der CSS-Teil ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Stile werden Sie bemerken, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verlieren die Tabelle und die Zellen einige ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` für das {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenköpfe auf der Seite zu halten, während Sie nach unten scrollen, haben wir {{cssxref("position")}} auf sticky für die {{HTMLElement("th")}}-Elemente gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da, wenn wir dies tun, der Kopf nicht korrekt vom Rest der Tabelle getrennt werden kann.

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
          >Flussinhalte</a
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalte akzeptiert</td>
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

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Kontrolle des Erscheinungsbildes von Zellrahmen, Linien und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zur Ausrichtung der Tabelle und zum Setzen von Abständen im Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts von Tabellenzellen
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
