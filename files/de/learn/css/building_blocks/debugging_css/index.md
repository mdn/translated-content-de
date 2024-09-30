---
title: Debugging CSS
slug: Learn/CSS/Building_blocks/Debugging_CSS
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Beim Schreiben von CSS stoßen Sie manchmal auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element ansprechen sollte, aber es passiert nichts, oder eine Box ist anders groß als erwartet. Dieser Artikel gibt Ihnen Leitfaden zur Fehlerbehebung bei einem CSS-Problem und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Installation der Grundsoftware</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis dafür, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen der Browser DevTools kennenzulernen und einfache
        Inspektionen und Bearbeitungen von CSS durchzuführen.
      </td>
    </tr>
  </tbody>
</table>

## Anleitung zum Zugriff auf Browser-DevTools

Der Artikel [Was sind Entwicklerwerkzeuge für Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ist ein aktueller Leitfaden, der erklärt, wie Sie die Werkzeuge in verschiedenen Browsern und Plattformen aufrufen können. Auch wenn Sie sich entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und daher am besten mit den darin enthaltenen Werkzeugen vertraut werden, ist es hilfreich zu wissen, wie Sie diese in anderen Browsern aufrufen können. Dies hilft, wenn Sie unterschiedliche Rendering zwischen mehreren Browsern feststellen.

Sie werden auch feststellen, dass Browser sich bei der Erstellung ihrer DevTools auf unterschiedliche Bereiche konzentriert haben. Zum Beispiel gibt es in Firefox einige hervorragende Werkzeuge für die visuelle Arbeit mit CSS-Layouts, mit denen Sie [Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), [Flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) und [Shapes](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) inspizieren und bearbeiten können. Allerdings haben alle verschiedenen Browser ähnliche grundlegende Werkzeuge, z.B. zum Inspektieren der Eigenschaften und Werte, die auf Elemente auf Ihrer Seite angewendet werden, und zum Ändern dieser Werte im Editor.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Dazu werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie folgen möchten, und öffnen Sie die DevTools, wie im verlinkten Artikel beschrieben.

## Der DOM im Vergleich zur Quellansicht

Etwas, das Neulinge bei den DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie [den Quellcode ansehen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite oder die HTML-Datei, die Sie auf den Server hochgeladen haben, anschauen, und dem, was Sie im [HTML-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Obwohl es ungefähr so aussieht wie das, was Sie über die Quellansicht sehen können, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, zum Beispiel indem er einige fehlerhafte HTML für Sie korrigiert hat. Wenn Sie ein Element falsch geschlossen haben, zum Beispiel ein `<h2>` geöffnet, aber mit einem `</h3>` geschlossen, wird der Browser herausfinden, was Sie tun wollten und das HTML im DOM korrekt das offene `<h2>` mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen an, die durch JavaScript vorgenommen wurden.

Im Vergleich dazu ist die Quellansicht der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu einem bestimmten Zeitpunkt rendert, und gibt Ihnen damit Einblick, was wirklich vor sich geht.

## Inspektion des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie rechts/klicken oder die Steuerung gedrückt halten und es auswählen, oder wählen Sie es aus dem HTML-Baum auf der linken Seite der DevTools-Anzeige aus. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite, um das ein umrandeter Kasten gezeichnet ist.

![Die Beispielseite für dieses Tutorial mit geöffnetem DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie in der Lage sein, die auf dieses Element angewendeten CSS-Eigenschaften und -Werte zu sehen. Sie werden die Regeln sehen, die direkt auf die Klasse `box1` angewendet werden, und auch das CSS, das vom Kasten von seinen Vorfahren vererbt wird, in diesem Fall vom `<body>`. Dies ist nützlich, wenn Sie feststellen, dass CSS angewendet wird, das Sie nicht erwartet haben. Vielleicht wird es von einem Elternelement geerbt, und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, abgekürzte Eigenschaften zu erweitern. In unserem Beispiel wird die Abkürzung `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern, und die verschiedenen Einzel-Eigenschaften und ihre Werte anzuzeigen.**

**Sie können in der Regelansicht Werte ein- und ausschalten, wenn dieses Panel aktiv ist — wenn Sie mit der Maus darüber fahren, erscheinen Checkboxen. Deaktivieren Sie das Häkchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Mit dieser Funktion können Sie einen A/B-Vergleich durchführen und entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und Sie können damit auch Fehler beheben — zum Beispiel, wenn ein Layout falsch läuft und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

Das folgende Video bietet einige nützliche Tipps zur Fehlerbehebung bei CSS mithilfe der Firefox DevTools:

{{EmbedYouTube("O3DAm82vIvU")}}

## Bearbeiten von Werten

Obendrein können Sie auch die Werte von Eigenschaften bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht, oder die Größe von etwas anpassen? DevTools kann Ihnen viel Zeit sparen, indem es Ihnen erlaubt, ein Stylesheet zu bearbeiten und die Seite neu zu laden.

**Mit `box1` ausgewählt, klicken Sie auf das Farbfeld (den kleinen gefärbten Kreis), der die auf den Rand angewandte Farbe zeigt. Ein Farbwähler öffnet sich und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil des Rahmens ändern.**

![DevTools Styles Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie festgestellt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt, und Sie möchten ihre eigene spezifische Größe einstellen? Sie können dies in den DevTools ausprobieren, bevor Sie es in Ihre CSS-Datei aufnehmen.

**Sie können die schließende geschweifte Klammer in der Regel anklicken, um eine neue Deklaration hinzuzufügen, bei der Sie mit der Eingabe der neuen Eigenschaft beginnen können und die DevTools Ihnen eine Autovervollständigungsliste mit passenden Eigenschaften anzeigen. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools Panel, Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Sie können mehr erfahren unter [Examine and edit CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verständnis des Box-Modells

In vorhergehenden Lektionen haben wir [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) besprochen, und die Tatsache, dass wir ein alternatives Box-Modell haben, das berechnet, wie die Größe von Elementen basierend auf der von Ihnen angegebenen Größe plus den Abständen und Rändern berechnet wird. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells des ausgewählten Elements zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element angeordnet ist. Dazu gehört eine Beschreibung der Eigenschaften, die Sie möglicherweise nicht explizit auf dem Element verwendet haben, aber initiale Werte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die kontrolliert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben die gleiche Breite (400px) angewendet, jedoch ist `box1` visuell breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die von Ihnen angegebene Größe nimmt und dann die Abstände und Rahmenbreite hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, hier wird der Abstand und die Rahmenbreite von der an das Element gegebenen Größe abgezogen. Dies bedeutet, dass der Raum, den das Element auf der Seite einnimmt, die genaue Größe ist, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr über [Untersuchung und Inspektion des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösung von Spezifizitätsproblemen

Manchmal während der Entwicklung, besonders wenn Sie das CSS auf einer bestehenden Seite bearbeiten müssen, werden Sie Schwierigkeiten haben, CSS anzuwenden. Egal was Sie tun, das Element nimmt das CSS einfach nicht an. Was hier normalerweise passiert, ist, dass ein spezifizierterer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei gibt es zwei Wörter, die in ein `<em>`-Element eingeschlossen sind. Eines wird in Orange angezeigt und das andere in Hotpink. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber befindet sich jedoch in der Stylesheet eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion über [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) erinnern, bei der wir Spezifizität besprochen haben, sind Klassenselektoren spezifischer als Elementselektoren, und so ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, besonders wenn die Informationen irgendwo in einem riesigen Stylesheet verborgen sind.

**Inspizieren Sie das `<em>` mit der Klasse `.special`, und DevTools zeigt Ihnen, dass Orange die Farbe ist, die angewendet wird, und dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können nun sehen, dass der Klassenselektor den Elementselektor übersteuert.**

![Ein em auswählen und im DevTools schauen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Erfahren Sie mehr über die Firefox DevTools

Es gibt viel Informationen über die Firefox DevTools hier auf MDN. Sehen Sie sich den Hauptbereich [DevTools Abschnitt](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an, und für mehr Details zu den Dingen, die wir in dieser Lektion kurz behandelt haben, lesen Sie [Die Anleitungsleitfäden](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#how-to).

## Debugging von Problemen in CSS

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein, also wenn Sie in eine Situation geraten, in der CSS sich nicht so verhält, wie Sie es erwarten, wie sollten Sie dann vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Einen Schritt zurück vom Problem machen

Jedes Codierungsproblem kann frustrierend sein, besonders CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, nach der Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert werden, machen Sie eine Pause vom Problem — machen Sie einen Spaziergang, holen Sie sich ein Getränk, sprechen Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird die Arbeit daran in einem erfrischten Zustand viel einfacher sein.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, jedoch sind Browser auch sehr nachsichtig und versuchen ihr Bestes, Ihre Webseiten anzuzeigen, auch wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler im Code haben, muss der Browser erraten, was Sie gemeint haben, und er könnte eine andere Entscheidung treffen als die, die Sie im Kopf hatten. Darüber hinaus könnten zwei verschiedene Browser das Problem auf zwei verschiedene Weisen bewältigen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um alle Fehler zu finden und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validation](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert von dem Browser, in dem Sie testen, unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht von dem Browser unterstützt wird, in dem Sie testen, wird nichts kaputt gehen, aber das CSS wird nicht angewendet. DevTools werden im Allgemeinen nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervorheben. Im folgenden Screenshot wird der Wert Subgrid von {{cssxref("grid-template-columns")}} vom Browser nicht unterstützt.

![Bild der Browser DevTools mit dem grid-template-columns: subgrid durchgestrichen, da der subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können sich auch die Tabelle zur Browser-Kompatibilität am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Unterstützung von Browsern für diese Eigenschaft, oft aufgeschlüsselt, wenn es Unterstützung für einige Anwendungen der Eigenschaft gibt und nicht für andere. [Siehe die Kompatibilitätstabelle für die Eigenschaft `shape-outside`](/de/docs/Web/CSS/shape-outside#browser_compatibility).

### Wird Ihr CSS von etwas anderem überschrieben?

Die Informationen, die Sie über Spezifizität gelernt haben, werden hier sehr nützlich sein. Wenn Sie etwas Spezifischeres haben, das überschreibt, was Sie zu tun versuchen, können Sie in ein sehr frustrierendes Spiel geraten, bei dem Sie versuchen, herauszufinden, was. Wie oben beschrieben, zeigen Ihnen jedoch die DevTools, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem nicht durch die oben genannten Schritte gelöst ist, müssen Sie weiter nachforschen. Das Beste, was Sie an diesem Punkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. In der Lage zu sein, ein Problem zu "reduzieren", ist eine wirklich nützliche Fertigkeit. Es wird Ihnen helfen, Probleme im eigenen Code und dem Ihrer Kollegen zu finden, und es wird Ihnen auch ermöglichen, Bugs zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise demonstriert, mit unzusammenhängendem umgebenden Inhalt und Styling entfernt. Dies bedeutet oft, das problematische Codefragment aus Ihrem Layout zu nehmen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — beispielsweise über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem anzeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich, um reduzierte Testfälle zu hosten, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, die Quellansicht auf der Seite anzuzeigen und das HTML in CodePen zu kopieren, dann alle relevanten CSS und JavaScript zu erfassen und ebenfalls einzuschließen. Prüfen Sie danach, ob das Problem noch erkennbar ist.
2. Wenn das Entfernen des JavaScript das Problem nicht verschwinden lässt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScript _das_ Problem verschwinden lässt, entfernen Sie so viel JavaScript wie möglich, lassen Sie nur das, was das Problem verursacht.
3. Entfernen Sie alle HTML, die nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, den kleinsten Code zu bekommen, der das Problem noch zeigt.
4. Entfernen Sie alle CSS, die sich nicht auf das Problem auswirken.

Im Prozess dieser Aufgabe entdecken Sie möglicherweise, was das Problem verursacht, oder können es zumindest ein- und ausschalten, indem Sie etwas Bestimmtes entfernen. Es ist es wert, einige Kommentare zu Ihrem Code hinzuzufügen, während Sie Dinge entdecken. Wenn Sie Hilfe benötigen, zeigen sie der Person, die Sie hilft, was Sie bereits ausprobiert haben. Dies kann Ihnen genügend Informationen geben, um nach wahrscheinlichen Problemen und Workarounds zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, gibt Ihnen ein reduzierter Testfall etwas, bei dem Sie um Hilfe bitten können, indem Sie ein Forum besuchen oder es einem Kollegen zeigen. Sie bekommen viel eher Hilfe, wenn Sie zeigen können, dass Sie die Arbeit des Reduzierens des Problems gemacht und genau identifiziert haben, wo es passiert, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte das Problem schnell erkennen und Sie in die richtige Richtung weisen, und selbst wenn nicht, ermöglicht Ihr reduzierter Testfall ihm oder ihr, schnell einen Blick darauf zu werfen und hoffentlich zumindest ein wenig Hilfe anzubieten.

Für den Fall, dass Ihr Problem tatsächlich ein Bug in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Bug-Report beim betreffenden Browser-Anbieter einzureichen (z.B. auf Mozillas [Bugzilla-Website](https://bugzilla.mozilla.org/)).

Wenn Sie mehr Erfahrung mit CSS gewinnen, werden Sie feststellen, dass Sie schneller werden, Probleme zu lösen. Allerdings fragen sich selbst die Erfahrensten von uns manchmal, was um alles in der Welt gerade passiert. Ein methodisches Vorgehen, ein reduzierter Testfall, und das Erklären des Problems für jemand anderen wird normalerweise dazu führen, dass eine Lösung gefunden wird.

## Zusammenfassung

Damit haben wir eine Einführung in die Fehlerbehebung bei CSS abgeschlossen, die Ihnen nützliche Fähigkeiten vermittelt, auf die Sie zurückgreifen können, wenn Sie anfangen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Im letzten Artikel dieses Moduls werden wir uns anschauen, wie Sie [Ihr CSS organisieren](/de/docs/Learn/CSS/Building_blocks/Organizing) können.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}
