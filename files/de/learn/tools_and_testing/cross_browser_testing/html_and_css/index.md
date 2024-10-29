---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nun, da wir den Rahmen festgelegt haben, werden wir uns speziell die häufigen Cross-Browser-Probleme ansehen, auf die Sie bei HTML- und CSS-Code stoßen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder auftretende Probleme zu beheben. Dies umfasst das Linting von Code, den Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen in Browsern zur Fehlerbehebung, den Einsatz von Polyfills zur Unterstützung in Browsern, die Bewältigung von Problemen beim responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; Wissen über die grundlegenden
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-Cross-Browser-Probleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ausreichend ernst nehmen, was bedeutet, dass sie sicherstellen sollten, dass der Code gut ausgearbeitet, effizient und semantisch die Zwecke der Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Generieren von DOM-Elementen ist zeitaufwendig). In anderen Fällen werden neue Funktionen in verschiedenen Browsern nicht einheitlich unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme beim responsiven Design sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, könnte auf einem mobilen Gerät eine schlechte Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite aufgrund aufwendiger Animationen langsam ist.

Lassen Sie uns also voranschreiten und schauen, wie wir Cross-Browser-Fehler reduzieren können, die durch HTML/CSS entstehen.

## Zuerst das Wesentliche: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, zunächst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf Cross-Browser-Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) und [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) haben wir einige grundlegende Anleitungen zum Debugging von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie fortfahren.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut geformt ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Beispielsweise könnte es sein, dass Sie ein CSS-Framework verwenden und feststellen, dass einer der von ihm verwendeten Klassennamen mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Drittanbieter-API generiert wird (z.B. Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Werkzeuge zuerst recherchieren und Ihren Code darauf aufbauen. Es lohnt sich auch, CSS zu "namespacen", z.B. indem Sie dafür sorgen, dass es als eigenständige Klasse erkennbar ist, und dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse beginnen, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML beinhaltet die Validierung, sicherzustellen, dass alle Ihre Tags korrekt geschlossen und verschachtelt sind, Sie einen Doctype verwenden und Sie Tags für ihre korrekten Zwecke verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen, und eine Liste von Fehlern zurückgibt:

![Die HTML Validierungsseite](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben und gültig für die Eigenschaften sind, auf die sie angewendet werden, Sie keine geschweiften Klammern vergessen haben, usw. Auch hier hat das W3C einen [CSS Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck zur Verfügung.

### Linters

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte anzeigt. Linter können im Allgemeinen angepasst werden, um strenger oder lockerer in ihrer Fehler-/Warnungsmeldung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und er wird alle Fehler mit Kreuzen markieren, die dann überfahren werden können, um eine Fehlermeldung zu erhalten, die Sie über das Problem informiert. Dirty Markup ermöglicht es Ihnen auch, Ihr Markup durch die Schaltfläche _Clean_ zu korrigieren.

![Dirty Markup-Anwendung zeigt die Nachricht "Unerwartetes Zeichen im unquotierten Attribut" über dem folgenden fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren normalen Arbeitsablauf einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VSCode Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge des Browsers

Die in den meisten Browsern integrierten Entwicklerwerkzeuge bieten ebenfalls nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler erscheinen in den Dev-Tools nicht so leicht, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor nicht angewandte CSS-Deklarationen durchgestrichen an, mit einem Warn-Dreieck. Wenn man das Warn-Dreieck überfährt, erhält man eine beschreibende Fehlermeldung:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklerwerkzeuge von Browsern haben ähnliche Funktionen.

## Häufige Cross-Browser-Probleme

Nun schauen wir uns einige der häufigsten Cross-Browser-HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind der mangelnde Support für moderne Funktionen und Layoutprobleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern implementiert, aber noch nicht in allen vorhanden sind. Im Allgemeinen funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textgestaltung) in allen Browsern, die Sie unterstützen möchten; mehr Probleme werden festgestellt, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; zum Beispiel sehen Sie sich die [Browser-Unterstützungs-Tabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility) an.

Haben Sie eine Liste von Technologien identifiziert, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden, und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach das natürliche Funktionsweise von HTML/CSS nutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich den {{htmlelement("span")}}-Elementen). Sie können sie immer noch mit ihren Namen ansprechen und mit CSS gestalten, zum Beispiel – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Gestalten Sie sie einfach, wie Sie jedes andere Element gestalten würden, und setzen Sie die `display`-Eigenschaft bei Bedarf auf etwas anderes als `inline`.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object), und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen darüber hinaus) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen die Öffnungs- und Schlusstag hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, wenn sogar der HTML-Video-Player nicht funktioniert, sodass der Benutzer zumindest immer noch auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input) Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendet ein Browser, der die neue Funktion nicht unterstützt, den Standard `type="text"`. Eingabetypen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig ist, eine schmerzfreie Möglichkeit zur Dateneingabe als Teil der Benutzererfahrung bereitzustellen. Plattformen bieten je nach Eingabetyp unterschiedliche Benutzeroberflächen-Widgets, wie ein Kalender-Widget zum Eingeben von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

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

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub ansehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie sich das Beispiel ansehen, sehen Sie die Benutzeroberflächen-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden eingabetyp-spezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben, was bedeutet, dass der Benutzer weiterhin die richtigen Informationen eingeben kann.

