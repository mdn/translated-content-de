---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert tabellarische Daten, das heißt, Informationen, die in einer zweidimensionalen Tabelle mit Zeilen und Spalten von Zellen, die Daten enthalten, dargestellt werden.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier nur zu Referenzzwecken für das Aktualisieren bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres übergeordneten Elements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [hexadezimaler RGB-Wert mit 6 Ziffern](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert die Größe des Rahmens, der die Tabelle umgibt, als nicht-negative Ganzzahl (in Pixel). Wenn `0` gesetzt ist, wird das [`frame`](#frame)-Attribut auf `void` gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als `<table>`-Attribut enthält, unterstützen einige Browser eine nicht-standardisierte Interpretation von `height`. Der ungerahmte Wert setzt eine minimale absolute Höhe in Pixel. Wenn er als Prozentwert gesetzt wird, ist die minimale Tabellengröße relativ zur Höhe des übergeordneten Containers. Verwenden Sie die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

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

Die `<table>`-Box etabliert einen Tabellendarstellungskontext. Elemente innerhalb der `<table>` erzeugen rechteckige Kästen. Jeder Kasten nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenkästen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jeder Zeilenkasten nimmt eine Zeile von Zellen ein.
2. Ein Zeilengruppenkasten nimmt eine oder mehrere Zeilenkästen ein.
3. Spaltenkästen werden in der Quellcode-Reihenfolge nebeneinander platziert. Je nach Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributs werden die Spalten von links nach rechts oder von rechts nach links angeordnet. Ein Spaltenkasten nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Ein Spaltengruppenkasten nimmt eine oder mehrere Spaltenkästen ein.
5. Ein Zellkasten kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen, um in die verfügbaren Zeilen und Spalten zu passen.

Tabellenzellen haben Polsterung. Kästen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenschichten und Transparenz

Zu Stilzwecken können die Tabellenelemente als auf sechs übereinander liegenden Schichten angeordnet betrachtet werden:

![Tabellenelement-Schichten](table_element_layers.png)

Der auf einem Element einer Schicht eingestellte Hintergrund ist nur sichtbar, wenn die darüber liegenden Schichten einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als würde ein anonymer Tabellenzellen-Kasten diesen Platz einnehmen.

## Barrierefreiheit

### Beschreibungen

Indem Sie ein {{HTMLElement("caption")}}-Element bereitstellen, das den Zweck der Tabelle klar und prägnant beschreibt, hilft es den Menschen zu entscheiden, ob sie den Rest des Tabellinhalts überprüfen oder überspringen müssen.

Dies hilft Menschen, die mit Hilfe von assistiver Technologie, wie einem Bildschirmleser, navigieren, Menschen mit Sehbeeinträchtigungen und Menschen mit kognitiven Problemen.

- [MDN Hinzufügen einer Beschreibung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Beschriftung & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen und Spalten scopen

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Headerzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Scope abgeleitet wird. Einige assistive Technologien können jedoch falsche Ableitungen ziehen, daher kann das Spezifizieren des Header-Scopes das Benutzererlebnis verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die zu einem Header gehörenden Zellen bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwendung des scope-Attributs zur Zuordnung von Headerzellen und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Assistive Technologien wie Bildschirmleser können Schwierigkeiten haben, Tabellen zu analysieren, die so komplex sind, dass Headerzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird normalerweise durch das Vorhandensein der [`colspan`](/de/docs/Web/HTML/Element/td#colspan)- und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribute angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten in Betracht ziehen, den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung von kleineren, verwandten Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Neben der Unterstützung von Assistive-Technology-Nutzern beim Verständnis des Tabellinhalts kann dies auch Menschen mit kognitiven Problemen zugutekommen, die möglicherweise Schwierigkeiten beim Verständnis der von der Tabellendarstellung beschriebenen Beziehungen haben.

Wenn die Tabelle nicht auseinandergezogen werden kann, verwenden Sie eine Kombination aus den Attributen [`id`](/de/docs/Web/HTML/Global_attributes#id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um programmatisch jede Tabellenzelle den Header(s) ({{HTMLElement("th")}}-Elementen) zuzuordnen, denen die Zelle zugeordnet ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwendung der Attribute id und headers zur Zuordnung von Datenzellen zu Headerzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele umfassen Tabellen mit fortschreitend zunehmender Komplexität. Für zusätzliche Beispiele, einschließlich eines ausführlichen Tutorials, siehe die [HTML-Tabellen](/de/docs/Learn/HTML/Tables)-Serie im Bereich [Webentwicklung lernen](/de/docs/Learn), wo man lernen kann, wie man die Tabellenelemente und deren Attribute verwendet, um die tabellarischen Daten korrekt zu strukturieren. Ein [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)-Leitfaden bietet Informationen zur Tabellenformatierung, einschließlich gängiger, nützlicher Techniken.

Da die Struktur eines `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung liefern, die die Grundlagen und gängigen Standards abdeckt. Weitere und detailliertere Informationen sind auf den entsprechenden verlinkten Seiten zu finden.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wird.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell wachsen. Daher ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wurde, ist nicht nur leichter zu gestalten, sondern ermöglicht auch nützliche und zugängliche Tabellen, die von allen verstanden und navigiert werden können, einschließlich Suchmaschinen und Benutzern von Assistive-Technologien.

Das erste Beispiel ist einfach, während die folgenden Beispiele an Komplexität zunehmen. Zuerst werden wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle erstellen. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Zellspannern oder explizit definierte Zellbeziehungen. Es wird nicht einmal eine Beschreibung bereitgestellt. Während wir die Beispiele durcharbeiten, werden sie schrittweise verbessert, um alle Tabelleneigenschaften zu umfassen, die eine komplexe Datentabelle aufweisen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Tabelle-Stile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS aufgenommen.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen innerhalb dieser definiert. Die erste Zeile enthält die Headerzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenheader für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte, das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte und das zweite Element dieser Zeile in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Die Formatierung ergibt sich ausschließlich aus dem [Benutzeragenten-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Header-Zellen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem der Inhalt erweitert und grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle umfasst jetzt vier Zeilen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Headerzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen enthalten eine Header-Spalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Zeilen werden innerhalb des Körpers der Tabelle eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

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

Mit CSS bieten wir die grundlegende Formatierung, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um das `<table>` und um jede der Tabellenzellen herum hinzu, einschließlich derjenigen, die sowohl mit {{HTMLElement("th")}}- als auch {{HTMLElement("td")}}-Elementen spezifiziert sind, um jede Header- und Datenzelle zu markieren.

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

Bevor wir weitermachen, um die Tabelle auf fortgeschrittenere Weise zu erweitern, empfiehlt es sich, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen Header- und Datenzellen ({{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die entsprechenden `col` (Spalte) oder `row`-Werte gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung liefert wertvolle kontextbezogene Informationen für assistive Technologien wie Bildschirmleser, um zu helfen festzustellen, auf welche Zellen sich die Header beziehen.

> [!NOTE]
> Wenn die Tabellensstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und Assistive-Technologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Spezifikation von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Spezifizieren von Zellbeziehungen](#spezifizieren_von_tabellenzellbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenheaderzellen enthält und die Überschrift für den Rest der Tabelleninhalte bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfabschnitt der Tabelle zu spezifizieren. Außerdem kann das, was automatisch vom Browser erledigt wird, auch explizit definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird spezifiziert, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element eingeschlossen werden. Der explizite Einsatz des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen, um unerwünschte Ergebnisse zu vermeiden.

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

Wieder ist das CSS und das visuelle Ergebnis unverändert– das Spezifizieren solcher Tabellensektionsgruppen liefert wertvolle kontextbezogene Informationen für assistive Technologien, einschließlich Bildschirmlesern und Suchmaschinen, sowie für die Gestaltung im CSS, die in einem späteren Beispiel gezeigt werden wird.

### Spalten- und Zeilenübergreifung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und einen mehrzeiligen Kopfabschnitt einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird für jede Zeile des Körpers mit dem {{HTMLElement("td")}}-Element eine neue Spalte für ein "Mitgliedschafts-Ende-Datum" hinzugefügt. Ein zusätzlicher Zeilenabschnitt ({{HTMLElement("tr")}}-Element) wird ebenfalls im Kopfabschnitt ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdaten"-Überschrift als Überschrift für die "Eintritt"- und "Kündigungs"-Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile umfasst das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Headerzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfabschnitt besitzt jetzt zwei Zeilen, eine mit den Headern ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschaftsdaten" und "Balance" sowie einen "Mitgliedschaftsdaten"-Header mit zwei Unterheadern in einer zweiten Zeile: "Eintritt" und "Kündigung". Dies wird erreicht durch:

- Die "Name", "ID" und "Balance"-Headerzellen der ersten Reihe überspannen beide Tabellenkopfzeilen, indem sie das Attribut [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) verwenden, was sie jeweils zwei Zeilen hoch macht.
- Die "Mitgliedschaftsdaten"-Headerzelle der ersten Zeile erstreckt sich über zwei Spalten durch das Attribut [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und macht sie damit zwei Spalten breit.
- Die zweite Zeile enthält nur die zwei Headerzellen "Eintritt" und "Kündigung", weil die anderen drei Spalten mit den Zellen der ersten Zeile verbunden sind, die sich um zwei Zeilen erstrecken. Die zwei Header-Zellen sind korrekt unter dem "Mitgliedschaftsdaten"-Header positioniert.

### Tabellenbeschreibung und Spaltenzusammenfassung

Es ist eine gängige und empfohlene Praxis, eine Zusammenfassung des Tabelleninhalts bereitzustellen, um den Benutzern zu ermöglichen, schnell die Relevanz der Tabelle zu bestimmen. Darüber hinaus wird die "Balance"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellen[caption](#beschreibungen) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` hinzugefügt wird. Die Caption bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfuß ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Balance"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegendes Styling der Tabelle

Lassen Sie uns der Tabelle ein grundlegendes Styling verleihen, um die Schriftart anzupassen und den Kopf- und Fußzeilen eine {{cssxref("background-color")}} hinzuzufügen. Der HTML-Code bleibt diesmal unverändert, also tauchen wir direkt in das CSS ein.

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

Wähend eine {{cssxref("font")}}-Eigenschaft hier dem `<table>`-Element hinzugefügt wurde, um eine ansprechendere Schriftart zu setzen (oder eine verhasste serifenlose Schriftart, abhängig von Ihrer persönlichen Meinung), ist der interessantere Teil der zweite Stil, in dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, mit einer hellblauen {{cssxref("background-color")}} versehen werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe für alle Zellen in spezifischen Abschnitten gleichzeitig anzuwenden.

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

### Fortschrittliches Styling der Tabelle

Jetzt gehen wir aufs Ganze, mit Stilen sowohl in den Kopf- als auch den Körperbereichen der Zeilen, einschließlich alternierender Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter. Lassen Sie uns das Ergebnis diesmal zuerst ansehen.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt wieder keine Änderung an der HTML. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel umfangreicher. Es ist nicht kompliziert, aber es gibt viel zu beachten. Lassen Sie uns es aufschlüsseln:

Hier werden die CSS-Eigenschaften {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und Berührungspunkte der Rahmen zu einem einzelnen Rahmen zusammenzuführen, anstatt doppelte Rahmen zu erhalten. Außerdem wird die {{HTMLElement("caption")}} mit der CSS-Eigenschaft {{CSSxRef("caption-side")}} am `bottom` der Tabelle platziert:

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

Als nächstes wird die CSS-Eigenschaft {{CSSxRef("padding")}} verwendet, um allen Zellen der Tabelle Raum um deren Inhalt zu geben. Die CSS-Eigenschaft {{CSSxRef("vertical-align")}} richtet den Inhalt der Headerzellen am `bottom` der Zelle aus, was bei den Zellen im Kopf, die zwei Zeilen umfassen, zu sehen ist:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopf der Tabelle (wie mit {{HTMLElement("thead")}} spezifiziert). Dann wird der untere Rand des Kopfes als eine zwei Pixel breite Linie festgelegt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die CSS-Eigenschaft {{CSSxRef("border-bottom")}} auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass es tatsächlich zwei Zeilen gibt; die Anwendung des Stils auf die erste Zeile würde uns nicht das erwartete Ergebnis geben:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Header-Zellen "Eintritt" und "Kündigung" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Schade" einer gekündigten Mitgliedschaft darzustellen. Hier greifen wir in die letzte Zeile des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selektor und geben der ersten Header-Zelle darin (dem "Beigetreten"-Header) eine grünliche Farbe und der zweiten Header-Zelle darin (dem "Gekündigt"-Header) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte auffallen soll, wird hier etwas benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Header-Zelle in jeder Zeile des Tabellenkörpers mit der CSS-Eigenschaft {{CSSxRef("text-align")}}, um die Mitgliedsnamen links auszurichten und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten durch abwechselnde Zeilenfarben zu verbessern – dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechts auszurichten, lassen Sie uns das hier tun. Dies richtet einfach die CSS-Eigenschaft {{CSSxRef("text-align")}} des letzten {{HTMLElement("td")}} in jeder Körperzeile auf `right` aus:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein Styling ähnlich dem Kopf auf den Fußbereich der Tabelle angewendet, um diesen ebenfalls hervorzuheben:

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

Ein häufiges Problem mit Tabellen im Web ist, dass sie nicht nat(ihrlich) sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge an Inhalt groß ist, und die Möglichkeit, sie scrollbar zu machen, ist nicht offensichtlich, besonders wenn das Markup möglicherweise von einem CMS kommt und nicht modifiziert werden kann, um über ein Wrapper zu verfügen.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen darzustellen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Bemerkenswertes enthält. Das CSS ist in diesem Beispiel nützlicher, um es zu inspizieren.

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

Beim Betrachten dieser Stile wird Ihnen auffallen, dass die CSS-Eigenschaft {{cssxref("display")}} auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle einen Teil ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir auf dem {{HTMLElement("tbody")}} das {{cssxref("white-space")}} auf `nowrap` gesetzt. Allerdings tun wir dies nicht für den {{HTMLElement("thead")}}, um zu vermeiden, dass lange Titel die Spalten breiter machen, als sie sein müssen, um die Daten anzuzeigen.

Um die Tabellenüberschriften auf der Seite zu halten, während man nach unten scrollt, haben wir auf den {{HTMLElement("th")}}-Elementen {{cssxref("position")}} auf sticky gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da, wenn wir dies tun, die Überschrift nicht korrekt vom Rest der Tabelle getrennt werden kann.

Weil das `<table>` eine feste Größe hat, ist das {{cssxref("overflow")}} auf `auto` hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalte</a
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
            eine der folgenden:
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
      <td>Keine, sowohl der Start- als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flow-Inhalte akzeptiert</td>
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Festlegen der Hintergrundfarbe der Tabelle
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Erscheinungsbilds von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und Festlegen des Abstands auf Zellinhalte
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten von Tabellenzellinhalten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten von Tabellenzellinhalten
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
