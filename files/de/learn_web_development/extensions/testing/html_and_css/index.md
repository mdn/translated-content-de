---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem die Grundlagen gelegt sind, werden wir uns nun speziell mit häufigen Problemen in HTML- und CSS-Code beschäftigen, die Sie bei der Entwicklung von plattformübergreifenden Websites begegnen werden, und welche Werkzeuge genutzt werden können, um Probleme zu verhindern oder auftretende Probleme zu beheben. Dazu gehören Code-Linting, Umgang mit CSS-Präfixen, Nutzung von Browser-Entwicklertools zur Fehlersuche, Verwendung von Polyfills zur Erweiterung der Browser-Unterstützung, Lösung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis
        der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des plattformübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-Plattformprobleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind und Entwickler oft nicht darauf achten, sicherzustellen, dass der Code gut gestaltet, effizient und semantisch ist, um die Funktionalitäten der Seite zu beschreiben. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Styling der Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Erzeugen von DOM-Elementen ist aufwendig). In anderen Fällen werden neue Funktionen nicht konsistent über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Styles für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig – eine Site, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder weil die Site möglicherweise langsam ist aufgrund aufwendiger Animationen.

Gehen wir nun voran und sehen uns an, wie wir plattformübergreifende Fehler reduzieren können, die durch HTML/CSS entstehen.

## Zuerst die allgemeinen Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie darin besteht, anfänglich in ein paar modernen Browsern auf Desktop/Mobilgeräte zu testen, um sicherzustellen, dass Ihr Code allgemein funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir sehr grundlegende Anleitungen zum Debugging von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, sicherzustellen, dass Ihr HTML- und CSS-Code korrekt formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem bei CSS und HTML tritt auf, wenn unterschiedliche CSS-Regeln miteinander in Konflikt geraten. Dies kann insbesondere dann problematisch sein, wenn Sie Code von Drittanbietern verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der von ihm verwendeten Klassennamen mit einem Ihnen bereits genutzten Namen für einen anderen Zweck kollidiert. Oder Sie könnten feststellen, dass das von einer Art Drittanbieter-API generierte HTML (zum Beispiel Anzeigebanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die verwendeten Werkzeuge zunächst recherchieren und Ihren Code darauf abstimmen. Es ist auch ratsam, CSS zu "namespacen", zum Beispiel, wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML umfasst die Validierung sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies leisten kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen sicherstellen, dass Ihre Eigenschaftsnamen richtig geschrieben sind, Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, Sie keine geschweiften Klammern vergessen haben und so weiter. Zu diesem Zweck stellt das W3C auch einen [CSS Validator](https://jigsaw.w3.org/css-validator/) bereit.

### Linter

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur auf Fehler hinweist, sondern auch Warnungen zu schlechten Praktiken in Ihrem CSS und anderen Punkten aufzeigen kann. Linter können in der Regel so angepasst werden, dass sie bei der Fehler-/Warnberichtserstattung strikter oder lockerer sind.

