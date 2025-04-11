---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir eines der wichtigsten Merkmale betrachtet, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das Element {{htmlelement("th")}}. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Funktionen zur Barrierefreiheit von HTML-Tabellen, wie z.B. Bildunterschriften/Zusammenfassungen, das Gruppieren von Zeilen in Tabellenkopf, -körper und -fuß und das Zuweisen von Bereichen zu Spalten und Zeilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der mit Tabellen verbundenen Barrierefreiheitsprobleme.</li>
          <li>Bilder zu Tabellen hinzufügen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fuß.</li>
          <li>Erstellen weiterer Beziehungen zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Beispielsweise benötigt es nur einen kurzen Blick auf die Tabelle unten, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, erstellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften.

<table>
  <caption>Verkaufte Artikel August 2016</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Kleidung</th>
      <th colspan="2" scope="colgroup">Zubehör</th>
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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obenstehende lesen? Sehbehinderte Menschen verwenden oft einen Screenreader, der ihnen Informationen auf Webseiten vorliest. Dies stellt kein Problem dar, wenn man einfachen Text liest, aber das Interpretieren einer Tabelle kann für eine blinde Person eine Herausforderung sein. Mit der richtigen Markierung können wir jedoch visuelle Assoziationen durch programmgesteuerte ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit Sehbehinderungen.

In diesem Abschnitt des Artikels werden weitere Techniken erläutert, um Tabellen so zugänglich wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmgesteuerte Assoziationen zwischen diesen Überschriften und den sie betreffenden Zellen herzustellen. Die Kombination von Spalten- und Zeilenüberschriften erkennt und interpretiert die Daten in jeder Zelle, sodass Benutzer von Screenreadern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Bildunterschrift hinzufügen, indem Sie sie in ein {{htmlelement("caption")}}-Element einfügen und dieses in das {{htmlelement("table")}}-Element eingebettet wird. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel schließen können, soll die Bildunterschrift eine Beschreibung der Tabelleninhalte enthalten. Dies ist nützlich für alle Leser, die schnell feststellen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite durchsehen, insbesondere aber für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann der Benutzer sich auf eine Bildunterschrift verlassen und dann entscheiden, ob er die Tabelle genauer lesen möchte oder nicht.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`]-Attribut (/de/docs/Web/HTML/Reference/Elements/table#summary) kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von seheingeschränkten Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Bildunterschrift

Lassen Sie uns das ausprobieren, indem wir den Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Erstellen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine geeignete Bildunterschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie sich auch die Live-Version an](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Hinzufügen von Struktur mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es sinnvoll, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, die es ermöglichen, einen Kopf-, Haupt- und Fußbereich für die Tabelle zu kennzeichnen.

Diese Elemente machen die Tabelle für Benutzer von Screenreadern nicht zwingend zugänglicher. Sie führen nicht selbst zu visuellen Verbesserungen, aber sie sind sehr nützlich, um Styling- und Layoutverbesserungen über CSS anzuwenden, was die Barrierefreiheit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellinhalt auf einer Seite anzeigen und die Inhalte durch Scrollen verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist normalerweise die erste Zeile mit den Spaltenüberschriften, muss aber nicht immer der Fall sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen stehen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte eine abschließende Zeile mit Summen der Elemente in den vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` ist immer in jeder Tabelle enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt angeben sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über die Struktur und das Styling Ihrer Tabelle gibt.

### Aktives Lernen: Hinzufügen von Tabellenstruktur

Lassen Sie uns diese neuen Elemente ausprobieren.

1. Kopieren Sie zunächst [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einen neuen Ordner.
2. Versuchen Sie, die offensichtliche Überschriftenzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den restlichen Inhalt in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als Nächstes ein [`colspan`]-Attribut (/de/docs/Web/HTML/Reference/Elements/td#colspan) hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl am Ende der "Kosten"-Spalte erscheint.
4. Fügen Sie etwas einfaches zusätzliches Styling zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Im Kopfbereich Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden CSS-Zeilen ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie weitaus kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber erfahren, wenn Sie unsere CSS-Module durchgehen ([CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Anfang; wir haben auch einen Artikel speziell über [Tabellen-Styling](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden.

## Das `scope`-Attribut

Das [`scope`]-Attribut (/de/docs/Web/HTML/Reference/Elements/th#scope) kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der es sich befindet, oder für die Spalte, zum Beispiel? Wenn wir auf unser früheres Beispiel des Ausgabeprotokolls zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren:

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

Und jede Zeile könnte eine definierte Überschrift wie diese haben (wenn wir Zeilenüberschriften ebenso wie Spaltenüberschriften ergänzen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine so strukturierte Markierung und erlauben ihren Benutzern, entweder die gesamte Spalte oder Zeile auf einmal lesen zu lassen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die Tabelle "Verkaufte Artikel August 2016" am Anfang dieses Artikelsegments nochmal anschauen, sehen Sie, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften mit `<th>` markiert werden, aber "Kleidung" ist eine Überschrift, die über allem steht und die drei Unterüberschriften definiert. Daher sollte "Kleidung" ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

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

Das gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die "Verkaufte Artikel August 2016" Tabelle, konzentrieren Sie sich diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden bemerken, dass die Überschrift "Die Niederlande", ebenfalls als `<th>`-Element markiert, sich über beide Zeilen erstreckt, als Überschrift für die anderen beiden Unterüberschriften. Daher sollte `scope="rowgroup"` auf diese Kopfzeile angewendet werden, um Screenreadern zu helfen, die richtigen Assoziationen zu erstellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs besteht darin, die Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) zu verwenden, um Assoziationen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut akzeptiert eine Liste von ungeordneten, durch Leerzeichen getrennten [String]-Werten (/de/docs/Glossary/string), die jeder einem eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften für entweder eine Datenzelle (`<td>`-Element) oder eine andere Kopfzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Reihe, an der sie teilnimmt, ähnlich wie eine Tabelle in einer Tabellenkalculation. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem Beispiel "Verkaufte Artikel August 2016", können wir die Attribute `id` und `headers` wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d.h. eine Überschrift darüber hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die darüber sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste hinzu. Sie können genauso vorgehen, wie Sie es in einem Tabellenkalkulationsprogramm tun würden: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und die Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent sein, um es organisiert zu halten.

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
> Diese Methode erstellt sehr präzise Assoziationen zwischen Überschriften und Datenzellen, aber sie verwendet **sehr viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

## Aktives Lernen: mit scope und headers spielen

1. Für diese abschließende Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Schließlich versuchen Sie, eine weitere Kopie der Ausgangsdateien zu erstellen und diesmal die Tabelle durch die Erstellung präziser und expliziter Assoziationen mit `id`- und `headers`-Attributen zugänglicher zu machen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie auch diese Live-Version an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie auch diese Live-Version an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich selbst mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
