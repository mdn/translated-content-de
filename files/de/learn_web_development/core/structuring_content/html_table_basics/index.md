---
title: Grundlagen von HTML-Tabellen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in die Grundlagen von HTML-Tabellen ein, einschließlich Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte für Stilzwecke.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a> behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen verwendet werden — Strukturierung von tabellarischen Daten.</li>
          <li>Wofür Tabellen nicht verwendet werden — Layout oder <em>sonst nichts</em>.</li>
          <li>Grundlegende Tabellensyntax — `<table>`, `<tr>` und `<td>`.</li>
          <li>Definieren von Tabellenüberschriften mit `<th>`.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit `colspan` und `rowspan`.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturierter Satz von Daten, bestehend aus Zeilen und Spalten (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte zu finden, die eine Art von Verbindung zwischen verschiedenen Datenarten anzeigen, beispielsweise eine Person und ihr Alter, ein Wochentag oder der Zeitplan für ein lokales Schwimmbad.

![Ein Beispiel für eine Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der menschlichen Gesellschaft verwendet und das schon seit langem, wie dieses US-Volkszählungsdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich die Verwendung einer Datentabelle.](1800-census.jpg)

Es ist also kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitgestellt haben, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Sinn einer Tabelle liegt in ihrer Starrheit. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich zum Beispiel die folgende Tabelle an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die entsprechenden Zeilen- und Spaltenüberschriften zuordnen.

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

Bei korrekter Implementierung werden HTML-Tabellen von Barrierefreiheitswerkzeugen wie Bildschirmlesern gut behandelt, sodass eine erfolgreiche HTML-Tabelle die Erfahrung sowohl für sehende als auch für sehbehinderte Nutzer verbessern sollte.

### Tabellenstile

Sie können sich auch das [Live-Beispiel auf GitHub](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) ansehen! Eines werden Sie bemerken: die Tabelle sieht dort etwas lesbarer aus – das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version mehr bedeutendes CSS angewendet hat.

Seien Sie sich darüber im Klaren; damit Tabellen im Web effektiv sind, müssen Sie einige Stilinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; über das Styling von Tabellen erfahren Sie später mehr in unserer Lektion [Stil von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Ihre Tabellen lesbarer machen wird als das, was Sie ohne jegliches Styling erhalten. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet – zusammen ergeben diese einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen NICHT verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden – dafür sind sie gedacht. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu layouten, z.B. eine Zeile für den Header, eine Zeile für die Inhalts-Spalten, eine Zeile für den Footer usw. Sie finden mehr Details und ein Beispiel in unseren [Seitenlayouts](/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts) in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn_web_development/Core/Accessibility). Dies war üblich, weil die CSS-Unterstützung über alle Browser hinweg früher schlecht war; Tabellenlayouts sind heute viel weniger verbreitet, aber Sie könnten sie immer noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind folgende:

1. **Layout-Tabellen reduzieren die Barrierefreiheit für sehbehinderte Nutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von Blinden verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen die Inhalte dem Nutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und die Auszeichnung komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser für ihre Nutzer verwirrend sein.
2. **Tabellen erzeugen „Tag-Suppe“**: Wie oben erwähnt, erfordern Tabellenlayouts in der Regel komplexere Auszeichnungstrukturen als ordnungsgemäße Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100 % ihres Elternelements. Tabellen hingegen werden standardmäßig entsprechend ihrem Inhalt dimensioniert, daher sind zusätzliche Maßnahmen erforderlich, um das Styling von Tabellendesigns effektiv über eine Vielzahl von Geräten hinweg zu gestalten.

## Aktives Lernen: Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellen gesprochen, lassen Sie uns also ein praktisches Beispiel untersuchen und eine einfache Tabelle erstellen.

1. Machen Sie zuerst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Der Inhalt jeder Tabelle wird durch diese beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese innerhalb des Body Ihres HTML-Dokuments hinzu.
3. Der kleinste Container in einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)** Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende in Ihre Tabellen-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, sind die Zellen nicht untereinander platziert, sondern werden automatisch auf derselben Zeile aneinander ausgerichtet. Jedes `<td>` Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile wächst und weitere Zellen in einer zweiten Zeile platziert werden, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)** Element verwenden ('tr' steht für 'table row'). Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>` Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Sobald Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen – jede Zeile muss in ein zusätzliches `<tr>` Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte zu einer Tabelle führen, die in etwa folgendermaßen aussieht:

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
> Sie können dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)) finden.

## Hinzufügen von Überschriften mit `<th>`-Elementen

Wenden wir uns nun den Tabellenüberschriften zu – speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel siehe die "Person"- und "Alter"-Zellen im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu verdeutlichen, warum sie nützlich sind, schauen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass, obwohl man irgendwie verstehen kann, was vor sich geht, es nicht so einfach ist, Daten zu kreuzreferenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf irgendeine Weise hervorgehoben wären, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Lassen Sie uns versuchen, diese Tabelle zu verbessern.

1. Machen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Computer. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)** Element verwenden ('th' steht für 'table header'). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift anzeigt, keine normale Zelle. Gehen Sie in Ihr HTML und ändern Sie alle `<td>` Elemente, die die Tabellenüberschriften umgeben, in `<th>` Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften klar hervorstechen, und das Design sieht einfach insgesamt besser aus.

> [!NOTE]
> Tabellenüberschriften haben eine gewisse Standard-Stilgebung – sie sind fett und zentriert, selbst wenn Sie Ihrem Tisch keine eigenen Stile hinzufügen, um ihnen beim Hervorheben zu helfen.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil – zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr erfahren werden), ermöglichen sie es, Tabellen zugänglicher zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Bildschirmleser können dann eine ganze Zeile oder Spalte an Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Erlauben von Zellen das Spannen über mehrere Zeilen und Spalten

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten spannen. Nehmen Sie das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen wollen wir, dass der Tiername die gesamte Tabelle überspannt.

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

Wir müssen einen Weg finden, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen, und "Pferd" und "Huhn" über zwei Zeilen nach unten zu spannen. Glücklicherweise haben Tabellenüberschriften und -zellen die Attribute `colspan` und `rowspan`, die es uns erlauben, genau das zu tun. Beide akzeptieren einen zahlenlosen Wert, der der Anzahl der zu spannenden Zeilen oder Spalten entspricht. Zum Beispiel macht `colspan="2"` eine Zelle, die über zwei Spalten spannt.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie zuerst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Computer. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie anschließend `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Das fasst die Grundlagen von HTML-Tabellen zusammen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