Es gibt viele Online-Linter-Anwendungen, wie zum Beispiel [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und sie zeigen alle Fehler mit Kreuzen an, die bei einer Mausbewegung eine Fehlermeldung anzeigen, die Ihnen das Problem erklärt. Dirty Markup ermöglicht es Ihnen auch, Korrekturen an Ihrem Markup mit der _Clean_ Schaltfläche vorzunehmen.

![Dirty Markup Anwendung zeigt die Nachricht "Unerwartetes Zeichen in nicht zitiertem Attribut" über folgendem falschem HTML-Markup an: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich möchten, ist ein Linter, der sich mit minimalem Aufwand in Ihren Standard-Workflow einfügt.

Viele Code-Editoren haben Linter-Plugins. Beispiele hierfür sind:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwickler-Tools der Browser

Die Entwickler-Tools, die in die meisten Browser integriert sind, bieten auch nützliche Werkzeuge zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler lassen sich in Entwicklertools nicht so einfach erkennen, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warn-Dreieck an. Wenn Sie über das Warn-Dreieck fahren, erhalten Sie eine beschreibende Fehlermeldung:

![Die Entwickler-Tools streichen ungültiges CSS durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklertools von Browsern haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Schauen wir uns nun einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie ältere Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert, aber noch nicht in allen verfügbar sind. Im Allgemeinen funktioniert die meiste Kern-HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Text-Styling) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen, neuere HTML-, CSS- und API-Funktionen verwenden zu wollen. MDN zeigt Daten zur Browser-Kompatibilität für jede dokumentierte Funktion an; siehe zum Beispiel die [Tabelle zur Browserunterstützung für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden und die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, welche Browser sie unterstützen und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) weiter unten.

### Fallback-Verhalten von HTML

Einige Probleme lassen sich einfach durch die natürliche Arbeitsweise von HTML/CSS lösen.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}} Elemente). Sie können immer noch über ihre Namen darauf zugreifen und sie mit CSS stylen – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen) haben natürliche Mechanismen für Fallbacks, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen erlaubt, das Video herunterzuladen, falls sogar der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest noch Zugriff auf das Video hat.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input) Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendete der Browser, wenn ein neuer Typ nicht unterstützt wurde, das Standard-`type="text"`. Input-Typen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, wo es wichtig ist, dem Benutzer eine einfache Möglichkeit zur Eingabe von Daten zu bieten. Plattformen stellen unterschiedliche grafische Benutzeroberflächen je nach Eingabetyp bereit, wie zum Beispiel ein Kalender-Widget zur Eingabe von Daten. Wenn ein Browser einen Eingabetyp nicht unterstützt, kann der Benutzer immer noch die erforderlichen Daten eingeben.

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

Die Ausgabe dieses Codes sieht wie folgt aus:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, sobald Sie beginnen, Informationen einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, sodass der Benutzer dennoch die korrekten Informationen eingeben kann.

### Fallback-Verhalten von CSS

CSS ist möglicherweise besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er diese vollständig, ohne sie anzuwenden oder einen Fehler auszugeben. Dies könnte frustrierend für Sie und Ihre Benutzer sein, wenn so ein Fehler in den Produktionscode rutscht, aber zumindest bedeutet es, dass die gesamte Site nicht aufgrund eines Fehlers zusammenbricht, und wenn clever genutzt, können Sie es zu Ihrem Vorteil verwenden.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestylt ist und einige Gestaltungsaktionen durch verschiedene CSS-Funktionen erfährt:

