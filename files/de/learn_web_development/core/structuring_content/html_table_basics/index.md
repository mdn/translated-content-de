---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 3f73b31adea45123c1ac8cc84d570fc472315b30
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in die HTML-Tabellen ein und behandelt die grundlegenden Elemente wie Zeilen, Zellen, Überschriften, das Zusammenfügen von Zellen über mehrere Spalten und Zeilen hinweg und wie man alle Zellen einer Spalte für Stylingzwecke gruppiert.

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
          <li>Wofür Tabellen gedacht sind — Strukturierung von tabellarischen Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definition von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen mehrerer Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppierung von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Datenmenge, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte abzurufen, die eine Art von Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel zwischen einer Person und ihrem Alter oder einem Wochentag oder dem Zeitplan für ein örtliches Schwimmbad.

![Eine Beispiel-Tabelle zeigt Namen und Alter einiger Personen: Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmplan zeigt eine Beispiel-Datentabelle](swimming-timetable.png)

Tabellen werden sehr häufig in der Gesellschaft genutzt und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument von 1800 beweist:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich, dass eine Datentabelle verwendet wird.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitstellten, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Kern einer Tabelle ist ihre Rigidität. Informationen werden durch visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften leicht interpretiert. Sehen Sie sich zum Beispiel die folgende Tabelle an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften zuordnen.

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

Wenn sie richtig implementiert sind, werden HTML-Tabellen von Barrierefreiheitswerkzeugen wie Screenreadern gut verarbeitet, sodass eine erfolgreiche HTML-Tabelle die Erfahrung von sehenden und sehbehinderten Nutzern gleichermaßen verbessern sollte.

### Tabellenstyling

Sie können sich auch das [live-Datenbeispiel der Planeten](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Ein Punkt, der Ihnen auffallen wird, ist, dass die Tabelle dort ein wenig leserlicher aussieht – das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, nur minimal gestylt ist, während die GitHub-Version mehr signifikantes CSS angewendet hat.

Seien Sie nicht im Irrtum; damit Tabellen im Web effektiv sind, müssen Sie Stylinginformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen sowie eine gute, solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie werden später mehr über das Styling von Tabellen in unserer Lektion [Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) erfahren.

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, damit Ihre Tabellen lesbarer werden als das Standardaussehen, das Sie ohne jegliches Styling erhalten. Sie können das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) finden und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — zusammen bieten sie Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, mit denen man leicht in Zeilen und Spalten arbeiten kann) — dafür sind sie ausgelegt. Leider haben viele Menschen früher HTML-Tabellen zum Layouten von Webseiten verwendet, zum Beispiel eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhaltskolonne, eine Zeile für die Fußzeile, usw. Diese Technik wurde in der Vergangenheit verwendet, weil die Unterstützung von CSS über verschiedene Browser hinweg früher viel eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, sodass tabellenbasierte Layouts nicht mehr notwendig sind. Tabellenlayouts sind heute sehr selten, aber Sie könnten ihnen immer noch in einigen Ecken des Webs begegnen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Zugänglichkeit für sehbehinderte Nutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen die Inhalte dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und die Markup-Struktur komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Screenreader für ihre Benutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Salat**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als ordnungsgemäße Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen werden standardmäßig entsprechend ihrem Inhalt dimensioniert, daher sind zusätzliche Maßnahmen erforderlich, um das Styling von Tabellendesigns effektiv auf eine Vielzahl von Geräten anzuwenden.

## Erstellen Sie Ihre erste Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel eintauchen und Sie eine einfache Tabelle erstellen lassen.

