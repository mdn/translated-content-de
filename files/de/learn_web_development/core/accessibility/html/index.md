---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein großer Teil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language-Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel erläutert im Detail, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für die richtige Aufgabe", weil der Browser viele integrierte Barrierefreiheitshilfen bietet.</li>
          <li>Best Practices für Barrierefreiheit wie Alternativtext, gute Linkpraktiken, Formularbeschriftungen und Tabellenzeilen- sowie -spaltenüberschriften und deren Zuordnung.</li>
          <li>Einfach verständliche Sprache verwenden, soweit möglich auf Slang und Abkürzungen verzichten und Definitionen bereitstellen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen usw. — werden Sie ein gemeinsames Thema immer wieder sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH genannt, oder Plain Old Semantic HTML). Dies bedeutet, die richtigen HTML-Elemente so weit wie möglich für ihren beabsichtigten Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um praktisch jedes HTML-Element so zu gestalten, wie Sie es möchten. Beispielsweise könnte ein Steuerungsbutton zum Abspielen eines Videos auf Ihrer Webseite so gekennzeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur einige geeignete Standardstile (die Sie wahrscheinlich überschreiben möchten), sondern auch eine integrierte Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Schaltflächen navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser ist, dass semantisches Markup über die Barrierefreiheit hinaus weitere Vorteile hat:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, und es ist wohl einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist in der Regel leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und leichter anzupassen, um es responsiv zu machen.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern innerhalb von Überschriften, Links usw. mehr Bedeutung als in nicht-semantischen `<div>`s enthaltenen Schlüsselwörtern, was dazu führt, dass Ihre Dokumente von Kunden leichter gefunden werden können.

Lassen Sie uns fortfahren und barrierefreies HTML genauer betrachten.

## Gute Semantik

Wir haben bereits über die Bedeutung einer richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen die Barrierefreiheit schwerwiegend beeinträchtigt wird, wenn sie nicht ordnungsgemäß gehandhabt wird.

