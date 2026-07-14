---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen von Tabellen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 1a7959d2e4bc929775e576278a66b00a124e8919
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in die Grundlagen von HTML-Tabellen ein, darunter Zeilen, Zellen, Überschriften, wie Zellen mehrere Spalten und Zeilen überspannen und wie alle Zellen in einer Spalte für Stilzwecke zusammengefasst werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie unter
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen da sind – zur Strukturierung von tabellarischen Daten.</li>
          <li>Wofür Tabellen nicht da sind – Layouts oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax – <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Übergreifen mehrerer Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Anordnung von Daten, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter oder ein Wochentag oder der Zeitplan für ein lokales Schwimmbad.

![Ein Beispiel einer Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan, der eine Beispiel-Daten-Tabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet, und das schon seit langer Zeit, wie durch dieses US-Census-Dokument von 1800 belegt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Sinn einer Tabelle liegt in ihrer Strukturiertheit. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Reihen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich zum Beispiel die Tabelle unten an und finden Sie einen Jupitermond mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Reihen- und Spaltenüberschriften zuordnen.

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

Wenn HTML-Tabellen korrekt implementiert sind, werden sie gut von Barrierefreiheits-Tools wie Bildschirmlesegeräten gehandhabt, sodass eine erfolgreiche HTML-Tabelle die Erfahrung von sehenden und sehbehinderten Nutzern gleichermaßen verbessert.

### Tabellengestaltung

Sie können sich auch das [Live-Beispiel der Planeten-Daten](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Ein Punkt, den Sie bemerken werden, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version bedeutendere CSS-Stile angewendet hat.

Unterliegen Sie keinem Missverständnis; damit Tabellen im Web effektiv sind, müssen Sie einige Stilinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; das Stylen von Tabellen werden Sie später in unserer Lektion [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) kennenlernen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer als das Standard-Layout ohne jegliche Stile zu machen. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese beiden zusammen bieten Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die sich leicht in Zeilen und Spalten darstellen lassen) — dafür sind sie ausgelegt. Leider wurden HTML-Tabellen in der Vergangenheit oft verwendet, um Webseiten zu gestalten, zum Beispiel eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhalts-Spalte, eine Zeile für den Fußbereich, usw. Diese Technik wurde früher verwendet, weil die Unterstützung für CSS in den verschiedenen Browsern sehr begrenzt war. Moderne Browser haben eine solide CSS-Unterstützung, sodass tabellenbasierte Layouts nicht mehr benötigt werden. Tabellenlayouts sind jetzt extrem selten, aber Sie könnten sie immer noch in einigen Bereichen des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts statt [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe dafür sind:

1. **Layout-Tabellen verringern die Zugänglichkeit für sehbehinderte Nutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite existieren, und lesen die Inhalte dem Nutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend sein.
2. **Tabellen erzeugen Code-Suppe**: Wie bereits erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als geeignete Layouttechniken. Dies kann zu einem schwieriger zu schreibenden, zu wartenden und zu debuggenden Code führen.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie geeignete Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), entspricht ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um ein effektives Tabellenlayout über eine Vielzahl von Geräten hinweg zu erreichen.

## Ihre erste Tabelle erstellen

Wir haben genug über Tabellen-Theorie gesprochen, also lassen Sie uns nun ein praktisches Beispiel durchgehen und Sie dazu bringen, eine einfache Tabelle zu erstellen.

1. Machen Sie zuerst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darüber keine Gedanken machen müssen.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese in den Body Ihres HTML-Dokuments ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ("td" steht für "table data"). Fügen Sie das Folgende innerhalb Ihrer Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen haben wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch in einer Zeile nebeneinander ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede weitere Zelle verlängert die Zeile.

Damit diese Zeile nicht länger wird und um nachfolgende Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element (steht für 'table row') verwenden. Lassen Sie uns das nun genauer untersuchen.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb der `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nachdem Sie eine Zeile erstellt haben, versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein weiteres `<tr>`-Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)) finden.

</details>

## Hinzufügen von Überschriften mit \<th> Elementen

Nun wenden wir uns Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel siehe die "Person" und "Alter" Zellen im ersten Beispiel, das in diesem Artikel gezeigt wurde). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zunächst der Quellcode:

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

Nun die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("table-headers", "", "250")}}

Das Problem hier ist, dass, obwohl Sie irgendwie herausfinden können, was vor sich geht, es nicht so einfach ist, Daten zu vergleichen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Jetzt möchten wir, dass Sie versuchen, das Hunde-Tabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zuerst eine lokale Kopie unserer Date {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, oder {{htmlelement("div")}}), ihre Breite entspricht standardmäßig 100% ihres Elternelements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um ein effektives Tabellenlayout über eine Vielzahl von Geräten hinweg zu erreichen.

## Ihre erste Tabelle erstellen

Wir haben genug über Tabellen-Theorie gesprochen, also lassen Sie uns nun ein praktisches Beispiel durchgehen und Sie dazu bringen, eine einfache Tabelle zu erstellen.

1. Machen Sie zuallererst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darüber keine Gedanken machen müssen.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese in den Body Ihres HTML-Dokuments ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ("td" steht für "table data"). Fügen Sie das Folgende innerhalb Ihrer Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen haben wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch in einer Zeile nebeneinander ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede weitere Zelle verlängert die Zeile.

Damit diese Zeile nicht länger wird und um nachfolgende Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element ('tr' steht für 'table row') verwenden. Lassen Sie uns das nun genauer untersuchen.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb der `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nachdem Sie eine Zeile erstellt haben, versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein weiteres `<tr>`-Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)) finden.

