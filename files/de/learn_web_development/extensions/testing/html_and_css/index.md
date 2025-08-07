---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Mit dem aufgestellten Szenario werden wir nun speziell auf die häufigen plattformübergreifenden Probleme eingehen, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Tools verwendet werden können, um Probleme zu vermeiden, oder um auftretende Probleme zu beheben. Dies umfasst das Überprüfen des Codes, die Behandlung von CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zur Problemverfolgung, die Verwendung von Polyfills zur Unterstützung in Browsern, die Bewältigung von Problemen im responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; ein Verständnis
        der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien der plattformübergreifenden Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige plattformübergreifende HTML- und CSS-Probleme
        zu diagnostizieren und geeignete Tools und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen ziemlich einfach sind und Entwickler oft nicht sicherstellen, dass der Code gut erstellt, effizient ist und den Zweck der Funktionen auf der Seite semantisch beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Design der Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (DOM-Elemente zu generieren ist aufwendig). In anderen Fällen werden neue Funktionen nicht konsistent von Browsern unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig - eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät ein schreckliches Erlebnis bieten, weil der Inhalt zu klein ist, um lesbar zu sein, oder möglicherweise die Seite durch aufwendige Animationen langsam ist.

Lassen Sie uns fortfahren und schauen, wie wir plattformübergreifende Fehler durch HTML/CSS reduzieren können.

## Zuerst: allgemeine Probleme beheben

