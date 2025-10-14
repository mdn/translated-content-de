---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 56ccb15b023cb11234cd044a68d6d3a93e752326
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht wie erwartet funktioniert. Vielleicht glauben Sie, dass ein bestimmter Selektor mit einem Element übereinstimmen sollte, aber nichts passiert, oder ein Kästchen hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, Grundlagen der CSS-Stilgestaltung (in den vorherigen Lektionen dieses Moduls behandelt!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu sehen, ob Sie ungültiges Markup auf Ihrer Seite haben, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um fehlerhaft-formatierten CSS-Code zu überprüfen.</li>
          <li>Verwenden Sie die Entwicklertools des Browsers, um das CSS zu inspizieren, das auf HTML-Elemente einer Seite angewandt wird.</li>
          <li>Modifizieren Sie das angewandte CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dies beinhaltet das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## So greifen Sie auf die Entwicklertools des Browsers zu

Der Artikel [Was sind Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie auf die Tools in verschiedenen Browsern und Plattformen zugreifen. Auch wenn Sie sich hauptsächlich für die Entwicklung in einem bestimmten Browser entscheiden und daher mit den darin enthaltenen Tools am besten vertraut sind, ist es dennoch sinnvoll, zu wissen, wie Sie darauf in anderen Browsern zugreifen können. Dies ist hilfreich, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern sehen.

In dieser Lektion betrachten wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS. Um dies zu tun, werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Der DOM versus Quelltext anzeigen

Etwas, das Neulinge bei den DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite oder die HTML-Datei, die Sie auf den Server gelegt haben, und dem, was Sie im [HTML-Fenster](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es ungefähr ähnlich aussieht wie das, was Sie über die Quelltextansicht sehen können, gibt es einige Unterschiede.

Im gerenderten DOM kann der Browser das HTML normalisiert haben, indem er beispielsweise einige schlecht geschriebene HTML-Korrekturen für Sie vornimmt. Wenn Sie ein Element falsch geschlossen haben, beispielsweise eine Öffnung mit einem `<h2>`, aber mit einem `</h3>` geschlossen haben, wird der Browser herausfinden, was Sie beabsichtigten, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen an, die von JavaScript vorgenommen wurden.

Die Quelltextansicht hingegen zeigt den HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu einem bestimmten Zeitpunkt rendert und gibt Ihnen somit einen Einblick in das, was tatsächlich vor sich geht.

## Inspektion des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder durch Rechts-/Strg-Klick darauf und Auswahl von _Inspezieren_, oder indem Sie es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite mit einem gepunkteten Kasten darum.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts von Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und -Werte sehen, die auf dieses Element angewendet werden. Sie sehen die Regeln, die direkt auf die Klasse `box1` angewendet werden, und auch das CSS, das von seinen Vorfahren, in diesem Fall vom `<body>`, auf die Box geerbt wird. Dies ist nützlich, wenn Sie sehen, dass CSS angewendet wird, das Sie nicht erwartet haben. Vielleicht wird es von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, Kurzschrift-Eigenschaften zu erweitern. In unserem Beispiel wird die `margin`-Kurzschrift verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern, die die verschiedenen Langform-Eigenschaften und ihre Werte anzeigt.**

**Sie können Werte in der Regelansicht ein- und ausschalten, wenn das Panel aktiv ist — wenn Sie mit der Maus darüber fahren, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, beispielsweise `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen, zu entscheiden, ob etwas mit einer angewandten Regel besser aussieht oder nicht, und auch um es zu debuggen — zum Beispiel, wenn ein Layout falsch läuft und Sie versuchen herauszufinden, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas anpassen? Mit den DevTools können Sie viel Zeit sparen, indem Sie Stylesheets bearbeiten und die Seite neu laden.

**Mit ausgewähltem `box1` klicken Sie auf den Farbfleck (den kleinen farbigen Kreis), der die auf die Grenze angewendete Farbe anzeigt. Ein Farbwähler öffnet sich und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. Ähnlich könnten Sie die Breite oder den Stil der Grenze ändern.**

![DevTools-Stile-Panel mit offenem Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können in den DevTools Eigenschaften hinzufügen. Vielleicht haben Sie erkannt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt und stattdessen eine eigene spezifische Größe festlegen möchten? Sie können dies in den DevTools ausprobieren, bevor Sie es zu Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um mit der Eingabe einer neuen Deklaration zu beginnen, bei der Sie mit der Eingabe der neuen Eigenschaft beginnen können und die DevTools Ihnen eine Autovervollständigungsliste passender Eigenschaften anzeigen. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort hinzufügen.**

![Das DevTools-Panel, Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelansicht, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Verständnis des Box-Modells

In den vorherigen Lektionen haben wir das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen und die Tatsache, dass wir ein alternatives Box-Modell haben, das ändert, wie die Größe von Elementen basierend auf der von Ihnen angegebenen Größe sowie Polsterungen und Rahmen berechnet wird. DevTools können Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells des ausgewählten Elements, zusammen mit einer Beschreibung der Eigenschaften und Werte, die beeinflussen, wie das Element angeordnet ist. Dazu gehört eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf das Element verwendet haben, die aber anfängliche Werte festgelegt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben dieselbe Breite angewendet (400px), jedoch ist `box1` optisch breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die von Ihnen angegebene Größe des Elements nimmt und dann die Polsterung und Breitenbreite hinzufügt.**

Das Element mit einer Klasse von `box2` verwendet `border-box`, sodass hier die Polsterung und der Rahmen von der Größe abgezogen werden, die Sie dem Element gegeben haben. Dies bedeutet, dass der Platz, den das Kästchen auf der Seite einnimmt, genau die von Ihnen angegebene Größe ist — in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Weitere Informationen finden Sie in [Untersuchen und Inspizieren des Box-Modells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösung von Spezifitätsproblemen

Manchmal während der Entwicklung, insbesondere wenn Sie das CSS auf einer bestehenden Seite bearbeiten müssen, werden Sie Schwierigkeiten haben, ein CSS zur Anwendung zu bringen. Egal, was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was hier im Allgemeinen passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei sind zwei Wörter, die in ein `<em>`-Element eingeschlossen sind. Eines wird in Orange und das andere in Hotpink angezeigt. Im CSS haben wir angewendet:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Darüber hinaus gibt es jedoch in der Stylesheet eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie aus der Lektion über [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) wissen, wo wir über Spezifität diskutierten, sind Klassen-Selektoren spezifischer als Element-Selektoren, und daher ist dies der Wert, der angewendet wird. Die DevTools können Ihnen helfen, solche Probleme zu finden, besonders wenn die Informationen irgendwo in einem riesigen Stylesheet vergraben sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und die DevTools werden Ihnen zeigen, dass Orange die Farbe ist, die angewandt wird, und dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können jetzt sehen, dass der Klassen-Selektor den Element-Selektor überschreibt.**

![Auswählen eines em und Blick auf die DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debuggen von Problemen in CSS

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein. Wenn Sie sich also in einer Situation befinden, in der CSS nicht wie erwartet funktioniert, wie sollten Sie dann vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Ein Schritt zurück vom Problem machen

Jedes Codierungsproblem kann frustrierend sein, insbesondere CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, nach der Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert werden, nehmen Sie sich eine Auszeit von dem Problem — gehen Sie für einen Spaziergang, holen Sie sich ein Getränk, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an einer anderen Sache. Manchmal erscheint die Lösung magisch, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird es viel einfacher sein, daran zu arbeiten, wenn Sie erfrischt sind.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben ist, jedoch sind Browser auch sehr nachsichtig und versuchen ihr Bestes, um Ihre Webseiten auch dann anzuzeigen, wenn Sie Fehler in der Markup- oder Stylesheet-Datei haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie gemeint haben, und er könnte eine andere Entscheidung treffen, als Sie im Sinn hatten. Darüber hinaus könnten zwei verschiedene Browser mit dem Problem auf zwei verschiedene Arten umgehen. Ein guter erster Schritt ist es daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um eventuelle Fehler zu finden und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert im von Ihnen getesteten Browser unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, im von Ihnen getesteten Browser nicht unterstützt wird, wird nichts kaputt gehen, aber dieses CSS wird nicht angewendet. DevTools heben in der Regel nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervor. Im folgenden Screenshot unterstützt der Browser den Subgrid-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools mit der grid-template-columns: subgrid durchgestrichen, da der Subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch die Tabellen zur Browser-Kompatibilität am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Unterstützung dieser Eigenschaft durch den Browser, oft aufgeschlüsselt, ob es Unterstützung für einige Verwendungen dieser Eigenschaft gibt und nicht für andere. [Siehe die Kompatibilitätstabelle für die Eigenschaft `grid-template-columns`](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Wird Ihr CSS von etwas anderem überschrieben?

Hier wird das Wissen, das Sie über Spezifität erlangt haben, sehr nützlich sein. Wenn Sie etwas spezifischeres haben, das überschreibt, was Sie versuchen tun, könnten Sie in ein sehr frustrierendes Spiel verwickelt werden, um herauszufinden, was genau. Wie oben beschrieben, zeigen Ihnen die DevTools jedoch, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um es zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem nicht durch die obigen Schritte gelöst wird, müssen Sie weiter untersuchen. In diesem Punkt ist es am besten, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Ein Problem "reduzieren zu können" ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem Code und dem Ihrer Kollegen zu finden, und ermöglicht es Ihnen auch, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste Weise demonstriert, wobei nicht verwandte Inhalte und Stile entfernt werden. Dies bedeutet oft, das problematische Code-Stück aus Ihrem Layout zu entfernen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — zum Beispiel über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich, um reduzierte Testfälle zu hosten, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten damit beginnen, den Quelltext der Seite anzusehen und das HTML in CodePen zu kopieren, dann holen Sie sich das relevante CSS und JavaScript und fügen es auch hinzu. Danach können Sie überprüfen, ob das Problem noch vorhanden ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht beseitigt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts _doch_ das Problem behebt, entfernen Sie so viel JavaScript wie möglich und lassen Sie nur das, was das Problem verursacht.
3. Entfernen Sie HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, auf die kleinste Menge an Code zu gelangen, die das Problem dennoch zeigt.
4. Entfernen Sie CSS, das das Problem nicht beeinflusst.

Im Prozess des Erstellens können Sie vielleicht herausfinden, was das Problem verursacht, oder zumindest es durch das Entfernen von etwas Speziellem ein- und ausschalten. Es ist hilfreich, einige Kommentare zu Ihrem Code hinzuzufügen, während Sie Dinge entdecken. Wenn Sie Hilfe benötigen, zeigen sie der Person, die Ihnen hilft, was Sie bereits ausprobiert haben. Dies könnte Ihnen genügend Informationen geben, um nach möglichen Problemen und Lösungen zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, dann gibt Ihnen ein reduzierter Testfall etwas, worum Sie um Hilfe bitten können, indem Sie in einem Forum posten oder einem Kollegen zeigen. Sie werden viel eher Hilfe erhalten, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau zu identifizieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte das Problem möglicherweise schnell erkennen und Ihnen in die richtige Richtung weisen, und selbst wenn nicht, wird Ihr reduzierter Testfall es ihm ermöglichen, einen schnellen Blick darauf zu werfen und hoffentlich zumindest ein wenig Hilfe anzubieten.

Sollte Ihr Problem tatsächlich ein Fehler in einem Browser sein, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht an den relevanten Browser-Anbieter einzureichen (zum Beispiel auf Mozillas [bugzilla site](https://bugzilla.mozilla.org/)).

Wenn Sie mehr Erfahrung mit CSS sammeln, werden Sie feststellen, dass Sie schneller werden, Probleme zu verstehen und zu beheben. Trotzdem finden selbst die erfahrensten unter uns sich manchmal wondering, was in der Welt vor sich geht. Ein methodischer Ansatz, ein reduzierter Testfall und die Erklärung des Problems an jemand anderen führen in der Regel dazu, dass eine Lösung gefunden wird.

## Zusammenfassung

Da haben wir sie: eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten an die Hand geben sollte, auf die Sie sich verlassen können, wenn Sie beginnen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Das war es für alle Lektionen in diesem Modul. Zum Abschluss werden wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen testen.

## Siehe auch

- [Firefox > Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > Anzeigen und ändern von CSS](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
