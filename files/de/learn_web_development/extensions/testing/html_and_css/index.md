---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem der Rahmen festgelegt ist, betrachten wir nun speziell die häufigen plattformübergreifenden Probleme, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Werkzeuge verwendet werden können, um deren Auftreten zu verhindern oder bereits entstandene Probleme zu beheben. Dies umfasst das Linten von Code, den Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklerwerkzeugen zur Problemverfolgung, den Einsatz von Polyfills zur Erweiterung der Unterstützung in Browsern, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des plattformübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, gängige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu deren Behebung zu nutzen.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Schwierigkeiten mit HTML und CSS liegen in der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler oft nicht darauf achten, dass der Code gut gestaltet, effizient und semantisch die Zwecke der Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Generieren von DOM-Elementen ist teuer). In anderen Fällen werden neuartige Funktionen nicht konsistent über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Stile für manche Nutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine furchtbare Erfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder die Seite vielleicht wegen aufwendiger Animationen langsam ist.

Lassen Sie uns nun erkunden, wie wir plattformübergreifende Fehler reduzieren können, die aus HTML/CSS resultieren.

## Zuerst das Wichtigste: Allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie darin besteht, zunächst in einigen modernen Browsern auf Desktop/Handys zu testen, um sicherzustellen, dass Ihr Code allgemein funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige grundlegende Anleitungen zum Debuggen von HTML/CSS gegeben – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn unterschiedliche CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, den es verwendet, mit einem Namen kollidiert, den Sie bereits zu einem anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits zu einem anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die verwendeten Werkzeuge gründlich recherchieren und Ihren Code um diese herum entwerfen. Es ist auch wertvoll, CSS zu „namespace“-en, d.h. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine unverwechselbare Klasse hat und beginnen Sie die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, um Konflikte weniger wahrscheinlich zu machen. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML bedeutet Validierung, dass alle Ihre Tags ordnungsgemäß geschlossen und geschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren korrekten Zweck verwendet werden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), mit dem Sie auf Ihren Code verweisen können und eine Liste von Fehlern zurückerhalten:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben und für die Eigenschaften, auf die sie angewendet werden, gültig sind, ob keine geschweiften Klammern fehlen usw. Auch dafür steht ein [CSS Validator](https://jigsaw.w3.org/css-validator/) des W3C zur Verfügung.

### Linters

Eine andere gute Wahl ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Aspekte geben kann. Linters können in der Regel so konfiguriert werden, dass sie strenger oder lockerer in ihrem Fehler-/Warnbericht sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben es Ihnen, Ihren Code in ein Fenster einzufügen, und er wird Fehler mit Kreuzen kennzeichnen, die dann gehortet werden können, um eine Fehlermeldung zu erhalten, die Ihnen das Problem mitteilt. Dirty Markup ermöglicht es Ihnen ebenfalls, mit der _Clean_-Schaltfläche Korrekturen an Ihrem Markup vorzunehmen.

![Dirty Markup-Anwendung, die die Nachricht "Unerwartetes Zeichen im nicht zitierten Attribut" über dem folgenden inkorrekten HTML-Markup anzeigt: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich nahtlos in Ihren gewohnten Arbeitsablauf einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklertools

Die in den meisten Browsern integrierten Entwickler-Tools verfügen auch über nützliche Werkzeuge zur Fehlerjagd, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwickler-Tools nicht so leicht angezeigt, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

In Firefox zum Beispiel zeigt der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warn-Dreieck an. Das Hovering über das Warn-Dreieck zeigt eine beschreibende Fehlermeldung an:

![Die Entwickler-Werkzeuge streichen ungültiges CSS durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Nun lassen Sie uns einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme betrachten. Die Hauptbereiche, die wir untersuchen, sind mangelnde Unterstützung moderner Funktionen und Layoutprobleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktioniert der Kern der HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Text-Styling) über alle Browser hinweg, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und APIs nutzen möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; sehen Sie zum Beispiel die [Browser-Support-Tabelle für die `:has()`-Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man die natürliche Funktionsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (im Wesentlichen Inline-Elemente ohne semantischen Wert, ähnlich {{htmlelement("span")}}-Elementen). Sie können dennoch auf sie durch ihre Namen referenzieren und sie mit CSS stylen – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie so, wie Sie jedes andere Element stylen würden, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (neben anderen Funktionen) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, mit dem Sie das Video herunterladen können, falls der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest das Video weiterhin ansehen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formularen einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., wenn ein Browser die neue Funktion nicht unterstützte, verwendete der Browser den Standard von `type="text"`. Eingabetypen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig ist, dem Benutzer eine schmerzfreie Möglichkeit zur Eingabe von Daten zu bieten. Plattformen bieten je nach Eingabetyp verschiedene Benutzeroberflächen-Widgets an, wie zum Beispiel ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer die erforderlichen Daten dennoch eingeben.

Das folgende Beispiel zeigt Datum- und Zeiteingaben:

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

Sie können den **Wiedergabe**-Button drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie sich das Beispiel ansehen, werden Sie die Benutzeroberflächenfunktionen in Aktion sehen, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden tastaturspezifische Keypads angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben zurückgesetzt, sodass der Benutzer die richtigen Informationen weiterhin eingeben kann.

### CSS-Fallback-Verhalten

CSS ist in Hinsicht auf Fallbacks sogar besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler auszugeben. Dies könnte für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler bis in den Produktivcode durchrutscht, aber zumindest bedeutet es, dass die gesamte Seite nicht wegen eines Fehlers zusammenbricht, und wenn es klug eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Sehen wir uns ein Beispiel an – eine einfache mit CSS gestylte Box, die einige Stile durch verschiedene CSS-Funktionen hat:

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

Sie können den **Wiedergabe**-Button drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Der Button hat eine Anzahl von auf ihn angewendeten Deklarationen, aber die, an denen wir am meisten interessiert sind, sind die folgenden:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}} an, die die Opazität beim Hover ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, sowie einige halbtransparente eingelegte {{cssxref("box-shadow")}} Schatten, um dem Button etwas Textur und Tiefe zu verleihen. Während sie jetzt vollständig unterstützt werden, sind RGB-Farben und Box-Schatten nicht immer unterstützt worden, beginnend mit IE9. Browser, die RGB-Farben nicht unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund nicht angezeigt werden würde, sodass der Text nicht lesbar wäre, was absolut nicht akzeptabel ist!

