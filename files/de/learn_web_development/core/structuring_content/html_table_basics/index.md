---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die grundlegenden Themen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Styling-Zwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"> Grundlegende HTML-Syntax</a>
        behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen da sind — zur Strukturierung tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht da sind — Layouts oder <em>alles andere</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturierter Datensatz, der aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, beispielsweise eine Person und ihr Alter, ein Wochentag oder der Stundenplan für ein lokales Schwimmbad.

![Ein Beispiel für eine Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan, der eine Beispieltabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der menschlichen Gesellschaft verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit zur Strukturierung und Präsentation tabellarischer Daten im Web vorgesehen haben.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle ist, dass sie starr ist. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften erstellt werden. Betrachten Sie zum Beispiel die untenstehende Tabelle und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften verknüpfen.

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

Wenn sie korrekt implementiert werden, werden HTML-Tabellen von Barrierefreiheits-Tools wie Screenreadern gut verarbeitet, sodass eine erfolgreiche HTML-Tabelle das Benutzererlebnis sowohl für sehende als auch visuell beeinträchtigte Nutzer verbessern sollte.

### Styling von Tabellen

Sie können sich auch das [Live-Beispiel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eines fällt Ihnen dabei auf: Die Tabelle sieht dort etwas lesbarer aus — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, nur minimal gestylt ist, während die GitHub-Version mit bedeutenderem CSS ausgestattet wurde.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; mehr über das Styling von Tabellen erfahren Sie später, in unserer Lektion [Styling tables](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als das Standard-Layout ohne jegliches Styling. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese zusammen bieten Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollte man HTML-Tabellen NICHT verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — dafür sind sie gedacht. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu layouten, z.B. eine Zeile, um die Kopfzeile zu enthalten, eine Zeile, um die Inhaltskolumnen zu enthalten, eine Zeile, um die Fußzeile zu enthalten, etc. Mehr Details und ein Beispiel finden Sie bei [Page Layouts](/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts) in unserem [Accessibility Learning Module](/de/docs/Learn_web_development/Core/Accessibility). Dies wurde häufig verwendet, weil die Unterstützung von CSS in allen Browsern früher sehr schlecht war; Tabellenlayouts sind heutzutage viel weniger verbreitet, aber Sie könnten sie immer noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist keine gute Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Barrierefreiheit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Personen verwendet werden, interpretieren die in einer HTML-Seite vorhandenen Tags und lesen den Inhalt dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Screenreader für deren Benutzer verwirrend sein.
2. **Tabellen produzieren "Tag-Suppe"**: Wie bereits erwähnt, beinhalten Tabellendesigns im Allgemeinen komplexere Markup-Strukturen als ordnungsgemäße Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}) verwenden, ist deren Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um die Tabellenlayoutgestaltung effektiv für verschiedene Geräte nutzbar zu machen.

## Aktives Lernen: Erstellen Ihrer ersten Tabelle

Wir haben genug Theorie zur Tabelle besprochen, also tauchen wir in ein praktisches Beispiel ein und bauen eine einfache Tabelle auf.

1. Erstellen Sie zuerst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese in den Body Ihres HTML ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element ('td' steht für 'table data') erstellt wird. Fügen Sie das Folgende in Ihre Tabellen-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile aus vier Zellen haben möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalts Ihrer Tabelle so, dass sie wie folgt aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen, werden die Zellen nicht untereinander platziert, sondern sie sind automatisch auf derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um zu verhindern, dass diese Zeile weiter wächst, und um anschließend Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element ('tr' steht für 'table row') verwenden. Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nachdem Sie eine Zeile erstellt haben, versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingebunden werden, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte in einer Tabelle resultieren, die ungefähr wie folgt aussieht:

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
> Diese können Sie auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie sie auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Wenden wir uns nun den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (siehe zum Beispiel die Zellen "Person" und "Alter" im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu veranschaulichen, warum sie nützlich sind, schauen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass man zwar so ungefähr erkennen kann, was los ist, es aber nicht so einfach ist, die Daten zu überkreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften irgendwie auffällig wären, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Verbessern wir diese Tabelle.

1. Erstellen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element ('th' steht für 'table header') verwenden. Dies funktioniert genauso wie ein `<td>`, außer dass es eine Kopfzeile und keine normale Zelle anzeigt. Ändern Sie in Ihrem HTML alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Unser fertiges Beispiel finden Sie auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften deutlich hervorstechen, und das Design sieht allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften haben ein Standard-Styling — sie sind fett und zentriert, auch wenn Sie kein eigenes Styling der Tabelle hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften bieten auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (auf das wir im nächsten Artikel eingehen werden) ermöglichen sie es Ihnen, Tabellen barrierefreier zu gestalten, indem jede Überschrift mit allen Daten in der gleichen Zeile oder Spalte verknüpft wird. Screenreader können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zulassen, dass Zellen mehrere Zeilen und Spalten umfassen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten umfassen. Nehmen Sie das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen zeigen. Manchmal nicht, und in solchen Fällen wollen wir, dass der Tiername die ganze Tabelle überspannt.

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

Aber die Ausgabe gibt uns nicht ganz das, was wir wollen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen und "Pferd" und "Huhn" über zwei Zeilen nach unten. Zum Glück haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau diese Dinge zu tun. Beide akzeptieren einen einheitlichen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie überspannen möchten. Zum Beispiel, `colspan="2"` lässt eine Zelle zwei Spalten umfassen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zuerst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tiervorbild, das Sie oben gesehen haben.
2. Verwenden Sie dann `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen.
3. Schließlich verwenden Sie `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Unser fertiges Beispiel finden Sie auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
