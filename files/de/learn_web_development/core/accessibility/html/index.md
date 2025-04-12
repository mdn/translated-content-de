---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Zugängliches HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem dafür gesorgt wird, dass die richtigen Hypertext Markup Language-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit sicherzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis für Barrierefreiheitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für die richtige Aufgabe", da der Browser viele eingebaute Barrierefreiheitshooks bietet.</li>
          <li>Bewährte Praktiken zur Barrierefreiheit wie Alt-Text, gute Link-Betexte, Formularbeschriftungen sowie Zeilen- und Spaltenüberschriften und deren Zuordnung bei Tabellen.</li>
          <li>Die Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen wo möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Wichtigkeit der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Je mehr Sie über HTML lernen — lesen Sie mehr Ressourcen, schauen Sie sich mehr Beispiele an usw. — desto häufiger werden Sie ein gemeinsames Thema erkennen: die Wichtigkeit der Verwendung von semantischem HTML (manchmal als POSH oder Plain Old Semantic HTML bezeichnet). Dies bedeutet, die richtigen HTML-Elemente für ihren vorgesehenen Zweck so oft wie möglich zu verwenden.

Sie könnten sich fragen, warum dies so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um beinahe jedes HTML-Element so zu verhalten, wie Sie es möchten. Zum Beispiel könnte ein Steuerelement, das ein Video auf Ihrer Website abspielt, folgendermaßen markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur einige geeignete Standardstile (die Sie wahrscheinlich überschreiben möchten), sie verfügen auch über eingebaute Tastaturzugänglichkeit – Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Schaltflächen navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML erfordert nicht mehr Zeit zum Schreiben als nicht-semantische (schlechte) Markup, wenn Sie es von Beginn Ihres Projekts an konsequent anwenden. Noch besser, semantisches Markup hat neben der Barrierefreiheit weitere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, außerdem ist es möglicherweise einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist möglicherweise leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen messen Keywords in Überschriften, Links usw. mehr Bedeutung bei als Keywords, die in nicht-semantischen `<div>`s usw. enthalten sind, wodurch Ihre Dokumente für Kunden besser auffindbar werden.

Lassen Sie uns fortfahren und zugängliches HTML im Detail betrachten.

## Gute Semantik

Wir haben bereits über die Wichtigkeit richtiger Semantik gesprochen und darüber, warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Barrierefreiheit schwer beeinträchtigt wird, wenn sie nicht richtig gehandhabt wird.

