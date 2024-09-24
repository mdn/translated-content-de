---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten, das heißt Informationen, die in einer zweidimensionalen Tabelle, bestehend aus Reihen und Spalten von Zellen, die Daten enthalten, dargestellt werden.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier aus Gründen der Referenz für die Aktualisierung von bestehendem Code und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres übergeordneten Elements an. Die möglichen {{Glossary("enumerated")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem '`#`' vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert als ein nicht-negativer ganzzahliger Wert (in Pixel) die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, wird das [`frame`](#frame) Attribut auf leer gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Stattdessen sollte die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente angewendet werden.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Stattdessen sollte die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element gesetzt werden. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden muss. Die möglichen {{Glossary("enumerated")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Ränder) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien), und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen Alternativtext, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Bestimmt die Breite der Tabelle. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut einschließt, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertfreie Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn er als Prozentwert gesetzt ist, wird die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

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

Das `<table>`-Element erstellt einen Tabellenformatierungskontext. Elemente innerhalb des `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen gemäße den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle im Quellcode von oben nach unten. Jede Zeilenbox nimmt eine Zeile von Zellen ein.
2. Eine Zeilengruppebox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden nebeneinander im Quellcode platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributs werden die Spalten in linker oder rechter Richtung ausgelegt. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellenbox kann sich über mehrere Reihen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um in die verfügbaren Reihen und Spalten zu passen.

Tabellenzellen haben Polsterung. Boxen, die eine Tabelle bilden, haben keinen Rand.

### Tabellenschichten und Transparenz

Zu Styling-Zwecken können die Tabellenelemente als auf sechs überlagerte Schichten gelegt verstanden werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf einem Element in einer Schicht gesetzt wird, ist nur sichtbar, wenn die darüber liegenden Schichten transparent sind. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz eingenommen hätte.

## Barrierefreiheit

### Überschriften

Durch das Bereitstellen eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, wird den Menschen geholfen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollten.

Dies hilft Menschen, die mit assistiver Technologie wie einem Screenreader navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Bedenken.

- [MDN Eine Überschrift zu Ihrer Tabelle mit \<caption\> hinzufügen](/de/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Gruppierung von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut bei Headerzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Bereich abgeleitet wird. Einige assistierende Technologien können jedoch nicht die richtigen Ableitungen treffen, daher kann die Angabe des Headerbereichs die Benutzererfahrung verbessern. Bei komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) spezifiziert werden, um notwendige Informationen über die mit einem Header verbundenen Zellen bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Das Verwenden des scope-Attributs zum Zuordnen von Headerzellen und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistierende Technologien wie Screenreader können Schwierigkeiten beim Interpretieren von Tabellen haben, die so komplex sind, dass Headerzellen nicht in einfach horizontaler oder vertikaler Weise zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Element/td#colspan)- und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribute angezeigt.

Idealerweise sollten Sie alternative Wege in Erwägung ziehen, um den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die sich nicht auf die Verwendung der [`colspan`](/de/docs/Web/HTML/Element/td#colspan)- und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribute verlassen müssen. Zusätzlich zur Unterstützung von Menschen, die assistierende Technologie verwenden, um den Inhalt der Tabelle zu verstehen, könnte dies auch Menschen mit kognitiven Bedenken helfen, die Schwierigkeiten haben könnten, die Assoziationen zu verstehen, die das Tabellenlayout beschreibt.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der [`id`](/de/docs/Web/HTML/Global_attributes#id)- und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um jede Tabellenzelle programmgesteuert mit dem oder den Header(n) ({{HTMLElement("th")}}-Elemente) zu assoziieren, mit dem die Zelle verbunden ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der id- und headers-Attribute zum Zuordnen von Datenzellen zu Headerzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele enthalten Tabellen mit zunehmend wachsender Komplexität. Für zusätzliche Beispiele, einschließlich eines detaillierten Tutorials, siehe die [HTML-Tabellen](/de/docs/Learn/HTML/Tables)-Reihe in der [Lernen der Webentwicklung](/de/docs/Learn)-Bereich, wo Sie lernen können, wie man die Table-Elemente und ihre Attribute verwendet, um Ihre Tabellendaten korrekt zu strukturieren. Ein [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)-Leitfaden bietet Informationen zum Styling von Tabellen, einschließlich gängiger, nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängige Standards abdeckt. Weitere und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Struktur von HTML-Tabellen kann der {{Glossary("markup", "Markup")}} schnell wachsen. Deshalb ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logisch entwickelte Struktur mit {{Glossary("semantics", "semantischem")}} Markup ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem, einschließlich Suchmaschinen und Nutzern assistiver Technologien, verstanden und genutzt werden können.

Das erste Beispiel ist einfach, die folgenden Beispiele werden zunehmend komplexer. Zuerst werden wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle entwickeln. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Zellenspan oder explizit definierte Zellbeziehungen. Nicht einmal eine Überschrift wird bereitgestellt. Während wir die Beispiele durchgehen, werden sie progressiv erweitert, um alle Funktionen zu enthalten, die eine komplexe Datentabelle haben sollte.

### Grundlegende Tabelle

Dieses Beispiel umfasst eine _sehr_ grundlegende Tabelle mit drei Reihen und zwei Spalten. Um die Standardbrowser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS hinzugefügt.

#### HTML

Die Tabellenreihen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenheadern und Datenzellen innerhalb dieser Elemente definiert. Die erste Reihe enthält die Headerzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Reihe befindet sich in seiner jeweiligen Spalte—das heißt, das erste Element einer Reihe befindet sich in der ersten Spalte und das zweite Element dieser Reihe befindet sich in der zweiten Spalte.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Alter</th>
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

Es wird keine benutzerdefinierte [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#author_stylesheets) auf diese Tabelle angewendet. Das Styling ergibt sich rein aus dem [Benutzeragent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Headerzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem der Inhalt erweitert wird und grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle besteht jetzt aus vier Reihen ({{HTMLElement("tr")}}-Elemente), mit jeweils vier Spalten. Die erste Reihe ist eine Reihe von Headerzellen (die erste Reihe enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Reihen enthalten eine Header-Spalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Reihe) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensortierungselemente verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppe, d.h., alle Reihen sind innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elementes umschlossen.

```html
<table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Mitglied seit</th>
    <th>Kontostand</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">3. Juni 2010</time></td>
    <td>0,00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">13. Januar 2011</time></td>
    <td>37,00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23. Juli 2012</time></td>
    <td>15,00</td>
  </tr>
</table>
```

#### CSS

Mit CSS bieten wir die grundlegende Gestaltung, um Linien um die Komponenten der Tabelle hinzuzufügen, um die Datenstruktur klarer zu machen. Das CSS fügt einen festen Rahmen um das `<table>` und um jede der Tabellenzellen, einschließlich der mit {{HTMLElement("th")}} und {{HTMLElement("td")}} spezifizierten Elementen, hinzu und grenzt jede Header- und Datenzelle ab.

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

### Spezifizierung von Tischzellenbeziehungen

Bevor wir zur Erweiterung der Tabelle mit fortgeschritteneren Methoden übergehen, ist es ratsam, die {{Glossary("accessibility", "Zugänglichkeit")}} zu verbessern, indem Beziehungen zwischen den Header- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf die entsprechenden `col` (Spalte) oder `row` (Reihe) gesetzt werden.

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">ID</th>
    <th scope="col">Mitglied seit</th>
    <th scope="col">Kontostand</th>
  </tr>
  <tr>
    <th scope="row">Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">3. Juni 2010</time></td>
    <td>0,00</td>
  </tr>
  <tr>
    <th scope="row">Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">13. Januar 2011</time></td>
    <td>37,00</td>
  </tr>
  <tr>
    <th scope="row">Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23. Juli 2012</time></td>
    <td>15,00</td>
  </tr>
</table>
```

Das CSS und das visuelle Ergebnis bleiben unverändert—die Anpassung bietet wertvolle Kontextinformationen für assistierende Technologien wie Screenreader, um zu identifizieren, mit welchen Zellen die Headers verbunden sind.

> [!NOTE]
> Wenn die Tabell

enstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und assistierenden Technologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Zugänglichkeit durch [Spezifizierung von Zellbeziehungen](#spezifizieren_von_tischzellenbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Reihe ({{HTMLElement("tr")}}-Element) nur Spaltenheaderzellen enthält und den Header für den Rest der Tabelleninhalte bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Reihe explizit als Kopfbereich der Tabelle zu spezifizieren. Darüber hinaus kann das, was der Browser automatisch erledigt, auch explizit definiert werden - der Körperbereich der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Umgeben der entsprechenden Reihen im {{HTMLElement("tbody")}}-Element gekennzeichnet. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">Mitglied seit</th>
      <th scope="col">Kontostand</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3. Juni 2010</time></td>
      <td>0,00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13. Januar 2011</time></td>
      <td>37,00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23. Juli 2012</time></td>
      <td>15,00</td>
    </tr>
  </tbody>
</table>
```

Noch einmal, das CSS und das visuelle Ergebnis sind unverändert—das Spezifizieren solcher Tabellensektionsgruppen bietet wertvolle Kontextinformationen für assistierende Technologien, einschließlich Screenreader und Suchmaschinen, sowie für das Stylen im CSS, was in einem späteren Beispiel gezeigt wird.

### Spalten- und Reihenüberschreitung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfbereich einführen.

#### HTML

Aufbauend auf der bisherigen Tabelle wird eine neue Spalte für ein "Mitgliedschaftsende-Datum" in jeder Körperreihe mit dem {{HTMLElement("td")}}-Element hinzugefügt. Außerdem wird eine zusätzliche Reihe ({{HTMLElement("tr")}}-Element) im Kopfbereich ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdaten"-Überschrift als Überschrift für die Spalten "Beigetreten" und "Gekündigt" einzuführen.

Die Erstellung der zweiten Header-Reihe beinhaltet das Hinzufügen der [`colspan`](/de/docs/Web/HTML/Element/th#colspan)- und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribute zu den {{HTMLElement("th")}}-Elementen, um die Headerzellen den richtigen Spalten und Reihen zuzuordnen.

```html
<table>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Mitgliedschaftsdaten</th>
      <th scope="col" rowspan="2">Kontostand</th>
    </tr>
    <tr>
      <th scope="col">Beigetreten</th>
      <th scope="col">Gekündigt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3. Juni 2010</time></td>
      <td>nicht vorhanden</td>
      <td>0,00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13. Januar 2011</time></td>
      <td><time datetime="2017-04-08">8. April 2017</time></td>
      <td>37,00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23. Juli 2012</time></td>
      <td>nicht vorhanden</td>
      <td>15,00</td>
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

Der Kopfbereich hat jetzt zwei Reihen, eine mit den Überschriften ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschaftsdaten" und "Kontostand" und eine "Mitgliedschaftsdaten"-Überschrift mit zwei Unterüberschriften, die in einer zweiten Reihe stehen: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die erste Zeile

mit den Überschriften "Name", "ID" und "Kontostand" erstreckt sich über beide Tabellenkopfzeilen mithilfe des [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attributs, wodurch sie jeweils zwei Zeilen hoch sind.

- Die Kopfzelle der ersten Zeile "Mitgliedschaftsdaten" erstreckt sich über zwei Spalten mithilfe des [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attributs, wodurch sie zwei Spalten breit wird.
- Die zweite Zeile enthält nur die beiden Headerzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt sind, die sich über zwei Reihen erstrecken. Die beiden Headerzellen sind korrekt unterhalb der Überschrift "Mitgliedschaftsdaten" positioniert.

### Tabellenüberschrift und Spaltensumme

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung des Tabelleninhalts bereitzustellen, damit Benutzer schnell bestimmen können, wie relevant die Tabelle ist. Zusätzlich wird die "Kontostand"-Spalte zusammengefasst, indem die Summe der Kontostände der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird erstellt, indem eine Tabellenüberschrift ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt wird. Die Überschrift bietet die {{glossary("accessible description")}} für die Tabelle.

Zuletzt wird ein Tabellenfußbereich ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Reihe, die die "Kontostand"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

```html
<table>
  <caption>
    Status der Clubmitglieder 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Mitgliedschaftsdaten</th>
      <th scope="col" rowspan="2">Kontostand</th>
    </tr>
    <tr>
      <th scope="col">Beigetreten</th>
      <th scope="col">Gekündigt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3. Juni 2010</time></td>
      <td>nicht vorhanden</td>
      <td>0,00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13. Januar 2011</time></td>
      <td><time datetime="2017-04-08">8. April 2017</time></td>
      <td>37,00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23. Juli 2012</time></td>
      <td>nicht vorhanden</td>
      <td>15,00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Gesamtkontostand</th>
      <td>52,00</td>
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

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} auf die Kopf- und Fußreihen hinzuzufügen. Dieses Mal bleibt das HTML unverändert, also lassen Sie uns gleich in das CSS eintauchen.

```html hidden
<table>
  <caption>
    Status der Clubmitglieder 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Mitgliedschaftsdaten</th>
      <th scope="col" rowspan="2">Kontostand</th>
    </tr>
    <tr>
      <th scope="col">Beigetreten</th>
      <th scope="col">Gekündigt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3. Juni 2010</time></td>
      <td>nicht vorhanden</td>
      <td>0,00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13. Januar 2011</time></td>
      <td><time datetime="2017-04-08">8. April 2017</time></td>
      <td>37,00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23. Juli 2012</time></td>
      <td>nicht vorhanden</td>
      <td>15,00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Gesamtkontostand</th>
      <td>52,00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Während eine {{cssxref("font")}}-Eigenschaft hier auf das `<table>`-Element gesetzt wird, um eine optisch ansprechendere Schriftart (oder eine abstoßende serifenlose Schriftart, je nach persönlicher Meinung) festzulegen, ist der interessante Part der zweite Style, bei dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb des {{HTMLElement("thead")}} und des {{HTMLElement("tfoot")}} befinden, gestylt werden, indem eine helle blaue {{cssxref("background-color")}} hinzugefügt wird. Auf diese Weise können Sie schnell einer ganzen Abschnittsgruppe gleichzeitig einen Hintergrundfarbton zuweisen.

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

### Fortgeschrittenes Styling der Tabelle

Nun geben wir Vollgas und stylen sowohl die Zeilen im Kopf- als auch im Körperbereich, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben, abhängig von ihrer Position in einer Zeile, und so weiter. Werfen wir zuerst einen Blick auf das Ergebnis.

#### Ergebnis

So sieht die fertige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderungen am HTML. Sie sehen, was ordnungsgemäße Vorbereitung der HTML-Struktur ausmachen kann?

```html hidden
<table>
  <caption>
    Status der Clubmitglieder 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Mitgliedschaftsdaten</th>
      <th scope="col" rowspan="2">Kontostand</th>
    </tr>
    <tr>
      <th scope="col">Beigetreten</th>
      <th scope="col">Gekündigt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3. Juni 2010</time></td>
      <td>nicht vorhanden</td>
      <td>0,00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">13. Januar 2011</time></td>
      <td><time datetime="2017-04-08">8. April 2017</time></td>
      <td>37,00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23. Juli 2012</time></td>
      <td>nicht vorhanden</td>
      <td>15,00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Gesamtkontostand</th>
      <td>52,00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Das CSS ist diesmal weit umfangreicher. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie uns es aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und Berührungen kollidierender Ränder zu einer einzigen Grenze zu reduzieren, anstatt doppelte Ränder zu erhalten. Zusätzlich wird das {{HTMLElement("caption")}} am `bottom` der Tabelle mit der {{CSSxRef("caption-side")}}-Eigenschaft platziert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Headerzellen auf den `bottom` der Zelle aus, was bei den Zellen im Kopfbereich, die sich über zwei Zeilen erstrecken, zu sehen ist:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopfbereich der Tabelle (wie angegeben durch {{HTMLElement("thead")}}). Dann wird der untere Rahmen des Kopfs auf eine Linienbreite von zwei Pixeln gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopfbereich anzuwenden. Warum? Weil der Kopfbereich aus zwei Reihen besteht, die von einigen Zellen überspannt werden. Das bedeutet, dass dort tatsächlich zwei Reihen sind; das Anwenden des Stils auf die erste Reihe würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grünen bzw. roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Bedauerliche" einer gekündigten Mitgliedschaft darzustellen. Hier tauchen wir in die letzte Reihe des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selektor und geben der ersten Kopfzelle darin (die "Beigetreten"-Überschrift) einen grünlichen Farbton und der zweiten Kopfzelle darin (die "Gekündigt"-Überschrift) eine rötliche Färbung:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte hervorstechen soll, wird hier ebenfalls ein individuelles Styling hinzugefügt. Diese CSS-Regel stylt die erste Headerzelle in jeder Reihe des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen links auszurichten, und mit einem etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch wechselnde Zeilenfarben zu verbessern—dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns ein bisschen {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es eine Standardpraxis ist, Währungswerte in Tabellen rechts auszurichten, machen wir das hier ebenfalls. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für die letzte {{HTMLElement("td")}}-Zelle in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Zuletzt wird ein ähnliches Styling wie im Kopfbereich auf den Fußbereich der Tabelle angewendet, um ihn ebenfalls hervorzuheben:

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

### Anzeige großer Tabellen in kleinen Räumen

Ein häufiges Problem bei Tabellen im Web ist, dass sie nicht nativ gut auf kleinen Bildschirmen funktionieren, wenn die Inhaltsmenge groß ist, und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht modifiziert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, um Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und es nichts Bemerkenswertes daran gibt. Das CSS ist in diesem Beispiel nützlicher zur Inspektion.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> entspricht:
      <th>2<sup>3</sup> entspricht:
      <th>3<sup>3</sup> entspricht:
      <th>4<sup>3</sup> entspricht:
      <th>5<sup>3</sup> entspricht:
      <th>6<sup>3</sup> entspricht:
      <th>7<sup>3</sup> entspricht:
  <tbody>
    <tr>
      <td>Reihe 1: 1
      <td>Reihe 1: 8
      <td>Reihe 1: 27
      <td>Reihe 1: 64
      <td>Reihe 1: 125
      <td>Reihe 1: 216
      <td>Reihe 1: 343
    <tr>
      <td>Reihe 2: 1
      <td>Reihe 2: 8
      <td>Reihe 2: 27
      <td>Reihe 2: 64
      <td>Reihe 2: 125
      <td>Reihe 2: 216
      <td>Reihe 2: 343
    <tr>
      <td>Reihe 3: 1
      <td>Reihe 3: 8
      <td>Reihe 3: 27
      <td>Reihe 3: 64
      <td>Reihe 3: 125
      <td>Reihe 3: 216
      <td>Reihe 3: 343
    <tr>
      <td>Reihe 4: 1
      <td>Reihe 4: 8
      <td>Reihe 4: 27
      <td>Reihe 4: 64
      <td>Reihe 4: 125
      <td>Reihe 4: 216
      <td>Reihe 4: 343
    <tr>
      <td>Reihe 5: 1
      <td>Reihe 5: 8
      <td>Reihe 5: 27
      <td>Reihe 5: 64
      <td>Reihe 5: 125
      <td>Reihe 5: 216
      <td>Reihe 5: 343
    <tr>
      <td>Reihe 6: 1
      <td>Reihe 6: 8
      <td>Reihe 6: 27
      <td>Reihe 6: 64
      <td>Reihe 6: 125
      <td>Reihe 6: 216
      <td>Reihe 6: 343
    <tr>
      <td>Reihe 7: 1
      <td>Reihe 7: 8
      <td>Reihe 7: 27
      <td>Reihe 7: 64
      <td>Reihe 7: 125
      <td>Reihe 7: 216
      <td>Reihe 7: 343
    <tr>
      <td>Reihe 8: 1
      <td>Reihe 8: 8
      <td>Reihe 8: 27
      <td>Reihe 8: 64
      <td>Reihe 8: 125
      <td>Reihe 8: 216
      <td>Reihe 8: 343
    <tr>
      <td>Reihe 9: 1
      <td>Reihe 9: 8
      <td>Reihe 9: 27
      <td>Reihe 9: 64
      <td>Reihe 9: 125
      <td>Reihe 9: 216
      <td>Reihe 9: 343
    <tr>
      <td>Reihe 10: 1
      <td>Reihe 10: 8
      <td>Reihe 10: 27
      <td>Reihe 10: 64
      <td>Reihe 10: 125
      <td>Reihe 10: 216
      <td>Reihe 10: 343
    <tr>
      <td>Reihe 11: 1
      <td>Reihe 11: 8
      <td>Reihe 11: 27
      <td>Reihe 11: 64
      <td>Reihe 11: 125
      <td>Reihe 11: 216
      <td>Reihe 11: 343
    <tr>
      <td>Reihe 12: 1
      <td>Reihe 12: 8
      <td>Reihe 12: 27
      <td>Reihe 12: 64
      <td>Reihe 12: 125
      <td>Reihe 12: 216
      <td>Reihe 12: 343
    <tr>
      <td>Reihe 13: 1
      <td>Reihe 13: 8
      <td>Reihe 13: 27
      <td>Reihe 13: 64
      <td>Reihe 13: 125
      <td>Reihe 13: 216
      <td>Reihe 13: 343
    <tr>
      <td>Reihe 14: 1
      <td>Reihe 14: 8
      <td>Reihe 14: 27
      <td>Reihe 14: 64
      <td>Reihe 14: 125
      <td>Reihe 14: 216
      <td>Reihe 14: 343
    <tr>
      <td>Reihe 15: 1
      <td>Reihe 15: 8
      <td>Reihe 15: 27
      <td>Reihe 15: 64
      <td>Reihe 15: 125
      <td>Reihe 15: 216
      <td>Reihe 15: 343
    <tr>
      <td>Reihe 16: 1
      <td>Reihe 16: 8
      <td>Reihe 16: 27
      <td>Reihe 16: 64
      <td>Reihe 16: 125
      <td>Reihe 16: 216
      <td>Reihe 16: 343
    <tr>
      <td>Reihe 17: 1
      <td>Reihe 17: 8
      <td>Reihe 17: 27
      <td>Reihe 17: 64
      <td>Reihe 17: 125
      <td>Reihe 17: 216
      <td>Reihe 17: 343
    <tr>
      <td>Reihe 18: 1
      <td>Reihe 18: 8
      <td>Reihe 18: 27
      <td>Reihe 18: 64
      <td>Reihe 18: 125
      <td>Reihe 18: 216
      <td>Reihe 18: 343
    <tr>
      <td>Reihe 19: 1
      <td>Reihe 19: 8
      <td>Reihe 19: 27
      <td>Reihe 19: 64
      <td>Reihe 19: 125
      <td>Reihe 19: 216
      <td>Reihe 19: 343
    <tr>
      <td>Reihe 20: 1
      <td>Reihe 20: 8
      <td>Reihe 20: 27
      <td>Reihe 20: 64
      <td>Reihe 20: 125
      <td>Reihe 20: 216
      <td>Reihe 20: 343
</table>
```

#### CSS

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermö

glicht, verliert die Tabelle etwas von ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem abzumildern, haben wir das {{cssxref("white-space")}} auf `nowrap` am {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um lange Titel zu vermeiden, die Spalten dazu zwingen, breiter zu sein, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenüberschriften auf der Seite zu halten, während nach unten gescrollt wird, haben wir die {{cssxref("position")}}-Eigenschaft auf sticky für die {{HTMLElement("th")}}-Elemente gesetzt. Beachten Sie, dass wir **nicht** die {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da, wenn wir dies tun, der Header nicht korrekt von dem Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das gesetzte {{cssxref("overflow")}} auf `auto` der wichtige Teil hier, da es die Tabelle scrollbar macht.

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
          >Flussinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eine der folgenden:
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
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
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
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Aussehen von Zellenrändern, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Abstand des Zellinhalts festzulegen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Zellinhalt in Tabellen horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Zellinhalt in Tabellen vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
