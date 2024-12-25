---
title: Barrierefreiheit von HTML-Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 62d17528ce9736a5e827f1d72d3cbab668e45da1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Nutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale der Zugänglichkeit von HTML-Tabellen wie Beschriftungen/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, -körper und -fußbereiche sowie das Zuweisen von Bereichen zu Spalten und Zeilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Barrierefreiheitsproblematiken im Zusammenhang mit Tabellen.</li>
          <li>Hinzufügen von Beschriftungen zu Tabellen.</li>
          <li>Bessere Strukturierung der Tabelle mit Kopf-, Körper- und Fußteil.</li>
          <li>Erzeugen weiterer Beziehungen zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz zusammenfassen, wie wir Daten-Tabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu verschaffen und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Beispielsweise benötigt es nur einen kurzen Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, stellen wir visuelle Zuordnungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Zuordnungen nicht treffen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen Bildschirmleser, der ihnen Informationen auf Webseiten vorliest. Dies ist kein Problem, wenn Sie einen einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine ziemliche Herausforderung sein. Nichtsdestotrotz können wir mit dem richtigen Markup visuelle Zuordnungen durch programmatische ersetzen.

> [!NOTE]
> Laut WHO-Daten aus dem Jahr 2017 leben etwa 253 Millionen Menschen mit Sehbehinderungen.

Dieser Abschnitt des Artikels bietet weitere Techniken, um Tabellen so zugänglich wie möglich zu machen.

### Verwenden von Spalten- und Zeilenüberschriften

Bildschirmleser werden alle Überschriften identifizieren und verwenden sie, um programmatische Verknüpfungen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, herzustellen. Die Kombination von Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Benutzer von Bildschirmlesern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elementes einfügen. Sie sollten es direkt unterhalb des öffnenden `<table>`-Tags setzen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen obigen Beispiel entnehmen können, ist die Beschriftung dazu gedacht, eine Beschreibung der Tabellinhalte zu enthalten. Dies ist nützlich für alle Leser, die schnell eine Idee davon bekommen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite scannen, insbesondere jedoch für blinde Nutzer. Anstatt dass ein Bildschirmleser den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann der Nutzer sich auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle genauer liest oder nicht.

Eine Beschriftung wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`]-Attribut (/de/docs/Web/HTML/Element/table#summary) kann auch auf das `<table>`-Element angewendet werden, um eine Beschreibung bereitzustellen – diese wird ebenfalls von Bildschirmlesern vorgelesen. Wir empfehlen jedoch, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Eine Beschriftung hinzufügen

Probieren wir das aus und schauen uns ein Beispiel an, das wir bereits im vorherigen Artikel gesehen haben.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers vom Ende der [HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#active_learning_colgroup_and_col) oder erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie der Tabelle eine passende Beschriftung hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, um einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Benutzer von Bildschirmlesern. Sie führen keine eigenen visuellen Verbesserungen durch, sind jedoch sehr nützlich für die Anwendung von Stil- und Layoutverbesserungen über CSS, die die Barrierefreiheit verbessern können. Um Ihnen einige interessante Beispiele zu geben, könnten Sie im Fall einer langen Tabelle den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen und den Tabellenkörper auf einer einzigen Seite anzeigen lassen, wobei der Inhalt durch Scrollen nach oben und unten zugänglich wäre.

Um sie zu verwenden, sollten sie in folgender Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — das ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, ist aber nicht immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — das könnte beispielsweise eine letzte Zeile sein, in der die Artikel in den vorherigen Zeilen aufsummiert werden.

> **Hinweis:** `<tbody>` ist in jeder Tabelle immer enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das kein `<tbody>` enthält, und sehen Sie sich den HTML-Code in Ihren [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einschließen sollen — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -gestaltung gibt.

### Aktives Lernen: Tabellenstruktur hinzufügen

Lassen Sie uns diese neuen Elemente in die Praxis umsetzen.

1. Erstens, erstellen Sie eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtlichen Kopfzeilen in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, damit die "SUM"-Zelle die ersten vier Spalten überspannt, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
4. Lassen Sie uns einige einfache zusätzliche Stile in die Tabelle einfügen, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Innerhalb des Kopfes Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie innerhalb dieses Elements die folgenden CSS-Codes hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um die gleiche Gestaltung anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie den CSS-Code bereits vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Startpunkt; wir haben auch einen Artikel speziell über [das Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte ungefähr so aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub finden unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Bildschirmlesern genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — handelt es sich beispielsweise um eine Überschrift für die Zeile, in der sie sich befindet, oder die Spalte? In Bezug auf unser vorheriges Beispiel mit dem Ausgabennachweis könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften wie folgt definieren:

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

Und jede Zeile könnte eine Überschrift so definiert bekommen (wenn wir Zeilenüberschriften genauso wie Spaltenüberschriften hinzugefügt hätten):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Bildschirmleser werden ein so strukturiertes Markup erkennen und ermöglichen ihren Nutzern beispielsweise das Vorlesen der gesamten Spalte oder Zeile auf einmal.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die "Verkaufte Artikel im August 2016"-Tabelle zu Beginn dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" steht. Alle diese Zellen sollten als Überschriften (`<th>`) markiert werden, aber "Kleidung" ist eine Überschrift, die oben steht und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"`:

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

Dasselbe gilt für Überschriften für mehrere gruppierte Zeilen. Schauen Sie sich die "Verkaufte Artikel im August 2016"-Tabelle noch einmal an, diesmal mit Fokus auf die Zeilen mit den "Amsterdam" und "Utrecht"-Überschriften (`<th>`). Sie werden bemerken, dass die "Niederlande"-Überschrift, auch als `<th>`-Element markiert, beide Zeilen umspannt und die Überschrift für die anderen beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Überschriftenzelle angegeben werden, um Bildschirmlesern die korrekten Zuordnungen zu ermöglichen:

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

## Die id- und headers-Attribute

Eine Alternative zur Verwendung des `scope`-Attributes ist die Verwendung der [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um Zuordnungen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten {{Glossary("string", "Strings")}} an, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften entweder für eine Datenzelle (`<td>`-Element) oder eine andere Überschriftzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, der sie angehört, ähnlich wie in einer Kalkulationstabelle. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Rückkehrend zu unserem "Verkaufte Artikel im August 2016"-Beispiel können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, d. h. eine Überschrift über sich hat. Der Wert ist die `id` der Überschrift, die oben steht und die Unterüberschriften definiert, die in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift sind.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste. Sie können vorgehen, wie Sie es in einer Kalkulationstabelle tun würden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent sein, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Überschriften und Datenzellen, erfordert jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Aktives Lernen: Verwendung von scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Schließlich versuchen Sie, eine weitere Kopie der Startdateien zu erstellen, und machen Sie die Tabelle diesmal durch das Erstellen präziser und expliziter Zuordnungen mit `id`- und `headers`-Attributen zugänglicher.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie vorerst wissen müssen. Als nächstes können Sie sich selbst mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
