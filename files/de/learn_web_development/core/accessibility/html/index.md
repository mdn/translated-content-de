---
title: "HTML: Eine gute Grundlage für Zugänglichkeit"
short-title: Zugängliches HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem immer die richtigen Hypertext Markup Language-Elemente für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML eingesetzt werden kann, um maximale Zugänglichkeit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Zugänglichkeitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Job", da der Browser viele integrierte Zugänglichkeits-Mechanismen bietet.</li>
          <li>Zugängliche Best Practices wie Alt-Text, gute Linkpraktiken, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften sowie Scoping.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastatur-Zugänglichkeit.</li>
          <li>Die Bedeutung der Quellenreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Zugänglichkeit

Je mehr Sie über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — desto mehr werden Sie ein gemeinsames Thema erkennen: die Bedeutung der Verwendung von semantischem HTML (manchmal POSH genannt, oder Plain Old Semantic HTML). Das bedeutet, die richtigen HTML-Elemente so weit wie möglich für den vorgesehenen Zweck zu verwenden.

Sie könnten sich fragen, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um fast jedes HTML-Element so zu gestalten, dass es sich in einer beliebigen Art und Weise verhält, die Sie wollen. Zum Beispiel könnte ein Steuerungsknopf zum Abspielen eines Videos auf Ihrer Seite so markiert sein:

```html
<div>Play video</div>
```

Aber wie Sie später noch detaillierter sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur eine geeignete Standard-Styling, das Sie wahrscheinlich überschreiben wollen, sondern auch eine eingebaute Tastatur-Zugänglichkeit — Benutzer können zwischen Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML erfordert nicht länger zum Schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es konsequent von Beginn Ihres Projekts an tun. Noch besser, semantisches Markup hat über die Zugänglichkeit hinaus weitere Vorteile:

1. **Einfacher zu entwickeln** — wie bereits erwähnt, erhalten Sie einige Funktionalitäten kostenlos, und es ist wahrscheinlich einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML hat möglicherweise eine geringere Dateigröße als nicht-semantischer Spaghetticode und ist leichter responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen legen mehr Wert auf Schlüsselwörter innerhalb von Überschriften, Links usw. als auf Schlüsselwörter, die in nicht-semantischen `<div>`s inkludiert sind, sodass Ihre Dokumente besser von Kunden gefunden werden können.

Schauen wir uns nun zugängliches HTML im Detail an.

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für den Job verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen die Zugänglichkeit erheblich beeinträchtigt wird, wenn sie nicht ordnungsgemäß gehandhabt wird.

