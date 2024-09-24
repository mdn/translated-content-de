---
title: Bilder, Medien und Formularelemente
slug: Learn/CSS/Building_blocks/Images_media_form_elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu gestalten, etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie sich einige Elemente ungewöhnlich verhalten, wenn sie mit CSS gestaltet werden.
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)** beschrieben. Dies bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild tun kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{glossary("aspect ratio")}}** beschrieben. Das bedeutet, dass sie sowohl in horizontaler (x) als auch vertikaler (y) Dimension eine Größe haben und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt werden.

## Größenanpassung von Bildern

Wie Sie bereits aus den vorherigen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in einer Box platzieren, die kleiner oder größer ist als die intrinsischen Abmessungen der Bilddatei in eine Richtung, wird es entweder kleiner als die Box oder überläuft die Box erscheinen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf passiert.

Im folgenden Beispiel haben wir zwei Boxen, beide 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und füllt sie nicht aus.
- Die andere ist größer als 200 Pixel und überläuft die Box.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

Was können wir also gegen das Überlaufproblem tun?

Wie wir in [unserer vorherigen Lektion](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) gelernt haben, ist eine übliche Technik, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch bei anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Element/video)s oder [`<iframe>`](/de/docs/Web/HTML/Element/iframe)s.

**Versuchen Sie, `max-width: 100%` zum `<img>`-Element im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, während das größere kleiner wird, um in die Box zu passen.**

Sie können auch andere Entscheidungen über Bilder in Containern treffen. Zum Beispiel möchten Sie vielleicht ein Bild so dimensionieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen dabei helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element in verschiedener Weise an eine Box angepasst werden.

Unten haben wir den Wert `cover` verwendet, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber füllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

Wenn wir `contain` als Wert verwenden, wird das Bild verkleinert, bis es klein genug ist, um in die Box zu passen. Dies führt zu einem "Letterboxing", wenn es nicht dasselbe Seitenverhältnis wie die Box hat.

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllt, aber das Seitenverhältnis nicht beibehält.

## Ersetzte Elemente im Layout

Bei der Verwendung verschiedener CSS-Layout-Techniken auf ersetzten Elementen werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Beispielsweise werden in einem Grid-Layout die Elemente standardmäßig gedehnt, um ihre gesamten [Grid-Bereiche](/de/docs/Glossary/Grid_Areas) auszufüllen. Bilder dehnen sich nicht; stattdessen werden sie am Anfang ihrer Grid-Bereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, in dem wir einen Grid-Container mit zwei Spalten und zwei Zeilen haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und dehnen sich, um die Zeile und Spalte auszufüllen. Das Bild dehnt sich jedoch nicht.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

Wenn Sie diesen Lektionen der Reihe nach folgen, haben Sie möglicherweise noch nicht das Layout betrachtet. Merken Sie sich einfach, dass ersetzte Elemente, wenn sie Teil eines Grid- oder Flex-Layouts werden, anderes Standardverhalten zeigen, im Wesentlichen um zu vermeiden, dass sie seltsam durch das Layout gedehnt werden.

Um das Bild zu zwingen, sich zu dehnen, um die Grid-Zelle auszufüllen, in der es sich befindet, müssten Sie etwas wie das Folgende tun:

```css
img {
  width: 100%;
  height: 100%;
}
```

Dies würde das Bild jedoch dehnen, so dass es wahrscheinlich nicht das ist, was Sie tun möchten.

## Formularelemente

Formularelemente können ein kniffliges Problem beim Styling mit CSS darstellen. Das [Web Forms Modul](/de/docs/Learn/Forms) enthält detaillierte Anleitungen zu den kniffligeren Aspekten der Gestaltung dieser Elemente, die ich hier nicht vollständig wiedergeben werde. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formularsteuerelemente werden über das [`<input>`](/de/docs/Web/HTML/Element/input)-Element auf Ihre Seite hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie etwa [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeiligen Texteingaben, und auch Elemente, die zum Enthalten und Beschriften von Teilen von Formularen verwendet werden, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar, welche Art von Inhalt eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, inwieweit sie das Styling und die Anpassung solcher Elemente zulassen.

### Styling von Texteingabeelementen

Elemente, die Texteingaben zulassen, wie `<input type="text">`, und die spezifischeren `<input type="email">`, sowie das `<textarea>`-Element sind recht einfach zu gestalten und verhalten sich meist genauso wie andere Boxen auf Ihrer Seite. Das Standardstyling dieser Elemente variiert jedoch je nach Betriebssystem und Browser, mit dem Ihr Benutzer die Seite besucht.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestaltet – Sie können sehen, dass Dinge wie Rahmen, Abstände und Innenabstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Rahmen anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten sowie Innenabstände ändern.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> [!WARNING]
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass es für die Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar von dem umgebenden Inhalt wäre, aber dies würde es sehr schwer machen, es zu erkennen und auszufüllen.

Wie in den Lektionen zum [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) erklärt, werden viele der komplexeren Eingabetypen vom Betriebssystem gerendert und sind nicht zugänglich für die Gestaltung. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher ganz unterschiedlich aussehen werden und komplexe Formulare in mehreren Browsern testen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftstile. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die auf dem body oder einem übergeordneten Element definierte Schrift verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und Box-Sizing

Über verschiedene Browser hinweg nutzen Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Box-Model-Lektion](/de/docs/Learn/CSS/Building_blocks/The_box_model) gelernt und können dieses Wissen beim Styling von Formularen nutzen, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen zu gewährleisten.

Zur Konsistenz ist es eine gute Idee, Abstände und Innenabstände auf `0` für alle Elemente zu setzen und diese dann beim Styling bestimmter Steuerelemente wieder hinzuzufügen:

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Weitere nützliche Einstellungen

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`s setzen, um zu verhindern, dass IE eine Bildlaufleiste anzeigt, wenn keine erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammen in einem "Reset"

Als finalen Schritt können wir die verschiedenen oben besprochenen Eigenschaften in den folgenden "Form-Reset" einbinden, um eine konsistente Grundlage zu schaffen. Dies umfasst sämtliche in den letzten drei Abschnitten genannten Punkte:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> [!NOTE]
> Normalisierungs-Stylesheets werden von vielen Entwicklern verwendet, um einen Satz von Standardstilen für alle Projekte zu erstellen. Typischerweise machen sie ähnliche Dinge wie die oben beschriebenen und stellen sicher, dass alles, was über verschiedene Browser hinweg unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis von vielen Projekten verwendet wird.

Für weitere Informationen zum Styling von Formularen schauen Sie sich die beiden Artikel im HTML-Abschnitt dieser Anleitungen an.

- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling von Formularen](/de/docs/Learn/Forms/Advanced_form_styling)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel werden wir lernen, wie man [HTML-Tabellen gestaltet](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
