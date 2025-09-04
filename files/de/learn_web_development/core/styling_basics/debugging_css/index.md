---
title: Debugging CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: d94f783daceb9635b94a4041bae68af31adfaa6c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Vielleicht denken Sie, dass ein bestimmter Selektor ein Element treffen sollte, aber nichts passiert, oder eine Box hat eine andere Größe als erwartet. Dieser Artikel gibt Ihnen Hinweise, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.

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
          <li>Nutzen Sie den <a href="https://validator.w3.org/">HTML-Validator</a>, um zu sehen, ob ungültiges Markup auf Ihrer Seite zu CSS-Problemen führt.</li>
          <li>Verwenden Sie den <a href="https://jigsaw.w3.org/css-validator/">CSS-Validator</a>, um schlecht formatierte CSS-Codes zu überprüfen.</li>
          <li>Nutzen Sie die Entwickler-Tools des Browsers, um das für HTML-Elemente auf einer Seite angewandte CSS zu inspizieren.</li>
          <li>Ändern Sie das angewandte CSS, um herauszufinden, welche Änderungen erforderlich sind, um das gewünschte Ergebnis zu erzielen. Dazu gehört das Aktivieren und Deaktivieren von Deklarationen, das Ändern von Werten und das Hinzufügen neuer Deklarationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Anleitung zum Zugriff auf die DevTools des Browsers

Der Artikel [Was sind Entwicklerwerkzeuge des Browsers?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) erklärt, wie Sie in verschiedenen Browsern und Plattformen auf die Tools zugreifen können. Auch wenn Sie sich entscheiden, hauptsächlich in einem bestimmten Browser zu entwickeln und daher mit den in diesem Browser enthaltenen Tools am besten vertraut werden, ist es sinnvoll, zu wissen, wie man auch in anderen Browsern darauf zugreift. Dies wird helfen, wenn Sie unterschiedliche Darstellungen zwischen mehreren Browsern erleben.

In dieser Lektion werden wir uns einige nützliche Funktionen der Firefox DevTools für die Arbeit mit CSS ansehen. Dazu werde ich [eine Beispieldatei](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html) verwenden. Laden Sie diese in einem neuen Tab, wenn Sie mitverfolgen möchten und öffnen Sie Ihre DevTools, wie im oben verlinkten Artikel beschrieben.

## Das DOM vs. Quelltext anzeigen

Ein Punkt, der Neulinge in den DevTools verwirren kann, ist der Unterschied zwischen dem, was Sie sehen, wenn Sie [den Quellcode anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) oder sich die HTML-Datei, die Sie auf dem Server abgelegt haben, ansehen, und dem, was Sie im [HTML-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) der DevTools sehen können. Obwohl es ungefähr so aussieht wie das, was Sie über Quelltext anzeigen sehen können, gibt es einige Unterschiede.

Im gerenderten DOM kann der Browser das HTML normalisiert haben, z.B. indem er einige schlecht geschriebene HTML-Tags für Sie korrigiert. Wenn Sie ein Element falsch geschlossen haben, z.B. ein `<h2>` geöffnet, aber mit einem `</h3>` geschlossen haben, wird der Browser herausfinden, was Sie meinten, und das HTML im DOM korrekt das offene `<h2>` mit einem `</h2>` schließen. Das DOM zeigt auch alle Änderungen, die durch JavaScript vorgenommen wurden.

Quelltext anzeigen zeigt im Vergleich dazu den HTML-Quellcode, wie er auf dem Server gespeichert ist. Der [HTML-Baum](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) in Ihren DevTools zeigt genau das, was der Browser zu jedem Zeitpunkt rendert, und gibt Ihnen somit einen Einblick, was wirklich vor sich geht.

## Das angewandte CSS inspizieren

Wählen Sie ein Element auf Ihrer Seite aus, entweder durch Rechts-/Strg-Klick darauf und Auswahl von _Inspect_, oder indem Sie es aus dem HTML-Baum links in der DevTools-Anzeige auswählen. Versuchen Sie, das Element mit der Klasse `box1` auszuwählen; dies ist das erste Element auf der Seite, um das ein umrandetes Kästchen gezeichnet ist.

