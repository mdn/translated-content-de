---
title: HTML-Tabellen Grundlagen
short-title: Tabellen Grundlagen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt grundlegende Themen wie Zeilen, Zellen, Überschriften, das Erweitern von Zellen über mehrere Spalten und Zeilen hinweg sowie das Gruppieren aller Zellen in einer Spalte zu Styling-Zwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen da sind — Strukturierung von Tabellendaten.</li>
          <li>Wofür Tabellen nicht da sind — Layout oder <em>sonst etwas</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Erweitern über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Dateneinheit, die aus Zeilen und Spalten besteht (**Tabellendaten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte zu finden, die eine Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter, einen Wochentag oder den Zeitplan eines lokalen Schwimmbads.

![Ein Beispiel für eine Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan, der ein Beispiel für eine Datentabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig und schon seit langer Zeit verwendet, wie dieses US-Volkszählungsdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich, dass eine Datentabelle verwendet wird.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit schufen, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle ist, dass sie starr ist. Informationen werden durch die visuelle Zuordnung von Zeilen- und Spaltenüberschriften leicht interpretiert. Sehen Sie sich zum Beispiel die Tabelle unten an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften zuordnen.

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

Wenn HTML-Tabellen korrekt implementiert sind, werden sie von Barrierefreiheitswerkzeugen wie Bildschirmlesern gut gehandhabt, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Tabellenstil

Sie können sich die [Live-Planeten-Datenbeispiel](https://mdn.github.io/learning-area/html/tables/planets-data/) auf GitHub ansehen! Ihnen wird auffallen, dass die Tabelle dort etwas besser lesbar aussieht – das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während der GitHub-Version mehr CSS angewendet wurde.

Behalten Sie keine Illusion; damit Tabellen im Web effektiv sind, müssen Sie einige Stilinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen sowie eine solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie werden später mehr über das Styling von Tabellen in unserer Lektion [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) erfahren.

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als das Standard-Stylesheet, das Sie ohne jedes Styling erhalten. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet – diese beiden zusammen bieten Ihnen einen guten Ausgangspunkt für Experimente mit HTML-Tabellen.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die sich leicht in Zeilen und Spalten darstellen lassen) – dafür sind sie gedacht. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu layouten, zum Beispiel eine Zeile für einen Seitenheader, eine Zeile für jede Inhaltsseite, eine Zeile für den Fußzeilenbereich usw. Diese Technik wurde in der Vergangenheit verwendet, weil CSS-Unterstützung über verschiedene Browser hinweg früher viel eingeschränkter war. Moderne Browser unterstützen CSS zuverlässig, sodass tabellenbasierte Layouts nicht mehr benötigt werden. Tabellenbasierte Layouts sind heutzutage extrem selten, aber Sie könnten sie noch in einigen Ecken des Internets sehen.

Kurz gesagt, die Verwendung von Tabellen für das Layout anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe dafür sind:

1. **Layout-Tabellen verringern die Barrierefreiheit für sehbehinderte Nutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von Blinden genutzt werden, interpretieren die auf einer HTML-Seite vorhandenen Tags und lesen den Inhalt dem Nutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend.
2. **Tabellen produzieren Tag-Salat**: Wie oben erwähnt, erfordern Tabellenlayouts in der Regel komplexere Markup-Strukturen als richtige Layout-Techniken. Das kann dazu führen, dass der Code schwerer zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie geeignete Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen sind standardmäßig gemäß ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um ein effektives Tabellenlayout-Styling auf einer Vielzahl von Geräten zu erreichen.

## Erstellen Ihrer ersten Tabelle

Wir haben nun genug über Tabellen-Theorie gesprochen. Lassen Sie uns mit einem praktischen Beispiel beginnen und Sie beim Aufbau einer einfachen Tabelle unterstützen.

1. Erstellen Sie zunächst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darum nicht kümmern müssen.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des Body-Bereichs Ihres HTMLs hinzu.
3. Der kleinste Behälter innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element ("td" steht für "table data") erstellt wird. Fügen Sie Folgendes innerhalb Ihrer Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle wie folgt:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen, sind die Zellen nicht untereinander platziert, sondern werden automatisch nebeneinander in derselben Zeile ausgerichtet. Jedes `<td>`-Element erzeugt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, verlängert die Zeile.

Um zu verhindern, dass diese Zeile länger wird und um die nachfolgenden Zellen in einer zweiten Zeile zu platzieren, müssen wir das [`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)-Element verwenden ('tr' steht für 'table row'). Untersuchen wir dies jetzt.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt. Versuchen Sie, eine oder zwei weitere zu erstellen - jede Zeile muss in einem zusätzlichen `<tr>`-Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr endgültiges HTML sollte ungefähr so aussehen:

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

</details>

## Hinzufügen von Überschriften mit \<th>-Elementen

Lassen Sie uns nun unsere Aufmerksamkeit auf Tabellenüberschriften richten – spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (siehe als Beispiel die "Person"- und "Alter"-Zellen im ersten in diesem Artikel gezeigten Beispiel). Um zu veranschaulichen, warum sie nützlich sind, schauen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass, obwohl man irgendwie erkennen kann, was vor sich geht, es nicht so einfach ist, Daten zu kreuzreferenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf irgendeine Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Wir möchten nun, dass Sie versuchen, die Hundetabelle zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Erstellen Sie zunächst eine weitere Kopie unserer [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Fügen Sie den folgenden Code in das `<body>` Ihres HTMLs ein:

   ```html
   <h1>Dogs Table</h1>
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

3. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das [`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Element verwenden ("th" steht für "table header"). Dies funktioniert genau wie ein `<td>`, außer dass es keine normale Zelle, sondern eine Überschrift bezeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente um.
4. Speichern Sie Ihr HTML und laden Sie es in einem Browser. Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

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

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet – es ist einfacher, die Daten zu finden, die Sie suchen, wenn die Überschriften deutlich hervorstechen, und das Design sieht einfach besser aus.

> [!NOTE]
> Tabellenüberschriften verfügen über eine gewisse Standardformatierung – sie sind fett und zentriert, selbst wenn Sie keine eigene Formatierung zur Tabelle hinzufügen, um ihnen zu helfen, hervorzustechen.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil – zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr erfahren werden) ermöglichen sie es Ihnen, Tabellen zugänglicher zu machen, indem jede Überschrift allen Daten in derselben Zeile oder Spalte zugeordnet wird. Bildschirmleser sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Mehrere Zeilen und Spalten mit Zellen überspannen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten überspannen. Nehmen Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal tun wir das nicht, und in solchen Fällen möchten wir, dass der Tiername die gesamte Tabelle überspannt.

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

Aber die Ausgabe ergibt nicht ganz das, was wir wollen:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Layout mit `rowspan` und `colspan` fixieren

Wir brauchen einen Weg, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten hinweg zu erweitern und "Horse" und "Chicken" nach unten über zwei Zeilen hinweg zu erweitern. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen wertlosen Zahlenwert, der der Anzahl von Zeilen oder Spalten entspricht, die Sie überspannen möchten. Zum Beispiel macht `colspan="2"` eine Zelle, die über zwei Spalten reicht.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie eine weitere lokale Kopie unserer [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Fügen Sie Folgendes in Ihren HTML-`<body>` ein:

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

3. Verwenden Sie als nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu erweitern.
4. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen hinweg zu erweitern.
5. Speichern Sie und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

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

</details>

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, gesamte Tabellenspalten als eine einzelne Einheit anzusprechen, zum Beispiel beim Anwenden von Stilen auf eine Tabelle (was Sie später in [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) lernen werden). Wenn Sie mehr Erfahrung mit dem Erstellen von HTML-Tabellen sammeln, werden Sie feststellen, dass es schwerer ist, zum Beispiel eine Hintergrundfarbe auf jede Zelle in einer einzelnen Spalte anzuwenden, als Sie vielleicht denken. Die {{htmlelement("colgroup")}} und {{htmlelement("col")}} Elemente bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als Kind der Tabelle unmittelbar nach dem öffnenden `<table>`-Element enthalten sein. Innerhalb des `<colgroup>`-Elements können Sie eines oder mehrere `<col>`-Elemente einschließen, die Gruppen von Spalten darstellen. Ein `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Stilen ansprechen möchten) oder `class` (wenn Sie die Gruppe mithilfe eines Klassennamens mit CSS oder JavaScript ansprechen möchten) beinhalten. Die `<col>`-Elemente repräsentieren die Tabellenspalten von Anfang der Spalten aus gesehen, zum Beispiel von der linken Seite einer Tabelle, die in einer von links nach rechts gelesenen Sprache wie Englisch geschrieben ist.

Schauen wir uns ein Beispiel an, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Stundenplan:

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

In dieser Tabelle gibt es acht Spalten. Sehen wir uns die `<colgroup>`- und `<col>`-Struktur genauer an, um zu zeigen, wie sie darauf einwirkt:

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

Betrachten wir die `<col>`-Elemente:

- Das erste hat `span="2"` gesetzt, daher repräsentiert es die erste _und_ zweite Spalte von links der Tabelle. Wir zielen mit diesen Spalten keine Stile an, aber wir müssen es einschließen, damit wir nachfolgende Spalten ansprechen können.
- Das zweite und vierte haben kein `span`-Attribut gesetzt, daher repräsentieren sie eine einzelne Spalte – in diesen Fällen die dritte und fünfte Spalte. Sie haben eine `class` von `column-background` angewendet.
- Das dritte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die vierte Spalte.
- Das fünfte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-background-border` angewendet. Es repräsentiert die sechste Spalte.
- Das sechste hat `span="2"` gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die siebte und achte Spalte.

Wir haben den größten Teil des CSS für dieses Beispiel ausgeblendet, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente mit den `column-background`, `column-fixed-width`, und `column-background-border` Klassen anwenden:

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

- Die `<col>`-Elemente mit einer Klasse `column-background` haben eine feste Hintergrundfarbe darauf angewendet.
- Die `<col>`-Elemente mit einer Klasse `column-fixed-width` haben eine schmal feste Breite darauf angewendet.
- Das `<col>`-Element mit einer Klasse `column-background-border` hat eine feste Hintergrundfarbe und eine dicke Umrandung darauf angewendet.

Sie müssen sich derzeit keine Gedanken darüber machen, wie das CSS funktioniert; Sie werden es später in unserem [CSS-Grundlagen Styling](/de/docs/Learn_web_development/Core/Styling_basics) Modul im Detail lernen.

Lassen Sie uns sehen, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Stile erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie ein HTML-Feature, daher haben wir sie hier behandelt und nicht in unseren CSS-Modulen. Es ist auch fair zu sagen, dass sie ein _begrenztes_ Feature sind – wie auf der [`<colgroup>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann nur ein eingeschränkter Satz von Stilen auf ein `<col>`-Element angewendet werden, und die meisten anderen Einstellungen, die historisch verfügbar waren, wurden abgelehnt (entfernt oder für die Entfernung vorgesehen).

## Interaktive Zusammenfassung der Tabellenkonzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN-Partner für Lerninhalte_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion, die die meisten der in diesem Artikel behandelten Techniken zusammenfasst. Schauen Sie sich die Punkte und das zusätzliche Übungsmaterial zur Zusammenfassung der wichtigsten Punkte an.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></mdn-scrim-inline>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir uns weitere Funktionen ansehen, mit denen HTML-Tabellen für sehbehinderte Menschen zugänglicher gemacht werden können.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
