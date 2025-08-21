---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Eine HTML-Tabelle zu stylen ist nicht die aufregendste Aufgabe der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet und hebt einige spezifische Techniken zum Tabellenstyling hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a>, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich des Zusammenfallens von Rahmen.</li>
          <li>Deutliches Hervorheben verschiedener Tabellenbereiche einschließlich Überschriften, Beschriftung, Kopfzeile, Hauptteil und Fußzeile.</li>
          <li>Wie man Zebramuster implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Lassen Sie uns mit einem Blick auf eine typische HTML-Tabelle beginnen. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, es interessanter zu machen und es auf berühmte Punkbands aus dem Vereinigten Königreich zu beziehen. Der Markup sieht folgendermaßen aus:

```html live-sample___unstyled live-sample___styled
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If The Kids Are United</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

Die Tabelle ist schön markiert, leicht stylbar und zugänglich dank Merkmalen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht besonders gut aus. Mit nur dem Standard-Browser-Styling wirkt sie beengt, schwer lesbar und etwas langweilig:

{{embedlivesample("unstyled")}}

Wir müssen etwas CSS verwenden, um dies zu beheben. Sie können eine Tabelle auf jede gewünschte Weise mit CSS stylen. Zum Beispiel haben wir dieses ziemlich "punkige" Design erstellt:

```css hidden live-sample___styled
/* font import */
@import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";

/* spacing */
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th {
  line-height: 1.5;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}

/* typography */
html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

/* graphics */
thead,
tfoot {
  background: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg");
  color: white;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.5));
  border: 3px solid purple;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png");
}

table {
  background-color: #ff33cc;
}

/* caption */
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("styled", "", "500")}}

Allerdings ist dieses Design recht grell. In diesem Artikel werden wir Ihnen zeigen, wie Sie es mit einigen bewährten Praktiken für das Design von Tabellen markieren — wie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Einstieg in das Styling unserer Tabelle

Lassen Sie uns gemeinsam das Styling unseres Tabellenbeispiels durchgehen.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html) und speichern Sie sie in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verlinken Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisieren der Schriftart

Dies ist ein kleiner Punkt und nicht direkt relevant für das Styling von Tabellen, aber wir fanden die Standardschriftart für eine Tabelle über Punkbands etwas zu formell. Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das Erste, was wir an unserer Tabelle ändern müssen, ist der Abstand - der Standard-Tabellenstil ist so beengt! Um dies zu beheben, fügen Sie am Ende Ihrer `style.css` Datei das folgende CSS hinzu:

```css
table {
  table-layout: fixed;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Die wichtigsten Punkte, die beachtet werden sollten, sind:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, um auf Ihrer Tabelle festzulegen, da er die Tabelle standardmäßig etwas vorhersehbarer macht. Normalerweise neigen Tabellen dazu, Spalten entsprechend dem Inhalt zu bemessen, was zu seltsamen Ergebnissen führen kann. Mit `table-layout: fixed` können Sie Ihre Spalten nach der Breite ihrer Überschriften bemessen und deren Inhalt entsprechend anpassen. Chris Coyier bespricht diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `80%`, einer {{cssxref("min-width")}} von `1000px` und einem {{cssxref("margin")}} von `0 auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle in breiteren Ansichten größtenteils ausgefüllt und horizontal zentriert wird, während die Tabelle in schmaleren Ansichten auf eine lesbare Breite reduziert wird und außerhalb des Bildschirms reicht. Mobilnutzer können dann beispielsweise durch die Tabelle scrollen, um sie vollständig zu lesen. Dies ist besser, als die Tabelle an die Breite eines schmalen Bildschirms anzupassen, wo sie gedrängt und schwer lesbar wirkt.

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist eine standardmäßige Best Practice für jeden Tabellenstyling-Versuch. Standardmäßig haben Sie, wenn Sie Rahmen auf Tabellenelemente setzen, zwischen ihnen einen Abstand, wie das untenstehende Bild zeigt: ![eine 2x2 Tabelle mit Standardabständen zwischen den Rahmen, die keinen Rahmenzusammenfall zeigen](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es vielleicht der gewünschte Look ist, wer weiß?). Mit `border-collapse: collapse;` eingestellt, fallen die Rahmen zu einem zusammen, was viel besser aussieht: ![eine 2x2 Tabelle mit dem auf collapse gesetzten border-collapse-Wert zeigt zusammenfallende Rahmen](border-collapse.png)
- Wir haben ein wenig {{cssxref("padding")}} bei den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen festgelegt — dies gibt den Datenobjekten etwas Platz zum Atmen und lässt die Tabelle viel lesbarer aussehen.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als nächstes werden wir die Ausrichtung der verschiedenen Datentypen innerhalb ihrer Zellen behandeln. Beste Praktiken besagen, dass Sie Text links und Zahlen rechts ausrichten sollten; das folgende CSS erreicht das, fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

