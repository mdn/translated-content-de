---
title: Debugging von CSS
slug: Learn/CSS/Building_blocks/Debugging_CSS
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element ansprechen sollte, aber nichts passiert, oder ein Kasten hat nicht die erwartete Größe. Dieser Artikel gibt Ihnen Hinweise zur Fehlersuche bei einem CSS-Problem und zeigt Ihnen, wie die in allen modernen Browsern integrierten DevTools Ihnen helfen können, herauszufinden, was los ist.

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
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen der Grundlagen von Browser-DevTools und wie man einfache
        Inspektionen und Bearbeitungen von CSS durchführt.
      </td>
    </tr>
  </tbody>
</table>

## Zugriff auf Browser-DevTools

Der Artikel [Was sind Browser-Entwicklungstools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ist ein aktueller Leitfaden, der erklärt, wie Sie die Tools in verschiedenen Browsern und Plattformen aufrufen können. Auch wenn Sie sich hauptsächlich für die Entwicklung in einem bestimmten Browser entscheiden und sich daher am besten mit den in diesem Browser enthaltenen Tools vertraut machen, ist es sinnvoll, zu wissen, wie Sie sie in anderen Browsern aufrufen können. Dies ist hilfreich, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern beobachten.

Sie werden auch feststellen, dass sich Browser bei der Entwicklung ihrer DevTools auf unterschiedliche Bereiche konzentriert haben. Beispielsweise gibt es in Firefox einige ausgezeichnete Tools für die visuelle Arbeit mit CSS-Layouts, die es Ihnen ermöglichen, [Grid Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), [Flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) und [Shapes](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) zu inspizieren und zu bearbeiten. Alle Browser verfügen jedoch über ähnliche grundlegende Tools, z.B. zur Inspektion der Eigenschaften und Werte, die auf Elemente auf Ihrer Seite angewendet werden, und zur Bearbeitung dieser im Editor.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Dazu werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie folgen möchten, und öffnen Sie Ihre DevTools wie im verlinkten Artikel beschrieben.

## Der DOM im Vergleich zur Quellansicht

Etwas, das Neulinge in DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie [den Quellcode anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite, oder sich die HTML-Datei ansehen, die Sie auf den Server hochgeladen haben, und dem, was Sie im [HTML-Paneel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Auch wenn es grob ähnlich aussieht wie das, was Sie über die Quellansicht sehen können, gibt es einige Unterschiede.

Im gerenderten DOM kann der Browser das HTML normalisiert haben, z.B. indem er für Sie einige schlecht verfasste HTML-Korrekturen vorgenommen hat. Wenn Sie ein Element falsch geschlossen haben, z.B. ein `<h2>` öffnen, aber mit einem `</h3>` schließen, erkennt der Browser, was Sie tun wollten, und das HTML im DOM schließt das offene `<h2>` korrekt mit einem `</h2>`. Das DOM zeigt auch alle Änderungen, die durch JavaScript vorgenommen wurden.

Im Vergleich dazu ist die Ansicht des Quellcodes der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu einem bestimmten Zeitpunkt rendert, und gibt Ihnen so einen Einblick, was wirklich vor sich geht.

## Inspizieren des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, indem Sie entweder mit der rechten Maustaste/Strg-Klick darauf klicken und _Inspektieren_ auswählen oder es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite, um das ein umrandeter Kasten gezeichnet ist.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich den [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie die auf dieses Element angewendeten CSS-Eigenschaften und -Werte sehen können. Sie sehen die Regeln, die direkt auf die Klasse `box1` angewendet werden, und auch das CSS, das vom Kasten von seinen Vorfahren geerbt wird, in diesem Fall vom `<body>`. Dies ist nützlich, wenn Sie sehen, dass CSS angewendet wird, das Sie nicht erwartet haben. Vielleicht wird es von einem Elternelement geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Ebenfalls nützlich ist die Möglichkeit, Kurzschreibweiseigenschaften zu erweitern. In unserem Beispiel wird die Kurzschreibweise `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die unterschiedlichen Langschreibweiseigenschaften und deren Werte anzuzeigen.**

**Sie können Werte in der Regeln-Ansicht ein- und ausschalten, wenn dieses Panel aktiv ist - wenn Sie mit der Maus darüber halten, werden Kontrollkästchen angezeigt. Deaktivieren Sie das Kontrollkästchen für eine Regel, z.B. `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen, zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und auch um zu helfen, es zu debuggen - z.B., wenn ein Layout falsch ist und Sie versuchen herauszufinden, welche Eigenschaft das Problem verursacht.

Das folgende Video bietet einige nützliche Tipps zur Fehlersuche in CSS mit den Firefox DevTools:

{{EmbedYouTube("O3DAm82vIvU")}}

## Bearbeiten von Werten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht, oder die Größe von etwas anpassen? DevTools kann Ihnen viel Zeit sparen, indem Sie ein Stylesheet bearbeiten und die Seite neu laden.

**Mit `box1` ausgewählt, klicken Sie auf das Farbfeld (den kleinen farbigen Kreis), der die auf den Rahmen angewendete Farbe zeigt. Ein Farbwähler wird geöffnet und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. Auf ähnliche Weise könnten Sie die Breite oder den Stil des Rahmens ändern.**

![DevTools Styles Panel mit geöffnetem Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie festgestellt, dass Ihr Kasten die Schriftgröße des `<body>`-Elements nicht erben soll, und wollen eine eigene spezifische Größe festlegen? In den DevTools können Sie dies ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration zu beginnen. Daraufhin können Sie mit der Eingabe der neuen Eigenschaft beginnen und DevTools zeigt Ihnen eine Autovervollständigungsliste mit passenden Eigenschaften an. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die Schaltfläche + klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort einzufügen.**

![Das DevTools Panel, Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regeln-Ansicht, z.B. werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verständnis des Box-Modells

In den vorherigen Lektionen haben wir über [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) gesprochen und darüber, dass wir ein alternatives Box-Modell haben, das ändert, wie die Größe von Elementen basierend auf der von Ihnen angegebenen Größe, plus dem Padding und den Rändern, berechnet wird. Die DevTools können wirklich helfen, zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells auf dem ausgewählten Element zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element angeordnet wird. Dies beinhaltet eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf das Element angewendet haben, die aber Anfangswerte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die Eigenschaft `box-sizing`, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Kästen mit den Klassen `box1` und `box2`. Beide haben dieselbe Breite (400px), allerdings ist `box1` visuell breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die von Ihnen vorgegebene Größe des Elements nimmt und dann das Padding und die Rahmenbreite hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier das Padding und der Rahmen von der von Ihnen vorgegebenen Größe des Elements abgezogen werden. Dies bedeutet, dass der Platz, den der Kasten auf der Seite einnimmt, genau die von Ihnen angegebene Größe hat – in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr unter [Untersuchen und Inspizieren des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösung von Spezifitätsproblemen

Manchmal während der Entwicklung, vor allem aber, wenn Sie CSS auf einer bestehenden Site bearbeiten müssen, haben Sie Probleme, CSS zur Anwendung zu bringen. Egal, was Sie tun, das Element scheint das CSS einfach nicht aufzunehmen. Was hier in der Regel passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei wurden zwei Wörter in einem `<em>`-Element eingeschlossen. Eines wird als orange und das andere in hotpink angezeigt. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber im Stylesheet befindet sich jedoch eine Regel mit einem Selektor `.special`:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion zu [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) erinnern werden, wo wir über Spezifität gesprochen haben, sind Klassenselektoren spezifischer als Elementselektoren und daher ist dies der Wert, der zur Anwendung kommt. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Informationen irgendwo in einem riesigen Stylesheet vergraben sind.

**Inspektieren Sie das `<em>` mit der Klasse `.special` und DevTools wird Ihnen zeigen, dass orange die Farbe ist, die gilt, und auch, dass die `color`-Eigenschaft, die auf `<em>` angewendet wird, durchgestrichen ist. Sie können nun sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Inspektieren eines em und Blick auf DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Erfahren Sie mehr über die Firefox DevTools

Es gibt viele Informationen über die Firefox DevTools hier auf MDN. Werfen Sie einen Blick auf den Hauptbereich der [DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), und für weitere Details zu den Dingen, die wir in dieser Lektion kurz behandelt haben, sehen Sie sich [Die How-To-Guides](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#how-to) an.

## Probleme in CSS debuggen

DevTools können eine große Hilfe sein, wenn es darum geht, CSS-Probleme zu lösen. Wenn Sie sich also in einer Situation befinden, in der CSS nicht so arbeitet, wie Sie es erwarten, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Machen Sie einen Schritt zurück vom Problem

Jedes Programmierproblem kann frustrierend sein, besonders CSS-Probleme, weil Sie oft keine Fehlermeldung erhalten, nach der Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert sind, treten Sie eine Weile vom Problem zurück — machen Sie einen Spaziergang, holen Sie sich ein Getränk, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung magisch, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird die Arbeit daran, wenn Sie sich erfrischt fühlen, viel einfacher.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, allerdings sind Browser sehr nachsichtig und versuchen ihr Bestes, um Ihre Webseiten anzuzeigen, selbst wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie meinten, und er könnte eine andere Entscheidung treffen als die, die Sie im Kopf hatten. Darüber hinaus könnten zwei verschiedene Browser das Problem auf zwei verschiedene Weisen bewältigen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um Fehler zu finden und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert im von Ihnen getesteten Browser unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die von Ihnen verwendete Eigenschaft oder der Wert im von Ihnen getesteten Browser nicht unterstützt wird, wird nichts unterbrochen, aber dieses CSS wird nicht angewendet. DevTools hebt im Allgemeinen nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervor. Im folgenden Screenshot wird der Wert "subgrid" von {{cssxref("grid-template-columns")}} vom Browser nicht unterstützt.

![Bild von Browser-DevTools mit dem grid-template-columns: subgrid durchgestrichen, da der subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können sich auch die Browser-Kompatibilitätstabellen am unteren Rand jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Browserunterstützung für diese Eigenschaft, oft detailliert, wenn es Unterstützung für einige Anwendungen der Eigenschaft und nicht für andere gibt. [Sehen Sie sich die Kompatibilitätstabelle für die `shape-outside`-Eigenschaft an](/de/docs/Web/CSS/shape-outside#browser_compatibility).

### Wird etwas anderes Ihr CSS überschreiben?

Hierbei kommt Ihnen das Wissen über Spezifität, das Sie gelernt haben, sehr zugute. Wenn Sie etwas haben, das spezifischer ist und überschreibt, was Sie tun wollten, könnten Sie in ein sehr frustrierendes Spiel geraten, das herauszufinden. Allerdings zeigen Ihnen die DevTools, was tatsächlich angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um es zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem durch die oben genannten Schritte nicht gelöst wird, müssen Sie weiter untersuchen. Das Beste, was Sie zu diesem Zeitpunkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Das "Reduzieren eines Problems" ist eine wirklich nützliche Fähigkeit. Es hilft Ihnen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden und ermöglicht es Ihnen auch, Bugs zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise demonstriert, wobei nicht zusammenhängende umgebende Inhalte und Stile entfernt wurden. Dies wird oft bedeuten, den problematischen Code aus Ihrem Layout zu entfernen, um ein kleines Beispiel zu schaffen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird – z.B. über ein CMS – erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Website wie [CodePen](https://codepen.io/) eignet sich gut zum Hosten reduzierter Testfälle, da diese dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, im Page-View-Source die HTML zu kopieren und in CodePen einzufügen, dann greifen Sie auf alle relevanten CSS und JavaScript zu und fügen diese ebenfalls ein. Danach können Sie überprüfen, ob das Problem noch sichtbar ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht verschwinden lässt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts das Problem _doch_ verschwinden lässt, entfernen Sie so viel JavaScript wie möglich und lassen nur das, was das Problem verursacht, enthalten.
3. Entfernen Sie jegliches HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, auf den kleinstmöglichen Code zu kommen, der das Problem immer noch zeigt.
4. Entfernen Sie jegliches CSS, das das Problem nicht beeinflusst.

Im Zuge dieses Prozesses werden Sie möglicherweise entdecken, was das Problem verursacht, oder es zumindest einschalten und ausschalten können, indem Sie etwas Bestimmtes entfernen. Es ist sinnvoll, Ihrem Code, während Sie entdecken, Kommentare hinzuzufügen. Wenn Sie um Hilfe bitten müssen, zeigen diese Kommentare der Person, die Ihnen hilft, was Sie bereits ausprobiert haben. Dies gibt Ihnen vielleicht genügend Informationen, um nach möglichen Problemen und Lösungen zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, gibt Ihnen ein reduzierter Testfall etwas, worum Sie um Hilfe bitten können, indem Sie es in einem Forum veröffentlichen oder einem Kollegen zeigen. Sie sind viel eher bereit, Hilfe zu bekommen, wenn Sie zeigen können, dass Sie die Arbeit des Reduzierens des Problems und der genauen Identifizierung, wo es auftritt, getan haben, bevor Sie um Hilfe bitten. Ein erfahrener Entwickler könnte das Problem schnell erkennen und Ihnen in die richtige Richtung zeigen, und selbst wenn nicht, hilft Ihnen Ihr reduzierter Testfall ihnen, schnell einen Blick darauf zu werfen und hoffentlich zumindest etwas Hilfe anzubieten.

Für den Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim jeweiligen Browseranbieter (z.B. auf Mozillas [Bugzilla-Seite](https://bugzilla.mozilla.org/)) einzureichen.

Wenn Sie im Umgang mit CSS mehr Erfahrung sammeln, werden Sie feststellen, dass Sie schneller darin werden, Probleme herauszufinden. Allerdings finden selbst die Erfahrensten unter uns sich manchmal in der Situation wieder, sich zu fragen, was zur Hölle los ist. Eine methodische Herangehensweise, einen reduzierten Testfall zu erstellen und das Problem jemand anderem zu erklären, führt in der Regel zu einer Lösung.

## Zusammenfassung

Damit hätten wir eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten geben sollte, auf die Sie zählen können, wenn Sie beginnen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Im letzten Artikel dieses Moduls werden wir uns anschauen, wie Sie [Ihr CSS organisieren](/de/docs/Learn/CSS/Building_blocks/Organizing) können.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}
