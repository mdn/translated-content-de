---
title: "HTML-Tabellen: Erweiterte Funktionen und Barrierefreiheit"
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Im zweiten Artikel dieses Moduls betrachten wir einige fortgeschrittene Funktionen von HTML-Tabellen – wie z.B. Beschriftungen/Zusammenfassungen und die Gruppierung Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle – sowie die Barrierefreiheit von Tabellen für sehbehinderte Benutzer.

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
      <td>
        Das Erlernen fortgeschrittener Funktionen von HTML-Tabellen und der Barrierefreiheit von Tabellen.
      </td>
    </tr>
  </tbody>
</table>

## Eine Beschriftung mit \<caption> zu Ihrer Tabelle hinzufügen

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unterhalb des öffnenden `<table>`-Tags platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel entnehmen können, soll die Beschriftung eine Beschreibung der Tabelleninhalte enthalten. Dies ist für alle Leser nützlich, die schnell eine Vorstellung davon bekommen möchten, ob die Tabelle für sie nützlich ist, insbesondere aber für blinde Benutzer. Anstatt dass ein Screenreader die Inhalte vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann der Benutzer auf eine Beschriftung vertrauen und dann entscheiden, ob er die Tabelle genauer lesen möchte.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen – diese wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Eine Beschriftung hinzufügen

Probieren wir dies aus und gehen zu einem Beispiel zurück, dem wir bereits im vorherigen Artikel begegnet sind.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers vom Ende von [HTML-Tabellengrundlagen](/de/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col), oder machen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine passende Beschriftung für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden – siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur mit \<thead>, \<tbody> und \<tfoot> hinzufügen

Wenn Ihre Tabellen etwas komplexer werden, ist es sinnvoll, ihnen mehr strukturelle Definition zu geben. Ein klarer Weg, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu kennzeichnen.

Diese Elemente machen die Tabelle für Screenreader-Benutzer nicht zugänglicher und ergeben alleine keine visuelle Verbesserung. Sie sind jedoch sehr nützlich für Styling und Layout — sie dienen als nützliche Anker für das Hinzufügen von CSS zu Ihrer Tabelle. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und die Inhalte durch Hochschieben und Herunterscrollen zugänglich machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der die Kopfzeile ist – normalerweise die erste Zeile mit den Spaltenüberschriften, dies ist jedoch nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen liegen.
- Das `<tbody>`-Element muss den Hauptteil der Tabelleninhalte umschließen, die nicht Kopfzeile oder Fußzeile sind.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der die Fußzeile ist – dies könnte beispielsweise eine letzte Zeile mit addierten Elementen aus den vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` ist in jeder Tabelle stets enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und schauen Sie sich den HTML-Code in Ihren [Browser-Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) an – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie sich die Mühe machen sollten, es überhaupt einzufügen – Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und das Styling gibt.

### Aktives Lernen: Tabellenstruktur hinzufügen

Lassen Sie uns diese neuen Elemente in Aktion setzen.

1. Machen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, sie in einem Browser zu öffnen – Sie werden sehen, dass sie in Ordnung aussieht, aber verbessert werden könnte. Die "SUM"-Zeile, die eine Summe der ausgegebenen Beträge enthält, scheint an der falschen Stelle zu sein, und einige Details fehlen im Code.
3. Setzen Sie die offensichtliche Überschriftenzeile innerhalb eines `<thead>`-Elements, die "SUM"-Zeile innerhalb eines `<tfoot>`-Elements und den Rest des Inhalts innerhalb eines `<tbody>`-Elements.
4. Speichern und aktualisieren Sie, und Sie werden sehen, dass das Hinzufügen des `<tfoot>`-Elements dazu geführt hat, dass die "SUM"-Zeile nach unten an das Ende der Tabelle verschoben wurde.
5. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl am unteren Rand der "Cost"-Spalte erscheint.
6. Fügen Sie etwas einfaches zusätzliches Styling zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Innerhalb des Kopfbereichs Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie innerhalb dieses Elements die folgenden Zeilen von CSS-Code hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Speichern und aktualisieren Sie, und werfen Sie einen Blick auf das Ergebnis. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([Einführung in CSS](/de/docs/Learn/CSS/First_steps) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell zum [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)).

Ihre fertige Tabelle sollte ungefähr so aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können sie auch auf GitHub finden als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Verschachtelte Tabellen

Es ist möglich, eine Tabelle innerhalb einer anderen zu verschachteln, solange Sie die vollständige Struktur, einschließlich des `<table>`-Elements, einfügen. Dies wird im Allgemeinen nicht empfohlen, da es das Markup verwirrender und weniger zugänglich für Screenreader-Benutzer macht und in vielen Fällen genauso gut zusätzliche Zellen/Zeilen/Spalten in die bestehende Tabelle eingefügt werden könnten. Manchmal ist es jedoch notwendig, beispielsweise wenn Sie Inhalte aus anderen Quellen einfach importieren möchten.

Das folgende Markup zeigt eine einfache verschachtelte Tabelle:

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

Das Ergebnis sieht in etwa so aus:

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

{{EmbedLiveSample("Nesting_Tables")}}

## Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz darauf zurückkommen, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns zu ermöglichen, verschiedene Werte nachzuschlagen. Beispielsweise benötigt es nur einen kurzen Blick auf die nachstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Verkaufte Artikel im August 2016</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Kleidung</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    <tr>
      <th scope="col">Hosen</th>
      <th scope="col">Röcke</th>
      <th scope="col">Kleider</th>
      <th scope="col">Armbänder</th>
      <th scope="col">Ringe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgien</th>
      <th scope="row">Antwerpen</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brüssel</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Die Niederlande</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

Aber was ist, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen Screenreader, der ihnen Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie reinen Text lesen, aber das Interpretieren einer Tabelle kann eine Herausforderung für eine blinde Person sein. Nichtsdestotrotz können wir mit dem richtigen Markup visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) gibt es weltweit etwa 253 Millionen Menschen mit einer Sehbehinderung.

Dieser Abschnitt des Artikels bietet weitere Techniken, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Benutzer von Screenreadern die Tabelle ähnlich wie ein sehender Benutzer interpretieren können.

Wir haben bereits Überschriften in unserem vorherigen Artikel behandelt – siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements).

### Das scope-Attribut

Ein neues Thema in diesem Artikel ist das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das dem `<th>`-Element hinzugefügt werden kann, um Screenreadern genau mitzuteilen, für welche Zellen die Überschrift gilt – ist es eine Überschrift für die Zeile, in der sie sich befindet, oder für die Spalte? Wenn wir auf unser vorheriges Beispiel der Ausgabenaufzeichnung zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, etwa so:

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

Und jede Zeile könnte eine definierte Überschrift haben, etwa so (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzugefügt hätten):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader werden eine solche geordnete Struktur erkennen und es ermöglichen, dass der Benutzer zum Beispiel die gesamte Spalte oder Zeile auf einmal vorlesen lässt.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die sich über mehrere Spalten oder Zeilen erstrecken. Wenn Sie erneut auf die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Abschnitts schauen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" liegt. Alle diese Zellen sollten als Überschriften (`<th>`) formatiert werden, aber "Kleidung" ist eine Überschrift, die über den anderen drei Unterüberschriften liegt und sie definiert. Daher sollte "Kleidung" ein Attribut von `scope="colgroup"` bekommen, während die anderen ein Attribut von `scope="col"` erhalten:

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Clothes</th>
  </tr>
  <tr>
    <th scope="col">Trousers</th>
    <th scope="col">Skirts</th>
    <th scope="col">Dresses</th>
  </tr>
</thead>
```

