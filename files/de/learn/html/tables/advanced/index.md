---
title: "HTML-Tabellen: Erweiterte Funktionen und Barrierefreiheit"
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Im zweiten Artikel dieses Moduls betrachten wir einige fortschrittlichere Funktionen von HTML-Tabellen — wie Bildunterschriften/Summaries und das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle — sowie die Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

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
        Erlernen fortschrittlicher Funktionen von HTML-Tabellen und ihrer
        Zugänglichkeit.
      </td>
    </tr>
  </tbody>
</table>

## Eine Beschriftung zu Ihrer Tabelle hinzufügen mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung hinzufügen, indem Sie sie innerhalb eines {{htmlelement("caption")}}-Elements platzieren und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag einfügen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie dem obigen kurzen Beispiel entnehmen können, soll die Beschriftung eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die sich schnell einen Überblick verschaffen möchten, ob die Tabelle für sie nützlich ist, insbesondere für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte oder nicht.

Eine Beschriftung wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann auch auf das `<table>`-Element angewendet werden, um eine Beschreibung zu liefern — diese wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` als veraltet gilt und nicht von sehenden Benutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Eine Beschriftung hinzufügen

Probieren wir das aus und betrachten ein Beispiel, das wir im vorherigen Artikel getroffen haben.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers vom Ende des Artikels [Grundlagen von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col) oder erstellen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie der Tabelle eine passende Beschriftung hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([siehe sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur hinzufügen mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es nützlich, ihnen mehr Strukturdefinition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}} zu verwenden, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle für Benutzer von Screenreadern nicht zugänglicher und führen auch nicht zu einer visuellen Verbesserung auf eigene Faust. Sie sind jedoch sehr nützlich für Styling und Layout — sie dienen als nützliche Anhaltspunkte zum Hinzufügen von CSS zu Ihrer Tabelle. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenschnitt und Fußzeilen auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen nach oben und unten verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist normalerweise die erste Zeile mit den Spaltenüberschriften, muss aber nicht immer der Fall sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte die Tabellenüberschrift direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der weder Kopf- noch Fußbereich ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fußbereich ist — dies könnte zum Beispiel eine letzte Zeile sein, in der Artikel in den vorherigen Zeilen zusammengefasst werden.

> **Hinweis:** `<tbody>` ist immer in jeder Tabelle enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt aufnehmen sollten — Sie sollten, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und deren Stil gibt.

### Aktives Lernen: Tabellenstruktur hinzufügen

Lassen Sie uns diese neuen Elemente in Aktion setzen.

1. Erstellen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, es in einem Browser zu öffnen — Sie werden sehen, dass es gut aussieht, aber es könnte verbessert werden. Die "SUM"-Zeile, die eine Summierung der ausgegebenen Beträge enthält, scheint an der falschen Stelle zu sein, und es fehlen einige Details im Code.
3. Platzieren Sie die offensichtliche Kopfzeile in einem `<thead>`-Element, die "SUM"-Zeile in einem `<tfoot>`-Element und den Rest des Inhalts in einem `<tbody>`-Element.
4. Speichern und aktualisieren Sie und Sie werden sehen, dass das Hinzufügen des `<tfoot>`-Elements dazu geführt hat, dass die "SUM"-Zeile nach unten in die Tabelle verschoben wurde.
5. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl unten in der "Kosten"-Spalte erscheint.
6. Fügen wir der Tabelle etwas einfaches zusätzliches Styling hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für das Anwenden von CSS sind. Innerhalb des Kopfbereichs Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden CSS-Codezeilen ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Speichern und aktualisieren Sie und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber erfahren, wenn Sie unsere CSS-Module durchgehen (die [Einführung in CSS](/de/docs/Learn/CSS/First_steps) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell zum Thema [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)).

Ihre fertige Tabelle sollte in etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie finden es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Verschachtelte Tabellen

Es ist möglich, eine Tabelle in eine andere zu verschachteln, solange Sie die komplette Struktur, einschließlich des `<table>`-Elements, einfügen. Dies wird im Allgemeinen jedoch nicht wirklich empfohlen, da es das Markup verwirrender und für Benutzer von Screenreadern weniger zugänglich macht, und in vielen Fällen können Sie ebenso gut einfach zusätzliche Zellen/Zeilen/Spalten in die bestehende Tabelle einfügen. Es ist jedoch manchmal notwendig, zum Beispiel, wenn Sie Inhalte leicht aus anderen Quellen importieren möchten.

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

Der Output sieht etwa so aus:

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

Lassen Sie uns kurz darauf zurückkommen, wie wir Daten in Tabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel braucht es nur einen kurzen Blick auf die Tabelle unten, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Verkäufe im August 2016</caption>
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
      <th rowspan="2" scope="rowgroup">Niederlande</th>
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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die oben genannte lesen? Menschen mit Sehbehinderungen verwenden oft einen Screenreader, der Informationen auf Webseiten für sie vorliest. Das ist kein Problem beim Lesen von einfachem Text, aber das Interpretieren einer Tabelle kann für eine blinde Person eine ziemliche Herausforderung darstellen. Dennoch können wir mit dem richtigen Markup visuelle durch programmatische Assoziationen ersetzen.

> [!NOTE]
> Es gibt etwa 253 Millionen Menschen, die mit einer Sehbeeinträchtigung leben, gemäß [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment).

Dieser Abschnitt des Artikels bietet weitere Techniken, um Tabellen so barrierefrei wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen herzustellen, auf die sie sich beziehen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Benutzer von Screenreadern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements).

### Das scope-Attribut

Ein neues Thema für diesen Artikel ist das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das dem `<th>`-Element hinzugefügt werden kann, um Screenreadern genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der es sich befindet, oder für die Spalte, zum Beispiel? Wenn Sie auf unser früheres Ausgabebeispiel für die Ausgabenaufzeichnung zurückblicken, könnten Sie die Spaltenüberschriften leicht als Spaltenüberschriften definieren:

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

Und jede Zeile könnte so eine Überschrift definiert haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen so strukturiertes Markup und ermöglichen ihren Benutzern, zum Beispiel, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die Tabelle "Verkäufe im August 2016" am Anfang dieses Artikelsegments erneut ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" steht. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die oben sitzt und die anderen drei Unterüberschriften definiert. Daher sollte "Kleidung" ein Attribut `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

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

