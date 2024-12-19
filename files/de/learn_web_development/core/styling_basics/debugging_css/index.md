---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}

Manchmal, wenn Sie CSS schreiben, stoßen Sie auf ein Problem, bei dem Ihr CSS nicht so zu funktionieren scheint, wie Sie es erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element treffen sollte, aber nichts passiert, oder ein Kasten hat eine andere Größe als erwartet. Dieser Artikel wird Ihnen Anleitungen geben, wie Sie ein CSS-Problem debuggen können, und Ihnen zeigen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, CSS-Styling-Grundlagen (in den vorherigen Lektionen dieses Moduls behandelt!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu überprüfen, ob Sie ungültiges Markup auf Ihrer Seite haben, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht formatierten CSS-Code zu überprüfen.</li>
          <li>Nutzten Sie die Entwickler-Tools des Browsers, um das CSS zu inspizieren, das auf HTML-Elemente auf einer Seite angewendet wird.</li>
          <li>Ändern Sie das angewendete CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dies umfasst das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## So greifen Sie auf die DevTools des Browsers zu

Der Artikel [Was sind Entwickler-Tools in Browsern](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie auf die Tools in verschiedenen Browsern und Plattformen zugreifen können. Obwohl Sie sich möglicherweise entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und daher mit den darin enthaltenen Tools am vertrautesten sind, ist es sinnvoll zu wissen, wie Sie in anderen Browsern darauf zugreifen können. Dies ist hilfreich, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern feststellen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Dazu werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihre DevTools wie in dem oben verlinkten Artikel beschrieben.

## DOM versus Quelltextanzeigen

Etwas, das Neulinge bei den DevTools stolpern lassen kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite oder die HTML-Datei, die Sie auf dem Server abgelegt haben, betrachten, und dem, was Sie im [HTML-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es grob dem ähnelt, was Sie über Quelltextanzeigen sehen können, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, indem er beispielsweise für Sie einige schlecht geschriebene HTML-Korrekturen vorgenommen hat. Wenn Sie beispielsweise ein Element falsch geschlossen haben, indem Sie einen `<h2>` eröffnet, aber mit `</h3>` geschlossen haben, wird der Browser herausfinden, was Sie zu tun beabsichtigten, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die durch JavaScript vorgenommen wurden.

Im Vergleich dazu ist Quelltextanzeigen der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu einem bestimmten Zeitpunkt rendert, sodass Sie einen Einblick erhalten, was wirklich passiert.

## Das angewandte CSS inspizieren

Wählen Sie auf Ihrer Seite ein Element aus, entweder durch Rechts- bzw. Strg-Klick darauf und Auswählen von _Inspektieren_ oder durch Auswahl aus dem HTML-Baum links in der DevTools-Anzeige. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem umrandeten Kasten.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts von Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und -Werte sehen können, die auf dieses Element angewendet werden. Sie werden die auf die Klasse `box1` direkt angewendeten Regeln und auch das CSS sehen, das von seinen Vorfahren vererbt wird, in diesem Fall von `<body>`. Dies ist nützlich, wenn Sie ein unerwartetes CSS sehen. Vielleicht wird es von einem übergeordneten Element vererbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, Kurzschreibweise-Eigenschaften auszuklappen. In unserem Beispiel wird die Kurzform `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern, die die verschiedenen Langform-Eigenschaften und deren Werte zeigt.**

**Sie können in der aktiven Regelansicht Werte ein- und ausschalten – wenn Sie mit der Maus darüber fahren, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen und zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und es hilft auch beim Debuggen – zum Beispiel, wenn ein Layout schief läuft und Sie herausfinden wollen, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Neben dem Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas anpassen? DevTools kann Ihnen eine Menge Zeit beim Bearbeiten eines Stylesheets und Neuladen der Seite sparen.

**Mit `box1` ausgewählt, klicken Sie auf das Farbfeld (der kleine farbige Kreis), das die angewandte Farbe der Umrandung zeigt. Ein Farbwähler wird geöffnet, und Sie können einige andere Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. Auf ähnliche Weise könnten Sie die Breite oder den Stil der Umrandung ändern.**

![DevTools Style-Panel mit geöffnetem Farbwähler.](inspecting2-color-picker.png)

## Eine neue Eigenschaft hinzufügen

Sie können mit den DevTools Eigenschaften hinzufügen. Vielleicht ist Ihnen eingefallen, dass Sie nicht möchten, dass Ihr Kasten die Schriftgröße des `<body>` Elements erbt und eine eigene spezifische Größe setzen möchten? Sie können dies in den DevTools ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können die schließende geschweifte Klammer in der Regel anklicken, um eine neue Deklaration darin einzugeben, an welchem Punkt Sie beginnen können, die neue Eigenschaft einzugeben und DevTools Ihnen eine Autovervollständigungsliste der passenden Eigenschaften zeigt. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools-Panel, das eine neue Eigenschaft zu den Regeln hinzufügt, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Box-Modell verstehen

In den vorherigen Lektionen haben wir das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen und die Tatsache, dass wir ein alternatives Box-Modell haben, das ändert, wie die Größe von Elementen basierend auf der Größe, die Sie ihnen geben, zuzüglich der Polsterung und der Rahmen, berechnet wird. DevTools kann wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells des ausgewählten Elements zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element platziert wird. Dies beinhaltet eine Beschreibung von Eigenschaften, die Sie vielleicht nicht explizit auf dem Element verwendet haben, die jedoch anfängliche Werte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die Eigenschaft `box-sizing`, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die zwei Kästen mit den Klassen `box1` und `box2`. Ihnen wird beiden die gleiche Breite (400px) angewandt, jedoch ist `box1` optisch breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element gegeben haben, nimmt und dann die Polsterung und Rahmenbreite hinzufügt.**

Das Element mit einer Klasse von `box2` verwendet `border-box`, so dass hier die Polsterung und der Rahmen von der Größe, die Sie dem Element gegeben haben, abgezogen werden. Dies bedeutet, dass der auf der Seite vom Kasten eingenommene Raum die genaue Größe hat, die Sie angegeben haben – in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Weitere Informationen finden Sie unter [Das Box-Modell untersuchen und inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösungsfindung bei Spezifitätsproblemen

Manchmal werden Sie während der Entwicklung, insbesondere wenn Sie das CSS auf einer bestehenden Website bearbeiten müssen, Schwierigkeiten haben, dass ein bestimmtes CSS angewendet wird. Egal, was Sie tun, das Element scheint das CSS einfach nicht anzunehmen. Was hier in der Regel passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei gibt es zwei Wörter, die in ein `<em>` Element eingebettet sind. Eines wird in Orange und das andere in Hot Pink angezeigt. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber im Stylesheet jedoch ist eine Regel mit einem `.special` Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion über [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, wo wir Spezifität besprochen haben, sind Klassenselektoren spezifischer als Elementselektoren, und so ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, besonders wenn die Information irgendwo in einem riesigen Stylesheet versteckt ist.

**Untersuchen Sie das `<em>` mit der Klasse von `.special` und die DevTools zeigen Ihnen, dass Orange die Farbe ist, die angewendet wird, und auch, dass die `color`-Eigenschaft, die auf das `<em>` angewendet wurde, durchgestrichen ist. So können Sie jetzt sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Ein em auswählen und in den DevTools sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debugging-Probleme in CSS

DevTools können eine große Hilfe sein, wenn es darum geht, CSS-Probleme zu lösen. Wenn Sie sich also in einer Situation befinden, in der CSS nicht wie erwartet funktioniert, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Machen Sie einen Schritt zurück vom Problem

Jedes Codierungsproblem kann frustrierend sein, insbesondere CSS-Probleme, denn oft erhält man keine Fehlermeldung, die man online suchen kann, um eine Lösung zu finden. Wenn Sie frustriert sind, machen Sie einen Schritt zurück vom Problem – gehen Sie spazieren, holen Sie sich einen Drink, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung wie von Zauberhand, wenn Sie aufhören, an das Problem zu denken, und selbst wenn nicht, wird das Arbeiten daran viel einfacher sein, wenn Sie sich erfrischt fühlen.

### Haben Sie gültiges HTML und CSS?

Browsers erwarten, dass Ihr CSS und HTML korrekt geschrieben sind. Allerdings sind Browsers auch sehr nachsichtig und versuchen, ihre Webseiten auch dann anzuzeigen, wenn Sie Fehler im Markup oder Stylesheet haben. Wenn in Ihrem Code Fehler sind, muss der Browser raten, was Sie meinten, und er könnte eine andere Entscheidung treffen, als das, was Sie im Sinn hatten. Zusätzlich könnten zwei verschiedene Browsers das Problem auf zwei unterschiedliche Weisen lösen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um Fehler zu erfassen und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert von dem Browser, in dem Sie testen, unterstützt?

Browsers ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht von dem Browser unterstützt wird, in dem Sie testen, dann wird nichts kaputtgehen, aber dieses CSS wird nicht angewendet. DevTools hebt in der Regel nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervor. Im folgenden Screenshot unterstützt der Browser den subgrid-Wert von {{cssxref("grid-template-columns")}} nicht.

![Abbild von Browser-DevTools mit grid-template-columns: subgrid, das durchgestrichen ist, da der subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch einen Blick auf die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN werfen. Diese zeigen Ihnen die Browserunterstützung für diese Eigenschaft, oft heruntergebrochen, wenn es für einige Verwendungen der Eigenschaft Unterstützung gibt und nicht für andere. [Sehen Sie sich die Kompatibilitätstabelle für die `grid-template-columns` Eigenschaft an](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Überschreibt etwas anderes Ihr CSS?

Hier wird das Wissen, das Sie über Spezifität gelernt haben, sehr hilfreich sein. Wenn etwas spezifischeres überschreibt, was Sie versuchen zu tun, können Sie in ein sehr frustrierendes Spiel geraten, um herauszufinden, was. Wie oben beschrieben, zeigen Ihnen die DevTools jedoch, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um es zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem durch die oben genannten Schritte nicht gelöst wird, dann müssen Sie mehr Untersuchung betreiben. Das Beste, was Sie zu diesem Zeitpunkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Die Fähigkeit, "ein Problem zu reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden, und es ermöglicht Ihnen auch, Bugs zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist eine Codebeispiel, das das Problem auf die einfachste Weise demonstriert, mit nicht verwandtem umgebendem Inhalt und Styling entfernt. Dies bedeutet oft, den problematischen Code aus Ihrem Layout zu nehmen, um ein kleines Beispiel zu machen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird – beispielsweise über ein CMS – erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich zum Hosten von reduzierten Testfällen, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit anfangen, Quelltext anzeigen auf der Seite durchzuführen und das HTML in CodePen zu kopieren, dann holen Sie sich jegliches relevantes CSS und JavaScript und fügen Sie es ebenfalls hinzu. Danach, können Sie überprüfen, ob das Problem immer noch offensichtlich ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht beseitigt, schließen Sie das JavaScript nicht mit ein. Wenn das Entfernen des JavaScripts _tatsächlich_ das Problem beseitigt, entfernen Sie so viel JavaScript wie möglich und lassen Sie nur das, was das Problem verursacht.
3. Entfernen Sie jegliches HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie wiederum, auf die kleinste Menge von Code zu kommen, die das Problem immer noch zeigt.
4. Entfernen Sie jegliches CSS, das das Problem nicht beeinflusst.

Während dieses Vorgangs werden Sie möglicherweise entdecken, was das Problem verursacht, oder zumindest in der Lage sein, es ein- und auszuschalten, indem Sie etwas Spezielles entfernen. Es lohnt sich, während Sie Dinge entdecken, einige Kommentare in Ihren Code einzufügen. Wenn Sie Hilfe brauchen, werden sie der Person, die Ihnen hilft, zeigen, was Sie bereits versucht haben. Dies könnte Ihnen genügend Informationen geben, um nach wahrscheinlichen Problemen und Workarounds zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, dann haben Sie mit einem reduzierten Testfall etwas, mit dem Sie um Hilfe bitten können, indem Sie es in einem Forum posten oder es einem Kollegen zeigen. Sie sind viel wahrscheinlicher, Hilfe zu bekommen, wenn Sie zeigen können, dass Sie die Arbeit getan haben, das Problem zu reduzieren und genau herauszufinden, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte in der Lage sein, das Problem schnell zu erkennen und Sie in die richtige Richtung zu weisen, und selbst wenn nicht, ermöglicht Ihnen Ihr reduzierter Testfall, einen schnellen Blick darauf zu werfen und hoffentlich zumindest etwas Hilfe anzubieten.

Wenn Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim entsprechenden Browser-Verkäufer zu erstellen (z.B. auf Mozillas [Bugzilla-Seite](https://bugzilla.mozilla.org/)).

Wenn Sie mit CSS erfahrener werden, werden Sie feststellen, dass Sie schneller darin werden, Probleme herauszufinden. Allerdings finden sich selbst die erfahrensten von Uns manchmal fragend, was um alles in der Welt vor sich geht. Eine methodische Vorgehensweise, das Erstellen eines reduzierten Testfalls und das Erklären des Problems an jemanden anderen führen normalerweise dazu, dass eine Lösung gefunden wird.

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten bieten sollte, auf die Sie zählen können, wenn Sie anfangen, CSS und andere Arten von Code in Ihrer weiteren Karriere zu debuggen.

Das war's für alle Lektionen in diesem Modul. Um es abzuschließen, werden wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen testen.

## Siehe auch

- [Firefox > CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > CSS anzeigen und ändern](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics")}}
