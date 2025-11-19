---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Stilzwecken.

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
          <li>Wofür Tabellen gedacht sind — Strukturierung tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>alles andere</em>.</li>
          <li>Grundsyntax der Tabelle — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturiertes Datenset, das aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Verbindung zwischen verschiedenen Datentypen aufzeigen, zum Beispiel eine Person und deren Alter, oder einen Wochentag, oder den Zeitplan für ein lokales Schwimmbad.

![Eine Mustertabelle zeigt Namen und Alter einiger Personen - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan, der eine Musterdatentabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon lange, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitgestellt haben, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle ist, dass sie starr ist. Informationen werden leicht verständlich, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Betrachten Sie die folgende Tabelle und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften zuordnen.

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

Wenn sie korrekt implementiert sind, werden HTML-Tabellen gut von Barrierefreiheitswerkzeugen wie Bildschirmlesegeräten behandelt, sodass eine erfolgreiche HTML-Tabelle sowohl das Erlebnis für sehende als auch für sehbeeinträchtigte Benutzer verbessert.

### Tabellenstile

Sie können sich auch das [Live-Beispiel der Planeten-Daten](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas besser lesbar aussieht — das liegt daran, dass die Tabelle, die Sie auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version mehr CSS-Stil enthält.

Seien Sie sich bewusst; damit Tabellen im Web effektiv sind, müssen Sie einige Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie erfahren später mehr über das Styling von Tabellen in unserer Lektion [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als die Standardeinstellung ohne Styling. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — beides zusammen gibt Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die sich leicht in Zeilen und Spalten verarbeiten lassen) — dafür sind sie konzipiert. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu gestalten, beispielsweise eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhalts-Spalte, eine Zeile für die Fußzeile usw. Diese Technik wurde in der Vergangenheit verwendet, weil die CSS-Unterstützung über verschiedene Browser hinweg weitaus eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, sodass auf Tabellen basierende Layouts nicht mehr benötigt werden. Tabellenlayouts sind heutzutage extrem selten, aber Sie könnten sie noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layout-Zwecke anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind folgende:

1. **Layout-Tabellen verringern die Zugänglichkeit für sehbeeinträchtigte Benutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen genutzt werden, interpretieren die Tags, die in einer HTML-Seite existieren, und lesen den Inhalt dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und die Markierung komplexer ist als mit CSS-Layout-Techniken, wird die Ausgabe der Bildschirmleser für deren Benutzer verwirrend sein.
2. **Tabellen erzeugen "Tag-Suppe"**: Wie oben erwähnt, beinhalten Tabellenlayouts allgemein komplexere Markup-Strukturen als richtige Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, oder {{htmlelement("div")}}), ist deren Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen sind standardmäßig entsprechend ihrem Inhalt dimensioniert, daher sind zusätzliche Maßnahmen erforderlich, um das Styling von Tabellenausgaben effektiv über eine Vielzahl von Geräten hinweg umzusetzen.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, daher lassen Sie uns ein praktisches Beispiel beginnen und Sie mit dem Aufbau einer einfachen Tabelle starten.

1. Machen Sie zuerst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element zur Anwendung von CSS auf das HTML, sodass Sie sich darüber keine Sorgen machen müssen.
2. Der Inhalt jeder Tabelle wird durch diese beiden Tags umschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des Körpers Ihres HTML-Dokuments hinzu.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element ("td" steht für "table data") erstellt wird. Fügen Sie Folgendes innerhalb Ihrer Tabellen-Tags hinzu:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen haben möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er so aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch nebeneinander in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, verlängert die Zeile.

Um zu verhindern, dass diese Zeile länger wird und um weitere Zellen in einer zweiten Reihe zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element verwenden ('tr' steht für 'table row'). Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Sie haben nun eine Zeile erstellt; versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in einem zusätzlichen `<tr>`-Element eingeschlossen sein, mit jeder Zelle in einem `<td>`.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sie sehen es auch live in Aktion](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Hinzufügen von Überschriften mit \<th> Elementen

Nun lassen Sie uns unsere Aufmerksamkeit auf Tabellenüberschriften richten — spezielle Zellen, die am Anfang einer Reihe oder Spalte stehen und den Datentyp definieren, den diese Reihe oder Spalte enthält (zum Beispiel die Zellen "Person" und "Alter" im ersten Beispiel, das in diesem Artikel gezeigt wurde). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zuerst der Quellcode:

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

Das Problem hier ist, dass man irgendwie verstehen kann, was vor sich geht, aber es ist nicht so einfach, Daten zu kreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften irgendwie hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Jetzt möchten wir, dass Sie versuchen, das Hundetabelle-Beispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Erstellen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)** Element verwenden ("th" steht für "table header"). Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift anzeigt und keine normale Zelle. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