### CSS Fallback-Verhalten

CSS ist in Bezug auf Fallbacks vielleicht sogar besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Das könnte frustrierend für Sie und Ihre Benutzer sein, wenn solch ein Fehler in den Produktionscode rutscht, aber es bedeutet zumindest, dass die ganze Seite nicht zusammenbricht wegen eines Fehlers, und wenn man es klug anwendet, kann man es zu seinem Vorteil nutzen.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestylt ist, die einige Stylings durch verschiedene CSS-Funktionen erhält:

![Ein roter Pillen-Button mit abgerundeten Ecken, eingelassener Schatten und Tropfschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) live auf GitHub ansehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die ihn gestalten, aber die zwei, die uns am meisten interessieren, sind die folgenden:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die ihre Opazität beim Überfahren ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente eingelassene {{cssxref("box-shadow")}} Schattierungen, um dem Button ein wenig Textur und Tiefe zu geben. Während RGB-Farben und Box-Schatten jetzt vollständig unterstützt werden, war dies nicht immer so; angefangen bei IE9. Browser, die RGB-Farben nicht unterstützten, würden die Deklaration ignorieren, was in alten Browsern bedeutete, dass der Hintergrund überhaupt nicht angezeigt wurde, sodass der Text unleserlich war, was überhaupt nicht gut war!

![Schwer zu sehender Pillen-Button mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt – diese wird weit zurück in sehr alten Browsern unterstützt und fungiert als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, überschreibt er den Anfangswert mit diesem Wert, wenn er RGB-Farben unterstützt. Andernfalls ignoriert er die gesamte Deklaration und fährt fort.

> [!NOTE]
> Dasselbe gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) -Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich funktionieren keine CSS-Funktionen, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verwenden, um das Element zu auswählen, das Sie gestalten möchten!

In einer durch Kommas getrennten Selektoren-Liste, wenn Sie einfach einen Selektor falsch schreiben, könnte er kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-` vorangestellte Pseudo-Klasse oder Pseudo-Element in einer [nachsichtigen Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) einschließen, wie `:where(::-moz-thumb)`. Fügen Sie keine `:-moz-` vorangestellten Pseudo-Klassen oder Pseudo-Elemente in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) einfühlsamen Selektorenliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden es hilfreich, das Element, das Sie gestalten möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann den DOM-Baum-Krümelpfad zu betrachten, den DOM-Inspektoren oft bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklerwerkzeugen diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Die Elemente-Krümelspur ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen würden, diesen Selektor zu verwenden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date
```

