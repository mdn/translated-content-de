---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem die Grundlagen gelegt sind, schauen wir uns nun speziell die häufigen browserübergreifenden Probleme an, die Sie in HTML- und CSS-Code antreffen werden, und welche Werkzeuge genutzt werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Überprüfen des Codes mit einem Linter, der Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen des Browsers zur Fehlersuche, die Nutzung von Polyfills zur Unterstützung in Browsern, das Bewältigen von Problemen des responsiven Designs und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der
        grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-Cross-Browser-Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS ergeben sich aus der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst nehmen, wenn es darum geht, sicherzustellen, dass der Code gut gestaltet, effizient und semantisch sinnvoll ist. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Design der Webseite zu generieren, was Ihre Seiten unzugänglich macht und die Leistung verschlechtert (das Erzeugen von DOM-Elementen ist teuer). In anderen Fällen werden neue Funktionen nicht durchweg von allen Browsern unterstützt, was dazu führen kann, dass einige Funktionen und Stile für bestimmte Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, könnte auf einem mobilen Gerät eine schlechte Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite wegen aufwendiger Animationen langsam ist.

Gehen wir also voran und schauen, wie wir browserübergreifende Fehler aus HTML/CSS verringern können.

## Das Wichtigste zuerst: Allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie darin besteht, zunächst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die Cross-Browser-Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) gaben wir einige grundlegende Anleitungen zum Debuggen von HTML/CSS – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diesen Artikeln unbedingt Beachtung schenken.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln beginnen, einander zu widersprechen. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem Namen kollidiert, den Sie bereits für einen anderen Zweck verwenden. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel zum Erzeugen von Werbebannern), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie im Voraus recherchieren, welche Werkzeuge Sie verwenden, und Ihren Code um sie herum gestalten. Es lohnt sich auch, CSS zu „namespace“-en, d.h. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, um Konflikte zu verringern. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML umfasst die Validierung sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Homepage](validator.png)

CSS hat eine ähnliche Vorgehensweise – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen richtig geschrieben sind, ob Eigenschaftswerte korrekt geschrieben und gültig für die Eigenschaften sind, auf denen sie verwendet werden, dass keine geschweiften Klammern fehlen, und so weiter. Das W3C bietet hierfür ebenfalls einen [CSS Validator](https://jigsaw.w3.org/css-validator/) an.

### Linters

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler hervorhebt, sondern auch Warnungen zu schlechten Praktiken in Ihrem CSS und anderen Punkten ausgeben kann. Linter können in der Regel so angepasst werden, dass sie in ihrer Fehler-/Warnberichterstattung strenger oder entspannter sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und markieren Fehler mit Kreuzen, über die Sie dann fahren können, um eine Fehlermeldung zu erhalten, die das Problem beschreibt. Dirty Markup ermöglicht es Ihnen auch, Ihr Markup mit der _Clean_-Schaltfläche zu reparieren.

![Dirty Markup Anwendung, die die Nachricht "Unerwartetes Zeichen in nicht zitiertem Attribut" über dem folgenden inkorrekten HTML-Markup anzeigt: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals zur Validierung in eine Webseite kopieren und einfügen zu müssen. Was Sie wirklich wollen, ist ein Linter, der mit minimalem Aufwand in Ihren Standardarbeitsablauf passt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge des Browsers

Die in den meisten Browsern eingebauten Entwicklerwerkzeuge bieten ebenfalls nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Dev-Tools nicht so leicht angezeigt, da der Browser versucht, falsch geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) weiter oben.

Zum Beispiel wird im CSS-Inspektor von Firefox nicht angewandte CSS-Deklarationen durchgestrichen und mit einem Warnsymbol versehen. Wenn Sie das Warnsymbol berühren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein Hover-fähiges Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklerwerkzeuge von Browsern haben ähnliche Funktionen.

## Häufige Cross-Browser-Probleme

Schauen wir uns nun einige der häufigsten Cross-Browser-HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen moderne Features nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Features verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstil) in allen Browsern, die Sie unterstützen möchten; mehr Probleme tauchen auf, wenn Sie anfangen, neuere HTML-, CSS- und API-Funktionen zu nutzen. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; zum Beispiel sehen Sie die [Browser-Support-Tabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste der Technologien identifiziert haben, die Sie verwenden werden, die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, welche Browser sie unterstützen und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) weiter unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem einfach die natürliche Funktionsweise von HTML/CSS genutzt wird.

Unbekannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sich weiterhin auf sie durch ihre Namen beziehen und sie mit CSS stylen – Sie müssen nur sicherstellen, dass sie so funktionieren, wie Sie es möchten. Stylen Sie sie wie jedes andere Element, einschließlich dem Festlegen der `display`-Eigenschaft auf etwas anderes als `inline`, falls nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen zusätzlich) haben natürliche Mechanismen für Fallbacks, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element effektiv und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es erlaubt, das Video herunterzuladen, falls sogar der HTML-Video-Player nicht funktioniert, damit der Benutzer zumindest noch auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Type für die Eingabe spezifischer Informationen in Formulare eingeführt wurden, wie Zeiten, Daten, Farben, Nummern usw., wenn ein Browser die neue Funktion nicht unterstützte, nutzte der Browser den Standard `type="text"`. Input-Typen wurden hinzugefügt, die sehr nützlich sind, insbesondere auf mobilen Plattformen, wo es wichtig ist, einen schmerzfreien Weg zur Dateneingabe zu bieten, um die Benutzererfahrung zu verbessern. Plattformen bieten je nach Eingabetyp verschiedene UI-Widgets, wie ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

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
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Keypads angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben, was bedeutet, dass der Benutzer dennoch die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist in Bezug auf Fallbacks arguably besser als HTML. Wenn ein Browser eine Deklaration oder Regel antrifft, die er nicht versteht, wird sie einfach vollständig übersprungen, ohne sie anzuwenden oder einen Fehler zu verursachen. Das könnte frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode gerät, aber zumindest bedeutet es, dass die gesamte Seite nicht wegen eines Fehlers zusammenbricht, und wenn es clever genutzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestylt wurde und Stil von verschiedenen CSS-Features erhält:

![Ein roter Pillen-Button mit abgerundeten Ecken, eingebautem Schatten und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die den Stil festlegen, aber die beiden, die uns am meisten interessieren, sind folgende:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die sich bei Hovering ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente eingebaute {{cssxref("box-shadow")}} Schattierungen, um dem Button etwas Textur und Tiefe zu verleihen. Während RGB-Farben und Box-Schatten mittlerweile vollständig unterstützt werden, sind sie nicht schon immer da gewesen; beginnend mit IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund einfach gar nicht angezeigt wurde, sodass der Text unleserlich war, was überhaupt nicht gut ist!

![Schwer zu lesender Pillen-Button mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um das zu beheben, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt – dies wird in wirklich alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Features nicht funktionieren. Was passiert, ist dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color` Wert anwendet; wenn er zur zweiten `background-color` Deklaration gelangt, wird er den ursprünglichen Wert mit diesem Wert überschreiben, falls er RGB-Farben unterstützt. Andernfalls ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Gleiches gilt für andere CSS-Features wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommata getrennten Liste von Selektoren, wenn Sie nur einen Selektor falsch schreiben, könnte er kein Element matchen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-`-präfixierte Pseudoklasse oder Pseudoelement in einer [nachsichtigen Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list), wie `:where(::-moz-thumb)`, verwenden. Schließen Sie keine `:-moz-`-präfixierte Pseudoklasse oder Pseudoelement in eine durch Komma getrennte Gruppierung von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) nachsichtige Selektorsliste ein, da alle anderen Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Dev-Tools Ihres Browsers zu inspizieren und dann den Breadcrumb-Trail des DOM-Trees anzusehen, den DOM-Inspektoren in der Regel bereitstellen, um festzustellen, ob Ihr Selektor mit diesem übereinstimmt.

Zum Beispiel erhalten Sie in den Firefox-Devtools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb von Elementen lautet html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen, diesen Selektor zu verwenden, würden Sie sehen, dass er das Eingabeelement nicht ausgewählt hat, wie beabsichtigt:

```css
form > #date {
  /* … */
}
```

(Der `date`-Formulareingang ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahren-Selektor anstelle eines Kinds-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen kommt mit CSS-Präfixen – dies ist ein Mechanismus, der ursprünglich verwendet wurde, um Browser-Anbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich noch in einem experimentellen Zustand befindet, damit sie damit experimentieren und es richtig machen können, ohne mit Implementierungen anderer Browser in Konflikt zu stehen oder mit finalen nicht-präfixierten Implementierungen.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixe sollten eigentlich nie in Produktionswebseiten verwendet werden – sie können sich ohne Warnung ändern oder entfernt werden, können in alten Browser-Versionen, die sie benötigen, Leistungsprobleme verursachen und waren die Ursache von Cross-Browser-Problemen. Dies ist besonders ein Problem, wenn Entwickler sich entscheiden, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was impliziert, dass die Seite in anderen Browsern nicht funktioniert. Das ist tatsächlich so häufig passiert, dass andere Browseranbieter `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementiert haben. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Funktionen nun hinter Flags platziert, sodass Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es nötig ist; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können nachsehen, welche Browser Präfixe auf MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/) benötigen. Wenn Sie unsicher sind, können Sie dies auch herausfinden, indem Sie einige Tests direkt in Browsern durchführen. Schließen Sie die standardisierte nicht-präfixierte Version nach der präfixierten Stil-Deklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

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
2. Rechtsklick/Cmd+Klick auf das fragliche Element und wählen Sie Inspect/Inspect element (oder was auch immer die Option in Ihrem Browser ist) – dies sollte die Dev-Tools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einem Feature, das Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite zum Zeitpunkt des Schreibens ein Logo mit einer ID `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, die Sie interessiert, an diesem Element festzulegen; das können Sie mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, zum Beispiel, versuchen Sie, die folgenden in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigenschaftsnamen nach dem zweiten Punkt zu tippen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}} und nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die in dem Browser existieren und dem entsprechen, was Sie bisher geschrieben haben. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Falls Sie moderne Features einbinden müssen, testen Sie die Unterstützung der Features mit [`@supports`](/de/docs/Web/CSS/@supports), was Ihnen erlaubt, native Feature-Detection-Tests zu implementieren und das präfixierte oder neue Feature innerhalb des `@supports`-Blocks zu kapseln.

