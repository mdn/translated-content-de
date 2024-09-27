---
title: Erweiterte HTML-Tabellenfunktionen und Zugänglichkeit
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Im zweiten Artikel dieses Moduls betrachten wir einige fortgeschrittene Funktionen von HTML-Tabellen — wie Beschreibungen/Zusammenfassungen und das Gruppieren Ihrer Zeilen in Tabellenkopf-, -körper- und -fußbereiche — sowie die Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erlernen der fortgeschrittenen HTML-Tabellenfunktionen und der Zugänglichkeit von Tabellen.
      </td>
    </tr>
  </tbody>
</table>

## Eine Beschriftung zu Ihrer Tabelle mit \<caption> hinzufügen

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie diese innerhalb eines {{htmlelement("caption")}}-Elements und dieses innerhalb des {{htmlelement("table")}}-Elements platzieren. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen obigen Beispiel ableiten können, soll die Beschriftung eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell erkennen möchten, ob die Tabelle für sie von Nutzen ist, während sie die Seite durchsuchen, insbesondere jedoch für blinde Benutzer. Anstatt dass ein Bildschirmlesegerät die Inhalte vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Beschriftung stützen und dann entscheiden, ob er die Tabelle ausführlicher lesen möchte.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — diese wird ebenfalls von Bildschirmlesegeräten vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Beschriftung

Lassen Sie uns dies ausprobieren, indem wir ein Beispiel erneut aufgreifen, das wir im vorherigen Artikel kennengelernt haben.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers aus dem Ende von [HTML Table Basics](/de/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col), oder machen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine passende Beschriftung für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur mit \<thead>, \<tbody> und \<tfoot> hinzufügen

Wenn Ihre Tabellen etwas komplexer werden, ist es nützlich, ihnen eine klarere Struktur zu geben. Eine Möglichkeit, dies zu erreichen, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle für Benutzer von Bildschirmlesegeräten nicht zugänglicher und führen allein zu keiner visuellen Verbesserung. Sie sind jedoch sehr nützlich für das Styling und Layout — sie dienen als nützliche Haken zum Hinzufügen von CSS zu Ihrer Tabelle. Um Ihnen einige interessante Beispiele zu geben, bei einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen und den Tabelleninhalt auf einer einzigen Seite anzeigen lassen, sodass der Inhalt durch vertikales Scrollen zugänglich ist.

Um diese zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist in der Regel die erste Zeile, die die Spaltenüberschriften enthält, aber nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile sein, in der Elemente der vorherigen Zeilen summiert werden.

> **Hinweis:** `<tbody>` ist in jeder Tabelle immer enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält und sehen Sie sich den HTML-Code in Ihren [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — Sie sollten, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -gestaltung gibt.

### Aktives Lernen: Hinzufügen einer Tabellenstruktur

Lassen Sie uns diese neuen Elemente in Aktion sehen.

1. Zuerst machen Sie eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie es in einem Browser zu öffnen — Sie werden sehen, dass es in Ordnung aussieht, aber es könnte verbessert werden. Die "SUM"-Zeile, die eine Summierung der ausgegebenen Beträge enthält, scheint an der falschen Stelle zu sein, und im Code fehlen einige Details.
3. Legen Sie die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element.
4. Speichern und aktualisieren, und Sie werden sehen, dass durch das Hinzufügen des `<tfoot>`-Elements die "SUM"-Zeile an den unteren Rand der Tabelle verschoben wurde.
5. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, damit sich die "SUM"-Zelle über die ersten vier Spalten erstreckt, sodass die tatsächliche Zahl am unteren Rand der "Cost"-Spalte erscheint.
6. Fügen Sie der Tabelle ein einfaches zusätzliches Styling hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Im Kopf Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden Zeilen CSS-Code ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Speichern und aktualisieren, und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([Einführung in CSS](/de/docs/Learn/CSS/First_steps) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell über das [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)).

Ihre fertige Tabelle sollte in etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub finden als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Verschachtelte Tabellen

Es ist möglich, eine Tabelle innerhalb einer anderen zu verschachteln, solange Sie die komplette Struktur, einschließlich des `<table>`-Elements, einfügen. Dies wird allgemein nicht wirklich empfohlen, da es die Markup-Struktur verwirrend und für Benutzer von Bildschirmlesegeräten weniger zugänglich macht, und in vielen Fällen könnten Sie genauso gut zusätzliche Zellen/Zeilen/Spalten in die bestehende Tabelle einfügen. Es ist jedoch manchmal notwendig, z. B. wenn Sie Inhalte leicht aus anderen Quellen importieren möchten.

Der folgende Markup zeigt eine einfache verschachtelte Tabelle:

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

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel braucht es nur einen kurzen Blick auf die folgende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Assoziationen nicht machen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen Bildschirmleser, der ihnen Informationen auf Webseiten vorliest. Dies stellt kein Problem dar, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine Herausforderung sein. Mit dem richtigen Markup können wir jedoch visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Es gibt etwa 253 Millionen Menschen weltweit, die laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) mit Sehbehinderungen leben.

