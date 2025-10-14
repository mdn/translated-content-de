---
title: Gestaltung von Tabellen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 56ccb15b023cb11234cd044a68d6d3a93e752326
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}

Das Gestalten einer HTML-Tabelle ist vielleicht nicht die aufregendste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie Sie HTML-Tabellen ansprechend gestalten können, indem einige spezifische Techniken zur Tabellenstilisierung hervorgehoben werden.

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
          <li>Umgang mit Abständen in Tabellen, einschließlich Rahmenkollaps.</li>
          <li>Klar hervorheben verschiedener Tabellenbereiche, einschließlich Überschriften, Beschriftung, Kopf-, Körper- und Fußbereich.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit dem Blick auf eine typische HTML-Tabelle. Na ja, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben beschlossen, es interessanter zu machen, indem wir sie über berühmte Punk-Bands aus Großbritannien gestalten. Der Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, einfach stilisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht sie nicht so toll aus. Mit nur dem Standard-Browser-Design sieht sie eingeengt, schwer lesbar und ein wenig langweilig aus:

{{embedlivesample("unstyled", "", "200")}}

Wir müssen etwas CSS nutzen, um das zu verbessern. Sie können eine Tabelle auf jede gewünschte Weise mit CSS gestalten. Zum Beispiel haben wir dieses eher "punkig" aussehende Design erstellt:

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

Dieses Design ist jedoch eher grell. In diesem Artikel werden wir Ihnen zeigen, wie Sie es mithilfe einiger bewährter Praktiken für das Tabellen-Design markieren können — wie sie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) umrissen sind.

## Erste Schritte mit der Gestaltung unserer Tabelle

Arbeiten wir gemeinsam an der Gestaltung unseres Tabellenbeispiels.

