---
title: Behandlung häufiger HTML- und CSS-Probleme
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nun werden wir uns speziell mit den häufigen plattformübergreifenden Problemen befassen, auf die Sie in HTML- und CSS-Code stoßen, und welche Werkzeuge genutzt werden können, um Probleme zu verhindern oder zu beheben. Dies umfasst das Linten von Code, die Behandlung von CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Problemlösung, das Verwenden von Polyfills, um Support in Browsern hinzuzufügen, das Angehen von Problemen im responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der
        hohen Ebene
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundlagen des plattformübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-Probleme zwischen verschiedenen Browsern zu diagnostizieren und geeignete Werkzeuge und Techniken zur Behebung zu nutzen.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen in der Tatsache, dass beide Sprachen relativ einfach sind, und Entwickler sie oft nicht ernst nehmen, was das Sicherstellen betrifft, dass der Code gut gestaltet, effizient und semantisch korrekt die Zwecke der Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Design der Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Generieren von DOM-Elementen ist teuer). In anderen Fällen sind neue Funktionen nicht konsistent in allen Browsern unterstützt, weshalb einige Funktionen und Stile für einige Benutzer nicht funktionieren. Auch Probleme mit dem responsiven Design sind häufig — eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät ein katastrophales Erlebnis bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite möglicherweise langsam ist aufgrund teurer Animationen.

Lassen Sie uns fortfahren und sehen, wie wir plattformübergreifende Fehler verringern können, die aus HTML/CSS resultieren.

## Zuerst das Allgemeine: Allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie zu Beginn darin besteht, in ein paar modernen Browsern auf Desktop/Mobilgeräte zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf plattformübergreifende Probleme konzentrieren.

In unseren Artikeln [HTML-Debugging](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel auf jeden Fall durcharbeiten, bevor Sie fortfahren.

Grundsätzlich geht es darum zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn unterschiedliche CSS-Regeln anfangen, miteinander in Konflikt zu geraten. Dies kann besonders problematisch werden, wenn Sie Drittanbieter-Code benutzen. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Tools, die Sie verwenden, vorher recherchieren und Ihren Code daraufhin ausrichten. Es lohnt sich auch, CSS zu "namespacen", zum Beispiel, wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann mit den Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, so dass Konflikte weniger wahrscheinlich sind. Beispiel: `.audio-player ul a`.

### Validierung

Für HTML bedeutet Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, Sie einen Doctype verwenden und Tags für deren korrekte Zwecke verwenden. Eine gute Strategie besteht darin, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), bei dem Sie Ihren Code angeben können und eine Liste von Fehlern zurückerhalten:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, Sie keine geschweiften Klammern fehlen lassen und so weiter. Auch hierfür hat das W3C einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) zur Verfügung gestellt.

### Linters

Eine weitere gute Option ist die Verwendung eines sogenannten Linter-Programms, das nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte melden kann. Linter können im Allgemeinen angepasst werden, um strenger oder entspannter in ihren Fehler-/Warnmeldungen zu sein.

Es gibt viele Online-Linter-Programme, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es werden alle Fehler mit Kreuzchen markiert, die dann gehighlighted werden können, um eine Fehlermeldung zu erhalten, die Ihnen mitteilt, wo das Problem liegt. Dirty Markup ermöglicht es auch, Änderungen an Ihrem Markup mit der _Clean_-Schaltfläche vorzunehmen.

