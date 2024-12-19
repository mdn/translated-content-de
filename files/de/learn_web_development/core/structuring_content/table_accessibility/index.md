---
title: HTML-Tabellenzugänglichkeit
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Nutzer*innen zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale der HTML-Tabellenzugänglichkeit, wie Beschriftungen/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle sowie das Festlegen des Geltungsbereichs von Spalten und Zeilen.

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
          <li>Ein Verständnis für die Zugänglichkeitsprobleme im Zusammenhang mit Tabellen.</li>
          <li>Hinzufügen von Beschriftungen zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fußbereich.</li>
          <li>Erstellen weiterer Assoziationen zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung: Tabellen für sehbehinderte Nutzer*innen

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um schnellen Zugriff auf Daten zu erhalten und verschiedene Werte nachzuschlagen. Zum Beispiel genügt ein kurzer Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und deren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen Screenreader, der Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie normalen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person ziemlich herausfordernd sein. Dennoch können wir mit der richtigen Auszeichnung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit Sehbehinderungen.

Dieser Abschnitt des Artikels bietet weitere Techniken, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den dazugehörigen Zellen herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten jeder Zelle, sodass Benutzer*innen von Screenreadern die Tabelle ähnlich wie ein*e sehende*r Benutzer*in interpretieren können.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie sie in ein {{htmlelement("caption")}}-Element einfügen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen obigen Beispiel ersehen können, soll die Beschriftung eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser*innen, die schnell erkennen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite scannen, insbesondere jedoch für blinde Benutzer*innen. Anstatt von einem Screenreader viele Zelleninhalte vorlesen zu lassen, um herauszufinden, worum es in der Tabelle geht, können sich die Benutzer*innen auf eine Beschriftung verlassen und dann entscheiden, ob sie die Tabelle im Detail lesen möchten.

Eine Beschriftung wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann auch im `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch, stattdessen das `<caption>`-Element zu verwenden, da `summary` veraltet ist und von sehenden Benutzer*innen nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Beschriftung

Lassen Sie uns dies ausprobieren und ein Beispiel erneut besuchen, das wir im vorherigen Artikel kennengelernt haben.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers von dem Ende von [HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#active_learning_colgroup_and_col) oder machen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie der Tabelle eine passende Beschriftung hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

> [!NOTE]
> Sie finden unsere Version auf GitHub — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, die es Ihnen ermöglichen, einen Kopf-, Korpus- und Fußbereich für die Tabelle zu definieren.

Diese Elemente machen die Tabelle nicht unbedingt für Benutzer*innen von Screenreadern zugänglicher. Sie führen selbst nicht zu visuellen Verbesserungen, sind jedoch sehr nützlich zum Anwenden von Gestaltungs- und Layoutverbesserungen über CSS, die die Zugänglichkeit verbessern können. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen und den Körper der Tabelle auf einer Seite anzeigen und die Inhalte durch Scrollen zugänglich machen.

Um sie zu verwenden, sollten sie in folgender Reihenfolge aufgenommen werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber das ist nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht Kopf oder Fuß der Tabelle ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile mit summierten Einträgen in den vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` ist immer in jeder Tabelle enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und schauen Sie sich den HTML-Code in Ihren [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, denn es gibt Ihnen mehr Kontrolle über Ihre Tabellenstruktur und Gestaltung.

### Aktives Lernen: Hinzufügen von Tabellenstruktur

Lassen Sie uns diese neuen Elemente in Aktion sehen.

1. Erstellen Sie zuerst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element zu setzen, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element.
3. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl unten in der "Kosten"-Spalte erscheint.
4. Lassen Sie uns einige einfache zusätzliche Stile zur Tabelle hinzufügen, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Im Kopf Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in diesem Element die folgenden CSS-Zeilen hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie die Seite und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dieselbe Gestaltung anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Anfang; wir haben auch einen speziellen Artikel über [Stil für Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte in etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden.

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau mitzuteilen, für welche Zellen die Überschrift eine Überschrift ist — ist sie eine Überschrift für die Zeile, in der sie sich befindet, oder die Spalte, zum Beispiel? Wenn wir zu unserem Ausgabeaufzeichnungsbeispiel von früher zurückblicken, könnten Sie die Spaltenüberschriften als Spaltenüberschriften wie folgt eindeutig definieren:

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

Screenreader werden Markup dieser Art erkennen und ihren Benutzern ermöglichen, die gesamte Spalte oder Zeile auf einmal vorzulesen, zum Beispiel.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die mehrere Spalten oder Zeilen überspannen. Wenn Sie sich die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Artikelsektions noch einmal ansehen, werden Sie sehen, dass die "Kleidung"-Zelle über die "Hosen", "Röcke" und "Kleider"-Zellen sitzt. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die darüber sitzt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Dasselbe gilt für Überschriften für mehrfach gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Verkaufte Artikel im August 2016", diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Die Niederlande", ebenfalls als `<th>`-Element ausgezeichnet, beide Zeilen überspannt und die Überschrift für die beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Überschriftzelle angegeben werden, um Screenreadern zu helfen, die richtigen Assoziationen zu erzeugen:

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

## Die Attribute id und headers

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der Attribute [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um Assoziationen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von nicht sortierten, durch Leerzeichen getrennten {{Glossary("string", "Strings")}} an, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften entweder für eine Datenzelle (`<td>`-Element) oder eine andere Überschriftzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, der sie angehört, ähnlich wie in einer Tabellenkalkulation. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem Beispiel "Verkaufte Artikel im August 2016" können wir die Attribute `id` und `headers` wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d. h., eine Überschrift über sich hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die die Unterüberschriften definiert, die darüber sitzt, was in unserem Beispiel `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Reihenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste. Sie können vorgehen, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Reihe und die Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsequent sein, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Assoziationen zwischen Überschriften und Datenzellen, verwendet jedoch **viel** mehr Markup und lässt keinen Spielraum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Aktives Lernen: Spielen mit scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie schließlich eine weitere Kopie der Startdateien und machen Sie die Tabelle durch das Erstellen präziser und expliziter Assoziationen unter Verwendung der Attribute `id` und `headers` zugänglicher.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie jetzt wissen müssen. Als Nächstes können Sie Ihr Wissen mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
