---
title: Styling von Tabellen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 5089ffcfd84543fbeed2754a82b77db25030c0a8
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Styling von HTML-Tabellen gehört nicht zu den glamourösesten Aufgaben der Welt, aber manchmal müssen wir es doch tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet, und hebt einige spezifische Techniken zur Tabellenformatierung hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a
        >, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich Border-Collapsing.</li>
          <li>Deutliche Hervorhebung verschiedener Tabellenbereiche einschließlich Überschriften, Caption, Kopfzeile, Hauptteil und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun, „typisch“ ist vielleicht übertrieben — die meisten HTML-Tabellen-Beispiele handeln von Schuhen, dem Wetter oder Angestellten. Wir haben uns entschieden, es interessanter zu machen, indem es um berühmte Punk-Bands aus Großbritannien geht. Der Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Features wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht sie nicht besonders ansprechend aus. Mit nur den Standardeinstellungen des Browsers sieht sie beengt, schwer lesbar und ein wenig langweilig aus:

{{embedlivesample("unstyled", "", "200")}}

Wir müssen etwas CSS verwenden, um das zu verbessern. Sie können eine Tabelle nach Belieben mit CSS stylen. Zum Beispiel haben wir dieses ziemlich „punkige“ Design entworfen:

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

{{embedlivesample("punk-style", "", "500")}}

Dieses Design ist jedoch ziemlich grell. In diesem Artikel werden wir Ihnen zeigen, wie Sie es mit einigen Best Practices für Tabellendesign auszeichnen können — wie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Einstieg in das Styling unserer Tabelle

Lassen Sie uns gemeinsam das Beispiel für das Styling unserer Tabelle durchgehen.

