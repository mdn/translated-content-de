---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 667705a73ebb31cebdbe1365c5da148368d7e319
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem stets die richtigen Hypertext Markup Language-Elemente für den richtigen Zweck verwendet werden. Dieser Artikel beschreibt ausführlich, wie HTML genutzt werden kann, um maximale Barrierefreiheit sicherzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Zweck", weil der Browser so viele integrierte Barrierefreiheits-Anker bietet.</li>
          <li>Barrierefreie Best Practices wie Alt-Text, gute Link-Beschriftung, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften und Scoping.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, soweit möglich, und Bereitstellung von Definitionen, wenn dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Während Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen, usw. — werden Sie ein wiederkehrendes Thema bemerken: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Das bedeutet, die richtigen HTML-Elemente für ihren beabsichtigten Zweck so oft wie möglich zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element so verhalten lassen, wie Sie es wünschen. Zum Beispiel könnte eine Steuertaste, um ein Video auf Ihrer Website abzuspielen, folgendermaßen markiert sein:

```html
<div>Play video</div>
```

Aber wie Sie später detaillierter sehen werden, macht es Sinn, das richtige Element für den Zweck zu verwenden:

```html
<button>Play video</button>
```

Nicht nur haben HTML-`<button>`s einige passende Stylings standardmäßig angewendet (die Sie wahrscheinlich überschreiben möchten), sie haben auch eine eingebaute Tastaturzugänglichkeit — Benutzer können zwischen Schaltflächen mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser, semantisches Markup hat neben der Barrierefreiheit noch andere Vorteile:

1. **Einfacher zu entwickeln** — wie bereits erwähnt, erhalten Sie einige Funktionalitäten kostenlos, und es ist wohl auch verständlicher.
2. **Besser auf Mobilgeräten** — semantisches HTML ist tendenziell leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher, responsive zu gestalten.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung als Schlüsselwörtern, die in nicht-semantischen `<div>`s enthalten sind, sodass Ihre Dokumente von Kunden leichter gefunden werden können.

Lassen Sie uns einen detaillierten Blick auf zugängliches HTML werfen.

## Gute Semantik

Wir haben bereits über die Bedeutung richtiger Semantik gesprochen und warum wir das richtige HTML-Element für den Zweck verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen Barrierefreiheit stark beeinträchtigt werden kann, wenn es nicht richtig gehandhabt wird.

Draußen im Web ist es wahr, dass Menschen einige sehr seltsame Dinge mit HTML-Markup machen. Einige Missbräuche von HTML sind auf alte Praktiken zurückzuführen, die nicht vollständig vergessen wurden, und andere basieren einfach auf Unwissenheit. Unabhängig vom Fall sollten Sie solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von einer Art serverseitigem Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder Sie könnten Inhalt von Drittanbietern auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie machen können, wird der Barrierefreiheit helfen.

### Textinhalt

Eine der besten Hilfen für Benutzer eines Screenreaders ist eine hervorragende Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte ungefähr so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, durch dies zu navigieren, werden Sie feststellen, dass es ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten, und informiert Sie, was eine Überschrift ist, was ein Absatz ist, usw.
2. Es stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo fortfahren können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Screenreadern eine Liste aller Überschriften anzeigen, die Sie wie ein praktisches Inhaltsverzeichnis verwenden können, um bestimmte Inhalte zu finden.

Manchmal schreiben Menschen Überschriften, Absätze usw. unter Verwendung von Zeilenumbrüchen und fügen HTML-Elemente ausschließlich für die Gestaltung hinzu, etwa so:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, das er als Wegweiser verwenden kann, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die gesamte Seite wird als ein einziger großer Block gesehen, sodass sie in einem Zug vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu gestalten oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

#### Verwendung klarer Sprache