### Probleme mit responsivem Design

Responsive Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformate anpassen – zum Beispiel verschiedene Bildschirmbreiten, -orientierungen (Hoch- oder Querformat) oder -auflösungen. Ein Desktop-Layout sieht zum Beispiel auf einem mobilen Gerät schrecklich aus, sodass Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen müssen und sicherstellen, dass es korrekt mit [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) angewandt wird. Eine detaillierte Beschreibung solcher Praktiken finden Sie in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ebenfalls ein großes Problem – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große, schwere Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise sogar teure Datenpläne, die verschwendete Bandbreite problematischer machen. Außerdem können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder verpixelt erscheinen können. Es gibt mehrere Techniken, mit denen Sie solche Probleme umgehen können, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich des {{HTMLElement('picture')}}- und des {{HTMLElement('img')}}-Elements mit den Attributen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Hilfe finden

Es gibt viele andere Probleme, denen Sie bei HTML und CSS begegnen werden, daher ist es wertvoll zu wissen, wie man online nach Antworten sucht.

Unter den besten Quellen für Support-Informationen sind die Mozilla Developer Network (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Leute eine Suchmaschinen-Suche nach der Technologie, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Informationen zur Browser-Kompatibilität für clientseitige Webtechnologien, z.B. die [Referenzseite für `<video>`](/de/docs/Web/HTML/Reference/Elements/video).
- Weiteres unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellung eines Cross-Browser-Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Support-Informationen sowie einige nützliche Links zu externen Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen lediglich das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, zu suchen und zu schauen, ob es nicht bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "deaktivieren von Autofokus auf HTML-Dialog" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Daneben versuchen Sie, Ihre bevorzugte Suchmaschine nach einer Antwort auf Ihr Problem zu durchsuchen. Es ist oft nützlich, nach spezifische Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich dieselben Probleme gehabt haben wie Sie.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von Cross-Browser-HTML- und CSS-Problemen vertraut sein, denen Sie bei der Webentwicklung begegnen werden, und wissen, wie Sie sie beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
