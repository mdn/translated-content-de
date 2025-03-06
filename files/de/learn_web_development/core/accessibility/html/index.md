---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen HTML-Elemente stets für den richtigen Zweck verwendet werden. In diesem Artikel wird detailliert untersucht, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Fertigkeiten in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Nutzung von semantischem HTML, alias "Das richtige Element für die richtige Aufgabe", da der Browser viele eingebaute Barrierefreiheits-Hooks bietet.</li>
          <li>Beste Praktiken zur Zugänglichkeit wie Alt-Text, gute Linkgestaltung, Formularbeschriftungen sowie Tabellenzeilen- und -spaltenüberschriften und -strukturierung.</li>
          <li>Die Verwendung einer einfachen und klaren Sprache, das Vermeiden von Umgangssprache und Abkürzungen, soweit möglich, und das Bereitstellen von Definitionen, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastatur-Zugänglichkeit.</li>
          <li>Die Wichtigkeit der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen, usw. — werden Sie ein immer wiederkehrendes Thema bemerken: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Dies bedeutet, die richtigen HTML-Elemente so weit wie möglich für ihren vorgesehenen Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript nahezu jedes HTML-Element so gestalten, dass es sich auf beliebige Weise verhält. Zum Beispiel könnte eine Steuerschnittstelle zum Abspielen eines Videos auf Ihrer Seite so markiert werden:

```html
<div>Play video</div>
```

