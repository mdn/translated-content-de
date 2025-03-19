---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Mit dem gesetzten Szenario werden wir nun speziell auf die häufigen Probleme mit HTML- und CSS-Code in verschiedenen Browsern eingehen und welche Werkzeuge genutzt werden können, um Probleme zu verhindern oder zu beheben. Dazu gehören Code-Linting, Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Problemanalyse, der Einsatz von Polyfills zur Unterstützung in Browsern, das Lösen von Problemen bei responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen der <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und der
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundsätzen des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, gängige HTML- und CSS-Probleme über verschiedene Browser hinweg zu diagnostizieren und geeignete Werkzeuge und Techniken zur Behebung dieser Probleme anzuwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Schwierigkeiten mit HTML und CSS

Einige der Probleme mit HTML und CSS ergeben sich aus der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst genug nehmen, was die Sorgfalt bei der Erstellung, Effizienz und semantische Beschreibung der auf der Seite vorhandenen Funktionen betrifft. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (die Erstellung von DOM-Elementen ist aufwändig). In anderen Fällen werden neue Funktionen nicht konsistent über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schlechte Erfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder die Seite möglicherweise langsam ist, weil teure Animationen verwendet werden.

Lassen Sie uns sehen, wie wir die durch HTML/CSS verursachten Fehler über verschiedene Browser hinweg reduzieren können.

## Zuerst einmal: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, zunächst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die browserübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Richtlinien zum Debuggen von HTML/CSS bereitgestellt — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie fortfahren.

Es geht im Wesentlichen darum, zu überprüfen, ob Ihr HTML- und CSS-Code korrekt aufgebaut ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln beginnen, miteinander in Konflikt zu geraten. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der verwendeten Klassennamen mit einem Namen kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass von einer Art Drittanbieter-API generierter HTML-Code (zum Beispiel zur Generierung von Werbebannern) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie zunächst die Werkzeuge, die Sie verwenden, recherchieren und Ihren Code entsprechend gestalten. Es lohnt sich auch, CSS zu "namespacen", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte unwahrscheinlicher werden. Beispiel: `.audio-player ul a`.

### Validierung

Bei HTML umfasst die Validierung sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies leisten kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste der Fehler zurückzugeben:

![Die HTML-Validator-Homepage](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, die Eigenschaftswerte korrekt geschrieben und für die verwendeten Eigenschaften gültig sind, keine geschweiften Klammern fehlen, und so weiter. Auch hierfür bietet das W3C einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) an.

### Linters

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte melden kann. Linters können im Allgemeinen so konfiguriert werden, dass sie strenger oder lockerer bei der Fehler/Warnmeldung sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es wird alle Fehler mit Kreuzen markieren, die anschließend durch Hover eine Fehlermeldung anzeigen, die Sie informiert, was das Problem ist. Dirty Markup ermöglicht es Ihnen auch, Ihre Markup-Fehler mit der _Clean_-Schaltfläche zu beheben.

![Die Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über dem folgenden fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals zum Überprüfen der Gültigkeit in eine Webseite kopieren und einfügen zu müssen. Was Sie wirklich wollen, ist ein Linter, der sich mühelos in Ihren normalen Arbeitsablauf einfügt.

Viele Code-Editoren verfügen über Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge der Browser

Die in den meisten Browsern integrierten Entwicklerwerkzeuge enthalten auch nützliche Tools zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen nicht so leicht in Entwicklertools auf, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist die beste Möglichkeit, HTML-Fehler festzustellen, siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt im Firefox der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warnzeichen an. Mit der Maus über das Warnzeichen fahren, liefert eine beschreibende Fehlermeldung:

![Die Entwicklerwerkzeuge streichen ungültige CSS durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklerwerkzeuge der Browser haben ähnliche Funktionen.

## Häufige Probleme über mehrere Browser

Schauen wir uns nun einige der häufigsten HTML- und CSS-Probleme über verschiedene Browser hinweg an. Die Hauptbereiche, die wir uns ansehen werden, sind mangelnde Unterstützung moderner Funktionen und Layout-Probleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie ältere Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionen (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstile) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt die Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; siehe zum Beispiel die [Tabelle zur Browserunterstützung für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Nachdem Sie eine Liste der Technologien identifiziert haben, die Sie verwenden möchten, die nicht überall unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### Fallback-Verhalten von HTML

Einige Probleme können einfach gelöst werden, indem man den natürlichen Arbeitsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich den {{htmlelement("span")}}-Elementen). Sie können dennoch auf sie mit ihren Namen verweisen und sie mit CSS gestalten — Sie müssen nur sicherstellen, dass sie sich wie gewünscht verhalten. Gestalten Sie sie so, wie Sie jedes andere Element gestalten würden, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, wenn nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen) haben natürliche Mechanismen zum Hinzufügen von Fallbacks, falls die verknüpften Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen simplen Link, mit dem Sie das Video herunterladen können, falls sogar der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest immer noch auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendeten Browser, die das neue Feature nicht unterstützten, den Standard `type="text"`. Input-Typen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig ist, eine einfache Möglichkeit zur Daten-Eingabe zu bieten. Plattformen bieten verschiedene UI-Widgets je nach Eingabetyp, wie ein Kalender-Widget zur Eingabe von Daten. Sollten Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datums- und Uhrzeiteingaben:

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
> Sie können dies auch als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)) live betrachten.

