---
title: Zugänglichkeit von HTML-Tabellen
short-title: Table accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen – das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Funktionen zur Zugänglichkeit von HTML-Tabellen, wie Captions/Summaries, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußabschnitte sowie die Zuordnung von Spalten und Zeilen.

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
          <li>Verständnis der mit Tabellen verbundenen Zugänglichkeitsprobleme.</li>
          <li>Hinzufügen von Überschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußzeilen.</li>
          <li>Erstellen einer weiteren Zuordnung zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rekapitulation: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um schnellen Zugriff auf Daten zu erhalten und verschiedene Werte nachzuschlagen. Zum Beispiel zeigt ein kurzer Blick auf die folgende Tabelle, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Zuordnungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Im August 2016 verkaufte Artikel</caption>
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

Aber was, wenn Sie diese visuellen Zuordnungen nicht machen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen benutzen oft einen Screenreader, der Informationen auf Webseiten für sie vorliest. Das ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine Herausforderung sein. Dennoch können wir mit dem richtigen Markup visuelle Zuordnungen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten im Jahr 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit Sehbehinderung.

In diesem Abschnitt des Artikels werden weitere Techniken vorgestellt, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Zuordnungen zwischen diesen Überschriften und den Zellen herzustellen, auf die sie sich beziehen. Die Kombination aus Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Screenreader-Benutzer die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Caption zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Caption geben, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen obigen Beispiel ersehen können, soll die Caption eine Beschreibung der Tabelleninhalte enthalten. Dies ist nützlich für alle Leser, die schnell wissen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite scannen, besonders für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Caption verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte oder nicht.

Eine Caption wird direkt unter das `<table>`-Tag gesetzt.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen – dies wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Caption

Probieren wir das aus, mit einem Stundenplan eines Sprachlehrers als Beispiel.

1. Erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) Datei.
2. Fügen Sie eine geeignete Caption für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um das Ergebnis zu sehen.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es auch live an](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur hinzufügen mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle für Screenreader-Benutzer nicht unbedingt zugänglicher. Sie führen nicht zu einer visuellen Verbesserung für sich, sind jedoch sehr nützlich zum Anwenden von Styling- und Layoutverbesserungen über CSS, die die Zugänglichkeit verbessern können. Um Ihnen einige interessante Beispiele zu geben, im Falle einer langen Tabelle könnten Sie die Tabellenkopf- und Fußzeile auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen lassen und die Inhalte durch Scrollen auf und ab zugänglich machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umfassen, der die Kopfzeile ist – dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber das ist nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte die Tabellenkopfzeile direkt darunter erscheinen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umfassen, der nicht die Tabellenkopf- oder Fußzeile ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umfassen, der die Fußzeile ist – dies könnte beispielsweise eine letzte Zeile mit Summen der vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` wird immer in jeder Tabelle einbezogen, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt hinzufügen sollten – Sie sollten es tun, weil es Ihnen mehr Kontrolle über die Struktur und das Styling Ihrer Tabelle gibt.

### Aktives Lernen: Tabellenstruktur hinzufügen

Lassen Sie uns diese neuen Elemente in Aktion setzen.

1. Erstellen Sie zuerst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeilenreihe in ein `<thead>`-Element zu setzen, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element.
3. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten spanen zu lassen, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
4. Fügen Sie der Tabelle ein einfaches zusätzliches Styling hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Innerhalb des Kopfteils Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in diesem Element die folgenden CSS-Zeilen hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie, und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie weitaus kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber erfahren, wenn Sie unsere CSS-Module durchgehen ([CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell zum [Stylen von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden.

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Kopfzeile eine Kopfzeile ist – ist es eine Kopfzeile für die Zeile, in der sie sich befindet, oder die Spalte, zum Beispiel? Blicken wir zurück auf unser Ausgabenaufzeichnungsbeispiel von früher, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, wie folgt:

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

Und jede Zeile könnte eine Kopfzeile wie diese haben (wenn wir Zeilenüberschriften ebenso wie Spaltenüberschriften hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine derart strukturierte Markierung und erlauben ihren Benutzern zum Beispiel, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Kopfzeilen verwendet, die über mehrere Spalten oder Zeilen sitzen. Wenn Sie sich die "Im August 2016 verkaufte Artikel"-Tabelle am Anfang dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die "Kleidung"-Zelle über den "Hosen", "Röcken" und "Kleidern"-Zellen sitzt. All diese Zellen sollten als Kopfzeilen (`<th>`) markiert werden, aber "Kleidung" ist eine Überschrift, die über den anderen drei Unterüberschriften sitzt und diese definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Dasselbe gilt für Kopfzeilen für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die "Im August 2016 verkaufte Artikel"-Tabelle, diesmal mit Fokus auf die Zeilen mit den "Amsterdam" und "Utrecht"-Kopfzeilen (`<th>`). Sie werden bemerken, dass die "Die Niederlande"-Kopfzeile, ebenfalls als `<th>`-Element markiert, beide Zeilen umfasst und die Überschrift für die anderen beiden Unterüberschriften ist. Deshalb sollte `scope="rowgroup"` auf dieser Kopfzeile angegeben werden, um Screenreadern zu helfen, die korrekten Zuordnungen zu erstellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung von [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attributen, um Zuordnungen zwischen Kopfzeilen und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten {{Glossary("string", "Strings")}} entgegen, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Kopfzeilen für entweder eine Datensatz-Zelle (`<td>`-Element) oder eine andere Kopfzeilen-Zelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Kopfzeile(n) für jede Spalte und Zeile, deren Teil sie ist, vergleichbar mit einer Tabelle in einer Tabellenkalkulation. Damit dies gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem "Im August 2016 verkaufte Artikel"-Beispiel, können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d.h. eine Kopfzeile über sich hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die über ihr sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und legen Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste fest. Sie können vorgehen, als ob Sie eine Tabellenkalkulation verwenden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent sein, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Kopfzeilen und Datensatz-Zellen, verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Aktives Lernen: Experimente mit scope und headers

1. Für diese abschließende Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Versuchen Sie schließlich, eine weitere Kopie der Ausgangsdateien zu erstellen, und machen Sie die Tabelle dieses Mal zugänglicher, indem Sie präzise und explizite Zuordnungen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie dies ebenfalls live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber dies ist alles, was Sie jetzt wissen müssen. Als Nächstes können Sie sich mit unserer HTML-Tabellen-Herausforderung selbst testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
