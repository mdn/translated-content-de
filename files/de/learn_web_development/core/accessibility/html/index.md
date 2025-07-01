---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 20e7fea30bd8d321221d14cd77bfdc15d8975b49
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein großer Teil des Inhalts im Web kann barrierefrei gemacht werden, indem darauf geachtet wird, dass die richtigen HTML-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Verwendung von semantischem HTML, auch "Das richtige Element für die richtige Aufgabe" genannt, da der Browser viele integrierte Barrierefreiheitshooks bereitstellt.</li>
          <li>Best Practices für Barrierefreiheit wie Alt-Text, gute Link-Best-Practice, Formularbeschriftungen sowie Tabellenzeilen- und -spaltenüberschriften und deren Überschreitungen.</li>
          <li>Die Verwendung einfacher Sprache, das Vermeiden von Slang und Abkürzungen, wenn möglich, und die Bereitstellung von Definitionen, wenn es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturbedienbarkeit.</li>
          <li>Die Wichtigkeit der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen - mehr Ressourcen lesen, sich mehr Beispiele anschauen, usw. - wird Ihnen ein gemeinsames Thema immer wieder begegnen: die Wichtigkeit der Verwendung von semantischem HTML (manchmal auch POSH, für Plain Old Semantic HTML genannt). Das bedeutet, so weit wie möglich die richtigen HTML-Elemente für den beabsichtigten Zweck zu verwenden.

