---
title: Debugging CSS
slug: Learn/CSS/Building_blocks/Debugging_CSS
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht wie erwartet funktioniert. Möglicherweise glauben Sie, dass ein bestimmter Selektor zu einem Element passen sollte, aber nichts passiert, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen eine Anleitung zum Debuggen eines CSS-Problems und zeigt Ihnen, wie die in modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was vor sich geht.

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
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen der Browser-DevTools kennenlernen und einfache Inspektionen und Bearbeitungen von CSS durchführen.
      </td>
    </tr>
  </tbody>
</table>

## So greifen Sie auf die DevTools des Browsers zu

Der Artikel [Was sind Browser-Entwicklungstools?](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ist ein aktueller Leitfaden, der erklärt, wie Sie in verschiedenen Browsern und Plattformen auf die Tools zugreifen können. Obwohl Sie sich in der Regel für die Entwicklung in einem bestimmten Browser entscheiden und somit mit den in diesem Browser enthaltenen Tools am besten vertraut sind, ist es sinnvoll zu wissen, wie man in anderen Browsern darauf zugreift. Dies ist nützlich, wenn in mehreren Browsern unterschiedliche Renderings auftreten.

Sie werden auch feststellen, dass Browser bei der Erstellung ihrer DevTools unterschiedliche Schwerpunkte gesetzt haben. Beispielsweise gibt es in Firefox hervorragende Tools zum visuellen Arbeiten mit CSS-Layouts, mit denen Sie [Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), [Flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) und [Shapes](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) inspizieren und bearbeiten können. Alle verschiedenen Browser verfügen jedoch über ähnliche grundlegende Tools, z.B. zum Inspizieren der Eigenschaften und Werte, die auf Elemente auf der Seite angewendet werden, und um Änderungen daran im Editor vorzunehmen.

In dieser Lektion werfen wir einen Blick auf einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS. Dazu verwenden wir [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM versus Quelltextansicht

Etwas, was Anfänger in DevTools stolpern lassen kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext einer Webseite ansehen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html), oder die HTML-Datei, die Sie auf den Server gelegt haben, und dem, was Sie im [HTML-Pane](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es ungefähr so aussieht, wie das, was Sie über die Quelltextansicht sehen können, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, indem er beispielsweise einige schlecht geschriebene HTML-Tags für Sie korrigiert hat. Wenn Sie ein Element falsch geschlossen haben, zum Beispiel ein `<h2>` geöffnet, aber mit einem `</h3>` geschlossen, wird der Browser verstehen, was Sie beabsichtigt haben, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die von JavaScript vorgenommen wurden.

Im Vergleich dazu zeigt die Quelltextansicht den HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) Ihrer DevTools zeigt genau, was der Browser zu einem bestimmten Zeitpunkt rendert, sodass Sie einen Einblick erhalten, was wirklich vor sich geht.

## Die angewendete CSS inspizieren

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit der rechten Maustaste darauf klicken und _Untersuchen_ auswählen oder es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem gezeichneten Rahmen darum.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und Werte sehen, die auf dieses Element angewendet werden. Sie sehen die Regeln, die direkt auf die Klasse `box1` angewendet werden, und auch das CSS, das von seinen Vorfahren geerbt wird, in diesem Fall vom `<body>`. Dies ist nützlich, wenn Sie einige CSS sehen, die angewendet werden, die Sie nicht erwartet haben. Vielleicht wird sie von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um sie im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, Kurzschreibweisen-Eigenschaften weiter zu unterschreiben. In unserem Beispiel wird die Kurzform `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die unterschiedlichen Einzelwerte und ihre Werte anzuzeigen.**

**Sie können Werte in der Regelansicht ein- und ausschalten, wenn dieses Fenster aktiv ist — wenn Sie die Maus darüber halten, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich anzustellen und zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und auch, um es zu debuggen — zum Beispiel, wenn ein Layout schief geht und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

Das folgende Video bietet einige nützliche Tipps zum Debuggen von CSS mit den Firefox DevTools:

{{EmbedYouTube("O3DAm82vIvU")}}

## Werte bearbeiten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie ihre Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht, oder die Größe von etwas anpassen? DevTools können Ihnen viel Zeit beim Bearbeiten eines Stylesheets und beim Neuladen der Seite sparen.

**Mit `box1` ausgewählt, klicken Sie auf den Swatch (den kleinen farbigen Kreis), der die auf den Rand angewendete Farbe zeigt. Ein Farbwähler öffnet sich und Sie können einige andere Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil des Rahmens ändern.**

![DevTools Styles Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Eine neue Eigenschaft hinzufügen

Sie können mit den DevTools Eigenschaften hinzufügen. Vielleicht haben Sie festgestellt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt und möchten eine eigene Größe festlegen? Sie können dies in den DevTools ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration einzugeben, dann können Sie beginnen, die neue Eigenschaft einzugeben und die DevTools zeigen Ihnen eine Autovervollständigungsliste der passenden Eigenschaften an. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch die + Taste klicken, um eine zusätzliche Regel mit dem gleichen Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools-Panel, das Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-.](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, z.B. werden Deklarationen mit ungültigen Werten durchgestrichen. Mehr Informationen finden Sie unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verständnis des Box-Modells

In den vorherigen Lektionen haben wir [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) sowie das alternative Box-Modell besprochen, das die Größe von Elementen auf Basis der Größe, die sie erhalten, plus das Padding und die Ränder ändert. DevTools können Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells des ausgewählten Elements sowie eine Beschreibung der Eigenschaften und Werte, die ändern, wie das Element angeordnet ist. Dazu gehört eine Beschreibung der Eigenschaften, die Sie möglicherweise nicht explizit auf das Element angewendet haben, die jedoch Anfangswerte haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die das verwendete Box-Modell des Elements steuert.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben dieselbe Breite (400px), jedoch ist `box1` optisch breiter. Sie können im Layout-Bereich sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, und dann das Padding und die Randbreite addiert.**

Das Element mit der Klasse `box2` verwendet `border-box`, hier wird das Padding und der Rand von der Größe, die Sie dem Element gegeben haben, abgezogen. Dies bedeutet, dass der auf der Seite von der Box eingenommene Platz genau die Größe hat, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Abschnitt der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Finden Sie mehr heraus unter [Untersuchen und Inspizieren des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Spezifizitätsprobleme lösen

Manchmal während der Entwicklung, insbesondere wenn Sie das CSS auf einer bestehenden Website bearbeiten müssen, werden Sie Schwierigkeiten haben, CSS zu einer Anwendung zu bringen. Egal was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was in der Regel hier passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier helfen Ihnen die DevTools wirklich.

In unserer Beispieldatei wurden zwei Wörter in ein `<em>`-Element eingeschlossen. Eines ist in Orange und das andere in Hotpink. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber hinaus befindet sich jedoch eine Regel mit einem Selektor `.special` im Stylesheet:

```css
.special {
  color: orange;
}
```

Wie Sie sich von der Lektion über [Kaskadierung und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) erinnern, sind Klassenselektoren spezifischer als Elementselektoren, und das ist der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Informationen irgendwo in einem riesigen Stylesheet begraben sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und die DevTools zeigen Ihnen, dass Orange die Farbe ist, die angewendet wird, und auch, dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können jetzt sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Ein Auswahl eines em und das Betrachten der DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Erfahren Sie mehr über die Firefox DevTools

Es gibt viele Informationen über die Firefox DevTools hier auf MDN. Schauen Sie sich den Hauptbereich [DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an, und für mehr Details zu den Dingen, die wir in dieser Lektion kurz behandelt haben, siehe [Die Anleitung](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#how-to).

## Debugging von Problemen in CSS

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein. Wenn Sie also eine Situation erleben, bei der CSS nicht so funktioniert, wie Sie es erwarten, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Machen Sie einen Schritt zurück vom Problem

Jedes Programmierproblem kann frustrierend sein, besonders CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, die Sie online für eine Lösung suchen können. Wenn Sie frustriert sind, nehmen Sie sich etwas Zeit vom Problem — gehen Sie spazieren, holen Sie sich ein Getränk, plaudern Sie mit einem Arbeitskollegen, oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung magisch, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird die Arbeit daran in einem erfrischten Zustand viel einfacher sein.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, aber Browser sind auch sehr nachsichtig und versuchen ihr Bestes, Ihre Webseiten auch bei Fehlern im Markup oder Stylesheet anzuzeigen. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie meinten, und es könnte eine andere Entscheidung treffen, als Sie im Kopf hatten. Darüber hinaus könnten zwei verschiedene Browser das Problem auf zwei verschiedene Arten bewältigen. Ein guter erster Schritt ist es daher, Ihr HTML und CSS durch einen Validator zu laufen, um Fehler zu finden und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaften und Werte vom Browser, den Sie testen, unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht vom Browser unterstützt wird, in dem Sie testen, wird nichts brechen, aber dieses CSS wird nicht angewendet. DevTools wird normalerweise nicht unterstützte Eigenschaften und Werte in irgendeiner Weise hervorheben. Im Screenshot unten unterstützt der Browser den Wert Subgrid von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools mit der grid-template-columns: Subgrid durchgestrichen, da der Subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können sich auch die Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Browser-Unterstützung für diese Eigenschaft, oft aufgeschlüsselt, wenn es Unterstützung für einige Nutzungen der Eigenschaft gibt und nicht für andere. [Siehe die Kompatibilitätstabelle für die `shape-outside`-Eigenschaft](/de/docs/Web/CSS/shape-outside#browser_compatibility).

### Wird Ihr CSS von etwas anderem überschrieben?

Hier kommt das Wissen über Spezifizität sehr zum Tragen. Wenn etwas Spezifischeres das, was Sie tun wollen, überschreibt, können Sie in ein sehr frustrierendes Spiel geraten, herauszufinden, was genau. Aber, wie oben beschrieben, werden Ihnen die DevTools zeigen, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem nicht durch die oben genannten Schritte gelöst wird, müssen Sie weitere Untersuchungen anstellen. Der beste Schritt zu diesem Zeitpunkt ist es, ein sogenanntes reduziertes Prüfbeispiel zu erstellen. Das "Reduzieren eines Problems" ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme im eigenen Code und im Code Ihrer Kollegen zu finden, und ermöglicht es Ihnen auch, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduziertes Prüfbeispiel ist ein Codebeispiel, das das Problem auf die einfachste Weise zeigt, mit entferntem nicht verwandtem umgebendem Inhalt und Stil. Dies bedeutet oft, dass Sie den problematischen Code aus Ihrem Layout entfernen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Merkmal zeigt.

So erstellen Sie ein reduziertes Prüfbeispiel:

1. Wenn Ihr Markup dynamisch generiert wird — beispielsweise über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Website wie [CodePen](https://codepen.io/) ist nützlich für das Hosten reduzierter Prüffälle, da sie online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, den Seitenquellcode anzuzeigen und das HTML in CodePen zu kopieren, dann holen Sie sich alle relevanten CSS und JavaScript und fügen es hinzu. Danach können Sie prüfen, ob das Problem immer noch vorhanden ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht verschwinden lässt, fügen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts das Problem jedoch verschwinden lässt, entfernen Sie so viel JavaScript wie möglich, lassen aber das, was das Problem verursacht, drin.
3. Entfernen Sie alle HTML-Elemente, die nicht zum Problem beitragen. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, zu der kleinsten Menge an Code zu gelangen, die das Problem noch zeigt.
4. Entfernen Sie alle CSS, das keinen Einfluss auf das Problem hat.

Während des Prozesses können Sie herausfinden, was das Problem verursacht, oder zumindest in der Lage sein, es an-/auszuschalten, indem Sie etwas Spezifisches entfernen. Es ist sinnvoll, Ihrem Code einige Kommentare hinzuzufügen, während Sie Dinge entdecken. Wenn Sie Hilfe benötigen, werden sie die Person, die Ihnen hilft, zeigen, was Sie bereits versucht haben. Dies könnte gut genug Informationen liefern, um nach wahrscheinlichen Problemen und Lösungen zu suchen.

Sollten Sie immer noch Schwierigkeiten haben, das Problem zu beheben, gibt Ihnen ein reduzierter Testfall etwas, um um Hilfe zu bitten, indem Sie in ein Forum posten oder es einem Kollegen zeigen. Die Wahrscheinlichkeit ist viel größer, Hilfe zu bekommen, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau zu lokalisieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrener Entwickler könnte das Problem schnell erkennen und Sie in die richtige Richtung weisen, und selbst wenn nicht, wird Ihr reduzierter Testfall ihnen einen schnellen Blick ermöglichen und hoffentlich in der Lage sein, zumindest etwas Hilfe anzubieten.

In dem Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduziertes Testbeispiel auch verwendet werden, um einen Fehlerbericht beim zuständigen Browseranbieter einzureichen (z.B. auf Mozillas [Bugzilla-Website](https://bugzilla.mozilla.org/)).

Wenn Sie erfahrener mit CSS werden, werden Sie schneller in der Lage sein, Probleme zu identifizieren. Aber selbst die Erfahrensten von uns finden sich manchmal fragend, was zum Teufel los ist. Bei einem methodischen Ansatz, das Erstellen eines reduzierten Prüfbeispiels und das Erklären des Problems an jemand anderen führt in der Regel dazu, dass eine Lösung gefunden wird.

## Zusammenfassung

Damit hätten wir eine Einführung in das Debuggen von CSS, was Ihnen einige nützliche Fähigkeiten an die Hand gibt, auf die Sie sich verlassen können, wenn Sie anfangen, CSS und andere Codearten später in Ihrer Karriere zu debuggen.

Im letzten Artikel dieses Moduls schauen wir uns an, wie man [sein CSS organisiert](/de/docs/Learn/CSS/Building_blocks/Organizing).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}