```css
tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

Wir haben die {{cssxref(":nth-child")}} Pseudoklasse verwendet, einen nützlichen Selektor, der es Ihnen ermöglicht, ein bestimmtes nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir ihn, um spezifische `<td>` Elemente innerhalb der <th> Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tabellenzeilen festgelegt haben, wobei die Zeilen, die Text enthalten, viel breiter als die Zeilen, die Zahlen enthalten, gesetzt sind. Dies ist eine gute Idee — die Zeilen mit mehr Inhalt benötigen mehr Platz, um ihr volles Potenzial zu entfalten und den Inhalt in einer Zeile anzuzeigen. Die Zeilen mit weniger Inhalt benötigen nicht so viel Platz, um ihre Daten anzuzeigen, und wenn Sie ihnen viel Platz geben, geht der Dateninhalt im Raum verloren und wird schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenobjekte an die Oberkante ihrer Zellen ausgerichtet sind und nicht mittig. Um dies zu erreichen verwenden wir die {{cssxref("vertical-align")}} Eigenschaft. Aktualisieren Sie Ihre bestehende `th, td` Regel zu folgendem:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern und aktualisieren Sie erneut, um die Wirkung Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rahmen

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Rahmen hinzufügen, um die visuelle Trennung zwischen der Tabellendaten und der Totalzeile unten zu unterstützen. Um dies zu tun, fügen Sie folgende Regeln Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als nächstes Ihre vorhandene `table` Regel zu folgendem:

```css
table {
  table-layout: fixed;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Speichern und aktualisieren; Ihre Tabelle sollte nun ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um zu zeigen, wie man **Zebra-Streifen** implementiert — abwechselnde Farbzeilen, die es erleichtern, die verschiedenen Datenzeilen in Ihrer Tabelle zu erfassen und zu lesen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Früher haben Sie gesehen, wie der {{cssxref(":nth-child")}} Selektor verwendet wurde, um spezifische Kinderelemente auszuwählen. Er kann auch mit einer Formel als Parameter angegeben werden, um eine Sequenz von Elementen auszuwählen. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, etc.) auswählen und die Formel `2n` würde alle geraden Kinder (2, 4, 6, etc.) auswählen. Wir haben das Keyword `odd` in unserem Code verwendet, das eine Abkürzung für die `2n+1` Formel ist (`even` ist eine Abkürzung für `2n`).

Auch hier gilt: nicht vergessen zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Stylen der Beschriftung

Es gibt noch eine letzte Sache an unserer Tabelle zu tun — die Beschriftung stylen. Um dies zu tun, fügen Sie am Ende Ihrer `style.css` Datei Folgendes hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}} Eigenschaft, die den Wert `bottom` hat. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle positioniert wird.

## Tipps für schnelles Tabellenstyling

Bevor wir weitermachen, möchten wir Ihnen eine kurze Liste der nützlichsten oben beschriebenen Punkte zur Verfügung stellen:

- Machen Sie Ihren Tabellenmarkup so einfach wie möglich und halten Sie es flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten einfach festzulegen, indem Sie {{cssxref("width")}} auf deren Überschriften ({{htmlelement("th")}}) setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Rahmen der Tabellenelemente ineinander übergehen zu lassen, was ein ordentlicheres und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Stellen zu bieten, um CSS anzuwenden. Dies erleichtert es, bei Bedarf Stile übereinander zu schichten.
- Verwenden Sie Zebra-Streifen, um alternative Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}} und {{htmlelement("td")}} Texte auszurichten und die Übersichtlichkeit zu verbessern.

## Zusammenfassung

Nachdem wir uns nun mit dem Styling von Tabellen beschäftigt haben, brauchen wir etwas Anderes, um unsere Zeit zu füllen. Der nächste Artikel erkundet das Debugging von CSS — wie man Probleme wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie es erwarten, löst. Dazu gehört auch die Verwendung von Browser-DevTools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