Sie könnten sich fragen, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um fast jedes HTML-Element so zu verhalten, wie Sie es wünschen. Beispielsweise könnte ein Kontrollbutton zum Abspielen eines Videos auf Ihrer Website so markiert sein:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`-Elemente haben nicht nur standardmäßig ein angemessenes Styling (das Sie wahrscheinlich überschreiben möchten), sie haben auch eingebaute Tastaturzugänglichkeit - Benutzer können zwischen den Buttons mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML benötigt nicht länger zum Schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser ist, dass semantisches Markup über die Barrierefreiheit hinaus weitere Vorteile bietet:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionalitäten kostenlos, außerdem ist es vermutlich einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist vermutlich leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher responsiv zu machen.
3. **Gut für SEO** — Suchmaschinen messen Keywords in Überschriften, Links usw. mehr Bedeutung bei als Keywords innerhalb nicht-semantischer `<div>`s usw., sodass Ihre Dokumente einfacher von Kunden gefunden werden.

Lassen Sie uns nun zugängliches HTML im Detail anschauen.

## Gute Semantik

Wir haben bereits über die Wichtigkeit der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es eine der Hauptstellen ist, an denen Barrierefreiheit stark beeinträchtigt wird, wenn sie nicht richtig gehandhabt wird.

Draußen im Web ist die Wahrheit, dass Leute sehr seltsame Dinge mit HTML-Markup machen. Oft entsteht der Missbrauch von HTML durch veraltete Praktiken, die noch nicht verschwunden sind, aber manchmal geschieht es, weil Autoren es nicht besser wissen. Was auch immer der Fall sein mag, Sie sollten schlechten Code durch gutes semantisches Markup ersetzen, wo immer möglich, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML von [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu entfernen - Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Drittanbieter-Inhalte auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eines der besten Barrierefreiheits-Hilfsmittel, das ein Bildschirmleser-Benutzer haben kann, ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte in etwa so aussehen:

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

Wir haben eine Version mit längerem Text für Sie bereitgestellt, die Sie mit einem Bildschirmleser ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, das Ganze zu navigieren, werden Sie sehen, dass dies ziemlich einfach ist:

1. Der Bildschirmleser liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element und lässt Ihnen das Tempo, das für Sie bequem ist.
3. Sie können in vielen Bildschirmlesern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Bildschirmlesern eine Liste aller Überschriften aufrufen, sodass Sie diese als praktische Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente rein für Styling-Zwecke hinzufügen, etwa so:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Bildschirmleser hat nichts, woran er sich orientieren könnte, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die ganze Seite wird als ein einziger großer Block gesehen, sodass sie einfach in einem Rutsch vorgelesen wird.

Es gibt auch andere Probleme, die über die Barrierefreiheit hinausgehen — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht zu komplex ist und keine unnötigen Fachausdrücke oder Slangbegriffe benutzt. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute, sondern auch Lesern, für die der Text nicht in ihrer Muttersprache verfasst ist, jüngeren Menschen… eigentlich jedem! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die nicht klar von Bildschirmlesern vorgelesen werden. Zum Beispiel:

- Verwenden Sie nach Möglichkeit keine Bindestriche. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — anstatt Jan zu schreiben, schreiben Sie Januar.
- Akronyme ausschreiben, wenigstens ein- oder zweimal, dann verwenden Sie das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Sektions-Elemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), und sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzlichen semantischen Wert für Bildschirmleser (und andere Tools), damit Nutzer zusätzliche Hinweise auf die Inhalte erhalten, die sie navigieren.

Ein modernes Content-Layout könnte beispielsweise folgendermaßen aussehen:

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

Zusätzlich zu einer guten Semantik und einem ansprechenden Layout sollte der Inhalt in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später immer noch mit CSS an die gewünschte Stelle setzen, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit der lesbare Inhalt über einen Bildschirmleser konsistent Sinn ergibt.

### Nutzen Sie nach Möglichkeit semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — vorwiegend Buttons, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Barrierefreiheits-Bedenken besprechen, die bei der Erstellung solcher Steuerungen berücksichtigt werden sollten. Weitere Artikel über WAI-ARIA und Multimedia werden weitere Aspekte der UI-Barrierefreiheit behandeln.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser sie standardmäßig mit der Tastatur manipulierbar machen. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach einigen Druckvorgängen sollte der Tab-Fokus beginnen, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente haben in jedem Browser einen standardmäßig hervorgehobenen Stil (dies unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element gerade fokussiert ist.

![Drei Buttons mit dem Text "Click me!", "Click me too!" und "And me!" in ihnen. Der dritte Button hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwickler-Tools eine Überlagerung aktivieren, die die Tabulatorreihenfolge auf der Seite zeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabe-/Return-Taste drücken, um einem fokussierten Link zu folgen oder einen Knopf zu drücken (wir haben ein wenig JavaScript eingebaut, um die Buttons eine Nachricht anzeigen zu lassen), oder beginnen, Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungsmöglichkeiten; der {{htmlelement("select")}}-Tag beispielsweise ermöglicht das Anzeigen und Durchlaufen von Optionen mithilfe der Pfeiltasten nach oben und unten.

Sie erhalten dieses Verhalten im Prinzip kostenlos, nur indem Sie die passenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, Links, Buttons, Formularelemente und Beschriftungen angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Tags für Formularelemente).

Dies ist jedoch ein weiterer Fall, in dem Benutzer manchmal seltsame Dinge mit HTML tun. Sie sehen beispielsweise manchmal Buttons, die mit {{htmlelement("div")}}s markiert sind:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Doch die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und erhalten auch keinen der standardmäßigen CSS-Stile, die Buttons erhalten. Im seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Button-Element für einen Button verwenden müssen, nutzen Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standardeigenschaften eines Buttons, einschließlich Tastatur- und Mausknopfunterstützung.

#### Tastaturzugänglichkeit wiederherstellen

Das Wiederherstellen solcher Vorteile erfordert einige Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren fake-`<div>`-Buttons die Möglichkeit gegeben, durch Tab fokussierbar zu sein, indem wir jedem den Attribut `tabindex="0"` gegeben haben. Wir haben auch `role="button"` hinzugefügt, damit Benutzer von Bildschirmlesern wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Im Grunde genommen ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hauptsächlich dafür gedacht, dass tabbare Elemente eine individuelle Tab-Reihenfolge (in positiver numerischer Reihenfolge festgelegt) haben können, anstatt einfach in ihrer standardmäßigen Quellreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie wirklich müssen, zum Beispiel, wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge zur Quellcode zeigt und Sie die Dinge logischer machen wollen. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben ermöglicht dieser Wert, dass nicht normalerweise tabbare Elemente tabbfähig werden. Dies ist der nützlichste Wert für `tabindex`.
- `tabindex="-1"` — dieser Wert ermöglicht es nicht normalerweise tabbfähigen Elementen, fokussiert zu werden - sei es programmgesteuert, z.B. über JavaScript, oder als Ziel von Links.

Während die oben genannte Ergänzung es uns ermöglicht, zu den Buttons zu tabbieren, erlaubt sie uns noch nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir folgendes JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt ein Listener hinzu, um zu erkennen, wann ein Button auf der Tastatur gedrückt wurde. Wir überprüfen, welcher Button über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die drückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die im `onclick`-Handler des Buttons gespeicherte Funktion mit `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt das Element zurück, das aktuell auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es wird wahrscheinlich noch weitere Probleme damit geben. **Besser, das richtige Element von Anfang an für die richtige Aufgabe zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Texteinschriften für UI-Steuerelemente sind für alle Benutzer nützlich, aber besonders wichtig für Nutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Button- und Linktextbeschriftungen verständlich und einmalig sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Bildschirmleser-Benutzer manchmal eine Liste von Buttons und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formulareingabebeschriftungen, die von der VoiceOver-Software auf Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button', die verschiedenen Formularelementen wie Button, Texteintragung und Link gegeben werden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext heraus Sinn ergeben, alleine gelesen sowie im Kontext des Absatzes, in dem sie stehen. Zum Beispiel zeigt das Folgende ein Beispiel für guten Link-Text:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber das hier ist schlechter Link-Text:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Mehr über die Implementierung von Links und Best Practices finden Sie in unserem Artikel [Erstellung von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links). Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was in jedes Formulareingabefeld eingegeben werden muss. Folgendes scheint ein angemessenes Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht so nützlich für behinderte Nutzer. Es gibt nichts im obigen Beispiel, um die Beschriftung eindeutig mit der Formulareingabe zu verbinden und um klar zu machen, wie sie ausgefüllt werden soll, wenn Sie sie nicht sehen können. Wenn Sie mit einigen Bildschirmlesern darauf zugreifen, erhalten Sie möglicherweise nur eine Beschreibung in der Art von "Text bearbeiten."

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung deutlich mit der Eingabe assoziiert; die Beschreibung ist eher "Füllen Sie Ihren Namen ein: Text bearbeiten."