(Das `date`-Formularelement ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahren-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen entsteht durch CSS-Präfixe – diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie noch im experimentellen Stadium ist, damit sie daran arbeiten und sie richtig machen können, ohne mit Implementierungen anderer Browser oder den endgültigen nicht-prefixed Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code antreffen könnten und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen waren nie dazu gedacht, in Produktionswebsites verwendet zu werden – sie können sich ohne Vorwarnung ändern oder entfernt werden, können Leistungsprobleme in alten Browserversionen verursachen, die sie erfordern, und haben Cross-Browser-Probleme verursacht. Dies ist besonders problematisch, wenn Entwickler beschließen, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was impliziert, dass die Site in anderen Browsern nicht funktioniert. Das passierte tatsächlich so oft, dass andere Browseranbieter `-webkit-` präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags versteckt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es nötig ist; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können nachschauen, welche Browser Präfixe auf MDN-Referenzseiten benötigen, und auf Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie auch herausfinden, indem Sie direkt in den Browsern testen. Schließen Sie die standardmäßige nicht-prefixed Version nach der prefixed Style-Deklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Site, die eine prominente Überschrift oder ein anderes Block-Level-Element hat.
2. Rechts-/Cmd+Klicken Sie auf das jeweilige Element und wählen Sie Untersuchen/Element inspizieren (oder was auch immer die Option in Ihrem Browser ist) – dies sollte die Entwicklerwerkzeuge in Ihrem Browser geöffnet haben, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite auf MDN zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie jetzt, einen neuen Wert für die CSS-Eigenschaft zu setzen, die Sie interessieren; dies können Sie mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, versuchen Sie zum Beispiel, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie beginnen, den Eigenschaftsnamen nach dem zweiten Punkt zu schreiben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}}, nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einfügen müssen, testen Sie diese auf Unterstützung mithilfe von [`@supports`](/de/docs/Web/CSS/@supports), das es Ihnen erlaubt, native Funktionserkennungstests für neue Funktionen durchzuführen und die prefixed oder neue Funktion innerhalb des `@supports`-Blocks zu schachteln.

### Probleme beim responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, -orientierungen (Hoch- oder Querformat) oder -auflösungen. Ein Desktop-Layout sieht zum Beispiel auf einem mobilen Gerät schrecklich aus, also müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt angewendet wird, indem Sie [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) verwenden. Sie können eine detaillierte Beschreibung solcher Praktiken in unserem [Leitfaden zum responsiven Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) finden.

Auflösung ist ebenfalls ein großes Problem – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große schwere Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem Problem machen. Außerdem können verschiedene Geräte eine Reihe verschiedener Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme umgehen können, von [Media Queries](/de/docs/Learn/CSS/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [responsiven Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes), einschließlich der {{HTMLElement('picture')}}- und der {{HTMLElement('img')}}-Elemente mit ihren [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, was Kenntnisse darüber, wie man online Antworten findet, unschätzbar wertvoll macht.

Zu den besten Quellen für Unterstützungsinformationen gehören das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Leute in einer Suchmaschine nach der Technologie, zu der sie Informationen suchen, sowie dem Begriff „mdn“, zum Beispiel „mdn HTML video“. MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für Webtechnologien auf der Clientseite, z.B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Element/video).
- Weitere unterstützende Referenzmaterialien, z.B. der [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Ein plattformübergreifender Video-Player](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen sowie einige nützliche externe Ressourcenlinks. Zum Beispiel siehe: <https://caniuse.com/#search=video> (Sie müssen nur das Feature in das Textfeld eingeben, nach dem Sie suchen).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forumsseite, auf der Sie Fragen stellen und Lösungen von anderen Entwicklern teilen lassen können, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Sie werden empfohlen, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach „Deaktivierung des Autofokus auf HTML-Dialog“ gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, Ihre Lieblingssuchmaschine nach einer Antwort auf Ihr Problem zu durchsuchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler hatten wahrscheinlich die gleichen Probleme wie Sie.

## Zusammenfassung

Jetzt sollten Sie mit den wichtigsten Typen von Cross-Browser-HTML- und CSS-Problemen vertraut sein, die Sie bei der Webentwicklung antreffen, und wie Sie diese beheben können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
