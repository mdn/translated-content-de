---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal muss sie erledigt werden. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestalten kann, mit einigen hervorgehobenen speziellen Techniken zum Tabellendesign.

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
          <li>Umgang mit Abständen in Tabellen, einschließlich des Zusammenfallens von Rändern.</li>
          <li>Deutliche Hervorhebung verschiedener Bereich in Tabellen, einschließlich Überschriften, Titel, Kopfzeile, Hauptteil und Fußzeile.</li>
          <li>Wie man Streifenmuster umsetzt und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabelle-Beispiele handeln von Schuhen, Wetter oder Mitarbeitern; wir haben uns entschieden, es etwas interessanter zu machen, indem es um berühmte Punkbands aus dem Vereinigten Königreich geht. Das Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön formatiert, leicht stylbar und zugänglich, dank Features wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht besonders beeindruckend aus. Mit nur der Standard-Browsergestaltung wirkt sie gedrängt, schwer lesbar und ein bisschen langweilig:

{{embedlivesample("unstyled", "", "200")}}

Wir müssen ein wenig CSS verwenden, um dies zu beheben. Sie können eine Tabelle auf jede beliebige Weise mit CSS gestalten. Zum Beispiel haben wir dieses eher "punkige" Design erstellt:

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

Allerdings ist dieses Design ziemlich grell. In diesem Artikel werden wir darauf eingehen, wie Sie es mit einigen Best Practices für das Tabellendesign auszeichnen — wie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Erste Schritte mit dem Stylen unserer Tabelle

Lassen Sie uns gemeinsam durch das Styling unseres Tabellenbeispiels arbeiten.

