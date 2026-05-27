---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht das zu tun scheint, was Sie erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element treffen sollte, aber nichts passiert, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Hinweise, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, Grundlagen der CSS-Stilgestaltung (behandelt in den vorherigen Lektionen dieses Moduls!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um festzustellen, ob Sie ungültiges Markup auf Ihrer Seite haben, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht formatierten CSS-Code zu überprüfen.</li>
          <li>Verwenden Sie die Entwicklertools des Browsers, um die auf HTML-Elemente auf einer Seite angewendeten CSS zu inspizieren.</li>
          <li>Ändern Sie das angewendete CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dazu gehört das Aktivieren und Deaktivieren von Deklarationen, Ändern von Werten und Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zugriff auf die DevTools des Browsers

Der Artikel [Was sind Entwickler-Tools von Browsern](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie auf die Tools in verschiedenen Browsern und Plattformen zugreifen können. Auch wenn Sie sich hauptsächlich für die Entwicklung in einem bestimmten Browser entscheiden und daher mit den in diesem Browser enthaltenen Tools am vertrautesten werden, lohnt es sich zu wissen, wie man in anderen Browsern darauf zugreift. Dies hilft Ihnen, wenn Sie Unterschiede in der Darstellung zwischen mehreren Browsern feststellen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS betrachten. Um dies zu tun, verwende ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Laden Sie diese in einem neuen Tab, wenn Sie der Anleitung folgen möchten, und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Der DOM vs. Quelltextanzeige

Etwas, das Neulinge in DevTools durcheinanderbringen kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie [den Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite, oder wenn Sie sich die HTML-Datei ansehen, die Sie auf den Server hochgeladen haben, und dem, was Sie im [HTML-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Es sieht zwar grob ähnlich aus wie das, was Sie über die Quelltextanzeige sehen können, es gibt jedoch einige Unterschiede.

Im gerenderten DOM hat der Browser möglicherweise das HTML normalisiert, beispielsweise indem er einige schlecht geschriebene HTML für Sie korrigiert hat. Wenn Sie ein Element falsch geschlossen haben, zum Beispiel indem Sie ein `<h2>` öffnen, aber mit `</h3>` schließen, wird der Browser herausfinden, was Sie tun wollten, und das HTML im DOM wird das offene `<h2>` korrekt mit `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die durch JavaScript durchgeführt wurden.

Im Vergleich dazu ist die Quelltextanzeige der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau an, was der Browser zu einem bestimmten Zeitpunkt rendert, sodass Sie einen Einblick erhalten, was wirklich vor sich geht.

## Inspizieren des angewandten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit Rechts-/Strg-Klick darauf klicken und _Inspect_ auswählen oder indem Sie es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` zu wählen; dies ist das erste Element auf der Seite mit einem umrandeten Kasten.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML anschauen, sollten Sie die auf dieses Element angewandten CSS-Eigenschaften und -Werte sehen können. Sie sehen die direkt auf die Klasse `box1` angewandten Regeln und auch das CSS, das von seinen Vorfahren, in diesem Fall von `<body>`, vererbt wird. Dies ist nützlich, wenn Sie ein CSS sehen, das angewandt wird, das Sie nicht erwartet haben. Vielleicht wird es von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Außerdem ist die Fähigkeit nützlich, Kurzschreibweise-Eigenschaften zu expandieren. In unserem Beispiel wird die Kurzschreibweise `margin` verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die verschiedenen detaillierten Eigenschaften und deren Werte anzuzeigen.**

**Sie können Werte in der Regelnansicht ein- und ausschalten, wenn dieses Panel aktiv ist — wenn Sie mit der Maus darüber fahren, erscheinen Kontrollkästchen. Deaktivieren Sie das Kontrollkästchen einer Regel, zum Beispiel `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen, um zu entscheiden, ob etwas mit einer angewendeten Regel besser aussieht oder nicht, und auch um es zu debuggen — zum Beispiel, wenn ein Layout falsch ist und Sie herausfinden wollen, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas anpassen? DevTools kann Ihnen viel Zeit sparen, die Sie sonst durch das Bearbeiten eines Stylesheets und Neuladen der Seite verbringen würden.

**Wenn `box1` ausgewählt ist, klicken Sie auf die Farbfläche (der kleine farbige Kreis), die die auf die Grenze angewendete Farbe anzeigt. Ein Farbwähler öffnet sich und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil der Begrenzung ändern.**

![DevTools Styles Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie erkannt, dass Sie nicht möchten, dass Ihr Kasten die Schriftgröße des `<body>`-Elements erbt und wollen eine eigene spezifische Größe festlegen? Sie können dies in den DevTools ausprobieren, bevor Sie es in Ihre CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration einzufügen. Danach können Sie anfangen, die neue Eigenschaft zu tippen, und DevTools zeigt Ihnen eine Autovervollständigungs-Liste von passenden Eigenschaften an. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools-Panel, Hinzufügen einer neuen Eigenschaft zu den Regeln, mit der Autovervollständigung für font-.](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regelnansicht, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Mehr dazu erfahren Sie unter [CSS prüfen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Boxmodell verstehen

In den vorherigen Lektionen haben wir das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen und die Tatsache, dass wir ein alternatives Boxmodell haben, das ändert, wie die Größe von Elementen basierend auf der Ihnen gegebenen Größe plus dem Padding und den Rändern berechnet wird. DevTools kann Ihnen wirklich helfen, zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Boxmodells auf dem ausgewählten Element zusammen mit einer Beschreibung der Eigenschaften und Werte, die beeinflussen, wie das Element angeordnet wird. Dies beinhaltet eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht ausdrücklich am Element verwendet haben, die aber Anfangswerte haben.

In diesem Panel ist eine der detaillierten Eigenschaften die Eigenschaft `box-sizing`, die kontrolliert, welches Boxmodell das Element verwendet.

**Vergleichen Sie die zwei Boxen mit den Klassen `box1` und `box2`. Beide haben die gleiche Breite angewendet (400px), jedoch ist `box1` optisch breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe nimmt, die Sie dem Element geben, und dann das Padding und die Breite des Rahmens hinzufügt.**

Das Element mit der Klasse `box2` verwendet `border-box`, sodass hier das Padding und der Rahmen von der Größe, die Sie dem Element angegeben haben, abgezogen wird. Das bedeutet, dass der auf der Seite eingenommene Platz des Kastens die exakte Größe hat, die Sie angegeben haben — in unserem Fall `width: 400px`.

![Der Layout-Bereich der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr in [Das Boxmodell untersuchen und inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösen von Spezifitätsproblemen

Manchmal, während der Entwicklung, insbesondere wenn Sie das CSS auf einer bestehenden Seite bearbeiten müssen, werden Sie feststellen, dass es schwierig ist, CSS anzuwenden. Egal was Sie tun, das Element scheint das CSS einfach nicht zu übernehmen. Was hier normalerweise passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen die DevTools wirklich helfen.

In unserer Beispieldatei sind zwei Wörter in einem `<em>`-Element umschlossen. Eins wird in Orange und das andere in Hotpink dargestellt. Im CSS haben wir folgende Regel angewandt:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Davor im Stylesheet befindet sich jedoch eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion zu [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, in der wir über Spezifität gesprochen haben, sind Klassenselektoren spezifischer als Elementselektoren und deshalb ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Information irgendwo in einem riesigen Stylesheet vergraben ist.

**Untersuchen Sie das `<em>` mit der Klasse `.special`, und DevTools zeigt Ihnen, dass Orange die Farbe ist, die angewendet wird, und dass die `color`-Eigenschaft, die auf das `<em>` angewendet wird, durchgestrichen ist. Sie können jetzt sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Auswahl eines em und in DevTools nachschauen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Debuggen von Problemen in CSS

DevTools kann eine große Hilfe beim Lösen von CSS-Problemen sein, also wie sollten Sie vorgehen, wenn Sie sich in einer Situation befinden, in der CSS nicht so funktioniert, wie Sie es erwarten? Die folgenden Schritte sollten helfen.

### Einen Schritt zurück vom Problem machen

Jedes Code-Problem kann frustrierend sein, besonders CSS-Probleme, weil Sie oft keine Fehlermeldung erhalten, die Sie online suchen können, um bei der Lösung zu helfen. Wenn Sie frustriert werden, machen Sie eine Weile einen Schritt weg vom Problem — gehen Sie spazieren, holen Sie sich ein Getränk, sprechen Sie mit einem Kollegen, oder arbeiten Sie eine Weile an einer anderen Sache. Manchmal erscheint die Lösung wie durch Zauberei, wenn Sie aufhören, über das Problem nachzudenken, und auch wenn nicht, ist es viel einfacher daran zu arbeiten, wenn Sie erfrischt sind.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, jedoch sind Browser auch sehr nachsichtig und werden ihr Bestes tun, um Ihre Webseiten anzuzeigen, selbst wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie gemeint haben, und er könnte eine andere Entscheidung treffen, als Sie es im Sinn hatten. Darüber hinaus könnten zwei verschiedene Browser mit dem Problem auf zwei verschiedene Arten umgehen. Ein guter erster Schritt ist daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um alle Fehler zu finden und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert von dem Browser unterstützt, den Sie testen?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht von dem Browser unterstützt wird, den Sie testen, wird nichts kaputtgehen, aber dieses CSS wird nicht angewendet. DevTools wird in der Regel nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervorheben. Im Screenshot unten unterstützt der Browser den `subgrid`-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild von Browser DevTools mit der grid-template-columns: subgrid durchgestrichen, da der subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch die Tabellen zur Browser-Kompatibilität am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen die Browser-Unterstützung für diese Eigenschaft, oft aufgeschlüsselt, wenn es Unterstützung für einige Verwendungen der Eigenschaft gibt und für andere nicht. [Siehe die Kompatibilitätstabelle für die `grid-template-columns` Eigenschaft](/de/docs/Web/CSS/Reference/Properties/grid-template-columns#browser_compatibility).

### Wird Ihre CSS durch etwas anderes überschrieben?

Hier kommt das Wissen über Spezifität, das Sie erworben haben, sehr zur Geltung. Wenn etwas Spezifischeres überschreibt, was Sie zu tun versuchen, können Sie sich in einem sehr frustrierenden Spiel befinden, das zu bestimmen versucht, was es ist. Wie weiter oben beschrieben, zeigen Ihnen DevTools jedoch, welche CSS angewendet wird, und Sie können herausfinden, wie der neue Selektor spezifisch genug gemacht werden kann, um ihn zu überschreiben.

### Machen Sie einen reduzierten Testfall des Problems

Wenn das Problem durch die oben genannten Schritte nicht behoben wird, müssen Sie weiter untersuchen. Das Beste, was Sie zu diesem Zeitpunkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. In der Lage zu sein, "ein Problem zu reduzieren" ist eine sehr nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden, und es wird Ihnen auch ermöglichen, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachstmögliche Weise demonstriert, mit entferntem, nicht damit zusammenhängendem Inhalt und Styling. Dies bedeutet oft, dass Sie den problematischen Code aus Ihrem Layout entfernen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert ist — zum Beispiel über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich zum Hosten reduzierter Testfälle, da diese dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten anfangen, indem Sie Quelltextanzeige auf der Seite durchführen und das HTML in CodePen kopieren, dann holen Sie alle relevanten CSS und JavaScript und schließen dies auch ein. Danach können Sie überprüfen, ob das Problem immer noch offensichtlich ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht behebt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScripts _tatsächlich_ das Problem behebt, dann entfernen Sie so viel JavaScript wie möglich, lassen Sie dabei was das Problem verursacht.
3. Entfernen Sie alle HTML, die nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie, so wenig Code wie möglich zu haben, der das Problem noch zeigt.
4. Entfernen Sie alle CSS, die das Problem nicht beeinflussen.

Bei diesem Vorgang können Sie feststellen, was das Problem verursacht, oder zumindest in der Lage sein, es ein- und auszuschalten, indem Sie etwas Bestimmtes entfernen. Es lohnt sich, einige Kommentare in Ihren Code hinzuzufügen, während Sie Dinge entdecken. Wenn Sie um Hilfe bitten müssen, zeigen sie der Person, die Ihnen hilft, was Sie bereits versucht haben. Dies könnte Ihnen genügend Informationen geben, um nach wahrscheinlichen Problemen und Lösungen zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, gibt Ihnen ein reduzierter Testfall etwas, womit Sie um Hilfe bitten können, indem Sie es auf einem Forum posten oder einem Kollegen zeigen. Sie haben viel bessere Chancen, Hilfe zu erhalten, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau zu identifizieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrener Entwickler ist möglicherweise in der Lage, das Problem schnell zu erkennen und Ihnen den richtigen Weg zu weisen, und selbst wenn nicht, ermöglicht Ihnen der reduzierte Testfall, einen schnellen Überblick zu haben und zumindest etwas Hilfe anbieten zu können.

Für den Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, dann kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim entsprechenden Browseranbieter einzureichen (z.B. auf Mozillas [Bugzilla-Seite](https://bugzilla.mozilla.org/)).

Je mehr Erfahrung Sie mit CSS sammeln, desto schneller werden Sie Probleme selbst herausfinden. Jedoch, selbst die Erfahrensten von uns finden sich manchmal in Situationen wieder, in denen wir uns fragen, was auf der Erde vorgeht. Ein methodischer Ansatz, ein reduzierter Testfall und das Erklären des Problems an jemand anderen führen in der Regel dazu, dass eine Lösung gefunden wird.

## Zusammenfassung

So, da haben wir es: eine Einführung in das Debuggen von CSS, die Ihnen einige nützliche Fähigkeiten gibt, auf die Sie sich verlassen können, wenn Sie beginnen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Das war es für dieses Modul. Sobald Sie bereit sind, können Sie mit unserem [CSS Textstyling](/de/docs/Learn_web_development/Core/Text_styling) Modul fortfahren.

## Siehe auch

- [Firefox > CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source-Dokumentation
- [Chrome > CSS anzeigen und ändern](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
