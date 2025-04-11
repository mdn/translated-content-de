---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die korrekten Hypertext Markup Language-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und einem <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegenden Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Zweck", da der Browser viele integrierte Barrierefreiheitshooks bereitstellt.</li>
          <li>Beste Praktiken für Barrierefreiheit wie Alt-Text, gute Link-Best, Formularbeschriftungen sowie Tabellenreihen- und -spaltenüberschriften und -abgrenzung.</li>
          <li>Verwendung einfacher klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Je mehr Sie über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — desto häufiger werden Sie ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH oder Plain Old Semantic HTML genannt). Dies bedeutet, die korrekten HTML-Elemente so oft wie möglich für ihren beabsichtigten Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript praktisch jedes HTML-Element so verhalten lassen, wie Sie es möchten. Zum Beispiel könnte eine Steuertaste zum Abspielen eines Videos auf Ihrer Website so ausgezeichnet werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das korrekte Element für den Zweck zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur einige geeignete Standardstile (die Sie wahrscheinlich überschreiben möchten), sie bieten auch eine integrierte Tastaturzugänglichkeit — Benutzer können zwischen Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML nimmt nicht mehr Zeit in Anspruch als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser: Semantisches Markup bietet über die Barrierefreiheit hinausgehende Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, außerdem ist es wohl einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist wohl leichter in der Dateigröße als nicht-semantischer Spaghetticode und einfacher, responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung als in nicht-semantischen `<div>`s enthaltene Schlüsselwörter, sodass Ihre Dokumente von Kunden besser gefunden werden können.

Lassen Sie uns weitermachen und zugängliches HTML im Detail betrachten.

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für den Job verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen die Barrierefreiheit bei falscher Handhabung erheblich beeinträchtigt wird.

Draußen im Netz ist die Wahrheit, dass die Leute sehr seltsame Dinge mit HTML-Markup machen. Häufig resultiert der Missbrauch von HTML aus veralteten Praktiken, die noch nicht verschwunden sind, aber manchmal tritt er auf, weil Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechtes mit gutem semantischen Markup ersetzen, wann immer möglich, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML von [serverseitigem Code](/de/docs/Learn_web_development/Extensions/Server-side) oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von serverseitigem Code oder Web-Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Inhalte Dritter auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Hilfeleistungen für Nutzer von Bildschirmleseprogrammen ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte wie folgt aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Bildschirmleseprogramm ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie dies ausprobieren, werden Sie feststellen, dass dies ziemlich leicht zu navigieren ist:

1. Das Bildschirmleseprogramm liest jede Überschrift vor, während Sie den Inhalt durchgehen, und zeigt an, was eine Überschrift ist, was ein Absatz ist usw.
2. Es stoppt nach jedem Element, sodass Sie in einem Tempo vorangehen können, das für Sie angenehm ist.
3. Sie können in vielen Bildschirmleseprogrammen zur nächsten/vorherigen Überschrift springen.
4. Sie können auch eine Liste aller Überschriften in vielen Bildschirmleseprogrammen anzeigen, sodass Sie sie als praktische Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur zu Stylingzwecken hinzu, etwa so:

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

Wenn Sie unser längeres Beispiel mit einem Bildschirmleseprogramm ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung haben — das Bildschirmleseprogramm hat nichts, als Wegweiser zu verwenden, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die gesamte Seite wird als ein einziger riesiger Block angesehen, sodass sie auf einmal, in einem Stück, vorgelesen wird.

Es gibt auch andere Probleme neben der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Auch die Sprache, die Sie verwenden, kann die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Jargon- oder Slangbegriffe enthält. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es kommt Lesern zugute, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen ... jedem, in der Tat! Abgesehen davon sollten Sie vermeiden, Sprache und Zeichen zu verwenden, die vom Bildschirmleseprogramm nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Striche, wenn Sie es vermeiden können. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — statt Jan zu schreiben, schreiben Sie Januar.
- Abkürzungen erweitern, mindestens ein- oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag verwenden, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Sektionierungs-Elemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, z. B. für die Navigation ({{htmlelement("nav")}}), den Footer ({{htmlelement("footer")}}) und sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Bildschirmleseprogramme (und andere Werkzeuge), um Benutzern zusätzliche Hinweise über die Inhalte zu geben, durch die sie navigieren.

