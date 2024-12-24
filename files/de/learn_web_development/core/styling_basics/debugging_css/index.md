---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element ansprechen sollte, aber nichts passiert, oder ein Kasten ist anders groß als erwartet. Dieser Artikel gibt Ihnen eine Anleitung, wie Sie ein CSS-Problem debuggen können, und zeigt, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>, Grundlagen der CSS-Gestaltung (behandelt in den vorherigen Lektionen in diesem Modul!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu sehen, ob Sie ungültiges Markup auf Ihrer Seite haben, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um nach schlecht geschriebenem CSS-Code zu suchen.</li>
          <li>Nutzen Sie die Entwicklerwerkzeuge des Browsers, um das CSS zu inspizieren, das auf HTML-Elemente auf einer Seite angewendet wird.</li>
          <li>Ändern Sie das angewendete CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dazu gehört das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zugriff auf Browser DevTools

Der Artikel [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie die Werkzeuge in verschiedenen Browsern und Plattformen zugreifen können. Sie können sich dafür entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und sich daher mit den darin enthaltenen Tools am besten vertraut zu machen. Es ist jedoch auch nützlich zu wissen, wie man auf sie in anderen Browsern zugreifen kann. Dies hilft, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern feststellen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Um dies zu tun, werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie dann Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM und das Quelltext anzeigen

Einige, die neu bei den DevTools sind, können dadurch verwirrt werden, dass es einen Unterschied gibt zwischen dem, was Sie sehen, wenn Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite betrachten oder die HTML-Datei ansehen, die Sie auf dem Server abgelegt haben, und dem, was Sie im [HTML-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen. Während es grob ähnlich aussieht wie das, was Sie über "Quelltext anzeigen" sehen können, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, beispielsweise indem er einige schlecht geschriebene HTML für Sie korrigiert. Wenn Sie fälschlicherweise ein Element geschlossen haben, indem Sie zum Beispiel ein `<h2>` öffnen und mit `</h3>` schließen, wird der Browser herausfinden, was Sie tun wollten und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle von JavaScript vorgenommenen Änderungen.

Im Vergleich dazu ist "View Source" der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu jedem Zeitpunkt rendert, was Ihnen Einblick darin gibt, was tatsächlich vor sich geht.

## Das angewendete CSS inspizieren

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie darauf rechtsklik oder Strg-klicken und dann _Inspect_ auswählen oder indem Sie es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite, umrahmt von einem Kasten.

![Die Beispielsseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts von Ihrem HTML betrachten, sollten Sie die CSS-Eigenschaften und -Werte sehen, die auf dieses Element angewendet werden. Sie sehen die Regeln, die direkt auf die Klasse `box1` angewendet werden, sowie das CSS, das von den Vorfahren, in diesem Fall von `<body>`, geerbt wird. Dies ist nützlich, wenn Sie CSS angewendet sehen, das Sie nicht erwartet haben. Vielleicht wird es von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch hilfreich ist die Möglichkeit, Kurzschreibweiseigenschaften aufzuschlüsseln. In unserem Beispiel wird die Kurzschreibweise `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern, sodass die verschiedenen Langform-Eigenschaften und deren Werte angezeigt werden.**

**Sie können in der Regelnansicht, wenn dieses Panel aktiv ist, Werte an- und ausschalten — bei Überfahren mit der Maus erscheinen Kontrollkästchen. Deaktivieren Sie zum Beispiel ein Kontrollkästchen für eine Regel wie `border-radius`, und das CSS wird nicht mehr angewendet.**

Dies können Sie nutzen, um einen A/B-Vergleich durchzuführen, zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und auch, um beim Debuggen zu helfen — zum Beispiel, wenn ein Layout nicht richtig funktioniert und Sie herausfinden müssen, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe eines Elements anpassen? DevTools kann Ihnen eine Menge Zeit sparen, indem Sie ein Stylesheet bearbeiten und die Seite aktualisieren müssen.

**Mit ausgewähltem `box1`, klicken Sie auf den Farbfleck (den kleinen farbigen Kreis), der die auf den Rand angewendete Farbe anzeigt. Ein Farbpicker wird geöffnet und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil des Randes ändern.**

![DevTools Styles Panel mit einem geöffneten Farbpicker.](inspecting2-color-picker.png)

## Eine neue Eigenschaft hinzufügen

Sie können mithilfe von DevTools Eigenschaften hinzufügen. Vielleicht haben Sie erkannt, dass Sie nicht möchten, dass Ihr Kasten die Schriftgröße des `<body>`-Elements erbt und eine eigene spezifische Größe setzen wollen? Sie können dies in DevTools ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration einzutragen; zu diesem Zeitpunkt können Sie beginnen, die neue Eigenschaft zu tippen, und DevTools wird Ihnen eine Autovervollständigungsliste passender Eigenschaften anzeigen. Nach der Auswahl von `font-size` geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit dem gleichen Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools-Panel, das Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt andere nützliche Funktionen in der Regelnansicht, z. B. werden Deklarationen mit ungültigen Werten durchgestrichen. Sie können mehr darüber erfahren unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Box-Modell verstehen

In den vorherigen Lektionen haben wir das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen, und die Tatsache, dass wir ein alternatives Box-Modell haben, das die Größe von Elementen basierend auf der Größe, die Sie ihnen geben, plus den Innenabstand und den Rändern, ändert. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells auf dem ausgewählten Element, zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element gestaltet wird. Dies umfasst eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit für das Element verwendet haben, die aber dennoch Vorgabewerte haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Kästen mit den Klassen `box1` und `box2`. Sie haben beide dieselbe Breite (400px), jedoch ist `box1` visuell breiter. Sie sehen in der Layout-Ansicht, dass er `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, nimmt und dann den Innenabstand und die Randbreite hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier der Innenabstand und die Ränder von der Größe, die Sie dem Element gegeben haben, abgezogen werden. Dies bedeutet, dass der Platz, den der Kasten auf der Seite einnimmt, genau die Größe ist, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Abschnitt der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Mehr erfahren in [Untersuchen und Inspektieren des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Problemlösung von Spezifität

Manchmal während der Entwicklung, insbesondere wenn Sie die CSS auf einer bestehenden Seite bearbeiten müssen, werden Sie feststellen, dass Sie Schwierigkeiten haben, dass ein CSS angewendet wird. Egal, was Sie tun, das Element scheint einfach die CSS nicht zu übernehmen. Was hier im Allgemeinen passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei gibt es zwei Wörter, die in einem `<em>`-Element eingeschlossen sind. Eines zeigt sich als orange, das andere als hotpink. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber jedoch im Stylesheet ist eine Regel mit einem `.special` Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich erinnern werden aus der Lektion zum [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts), wo wir die Spezifität besprochen haben, sind Klassenselektoren spezifischer als Elementselektoren, und dies ist daher der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, besonders wenn die Informationen irgendwo in einem riesigen Stylesheet vergraben sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und DevTools zeigt Ihnen, dass orange die Farbe ist, die angewendet wird, und auch dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können nun sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Auswahl eines em und ein Blick auf DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Probleme im CSS debuggen

DevTools kann eine große Hilfe beim Lösen von CSS-Problemen sein, also wenn Sie sich in einer Situation befinden, in der das CSS nicht so funktioniert, wie Sie es erwarten, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Einen Schritt zurück vom Problem machen

Jedes Programmierproblem kann frustrierend sein, vor allem CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, nach der Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert sind, treten Sie für eine Weile von dem Problem zurück — gehen Sie spazieren, holen Sie sich ein Getränk, unterhalten Sie sich mit einem Kollegen oder arbeiten Sie eine Weile an einem anderen Projekt. Manchmal erscheint die Lösung magisch, wenn man nicht mehr an das Problem denkt, und selbst wenn nicht, wird es viel einfacher sein, daran zu arbeiten, wenn man frisch und ausgeruht ist.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben ist, aber Browser sind auch sehr nachsichtig und versuchen, Ihre Webseiten anzuzeigen, selbst wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie meinten, und er könnte eine andere Entscheidung treffen als das, was Sie im Sinn hatten. Darüber hinaus könnten zwei verschiedene Browser das Problem auf unterschiedliche Weise bewältigen. Ein guter erster Schritt besteht daher darin, Ihr HTML und CSS durch einen Validator laufen zu lassen, um Fehler zu entdecken und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert vom getesteten Browser unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht vom Browser unterstützt wird, den Sie testen, dann wird nichts kaputtgehen, aber dieses CSS wird nicht angewendet. DevTools werden im Allgemeinen nicht unterstützte Eigenschaften und Werte irgendwie hervorheben. Im folgenden Screenshot unterstützt der Browser den Subgrid-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools mit dem durchgestrichenen grid-template-columns: subgrid, da der Subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch einen Blick auf die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN werfen. Diese zeigen Ihnen die Unterstützung des Browsers für diese Eigenschaft und sind oft aufgeschlüsselt, wenn es Unterstützung für einige Verwendungen der Eigenschaft gibt und andere nicht. [Sehen Sie sich die Kompatibilitätstabelle für die `grid-template-columns`-Eigenschaft an](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Wird Ihr CSS durch etwas anderes überschrieben?

Hier wird die Spezifitätsinformation, die Sie gelernt haben, von großem Nutzen sein. Wenn Sie etwas spezifischeres haben, das das überschreibt, was Sie versuchen zu tun, können Sie in ein sehr frustrierendes Spiel geraten, um herauszufinden, was es ist. Wie oben beschrieben, zeigen Ihnen jedoch die DevTools an, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen können, um ihn zu überschreiben.

### Erstellen Sie eine reduzierte Testfall des Problems

Wenn das Problem durch die obigen Schritte nicht gelöst wird, müssen Sie weitere Untersuchungen durchführen. Das Beste, was Sie an diesem Punkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Die Fähigkeit, ein Problem zu "reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden und Ihnen auch ermöglichen, Bugs zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise demonstriert, mit entfernten nicht verwandten umgebenden Inhalten und Stilen. Dies bedeutet oft, dass der problematische Code aus Ihrem Layout herausgenommen wird, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Merkmal zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — zum Beispiel über ein CMS — machen Sie eine statische Version des Outputs, der das Problem zeigt. Eine Code-Sharing-Website wie [CodePen](https://codepen.io/) ist nützlich, um reduzierte Testfälle zu hosten, da diese dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, den Seitenquelltext anzuzeigen und das HTML in CodePen zu kopieren, dann sich das relevante CSS und JavaScript schnappen und es ebenfalls einfügen. Danach können Sie prüfen, ob das Problem weiterhin besteht.
2. Wenn das Entfernen des JavaScripts das Problem nicht beseitigt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts _das_ Problem beseitigt, entfernen Sie so viel JavaScript wie möglich, lassen Sie jedoch das, was das Problem verursacht, bestehen.
3. Entfernen Sie alle HTML, die nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, bis zur geringsten Menge an Code zu gelangen, die weiterhin das Problem zeigt.
4. Entfernen Sie alle CSS, die das Problem nicht beeinflusst.

Im Prozess des Durchführens dieser Schritte können Sie möglicherweise entdecken, was das Problem verursacht, oder zumindest in der Lage sein, es ein- und auszuschalten, indem Sie etwas Spezifisches entfernen. Es ist hilfreich, einige Kommentare in Ihren Code aufzunehmen, während Sie Dinge entdecken. Wenn Sie um Hilfe bitten müssen, werden sie der Person, die Ihnen hilft, zeigen, was Sie bereits ausprobiert haben. Dies könnte Ihnen genug Informationen geben, um nach möglichen Problemen und Workarounds zu suchen.

Wenn Sie weiterhin Schwierigkeiten haben, das Problem zu beheben, dann gibt Ihnen ein reduzierter Testfall etwas, mit dem Sie um Hilfe bitten können, indem Sie es in einem Forum posten oder einem Kollegen zeigen. Sie sind viel wahrscheinlicher, Hilfe zu erhalten, wenn Sie zeigen können, dass Sie die Arbeit, das Problem zu reduzieren, und genau zu identifizieren, wo es passiert, bevor Sie um Hilfe bitten, bereits getan haben. Ein erfahrenerer Entwickler könnte schnell in der Lage sein, das Problem zu erkennen und Ihnen den richtigen Weg zu weisen, und selbst wenn nicht, wird Ihr reduzierter Testfall es ihnen ermöglichen, einen schnellen Blick zu werfen und hoffentlich zumindest etwas Hilfe anzubieten.

In dem Fall, dass Ihr Problem in Wirklichkeit ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim jeweiligen Browser-Anbieter (z. B. auf Mozillas [Bugzilla-Seite](https://bugzilla.mozilla.org/)) einzureichen.

Je mehr Erfahrung Sie mit CSS sammeln, desto schneller werden Sie Probleme erkennen. Dennoch finden sich auch die Erfahrensten von uns manchmal in der Situation, sich zu fragen, was zum Teufel schief läuft. Ein methodischer Ansatz, ein reduzierter Testfall und das Erklären des Problems an jemanden anderen wird in der Regel dazu führen, dass eine Lösung gefunden wird.

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten bieten sollte, auf die Sie zählen können, wenn Sie anfangen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Das war's für alle Lektionen in diesem Modul. Um es abzuschließen, testen wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen.

## Siehe auch

- [Firefox > CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > CSS anzeigen und ändern](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}
