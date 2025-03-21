---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorhergehenden Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Funktionen zur Barrierefreiheit von HTML-Tabellen wie Beschriftungen/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, -körper- und -fußbereiche sowie das Zuordnen von Spalten und Zeilen.

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
          <li>Ein Verständnis der mit Tabellen verbundenen Barrierefreiheitsprobleme.</li>
          <li>Hinzufügen von Beschriftungen zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußbereichen.</li>
          <li>Erstellung weiterer Zuordnungen zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugang zu Daten zu geben und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel braucht es nur einen kurzen Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe in Gent während August 2016 verkauft wurden. Um dessen Informationen zu verstehen, treffen wir visuelle Zuordnungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften.

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

Aber was, wenn man diese visuellen Zuordnungen nicht vornehmen kann? Wie kann man dann eine Tabelle wie die obenstehende lesen? Sehbehinderte Menschen verwenden häufig einen Bildschirmleser, der ihnen Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie normalen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine ziemliche Herausforderung sein. Dennoch können wir mit der richtigen Markup-Beschriftung visuelle Zuordnungen durch programmatische ersetzen.

> [!NOTE]
> Es gibt etwa 253 Millionen Menschen, die mit einer Sehbehinderung leben, gemäß [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment).

In diesem Abschnitt des Artikels werden weitere Techniken vorgestellt, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Bildschirmleser identifizieren alle Überschriften und verwenden sie, um programmatische Zuordnungen zwischen diesen Überschriften und den dazugehörigen Zellen zu machen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Bildschirmleser-Benutzer die Tabelle ähnlich wie ein sehender Benutzer interpretieren können.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie diese innerhalb eines {{htmlelement("caption")}}-Elements platzieren und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten sie direkt unter das öffnende `<table>`-Tag setzen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie dem obigen kurzen Beispiel entnehmen können, soll die Beschriftung eine Beschreibung der Tabelleninhalte enthalten. Dies ist für alle Leser nützlich, die sich schnell einen Überblick verschaffen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite durchsuchen. Besonders aber für blinde Benutzer. Anstatt dass ein Bildschirmleser den Inhalt vieler Zellen vorlesen muss, nur um zu erfahren, worum es in der Tabelle geht, kann der Benutzer sich auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte oder nicht.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann ebenfalls für das `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird auch von Bildschirmlesern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Beschriftung

Lassen Sie uns das ausprobieren, indem wir einen Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Machen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie der Tabelle eine geeignete Beschriftung hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Strukturierung mit \<thead>, \<tbody>, und \<tfoot> hinzufügen

Wenn Ihre Tabellen etwas komplexer werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu erreichen, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, die Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu kennzeichnen.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Bildschirmleser. Sie führen selbst zu keinerlei visuellen Verbesserungen, sind jedoch sehr nützlich für die Anwendung von Stil- und Layoutverbesserungen über CSS, was die Barrierefreiheit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf- und -fuß auf jeder gedruckten Seite wiederholen lassen und den Tabellenkörper auf einer einzigen Seite anzeigen lassen und den Inhalt durch Scrollen auf- und abwärts verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingeschlossen werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — das ist normalerweise die erste Zeile mit den Spaltenüberschriften, aber nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile mit den Summen der vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` wird immer in jede Tabelle eingeschlossen, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer früheren Beispiele, das `<tbody>` nicht enthält, und schauen Sie sich den HTML-Code in Ihren [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser diese Markierung für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie sich überhaupt die Mühe machen sollten, es aufzunehmen — Sie sollten es tun, weil es Ihnen mehr Kontrolle über die Struktur und das Styling Ihrer Tabelle gibt.

### Aktives Lernen: Strukturierung der Tabelle

Lassen Sie uns diese neuen Elemente in die Praxis umsetzen.

1. Erstellen Sie zuerst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu spannen, sodass die tatsächliche Zahl unten in der "Cost"-Spalte erscheint.
4. Fügen Sie dem Stil der Tabelle einige einfache zusätzliche Stile hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Im Kopf Ihrer HTML-Dokumentation sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in diesem Element die folgenden CSS-Codezeilen hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie die Seite und überprüfen Sie das Ergebnis. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling zu erreichen.

> [!NOTE]
> Wir erwarten nicht, dass Sie den CSS-Stil jetzt vollständig verstehen. Sie lernen mehr darüber, wenn Sie unsere CSS-Module durchgehen ([CSS-Grundlagen der Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell über [Tabellenstile](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte etwa so aussehen wie die folgende:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub finden als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut kann zum `<th>`-Element hinzugefügt werden, um Bildschirmlesern genau zu sagen, für welche Zellen das Header-Element ein Header ist — ob es beispielsweise ein Header für die Zeile oder die Spalte ist, in der es sich befindet. Zurückblickend auf unser Beispiel der Ausgabenaufzeichnung, könnten Sie die Spaltenüberschriften folgendermaßen eindeutig als Spaltenüberschriften definieren:

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

Und jede Reihe könnte folgendermaßen einen Header haben (falls wir sowohl Zeilen- als auch Spaltenüberschriften hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Bildschirmleser erkennen so strukturiertes Markup und ermöglichen es ihren Benutzern, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften (`<th>`) gekennzeichnet werden, aber "Kleidung" ist eine Überschrift, die oben sitzt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Das gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Schauen Sie sich erneut die Tabelle "Verkaufte Artikel im August 2016" an, diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Niederlande", ebenfalls als ein `<th>`-Element ausgezeichnet, sich über beide Zeilen erstreckt und die Überschrift für die beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` für diese Überschrift-Zelle angegeben werden, um Bildschirmlesern zu helfen, die richtigen Zuordnungen zu erstellen:

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

## Die `id`- und `headers`-Attribute

Eine Alternative zur Verwendung des `scope`-Attributs ist die Nutzung der [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um Zuordnungen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten [Strings](/de/docs/Glossary/String), die jeweils dem eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften für entweder eine Datenzelle (`<td>`-Element) oder eine andere Header-Zelle (`<th>`-Element) bieten.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, zu der sie gehört, ähnlich wie in einer Tabellenkalkulation. Damit es gut funktioniert, benötigt die Tabelle tatsächlich sowohl Spalten- als auch Zeilenüberschriften.

Zurückgehend zu unserem Beispiel "Verkaufte Artikel im August 2016", können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d.h. eine darüber liegende Überschrift hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die oben sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste an. Sie können vorgehen, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, jedoch sollten Sie konsistent sein, um es organisiert zu halten.

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
> Diese Methode schafft sehr präzise Zuordnungen zwischen Überschriften und Datenzellen, verwendet aber **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

## Aktives Lernen: Spielen mit `scope` und `headers`

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und von [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Machen Sie schließlich eine weitere Kopie der Ausgangsdateien und machen Sie die Tabelle diesmal zugänglicher, indem Sie präzise und explizite Zuordnungen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie jetzt wissen müssen. Als Nächstes können Sie sich selbst mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