Die Sprache, die Sie verwenden, kann auch die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slangbegriffe verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es hilft Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Leuten ... eigentlich allen! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn dies vermieden werden kann. Schreiben Sie statt 5–7 lieber 5 bis 7.
- Erweitern Sie Abkürzungen — anstelle von Jan schreiben Sie Januar.
- Erweitern Sie Akronyme mindestens einmal oder zweimal und verwenden Sie das [`<abbr>`](/de/docs/Web/HTML/Element/abbr) Tag, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Zeiten verwendeten Leute HTML-Tabellen, um Seitenlayouts zu erstellen — verschiedene Tabellenzellen zur Aufnahme von Kopfzeile, Fußzeile, Seitenleiste, Hauptinhaltsbereich usw. zu verwenden. Dies ist keine gute Idee, da ein Screenreader wahrscheinlich verwirrende Ausgaben liefert, insbesondere wenn das Layout komplex ist und viele verschachtelte Tabellen enthält.

Probieren Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) aus, das ungefähr so aussieht:

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

Wenn Sie versuchen, mit einem Screenreader zu navigieren, wird er Ihnen wahrscheinlich mitteilen, dass sich eine Tabelle zum Ansehen befindet (obwohl einige Screenreader unterscheiden können zwischen Layouts mit Tabellen und Datentabellen). Sie werden dann wahrscheinlich (abhängig davon, welchen Screenreader Sie verwenden) in die Tabelle als Objekt gehen und ihre Merkmale separat ansehen müssen, dann wieder aus der Tabelle heraus, um mit dem Navigieren im Inhalt fortzufahren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie machten Sinn, als CSS-Unterstützung in Browsern noch nicht weit verbreitet war, aber jetzt verursachen sie nur Verwirrung bei Benutzern von Screenreadern. Darüber hinaus erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwerer zu warten macht. Sie können diese Behauptungen verifizieren, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Struktur-Beispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das ungefähr so aussehen könnte:

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

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr in die Inhalteingabe eingreift oder Verwirrung stiftet. Es ist auch viel schlanker und kleiner in Bezug auf den Codeumfang, was bedeutet, dass der Code einfacher zu warten ist und Benutzer weniger Bandbreite benötigen, um ihn herunterzuladen, was es besonders vorteilhaft für diejenigen macht, die mit langsamen Verbindungen arbeiten.