![Die Beispielseite für dieses Tutorial mit geöffneten DevTools.](inspecting1.png)

Wenn Sie sich die [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) rechts neben Ihrem HTML ansehen, sollten Sie die auf dieses Element angewandten CSS-Eigenschaften und -Werte sehen können. Sie werden die direkt auf die Klasse `box1` angewandten Regeln sowie das CSS sehen, das von den Vorfahren auf die Box vererbt wird, in diesem Fall vom `<body>`. Dies ist nützlich, wenn Sie CSS sehen, das angewandt wird, das Sie nicht erwartet haben. Vielleicht wird es von einem Elternelement vererbt und Sie müssen eine Regel hinzufügen, um es im Kontext dieses Elements zu überschreiben.

Ebenso nützlich ist die Fähigkeit, Kurzschrift-Eigenschaften zu erweitern. In unserem Beispiel wird die `margin`-Kurzschrift benutzt.

**Klicken Sie auf den kleinen Pfeil, um die Ansicht zu erweitern und die verschiedenen Langform-Eigenschaften und ihre Werte anzuzeigen.**

**In der Regeln-Ansicht können Sie Werte ein- und ausschalten, wenn dieses Panel aktiv ist — wenn Sie mit der Maus darüber fahren, erscheinen Kontrollkästchen. Deaktivieren Sie z. B. das Kontrollkästchen einer Regel, etwa `border-radius`, und das CSS wird nicht mehr angewandt.**

Sie können dies für einen A/B-Vergleich nutzen, um zu entscheiden, ob etwas mit oder ohne eine angewandte Regel besser aussieht, und auch um es zu debuggen — z. B. wenn ein Layout schiefgeht und Sie herausfinden möchten, welche Eigenschaft das Problem verursacht.

## Werte bearbeiten

Neben dem Ein- und Ausschalten von Eigenschaften können Sie auch deren Werte bearbeiten. Vielleicht möchten Sie sehen, ob eine andere Farbe besser aussieht oder die Größe von etwas anpassen? DevTools können Ihnen eine Menge Zeit sparen, indem Sie ein Stylesheet bearbeiten und die Seite neu laden.

**Wählen Sie mit `box1` aus und klicken Sie auf das Muster (den kleinen farbigen Kreis), das die auf die Grenze angewandte Farbe anzeigt. Ein Farbwähler wird geöffnet, und Sie können einige verschiedene Farben ausprobieren; diese werden in Echtzeit auf der Seite aktualisiert. In ähnlicher Weise könnten Sie die Breite oder den Stil der Grenze ändern.**

![DevTools-Styles-Panel mit einem geöffneten Farbwähler.](inspecting2-color-picker.png)

## Eine neue Eigenschaft hinzufügen

Sie können Eigenschaften mit den DevTools hinzufügen. Vielleicht haben Sie festgestellt, dass Sie nicht möchten, dass Ihre Box die Schriftgröße des `<body>`-Elements erbt, und Sie möchten eine spezifische Größe festlegen? Sie können dies in den DevTools ausprobieren, bevor Sie es in Ihre CSS-Datei hinzufügen.

**Sie können die schließende geschweifte Klammer in der Regel klicken, um eine neue Deklaration einzugeben, woraufhin Sie beginnen können, die neue Eigenschaft zu tippen, und DevTools wird Ihnen eine Autovervollständigungsliste der übereinstimmenden Eigenschaften anzeigen. Nach der Auswahl von `font-size` geben Sie den Wert ein, den Sie ausprobieren möchten. Sie können auch auf die + Schaltfläche klicken, um eine zusätzliche Regel mit demselben Selektor hinzuzufügen, und dort Ihre neuen Regeln hinzufügen.**

![Das DevTools-Panel, das eine neue Eigenschaft zu den Regeln hinzufügt, mit der Autovervollständigung für font-.](inspecting3-font-size.png)