Wenn Sie das Beispiel anzeigen, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Keypads angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, sodass der Benutzer dennoch die richtigen Informationen eingeben kann.

### Fallback-Verhalten von CSS

CSS ist wahrscheinlich besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel trifft, die er nicht versteht, überspringt er sie einfach vollständig, ohne sie anzuwenden oder einen Fehler auszulösen. Das könnte frustrierend für Sie und Ihre Benutzer sein, wenn so ein Fehler bis zum Produktionscode durchrutscht, aber zumindest bedeutet es, dass die gesamte Seite nicht wegen eines Fehlers zusammenbricht, und wenn es klug verwendet wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – ein einfacher Kasten, der mit CSS gestaltet wurde und einige Stile bietet, die durch verschiedene CSS-Funktionen bereitgestellt werden:

![Eine rote Pille-Button mit abgerundeten Ecken, Schatten innen und außen](blingy-button.png)

> [!NOTE]
> Dieses Beispiel können Sie auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat mehrere Deklarationen, die ihn gestalten, aber die beiden, die uns am meisten interessieren, sind die folgenden:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die bei Hover die Opazität ändert, um den Benutzer darauf hinzuweisen, dass der Button interaktiv ist, sowie einige halbtransparente Schatten {{cssxref("box-shadow")}} innen, um dem Button etwas Textur und Tiefe zu verleihen. Während diese Erweiterungen inzwischen vollständig unterstützt werden, waren RGB-Farben und Box-Schatten nicht immer verfügbar; beginnend mit IE9. Browser, die RGB-Farben nicht unterstützten, würden die Deklaration ignorieren, was bedeutet, dass in alten Browsern der Hintergrund einfach nicht angezeigt würde, sodass der Text unleserlich wird, was überhaupt nicht gut ist!

![Schwer zu erkennendes Pille-Button mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach nur eine Hex-Farbe angibt – dies wird weit zurück in wirklich alten Browsern unterstützt und dient als Fallback, wenn die modernen glänzenden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den Wert für `background-color` anwendet; wenn er zur zweiten `background-color` Deklaration gelangt, überschreibt er diesen Wert mit diesem Wert, wenn er RGB-Farben unterstützt. Wenn nicht, wird die gesamte Deklaration einfach ignoriert.

> [!NOTE]
> Das gleiche gilt auch für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) -Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektor-Unterstützung

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das gewünschte Element zu gestalten!

In einer kommagetrennten Liste von Selektoren kann es passieren, dass ein falsch geschriebener Selektor kein Element auswählt. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Verwenden Sie deshalb nur in einer [erlaubten Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) einen `:-moz-` Präfix für Pseudo-Klassen oder Pseudo-Elemente, wie `:where(::-moz-thumb)`. Schließen Sie einen `:-moz-` Präfix für Pseudo-Klassen oder Pseudo-Elemente nicht in einer kommagetrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) erlassenen Selektorliste ein, da alle anderen Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Es ist hilfreich, das Element, das Sie gestalten möchten, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Baum-Pfad zu betrachten, den DOM-Inspektoren gewöhnlich bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools folgende Ausgabe am unteren Rand des DOM-Inspektors:

![Die Brotkrumen von Elementen ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Falls Sie diesen Selektor verwenden würden, würden Sie sehen können, dass er das gewünschte Input-Element nicht auswählt:

```css
form > #date
```

(Das `date`-Formulareingabefeld ist kein direktes Kind des `<form>`; es wäre besser, einen allgemeinen Nachfahrenselektor statt eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Eine weitere Problematik stellt der Umgang mit CSS-Präfixen dar — sie sind ein ursprünglich genutzter Mechanismus, der es Browser-Anbietern ermöglicht, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich noch in einem experimentellen Zustand befindet, sodass sie damit experimentieren können, ohne mit Implementierungen anderer Browser oder der endgültigen version ohne Präfix in Konflikte zu geraten.

Beispielsweise verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie möglicherweise in altem Code antreffen, die sicher entfernt werden können, beinhalten `-ms-`, welches von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixe sollten niemals in Produktions-Websites genutzt werden — sie können sich ohne Vorwarnung ändern oder entfernt werden, können in alten Browser-Versionen, die sie benötigen, zu Leistungseinbußen führen und sind die Ursache für browserübergreifende Probleme. Dies ist besonders dann problematisch, wenn Entwickler sich dazu entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was bedeutet, dass die Seite in anderen Browsern nicht funktioniert. Dies trat tatsächlich so oft auf, dass andere Browseranbieter `-webkit-`-Präfixe für mehrere CSS-Eigenschaften implementierten. Während einige Präfix-Eigenschaftsnamen, -Eigenschaftswerte und -Pseudo-Klassen noch unterstützt werden, werden heutzutage experimentelle Funktionen hinter Flags platziert, sodass Webentwickler sie während der Entwicklung testen können.

Falls Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können nachschlagen, welche Browser Präfixe benötigen, auf den MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/). Falls Sie sich unsicher sind, können Sie dies auch durch Tests direkt in den Browsern herausfinden. Fügen Sie die standardmäßige Version ohne Präfix nach der ursprünglichen Stil-Deklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird, und genutzt, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Webseite, auf der ein prominenter Überschrift oder ein anderes Blockelement sichtbar ist.
2. Klicken Sie mit der rechten Maustaste/Cmd + Klicken Sie auf das betreffende Element und wählen Sie Inspektieren/Element untersuchen (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einer Funktion, die Ihnen ermöglicht, dieses Element auszuwählen. Beispielsweise hat diese Seite zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variable, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft auf diesem Element zu setzen; Sie können dies über die [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements machen, versuchen Sie diese in die JavaScript-Konsole zu schreiben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie anfangen, den Eigenschaftsnamendarstellung nach dem zweiten Punkt zu tippen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}}, nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und zu dem bisher eingegebenen Namen passen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie die Unterstützung mit [`@supports`](/de/docs/Web/CSS/@supports), das es Ihnen ermöglicht, native Funktionsdetektions-Tests zu implementieren und das Präfix oder neue Funktion in den `@supports` Block einzunisten.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Gerätetypen anpassen — etwa unterschiedliche Bildschirmbreiten, -ausrichtungen (Hoch- oder Querformat) oder -auflösungen. Ein Desktop-Layout sieht beispielsweise schlecht aus, wenn es auf einem mobilen Gerät angezeigt wird, daher ist es notwendig, ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitzustellen, und sicherzustellen, dass es korrekt mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) angewandt wird. Eine detaillierte Erläuterung solcher Praktiken finden Sie in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist auch ein großes Thema — beispielsweise benötigen mobile Geräte wahrscheinlich keine großen, schweren Bilder wie Desktop-Computer und haben wahrscheinlich auch geringere Internetgeschwindigkeiten und möglicherweise sogar teure Datenpläne, was Verschwendung von Bandbreite problematischer macht. Außerdem können verschiedene Geräte unterschiedliche Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme umgehen können, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [responsiven Bildtechniken](/de/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und den {{HTMLElement('img')}} Element [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen.

## Hilfe finden

Es gibt viele weitere Probleme, denen Sie mit HTML und CSS begegnen werden, und es ist unschätzbar wertvoll, zu wissen, wie man online Antworten darauf findet.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, gibt die Mehrheit der Menschen eine Suche in Suchmaschinen zu der Technologie ein, zu der sie Informationen suchen, plus den Begriff "mdn", z.B., "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z.B. die [`<video>`-Referenzseite](/de/docs/Web/HTML/Element/video).
- Weitere unterstützende Referenzmaterialien, z.B. unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, z.B. [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) liefert Unterstützunginformationen zusammen mit einigen nützlichen externen Ressourcen-Links. Beispielsweise siehe <https://caniuse.com/#search=video> (Sie müssen einfach das Feature in das Textfeld eingeben, nach dem Sie suchen).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen können und Mitentwickler ihre Lösungen teilen können, in vorherigen Beiträgen nachschlagen können und anderen Entwicklern helfen können. Es wird geraten, nach einer Antwort auf Ihre Frage zu suchen, bevor Sie eine neue Frage posten. Zum Beispiel suchten wir nach "disabling autofocus on HTML dialog" auf SO und fanden sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, in Ihrer bevorzugten Suchmaschine eine Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Nun sollten Sie mit den Hauptarten von HTML- und CSS-Problemen über mehrere Browser hinweg vertraut sein, die Ihnen in der Webentwicklung begegnen und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