Ein weiterer Aspekt bei der Erstellung von Layouts ist die Verwendung von HTML-semantischen Elementen, wie im obigen Beispiel zu sehen ist (siehe [Inhaltsabschnitte](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Abschnittselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), den Fußzeilenbereich ({{htmlelement("footer")}}), wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu umwickeln. Diese bieten zusätzliche Semantik für Screenreader (und andere Werkzeuge), um Benutzern zusätzliche Hinweise zu den Inhalten zu geben, die sie durchstöbern (siehe [Screen Reader Support für neue HTML5-Abschnitts-Elemente](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Idee, wie gut Screenreader-Unterstützung ist).

> [!NOTE]
> Neben einer guten Semantik und einem attraktiven Layout sollte Ihr Inhalt logisch sinnvoll in seiner Quellreihenfolge sein — Sie können ihn immer später mit CSS an den gewünschten Platz bringen, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit das, was den Benutzern von Screenreadern vorgelesen wird, Sinn ergibt.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die wichtigsten Teile von Webdokumenten, mit denen Benutzer interagieren — meistens Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Barrierefreiheitsbedenken betrachten, die bei der Erstellung solcher Steuerelemente zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden sich mit anderen Aspekten der UI-Zugänglichkeit befassen.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser standardmäßig ermöglichen, dass diese mit der Tastatur manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach einigen Drücken sollten Sie feststellen, dass der Tab-Schwerpunkt beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (er unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Klicken Sie mich!", "Klicken Sie mich auch!" und "Und mich!" jeweils in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklertools anzeigt. Für weitere Informationen siehe: [Accessibility Inspector > Anzeige der Tabulatorreihenfolge der Webseite anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabetaste/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht ausgeben zu lassen), oder beginnen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Pfeiltasten oben und unten durchblättern lassen.

Sie erhalten diese Funktionalität im Grunde kostenlos, indem Sie die entsprechenden Elemente verwenden, z.B.

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Beschriftungen angemessen (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente) verwendet werden sollten.

Es ist jedoch erneut der Fall, dass Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sehen Sie manchmal Schaltflächen, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber es wird nicht empfohlen, solchen Code zu verwenden — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie nur {{htmlelement("button")}}-Elemente verwendet hätten, plus Sie bekommen keines der Standard-CSS-Stylings, die Schaltflächen erhalten. In den seltenen bis nicht existierenden Fällen, in denen Sie ein Nicht-Schaltflächenelement für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhaltensweisen, einschließlich Tastatur- und Maustastenunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile wieder hinzuzufügen, erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedem das `tabindex="0"` Attribut zuweisen. Wir fügen auch `role="button"` hinzu, sodass Benutzer von Screenreadern wissen, dass sie das Element fokussieren und damit interagieren können:

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

Im Wesentlichen ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hauptsächlich dazu gedacht, es ermöglicht zu machen, dass tabulierbare Elemente eine benutzerdefinierte Tab-Reihenfolge haben (angegeben in positiver numerischer Reihenfolge), anstatt nur in ihrer Standard-Quellreihenfolge durchtabuliert zu werden. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrungen führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge als der Quellcode zeigt und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabulierbar sind, tabulierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht, dass normalerweise nicht tabulierbare Elemente programmgesteuert fokussiert werden können, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung uns ermöglicht, zu den Schaltflächen zu tabulieren, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende bisschen JavaScript-Trick anwenden:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die `key`-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird sicherlich noch andere Probleme damit geben. **Besser, von Anfang an das richtige Element für den richtigen Zweck zu verwenden.**

#### Sinnvolle Textbeschriftungen

Textbeschriftungen für UI-Steuerelemente sind für alle Benutzer sehr nützlich, aber sie richtig hinzubekommen, ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Beschriftungen von Schaltflächen und Links verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Benutzer von Screenreadern manchmal eine Liste von Schaltflächen und Formularelementen erhalten. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formularbeschriftungsetiketten, aufgelistet von der VoiceOver-Software auf Mac. Diese Liste enthält bedeutungslose Beschriftungen wie 'glückliches Menüschaltfläche`, die verschiedenen Formularelementen wie Schaltflächen, Textfeldern und Links gegeben wurden.](voiceover-formcontrols.png)

Achten Sie darauf, dass Ihre Beschriftungen aus dem Kontext heraus, wenn sie alleine gelesen werden, ebenso sinnvoll sind wie im Kontext des Absatzes, in dem sie sich befinden. Zum Beispiel zeigt das Folgende ein Beispiel für guten Link-Text:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber dies ist schlechter Link-Text:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können viel mehr über Link-Implementierung und Best Practices in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das Folgende scheint ein ausreichend gutes Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht so nützlich für behinderte Benutzer. Es gibt im obigen Beispiel nichts, um die Beschriftung eindeutig mit dem Formulareingabefeld zu verknüpfen und klar zu machen, wie es auszufüllen ist, wenn Sie es nicht sehen können. Wenn Sie darauf mit einigen Screenreadern zugreifen, erhalten Sie möglicherweise nur eine Beschreibung, die "Text bearbeiten" oder ähnlich lautet.

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird die Beschriftung klar mit dem Eingabefeld verknüpft; die Beschreibung lautet eher "Füllen Sie Ihren Namen ein: Text bearbeiten".

![Eine gute Formularbeschriftung, die 'Füllen Sie Ihren Namen ein' liest, wird einer Formulareingabesteuerung gegeben.](voiceover-good-form-label.png)

Zusätzlich ist in den meisten Browsern die Verknüpfung einer Beschriftung mit einem Formulareingabefeld so, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe eine größere Trefferfläche, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung der Bedeutung richtiger Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit Hilfe des [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen, im folgenden Video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

Eine einfache Datentabelle kann mit sehr einfachem Markup geschrieben werden, zum Beispiel:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Datenblöcke zu gruppieren. Um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen oder Spalten übersetzen usw. Dies kann nur visuell für die obige Tabelle geschehen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und versuchen Sie das Beispiel selbst).

Sehen Sie sich nun unser [Punk-Bands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können einige Barrierefreiheitswerkzeuge hier in Aktion sehen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen komplette Datenblöcke, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements machen einen ähnlichen Job — sie fungieren als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche schnelle Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird allgemein bevorzugt, da es auch sichtbare Benutzer anspricht, die es ebenfalls nützlich finden könnten. Sie brauchen nicht wirklich beides.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für mehr Details über zugängliche Datentabellen.

## Textalternativen

Während textuelle Inhalte von Natur aus zugänglich sind, kann dasselbe nicht unbedingt über multimediale Inhalte gesagt werden — Bild- und Video-Inhalte können von sehbehinderten Menschen nicht gesehen werden, und Audio-Inhalte können von hörbehinderten Menschen nicht gehört werden. Wir behandeln Video- und Audioinhalte im Detail in den [Barrierefreien Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel schauen wir uns die Barrierefreiheit des bescheidenen {{htmlelement("img")}}-Elements an.

Wir haben ein einfaches Beispiel geschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes zeigt:

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

Das erste Bild bietet, wenn es von einem Screenreader betrachtet wird, dem Benutzer nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um einen Versuch zu machen, Hilfe zu leisten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es eine Art Dinosaurier ist, aber oft können Dateien mit maschinen-generierten Dateinamen hochgeladen werden (z.B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zu den Bildinhalten bieten.

> [!NOTE]
> Dies ist der Grund, warum Sie niemals Textinhalt in einem Bild enthalten sollten — Screenreader können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und ausschneiden/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, liest er das gesamte alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein Dinosaurier mit zwei Beinen, der aufrecht steht wie ein Mensch, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies hebt die Bedeutung hervor, nicht nur aussagekräftige Dateinamen zu verwenden, falls kein sogenannter **Alt-Text** verfügbar ist, sondern auch sicherzustellen, dass Alt-Text immer in `alt`-Attributen bereitgestellt wird, wo immer möglich.

Beachten Sie, dass der Inhalt des `alt`-Attributs stets eine direkte Darstellung des Bildes und dessen visuellen Ausdrucks bieten sollte. Der Alt-Text sollte knapp und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden und nicht in den umgebenden Texten dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert je nach Kontext. Wenn beispielsweise das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat für Hunde ist, wäre `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierschutzgesellschaft ist, sollten Informationen vermittelt werden, die im Bild sichtbar sind und für potenzielle Hundebesitzer relevant sind, jedoch nicht im umgebenden Text dupliziert werden. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist dies nicht im `alt.` enthalten. Jedoch, da die Kurzbiografie des Hundes wahrscheinlich Haarlänge, Farben oder Spielzeugvorlieben, die der potenzielle Besitzer wissen muss, nicht enthält, wird dies eingeschlossen. Ist das Bild im Freien aufgenommen, oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht enthalten. Alle Informationen, die das Bild zeigt, die ein sehender Benutzer zugreifen kann und für den Kontext relevant sind, sind das, was vermittelt werden muss; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Jegliches persönliches Wissen oder eine zusätzliche Beschreibung sollte hier nicht eingeschlossen werden, da dies für Menschen, die das Bild zuvor nicht gesehen haben, nicht nützlich ist. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn ein sehender Benutzer das nicht aus dem Bild erkennen kann, dann schließen Sie es nicht ein.

Eine Sache, die in Betracht gezogen werden sollte, ist, ob Ihre Bilder Bedeutungen innerhalb Ihres Inhalts haben oder ob sie rein zur visuellen Dekoration und damit bedeutungslos sind. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach auf der Seite als CSS-Hintergrundbilder einzubinden.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Responsive_images) für viele weitere Informationen über Bildimplementation und Best Practices.
> Sie können auch den [Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu erfahren, wie in verschiedenen Situationen ein alt-Attribut für Bilder verwendet werden sollte.

Wenn Sie zusätzliches Kontextwissen bereitstellen möchten, sollten Sie es in den umgebenden Text des Bildes oder in ein `title`-Attribut, wie oben gezeigt, einfügen. In diesem Fall werden die meisten Screenreader den Alt-Text, das Title-Attribut und den Dateinamen vorlesen. Darüber hinaus zeigen Browser Titeltext als QuickInfos beim Mouseover an.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier" angezeigt als QuickInfo bei Mouseover.](title-attribute.png)

Werfen Sie einen weiteren schnellen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabschnitt präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Beschriftung für das Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spec, die es Entwicklern ermöglicht, ihrer Markup extra Semantik hinzuzufügen, um die Zugänglichkeit von Screenreadern dort, wo nötig, zu verbessern.

### Figuren und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift assoziieren:

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

Während es gemischte Unterstützung von Screenreader-Unterstützung für die Verknüpfung von Bildunterschriften mit ihren Abbildungen gibt, wird das Einfügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) die Assoziation schaffen, wenn keine vorhanden ist. Abgesehen davon ist die Elementstruktur nützlich für das CSS-Styling, plus es bietet eine Möglichkeit, eine Beschreibung des Bildes in der Nähe im Quellcode zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, dessen primärer Zweck es ist, visuelle Dekoration bereitzustellen. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll dafür sorgen, dass Screenreader das Bild erkennen, es aber nicht versuchen zu beschreiben (stattdessen würden sie einfach "Bild", oder ähnliches, sagen).

Der Grund, einen leeren `alt` statt keinen einzuschließen, ist, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration zu der zugehörigen Überschrift. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltwert hat, sollten Sie einen leeren `alt` in Ihren `img`-Elementen einschließen. Eine andere Alternative ist die Verwendung des `aria` [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), da dies auch Screenreader davon abhält, alternativen Text vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a) Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können sie Barrierefreiheit verbessern oder beeinträchtigen. Standardmäßig sind Links in ihrer Erscheinung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in der Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [focus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einzige Methode verwendet werden, um Links von nicht-verlinkendem Inhalt zu unterscheiden. Die Linktextfarbe, wie aller Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrastverhältnis von 4.5:1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant anders sein als nicht-verlinkender Text, mit minimalen Kontrastanforderungen von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, besuchten und Fokus-/Aktivzuständen und einem 4.5:1 Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbräuchlich verwendet, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichen setzen und wenn JavaScript noch heruntergeladen wird, fehlschlägt oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, eine {{HTMLElement("button")}} statt dessen zu verwenden. Im Allgemeinen sollten Sie nur ein Anker für die Navigation mit einem richtigen URL verwenden.

### Externe Links und Verlinkung auf nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die Deklaration `target="_blank"` geöffnet werden und Links, deren `href`-Wert auf eine Dateiresource zeigt, sollten einen Indikator über das Verhalten enthalten, das auftritt, wenn der Link aktiviert wird.

Menschen mit Sehbehinderung, die mit Hilfe von Screenreading-Technologie navigieren, oder die kognitive Bedenken haben, könnten verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software können das Verhalten möglicherweise nicht einmal anzeigen.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link auf eine nicht-HTML-Ressource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Linksverhalten anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs über einen Link nur bei Bedarf | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich an dem öffnenden {{HTMLElement("body")}}-Element platziert wird und zum Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu umgehen, die auf mehreren Seiten einer Website wiederholt werden, z.B. die Kopfzeile und die Hauptnavigation einer Website.

Skip-Links sind besonders nützlich für Menschen, die mit Unterstützungstechnologien wie Schaltersteuerung, Sprachbefehl oder Mundstäben/Kopfstöcken navigieren, bei denen das Durchlaufen sich wiederholender Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Wie man: Skip-Navigations-Links verwendet - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis der Erfolgskriterien 2.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Anker — die sich in enger visueller Nähe zueinander befinden sollten mit Abstand voneinander getrennt werden. Dieser Abstand ist vorteilhaft für Menschen, die an feiner Motorikstörungen leiden und die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Der Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML-Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility) an, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren.

## Zusammenfassung

Sie sollten jetzt in der Lage sein, zugängliches HTML für die meisten Gelegenheiten zu schreiben. Unser Artikel über WAI-ARIA-Grundlagen wird helfen, Wissenslücken zu schließen, aber dieser Artikel hat die Grundlagen abgedeckt. Als Nächstes werden wir uns mit CSS und JavaScript befassen und wie Barrierefreiheit durch deren gute oder schlechte Nutzung beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