Aber, wie Sie später noch genauer sehen werden, ist es sinnvoll, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`-Elemente haben nicht nur von Haus aus eine gewisse Stilausprägung (die Sie wahrscheinlich überschreiben möchten), sondern sie bieten auch eingebaute Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Schaltflächen navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML benötigt nicht mehr Zeit zum Schreiben als nicht-semantische (schlechte) Markup, wenn Sie es konsequent von Beginn Ihres Projekts an verwenden. Noch besser, semantisches Markup bietet weitere Vorteile über die Barrierefreiheit hinaus:

1. **Leichter in der Entwicklung** — wie bereits erwähnt, erhalten Sie einige Funktionalitäten kostenlos, außerdem ist es möglicherweise einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist wahrscheinlich leichter im Dateiumfang als nicht-semantischer Spaghetticode und leichter anpassbar.
3. **Gut für SEO** — Suchmaschinen messen Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung bei als Schlüsselwörtern in nicht-semantischen `<div>`s, etc., sodass Ihre Dokumente für Kunden besser auffindbar sind.

Lassen Sie uns nun detaillierter auf zugängliches HTML eingehen.

## Gute Semantik

Wir haben bereits über die Bedeutung korrekter Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies darf nicht ignoriert werden, denn es ist einer der Hauptbereiche, in denen Barrierefreiheit stark beeinträchtigt wird, wenn sie nicht ordnungsgemäß behandelt wird.

Im Internet ist die Wahrheit, dass Menschen sehr seltsame Dinge mit HTML-Markup tun. Einige Missbräuche von HTML resultieren aus unvollständig vergessenen Praktiken, und einige beruhen einfach auf Unkenntnis. Unabhängig vom Fall sollten Sie solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu beseitigen — Ihre Seiten könnten von einer Art serverseitigem Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder Sie könnten Inhalte von Drittanbietern auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Textinhalt

Eine der besten Hilfestellungen für Benutzer, die eine Bildschirmlesesoftware verwenden, ist eine ausgezeichnete Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, dies zu navigieren, werden Sie sehen, dass dies ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten, und informiert Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo vorgehen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch eine Liste aller Überschriften in vielen Screenreadern aufrufen, die Sie als praktische Inhaltsübersicht verwenden können, um spezifische Inhalte zu finden.

Manche schreiben Überschriften, Absätze usw. mithilfe von Zeilenumbrüchen und fügen HTML-Elemente rein zur Stilgestaltung hinzu, etwa wie folgt:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen – der Screenreader hat nichts, was er als Wegweiser verwenden kann, sodass Sie keine nützliche Inhaltsübersicht abrufen können, und die gesamte Seite wird als ein einziger riesiger Block angesehen, der in einem Durchgang vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da es keine Elemente als Selektoren gibt.

#### Verwendung klarer Sprache

Die von Ihnen verwendete Sprache kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slangbegriffe enthält. Dies kommt nicht nur Menschen mit kognitiven oder anderen Einschränkungen zugute; es hilft auch Lesern, für die der Text nicht in ihrer Muttersprache verfasst ist, jüngeren Menschen... in der Tat jedem! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Screenreader nicht deutlich vorgelesen werden. Beispielweise:

- Verwenden Sie keine Gedankenstriche, wenn Sie es vermeiden können. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — statt Jan schreiben Sie Januar.
- Akronyme ausschreiben, mindestens ein- oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag verwenden, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Zeiten nutzten Menschen HTML-Tabellen, um Seitenlayouts zu erstellen — verschiedene Tabellenspalten, um den Header, Footer, die Seitenleiste, die Hauptinhaltsspalte usw. zu enthalten. Das ist keine gute Idee, da ein Screenreader wahrscheinlich verwirrende Ausgaben liefert, insbesondere wenn das Layout komplex ist und viele verschachtelte Tabellen hat.

Probieren Sie unser Beispiel für [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) aus, das so ähnlich aussieht:

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

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird es Ihnen wahrscheinlich sagen, dass es sich um eine Tabelle handelt (obwohl einige Screenreader den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Sie werden dann wahrscheinlich (abhängig vom verwendeten Screenreader) hinab in die Tabelle als Objekt gehen müssen, um ihre Features separat zu betrachten, und dann wieder aus der Tabelle gehen, um mit der Navigation des Inhalts fortzufahren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie ergaben Sinn, als CSS-Unterstützung in Browsern noch nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Benutzer von Screenreadern. Darüber hinaus erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwerer wartbar macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Webseitenstruktur-Beispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das so aussehen könnte:

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

Wenn Sie versuchen, unser moderneres Strukturexperiment mit einem Screenreader zu verwenden, werden Sie feststellen, dass das Layout-Markup die Inhaltsausgabe nicht mehr stört oder Verwirrung stiftet. Es ist auch viel schlanker und kleiner im Hinblick auf den Codeumfang, was bedeutet, dass der Code leichter zu warten ist und Benutzer weniger Bandbreite zum Herunterladen benötigen, was besonders für Benutzer mit langsamen Verbindungen von Vorteil ist.

Ein weiterer Punkt, den es bei Layouts zu berücksichtigen gilt, ist die Verwendung von HTML-semantischen Elementen, wie im obigen Beispiel gezeigt (siehe [Content Sectioning](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Sektionselemente für die Umrahmung Ihrer Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu verwenden. Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise zum Inhalt zu geben, den sie navigieren (siehe [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung, wie die Unterstützung von Screenreadern aussieht).

> [!NOTE]
> Zusätzlich zur guten Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später jederzeit mit CSS an den gewünschten Platz bringen, aber Sie sollten die Quellreihenfolge von Anfang an korrekt festlegen, damit das, was den Benutzern von Screenreadern vorgelesen wird, Sinn ergibt.

### UI-Steuerungen

Mit UI-Steuerungen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — meist Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Bedenken zur Barrierefreiheit beim Erstellen solcher Steuerungen betrachten. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit untersuchen.

Ein wesentlicher Aspekt der Zugänglichkeit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur manipuliert werden können. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Betätigungen sollten Sie sehen, dass der Tab-Fokus beginnt, zwischen den verschiedenen fokussierbaren Elementen zu wechseln. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (er unterscheidet sich leicht zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit den Texten "Click me!", "Click me too!" und "And me!" darin. Die dritte Schaltfläche hat einen blauen Umriss, der den aktuellen Tab-Fokus anzeigt.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwickler-Tools ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite anzeigt. Für weitere Informationen siehe: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabe- oder Rücktaste drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, um den Schaltflächen eine Nachricht anzuzeigen), oder beginnen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Auf- und Abwärtspfeiltasten zwischen ihnen wechseln.

Dieses Verhalten erhalten Sie im Wesentlichen kostenlos, indem Sie einfach die entsprechenden Elemente verwenden, z.B.

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

Das bedeutet, Links, Schaltflächen, Formularelemente und Beschriftungen angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Es kommt jedoch manchmal vor, dass Menschen seltsame Dinge mit HTML machen. Ein Beispiel ist, dass Sie manchmal Schaltflächen sehen, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Solche Codierungen werden jedoch nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten. Außerdem erhalten Sie keine der Standard-CSS-Stile, die Schaltflächen erhalten. In dem seltenen bis nicht-existierenden Fall, dass Sie ein Nicht-Schaltflächenelement für eine Schaltfläche verwenden müssen, verwenden Sie die [`button` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhalten, einschließlich Tastatur- und Maus-Button-Unterstützung.

#### Tastaturzugänglichkeit zurück einbauen

Solche Vorteile wieder einzubauen, erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel ansehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedem den Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Screenreader-Benutzer wissen, dass sie den Fokus auf das Element legen und mit ihm interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut vor allem dazu gedacht, bei fokussierbaren Elementen eine benutzerdefinierte Tab-Reihenfolge (in positiver numerischer Reihenfolge) zu ermöglichen, anstatt einfach in der Standard-Quellreihenfolge durchgetabt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn es wirklich nötig ist, beispielsweise wenn das Layout Dinge in einer visuellen Reihenfolge zeigt, die sich stark von der Reihenfolge im Quellcode unterscheidet, und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei andere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht normalerweise nicht-fokussierbaren Elementen, Fokus programmatisch zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, zu den Schaltflächen zu taben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dafür mussten wir den folgenden JavaScript-Trick verwenden:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die Eigenschaft [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die im `onclick`-Handler der Schaltfläche gespeicherte Funktion mit `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es gibt sicherlich weitere Probleme damit. **Besser, gleich das richtige Element für die richtige Aufgabe zu verwenden.**