1. Machen Sie zunächst eine lokale Kopie des [zuvor gezeigten](/de/docs/Learn_web_development/Core/Styling_basics/Tables#a_typical_html_table) Beispielmarkups und speichern Sie es in einem Arbeitsverzeichnis auf Ihrem Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verlinken Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihrem {{htmlelement("head")}}-Element einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Dies ist ein kleiner Punkt und nicht strikt relevant für das Styling von Tabellen, aber wir fanden, dass die Standardschriftart etwas zu formell für eine Tabelle über Punk-Bands wirkte. Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das Erste, was wir mit unserer Tabelle machen müssen, ist, die Abstände zu regeln — das Standard-Tabellenstyling ist so beengt! Fügen Sie dazu das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

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

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee, da er die Tabelle von vornherein etwas vorhersehbarer macht. Normalerweise werden Tabellenspalten entsprechend dem Inhalt, den sie enthalten, bemessen, was einige seltsame Ergebnisse erzeugt. Mit `table-layout: fixed` können Sie Ihre Spalten nach der Breite ihrer Überschriften bemessen und dann mit ihrem Inhalt entsprechend umgehen. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `90%` und einem {{cssxref("margin")}} von `10px auto` gekoppelt. Diese Einstellungen bedeuten, dass die Tabelle größtenteils die Ansicht ausfüllt und horizontal zentriert wird.

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist gängige Best Practice für jede Tabellenformatierung. Standardmäßig haben alle Tabellenelemente mit gesetzten Rändern eine Abtrennung zwischen ihnen, wie das untenstehende Bild zeigt: ![eine 2x2-Tabelle mit den Standardabständen zwischen den Rändern, die kein Border-Collapse zeigen](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es vielleicht der gewünschte Look ist, wer weiß?). Mit `border-collapse: collapse;` setzen sich die Ränder zu einem zusammen, was deutlich besser aussieht: ![eine 2x2-Tabelle mit gesetztem border-collapse auf collapse, das zeigt, dass sich die Ränder zu einem vereinen](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} bei den {{htmlelement("th")}}- und {{htmlelement("td")}}-Elementen gesetzt — das gibt den Daten etwas Raum zum Atmen und macht die Tabelle viel lesbarer.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als Nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Best Practices legen nahe, dass Sie Text links und Zahlen rechts ausrichten sollten. Das folgende CSS erreicht genau das, fügen Sie es daher jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben die {{cssxref(":nth-child")}}-Pseudo-Klasse verwendet, einen nützlichen Selektor, der es Ihnen ermöglicht, ein bestimmtes nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir ihn, um spezifische `<td>`-Elemente innerhalb der <th>-Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten für die Tabellenspalten festgelegt haben, wobei die Reihen, die Text enthalten, viel breiter gesetzt sind als die, die Zahlen enthalten. Das ist eine gute Idee — die Reihen mit mehr Inhalt benötigen mehr Platz, um möglichst den gesamten Inhalt in einer Zeile anzuzeigen. Die Reihen mit weniger Inhalt brauchen nicht so viel Platz, und tatsächlich geht der Inhalt bei viel Platz etwas verloren und ist daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenobjekte am oberen Rand ihrer Zellen und nicht in der Mitte ausgerichtet sind. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td`-Regel auf die folgende:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern und aktualisieren Sie erneut, um die Wirkung Ihrer neuesten CSS-Aktualisierungen zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Ränder hinzufügen, um visuelle Trennungen zwischen der Tabellen-<caption>, den Daten und der Gesamtsumme am unteren Rand zu schaffen. Um dies zu tun, fügen Sie die folgenden Regeln Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als Nächstes Ihre bestehende `table`-Regel auf die folgende:

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

## Zebra-Streifung

Wir wollten einen separaten Abschnitt dafür widmen, Ihnen zu zeigen, wie man **Zebra-Streifen** implementiert — abwechselnde Zeilenfarben, die es erleichtern, die unterschiedlichen Datenzeilen in Ihrer Tabelle zu lesen und zu interpretieren. Fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Früher haben Sie den {{cssxref(":nth-child")}}-Selektor gesehen, der verwendet wurde, um spezifische Kindelemente auszuwählen. Er kann auch eine Formel als Parameter erhalten, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder auswählen (1, 3, 5, etc.) und die Formel `2n` alle geraden Kinder (2, 4, 6, etc.). Wir haben das Schlüsselwort `odd` in unserem Code verwendet, was eine Abkürzung für die `2n+1`-Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Styling der Caption

Es gibt eine letzte Sache, die wir mit unserer Tabelle machen müssen — das Styling der Caption. Fügen Sie dazu das folgende am Ende Ihrer `style.css`-Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Besonderes, außer der {{cssxref("caption-side")}}-Eigenschaft, die mit einem Wert von `bottom` festgelegt wurde. Dies positioniert die Caption am unteren Rand der Tabelle.

## Fertige Tabelle

Ihr fertiges Tabellendesign sollte folgendermaßen aussehen:

```css hidden live-sample___best-practice-style
html {
  font-family: Arial, Helvetica, sans-serif;
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
  background-color: #eeeeee;
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

Bevor wir fortfahren, dachten wir, dass wir Ihnen eine schnelle Liste der nützlichsten Punkte, die oben illustriert wurden, geben könnten:

- Machen Sie Ihr Tabellenmarkup so einfach wie möglich und halten Sie es flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das Ihnen ermöglicht, Spaltenbreiten einfach über das Setzen von {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente ineinanderfallen zu lassen, was ein aufgeräumteres und leichter kontrollierbares Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Stellen anzubieten, an denen Sie CSS anwenden können, sodass es einfacher ist, bei Bedarf Stile übereinander zu legen.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihr {{htmlelement("th")}}- und {{htmlelement("td")}}-Text auszurichten, um die Dinge aufgeräumter und leichter nachvollziehbar zu machen.

## Zusammenfassung

Mit dem Styling von Tabellen hinter uns brauchen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel erforscht das Debuggen von CSS — wie man Probleme löst, wie z.B. Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie sollten. Dies beinhaltet Informationen über die Verwendung der Browser-Entwicklertools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
