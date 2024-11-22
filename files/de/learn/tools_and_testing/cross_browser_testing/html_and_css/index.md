---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nachdem wir den Rahmen abgesteckt haben, werden wir nun speziell auf die häufigen Cross-Browser-Probleme eingehen, die Sie in HTML- und CSS-Code finden werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben, die auftreten. Dazu gehört das Linting von Code, der Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen für Browser, um Probleme aufzuspüren, die Verwendung von Polyfills, um Unterstützung in Browsern hinzuzufügen, das Angehen von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige Cross-Browser-Probleme in HTML und CSS zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen ziemlich einfach sind und Entwickler sie oft nicht ernst nehmen, wenn es darum geht, sicherzustellen, dass der Code gut entwickelt, effizient und semantisch beschreibt, welchen Zweck die Funktionen auf der Seite haben. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Styling der Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Erstellen von DOM-Elementen ist teuer). In anderen Fällen werden aufkommende Funktionen nicht einheitlich in allen Browsern unterstützt, was dazu führen kann, dass einige Funktionen und Styles für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig — eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder vielleicht ist die Seite langsam, weil sie teure Animationen enthält.

Lassen Sie uns fortfahren und schauen, wie wir Cross-Browser-Fehler, die durch HTML/CSS entstehen, reduzieren können.

## Zuerst allgemein: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, zunächst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die Cross-Browser-Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) und [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS angeboten — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel auf jeden Fall studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem, den Sie bereits für einen anderen Zweck verwendet haben, kollidiert. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (z. B. Bannergenerierung für Anzeigen), eine Klasse oder ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Tools, die Sie verwenden, zuerst recherchieren und Ihren Code darauf abstimmen. Es lohnt sich auch, das CSS zu „namespacen“, d. h. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML umfasst die Validierung, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren richtigen Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der [W3C-Markup-Validierungsdienst](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die Startseite des HTML-Validators](validator.png)

CSS verhält sich ähnlich – Sie müssen sicherstellen, dass die Eigenschaftsnamen korrekt buchstabiert sind, die Eigenschaftswerte korrekt buchstabiert und für die verwendeten Eigenschaften gültig sind, dass keine geschweiften Klammern fehlen usw. Auch das W3C hat einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck zur Verfügung.

### Linter

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte markieren kann. Linter können in der Regel angepasst werden, um bei der Fehler-/Warnberichterstattung strenger oder entspannter zu sein.

Es gibt viele Online-Linter-Anwendungen, wie z. B. [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster zu kopieren, und es wird alle Fehler mit Kreuzen kennzeichnen, die dann durch Schweben eine Fehlermeldung anzeigen, die Sie darüber informiert, was das Problem ist. Dirty Markup ermöglicht es Ihnen auch, Ihre Auszeichnung mit der Schaltfläche _Clean_ zu beheben.

![Die Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über folgendem fehlerhaften HTML-Markup an: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite zu kopieren und einzufügen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der mit minimalem Aufwand in Ihren Standardworkflow passt.

Viele Code-Editoren bieten Linter-Plugins an. Siehe zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge der Browser

Die in den meisten Browsern integrierten Entwicklerwerkzeuge bieten auch nützliche Tools zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwicklertools nicht so leicht angezeigt, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Als Beispiel zeigt der CSS-Inspektor in Firefox CSS-Deklarationen an, die nicht angewendet werden, durchgestrichen und mit einem Warnschild. Wenn Sie das Warnschild mit der Maus überfahren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklertools streichen ungültiges CSS durch und fügen ein überfahrbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige Cross-Browser-Probleme

Lassen Sie uns nun einige der häufigsten Cross-Browser-Probleme in HTML und CSS untersuchen. Die Hauptbereiche, die wir uns ansehen werden, sind das Fehlen von Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen keine modernen Funktionen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert, aber noch nicht in allen vorhanden sind. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textgestaltung) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; zum Beispiel siehe [Browser-Unterstützungstabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden, die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach durch die natürliche Funktionsweise von HTML/CSS gelöst werden.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}} Elemente). Sie können sich immer noch auf sie beziehen, indem Sie ihre Namen verwenden und sie mit CSS stilisieren – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stilieren Sie sie einfach wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen neben) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützte Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest weiterhin auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie z. B. Zeiten, Daten, Farben, Zahlen usw., verwendete der Browser standardmäßig `type="text"`, falls ein Browser die neue Funktion nicht unterstützte. Input-Typen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo eine benutzerfreundliche Eingabemethode sehr wichtig für die Benutzererfahrung ist. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, wie ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer die erforderlichen Daten dennoch eingeben.

