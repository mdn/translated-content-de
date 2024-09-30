---
title: Tabellen stylen
slug: Learn/CSS/Building_blocks/Styling_tables
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel bietet einen Leitfaden, um HTML-Tabellen ansprechend zu gestalten, mit einigen hervorgehobenen spezifischen Techniken zum Stylen von Tabellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Kenntnisse zu
        <a href="/de/docs/Learn/HTML/Tables">HTML-Tabellen</a>, und eine Vorstellung davon, wie CSS funktioniert (erst die CSS-Grundlagen studieren.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie man HTML-Tabellen effektiv stylt.</td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit dem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Angestellten; wir haben uns entschieden, es interessanter zu machen, indem wir über berühmte Punkbands aus Großbritannien sprechen. Das Markup sieht folgendermaßen aus:

```html
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

    <!-- several other great bands -->

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}} usw. Leider sieht es beim Rendern auf dem Bildschirm nicht gut aus (sehen Sie es live bei [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle, die eine Zusammenfassung der berühmten Punkbands Großbritanniens zeigt](table-unstyled.png)

Mit nur dem Standardbrowserstyling wirkt es zusammengedrängt, schwer lesbar und langweilig. Wir müssen etwas CSS verwenden, um dies zu korrigieren.

## Unsere Tabelle stylen

Lassen Sie uns gemeinsam das Beispiel unserer Tabelle stylen.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder herunter ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)), und platzieren Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im gleichen Verzeichnis wie Ihre anderen Dateien.
3. Verlinken Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihr {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

### Abstände und Layout

Das erste, was wir tun müssen, ist die Abstände und das Layout zu sortieren — das Standard-Tabellenstyling ist so beengt! Fügen Sie dazu folgendes CSS in Ihre `style.css`-Datei ein:

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
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
```

Die wichtigsten Punkte hier sind:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee, um es Ihrer Tabelle zu setzen, da die Tabelle dadurch standardmäßig etwas vorhersehbarer reagiert. Normalerweise tendieren Tabellenspalten dazu, nach der Menge ihres Inhalts bemessen zu werden, was einige seltsame Ergebnisse hervorruft. Mit `table-layout: fixed` können Sie Ihre Spalten nach der Breite ihrer Überschriften dimensionieren und dann ihren Inhalt entsprechend behandeln. Deshalb haben wir die vier verschiedenen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ("Wählen Sie das n-te Kind aus, das ein {{htmlelement("th")}}-Element in einer Sequenz innerhalb eines {{htmlelement("thead")}}-Elements ist") ausgewählt und ihnen feste Prozentbreiten zugewiesen. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Möglichkeit bietet, Ihre Tabellenspalten zu dimensionieren. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einem {{cssxref("width")}} von 100% gekoppelt, was bedeutet, dass die Tabelle jeden Container füllt, in dem sie sich befindet, und schön reaktionsfähig ist (obwohl es noch einiger Arbeit bedarf, um sie auf schmalen Bildschirmbreiten gut aussehen zu lassen).

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist die standardmäßige Best Practice für jeden Table-Styling-Vorgang. Standardmäßig haben tabellenelemente, wenn Sie Grenzen auf diese setzen, alle einen Abstand zwischen sich, wie das untenstehende Bild zeigt: ![eine 2x2 Tabelle mit Standardabständen zwischen den Grenzen, die keine Grenzfusion zeigt](no-border-collapse.png) Dies sieht nicht sehr schön aus (es sei denn, es ist der Look, den Sie wünschen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, kollabieren die Grenzen zu einer, was viel besser aussieht: ![eine 2x2 Tabelle mit der Border-Collapse-Eigenschaft auf collapse eingestellt, die zeigt, dass Grenzen zu einem kollabieren](border-collapse.png)
- Wir haben eine {{cssxref("border")}} um die ganze Tabelle gesetzt, was notwendig ist, weil wir später einige Grenzen um die Tabellenüberschrift und den -fuß setzen werden — es sieht wirklich seltsam und unzusammenhängend aus, wenn Sie keine Grenze um das gesamte Äußere der Tabelle haben und mit Lücken enden.
- Wir haben etwas {{cssxref("padding")}} auf die {{htmlelement("th")}} und {{htmlelement("td")}} Elemente gesetzt — das gibt den Datenpunkten etwas Raum zum Atmen, was die Tabelle viel lesbarer macht.

An diesem Punkt sieht unsere Tabelle schon viel besser aus:

![eine halbgestylte Tabelle mit Abständen, die die Daten lesbarer machen und eine Zusammenfassung der berühmten Punkbands Großbritanniens zeigen](table-with-spacing.png)

### Einfache Typografie

Jetzt werden wir unseren Text ein wenig sortieren.

Zuerst haben wir eine Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punkbands geeignet ist. Sie können gerne eine andere finden; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}}-Element und die benutzerdefinierte {{cssxref("font-family")}}-Deklaration mit denen ersetzen, die Ihnen Google Fonts gibt.

