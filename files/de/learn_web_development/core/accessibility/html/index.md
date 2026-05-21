---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 51b3821941729c1c2eeb63f6547b1251ac8df0f8
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil des Webinhalts kann zugänglich gemacht werden, indem einfach darauf geachtet wird, dass die richtigen HTML-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel behandelt im Detail, wie HTML eingesetzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für die richtige Aufgabe", da der Browser viele eingebaute Accessibility-Hooks bereitstellt.</li>
          <li>Zugänglichkeitsbest Practices wie `alt`-Text, aussagekräftige Linktexte, Formularbeschriftungen und Tabellenzeilen- und Spaltenüberschriften und -bereich.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Je mehr Sie über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen, etc. — desto mehr werden Sie ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Das bedeutet, die richtigen HTML-Elemente möglichst für ihren beabsichtigten Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element dazu bringen, sich in beliebiger Weise zu verhalten. Beispielsweise könnte eine Steuertaste zum Abspielen eines Videos auf Ihrer Website so markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

Nicht nur haben HTML-`<button>`s standardmäßig einige geeignete Stile angewendet (die Sie wahrscheinlich überschreiben möchten), sie haben auch eingebaute Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd> -Taste zwischen den Schaltflächen navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML benötigt nicht länger, um als nicht-semantisches (schlechtes) Markup geschrieben zu werden, wenn Sie es konsequent ab Projektbeginn tun. Noch besser: Semantisches Markup hat neben der Barrierefreiheit weitere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionalitäten kostenlos, und es ist wohl auch einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist in der Regel leichter in der Dateigröße als nicht-semantischer Spaghetticode und einfacher zu gestalten.
3. **Gut für Suchmaschinenoptimierung** — Suchmaschinen gewichten Keywords in Überschriften, Links usw. mehr als Keywords, die in nicht-semantischen `<div>`s, etc. enthalten sind, sodass Ihre Dokumente von Kunden besser gefunden werden.

Lassen Sie uns fortfahren und barrierefreies HTML im Detail betrachten.

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die jeweilige Aufgabe verwenden sollten. Das kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen Barrierefreiheit stark beeinträchtigt wird, wenn man es nicht richtig macht.

