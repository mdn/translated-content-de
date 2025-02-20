---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten, das heißt Informationen, die in einer zweidimensionalen Tabelle dargestellt werden, bestehend aus Zeilen und Spalten von Zellen, die Daten enthalten.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden zu Referenzzwecken für die Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb des Elternelements an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert die Größe des Rahmens um die Tabelle als nicht-negative Ganzzahl (in Pixel). Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist überholt: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist überholt: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo in der Tabelle Regeln (Ränder) angezeigt werden. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als `<table>`-Attribut enthält, unterstützen einige Browser eine nicht standardisierte Interpretation von `height`. Der einheitenlose Wert legt eine minimale absolute Höhe in Pixeln fest. Wenn als Prozentwert festgelegt, wird die minimale Tabellenhöhe relativ zur Höhe des Elternelements sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout des Tabellensatzes

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

Die `<table>`-Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Boxen. Jede Box belegt eine bestimmte Anzahl von Tabellenzellen gemäß den folgenden Regeln:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox belegt eine Tabellenreihe.
2. Eine Zeilengruppenbox besetzt eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden in der Reihenfolge des Quellcodes nebeneinander platziert. Je nach Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributs werden die Spalten von links nach rechts oder von rechts nach links angelegt. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppenbox besetzt eine oder mehrere Spaltenboxen.
5. Eine Zellbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenebenen und Transparenz

Für Stylingzwecke können die Tabellenelemente als auf sechs übereinandergestapelten Ebenen gedacht werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wird, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz besetzen würde.

## Barrierefreiheit

### Bildunterschriften

Durch das Bereitstellen eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, hilft es den Benutzern zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Menschen, die mit Unterstützungstechnologien wie einem Screenreader navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen- und Spaltenbereich

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Bereich abgeleitet wird. Einige unterstützende Technologien können jedoch möglicherweise keine korrekten Schlussfolgerungen ziehen. Daher kann das Angeben des Kopfbereichs die Benutzererfahrungen verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die mit einem Kopf verbundenen Zellen bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwendung des scope-Attributs zur Zuordnung von Kopfzellen und Datentabellenzellen in Datentabellen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Unterstützende Technologien wie Screenreader können Schwierigkeiten haben, Tabellen zu parsen, die so komplex sind, dass Kopfzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribute angezeigt.