Im Web machen Leute mit HTML-Markup oft sehr seltsame Dinge. Oftmals entsteht der Missbrauch von HTML aufgrund von noch nicht verschwundenen Praktiken, aber manchmal geschieht er auch, weil Autoren es nicht besser wissen. Was auch immer der Fall ist, Sie sollten schlechtem Code, wo immer möglich, durch gutes semantisches Markup ersetzen, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML-Code von [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden – Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Drittanbieter-Inhalte auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird das Anliegen der Barrierefreiheit unterstützen.

### Verwenden Sie gut strukturierten Textinhalt

Einer der besten Barrierefreiheitshilfen, die ein Screenreader-Benutzer haben kann, ist eine ausgezeichnete Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte ungefähr so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie dieses durchnavigieren, werden Sie sehen, dass es ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift aus, während Sie durch den Inhalt fortschreiten, und teilt Ihnen mit, was eine Überschrift ist, was ein Paragraph ist, usw.
2. Er hält nach jedem Element an, sodass Sie in Ihrem eigenen Tempo weitergehen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften anzeigen lassen, was Ihnen als praktische Inhaltsübersicht hilft, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente rein zu Stilzwecken hinzufügen, etwa so:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen – der Screenreader hat keine Wegweiser, sodass Sie keine nützliche Inhaltsübersicht abrufen können, und die gesamte Seite wird als ein einziger großer Block gesehen, der komplett auf einmal vorgelesen wird.

Außerdem gibt es über die Barrierefreiheit hinausgehende Probleme — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig kompliziert ist und keine unnötigen Fachbegriffe oder Slang verwendet. Das kommt nicht nur Personen mit kognitiven oder anderen Behinderungen zugute; es hilft auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen ..., eigentlich jedem! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Gedankenstriche, wenn Sie es vermeiden können. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — anstelle Jan schreiben Sie Januar.
- Akronyme zumindest ein- oder zweimal ausschreiben und dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag verwenden, um sie zu beschreiben.

### Strukturieren Sie Seitenabschnitte logisch

Sie sollten geeignete [Sektionselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, z. B. Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Werkzeuge), um Benutzern zusätzliche Hinweise über die Inhalte zu geben, die sie navigieren.

Beispielsweise könnte eine moderne Inhaltsstruktur so ähnlich aussehen:

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

Neben guter Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später immer noch mit CSS dort platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig machen, damit das, was den Screenreader-Benutzern vorgelesen wird, Sinn ergibt.

### Verwenden Sie semantische UI-Steuerelemente, wo möglich

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden die grundlegenden Barrierefreiheitsprobleme behandelt, die bei der Erstellung solcher Steuerelemente berücksichtigt werden müssen. Spätere Artikel zu WAI-ARIA und Multimedia werden andere Aspekte der Barrierefreiheit von UI untersuchen.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig durch die Tastatur manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiel ausprobieren (sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dieses in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Mal sollten Sie sehen, dass der Tabulatorfokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente haben in jedem Browser einen hervorgehobenen Standardstil (der sich leicht zwischen verschiedenen Browsern unterscheidet), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Klick mich!", "Klick mich auch!" und "Und mich!" jeweils darin. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwicklertools ein Overlay aktivieren, das die Tabbing-Reihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht auslösen zu lassen), oder anfangen zu tippen, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und zwischen ihnen wechseln, indem die Pfeiltasten nach oben und unten verwendet werden.

Sie erhalten dieses Verhalten im Wesentlichen kostenlos, nur indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Dies bedeutet, Links, Schaltflächen, Formularelemente und Beschriftungen entsprechend zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dies ist jedoch ein weiterer Fall, bei dem Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sieht man manchmal Buttons mit {{htmlelement("div")}}s durchgesetzt, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach `{{htmlelement("button")}}`-Elemente verwendet hätten, und Sie erhalten auch nicht den Standard-CSS-Styling, den Schaltflächen erhalten. In dem seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Button-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhalten, einschließlich Tastatur- und Maussteuerung.

#### Tastaturzugänglichkeit wiederherstellen

Solche Vorteile wiederherzustellen, erfordert einige Arbeit (Sie können sich ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel ansehen — sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren Fake-`<div>`-Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich via Tabulator), indem wir jedem von ihnen das Attribut `tabindex="0"` gegeben haben. Wir schließen auch `role="button"` ein, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und damit interagieren können:

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

Grundsätzlich ist das `[`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)`-Attribut hauptsächlich dazu gedacht, tabbbaren Elementen eine benutzerdefinierte Tab-Reihenfolge zu geben (in positiver numerischer Reihenfolge angegeben), anstatt dass sie einfach in ihrer Standard-Quellreihenfolge durchgetabbt werden. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout Dinge in einer ganz anderen visuellen Reihenfolge als im Quellcode zeigt und Sie die Logik verbessern möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angedeutet, erlaubt dieser Wert, dass normalerweise nicht tabbbaren Elementen tabbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies erlaubt normalerweise nicht tabbbaren Elementen, programmgesteuert Fokus zu erhalten, z. B. über JavaScript, oder als Ziel von Links.

Obwohl die obige Ergänzung es uns erlaubt, zu den Schaltflächen zu tabben, erlaubt sie uns nicht, sie mit der <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende Stück JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche mit `document.activeElement.click()` gespeichert ist. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität zurückzubauen. Und es wird sicherlich noch andere Probleme damit geben. **Besser, das richtige Element für die richtige Aufgabe von Anfang an zu verwenden.**

#### Verwenden Sie bedeutungsvolle Textetiketten

Textetiketten von UI-Steuerelementen sind für alle Nutzer sehr nützlich, aber ihre richtige Gestaltung ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktextetiketten verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Klicken Sie hier" für Ihre Etiketten, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen- und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formularfeldbeschriftungen, die von der VoiceOver-Software auf dem Mac angezeigt werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button', die verschiedenen Formularsteuerungen wie Schaltfläche, Texteingabefeld und Link zugeordnet sind.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Etiketten aus dem Kontext heraus Sinn machen, wenn sie allein gelesen werden, sowie im Kontext des Paragraphen, in dem sie sich befinden. Zum Beispiel zeigt das folgende ein Beispiel für guten Linktext:

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
> Sie können in unserem Artikel [Creating links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) viel mehr über Linkimplementierung und Best Practices erfahren. Sie können auch einige gute und schlechte Beispiele in [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende Beispiel scheint eine ausreichend vernünftige Darstellung zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht so nützlich für Benutzer mit Behinderungen. Es gibt nichts im obigen Beispiel, das die Beschriftung zweifelsfrei mit dem Formularelement assoziiert und es klar macht, wie man es ausfüllt, wenn man es nicht sehen kann. Wenn Sie darauf mit einigen Screenreadern zugreifen, werden Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten" erhalten.

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird die Beschriftung klar dem Formulareingabefeld zugeordnet; die Beschreibung wird mehr wie "Geben Sie Ihren Namen ein: Text bearbeiten" lauten.

![Eine gute Formularbeschriftung, die 'Geben Sie Ihren Namen ein' liest, wird einer Texteingabe-Formularsteuerung zugeordnet. ](voiceover-good-form-label.png)

Ein zusätzlicher Vorteil ist, dass in den meisten Browsern das Assoziieren einer Beschriftung mit einem Formulareingabefeld bedeutet, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe ein größeres Treffergebiet, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine nette Erklärung zur Bedeutung von richtigen Textetiketten und wie man Textetikettenprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, im folgenden Video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Barrierefreie Datentabellen

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Gruppierungen von Daten zu assoziieren. Um dies zu tun, müssen Sie wissen, welche die Kopfzeilen der Tabellenzeilen sind und ob sie Zeilen oder Spalten betreffen usw. Dies kann nur visuell für die obige Tabelle gemacht werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich nun unser [Punkbands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier ein paar Barrierefreiheitshilfen sehen:

- Tabellenkopfzeilen sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Daten, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen beide ähnliche Aufgaben — sie fungieren als Alternativtext für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche, schnelle Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird generell bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die ihn möglicherweise ebenfalls nützlich finden. Sie benötigen nicht unbedingt beides.

> [!NOTE]
> Sehen Sie unseren Artikel [HTML table accessibility](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details über barrierefreie Datentabellen.

## Textalternativen

Während textbasierte Inhalte inhärent zugänglich sind, kann dasselbe nicht unbedingt für Multimedia-Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiomaterial kann von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiomaterial im Detail in [Accessible multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber in diesem Artikel werden wir uns die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element ansehen.

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

Das erste Bild bietet bei Betrachtung durch einen Screenreader dem Benutzer nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um zumindest etwas Hilfe zu bieten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier handelt, aber oft könnten Dateien mit maschinengenerierten Dateinamen (z. B. von einer Digitalkamera) hochgeladen werden, und diese Dateinamen würden wahrscheinlich keinen Kontext zum Bildinhalt bieten.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalt in ein Bild einfügen — Screenreader können ihn nicht erreichen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Machen Sie es einfach nicht!

Wenn ein Screenreader das zweite Bild begegnet, liest er das gesamte Alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung nicht nur der Verwendung von sinnvollen Dateinamen, falls sogenannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text in `alt`-Attributen wo immer möglich bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und das, was es visuell vermittelt, enthalten. Der Alt sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden, aber nicht im umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs eines einzelnen Bildes variiert je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hundeelternteil wichtig und nicht im umgebenden Text dupliziert sind, einbezogen werden. Eine längere Beschreibung wie `alt="Fluffy, ein tri-color Terrier mit sehr kurzen Haaren, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist das nicht im `alt` enthalten. Da jedoch die Biografie des Hundes wahrscheinlich keine Haarlänge, Farben oder Spielzeugvorlieben enthält, die für den potenziellen Elternteil wichtig sind, wird das einbezogen. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig für die Adoption des Tieres und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer zugreifen kann und im Kontext relevant sind, sind das, was vermittelt werden muss; nichts mehr. Halten Sie es kurz, präzise und nützlich.

Persönliche Kenntnisse oder zusätzliche Beschreibungen sollten hier nicht einbezogen werden, da sie für Menschen, die das Bild noch nie gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht aus dem Bild erkennen kann, dann sollte es nicht einbezogen werden.

Überlegen Sie, ob Ihre Bilder in Ihrem Inhalt Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und damit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) für eine Menge mehr Informationen zur Bildimplementierung und Best Practices. Sie können auch [Ein alt Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwenden kann.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den umgebenden Text oder in ein `title`-Attribut setzen, wie oben gezeigt. In diesem Fall werden die meisten Screenreader den Alt-Text, das Title-Attribut und den Dateinamen vorlesen. Darüber hinaus zeigen Browser Titeltexte als Tooltips an, wenn mit der Maus darüber gefahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The mozilla red dinosaur", der als Tooltip bei Mausüberfahrt angezeigt wird.](title-attribute.png)

Schauen wir uns noch einmal kurz die vierte Methode an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir überhaupt kein `alt`-Attribut — stattdessen haben wir unsere Beschreibung des Bildes als normalen Textabschnitt dargestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Paragraphen als Alt-Text/Beschriftung für das Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE] > [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup einzufügen, um die Barrierefreiheit von Screenreadern bei Bedarf zu verbessern.

### Figuren und Figurenbeschriftungen

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Figurenunterschrift verbinden:

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

Während es gemischte Unterstützung von Screenreadern für die Zuordnung von Figurenunterschriften zu ihren Figuren gibt, schafft das Hinzufügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Zuordnung, falls keine vorhanden ist. Dennoch ist die Elementstruktur nützlich für das CSS-Styling, und sie bietet eine Möglichkeit, eine Beschreibung des Bildes neben diesem in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in das Design einer Seite eingefügt wird, sein Hauptzweck jedoch die visuelle Dekoration ist. Sie werden im oben genannten Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — das ist, damit Screenreader das Bild erkennen, aber nicht versuchen, das Bild zu beschreiben (stattdessen sagen sie einfach "Bild" oder Ähnliches).

Der Grund, ein leeres `alt` anstelle von gar keinem zu verwenden, ist, dass viele Screenreader die gesamte Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine andere Alternative ist die Verwendung des aria-`[`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)`-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), das ebenfalls verhindert, dass Screenreader alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können die Barrierefreiheit verbessern oder beeinträchtigen. Standardmäßig sind Links in ihrem Erscheinungsbild zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch die Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig sind Links visuell von anderem Text in Farbe und [Dekoration](/de/docs/Web/CSS/text-decoration) unterschieden, wobei Links standardmäßig blau und unterstrichen sind, violett und unterstrichen, wenn sie besucht wurden, und mit einem [fokus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einziges Mittel verwendet werden, um Links von nicht-linkendem Inhalt zu unterscheiden. Die Linktextfarbe muss, wie alle Texte, sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4.5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell signifikant von nicht-linkendem Text unterschieden werden, mit einer Mindestkontraktanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Standard-, besuchten und Fokus-/Aktivstatus und einem 4.5:1-Kontrast zwischen all diesen Statusfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankerelemente werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` eingestellt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichen setzen und wenn JavaScript noch heruntergeladen wird, einen Fehler auslöst oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z. B. Screenreader). In diesen Fällen wird empfohlen, einen {{HTMLElement("button")}} zu verwenden. Generell sollten Sie einen Anker nur für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden, und Links, deren `href`-Wert auf eine Dateiressource verweist, sollten einen Hinweis auf das Verhalten enthalten, das auftreten wird, wenn der Link aktiviert wird.

