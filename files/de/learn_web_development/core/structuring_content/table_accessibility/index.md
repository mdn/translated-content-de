---
title: Barrierefreiheit von HTML-Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 3c72fbac0481dccd24ab2d3eca7cdb07b54f3cdd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Nutzer\*innen zugänglich zu machen – das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und befassen uns mit weiteren Funktionen zur Barrierefreiheit von HTML-Tabellen, wie z. B. Überschriften/Anmerkungen, die Gruppierung von Zeilen in Tabellenkopf, -körper und -fuß sowie der Zuordnung von Spalten und Zeilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ein Verständnis für die mit Tabellen verbundenen Barrierefreiheitsthemen.</li>
          <li>Das Hinzufügen von Überschriften zu Tabellen.</li>
          <li>Eine bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußbereichen.</li>
          <li>Die Schaffung einer engeren Verbindung zwischen Überschriften und Zellen mithilfe der Attribute <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Nutzer\*innen

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Hilfsmittel sein, um schnellen Zugriff auf Daten zu ermöglichen und verschiedene Werte nachzuschlagen. Zum Beispiel genügt ein kurzer Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, stellen wir visuelle Verbindungen zwischen den Daten in dieser Tabelle und den Kopf- bzw. Zeilenüberschriften her.

<table>
  <caption>Verkaufte Artikel, August 2016</caption>
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

Aber was, wenn Sie diese visuellen Verknüpfungen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obenstehende lesen? Sehbehinderte Menschen verwenden oft einen Screenreader, der Informationen auf Webseiten vorliest. Dies ist bei einfachem Text kein Problem, aber das Interpretieren einer Tabelle kann für blinde Personen eine echte Herausforderung darstellen. Mit der richtigen Markierung können visuelle Verknüpfungen jedoch durch programmgesteuerte ersetzt werden.

> [!NOTE]
> Laut [Daten der WHO aus dem Jahr 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) gibt es weltweit etwa 253 Millionen Menschen mit Sehbehinderungen.

Dieser Abschnitt des Artikels liefert weitere Techniken, um Tabellen so barrierefrei wie möglich zu gestalten.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und nutzen sie, um programmgesteuerte Verknüpfungen zwischen diesen Überschriften und den entsprechenden Zellen herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften ermöglicht es, die Daten in jeder Zelle so zu interpretieren, dass Screenreader-Nutzer die Tabelle ähnlich verstehen wie sehende Nutzer\*innen.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt – siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Überschrift hinzufügen, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements platzieren. Sie sollten sie direkt unterhalb des öffnenden `<table>`-Tags setzen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie aus dem kurzen obigen Beispiel hervorgeht, soll die Überschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser*innen, die sich schnell einen Überblick darüber verschaffen möchten, ob die Tabelle für sie von Nutzen ist – insbesondere jedoch für blinde Nutzer*innen. Statt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Nutzer auf die Überschrift verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte.

Eine Überschrift wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann ebenfalls auf das `<table>`-Element angewendet werden, um eine Beschreibung bereitzustellen – dieses wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Leser\*innen nicht wahrgenommen wird (es erscheint nicht auf der Seite).

### Praktische Übung: Hinzufügen einer Überschrift

Probieren wir das aus, indem wir einen Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Erstellen Sie eine lokale Kopie der Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine passende Überschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um das Ergebnis anzusehen.