Sie können diesen Code auch auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) finden ([sie sehen es auch live in Aktion](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gewünschten Daten zu finden, wenn die Überschriften klar hervorgehoben sind, und das Design sieht allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einem gewissen Standardstyling — sie sind fett und zentriert, selbst wenn Sie keinen eigenen Stil zur Tabelle hinzufügen, um ihnen zu helfen, herauszustechen.

Tabellenüberschriften bieten auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden) ermöglichen sie es, Tabellen zugänglicher zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Bildschirmlesegeräte können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen lassen

Manchmal möchten wir, dass Zellen sich über mehrere Zeilen oder Spalten erstrecken. Nehmen Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen möchten wir, dass der Tiername die ganze Tabelle übergreift.

Das ursprüngliche Markup sieht so aus:

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

### Die Anordnung mit `rowspan` und `colspan` korrigieren

Wir brauchen eine Möglichkeit, "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen und "Horse" und "Chicken" über zwei Zeilen hinunter zu spannen. Zum Glück haben Tabellenköpfe und Zellen die `colspan` und `rowspan` Attribute, die uns genau diese Dinge tun lassen. Beide akzeptieren einen wertlosen Zahlenwert, der der Anzahl der gewünschten Spannungen entspricht. Zum Beispiel macht `colspan="2"` eine Zelle, die sich über zwei Spalten erstreckt.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tier-Beispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

Sie können diesen Code auch auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) finden ([sie sehen es auch live in Aktion](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als eine einzelne Einheit anzusprechen, beispielsweise beim Anwenden von Stilen auf eine Tabelle (was Sie später in [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) erfahren werden). Mit zunehmender Erfahrung im Erstellen von HTML-Tabellen werden Sie feststellen, dass das Anwenden einer Hintergrundfarbe beispielsweise auf jede einzelne Zelle in einer einzigen Spalte schwieriger ist, als Sie vielleicht denken. Die {{htmlelement("colgroup")}} und {{htmlelement("col")}} Elemente bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als Kind der Tabelle direkt nach dem öffnenden `<table>`-Element eingefügt werden. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente einfügen, die Gruppen von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Stilen ansprechen möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript mithilfe eines Klassennamens ansprechen möchten) enthalten. Die `<col>`-Elemente repräsentieren die Tabellenspalten von Anfang an, zum Beispiel von der linken Seite einer in einer von links nach rechts geschriebenen Sprache wie Englisch geschriebenen Tabelle aus.

Lassen Sie uns ein Beispiel anschauen, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Stundenplan einer Schule:

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

In dieser Tabelle gibt es acht Spalten. Lassen Sie uns die `<colgroup>` und `<col>` Struktur genauer anschauen, um zu zeigen, wie sie diese beeinflusst:

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

Wenn wir auf die `<col>`-Elemente schauen:

- Das erste hat `span="2"` gesetzt, sodass es die erste _und_ zweite Spalte von links in der Tabelle darstellt. Wir zielen keine Stile auf diese Spalten ab, aber wir müssen sie einbeziehen, damit wir nachfolgende Spalten ansprechen können.
- Das zweite und vierte haben kein `span`-Attribut gesetzt, sodass sie eine einzelne Spalte darstellen — die dritte und fünfte Spalte in diesen Fällen. Sie haben eine `class` von `column-background` angewendet.
- Das dritte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es stellt die vierte Spalte dar.
- Das fünfte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-background-border` angewendet. Es stellt die sechste Spalte dar.
- Das sechste hat `span="2"` gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es stellt die siebte und achte Spalte dar.

Wir haben den größten Teil des CSS für dieses Beispiel ausgeblendet, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente mit den `column-background`, `column-fixed-width` und `column-background-border` Klassen anwenden:

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

- Die `<col>`-Elemente mit einer `column-background` Klasse haben eine solide Hintergrundfarbe gesetzt.
- Die `<col>`-Elemente mit einer `column-fixed-width` Klasse haben eine schmale feste Breite gesetzt.
- Das `<col>`-Element mit einer `column-background-border` Klasse hat eine solide Hintergrundfarbe und einen dicken Rand gesetzt.

Sie müssen sich jetzt keine Sorgen darüber machen, wie das CSS funktioniert; Sie werden es später in unserem [CSS-Stilgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Modul im Detail lernen.

Schauen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen spezifizierten Stile erhalten.

> [!NOTE]
> Obwohl `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie eine HTML-Funktion, daher haben wir sie hier behandelt und nicht in unseren CSS-Modulen. Es ist auch fair zu sagen, dass sie eine _begrenzte_ Funktion sind — wie auf der [`<colgroup>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt wird, kann nur eine begrenzte Anzahl von Stilen auf ein `<col>`-Element angewendet werden, und die meisten anderen Einstellungen, die historisch verfügbar waren, wurden abgelehnt (entfernt oder für die Entfernung gekennzeichnet).

## Zusammenfassung

Damit sind die Grundlagen der HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbeeinträchtigte Personen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
