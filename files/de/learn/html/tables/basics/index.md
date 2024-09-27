---
title: Grundlagen von HTML-Tabellen
slug: Learn/HTML/Tables/Basics
l10n:
  sourceCommit: 7e0a11ac5698ffccb0c8fc883da3b345c417bebc
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Dieser Artikel führt Sie in die Welt der HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen einer Spalte zur Stilgestaltung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundkenntnisse in der Verwendung von HTML-Tabellen zu erwerben.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Ansammlung von Daten, die aus Zeilen und Spalten (**tabellarische Daten**) besteht. Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die auf irgendeine Art eine Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter, ein Wochentag oder der Stundenplan eines lokalen Schwimmbads.

![Eine Beispiel-Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan, der eine Beispieltabelle mit Daten zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es wird deutlich, dass eine Tabelle verwendet wird.](1800-census.jpg)

Es ist daher nicht verwunderlich, dass die Schöpfer von HTML eine Möglichkeit bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Sinn einer Tabelle liegt in ihrer Starrheit. Informationen werden leicht verständlich, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Sehen Sie sich zum Beispiel die untenstehende Tabelle an und finden Sie einen Jupitermond mit 62 Monden. Sie finden die Antwort, indem Sie die entsprechenden Zeilen- und Spaltenüberschriften in Relation setzen.

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

Bei korrekter Implementierung werden HTML-Tabellen von Barrierefreiheitswerkzeugen wie Screenreadern gut verarbeitet, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessert.

### Tabellenstilgestaltung

Sie können sich auch das [live Beispiel auf GitHub](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version bedeutenderes CSS angewendet hat.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie neben einer guten soliden Struktur mit HTML auch einige Stilinformationen mit [CSS](/de/docs/Learn/CSS) bereitstellen. In diesem Modul konzentrieren wir uns auf den HTML-Teil; um mehr über den CSS-Teil zu erfahren, sollten Sie sich nach Abschluss dieser Lektüre unseren Artikel [Tabellenstile](/de/docs/Learn/CSS/Building_blocks/Styling_tables) ansehen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Ihre Tabellen lesbarer macht als das Standarddesign ohne Stil. Das [Stylesheet finden Sie hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese zusammen geben Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie KEINE HTML-Tabellen verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — genau dafür sind sie konzipiert. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu layouten, z.B. eine Zeile für den Kopfbereich, eine Zeile für die Inhalts-Spalten, eine Zeile für den Fußbereich, etc. Sie finden weitere Details und ein Beispiel in [Seitenlayouts](/de/docs/Learn/Accessibility/HTML#page_layouts) in unserem [Barrierefreiheit Lernmodul](/de/docs/Learn/Accessibility). Dies war früher gängig, weil die Unterstützung von CSS in den Browsern sehr schlecht war; Tabellenlayouts sind heutzutage viel seltener, aber Sie könnten sie noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn/CSS/CSS_layout) ist keine gute Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Zugänglichkeit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers), die von Blinden verwendet werden, interpretieren die Tags, die auf einer HTML-Seite vorhanden sind und lesen dem Benutzer die Inhalte vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Screenreader für die Benutzer verwirrend sein.
2. **Tabellen erzeugen "Schlagwortsuppe"**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markupstrukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% des Elternelements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt bemessen, sodass zusätzliche Maßnahmen erforderlich sind, um eine Tabellenlayoutgestaltung für eine Vielzahl von Geräten effektiv umzusetzen.

## Aktives Lernen: Erstellen Sie Ihre erste Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lass uns in ein praktisches Beispiel eintauchen und eine einfache Tabelle erstellen.

1. Erstellen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Der Inhalt jeder Tabelle ist mit diesen beiden Tags umschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese innerhalb des Bodys Ihres HTML hinzu.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)** Element erstellt wird ('td' steht für 'Table Data'). Fügen Sie die folgenden Elemente in Ihren Tabellentags hinzu:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile von vier Zellen haben möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch in derselben Zeile ausgerichtet. Jedes `<td>` Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile weiterwächst und nachfolgende Zellen in einer zweiten Zeile platziert werden, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)** Element verwenden ('tr' steht für 'Table Row'). Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>` Tags, so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt, versuchen Sie eine oder zwei weitere zu machen — jede Zeile muss in ein zusätzliches `<tr>` Element eingewickelt werden, mit jeder Zelle in einem `<td>`.

### Ergebnis

Das sollte zu einer Tabelle führen, die ungefähr wie folgt aussieht:

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
> Sie können dies auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([siehe auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th> Elementen

Wenden wir uns nun den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (siehe zum Beispiel die "Person" und "Alter" Zellen im ersten in diesem Artikel gezeigten Beispiel). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass Sie zwar irgendwie erahnen können, was passiert, es ist jedoch nicht so einfach, Daten zu kreuzreferenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf irgendeine Weise hervorstünden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Versuchen wir, diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer Dateien [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem Computer. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)** Element verwenden ('th' steht für 'Table Header'). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle bezeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>` Elemente, die die Tabellenüberschriften umgeben, in `<th>` Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([siehe auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die Daten zu finden, die Sie suchen, wenn die Überschriften deutlich herausstehen, und das Design sieht insgesamt einfach besser aus.

> [!NOTE]
> Tabellenüberschriften haben ein gewisses Standardstyling — sie sind fettgedruckt und zentriert, auch wenn Sie der Tabelle keine eigene Stilgestaltung hinzufügen, um sie hervorzurufen.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope` Attribut (das wir im nächsten Artikel kennenlernen werden) ermöglichen sie es Ihnen, Tabellen durch die Zuordnung jeder Überschrift zu allen Daten in derselben Zeile oder Spalte zugänglicher zu machen. Screenreader sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal zu lesen, was ziemlich nützlich ist.

## Ermöglichen von Zellen das Spannen über mehrere Zeilen und Spalten

Manchmal möchten wir, dass Zellen sich über mehrere Zeilen oder Spalten erstrecken. Nehmen Sie das folgende einfache Beispiel, das die Namen gemeinsamer Tiere zeigt. In einigen Fällen wollen wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen soll der Tiername die ganze Tabelle umfassen.

Das anfängliche Markup sieht folgendermaßen aus:

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

Aber die Ausgabe liefert nicht ganz das, was wir wollen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir benötigen eine Möglichkeit, "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen, und "Pferd" und "Huhn" vertikal über zwei Zeilen zu erstrecken. Glücklicherweise haben Tabellenüberschriften und -zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen einheitslosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie erstrecken möchten. Zum Beispiel lässt `colspan="2"` eine Zelle über zwei Spalten spannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer Dateien [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem Computer. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu erstrecken.
3. Verwenden Sie schließlich `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu erstrecken.
4. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([siehe auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Gemeinsame Stilgestaltung für Spalten bereitstellen

### Stilgestaltung ohne \<col>

Es gibt noch eine letzte Funktion, von der wir Ihnen in diesem Artikel erzählen, bevor wir weitermachen. HTML bietet eine Möglichkeit, Stilinformati
