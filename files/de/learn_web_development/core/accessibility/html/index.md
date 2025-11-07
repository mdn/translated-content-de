---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Zugängliches HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language-Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel beleuchtet im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Verwendung semantischen HTMLs, auch bekannt als "Das richtige Element für den richtigen Job", da der Browser viele integrierte Barrierefreiheitshaken bietet.</li>
          <li>Barrierefreie Best Practices wie Alt-Text, guter Link-Text, Formularbeschriftungen und Tabellenkopf- und Spaltenüberschriften sowie Bereichsausmittlung.</li>
          <li>Verwendung einfacher, verständlicher Sprache, Vermeidung von Slang und Abkürzungen soweit möglich, und Bereitstellung von Definitionen, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Je mehr Sie über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — desto öfter werden Sie ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH oder Plain Old Semantic HTML genannt). Das bedeutet, dass die richtigen HTML-Elemente so viel wie möglich für ihren vorgesehenen Zweck verwendet werden.

Sie könnten sich fragen, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um jedes HTML-Element so verhalten zu lassen, wie Sie möchten. Zum Beispiel könnte eine Steuerschaltfläche zum Abspielen eines Videos auf Ihrer Website so markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur eine passende Standardformatierung (die Sie wahrscheinlich überschreiben möchten), sondern sie bieten auch integrierte Tastaturzugänglichkeit — Benutzer können zwischen Schaltflächen mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent tun. Noch besser, semantisches Markup hat zusätzliche Vorteile über die Barrierefreiheit hinaus:

1. **Einfacher in der Entwicklung** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, und es ist möglicherweise einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist möglicherweise leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher anpassbar.
3. **Gut für SEO** — Suchmaschinen verleihen Schlagworten in Überschriften, Links usw. mehr Bedeutung als Schlagworten in nicht-semantischen `<div>`s, usw., wodurch Ihre Dokumente von Kunden besser gefunden werden können.

Lasst uns fortfahren und uns zugängliches HTML genauer ansehen.

## Gute Semantik

Wir haben bereits über die Bedeutung korrekter Semantik gesprochen und warum wir das richtige HTML-Element für den jeweiligen Job verwenden sollten. Das kann nicht ignoriert werden, da es einer der Hauptpunkte ist, an denen die Barrierefreiheit schlecht gebrochen wird, wenn sie nicht richtig gehandhabt wird.

