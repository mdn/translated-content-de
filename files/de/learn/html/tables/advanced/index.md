---
title: Erweiterte Funktionen und Barrierefreiheit von HTML-Tabellen
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 947eabfc5f4692c7a2c1bb4bda468fa950595a23
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Im zweiten Artikel dieses Moduls befassen wir uns mit einigen fortgeschritteneren Funktionen von HTML-Tabellen – wie z. B. Überschriften/Zusammenfassungen und der Gruppierung Ihrer Zeilen in Tabellenkopf-, -körper- und Fußbereiche – sowie der Barrierefreiheit von Tabellen für sehbehinderte Benutzer.

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
        Erlernen erweiterter HTML-Tabellen-Funktionen und der Barrierefreiheit von Tabellen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Überschrift hinzufügen, indem Sie diese innerhalb eines {{htmlelement("caption")}}-Elements einfügen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unterhalb des öffnenden `<table>`-Tags platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel ableiten können, soll die Überschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell entscheiden möchten, ob die Tabelle für sie nützlich ist, während sie die Seite scannen, besonders jedoch für blinde Benutzer. Anstatt dass ein Bildschirmleser den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Überschrift verlassen und dann entscheiden, ob er die Tabelle detaillierter lesen möchte.

Eine Überschrift wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann ebenfalls auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen – diese wird auch von Bildschirmlesern vorgelesen. Wir empfehlen jedoch, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Hinzufügen einer Überschrift

Probieren Sie dies aus, indem Sie ein Beispiel aus unserem vorherigen Artikel erneut betrachten.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers vom Ende der [HTML-Tabellengrundlagen](/de/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col), oder erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie eine geeignete Überschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