</details>

## Hinzufügen von Überschriften mit \<th> Elementen

Nun wenden wir uns Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel siehe die "Person" und "Alter" Zellen im ersten Beispiel, das in diesem Artikel gezeigt wurde). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zunächst der Quellcode:

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

Nun die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("table-headers", "", "250")}}

Das Problem hier ist, dass, obwohl Sie irgendwie herausfinden können, was vor sich geht, es nicht so einfach ist, Daten zu vergleichen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Jetzt möchten wir, dass Sie versuchen, das Hunde-Tabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element ("th" steht für "table header") verwenden. Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle angibt. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser. Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

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

Sie können diesen Code auch auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)) finden.

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die Daten zu finden, nach denen Sie suchen, wenn die Überschriften klar hervorgehoben sind, und das Design sieht insgesamt besser aus.

> [!NOTE]
> Tabellenüberschriften haben eine gewisse Standardformatierung – sie sind fett und zentriert, auch wenn Sie keinen eigenen Stil zur Tabelle hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden), ermöglichen sie es, Tabellen zugänglicher zu machen, indem Sie jede Überschrift mit allen Daten in derselben Zeile oder Spalte verbinden. Bildschirmlesegeräte sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Zulassen, dass Zellen mehrere Zeilen und Spalten überspannen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten umfassen. Nehmen Sie das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen möchten wir, dass der Tiername die gesamte Tabelle überspannt.

Das anfängliche Markup sieht folgendermaßen aus:

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

Aber die Ausgabe entspricht nicht ganz unseren Anforderungen:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Das Layout mit `rowspan` und `colspan` korrigieren