#### Bedeutungsvolle Textbeschriftungen

Textbeschriftungen für UI-Steuerelemente sind für alle Benutzer sehr nützlich, aber es ist besonders wichtig, sie für Benutzer mit Behinderungen korrekt zu gestalten.

Stellen Sie sicher, dass Ihre Textbeschriftungen für Schaltflächen und Links verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formular-Eingabebeschriftungen, die von der VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'glückliches Menü'. ](voiceover-formcontrols.png)

Vergewissern Sie sich, dass Ihre Beschriftungen außerhalb des Kontexts Sinn ergeben, allein gelesen, sowie im Kontext des Absatzes, in dem sie sich befinden. Zum Beispiel zeigt das folgende Beispiel einen guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber dies ist schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) viel mehr über die Implementierung von Links und Best Practices finden. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formularelement eingeben müssen. Das folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Für behinderte Benutzer ist dies jedoch nicht so nützlich. Im obigen Beispiel gibt es nichts, um die Beschriftung eindeutig mit dem Formulareingabefeld zu verknüpfen und klarzumachen, wie sie ausgefüllt werden sollte, wenn Sie sie nicht sehen können. Wenn Sie dies mit einigen Screenreadern aufrufen, kann es sein, dass Sie nur eine Beschreibung wie "Text bearbeiten" erhalten.

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung klar mit der Eingabe verknüpft; die Beschreibung wird eher wie "Füllen Sie Ihren Namen ein: Text bearbeiten".