![Eine gute Formularbeschriftung, die 'Füllen Sie Ihren Namen ein' liest, wird einem Texteintrag-Formularsteuerelement gegeben. ](voiceover-good-form-label.png)

Ein zusätzlicher Vorteil ist, dass das Klicken auf das Label zur Auswahl oder Aktivierung des Formularelements in den meisten Browsern funktioniert. Dadurch hat das Eingabefeld eine größere Trefferfläche, was die Auswahl erleichtert.

> [!NOTE]
> Sie können gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können auch eine hilfreiche Erklärung zur Wichtigkeit der richtigen Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen besichtigen:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

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

Aber dies hat Probleme — es gibt keine Möglichkeit für Benutzer von Bildschirmlesern, Zeilen oder Spalten als Gruppierungen von Daten in Verbindung zu bringen. Dafür muss man wissen, was die Überschriftenzeilen sind und ob sie Zeilen, Spalten usw. steuern. Dies kann nur visuell für die obige Tabelle gemacht werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich nun unser [Tabelle der Punkbands Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) — hier sehen Sie ein paar Barrierefreiheitshilfen in Aktion:

- Tabellenüberschriften sind definiert durch {{htmlelement("th")}}-Elemente — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, mit dem `scope`-Attribut. Dies gibt Ihnen vollstädige Datengruppierungen, die als solche von Bildschirmlesern konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements haben beide ähnliche Aufgaben — sie fungieren als Alt-Text für eine Tabelle und geben einem Bildschirmleser-Benutzer eine nützliche schnelle Zusammenfassung der Inhalte der Tabelle. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie brauchen beide eigentlich nicht.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details zu zugänglichen Datentabellen.

## Textalternativen