> [!NOTE]
> Es gibt auch andere nützliche Funktionen in der Regeln-Ansicht, zum Beispiel werden Deklarationen mit ungültigen Werten durchgestrichen. Weitere Informationen finden Sie unter [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Das Boxmodell verstehen

In früheren Lektionen haben wir [das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und die Tatsache besprochen, dass wir eine alternative Boxmodell haben, das ändert, wie die Größe von Elementen basierend auf der Größe, die Sie ihnen geben, plus die Polsterung und Grenzen berechnet wird. DevTools können Ihnen wirklich helfen zu verstehen, wie die Größe eines Elements berechnet wird.

Die [Layout-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) zeigt Ihnen ein Diagramm des Boxmodells des ausgewählten Elements, zusammen mit einer Beschreibung der Eigenschaften und Werte, die ändern, wie das Element layoutet. Dazu gehört eine Beschreibung von Eigenschaften, die Sie möglicherweise nicht explizit auf dem Element verwendet haben, die jedoch mit Initialwerten festgelegt sind.

In diesem Panel ist eine der detaillierten Eigenschaften die `box-sizing`-Eigenschaft, die steuert, welches Boxmodell das Element verwendet.

**Vergleichen Sie die beiden Boxen mit den Klassen `box1` und `box2`. Beide haben dieselbe angegebene Breite (400px), jedoch ist `box1` optisch breiter. Sie können im Layout-Panel sehen, dass es `content-box` verwendet. Dies ist der Wert, der die Größe, die Sie dem Element geben, nimmt und dann die Polsterung und die Breitenbreite hinzufügt.**

Das Element mit einer Klasse von `box2` verwendet `border-box`, sodass hier die Polsterung und der Rahmen von der Größe abgezogen werden, die Sie dem Element gegeben haben. Dies bedeutet, dass der Platz, den die Box auf der Seite einnimmt, genau die angegebene Größe ist — in unserem Fall `width: 400px`.

![Der Layout-Abschnitt der DevTools](inspecting4-box-model.png)

> [!NOTE]
> Erfahren Sie mehr im [Untersuchen und Inspizieren des Boxmodells](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Spezifitätsprobleme lösen

Manchmal während der Entwicklung, besonders wenn Sie das CSS auf einer vorhandenen Website bearbeiten müssen, werden Sie feststellen, dass es schwer ist, einige CSS anzuwenden. Egal was Sie tun, das Element scheint das CSS einfach nicht aufzunehmen. Was hier in der Regel geschieht, ist, dass ein spezifischerer Selektor Ihre Änderungen überschreibt, und hier helfen Ihnen DevTools wirklich weiter.

In unserer Beispieldatei gibt es zwei Wörter, die in ein `<em>`-Element eingewickelt sind. Eines wird als orange und das andere in hotpink angezeigt. Im CSS haben wir angewandt:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Über diesem im Stylesheet befindet sich jedoch eine Regel mit einem `.special`-Selektor:

```css
.special {
  color: orange;
}
```

Wie Sie sich aus der Lektion über [Konflikte bewältigen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) erinnern, sind Klassenselektoren spezifischer als Elementselektoren, und daher ist dies der Wert, der angewendet wird. DevTools kann Ihnen helfen, solche Probleme zu finden, besonders wenn die Informationen irgendwo in einem riesigen Stylesheet vergraben sind.

**Untersuchen Sie das `<em>` mit der Klasse `.special`, und DevTools zeigt Ihnen, dass Orange die Farbe ist, die angewendet wird. Ebenso ist die `color`-Eigenschaft, die auf das `<em>` angewandt wird, durchgestrichen. Sie können nun sehen, dass der Klassenselektor den Elementselektor überschreibt.**

![Auswahl eines em und Betrachtung der DevTools, um zu sehen, was die Farbe überschreibt.](inspecting5-specificity.png)

## Probleme in CSS debuggen

DevTools können eine große Hilfe bei der Lösung von CSS-Problemen sein, also, wenn Sie sich in einer Situation befinden, in der CSS nicht das tut, was Sie erwarten, wie sollten Sie vorgehen, um es zu lösen? Die folgenden Schritte sollten helfen.

### Einen Schritt zurück vom Problem machen

Jedes Kodierungsproblem kann frustrierend sein, besonders CSS-Probleme, da Sie oft keine Fehlermeldung erhalten, die Sie online suchen können, um eine Lösung zu finden. Wenn Sie frustriert sind, machen Sie einen Schritt weg vom Problem - gehen Sie spazieren, holen Sie sich ein Getränk, plaudern Sie mit einem Kollegen oder arbeiten Sie eine Weile an etwas anderem. Manchmal erscheint die Lösung auf magische Weise, wenn Sie aufhören, an das Problem zu denken, und selbst wenn nicht, wird die Arbeit daran, wenn Sie sich erfrischt fühlen, viel einfacher.

### Haben Sie gültiges HTML und CSS?

Browser erwarten, dass Ihr CSS und HTML korrekt geschrieben sind, jedoch sind Browser auch sehr nachsichtig und werden ihr Bestes tun, um Ihre Webseiten anzuzeigen, selbst wenn Sie Fehler im Markup oder Stylesheet haben. Wenn Sie Fehler in Ihrem Code haben, muss der Browser raten, was Sie meinten, und es könnte eine andere Entscheidung treffen, als Sie im Sinn hatten. Darüber hinaus könnten zwei verschiedene Browser mit dem Problem auf zwei verschiedene Arten umgehen. Ein erster guter Schritt ist es daher, Ihr HTML und CSS durch einen Validator laufen zu lassen, um mögliche Fehler zu identifizieren und zu beheben.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML validator](https://validator.w3.org/)

### Werden die Eigenschaft und der Wert von dem von Ihnen getesteten Browser unterstützt?

Browser ignorieren CSS, das sie nicht verstehen. Wenn die von Ihnen verwendete Eigenschaft oder der verwendete Wert nicht von dem Browser unterstützt wird, in dem Sie testen, wird nichts kaputtgehen, aber das CSS wird nicht angewandt. DevTools wird generell nicht unterstützte Eigenschaften und Werte auf irgendeine Weise hervorheben. Im folgenden Screenshot unterstützt der Browser den Subgrid-Wert von {{cssxref("grid-template-columns")}} nicht.

![Bild der Browser-DevTools mit dem grid-template-columns: subgrid durchgestrichen, da der Subgrid-Wert nicht unterstützt wird.](no-support.png)

Sie können auch die Browser-Kompatibilitätstabelle am Ende jeder Eigenschaftsseite auf MDN ansehen. Diese zeigen Ihnen den Browser-Support für diese Eigenschaft, oft aufgeschlüsselt, ob es Unterstützung für einige Verwendungen der Eigenschaft und nicht für andere gibt. [Siehe die Kompatibilitätstabelle für die `grid-template-columns`-Eigenschaft](/de/docs/Web/CSS/grid-template-columns#browser_compatibility).

### Wird Ihr CSS von etwas anderem überschrieben?

Hierbei ist das Wissen, das Sie über Spezifität erlangt haben, sehr nützlich. Wenn Sie etwas Spezifischeres haben, das überschreibt, was Sie versuchen zu tun, kann dies zu einem sehr frustrierenden Spiel werden, bei dem Sie herausfinden müssen, was das ist. Wie oben beschrieben, zeigen Ihnen die DevTools jedoch, welches CSS angewendet wird, und Sie können herausfinden, wie Sie den neuen Selektor spezifisch genug machen, um ihn zu überschreiben.

### Erstellen Sie einen reduzierten Testfall des Problems

Wenn das Problem nicht durch die obigen Schritte gelöst wird, müssen Sie einige weitere Untersuchungen durchführen. Das Beste, was Sie an diesem Punkt tun können, ist, etwas zu erstellen, das als reduzierter Testfall bekannt ist. Die Fähigkeit, ein Problem zu "reduzieren", ist eine wirklich nützliche Fähigkeit. Es wird Ihnen helfen, Probleme in Ihrem eigenen Code und dem Ihrer Kollegen zu finden und ermöglicht Ihnen auch, Bugs zu berichten und Hilfe effektiver zu erfragen.

Ein reduzierter Testfall ist ein Codebeispiel, das das Problem auf die einfachste mögliche Art demonstriert, mit nicht verwandtem umgebendem Inhalt und Styling entfernt. Dies bedeutet oft, den problematischen Code aus Ihrem Layout zu nehmen, um ein kleines Beispiel zu erstellen, das nur diesen Code oder dieses Feature zeigt.

Um einen reduzierten Testfall zu erstellen:

1. Wenn Ihr Markup dynamisch generiert wird — beispielsweise über ein CMS — erstellen Sie eine statische Version der Ausgabe, die das Problem aufzeigt. Eine Code-Sharing-Seite wie [CodePen](https://codepen.io/) ist nützlich für das Hosting reduzierter Testfälle, da sie dann online zugänglich sind und Sie sie leicht mit Kollegen teilen können. Sie könnten beginnen, indem Sie Quelltext anzeigen auf der Seite verwenden und das HTML in CodePen kopieren, dann holen Sie sich relevantes CSS und JavaScript und fügen es auch hinzu. Danach können Sie überprüfen, ob das Problem immer noch offensichtlich ist.
2. Wenn das Entfernen des JavaScripts das Problem nicht beseitigt, schließen Sie das JavaScript nicht ein. Wenn das Entfernen des JavaScript _das_ Problem beseitigt, entfernen Sie so viel JavaScript wie möglich, und lassen Sie alles übrig, das das Problem verursacht.
3. Entfernen Sie jedes HTML, das nicht zum Problem beiträgt. Entfernen Sie Komponenten oder sogar die Hauptelemente des Layouts. Versuchen Sie erneut, die geringste Menge an Code zu behalten, die das Problem weiterhin zeigt.
4. Entfernen Sie jedes CSS, das das Problem nicht beeinflusst.

Im Prozess des Tuns, können Sie entdecken, was das Problem verursacht, oder zumindest es ein- und ausschalten, indem Sie etwas Spezifisches entfernen. Es lohnt sich, einige Kommentare in Ihren Code hinzuzufügen, wenn Sie Dinge entdecken. Wenn Sie Hilfe benötigen, werden sie der Person, die Ihnen hilft, zeigen, was Sie bereits versucht haben. Dies könnte Ihnen genügend Informationen geben, um nach wahrscheinlichen Problemen und Workarounds zu suchen.

Wenn Sie immer noch Schwierigkeiten haben, das Problem zu beheben, dann gibt Ihnen ein reduzierter Testfall etwas, um um Hilfe zu bitten, indem Sie ihn in einem Forum posten oder einem Kollegen zeigen. Sie sind viel wahrscheinlicher, Hilfe zu bekommen, wenn Sie zeigen können, dass Sie die Arbeit der Problemerkennung gemacht haben und genau identifizieren, wo es auftritt, bevor Sie um Hilfe bitten. Ein erfahrenerer Entwickler könnte das Problem schnell erkennen und Sie in die richtige Richtung weisen, und selbst wenn nicht, ermöglicht Ihr reduzierter Testfall ihnen, einen kurzen Blick darauf zu werfen und hoffentlich zumindest einige Hilfe anzubieten.

Im Fall, dass Ihr Problem tatsächlich ein Fehler in einem Browser ist, kann ein reduzierter Testfall auch für das Einreichen eines Fehlerberichts beim entsprechenden Browseranbieter verwendet werden (z.B. auf Mozillas [bugzilla Seite](https://bugzilla.mozilla.org/)).

Mit zunehmender Erfahrung mit CSS werden Sie feststellen, dass Sie schneller Probleme herausfinden. Dennoch, selbst die erfahrensten von uns finden sich manchmal fragend, was in aller Welt vor sich geht. Durch eine systematische Herangehensweise, das Erstellen eines reduzierten Testfalls und das Erklären des Problems für jemand anderen wird in der Regel eine Lösung gefunden.

## Zusammenfassung

Damit hätten wir also eine Einführung in das Debugging von CSS, was Ihnen einige nützliche Fähigkeiten gibt, auf die Sie zurückgreifen können, wenn Sie beginnen, CSS und andere Arten von Code später in Ihrer Karriere zu debuggen.

Das war es für alle Lektionen in diesem Modul. Zum Abschluss werden wir Ihr Wissen über die behandelten Themen mit einer Reihe von Herausforderungen testen.

## Siehe auch

- [Firefox > CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > CSS anzeigen und ändern](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