1. Erstellen Sie zunächst eine lokale Kopie des [früher gezeigten](#eine_typische_html-tabelle) Beispiel-Markups und speichern Sie es in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile in Ihren {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Dies ist ein kleiner Punkt, der nicht unbedingt mit der Gestaltung von Tabellen zu tun hat, aber wir dachten, die Standardschriftart sah für eine Tabelle über Punk-Bands etwas zu formell aus. Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## Abstände

Das Erste, was wir mit unserer Tabelle tun müssen, ist, die Abstände zu sortieren — das Standardtabellen-Design ist so eingeengt! Fügen Sie dazu folgendes CSS am Ende Ihrer `style.css` Datei hinzu:

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

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist generell eine gute Idee, da er die Tabelle dazu bringt, sich von vornherein etwas vorhersehbarer zu verhalten. Normalerweise werden Tabellenspalten so dimensioniert, wie viel Inhalt sie enthalten, was zu einigen seltsamen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten in der Breite ihrer Überschriften dimensionieren und dann mit ihrem Inhalt entsprechend umgehen. Chris Coyier beschreibt diese Technik detaillierter in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `90%` und einem {{cssxref("margin")}} von `10px auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle größtenteils den Ansichtsbereich ausfüllt und horizontal zentriert wird.

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist standardmäßige Best Practice für jeden Versuch, eine Tabelle zu gestalten. Standardmäßig, wenn Sie Rahmen auf Tabellenelementen setzen, haben sie alle Abstände zwischen sich, wie das unten stehende Bild zeigt: ![eine 2x2-Tabelle mit dem Standardabstand zwischen den Rahmen, der keinen Rahmenkollaps zeigt](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es das sein könnte, was Sie wollen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, kollabieren die Ränder in einen, was viel besser aussieht: ![eine 2x2-Tabelle mit der Eigenschaft border-collapse auf collapse gesetzt, das zeigt, dass die Ränder in einen zusammenfallen](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — das gibt den Datenartikeln etwas Raum zum Atmen, wodurch die Tabelle viel lesbarer aussieht.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als Nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Die beste Praxis besagt, dass Text nach links und Zahlen nach rechts ausgerichtet werden sollten; das folgende CSS wird das erreichen, fügen Sie es jetzt Ihrem CSS am Ende hinzu.

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

Wir haben hier die {{cssxref(":nth-child")}} Pseudo-Klasse verwendet; ein nützlicher Selektor, der es Ihnen erlaubt, ein bestimmtes nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir ihn, um spezifische `<td>` Elemente innerhalb der <th> Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tabellenreihen gesetzt haben, wobei die Reihen, die Text enthalten, viel breiter als die Reihen, die Zahlen enthalten, gesetzt werden. Das ist eine gute Idee — die Frachtgüter mehr Inhalt benötigen mehr Raum, um ihnen so viel Chance wie möglich zu geben, ihren Inhalt auf einer Linie zu halten. Die Reihen, die weniger Inhalt haben, benötigen nicht so viel Platz, um ihre Daten anzuzeigen, und in der Tat, wenn Sie ihnen viel Platz geben, wird der Dateninhalt im Raum verloren und ist daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenartikel oben in ihren Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}} Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende Regel `th, td` zu folgendem:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern und aktualisieren Sie erneut, um den Effekt Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rahmen

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Ränder hinzufügen, um eine visuelle Trennung zwischen der Tabellen-`<caption>`, den Daten und der Gesamtzeile am unteren Ende bereitzustellen. Um dies zu tun, fügen Sie die folgenden Regeln Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als Nächstes Ihre vorhandene `table` Regel zu folgendem:

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

Speichern und aktualisieren Sie; Ihre Tabelle sollte jetzt langsam ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen eigenen Abschnitt zeigen, wie Sie **Zebra-Streifen** implementieren — abwechselnd farbige Reihen, die es einfacher machen, die verschiedenen Datenreihen in Ihrer Tabelle zu durchsuchen und zu lesen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Früher haben Sie den {{cssxref(":nth-child")}} Selektor gesehen, der zum Auswählen bestimmter Kindelemente verwendet wurde. Er kann auch eine Formel als Parameter haben, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden nummerierten Kinder (1, 3, 5, etc.) auswählen und die Formel `2n` würde alle geraden nummerierten Kinder (2, 4, 6, etc.) auswählen. Wir haben das Schlüsselwort `odd` in unserem Code verwendet, das eine Abkürzung für die `2n+1` Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, erneut zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Gestaltung der Beschriftung

Es gibt noch eine letzte Sache, die mit unserer Tabelle zu tun ist — die Beschriftung gestalten. Fügen Sie dazu folgendes am Ende Ihrer `style.css` Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Außergewöhnliches, außer der {{cssxref("caption-side")}} Eigenschaft, die auf `bottom` gesetzt ist. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle positioniert wird.

## Fertige Tabelle

Ihr fertiges Tabellendesign sollte so aussehen:

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

## Schnelltipps zur Tabellenstilisierung

Bevor wir fortfahren, dachten wir, wir geben Ihnen eine kurze Liste der nützlichsten Punkte, die oben illustriert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellendesign zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten leicht durch Setzen der {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um Rahmen von Tabellenelemente zusammenfallen zu lassen, was ein ordentlicheres und leichter kontrollierbares Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Blöcke zu unterteilen und zusätzliche Stellen bereitzustellen, auf die CSS angewendet werden kann, sodass es einfacher ist, Stile aufeinander zu legen, wenn erforderlich.
- Verwenden Sie Zebra-Streifen, um alternative Reihen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um den Text in Ihren {{htmlelement("th")}} und {{htmlelement("td")}} zu richten, um alles ordentlicher und leichter nachvollziehbar zu machen.

## Zusammenfassung

Da wir jetzt Tabellen gestaltet haben, brauchen wir eine neue Herausforderung. Der nächste Artikel befasst sich mit dem Debuggen von CSS — wie man Probleme löst, wie zum Beispiel Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn dies erwartet wird. Dies umfasst Informationen zur Verwendung der DevTools des Browsers, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}
