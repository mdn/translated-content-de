---
title: Bilder, Medien und Formularelemente
slug: Learn/CSS/Building_blocks/Images_media_form_elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Stilgebung mit CSS etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustrationen vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >dem Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Anfänge</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, wie sich einige Elemente ungewöhnlich verhalten, wenn sie
        mit CSS gestaltet werden.
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)** bezeichnet. Dies bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann — nur ihre Position auf der Seite unter anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild machen kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als Elemente mit einem **{{Glossary("aspect_ratio", "Seitenverhältnis")}}** beschrieben. Dies bedeutet, dass sie sowohl in horizontaler (x) als auch in vertikaler (y) Richtung eine Größe haben und standardmäßig mithilfe der intrinsischen Dimensionen der Datei angezeigt werden.

## Bilder skalieren

Wie Sie bereits aus diesen Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box setzen, die in einer Richtung kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei, wird es entweder kleiner als die Box erscheinen oder über die Box hinausragen. Sie müssen eine Entscheidung darüber treffen, was mit dem Überlauf geschieht.

Im folgenden Beispiel haben wir zwei Boxen, beide sind 200 Pixel groß:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist — es ist kleiner als die Box und streckt sich nicht, um sie auszufüllen.
- Das andere ist größer als 200 Pixel und läuft über die Box hinaus.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

Was können wir also gegen das Überlaufproblem tun?

Wie wir in [unserer vorherigen Lektion](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) gelernt haben, besteht eine übliche Technik darin, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Damit kann das Bild kleiner als die Box werden, aber nicht größer. Diese Technik funktioniert auch mit anderen ersetzten Elementen wie `<video>`s oder `<iframe>`s.

**Versuchen Sie, `max-width: 100%` dem `<img>`-Element im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, während das größere kleiner wird, um in die Box zu passen.**

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie vielleicht ein Bild so skalieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hier helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Arten skaliert werden, um in eine Box zu passen.

Unten haben wir den Wert `cover` verwendet, welcher das Bild herunter skaliert, um das Seitenverhältnis beizubehalten, sodass es die Box sauber ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes durch die Box beschnitten.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

Wenn wir `contain` als Wert verwenden, wird das Bild so weit verkleinert, bis es in die Box passt. Dies führt zu "Letterboxing", wenn es nicht das gleiche Seitenverhältnis wie die Box hat.

Sie könnten auch den Wert `fill` ausprobieren, der die Box ausfüllt, das Seitenverhältnis jedoch nicht beibehält.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layouttechniken auf ersetzte Elemente anwenden, werden Sie möglicherweise feststellen, dass sie sich etwas anders verhalten als andere Elemente. Zum Beispiel werden in einem Grid-Layout Elemente standardmäßig gestreckt, um ihre gesamten {{Glossary("Grid_Areas", "Gridbereiche")}} zu füllen. Bilder dehnen sich nicht aus; stattdessen werden sie an den Anfang ihrer Gridbereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen Grid-Container mit zwei Spalten und zwei Zeilen haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und erstrecken sich, um die Zeile und die Spalte auszufüllen. Das Bild dehnt sich jedoch nicht aus.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

Wenn Sie diese Lektionen in der Reihenfolge verfolgen, haben Sie sich vielleicht noch nicht mit Layouts beschäftigt. Behalten Sie jedoch im Hinterkopf, dass ersetzte Elemente, wenn sie Teil eines Grid- oder Flex-Layouts werden, unterschiedliche Standardverhalten aufweisen, um zu vermeiden, dass sie durch das Layout seltsam gestreckt werden.

Um das Bild dazu zu zwingen, sich zu strecken und die Zelle im Grid auszufüllen, müssten Sie etwas wie das Folgende tun:

```css
img {
  width: 100%;
  height: 100%;
}
```

Dies würde jedoch das Bild strecken, daher ist es wahrscheinlich nicht das, was Sie tun möchten.

## Formularelemente

Formularelemente können eine knifflige Angelegenheit sein, wenn es um die Stilgebung mit CSS geht. Das [Webforms-Modul](/de/docs/Learn/Forms) enthält detaillierte Leitfäden zu den schwierigeren Aspekten der Stilgebung dieser Elemente, die ich hier nicht vollständig wiedergeben werde. Es gibt jedoch einige grundlegende Punkte, die in diesem Abschnitt hervorgehoben werden sollten.

