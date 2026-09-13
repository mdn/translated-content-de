---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet, wobei einige spezifische Techniken zum Stylen von Tabellen hervorgehoben werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics">HTML-Tabellen</a>, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Handhabung von Abständen in Tabellen, einschließlich des Zusammenfallens von Rändern.</li>
          <li>Klar hervorheben verschiedener Tabellensegmente einschließlich Überschriften, Titel, Kopfzeile, Körper und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit dem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, es interessanter zu machen und haben es auf berühmte Punkbands aus dem Vereinigten Königreich bezogen. Das Markup sieht folgendermaßen aus:

```html live-sample___unstyled live-sample___punk-style live-sample___best-practice-style
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

Die Tabelle ist ordentlich markiert, leicht zu stylen und zugänglich, dank Features wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}} usw. Leider sieht sie nicht sehr gut aus. Mit nur der Standard-Browser-Styling wirkt sie gedrängt, schwer lesbar und ein wenig langweilig:

{{embedlivesample("unstyled", "", "200")}}

Wir müssen etwas CSS verwenden, um das zu beheben. Sie können eine Tabelle auf jede gewünschte Weise mit CSS stylen. Zum Beispiel haben wir dieses eher "punkige" Design erstellt:

```css hidden live-sample___punk-style
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
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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

{{embedlivesample("punk-style", "", "500")}}

Dieses Design ist jedoch ziemlich grell. In diesem Artikel werden wir Sie dazu bringen, es mit einigen Best Practices für Tabellendesign zu kennzeichnen — wie sie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) erläutert werden.

## Beginnen mit dem Styling unserer Tabelle

Lassen Sie uns gemeinsam durch das Styling unseres Tabellenbeispiels arbeiten.