Personen mit Sehbehinderungen, die mit der Unterstützung von Screenreader-Technologie navigieren, oder die kognitive Bedenken haben, können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software geben das Verhalten möglicherweise nicht einmal an.

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

Wenn ein Symbol anstelle von Text verwendet wird, um solches Linkverhalten zu signalisieren, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skip-Navigation bekannt, ist ein `a`-Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Dieser Link ermöglicht es Menschen, Inhalte zu umgehen, die sich auf mehreren Seiten einer Webseite wiederholen, wie z. B. den Header und die primäre Navigation einer Webseite.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von unterstützender Technologie wie Switch-Control, Sprachbefehle oder Mundstäbe/Kopfstäbe navigieren, wo das Bewegen durch wiederholte Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Anker —, die in enger visueller Nähe zueinander platziert sind, sollten durch Hinzufügen von Abständen getrennt werden. Dieses Spacing ist hilfreich für Menschen, die feinmotorische Probleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Siehe [Test your skills: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML), um zu überprüfen, ob Sie sich diese Informationen gut gemerkt haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun gut darin sein, barrierefreies HTML für die meisten Gelegenheiten zu schreiben. Unser WAI-ARIA-Grundlagenartikel wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als Nächstes werden wir uns CSS und JavaScript ansehen und wie deren gute oder schlechte Verwendung die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