Das Gleiche gilt für Überschriften von mehreren gruppierten Zeilen. Betrachten Sie erneut die Tabelle "Verkäufe im August 2016", dieses Mal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Niederlande", ebenfalls als `<th>`-Element ausgezeichnet, sich über beide Zeilen erstreckt, da sie die Überschrift für die anderen beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf diese Überschrift angewendet werden, um den Screenreadern zu helfen, die richtigen Assoziationen zu erstellen:

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

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten [Strings](/de/docs/Glossary/string) an, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften entweder für eine Datumszelle (`<td>`-Element) oder eine andere Überschriftzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, zu der sie gehört, ähnlich wie in einer Tabellenkalkulation. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem Beispiel "Verkäufe im August 2016" können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, d.h. eine Überschrift über sich hat. Der Wert ist die `id` der Überschrift, die über der Tabelle sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste ein. Sie können so vorgehen, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datumszelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsequent sein, um es organisiert zu halten.

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
> Diese Methode erzeugt sehr präzise Assoziationen zwischen Überschriften und Datenzellen, aber sie verwendet **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist normalerweise ausreichend für die meisten Tabellen.

### Aktives Lernen: mit scope und headers spielen

1. Für diese abschließende Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle barrierefreier zu gestalten.
3. Schließlich versuchen Sie, eine weitere Kopie der Ausgangsdateien zu machen und diesmal die Tabelle durch das Erstellen präziser und expliziter Assoziationen mit `id`- und `headers`-Attributen barrierefreier zu machen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([siehe dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie sich dies ebenfalls live an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als nächstes können Sie sich mit unserer [HTML-Tabellenbewertung](/de/docs/Learn/HTML/Tables/Structuring_planet_data) testen. Viel Spaß!

Wenn Sie bereits CSS lernen und die Bewertung gut bestanden haben, können Sie fortfahren und lernen, wie man HTML-Tabellen stylt — siehe [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

Wenn Sie mit dem Lernen von CSS beginnen möchten, schauen Sie sich den [CSS Learning Bereich](/de/docs/Learn/CSS) an!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