Fügen Sie zuerst das folgende {{htmlelement("link")}}-Element in Ihren HTML-Kopf ein, direkt über Ihrem bestehenden `<link>`-Element:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie jetzt das folgende CSS unten in Ihre `style.css`-Datei ein:

```css
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
```

Es gibt hier nicht wirklich spezifisches für Tabellen; wir passen allgemein die Schrift-Styling an, um die Lesbarkeit zu erleichtern:

- Wir haben einen globalen sans-serif-Schrift-Stack gesetzt; dies ist rein eine stilistische Wahl. Wir haben auch unsere benutzerdefinierte Schriftart auf die Überschriften innerhalb der {{htmlelement("thead")}} und {{htmlelement("tfoot")}}-Elemente gesetzt, für einen schönen grungeigen, punkigen Look.
- Wir haben etwas {{cssxref("letter-spacing")}} auf die Überschriften und Zellen gesetzt, da wir glauben, dass es die Lesbarkeit unterstützt. Ebenfalls eine stilistische Wahl.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert ausgerichtet, damit sie mit den Überschriften ausgerichtet sind. Standardmäßig erhalten Zellen einen {{cssxref("text-align")}}-Wert von `left`, und Überschriften einen Wert von `center`, aber generell sieht es besser aus, wenn die Ausrichtungen bei beiden gleich gesetzt sind. Das Standard-Bold-Gewicht auf den Schriftarten der Überschriften reicht, um deren Aussehen zu differenzieren.
- Wir haben die Überschrift im {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, damit sie besser visuell mit ihrem Datenpunkt assoziiert wird.

Das Ergebnis sieht etwas ordentlicher aus:

![eine gestylte Tabelle mit einem globalen sans-serif-Schrift-Stack und guten Abständen, um die Daten lesbarer zu machen und eine Zusammenfassung der berühmten Punkbands Großbritanniens zu zeigen](table-with-typography.png)

### Grafiken und Farben

Jetzt zu Grafiken und Farben! Da die Tabelle voller Punk und Attitüde ist, müssen wir ihr ein helles, imposantes Styling geben, das dazu passt. Keine Sorge, Sie müssen Ihre Tabellen nicht so laut machen — Sie können sich für etwas subtileres und geschmackvolleres entscheiden.

Beginnen Sie, indem Sie folgendes CSS am Ende Ihrer `style.css`-Datei hinzufügen:

```css
/* graphics and colors */

thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 50%));
  border: 3px solid purple;
}
```

Auch hier gibt es nichts Spezifisches für Tabellen, aber es ist lohnenswert, ein paar Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} für das {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Texts innerhalb der Kopf- und Fußzeile in Weiß geändert (und ihm einen {{cssxref("text-shadow")}} gegeben), damit er lesbar ist. Sie sollten immer sicherstellen, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, damit er lesbar ist.

Wir haben auch einen linearen Verlauf zu den {{htmlelement("th")}} und {{htmlelement("td")}}-Elementen innerhalb der Kopf- und Fußzeile hinzugefügt, für eine schöne Textur, sowie diesen Elementen eine leuchtend violette Grenze gegeben. Es ist nützlich, mehrere verschachtelte Elemente verfügbar zu haben, damit Sie Stile übereinander schichten können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}} und {{htmlelement("tfoot")}}-Elementen mit mehreren Hintergrundbildern setzen können, aber wir haben uns entschieden, es separat zu tun, zugunsten älterer Browser, die keine mehreren Hintergrundbilder oder linearen Verläufe unterstützen.

