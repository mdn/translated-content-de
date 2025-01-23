---
title: Grundlagen von HTML-Tabellen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Stylingzwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen sind — tabellarische Daten zu strukturieren.</li>
          <li>Wofür Tabellen nicht sind — Layouts oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Datenmenge, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter, einen Wochentag oder den Fahrplan eines örtlichen Schwimmbades.

![Ein Beispiel für eine Tabelle, die Namen und Alter von einigen Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan zeigt eine Beispiel-Datentabelle](swimming-timetable.png)

Tabellen sind in der menschlichen Gesellschaft sehr verbreitet und werden schon lange verwendet, wie dieses US-Volksdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt eindeutig eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit geschaffen haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle besteht darin, dass sie starr ist. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Betrachten Sie zum Beispiel die folgende Tabelle und finden Sie einen Jupitermondriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die entsprechenden Zeilen- und Spaltenüberschriften assoziieren.

```html hidden
<table>
  <caption>
    Data about the planets of our solar system (Source:
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Name</th>
      <th scope="col">Mass (10<sup>24</sup>kg)</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Density (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravity (m/s<sup>2</sup>)</th>
      <th scope="col">Length of day (hours)</th>
      <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
      <th scope="col">Mean temperature (°C)</th>
      <th scope="col">Number of moons</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Terrestrial planets</th>
      <th scope="row">Mercury</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Closest to the Sun</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Our world</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>The red planet</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Jovian planets</th>
      <th rowspan="2" scope="rowgroup">Gas giants</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>The largest planet</td>
    </tr>
    <tr>
      <th scope="row">Saturn</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Ice giants</th>
      <th scope="row">Uranus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Dwarf planets</th>
      <th scope="row">Pluto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Declassified as a planet in 2006, but this
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >remains controversial</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("How_does_a_table_work", 100, 560)}}

Bei korrekter Implementierung werden HTML-Tabellen gut von Hilfstechnologien wie Bildschirmlesegeräten verarbeitet, sodass eine gut gestaltete HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Styling von Tabellen

Sie können sich auch das [Live-Beispiel auf GitHub](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) ansehen! Eines werden Sie bemerken: Die Tabelle sieht dort ein wenig lesbarer aus — das liegt daran, dass die oben auf dieser Seite angezeigte Tabelle minimal gestylt ist, während die GitHub-Version umfangreichere CSS-Stile verwendet.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Stylinginformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen sowie eine gute, solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; das Styling von Tabellen lernen Sie später kennen, in unserer Lektion [Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Ihre Tabellen lesbarer macht als das Standardlayout ohne jegliches Styling. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — diese beiden zusammen bieten einen guten Ausgangspunkt zum Experimentieren mit HTML-Tabellen.

### Wann sollten Sie KEINE HTML-Tabellen verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — dafür sind sie konzipiert. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu layouten, z.B. eine Zeile für den Kopfbereich, eine Zeile für die Inhaltsbereiche, eine Zeile für den Fußbereich, usw. Weitere Details und ein Beispiel finden Sie unter [Seitenlayouts](/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts) in unserem [Barrierefreiheit-Lernmodul](/de/docs/Learn_web_development/Core/Accessibility). Dies war weit verbreitet, weil die CSS-Unterstützung in verschiedenen Browsern früher sehr schlecht war; Tabellenlayouts sind heutzutage viel weniger üblich, aber Sie könnten sie noch in einigen Ecken des Webs finden.

Kurz gesagt, die Verwendung von Tabellen für Layout anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen verringern die Zugänglichkeit für sehbehinderte Benutzer**: [Bildschirmlesegeräte](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von Blinden verwendet werden, interpretieren die in einer HTML-Seite vorhandenen Tags und lesen dem Benutzer den Inhalt vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und die Markup-Struktur komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Bildschirmlesegeräte für deren Benutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, beinhalten Tabellenlayouts in der Regel komplexere Markup-Strukturen als ordnungsgemäße Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), ist ihre Breite standardmäßig 100% ihres übergeordneten Elements. Tabellen hingegen werden standardmäßig entsprechend ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um ein effektives Tabellenlayout über eine Vielzahl von Geräten hinweg zu erreichen.

## Aktives Lernen: Erstellen Sie Ihre erste Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel eintauchen und eine einfache Tabelle erstellen.

1. Erstellen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese in den Body Ihres HTML-Codes ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende in Ihre Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile von vier Zellen wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er so aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch auf derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede zusätzliche Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um das Wachsen dieser Zeile zu stoppen und nachfolgende Zellen auf einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element verwenden ('tr' steht für 'table row'). Lassen Sie uns das nun untersuchen.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb von `<tr>`-Tags, so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt, probieren Sie aus, ein oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingeschlossen sein, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte zu einer Tabelle führen, die etwa wie folgt aussieht:

```html hidden
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("Result")}}

> [!NOTE]
> Sie können dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Nun wenden wir uns den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel, siehe die Zellen "Person" und "Alter" im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zuerst der Quellcode:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Jetzt die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("Adding_headers_with_th_elements", "", "250")}}

Das Problem hier ist, dass, obwohl man irgendwie erkennen kann, was passiert, es nicht so einfach ist, Daten abzugleichen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben wären, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Verbessern wir diese Tabelle.

1. Erstellen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dieselbe Hunde-Beispieltabelle, die Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element verwenden ('th' steht für 'table header'). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und nicht eine normale Zelle kennzeichnet. Gehen Sie in Ihren HTML-Code und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften klar hervorgehoben sind, und das Design sieht generell besser aus.

> [!NOTE]
> Tabellenüberschriften haben eine Standardformatierung — sie sind fett und zentriert, selbst wenn Sie der Tabelle keine eigene Stilgebung hinzufügen, um sie hervorzuheben.

Tabellenüberschriften bieten auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden) ermöglichen sie es Ihnen, Tabellen zugänglicher zu machen, indem Sie jede Überschrift mit allen Daten derselben Zeile oder Spalte verbinden. Bildschirmlesegeräte können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten reichen. Nehmen Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen der männlichen und weiblichen Tiere neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen soll der Tiername über die gesamte Tabelle reichen.

Das Anfangsmarkup sieht so aus:

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Aber die Ausgabe entspricht nicht ganz unseren Wünschen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen und "Pferd" und "Huhn" nach unten über zwei Zeilen zu spannen. Glücklicherweise haben Tabellenüberschriften und -zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen zahlenlosen Wert, der der Anzahl der Zeilen oder Spalten entspricht, über die Sie spannen möchten. Zum Beispiel macht `colspan="2"` eine Zelle zwei Spalten breit.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen.
3. Verwenden Sie abschließend `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgedeckt. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Benutzer zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