Ein modernes Inhaltsstrukturbeispiel könnte wie folgt aussehen:

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

Sie können ein [vollständiges Beispiel hier finden](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Zusätzlich zu guten Semantiken und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später mit CSS dorthin platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge zunächst richtig machen, damit das, was Benutzer von Bildschirmleseprogrammen vorgelesen bekommen, Sinn ergibt.

### Verwenden Sie semantische UI-Steuerelemente, wo möglich

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren können — meistens Tasten, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Barrierefreiheitsaspekte betrachten, die bei der Erstellung solcher Steuerelemente beachtet werden sollten. Spätere Artikel über WAI-ARIA und Multimedia werden sich mit anderen Aspekten von UI-Zugänglichkeit befassen.

Ein Schlüsselaspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur aus manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Drücken sollten Sie sehen, wie der Tabulatorfokus beginnt, durch die verschiedenen fokussierbaren Elemente zu wechseln. Die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (er unterscheidet sich leicht zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Tasten mit dem Text "Klicken Sie mich!", "Klicken Sie mich auch!" und "Und mich!" darin. Die dritte Taste hat einen blauen Umriss, um den aktuellen Tabulatorfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können eine Überlagerung aktivieren, die die Tabreihenfolge der Seite in Ihren Entwicklertools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Taste zu drücken (wir haben etwas JavaScript hinzugefügt, damit die Tasten eine Nachricht auslösen), oder mit der Eingabe beginnen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element mit den Pfeiltasten nach oben und unten zwischen seinen Optionen umgeschaltet werden.

Sie erhalten dieses Verhalten im Grunde kostenlos, indem Sie einfach die geeigneten Elemente verwenden, zum Beispiel:

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

Das bedeutet, Links, Tasten, Formularelemente und Beschriftungen angemessen (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente) zu verwenden.

Dies ist jedoch ein weiterer Fall, in dem Menschen manchmal seltsame Dinge mit HTML machen. Beispielsweise sehen Sie manchmal Knöpfe, die mit {{htmlelement("div")}}s ausgezeichnet sind:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach die {{htmlelement("button")}}-Elemente verwendet hätten, und erhalten zudem keines der standardmäßigen CSS-Styling, das Buttons bekommen. Im seltenen bis nicht existierenden Fall, dass Sie ein nicht-button-Element für einen Button verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle standardmäßigen Button-Funktionen, einschließlich Tastatur- und Maustastenunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Das Hinzufügen solcher Vorteile erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir schließen auch `role="button"` ein, damit Benutzer von Bildschirmleseprogrammen wissen, dass sie das Element fokussieren und damit interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hauptsächlich dazu gedacht, tabulatorfähigen Elementen eine benutzerdefinierte Tabreihenfolge zu geben (in positiver numerischer Reihenfolge angegeben), anstatt einfach in ihrer standardmäßigen Quellreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu größerer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich müssen, z.B. wenn das Layout Dinge in einer sehr anderen visuellen Reihenfolge zeigt als der Quellcode, und Sie möchten, dass Dinge logischer arbeiten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht tabulatorfähig sind, tabulatorfähig zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht es Elementen, die normalerweise nicht tabulatorfähig sind, programmgesteuert fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Während die oben genannte Ergänzung es uns ermöglicht, zu den Buttons zu tabben, ermöglicht sie es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; falls die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion im `onclick`-Handler des Buttons mit `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element zurück, das gerade auf der Seite fokussiert ist.

Das ist eine Menge zusätzliche Mühe, um die Funktionalität wieder einzubauen. Und es wird sicherlich andere Probleme damit geben. **Besser, gleich das richtige Element für den richtigen Job zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Textbeschriftungen der UI-Steuerelemente sind für alle Benutzer sehr nützlich, aber sie richtig zu machen, ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Button- und Linktextbeschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Klicken Sie hier" für Ihre Beschriftungen, da Benutzer von Bildschirmleseprogrammen manchmal eine Liste mit Buttons und Formularelementen erhalten. Der folgende Screenshot zeigt unsere Steuerelemente, aufgelistet von VoiceOver auf einem Mac.

![Liste von Formularbeschriftungen, die von VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie "happy menu button", die verschiedenen Formularelementen wie Button, Textfeld und Link gegeben werden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext heraus, allein gelesen, ebenso wie im Zusammenhang des Paragraphen, in dem sie sich befinden, sinnvoll sind. Zum Beispiel zeigt das folgende Beispiel einen guten Linktext:

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
> Sie können in unserem Artikel über [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) viel mehr über die Umsetzung von Links und Best Practices erfahren. Außerdem gibt es gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende Beispiel scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht besonders nützlich für behinderte Benutzer. Im obigen Beispiel gibt es nichts, das die Beschriftung eindeutig mit dem Formulareingabefeld verbindet und es klar macht, wie es ausgefüllt werden muss, wenn Sie es nicht sehen können. Wenn Sie dies mit einigen Bildschirmleseprogrammen zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird die Beschriftung eindeutig mit dem Eingabefeld verbunden; die Beschreibung wird mehr wie "Füllen Sie Ihren Namen ein: Text bearbeiten" lauten.

![Eine gute Formularbeschriftung, die 'Füllen Sie Ihren Namen ein' liest, wird einem Texteingabeformular-Steuerelement zugeordnet. ](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet die Zuordnung einer Beschriftung zu einem Formulareingabefeld in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies vergrößert die Trefferfläche des Eingabefeldes, was es einfacher macht zu wählen.

> [!NOTE]
> Sie können gute und schlechte Formbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung zur Bedeutung richtiger Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können, im folgenden Video:

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Benutzer von Bildschirmleseprogrammen, Reihen oder Spalten als Daten-Gruppierungen zu verbinden. Dazu müssen Sie die Kopfzeilenreihen kennen und ob sie Reihen oder Spalten überschreiben. Dies kann nur visuell für die obige Tabelle gemacht werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich jetzt unser [Punkband-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen sehen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Reihen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Daten-Gruppierungen, die von Bildschirmleseprogrammen als Einheit konsumiert werden können.
- Die {{htmlelement("caption")}}-Elemente und das `summary`-Attribut des `<table>`-Elements machen beide eine ähnliche Arbeit — sie agieren als Alt-Text für eine Tabelle, der einem Benutzer von Bildschirmleseprogrammen eine nützliche, schnelle Zusammenfassung des Tabelleninhalts gibt. Das `<caption>`-Element wird allgemein bevorzugt, da es auch für sehende Benutzer zugänglich ist, die es ebenfalls nützlich finden könnten. Sie brauchen nicht wirklich beides.

> [!NOTE]
> Siehe unseren Artikel über die [Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details über barrierefreie Datentabellen.

## Textalternativen

Während textuelle Inhalte von Natur aus zugänglich sind, kann nicht dasselbe für multimediale Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiinhalte können von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiinhalte ausführlich im Abschnitt [Zugängliche Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir die Barrierefreiheit des einfachen {{htmlelement("img")}}-Elements betrachten.

Wir haben ein einfaches Beispiel vorbereitet, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes zeigt:

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

Das erste Bild bietet beim Betrachten durch ein Bildschirmleseprogramm dem Benutzer nicht viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen aus, um einige Hilfe zu bieten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier handelt, aber oft können Dateien mit maschinen-generierten Dateinamen hochgeladen werden (z. B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalte in ein Bild einfügen — Bildschirmleseprogramme können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können es nicht auswählen und kopieren/einfügen. Machen Sie es einfach nicht!

Wenn ein Bildschirmleseprogramm auf das zweite Bild stößt, liest es das gesamte alt-Attribut vor — "Ein rotes Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies unterstreicht die Bedeutung, nicht nur bedeutungsvolle Dateinamen zu verwenden, falls **alten Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text immer im `alt`-Attribut bereitgestellt wird, wann immer möglich.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und seiner visuellen Aussage enthalten. Das Alt sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden und die im umgebenden Text nicht dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild hängt vom Kontext ab. Zum Beispiel, wenn das Bild von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierschutzgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und relevant für einen potenziellen Hundebesitzer sind und die im umgebenden Text nicht dupliziert werden, einbezogen werden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Fell, mit einem Tennisball im Mund."` ist angemessen. Da die Größe und Rasse von Fluffy wahrscheinlich im Begleittext erwähnt werden, wird das nicht im `alt` enthalten. Wenn jedoch die Haarlänge, Farben oder Spielzeugvorlieben, die der potenzielle Besitzer wissen muss, nicht erwähnt sind, wird dies einbezogen. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Diese Informationen sind im Kontext der Adoption des Haustiers nicht wichtig und werden daher nicht aufgenommen. Alle Informationen, die das Bild vermittelt, auf die ein sehender Benutzer zugreifen kann und die im Kontext relevant sind, sollten vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Menschen, die das Bild vorher nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn ein sehender Benutzer das nicht vom Bild erkennen kann, sollte es nicht enthalten sein.

Eine Sache, die berücksichtigt werden muss, ist, ob Ihre Bilder in Ihrem Inhalt eine Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu verwenden (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Lesen Sie für viel mehr Informationen über Bildumsetzung und Best Practices [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images). Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) ansehen, um zu lernen, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den umgebenden Text einfügen oder innerhalb eines `title`-Attributs, wie oben gezeigt. In diesem Fall lesen die meisten Bildschirmleseprogramme den Alt-Text, das Title-Attribut und den Dateinamen vor. Zusätzlich zeigen Browser Titeltexte als Tooltips bei Mausüberfahrt an.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The Mozilla Red Dinosaur", der als Tooltip bei Mausüberfahrt angezeigt wird.](title-attribute.png)

Lassen Sie uns einen kurzen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als normalen Textabschnitt präsentiert, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Bildschirmleseprogramme diesen Absatz als Alt-Text/Beschriftung für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern erlaubt, zusätzliche Semantik in ihr Markup einzufügen, um die Barrierefreiheit für Sprachsynthesen zu verbessern, wo nötig.

### Figuren und Figurbeschriftungen

HTML umfasst zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht notwendigerweise ein Bild) mit einer Figurbeschriftung verbinden:

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

Obwohl es gemischte Unterstützung für Bildschirmleser bei der Verknüpfung von Figurbeschriftungen mit ihren Figuren gibt, schafft das Hinzufügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verknüpfung, falls keine vorhanden ist. Das gesagt, die Elementstruktur ist nützlich für CSS-Styling, und es bietet eine Möglichkeit, eine Beschreibung des Bildes neben diesem im Quelltext zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, bei denen ein Bild im Design einer Seite enthalten ist, aber sein Hauptzweck ist visuelle Dekoration. Sie werden im obigen Beispielcode bemerken, dass das `alt`-Attribut des Bildes leer ist — Das soll Bildschirmleseprogramme erkennen lassen, dass das Bild vorhanden ist, sie es aber nicht beschreiben (anstatt dessen würden sie einfach "Bild" oder so ähnlich sagen).

Der Grund, warum ein leeres `alt` anstatt keines zu verwenden, ist, dass viele Bildschirmleseprogramme die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt ist. Im obigen Beispiel dient das Bild als ein visuelles Dekorelement der Überschrift, mit der es verbunden ist. In solchen Fällen, und in Fällen, bei denen ein Bild nur der Dekoration dient und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine weitere Alternative besteht darin, das [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) Attribut zu verwenden, da dies ebenfalls verhindert, dass Bildschirmleseprogramme alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) können je nach ihrer Verwendung die Barrierefreiheit unterstützen oder beeinträchtigen. Standardmäßig sind Links in der Darstellung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit jedoch auch beeinträchtigen, wenn ihr barrierefreies Styling entfernt wird oder wenn JavaScript sie dazu führt, sich auf unerwartete Weise zu verhalten.

