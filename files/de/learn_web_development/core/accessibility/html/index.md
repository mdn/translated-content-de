---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: dd6ae9b5fceff2279800c6e16e074fd8cac9d0bc
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem Sie sicherstellen, dass die richtigen Hypertext Markup Language-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Zweck", da der Browser so viele integrierte Barrierefreiheitshilfen bietet.</li>
          <li>Barrierefreie Best Practices wie Alt-Text, gute Linktexte, Formularbeschriftungen sowie Tabellenzeilen- und -spaltenüberschriften und -bereiche.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturbedienbarkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen usw. —, werden Sie immer wieder ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH oder Plain Old Semantic HTML genannt). Das bedeutet, die richtigen HTML-Elemente so oft wie möglich für ihren beabsichtigten Zweck zu verwenden.

Vielleicht fragen Sie sich, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element so verhalten lassen, wie Sie es möchten. Zum Beispiel könnte eine Steuertaste zum Abspielen eines Videos auf Ihrer Website so ausgezeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

Nicht nur haben HTML `<button>`s einige geeignete Stile, die standardmäßig angewendet werden (die Sie wahrscheinlich überschreiben möchten), sie haben auch eingebaute Tastaturbedienbarkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen den Tasten navigieren und ihre Auswahl mit <kbd>Leertaste</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML braucht nicht länger zum Schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser: Semantisches Markup hat weitere Vorteile über die Barrierefreiheit hinaus:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionalitäten kostenlos, und es ist möglicherweise einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist möglicherweise leichter in der Dateigröße als nicht-semantischer Spaghetticode und einfacher responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen geben Keywords innerhalb von Überschriften, Links usw. mehr Bedeutung als Keywords in nicht-semantischen `<div>`s, sodass Ihre Dokumente von Kunden besser gefunden werden können.

Schauen wir uns barrierefreies HTML im Detail an.

## Gute Semantik

Wir haben bereits über die Bedeutung korrekter Semantik gesprochen und warum wir das richtige HTML-Element für den Job verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen Barrierefreiheit stark beeinträchtigt wird, wenn sie nicht ordnungsgemäß behandelt wird.