![Ein roter Pillenbutton mit abgerundeten Ecken, Schattierung und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub sehen als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die ihn stylen, aber die zwei, an denen wir am meisten interessiert sind, sind wie folgt:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die bei Hover die Deckkraft ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente eingesenkte {{cssxref("box-shadow")}} Schatten, um dem Button etwas Textur und Tiefe zu verleihen. Während mittlerweile voll unterstützt, waren RGB-Farben und Boxschatten nicht immer verfügbar; sie begannen in IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was in alten Browsern bedeutete, dass der Hintergrund einfach überhaupt nicht angezeigt würde, sodass der Text unlesbar wäre, was völlig unakzeptabel ist!

![Schwer lesbarer Pillenbutton mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um das zu lösen, haben wir eine zweite `background-color` Deklaration hinzugefügt, die lediglich eine Hex-Farbe angibt – dies wird in sehr alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color` Wert anwendet; wenn er zur zweiten `background-color` Deklaration kommt, wird er den anfänglichen Wert durch diesen Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, wird er die gesamte Deklaration einfach ignorieren und fortfahren.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Features wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element zu wählen, das Sie stylen möchten!

In einer kommagetrennten Liste von Selektoren können, wenn Sie einen Selektor nur falsch schreiben, möglicherweise keine Elemente ausgewählt werden. Wenn jedoch ein Selektor ungültig ist, wird die **ganze** Liste von Selektoren ignoriert, zusammen mit dem gesamten Style-Block. Aus diesem Grund sollten Sie nur einen `:-moz-` vorangestellten Pseudo-Klasse oder Pseudo-Element in einer [fehlertoleranten Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list), wie zum Beispiel `:where(::-moz-thumb)`, einschließen. Verwenden Sie keine `:-moz-` vorangestellten Pseudo-Klasse oder Pseudo-Elemente in einer durch Kommas getrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) fehlertoleranten Selektorliste, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden es hilfreich, das Element, das Sie zu stylen versuchen, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Baum Breadcrumb-Trail zu betrachten, den DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel können Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors sehen:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen würden, diesen Selektor zu verwenden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date
```

(Das `date` Formular-Eingabeelement ist kein direkter Nachkomme des `<form>`; Sie würden besser einen allgemeinen Nachkomme-Selektor statt eines Kind-Selektors verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set an Problemen entsteht durch CSS-Präfixe – diese sind ein Mechanismus, der ursprünglich verwendet wurde, damit Browseranbieter ihre eigene Version einer CSS- (oder JavaScript-) Funktion umsetzen können, während die Technologie sich in einem experimentellen Zustand befindet, damit sie damit spielen und es richtig hinbekommen können, ohne mit den Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie möglicherweise in altem Code antreffen, die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten nie in Produktiv-Websites verwendet werden – sie können ohne Vorwarnung geändert oder entfernt werden, können in alten Versionen, die sie benötigen, Leistungsprobleme verursachen und waren die Ursache für plattformübergreifende Probleme. Dies ist besonders ein Problem, zum Beispiel, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was impliziert, dass die Site in anderen Browsern nicht funktioniert. Da dies tatsächlich so häufig vorkam, haben andere Browserhersteller `-webkit-` vorangestellte Versionen von mehreren CSS-Eigenschaften implementiert. Während Browser immer noch einige vorangestellte Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden experimentelle Funktionen jetzt hinter Flags gestellt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Features ist. Sie können nachschauen, welche Browser Präfixe auf MDN-Referenzseiten oder Websites wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie unsicher sind, können Sie auch durch Tests direkt in Browsern herausfinden. Fügen Sie die Standard- nicht-präfixierte Version nach der präfixierten Stil-Deklaration hinzu; sie wird ignoriert, wenn nicht unterstützt und verwendet, wenn unterstützt.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Site, die eine prominente Überschrift oder ein anderes blockniveau Element hat.
2. Rechts-/Cmd-Klick auf das betreffende Element und wählen Sie Untersuchen/Element untersuchen (oder wie auch immer die Option in Ihrem Browser heißt) – dies sollte die Entwicklertools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element zu selektieren. Zum Beispiel hat diese Seite auf MDN zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element festzulegen; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Sobald Sie den Eigenschaftsnamen-Repräsentation nach dem zweiten Punkt zu tippen beginnen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen im {{Glossary("camel_case", "Lower Camel Case")}} anstelle von {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und zu dem passen, was Sie bisher geschrieben haben. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Features einschließen müssen, testen Sie die Unterstützung der Funktion mit [`@supports`](/de/docs/Web/CSS/@supports), welches Ihnen ermöglicht, native Funktionalitätstests zu implementieren, und die präfixierte oder neue Funktion innerhalb des `@supports` Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hochformat oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel schrecklich aus, wenn es auf einem mobilen Gerät angesehen wird, also müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit einem [viewport](/de/docs/Web/HTML/Viewport_meta_tag) angewendet wird. Eine detaillierte Darstellung solcher Praktiken finden Sie in unserem [Leitfaden zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist auch ein großes Thema – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große schwere Bilder als Desktop-Computer und haben häufiger langsamere Internetverbindungen und möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Vielzahl unterschiedlicher Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme umgehen können, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [responsiven Bildtechniken](/de/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute des {{HTMLElement('img')}} Elements.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, was ein Wissen darüber, wie man online Antworten findet, unschätzbar macht.

Unter den besten Quellen für Supportinformationen sind das Mozilla Developer Network (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Menschen über eine Suchmaschine nach der Technologie, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Informationen zur Browser-Kompatibilität für clientseitige Webtechnologien, z.B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Element/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel, [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) liefert Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur das Feature, das Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forenseite, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, vorherige Posts durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel suchten wir nach "deaktivieren der Autofokussierung auf HTML-Dialog" auf SO und kamen sehr schnell zu [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, Ihren bevorzugten Suchmaschinenanbieter zu verwenden, um nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Nun sollten Sie mit den hauptsächlichen Arten von plattformübergreifenden HTML- und CSS-Problemen, die Ihnen bei der Webentwicklung begegnen werden, vertraut sein, und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