![Dirty Markup-Anwendung zeigt die Meldung "Unerwartetes Zeichen in nicht zitiertem Attribut" über dem folgenden falschen HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals kopieren und auf eine Webseite einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der innerhalb Ihres normalen Workflows mit minimalem Aufwand passt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++-Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code-Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklertools

Die in den meisten Browsern integrierten Entwicklertools bieten ebenfalls nützliche Werkzeuge zur Fehlerbehebung, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in Entwicklertools nicht so leicht sichtbar, da der Browser versuchen wird, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt der CSS-Inspektor in Firefox CSS-Deklarationen, die nicht angewendet werden, durchgestrichen an, mit einem Warn-Dreieck. Wenn Sie das Warn-Dreieck hoveren, erhalten Sie eine beschreibende Fehlermeldung:

![Die Entwicklertools streichen ungültiges CSS durch und fügen ein überhoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Schauen wir uns nun einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir uns ansehen werden, sind mangelnde Unterstützung moderner Funktionen und Layoutprobleme.

### Browser unterstützen keine modernen Funktionen

Dies ist ein häufiges Problem, besonders wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktioniert die meiste Kern-HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstyling) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen möchten, neuere HTML-, CSS- und APIs zu verwenden. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; zum Beispiel siehe die [Browser-Support-Tabelle für die `:has()`-Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach die natürliche Funktionsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können dennoch durch ihre Namen darauf zugreifen und sie mit CSS stylen — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie einfach wie jedes andere Element, einschließlich der Festlegung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML-[`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen daneben) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalt zwischen die öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser werden das äußere Element effektiv ignorieren und den verschachtelten Inhalt ausführen.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls sogar der HTML-Video-Player nicht funktioniert, so dass der Benutzer zumindest auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen für die Eingabe spezifischer Informationen in Formulare eingeführt wurden, wie Zeiten, Daten, Farben, Zahlen usw., verwendeten Browser den Standard von `type="text"`, wenn ein Browser die neue Funktion nicht unterstützte. Eingabetypen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, bei denen es sehr wichtig ist, dem Benutzer eine schmerzfreie Möglichkeit zur Eingabe von Daten zu bieten. Plattformen bieten je nach Eingabetyp verschiedene UI-Widgets, wie zum Beispiel ein Kalender-Widget für die Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Eingaben für Datum und Uhrzeit:

```html live-sample___form-test
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

```css hidden live-sample___form-test
div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

input {
  flex: 2;
}

label {
  flex: 1;
  text-align: right;
}

body {
  width: 400px;
  margin: 0 auto;
}
```

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel betrachten, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser wechseln die Eingaben einfach zu normalen Texteingaben, was bedeutet, dass der Benutzer immer noch die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist in Bezug auf Fallbacks möglicherweise besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, wird sie einfach komplett übersprungen, ohne sie anzuwenden oder einen Fehler auszulösen. Dies könnte frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode schlüpft, aber zumindest bedeutet es, dass die gesamte Website nicht wegen eines Fehlers abstürzt, und wenn es clever eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — ein einfaches Box-Design mit CSS, das einige Styles durch verschiedene CSS-Funktionen bereitgestellt bekommt:

```html hidden live-sample___blingy-button
<button>Press me</button>
```

```css hidden live-sample___blingy-button
html {
  font-family: sans-serif;
  height: 100%;
}

button {
  width: 150px;
  margin: auto;
  line-height: 2;
  font-size: 1.1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 20px / 15px;
  border: none;
  cursor: pointer;

  background-color: red;
  background-color: rgb(255 0 0 / 90%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}

body {
  height: inherit;
  display: flex;
  align-items: center;
}
```

{{EmbedLiveSample("blingy-button", "100%", 60)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Die Schaltfläche hat eine Reihe von Deklarationen, aber die, die uns am meisten interessiert, sind:

```css
button {
  /* … */

  background-color: red;
  background-color: rgb(255 0 0 / 90%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}
```

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}}-Farbe an, die sich bei Hover ändert, um dem Benutzer einen Hinweis zu geben, dass die Schaltfläche interaktiv ist, und einige halbtransparente eingezogene {{cssxref("box-shadow")}}-Schattierungen, um der Schaltfläche etwas Textur und Tiefe zu verleihen. Während jetzt vollständig unterstützt, waren RGB-Farben und Box-Schatten nicht immer verfügbar; beginnend mit IE9. Browser, die RGB-Farben nicht unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt wurde, sodass der Text unleserlich war, was überhaupt nicht gut ist!

![Schwer zu sehende Pillen-Schaltfläche mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach das `red` Farbschlüsselwort angibt — dies wird in wirklich alten Browsern weit zurück unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration kommt, wird er den Anfangswert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Dasselbe gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektoren-Unterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element zu selektieren, das Sie stylen möchten!

In einer kommagetrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, könnte er kein Element treffen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste der Selektoren ignoriert, ebenso wie der gesamte Style-Block. Aus diesem Grund sollten Sie nur ein `:-moz-`-Präfix-Pseudo-Klasse oder -Element in einer [gelassenen Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einschließen. Fügen Sie keine `:-moz-`-Präfix-Pseudo-Klasse oder -Element in einer kommagetrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) gelassenen Selektorenliste hinzu, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie zu stylen versuchen, mit Ihren Browser-Entwicklertools zu inspizieren und dann die Baumspur der DOM-Elemente zu betrachten, die DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn macht.

Zum Beispiel bekommen Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Die Spur von Elementen ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen würden, diesen Selektor zu verwenden, sehen Sie, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formular-Eingabefeld ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahren-Selektor statt eines Kind-Selektors zu verwenden).

### Behandlung von CSS-Präfixen

Ein weiteres Set von Problemen kommt mit CSS-Präfixen — dies sind Mechanismen, die ursprünglich verwendet wurden, um Browser-Anbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-)Funktion zu implementieren, während die Technologie sich in einem experimentellen Zustand befindet, damit sie damit experimentieren und sie ohne Konflikte mit Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen richtig hinbekommen können.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen könnten, der sicher entfernt werden kann, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den originalen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten niemals in Produktions-Websites verwendet werden — sie können ohne Vorwarnung geändert oder entfernt werden, können Leistungsprobleme in alten Browserversionen verursachen, die sie erfordern, und waren Ursache plattformübergreifender Probleme. Dies ist besonders ein Problem, beispielsweise wenn Entwickler beschließen, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Site in anderen Browser nicht funktionieren wird. Dies geschah tatsächlich so oft, dass andere Browseranbieter `-webkit-`-präfixierte Versionen von mehreren CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden experimentelle Funktionen jetzt hinter Flags gesetzt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können nachschlagen, welche Browser Präfixe auf MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie unsicher sind, können Sie dies auch herausfinden, indem Sie direkt in Browsern testen. Fügen Sie die standardmäßige unpräfixierte Version nach der präfixierten Deklaration hinzu; es wird ignoriert, wenn es nicht unterstützt wird und verwendet, wenn es unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Site, die eine auffällige Überschrift oder ein anderes Block-Element hat.
2. Rechtsklicken Sie (Cmd + Klicken auf einem Mac) auf das fragliche Element und wählen Sie Inspect/Inspect element (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element zu selektieren. Zum Beispiel hat zu diesem Zeitpunkt die Logo-Seite von MDN eine ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, die Sie interessiert, auf diesem Element festzulegen; dies können Sie mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, zum Beispiel, versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie beginnen, die Darstellungsdarstellung nach dem zweiten Punkt zu schreiben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}}, nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und dem, was Sie bisher geschrieben haben, entsprechen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbinden müssen, testen Sie den Funktionssupport mit [`@supports`](/de/docs/Web/CSS/@supports), das Ihnen ermöglicht, native Feature-Erkennungstests zu implementieren und das präfixierte oder neue Feature innerhalb des `@supports` Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich verschiedenen Geräte-Formfaktoren anpassen — zum Beispiel verschiedene Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout zum Beispiel sieht auf einem mobilen Gerät furchtbar aus, daher müssen Sie ein geeignetes mobiles Layout unter Verwendung von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt unter Verwendung des [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Sie finden detaillierte Informationen zu solchen Praktiken in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ein großes Thema — zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große, schwere Bilder als Desktop-Computer, und es ist wahrscheinlicher, dass sie langsamere Internetverbindungen und möglicherweise sogar teure Datenpläne haben, die verschwendete Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Reihe unterschiedlicher Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme umgehen können, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und die {{HTMLElement('img')}}-Element-Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit HTML und CSS möglicherweise begegnen werden, was das Wissen, wie man online Antworten findet, unverzichtbar macht.

Zu den besten Quellen für Hilfsinformationen gehören das Mozilla Developer Network (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Leute eine Suchmaschinen-Suche der Technologie, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel, "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Support-Informationen für clientseitige Webtechnologien, z. B. die [`<video>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, z. B. [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit ein paar nützlichen Links zu externen Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und Ihre Lösungen mit anderen Entwicklern teilen können, vorherige Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell die [Deaktivieren der showModal-Autofokussierung mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, Ihre bevorzugte Suchmaschine zu nutzen, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme wie Sie gehabt haben.

## Zusammenfassung

Nun sollten Sie mit den Hauptarten von plattformübergreifenden HTML- und CSS-Problemen vertraut sein, auf die Sie bei der Webentwicklung treffen werden, und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
