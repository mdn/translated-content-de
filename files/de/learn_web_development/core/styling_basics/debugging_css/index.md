---
title: CSS-Debugging
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}

Manchmal, wenn Sie CSS schreiben, stoßen Sie auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element treffen sollte, aber nichts passiert, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel wird Ihnen Anleitungen geben, wie Sie ein CSS-Problem debuggen und wie Ihnen die DevTools, die in allen modernen Browsern enthalten sind, dabei helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, CSS-Styling-Grundlagen (behandelt in den vorherigen Lektionen in diesem Modul!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu überprüfen, ob Sie ungültiges Markup auf Ihrer Seite haben, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht formatierten CSS-Code zu überprüfen.</li>
          <li>Verwenden Sie die Entwicklerwerkzeuge des Browsers, um das CSS, das auf HTML-Elemente auf einer Seite angewendet wird, zu inspizieren.</li>
          <li>Ändern Sie das angewandte CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dies umfasst das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## So greifen Sie auf die DevTools des Browsers zu

Der Artikel [Was sind Browser-Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie die Werkzeuge in verschiedenen Browsern und Plattformen aufrufen können. Während Sie sich möglicherweise dazu entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und sich daher am besten mit den darin enthaltenen Werkzeugen vertraut machen, lohnt es sich zu wissen, wie Sie auf sie in anderen Browsern zugreifen können. Dies wird hilfreich sein, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern feststellen.

In dieser Lektion werden wir uns einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS ansehen. Dazu werde ich eine [Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Öffnen Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM versus Quelltextanzeige

Etwas, das Neulinge bei den DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite oder die HTML-Datei, die Sie auf den Server geladen haben, und dem, was Sie im [HTML-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es ungefähr ähnlich aussieht wie über Quelltext anzeigen dort gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser das HTML möglicherweise normalisiert, z.B. indem er einige schlecht geschriebene HTML für Sie korrigiert hat. Wenn Sie ein Element falsch geschlossen haben, beispielsweise ein `<h2>` geöffnet, aber mit einem `</h3>` geschlossen, wird der Browser herausfinden, was Sie tun wollten, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die durch JavaScript vorgenommen wurden.

Quelltextanzeige hingegen ist der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau, was der Browser zu einem gegebenen Zeitpunkt rendert, sodass er Ihnen einen Einblick gibt, was wirklich vor sich geht.

## Inspizieren des angewandten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit der rechten Maustaste/Strg-Taste darauf klicken und _Inspektieren_ auswählen oder indem Sie es aus dem HTML-Baum auf der linken Seite der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem umrandeten Rahmen.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie die auf dieses Element angewandten CSS-Eigenschaften und -Werte sehen können. Sie werden die direkt auf die Klasse `box1` angewandten Regeln sowie das CSS, das von den Vorfahren auf die Box vererbt wird, in diesem Fall vom `<body>`, sehen. Dies ist nützlich, wenn Sie einige CSS sehen, die angewendet wird, die Sie nicht erwartet haben. Vielleicht wird es von einem Elternelement vererbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, Kurzschreibweisen-Eigenschaften zu erweitern. In unserem Beispiel wird die Kurzschreibung `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern, in der die verschiedenen Langform-Eigenschaften und deren Werte angezeigt werden.**

**Sie können in der Regelansicht Werte ein- und ausschalten, wenn dieses Panel aktiv ist. Wenn Sie mit der Maus darüber fahren, werden Kontrollkästchen angezeigt. Deaktivieren Sie das Kontrollkästchen einer Regel, z. B. `border-radius`, und das CSS wird nicht mehr angewendet.**

Dies können Sie nutzen, um einen A/B-Vergleich durchzuführen, zu entscheiden, ob etwas mit oder ohne angewandte Regel besser aussieht, und auch, um es zu debuggen. Zum Beispiel, wenn ein Layout nicht wie gewünscht funktioniert und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

## Bearbeiten von Werten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas optimieren? DevTools kann Ihnen viel Zeit sparen, die Sie sonst damit verbringen würden, ein Stylesheet zu bearbeiten und die Seite neu zu laden.

**Wenn `box1` ausgewählt ist, klicken Sie auf den Farbfleck (den kleinen farbigen Kreis), der die auf den Rand angewandte Farbe anzeigt. Ein Farbwähler öffnet sich und Sie können einige verschiedene Farben ausprobieren. Diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil des Rahmens ändern.**

![DevTools-Styles-Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen eines neuen Attributs

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie erkannt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt, und eine eigene spezifische Größe festlegen möchten? Sie können dies in DevTools ausprobieren, bevor Sie es zu Ihrer CSS-Datei hinzufügen.

**Sie können die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration hinzuzufügen. An dieser Stelle können Sie beginnen, die neue Eigenschaft einzugeben, und DevTools zeigt Ihnen eine Autovervollständigungsliste der passenden Eigenschaften. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die Schaltfläche + klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort einzufügen.**

![Das DevTools-Panel, Hinzufügen einer neuen Eigenschaft in die Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, z. B. werden Deklarationen mit ungültigen Werten durchgestrichen. Mehr dazu erfahren Sie unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verstehen des Boxmodells

In den vorherigen Lektionen haben wir das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen und die Tatsache, dass wir ein alternatives Boxmodell haben, das ändert, wie die Größe von Elementen basierend auf der Größe, die Sie ihnen geben, plus dem Innenabstand und den Rändern berechnet wird. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Boxmodells auf dem ausgewählten Element zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element layoutiert wird. Dies beinhaltet eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf dem Element verwendet haben, die aber dennoch Startwerte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Boxmodell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben dieselbe Breite (400px) angewandt, jedoch ist `box1` optisch breiter. Sie können im Layoutpanel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, nimmt und dann den Innenabstand und die Randbreite hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier der Innenabstand und der Rand von der Größe, die Sie dem Element gegeben haben, abgezogen werden. Dies bedeutet, dass der Platz, den die Box auf der Seite einnimmt, genau der Größe entspricht, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Mehr dazu erfahren Sie in [Untersuchen und Inspizieren des Boxmodells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösen von Spezifitätsproblemen

Manchmal, besonders während der Entwicklung oder wenn Sie das CSS auf einer bestehenden Website bearbeiten müssen, haben Sie Schwierigkeiten, CSS anzuwenden. Egal, was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was hier im Allgemeinen passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei gibt es zwei Wörter, die in ein `<em>`-Element eingebunden sind. Eines wird als orange angezeigt, das andere als hotpink. Im CSS haben wir Folgendes angewandt:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber im Stylesheet befindet sich jedoch eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion über [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, in der wir Spezifität besprochen haben, sind Klassenselektoren spezifischer als Elementselektoren und daher ist dies der Wert, der angewandt wird. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Information irgendwo in einem riesigen Stylesheet vergraben ist.

**Untersuchen Sie das `<em>` mit der Klasse `.special`, und DevTools zeigen Ihnen, dass orange die Farbe ist, die angewendet wird, und auch dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können jetzt sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Ein em auswählen und in den DevTools nachsehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debugging von Problemen in CSS

DevTools kann eine große Hilfe sein, wenn es darum geht, CSS-Probleme zu lösen. Wenn Sie sich also in einer Situation befinden, in der CSS nicht so funktioniert, wie Sie es erwarten, wie sollten Sie dann vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Einen Schritt zurück vom Problem treten

Jedes Programmierproblem kann frustrierend sein, besonders CSS-Probleme, weil Sie oft keine Fehlermeldung erhalten, die Sie online suchen können, um Hilfe zu finden. Wenn Sie frustriert sind, machen Sie eine Pause von dem Problem — gehen Sie spazieren, holen Sie sich einen Drink, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal taucht die Lösung wie durch Zauberei auf, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird es viel einfacher sein, daran zu arbeiten, wenn Sie sich erfrischt fühlen.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, aber Browser sind auch sehr nachsichtig und versuchen ihr Bestes, Ihre Webseiten auch dann anzuzeigen, wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie meinten, und er könnte eine andere Entscheidung treffen, als Sie im Kopf hatten. Außerdem könnten zwei verschiedene Browser das Problem auf zwei verschiedene Arten bewältigen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um alle Fehler zu erkennen und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert vom Browser, den Sie testen, unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, vom Browser, den Sie testen, nicht unterstützt wird, wird nichts kaputt gehen, aber dieses CSS wird nicht angewendet. DevTools heben normalerweise auf irgendeine Weise nicht unterstützte Eigenschaften und Werte hervor. Im folgenden Screenshot unterstützt der Browser den `subgrid`-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools mit dem nicht unterstützten subgrid-Wert von grid-template-columns, der durchgestrichen ist.](no-support.png)

Sie können sich auch die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaften-Seite auf MDN ansehen. Diese zeigen Ihnen die Browser-Unterstützung für diese Eigenschaft, oft unterteilt, wenn es Unterstützung für einige Nutzungen der Eigenschaft gibt und nicht für andere. [Sehen Sie sich die Kompatibilitätstabelle für die Eigenschaft `grid-template-columns` an](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Überschreibt etwas anderes Ihr CSS?

Dies ist der Punkt, an dem die Informationen, die Sie über Spezifität gelernt haben, sehr nützlich sein werden. Wenn Sie etwas spezifischeres haben, das das überschreibt, was Sie versuchen zu machen, können Sie in ein sehr frustrierendes Spiel verwickelt werden, um herauszufinden, was. Wie oben beschrieben, zeigen Ihnen DevTools jedoch, welches CSS angewendet wird und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem nicht durch die obigen Schritte gelöst wird, müssen Sie einige weitere Untersuchungen durchführen. Das Beste, was Sie an diesem Punkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bezeichnet wird. Die Fähigkeit, ein Problem zu "reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden, und es ermöglicht Ihnen, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise demonstriert, wobei nicht zusammenhängende umgebende Inhalte und Stylings entfernt werden. Dies bedeutet oft, den problematischen Code aus Ihrem Layout herauszunehmen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — beispielsweise über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich zum Hosten reduzierter Testfälle, da sie online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, indem Sie die Seite Quelltext anzeigen und den HTML-Inhalt in CodePen kopieren, dann jegliches relevante CSS und JavaScript hinzuzufügen. Danach können Sie überprüfen, ob das Problem weiterhin evident ist.
2. Falls das Entfernen des JavaScript das Problem nicht beseitigt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScript das Problem _doch_ beseitigt, dann entfernen Sie so viel JavaScript wie möglich, indem Sie das, was das Problem verursacht, belassen.
3. Entfernen Sie jegliches HTML, das nichts zu dem Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, den Code auf die kleinste Menge herunter zu brechen, die das Problem weiterhin zeigt.
4. Entfernen Sie jegliches CSS, das keinen Einfluss auf das Problem hat.

Beim Durchführen dieses Prozesses entdecken Sie möglicherweise, was das Problem verursacht oder können zumindest durch das Entfernen von etwas bestimmen, wann es auftritt. Es ist hilfreich, einige Kommentare in Ihren Code einzufügen, sobald Sie Dinge entdecken. Wenn Sie um Hilfe bitten müssen, zeigen sie der Person, die Ihnen hilft, was Sie bereits ausprobiert haben. Dies kann Ihnen genug Informationen geben, um nach möglichen Problemen und Workarounds zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, haben Sie mit einem reduzierten Testfall etwas, um nach Hilfe zu fragen, indem Sie es in einem Forum posten oder einem Kollegen zeigen. Sie haben viel höhere Chancen, Hilfe zu bekommen, wenn Sie zeigen können, dass Sie die Arbeit des Reduzierens des Problems gemacht haben und genau identifiziert haben, wo es auftritt, bevor Sie um Hilfe fragen. Ein erfahrener Entwickler könnte das Problem schnell entdecken und Sie in die richtige Richtung weisen, und selbst wenn nicht, ermöglicht Ihr reduzierter Testfall ihnen einen schnellen Blick zu werfen und hoffentlich zumindest einige Hilfe anzubieten.

Für den Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim entsprechenden Browseranbieter einzureichen (z.B. auf Mozillas [Bugzilla-Site](https://bugzilla.mozilla.org/)).

Wenn Sie erfahrener mit CSS werden, werden Sie feststellen, dass Sie schneller bei der Fehlerbehebung werden. Aber selbst die Erfahrensten unter uns finden sich manchmal in einer Situation wieder, in der sie nicht wissen, was los ist. Ein methodischer Ansatz, das Erstellen eines reduzierten Testfalls und das Erklären des Problems an jemand anderen führt normalerweise zu einer Lösung.

## Zusammenfassung

So, da haben Sie es: eine Einführung in das Debugging von CSS, die Ihnen einige nützliche Fähigkeiten gibt, auf die Sie sich verlassen können, wenn Sie später in Ihrer Karriere damit beginnen, CSS und andere Arten von Code zu debuggen.

Das war's für alle Lektionen in diesem Modul. Um es abzuschließen, werden wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen testen.

## Siehe auch

- [Firefox > Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > Anzeigen und Ändern von CSS](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}
