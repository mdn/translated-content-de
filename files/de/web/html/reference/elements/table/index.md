---
title: "<table>: Das Table-Element"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: c403dd32f627cd972048db05db04ef76f3ab84fe
---

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten — das heißt, Informationen, die in einer zweidimensionalen Tabelle mit Zeilen und Spalten von Zellen mit Daten dargestellt werden.

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

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um bei der Aktualisierung vorhandenen Codes zu helfen und aus historischem Interesse.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farb-Stichwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}
  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negativen Integerwert (in Pixeln). Wenn `0` gesetzt ist, wird das [`frame`](#frame)-Attribut auf `void` gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}
  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("padding")}} für die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}}.

- `cellspacing` {{deprecated_inline}}
  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Setzen Sie stattdessen die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}
  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}
  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}
  - : Definiert einen Alternativtext, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}} Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}
  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Während keine HTML-Spezifikation `height` als Attribut für `<table>` enthält, unterstützen einige Browser eine nicht standardmäßige Interpretation von `height`. Der wertlose Wert legt eine absolute Mindesthöhe in Pixeln fest. Wenn als Prozentwert festgelegt, wird die Mindesthöhe der Tabelle relativ zur Höhe des Elternelements sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

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

Die `<table>`-Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox nimmt eine Zeile von Zellen ein.
2. Eine Zeilengruppenbox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden nebeneinander in der Reihenfolge des Quellcodes platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten in Links-nach-Rechts- oder Rechts-nach-Links-Richtung ausgelegt. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten passen Zellen an die verfügbare Anzahl von Zeilen und Spalten an.

Tabellenzellen besitzen Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tafelschichten und Transparenz

Zur Stilzwecken können die Tabellenelemente als auf sechs überlagerte Schichten gelegt betrachtet werden:

![Tabelelementschichten](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Schicht gesetzt wird, ist nur sichtbar, wenn die Schichten darüber einen transparenten Hintergrund haben. Eine fehlende Zelle wird gerendert, als ob eine anonyme Tabellenzellenbox diese Stelle einnahm.

## Barrierefreiheit

### Bildunterschriften

Durch das Hinzufügen eines {{HTMLElement("caption")}}-Elements, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft es den Personen zu entscheiden, ob sie den Rest des Tabelleninhalts prüfen oder überspringen sollen.

Dies hilft Personen, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren, Personen mit Sehschwäche und Personen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Beschriftung &amp; Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spalten-Scope

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}} Elemente) ist in einfachen Kontexten redundant, da der Geltungsbereich davon abgeleitet wird. Allerdings können einige Hilfstechnologien Probleme bei korrekten Rückschlüssen haben, daher kann die Angabe des Kopfbereichs die Benutzererfahrungen verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) angegeben werden, um erforderliche Informationen über die mit einer Kopfzeile verbundenen Zellen bereitzustellen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope Attributs, um Kopfzellen und Datenzellen in Datentabellen zuzuordnen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Screenreader können Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Kopfzeilen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Wege finden, um den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung kleinerer, zusammenhängender Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) rely. Diese Herangehensweise hilft nicht nur den Benutzern unterstützender Technologien dabei, den Inhalt der Tabelle zu verstehen, sondern nützt auch Menschen mit kognitiven Bedenken, die Schwierigkeiten haben könnten, die Darstellungen des Tabellenlayouts zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination aus den Attributen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um jede Tabellenzelle programmatisch mit der/dem Kopfzelle(n) ({{HTMLElement("th")}} Elemente) zu verknüpfen, mit denen die Zelle verbunden ist.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Kopfzeilen • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der id und headers Attribute, um Datenzellen mit Kopfzellen in Datentabellen zu verknüpfen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen von zunehmender Komplexität. Siehe auch unseren Anfängers-[Leitfaden für die Gestaltung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zur Gestaltung von Tabellen, einschließlich allgemeiner nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechend verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Struktur von HTML-Tabellen kann der {{Glossary("markup", "Markup")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wurde, ist nicht nur einfacher zu stylen, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem verstanden und navigiert werden können, einschließlich Suchmaschinen und Nutzern von unterstützenden Technologien.

Das erste Beispiel ist grundlegend, mit nachfolgenden Beispielen, die an Komplexität zunehmen. Zunächst entwickeln wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und umfassen weder eine Zellenspannung noch explizit definierte Zellbeziehungen. Nicht einmal eine Beschriftung wird bereitgestellt. Während wir die Beispiele durchgehen, werden sie schrittweise um alle Funktionen erweitert, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel umfasst eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tischstile zu demonstrieren, wurde in diesem Beispiel kein CSS integriert.

#### HTML

Die Tabellenzeilen sind mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten sind mit Tabellenkopf- und Datenzellen darin definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}} Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}} Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [benutzerdefiniertes Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling ergibt sich rein aus dem [Benutzer-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweitertes Tisch mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}} Elemente), mit jeweils vier Spalten. Die erste Zeile ist eine Zeile mit Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}} Elemente). Nachfolgende Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}} Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}} Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Zeilen sind im Körper der Tabelle eines impliziten {{HTMLElement("tbody")}} Elements eingeschlossen.

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