Draußen im Internet machen Menschen wirklich seltsame Dinge mit HTML-Markup. Oft ist die Fehlverwendung von HTML auf Überbleibsel von Praktiken zurückzuführen, die noch nicht verschwunden sind, aber manchmal kommt es vor, weil die Autoren es nicht besser wissen. Was auch immer der Fall sein mag, Sie sollten schlechtes Code gegen gutes semantisches Markup ersetzen, wo immer es möglich ist, sowohl in statischen HTML-Seiten als auch in von [Server-seitig](/de/docs/Learn_web_development/Extensions/Server-side) oder [Client-seitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React generierten HTML.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, die Sie nicht kontrollieren können, oder es könnte Drittanbieterinhalte auf Ihrer Seite geben (wie Werbebanner).

Das Ziel ist nicht „alles oder nichts“; jede Verbesserung, die Sie vornehmen können, wird der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Barrierefreiheitshilfen, die ein Screenreader-Nutzer haben kann, ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte in etwa so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich dadurch zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt gehen, und benachrichtigt Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element, sodass Sie in dem Tempo weitermachen können, das für Sie angenehm ist.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Screenreadern eine Liste aller Überschriften aufrufen, um sie als praktisches Inhaltsverzeichnis zu verwenden, um spezifische Inhalte zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw. mithilfe von Zeilenumbrüchen und fügen HTML-Elemente ausschließlich für das Styling hinzu, etwas wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, womit er den Benutzer leiten könnte, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können und die gesamte Seite als einzelner großer Block gesehen wird, sodass sie einfach in einem Zug vorgelesen wird.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu gestalten oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann sich ebenfalls auf die Barrierefreiheit auswirken. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachausdrücke oder umgangssprachlichen Begriffe enthält. Dies kommt nicht nur Menschen mit kognitiven oder anderen Beeinträchtigungen zugute; es hilft auch Lesern, für die der Text nicht in ihrer Muttersprache verfasst wurde, jüngeren Menschen… praktisch jedem! Abgesehen davon sollten Sie versuchen, Zeichen und Sprache zu vermeiden, die von Screenreadern nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie nach Möglichkeit keine Striche. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Erläutern Sie Abkürzungen — anstatt Jan zu schreiben, schreiben Sie Januar.
- Erklären Sie Akronyme mindestens ein- oder zweimal und verwenden Sie dann das <abbr>-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Abschittelemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, z. B. Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise zu den Inhalten zu geben, die sie durchblättern.

Zum Beispiel könnte eine moderne Inhaltsstruktur in etwa wie folgt aussehen:

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

Ein [vollständiges Beispiel finden Sie hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Neben einer guten Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später mithilfe von CSS an die gewünschte Stelle verschieben, aber Sie sollten mit der richtigen Quellreihenfolge beginnen, sodass das, was den Screenreader-Nutzern vorgelesen wird, sinnvoll ist.

### Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formularsteuerelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreiheitsaspekte, die beim Erstellen solcher Steuerelemente zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit behandeln.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass diese standardmäßig mit der Tastatur manipuliert werden können. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) an). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Mal sollten Sie sehen, dass die Tabulatorfokussierung beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (er unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie sehen können, welches Element fokussiert ist.

![Drei Schaltflächen mit den Texten "Click me!", "Click me too!" und "And me!" jeweils in ihnen. Die dritte Schaltfläche hat eine blaue Kontur um sie herum, um den aktuellen Tabfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwicklertools eine Überlagerung aktivieren, die die Tabulatorreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, um die Schaltflächen eine Nachricht anzeigen zu lassen), oder anfangen zu tippen, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Pfeiltasten auf- und abwärts zwischen ihnen wechseln.

Im Grunde erhalten Sie dieses Verhalten kostenlos, nur indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwendet werden (einschließlich des {{htmlelement("label")}}-Elements für Formularsteuerelemente).

Dies ist jedoch ein weiterer Fall, in dem Menschen manchmal seltsame Dinge mit HTML tun. Zum Beispiel sehen Sie manchmal Schaltflächen, die mit einem {{htmlelement("div")}} ausgezeichnet werden:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Solcher Code wird jedoch nicht empfohlen — Sie verlieren sofort die native Tastaturbedienbarkeit, die Sie gehabt hätten, wenn Sie schlichtweg {{htmlelement("button")}}-Elemente verwendet hätten, außerdem erhalten Sie keinen der standardmäßigen CSS-Stile, die Schaltflächen erhalten. Im seltenen bis nicht vorhandenen Fall, dass Sie ein Nicht-Schaltflächenelement für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standardfunktionen, einschließlich Tastatur- und Mausklickunterstützung.

#### Tastaturbedienbarkeit wieder einbauen

Das Hinzufügen solcher Vorteile erfordert ein wenig Arbeit (ein Beispiel finden Sie in unserem Beispiel [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) — sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich über Tab) indem wir jedem das Attribut `tabindex="0"` zuweisen. Wir fügen auch `role="button"` hinzu, damit Screenreader-Nutzer wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Im Grunde ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut in erster Linie dazu gedacht, abzuhakbaren Elementen eine benutzerdefinierte Tabulatorreihenfolge zu ermöglichen (in positiver Zahlenreihenfolge festgelegt), anstatt einfach der Standardquellenreihenfolge zu folgen. Dies ist fast immer eine schlechte Idee, da es zu Verwirrung führen kann. Verwenden Sie es nur, wenn es wirklich nötig ist, zum Beispiel wenn das Layout Dinge in einer sehr anderen visuellen Reihenfolge zeigt als der Quellcode und Dinge logischer funktionieren sollen. Es gibt zwei andere Optionen für `tabindex`:

- `tabindex="0"` — wie oben erwähnt, ermöglicht dieser Wert das Tabbarkeitselementen, die normalerweise nicht Tabbar sind, Tabbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies erlaubt es normalerweise nicht-tabbaren Elementen, programmatisch fokussierbar zu werden, z. B. über JavaScript oder als Ziel von Links.

Während der obige Zusatz es uns erlaubt, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dafür mussten wir das folgende Stück JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste gedrückt wurde, über die [`key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft des Ereignisobjekts; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element zurück, das derzeit auf der Seite fokussiert ist.

Dieser zusätzliche Aufwand, um die Funktionalität wiederherzustellen, ist enorm. Und es gibt sicher andere Probleme damit. **Besser, gleich das richtige Element für die richtige Aufgabe zu verwenden.**

#### Verwenden Sie sinnvolle Textbeschriftungen

UI-Steuerelement-Textbeschriftungen sind für alle Nutzer sehr nützlich, aber besonders wichtig für Nutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Click here" für Ihre Beschriftungen, da Screenreader-Nutzer manchmal eine Liste von Schaltflächen und Formularsteuerelementen aufrufen. Der folgende Screenshot zeigt, wie unsere Steuerelemente von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formulareingabebeschriftungen, die von der VoiceOver-Software auf dem Mac gelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button', die verschiedenen Formularelementen wie Schaltflächen, Textfelder und Links gegeben wurden](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl allein gelesen als auch im Kontext des Absatzes, in dem sie sich befinden, Sinn ergeben. Zum Beispiel zeigt das Folgende ein Beispiel für guten Linktext:

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
> Sie können viel mehr über die Implementierung und Best Practices von Links in unserem Artikel [Creating links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) erfahren. Sie können auch einige gute und schlechte Beispiele in [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formbeschriftungen sind auch wichtig, um Ihnen einen Hinweis zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das Folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht sehr nützlich für Nutzer mit Behinderungen. Es gibt nichts im obigen Beispiel, das die Beschriftung eindeutig mit der Formulareingabe assoziiert und deutlich macht, wie man sie ausfüllt, wenn man sie nicht sehen kann. Wenn Sie mit einigen Screenreadern darauf zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie „Bearbeiten Sie den Text“.

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung eindeutig mit der Eingabe assoziiert; die Beschreibung wird eher so aussehen: „Füllen Sie Ihren Namen ein: Text bearbeiten“.

![Eine gute Formularbeschriftung, die 'Füllen Sie Ihren Namen ein' liest, wird einem Textinput-Formularsteuerelement gegeben.](voiceover-good-form-label.png)

Als zusätzliches Bonus in den meisten Browsern bedeutet das Verknüpfen einer Beschriftung mit einer Eingabe, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe eine größere Trefferfläche, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularexamples in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung zur Bedeutung richtiger Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können, in folgendem Video:

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

Aber es gibt Probleme — es gibt keine Möglichkeit für einen Screenreader-Nutzer, Zeilen oder Spalten als Datengruppierungen zu assoziieren. Dazu müssen Sie wissen, was die Überschriftenzeilen sind und ob sie Zeilen, Spalten usw. anführen. Im obigen Beispiel kann dies nur visuell geschehen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich jetzt unser [Punkbands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen sehen:

- Tabellenüberschriften sind mithilfe von {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Das gibt zum Verzehr durch Screenreader komplette Datengruppen als einzelne Einheiten.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements machen beide Ähnliches — sie fungieren als Alt-Text für eine Tabelle und geben einem Screenreader-Nutzer eine nützliche schnelle Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Nutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Man benötigt nicht unbedingt beide.

> [!NOTE]
> Sehen Sie sich unseren Artikel [HTML table accessibility](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) for more details über barrierefreie Datentabellen an.

## Textalternativen

Während Textinhalte von Natur aus barrierefrei sind, kann dasselbe nicht unbedingt für multimediale Inhalte gesagt werden — Bild- und Videoinhalte können nicht von sehbehinderten Menschen gesehen werden und Audiocontent kann nicht von hörgeschädigten Menschen gehört werden. Wir behandeln Video- und Audiocontent ausführlich in [Accessible multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element betrachten.

Wir haben ein einfaches Beispiel geschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

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

Das erste Bild bietet einem Screenreader-Nutzer nicht wirklich viel Hilfe — VoiceOver liest zum Beispiel „/dinosaur.png, Bild“ vor. Es liest den Dateinamen vor, um irgendwie zu helfen. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier irgendeiner Art handelt, aber oft werden Dateien mit maschinengenerierten Dateinamen (z. B. von einer Digitalkamera) hochgeladen, und diese Dateinamen würden wahrscheinlich keinen Kontext für den Inhalt des Bildes bieten.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalte in ein Bild einfügen — Screenreader haben keinen Zugriff darauf. Es gibt auch andere Nachteile — Sie können es nicht auswählen und kopieren/einfügen. Machen Sie das einfach nicht!

Wenn ein Screenreader das zweite Bild findet, liest er das gesamte alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung, nicht nur sinnvolle Dateinamen bei Nichtvorhandensein von so genannten Alt-Texten zu haben, sondern auch sicherzustellen, dass wo immer möglich Alt-Text in `alt`-Attributen bereitgestellt wird.

Beachten Sie, dass der Inhalt des `alt`-Attributs immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, bieten sollte. Der Alt-Text sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden und nicht im umgebenden Text enthalten sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen im Bild, die für einen potenziellen Hundebesitzer relevant sind und nicht im umgebenden Text Dupliziert werden, enthalten sein. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiges Terrier mit sehr kurzen Haaren, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist dies nicht im `alt` enthalten. Da die Biografie des Hundes wahrscheinlich keine Haarlänge, Farbkombinationen oder Spielzeugvorlieben enthält, die der potenzielle Besitzer wissen muss, sind diese enthalten. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustieres und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer erreichen kann und im Kontext relevant sind, sollten vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Jedes persönliche Wissen oder zusätzliche Beschreibungen sollten hier nicht eingebaut werden, da sie für Personen, die das Bild zuvor nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht vom Bild wissen kann, dann schließen Sie es nicht ein.

Eine Sache, die zu berücksichtigen ist, ist, ob Ihre Bilder in Ihrem Inhalt eine Bedeutung haben oder ob sie rein dekorativ sind und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Empty alt attributes](#leere_alt-attribute)) oder diese einfach als CSS-Hintergrundbilder auf der Seite zu platzieren.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images), um eine Menge mehr Informationen über die Implementierung und Best Practices von Bildern zu erhalten.
> Sie können auch [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) prüfen, um zu lernen, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den den Text umgebenden Text einfügen oder in einem `title`-Attribut, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den Alt-Text, das Title-Attribut und den Dateinamen vor. Darüber hinaus zeigen Browser Title-Text als Tooltips an, wenn man mit der Maus darüber fährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla Rote Dinosaurier" der als Tooltip bei Mouseover angezeigt wird.](title-attribute.png)

Werfen wir einen weiteren kurzen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Bildbeschreibung als regulären Textabsatz präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als den Alt-Text/Label für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die Entwickler dazu befähigt, zusätzliche Semantik ihrem Markup hinzuzufügen, um die Barrierefreiheit für Screenreader zu verbessern, wo nötig.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (es kann alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Während es gemischte Unterstützung für die Zuordnung von Bildunterschriften zu Ihren Abbildungen durch Screenreader gibt, erstellt das Einschließen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Zuordnung, wenn keine vorhanden ist. Das gesagt, ist die Elementstruktur nützlich für CSS-Styling und bietet außerdem eine Möglichkeit, eine Beschreibung des Bildes zusammen mit ihm in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in das Design einer Seite aufgenommen wird, sein primärer Zweck jedoch visueller Schmuck ist. Sie werden im oben genannten Codebeispiel feststellen, dass das `alt`-Attribut des Bildes leer ist — dies dient dazu, dass Screenreader das Bild wahrnehmen, jedoch nicht versuchen, das Bild zu beschreiben (stattdessen würden sie einfach „Bild“ oder ähnlich sagen).

Der Grund, ein leeres `alt` anstelle von gar nichts einzuschließen, ist, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visueller Schmuck zur Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild rein dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente aufnehmen. Eine andere Alternative ist die Verwendung des aria-Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch verhindert, dass Screenreader alternativ Texte vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut), je nach Verwendungsweise, können Barrierefreiheit unterstützen oder beeinträchtigen. Von Natur aus sind Links in der Erscheinung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitt von Dokumenten zu navigieren. Sie können auch schädlich sein, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich in unerwarteten Weisen verhalten.

### Link Styling

Von Natur aus sind Links visuell anders als anderer Text, sowohl in Farbe als auch in der [text-decoration](/de/docs/Web/CSS/text-decoration), mit Links die standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn besucht, und mit einem [focus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte niemals als einzige Methode verwendet werden, um Links von nicht verlinkenden Inhalten zu unterscheiden. Linktext-Farbe, wie aller Text, muss signifikant unterschiedlich zur Hintergrundfarbe sein ([ein 4.5:1-Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant unterschiedlich von nicht-verlinkendem Text sein, mit einem Minduestranforderungs-Kontrast von 3:1 zwischen Linktext und umliegendem Text und zwischen Standard-, besuchten und Fokus-/Aktiv-Zuständen und einem 4.5:1-Kontrast zwischen allen diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Bookmarken, und wenn JavaScript noch heruntergeladen wird, Fehlschläge oder deaktiviert ist. Dies überträgt auch falsche Semantik auf unterstützende Technologie (z. B. Screenreader). In diesen Fällen wird empfohlen, stattdessen eine {{HTMLElement("button")}} zu verwenden. Allgemein sollten Sie ein Anker nur für die Navigation unter Verwendung einer richtigen URL verwenden.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster bei der `target="_blank"`-Deklaration geöffnet werden, sowie Links, deren `href`-Wert auf eine Dateiressource verweist, sollten einen Indikator über das Verhalten beinhalten, das beim Aktivieren des Links erfolgt.

Personen mit Sehbehinderungen, denen die Nutzung von Screenreader-Technologie oder die kognitive Schwierigkeiten haben, könnten verwirrt werden, wenn der neue Tab, das neue Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software kündigen das Verhalten möglicherweise nicht einmal an.

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten solcher Links zu signalisieren, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs von einem Link nur wenn nötig | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Geben Sie den Benutzern eine Warnung beim Öffnen eines neuen Fensters | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skiplinks

Ein Skiplink, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich an dem öffnenden {{HTMLElement("body")}}-Element platziert wird und an den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu umgehen, die auf mehreren Seiten einer Website wiederholt werden, wie z. B. einen Header einer Website und die primäre Navigation.

Skiplinks sind besonders nützlich für Menschen, die mit der Hilfe von unterstützender Technologie wie Schalterkontrolle, Sprachbefehl oder Mund-Sticks/Kopfstäbe navigieren, wo die Handlung des sich Durcharbeitens durch wiederholende Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden Sie Skip-Navigationslinks - Das A11Y Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung des Erfolgs-Kriteriums 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiver Inhalte, einschließlich Anker, die in enger visueller Nähe zueinander platziert wurden, sollten Raum eingefügt bekommen, um sie zu trennen. Diese Abstände sind für Menschen von Vorteil, die an Feinmotorikkontrolle leiden und möglicherweise versehentlich das falsche interaktive Content beim Navigieren aktivieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten jetzt gut mit dem Schreiben von barrierefreiem HTML für die meisten Gelegenheiten vertraut sein. Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
