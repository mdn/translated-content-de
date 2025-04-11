---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die grundlegenden Konzepte wie Zeilen, Zellen, Überschriften, das Zusammenführen von Zellen über mehrere Spalten und Zeilen hinweg und wie man alle Zellen in einer Spalte für Styling-Zwecke gruppiert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — um tabellarische Daten zu strukturieren.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>alles andere</em>.</li>
          <li>Basis-Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Verwenden von <code>colspan</code> und <code>rowspan</code>, um mehrere Spalten und Zeilen zu überspannen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturierter Satz von Daten, bestehend aus Zeilen und Spalten (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte zu finden, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, wie zum Beispiel eine Person und ihr Alter, ein Wochentag oder der Zeitplan eines örtlichen Schwimmbads.

![Eine Beispielstabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmplan zeigt eine Beispiel-Datentabelle](swimming-timetable.png)

Tabellen werden sehr häufig in der Gesellschaft verwendet und das schon seit langer Zeit, was durch dieses US-amerikanische Zensusdokument von 1800 belegt wird:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt eindeutig eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Erfinder von HTML eine Möglichkeit bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle ist, dass sie starr ist. Informationen werden durch visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften leicht interpretiert. Schauen Sie zum Beispiel auf die folgende Tabelle und finden Sie einen Jupitermond-Gasplaneten mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften assoziieren.

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

Wenn HTML-Tabellen korrekt implementiert sind, werden sie von Barrierefreiheitswerkzeugen wie Bildschirmlesern gut behandelt, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Nutzer verbessern sollte.

### Styling einer Tabelle

Sie können sich auch das [Live-Beispiel auf GitHub](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas lesbarer aussieht — dies liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version eine umfangreichere CSS-Formatierung hat.

Um keinen falschen Eindruck zu erwecken; damit Tabellen im Web effektiv sind, müssen Sie etwas Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen und eine gute solide Struktur mit HTML schaffen. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; mehr über das Styling von Tabellen erfahren Sie später, in unserer Lektion [Stil von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer als den Standard ohne jegliches Styling zu machen. Sie können das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) finden, und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese zusammen geben Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollte man HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die leicht in Zeilen und Spalten verarbeitet werden können) — dafür sind sie ausgelegt. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu gestalten, zum Beispiel eine Zeile, um eine Seitenüberschrift zu enthalten, eine Zeile für jede Inhaltskolonne, eine Zeile für den Fußzeilenbereich usw. Diese Technik wurde verwendet, da die CSS-Unterstützung in den verschiedenen Browsern früher viel eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, daher sind tabellenbasierte Layouts inzwischen äußerst selten, aber man kann sie in einigen Ecken des Webs noch finden.

Kurz gesagt, die Verwendung von Tabellen für Layout anstelle von [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe dafür sind:

1. **Layout-Tabellen reduzieren die Barrierefreiheit für sehbehinderte Nutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite existieren, und lesen die Inhalte dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser verwirrend für deren Nutzer sein.
2. **Tabellen produzieren Tag-Salat**: Wie bereits erwähnt, beinhalten Tabellenlayouts in der Regel komplexere Markup-Strukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, oder {{htmlelement("div")}}), ist deren Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen sind standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um Styling von Tabellenlayouts effektiv über verschiedene Geräte hinweg zu verwenden.

## Aktives Lernen: Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lasst uns ein Praxisbeispiel machen und Schritt für Schritt eine einfache Tabelle erstellen.

1. Machen Sie zuerst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrer lokalen Maschine.
2. Der Inhalt jeder Tabelle wird von diesen zwei Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese in den Körper Ihres HTML ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende in Ihre Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile von vier Zellen wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, um so auszusehen:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern sie sind automatisch in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile weiter wächst, und um nachfolgende Zellen in einer zweiten Zeile anzufangen, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element verwenden ('tr' steht für 'table row'). Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt, da Sie eine Zeile haben, versuchen Sie eine oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingeschlossen werden, mit jeder Zelle in einem `<td>`.

### Ergebnis

Das sollte zu einer Tabelle führen, die etwa so aussieht:

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
> Sie finden dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Lassen Sie uns nun unsere Aufmerksamkeit auf Tabellenüberschriften richten — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art von Daten definieren, die die Zeile oder Spalte enthält (siehe zum Beispiel die Zellen "Person" und "Alter" im ersten in diesem Artikel gezeigten Beispiel). Um zu verdeutlichen, warum sie nützlich sind, schauen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Nun die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("Adding_headers_with_th_elements", "", "250")}}

Das Problem hier ist, dass, obwohl Sie irgendwie verstehen können, was vor sich geht, es nicht so einfach ist, Daten zu kreuzreferenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorstechen würden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Lassen Sie uns versuchen, diese Tabelle zu verbessern.

1. Erstellen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl optisch als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ('th' steht für 'table header'). Dies funktioniert genau so wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle bezeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel auf GitHub als [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die Daten zu finden, die Sie suchen, wenn die Überschriften deutlich hervorstechen, und das Design sieht einfach allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften haben standardmäßig ein gewisses Styling — sie sind fett und zentriert, auch wenn Sie kein eigenes Styling zur Tabelle hinzufügen, um sie hervorzuheben.

Tabellenüberschriften haben auch den zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel lernen werden), ermöglichen sie es, Tabellen barrierefreier zu gestalten, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Bildschirmleser sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Erlauben, dass Zellen mehrere Zeilen und Spalten überspannen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten überspannen. Nehmen Sie folgendes einfaches Beispiel, das die Namen gemeinsamer Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen soll der Tiername die ganze Tabelle überspannen.

Das anfängliche Markup sieht so aus:

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

Aber die Ausgabe entspricht nicht ganz unseren Vorstellungen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen, und "Horse" und "Chicken" über zwei Zeilen nach unten. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen wertlosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie überspannen möchten. Zum Beispiel macht `colspan="2"` eine Zelle über zwei Spalten.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zuerst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine. Das HTML enthält dasselbe Tier-Beispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel auf GitHub als [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Damit endet das Grundlagenwissen zu HTML-Tabellen. Im nächsten Artikel werden wir uns weitere Funktionen ansehen, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