1. Machen Sie zunächst eine lokale Kopie des [früher gezeigten](#eine_typische_html-tabelle) Muster-Markups und speichern Sie es in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihren {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## Abstände

Das Erste, was wir bei unserer Tabelle ändern müssen, sind die Abstände — das Standard-Tabellenstyling ist so gedrängt! Um dies zu tun, fügen Sie dem Ende Ihrer `style.css` Datei das folgende CSS hinzu:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Die wichtigsten Punkte sind wie folgt:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, den Sie für Ihre Tabelle festlegen sollten, da er die Tabelle standardmäßig etwas vorhersehbarer macht. Normalerweise neigen Tabellenspalten dazu, entsprechend dem Inhalt, den sie enthalten, dimensioniert zu werden, was zu seltsamen Ergebnissen führen kann. Mit `table-layout: fixed` können Sie Ihre Spalten entsprechend der Breite ihrer Überschriften dimensionieren und dann deren Inhalt angemessen behandeln. Chris Coyier beschreibt diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `90%` und einem {{cssxref("margin")}} von `10px auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle größtenteils das Ansichtsfenster ausfüllt und horizontal zentriert ist.

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist Standardbest-Practice für jedes Tabellendesignvorhaben. Standardmäßig, wenn Sie Ränder an Tabellenelementen festlegen, haben sie alle Abstände zwischen sich, wie das untenstehende Bild zeigt: ![a 2 by 2 table with default spacing between the borders showing no border collapse](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es vielleicht das Aussehen ist, das Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, fallen die Ränder auf einen zusammen, was viel besser aussieht: ![a 2 by 2 table with border-collapse property set to collapse showing borders collapse into one](border-collapse.png)
- Wir haben ein wenig {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — dies gibt den Datenelementen etwas Raum zum Atmen und macht die Tabelle viel besser lesbar.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als Nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Best Practice verlangt, dass Sie Text linksbündig und Zahlen rechtsbündig ausrichten; das folgende CSS wird dies erreichen, fügen Sie es also jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben die {{cssxref(":nth-child")}} Pseudoklasse hier verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein spezifisch nummeriertes Kind eines Elements oder eine spezifische Sequenz auszuwählen. Hier verwenden wir sie, um spezifische `<td>` Elemente innerhalb der <th> Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten an den Tabellenzeilen festgelegt haben, wobei die Zeilen, die Text enthalten, wesentlich breiter gesetzt werden als die Zeilen, die Zahlen enthalten. Dies ist eine gute Idee — die Zeilen, die mehr Inhalt enthalten, benötigen mehr Platz, um ihnen die größtmögliche Chance zu geben, ihren Inhalt in einer Zeile zu halten. Die Zeilen, die weniger Inhalt enthalten, benötigen nicht viel Platz, um ihre Daten darzustellen, und tatsächlich, wenn Sie ihnen viel Platz geben, gehen die Daten in dem Raum verloren und sind daher schwieriger zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenelemente am oberen Rand ihrer Zellen ausgerichtet sind, anstelle der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}} Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td` Regel zu folgendem:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern und aktualisieren Sie erneut, um die Wirkung Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht schon viel besser aus, aber wir sollten noch einige Ränder hinzufügen, um visuelle Trennung zwischen dem Tabellen-`<caption>`, den Daten und der Gesamtszeile am Boden zu schaffen. Dazu fügen Sie Ihrer CSS die folgenden Regeln hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als Nächstes Ihre bestehende `table` Regel auf folgendes:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Speichern und aktualisieren Sie; Ihre Tabelle sollte nun ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt zeigen, wie Sie **Zebra-Streifen** implementieren — abwechselnde Farbzeilen, die die unterschiedlichen Datenzeilen in Ihrer Tabelle einfacher zu parsen und zu lesen machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #dddddd;
}
```

Früher haben Sie gesehen, wie der {{cssxref(":nth-child")}} Selektor verwendet wurde, um spezifische Kind-Elemente auszuwählen. Es kann auch eine Formel als Parameter übergeben werden, sodass es eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, usw.) auswählen und die Formel `2n` würde alle geraden Kinder (2, 4, 6, usw.) auswählen. Wir haben das `odd` Schlüsselwort in unserem Code verwendet, was eine Abkürzung für die `2n+1` Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Das Caption stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — das Caption stylen. Fügen Sie dazu folgendes zum Ende Ihrer `style.css` Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}} Eigenschaft, die den Wert `bottom` erhalten hat. Dies bewirkt, dass das Caption am unteren Rand der Tabelle positioniert wird.

## Fertige Tabelle

Ihr fertiges Tabellendesign sollte folgendermaßen aussehen:

```css hidden live-sample___best-practice-style
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

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

tfoot {
  border-top: 1px solid #999999;
}

tbody tr:nth-child(odd) {
  background-color: #dddddd;
}

caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

{{embedlivesample("best-practice-style", "", "520")}}

## Schnelle Tipps zum Tabellenstyling

Bevor wir fortfahren, dachten wir, dass wir Ihnen eine schnelle Liste der nützlichsten oben illustrierten Punkte geben:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein festeres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, die Spaltenbreiten leicht durch das Festlegen von {{cssxref("width")}} an ihren Überschriften ({{htmlelement("th")}}) zu setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder von Tabellenelementen ineinanderfallen zu lassen und ein ordentlicheres und einfacher zu kontrollierendes Aussehen zu erzeugen.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Stellen zu schaffen, an denen Sie CSS anwenden können, sodass es einfacher ist, Stile aufeinander zu schichten, wenn erforderlich.
- Verwenden Sie Zebra-Streifen, um alternative Zeilen einfacher lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}} und {{htmlelement("td")}} Texte auszurichten, um die Dinge ordentlicher und einfacher zu folgen zu machen.

## Zusammenfassung

Nachdem wir nun das Styling von Tabellen hinter uns haben, brauchen wir etwas anderes, um unsere Zeit zu beschäftigen. Der nächste Artikel beschäftigt sich mit dem Debuggen von CSS — wie man Probleme löst wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie es sollten. Dies beinhaltet Informationen zur Nutzung der Entwicklertools des Browsers, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}
