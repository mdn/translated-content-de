---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihre CSS nicht so funktioniert, wie Sie es erwarten. Vielleicht glauben Sie, dass ein bestimmter Selektor ein Element ansprechen sollte, aber nichts passiert, oder ein Kasten hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie Ihnen die DevTools aller modernen Browser dabei helfen können, herauszufinden, was vor sich geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >, CSS-Styling-Grundlagen (abgedeckt in den vorherigen Lektionen dieses Moduls!)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu sehen, ob auf Ihrer Seite ungültiges Markup vorhanden ist, das CSS-Probleme verursacht.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht formatierten CSS-Code zu überprüfen.</li>
          <li>Verwenden Sie die Entwicklerwerkzeuge des Browsers, um das CSS zu inspizieren, das auf HTML-Elemente auf einer Seite angewendet wird.</li>
          <li>Ändern Sie das angewendete CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dies umfasst das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Anleitung zum Zugriff auf die DevTools des Browsers

Der Artikel [Was sind Entwicklerwerkzeuge für Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie auf die Tools in verschiedenen Browsern und Plattformen zugreifen können. Auch wenn Sie sich hauptsächlich in einem bestimmten Browser entwickeln und daher mit den in diesem Browser enthaltenen Tools am besten vertraut sind, lohnt es sich zu wissen, wie Sie in anderen Browsern darauf zugreifen können. Dies hilft Ihnen, falls Sie unterschiedliche Renderings in mehreren Browsern sehen.

In dieser Lektion werden wir einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS untersuchen. Dazu werde ich eine [Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie mitmachen möchten, und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM versus Quelltext ansehen

Etwas, das Neulinge bei DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie [den Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) einer Webseite ansehen oder sich die HTML-Datei ansehen, die Sie auf den Server geladen haben, und dem, was Sie im [HTML-Pane](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Während es dem, was Sie über den Quelltext sehen, grob ähnlich aussieht, gibt es einige Unterschiede.

Im gerenderten DOM hat der Browser das HTML möglicherweise normalisiert, z.B. indem er einige schlecht geschriebene HTML-Tags für Sie korrigiert hat. Wenn Sie ein Element falsch geschlossen haben, indem Sie zum Beispiel ein `<h2>` öffnen, aber mit `</h3>` schließen, wird der Browser herausfinden, was Sie tun wollten, und das HTML im DOM wird das offene `<h2>` korrekt mit einem `</h2>` schließen. Das DOM zeigt auch alle von JavaScript vorgenommenen Änderungen an.

Im Vergleich dazu ist Quelltext der HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau, was der Browser zu einem bestimmten Zeitpunkt rendert, und gibt Ihnen damit einen Einblick, was wirklich vor sich geht.

## Inspizieren des angewendeten CSS

Wählen Sie ein Element auf Ihrer Seite aus, entweder indem Sie mit der rechten/Strg-Taste darauf klicken und _Inspect_ wählen oder indem Sie es aus dem HTML-Baum auf der linken Seite der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite, um das ein umrandeter Kasten gezeichnet ist.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich den [Regel-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts von Ihrem HTML ansehen, sollten Sie die CSS-Eigenschaften und -Werte sehen können, die auf dieses Element angewendet werden. Sie sehen die Regeln, die direkt auf die Klasse `box1` angewendet werden, sowie das CSS, das das Kästchen von seinen Vorfahren erbt, in diesem Fall von `<body>`. Dies ist nützlich, wenn Sie CSS sehen, das angewendet wird, das Sie nicht erwartet haben. Vielleicht wird es von einem übergeordneten Element geerbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Auch nützlich ist die Möglichkeit, Kurzschreibeigenschaften zu erweitern. In unserem Beispiel wird `margin` als Kurzform verwendet.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die verschiedenen Langform-Eigenschaften und ihre Werte anzuzeigen.**

**Sie können Werte in der Regel-Ansicht ein- und ausschalten, wenn dieses Panel aktiv ist – wenn Sie die Maus darüber halten, erscheinen Checkboxes. Deaktivieren Sie das Checkbox einer Regel, z.B. `border-radius`, und das CSS wird nicht mehr angewendet.**

Sie können dies verwenden, um einen A/B-Vergleich durchzuführen, zu entscheiden, ob etwas mit einer Regel angewendet besser aussieht oder nicht, und auch um es zu debuggen – z.B. wenn ein Layout falsch läuft und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

## Bearbeiten von Werten

Zusätzlich zum Ein- und Ausschalten von Eigenschaften können Sie deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas ändern? DevTools kann Ihnen viel Zeit sparen, wenn Sie ein Stylesheet bearbeiten und die Seite neu laden möchten.

**Mit `box1` ausgewählt, klicken Sie auf das Farbprobensymbol (der kleine farbige Kreis), das die auf die Grenze angewendete Farbe zeigt. Es öffnet sich ein Farbwähler, mit dem Sie einige verschiedene Farben ausprobieren können; diese werden in Echtzeit auf der Seite aktualisiert. Auf ähnliche Weise könnten Sie die Breite oder den Stil der Grenze ändern.**

![DevTools Styles Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Hinzufügen einer neuen Eigenschaft

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie bemerkt, dass Sie nicht möchten, dass Ihr Box die Schriftgröße des `<body>`-Elements erbt, und möchten ihm eine eigene spezifische Größe geben? Sie können dies in den DevTools ausprobieren, bevor Sie es Ihrer CSS-Datei hinzufügen.

**Sie können auf die schließende geschweifte Klammer in der Regel klicken, um zu beginnen, eine neue Deklaration einzugeben, woraufhin Sie anfangen können, die neue Eigenschaft zu tippen, und die DevTools zeigen Ihnen eine Autovervollständigungsliste der passenden Eigenschaften an. Nachdem Sie `font-size` ausgewählt haben, geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Taste klicken, um eine zusätzliche Regel mit dem gleichen Selektor hinzuzufügen und Ihre neuen Regeln dort hinzuzufügen.**

![Das DevTools Panel, das eine neue Eigenschaft zu den Regeln hinzufügt, mit der Autovervollständigung für font- geöffnet](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regel-Ansicht, z.B. werden Deklarationen mit ungültigen Werten durchgestrichen. Mehr dazu erfahren Sie unter [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Box-Modell verstehen

In den vorherigen Lektionen haben wir [das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) besprochen und die Tatsache, dass wir ein alternatives Box-Modell haben, das die Größe von Elementen basierend auf der Größe, die Sie ihnen geben, plus dem Padding und den Rändern ändert. DevTools kann Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layoutansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Box-Modells des ausgewählten Elements zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element ausgelegt ist. Dazu gehört eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf dem Element verwendet haben, die aber anfängliche Werte gesetzt haben.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die kontrolliert, welches Box-Modell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben die gleiche Breite angewendet (400px), jedoch ist `box1` optisch breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, nimmt und dann das Padding und die Randbreite hinzufügt.**

Das Element mit einer Klasse von `box2` verwendet `border-box`, sodass hier das Padding und der Rand von der Größe abgezogen werden, die Sie dem Element gegeben haben. Dies bedeutet, dass der auf der Seite eingenommene Platz des Kastens die exakte Größe hat, die Sie angegeben haben – in unserem Fall `width: 400px`.

![Der Layout-Abschnitt der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Weitere Informationen finden Sie unter [Das Box-Modell untersuchen und inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Lösung von Spezifitätsproblemen

Manchmal während der Entwicklung, insbesondere wenn Sie das CSS auf einer bestehenden Seite bearbeiten müssen, werden Sie Schwierigkeiten haben, dass sich einiges CSS anwenden lässt. Egal, was Sie tun, das Element scheint einfach das CSS nicht zu übernehmen. Was hier in der Regel passiert, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier werden Ihnen DevTools wirklich helfen können.

In unserer Beispieldatei wurden zwei Wörter in ein `<em>`-Element eingeschlossen. Eines wird orange und das andere hotpink angezeigt. Im CSS haben wir angewendet:

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

Wie Sie sich aus der Lektion über [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, in der wir Spezifität besprochen haben, sind Klassenselektoren spezifischer als Elementselektoren, und daher ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, insbesondere wenn die Informationen irgendwo in einem riesigen Stylesheet vergraben sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special` und DevTools zeigt Ihnen, dass orange die Farbe ist, die angewendet wird, und auch, dass die `color`-Eigenschaft auf das `<em>` durchgestrichen ist. Sie können jetzt erkennen, dass der Klassenselektor den Elementselektor überschreibt.**

![Ein em auswählen und in den DevTools nachsehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Fehlerbehebung bei CSS-Problemen

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein. Wenn Sie sich also in einer Situation befinden, in der CSS nicht so verhält, wie Sie es erwarten, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Nehmen Sie einen Schritt zurück von dem Problem

Jedes Programmierproblem kann frustrierend sein, insbesondere CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, die Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert werden, machen Sie eine Pause vom Problem – machen Sie einen Spaziergang, holen Sie sich ein Getränk, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an einer anderen Sache. Manchmal erscheint die Lösung wie von Zauberhand, wenn Sie aufhören, über das Problem nachzudenken, und selbst wenn nicht, wird es viel einfacher sein, daran zu arbeiten, wenn Sie sich frisch fühlen.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben ist, aber Browser sind auch sehr nachsichtig und werden ihr Bestes tun, um Ihre Webseiten auch dann anzuzeigen, wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser erraten, was Sie gemeint haben, und er könnte eine andere Entscheidung treffen als Sie. Außerdem könnten zwei verschiedene Browser mit dem Problem auf zwei unterschiedliche Weisen umgehen. Ein erster guter Schritt besteht daher darin, Ihr HTML und CSS durch einen Validator laufen zu lassen, um Fehler zu erkennen und zu beheben.

- [CSS-Validator](https://jigsaw.w3.org/css-validator/)
- [HTML-Validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert vom Browser, den Sie testen, unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die Eigenschaft oder der Wert, den Sie verwenden, nicht vom Browser, den Sie testen, unterstützt wird, wird nichts kaputt gehen, aber dieses CSS wird nicht angewendet. DevTools hebt in der Regel nicht unterstützte Eigenschaften und Werte irgendwie hervor. Im folgenden Screenshot unterstützt der Browser den subgrid-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools, bei dem grid-template-columns: subgrid durchgestrichen ist, da der Subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch die Browser-Kompatibilitätstabellen am Ende jeder Eigenschaftsseite auf MDN betrachten. Diese zeigen Ihnen die Browser-Unterstützung für diese Eigenschaft, oft aufgeschlüsselt, ob es Unterstützung für einige Verwendungen der Eigenschaft gibt und nicht für andere. [Sehen Sie sich die Kompatibilitätstabelle für die Eigenschaft `grid-template-columns` an](/de/docs/Web/CSS/Reference/Properties/grid-template-columns#browser_compatibility).

### Wird Ihr CSS von etwas anderem überschrieben?

Hier kommt das Wissen, das Sie über Spezifität gelernt haben, nützlich. Wenn Sie etwas spezielleres haben, das das, was Sie versuchen zu tun, überschreibt, können Sie in ein sehr frustrierendes Spiel geraten, herauszufinden, was es ist. Wie oben beschrieben, zeigen Ihnen die DevTools jedoch, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem durch die obigen Schritte nicht gelöst wird, müssen Sie weitere Nachforschungen anstellen. Das Beste, was Sie zu diesem Zeitpunkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Die Fähigkeit, ein Problem zu "reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden und wird Ihnen auch ermöglichen, Fehler zu melden und effektiver um Hilfe zu bitten.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Weise zeigt, mit nicht verwandtem umgebendem Inhalt und Styling entfernt. Dies bedeutet oft, dass der problematische Code aus Ihrem Layout herausgenommen wird, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — zum Beispiel über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem zeigt. Eine Code-Sharing-Website wie [CodePen](https://codepen.io/) ist nützlich für das Hosting reduzierter Testfälle, da diese dann online zugänglich sind und Sie sie problemlos mit Kollegen teilen können. Sie könnten beginnen, indem Sie den Quellcode der Seite anzeigen und das HTML in CodePen kopieren, dann holen Sie sich das relevante CSS und JavaScript und fügen Sie es auch hinzu. Überprüfen Sie danach, ob das Problem immer noch sichtbar ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht beseitigt, lassen Sie das JavaScript weg. Wenn das Entfernen des JavaScripts _das_ Problem beseitigt, entfernen Sie so viel JavaScript wie möglich, lassen Sie das, was das Problem verursacht, drin.
3. Entfernen Sie alle HTML-Elemente, die nicht zum Problem beitragen. Entfernen Sie Komponenten oder sogar Hauptelemente des Layouts. Versuchen Sie erneut, den Code auf das kleinste Maß zu reduzieren, das das Problem immer noch zeigt.
4. Entfernen Sie alle CSS, die das Problem nicht betrifft.

Im Verlauf dieses Prozesses können Sie feststellen, was das Problem verursacht oder zumindest in der Lage sein, es durch Entfernen von etwas Spezifischem ein- und auszuschalten. Es lohnt sich, Ihrem Code einige Kommentare hinzuzufügen, während Sie Dinge entdecken. Wenn Sie um Hilfe bitten müssen, zeigen sie der Person, die Ihnen hilft, was Sie bereits versucht haben. Dies kann Ihnen genug Informationen geben, um nach wahrscheinlichen Problemen und Workarounds zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, gibt Ihnen ein reduzierter Testfall etwas, das Sie zur Hilfe fragen können, indem Sie ein Forum posten oder es einem Kollegen zeigen. Sie werden viel wahrscheinlicher Hilfe erhalten, wenn Sie zeigen können, dass Sie die Arbeit gemacht haben, das Problem zu reduzieren und genau zu identifizieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrener Entwickler könnte das Problem schnell erkennen und Ihnen den richtigen Weg weisen, und selbst wenn nicht, ermöglicht es ihnen Ihr reduzierter Testfall, einen schnellen Blick darauf zu werfen und Ihnen hoffentlich zumindest ein bisschen Hilfe anzubieten.

Wenn Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch verwendet werden, um einen Fehlerbericht beim entsprechenden Browseranbieter einzureichen (z.B. auf Mozillas [bugzilla site](https://bugzilla.mozilla.org/)).

Wenn Sie mehr Erfahrung mit CSS sammeln, werden Sie feststellen, dass Sie schneller darin werden, Probleme zu erkennen. Aber selbst die Erfahrensten von uns finden sich manchmal in Situationen, in denen sie sich fragen, was zur Hölle los ist. Eine methodische Vorgehensweise, die Erstellung eines reduzierten Testfalls und die Erklärung des Problems an jemand anderen führen normalerweise dazu, eine Lösung zu finden.

## Zusammenfassung

Damit wäre eine Einführung in das Debuggen von CSS abgeschlossen, die Ihnen einige nützliche Fähigkeiten an die Hand geben sollte, wenn Sie beginnen, CSS und andere Arten von Code in Ihrer weiteren Karriere zu debuggen.

Das wäre es für alle Lektionen in diesem Modul. Zum Abschluss werden wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen testen.

## Siehe auch

- [Firefox > Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > Anzeigen und Ändern von CSS](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
