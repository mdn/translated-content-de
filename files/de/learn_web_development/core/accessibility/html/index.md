---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Zugängliches HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die korrekten Hypertext Markup Language-Elemente jederzeit für den vorgesehenen Zweck verwendet werden. Dieser Artikel analysiert im Detail, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als „Das richtige Element für den richtigen Zweck“, da der Browser viele integrierte Barrierefreiheitsfunktionen bietet.</li>
          <li>Zugängliche Best Practices wie Alt-Text, gute Linktexte, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften sowie Scoping.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, soweit möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Während Sie mehr über HTML lernen – durch Lesen zusätzlicher Ressourcen, Ansehen weiterer Beispiele usw. – werden Sie immer wieder ein gemeinsames Thema sehen: die Bedeutung von semantischem HTML (manchmal auch POSH genannt, oder Plain Old Semantic HTML). Das bedeutet, die korrekten HTML-Elemente so weit wie möglich ihrem beabsichtigten Zweck entsprechend zu verwenden.

Sie könnten sich fragen, warum dies so wichtig ist. Schließlich kann man CSS und JavaScript nutzen, um nahezu jedes HTML-Element so zu gestalten, dass es sich nach Wunsch verhält. Ein Steuerknopf zum Abspielen eines Videos auf Ihrer Website könnte beispielsweise so ausgezeichnet werden:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für den Zweck zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben standardmäßig bereits ein geeignetes Styling (das Sie wahrscheinlich überschreiben möchten) und sind von Haus aus tastaturfreundlich – Benutzer können zwischen den Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es konsequent von Anfang an in Ihrem Projekt verwenden. Noch besser: Semantisches Markup hat neben der Barrierefreiheit noch andere Vorteile:

1. **Einfacher zu entwickeln** – wie oben erwähnt, erhalten Sie einige Funktionen kostenlos und es ist wohl einfacher zu verstehen.
2. **Besser auf mobilen Endgeräten** – semantisches HTML ist in der Regel kompakter in der Dateigröße als nicht-semantischer Chaos-Code und leichter responsiv zu gestalten.
3. **Gut für SEO** – Suchmaschinen gewichten Keywords in Überschriften, Links usw. stärker als Keywords in nicht-semantischen `<div>`s usw., sodass Ihre Dokumente für Kunden leichter auffindbar sind.

Lassen Sie uns auf zugängliches HTML näher eingehen.

## Gute Semantik

Wir haben bereits die Bedeutung korrekter Semantik besprochen und warum das richtige HTML-Element für den Zweck verwendet werden sollte. Dies darf nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Barrierefreiheit stark eingeschränkt wird, wenn sie nicht ordnungsgemäß gehandhabt wird.