1. Machen Sie zunächst eine lokale Kopie des [vorher gezeigten](#eine_typische_html-tabelle) Beispiel-Markups und speichern Sie es in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als nächstes eine neue Datei namens `style.css` und speichern Sie sie im gleichen Verzeichnis wie Ihre anderen Dateien.
3. Verbinden Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Schriftart aktualisieren

Dies ist ein kleiner Punkt und nicht strikt relevant für das Styling von Tabellen, aber wir fanden die Standardschriftart ein wenig zu formal für eine Tabelle über Punkbands. Fügen Sie zu Beginn Ihrer CSS die folgende Regel hinzu:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## Abstände

Das Erste, was wir mit unserer Tabelle machen müssen, ist, die Abstände zu ordnen — das standardmäßige Tabellenstyling ist so gedrängt! Um dies zu tun, fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

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

Die wichtigsten Teile, die zu beachten sind, sind wie folgt:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, ihn auf Ihrer Tabelle festzulegen, da er dazu führt, dass sich die Tabelle standardmäßiger verhält. Normalerweise neigen die Tabellenspalten dazu, entsprechend dem Inhalt, den sie enthalten, dimensioniert zu werden, was einige seltsame Ergebnisse erzeugt. Mit `table-layout: fixed` können Sie Ihre Spalten gemäß der Breite ihrer Überschriften dimensionieren und dann den Inhalt entsprechend behandeln. Chris Coyier behandelt diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `90%` und einem {{cssxref("margin")}} von `10px auto` gekoppelt. Diese Einstellungen bedeuten, dass die Tabelle größtenteils das Ansichtsfenster ausfüllt und horizontal zentriert ist.

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist Standardpraxis für alle Tabellenstyling-Bemühungen. Standardmäßig, wenn Sie Ränder auf Tabellenelemente setzen, haben sie alle Abstände zwischen ihnen, wie das folgende Bild verdeutlicht: ![eine 2 mal 2 Tabelle mit Standardabständen zwischen den Rändern zeigt keinen Randzusammenbruch](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, fallen die Ränder auf einen zusammen, was viel besser aussieht: ![eine 2 mal 2 Tabelle mit gesetzter border-collapse-Eigenschaft zeigt den Randverschluss in einem](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — das gibt den Datenelementen etwas Raum zum Atmen, wodurch die Tabelle viel besser lesbar wird.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Die beste Praxis besagt, dass Sie Text links und Zahlen rechts ausrichten sollten; das folgende CSS wird dies erreichen, also fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben die {{cssxref(":nth-child")}} Pseudo-Klasse verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein spezifisches nummeriertes Kind eines Elements oder eine spezifische Sequenz auszuwählen. Hier verwenden wir es, um spezifische `<td>` Elemente innerhalb der <th> Elemente auszuwählen.

Beachten Sie, dass wir auch spezifische Breiten auf den Tabellenzeilen gesetzt haben, wobei die Zeilen, die Text enthalten, viel breiter gesetzt wurden als die Zeilen, die Zahlen enthalten. Das ist eine gute Idee — die Zeilen mit mehr Inhalt benötigen mehr Platz, um ihnen so viel Chance wie möglich zu geben, ihren Inhalt in einer Linie zu haben. Die Zeilen mit weniger Inhalt benötigen nicht so viel Platz, um ihre Daten anzuzeigen, und wenn Sie ihnen viel Platz geben, gehen die Daten ein wenig im Raum verloren und sind daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenelemente oben in ihren Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}} Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td` Regel zu folgendem:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um die Wirkung Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Ränder hinzufügen, um visuelle Trennung zwischen der Tabelle `<caption>`, den Daten und der Gesamtreihe unten zu schaffen. Um dies zu tun, fügen Sie die folgenden Regeln zu Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als nächstes Ihre bestehende `table` Regel zu folgendem:

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

Speichern Sie und aktualisieren Sie; Ihre Tabelle sollte jetzt ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie man **Zebramuster** — abwechselnde Reihen von Farben, die die unterschiedlichen Datenreihen in Ihrer Tabelle leichter verständlich und lesbar machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Früher haben Sie den {{cssxref(":nth-child")}} Selektor gesehen, der verwendet wurde, um spezifische Kindelemente auszuwählen. Es kann auch eine Formel als Parameter erhalten, sodass es eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden nummerierten Kinder auswählen (1, 3, 5, usw.) und die Formel `2n` würde alle geraden nummerierten Kinder auswählen (2, 4, 6, usw.) Wir haben das `odd` Schlüsselwort in unserem Code verwendet, das eine Abkürzung für die `2n+1` Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Das Styling der Beschriftung

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Beschriftung stylen. Um dies zu tun, fügen Sie folgendes am Ende Ihrer `style.css` Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier ist nichts Bemerkenswertes außer der {{cssxref("caption-side")}} Eigenschaft, der ein Wert von `bottom` gegeben wurde. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle positioniert wird.

## Fertiges Tabellendesign

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

## Schnelltipps zum Tabellendesign

Bevor wir weitermachen, dachten wir, wir würden Ihnen eine schnelle Liste der nützlichsten oben illustrierten Punkte bereitstellen:

- Halten Sie Ihr Tabellenmarkup so einfach wie möglich und behalten Sie die Flexibilität.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersagbareres Tabellenlayout zu schaffen, das es Ihnen ermöglicht, Spaltenbreiten leichter festzulegen, indem Sie {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente ineinander fallen zu lassen, was ein ordentlicheres und leichter kontrollierbares Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Stellen für CSS-Anwendungen zu schaffen, sodass es einfacher ist, bei Bedarf Stile übereinander zu legen.
- Verwenden Sie Zebra-Streifen, um abwechselnde Reihen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihr {{htmlelement("th")}} und {{htmlelement("td")}} Text auszurichten, um Dinge ordentlicher und leichter nachzuvollziehen.

## Zusammenfassung

Nachdem wir das Styling von Tabellen abgeschlossen haben, brauchen wir etwas anderes, um unsere Zeit zu beschäftigen. Der nächste Artikel untersucht das Debugging von CSS — wie man Probleme wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie sollten, löst. Dies umfasst Informationen über die Verwendung von Browser-Entwicklerwerkzeugen, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