Während textueller Inhalt von Natur aus zugänglich ist, kann dasselbe nicht unbedingt für multimediale Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Personen nicht gesehen werden, und Audiomaterial kann von hörbehinderten Personen nicht gehört werden. Wir behandeln Video- und Audiomaterial ausführlich in dem [Barrierefreies Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir uns mit der Zugänglichkeit für das bescheidene {{htmlelement("img")}}-Element beschäftigen.

Wir haben ein einfaches Beispiel erstellt, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes zeigt:

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

Das erste Bild bietet, wenn es von einem Bildschirmleser angesehen wird, dem Benutzer nicht wirklich viel Hilfe — VoiceOver beispielsweise liest „/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um etwas Hilfe zu leisten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um eine Art Dinosaurier handelt, aber oft werden Dateien vielleicht mit automatisch generierten Dateinamen hochgeladen (z.B. von einer Digitalkamera) und diese Dateinamen liefern wahrscheinlich keinen Kontext zu den Inhalten des Bildes.

> [!NOTE]
> Deswegen sollten Sie nie Text in einem Bild platzieren — Bildschirmleser können ihn nicht erreichen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild stößt, wird das vollständige Alt-Attribut vorgelesen — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies verdeutlicht die Wichtigkeit nicht nur von sinnvollen Dateinamen für den Fall, dass sogenannter **Alt-Text** nicht verfügbar ist, sondern auch dafür zu sorgen, dass wo auch immer möglich, Alt-Text in `alt`-Attributen bereitgestellt wird.

Die Inhalte des `alt`-Attributs sollten immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, bereitstellen. Der Alt-Text sollte kurz und prägnant sein und alle in dem Bild enthaltenen Informationen umfassen, die nicht im umgebenden Text dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild enthalten sind und für einen potentiellen Hunderetter relevant sind, die aber nicht im umgebenden Text dupliziert sind, enthalten sein. Eine längere Beschreibung wie `alt="Fluffy, ein tricolor Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da die Größe und Rasse von Fluffy wahrscheinlich im umgebenden Text enthalten ist, wird dies nicht im `alt` erwähnt. Allerdings sind die Haarlänge, Farben oder Spielzeugvorlieben des Hundes, die relevanteses Wissen für einen potentiellen Hundebesitzer darstellen, im Alt-Text beigegefügt. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Das ist nicht im Hinblick auf die Adoption wichtig und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und auf die ein sehender Benutzer zugreifen kann und die im Wachstums-Kontext relevant sind, sind das, was vermittelt werden muss; nicht mehr. Halten Sie es kurz, prägnant und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Menschen, die das Bild noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn ein sehender Benutzer dies nicht aus dem Bild erkennen kann, dann schließen Sie es nicht ein.

Eine Sache, die Sie bedenken sollten, ist, ob Ihre Bilder in Ihrem Inhalt eine Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere Alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder auf der Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viel mehr Informationen zur Implementierung von Bildern und Best Practices.
> Sie können auch den [Alternativtext-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) prüfen, um zu erfahren, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden können.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den Text um das Bild herum stellen oder in ein `title`-Attribut, wie oben gezeigt. In diesem Fall lesen die meisten Bildschirmleser den Alt-Text, das Titelattribut und den Dateinamen vor. Außerdem zeigen Browser Titelltexte als Tooltips an, wenn die Maus darüber bewegt wird.

![Screenshot eines roten Tyrannosaurus Rex, mit dem Text "The mozilla red dinosaur", der als Tooltip beim Hover angezeigt wird.](title-attribute.png)

Lassen Sie uns noch einmal schnell die vierte Methode betrachten:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut gar nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz dargestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut genutzt, um sich auf diese `id` zu beziehen, was Bildschirmlesern ermöglicht, diesen Absatz als Alt-Text/Beschriftung für dieses Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die Entwicklern ermöglicht, zusätzliche Semantik zu ihrem Markup hinzuzufügen, um die Bildschirmleserzugänglichkeit bei Bedarf zu verbessern.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung (die alles mögliche sein könnte, nicht unbedingt ein Bild) mit einer Bildunterschrift assoziieren:

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

Während es gemischte Unterstützung von Bildschirmlesern gibt, was die Assoziierung von Bildunterschriften mit ihren Bildern angeht, schafft die Einbindung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Assoziation, wenn keine vorhanden ist. Dies gesagt ist der Elementaufbau nützlich zum CSS-Styling, zudem bietet es eine Möglichkeit, eine Beschreibung des Bildes direkt daneben im Quellcode zu platzieren.

### Leere Alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, dessen Hauptzweck jedoch rein visuell dekorativ ist. Sie werden im obengenannten Codebeispiel feststellen, dass das `alt`-Attribut des Bildes leer ist — dies ist, um Bildschirmlesern zu signalisieren, das Bild zu erkennen, aber zu verhindern, dass sie versuchen, das Bild zu bezeichnen (anstattdessen würden sie nur "Bild" oder ähnliches sagen).

Der Grund für die Verwendung eines leeren `alt` anstelle des Nicht-Einbeziehens ist, dass viele Bildschirmleser die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. In obigem Beispiel fungiert das Bild als visuelle Dekoration für die damit verbundene Überschrift. In Fällen wie diesem, und in Fällen, wo ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente einfügen. Eine weitere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies den Bildschirmleser ebenfalls daran hindert, alternativen Text vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie eine CSS-gestützte Methode verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) können je nach Nutzung die Barrierefreiheit unterstützen oder behindern. Standardmäßig sind Links in der Darstellung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit aber auch stören, wenn ihr zugängliches Styling entfernt oder wenn sie durch JavaScript unerwartet funktionieren.

### Link-Styling

Standardmäßig sind Links visuell von anderem Text sowohl in Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration) unterschieden, wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokus-Ring](/de/docs/Web/CSS/:focus), wenn sie über die Tastatur fokussiert werden.

Farbe sollte nicht als das einzige Unterscheidungsmerkmal von Links zu nicht verknüpften Inhalten verwendet werden. Die Linktext-Farbe, wie jeder Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrastverhältnis von 4.5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zudem sollten Links sich visuell signifikant von nicht-linkenden Texten unterscheiden, mit einem Mindestkontrast von 3:1 zwischen Link-Text und umgebendem Text und zwischen Standard-, Besuchs- und Fokus/Aktiv-Stati sowie ein Kontrast von 4.5:1 zwischen allen diesen Farben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Anker-Tags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Buttons zu erstellen, indem `href` auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichen setzen und wenn JavaScript noch herunterlädt, ein Fehler auftritt oder deaktiviert ist. Das überträgt auch falsche Semantik auf assistive Technologien (z.B. Bildschirmleser). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur einen Anker für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die sich über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster öffnen, sowie Links, deren `href`-Wert auf eine Dateiressource zeigt, sollten einen Indikator über das Verhalten beinhalten, das auftritt, wenn der Link aktiviert wird.

Menschen mit geringem Sehvermögen, die mit Hilfe einer Bildschirmlesetechnologie navigieren oder kognitive Probleme haben, können verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlese-Software kündigen das Verhalten möglicherweise nicht einmal an.

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

Wenn ein Icon anstelle von Text verwendet wird, um dieses Linkverhalten anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch Skipnav genannt, ist ein `a`-Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element platziert wird und zum Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu überspringen, die durch mehrere Seiten einer Website wiederholt werden, wie die Kopfzeile einer Website und die primäre Navigation.

Skip-Links sind besonders nützlich für Menschen, die mit unterstützender Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstäben/Kopfstöcken navigieren, wo das Bewegen durch wiederholte Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Ankern —, die in enger visueller Nähe zueinander platziert sind, sollten mit Platz dazwischen getrennt werden. Dieser Abstand ist für Menschen nützlich, die unter Problemen der Feinmotorik leiden und beim Navigieren möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mithilfe von CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihr Wissen

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sehen Sie sich [Testen Sie Ihr Wissen: HTML-Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren.

## Zusammenfassung

Sie sollten nun gut darauf vorbereitet sein, zugängliches HTML für die meisten Gelegenheiten zu schreiben. Unser WAI-ARIA-Grundlagenartikel wird helfen, Wissenslücken zu füllen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als nächstes werden wir CSS und JavaScript erkunden und untersuchen, wie Barrierefreiheit durch deren guten oder schlechten Einsatz beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