Dasselbe gilt für Überschriften mehrerer gruppierter Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Verkaufte Artikel im August 2016", diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Die Niederlande", ebenfalls als `<th>`-Element formatiert, beide Zeilen umspannt und die Überschrift für die beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Überschrift angegeben werden, um Screenreadern zu helfen, die richtigen Assoziationen herzustellen:

```html
<tr>
  <th rowspan="2" scope="rowgroup">The Netherlands</th>
  <th scope="row">Amsterdam</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">Utrecht</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

### Die id- und headers-Attribute

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um Assoziationen zwischen Überschriften und Zellen herzustellen.

Das `headers`-Attribut nimmt eine Liste ungeordneter, durch Leerzeichen getrennte {{Glossary("string", "Strings")}} an, die jeweils mit der eindeutigen `id` des `<th>`-Elements übereinstimmen, das Überschriften für entweder eine Datenzelle (`<td>`-Element) oder ein anderes Überschriftselement (`<th>`-Element) bereitstellt.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, zu der sie gehört, ähnlich wie eine Tabelle in einer Tabelle. Damit es gut funktioniert, braucht die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Rückkehrend zu unserem Beispiel "Verkaufte Artikel im August 2016" können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d.h. einer Überschriftselement oberhalb hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` des oberen Überschriftenelements, das die Unterüberschriften definiert, was in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift wäre.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste an. Gehen Sie vor wie in einem Tabellenkalkulationsprogramm: Finden Sie die Datenzelle und suchen Sie nach den entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent sein, um es organisiert zu halten.

```html
<thead>
  <tr>
    <th id="clothes" colspan="3">Clothes</th>
  </tr>
  <tr>
    <th id="trousers" headers="clothes">Trousers</th>
    <th id="skirts" headers="clothes">Skirts</th>
    <th id="dresses" headers="clothes">Dresses</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="3">Belgium</th>
    <th id="antwerp" headers="belgium">Antwerp</th>
    <td headers="antwerp belgium clothes trousers">56</td>
    <td headers="antwerp belgium clothes skirts">22</td>
    <td headers="antwerp belgium clothes dresses">43</td>
  </tr>
</tbody>
```

> [!NOTE]
> Diese Methode schafft sehr präzise Assoziationen zwischen Überschriften und Datenzellen, verwendet jedoch **sehr viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen normalerweise ausreichend.

### Aktives Lernen: Arbeiten mit scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie schließlich noch eine Kopie der Ausgangsdateien, und machen Sie die Tabelle in diesem Fall zugänglicher, indem Sie präzise und explizite Assoziationen unter Verwendung der `id`- und `headers`-Attribute erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen – siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie sich dies auch live an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie sich dies auch live an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie jetzt wissen müssen. Als Nächstes können Sie sich selbst mit unserer [HTML Tabellenbewertung](/de/docs/Learn/HTML/Tables/Structuring_planet_data) testen. Viel Spaß!

Wenn Sie bereits CSS lernen und die Bewertung gut abgeschlossen haben, können Sie weitermachen und lernen, wie man HTML-Tabellen gestaltet — siehe [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

Wenn Sie mit dem Erlernen von CSS beginnen möchten, schauen Sie sich den [CSS-Lernbereich](/de/docs/Learn/CSS) an!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
