---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem der Rahmen gesetzt wurde, werden wir nun speziell die häufigen plattformübergreifenden Probleme betrachten, die Sie in HTML- und CSS-Code antreffen, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehören das Linting von Code, der Umgang mit CSS-Präfixen, die Nutzung von Entwicklerwerkzeugen des Browsers zur Fehlersuche, der Einsatz von Polyfills für zusätzliche Browserunterstützung, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des plattformübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zur Behebung einzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind und Entwickler oft nicht darauf achten, dass der Code gut strukturiert, effizient und semantisch korrekt die Funktionalität der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Styling der Webseite zu generieren, was die Zugänglichkeit und Performance Ihrer Seiten beeinträchtigt (das Erzeugen von DOM-Elementen ist aufwendig). In anderen Fällen werden neue Funktionen nicht durchgängig in allen Browsern unterstützt, was dazu führen kann, dass einige Funktionen und Stile für manche Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig — eine Website, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder weil die Seite aufgrund aufwendiger Animationen langsam ist.

Lassen Sie uns nun erkunden, wie wir plattformübergreifende Fehler, die durch HTML/CSS entstehen, reduzieren können.

## Zunächst allgemeine Probleme beheben

Wie bereits im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, ist eine gute Strategie, zunächst in ein paar modernen Browsern auf Desktop/Mobil zu testen, um sicherzustellen, dass Ihr Code generell funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir grundlegende Anleitungen zum Debuggen von HTML/CSS gegeben — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie fortfahren.

Im Wesentlichen geht es darum zu prüfen, ob Ihr HTML- und CSS-Code gut strukturiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn sich verschiedene CSS-Regeln widersprechen. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der ihr verwendeten Klassennamen mit einem, den Sie bereits für einen anderen Zweck verwendet haben, kollidiert. Oder Sie könnten feststellen, dass von einer Art von Drittanbieter-API generiertes HTML (zum Beispiel Werbebanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, sollten Sie zuerst die von Ihnen verwendeten Tools recherchieren und Ihren Code um sie herum designen. Es ist auch sinnvoll, CSS zu „namespacen“, z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine unverwechselbare Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML umfasst die Validierung, sicherzustellen, dass alle Ihre Tags richtig geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Service, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), mit dem Sie auf Ihren Code verweisen können und er Ihnen eine Liste von Fehlern zurückgibt:

![Die Startseite des HTML-Validators](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, dass Ihre Eigenschaftsnamen richtig geschrieben sind, die Eigenschaftswerte richtig geschrieben und für die verwendeten Eigenschaften gültig sind, dass keine geschweiften Klammern fehlen, usw. Zu diesem Zweck hat das W3C ebenfalls einen [CSS Validator](https://jigsaw.w3.org/css-validator/).

### Linter

Eine andere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler anzeigt, sondern auch Warnungen zu schlechten Praktiken in Ihrem CSS und anderen Punkten hervorheben kann. Linter können in der Regel so angepasst werden, dass sie in ihrer Fehler-/Warnmeldung strenger oder lockerer sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es wird alle Fehler mit Kreuzen kennzeichnen, die dann überfahren werden können, um eine Fehlermeldung anzuzeigen, die Sie über das Problem informiert. Dirty Markup ermöglicht es Ihnen auch, Korrekturen an Ihrem Markup mit der _Clean_-Schaltfläche vorzunehmen.

![Dirty Markup-Anwendung, die die Nachricht "Unexpected character in unquoted attribute" über dem folgenden falschen HTML-Markup: <div id=combinators"> anzeigt](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals in eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der in Ihren Standard-Workflow mit minimalem Aufwand passt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwickler-Tools der Browser

Die in den meisten Browsern integrierten Entwickler-Tools bieten auch nützliche Funktionen zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler zeigen sich in den Entwicklungstools nicht so leicht, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warnsymbol an. Beim Überfahren des Warnsymbols wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwickler-Tools streichen ungültiges CSS durch und fügen ein überfahrbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklertools in Browsern haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Jetzt widmen wir uns einigen der häufigsten plattformübergreifenden HTML- und CSS-Probleme. Die Hauptbereiche, die wir ansehen werden, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen keine modernen Funktionen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert, aber noch nicht in allen vorhanden sind. Im Allgemeinen funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Text-Styling) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. Auf MDN werden für jede dokumentierte Funktion Daten zur Browser-Kompatibilität angezeigt; zum Beispiel die [Browser-Support-Tabelle zur `:has()` Pseudoklasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gutes Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML Fallback-Verhalten

Einige Probleme können einfach dadurch gelöst werden, dass man sich die natürliche Arbeitsweise von HTML/CSS zunutze macht.

Nicht erkannte HTML-Elemente werden von Browsern als anonyme Inline-Elemente behandelt (im Wesentlichen Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können trotzdem auf sie mit ihren Namen verweisen und sie mit CSS stylen — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie wie jedes andere Element, inklusive dem Setzen der `display`-Eigenschaft auf etwas anderes als `inline`, falls nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (sowie andere Funktionen zusätzlich) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalt zwischen die öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls der HTML-Video-Player nicht funktioniert, sodass der Benutzer zumindest noch Zugriff auf das Video hat.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formularen einzugeben, wie zum Beispiel Zeiten, Daten, Farben, Zahlen etc., verwendete der Browser, wenn er das neue Feature nicht unterstützte, standardmäßig `type="text"`. Inputtypen wurden eingeführt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig für die Benutzererfahrung ist, eine schmerzfreie Methode zur Dateneingabe zu bieten. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, wie beispielsweise ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer immer noch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Eingaben für Datum und Uhrzeit:

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

Der Output dieses Codes ist wie folgt:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub unter [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) anschauen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel ansehen, werden Sie die UI-Funktionen in Aktion sehen, sobald Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden eingabetyp-spezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer dennoch die korrekten Informationen eingeben kann.

### CSS Fallback-Verhalten

CSS ist im Hinblick auf Fallbacks wahrscheinlich besser als HTML. Wenn ein Browser einer Deklaration oder Regel begegnet, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Das kann frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in Produktionscode durchrutscht, aber zumindest bedeutet es, dass nicht die ganze Website wegen eines Fehlers abstürzt, und wenn es clever eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestylt ist und durch verschiedene CSS-Funktionen gestylt wurde:

![Ein roter Pillen-Knopf mit abgerundeten Ecken, eingezogenem Schatten und Schlagschatten](blingy-button.png)

> [!NOTE]
> Dieses Beispiel können Sie auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Knopf hat eine Reihe von Deklarationen, die für das Styling sorgen, aber die beiden, die uns am meisten interessieren, sind die folgenden:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die die Opazität beim Hover ändert, um dem Benutzer einen Hinweis zu geben, dass der Knopf interaktiv ist, und einige halbtransparente eingezogene {{cssxref("box-shadow")}}-Schattierungen, um dem Knopf etwas Textur und Tiefe zu geben. Während RGB-Farben und Box-Schatten jetzt vollständig unterstützt werden, sind sie nicht immer vorhanden gewesen; angefangen mit IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt wurde, sodass der Text nicht lesbar war, was überhaupt nicht gut ist!

![Schwer zu sehender Pillen-Knopf mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach eine Hex-Farbe spezifiziert — diese wird weit zurück in wirklich alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den Wert der ersten `background-color`-Deklaration anwendet; wenn er zur zweiten `background-color`-Deklaration kommt, überschreibt er den anfänglichen Wert mit diesem Wert, falls er RGB-Farben unterstützt. Wenn nicht, ignoriert er die gesamte Deklaration einfach und fährt fort.

> [!NOTE]
> Gleiches gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, könnte es sein, dass er kein Element trifft. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, ebenso wie der gesamte Stilblock. Aus diesem Grund sollten Sie ein mit einem `:-moz-`-Präfix versehenes Pseudoklasse oder -element nur in einer [nachsichtigen Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list), wie `:where(::-moz-thumb)`, einschließen. Fügen Sie kein mit einem `:-moz-`-Präfix versehenes Pseudoklasse oder -element innerhalb einer durch Kommas getrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where)-nachsichtigen Selektorliste ein, da alle anderen Browser als Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklungstools Ihres Browsers zu inspizieren und dann den DOM-Baum-Brotkrumenpfad anzusehen, den DOM-Inspektoren in der Regel bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie mit den Firefox-Entwicklungstools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Brotkrumenpfad der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen würden, diesen Selektor zu verwenden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date
```

(Das `date`-Formularinput ist kein direktes Kind des `<form>`; Sie wären besser bedient, einen allgemeinen Nachkommen-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Weitere Probleme entstehen durch CSS-Präfixe — diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu erlauben, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie noch in einem experimentellen Zustand ist, sodass sie damit spielen und sie richtig gestalten können, ohne mit Implementierungen anderer Browser oder den endgültigen unveränderten Implementierungen zu kollidieren.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code antreffen könnten, die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfix-Features sollten nie in produktiven Webseiten verwendet werden — sie können ohne Vorwarnung geändert oder entfernt werden, können Leistungsprobleme in alten Browserversionen verursachen, die sie benötigen, und sind die Ursache für plattformübergreifende Probleme gewesen. Dies ist besonders problematisch, zum Beispiel wenn Entwickler entscheiden, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was impliziert, dass die Website in anderen Browsern nicht funktioniert. Dies passierte tatsächlich so oft, dass andere Browseranbieter `-webkit-`-Präfixversionen von mehreren CSS-Eigenschaften implementierten. Während Browser weiterhin einige Präfixeigenschaftsnamen, -werte und Pseudoklassen unterstützen, sind experimentelle Funktionen nun hinter Flags gestellt, damit Web-Entwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden Präfix-Funktionen ist. Sie können nachsehen, welche Browser Präfixe auf MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie sich nicht sicher sind, können Sie auch durch direkte Tests in Browsern herausfinden. Fügen Sie die standardmäßige, unveränderte Version nach der Präfix-Stil-Deklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine auffällige Überschrift oder ein anderes Block-Level-Element hat.
2. Rechts-/Cmd+Klicken Sie auf das betreffende Element und wählen Sie „Untersuchen/Element untersuchen“ (oder wie auch immer die Option in Ihrem Browser lautet) — dies sollte die Entwicklungstools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel, zum Zeitpunkt des Schreibens, hat diese Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie jetzt, einen neuen Wert für die CSS-Eigenschaft zu setzen, an der Sie interessiert sind, auf diesem Element; dies können Sie durch die [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigenschaftsnamen nach dem zweiten Punkt einzugeben (beachten Sie, dass CSS-Eigenschaftsnamen in JavaScript in {{Glossary("camel_case", "lower camel case")}}, nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole damit beginnen, die Namen der Eigenschaften, die es im Browser gibt und die dem bisher Geschriebenen entsprechen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in dem Browser implementiert sind.

Wenn Sie moderne Funktionen einschließen müssen, prüfen Sie die Unterstützung der Funktion mithilfe von [`@supports`](/de/docs/Web/CSS/@supports), das Ihnen erlaubt, native Feature-Detection-Tests zu implementieren, und das Präfix oder die neue Funktion innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme mit dem responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen — zum Beispiel verschiedene Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout würde zum Beispiel auf einem mobilen Gerät schrecklich aussehen, daher müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mithilfe von [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) angewendet wird. Eine ausführliche Beschreibung solcher Praktiken finden Sie in unserem [Leitfaden für responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auch die Auflösung ist ein großes Problem — zum Beispiel benötigen mobile Geräte weniger große, schwere Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise teure Datentarife, die eine Verschwendung von Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die es erlauben, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und den `srcset`- und `sizes`-Attributen des {{HTMLElement('img')}}-Elements.

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit HTML und CSS antreffen werden, was die Kenntnis darüber, wie man online Antworten findet, unschätzbar wertvoll macht.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Menschen mit einer Suchmaschine nach der Technologie, zu der sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Web-Technologien, z.B. die [`<video>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Weitere unterstützende Referenzmaterialien, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungshinweise, zusammen mit einigen nützlichen externen Ressourcelinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen lediglich das Funktionsmerkmal, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen und Lösungen anderer Entwickler finden, frühere Beiträge nachschauen und anderen Entwicklern helfen können. Es wird empfohlen, zu sehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Wir suchten beispielsweise bei SO nach "autofocus auf HTML-Dialog deaktivieren" und fanden sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon versuchen Sie, mit einer Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach speziellen Fehlermeldungen zu suchen, wenn Sie diese haben — andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von plattformübergreifenden HTML- und CSS-Problemen vertraut sein, die Ihnen in der Webentwicklung begegnen werden, und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