![Schwer lesbarer Pillenbutton mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die nur das `red` Farb-Schlüsselwort angibt – das wird schon weit zurück in sehr alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er den anfänglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) und [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorsupport

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element zu selektieren, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selektor inkorrekt schreiben, wird es möglicherweise kein Element entsprechen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-`-präfixierte Pseudoklasse oder ein Pseudo-Element in einer [nachsichtigen Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list), wie zum Beispiel `:where(::-moz-thumb)`, einschließen. Schließen Sie eine `:-moz-`-präfixierte Pseudoklasse oder ein Pseudo-Element nicht in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) oder [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) nachsichtigen Selektorliste ein, da alle anderen Browser als Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) und [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann den DOM-Baum-Breadcrumb-Pfad zu betrachten, den DOM-Inspektoren tendenziell bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklerwerkzeugen diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Element-Breadcrumb-Pfad ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen würden, diesen Selektor zu verwenden, würden Sie sehen können, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formulareingabefeld ist kein direktes Kind des `<form>`; es wäre besser, einen allgemeinen Nachfahrselektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen ergibt sich aus CSS-Präfixen – dies ist ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu erlauben, ihre eigene Version einer CSS- (oder JavaScript-)Funktion zu implementieren, während die Technologie sich in einem experimentellen Zustand befindet, sodass sie damit spielen und es richtig hinbekommen können, ohne mit den Implementierungen anderer Browser in Konflikt zu geraten, oder den endgültigen unpräfixen Implementierungen.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, welches von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, welches in den ursprünglichen Versionen von Opera verwendet wurde.

Geprefixte Funktionen sollten niemals in Produktionswebsites verwendet werden – sie können sich ohne Vorwarnung ändern oder entfernt werden, können in alten Browserversionen, die sie erfordern, Leistungsprobleme verursachen und waren Ursache für plattformübergreifende Probleme. Dies ist besonders ein Problem, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was bedeutet, dass die Website in anderen Browsern nicht funktioniert. Dies geschah tatsächlich so oft, dass andere Browserhersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden nun experimentelle Funktionen hinter Flags verborgen, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können herausfinden, welche Browser Präfixe erfordern, indem Sie die MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) aufrufen. Wenn Sie sich nicht sicher sind, können Sie dies auch durch Tests direkt in Browsern herausfinden. Schließen Sie die standardisierte unpräfixte Version nach der Präfix-Stildeklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine auffällige Überschrift oder ein anderes Block-Level-Element hat.
2. Mit Rechts-/Cmd+Klick auf das betreffende Element und wählen Sie Inspect/Element inspizieren (oder was auch immer die Option in Ihrem Browser ist) – dies sollte die Entwicklerwerkzeuge in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einem Feature, mit dem Sie dieses Element auswählen können. Zum Beispiel, zum Zeitpunkt des Schreibens, hat diese Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, die Sie interessiert, auf diesem Element festzulegen; dies können Sie mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, probieren Sie zum Beispiel, diesen Code in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie beginnen, den Eigenschaftsnamen der Darstellung nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript, CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}}, nicht {{Glossary("kebab_case", "kebab-case")}} geschrieben sind), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und dem, was Sie bisher geschrieben haben, entsprechen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie auf Feature-Support mit [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports), welches es Ihnen erlaubt, native Feature-Erkennungstests zu implementieren und das Präfix oder die neue Funktion innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen – zum Beispiel verschiedene Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout zum Beispiel wird auf einem mobilen Gerät furchtbar aussehen, also müssen Sie mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) ein geeignetes mobiles Layout bereitstellen und sicherstellen, dass es mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) korrekt angewendet wird. Sie können eine detaillierte Darstellung solcher Praktiken in [unserem Leitfaden für responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) finden.

Auflösung ist ebenfalls ein großes Thema – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große und schwere Bilder als Desktop-Computer und haben wahrscheinlich eher langsamere Internetverbindungen und möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Reihe von verschiedenen Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und den [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)- und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attributen des {{HTMLElement('img')}}-Elements.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, daher ist es unschätzbar, zu wissen, wie man online nach Antworten sucht.

Zu den besten Quellen für Support-Informationen gehören das Mozilla Developer Network (hier befinden Sie sich gerade!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Menschen eine Suchmaschinen-Suche nach der Technologie durch, über die sie Informationen suchen möchten, plus den Begriff "mdn", zum Beispiel, "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z.B. die [`<video>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, nach der Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen und Entwicklerkollegen ihre Lösungen teilen, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Ihnen wird empfohlen, zu suchen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus im HTML-Dialog deaktivieren" gesucht und sehr schnell [Autofokus bei Dialog anzeigen mit HTML-Attributen deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu nutzen, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von plattformübergreifenden HTML- und CSS-Problemen vertraut sein, die Sie in der Webentwicklung erwarten, und wissen, wie man sie behebt.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