Idealerweise sollten alternative Wege dargestellt werden, den Inhalt der Tabelle zu präsentieren, einschließlich dessen Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribute angewiesen sind. Neben der Unterstützung von Personen, die Unterstützungstechnologien verwenden, um den Inhalt der Tabelle zu verstehen, kann dies auch Personen mit kognitiven Bedenken zugutekommen, die möglicherweise Schwierigkeiten haben, die im Tabellenlayout beschriebenen Assoziationen zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um jedes Tabellenzell programmatisch den Kopfzellen ({{HTMLElement("th")}}-Elemente), mit denen die Zelle verbunden ist, zuzuordnen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwendung der id und headers-Attribute zur Zuordnung von Datenzellen mit Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele beinhalten Tabellen von zunehmend wachsender Komplexität. Siehe auch unseren Anfänger-[Stil-Guide für Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Styling-Informationen zu Tabellen mit nützlichen Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und häufige Standards abdeckt. Weitere und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Strukturierung von HTML-Tabellen kann der {{Glossary("markup", "Code")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Aussehen der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wurde, ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem, einschließlich Suchmaschinen und Nutzern von unterstützenden Technologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, während folgende Beispiele an Komplexität zunehmen. Zuerst entwickeln wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellenabschnitte wie fest definierte Kopf-, Körper- oder Fußzeilen und beinhalten keine Zellüberspannung oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Bildunterschrift bereitgestellt. Während wir die Beispiele durchgehen, werden sie schrittweise erweitert, um alle Funktionen einer komplexen Datentabelle einzuschließen.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standardstile der Browser-Tabelle zu demonstrieren, wurde in diesem Beispiel kein CSS eingeschlossen.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopfzellen und Datenzellen innerhalb von ihnen definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte - das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte und das zweite Element dieser Zeile in der zweiten Spalte.

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

Es gibt keine benutzerdefinierten [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheets](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), die auf diese Tabelle angewendet werden. Das Styling resultiert rein aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [Basis-Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen), mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Folgende Zeilen beinhalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als das erste Kind jedes Zeilen-Elements) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensegmentierungselemente verwendet werden, definiert der Browser automatisch die Struktur der Inhaltsgruppe, d.h. alle Zeilen sind innerhalb des Tabellenkörpers eines impliziten {{HTMLElement("tbody")}}-Elements umschlossen.

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

Mit CSS stellen wir das grundlegende Styling bereit, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur deutlicher zu machen. Das CSS fügt einen soliden Rand um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die sowohl {{HTMLElement("th")}} als auch {{HTMLElement("td")}}-Elemente spezifizieren, wodurch jeder Kopf- und Datentelle abgegrenzt wird.

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

### Spezifizieren von Tabellenzellenbeziehungen

Bevor wir weitermachen, um die Tabelle auf fortgeschrittenere Weise zu erweitern, empfiehlt es sich, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf den entsprechenden `col` (Spalte) oder `row` (Zeile) Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis sind unverändert – die Anpassung liefert nützliche kontextuelle Informationen für unterstützende Technologien wie Screenreader, um zu identifizieren, mit welchen Zellen die Überschriften verbunden sind.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und helfen, assistive Technologien dabei zu unterstützen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [`Spezifizierung von Zellenbeziehungen`](#spezifizieren_von_tabellenzellenbeziehungen), können die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Kopfspaltenzellen enthält und die Überschrift für den Rest des Tabelleninhalts darstellt, kann sie im {{HTMLElement("thead")}}-Element umschlossen werden, um diese Zeile explizit als Kopfsektion der Tabelle anzugeben. Zudem kann das, was automatisch vom Browser erledigt wird, auch explizit definiert werden - die Körpersektion der Tabelle, die die Hauptdaten der Tabelle enthält, wird definiert, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element umschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Ein weiteres Mal sind das CSS und das visuelle Ergebnis unverändert - das Angeben solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für unterstützende Technologien, einschließlich Screenreader und Suchmaschinen, sowie für das Styling in CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenüberspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird eine neue Spalte für ein „Mitgliedschafts-Enddatum“ in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird zudem innerhalb der Kopfsektion ({{HTMLElement("thead")}}-Element) eingefügt, um eine „Mitgliedschaftsdaten“-Überschrift als Überschrift für die „Beigetreten“- und „Gekündigt“-Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile umfasst das Hinzufügen der [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribute zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Die Kopfsektion hat jetzt zwei Zeilen, eine mit den Überschriften ({{HTMLElement("th")}}-Elementen) „Name“, „ID“, „Mitgliedschaftsdaten“ und „Guthaben“ und eine „Mitgliedschaftsdaten“-Überschrift mit zwei Unterüberschriften, die in einer zweiten Zeile sind: „Beigetreten“ und „Gekündigt“. Dies wird erreicht durch:

- Die erste Zeile der „Name“, „ID“ und „Guthaben“-Kopfzellen erstreckt sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribut verwendet wird, wodurch sie jeweils zwei Zeilen hoch sind.
- Die Kopfzelle der ersten Zeile „Mitgliedschaftsdaten“ spannt sich über zwei Spalten mithilfe des [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attributs, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die beiden Kopfzellen „Beigetreten“ und „Gekündigt“, da die anderen drei Spalten mit den Zellen in der ersten Zeile verschmolzen sind, die sich über zwei Zeilen erstrecken. Die beiden Kopfzellen sind korrekt unter der „Mitgliedschaftsdaten“-Überschrift positioniert.

### Tabellenüberschrift und Spaltensumme

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung des Inhalts der Tabelle bereitzustellen, sodass Benutzer schnell die Relevanz der Tabelle erkennen können. Darüber hinaus wird die „Guthaben“-Spalte durch das Anzeigen der Summe der Guthaben der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellens [Überschrift](#bildunterschriften) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` verwendet wird. Die Überschrift stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle bereit.

Zuletzt wird eine Tabellenfußsektion ({{HTMLElement("tfoot")}}-Element) unter dem Körper hinzugefügt, mit einer Zeile, die die „Guthaben“-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegende Tabellenstilgebung

Wenden wir einen grundlegenden Stil auf die Tabelle an, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Das HTML bleibt diesmal unverändert, daher werfen wir einen Blick auf das CSS.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine optisch ansprechendere Schriftart zu setzen (oder eine verabscheuungswürdige serifenlose Schriftart, abhängig von Ihrer persönlichen Meinung), ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, mit einer hellblauen {{cssxref("background-color")}} versehen werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Erweiterte Tabellenstilgebung

Jetzt werden wir alles auspacken, mit Stilen sowohl in den Kopf- als auch in den Körperbereichen, einschließlich wechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben abhängig von ihrer Position in einer Zeile und so weiter. Lassen Sie uns zuerst das Ergebnis betrachten.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderung am HTML. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel komplexer. Es ist nicht kompliziert, aber es gibt viele Vorgänge. Lassen Sie uns das aufschlüsseln.

Hier werden die {{cssxref("border-collapse")}}- und {{cssxref("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und angrenzende Ränder zusammenzulegen, damit keine doppelten Ränder entstehen. Zusätzlich wird das {{HTMLElement("caption")}} mit der {{cssxref("caption-side")}}-Eigenschaft am `bottom` der Tabelle platziert:

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

Als nächstes wird die {{cssxref("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen Platz um ihren Inhalt herum zu geben. Die {{cssxref("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was in den Zellen des Kopfes zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Diese CSS-Regel legt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf fest (wie im {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfes auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil es sich beim Kopf um zwei Zeilen handelt, die von einigen der Zellen überspannt werden. Das bedeutet, dass es dort tatsächlich zwei Zeilen gibt; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen „Beigetreten“ und „Gekündigt“ mit grünen und roten Farbtönen stylen, um das „Gute“ eines neuen Mitglieds und das „Schade“ einer gekündigten Mitgliedschaft darzustellen. Hier gehen wir in die letzte Zeile der Kopfsektion der Tabelle mithilfe des {{CSSxRef(":last-of-type")}}-Selektors und geben der ersten Kopfzelle darin (der „Beigetreten“-Kopf) eine grünlich Färbung und der zweiten Kopfzelle darin (der „Gekündigt“-Kopf) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte hervorgehoben werden soll, wird hier auch eine benutzerdefinierte Stilgebung hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile der Tabellenkörper mit der {{cssxref("text-align")}} Eigenschaft, um die Mitgliedsnamen linksbündig zu justieren, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch abwechselnde Zeilenfarben zu verbessern – dies wird manchmal als „Zebra-Streifung“ bezeichnet. Lassen Sie uns ein bisschen {{cssxref("background-color")}} auf jede gerade Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig zu justieren, lassen Sie uns das hier tun. Dies setzt einfach die {{cssxref("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

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

Ein häufiges Problem mit Tabellen im Web ist, dass sie nicht gut auf kleinen Bildschirmen funktionieren, wenn die Menge an Inhalten groß ist, und die Art und Weise, sie scrollfähig zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und es nichts Bemerkenswertes darüber gibt. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Stile werden Sie bemerken, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle einen Teil ihrer Integrität, und Tabellenzellen versuchen so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` im {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht im {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenköpfe auf der Seite zu halten, während Sie nach unten scrollen, haben wir {{cssxref("position")}} auf `sticky` für die {{HTMLElement("th")}}-Elemente gesetzt. Es ist zu beachten, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da wenn wir dies tun, der Kopf nicht korrekt von der restlichen Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist der {{cssxref("overflow")}} mit `auto` hier der wichtige Teil, da er die Tabelle scrollfähig macht.

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
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>keine oder mehrere {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eines der folgenden:
            <ul>
              <li>keine oder mehrere {{HTMLElement("tbody")}}-Elemente</li>
              <li>ein oder mehrere {{HTMLElement("tr")}}-Elemente</li>
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
      <td>Jedes Element, das Fließinhalte akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/table_role"
            >tabelle</a
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

- [Lernen: Grundlagen zu HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aspekts von Zellrändern, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und zum Festlegen des Abstands auf Zellinhalte
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Tabelleninhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Tabelleninhalts
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der Breite der Tabelle