#### Zebra-Streifen

Wir wollten einem separaten Abschnitt widmen, um Ihnen zu zeigen, wie Sie **Zebra-Streifen** implementieren — abwechselnde Zeilenfarben, die die verschiedenen Datenzeilen in Ihrer Tabelle leichter lesbar und zuordenbar machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
/* zebra striping */

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- Früher haben Sie den {{cssxref(":nth-child")}}-Selektor gesehen, der verwendet wurde, um spezifische Kind-Elemente auszuwählen. Er kann auch eine Formel als Parameter haben, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, usw.) auswählen und die Formel `2n` würde alle geraden Kinder (2, 4, 6, usw.) auswählen. Wir haben die `odd` und `even` Schlüsselwörter in unserem Code verwendet, die genau das gleiche tun wie die zuvor genannten Formeln. In diesem Fall geben wir den ungeraden und geraden Zeilen unterschiedliche (schrille) Farben.
- Wir haben auch ein sich wiederholendes Hintergrundmuster auf alle Körperzeilen hinzugefügt, das einfach ein bisschen Rauschen ist (ein halbtransparentes `.png` mit etwas visueller Verzerrung darauf), um etwas Textur zu bieten.
- Schließlich haben wir der gesamten Tabelle eine solide Hintergrundfarbe gegeben, sodass Browser, die den `:nth-child`-Selektor nicht unterstützen, trotzdem einen Hintergrund für ihre Körperzeilen haben.

Diese Farbexplosion führt zu folgendem Look:

![eine gut gestylte Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und der gesamten Tabelle mit einem soliden Hintergrund, um die Daten, die eine Zusammenfassung der berühmten Punkbands Großbritanniens zeigen, ansprechender zu gestalten](table-with-color.png)

Nun, dies mag ein wenig übertrieben sein und nicht Ihrem Geschmack entsprechen, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

### Die Caption stylen

Es gibt eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Caption stylen. Fügen Sie dazu das Folgende am Ende Ihrer `style.css`-Datei hinzu:

```css
/* caption */

caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

Es gibt hier nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die mit dem Wert `bottom` versehen wurde. Dies führt dazu, dass die Caption am unteren Rand der Tabelle positioniert wird, was zusammen mit den anderen Deklarationen zu diesem endgültigen Look führt (sehen Sie es live bei [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unterhalb der gestylten Tabelle, die eine Caption darüber enthält, worum es in der Tabelle geht. In diesem Fall "eine Zusammenfassung der berühmten Punkbands Großbritanniens"](table-with-caption.png)

## Schnelle Tipps zum Tabellestyling

Bevor es weitergeht, dachten wir, wir stellen Ihnen eine schnelle Liste der nützlichsten Punkte zur Verfügung, die oben veranschaulicht wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel, z.B. durch die Verwendung von Prozentangaben, damit das Design reaktionsfähiger ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es ermöglicht, einfach Spaltenbreiten durch das Setzen von {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) einzustellen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um Grenzen von Tabellenelementen miteinander verschmelzen zu lassen, um ein ordentlicheres und leichter zu kontrollierendes Erscheinungsbild zu erzielen.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Orte zu schaffen, an denen CSS angewendet werden kann, um es zu erleichtern, Stile bei Bedarf übereinander zu schichten.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}} und {{htmlelement("td")}}-Texte auszurichten und die Lesbarkeit zu verbessern.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn/CSS/Building_blocks/Tables_tasks).

## Zusammenfassung

Mit dem Stylen von Tabellen nun hinter uns, brauchen wir etwas anderes, um unsere Zeit zu besetzen. Der nächste Artikel untersucht [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) — wie man Probleme löst, wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn man denkt, dass sie sollten. Dies beinhaltet Informationen zur Verwendung von Browser-DevTools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}