Da draußen im Web ist die Wahrheit, dass die Leute einige sehr seltsame Dinge mit HTML-Markup machen. Oftmals ist der Missbrauch von HTML auf alte Praktiken zurückzuführen, die noch nicht verschwunden sind, aber manchmal tritt er auf, weil Autoren es nicht besser wissen. Was auch immer der Fall ist, Sie sollten schlechten Code wo immer möglich durch gutes semantisches Markup ersetzen, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML aus [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten abhängig von serverseitigem Code oder Web-/Framework-Komponenten sein, über die Sie keine Kontrolle haben, oder Sie könnten Drittanbieter-Inhalte auf Ihrer Seite haben (wie Anzeigenbanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird zur Barrierefreiheit beitragen.

### Verwenden Sie gut strukturierte Textinhalte

Eine der besten Hilfen, die ein Benutzer eines Screenreaders haben kann, ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte so aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, um sie mit einem Screenreader auszuprobieren (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich dadurch zu navigieren, werden Sie sehen, dass es ziemlich einfach zu durchlaufen ist:

1. Der Screenreader liest jede Überschrift vor, während Sie den Inhalt durchschreiten, und benachrichtigt Sie, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo vorankommen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch eine Liste aller Überschriften in vielen Screenreadern aufrufen, mit deren Hilfe Sie diese als praktische Inhaltsangabe verwenden können, um spezifische Inhalte zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw. unter Verwendung von Zeilenumbrüchen und fügen HTML-Elemente rein aus Stilgründen hinzu, so etwas wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), haben Sie kein sehr gutes Erlebnis — der Screenreader hat nichts als Orientierungspunkte zu verwenden, sodass Sie keine nützliche Inhaltsangabe abrufen können, und die gesamte Seite wird als ein einziger riesiger Block angesehen, der in einem Rutsch vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu formatieren oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slang-Wörter verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es nutzt Lesern, deren Muttersprache der Text nicht ist, jüngeren Menschen…, allen, in der Tat! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die nicht klar vom Screenreader vorgelesen werden. Beispielsweise:

- Verwenden Sie keine Bindestriche, wenn Sie sie vermeiden können. Schreiben Sie statt "5–7" lieber "5 bis 7".
- Schreiben Sie Abkürzungen aus — statt "Jan" schreiben Sie "Januar".
- Schreiben Sie Akronyme aus, zumindest ein- oder zweimal, und verwenden Sie das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitenteile logisch

Sie sollten geeignete [Strukturierungselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel Navigation ({{htmlelement("nav")}}), Footer ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um den Nutzern zusätzliche Hinweise zu den Inhalten zu geben, die sie durchstöbern.

Ein modernes Inhaltsstruktur könnte ungefähr so aussehen:

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

Sie können ein [vollständiges Beispiel hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) finden.

Zusätzlich zu einer guten Semantik und einem attraktiven Layout sollte Ihr Inhalt im Quellcode logisch sinnvoll sein — Sie können ihn später mit CSS dort platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtigstellen, damit das, was den Screenreader-Nutzern vorgelesen wird, Sinn ergibt.

### Verwenden Sie, wenn möglich, semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Nutzer interagieren — am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt gehen wir auf die grundlegenden Barrierefreiheitsaspekte ein, auf die bei der Erstellung solcher Steuerelemente zu achten ist. Spätere Artikel zu WAI-ARIA und Multimedia werden sich mit anderen Aspekten der UI-Barrierefreiheit befassen.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur aus manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) ausprobieren. Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Drücken sollten Sie sehen, wie der Tab-Fokus durch die verschiedenen fokussierbaren Elemente bewegt. Die fokussierten Elemente erhalten in jedem Browser eine hervorgehobene Standardstilisierung (es unterscheidet sich leicht zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!" und "And me!" in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwicklerwerkzeugen ein Overlay aktivieren, das die Tab-Reihenfolge der Seite anzeigt. Weitere Informationen siehe: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um den Schaltflächen eine Nachricht anzuzeigen), oder anfangen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben verschiedene Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und zwischen ihnen mit den Auf- und Abwärtspfeiltasten wechseln.

Sie erhalten dieses Verhalten im Wesentlichen kostenlos, indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Etiketten angemessen verwendet werden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formulareingabefelder).

Dies ist jedoch ein weiterer Fall, bei dem Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sieht man manchmal Schaltflächen, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten auch keine der standardmäßigen CSS-Stilvorlagen, die Schaltflächen erhalten. In den seltenen bis nicht existierenden Fällen, in denen Sie ein Nicht-Schaltflächen-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhalten einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile wieder einzubauen, erfordert etwas Arbeit (ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel — sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren Fake `<div>`-Schaltflächen die Fähigkeit gegeben, fokussiert zu werden (einschließlich via Tab), indem wir jeder das Attribut `tabindex="0"` zuweisen. Wir fügen auch `role="button"` hinzu, damit Screenreader-Nutzer wissen, dass sie das Element fokussieren und damit interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut in erster Linie dazu gedacht, dass tabbare Elemente eine benutzerdefinierte Tabreihenfolge haben können (angegeben in positiver numerischer Reihenfolge), anstatt einfach in ihrer standardmäßigen Quellreihenfolge durchgetabbt zu werden. Das ist fast immer eine schlechte Idee, da es erhebliche Verwirrung stiften kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge als der Quellcode zeigt und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass normalerweise nicht tabbierbare Elemente tabbierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht, dass normalerweise nicht tabbierbare Elemente programmatisch fokussiert werden können, z.B. über JavaScript oder als Ziel von Links.

Während die oben genannte Ergänzung es uns erlaubt, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende Stück JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen, welche Schaltfläche über die [`key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement), das uns das Element gibt, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Umstände, um die Funktionalität wieder einzubauen. Und es gibt definitiv andere Probleme damit. **Besser, einfach das richtige Element für den richtigen Job von Anfang an zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Textbeschriftungen auf UI-Steuerelementen sind für alle Benutzer sehr nützlich, aber ihre korrekte Umsetzung ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Nutzer manchmal eine Liste von Schaltflächen und Formularsteuerelementen abrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formularbeschriftungen, die von der VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button', die auf verschiedene Formularelemente wie Button, Textfeld und Link angewendet werden](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl aus dem Kontext selbst heraus als auch im Kontext des Absatzes, in dem sie sich befinden, Sinn ergeben. Ein gutes Beispiel für guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

abwägend, jedoch ist dies schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können in unserem [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) Artikel viel mehr über die Implementierung von Links und Best Practices erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um einen Anhaltspunkt zu geben, was Sie in jede Formulareingabe eingeben müssen. Das folgende Beispiel scheint vernünftig genug zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für behinderte Nutzer nicht sehr nützlich. Es gibt nichts in dem obigen Beispiel, das die Beschriftung unmissverständlich mit der Formulareingabe verbindet und klar macht, wie sie ausgefüllt werden soll, wenn Sie sie nicht sehen können. Wenn Sie dies mit einigen Screenreadern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung deutlich mit der Eingabe verbunden; die Beschreibung wird eher wie "Ihr Name: Text bearbeiten" lauten.

![Eine gute Formularbeschreibung lautet 'Geben Sie Ihren Namen ein' und wird einer Textinput-Formularsteuerung zugeordnet.] (voiceover-good-form-label.png)

Als zusätzlichen Bonus bedeutet das Verknüpfen der Beschriftung mit einer Formulareingabe in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe ein größerer Trefferbereich, dadurch leichter auswählbar.

> [!NOTE]
> Sie können einige gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können eine schöne Erklärung zur Wichtigkeit von korrekten Textbeschriftungen und wie man Textbeschriftungsprobleme mithilfe des [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, im folgenden Video finden:

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

Aber das hat Probleme – es gibt keine Möglichkeit für einen Screenreader-Nutzer, Zeilen oder Spalten als Datengruppierungen zuzuordnen. Dazu müssen die Überschriftenreihen bekannt sein und ob sie Zeilen, Spalten usw. überschreiben. Dies kann nur visuell für die obige Tabelle geschehen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Jetzt betrachten wir unser [Punkbands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) — Sie sehen hier ein paar Barrierefreiheitshelfer am Werk:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt vollständige Datengruppen, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben — sie fungieren als Alt-Text für eine Tabelle und geben einem Screenreader-Nutzer eine nützliche schnelle Zusammenfassung der Inhaltes. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Nutzer zugänglich macht, die dies möglicherweise ebenfalls nützlich finden. Sie brauchen wirklich nicht beide.

> [!NOTE]
> Siehe unseren [Artikel über HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für mehr Details zu zugänglichen Datentabellen.

## Textalternativen

Während Textinhalt inhärent zugänglich ist, gilt das nicht unbedingt für Multimedia-Inhalte — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen, und Audiomaterial nicht von gehörlosen Menschen gehört werden. In [Zugängliche Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) behandeln wir Video- und Audiocontent im Detail, aber in diesem Artikel befassen wir uns mit der Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element.

Wir haben ein einfaches Beispiel ausgearbeitet, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

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

Das erste Bild bietet dem Nutzer eines Screenreaders wirklich nicht viel Hilfe — VoiceOver beispielsweise liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um irgendwie zu helfen. In diesem Beispiel weiß der Nutzer zumindest, dass es sich um einen Dinosaurier handelt, aber oft können Dateien mit maschinengenerierten Dateinamen hochgeladen werden (z. B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Bildinhalt bieten.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalt in einem Bild einschließen — Screenreader können darauf nicht zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader das zweite Bild erfasst, liest er das gesamte Alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies unterstreicht die Bedeutung nicht nur sinnvoller Dateinamen, falls kein sogenannter **alt-Text** verfügbar ist, sondern auch die sicherzustellen, dass alt-Text wo immer möglich in `alt`-Attributen bereitgestellt wird.

Beachten Sie, dass der Inhalt des `alt`-Attributs immer eine direkte Darstellung des Bildes und dessen, was es visuell vermitteln soll, geben sollte. Das alt sollte kurz und präzise sein und alle Informationen enthalten, die im Bild vermittelt werden und nicht in dem umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert basierend auf dem Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Rezension für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten relevante Informationen, die aus dem Bild hervorgehen und nicht in dem umgebenden Text dupliziert werden, inbegriffen sein. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` wäre angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist das nicht im `alt` enthalten. Da Fluffys Biografie wahrscheinlich nicht Haarlänge, Farben oder Spielzeugpräferenzen enthält, die der potenzielle Besitzer wissen muss, wird es inkludiert. Ist das Bild im Freien oder trägt Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht inbegriffen. Alle Informationen, die das Bild übermittelt und ein sehender Benutzer zugreifen kann und relevant für den Kontext ist, sollte vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da diese für Menschen, die das Bild noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht aus dem Bild heraus wissen kann, sollten Sie es nicht einfügen.

Überlegen Sie, ob Ihre Bilder innerhalb Ihres Inhalts Bedeutung haben, oder ob sie rein zur visuellen Dekoration verwendet werden und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, eine Leerzeile für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder zu verwenden.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) für viele weitere Informationen zur Bildimplementierung und Best Practices.
> Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie man ein Alt-Attribut für Bilder in verschiedenen Situationen verwendet.

Wenn Sie möchten, können Sie zusätzliche kontextbezogene Informationen bereitstellen, die Sie in den Text um das Bild, oder in ein `title`-Attribut, ähnlich dem vorstehenden Fall, einfügen können. In diesem Fall lesen die meisten Screenreader sowohl den Alt-Text, als auch den Titel und den Dateinamen vor. Zusätzlich zeigen Browser Titeltexte als Tooltips an, wenn mit der Maus darüber gefahren wird.

![Screenshot von einem roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier", angezeigt als Tooltip bei Mouseover.](title-attribute.png)

Schauen wir uns schnell die vierte Methode an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` gegeben und dann das Attribut `aria-labelledby` verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Das ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, was mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/) Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup einzubauen, um die Barrierefreiheit des Screenreaders bei Bedarf zu verbessern.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung jeglicher Art (es kann alles sein, nicht zwingend ein Bild) mit einer Bildunterschrift verknüpfen:

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

Es gibt gemischte Unterstützung in Screenreadern bei der Verknüpfung von Bildunterschriften mit ihren Abbildungen. Die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) schafft jedoch die Zuordnung, wenn keine vorhanden ist. Das heißt, die Elementstruktur ist für CSS-Styling nützlich und bietet eine Möglichkeit, eine Beschreibung des Bildes im Quellcode daneben zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, aber sein Hauptzweck ist die visuelle Dekoration. Sie werden bemerken, dass im oben gezeigten Codebeispiel das `alt`-Attribut des Bildes leer ist — dies dient dazu, dass Screenreader das Bild erkennen, aber nicht versuchen, das Bild zu beschreiben (stattdessen würden sie einfach "Bild" oder ähnliches sagen).

Der Grund, ein leeres `alt` zu verwenden, statt es gar nicht hinzuzufügen, besteht darin, dass viele Screenreader die gesamte Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel dient das Bild als visuelle Dekoration zur damit verbundenen Überschrift. In Fällen wie diesem, und in Fällen, in denen ein Bild nur zu dekorativen Zwecken verwendet wird und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine andere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies ebenfalls den Screenreader daran hindert, Alternativtexte vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder darzustellen, die nur dekorativen Zwecken dienen.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element mit einem `href` Attribut), abhängig davon, wie sie verwendet werden, können die Barrierefreiheit verbessern oder schaden. Standardmäßig sind Links in der Darstellung zugänglich. Sie können die Barrierefreiheit stärken, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können aber auch die Barrierefreiheit beeinträchtigen, wenn ihr zugänglicher Stil entfernt oder durch JavaScript ein unerwartetes Verhalten verursacht wird.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in der Farbe als auch in der [Text-Dekoration](/de/docs/Web/CSS/Reference/Properties/text-decoration), wobei Links standardmäßig blau und unterstrichen, besuchte Links lila und unterstrichen und beim Erhalt von Tastaturfokus mit einem [Fokus-Ring](/de/docs/Web/CSS/Reference/Selectors/:focus) versehen sind.

Farbe sollte nicht als einzige Methode verwendet werden, um Links von nicht verlinkendem Inhalt zu unterscheiden. Link-Textfarbe muss, wie alle Texte, signifikant unterschiedlich zur Hintergrundfarbe sein ([ein 4.5:1 Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant von nicht verlinktem Text abweichen, mit einem Mindestkontrast von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, besuchten und Fokus-/aktivierten Zuständen sowie einem 4.5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden häufig mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen eines Lesezeichens und wenn JavaScript noch heruntergeladen wird, Fehler hat oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker-Element nur für die Navigation mithilfe einer richtigen URL verwenden.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster geöffnet werden sollen und Links, deren `href`-Wert auf eine Datei hinweist, sollten einen Indikator über das Verhalten beinhalten, das bei der Aktivierung des Links auftritt.

Personen mit Sehbeeinträchtigungen, die mit der Hilfe von Screenreader-Technologien navigieren, oder Personen mit kognitiven Bedenken können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software können das Verhalten nicht einmal ankündigen.

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten dieses Linktyps zu kennzeichnen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertextlinks](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Erklärung zur WCAG, Richtlinie 3.2 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs von einem Link nur wenn nötig | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Geben Sie Nutzern eine Vorwarnung, wenn sich ein neues Fenster öffnet | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch bekannt als Skipnav, ist ein `a`-Element, das so nah wie möglich an das Öffnende {{HTMLElement("body")}}-Element platziert wird und auf den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu überspringen, die auf mehreren Seiten einer Website wiederholt werden, wie z.B. die Kopfzeile und die Hauptnavigation einer Website.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe von assistiver Technologie wie Schaltersteuerung, Sprachbefehlen oder Mundstöcken/Kopfstäben navigieren, wo das Durchqueren von repetitiven Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Erklärung der WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Anker — die sich in enger visueller Nähe zueinander befinden, sollten Platz eingefügt bekommen, um sie zu trennen. Dieser Abstand ist vorteilhaft für Menschen, die Probleme mit der Feinmotorik haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten nun gut in der Lage sein, für die meisten Gelegenheiten zugängliches HTML zu schreiben. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