Dieser Abschnitt des Artikels stellt weitere Techniken zur Verfügung, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Bildschirmleser erkennen alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen herzustellen, zu denen sie gehören. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Benutzer des Bildschirmlesegeräts die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th> Elementen](/de/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements).

### Das scope-Attribut

Ein neues Thema für diesen Artikel ist das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das dem `<th>`-Element hinzugefügt werden kann, um Bildschirmlesegeräten genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der es sich befindet, oder für die Spalte zum Beispiel? Wenn wir zu unserem Ausgabeprotokoll-Beispiel von früher zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren:

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

Und jede Zeile könnte eine definierte Überschrift wie folgt haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Bildschirmleser erkennen strukturierte Markups wie dieses und erlauben ihren Benutzern beispielsweise, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die "Verkaufte Artikel im August 2016"-Tabelle am Anfang dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die "Kleidung"-Zelle über den Zellen "Hosen", "Röcke" und "Kleider" steht. Alle diese Zellen sollten als Überschriften markiert sein (`<th>`), aber "Kleidung" ist eine Überschrift, die darüber steht und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut `scope="colgroup"` erhalten, während die anderen ein Attribut `scope="col"` erhalten würden:

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

Das gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Sehen Sie sich noch einmal die "Verkaufte Artikel im August 2016"-Tabelle an, diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die mit `<th>` als "Die Niederlande" markierte Überschrift beide Zeilen umfasst, da sie die Überschrift für die beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` für diese Überschrift-Zelle festgelegt werden, um Bildschirmlesegeräten zu helfen, die richtigen Assoziationen zu erstellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Global_attributes#id)- und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um Assoziationen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten [Zeichenketten](/de/docs/Glossary/string) entgegen, von denen jede der eindeutigen `id` der `<th>`-Elemente entspricht, die Überschriften sowohl für eine Datenzelle (`<td>`-Element) als auch für eine andere Überschrift-Zelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, zu der sie gehört, ähnlich wie in einer Tabelle in einer Tabellenkalkulation. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Wenn wir zu unserem Beispiel "Verkaufte Artikel im August 2016" zurückkehren, können wir die `id` und `headers` Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, d.h. es hat ein Überschriftselement darüber. Der Wert ist die `id` der Überschrift, die darüberliegt und die Unterüberschriften definiert, was in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste an. Sie können so vorgehen, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent sein, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Assoziationen zwischen Überschriften und Datenzellen, aber sie verwendet **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

### Aktives Lernen: Experimentieren mit scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie schließlich eine weitere Kopie der Starter-Dateien und machen Sie die Tabelle dieses Mal zugänglicher, indem Sie präzise und explizite Assoziationen unter Verwendung der `id`- und `headers`-Attribute erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich mit unserer [HTML-Tabellenbewertung](/de/docs/Learn/HTML/Tables/Structuring_planet_data) testen. Viel Spaß!

Wenn Sie bereits CSS lernen und gut in der Bewertung abgeschnitten haben, können Sie fortfahren und lernen, wie man HTML-Tabellen gestaltet — siehe [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

Wenn Sie mit dem Lernen von CSS beginnen möchten, schauen Sie sich den [CSS Learning Area](/de/docs/Learn/CSS) an!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
