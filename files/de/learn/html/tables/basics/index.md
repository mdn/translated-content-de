---
title: Grundlagen von HTML-Tabellen
slug: Learn/HTML/Tables/Basics
l10n:
  sourceCommit: 7e0a11ac5698ffccb0c8fc883da3b345c417bebc
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Dieser Artikel bringt Sie mit HTML-Tabellen auf den Weg und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen und wie man alle Zellen in einer Spalte für Stylingzwecke gruppiert.

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
      <td>Grundlegende Vertrautheit mit HTML-Tabellen erlangen.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Menge von Daten, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die irgendeine Art von Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter oder ein Wochentag oder der Zeitplan für ein örtliches Schwimmbad.

![Eine Beispiel-Tabelle mit Namen und Alter einiger Personen - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan mit einer Beispiel-Datentabelle](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, zeigen aber eindeutig eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML ein Mittel bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle besteht darin, dass sie starr ist. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich zum Beispiel die folgende Tabelle an und finden Sie einen jupiterähnlichen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften zuordnen.

```html hidden
<table>
  ...
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

Wenn HTML-Tabellen korrekt implementiert werden, werden sie von Barrierefreiheitswerkzeugen wie Bildschirmlesern gut behandelt, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Styling von Tabellen

Sie können sich auch das [Live-Beispiel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die hier auf dieser Seite angezeigte Tabelle ein minimales Styling aufweist, während die GitHub-Version mehr CSS angewendet hat.

Für effektive Tabellen im Web müssen Sie Stylinginformationen mit [CSS](/de/docs/Learn/CSS) bereitstellen, ebenso wie eine solide Struktur mit HTML. In diesem Modul konzentrieren wir uns auf den HTML-Teil; um mehr über den CSS-Teil zu erfahren, sollten Sie nach Abschluss dieses Artikels unseren Artikel zu [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) besuchen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als den Standard, den Sie ohne Styling erhalten. Sie können das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) finden und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — diese zusammen bieten Ihnen einen guten Ausgangspunkt für das Experimentieren mit HTML-Tabellen.

### Wann sollten Sie KEINE HTML-Tabellen verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — dafür sind sie gedacht. Leider haben viele Menschen früher HTML-Tabellen genutzt, um Webseiten zu layouten, z.B. eine Zeile, um den Header zu enthalten, eine Zeile, um die Inhaltsbereiche zu enthalten, eine Zeile, um den Footer zu enthalten usw. Weitere Details und ein Beispiel finden Sie unter [Seitenlayouts](/de/docs/Learn/Accessibility/HTML#page_layouts) in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn/Accessibility). Dies wurde häufig verwendet, weil die CSS-Unterstützung über verschiedene Browser hinweg früher schrecklich war; Tabellenlayouts sind heutzutage viel seltener, aber man könnte sie immer noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für das Layout anstelle von [CSS-Layouttechniken](/de/docs/Learn/CSS/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Zugänglichkeit für sehbehinderte Benutzer**: [Bildschirmleser](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen den Inhalt dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layout-Container wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}} verwenden, beträgt ihre Breite standardmäßig 100% ihres übergeordneten Elements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, damit Tabellenlayout-Styles effektiv über eine Vielzahl von Geräten funktionieren.

## Aktives Lernen: Erstellen Ihrer ersten Tabelle

Wir haben genügend Tabellentheorie besprochen, lassen Sie uns nun ein praktisches Beispiel angehen und eine einfache Tabelle erstellen.

1. Machen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle wird von diesen zwei Tags umfasst: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese in den Körper Ihres HTML-Dokuments ein.
3. Der kleinste Container in einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element erzeugt wird (‚td‘ steht für 'tabellendaten'). Fügen Sie folgendes innerhalb Ihrer Tabelle ein:

   ```html
   <td>Hallo, ich bin Ihre erste Zelle.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er folgendermaßen aussieht:

   ```html
   <td>Hallo, ich bin Ihre erste Zelle.</td>
   <td>Ich bin Ihre zweite Zelle.</td>
   <td>Ich bin Ihre dritte Zelle.</td>
   <td>Ich bin Ihre vierte Zelle.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile länger wird und um die nachfolgenden Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element ('tr' steht für 'Tabellenzeile') verwenden. Lassen Sie uns dies jetzt untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hallo, ich bin Ihre erste Zelle.</td>
     <td>Ich bin Ihre zweite Zelle.</td>
     <td>Ich bin Ihre dritte Zelle.</td>
     <td>Ich bin Ihre vierte Zelle.</td>
   </tr>
   ```

2. Jetzt, da Sie eine Zeile erstellt haben, versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingewickelt werden, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte zu einer Tabelle führen, die in etwa so aussieht:

```html hidden
<table>
  <tr>
    <td>Hallo, ich bin Ihre erste Zelle.</td>
    <td>Ich bin Ihre zweite Zelle.</td>
    <td>Ich bin Ihre dritte Zelle.</td>
    <td>Ich bin Ihre vierte Zelle.</td>
  </tr>

  <tr>
    <td>Zweite Zeile, erste Zelle.</td>
    <td>Zelle 2.</td>
    <td>Zelle 3.</td>
    <td>Zelle 4.</td>
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

Nun wenden wir uns den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (siehe zum Beispiel die Zellen „Person“ und „Alter“ im ersten Beispiel in diesem Artikel). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellenbeispiel an. Zunächst der Quellcode:

```html
<table>
  ...
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

Das Problem hier ist, dass, obwohl Sie irgendwie verstehen können, was los ist, es nicht so einfach ist, Daten zu vergleichbar machen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorstechen würden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Versuchen wir, diese Tabelle zu verbessern.

1. Machen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hunde-Beispiel, wie Sie es oben gesehen haben.
2. Um die Tabellenüberschriften als Überschriften zu erkennen, sowohl visuell als auch semantisch, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element ('th' steht für 'Tischüberschrift') verwenden. Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle bezeichnet. Ändern Sie in Ihrem HTML alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel auf [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften klar erkennbar sind, und das Design sieht allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften erhalten einige Standardstylings — sie sind fett und zentriert, auch wenn Sie Ihrer Tabelle kein eigenes Styling hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen weiteren Vorteil — zusammen mit dem `scope`-Attribut (welches wir im nächsten Artikel kennenlernen werden), ermöglichen Sie es Ihnen, Tabellen besser zugänglich zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verbunden wird. Bildschirmlesegeräte können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen lassen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten umfassen. Nehmen wir das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben den Tiernamen anzeigen. Manchmal möchten wir das nicht und in solchen Fällen möchten wir, dass der Tiername die gesamte Tabelle überspannt.

Das anfängliche Markup sieht folgendermaßen aus:

```html
<table>
  <tr>
    <th>Tiere</th>
  </tr>
  ...
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

Wir brauchen eine Möglichkeit, „Tiere“, „Nilpferd“ und „Krokodil“ über zwei Spalten zu spannen und „Pferd“ und „Huhn“ vertikal über zwei Zeilen zu spannen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau diese Dinge zu tun. Beide akzeptieren einen wertlosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie spannen möchten. Zum Beispiel macht `colspan="2"` eine Zelle, die zwei Spalten umfasst.

Verwenden wir `colspan` und `rowspan`, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tier-Beispiel, wie Sie es oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um „Tiere“, „Nilpferd“ und „Krokodil“ über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um „Pferd“ und „Huhn“ über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel auf [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Gemeinsames Styling für Spalten bereitstellen

### Styling ohne \<col>

Es gibt noch eine letzte Funktion, über die wir in diesem Artikel berichten, bevor wir fortfahren. HTML verfügt über eine Methode, um Stylinginformationen für eine ganze Spalte von Daten an einem Ort zu definieren — die **[`<col>`](/de/docs/Web/HTML/Element/col)** und **[`<colgroup>`](/de/docs/Web/HTML/Element/colgroup)**-Elemente. Diese existieren, weil es ein wenig nervig und ineffizient sein kann, das Styling auf Spalten festzulegen — im Allgemeinen muss man sein Stylinginformationen auf _jede_ `<td>` oder `<th>` in der Spalte festlegen, oder einen komplexen Selektor wie {{cssxref(":nth-child")}} verwenden.

> [!NOTE]
> Das Styling von Spalten wie diesem [ist auf einige wenige Eigenschaften beschränkt](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](/de/docs/Web/CSS/border), [`background`](/de/docs/Web/CSS/background), [`width`](/de/docs/Web/CSS/width), und [`visibility`](/de/docs/Web/CSS/visibility). Um andere Eigenschaften einzustellen, müssen Sie entweder jede `<td>` oder `<th>` in der Spalte stylen oder einen komplexen Selektor wie {{cssxref(":nth-child")}} verwenden.

Nehmen wir folgendes einfaches Beispiel:

```html
<table>
  <tr>
    <th>Daten 1</th>
    <th style="background-color: yellow">Daten 2</th>
  </tr>
  ...
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

Was uns folgendes Ergebnis liefert:

{{EmbedLiveSample("Styling_without_col", "", "200")}}

Dies ist nicht ideal, da wir die Stylinginformationen in allen drei Zellen der Spalte wiederholen müssen (in einem echten Projekt würden wir wahrscheinlich eine `class` auf alle drei setzen und das Styling in einem separaten Stylesheet festlegen).

### Styling mit \<col>

Stattdessen können wir die Informationen einmal auf einem `<col>`-Element angeben. `<col>`-Elemente werden innerhalb eines `<colgroup>`-Containers direkt unter dem öffnenden `<table>`-Tag angegeben. Wir könnten denselben Effekt wie oben sehen, indem wir unsere Tabelle folgendermaßen angeben:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Daten 1</th>
    <th>Daten 2</th>
  </tr>
  ...
</table>
```

Wir definieren im Wesentlichen zwei "Style-Spalten", eine Angabe von Stylinginformationen für jede Spalte. Wir stylen die erste Spalte nicht, müssen aber trotzdem ein leeres `<col>`-Element einfügen — wenn wir das nicht tun, wird das Styling einfach auf die erste Spalte angewendet.

Wenn wir die Stylinginformationen auf beide Spalten anwenden wollten, könnten wir einfach ein `<col>`-Element mit einem `span`-Attribut angeben, so:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Genau wie `colspan` und `rowspan` nimmt `span` einen wertlosen Zahlenwert an, der die Anzahl der Spalten angibt, auf die das Styling angewendet werden soll.

> [!NOTE]
> Wenn die Tabelle, eine Spalte und Tabellenspalten in dieser Spalte alle separat gestylt sind, wird das Styling, das auf die Zellen angewendet wird, auf die Spaltenstyles gemalt, die auf die Tabelle gemalt werden. Das liegt daran, dass die Tabellenebene zuerst gerendert wird, dann die Ebene der Spalten, mit der [Ebene der Zellen, die auf alle anderen Tabellebenen gemalt wird](/de/docs/Web/HTML/Element/table#table_layers_and_transparency).

### Aktives Lernen: colgroup und col

Jetzt ist es Zeit, es selbst zu versuchen.

Unten sehen Sie den Stundenplan einer Sprachlehrerin. Am Freitag hat sie einen neuen Kurs, in dem sie den ganzen Tag Niederländisch unterrichtet, aber sie unterrichtet auch Deutsch an einigen Stunden dienstags und donnerstags. Sie möchte die Spalten mit den Tagen hervorheben, an denen sie unterrichtet.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 350)}}

Reproduzieren Sie die Tabelle, indem Sie die folgenden Schritte ausführen.

1. Machen Sie zunächst eine lokale Kopie unserer [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html) Datei in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält die gleiche Tabelle, die Sie oben gesehen haben, minus der Spaltenstyling-Informationen.
2. Fügen Sie ein `<colgroup>`-Element oben in die Tabelle ein, direkt unterhalb des `<table>`-Tags, in dem Sie Ihre `<col>`-Elemente hinzufügen können (siehe die folgenden Schritte unten).
3. Die ersten beiden Spalten müssen ungestylt bleiben.
4. Fügen Sie eine Hintergrundfarbe zur dritten Spalte hinzu. Der Wert für Ihr `style`-Attribut ist `background-color:#97DB9A;`
5. Setzen Sie eine separate Breite auf die vierte Spalte. Der Wert für Ihr `style`-Attribut ist `width: 100px;`
6. Fügen Sie eine Hintergrundfarbe zur fünften Spalte hinzu. Der Wert für Ihr `style`-Attribut ist `background-color: #97DB9A;`
7. Fügen Sie eine andere Hintergrundfarbe plus eine Grenze zur sechsten Spalte hinzu, um anzuzeigen, dass dies ein spezieller Tag ist und sie eine neue Klasse unterrichtet. Die Werte für Ihr `style`-Attribut sind `background-color:#DCC48E; border:4px solid #C1437A;`
8. Die letzten beiden Tage sind freie Tage, also setzen Sie sie nur auf keine Hintergrundfarbe, aber eine festgelegte Breite; der Wert für das `style`-Attribut ist `width: 100px;`

Sie ausprobieren das Beispiel. Wenn Sie stecken bleiben oder Ihre Arbeit überprüfen möchten, können Sie unsere Version auf GitHub unter [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html)).

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen so ziemlich zusammengefasst. Im nächsten Artikel werden wir uns einige etwas [fortgeschrittene Tabellenfunktionen](/de/docs/Learn/HTML/Tables/Advanced) ansehen und beginnen zu überlegen, wie sie für sehbehinderte Menschen zugänglich gemacht werden können.

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