Da draußen im Web ist es so, dass die Leute einige sehr merkwürdige Dinge mit HTML-Markup machen. Oft liegt die Fehlverwendung von HTML an noch nicht verschwundenen Althergebrachten Praktiken, aber manchmal geschieht es, weil Autoren es nicht besser wissen. In jedem Fall sollten Sie dort, wo es möglich ist, schlechten Code durch gutes semantisches Markup ersetzen, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML aus [Server-seitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [Client-seitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu beseitigen — Ihre Seiten hängen möglicherweise von serverseitigem Code oder Web-/Framework-Komponenten ab, über die Sie keine Kontrolle haben, oder Sie haben Drittanbieterinhalte auf Ihrer Seite (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Hilfen für die Barrierefreiheit, die ein Benutzer eines Bildschirmlesers haben kann, ist eine ausgezeichnete Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte etwa so aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Bildschirmleser ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, dies zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu verwenden ist:

1. Der Bildschirmleser liest jede Kopfzeile vor, während Sie durch den Inhalt gehen, und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist usw.
2. Er hält nach jedem Element an, sodass Sie in Ihrem eigenen Tempo fortfahren können.
3. Sie können in vielen Bildschirmlesern zum nächsten/vorherigen Titel springen.
4. Sie können auch eine Liste aller Titel in vielen Bildschirmlesern aufrufen, sie als praktische Inhaltsverzeichnisse verwenden, um bestimmten Inhalt zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente nur zur Formatierung hinzufügen, etwa so:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)) ausprobieren, werden Sie keine sehr gute Erfahrung haben — der Bildschirmleser hat nichts, was als Hinweis verwendet werden kann, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die ganze Seite wird als ein einziger großer Block angesehen, sodass sie nur auf einmal, am Stück vorgelesen wird.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, zum Beispiel, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die von Ihnen verwendete Sprache kann auch die Barrierefreiheit beeinflussen. Generell sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachjargons oder umgangssprachlichen Begriffe enthält. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute, sondern auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen… tatsächlich allen! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die nicht klar vom Bildschirmleser vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn Sie sie vermeiden können. Statt "5–7" zu schreiben, schreiben Sie "5 bis 7".
- Erweitern Sie Abkürzungen — anstelle "Jan" schreiben Sie "Januar".
- Erweitern Sie Akronyme, mindestens einmal oder zweimal, und verwenden Sie dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Abschnittelemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, beispielsweise Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Bildschirmleser (und andere Tools), um den Benutzern zusätzliche Hinweise über den Inhalt zu geben, den sie durchgehen.

Beispielsweise könnte eine moderne Inhaltsstruktur etwa so aussehen:

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

Sie finden [ein ausführliches Beispiel hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Zusätzlich zu einer guten Semantik und einem attraktiven Layout sollte Ihr Inhalt logisch in seiner Quellreihenfolge Sinn ergeben — Sie können ihn immer später mit CSS so platzieren, wie Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit das, was Bildschirmleserbenutzern vorgelesen wird, Sinn ergibt.

### Verwenden Sie möglichst semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — in der Regel Schaltflächen, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreiheitsaspekte, auf die Sie achten sollten, wenn Sie solche Steuerelemente erstellen. Spätere Artikel über WAI-ARIA und Multimedia werden sich mit anderen Aspekten der UI-Barrierefreiheit befassen.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser standardmäßig erlauben, sie mit der Tastatur zu manipulieren. Sie können dies anhand unseres [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiels ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die <kbd>Tab</kbd>-Taste zu drücken; nach ein paar Mal Drücken sollten Sie sehen, dass der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser (es unterscheidet sich leicht zwischen verschiedenen Browsern) eine hervorgehobene Standardeinstellung, sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Klicken Sie mich!", "Klicken Sie mich auch!", und "Und mich!" innerhalb der jeweiligen Schaltflächen. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklertools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben einige JavaScript-Ereignisse implementiert, um die Schaltflächen eine Nachricht ausgeben zu lassen), oder beginnen Sie mit der Eingabe, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; beispielsweise kann das {{htmlelement("select")}}-Element über die Aufwärts- und Abwärtspfeiltasten seine Optionen anzeigen und zwischen ihnen wechseln.

Grundsätzlich erhalten Sie dieses Verhalten kostenlos, indem Sie die entsprechenden Elemente verwenden, beispielsweise:

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

Dies bedeutet, dass sie Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwenden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dennoch ist dies ein weiterer Fall, bei dem Menschen manchmal seltsame Dinge mit HTML tun. Beispielsweise sehen Sie manchmal Schaltflächen, die mithilfe von {{htmlelement("div")}}s markiert werden, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastenzugänglichkeit, die Sie gehabt hätten, wenn Sie nur {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keinen der standardmäßigen CSS-Stile, die Schaltflächen haben. Im seltenen bis nicht vorhandenen Fall, dass Sie ein Nicht-Schaltflächenelement für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhaltensweisen, einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wiederherstellen

Diese Vorteile wiederhinzuzufügen, erfordert ein wenig Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen — sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) an). Hier haben wir unsere gefälschten `<div>`-Schaltflächen fokussierbar gemacht (einschließlich über Tab), indem wir jedem den Attributwert `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Benutzer von Bildschirmlesern wissen, dass sie das Element fokussieren und damit interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hauptsächlich dazu gedacht, tabbable Elemente in einer benutzerdefinierten Tabreihenfolge (angegeben in positiver Zahl) zu haben, anstatt nur in der Standardquellenreihenfolge durchgegangen zu werden. Das ist fast immer eine schlechte Idee, da es große Verwirrung stiften kann. Verwenden Sie es nur, wenn Sie es wirklich müssen, beispielsweise wenn das Layout Dinge in einer völlig anderen visuellen Reihenfolge darstellt als der Quellcode und Sie die Dinge logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben beschrieben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabbbar sind, tabbbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht es Elementen, die normalerweise nicht tabbbar sind, den Fokus programmgesteuert zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie mit der <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dafür mussten wir folgendes JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die `key`-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, mithilfe von `document.activeElement.click()`. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das aktuell auf der Seite fokussierte Element.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder hinzuzufügen. Und es gibt wahrscheinlich noch andere Probleme damit. **Es ist besser, von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Textbeschriftungen von UI-Steuerelementen sind für alle Benutzer sehr nützlich, aber ihre korrekte Verwendung ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Bildschirmleserbenutzer manchmal eine Liste von Schaltflächen und Formularelementen anzeigen. Das folgende Bildschirmfoto zeigt unsere Steuerungen, die von VoiceOver auf einem Mac aufgeführt werden.

![Liste der Formulareingabebeschriftungen, die von der VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'glückliches Menü-Schaltfläche` für verschiedene Formularelemente wie Schaltfläche, Textfeld und Link](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext heraus und alleine sowie im Kontext des Absatzes, in dem sie sich befinden, Sinn ergeben. Zum Beispiel zeigt das folgende Beispiel einen guten Linktext:

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
> In unserem Artikel [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden Sie viele weitere Informationen zur Implementierung von Links und zu Best Practices. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jede Formulareingabe eingeben müssen. Das folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für behinderte Benutzer nicht so nützlich. In dem obigen Beispiel gibt es nichts, das das Label eindeutig mit der Formulareingabe verknüpft und klar macht, wie man es ausfüllt, wenn man es nicht sehen kann. Wenn Sie dies mit einigen Bildschirmlesern aufrufen, wird Ihnen möglicherweise nur eine Beschreibung wie "Text bearbeiten" angezeigt.

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird das Label klar mit der Eingabe verbunden; die Beschreibung wird eher "Geben Sie Ihren Namen ein: Text bearbeiten" lauten.

![Ein gutes Formularlabel, das 'Geben Sie Ihren Namen ein' liest, das einem Texteingabeformularsteuerung zugewiesen wird.](voiceover-good-form-label.png)

Ein zusätzlicher Vorteil ist, dass in den meisten Browsern, die das Label mit einer Formulareingabe verknüpfen, ermöglicht wird, das Label anzuklicken, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe eine größere Hitfläche, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

In einem Video erklärt Mozilla die Bedeutung von richtigen Textbeschriftungen und wie man Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht:

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

Das hat jedoch Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Zeilen oder Spalten miteinander als Gruppierungen von Daten zu assoziieren. Um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. anführen. Dies kann nur visuell für die obige Tabelle getan werden (sehen Sie sich [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) an und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser [Tabelle mit Punkbands-Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen in Aktion sehen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Bildschirmlesern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erledigen beide ähnliche Aufgaben — sie fungieren als Alternativtext für eine Tabelle und geben einem Bildschirmleser-Benutzer eine nützliche kurze Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es möglicherweise ebenfalls nützlich finden. Sie benötigen in der Regel nicht beide.

> [!NOTE]
> Weitere Details zu zugänglichen Datentabellen finden Sie in unserem Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility).

## Textalternativen

Während textbasierte Inhalte von Natur aus zugänglich sind, lässt sich das von multimedialen Inhalten nicht unbedingt sagen — Bild- und Videoinhalte sind für sehgeschädigte Menschen nicht sichtbar, und Audiomaterialien für hörgeschädigte Personen nicht hörbar. Wir behandeln Video- und Audioinhalte im Detail in der [Barrierefreie Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber in diesem Artikel werden wir die Barrierefreiheit für das einfache {{htmlelement("img")}}-Element betrachten.

Wir haben ein einfaches Beispiel geschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bilds zeigt:

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

Das erste Bild bietet einem Bildschirmleser-Benutzer nicht wirklich viel Hilfe — zum Beispiel liest VoiceOver "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um einige Hilfe zu bieten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um eine Dinosaurierart handelt, aber oft werden Dateien möglicherweise mit maschinell erzeugten Dateinamen hochgeladen (z. B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes geben.

> [!NOTE]
> Deshalb sollten Sie keinen Textinhalt in einem Bild einfügen — Bildschirmleser können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Machen Sie das einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild trifft, liest er den vollständigen `alt`-Attributwert vor — „Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen“.

Dies unterstreicht die Bedeutung nicht nur von aussagekräftigen Dateinamen, für den Fall, dass sogenannter **alt-Text** nicht verfügbar ist, sondern auch dafür zu sorgen, dass alt-Text wo immer möglich in `alt`-Attributen bereitgestellt wird.

Beachten Sie, dass der Inhalt des `alt`-Attributs immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, enthalten sollte. Das `alt` sollte kurz und prägnant sein und alle Informationen enthalten, die das Bild vermittelt und im umgebenden Text nicht dupliziert sind.

Der Inhalt des `alt`-Attributs unterscheidet sich je nach Kontext. Wenn zum Beispiel das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die das Bild vermittelt und die für einen potenziellen Hundebesitzer relevant sind und im umgebenden Text nicht dupliziert werden, enthalten sein. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist das nicht im `alt` enthalten. Da die Biografie des Hundes jedoch wahrscheinlich nicht Haarlänge, Farben oder Spielzeugvorlieben enthält, die der potenzielle Besitzer wissen muss, wird es einbezogen. Ist das Bild draußen oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Das ist im Hinblick auf die Adoption des Haustieres nicht wichtig und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer zugänglich und relevant für den Kontext sind, müssen vermittelt werden; nichts weiter. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht einbezogen werden, da sie für Personen, die das Bild noch nie gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das aufgrund des Bildes nicht wissen kann, dann nicht einfügen.

Was Sie ebenfalls überlegen sollten, ist, ob Ihre Bilder in Ihrem Inhalt Bedeutung haben oder ob sie rein zur visuellen Dekoration gedacht sind und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut einzugeben (siehe [leere alt-Attribute](#leere_`alt`-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viele weitere Informationen zur Implementierung von Bildern und Best Practices.
> Sie können auch den [An Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) prüfen, um zu lernen, wie man ein `alt`-Attribut in verschiedenen Situationen verwendet.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den Text um das Bild herum einfügen oder in einem `title`-Attribut unterbringen, wie oben gezeigt. In diesem Fall werden die meisten Bildschirmleser den alt-Text, das title-Attribut und den Dateinamen vorlesen. Außerdem zeigen Browser Titeltexte als Tooltips an, wenn der Mauszeiger darüberfährt.

![Bildschirmfoto eines roten Tyrannosaurus Rex mit der Text "Der Mozilla rote Dinosaurier", der als Tooltip beim Überfahren mit der Maus angezeigt wird.](title-attribute.png)

Lassen Sie uns einen kurzen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Bildschirmleser diesen Absatz als alt-Text/Label für das Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/) Spezifikation, mit der Entwickler ihrem Markup zusätzliche Semantik hinzufügen können, um die Barrierefreiheit von Bildschirmlesern bei Bedarf zu verbessern.

### Figuren und Bildunterschriften

HTML umfasst zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht zwingend ein Bild) mit einer Bildunterschrift verbinden:

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

Während es gemischte Unterstützung von Bildschirmlesern gibt, die Bildunterschriften mit ihren Figuren verbinden, kann man die Verbindung erstellen, indem man [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzufügt, wenn keine vorhanden ist. Das besagte, die Elementstruktur ist nützlich für CSS-Styling und bietet einen Weg, eine Beschreibung des Bildes neben dem Bild im Quellcode zu platzieren.

### Leere `alt`-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es gibt Zeiten, in denen ein Bild in das Design einer Seite aufgenommen wird, sein Hauptzweck jedoch darin besteht, zur visuellen Dekoration gedacht zu sein. Sie werden im obigen Codebeispiel feststellen, dass das `alt`-Attribut des Images leer ist — dies soll dafür sorgen, dass Bildschirmleser das Bild erkennen, ohne es zu beschreiben versuchen zu wollen (stattdessen würden sie einfach "Bild" oder Ähnliches sagen).

Der Grund, warum Sie ein leeres `alt` verwenden sollten, anstatt es nicht einzubauen, ist, dass viele Bildschirmleser die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration zu der Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente einfügen. Eine andere Alternative wäre die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), was ebenfalls verhindert, dass Bildschirmleser Alternativtexte laut vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder, die nur dekorativ sind, anzuzeigen.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element mit einem `href`-Attribut), können je nachdem, wie sie verwendet werden, Barrieren abbauen oder die Barrierefreiheit beeinträchtigen. Links sind standardmäßig in ihrer Darstellung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch die Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich in unerwarteter Weise verhalten.

### Link-Styling

Links sind per Standardeinstellung sowohl in der Farbe als auch in der [Textdekoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) visuell anders als anderer Text, da Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn besucht, und mit einem [Fokusring](/de/docs/Web/CSS/Reference/Selectors/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht das einzige Mittel sein, um Links von nicht-verlinkenden Inhalten zu unterscheiden. Linktextfarbe, wie aller Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein 4.5:1 Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell deutlich verschieden von nicht-verlinkenden Text sein, mit einem Mindestkontrastbedarf von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Defaul, besuchten und Fokus-/Aktiv-Zuständen und einem 4.5:1 Kontrast zwischen all diesen Statusfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Anker-Tags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichen-Anlegen und wenn JavaScript noch heruntergeladen wird, Fehler auftritt oder deaktiviert ist. Außerdem vermittelt es falsche Semantik für unterstützende Technologien (z. B. Bildschirmleser). In solchen Fällen wird empfohlen, statt dessen einen {{HTMLElement("button")}} zu verwenden. Generell sollten Sie einen Anker nur für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Verlinkung auf nicht-HTML-Ressourcen

Links, die per `target="_blank"` in einem neuen Tab oder Fenster geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresource zeigt, sollten eine Markierung darüber enthalten, welches Verhalten beim Aktivieren des Links auftreten wird.

Benutzer, die von geringem Sehvermögen betroffen sind, die Unterstützung durch Bildschirmlesertechnologie benötigen oder kognitive Probleme haben, könnten verwirrt werden, wenn das neue Tab, Fenùster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen der Bildschirmlesesoftware kündigen das Verhalten möglicherweise nicht einmal an.

#### Link, der ein neues Tab oder Fenster öffnet

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

Wenn ein Icon statt Text verwendet wird, um das Verhalten solcher Links zu kennzeichnen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis der WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur dann, wenn es nötig ist | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzer vorab warnen, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch als skipnav bekannt, ist ein `a` Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element platziert wird und den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link erlaubt Menschen, sich den über mehrere Seiten einer Website wiederholenden Inhalt zu ersparen, wie den Header einer Website und die primäre Navigation.

Sprunglinks sind besonders nützlich für Menschen, die mit der Unterstützung von unterstützender Technologie wie Schaltersteuerung, Sprachkommando oder Mundstöcken/Kopfstöcken navigieren, bei der die Bewegung durch sich wiederholende Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Sprungnavigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Sprungnavigations-Links - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis der WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Anker — die in enger visueller Nähe zueinander platziert werden sollten mit Abstand versehen werden, um sie zu trennen. Dieser Abstand ist vorteilhaft für Menschen, die unter Problemen mit der Feinmotorik leiden und versehentlich den falschen interaktiven Inhalt aktivieren könnten, während sie navigieren.

Abstand kann durch CSS-Eigenschaften wie {{CSSxRef("margin")}} erfolgen.

- [Handzittern und das Riesen-Schaltflächen-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten jetzt gut vertraut sein damit, zugängliches HTML für die meisten Gelegenheiten zu schreiben. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu prüfen, wie gut Sie diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
