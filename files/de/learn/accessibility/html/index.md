---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die korrekten Hypertext Markup Language-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis davon,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit den Funktionen von HTML zu erlangen, die Barrierefreiheitsvorteile haben, und wie man diese angemessen in Ihren Webdokumenten verwendet.
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen, etc. — werden Sie immer wieder ein gemeinsames Thema sehen: Die Bedeutung der Verwendung von semantischem HTML (manchmal auch als POSH, oder Plain Old Semantic HTML, bezeichnet). Das bedeutet, soweit wie möglich die richtigen HTML-Elemente für ihren beabsichtigten Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element dazu bringen, sich so zu verhalten, wie Sie es wollen. Zum Beispiel könnte ein Steuerknopf, um ein Video auf Ihrer Webseite abzuspielen, so ausgezeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie später detaillierter sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

Nicht nur, dass HTML-`<button>`s von Haus aus eine passende Gestaltung haben (die Sie wahrscheinlich anpassen möchten), haben sie auch eingebaute Tastatur-Barrierefreiheit — Benutzer können zwischen Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML braucht nicht länger zum Schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Beginn Ihres Projekts an konsequent anwenden. Noch besser, semantisches Markup hat neben der Barrierefreiheit weitere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionalitäten kostenlos, außerdem ist es vermutlich einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist vermutlich leichter in der Dateigröße als nicht-semantischer "Spaghetti"-Code und einfacher reaktionsfähig zu machen.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links, etc. mehr Bedeutung als Schlüsselwörtern, die in nicht-semantischen `<div>`s, etc. enthalten sind, so dass Ihre Dokumente leichter von Kunden gefunden werden.

Schauen wir uns das Thema barrierefreies HTML im Detail an.

> [!NOTE]
> Es ist sinnvoll, einen Screenreader auf Ihrem lokalen Computer einzurichten, damit Sie einige der hier gezeigten Beispiele testen können. Weitere Details finden Sie in unserem [Leitfaden für Screenreader](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers).

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Barrierefreiheit stark beeinträchtigt wird, wenn es nicht richtig behandelt wird.

Draußen im Web ist es die Realität, dass Leute einige sehr seltsame Dinge mit HTML-Markup machen. Einige Missbräuche von HTML sind auf alte Praktiken zurückzuführen, die nicht vollständig vergessen wurden, und einige sind einfach nur Unwissenheit. Wie auch immer der Fall sein mag, Sie sollten diesen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu entfernen — Ihre Seiten könnten von einer Art serverseitigem Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder Sie könnten Drittanbieterinhalte auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird zur Sache der Barrierefreiheit beitragen.

### Textinhalte

Eine der besten Barrierefreiheitshilfen, die ein Screenreader-Benutzer haben kann, ist eine hervorragende Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein hervorragendes semantisches Beispiel könnte etwa folgendermaßen aussehen:

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content, which I think is more interesting
  than the last one.
</p>
```

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich hierdurch zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift aus, während Sie durch den Inhalt voranschreiten, und benachrichtigt Sie darüber, was eine Überschrift ist, was ein Absatz ist, usw.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo fortfahren können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Screenreadern eine Liste aller Überschriften anzeigen lassen, sodass Sie sie als praktische Tabelle für bestimmte Inhalte verwenden können.

Manchmal schreiben Leute Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur für Styling-Zwecke ein, etwa wie folgt:

```html example-bad
<span style="font-size: 3em">My heading</span> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<span style="font-size: 2.5em">My subheading</span>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<span style="font-size: 2.5em">My 2nd subheading</span>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, um es als Wegweiser zu verwenden, sodass Sie keine nützliche Tabelle abrufen können, und wird die gesamte Seite als einen großen Block betrachten und sie in einem Durchgang, alles auf einmal, vorlesen.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, zum Beispiel, da es keine Elemente gibt, die als Selektoren verwendet werden können.

#### Verwendung einer klaren Sprache

Die Sprache, die Sie verwenden, kann auch die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder umgangssprachlichen Ausdrücke enthält. Das kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute, sondern auch Lesern, für die der Text nicht in ihrer Muttersprache verfasst ist, jüngeren Menschen… alle, in der Tat! Abgesehen davon sollten Sie vermeiden, eine Sprache und Zeichen zu verwenden, die nicht klar vom Screenreader vorgelesen werden. Zum Beispiel:

- Vermeiden Sie, wenn möglich, Bindestriche. Statt "5–7" zu schreiben, schreiben Sie "5 bis 7".
- Erweitern Sie Abkürzungen – anstatt "Jan" zu schreiben, schreiben Sie "Januar".
- Erweitern Sie Akronyme, zumindest einmal oder zweimal, und verwenden Sie dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Tagen verwendeten Leute HTML-Tabellen zur Erstellung von Seitenlayouts — indem sie verschiedene Tabellenzellen nutzten, um die Kopfzeile, die Fußzeile, die Seitenleiste, die Hauptinhalts-Spalte, usw. zu enthalten. Das ist keine gute Idee, weil ein Screenreader wahrscheinlich verwirrende Ausgaben gibt, besonders wenn das Layout komplex ist und viele verschachtelte Tabellen hat.

Versuchen Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) aus, das etwa so aussieht:

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <label
          >Search
          <input
            type="search"
            name="q"
            placeholder="Search query"
            width="300" />
        </label>
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird dieser Ihnen wahrscheinlich mitteilen, dass es eine Tabelle zu betrachten gibt (obwohl einige Screenreader den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Sie müssen dann wahrscheinlich (abhängig von dem verwendeten Screenreader) in die Tabelle als Objekt gehen und ihre Funktionen separat betrachten, dann aus der Tabelle herausgehen, um den Inhalt weiter zu navigieren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie ergaben Sinn, als der CSS-Support in Browsern nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Screenreader-Benutzer. Darüber hinaus erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und wartungsintensiver macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Layout Beispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das etwa so aussehen könnte:

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht länger die Inhaltswiedergabe beeinträchtigt oder Verwirrung verursacht. Es ist auch viel schlanker und kleiner in Bezug auf die Codegröße, was bedeutet, dass der Code einfacher zu warten ist und weniger Bandbreite für den Benutzer erfordert, was besonders für solche von Nutzen ist, die langsame Verbindungen haben.

Ein weiterer Aspekt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie im obigen Beispiel gesehen (siehe [Content-Gliederung](/de/docs/Web/HTML/Element#content_sectioning)). Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Abschnitts-Elemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), die Fußzeile ({{htmlelement("footer")}}), wiederholte Inhalts-Elemente ({{htmlelement("article")}}) usw. zu kennzeichnen. Diese bieten zusätzliche Semantik für Screenreader (und andere Werkzeuge), um den Benutzern zusätzliche Hinweise über die Inhalte zu geben, die sie durchgehen (sehen Sie sich [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) an, um eine Vorstellung davon zu bekommen, wie Screenreader-Support aussieht).

> [!NOTE]
> Zusätzlich zu guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn machen — Sie können es immer später mit CSS platzieren, wo Sie es möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit das, was Screenreader-Benutzer vorgelesen bekommen, Sinn ergibt.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreiheitsaspekte, die bei der Erstellung solcher Steuerelemente beachtet werden müssen. Spätere Artikel zu WAI-ARIA und Multimedia werden andere Aspekte der Zugänglichkeit von Benutzeroberflächen betrachten.

Ein wesentlicher Aspekt der Barrierefreiheit bei UI-Steuerelementen ist, dass Browser es standardmäßig ermöglichen, diese per Tastatur zu steuern. Das können Sie mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) ausprobieren. Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Tastenanschlägen sollten Sie sehen, wie der Tabfokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (dieser unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element gerade fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!" und "And me!" darin. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tabfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwicklertools ein Overlay aktivieren, das die Seiten-Tabreihenfolge anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabetaste/die Returntaste drücken, um einen fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht anzeigen zu lassen), oder beginnen Sie zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel können die Optionen des {{htmlelement("select")}}-Elements mit den Pfeiltasten auf- und abwärts angezeigt und durchblättert werden.

> [!NOTE]
> Verschiedene Browser können unterschiedliche Tastatursteueroptionen verfügbar haben. Weitere Informationen finden Sie unter [Nutzung der nativen Tastaturzugänglichkeit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Sie erhalten dieses Verhalten im Grunde kostenlos, einfach durch die Verwendung der entsprechenden Elemente, z. B.

```html example-good
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Another link, to the
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Labels angemessen verwendet werden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Es kommt jedoch auch hier vor, dass Leute manchmal seltsame Dinge mit HTML machen. Sie sehen beispielsweise manchmal Schaltflächen, die mit {{htmlelement("div")}}s ausgezeichnet werden, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung solcher Codes ist nicht ratsam — Sie verlieren sofort die native Barrierefreiheit über die Tasten, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten auch nicht die Standard-CSS-Styling, die Schaltflächen erhalten. In dem seltenen bis nicht vorhandenen Fall, in dem Sie ein Nicht-Schaltflächenelement für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhalten, einschließlich Tastatur- und Mausklickunterstützung.

#### Wiederherstellung der Tastaturzugänglichkeit

Das Hinzufügen solcher Vorteile erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert werden zu können (einschließlich über Tab), indem wir jedem die Eigenschaft `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und damit interagieren können:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
<div data-message="This is from the second button" tabindex="0" role="button">
  Click me too!
</div>
<div data-message="This is from the third button" tabindex="0" role="button">
  And me!
</div>
```

Im Wesentlichen ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hauptsächlich dafür gedacht, tabbare Elemente mit einer benutzerdefinierten Tab-Reihenfolge zu versehen (in positiver Zahlenreihenfolge spezifiziert), anstatt sie einfach in ihrer Standard-Quell-Reihenfolge zu durchlaufen. Dies ist fast immer eine schlechte Idee, da es große Verwirrung stiften kann. Verwenden Sie es nur, wenn es wirklich notwendig ist, zum Beispiel wenn das Layout Dinge in eine sehr andere visuelle Reihenfolge als den Quellcode zeigt und Sie die Dinge logischer funktionieren lassen möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabbar sind, tabbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dadurch können normalerweise nicht tabbare Elemente programmatisch den Fokus erhalten, z. B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung uns erlaubt, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Um dies zu tun, mussten wir das folgende Stück JavaScript-Zauberei hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die `key`-Eigenschaft des Event-Objekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche mit `document.activeElement.click()` gespeichert ist. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es sind sicher noch andere Probleme damit. **Besser, das richtige Element von Anfang an für die richtige Aufgabe zu verwenden.**

#### Aussagekräftige Textbezeichnungen

Textbezeichnungen für UI-Steuerelemente sind für alle Benutzer sehr nützlich, aber besonders wichtig für Benutzer mit Behinderungen.

Stellen Sie sicher, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen anzeigen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formular-Eingabeetiketten, die von der VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Etiketten wie "fröhliches Menü-Button", die verschiedenen Formularelementen wie Button, Texteingabefeld und Link gegeben wurden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen im Kontext und außerhalb des Kontextes sinnvoll sind, sowohl wenn sie allein als auch im Kontext des Absatzes, in dem sie sich befinden, gelesen werden. Zum Beispiel zeigt das folgende Beispiel einen guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber dies ist ein schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können in unserem Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) viel mehr über die Implementierung von Links und bewährte Verfahren erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabeelement eingeben müssen. Das folgende Beispiel scheint vernünftig genug:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für Benutzer mit Behinderungen nicht so nützlich. Im obigen Beispiel gibt es nichts, was die Beschriftung eindeutig mit der Formulareingabe verknüpft und klarstellt, wie es auszufüllen ist, wenn Sie es nicht sehen können. Wenn Sie mit einigen Screenreadern auf dieses Beispiel zugreifen, wird Ihnen möglicherweise nur eine Beschreibung wie "Text bearbeiten" gegeben.

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem Code wie diesem wird die Beschriftung deutlich der Eingabe zugeordnet; die Beschreibung wird mehr wie "Geben Sie Ihren Namen ein: Text bearbeiten" lauten.

![Eine gute Formularbeschriftung, die "Geben Sie Ihren Namen ein" an ein Texteingabeformular gibt.](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet das Zuordnen einer Beschriftung zu einer Formulareingabe in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe einen größeren Treffbereich, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formulare Beispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können eine schöne Erklärung der Bedeutung von Textbeschriftungen und wie man Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, im folgenden Video ansehen:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Barrierefreie Datentabellen

Eine grundlegende Datentabelle kann mit sehr einfachem Markup geschrieben werden, zum Beispiel:

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Pronouns</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>he/him</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>she/her</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>she/her</td>
  </tr>
</table>
```

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Datenblöcke miteinander zu verknüpfen. Dazu müssen Sie wissen, welche die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. sind. Dies kann nur visuell für die obige Tabelle erfolgen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Nun schauen Sie sich unser [Punkbandtablauenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen bei der Arbeit sehen:

- Tabellenschlagzeilen werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Zeilen- oder Spaltenschlagzeilen sind, indem Sie das `scope`-Attribut verwenden. So erhalten Sie vollständige Dateneinheiten, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erledigen beide ähnliche Aufgaben — sie fungieren als Alternativtext für eine Tabelle und bieten einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung des Inhalts der Tabelle. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da der Inhalt auch für sehfähige Benutzer zugänglich ist, die ihn möglicherweise auch nützlich finden. Sie brauchen nicht unbedingt beide.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen erweiterte Funktionen und Barrierefreiheit](/de/docs/Learn/HTML/Tables/Advanced) für weitere Details zu barrierefreien Datentabellen.

## Textalternativen

Während textbasierte Inhalte von Natur aus zugänglich sind, gilt das nicht unbedingt für multimediale Inhalte — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen und Audioinhalte von hörbehinderten Menschen nicht gehört werden. Wir behandeln Video- und Audioinhalte ausführlich im [Barrierefreies Multimedia](/de/docs/Learn/Accessibility/Multimedia), aber für diesen Artikel werden wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element betrachten.

Wir haben ein einfaches Beispiel vorbereitet, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

Das erste Bild bietet einem Screenreader-Benutzer nicht wirklich viel Hilfe — zum Beispiel liest VoiceOver "/dinosaur.png, Bild" vor. Es liest den Dateinamen aus, um einige Hilfestellungen zu geben. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier irgendeiner Art handelt, aber oft können Dateien mit maschinell generierten Dateinamen hochgeladen werden (z. B. von einer Digitalkamera), und diese Dateinamen bieten wahrscheinlich keinen Kontext zum Inhalt des Bildes.

> [!NOTE]
> Aus diesem Grund sollten Sie nie Textinhalt in einem Bild einfügen — Screenreader können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, wird das vollständige `alt`-Attribut vorgelesen — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies verdeutlicht die Bedeutung nicht nur sinnvoller Dateinamen, falls sogenannte **Alternativtexte** nicht verfügbar sind, sondern auch die Notwendigkeit, Alt-Text in `alt`-Attributen überall dort bereitzustellen, wo dies möglich ist.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, sein. Das `alt` sollte kurz und prägnant sein und alle Informationen des Bildes enthalten, die im umgebenden Text nicht wiederholt werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild kann je nach Kontext variieren. Wenn zum Beispiel das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite bei der Tierschutzgesellschaft ist, sollten im Bild enthaltene Informationen, die für einen potenziellen Hundebesitzer relevant und im umgebenden Text nicht dupliziert sind, aufgenommen werden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiges Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da wahrscheinlich die Größe und Rasse von Fluffy im umgebenden Text enthalten sind, wird das nicht im `alt` aufgenommen. Da im Lebenslauf des Hundes jedoch wahrscheinlich keine Haarlänge, Farben oder Spielzeugvorlieben enthalten sind, die der potenzielle Besitzer wissen muss, wird es aufgenommen. Befindet sich das Bild im Freien oder trägt Fluffy ein rotes Halsband mit blauer Leine? Nicht von Bedeutung in Bezug auf die Adoption des Haustieres und daher nicht eingeschlossen. Alle Informationen, die das Bild bietet und die ein sehender Benutzer sehen kann und die für den Kontext relevant sind, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht eingefügt werden, da es für Personen, die das Bild zuvor nicht gesehen haben, nicht nützlich ist. Wenn der Ball Fluffys Lieblingsspielzeug ist oder der sehende Benutzer das nicht vom Bild her wissen kann, dann nehmen Sie es nicht auf.

Überlegen Sie sich, ob Ihre Bilder innerhalb Ihrer Inhalte Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzubinden.

> [!NOTE]
> Lesen Sie [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) und [Reaktionsfähige Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) für weitere Informationen über die Implementierung von Bildern und bewährte Verfahren.
> Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextbezogene Informationen angeben möchten, sollten Sie sie in den umgebenden Text integrieren oder in einem `title`-Attribut, wie oben gezeigt. In diesem Fall werden die meisten Screenreader den Alt-Text, das `title`-Attribut und den Dateinamen vorlesen. Außerdem zeigen Browser den Titeltext als Tooltips an, wenn mit der Maus darüber gefahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier", der als Tooltip bei Mouseover angezeigt wird.](title-attribute.png)

Werfen wir einen schnellen Blick auf die Vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir überhaupt nicht das `alt`-Attribut — stattdessen haben wir unsere Beschreibung des Bildes als normalen Textabsatz bereitgestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, wodurch Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Das ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil des [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikations, das es Entwicklern erlaubt, ihrem Markup zusätzliche Semantik hinzuzufügen, um die Zugänglichkeit von Screenreadern bei Bedarf zu verbessern. Um mehr darüber zu erfahren, wie es funktioniert, lesen Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

### Figures und Figure-Beschriftungen

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur einer Art (es könnte alles sein, nicht notwendigerweise ein Bild) mit einer Figure-Beschriftung verknüpfen:

```html
<figure>
  <img
    src="dinosaur.png"
    alt="The Mozilla Tyrannosaurus"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
    human, with small arms, and a large head with lots of sharp teeth.
  </figcaption>
</figure>
```

Während es gemischte Unterstützung durch Screenreader für die Verknüpfung von Figure-Beschriftungen mit ihren Figuren gibt, wird durch das Einfügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) die Assoziation hergestellt, wenn keine vorhanden ist. Trotzdem ist die Elementstruktur nützlich für CSS-Styling, und außerdem bietet sie eine Möglichkeit, eine Beschreibung des Bildes in Quellennähe zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in einem Seitendesign enthalten ist, aber sein Hauptzweck dekorativer Natur ist. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll dafür sorgen, dass Screenreader das Bild erkennen, aber nicht versuchen, es zu beschreiben (stattdessen würden sie einfach "Bild" oder Ähnliches sagen).

Der Grund, warum ein leeres `alt` statt keines enthalten ist, liegt darin, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die damit verbundene Überschrift. In solchen Fällen und in Fällen, in denen ein Bild nur zur Dekoration dient und keinen Inhaltswert hat, sollten Sie in Ihren `img`-Elementen ein leeres `alt` einfügen. Eine weitere alternative Möglichkeit besteht darin, das [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attribut [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) zu verwenden, da dies auch verhindert, dass Screenreader den Alternativtext vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die rein dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können sie die Barrierefreiheit fördern oder beeinträchtigen. Standardmäßig sind Links im Aussehen zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer schnell ermöglichen, zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können aber auch die Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript sie dazu bringt, sich auf unerwartete Weise zu verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch durch [Text-Dekoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokus-Ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einzige Methode zur Unterscheidung von Links von nicht verlinkenden Inhalten verwendet werden. Die Linktextfarbe, wie bei allen Texten, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein 4,5:1 Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell signifikant von nicht verlinktem Text unterschieden werden, mit einem Mindestkontrast von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, Besuchs- und Fokus-/Aktivzuständen sowie einem 4,5:1 Kontrast zwischen allen diesen Statusfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unvorhergesehenem Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, beim Speichern in Lesezeichen und wenn JavaScript noch geladen wird, Fehler auftritt oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z. B. Screenreader). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden und Links, deren `href`-Wert auf eine Dateiresource zeigt, sollten einen Hinweis über das Verhalten enthalten, das bei der Aktivierung des Links auftreten wird.

Personen mit Sehbeeinträchtigungen, die sich mit Hilfe von Spracherkennungstechnologie oder mit kognitiven Bedenken navigieren, können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Spracherkennungssoftware geben möglicherweise nicht einmal das Verhalten bekannt.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link zu einer nicht-HTML-Resource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Verhalten von Links darzustellen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständis von WCAG, Leitlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur wenn nötig | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Geben Sie Benutzern eine Vorwarnung, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch als skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am Anfang des {{HTMLElement("body")}}-Elements platziert wird und auf den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Personen, Inhalte zu überspringen, die sich auf mehreren Seiten einer Website wiederholen, wie z. B. die Kopfzeile der Website und die Hauptnavigation.

Sprunglinks sind besonders nützlich für Personen, die sich mit Hilfe unterstützender Technologien wie Schaltersteuerung, Sprachbefehlen oder Maulstäbchen/Kopfstöcken durch die Website navigieren, wo das Durchgehen von sich wiederholenden Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Wie–man: Verwendung von Sprunglinks - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis von WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis der Erfolgskriterien 2.4.1 | W3C-Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen von interaktiven Inhalten — einschließlich Anker —, die in enger visueller Nähe zueinander platziert sind, sollten durch Einfügen von Abständen getrennt werden. Diese Entflechtung ist nützlich für Personen, die an feinen motorischen Kontrollproblemen leiden und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstand kann mittels CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Handtremor und das Problem mit großen Schaltflächen - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Besuchen Sie [Testen Sie Ihre Fähigkeiten: HTML Barrierefreiheit](/de/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten jetzt gut darin vertraut sein, für die meisten Gelegenheiten barrierefreies HTML zu schreiben. Unser Artikel zu den WAI-ARIA-Grundlagen wird helfen, Lücken in diesem Wissen zu schließen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als Nächstes werden wir CSS und JavaScript untersuchen und wie deren Nutzung, ob gut oder schlecht, die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