> [!NOTE]
> Sie finden unsere Version auf GitHub – siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([Sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Strukturierung mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer werden, ist es nützlich, ihnen mehr Struktur zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, mit denen Sie einen Kopf-, Körper- und Fußbereich der Tabelle markieren können.

Diese Elemente machen die Tabelle für Screenreader-Nutzer\*innen nicht unbedingt zugänglicher. Sie führen nicht von selbst zu visuellen Verbesserungen, sind jedoch äußerst nützlich für die Anwendung von Styling- und Layout-Anpassungen über CSS. In interessanten Fällen, wie etwa bei einer langen Tabelle, könnten Sie die Tabellenüberschrift und den Fußbereich auf jeder gedruckten Seite wiederholen lassen, während der Tabelleninhalt auf einer Seite angezeigt wird und durch Scrollen zugänglich bleibt.

Um sie zu nutzen, sollten sie in folgender Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der die Kopfzeile darstellt – in der Regel die erste Zeile mit den Spaltenüberschriften, dies ist jedoch nicht immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter stehen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der weder Kopf- noch Fußbereich ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der den Fußbereich darstellt – dies könnte beispielsweise eine Abschlusszeile sein, in der die vorherigen Zeilen summiert werden.

> **Hinweis:** `<tbody>` ist in jeder Tabelle implizit enthalten, auch wenn Sie es nicht explizit in Ihrem Code angeben. Überprüfen Sie dies, indem Sie ein vorheriges Beispiel ohne `<tbody>` öffnen und sich den HTML-Code in Ihren [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt angeben sollten – Sie sollten dies tun, da es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und das Styling bietet.

### Praktische Übung: Hinzufügen einer Tabellenstruktur

Lassen Sie uns diese neuen Elemente in die Praxis umsetzen.

1. Erstellen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Überschriftenzeile in ein `<thead>`-Element zu setzen, die "SUM"-Zeile in ein `<tfoot>`-Element und den restlichen Inhalt in ein `<tbody>`-Element.
3. Fügen Sie anschließend ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, damit die „SUM“-Zelle sich über die ersten vier Spalten erstreckt, sodass die tatsächliche Zahl unten in der "Cost"-Spalte erscheint.
4. Fügen Sie der Tabelle ein einfaches Styling hinzu, um zu veranschaulichen, wie nützlich diese Elemente für CSS-Anwendungen sind. Fügen Sie innerhalb des Kopfbereichs Ihres HTML-Dokuments in das leere {{htmlelement("style")}}–Element folgende CSS-Zeilen ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie, und überprüfen Sie das Ergebnis. Ohne die `<tbody>`- und `<tfoot>`-Elemente müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS bereits vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([CSS-Grundlagen zur Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) sind ein guter Einstieg; wir haben auch einen spezifischen Artikel über [Tabellen-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können sie auch auf GitHub finden: [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau anzugeben, für welche Zellen die Überschrift eine Überschrift ist – ist sie beispielsweise eine Überschrift für die aktuelle Zeile oder Spalte? Betrachtet man unser früheres Beispiel mit der Ausgabenaufstellung: Sie könnten die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren:

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

Und jede Zeile könnte eine definierte Überschrift erhalten (falls wir Zeilen- sowie Spaltenüberschriften hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine so strukturierte Markierung und erlauben ihren Nutzern, z. B. die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat noch zwei weitere mögliche Werte – `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die sich über mehrere Spalten oder Zeilen erstrecken. Betrachtet man noch einmal die Tabelle "Verkaufte Artikel, August 2016" am Anfang dieses Abschnitts, sieht man, dass die Zelle "Kleidung" sich über die Zellen "Hosen", "Röcke" und "Kleider" erstreckt. Alle diese Zellen sollten als Überschriften (`<th>`) markiert sein, aber "Kleidung" ist eine Überschrift, die die anderen drei Unterüberschriften definiert. Dementsprechend sollte "Kleidung" ein Attribut `scope="colgroup"` haben, während die anderen ein Attribut `scope="col"` erhalten:

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

Das Gleiche gilt für Überschriften bei mehreren gruppierten Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Verkaufte Artikel, August 2016", diesmal konzentriert auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden bemerken, dass die Überschrift "Die Niederlande", ebenfalls als `<th>`-Element markiert, beide Zeilen umfasst und die anderen beiden Unterüberschriften definiert. Daher sollte `scope="rowgroup"` auf diesem Überschriftenfeld angegeben werden, um Screenreadern die richtigen Zuordnungen zu ermöglichen:

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

## Die Attribute `id` und `headers`

Eine Alternative zur Verwendung des `scope`-Attributs besteht in der Verwendung der [`id`](/de/docs/Web/HTML/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute, um Assoziationen zwischen Überschriften und Zellen zu schaffen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten [Strings](/de/docs/Glossary/string) auf, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften für eine Datenzelle (`<td>`-Element) oder eine andere Überschriftenzelle (`<th>`-Element) liefern.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschriften für jede Spalte und Zeile, in der sie sich befindet, ähnlich einer Tabellenkalkulation. Damit dies gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Schauen wir uns das Beispiel "Verkaufte Artikel, August 2016" wieder an. Wir können die Attribute `id` und `headers` wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element eine `headers`-Attribut hinzu, das als Unterüberschrift fungiert, d.h. eine Überschrift darüber hat. Der Wert ist die `id` der Überschrift, die die Unterüberschriften definiert, welches in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste an. Gehen Sie genauso vor wie in einer Tabellenkalkulation: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent bleiben, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Überschriften und Datenzellen, sie erfordert jedoch **deutlich** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

## Praktische Übung: Umgang mit `scope`- und `headers`-Attributen

1. In dieser abschließenden Übung möchten wir, dass Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die passenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Schließlich, versuchen Sie, eine weitere Kopie der Startdateien zu erstellen, und machen Sie die Tabelle diesmal zugänglicher, indem Sie präzise und explizite Verknüpfungen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen – siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie dies ebenfalls live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch weitere Dinge, die Sie über Tabellen in HTML lernen könnten, aber für den Moment ist dies alles, was Sie wissen müssen. Als nächstes können Sie Ihr Wissen mit unserer Herausforderung zu HTML-Tabellen testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
