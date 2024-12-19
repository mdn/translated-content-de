---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem das Szenario gesetzt ist, werden wir nun speziell auf die häufigen plattformübergreifenden Probleme eingehen, die Sie in HTML- und CSS-Code antreffen, und welche Tools verwendet werden können, um Probleme zu verhindern oder aufgetretene Probleme zu beheben. Dazu gehört das Linting von Code, das Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zur Fehlerverfolgung, die Nutzung von Polyfills zur Verbesserung der Browserunterstützung, das Lösen von Problemen beim responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundlagen des plattformübergreifenden Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und
        geeignete Tools und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen in der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler oft nicht darauf achten, sicherzustellen, dass der Code gut gestaltet, effizient und semantisch die Funktion der Merkmale auf der Seite beschreibt. In den schlimmsten Fällen wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu erstellen, was Ihre Seiten unzugänglich und weniger performant macht (erzeugen von DOM-Elementen ist kostspielig). In anderen Fällen werden neue Merkmale nicht konsistent über alle Browser unterstützt, was dazu führen kann, dass einige Merkmale und Stile für einige Nutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig — eine Website, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schlechte Benutzererfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder weil die Website möglicherweise langsam ist aufgrund kostspieliger Animationen.

Lassen Sie uns fortfahren und schauen, wie wir plattformübergreifende Fehler, die aus HTML/CSS resultieren, reduzieren können.

## Zuerst: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, mit dem Testen in ein paar modernen Browsern auf Desktop/Mobilgeräten zu beginnen, um sicherzustellen, dass Ihr Code generell funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige grundlegende Anleitungen zur Fehlersuche in HTML/CSS gegeben — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich liegt es daran, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn verschiedene CSS-Regeln anfangen, miteinander zu kollidieren. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel zur Erstellung von Werbebannern), einen Klassennamen oder eine ID beinhaltet, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Verwendung der Tools, die Sie verwenden, zuerst recherchieren und Ihren Code um sie herum entwerfen. Es lohnt sich auch, CSS zu "namensräumen", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eigene Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML beinhaltet die Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren richtigen Zweck verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Service, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der Ihnen erlaubt, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückgibt:

