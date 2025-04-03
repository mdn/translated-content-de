---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt und hebt einige spezifische Techniken zum Tabellenstyling hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a
        >, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich Border Collapsing.</li>
          <li>Deutliches Hervorheben verschiedener Tabellensegmente, einschließlich Überschriften, Titel, Kopfzeile, Körper und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Fangen wir damit an, uns eine typische HTML-Tabelle anzusehen. Nun, ich sage typisch – die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Angestellten; wir haben uns entschieden, es interessanter zu machen, indem wir sie über berühmte Punkbands aus dem Vereinigten Königreich gestalten. Das Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Eigenschaften wie [`scope`](/de/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht gut aus, wenn sie auf dem Bildschirm gerendert wird (siehe es live unter [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle, die eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich zeigt](table-unstyled.png)

Mit dem Standard-Browserstyling sieht sie überladen, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um dies zu korrigieren.

## Einstieg in das Styling unserer Tabelle

Arbeiten wir gemeinsam durch das Stylen unseres Tabellenbeispiels.

1. Machen Sie zunächst eine lokale Kopie des [Beispiel-Markup](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)) herunter und legen Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis auf Ihrem lokalen Computer ab.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verlinken Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihr {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

## Abstände und Layout

Das Erste, was wir tun müssen, ist, die Abstände/Layout zu sortieren — das Standard-Tabellenstyling ist so gedrängt! Um dies zu erreichen, fügen Sie die folgende CSS zu Ihrer `style.css`-Datei hinzu:

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

Die wichtigsten Punkte, die zu beachten sind, sind die folgenden:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee, um auf Ihrer Tabelle zu setzen, da es dazu führt, dass sich die Tabelle vorhersagbarer verhält. Normalerweise neigen Tabellenspalten dazu, nach der Menge des Inhalts zu skalieren, den sie enthalten, was einige seltsame Ergebnisse hervorruft. Mit `table-layout: fixed` können Sie Ihre Spalten entsprechend der Breite der Überschriften dimensionieren und dann mit deren Inhalt wie gewünscht umgehen. Aus diesem Grund haben wir die vier verschiedenen Überschriften mit dem Selektor `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) ausgewählt ("Wählen Sie das n-te Kind aus, das ein {{htmlelement("th")}}-Element in einer Sequenz ist, innerhalb eines {{htmlelement("thead")}}-Elements") und ihnen feste prozentuale Breiten gegeben. Die gesamte Spaltenbreite folgt der Breite der Überschrift, was eine gute Möglichkeit bietet, die Breite Ihrer Tabellenspalten zu bestimmen. Chris Coyier diskutiert diese Technik detaillierter in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% kombiniert, was bedeutet, dass die Tabelle jeden Container ausfüllt, in dem sie platziert wird, und schön responsiv ist (obwohl es dennoch ein bisschen mehr Arbeit braucht, um gut auf schmalen Bildschirmbreiten auszusehen).

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist Standard-Best-Practice für jede Tabellenstyling-Bemühung. Standardmäßig, wenn Sie Rahmen auf Tabellenelementen setzen, werden sie alle Abstände zwischen sich haben, wie das folgende Bild zeigt: ![eine 2x2-Tabelle mit Standardabstand zwischen den Grenzen ohne Border Collapse](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, kollabieren die Ränder in einen, was viel besser aussieht: ![eine 2x2-Tabelle mit der Eigenschaft border-collapse auf collapse gesetzt, die zeigt, dass die Ränder in einen kollabieren](border-collapse.png)
- Wir haben einen {{cssxref("border")}} um die gesamte Tabelle herum gesetzt, was notwendig ist, da wir später einige Rahmen um den Tabellenkopf und die Fußzeile setzen werden – es sieht wirklich seltsam und zusammenhangslos aus, wenn Sie keinen Rahmen um die gesamte Außenseite der Tabelle haben und mit Lücken enden.
- Wir haben einige {{cssxref("padding")}} auf den {{htmlelement("th")}}- und {{htmlelement("td")}}-Elementen gesetzt – dies gibt den Datenobjekten etwas Raum zum Atmen, wodurch die Tabelle viel lesbarer aussieht.

An diesem Punkt sieht unsere Tabelle bereits viel besser aus:

![eine halbstylisierte Tabelle mit Abständen, um die Daten lesbarer zu machen, und zeigt eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-with-spacing.png)

## Einfache Typografie

Nun werden wir unseren Text ein wenig ordnen.

Zunächst haben wir eine Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punkbands geeignet ist. Sie können dorthin gehen und eine andere finden, wenn Sie möchten; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}}-Element und die benutzerdefinierte {{cssxref("font-family")}}-Deklaration mit denjenigen ersetzen, die Ihnen Google Fonts gibt.

Fügen Sie zuerst das folgende {{htmlelement("link")}}-Element oben in Ihrem HTML-Kopf, direkt über Ihrem bestehenden `<link>`-Element hinzu:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun die folgende CSS in Ihre `style.css`-Datei unten unter dem vorherigen Zusatz hinzu:

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

Es gibt hier nichts Spezifisches für Tabellen; wir passen generell die Schriftarten-Styling an, um die Lesbarkeit zu verbessern:

- Wir haben einen globalen sans-serif-Schriftarten-Stack festgelegt; dies ist rein eine stilistische Entscheidung. Wir haben auch unsere benutzerdefinierte Schrift auf den Überschriften im {{htmlelement("thead")}}- und {{htmlelement("tfoot")}}-Elementen gesetzt, um einen schönen grungigen, punkigen Look zu erzielen.
- Wir haben etwas {{cssxref("letter-spacing")}} auf den Überschriften und Zellen gesetzt, da wir glauben, dass es die Lesbarkeit verbessert. Wiederum überwiegend eine stilistische Entscheidung.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert, damit sie mit den Überschriften ausgerichtet sind. Standardmäßig werden Zellen mit einem {{cssxref("text-align")}}-Wert von `left` versehen, und Überschriften mit einem Wert von `center`, aber im Allgemeinen sieht es besser aus, die Ausrichtungen für beide gleich zu setzen. Das standardmäßige fett gedruckte Gewicht auf den Überschriftenschriften reicht aus, um ihr Aussehen zu differenzieren.
- Wir haben die Überschrift innerhalb des {{htmlelement("tfoot")}} rechts ausgerichtet, sodass sie besser visuell mit ihrem Datenpunkt assoziiert wird.

Das Ergebnis sieht ein bisschen ordentlicher aus:

![eine gestylte Tabelle mit einem globalen sans-serif-Schriftarten-Stack und guten Abständen, um die Daten lesbarer zu machen, und zeigt eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-with-typography.png)

## Grafiken und Farben

Jetzt zu Grafiken und Farben! Da die Tabelle voller Punk und Attitüde ist, müssen wir ihr ein helles eindrucksvolles Styling geben, das dazu passt. Keine Sorge, Sie müssen Ihre Tabellen nicht so auffällig machen – Sie können sich für etwas subtileres und geschmackvolleres entscheiden.

Beginnen Sie damit, die folgende CSS zu Ihrer `style.css`-Datei hinzuzufügen, erneut unten:

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

Wiederum gibt es hier nichts Spezifisches für Tabellen, aber es lohnt sich, einige Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} zu den {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Textes innerhalb des Header und Footer auf Weiß (und ihnen einen {{cssxref("text-shadow")}} gegeben), damit sie lesbar sind. Sie sollten immer sicherstellen, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, sodass er lesbar ist.

Wir haben auch einen linearen Verlauf zu den {{htmlelement("th")}}- und {{htmlelement("td")}}-Elementen innerhalb des Headers und Footers für eine schöne Textur zusätzlich zu den Elementen gesetzt und diesen Elementen einen hellen lila Rand gegeben. Es ist nützlich, mehrere verschachtelte Elemente zur Verfügung zu haben, sodass Sie Stile übereinander legen können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}}- und {{htmlelement("tfoot")}}-Elementen mit mehreren Hintergrundbildern setzen können, aber wir entschieden uns, es separat zu tun, zum Nutzen älterer Browser, die keine mehreren Hintergrundbilder oder linearen Verläufe unterstützen.

### Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie man **Zebra-Streifen** implementiert — wechselnde Reihen von Farben, die die verschiedenen Datenreihen in Ihrer Tabelle leichter verständlich und lesbar machen. Fügen Sie die folgende CSS unten in Ihre `style.css`-Datei hinzu:

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

- Früher haben Sie den {{cssxref(":nth-child")}}-Selektor gesehen, der verwendet wurde, um spezifische Kindelemente auszuwählen. Er kann auch eine Formel als Parameter erhalten, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder auswählen (1, 3, 5, usw.) und die Formel `2n` würde alle geraden Kinder auswählen (2, 4, 6, usw.). Wir haben die Schlüsselwörter `odd` und `even` in unserem Code verwendet, die genau dasselbe tun wie die genannten Formeln. In diesem Fall geben wir den ungeraden und geraden Reihen unterschiedliche (grelle) Farben.
- Wir haben auch eine sich wiederholende Hintergrundkachel zu allen Körpersreihen hinzugefügt, die nur ein bisschen Rauschen ist (ein halbtransparentes `.png` mit ein bisschen visueller Verzerrung darauf), um etwas Textur bereitzustellen.
- Schließlich haben wir die gesamte Tabelle mit einer massiven Hintergrundfarbe versehen, damit Browser, die den `:nth-child`-Selektor nicht unterstützen, immer noch einen Hintergrund für ihre Körperzeilen haben.

Diese Farbexplosion ergibt folgendes Aussehen:

![eine gut gestylte Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und die gesamte Tabelle mit einer soliden Hintergrundfarbe, um die Daten, die eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich zeigen, ansprechender aussehen zu lassen](table-with-color.png)

Nun, das mag ein bisschen übertrieben und nicht zu Ihrem Geschmack sein, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

## Das Styling der Beschriftung

Es gibt eine letzte Sache mit unserer Tabelle zu tun — die Beschriftung zu stylen. Um dies zu tun, fügen Sie das Folgende unten in Ihre `style.css`-Datei ein:

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

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die auf `bottom` gesetzt wurde. Dies bewirkt, dass die Beschriftung unten in der Tabelle positioniert wird, was zusammen mit den anderen Deklarationen uns diesen endgültigen Look gibt (siehe es live unter [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unterhalb der gestylten Tabelle, die eine Beschriftung enthält, was die Tabelle beinhaltet. "eine Zusammenfassung berühmter Punkbands aus dem Vereinigten Königreich" in diesem Fall](table-with-caption.png)

## Schnelle Tipps zum Tabellenstyling

Bevor Sie fortfahren, dachten wir, dass wir Ihnen eine schnelle Liste der nützlichsten Punkte geben, die oben illustriert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel, z.B. durch Verwendung von Prozentangaben, sodass das Design ansprechender ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellendesign zu schaffen, das es Ihnen erlaubt, die Spaltenbreiten leicht festzulegen, indem Sie {{cssxref("width")}} auf ihre Überschriften ({{htmlelement("th")}}) setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder von Tabellenelementen ineinander zu kollabieren, was ein saubereres und einfacher zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Stücke zu brechen und zusätzliche Stellen bereitzustellen, um CSS anzuwenden, sodass es einfacher ist, Stile übereinander zu legen, wenn erforderlich.
- Verwenden Sie Zebra-Streifen, um abwechselnde Reihen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihren {{htmlelement("th")}}- und {{htmlelement("td")}}-Text auszurichten, um die Dinge ordentlicher und leichter nachvollziehbar zu machen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables_tasks).

## Zusammenfassung

Mit dem Styling von Tabellen jetzt hinter uns, brauchen wir etwas anderes, um unsere Zeit zu verbringen. Der nächste Artikel untersucht das Debuggen von CSS — wie man Probleme löst, wie z.B. Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie glauben, dass sie es sollten. Dies beinhaltet Informationen zur Verwendung von Browser-DevTools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
