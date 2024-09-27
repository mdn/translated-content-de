---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<table>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert tabellarische Daten – das heißt, Informationen, die in einer zweidimensionalen Tabelle aus Zeilen und Spalten von Zellen dargestellt werden, die Daten enthalten.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um vorhandenen Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` versehen ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-Farbwerte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}} stattdessen, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert, als ganzzahliger Wert (in Pixeln), die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Statt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}} an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Statt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden muss. Die möglichen Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}} stattdessen, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den relevanten tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie das Element {{htmlelement("caption")}} stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als `<table>`-Attribut beinhaltet, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertlose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn als Prozentwert gesetzt, wird die minimale Tabellenhöhe relativ zur Höhe des Elternelements sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout von Tabelleneinhalten

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

1. Die Zeilenboxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilenbox belegt eine Zeile von Zellen.
2. Eine Gruppenzeilenbox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden in der Quellcode-Reihenfolge nebeneinander angeordnet. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributes werden die Spalten in einer Richtung von links nach rechts oder von rechts nach links angeordnet. Eine Spaltenbox nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Gruppenspaltenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten beschneiden Zellen, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben eine Auffüllung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Zu Stilisierungszwecken können die Tabellenelemente als auf sechs übereinanderliegenden Schichten liegend betrachtet werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf einem Element in einer Schicht gesetzt wird, ist nur sichtbar, wenn die Schichten darüber einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellenbox diesen Platz einnimmt.

## Barrierefreiheit

### Beschriftungen

Durch das Bereitstellen eines {{HTMLElement("caption")}}-Elements, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, können Sie den Menschen helfen, zu entscheiden, ob sie den Rest des Tabellinhalts überprüfen oder überspringen möchten.

Dies hilft Personen, die beim Navigieren auf Hilfstechnologie wie einen Bildschirmleser zurückgreifen, Personen mit Sehbehinderungen und Personen mit kognitiven Sorgen.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Beschriftung & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Zuordnung von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Umfang abgeleitet wird. Einige Hilfstechnologien ziehen möglicherweise keine korrekten Schlüsse, sodass die Angabe des Kopfbereichs das Benutzererlebnis verbessern kann. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die Zellen bereitzustellen, die zu einem Header gehören.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributs, um Kopfzellen und Datensätze in Datentabellen zuzuordnen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Bildschirmleser haben möglicherweise Schwierigkeiten, sehr komplexe Tabellen zu analysieren, bei denen Kopfzellen nicht streng horizontal oder vertikal zuzuordnen sind. Dies wird normalerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Wege in Betracht ziehen, um den Inhalt der Tabelle zu präsentieren, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Dies kann nicht nur Menschen helfen, die Hilfstechnologie verwenden, den Tabelleninhalt zu verstehen, sondern auch Menschen mit kognitiven Bedenken zugutekommen, die möglicherweise Probleme haben, die Assoziationen zu verstehen, die das Tabellenlayout beschreibt.

Wenn die Tabelle nicht aufgebrochen werden kann, verwenden Sie eine Kombination aus den Attributen [`id`](/de/docs/Web/HTML/Global_attributes#id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um jede Tabellenzelle programmgesteuert den Kopfzellen ({{HTMLElement("th")}}-Elementen) zuzuordnen, mit denen die Zelle verbunden ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von id- und headers-Attributen, um Datensätze Kopfzellen zuzuordnen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die untenstehenden Beispiele umfassen Tabellen von zunehmend komplexerem Aufbau. Für weitere Beispiele, einschließlich eines ausführlichen Tutorials, siehe die [HTML-Tabellen](/de/docs/Learn/HTML/Tables)-Reihe im Bereich [Webentwicklung lernen](/de/docs/Learn), wo Sie lernen, wie Sie die Tabellenelemente und ihre Attribute korrekt verwenden, um Ihre tabellarischen Daten zu strukturieren. Ein [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) Leitfaden bietet Informationen zur Tabellenstilgestaltung, einschließlich gängiger und nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine [zugängliche](/de/docs/Glossary/accessibility) Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Struktur von HTML-Tabellen kann die [Auszeichnung](/de/docs/Glossary/markup) schnell wachsen. Daher ist es wichtig, den Zweck und das endgültige Aussehen der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur, die mit [semantischer](/de/docs/Glossary/semantics) Auszeichnung entwickelt wurde, ist nicht nur leichter zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedem, einschließlich Suchmaschinen und Benutzern von Hilfstechnologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, mit anschließend zunehmender Komplexität. Zuerst entwickeln wir eine sehr grundlegende HTML-Tabellenstruktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellenspannung oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Beschriftung bereitgestellt. Während wir die Beispiele durchgehen, werden sie schrittweise erweitert, um alle Funktionen zu beinhalten, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standardbrowser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS hinzugefügt.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden innerhalb dieser mit Tabellenkopf- und Datenzellen definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Die Styling-Ergebnisse stammen ausschließlich aus dem [Benutzeragenten-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), erweitert den Inhalt und fügt grundlegende CSS-Stile hinzu.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen) mit jeweils vier Spalten. Die erste Zeile ist eine Reihe von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen umfassen eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kind-Elemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d. h., alle Zeilen werden innerhalb des Hauptkörpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt eine durchgehende Umrandung um das `<table>` und um jede der Tabellenzellen hinzu, einschließlich derjenigen, die sowohl mit {{HTMLElement("th")}} als auch mit {{HTMLElement("td")}}-Elementen spezifiziert sind, was jede Kopf- und Datenzelle markiert.

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

Bevor Sie die Tabelle auf fortgeschrittene Weise erweitern, ist es ratsam, die [Barrierefreiheit](/de/docs/Glossary/accessibility) zu verbessern, indem Sie Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen) definieren.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt wird und die Werte auf den entsprechenden `col`- (Spalte) oder `row`-Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung liefert wertvolle kontextuelle Informationen für Hilfstechnologien wie Bildschirmleser, um zu helfen, die Zellen zu identifizieren, mit denen die Kopfzeilen zusammenhängen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und Hilfstechnologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Spezifizierung von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Spezifizierung von Zellbeziehungen](#spezifizieren_von_tabellenzellenbeziehungen) kann die [Semantik](/de/docs/Glossary/semantics) der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest der Inhalte der Tabelle liefert, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfsektion der Tabelle zu spezifizieren. Außerdem kann das, was automatisch vom Browser erreicht wird, auch explizit definiert werden – die Hauptsektion der Tabelle, die die Hauptdaten der Tabelle enthält, wird durch Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Auch hier bleiben das CSS und das visuelle Ergebnis unverändert – die Angabe solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für Hilfstechnologien, einschließlich Bildschirmleser und Suchmaschinen, sowie für die Gestaltung im CSS, die in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird eine neue Spalte für ein "Ende der Mitgliedschaft"-Datum in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird ebenfalls innerhalb der Kopfsektion ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedsdaten"-Überschrift als Überschrift für die Spalten "Beigetreten" und "Gekündigt" einzuführen.

Die Erstellung der zweiten Kopfzeile beinhaltet das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Die Kopfsektion hat nun zwei Zeilen, eine mit den Überschriften ({{HTMLElement("th")}}-Elementen) "Name", "ID", "Mitgliedsdaten" und "Guthaben", und eine "Mitgliedsdaten"-Überschrift mit zwei Unterüberschriften, die sich in einer zweiten Zeile befinden: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die "Name"-, "ID"- und "Guthaben"-Kopfzellen der ersten Zeile erstrecken sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribut verwendet wird, sodass sie jeweils zwei Zeilen hoch sind.
- Die "Mitgliedsdaten"-Kopfzelle der ersten Zeile erstreckt sich über zwei Spalten, indem das [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut verwendet wird, sodass sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die beiden Kopfzellen "Beigetreten" und "Gekündigt", weil die anderen drei Spalten mit den Zellen in der ersten Zeile zusammengeführt sind, die sich über zwei Zeilen erstrecken. Die zwei Kopfzellen sind korrekt unter der Überschrift "Mitgliedsdaten" positioniert.

### Tabellenbeschriftung und Spaltenzusammenfassung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung des Inhalts der Tabelle bereitzustellen, die es den Nutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Außerdem wird die "Guthaben"-Spalte zusammengefasst, indem die Summe der Guthaben der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung einer Tabellen[Beschriftung](#beschriftungen) ({{HTMLElement("caption")}}-Element) als erstes Kind-Element des `<table>` hinzugefügt. Die Beschriftung bietet die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) für die Tabelle.

Zuletzt wird eine Tabellenfußsektion ({{HTMLElement("tfoot")}}-Element) unter dem Hauptteil hinzugefügt, mit einer Zeile, die die "Guthaben"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die vorher eingeführten Elemente und Attribute werden angewendet.

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

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Das HTML bleibt diesmal unverändert, also springen wir direkt in das CSS.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine optisch ansprechendere Schriftart festzulegen (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung), ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb des {{HTMLElement("thead")}}- und {{HTMLElement("tfoot")}} befinden, gestylt werden, indem eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Sektionen gleichzeitig anzuwenden.

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

Nun werden wir uns voll ins Zeug legen, mit Stilen sowohl in den Zeilen im Kopf- als auch im Hauptbereich, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter. Lassen Sie uns zuerst das Ergebnis betrachten.

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

Das CSS ist diesmal viel umfangreicher. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie uns das aufschlüsseln.

Hier werden die Eigenschaften {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} hinzugefügt, um den Abstand zwischen Zellen zu beseitigen und Ränder, die sich berühren, auf eine einzige Grenze zu reduzieren, anstatt mit doppelten Rändern zu enden. Darüber hinaus wird das {{HTMLElement("caption")}} mit der Eigenschaft {{CSSxRef("caption-side")}} am `bottom` der Tabelle platziert:

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

Dann wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenzellen einen Rand um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was bei den Zellen im Kopf zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf (wie mit {{HTMLElement("thead")}} angegeben). Dann wird der untere Rand des Kopfes als zweipixelige Linie festgelegt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die Eigenschaft {{CSSxRef("border-bottom")}} auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass es tatsächlich zwei Zeilen gibt; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grünen und roten Tönen stilisieren, um das "Gute" eines neuen Mitglieds und das "Pech" eines gekündigten Mitglieds darzustellen. Hier tauchen wir mit dem {{CSSxRef(":last-of-type")}}-Selector in die letzte Zeile der Kopfsektion der Tabelle ein und geben der ersten Kopfzelle darin (der "Beigetreten"-Überschrift) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Gekündigt"-Überschrift) eine rötliche Tönung:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorgehoben werden sollte, wird hier auch ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stilisiert die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem abwechselnde Zeilenfarben verwendet werden – dies wird manchmal als "Zebrastreifen" bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standard ist, Währungswerte in Tabellen rechtsbündig auszurichten, machen wir das auch hier. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird einiges Styling, ähnlich dem Kopfbereich, auf den Fußbereich der Tabelle angewendet, um diesen ebenfalls hervorzuheben:

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

Ein häufiges Problem bei Tabellen im Web ist, dass sie nicht sehr gut auf kleinen Bildschirmen funktionieren, wenn der Inhalt umfangreich ist, und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS stammt und nicht modifiziert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Bereichen anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Bemerkenswertes enthält. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Wenn Sie sich diese Styles ansehen, werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle einen Teil ihrer Integrität, und die Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` auf das {{HTMLElement("tbody")}} gesetzt. Dies tun wir jedoch nicht für das {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel die Spalten breiter machen, als sie es sein müssen, um die Daten anzuzeigen.

Um die Tabellenüberschriften auf der Seite zu halten, während Sie nach unten scrollen, haben wir {{cssxref("position")}} auf sticky für die {{HTMLElement("th")}}-Elemente gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da dies den Header nicht korrekt vom Rest der Tabelle trennen kann.

Da das `<table>` eine feste Größe hat, ist das Setzen von {{cssxref("overflow")}} auf `auto` hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
          >Fließender Inhalt</a
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
            entweder eins von Folgendem:
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
      <th scope="row">Erlaubte Elternelemente</th>
      <td>Jedes Element, das Fließinhalte akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>Alle</td>
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aussehens von Zellengrenzen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und zum Festlegen von Abständen im Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Tabellenzelleninhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Tabellenzelleninhalts
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