### Link-Styling

Standardmäßig sind Links visuell unterschiedlich von anderem Text in sowohl Farbe als auch [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht werden, und mit einem [focus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht die einzige Methode sein, um Links von nicht-verknüpftem Inhalt zu unterscheiden. Die Farbe des Linktexts, wie aller Texte, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein 4.5:1-Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant unterschiedlich vom nicht-verknüpften Text sein, mit einem minimalen Kontrastanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Standard-, Besuchs- und Fokus/Aktivzuständen und einem 4.5:1-Kontrast zwischen allen diesen Zustand-Farben und der Hintergrundfarbe.

### `onclick` Ereignisse

Anker-Tags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudobuttons zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript noch geladen wird, in einen Fehler läuft oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z. B. Bildschirmleseprogramme). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker nur für die Navigation zu einer korrekten URL verwenden.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die durch die Deklaration `target="_blank"` in einem neuen Tab oder Fenster geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresource verweist, sollten einen Hinweis über das Verhalten enthalten, das auftritt, wenn der Link aktiviert wird.

Menschen mit sehbehindernden Bedingungen, die mit Hilfe von Bildschirmlesetechnologie oder bei kognitiven was navigieren, können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware geben möglicherweise sogar das Verhalten nicht bekannt.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

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

Wenn ein Icon anstelle von Text verwendet wird, um das Verhalten solch eines Links zu verdeutlichen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) umfasst.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis von WCAG, Erklärung der Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur, wenn notwendig | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern vorher Bescheid geben, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a` Element, das so nah wie möglich an das Öffnen des {{HTMLElement("body")}}-Elements platziert wird und das den Beginn des Hauptinhalts der Seite verlinkt. Dieser Link erlaubt es Menschen, wiederholt auf mehreren Seiten einer Website enthaltenen Inhalt zu überspringen, wie z.B. den Header und die primäre Navigation der Website.

Skip-Links sind insbesondere nützlich für Menschen, die mit der Hilfe von unterstützender Technologie navigieren, wie etwa Schaltersteuerung, Sprachbefehl oder Mundstock/Kopfstäbe, wobei der Vorgang, sich durch wiederholte Links zu bewegen, eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Links - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis von WCAG, Erklärung der Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiven Inhalts — einschließlich Anker — die in visueller Nähe zueinander platziert sind, sollten durch das Einfügen von Abstand getrennt werden. Dieser Abstand ist vorteilhaft für Menschen, die unter feinen motorischen Steuerungsproblemen leiden und möglicherweise versehentlich das falsche interaktive Element aktivieren, während sie navigieren.

Der Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handtremor und das große Schaltflächen-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sehen Sie sich [Testen Sie Ihre Fähigkeiten: HTML-Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML) an, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen.

## Zusammenfassung

Sie sollten nun gut im Schreiben von barrierefreiem HTML für die meisten Fälle versiert sein. Unser WAI-ARIA-Grundlagenartikel hilft, Lücken in diesem Wissen zu schließen, aber dieser Artikel hat die Grundlagen behandelt. Als Nächstes werden wir CSS und JavaScript erkunden und wie deren gute oder schlechte Nutzung die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