Wie wir im [ersten Artikel dieser Reihe](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt haben, ist eine gute Strategie, zuerst in ein paar modernen Browsern auf Desktop/Mobile zu testen, um sicherzustellen, dass Ihr Code grundsätzlich funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Leitfäden zum Debugging von HTML/CSS bereitgestellt — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut strukturiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem bei CSS und HTML tritt auf, wenn sich unterschiedliche CSS-Regeln gegenseitig widersprechen. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem Klassenname kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie stellen fest, dass von einer Art Drittanbieter-API generierter HTML-Code (z.B. Werbebanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Tools im Voraus recherchieren und Ihren Code entsprechend planen. Es lohnt sich auch, CSS zu "namespace", also z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, damit Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML bedeutet Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie ein Doctype verwenden und die Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), mit dem Sie auf Ihren Code verweisen und eine Liste von Fehlern erhalten können:

![Die HTML-Validator-Homepage](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, die Eigenschaftswerte korrekt buchstabiert sind und für die Eigenschaften, auf die sie angewendet werden, gültig sind, dass keine geschweiften Klammern fehlen usw. Der W3C hat auch einen [CSS Validator](https://jigsaw.w3.org/css-validator/) zu diesem Zweck zur Verfügung.

### Linters

Eine weitere gute Option ist die Verwendung von sogenannten Linter-Anwendungen, die nicht nur Fehler aufzeigen, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte geben können. Linters können im Allgemeinen so konfiguriert werden, dass sie in ihrer Fehler- und Warnberichterstattung strenger oder entspannter sind.

Es gibt viele Online-Linter-Anwendungen, wie z.B. [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und er wird Fehler mit Kreuzen markieren, die überfahren werden können, um eine Fehlermeldung zu erhalten, die Sie darüber informiert, was das Problem ist. Dirty Markup ermöglicht auch Korrekturen an Ihrem Markup mit der Taste _Clean_ vorzunehmen.

![Dirty Markup-Anwendung zeigt die Nachricht "Unerwartetes Zeichen in einem unzitierten Attribut" über folgendem fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich möchten, ist ein Linter, der sich nahtlos in Ihren normalen Workflow einfügt und dabei möglichst wenig Aufwand erfordert.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklertools

Die Entwicklertools, die in die meisten Browser integriert sind, bieten ebenfalls nützliche Werkzeuge zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden nicht so leicht in Entwicklertools angezeigt, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor CSS-Deklarationen an, die nicht angewendet werden, durchgestrichen mit einem Warn-Dreieck. Durch Überfahren des Warn-Dreiecks wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklertools streichen ungültige CSS-Deklarationen durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklertools von Browsern bieten ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Jetzt kommen wir dazu, einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme zu untersuchen. Die Hauptbereiche, die wir betrachten werden, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstil) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen, neuere HTML, CSS und APIs zu verwenden. MDN zeigt die Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; siehe beispielsweise die [Browser-Unterstützungstabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden möchten, die jedoch nicht universell unterstützt werden, ist es eine gute Idee, zu erforschen, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach den natürlichen Arbeitsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (im Wesentlichen Inline-Elemente ohne semantischen Wert, ähnlich {{htmlelement("span")}} Elementen). Sie können dennoch auf sie mit ihren Namen verweisen und sie mit CSS gestalten — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie einfach wie jedes andere Element, indem Sie z.B. die `display` Eigenschaft auf etwas anderes als `inline` setzen, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verknüpften Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalt zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es ermöglicht, das Video herunterzuladen, falls sogar der HTML-Videoplayer nicht funktioniert, sodass der Benutzer trotzdem auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendet der Browser bei Nichtunterstützung der neuen Funktion den Standard `type="text"`. Input-Typen wurden hinzugefügt, die sehr nützlich sind, insbesondere auf mobilen Plattformen, wo es wichtig ist, eine schmerzfreie Möglichkeit zur Dateneingabe zu bieten, um das Benutzererlebnis zu verbessern. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, z.B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datums- und Zeiteingaben:

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

Die Ausgabe dieses Codes sieht wie folgt aus:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typen-spezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, sodass der Benutzer dennoch die richtigen Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist arguably besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach vollständig, ohne sie anzuwenden oder einen Fehler zu werfen. Dies kann frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode rutscht, aber zumindest bedeutet es, dass die ganze Seite nicht wegen eines Fehlers abstürzt und bei geschickter Verwendung können Sie dies zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestylt ist, mit einigen Stilen, die durch verschiedene CSS-Funktionen bereitgestellt werden:

![Eine rote Pillentaste mit abgerundeten Ecken, eingedrücktem Schatten und Tropfenschattierung](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub sehen als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die ihn stylen, aber die zwei, die uns am meisten interessieren, sind die folgenden:

```css
button {
  /* … */

  background-color: red;
  background-color: rgb(255 0 0 / 90%);
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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}}, die ihre Deckkraft beim Hovern ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente eingedrückte {{cssxref("box-shadow")}} Schattierungen, um dem Button etwas Textur und Tiefe zu geben. Während mittlerweile vollständig unterstützt, waren RGB-Farben und Box-Schatten nicht von Anfang an überall vorhanden; sie begannen bei IE9. Browser, die RGB-Farben nicht unterstützten, ignorierten einfach die Deklaration, was bedeutete, dass in alten Browsern der Hintergrund nicht angezeigt wurde, sodass der Text unlesbar war — gar nicht gut!

![Schwer zu erkennender Pillenknopf mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um das zu lösen, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt — sie wird in wirklich alten Browsern weit zurück unterstützt und dient als Fallback, wenn die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den Wert der ersten `background-color` Deklaration anwendet; wenn er zur zweiten `background-color` Deklaration kommt, wird er den anfänglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und geht weiter.

> [!NOTE]
> Das gleiche gilt für andere CSS-Funktionen wie [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektoren-Unterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie nur einen Selektor falsch schreiben, kann es sein, dass er kein Element auswählt. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, sowie der gesamte Stilblock. Aus diesem Grund sollten Sie ein `:-moz-` prefixiertes Pseudoelement oder -klasse nur in einer [fürsorglichen Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) enthalten, wie etwa `:where(::-moz-thumb)`. Fügen Sie ein `:-moz-` prefixiertes Pseudoelement oder -klasse nicht in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) fürsorglichen Selektorliste ein, da alle anderen Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden es hilfreich, das Element, das Sie zu stylen versuchen, mit den Entwicklertools Ihres Browsers zu inspizieren und den DOM-Baum-Breadcrumb-Pfad zu betrachten, den DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor in Bezug darauf Sinn ergibt.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools folgende Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen, diesen Selektor zu verwenden, würden Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date` Formulareingabeelement ist kein direktes Kind des `<form>`; Sie würden besser bedient sein, einen allgemeinen Nachfahren-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen tritt mit CSS-Präfixen auf — dies sind Mechanismen, die ursprünglich verwendet wurden, um Browser-Anbietern zu ermöglichen, ihre eigene Version eines CSS- (oder JavaScript-)Funktion zu implementieren, während die Technologie in einem experimentellen Zustand ist, sodass sie damit spielen und es richtig machen können, ohne mit Implementierungen anderer Browser oder den endgültigen ungeprüften Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code finden könnten und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten nie in Produktionswebsites verwendet werden — sie können sich ohne Vorwarnung ändern oder entfernt werden, können in alten Browserversionen, die sie erfordern, Leistungsprobleme verursachen und waren Ursache für plattformübergreifende Probleme. Besonders problematisch ist es, zum Beispiel, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was impliziert, dass die Seite nicht in anderen Browsern funktioniert. Dies geschah tatsächlich so oft, dass andere Browseranbieter `-webkit-` prefixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser noch einige prefixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden jetzt experimentelle Features hinter Flags gesetzt, sodass Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es erforderlich ist; dass die Eigenschaft eine der wenigen verbleibenden prefixierten Funktionen ist. Sie können herausfinden, welche Browser Präfixe erfordern, auf den MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/). Wenn Sie sich unsicher sind, können Sie es auch herausfinden, indem Sie direkt in Browsern testen. Fügen Sie die standardmäßige ungeprüfte Version nach der prefixierten Stil-Deklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Seite, die ein prominentes Heading oder ein anderes Block-Element hat.
2. Klicken Sie mit der rechten oder Command-Taste auf das betreffende Element und wählen Sie Inspizieren/Element inspizieren (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, mit der Sie dieses Element auswählen können. Zum Beispiel hat die Seite, die ich beim Schreiben benutze, aktuell ein Logo mit der ID `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element zu setzen; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, z.B. versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Repräsentationsnamen der Eigenschaft nach dem zweiten Punkt zu schreiben (beachten Sie, dass im JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}}, nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbinden müssen, testen Sie die Unterstützung der Funktionen mit [`@supports`](/de/docs/Web/CSS/@supports), was Ihnen ermöglicht, native Feature-Detection-Tests zu implementieren und die prefixierte oder neue Funktion innerhalb des `@supports` Blocks zu verschachteln.

### Probleme beim responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen — zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout beispielsweise sieht auf einem mobilen Gerät schrecklich aus, daher müssen Sie ein geeignetes mobiles Layout mit [media queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit dem [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) angewendet wird. Sie finden eine detaillierte Darstellung solcher Praktiken in unserem [Leitfaden für responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ebenfalls ein großes Problem — mobile Geräte benötigen beispielsweise weniger wahrscheinlich große schwere Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem Problem machen können. Darüber hinaus können verschiedene Geräte eine Reihe unterschiedlicher Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme umgehen können, von [media queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute des {{HTMLElement('img')}} Elements.

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit HTML und CSS erleben werden, was das Wissen darüber, wie man Antworten online findet, unersetzlich macht.

Zu den besten Quellen für Unterstützungsinformationen gehören das Mozilla Developer Network (Sie sind jetzt hier), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Menschen über die Suchmaschine nach der Technologie, zu der sie Informationen suchen, plus dem Begriff „mdn“, z.B. „mdn HTML video“. MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Kompatibilitätsinformationen für clientseitige Webtechnologien, z.B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Weitere unterstützende Referenzmaterialien, beispielsweise unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Anleitungen, die spezifische Probleme lösen, zum Beispiel, [Erstellen eines plattformübergreifenden Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützung und nützliche externe Link-Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forumseite, auf der Sie Fragen stellen und Lösungen von anderen Entwicklern teilen können, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir nach „disable autofocus on HTML dialog“ auf SO gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, über Ihre bevorzugte Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft hilfreich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler haben wahrscheinlich die gleichen Probleme wie Sie.

## Zusammenfassung

Nun sollten Sie mit den Hauptarten der plattformübergreifenden HTML- und CSS-Probleme vertraut sein, auf die Sie in der Webentwicklung stoßen werden, und wie Sie sie beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