Viele Formsteuerungen werden Ihrer Seite über das [`<input>`](/de/docs/Web/HTML/Element/input)-Element hinzugefügt — dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeilige Texteingaben und auch Elemente, die verwendet werden, um Teile von Formularen zu enthalten und zu beschriften, wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend).

HTML enthält auch Attribute, die Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und welcher Inhaltstyp eingegeben werden muss. Wenn der Benutzer etwas Unerwartetes eingibt oder ein erforderliches Feld leer lässt, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Stilgebung und Anpassung sie für solche Elemente erlauben.

### Stilgebung von Texteingabeelementen

Elemente, die Texteingabe ermöglichen, wie `<input type="text">` und die spezialisierteren `<input type="email">` sowie das `<textarea>`-Element lassen sich ziemlich leicht stilisieren und tendieren dazu, sich wie andere Boxen auf Ihrer Seite zu verhalten. Die Standardstilgebung dieser Elemente wird sich jedoch je nach Betriebssystem und Browser, den Ihr Benutzer verwendet, unterscheiden.

Im unten stehenden Beispiel haben wir einige Texteingaben mit CSS gestaltet — Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen zu zielen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Rahmen ändern, den Feldern Hintergrundfarben hinzufügen und Schriftarten und Abstände anpassen.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> [!WARNING]
> Sie sollten vorsichtig sein, wenn Sie das Styling von Formularelementen ändern, um sicherzustellen, dass dem Benutzer immer noch klar ist, dass es sich um Formulare handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast nicht von dem umgebenden Inhalt zu unterscheiden ist, aber dies würde es sehr schwer machen, es zu erkennen und auszufüllen.

Wie in den Lektionen zum [Stylen von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) erklärt, werden viele der komplexeren Eingabetypen vom Betriebssystem gerendert und sind nicht zugänglich für die Stilgebung. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen und komplexe Formulare in einer Reihe von Browsern testen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente die Schriftstile standardmäßig nicht. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die Schrift verwenden, die im `body` oder bei einem Elternelement definiert ist, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

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

Browserübergreifend verwenden Formularelemente unterschiedliche Boxsizing-Regeln für verschiedene Widgets. Sie haben über die `box-sizing`-Eigenschaft in [unserer Boxmodel-Lektion](/de/docs/Learn/CSS/Building_blocks/The_box_model) gelernt und können dieses Wissen beim Stylen von Formularen einsetzen, um ein konsistentes Erlebnis beim Festlegen von Breiten und Höhen auf Formularelementen sicherzustellen.

Um Konsistenz zu gewährleisten, ist es eine gute Idee, Ränder und Abstände auf `0` für alle Elemente zu setzen und sie dann beim Stylen spezifischer Steuerelemente wieder hinzuzufügen:

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

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` für `<textarea>`s setzen, um zu verhindern, dass IE eine Scrollleiste anzeigt, wenn keine benötigt wird:

```css
textarea {
  overflow: auto;
}
```

### Alles zusammen in einem „Reset“

Als abschließenden Schritt können wir die verschiedenen oben besprochenen Eigenschaften in einen „Formular-Reset“ zusammenfassen, um eine konsistente Basis zu schaffen, von der aus gearbeitet werden kann. Dies schließt alle in den letzten drei Abschnitten erwähnten Punkte ein:

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
> Gemäßigte Stylesheets werden von vielen Entwicklern verwendet, um einen Satz Basis-Stile zu erstellen, die in allen Projekten verwendet werden können. Typischerweise tun sie ähnliche Dinge wie oben beschrieben, indem sie sicherstellen, dass alles, was in verschiedenen Browsern unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS beginnen. Sie sind nicht mehr so wichtig wie früher, da Browser typischerweise konsistenter sind als in der Vergangenheit. Wenn Sie jedoch ein Beispiel sehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis von vielen Projekten verwendet wird.

Für weitere Informationen zum Styling von Formularen werfen Sie einen Blick auf die beiden Artikel im HTML-Abschnitt dieser Leitfäden.

- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Erweitertes Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling)

## Testen Sie Ihre Fertigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fertigkeiten: Bilder und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, mit denen Sie arbeiten müssen, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel werden wir lernen, wie man [HTML Tabellen stylt](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
