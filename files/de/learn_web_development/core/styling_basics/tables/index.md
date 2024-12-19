---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie HTML-Tabellen gut aussehen können, mit einigen spezifischen Techniken zum Tabellendesign.

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
          <li>Umgang mit Abständen in Tabellen, einschließlich Randzusammenfall.</li>
          <li>Deutliche Hervorhebung verschiedener Tabellenbereiche wie Überschriften, Beschriftung, Kopf-, Körper- und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Sehen wir uns zunächst eine typische HTML-Tabelle an. Nun ja, typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben beschlossen, die Dinge interessanter zu gestalten, indem wir sie über berühmte Punk-Bands aus dem Vereinigten Königreich machen. Das Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stylisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht es nicht gut aus, wenn es auf dem Bildschirm gerendert wird (sehen Sie es live unter [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestaltete Tabelle mit einer Zusammenfassung der berühmten Punk-Bands aus dem Vereinigten Königreich](table-unstyled.png)

Mit nur der Standard-Browser-Formatierung sieht es gequetscht, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um dies zu verbessern.

## Erste Schritte mit dem Styling unserer Tabelle

Lassen Sie uns gemeinsam das Styling unseres Tabellenbeispiels durchgehen.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder herunter ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)) und speichern Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verlinken Sie das CSS mit dem HTML, indem Sie die folgende Zeile im HTML innerhalb Ihres {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

## Abstände und Layout

Das Erste, was wir tun müssen, ist, die Abstände/Darstellung zu sortieren — die Standard-Tabellen-Formatierung ist so gequetscht! Fügen Sie dazu das folgende CSS in Ihre `style.css` Datei hinzu:

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

Die wichtigsten Punkte sind wie folgt:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, um dies auf Ihrer Tabelle zu setzen, da er die Tabelle standardmäßig ein wenig vorhersehbarer macht. Normalerweise neigen Tabellenspalten dazu, nach dem Inhalt dimensioniert zu werden, den sie enthalten, was einige merkwürdige Ergebnisse liefert. Mit `table-layout: fixed` können Sie Ihre Spalten entsprechend der Breite ihrer Überschriften dimensionieren und dann den Inhalt wie gewünscht behandeln. Deshalb haben wir die vier verschiedenen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ("Wählen Sie das n-te Kind aus, das ein {{htmlelement("th")}} Element in einer Sequenz innerhalb eines {{htmlelement("thead")}} Elements ist") ausgewählt und ihnen feste Prozentbreiten gegeben. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Möglichkeit bietet, Ihre Tabellenspalten zu dimensionieren. Chris Coyier bespricht diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% gekoppelt, was bedeutet, dass die Tabelle jeden Container ausfüllen wird, in den sie gesetzt wird, und schön responsiv ist (obwohl es noch etwas mehr Arbeit erfordern würde, um sie auf schmalen Bildschirmbreiten gut aussehen zu lassen).

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist Standard-Best-Practice für jeden Table-Stylingsaufwand. Standardmäßig, wenn Sie Grenzen auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie das untenstehende Bild zeigt: ![eine 2x2-Tabelle mit dem Standardsabstand zwischen den Grenzen, die keinen Grenzzusammensturz zeigt](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, stürzen die Grenzen auf eine zusammen, was viel besser aussieht: ![eine 2x2-Tabelle mit der Eigenschaft border-collapse, die auf collapse eingestellt ist und zeigt, dass die Grenzen zu einer zusammenstürzen](border-collapse.png)
- Wir haben eine {{cssxref("border")}} um die gesamte Tabelle gesetzt, was notwendig ist, da wir später einige Grenzen um den Tabellenkopf- und -fuß setzen werden — es sieht wirklich seltsam und unzusammenhängend aus, wenn Sie keine Grenze um die ganze Außenseite der Tabelle haben und Lücken entstehen.
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — dies gibt den Datenpunkten etwas Raum zum Atmen, was die Tabelle viel lesbarer macht.

Zu diesem Zeitpunkt sieht unsere Tabelle bereits viel besser aus:

![eine halbgestaltete Tabelle mit Abständen, um die Daten leserlicher zu machen und eine Zusammenfassung der berühmten Punk-Bands aus dem Vereinigten Königreich zu zeigen](table-with-spacing.png)

## Einfache Typografie

Jetzt werden wir unseren Text ein wenig ordnen.

Zuerst haben wir eine Schriftart bei [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punk-Bands geeignet ist. Sie können dort eine andere finden, wenn Sie möchten; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}}-Element und unsere benutzerdefinierte {{cssxref("font-family")}}-Deklaration durch die von Google Fonts gegebenen ersetzen.

Fügen Sie zuerst das folgende {{htmlelement("link")}}-Element in den HTML-Kopf ein, direkt über Ihrem vorhandenen `<link>`-Element:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun das folgende CSS in Ihre `style.css`-Datei ein, unterhalb der vorherigen Ergänzung:

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

Hier ist nichts wirklich spezifisch für Tabellen; wir passen im Allgemeinen die Schriftstilgestaltung an, um Dinge lesbarer zu machen:

- Wir haben einen globalen Sans-Serif-Schriftstapel gesetzt; dies ist rein eine stilistische Wahl. Wir haben auch unsere benutzerdefinierte Schriftart auf die Überschriften in den {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elementen gesetzt, für einen schönen grungy, punkigen Look.
- Wir haben etwas {{cssxref("letter-spacing")}} auf den Überschriften und Zellen gesetzt, da wir glauben, dass es die Lesbarkeit unterstützt. Wieder eine überwiegend stilistische Wahl.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert, damit er mit den Überschriften ausgerichtet ist. Standardmäßig erhalten Zellen einen {{cssxref("text-align")}}-Wert von `left`, und Überschriften erhalten einen Wert von `center`, aber im Allgemeinen sieht es besser aus, wenn die Ausrichtungen für beides gleich eingestellt sind. Das Standardfett auf den Überschriften ist genug, um ihr Aussehen zu unterscheiden.
- Wir haben die Überschrift innerhalb des {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, damit sie optisch besser mit ihrem Datenpunkt verbunden ist.

Das Ergebnis sieht etwas ordentlicher aus:

![eine gestylte Tabelle mit einem globalen Sans-Serif-Schriftstapel und gutem Abstand, um die Daten leserlicher zu machen und eine Zusammenfassung der berühmten Punk-Bands aus dem Vereinigten Königreich zu zeigen](table-with-typography.png)

## Grafiken und Farben

Jetzt zu Grafiken und Farben! Da die Tabelle voller Punk und Attitüde ist, müssen wir ihr ein helles, imposantes Styling geben, das dazu passt. Keine Sorge, Sie müssen Ihre Tabellen nicht so laut machen — Sie können sich für etwas Dezenteres und Geschmackvolleres entscheiden.

Fügen Sie begonnen das folgende CSS zu Ihrer `style.css`-Datei hinzu, wieder am Ende:

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

Auch hier gibt es nichts spezifisch für Tabellen, aber es ist wert, einige Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} zum {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Textes in der Kopf- und Fußzeile auf weiß geändert (und einen {{cssxref("text-shadow")}} hinzugefügt), damit es lesbar ist. Sie sollten immer sicherstellen, dass Ihr Text einen guten Kontrast zu Ihrem Hintergrund hat, sodass er lesbar ist.

Wir haben auch ein lineares Gradient zu den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen innerhalb von Kopf und Fuß hinzugefügt, für eine nette Struktur, sowie diesen Elementen einen hellen lila Rand gegeben. Es ist nützlich, mehrere verschachtelte Elemente zur Verfügung zu haben, damit Sie Stile übereinander legen können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elementen mit mehreren Hintergrundbildern setzen können, aber wir haben es separat gemacht, um älteren Browsern, die keine mehrfachen Hintergrundbilder oder linearen Gradienten unterstützen, zugute kommen zu lassen.

### Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie Sie **Zebra-Streifen** implementieren — wechselnde Farbzeilen, die die unterschiedlichen Datenzeilen in Ihrer Tabelle leichter zu parsen und zu lesen machen. Fügen Sie das folgende CSS an das Ende Ihrer `style.css`-Datei hinzu:

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

- Früher haben Sie den {{cssxref(":nth-child")}}-Selektor verwendet gesehen, um spezifische Kindelemente auszuwählen. Es kann auch mit einer Formel als Parameter gegeben werden, sodass es eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, etc.) auswählen und die Formel `2n` würde alle geraden Kinder (2, 4, 6, etc.) auswählen. Wir haben die Schlüsselwörter `odd` und `even` in unserem Code verwendet, die genau dasselbe tun wie die vorgenannten Formeln. In diesem Fall geben wir den ungeraden und geraden Zeilen verschiedene (grelle) Farben.
- Wir haben auch eine sich wiederholende Hintergrundkachel zu allen Körperzeilen hinzugefügt, die nur ein bisschen Lärm ist (ein halbtransparentes `.png` mit etwas visuellem Rauschen darauf), um etwas Textur zu bieten.
- Schließlich haben wir der gesamten Tabelle eine feste Hintergrundfarbe gegeben, damit Browser, die den `:nth-child`-Selektor nicht unterstützen, immer noch einen Hintergrund für ihre Körperzeilen haben.

Diese Farbboxerei führt zu folgendem Look:

![eine gut gestylte Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und der gesamten Tabelle mit einem soliden Hintergrund, um die Daten lesenswerter darzustellen, mit einer Zusammenfassung der berühmten Punk-Bands aus dem Vereinigten Königreich](table-with-color.png)

Dies mag jetzt ein wenig übertrieben sein und nicht Ihrem Geschmack entsprechen, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

## Die Beschriftung stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Beschriftung stylen. Um dies zu tun, fügen Sie das Folgende am Ende Ihrer `style.css`-Datei hinzu:

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

Hier ist nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die den Wert `bottom` erhalten hat. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle positioniert wird, was zusammen mit den anderen Deklarationen diesen finalen Look ergibt (sehen Sie es live unter [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unter der gestylten Tabelle enthält eine Beschriftung darüber, worum es sich bei der Tabelle handelt. "eine Zusammenfassung von den berühmten Punk-Bands aus dem Vereinigten Königreich" in diesem Fall](table-with-caption.png)

## Schnelltipps für das Tabellenstyling

Bevor wir fortfahren, dachten wir, wir würden Ihnen eine kurze Liste der nützlichsten Punkte geben, die oben illustriert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel, z.B. durch die Verwendung von Prozentwerten, sodass das Design responsiver ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten einfach festzulegen, indem Sie {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) festlegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Grenzen von Tabellenelementen ineinander übergehen zu lassen, was ein saubereres und leichter zu kontrollierendes Aussehen ergibt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Orte zu bieten, an denen CSS angewendet werden kann, sodass es einfacher ist, Stile übereinander zu legen, wenn erforderlich.
- Verwenden Sie Zebra-Streifen, um alternative Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihren {{htmlelement("th")}} und {{htmlelement("td")}} Text auszurichten, um Dinge ordentlicher und leichter zu folgen zu machen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables_tasks).

## Zusammenfassung

Nachdem wir das Styling von Tabellen nun hinter uns gebracht haben, brauchen wir etwas anderes, um unsere Zeit zu beschäftigen. Der nächste Artikel untersucht das Debuggen von CSS — wie man Probleme wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie es sollten, löst. Dazu gehören Informationen zur Verwendung der Entwicklerwerkzeuge des Browsers, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