> [!NOTE]
> Sie finden unsere Version auf GitHub — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([siehe sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Hinzufügen von Struktur mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen ein wenig komplexer in der Struktur werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich in der Tabelle zu markieren.

Diese Elemente machen die Tabelle für Bildschirmleser nicht zugänglicher und führen nicht eigenständig zu visueller Verbesserung. Sie sind jedoch sehr nützlich für Styling und Layout – als nützliche Anknüpfungspunkte zum Hinzufügen von CSS zu Ihrer Tabelle. Um Ihnen interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und Fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen lassen und den Inhalt durch Scrollen verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist – dies ist üblicherweise die erste Zeile mit den Spaltenüberschriften, aber dies ist nicht zwingend immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist – dies könnte beispielsweise eine letzte Zeile sein, in der die Elemente in den vorherigen Zeilen summiert werden.

> **Note:** `<tbody>` ist immer in jeder Tabelle enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) an – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt hinzufügen sollten – Sie sollten, da es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und Ihr Styling gibt.

### Aktives Lernen: Hinzufügen einer Tabellenstruktur

Lassen Sie uns diese neuen Elemente in Aktion setzen.

1. Erstellen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, damit die "SUM"-Zelle sich über die ersten vier Spalten erstreckt, sodass die tatsächliche Zahl unten in der "Cost"-Spalte erscheint.
4. Fügen Sie dem Stil der Tabelle einige einfache zusätzliche Stile hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente zum Anwenden von CSS sind. Im Kopf Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie diesem Element die folgenden CSS-Codezeilen hinzu:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie, und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie lernen mehr darüber, wenn Sie unsere CSS-Module durchgehen ([Einführung in CSS](/de/docs/Learn/CSS/First_steps) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell über [Tische stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)).

Ihre fertige Tabelle sollte ungefähr wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie finden es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## Verschachteln von Tabellen

Es ist möglich, eine Tabelle innerhalb einer anderen zu verschachteln, solange Sie die komplette Struktur einschließlich des `<table>`-Elements einfügen. Dies wird in der Regel nicht wirklich empfohlen, da es das Markup verwirrender und weniger zugänglich für Bildschirmleser macht, und in vielen Fällen können Sie genauso gut zusätzliche Zellen/Zeilen/Spalten in die bestehende Tabelle einfügen. Es ist jedoch manchmal notwendig, zum Beispiel, wenn Sie Inhalte leicht aus anderen Quellen importieren möchten.

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

Der Ausgabewert sieht etwa so aus:

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

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel dauert es nur einen kurzen Blick auf die Tabelle unten, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, ziehen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften.

<table>
  <caption>Verkaufte Artikel August 2016</caption>
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

Aber was, wenn Sie diese visuellen Verbindungen nicht herstellen können? Wie lesen Sie dann eine Tabelle wie die oben genannte? Sehbehinderte Menschen verwenden häufig einen Bildschirmleser, der ihnen Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann eine echte Herausforderung für eine blinde Person sein. Dennoch können wir mit dem richtigen Markup visuelle durch programmatische Verbindungen ersetzen.

> [!NOTE]
> Laut Daten der [WHO von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit Sehbehinderung.

Dieser Abschnitt des Artikels enthält weitere Techniken, um Tabellen so zugänglich wie möglich zu gestalten.

### Verwendung von Spalten- und Zeilenüberschriften

Bildschirmleser identifizieren alle Überschriften und verwenden sie, um programmatische Verbindungen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Bildschirmleser-Benutzer die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt – siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements).

### Das scope-Attribut

Ein neues Thema für diesen Artikel ist das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das dem `<th>`-Element hinzugefügt werden kann, um Bildschirmlesern genau mitzuteilen, für welche Zellen die Überschrift eine Überschrift ist – ist es eine Überschrift für die Zeile, in der es sich befindet, oder die Spalte, zum Beispiel? Wenn Sie auf unser Ausgabenprotokoll-Beispiel von zuvor zurückblicken, könnten Sie die Spaltenüberschriften unmissverständlich als Spaltenüberschriften folgendermaßen definieren:

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

Und jede Zeile könnte eine Überschrift wie folgt definiert haben (wenn wir zu den Spaltenüberschriften auch Zeilenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Bildschirmleser erkennen derart strukturiertes Markup und ermöglichen es ihren Benutzern, zum Beispiel die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte – `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie die Tabelle "Verkaufte Artikel August 2016" am Anfang dieses Artikelsegments erneut betrachten, sehen Sie, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" steht. All diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die darüber sitzt und die anderen drei Unterüberschriften definiert. Daher sollte "Kleidung" ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

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

Das gleiche gilt für Überschriften, die über mehreren gruppierten Zeilen stehen. Sehen Sie sich die Tabelle "Verkaufte Artikel August 2016" erneut an, diesmal mit Fokus auf die Zeilen mit den Überschriften ("Amsterdam" und "Utrecht" ) (`<th>`). Sie werden bemerken, dass die Überschrift "Die Niederlande", auch als `<th>`-Element ausgezeichnet, beide Zeilen überbrückt und die anderen beiden Unterüberschriften beschreibt. Daher sollte für diese Überschriftzelle `scope="rowgroup"` angegeben werden, um Bildschirmlesern die richtigen Assoziationen zu ermöglichen:

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

Eine Alternative zur Verwendung des `scope`-Attributs besteht darin, die [`id`](/de/docs/Web/HTML/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribute zu verwenden, um Verbindungen zwischen Überschriften und Zellen zu erstellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten {{Glossary("string", "Strings")}} an, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften für entweder eine Datenzelle (`<td>`-Element) oder eine andere Überschriftzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Zeile, der sie angehört, ähnlich wie ein Tabellenkalkulationsprogramm. Damit es gut funktioniert, benötigt die Tabelle sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem Beispiel "Verkaufte Artikel August 2016", können wir die `id`- und `headers`-Attribute wie folgt verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d.h. eine Überschrift darüber hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die darüber sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste an. Sie können so vorgehen wie in einem Tabellenkalkulationsprogramm: Finden Sie die Datenzelle und suchen Sie die entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber Sie sollten konsistent bleiben, um es organisiert zu halten.

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
> Diese Methode schafft sehr präzise Verbindungen zwischen Überschriften und Datenzellen, verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

### Aktives Lernen: Experimentieren mit scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie schließlich eine weitere Kopie der Startdateien und machen Sie die Tabelle diesmal zugänglicher, indem Sie präzise und explizite Verbindungen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen überprüfen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) and [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie jetzt wissen müssen. Sie können sich als nächstes mit unserer [HTML-Tabellen-Bewertung](/de/docs/Learn/HTML/Tables/Structuring_planet_data) testen. Viel Spaß!

Wenn Sie bereits CSS lernen und die Bewertung gut bestanden haben, können Sie fortfahren und lernen, wie Sie HTML-Tabellen gestalten – siehe [Styling tables](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

Wenn Sie mit dem Lernen von CSS beginnen möchten, sehen Sie sich den [CSS-Lernbereich](/de/docs/Learn/CSS) an!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