Draußen im Internet ist die Wahrheit, dass Menschen sehr seltsame Dinge mit HTML-Markup machen. Oft resultiert der Missbrauch von HTML aus älteren Praktiken, die noch nicht verschwunden sind, manchmal passiert es jedoch auch, weil Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechten Code so weit wie möglich mit gutem semantischem Markup ersetzen, sowohl in statischen HTML-Seiten als auch dynamisch generiertem HTML von [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von serverseitigem Code oder Web-Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Inhalte von Drittanbietern auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eines der besten Hilfsmittel für die Barrierefreiheit eines Bildschirmleser-Benutzers ist eine ausgezeichnete Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte etwa so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Bildschirmleser ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, darin zu navigieren, werden Sie feststellen, dass es ziemlich einfach zu navigieren ist:

1. Der Bildschirmleser liest jede Überschrift vor, während Sie sich durch den Inhalt bewegen, und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist usw.
2. Er hält nach jedem Element an, sodass Sie in Ihrem eigenen angenehmen Tempo gehen können.
3. In vielen Bildschirmlesern können Sie zur nächsten/vorherigen Überschrift springen.
4. Sie können auch eine Liste aller Überschriften in vielen Bildschirmlesern aufrufen, sodass Sie diese als praktische Inhaltsverzeichnis verwenden können, um bestimmten Inhalt zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur für das Styling hinzu, etwa so:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine gute Erfahrung haben — der Bildschirmleser hat nichts, was er als Wegweiser nutzen kann, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die gesamte Seite wird als ein einziger riesiger Block betrachtet, sodass sie auf einmal vollständig vorgelesen wird.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, zum Beispiel, weil es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinträchtigen. Allgemein sollten Sie klare Sprache verwenden, die nicht unnötig komplex ist und keine unnötigen Jargon- oder Slangbegriffe verwendet. Davon profitieren nicht nur Menschen mit kognitiven oder anderen Behinderungen; es kommt auch Lesern zugute, für die der Text nicht in ihrer Erstsprache geschrieben ist, jüngeren Menschen… jeder, in der Tat! Davon abgesehen sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Bildschirmleser nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Striche, wenn Sie es vermeiden können. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Kürzel ausschreiben — anstatt Jan zu schreiben, schreiben Sie Januar.
- Akronyme ausschreiben, mindestens einmal oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag verwenden, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Gliederungselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Bildschirmleser (und andere Tools), um Benutzern zusätzliche Hinweise über den Inhalt zu geben, den sie navigieren.

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

Sie finden ein [vollständiges Beispiel hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Neben guter Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch sinnvoll gestaltet sein – Sie können sie später immer mit CSS platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig setzen, damit das, was den Bildschirmleser-Benutzern vorgelesen wird, verständlich ist.

### Verwenden Sie semantische UI-Steuerelemente, wo möglich

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren – am häufigsten Schaltflächen, Links und Formularsteuerelemente. In diesem Abschnitt betrachten wir die grundlegenden barrierefreien Bedenken, auf die Sie achten sollten, wenn Sie solche Steuerelemente erstellen. Spätere Artikel über WAI-ARIA und Multimedia werden auf andere Aspekte der UI-Barrierefreiheit eingehen.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser standardmäßig die Manipulation durch die Tastatur ermöglichen. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach ein paar Drücken sollten Sie sehen, dass der Tab-Fokus anfängt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente haben in jedem Browser einen hervorgehobenen Standardstil (er unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit den Texten "Click me!", "Click me too!" und "And me!" darin. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklerwerkzeugen anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einen fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, um den Schaltflächen eine Meldung hinzuzufügen), oder anfangen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Pfeiltasten auf- und abwärts zwischen ihnen wechseln.

Sie erhalten im Grunde dieses Verhalten kostenlos, nur indem Sie die geeigneten Elemente verwenden, zum Beispiel:

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

Dies bedeutet, Links, Tasten, Formularelemente und Beschriftungen angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dies ist jedoch ein weiteres Beispiel, bei dem Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sehen Sie manchmal Tasten, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastatur-Zugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten auch nicht den Standard-CSS-Stil, den Schaltflächen haben. In dem seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Schaltflächen-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhaltensweisen inklusive Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wiederherstellen

Solche Vorteile wieder einzubauen erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich per Tabulator), indem wir jedem das Attribut `tabindex="0"` hinzugefügt haben. Wir fügen auch `role="button"` hinzu, damit Bildschirmleser-Benutzer wissen, dass sie das Element fokussieren und damit interagieren können:

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

Im Grunde ist das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) in erster Linie dazu gedacht, dass tabbare Elemente eine benutzerdefinierte Tab-Reihenfolge haben können (in einer positiven numerischen Reihenfolge angegeben), anstatt einfach in ihrer Standardquellreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrungen führen kann. Verwenden Sie es nur, wenn Sie es wirklich benötigen, zum Beispiel, wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge als der Quellcode anzeigt und Sie die Dinge logischer funktionieren lassen möchten. Es gibt zwei andere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabbar sind, tabbar werden können. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht nicht tabbaren Elementen, Fokus programmatisch zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, die Tasten zu tabben, ermöglicht sie uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende Stück JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die Taste <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wurde, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird sicherlich andere Probleme damit geben. **Es ist besser, einfach von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.**

#### Verwenden Sie aussagekräftige Textbezeichnungen

Textbeschriftungen von UI-Steuerelementen sind für alle Benutzer sehr nützlich, aber besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Link-Textbeschriftungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Bildschirmleser-Benutzer manchmal eine Liste von Schaltflächen und Formularsteuerelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formulareingabebeschriftungen, die von der VoiceOver-Software auf Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie "happy menu button", die verschiedenen Formularelementen wie Schaltflächen, Textfeldern und Links gegeben wurden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl außerhalb des Kontextes, in dem sie gelesen werden, als auch im Kontext des Absatzes, in dem sie enthalten sind, sinnvoll sind. Zum Beispiel zeigt das folgende Beispiel guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber das ist schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können viel mehr über die Implementierung von Links und bewährte Methoden in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Folgendes scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für behinderte Benutzer nicht besonders nützlich. Es gibt nichts im obigen Beispiel, das die Beschriftung unmissverständlich mit der Formulareingabe verknüpft und klar macht, wie man sie ausfüllt, wenn man sie nicht sehen kann. Wenn Sie mit einigen Bildschirmlesern darauf zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung klar mit der Eingabe verknüpft; die Beschreibung wird eher wie "Geben Sie Ihren Namen ein: Text bearbeiten".

![Eine gute Formularbezeichnung, die "Geben Sie Ihren Namen ein" lautet, wird einem Texteingabeformular-Steuerelement gegeben. ](voiceover-good-form-label.png)