![Die Startseite des HTML-Validators](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen prüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte richtig geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, es dürfen keine geschweiften Klammern fehlen, und so weiter. Auch hierfür bietet das W3C einen [CSS Validator](https://jigsaw.w3.org/css-validator/) an.

### Linters

Eine andere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen vor schlechten Praktiken in Ihrem CSS hervorheben kann, und andere Punkte zusätzlich. Linter können im Allgemeinen auf strengere oder lockerere Fehlermeldungen/Warnungen angepasst werden.

Es gibt viele Online-Linter-Anwendungen wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese Anwendungen erlauben es Ihnen, Ihren Code in ein Fenster zu kopieren, und sie kennzeichnen Fehler mit Kreuzen, die dann schwebend eine Fehlermeldung anzeigen, die Ihnen mitteilt, was das Problem ist. Dirty Markup erlaubt es Ihnen auch, Ihre Markup mit der _Clean_-Schaltfläche zu korrigieren.

![Die Dirty Markup-Anwendung zeigt die Nachricht "Unerwartetes Zeichen in nicht-zitiertem Attribut" über dem folgenden falschen HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals zum Überprüfen der Gültigkeit über eine Webseite kopieren und einfügen zu müssen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren normalen Arbeitsablauf einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwickler-Tools

Die Entwicklerwerkzeuge, die in die meisten Browser integriert sind, bieten ebenfalls nützliche Tools zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen in den Entwicklerwerkzeugen nicht so leicht auf, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt der CSS-Inspektor in Firefox CSS-Deklarationen, die nicht angewendet werden, durchgestrichen an, mit einem Warnsymbol. Wenn man mit der Maus über das Warnsymbol fährt, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein schwebendes Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Nun wollen wir einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme betrachten. Die Hauptbereiche, die wir betrachten, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstile) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion; siehe zum Beispiel den [Browser-Support-Tabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden, die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach durch Ausnutzung der natürlichen Funktionsweise von HTML/CSS gelöst werden.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich zu {{htmlelement("span")}} Elementen). Sie können weiterhin auf sie per Namen verweisen und sie mit CSS stylen — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Features) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen die öffnenden und schließenden Tags einfügen, und nicht unterstützende Browser ignorieren das äußere Element und führen die eingebetteten Inhalte aus.

Zum Beispiel:

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <!-- Offer download -->
  <p>
    Your browser does not support WebM video; here is a link to
    <a href="video/tears-of-steel-battle-clip-medium.mp4"
      >view the video directly</a
    >
  </p>
</video>
```

Dieses Beispiel enthält einen einfachen Link, der es Ihnen erlaubt, das Video herunterzuladen, falls der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest das Video trotzdem ansehen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input) Typen für die Eingabe spezifischer Informationen in Formulare eingeführt wurden, wie Zeiten, Daten, Farben, Zahlen usw., wenn ein Browser das neue Merkmal nicht unterstützte, verwendete der Browser standardmäßig `type="text"`. Es wurden Eingabetypen hinzugefügt, die insbesondere auf mobilen Plattformen sehr nützlich sind, wo es wichtig für die Benutzererfahrung ist, einen schmerzfreien Weg zur Eingabe von Daten bereitzustellen. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, wie zum Beispiel ein Kalender-Widget zur Eingabe von Daten. Sollten in einem Browser ein Eingabetyp nicht unterstützt werden, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Date- und Zeitangaben:

```html
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time" />
  </div>
</form>
```

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie sich das Beispiel ansehen, werden Sie die UI-Funktionen in Aktion sehen, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Keypads angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer dennoch die richtigen Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS kann besser mit Fallbacks umgehen als HTML. Wenn ein Browser auf eine Erklärung oder Regel stößt, die er nicht versteht, überspringt er sie einfach vollständig, ohne sie anzuwenden oder einen Fehler anzuzeigen. Dies kann für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler bis in den Produktionscode durchrutscht, aber es bedeutet zumindest, dass die gesamte Seite nicht wegen eines Fehlers abstürzt, und wenn es clever eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Betrachten wir ein Beispiel — ein einfacher Kasten, der mit CSS gestylt ist und mehrere CSS-Eigenschaften hat:

![Eine rote Knopfleiste mit abgerundeten Ecken, eingestelltem Schatten und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) ansehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die das Styling abdecken, aber die zwei, die uns am meisten interessieren, sind folgende:

```css
button {
  /* … */

  background-color: #ff0000;
  background-color: rgb(255 0 0 / 100%);
  box-shadow:
    inset 1px 1px 3px rgb(255 255 255 / 40%),
    inset -1px -1px 3px rgb(0 0 0 / 40%);
}

button:hover {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 1px 1px 3px rgb(0 0 0 / 40%),
    inset -1px -1px 3px rgb(255 255 255 / 40%);
}
```

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}}, die bei Hover die Opazität ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente eingesetzte {{cssxref("box-shadow")}} Schatten, um dem Button etwas Textur und Tiefe zu verleihen. Während sie mittlerweile vollständig unterstützt werden, haben RGB-Farben und Box-Schatten nicht von Anfang an existiert; sie begannen ab IE9. Browser, die RGB-Farben nicht unterstützten, würden die Deklaration ignorieren, was bedeutet, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt würde, sodass der Text nicht lesbar wäre, was gar nicht gut ist!

![Schwer zu sehende Knopfleiste mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt — dies wird in sehr alten Browsern weit zurück unterstützt und fungiert als Fallback, wenn die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, überschreibt er den ersten Wert mit diesem, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Dasselbe gilt für andere CSS-Funktionen wie [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektor-Unterstützung

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommata getrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, kann es sein, dass er kein Element auswählt. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste der Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie ein `:-moz-`-präfixiertes Pseudoklasse oder Pseudo-Element nur in einer [nachsichtigen Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einschließen. Fügen Sie kein `:-moz-`-präfixiertes Pseudoklasse oder Pseudo-Element in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) nachsichtigen Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann die DOM-Baum-Breadcrumbs zu betrachten, die DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn macht.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie versuchen würden, diesen Selektor zu verwenden, würden Sie sehen, dass er nicht das gewünschte Eingabeelement auswählt:

```css
form > #date
```

(Das `date` Formularfeld ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahren-Selektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problem entsteht mit CSS-Präfixen — dies sind Mechanismen, die ursprünglich verwendet wurden, um Browseranbietern die Implementierung ihrer eigenen Version einer CSS- (oder JavaScript-) Funktion zu ermöglichen, während die Technologie sich in einem experimentellen Zustand befindet, sodass sie damit spielen und sie richtig machen können, ohne mit Implementierungen anderer Browser zu kollidieren oder mit der endgültigen nicht präfixierten Implementierung.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code finden können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, sowie `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten nie in Produktionswebsites verwendet werden — sie können sich ohne Vorwarnung ändern oder entfernt werden, können in alten Browserversionen, die sie benötigen, Leistungsprobleme verursachen und haben plattformübergreifende Probleme verursacht. Dies ist besonders problematisch, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Website in anderen Browsern nicht funktioniert. Dies ist tatsächlich so häufig passiert, dass andere Browseranbieter `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags gesetzt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können nachsehen, welche Browser Präfixe auf den MDN-Referenzseiten erfordern, und auf Websites wie [caniuse.com](https://caniuse.com/). Wenn Sie sich unsicher sind, können Sie es auch herausfinden, indem Sie einige Tests direkt in den Browsern durchführen. Fügen Sie die standardmäßige nicht-präfixierte Version nach der präfixierten Stil-Deklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Website, die eine prominente Überschrift oder ein anderes Blockelement hat.
2. Klicken Sie mit der rechten Taste/Befehlstaste auf das betreffende Element und wählen Sie "Inspect/Element inspizieren" (oder die entsprechende Option in Ihrem Browser) — dies sollte die Entwicklertools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite auf MDN aktuell ein Logo mit einer ID `mdn-docs-logo`.
4. Speichern Sie einen Verweis auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element festzulegen; dies können Sie mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, versuchen Sie zum Beispiel, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie anfangen, den Eigenschaftsnamen nach dem zweiten Punkt zu tippen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}}, nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbinden müssen, testen Sie die Unterstützung der Funktionen mit [`@supports`](/de/docs/Web/CSS/@supports), das Ihnen ermöglicht, native Feature Detection Tests zu implementieren, und die präfixierte oder neue Funktion in den `@supports` Block zu verschachteln.

### Probleme beim responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an unterschiedliche Geräte-Formfaktoren anpassen — zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout wird zum Beispiel auf einem mobilen Gerät schrecklich aussehen, daher müssen Sie ein geeignetes mobiles Layout mit [media queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit [viewport](/de/docs/Web/HTML/Viewport_meta_tag) angewandt wird. Eine ausführliche Darstellung solcher Praktiken finden Sie in [unserem Tutorial zum Responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auch die Auflösung ist ein großes Problem — mobilgeräte benötigen beispielsweise weniger große und schwere Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen, möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem Problem machen. Darüber hinaus können unterschiedliche Geräte eine Vielzahl von Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen ermöglichen, solche Probleme zu umgehen, von [media queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [responsiven Bildtechniken](/de/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und den `srcset` und `sizes` Attributen des {{HTMLElement('img')}} Elements.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, sodass Kenntnisse darüber, wie man online Antworten findet, von unschätzbarem Wert sind.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Leute eine Suchmaschine nach der Technologie aus, über die sie Informationen suchen möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browserunterstützungsinformationen für clientseitige Webtechnologien, z.B. die [\<video> Referenzseite](/de/docs/Web/HTML/Element/video).
- Weitere unterstützende Referenzmaterialien, zum Beispiel unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forenseite, auf der Sie Fragen stellen können und anderen Entwicklern Ihre Lösungen teilen können, vorherige Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir nach "disabling autofocus on HTML dialog" auf SO gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von plattformübergreifenden HTML- und CSS-Problemen vertraut sein, die Sie in der Webentwicklung treffen werden, und wissen, wie Sie sie angehen können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