Im Web ist es eine Tatsache, dass Leute sehr seltsame Dinge mit HTML-Markup machen. Oft resultiert der Missbrauch von HTML aus alten Praktiken, die noch nicht verschwunden sind, aber manchmal geschieht es, weil Autoren es nicht besser wissen. Was auch immer der Fall ist, Sie sollten schlechten Code wann immer möglich durch gutes semantisches Markup ersetzen, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML aus [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu entfernen — Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie haben möglicherweise Drittinhalte auf Ihrer Seite (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird zur Sache der Zugänglichkeit beitragen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Zugänglichkeitshilfen, die ein Benutzer eines Screenreaders haben kann, ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, um diese mit einem Screenreader auszuprobieren (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, durch diese zu navigieren, werden Sie feststellen, dass dies ziemlich einfach ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt voranschreiten und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist etc.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen angenehmen Tempo vorankommen können.
3. In vielen Screenreadern können Sie zum nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Screenreadern eine Liste aller Überschriften abrufen, sodass Sie diese als praktische Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur zur Formatierung hinzu, etwas wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, woran er sich orientieren kann, d.h. Sie können kein nützliches Inhaltsverzeichnis abrufen und die ganze Seite wird als ein einziger riesiger Block angesehen, der einfach in einem Zug, komplett durchgelesen wird.

Es gibt auch andere Probleme neben der Zugänglichkeit — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann auch die Zugänglichkeit beeinflussen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht unnötig komplex ist und keine unnötigen Fachbegriffe oder Slang verwendet. Dies nützt nicht nur Menschen mit kognitiven oder anderen Behinderungen, sondern auch Lesern, für die der Text nicht in ihrer Erstsprache geschrieben ist, jüngeren Menschen …, ja, eigentlich allen! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die nicht klar von einem Screenreader gelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn Sie es vermeiden können. Anstatt "5–7" zu schreiben, schreiben Sie "5 bis 7".
- Erweitern Sie Abkürzungen — anstelle von "Jan" schreiben Sie "Januar".
- Erweitern Sie Akronyme, einmal oder zweimal, verwenden Sie dann den [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr) Tag, um sie zu beschreiben.

### Strukturieren Sie Seitenabschnitte logisch

Sie sollten geeignete [Sektionselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel für Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise auf die Inhalte zu geben, die sie navigieren.

Zum Beispiel könnte eine moderne Inhaltsstruktur so aussehen:

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

Zusätzlich zu guter Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellenreihenfolge logisch Sinn machen — Sie können es später immer mit CSS platzieren, wo Sie möchten, aber Sie sollten die Quellenreihenfolge von Anfang an richtig hinbekommen, damit das, was Screenreader-Benutzer vorgelesen bekommen, sinnvoll ist.

### Verwenden Sie, wenn möglich, semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Tasten, Links und Formularsteuerelemente. In diesem Abschnitt betrachten wir die grundlegenden Zugänglichkeitsaspekte, auf die Sie beim Erstellen solcher Steuerelemente achten sollten. Spätere Artikel zu WAI-ARIA und Multimedia werden sich mit weiteren Aspekten der UI-Zugänglichkeit befassen.

Ein Schlüsselpunkt der Zugänglichkeit von UI-Steuerelementen ist, dass Browser sie standardmäßig mit der Tastatur steuern lassen. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Mal sollten Sie sehen, wie der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser eine hervorgehobene Standard-Styling (sie unterscheidet sich leicht zwischen den verschiedenen Browsern), sodass Sie feststellen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Klicken Sie mich an!", "Klicken Sie auch mich an!" und "Und mich!" in ihnen. Die dritte Schaltfläche hat eine blaue Umrandung, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabbing-Reihenfolge der Seite in Ihren Entwicklertools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, damit die Schaltflächen eine Nachricht auslösen), oder beginnen, Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen zur Anzeige bringen und zwischen ihnen mit den Auf- und Abwärtspfeiltasten wechseln.

Dieses Verhalten erhalten Sie im Grunde kostenlos, indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Sie Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwenden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formularsteuerelemente).

Dies ist jedoch ein weiterer Fall, in dem Menschen manchmal seltsame Dinge mit HTML tun. Beispielsweise sehen Sie manchmal Tasten, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastatur-Zugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}} Elemente verwendet hätten, und Sie erhalten keine der Standard-CSS-Stylings, die Tasten haben. Im seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Tasten-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren alle Standard-Tastenverhalten, einschließlich Tastatur- und Maustastenunterstützung.

#### Tastatur-Zugänglichkeit zurück einbauen

Das Wiederherstellen solcher Vorteile erfordert ein wenig Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>` Tasten die Fähigkeit gegeben, fokussiert zu sein (einschließlich über Tab), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir schließen auch `role="button"` ein, damit Benutzer von Screenreadern wissen, dass sie das Element fokussieren und interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut in erster Linie dazu gedacht, fokussierbaren Elementen eine benutzerdefinierte Tab-Reihenfolge zu geben (in positiver numerischer Reihenfolge angegeben), anstatt einfach in ihrer Standard-Quellenreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrungen führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout Sachen in einer sehr anderen visuellen Reihenfolge als der Quellcode zeigt und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert normalerweise nicht-fokussierbaren Elementen, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt normalerweise nicht-fokussierbaren Elementen, programmgesteuert fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Wenn Sie die obige Ergänzung gemacht haben, können Sie zu den Schaltflächen tabben, aber Sie können sie nicht mit der <kbd>Enter</kbd>/<kbd>Return</kbd> Taste aktivieren. Dazu mussten wir das folgende JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Taste gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Arbeit, um die Funktionalität wieder einzubauen. Und es gibt bestimmt noch andere Probleme damit. **Es ist besser, von Anfang an das richtige Element für den richtigen Job zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

UI-Steuerelement-Textbeschriftungen sind sehr nützlich für alle Benutzer, aber besonders für Benutzer mit Behinderungen ist es wichtig, dass sie richtig sind.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Link-Textbeschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Benutzer von Screenreadern manchmal eine Liste von Tasten und Formularsteuerelementen erhalten. Der folgende Screenshot zeigt, wie unsere Steuerelemente von VoiceOver auf einem Mac aufgelistet werden.

![Eine Liste von Formular-Eingabetexten, die von der VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Bezeichnungen wie 'happy menu button`, die verschiedenen Formularsteuerelementen wie Schaltfläche, Textfeld und Link gegeben werden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl aus dem Zusammenhang gerissen Sinn machen als auch im Kontext des Absatzes, in dem sie sich befinden. Zum Beispiel zeigt das folgende Beispiel einen guten Linktext:

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
> Weitere Informationen zur Link-Implementierung und zu Best Practices finden Sie in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links). Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) finden.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Folgendes scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht sehr nützlich für behinderte Benutzer. Im obigen Beispiel gibt es nichts, das die Beschriftung unmissverständlich mit der Formulareingabe verknüpft und es klar macht, wie sie ausgefüllt werden soll, wenn Sie sie nicht sehen können. Wenn Sie dies mit einigen Screenreadern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung im Sinne von "Textbearbeitung."

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung klar mit der Eingabe verbunden; die Beschreibung wird mehr wie "Geben Sie Ihren Namen ein: Textbearbeitung."