Im Web gibt es viele sehr merkwürdige Beispiele für HTML-Markup. Häufig entsteht der Missbrauch von HTML aufgrund veralteter Praktiken, die noch nicht verschwunden sind, manchmal jedoch auch, weil die Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechtes Code durch gutes semantisches Markup ersetzen, wann immer dies möglich ist, sowohl in statischen HTML-Seiten als auch in dynamisch generierten HTML aus [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden – Ihre Seiten könnten abhängig von serverseitigem Code oder Web-/Framework-Komponenten sein, die Sie nicht kontrollieren, oder Sie haben möglicherweise Drittanbieterinhalte auf Ihrer Seite (wie Werbebanner).

Das Ziel ist nicht „alles oder nichts“; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Barrierefreiheitsmaßnahmen für Benutzer eines Screenreaders ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, dies zu navigieren, werden Sie sehen, dass es relativ einfach ist, sich zurechtzufinden:

1. Der Screenreader liest jede Überschrift vor, während Sie den Inhalt durchgehen, und benachrichtigt Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Er hält nach jedem Element an und lässt Sie in einem für Sie angenehmen Tempo fortfahren.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch eine Liste aller Überschriften in vielen Screenreadern aufrufen, sodass Sie diese als praktische Inhaltsangabe verwenden können, um bestimmten Inhalt zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente ausschließlich zum Stylen hinzufügen, ähnlich wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine besonders gute Erfahrung machen – der Screenreader hat nichts, das als Wegweiser verwendet werden kann, sodass Sie keine nützliche Inhaltsangabe abrufen können, und die ganze Seite wird als einzelner großer Block angesehen, der in einem Zug, alles auf einmal, vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit – es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann auch die Barrierefreiheit beeinträchtigen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slang-Ausdrücke verwendet. Davon profitieren nicht nur Menschen mit kognitiven oder anderen Behinderungen; es hilft auch Lesern, für die der Text nicht in ihrer Erstsprache geschrieben ist, jüngeren Menschen… eigentlich jedem! Abgesehen davon sollten Sie versuchen, die Verwendung von Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn Sie dies vermeiden können. Schreiben Sie stattdessen 5 bis 7 anstelle von 5–7.
- Abkürzungen ausschreiben – anstatt Jan zu schreiben, schreiben Sie Januar.
- Akronyme ausschreiben, zumindest einmal oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag verwenden, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [gliedernende Elemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, z. B. Navigation ({{htmlelement("nav")}}), Footer ({{htmlelement("footer")}}) und sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise zu geben, worum es sich bei dem Inhalt handelt, den sie durchsuchen.

Zum Beispiel könnte eine moderne Inhaltsstruktur ungefähr so aussehen:

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

Sie können [ein vollständiges Beispiel hier finden](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Neben guter Semantik und einem attraktiven Layout sollte Ihr Inhalt im Quellcode logisch sinnvoll sein – später können Sie ihn mit CSS an der gewünschten Stelle platzieren, aber Sie sollten von Anfang an die korrekte Quellreihenfolge sicherstellen, damit das, was Benutzer eines Screenreaders vorgelesen bekommen, Sinn ergibt.

### Verwenden Sie semantische UI-Steuerelemente, wo möglich

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren – am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Aspekte der Zugänglichkeit ansprechen, denen Sie sich bewusst sein sollten, wenn Sie solche Steuerelemente erstellen. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Zugänglichkeit beleuchten.

Ein wesentlicher Aspekt der Zugänglichkeit von UI-Steuerelementen ist, dass sie standardmäßig von den Browsern über die Tastatur manipuliert werden können. Sie können dies anhand unseres [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiels ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Tastendrücken sollten Sie sehen, dass der Tab-Fokus anfängt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser ein hervorgehobenes Standard-Styling (es unterscheidet sich leicht zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit den Texten „Click me!“, „Click me too!“ und „And me!“ jeweils darin. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklerwerkzeugen anzeigt. Für weitere Informationen siehe: [Accessibility Inspector > Tabulator-Reihenfolge der Webseite anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, damit die Schaltflächen eine Nachricht auslösen), oder anfangen, Text in einem Texteingabefeld einzugeben. Andere Formularelemente verfügen über unterschiedliche Steuerungen; beispielsweise kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und zwischen ihnen mit den Pfeiltasten nach oben und unten wechseln.

Im Grunde erhalten Sie dieses Verhalten kostenlos, indem Sie die passenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwendet werden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Jedoch ist dies ein weiterer Fall, in dem Menschen manchmal seltsame Dinge mit HTML tun. Beispielsweise sieht man manchmal Schaltflächen, die mit {{htmlelement("div")}}s ausgezeichnet werden, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen – Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keines der Standard-CSS-Stylings, die Schaltflächen normalerweise erhalten. In dem seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Schaltflächen-Element als Schaltfläche verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhalten, einschließlich Tastatur- und Maustastenunterstützung.

#### Aufbau der Tastaturzugänglichkeit

Das Hinzufügen solcher Vorteile erfordert einige Arbeit (siehe unser Beispiel in [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) – sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) an). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedem die Eigenschaft `tabindex="0"` hinzugefügt haben. Wir haben auch `role="button"` eingefügt, damit Benutzer von Screenreaders wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hauptsächlich dazu gedacht, fokussierbaren Elementen eine benutzerdefinierte Tab-Reihenfolge zu ermöglichen (in positiver numerischer Reihenfolge angegeben), anstatt nur in ihrer Standardquellreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrungen führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout die Dinge in einer sehr unterschiedlichen visuellen Reihenfolge darstellt im Vergleich zum Quellcode und Sie die Dinge logischer machen möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` – wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` – ermöglicht es nicht fokussierbaren Elementen, programmatisch fokussiert zu werden, z. B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Um dies zu erreichen, mussten wir das folgende Stück JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element zurück, das aktuell auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es wird sicherlich weitere Probleme damit geben. **Es ist besser, von Anfang an das richtige Element für den richtigen Job zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

UI-Steuerelement-Textbeschriftungen sind für alle Benutzer sehr nützlich, aber insbesondere für Benutzer mit Behinderungen wichtig, sie richtig zu machen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktext-Beschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach „Hier klicken“ für Ihre Beschriftungen, da Benutzer von Screenreaders manchmal eine Liste von Schaltflächen und Formularelementen abrufen. Der folgende Screenshot zeigt unsere Steuerungen, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formulareingabelabels, die von der VoiceOver-Software auf Mac aufgelistet werden. Diese Liste enthält bedeutungslose Labels wie 'glückliches Menübutton', die verschiedenen Formularelementen wie Schaltflächen, Textfeldern und Links zugewiesen wurden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext heraus Sinn ergeben, allein gelesen sowie im Kontext des Absatzes, in dem sie sich befinden. Zum Beispiel zeigt das Folgende ein Beispiel für guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

Aber das ist schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können viel mehr über Link-Implementierung und Best Practices in unserem Artikel [Erstellung von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das Folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht sehr nützlich für behinderte Benutzer. Es gibt nichts im obigen Beispiel, das das Label eindeutig mit der Formulareingabe verknüpft und klar macht, wie es auszufüllen ist, wenn man es nicht sehen kann. Wenn Sie dies mit einigen Screenreadern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung in der Art von „Text bearbeiten“.

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird das Label klar mit der Eingabe verknüpft; die Beschreibung wird eher wie „Füllen Sie Ihren Namen ein: Text bearbeiten“ lauten.

![Ein gutes Formularlabel, das „Füllen Sie Ihren Namen ein“ lautet, ist einer Texteingabeformularsteuerung zugeordnet.](voiceover-good-form-label.png)

Als zusätzlicher Bonus ermöglicht die Verknüpfung eines Labels mit einer Formulareingabe in den meisten Browsern, dass Sie auf das Label klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dadurch wird der Eingabebereich größer und leichter auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularexamples unter [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Eine schöne Erläuterung der Bedeutung ordentlicher Textbeschriftungen und wie man Textbeschriftungs-Probleme mit dem [Accessibility Inspector für Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, finden Sie im folgenden Video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Zugängliche Datentabellen

Eine einfache Datentabelle kann mit sehr einfachem Markup geschrieben werden, z. B.:

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

Aber das hat Probleme – es gibt keine Möglichkeit für einen Screenreader-Benutzer, Reihen oder Spalten als Datenzusammenhänge zu gruppieren. Um dies zu erreichen, müssen die Kopfzeilenreihen bekannt sein und ob sie Kopfzeilen für Reihen oder Spalten sind usw. Dies kann für die obige Tabelle nur visuell erfolgen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich jetzt unser Beispiel mit der [punk bands table](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an – Sie können hier einige Barrierefreiheitsmaßnahmen im Einsatz sehen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert – Sie können auch angeben, ob sie Überschriften für Reihen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datenzusammenhänge, die von Screenreaders als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben – sie fungieren als Alt-Text für eine Tabelle, indem sie einem Benutzer eines Screenreaders eine nützliche kurze Zusammenfassung der Tabelleninhalte geben. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es möglicherweise ebenfalls nützlich finden. Sie brauchen wirklich nicht beides.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details über zugängliche Datentabellen.

## Textalternativen

Während Textinhalte von Natur aus zugänglich sind, kann dasselbe nicht unbedingt für multimediale Inhalte gesagt werden – Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden und Audiomaterial kann von hörgeschädigten Menschen nicht gehört werden. Wir decken Video- und Audiomaterial im Detail im Abschnitt [Zugängliche Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) ab, aber für diesen Artikel betrachten wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element.

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

Das erste Bild bietet einem Screenreader-Benutzer nicht wirklich viel Hilfe – VoiceOver beispielsweise liest „/dinosaur.png, Bild“ vor. Es liest den Dateinamen vor, um etwas Hilfe zu bieten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier irgendeiner Art handelt, aber oft könnten Dateien mit automatisch generierten Dateinamen hochgeladen werden (z. B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalt in ein Bild einfügen – Screenreader können darauf nicht zugreifen. Es gibt auch andere Nachteile – Sie können es nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild trifft, liest er das vollständige `alt`-Attribut vor – „Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.“.

Dies verdeutlicht die Bedeutung, nicht nur aussagekräftige Dateinamen zu verwenden für den Fall, dass **alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass alt-Text in `alt`-Attributen bereitgestellt wird, wo immer dies möglich ist.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, sein. Der alt sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen, die nicht im umgebenden Text dupliziert werden, einschließen.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil der Adoptionsseite von Fluffy für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild enthalten und für einen potenziellen Hundebesitzer relevant sind, die nicht im umgebenden Text dupliziert werden, einbezogen werden. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar und einem Tennisball im Mund."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist dies nicht im `alt` enthalten. Da die Biografie des Hundes jedoch wahrscheinlich keine Haarlänge, Farben oder Spielzeugpräferenzen enthält, die der potenzielle Besitzer kennen muss, ist dies enthalten. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig in Bezug auf die Adoption des Haustiers und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer aufrufen kann und die für den Kontext relevant sind, müssen vermittelt werden; nicht mehr. Kurz, präzise und nützlich halten.

Jegliches persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Personen, die das Bild vorher nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer dies nicht aus dem Bild ersehen kann, dann nicht einfügen.

Ein Faktor, den Sie in Betracht ziehen sollten, ist, ob Ihre Bilder in Ihrem Inhalt eine Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, den `alt`-Attributwert leer zu lassen (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viel mehr Informationen über die Implementierung von Bildern und Best Practices.
> Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie ein alt-Attribut in verschiedenen Situationen für Bilder verwendet wird.

Wenn Sie zusätzliche kontextbezogene Informationen bereitstellen möchten, sollten Sie diese in den umgebenden Text einfügen oder in einem `title`-Attribut, wie oben gezeigt. In diesem Fall werden die meisten Screenreader den Alt-Text, das `title`-Attribut und den Dateinamen vorlesen. Zusätzlich zeigen Browser den Titeltext als Tooltips an, wenn die Maus darüber fährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text „The mozilla red dinosaur“, der als Tooltip beim Mouseover angezeigt wird.](title-attribute.png)

Lassen Sie uns einen kurzen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht – stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, wodurch Screenreader diesen Absatz als Alt-Text/Beschriftung für dieses Bild verwenden können. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten – etwas, was mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die es Entwicklern ermöglicht, ihre Markup um zusätzliche Semantik zu erweitern, um die Zugänglichkeit für Screenreader dort zu verbessern, wo es nötig ist.

### Figuren und Figurenbeschriftungen

HTML enthält zwei Elemente – {{htmlelement("figure")}} und {{htmlelement("figcaption")}} –, die eine Figur irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Bildbeschreibung verknüpfen:

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

Während es eine gemischte Unterstützung von Screenreadern gibt, die eine Figurenbeschreibung mit ihren Figuren verknüpfen, erstellt die Einbeziehung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verknüpfung, wenn keine vorhanden ist. Diese Struktur eignet sich gut für das CSS-Styling und bietet zudem die Möglichkeit, eine Beschreibung des Bildes im Quelltext neben dem Bild zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann vorkommen, dass ein Bild im Design einer Seite enthalten ist, dessen primärer Zweck jedoch nur die visuelle Dekoration ist. Beachten Sie im oben stehenden Codebeispiel, dass das `alt`-Attribut des Bildes leer ist – dies dient dazu, dass Screenreader das Bild erkennen, es jedoch nicht zu beschreiben versuchen (stattdessen würden sie nur „Bild“ oder ähnliches sagen).

Der Grund, ein leeres `alt` zu verwenden, anstatt es nicht einzuschließen, liegt darin, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt`-Attribut bereitgestellt wird. Im obigen Beispiel dient das Bild als visuelle Dekoration für die Überschrift, mit der es verknüpft ist. In solchen Fällen, und in Fällen, in denen ein Bild nur als Dekoration dient und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine weitere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch verhindert, dass Screenreader alternativen Text aussprechen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) können, je nachdem, wie sie verwendet werden, Barrierefreiheit unterstützen oder schaden. Standardmäßig sind Links in ihrem Aussehen zugänglich. Sie können die Barrierefreiheit verbessern, indem sie dem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit jedoch beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich unerwartet verhalten.

### Linkstyling

Standardmäßig unterscheiden sich Links optisch von anderem Text in Farbe und [Text-Dekoration](/de/docs/Web/CSS/Reference/Properties/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn besucht, und mit einem [Fokus-Ring](/de/docs/Web/CSS/Reference/Selectors/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einziges Mittel zur Unterscheidung zwischen Links und nicht verknüpften Inhalten verwendet werden. Linktextfarbe, wie aller Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten sich Links optisch signifikant von nicht verknüpftem Text unterscheiden, mit einem Mindestkontrast von 3:1 zwischen dem Linktext und dem umgebenden Text sowie zwischen Standard-, besuchten und Fokus-/Aktivzuständen und einem Kontrast von 4,5:1 zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Anchor-Tags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichnen und wenn JavaScript noch heruntergeladen wird, Fehler auslöst oder deaktiviert ist. Dies vermittelt auch assistiven Technologien (z. B. Screenreadern) falsche Semantik. In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur ein Anker verwenden, um mit einer richtigen URL zu navigieren.

### Externe Links und Verknüpfungen zu nicht-HTML-Ressourcen

Links, die über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresource verweist, sollten einen Indikator darüber enthalten, welches Verhalten auftreten wird, wenn der Link aktiviert wird.

Menschen mit geringem Sehvermögen, die mit der Hilfe von Screenreading-Technologie navigieren oder kognitive Bedenken haben, können verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreading-Software können dieses Verhalten nicht einmal ankündigen.

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

Wenn ein Symbol anstelle von Text zur Signalisierung des Verhaltens solcher Links verwendet wird, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis der WCAG, Richtlinien 3.2-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am öffnenden {{HTMLElement("body")}}-Element platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Dieser Link ermöglicht es Benutzern, Inhalte zu umgehen, die auf mehreren Seiten einer Website wiederholt werden, wie zum Beispiel den Header und die Hauptnavigation einer Website.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe von assistiven Technologien wie Schaltsteuerung, Sprachbefehlen oder Mund-/Kopfstiften navigieren, bei denen das Durchlaufen wiederholter Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigations-Links - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis der WCAG, Richtlinien 2.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiver Inhalte – einschließlich Anker – die in enger visueller Nähe zueinander platziert sind, sollten Raum zum Trennen erhalten. Diese Abstände sind nützlich für Menschen, die unter Feinmotorikproblemen leiden und beim Navigieren möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Schaltflächen-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten jetzt gut vertraut sein mit dem Schreiben von zugänglichem HTML für die meisten Gelegenheiten. Im nächsten Artikel stellen wir Ihnen einige Tests vor, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