Ein zusätzlicher Bonus ist, dass in den meisten Browsern, wenn eine Beschriftung mit einer Formulareingabe verknüpft ist, Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe ein größeres Treffergebiet, was sie leichter auswählbar macht.

> [!NOTE]
> Sie können gute und schlechte Formularexemplare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Im folgenden Video finden Sie eine gute Erklärung zur Wichtigkeit richtiger Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Reihen oder Spalten als Datenvergruppungen zu assoziieren. Dazu müssen Sie wissen, was die Kopfzeilenreihen sind und ob sie Zeilen, Spalten usw. anführen. Dies kann nur visuell für die obige Tabelle erfolgen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Nun schauen Sie sich unser [Punkbands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie sehen hier ein paar barrierefreie Hilfen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Bildschirmlesern als Einzeleinheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben – sie fungieren als Alt-Text für eine Tabelle und geben einem Bildschirmleser-Benutzer eine nützliche schnelle Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie brauchen wirklich nicht beides.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für mehr Details zu barrierefreien Datentabellen.

## Textalternativen

Während Textinhalte von Natur aus zugänglich sind, kann dasselbe nicht unbedingt über multimediale Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiokontent kann von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiokontent im Detail im Artikel [Barrierefreie Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir uns die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element ansehen.

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

Das erste Bild bietet einem Bildschirmleser-Benutzer nicht wirklich viel Hilfe – VoiceOver beispielsweise liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um etwas Hilfe zu geben. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier einer Art handelt, aber oft werden Dateien möglicherweise mit maschinell generierten Dateinamen hochgeladen (z. B. von einer Digitalkamera) und diese Dateinamen bieten wahrscheinlich keinen Kontext zum Bildinhalt.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalte innerhalb eines Bildes einfügen — Bildschirmleser können es nicht darauf zugreifen. Es gibt auch andere Nachteile – Sie können es nicht markieren und kopieren/einfügen. Machen Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild trifft, liest er das vollständige Alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der wie ein Mensch aufrecht steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Das zeigt die Wichtigkeit, nicht nur aussagekräftige Dateinamen zu verwenden, falls sogenannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text immer wo möglich in `alt`-Attributen bereitgestellt wird.

Beachten Sie, dass die Inhalte des `alt`-Attributs immer eine direkte Darstellung des Bildes und dessen visueller Aussage vermitteln sollten. Der Alt sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden, die nicht im umgebenden Text wiederholt werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierschutzgesellschaft ist, sollten Information im Bild, die für einen potenziellen Hundebesitzer relevant sind und die nicht im umgebenden Text wiederholt sind, enthalten sein. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist das nicht im `alt` enthalten. Da Fluffys Biografie wahrscheinlich nicht Haarlänge, Farben oder Spielzeugvorlieben enthält, die der potenzielle Besitzer wissen muss, ist das enthalten. Ist das Bild im Freien, oder hat Fluffy ein rotes Halsband mit blauer Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht enthalten. Alle Informationen, die ein Bild vermittelt und auf die ein sehender Benutzer zugreifen kann und die für den Kontext relevant sind, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliche Kenntnisse oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Personen, die das Bild noch nie gesehen haben, nicht nützlich sind. Wenn der Ball das Lieblingsspielzeug von Fluffy ist oder ein sehender Benutzer dies aus dem Bild nicht erkennen kann, schließen Sie es nicht ein.

Ein Aspekt, den Sie berücksichtigen sollten, ist, ob Ihre Bilder innerhalb Ihres Inhalts eine Bedeutung haben oder ob sie rein zur visuellen Dekoration dienen und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viele weitere Informationen über die Implementierung von Bildern und bewährte Praktiken.
> Sie können auch [Eine Alt-Entscheidungsstruktur](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu lernen, wie Sie ein Alt-Attribut für Bilder in verschiedenen Situationen einsetzen.

Wenn Sie zusätzliche kontextbezogene Informationen bereitstellen möchten, sollten Sie diese in den Text um das Bild herum oder in ein `title`-Attribut einfügen, wie oben gezeigt. In diesem Fall werden die meisten Bildschirmleser den Alt-Text, das Title-Attribut und den Dateinamen vorlesen. Zusätzlich zeigen Browser Titeltext als Tooltips an, wenn sie mit der Maus überfahren werden.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der mozilla rote Dinosaurier" als Tooltip beim Überfahren mit der Maus angezeigt.](title-attribute.png)

Werfen wir einen kurzen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als normalen Textabsatz dargestellt, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was Bildschirmleser veranlasst, diesen Absatz als Alt-Text/Beschriftung für das Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik zu ihrem Markup hinzuzufügen, um die Barrierefreiheit von Bildschirmlesern dort zu verbessern, wo dies erforderlich ist.

### Figuren und Figurenunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Figurenunterschrift verknüpfen:

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

Während die Unterstützung von Bildschirmlesern für die Verknüpfung von Figurenunterschriften mit ihren Figuren gemischt ist, wird die Verknüpfung, wenn keine vorhanden ist, durch Einfügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hergestellt. Trotzdem ist die Elementstruktur nützlich für CSS-Styling, außerdem bietet sie eine Möglichkeit, eine Beschreibung des Bildes neben ihm im Quelltext zu platzieren.

### Leere Alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, seine primäre Funktion jedoch die visuelle Dekoration ist. Sie werden im obigen Codebeispiel feststellen, dass das `alt`-Attribut des Bildes leer ist — dies soll Bildschirmleser das Bild erkennen lassen, aber nicht versuchen, das Bild zu beschreiben (stattdessen würden sie nur "Bild" oder ähnliches sagen).

Der Grund für die Verwendung eines leeren `alt` anstelle des Nicht-Einschlusses ist, dass viele Bildschirmleser die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die zugehörige Überschrift. In solchen Fällen, und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie in Ihren `img`-Elementen ein leeres `alt` einfügen. Eine andere Alternative ist die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch Bildschirmleser daran hindert, den Alternativtext vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können zur Barrierefreiheit beitragen oder sie beeinträchtigen. Standardmäßig sind Links in ihrem Erscheinungsbild zugänglich. Sie können die Zugänglichkeit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch die Zugänglichkeit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript sie dazu bringt, sich auf unerwartete Weise zu verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderen Texten sowohl in Farbe als auch in [Text-Dekoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokus-Ring](/de/docs/Web/CSS/:focus), wenn sie über die Tastatur fokussiert werden.

Farbe sollte nicht als einzige Methode verwendet werden, um Links vom nicht verlinkten Inhalt zu unterscheiden. Die Link-Text-Farbe muss, wie aller Text, deutlich unterschiedlich zur Hintergrundfarbe sein ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell deutlich vom nicht verlinkten Text abweichen, mit einer Mindestkontrastanforderung von 3:1 zwischen Link-Text und umgebendem Text sowie zwischen Standard-, Besuchs- und Fokus-/Aktiv-Zuständen und einem Kontrast von 4,5:1 zwischen all diesen Statusfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu schaffen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript noch herunterlädt, fehlerhaft ist oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z. B. Bildschirmleser). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Ankerelement nur für die Navigation mit einer richtigen URL verwenden.

### Externe Links und das Verlinken zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die Deklaration `target="_blank"` geöffnet werden, und Links, deren `href`-Wert auf eine Dateiquelle zeigt, sollten einen Hinweis auf das Verhalten enthalten, das beim Aktivieren des Links auftreten wird.

Personen mit Sehbehinderungen, die mit Hilfe von Bildschirmlesertechnologie oder kognitiven Beeinträchtigungen navigieren, könnten verwirrt werden, wenn ein neuer Tab, ein Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware könnten das Verhalten nicht einmal ankündigen.

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten solcher Links anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis von WCAG, Guideline 3.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link heraus nur bei Bedarf | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern einen Hinweis geben, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am öffnenden {{HTMLElement("body")}}-Element platziert wird und auf den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu überspringen, die auf mehreren Seiten einer Website wiederholt werden, wie z. B. die Kopfzeile und die primäre Navigation einer Website.

Skip-Links sind besonders nützlich für Personen, die mit Unterstützungstechnologien wie Schaltersteuerung, Sprachbefehlen oder Mundstäben/Kopfstäben navigieren, wobei das Navigieren durch wiederholte Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Navigation überspringen" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip-Nav-Links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis von WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Anker – die in enger visueller Nähe zueinander platziert sind, sollten Abstände haben, um sie zu trennen. Dieser Abstand kommt Menschen zugute, die an feinmotorischen Kontrollproblemen leiden und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Der Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sehen Sie sich [Testen Sie Ihre Fähigkeiten: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML) an, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun gut darauf vorbereitet sein, für die meisten Gelegenheiten zugängliches HTML zu schreiben. Unser WAI-ARIA-Grundlagenartikel wird helfen, Lücken in diesem Wissen zu schließen, aber dieser Artikel hat sich um die Grundlagen gekümmert. Als Nächstes werden wir CSS und JavaScript untersuchen und wie Barrierefreiheit durch deren gute oder schlechte Verwendung beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