![Eine gute Formularbeschriftung, die "Geben Sie Ihren Namen ein" liest, wird einem Text-Eingabeformular-Steuerelement zugeordnet.](voiceover-good-form-label.png)

Zusätzlich haben Sie mit den meisten Browsern, wenn Sie eine Beschriftung mit einer Formulareingabe verknüpfen, die Möglichkeit, durch Klicken auf die Beschriftung das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe einen größeren Trefferbereich, was sie einfacher auszuwählen macht.

> [!NOTE]
> Sie können einige gute und schlechte Formularexamples in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können eine schöne Erklärung zur Bedeutung von richtigen Textbeschriftungen und wie man Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, im folgenden Video finden:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

Eine grundlegende Daten-tabelle kann mit sehr einfachem Markup geschrieben werden, zum Beispiel:

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Zeilen oder Spalten als Gruppierungen von Daten miteinander in Verbindung zu bringen. Dazu müssen Sie wissen, was die Überschriftszeilen sind und ob sie Zeilen, Spalten usw. überspannen. Dies kann nur visuell für die obige Tabelle getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich jetzt unser [Punk-Bands-Tabelle Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können dort ein paar Zugänglichkeitshilfen in Aktion sehen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Das gibt Ihnen vollständige Datengruppen, die von Screenreadern als Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements haben ähnliche Funktionen — sie wirken als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird allgemein bevorzugt, da es auch sehenden Benutzern, die es vielleicht genauso nützlich finden könnten, zugänglich ist. Man braucht nicht unbedingt beides.

> [!NOTE]
> Siehe unseren [Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) Artikel für mehr Details über zugängliche Datentabellen.

## Textalternativen

Während Textinhalte von Natur aus zugänglich sind, kann dasselbe nicht unbedingt für Multimedia-Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Personen nicht gesehen werden, und Audiowiedergaben können von hörbehinderten Personen nicht gehört werden. Wir behandeln Video- und Audioinhalte ausführlich im [Zugängliche Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel schauen wir uns die Zugänglichkeit für das einfache {{htmlelement("img")}}-Element an.

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

Beim ersten Bild bietet der Bildschirmleser dem Benutzer nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um einige Hinweise zu geben. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier handelt, aber oft werden Dateien mit maschinengenerierten Dateinamen hochgeladen (z. B. von einer Digitalkamera), und diese Dateinamen bieten wahrscheinlich keinen Kontext zum Inhalt des Bildes.

> [!NOTE]
> Dies ist der Grund, warum Sie niemals Textinhalte in ein Bild einfügen sollten — Bildschirmleser können es nicht erreichen. Es gibt auch andere Nachteile — Sie können es nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild stößt, liest es das komplette alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der wie ein Mensch aufrecht steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung nicht nur von sinnvoller Dateinamengebung, falls sogenannter **alt-Text** nicht verfügbar ist, sondern auch von der Bereitstellung von Alt-Text in `alt`-Attributen, wo immer möglich.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen sein, was es visuell vermittelt. Das Alt sollte kurz und prägnant sein und alle Informationen umfassen, die im Bild gezeigt werden, die nicht im umgebenden Text dargelegt sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für das Tierrettungsverein ist, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hundebesitzer relevant sind, die nicht im umgebenden Text dupliziert sind, dargelegt werden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."` ist angemessen. Da wahrscheinlich Größe und Rasse von Fluffy im begleitenden Text enthalten sind, werden diese nicht im `alt` vermerkt. Da die Biografie des Hundes jedoch wahrscheinlich keine Haarlänge, Farben oder Spielzeugvorlieben enthält, die der potenzielle Besitzer wissen soll, werden diese enthalten. Ist das Bild draußen oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig in Bezug auf die Adoption und daher nicht enthalten. Alle Informationen, die ein Bild vermittelt, auf die ein sehender Benutzer zugreifen kann und die im Kontext relevant sind, müssen dargelegt werden; nichts darüber hinaus. Halten Sie es kurz, präzise und nützlich.

Persönliche Kenntnisse oder zusätzliche Beschreibungen sollten hier nicht einbezogen werden, da sie nicht nützlich für Leute sind, die das Bild zuvor nicht gesehen haben. Wenn der Ball Fluffys Lieblingsspielzeug ist, oder wenn ein sehender Benutzer das aus dem Bild nicht wissen kann, dann sollten sie es nicht einbeziehen.

Ein weiterer zu berücksichtigender Aspekt ist, ob Ihre Bilder innerhalb Ihrer Inhalte Bedeutung haben, oder ob sie rein zur visuellen Dekoration sind und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach auf der Seite als CSS-Hintergrundbilder einzufügen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images), um mehr über die Implementierung von Bildern und Best-Practices zu erfahren.
> Sie können auch [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) lesen, um zu lernen, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese im Text um das Bild herum plattieren, oder in ein `title`-Attribut, wie oben gezeigt. In diesem Fall werden die meisten Screenreader den alt-Text, den title-Attribut und den Dateinamen vorlesen. In Ergänzung dazu zeigen Browser den title-Text als Hinweise an, wenn mit der Maus darüber gefahren wird.

![Screenshot von einem roten Tyrannosaurus Rex mit dem Text "The Mozilla red dinosaur", der als Tooltip beim Überfahren mit der Maus angezeigt wird.](title-attribute.png)

Lasst uns einen schnellen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir überhaupt kein `alt`-Attribut — stattdessen haben wir unsere Bildbeschreibung als regulären Textabsatz dargestellt, ihm eine `id` gegeben und dann das Attribut `aria-labelledby` verwendet, um auf diese `id` zu verweisen, was bewirkt, dass Screenreader diesen Absatz als Alt-Text/Label für das Bild verwenden. Dies ist besonders nützlich, wenn Sie den gleichen Text für mehrere Bilder als Label verwenden wollen — etwas, das mit `alt` nicht möglich ist.

> **Note:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spezifikation, die es Entwicklern ermöglicht, ihrem Markup zusätzliche Semantik hinzuzufügen, um die Zugänglichkeitskapazitäten von Screenreadern nach Bedarf zu verbessern.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (es kann auch etwas sein, das nicht unbedingt ein Bild ist) mit einer Bildunterschrift verbinden:

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

Während die Unterstützung der Zuordnung von Bildunterschriften mit ihren Abbildungen durch Screenreader gemischt ist, erzeugt die Einbindung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Zuordnung, falls keine vorhanden ist. Das Elementstruktur ist jedoch nützlich für die CSS-Gestaltung, plus es bietet eine Möglichkeit, eine Beschreibung des Bildes neben ihm im Quelltext zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, aber sein Hauptzweck ist die visuelle Dekoration. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies dient dazu, dass Screenreader das Bild erkennen, aber nicht versuchen, es zu beschreiben (stattdessen würden sie einfach "Bild" oder ähnliches sagen).

Der Grund, warum ein leeres `alt` verwendet wird, anstatt es einfach wegzulassen, ist, dass viele Screenreader die ganze Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel dient das Bild als visuelle Dekoration für die Überschrift, mit der es verknüpft ist. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine andere Alternative ist die Verwendung des aria-[`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch verhindert, dass Screenreader den alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) können je nach Verwendung die Zugänglichkeit verbessern oder schädigen. Standardmäßig sind Links zugänglich in ihrer Erscheinung. Sie können die Zugänglichkeit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Zugänglichkeit jedoch beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen, besucht lila und unterstrichen und mit einem [focus-ring](/de/docs/Web/CSS/:focus) versehen sind, wenn sie über die Tastatur fokussiert werden.

Farbe sollte nicht als alleinige Methode verwendet werden, um Links von nicht verlinkten Inhalten zu unterscheiden. Die Linktextfarbe muss, wie alle Texte, signifikant unterschiedlich von der Hintergrundfarbe sein ([ein Kontrast von 4.5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links optisch signifikant anders als nicht verlinkter Text sein, mit einer Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text und zwischen den Zuständen Standard, besucht und Fokus/Aktiv und einem Kontrast von 4.5:1 zwischen allen diesen Zustandfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden häufig mit dem `onclick`-Ereignis missbraucht, um Pseudo-Tasten zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, Bookmarken und wenn Javascript noch heruntergeladen wird, Fehler auftreten oder deaktiviert ist. Dies vermittelt auch falsche Semantik für assistive Technologien (z. B. Screenreader). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur ein Ankertag für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Verlinken zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"` Deklaration geöffnet werden und Links, deren `href`-Wert auf einer Dateiresource verweist, sollten einen Hinweis über das Verhalten enthalten, das auftreten wird, wenn der Link aktiviert wird.

Menschen mit Sehschwierigkeiten, die mit der Hilfe von Screenreader-Technologie navigieren, oder die kognitive Bedenken haben, können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet werden. Ältere Versionen von Screenreader-Software geben das Verhalten möglicherweise noch nicht einmal bekannt.

#### Link, der ein neues Tab oder Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link zu einer Nicht-HTML-Ressource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Linkverhalten zu zeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Erklärung der WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs aus einem Link nur wenn notwendig | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzer rechtzeitig vorwarnen, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als skipnav bekannt, ist ein `a`-Element, das so nahe wie möglich am öffnenden {{HTMLElement("body")}}-Element platziert wird und zum Beginn des Hauptinhalts der Seite verlinkt. Dieser Link erlaubt es Menschen, Inhalte zu umgehen, die sich auf mehreren Seiten einer Website wiederholen, wie zum Beispiel die Kopfzeile und die primäre Navigation einer Website.

Skip-Links sind besonders nützlich für Menschen, die mit der Hilfe von Hilfstechnologie wie Umschaltsteuerung, Sprachbefehl oder Mundstücken/Kopfstäben navigieren, bei denen das Navigieren durch sich wiederholende Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip-Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Nutzung von Skip-Navigation-Links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Erklärung der WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Anker —, die in enger visueller Nähe zueinander platziert sind, sollten Platz eingefügt bekommen, um sie zu trennen. Dieser Abstand ist hilfreich für Menschen, die unter feinmotorischen Problemen leiden und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzitterns und das Riesenknopfproblem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Siehe [Testen Sie Ihre Fähigkeiten: HTML-Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren.

## Zusammenfassung

Sie sollten nun gut darin sein, zugängliches HTML für die meisten Gelegenheiten zu schreiben. Unser Artikel über WAI-ARIA-Grundlagen wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als nächstes werden wir CSS und JavaScript erkunden und wie Zugänglichkeit durch deren richtigen oder schlechten Gebrauch beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