Das folgende Beispiel zeigt Datums- und Zeiteingabefelder:

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

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typspezifische Tastaturen angezeigt. In einem nicht unterstützten Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer die richtigen Informationen immer noch eingeben kann.

### CSS-Fallback-Verhalten

CSS ist im Vergleich zu HTML durchaus besser in Fallbacks. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Dies könnte frustrierend für Sie und Ihre Benutzer sein, wenn ein solches Missgeschick in Produktionscode durchrutscht, aber zumindest bedeutet es, dass die gesamte Website nicht aufgrund eines Fehlers abstürzt, und wenn es geschickt eingesetzt wird, können Sie dies zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestylt ist und einige Stile durch verschiedene CSS-Funktionen enthält:

![Ein roter Pillenknopf mit abgerundeten Ecken, Innenschatten und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button enthält eine Reihe von Deklarationen, die ihn stilvoll machen, aber die beiden, die uns am meisten interessieren, sind wie folgt:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die die Deckkraft beim Überfahren ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente Inset-{{cssxref("box-shadow")}}-Schatten, um dem Button ein wenig Textur und Tiefe zu verleihen. Während RGB-Farben und Box-Schatten mittlerweile voll unterstützt werden, waren sie nicht immer verfügbar; beginnend in IE9. Browser, die RGB-Farben nicht unterstützten, würden einfach die gesamte Deklaration ignorieren, was bedeutete, dass der Hintergrund in alten Browsern überhaupt nicht angezeigt wurde, sodass der Text unleserlich war, was ganz und gar nicht gut ist!

![Kaum lesbarer Pillenknopf mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt — diese wird in sehr alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er den anfänglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Andernfalls ignoriert er einfach die gesamte Deklaration und macht weiter.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Unterstützung von Selektoren

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verwenden, um das Element auszuwählen, das Sie stilisieren möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, kann es sein, dass er kein Element auswählt. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste der Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie eine `:-moz-`-präfixierte Pseudoklasse oder ein Pseudo-Element nur in einer [verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einschließen. Schließen Sie eine `:-moz-`-präfixierte Pseudoklasse oder ein Pseudo-Element nicht innerhalb einer durch Kommas getrennten Gruppe von Selektoren außerhalb einer `:is()` oder `:where()` verzeihenden Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in andere Selektorlisten, einschließlich `:has()` und `:not()`, übergeben werden können.

Wir finden es hilfreich, das Element, das Sie stilisieren möchten, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Baum-Pfade zu betrachten, den DOM-Inspektoren in der Regel bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Beispielsweise erhalten Sie in den Entwicklertools von Firefox diese Art von Ausgabe am unteren Ende des DOM-Inspektors:

![Der Pfad des DOMs ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel diesen Selektor verwenden würden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date
```

(Das `date`-Formulareingabefeld ist kein direktes Kind der `<form>`; es wäre besser, einen allgemeinen Nachfolger-Selektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Eine weitere Serie von Problemen ergibt sich aus CSS-Präfixen - dies ist ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich in einem experimentellen Zustand befindet, så sie damit spielen und sie richtig in den Griff bekommen können, ohne mit den Implementierungen anderer Browser oder den endgültigen unveränderten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code finden können und die sicher entfernt werden können, sind `-ms-`, das in Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ersten Versionen von Opera verwendet wurde.

Prefixed Features sollten niemals in Produktionswebsites verwendet werden - sie können ohne Vorwarnung geändert oder entfernt werden, können bei alten Browserversionen, die sie benötigen, Leistungsprobleme verursachen und waren die Ursache für Cross-Browser-Probleme. Dies ist besonders problematisch, zum Beispiel wenn Entwickler sich dazu entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was bedeutet, dass die Seite in anderen Browsern nicht funktioniert. Dies geschah tatsächlich so oft, dass andere Browseranbieter `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, -werte und -pseudo-Klassen unterstützen, werden experimentelle Funktionen nun hinter Flags gesetzt, damit Webentwickler sie während der Entwicklung testen können.

Falls Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbliebenen präfixierten Funktionen ist. Sie können nachschauen, welche Browser Präfixe auf MDN-Referenzseiten benötigen, und auf Websites wie [caniuse.com](https://caniuse.com/). Wenn Sie sich unsicher sind, können Sie dies auch durch direktes Testen in Browsern herausfinden. Fügen Sie die Standardversion ohne Präfix nach der Stil-Deklaration mit Präfix ein; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Website mit einem prominenten Überschriftselement oder einem anderen Block-Level-Element.
2. Klicken Sie mit der rechten Maustaste / Befehlstaste + klicken Sie auf das betreffende Element und wählen Sie Inspektieren/Element untersuchen (oder was auch immer die Option in Ihrem Browser ist) - dies sollte die Entwicklertools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einem Merkmal, das Sie verwenden können, um das Element auszuwählen. Zum Beispiel hat diese Seite auf MDN zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variable, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Nun versuchen Sie, einen neuen Wert für die CSS-Eigenschaft festzulegen, an der Sie interessiert sind, auf diesem Element; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Namen der Eigenschaftsrepräsentation nach dem zweiten Punkt zu schreiben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}}, nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbinden müssen, testen Sie die Funktionsunterstützung mit [`@supports`](/de/docs/Web/CSS/@supports), die es Ihnen ermöglicht, native Funktionsprüfungstests zu implementieren und das Präfix oder die neue Funktion innerhalb des `@supports`-Blocks einzuschließen.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die an verschiedene Geräteformfaktoren angepasst werden – z. B. unterschiedliche Bildschirmbreiten, -ausrichtungen (Hochformat oder Querformat) oder -auflösungen. Ein Desktop-Layout wird zum Beispiel auf einem mobilen Gerät schrecklich aussehen, sodass Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen müssen, dass es korrekt angewendet wird, indem Sie den [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) verwenden. Sie können einen detaillierten Bericht über solche Praktiken in unserem [Leitfaden zum responsiven Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) finden.

Die Auflösung ist auch ein großes Problem – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große, schwere Bilder als Desktop-Computer und es ist wahrscheinlicher, dass sie langsamere Internetverbindungen haben, möglicherweise sogar teure Datentarife, bei denen verschwendete Bandbreite mehr ein Problem darstellt. Außerdem können verschiedene Geräte eine ganze Reihe unterschiedlicher Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn/CSS/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und dem {{HTMLElement('img')}}-Element's [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, daher ist das Wissen darum, wie man online nach Antworten sucht, von unschätzbarem Wert.

Zu den besten Quellen für Supportinformationen gehören das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/), und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Menschen über eine Suchmaschine nach der Technologie, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browserunterstützungsinformationen für clientseitige Webtechnologien, z. B. die [`<video>`-Referenzseite](/de/docs/Web/HTML/Element/video).
- Weitere unterstützende Referenzinformationen, z. B. den [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Supportinformationen sowie einige nützliche Links zu externen Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen können und andere Entwickler ihre Lösungen teilen, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus bei HTML-Dialog deaktivieren" gesucht und sehr schnell [Deaktivieren von showModal-Autofokus mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Hauptarten von Cross-Browser-HTML- und CSS-Problemen, die Ihnen bei der Webentwicklung begegnen, vertraut sein und wissen, wie Sie sie beheben können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
