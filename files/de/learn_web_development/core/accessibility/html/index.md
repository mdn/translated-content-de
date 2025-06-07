---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann durch die sorgfältige Verwendung der richtigen Hypertext Markup Language-Elemente für den vorgesehenen Zweck zugänglich gemacht werden. In diesem Artikel wird detailliert untersucht, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis der Konzepte zur Barrierefreiheit</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwenden von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Job", da der Browser so viele eingebaute Barrierefreiheitsfunktionen bietet.</li>
          <li>Beste Praktiken zur Barrierefreiheit wie Alternativtexte, gute Linkbest-Praktiken, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften und Scoping.</li>
          <li>Verwendung einer einfachen, klaren Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen - mehr Ressourcen lesen, mehr Beispiele anschauen, etc. - werden Sie ein gemeinsames Thema erkennen: Die Bedeutung der Verwendung von semantischem HTML (manchmal auch als POSH oder Plain Old Semantic HTML bezeichnet). Dies bedeutet, dass die richtigen HTML-Elemente für den vorgesehenen Zweck so weit wie möglich verwendet werden.

Sie mögen sich fragen, warum dies so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um fast jedes HTML-Element so zu gestalten, wie Sie es möchten. Beispielsweise könnte eine Steuertaste zum Abspielen eines Videos auf Ihrer Website folgendermaßen ausgezeichnet werden:

```html
<div>Play video</div>
```

Aber wie Sie später detaillierter sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur einige geeignete Stilvorlagen standardmäßig (die Sie wahrscheinlich überschreiben möchten), sie bieten auch eingebaute Tastaturzugänglichkeit - Benutzer können zwischen Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsequent tun. Noch besser, semantisches Markup hat noch weitere Vorteile über die Barrierefreiheit hinaus:

1. **Einfacher zu entwickeln** — wie oben erwähnt erhalten Sie einige Funktionen kostenlos, außerdem ist es vermutlich einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist vermutlich leichter im Dateiumfang als nicht-semantisches Spaghetti-Code und leichter anpassbar.
3. **Gut für SEO** — Suchmaschinen geben Keywords in Überschriften, Links usw. mehr Bedeutung als Keywords, die in nicht-semantischen <div>s usw. enthalten sind, Ihre Dokumente werden also für Kunden besser auffindbar sein.

Lassen Sie uns auf die Details von barrierefreiem HTML eingehen.

## Gute Semantik

Wir haben bereits über die Bedeutung von ordentlicher Semantik und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten gesprochen. Das kann nicht ignoriert werden, da es eine der Hauptstellen ist, an denen die Barrierefreiheit ernsthaft beeinträchtigt werden kann, wenn sie nicht ordnungsgemäß gehandhabt wird.