Mit CSS stellen wir das grundlegende Styling bereit, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen durchgezogenen Rand um den `<table>` und um jede der Zellen der Tabelle hinzu, einschließlich derjenigen, die sowohl mit {{HTMLElement("th")}} als auch mit {{HTMLElement("td")}}-Elementen spezifiziert sind, wobei jede Kopf- und Datenzelle abgegrenzt wird.

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

### Festlegen der Tabellenzellbeziehungen

Bevor wir zur Erweiterung der Tabelle auf fortgeschrittenere Weise übergehen, empfiehlt es sich, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf den entsprechenden `col` (Spalte) oder `row` Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert — die Anpassung liefert wertvolle kontextuelle Informationen für unterstützende Technologien wie Screenreader, um zu helfen, welche Zellen mit welchen Kopfzellen verbunden sind, zu identifizieren.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und helfen, den Beziehungen zwischen Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Definieren von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Spezifizierung von Zellbeziehungen](#festlegen_der_tabellenzellbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch die Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Header für den Rest der Tabelleninhalte bereitstellt, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfbereich der Tabelle anzugeben. Was zudem automatisch vom Browser erledigt wird, kann ebenfalls explizit definiert werden — der Hauptkörper der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Der explizite Gebrauch des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Erneut sind das CSS und das visuelle Ergebnis unverändert – das Definieren solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreadern und Suchmaschinen, sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und einen Kopfbereich mit mehreren Zeilen einführen.

#### HTML

Ausgehend von der bisher erstellten Tabelle wird in jeder Körperreihe mit dem {{HTMLElement("td")}}-Element eine neue Spalte für ein "Mitgliedschafts-Enddatum" hinzugefügt. Zusätzlich wird im Kopfbereich ({{HTMLElement("thead")}}-Element) eine weitere Zeile ({{HTMLElement("tr")}}-Element) eingefügt, um eine "Mitgliedschafts-Daten"-Überschrift als Überschrift für die "Joined" und "Canceled" Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile erfordert das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}} Elementen) "Name", "ID", "Mitgliedschafts-Daten", und "Saldo" und eine "Mitgliedschafts-Daten"-Kopfzeile mit zwei Unterüberschriften in einer zweiten Zeile: "Beigetreten" und "Storniert". Dies wird erreicht durch:

- Die ersten Zeilen der Kopfzeilen, "Name", "ID" und "Saldo", erstrecken sich über beide Tabellenkopfzeilen durch die Verwendung des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan)-Attributs, wodurch sie jeweils zwei Zeilen hoch sind.
- Die erste Zeile des "Mitgliedschafts-Daten"-Kopfzelle dehnt sich mithilfe des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs über zwei Spalten aus und macht sie zwei Spalten breit.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Storniert", da die anderen drei Spalten mit den Zellen in der ersten Zeile, die sich über zwei Zeilen erstrecken, zusammengelegt werden. Die beiden Kopfzellen sind korrekt unter dem "Mitgliedschafts-Daten"-Kopf positioniert.

### Tabellenunterschrift und Spaltenzusammenfassung