1. Kopieren Sie zuerst [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in ein neues Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden. Sie müssen sich also darum nicht kümmern.
2. Der Inhalt jeder Tabelle wird durch diese beiden Tags umfasst: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese in den Body Ihres HTML-Dokuments ein.
3. Der kleinste Behälter innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element ("td" steht für "table data") erstellt wird. Fügen Sie das Folgende in Ihre Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern vielmehr automatisch auf derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um das Wachstum dieser Zeile zu stoppen und nachfolgende Zellen auf einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element verwenden ('tr' steht für 'table row'). Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die bereits erstellten vier Zellen in `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nun, da Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in einem zusätzlichen `<tr>`-Element eingeschlossen sein, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Hinzufügen von Überschriften mit \<th>-Elementen

Wenden wir uns nun den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (wie zum Beispiel die "Person" und "Age"-Zellen im ersten Beispiel in diesem Artikel). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

```html live-sample___table-headers
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

```css hidden live-sample___table-headers
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Nun die tatsächlich dargestellte Tabelle:

{{EmbedLiveSample("table-headers", "", "250")}}

Das Problem hier ist, dass, während man in etwa erkennen kann, was vor sich geht, es nicht so einfach ist, Daten über Kreuz zu referenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf irgendeine Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Nun möchten wir, dass Sie versuchen, das Hundetabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ("th" steht für "table header"). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift anzeigt, keine normale Zelle. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihre HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Breed</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Owner</th>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <th>Eating Habits</th>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

Sie können diesen Code auch auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) finden ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Warum sind Überschriften nützlich?

Wir haben die Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften deutlich hervorgehoben sind, und das Design sieht einfach insgesamt besser aus.

> [!NOTE]
> Tabellenüberschriften haben einige standardmäßige Formatierungen — sie sind fett und zentriert, selbst wenn Sie Ihrer Tabelle nicht zusätzliches Styling hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden) können Sie Tabellen zugänglicher machen, indem Sie jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpfen. Screenreader sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Zellen ermöglichen, über mehrere Zeilen und Spalten zu spannen

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten gespannt werden. Nehmen Sie das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen möchten wir einfach, dass der Tiername die gesamte Tabelle spannt.

Das anfängliche Markup sieht so aus:

```html live-sample___multiple-rows-columns
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

```css hidden live-sample___multiple-rows-columns
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Aber die Ausgabe gibt uns nicht ganz das, was wir wollen:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Fixieren des Layouts mit `rowspan` und `colspan`

Wir benötigen eine Möglichkeit, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten und "Horse" und "Chicken" über zwei Zeilen nach unten zu spannen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die uns genau dies ermöglichen. Beide akzeptieren einen wertelosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, über die Sie spannen möchten. Zum Beispiel bewirkt `colspan="2"`, dass eine Zelle zwei Spalten spannt.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Computer. Das HTML enthält das gleiche Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie anschließend `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

Sie können diesen Code auch auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) finden ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Gruppierung von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als eine einzige Einheit zu behandeln, zum Beispiel beim Anwenden von Styles auf eine Tabelle (was Sie später in [Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) lernen werden). Wenn Sie mehr Erfahrung im Erstellen von HTML-Tabellen sammeln, werden Sie feststellen, dass es schwieriger ist, eine Hintergrundfarbe beispielsweise auf jede Zelle in einer einzelnen Spalte anzuwenden, als Sie vielleicht denken. Die Elemente {{htmlelement("colgroup")}} und {{htmlelement("col")}} bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als ein Kind der Tabelle direkt nach dem öffnenden `<table>`-Element aufgenommen werden. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente aufnehmen, die Gruppen von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` enthalten (wenn Sie die Gruppe mit Inline-Styles anvisieren möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript über einen Klassennamen anvisieren möchten). Die `<col>`-Elemente repräsentieren die Tabellenspalten vom Beginn der Spalten an, zum Beispiel von der linken Seite einer Tabelle, die in einer von links nach rechts verlaufenden Sprache wie Englisch geschrieben ist.

Lassen Sie uns ein Beispiel untersuchen, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Schulstundenplan:

```html live-sample___colgroup-col
<h1>School language timetable</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

In dieser Tabelle gibt es acht Spalten. Schauen wir uns die `<colgroup>`- und `<col>`-Struktur genauer an, um zu zeigen, wie sie diese beeinflusst:

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

Betrachtet man die `<col>`-Elemente:

- Das erste hat `span="2"` gesetzt, sodass es die erste _und_ zweite Spalte von links der Tabelle repräsentiert. Wir erfassen diese Spalten nicht mit irgendwelchen Styles, aber wir müssen sie einfügen, damit wir nachfolgende Spalten erfassen können.
- Das zweite und vierte haben kein `span`-Attribut gesetzt, daher repräsentieren sie eine einzelne Spalte — in diesen Fällen die dritte und fünfte Spalte. Sie haben eine `class` von `column-background` angewendet.
- Das dritte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die vierte Spalte.
- Das fünfte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-background-border` angewendet. Es repräsentiert die sechste Spalte.
- Das sechste hat `span="2"` gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die siebte und achte Spalte.

Wir haben den größten Teil des CSS für dieses Beispiel ausgeblendet, aber wir zeigen Ihnen die Regeln, die Styles auf die `<col>`-Elemente mit den gesetzten Klassen `column-background`, `column-fixed-width` und `column-background-border` anwenden:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 10px 20px;
}

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- Die `<col>`-Elemente mit einer `column-background`-Klasse haben eine solide Hintergrundfarbe gesetzt.
- Die `<col>`-Elemente mit einer `column-fixed-width`-Klasse haben eine schmale feste Breite gesetzt.
- Das `<col>`-Element mit einer `column-background-border` Klasse hat eine feste Hintergrundfarbe und eine dicke Umrandung gesetzt.

Sie müssen sich jetzt keine Gedanken darüber machen, wie das CSS funktioniert; Sie werden es später ausführlich in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Modul lernen.

Schauen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Styles erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie ein HTML-Feature, daher haben wir sie hier aufgenommen und nicht in unseren CSS-Modulen. Es ist auch fair zu sagen, dass sie ein _begrenztes_ Feature sind — wie auf der Referenzseite [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann nur ein begrenzter Satz von Styles auf ein `<col>`-Element angewendet werden, und die meisten der anderen Einstellungen, die historisch verfügbar waren, wurden abgeschafft (entfernt oder für die Entfernung gekennzeichnet).

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir uns einige weitere Funktionen ansehen, die verwendet werden können, um HTML-Tabellen für sehbehinderte Personen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
