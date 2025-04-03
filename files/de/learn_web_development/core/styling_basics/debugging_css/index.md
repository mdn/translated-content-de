---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS scheinbar nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element treffen sollte, aber es passiert nichts, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Anleitungen zur Fehlerbehebung bei einem CSS-Problem und zeigt Ihnen, wie Ihnen die DevTools, die in allen modernen Browsern enthalten sind, helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, Grundlagen der CSS-Stilgestaltung (in den vorherigen Lektionen in diesem Modul behandelt!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um zu prüfen, ob ungültiges Markup auf Ihrer Seite CSS-Probleme verursacht.</li>
          <li>Verwendung des <a href="https://jigsaw.w3.org/css-validator/">CSS-Validators</a>, um schlecht formatierten CSS-Code zu überprüfen.</li>
          <li>Verwendung von Entwicklerwerkzeugen des Browsers, um das auf HTML-Elemente angewendete CSS auf einer Seite zu untersuchen.</li>
          <li>Änderung des angewendeten CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dazu gehört das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Anleitung zum Zugriff auf Browser-DevTools

Der Artikel [Was sind Entwicklerwerkzeuge von Browsern](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie die Werkzeuge in verschiedenen Browsern und Plattformen zugreifen können. Während Sie möglicherweise vorwiegend in einem bestimmten Browser entwickeln und daher mit den darin enthaltenen Werkzeugen am besten vertraut werden, lohnt es sich zu wissen, wie man sie in anderen Browsern aufruft. Das hilft, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern sehen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Dafür verwende ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Laden Sie diese in einem neuen Tab, wenn Sie folgen möchten, und öffnen Sie Ihre DevTools wie im oben verlinkten Artikel beschrieben.

## DOM versus Quelltextansicht

Etwas, das Neueinsteiger in DevTools aus dem Konzept bringen kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext ansehen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite oder der HTML-Datei, die Sie auf den Server gestellt haben, betrachten, und dem, was Sie im [HTML-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es ungefähr ähnlich aussieht wie das, was Sie über die Quelltextansicht sehen können, gibt es einige Unterschiede.

Im gerenderten DOM kann der Browser das HTML normalisiert haben, indem er beispielsweise einige schlecht geschriebene HTML für Sie korrigiert. Wenn Sie ein Element falsch geschlossen haben, indem Sie beispielsweise ein `<h2>` öffnen, aber mit einem `</h3>` schließen, wird der Browser herausfinden, was Sie gemeint haben, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die durch JavaScript gemacht wurden.

Die Quelltextansicht hingegen ist der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu einem bestimmten Zeitpunkt rendert, und gibt Ihnen so einen Einblick, was tatsächlich vor sich geht.

## Inspektion des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit Rechts-/Strg-Klick darauf klicken und _Untersuchen_ auswählen oder indem Sie es aus dem HTML-Baum links im DevTools-Display auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem umrissenen Kasten.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und -Werte sehen können, die auf dieses Element angewendet werden. Sie werden die Regeln sehen, die direkt auf die Klasse `box1` angewendet werden, sowie das CSS, das von den Vorfahren, in diesem Fall vom `<body>` geerbt wird. Dies ist nützlich, wenn Sie feststellen, dass ein CSS angewendet wird, das Sie nicht erwartet haben. Vielleicht wird es von einem übergeordneten Element geerbt, und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Fähigkeit, Kurzschrift-Eigenschaften zu erweitern. In unserem Beispiel wird die `margin`-Kurzschrift verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die verschiedenen Langhand-Eigenschaften und deren Werte anzuzeigen.**

**Sie können Werte in der Regeln-Ansicht ein- und ausschalten, wenn dieses Panel aktiv ist – wenn Sie mit der Maus darüber halten, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies nutzen, um einen A/B-Vergleich durchzuführen und zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und auch, um sie zu debuggen — zum Beispiel, wenn ein Layout falsch ist und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Neben dem An- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas anpassen? DevTools kann Ihnen viel Zeit sparen, die Sie sonst mit dem Bearbeiten eines Stylesheets und dem Neuladen der Seite verbringen würden.

**Mit ausgewähltem `box1`, klicken Sie auf das Farbfeld (den kleinen farbigen Kreis), der die auf den Rand angewendete Farbe zeigt. Ein Farbpicker wird geöffnet, und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. Auf ähnliche Weise könnten Sie die Breite oder den Stil des Randes ändern.**

![DevTools Styles Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Eine neue Eigenschaft hinzufügen

Sie können mit den DevTools Eigenschaften hinzufügen. Vielleicht haben Sie erkannt, dass Ihre Box die Schriftgröße des `<body>`-Elements nicht erben sollen, und möchten für sie eine eigene spezifische Größe festlegen? Sie können dies in DevTools ausprobieren, bevor Sie es zu Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration darin einzugeben, an diesem Punkt können Sie beginnen, die neue Eigenschaft zu tippen, und DevTools wird Ihnen eine Autovervollständigungsliste der passenden Eigenschaften anzeigen. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort hinzufügen.**

![Das DevTools-Panel, das eine neue Eigenschaft zu den Regeln hinzufügt, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt in der Regeln-Ansicht auch andere nützliche Funktionen, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verständnis des Box-Modells

In den vorherigen Lektionen haben wir über [das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) gesprochen und darüber, dass wir ein alternatives Box-Modell haben, das ändert, wie die Größe von Elementen basierend auf der von Ihnen angegebenen Größe sowie dem Padding und den Rändern berechnet wird. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells auf dem ausgewählten Element zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element angeordnet ist. Dazu gehört eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf dem Element verwendet haben, aber die dennoch Initialwerte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Sie haben beide dieselbe Breite angewendet (400px), jedoch ist `box1` visuell breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die von Ihnen angegebene Größe des Elements nimmt und dann das Padding und die Breiten der Ränder addiert.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier das Padding und der Rand von der Größe, die Sie dem Element gegeben haben, abgezogen wird. Dies bedeutet, dass der Platz, den die Box auf der Seite einnimmt, genau die Größe ist, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr in [Untersuchen und Untersuchen des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösung von Spezifitätsproblemen

Manchmal stoßen Sie während der Entwicklung, insbesondere wenn Sie die CSS einer bestehenden Seite bearbeiten müssen, auf Schwierigkeiten, einige CSS anzuwenden. Egal, was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was hier normalerweise passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden DevTools sehr hilfreich sein.

In unserer Beispieldatei sind zwei Wörter in ein `<em>`-Element eingebunden. Eines wird als orange und das andere als pink dargestellt. Im CSS haben wir angewendet:

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

Wie Sie sich aus der Lektion zum [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, in der wir Spezifität diskutiert haben, sind Klassenselektoren spezifischer als Elemente Selektoren, und so ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, besonders wenn die Informationen irgendwo in einem riesigen Stylesheet versteckt sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und DevTools wird Ihnen zeigen, dass orange die Farbe ist, die gilt, und auch dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können jetzt sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Ein `<em>`-Element auswählen und in den DevTools sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debugging von Problemen in CSS

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein. Wenn Sie sich also in einer Situation befinden, in der CSS nicht wie erwartet funktioniert, wie sollten Sie vorgehen, um das Problem zu lösen? Die folgenden Schritte sollten helfen.

### Machen Sie einen Schritt zurück vom Problem

Jedes Programmierproblem kann frustrierend sein, insbesondere CSS-Probleme, weil man oft keine Fehlermeldung erhält, die man online suchen könnte, um eine Lösung zu finden. Wenn Sie frustriert sind, treten Sie eine Weile vom Problem zurück — machen Sie einen Spaziergang, trinken Sie etwas, unterhalten Sie sich mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung magisch, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird es viel einfacher sein, daran zu arbeiten, wenn Sie sich erfrischt fühlen.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind. Browser sind jedoch auch sehr nachsichtig und versuchen ihr Bestes, Ihre Webseiten auch dann anzuzeigen, wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser erraten, was Sie gemeint haben, und es könnte eine andere Entscheidung treffen, als Sie beabsichtigten. Darüber hinaus könnten zwei verschiedene Browser das Problem auf unterschiedliche Weise bewältigen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um Fehler zu erkennen und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert vom verwendeten Browser unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, im verwendeten Browser nicht unterstützt wird, wird nichts kaputtgehen, aber dieses CSS wird nicht angewendet. DevTools hebt in der Regel nicht unterstützte Eigenschaften und Werte in gewisser Weise hervor. Im folgenden Screenshot unterstützt der Browser den Wert "subgrid" von {{cssxref("grid-template-columns")}} nicht.

![Bild von Browser-DevTools mit `grid-template-columns: subgrid`, das durchgestrichen ist, da der Wert subgrid nicht unterstützt wird.](no-support.png)

Sie können auch die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Browserunterstützung für diese Eigenschaft, oft aufgeschlüsselt, wenn es Unterstützung für einige Verwendungen der Eigenschaft gibt und für andere nicht. [Siehe die Kompatibilitätstabelle für die `grid-template-columns`-Eigenschaft](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Überschreibt etwas anderes Ihr CSS?

Hier wird das Wissen, das Sie über Spezifität gelernt haben, sehr nützlich sein. Wenn Sie etwas haben, das spezifischer ist und das, was Sie zu tun versuchen, überschreibt, können Sie in ein sehr frustrierendes Spiel geraten, um herauszufinden, was. Wie oben beschrieben, zeigen Ihnen DevTools jedoch, welches CSS angewendet wird und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen können, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall für das Problem

Wenn das Problem durch die oben genannten Schritte nicht gelöst wurde, müssen Sie weitere Untersuchungen durchführen. Das Beste, was Sie an diesem Punkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Die Fähigkeit, ein Problem zu "reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden, und ermöglicht es Ihnen auch, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Kodebeispiel, das das Problem auf möglichst einfache Weise demonstriert, mit entfernten, nicht zusammenhängenden Inhalten und Stilen. Dies bedeutet oft, dass Sie den problematischen Code aus Ihrem Layout herausnehmen müssen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder das Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — zum Beispiel über ein CMS — erstellen Sie eine statische Version des Outputs, das das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich, um reduzierte Testfälle zu hosten, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, den Quelltext der Seite anzuzeigen und das HTML in CodePen zu kopieren, dann jedes relevante CSS und JavaScript zu schnappen und es ebenfalls hinzuzufügen. Danach können Sie überprüfen, ob das Problem noch offensichtlich ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht verschwinden lässt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts das Problem jedoch verschwinden lässt, entfernen Sie so viel JavaScript wie möglich, lassen Sie dabei aber das, was das Problem verursacht, bestehen.
3. Entfernen Sie jegliches HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, auf die kleinste Menge Code zu reduzieren, die das Problem noch zeigt.
4. Entfernen Sie jegliches CSS, das das Problem nicht beeinflusst.

Beim Durchführen dieses Prozesses können Sie entdecken, was das Problem verursacht, oder zumindest in der Lage sein, es durch Entfernen von etwas Spezifischem an- und auszuschalten. Es ist sinnvoll, einige Kommentare in Ihren Kode einzufügen, während Sie Dinge entdecken. Wenn Sie Hilfe in Anspruch nehmen müssen, zeigen diese der Person, die Ihnen hilft, was Sie bereits versucht haben. Dies kann Ihnen genügend Informationen geben, um nach wahrscheinlichen Problemen und Lösungen zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, dann gibt Ihnen ein reduzierter Testfall etwas, mit dem Sie um Hilfe bitten können, indem Sie zu einem Forum posten oder einem Kollegen zeigen. Sie werden viel wahrscheinlicher Hilfe erhalten, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau herauszufinden, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte in der Lage sein, das Problem schnell zu erkennen und Ihnen den richtigen Weg zu zeigen, und selbst wenn nicht, ermöglicht Ihr reduzierter Testfall ihnen, schnell einen Blick zu werfen und hoffentlich zumindest einige Hilfe zu bieten.

Falls Ihr Problem tatsächlich ein Bug in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Bug-Report bei dem entsprechenden Browser-Anbieter einzureichen (z. B. auf Mozillas [bugzilla-Seite](https://bugzilla.mozilla.org/)).

Während Sie mit CSS erfahrener werden, werden Sie feststellen, dass Sie schneller darin werden, Probleme zu lösen. Dennoch fragen sich selbst die erfahrensten von uns manchmal, was zur Hölle vor sich geht. Eine methodische Vorgehensweise, das Erstellen eines reduzierten Testfalls und die Erklärung des Problems an jemand anderen führen in der Regel zu einer Lösung.

## Zusammenfassung

Damit haben wir es: eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten bietet, auf die Sie zurückgreifen können, wenn Sie beginnen, CSS und andere Arten von Kode später in Ihrer Karriere zu debuggen.

Das war's für alle Lektionen in diesem Modul. Zum Abschluss testen wir Ihr Wissen zu den behandelten Themen mit einer Reihe von Herausforderungen.

## Siehe auch

- [Firefox > Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > Anzeigen und Ändern von CSS](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}