Da draußen im Web ist es leider die Wahrheit, dass Leute sehr seltsame Dinge mit HTML-Markup machen. Häufig geschieht der Missbrauch von HTML aufgrund von veralteten Praktiken, die noch nicht verschwunden sind, oder weil die Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechtes Code durch gutes semantisches Markup ersetzen, wo immer dies möglich ist, sei es in statischen HTML-Seiten oder dynamisch generierten HTML vom [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu beseitigen — Ihre Seiten könnten abhängig sein von serverseitigem Code oder Web-/Framework-Komponenten, die Sie nicht kontrollieren, oder Sie könnten Drittanbieter-Inhalte auf Ihrer Seite haben (wie beispielsweise Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird für die Barrierefreiheit von Vorteil sein.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Unterstützungsmöglichkeiten für einen Benutzer eines Bildschirmlesegeräts ist eine ausgezeichnete Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte so aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Bildschirmlesegerät ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie dies durchgehen, werden Sie sehen, dass dies recht einfach zu navigieren ist:

1. Das Bildschirmlesegerät liest jede Überschrift vor, während Sie durch den Inhalt navigieren, und informiert Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Es hält nach jedem Element an, sodass Sie in einem für Sie angenehmen Tempo vorgehen können.
3. In vielen Bildschirmlesegeräten können Sie zur nächsten/vorherigen Überschrift springen.
4. In vielen Bildschirmlesegeräten können Sie auch eine Liste aller Überschriften aufrufen, sodass Sie diese als praktisches Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Leute schreiben manchmal Überschriften, Absätze usw. unter Verwendung von Zeilenumbrüchen und fügen HTML-Elemente rein zu Stilzwecken hinzu, etwa so:

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

Wenn Sie unsere längere Version mit einem Bildschirmlesegerät ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), haben Sie keine sehr gute Erfahrung — das Bildschirmlesegerät hat nichts, woran es sich orientieren kann, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können und die gesamte Seite als ein einziger großer Block angesehen wird, sodass sie in einem Rutsch vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu gestalten oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann sich auch auf die Barrierefreiheit auswirken. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachausdrücke oder Slang-Wörter verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Beeinträchtigungen zugute; es kommt auch Lesern zugute, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Leuten... im Grunde genommen jedem! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die von Bildschirmlesegeräten nicht deutlich vorgelesen werden. Zum Beispiel:

- Verwenden Sie nach Möglichkeit keine Bindestriche. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Erweitern Sie Abkürzungen — statt Jan schreiben Sie Januar.
- Erweitern Sie Akronyme mindestens einmal oder zweimal und verwenden Sie dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitenabschnitte logisch

Sie sollten geeignete [Abschnittelemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Bildschirmleser (und andere Tools), um Benutzern zusätzliche Hinweise auf die Inhalte zu geben, die sie navigieren.

Ein modernes Inhaltsstruktur könnte beispielsweise folgendermaßen aussehen:

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

Zusätzlich zu guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später mit CSS an die gewünschte Stelle verschieben, aber Sie sollten die Quellreihenfolge von Anfang an richtig einstellen, damit das, was Bildschirmleserbenutzer vorgelesen bekommen, Sinn ergibt.

### Verwenden Sie semantische UI-Steuerelemente, wo möglich

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — meist Schaltflächen, Links und Formulareingaben. In diesem Abschnitt schauen wir uns die grundlegenden Barrierefreiheitsaspekte an, die beim Erstellen solcher Steuerelemente zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit behandeln.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab, und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Mal sollte der Tab-Fokus beginnen, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (dieser unterscheidet sich leicht zwischen den verschiedenen Browsern), damit Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!", und "And me!" sind jeweils in ihnen. Die dritte Schaltfläche hat einen blauer Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können eine Überlagerung aktivieren, die die Seiten-Tabbing-Reihenfolge in Ihren Entwicklertools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Dann können Sie Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht anzeigen zu lassen), oder anfangen zu tippen, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mithilfe der Pfeiltasten nach oben und unten durchblättern.

Vor allem erhalten Sie dieses Verhalten kostenlos, indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwendet werden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formulareingaben).

Dennoch gibt es leider Fälle, in denen Leute seltsame Dinge mit HTML machen. Beispielsweise sehen Sie manchmal Schaltflächen, die mit {{htmlelement("div")}}s ausgezeichnet sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Die Nutzung solch eines Codes ist jedoch nicht ratsam — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keines der Standard-CSS-Styling, das Schaltflächen bekommen. Sollte es in sehr seltenen oder nicht vorhandenen Fällen erforderlich sein, ein Nicht-Schaltflächen-Element als Schaltfläche zu verwenden, nutzen Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie all das Standardverhalten der Schaltflächen, einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile wieder einzubauen, erfordert einige Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen — sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) an). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich per Tabulatortaste), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Benutzer von Bildschirmlesern wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Die Variable [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist in erster Linie dazu gedacht, dass tabbare Elemente eine benutzerdefinierte Tab-Reihenfolge erhalten können (in positiver numerischer Reihenfolge angegeben), anstatt nur in ihrer ursprünglichen Quellreihenfolge getabbed zu werden. Dies ist fast immer eine schlechte Idee, da es große Verwirrung stiften kann. Verwenden Sie es nur, wenn es wirklich nötig ist, z.B. wenn das Layout Dinge in einer ganz anderen visuellen Reihenfolge darstellt als der Quellcode und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — Wie oben angegeben kann dieses Attribut dafür genutzt werden, dass Elemente, die normalerweise nicht tabbable sind, tabbed werden können. Dies ist der nützlichste Wert von tabindex.
- `tabindex="-1"` — Erlaubt es normalerweise nicht tabbbaren Elementen, programmgemäß den Fokus zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Während der obige Zusatz uns ermöglicht, zu den Schaltflächen zu tabben, können wir sie nicht mit der <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste aktivieren. Dafür mussten wir das folgende kleine JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier haben wir einen Listener zum `document`-Objekt hinzugefügt, um zu erkennen, wann eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen über die `key`-Eigenschaft des Ereignisobjekts, welche Taste gedrückt wurde; Wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das gerade im Fokus ist.

Das ist ein großer zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird wahrscheinlich andere Probleme damit geben. **Besser, gleich das richtige Element für den richtigen Job zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Textbeschriftungen für UI-Steuerelemente sind für alle Benutzer nützlich, aber besonders wichtig für Benutzer mit Behinderungen.

Stellen Sie sicher, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Klicken Sie hier" für Ihre Beschriftungen, da Bildschirmleserbenutzer manchmal eine Liste von Schaltflächen und Formularelementen erhalten. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf einem Mac aufgelistet werden.

![Liste von Formularbeschriftungen, die von der VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'glückliches Menü-Button', die verschiedenen Formularsteuerelementen wie Schaltflächen, Textfeldern und Links zugewiesen sind.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl im Gesamtkontext Sinn ergeben als auch für sich allein gelesen werden können. Zum Beispiel wird im Folgenden ein Beispiel für guten Linktext gezeigt:

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
> Sie können in unserem Artikel [Creating links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) mehr über Linkimplementierung und beste Praktiken erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das Folgende scheint ein ziemlich vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Allerdings ist dies für behinderte Benutzer nicht so nützlich. In dem obigen Beispiel gibt es nichts, das das Formularfeld unmissverständlich mit der Beschriftung assoziiert und klar macht, wie es auszufüllen ist, falls Sie es nicht sehen können. Wenn Sie auf einige Bildschirmleser zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung klar dem Eingabefeld zugeordnet; die Beschreibung wird mehr wie "Füllen Sie Ihren Namen aus: Text bearbeiten".

![Eine gute Formularbeschriftung, die "Füllen Sie Ihren Namen aus" lautet, ist einem Formulareingabefeld zugeordnet.](voiceover-good-form-label.png)

Zusätzlich bedeutet die Zuordnung einer Beschriftung zu einem Formularelement in den meisten Browsern, dass Sie die Beschriftung anklicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt dem Eingabefeld einen größeren Trefferbereich, was es einfacher macht, es auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können eine nette Erklärung zur Bedeutung ordnungsgemäßer Textbeschriftungen und wie Sie mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Beschriftungsprobleme untersuchen können, in folgendem Video finden:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

Eine einfache Datentabelle kann mit sehr einfachem Markup erstellt werden, zum Beispiel:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für Benutzer von Bildschirmlesern, Reihen oder Spalten als Gruppierungen von Daten zu assoziieren. Dazu müssen Sie wissen, was die Kopfzeilenzeilen sind, und ob sie für Reihen, Spalten usw. gelten. Dies kann für die obige Tabelle nur visuell getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich jetzt unser [Punk-Bands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitsunterstützungen sehen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Reihen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Daten, die von Bildschirmlesern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements haben beide ähnliche Aufgaben — sie fungieren als Alternativtext für eine Tabelle und bieten einem Benutzer eines Bildschirmlesegeräts eine nützliche kurze Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es den Inhalt auch für sehende Benutzer zugänglich macht, die es möglicherweise ebenfalls nützlich finden. Sie brauchen wirklich nicht beides.

> [!NOTE]
> Weitere Informationen über zugängliche Datentabellen finden Sie in unserem Artikel [HTML table accessibility](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility).

## Textalternativen

Während Textinhalte von Natur aus zugänglich sind, kann das für Multimedia-Inhalte nicht unbedingt gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audioinhalte können von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiomaterialien detailliert in den [Accessible multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel schauen wir uns die Barrierefreiheit für das einfache {{htmlelement("img")}}-Element an.

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

Das erste Bild bietet dem Benutzer eines Bildschirmlesegeräts nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um ein bisschen Hilfe zu bieten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier von irgendeiner Art handelt, aber oft könnten Dateien mit maschinengenerierten Dateinamen (z.B. von einer Digitalkamera) hochgeladen werden, und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalt in einem Bild einfügen — Bildschirmlesegeräte können ihn nicht zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmlesegerät auf das zweite Bild trifft, liest es den vollständigen `alt`-Attributtext vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies unterstreicht die Bedeutung, nicht nur bedeutungsvolle Dateinamen zu verwenden, falls so genannter **Alternativtext** nicht verfügbar ist, sondern auch sicherzustellen, dass Alternativtext immer in `alt`-Attributen so weit wie möglich bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen sein, was es visuell vermittelt. Das `alt` sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen umfassen, die im umgebenden Text nicht dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Wenn zum Beispiel das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und relevant für einen potenziellen Hundebesitzer sind und die im umgebenden Text nicht dupliziert werden, enthalten sein. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text Fluffys Größe und Rasse wahrscheinlich enthält, ist dies nicht im `alt` enthalten. Da jedoch die Biografie des Hundes wahrscheinlich keine Haarlänge, Farben oder Spielzeugpräferenzen enthält, die der potenzielle Besitzer wissen muss, ist dies enthalten. Ist das Bild draußen oder trägt Fluffy ein rotes Halsband mit einer blauen Leine? Unwichtig im Hinblick auf die Adoption des Tieres und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die auch für eine sehende Person zugänglich sind und relevant für den Kontext sind, müssen übermittelt werden; nichts weiter. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Menschen, die das Bild vorher noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist, oder eine sehende Person das nicht aus dem Bild ersehen kann, dann fügen Sie es nicht ein.

Eine Sache, die zu beachten ist, ist, ob Ihre Bilder innerhalb Ihres Inhalts Bedeutung haben oder ob sie ausschließlich für die visuelle Dekoration sind und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) für viel mehr Informationen über die Implementierung von Bildern und bewährte Praktiken.
> Sie können auch [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) nutzen, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextbezogene Informationen bereitstellen möchten, sollten Sie diese im umrahmenden Text um das Bild herum platzieren oder innerhalb eines `title`-Attributs, wie oben gezeigt. In diesem Fall lesen die meisten Bildschirmleser den Alternativtext, den Inhalt des `title`-Attributs und den Dateinamen vor. Zusätzlich zeigen Browser Titeltext als Tooltips an, wenn er mit der Maus überfahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The mozilla red dinosaur" als Tooltip bei Mausüberfahrt.](title-attribute.png)

Schauen wir uns die vierte Methode noch einmal kurz an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut gar nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz dargestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was Bildschirmleser dazu veranlasst, diesen Absatz als Alternativtext/Beschriftung für dieses Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/) Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup einzufügen, um die Bildschirmleserzugänglichkeit bei Bedarf zu verbessern.

### Figuren und Figurenbeschriftungen

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur von irgendeiner Art (sie muss kein Bild sein) mit einer Figurenbeschriftung verknüpfen:

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

Während es gemischte Bildschirmleserunterstützung für die Verknüpfung von Figurenbeschriftungen mit ihren Figuren gibt, schafft das Hinzufügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verbindung, wenn keine vorhanden ist. Das heißt, die Elementstruktur ist nützlich für CSS-Styling, und sie bietet eine Möglichkeit, eine Beschreibung des Bildes neben ihm in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, jedoch hauptsächlich visuelle Dekoration darstellt. Sie werden bemerken, dass in dem oben genannten Codebeispiel das `alt`-Attribut des Bildes leer ist — dies dient dazu, dass Bildschirmlesegeräte das Bild erkennen, jedoch nicht versuchen, das Bild zu beschreiben (stattdessen würden sie einfach "image" oder ähnlich sagen).

Der Grund dafür, ein leeres `alt` zu verwenden, anstatt es nicht zu inkludieren, ist, dass viele Bildschirmlesegeräte die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im oben genannten Beispiel fungiert das Bild als visuelle Dekoration zur Überschrift, mit dem es verbunden ist. In solchen Fällen und dort, wo ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente aufnehmen. Eine weitere Alternative ist die Verwendung des `role`-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch verhindert, dass Bildschirmlesegeräte Alternativtexte vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Je nachdem, wie sie verwendet werden, können Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) die Barrierefreiheit verbessern oder beeinträchtigen. Standardmäßig sind Links in Aussehen zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit aber auch beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [focus-ring](/de/docs/Web/CSS/:focus) versehen sind, wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einziges Mittel zur Unterscheidung von Links und nicht-verlinkendem Inhalt verwendet werden. Die Linktextfarbe muss, wie alle Texte, sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell signifikant von nicht-verlinkendem Text abweichen, mit einem Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, Besucht- und Fokus-(Aktiv-)Zuständen und ein 4,5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankerverschachtelungen werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, Öffnung in einem neuen Tab oder Fenster, Lesezeichen und wenn JavaScript noch heruntergeladen wird, Fehlermeldungen anzeigt oder deaktiviert ist. Dies vermittelt auch assistiven Technologien (z.B. Bildschirmleser) fehlerhafte Semantik. In solchen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Generell sollten Sie ein Ankerelement nur für die Navigation unter Verwendung einer korrekten URL verwenden.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die Deklaration `target="_blank"` geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresourse verweist, sollten einen Hinweis auf das Verhalten enthalten, das auftritt, wenn der Link aktiviert wird.

Menschen mit Sehschwächen, die mit der Hilfe von Bildschirmlesetechnologie navigieren, oder die kognitive Bedenken haben, können verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware können das Verhalten möglicherweise nicht einmal ankündigen.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

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

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Verhalten anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch bekannt als Skipnav, ist ein `a`-Element, das so nah wie möglich an dem öffnenden {{HTMLElement("body")}}-Element platziert wird und auf den Beginn des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es den Nutzern, Inhalte zu überspringen, die auf mehreren Seiten einer Website wiederholt werden, wie beispielsweise die Kopfzeile einer Website und die Hauptnavigation.

Skip-Links sind insbesondere für Menschen nützlich, die mit Hilfe von unterstützenden Technologien wie Schaltkontrolle, Sprachsteuerung oder Mündstücken/Kopfstäben navigieren, wo das Durchlaufen von wiederholten Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiver Inhalte—einschließlich Anker—die visuell nah beieinander platziert sind, sollten mit Abstand versehen werden, um sie zu trennen. Diese Abstände sind für Menschen von Vorteil, die an Feinmotorikproblemen leiden und versehentlich das falsche interaktive Element aktivieren könnten, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Siehe [Testen Sie Ihre Fähigkeiten: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten jetzt gut mit dem Schreiben von zugänglichem HTML für die meisten Anlässe vertraut sein. Unser Artikel zu WAI-ARIA-Grundlagen wird helfen, Wissenslücken zu füllen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als nächstes werden wir CSS und JavaScript untersuchen und wie ihre gute oder schlechte Nutzung die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