![Eine gute Formularbeschriftung, die "Füllen Sie Ihren Namen ein" für ein Text-Eingabefeld liest.](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet das Verknüpfen einer Beschriftung mit einem Formulareingabefeld in den meisten Browsern, dass Sie die Beschriftung anklicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt dem Eingabefeld eine größere Trefferfläche, was es einfacher macht, es auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Eine schöne Erklärung der Bedeutung von ordnungsgemäßen Textbeschriftungen und wie Sie Textbeschriftungsprobleme mithilfe des [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können, finden Sie im folgenden Video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

Eine grundlegende Datentabelle kann mit sehr einfachem Markup geschrieben werden, z.B.:

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

Aber dies hat Probleme – es gibt keine Möglichkeit für einen Benutzer eines Screenreaders, Zeilen oder Spalten als Datengruppen zuzuordnen. Dafür müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. überschreiben. Dies kann für die obige Tabelle nur visuell geschehen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich jetzt unser [Beispiel für eine Punk-Band-Tabelle](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — hier sehen Sie einige Barrierefreiheitshilfen in Aktion:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Screenreadern als Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erledigen beide ähnliche Aufgaben — sie wirken als Alt-Text für eine Tabelle und geben einem Benutzer eines Screenreaders eine nützliche Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element ist im Allgemeinen zu bevorzugen, da es den Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie brauchen nicht wirklich beide.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellenbarrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details zu zugänglichen Datentabellen.

## Textalternativen

Während Textinhalte von Natur aus zugänglich sind, gilt dies nicht unbedingt für Multimedia-Inhalte — Bild- und Videoinhalte können von sehbehinderten Personen nicht gesehen werden, und Audioinhalte können von hörbehinderten Personen nicht gehört werden. Wir behandeln Video- und Audioinhalte im Detail im Abschnitt [Zugängliche Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werfen wir einen Blick auf die Barrierefreiheit beim bescheidenen {{htmlelement("img")}}-Element.

Wir haben ein einfaches Beispiel geschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien des gleichen Bildes enthält:

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

Wenn das erste Bild von einem Screenreader gelesen wird, bietet es dem Benutzer nicht viel Hilfe — VoiceOver liest beispielsweise "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um ein wenig Hilfe zu bieten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um eine Art Dinosaurier handelt, aber oft werden Dateien mit maschinengefertigten Dateinamen hochgeladen (z.B. von einer Digitalkamera), die wahrscheinlich keinen Kontext zu den Bildinhalten bieten würden.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalte in ein Bild einfügen — Screenreader können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Lassen Sie es einfach!

Wenn ein Screenreader auf das zweite Bild trifft, liest es das gesamte Alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier steht aufrecht wie ein Mensch, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung, nicht nur sinnvolle Dateinamen zu verwenden für den Fall, dass sogenannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text in `alt`-Attributen immer bereitgestellt wird, wo immer möglich.

Der Inhalt des `alt`-Attributs sollte stets eine direkte Darstellung des Bildes und dessen visueller Aussage bieten. Der Alt sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden und nicht im umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert je nach Kontext. Wenn das Foto von Fluffy ein Avatar neben einer Rezension für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angebracht. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hunderhalter relevant sind und nicht im umgebenden Text dupliziert sind, enthalten sein. Eine längere Beschreibung, wie z.B. `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angebracht. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, wird das nicht im `alt` enthalten. Da die Biografie des Hundes wahrscheinlich nicht die Haarlänge, Farben oder Spielzeugpräferenzen beinhaltet, die der potenzielle Halter wissen muss, wird dies aber mit einbezogen. Ob das Bild im Freien aufgenommen wurde oder Fluffy ein rotes Halsband mit blauer Leine hat, ist im Hinblick auf die Adoption des Haustieres nicht wichtig und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und auf die ein sehender Benutzer zugreifen kann und die im Kontext relevant sind, müssen vermittelt werden; nichts darüber hinaus. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Menschen, die das Bild zuvor noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer nicht aus dem Bild ableiten kann, dann sollte das nicht enthalten sein.

Eine Überlegung ist, ob Ihre Bilder in Ihrem Inhalt Bedeutung haben oder nur zu dekorativen Zwecken und damit ohne Bedeutung sind. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Responsive_images) für viele weitere Informationen über die Implementierung von Bildern und Best Practices.
> Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie man das Alt-Attribut in verschiedenen Situationen verwendet.

Wenn Sie möchten, können Sie zusätzliche kontextuelle Informationen bereitstellen, die Sie in den Text um das Bild herum einfügen oder innerhalb eines `title`-Attributs, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den Alt-Text, das Title-

Attribut und den Dateinamen vor. Außerdem zeigen Browser den Titeltext als Tooltip an, wenn er überfahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der rote Dinosaurier von Mozilla", angezeigt als Tooltip beim Mouseover.](title-attribute.png)

Werfen wir einen kurzen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als normalen Textabsatz präsentiert, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um sich auf diese `id` zu beziehen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Das ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die Entwicklern ermöglicht, ihrer Markup-Sprache zusätzliche Semantik hinzuzufügen, um die Barrierefreiheit von Screenreadern dort zu verbessern, wo es nötig ist.

### Figuren und Figurenbeschriftungen

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht notwendigerweise ein Bild) mit einer Figurenbeschriftung verknüpfen:

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

Während die Bildschirmleserunterstützung für die Verknüpfung von Figurenbeschriftungen mit ihren Figuren gemischt ist, wird die Assoziation erzeugt, wenn sie fehlt, wenn [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet wird. Abgesehen davon ist die Elementstruktur nützlich für CSS-Styling, und sie bietet eine Möglichkeit, eine Beschreibung des Bildes neben ihm in die Quelle zu setzen.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, aber sein Haupteinsatzzweck visuelle Dekoration ist. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll dazu führen, dass Screenreader das Bild erkennen, aber nicht versuchen, es zu beschreiben (stattdessen würden sie nur "Bild" oder Ähnliches sagen).

Der Grund für die Verwendung eines leeren `alt` anstelle des Weglassens liegt darin, dass viele Screenreader die gesamte Bild-URL verkünden, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration zur Überschrift, mit der es verknüpft ist. In solchen Fällen und in Fällen, in denen ein Bild nur Dekoration ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einfügen. Eine weitere Alternative besteht darin, das `aria`-[`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribut [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu verwenden, da dies auch verhindert, dass Screenreader Alternativtext vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), je nach Verwendung, können zur Barrierefreiheit beitragen oder schaden. Standardmäßig sind Links in ihrem Aussehen zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit jedoch beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich in unerwarteter Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokusring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht das alleinige Unterscheidungsmerkmal zwischen Links und nicht verlinkten Inhalten sein. Die Farbe des Linktexts muss, wie bei allen Texten, signifikant anders sein als die Hintergrundfarbe ([ein Kontrastverhältnis von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell signifikant anders sein als nicht verlinkter Text, mit einem Mindestkontrast von 3:1 zwischen dem Linktext und dem umgebenden Text sowie zwischen den Standard-, Besuchs- und Fokus-/Aktivzuständen und einem 4,5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript noch heruntergeladen wird, Fehler verursacht oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen eine {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie einen Anker nur für die Navigation verwenden, indem Sie eine richtige URL verwenden.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster geöffnet werden über die `target="_blank"`-Deklaration und Links, deren `href`-Wert auf eine Datei-Ressource verweist, sollten einen Indikator über das Verhalten enthalten, das ausgelöst wird, wenn der Link aktiviert wird.

Personen mit Sehbehinderungen, die mit Hilfe von Bildschirmlesetechnologien navigieren, oder Personen mit kognitiven Beeinträchtigungen könnten verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware kündigen das Verhalten möglicherweise nicht einmal an.

#### Link, der ein neues Tab oder Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link zu einer nicht-HTML-Ressource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Linkverhalten zu signalisieren, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer vorwarnen, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch bekannt als skipnav, ist ein `a`-Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element platziert wird und auf den Beginn des Hauptinhalts der Seite verweist. Dieser Link ermöglicht es Menschen, Inhalt zu umgehen, der auf mehreren Seiten einer Website wiederholt wird, wie z.B. die Kopfzeile und die Hauptnavigation einer Website.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe unterstützender Technologien wie Switch-Control, Sprachsteuerung oder Mundstäben/Headwands navigieren, bei denen der Akt des Durchlaufens wiederholter Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Navigation überspringen"-Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt - einschließlich Anker - die sich in dichter visueller Nähe zueinander befinden, sollten durch eingefügten Raum getrennt werden. Diese Abstände sind von Vorteil für Menschen, die an feinmotorischen Kontrollproblemen leiden und möglicherweise versehentlich das falsche interaktive Element aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzitterer und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Besuchen Sie [Testen Sie Ihre Fähigkeiten: HTML-Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun mit dem Schreiben von barrierefreiem HTML für die meisten Gelegenheiten vertraut sein. Unser WAI-ARIA-Grundlagenartikel wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen behandelt. Als nächstes werden wir uns mit CSS und JavaScript befassen und wie Barrierefreiheit durch deren gute oder schlechte Verwendung beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