Wir brauchen eine Möglichkeit, "Tiere", "Flusspferd" und "Krokodil" über zwei Spalten zu spannen und "Pferd" und "Huhn" nach unten über zwei Zeilen zu spannen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die uns genau das ermöglichen. Beide akzeptieren einen zahlenlosen Wert, der der Anzahl der überlappenden Zeilen oder Spalten entspricht. Zum Beispiel macht `colspan="2"` eine Zelle über zwei Spalten.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, wie Sie es oben gesehen haben.
2. Verwenden Sie als nächstes `colspan`, um "Tiere", "Flusspferd" und "Krokodil" über zwei Spalten zu spannen.
3. Verwenden Sie abschließend `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

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

Sie können diesen Code auch auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)) finden.

</details>

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als eine einzelne Einheit zu behandeln, z. B. wenn Sie Stile auf eine Tabelle anwenden (die Sie später im [Tabellenstilkurs](/de/docs/Learn_web_development/Core/Styling_basics/Tables) kennen lernen). Wenn Sie mehr Erfahrung mit dem Erstellen von HTML-Tabellen sammeln, werden Sie feststellen, dass das Anwenden einer Hintergrundfarbe auf jede Zelle in einer einzelnen Spalte schwieriger ist als Sie vielleicht denken. Die {{htmlelement("colgroup")}} und {{htmlelement("col")}} Elemente bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als Kind der Tabelle unmittelbar nach dem öffnenden `<table>`-Element eingefügt werden. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente einschließen, die eine Gruppe von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Styles ansprechen möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript über einen Klassennamen ansprechen möchten) enthalten. Die `<col>`-Elemente repräsentieren die Tabellenspalten ab dem Beginn der Spalten, zum Beispiel ab der linken Seite einer Tabelle, die in einer von links nach rechts lesenden Sprache wie Englisch geschrieben ist.

Lassen Sie uns ein Beispiel ansehen, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Schulstundenplan:

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

In dieser Tabelle gibt es acht Spalten. Lassen Sie uns die `<colgroup>`- und `<col>`-Struktur genauer ansehen, um zu zeigen, wie sie sich auf sie auswirkt:

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

Beim Blick auf die `<col>`-Elemente:

- Das erste enthält `span="2"`, also repräsentiert es die erste _und_ zweite Spalte von links in der Tabelle. Wir zielen mit keinem Stil auf diese Spalten ab, aber wir müssen sie einfügen, damit wir die nachfolgenden Spalten ansprechen können.
- Das zweite und vierte haben kein `span`-Attribut, also repräsentieren sie jeweils eine Spalte — in diesen Fällen die dritte und fünfte. Sie haben eine `class` von `column-background` zugewiesen.
- Das dritte hat kein `span`-Attribut und eine `class` von `column-fixed-width` zugewiesen. Es repräsentiert die vierte Spalte.
- Das fünfte hat kein `span`-Attribut und eine `class` von `column-background-border` zugewiesen. Es repräsentiert die sechste Spalte.
- Das sechste enthält `span="2"` und eine `class` von `column-fixed-width`. Es repräsentiert die siebte und achte Spalte.

Wir haben den größten Teil des CSS für dieses Beispiel verborgen, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente mit den `column-background`, `column-fixed-width` und `column-background-border` Klassen anwenden:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200 200 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190 190 190);
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

- Die `<col>`-Elemente mit einer `column-background` Klasse haben eine feste Hintergrundfarbe.
- Die `<col>`-Elemente mit einer `column-fixed-width` Klasse haben eine schmale feste Breite.
- Das `<col>`-Element mit einer `column-background-border` Klasse hat eine feste Hintergrundfarbe und einen dicken Rahmen.

Sie müssen sich jetzt keine Gedanken darüber machen, wie das CSS funktioniert; Sie werden dies später ausführlich in unseren [Grundlagen der CSS-Stilisierung](/de/docs/Learn_web_development/Core/Styling_basics) Modulen lernen.

Sehen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Stile erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich die Stilgestaltung erleichtern, sind sie ein HTML-Feature, sodass wir sie hier abgedeckt haben, anstatt in unseren CSS-Modulen. Es ist auch fair zu sagen, dass sie ein _eingeschränktes_ Feature sind — wie auf der [`<colgroup>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann nur eine begrenzte Auswahl an Stilen auf ein `<col>`-Element angewendet werden, und die meisten der historisch verfügbaren Einstellungen wurden deprecated (entfernt oder zur Entfernung markiert).

## Interaktives Überprüfen der Tabellenkonzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion, die die meisten der in diesem Artikel behandelten Techniken zusammenfasst. Schauen Sie es sich an für eine Wiederholung der Hauptpunkte und ein bisschen extra Praxis.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></mdn-scrim-inline>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