Es ist eine übliche und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, damit Benutzer schnell die Relevanz der Tabelle feststellen können. Darüber hinaus wird die "Saldo"-Spalte durch die Anzeige der Summe der Salden der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellenunterschrift ([caption](#bildunterschriften) ({{HTMLElement("caption")}}-Element)) als erstes Kindelement von `<table>` verwendet wird. Die Unterschrift liefert den {{Glossary("accessible_name", "zugänglichen Namen")}} oder die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird unter dem Körper ein Tabellenfußabschnitt ({{HTMLElement("tfoot")}}-Element) hinzugefügt, mit einer Zeile, die die "Saldo"-Spalte durch die Anzeige einer Summe zusammenfasst. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegende Tabellengestaltung

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Die HTML-Elemente bleiben diesmal unverändert, daher gehen wir direkt zum CSS über.

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

Obwohl hier eine {{cssxref("font")}} Eigenschaft auf das `<table>`-Element angewendet wird, um eine optisch ansprechendere Schriftart zu verwenden (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung), ist die interessante Stelle der zweite Stil, wo die {{HTMLElement("tr")}} Elemente innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} mit einem hellblauen {{cssxref("background-color")}} hinzugefügt werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in spezifischen Abschnitten gleichzeitig anzuwenden.

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

### Fortgeschrittene Tabellengestaltung

Jetzt legen wir los, mit Stilen auf Zeilen sowohl im Kopf- als auch im Körperbereich, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter. Lassen Sie uns diesmal zuerst einen Blick auf das Ergebnis werfen.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderung am HTML. Sehen Sie, was eine ordentliche Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel komplexer. Es ist nicht kompliziert, aber es passiert eine Menge. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und berührende Rahmen zu einem einzigen Rahmen zu kollabieren, anstatt mit doppelten Rahmen zu enden. Zudem wird die {{HTMLElement("caption")}} am `bottom` der Tabelle mit der {{CSSxRef("caption-side")}} Eigenschaft platziert:

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

Als nächstes wird die {{CSSxRef("padding")}} Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}} Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was auf den Zellen im Kopf sichtbar ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf (wie in {{HTMLElement("thead")}} angegeben). Dann wird die untere Grenze des Kopfes auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen sind; wenn wir den Stil auf die erste Zeile anwenden würden, erhielten wir nicht das erwartete Ergebnis:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Storniert" mit grünen und roten Tönen stylen, um das "gute" eines neuen Mitglieds und den "Schock" einer stornierten Mitgliedschaft zu repräsentieren. Hier greifen wir in die letzte Zeile des Tabellenkopfbereichs mit dem {{CSSxRef(":last-of-type")}} Selektor ein und geben der ersten Kopfzelle darin (der "Beigetreten"-Kopfzeile) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Storniert"-Kopfzeile) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorstechen sollte, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}} Eigenschaft, um die Mitgliedernamen links zu rechtfertigen, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem man abwechselnde Zeilenfarben verwendet – dies wird manchmal als "Zebrastreifen" bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} auf jede gerade Zeile anwenden:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es üblich ist, Währungswerte in Tabellen rechtsbündig ausgerichtet anzuzeigen, lassen Sie uns das hier tun. Dies richtet einfach die {{CSSxRef("text-align")}} Eigenschaft für die letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right` aus:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein ähnliches Styling wie im Kopfbereich auch auf den Fußbereich der Tabelle angewendet, damit er ebenfalls heraussticht:

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

Ein häufiges Problem mit Tabellen im Internet ist, dass sie nativ nicht sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge an Inhalt groß ist, und die Art, wie sie scrollbar gemacht werden, nicht offensichtlich ist, insbesondere wenn das Markup aus einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu enthalten.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Bemerkenswertes daran ist. Das CSS ist in diesem Beispiel nützlicher zu betrachten.

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

Wenn Sie sich diese Stile ansehen, werden Sie bemerken, dass das display-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies Scrollen ermöglicht, verliert die Tabelle damit etwas von ihrer Integrität, und Tabellenzellen versuchen, möglichst klein zu werden. Um dieses Problem zu mildern, haben wir auf dem {{HTMLElement("tbody")}} die Eigenschaft {{cssxref("white-space")}} auf `nowrap` gesetzt. Allerdings tun wir dies nicht für das {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenköpfe auf der Seite zu halten, während man nach unten scrollt, haben wir die Eigenschaft {{cssxref("position")}} auf sticky auf den {{HTMLElement("th")}}-Elementen gesetzt. Beachten Sie, dass wir {{cssxref("border-collapse")}} **nicht** auf `collapse` gesetzt haben, da sonst der Kopf nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das hier gesetzte {{cssxref("overflow")}} auf `auto` der wichtige Teil, da dies die Tabelle scrollbar macht.

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
          >Flow-Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flow-Inhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aussehens von Zellgrenzen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und Festlegen von Abständen für Zellinhalte
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung von Tabelleninhalten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung von Tabelleninhalten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
