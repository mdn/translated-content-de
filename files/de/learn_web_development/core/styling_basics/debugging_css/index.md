---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: d86ab254d0ed24f36a4657e4f54409df786b2433
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS scheinbar nicht das tut, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor mit einem Element übereinstimmen sollte, aber es passiert nichts, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, Grundlagen des CSS-Stylings (behandelt in den vorherigen Lektionen dieses Moduls!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu sehen, ob Sie ungültige Markups auf Ihrer Seite haben, die CSS-Probleme verursachen.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht geschriebenen CSS-Code zu überprüfen.</li>
          <li>Verwenden Sie die Entwicklerwerkzeuge des Browsers, um das CSS zu inspizieren, das auf die HTML-Elemente einer Seite angewendet wird.</li>
          <li>Modifizieren Sie das angewendete CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dies umfasst das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie Sie auf die Browser-DevTools zugreifen

Der Artikel [Was sind Browser-Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie auf die Werkzeuge in verschiedenen Browsern und Plattformen zugreifen können. Während Sie sich möglicherweise entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und daher mit den darin enthaltenen Werkzeugen am vertrautesten sind, lohnt es sich zu wissen, wie man sie in anderen Browsern zugänglich macht. Dies wird helfen, wenn Sie Unterschiede im Rendering zwischen mehreren Browsern feststellen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Dazu verwende ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihr DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM versus Quelltext anzeigen

Etwas, das Neulinge bei den DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite, oder die HTML-Datei, die Sie auf dem Server abgelegt haben, und dem, was Sie im [HTML-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es dem, was Sie über Quelltext anzeigen sehen, grob ähnlich aussieht, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, indem er zum Beispiel schlecht geschriebenes HTML für Sie korrigiert hat. Wenn Sie ein Element nicht korrekt geschlossen haben, etwa durch das Öffnen eines `<h2>`, aber das Schließen mit einem `</h3>`, wird der Browser herausfinden, was Sie beabsichtigen wollten und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen an, die durch JavaScript vorgenommen wurden.

Quelltext anzeigen ist im Vergleich der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das an, was der Browser zu einem bestimmten Zeitpunkt rendert, sodass es Ihnen einen Einblick gibt, was wirklich passiert.

## Inspektion des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit der rechten Maustaste darauf klicken und _Untersuchen_ auswählen oder es aus dem HTML-Baum links in der DevTools-Darstellung auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem gezeichneten Rahmen darum.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts von Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und -Werte sehen, die auf dieses Element angewendet werden. Sie sehen die direkt auf die Klasse `box1` angewendeten Regeln und auch das CSS, das von den Vorfahren der Box, in diesem Fall von `<body>`, geerbt wird. Dies ist nützlich, wenn Sie sehen, dass ein unerwartetes CSS angewandt wird. Vielleicht wird es von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Ebenfalls nützlich ist die Möglichkeit, Kurzschreibweisen-Eigenschaften zu erweitern. In unserem Beispiel wird die `margin`-Kurzschreibweise verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die verschiedenen Langform-Eigenschaften und deren Werte anzuzeigen.**

**Sie können die Werte in der Regelansicht ein- und ausschalten, wenn dieses Panel aktiv ist – wenn Sie mit der Maus darüber fahren, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen und zu entscheiden, ob etwas mit einer angewandten Regel besser aussieht oder nicht, und auch, um es zu debuggen – beispielsweise, wenn ein Layout schiefgeht und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Möchten Sie vielleicht sehen, ob eine andere Farbe besser aussieht, oder die Größe von etwas anpassen? DevTools kann Ihnen viel Zeit sparen, indem Sie ein Stylesheet bearbeiten und die Seite neu laden.

**Mit `box1` ausgewählt, klicken Sie auf das Farbfeld (den kleinen farbigen Kreis), das die auf den Rand angewandte Farbe anzeigt. Ein Farbwähler wird geöffnet und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil des Rands ändern.**

![DevTools Styles Panel mit geöffnetem Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie erkannt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt und möchten eine spezifische Größe festlegen? Sie können dies in DevTools ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration darin einzugeben, wobei Sie mit dem Tippen der neuen Eigenschaft beginnen können und DevTools Ihnen eine Autovervollständigungsliste von passenden Eigenschaften zeigt. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die Schaltfläche + klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort einfügen.**

![Das DevTools-Panel, das Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, beispielsweise werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [CSS prüfen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Box-Modell verstehen

In den vorhergehenden Lektionen haben wir das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und die Tatsache besprochen, dass wir ein alternatives Box-Modell haben, das die Größe von Elementen basierend auf der von Ihnen angegebenen Größe plus den Abständen und Rändern ändert. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells auf dem ausgewählten Element sowie eine Beschreibung der Eigenschaften und Werte, die ändern, wie das Element dargestellt wird. Dies umfasst eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf das Element angewendet haben, die jedoch Anfangswerte haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die zwei Boxen mit den Klassen `box1` und `box2`. Beide haben dieselbe Breite angewendet (400px), jedoch ist `box1` visuell breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, nimmt und dann die Abstände und Randbreiten hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier die Abstände und der Rand von der Größe abgezogen werden, die Sie dem Element gegeben haben. Dies bedeutet, dass der auf der Seite von der Box eingenommene Platz die genaue Größe ist, die Sie angegeben haben – in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr im [Untersuchen und Inspizieren des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Problemlösung bei Spezifitätsproblemen

Manchmal während der Entwicklung, insbesondere wenn Sie das CSS auf einer vorhandenen Seite bearbeiten müssen, werden Sie feststellen, dass Sie es schwer haben, ein bestimmtes CSS anzuwenden. Egal was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was hier im Allgemeinen passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei sind zwei Wörter in ein `<em>`-Element eingewickelt. Eines wird in Orange und das andere in Hotpink angezeigt. Im CSS haben wir angewandt:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber hinaus befindet sich im Stylesheet jedoch eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion über [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, in der wir über Spezifität sprachen, sind Klassenselektoren spezifischer als Elementselektoren, und daher ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Information irgendwo in einem riesigen Stylesheet vergraben ist.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und DevTools zeigt Ihnen, dass Orange die Farbe ist, die angewendet wird, und dass auch die `color`-Eigenschaft, die auf das `<em>` angewendet wurde, durchgestrichen ist. Sie können jetzt sehen, dass der Klassen-Selektor den Element-Selektor überschreibt.**

![Auswählen eines em und Ansehen der DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debuggen von Problemen in CSS

DevTools kann eine große Hilfe sein, wenn Sie CSS-Probleme lösen, also wenn Sie sich in einer Situation befinden, in der CSS nicht wie erwartet funktioniert, wie sollten Sie es angehen, es zu lösen? Die folgenden Schritte sollten helfen.

### Machen Sie einen Schritt zurück vom Problem

Jedes Coding-Problem kann frustrierend sein, insbesondere CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, die Ihnen bei der Online-Suche nach einer Lösung hilft. Wenn Sie frustriert sind, treten Sie eine Weile vom Problem zurück—gehen Sie spazieren, holen Sie sich ein Getränk, sprechen Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung magisch, wenn Sie aufhören, über das Problem zu nachzudenken, und selbst wenn nicht, wird das Arbeiten daran in einem erfrischten Zustand viel einfacher sein.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben ist, jedoch sind Browser auch sehr nachsichtig und versuchen ihr Bestes, um Ihre Webseiten auch bei Fehlern im Markup oder Stylesheet anzuzeigen. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie gemeint haben, und er könnte eine andere Entscheidung treffen, als Sie im Sinn hatten. Außerdem könnten zwei verschiedene Browser mit dem Problem auf unterschiedliche Weise umgehen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator zu führen, um eventuelle Fehler zu erkennen und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Sind die Eigenschaft und der Wert vom Browser, den Sie testen, unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht vom Browser unterstützt wird, in dem Sie testen, wird nichts brechen, aber dieses CSS wird nicht angewendet. DevTools wird in der Regel nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervorheben. Im Screenshot unten wird der subgrid-Wert von {{cssxref("grid-template-columns")}} vom Browser nicht unterstützt.

![Bild der Browser-DevTools mit durchgestrichenem grid-template-columns: subgrid, da der subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können sich auch die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Unterstützung der Browser für diese Eigenschaft, oft aufgeschlüsselt, ob es Unterstützung für einige Anwendungen der Eigenschaft gibt und nicht für andere. [Siehe die Kompatibilitätstabelle für die `grid-template-columns`-Eigenschaft](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Überschreibt etwas anderes Ihr CSS?

Hier kommen die Informationen, die Sie über Spezifität gelernt haben, sehr gelegen. Wenn Sie etwas Spezifischeres haben, das überschreibt, was Sie zu tun versuchen, können Sie in einem sehr frustrierenden Spiel landen, um herauszufinden, was. Wie oben beschrieben, zeigen Ihnen DevTools jedoch, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Machen Sie einen reduzierten Testfall des Problems

Wenn das Problem durch die oben genannten Schritte nicht gelöst wird, müssen Sie weiterforschen. Das Beste, was Sie in diesem Moment tun können, ist, etwas bekannt als einen reduzierten Testfall zu erstellen. Die Fähigkeit, ein "Problem zu reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden, und wird Ihnen auch ermöglichen, Bugs zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise demonstriert, wobei nicht zusammenhängender umgebender Inhalt und Styling entfernt wurden. Dies wird oft bedeuten, den problematischen Code aus Ihrem Layout herauszunehmen, um ein kleines Beispiel zu machen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — zum Beispiel über ein CMS — machen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich für das Hosting von reduzierten Testfällen, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, den Quelltext auf der Seite anzuzeigen und das HTML in CodePen zu kopieren, dann holen Sie sich das relevante CSS und JavaScript und fügen es ebenfalls ein. Danach können Sie überprüfen, ob das Problem noch sichtbar ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht verschwinden lässt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts das Problem _beseitigt_, dann entfernen Sie so viel JavaScript wie möglich, wobei Sie das belassen, was das Problem verursacht.
3. Entfernen Sie jegliches HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, sich auf die kleinste Menge an Code zu reduzieren, die das Problem noch zeigt.
4. Entfernen Sie jegliches CSS, das nicht das Problem beeinflusst.

Im Prozess des Reduzierens könnte Ihnen klar werden, was das Problem verursacht, oder zumindest das Wissen, was fehlt, das plötzlich das Problem hervorbringt. Wenn das jedoch nicht Ihr Problem löst, bieten Sie eine hervorragende Grundlage, um Hilfe zu bitten.

Wenn Sie immer noch Mühe haben, das Problem zu lösen, dann gibt Ihnen ein reduzierter Testfall etwas, um um Hilfe zu bitten, indem Sie es in einem Forum posten oder einem Kollegen zeigen. Die Wahrscheinlichkeit, Hilfe zu erhalten, ist viel größer, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau zu identifizieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte in der Lage sein, das Problem schnell zu erkennen und Ihnen in die richtige Richtung zu weisen, und selbst wenn nicht, ermöglicht Ihnen jemandem einen kleinen Blick darauf und hoffentlich bieten sie zumindest einige Hilfe an.

In dem Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim entsprechenden Browserhersteller einzureichen (z.B. auf Mozillas [bugzilla-Seite](https://bugzilla.mozilla.org/)).

Mit zunehmender Erfahrung im Umgang mit CSS werden Sie feststellen, dass Sie schneller herausfinden, wo das Problem liegt. Aber selbst die Erfahrensten finden sich manchmal fragend, was eigentlich vor sich geht. Ein methodischer Ansatz, das Erstellen eines reduzierten Testfalls und das Erklären des Problems an jemand anderen führt in der Regel zur Lösung.

## Zusammenfassung

Da haben wir es: eine Einführung in das Debuggen von CSS, die Ihnen nützliche Fähigkeiten geben sollte, auf die Sie später in Ihrer Karriere beim Debuggen von CSS und anderen Codearten zählen können.

Das war es mit den Lektionen in diesem Modul. Um es abzuschließen, testen wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen.

## Siehe auch

- [Firefox > CSS prüfen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > CSS anzeigen und ändern](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
