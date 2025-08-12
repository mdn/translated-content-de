---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann allein dadurch barrierefrei gestaltet werden, dass sichergestellt wird, dass die richtigen HTML-Elemente stets für den vorgesehenen Zweck verwendet werden. Dieser Artikel untersucht im Detail, wie HTML genutzt werden kann, um maximale Barrierefreiheit sicherzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis der Barrierefreiheitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, bekannt als "Das richtige Element für die richtige Aufgabe", da der Browser so viele integrierte Barrierefreiheitshooks bereitstellt.</li>
          <li>Beste Praktiken für Barrierefreiheit wie Alternativtexte, gute Linkbeschreibungen, Formularbeschriftungen und Tabellenzeilen- und Spaltenüberschriften sowie -reichweiten.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastatur-Barrierefreiheit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich weitere Beispiele ansehen usw. — werden Sie immer wieder ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, Plain Old Semantic HTML, genannt). Das bedeutet, die korrekten HTML-Elemente so weit wie möglich für ihren vorgesehenen Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript beinahe jedes HTML-Element so verhalten lassen, wie Sie es möchten. Zum Beispiel könnte ein Steuerungsknopf, um ein Video auf Ihrer Website abzuspielen, folgendermaßen markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später im Detail sehen werden, macht es Sinn, das richtige Element für den Job zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`-Elemente haben nicht nur eine passende Standardstilierung (die Sie wahrscheinlich überschreiben möchten), sie verfügen auch über eingebaute Tastatur-Barrierefreiheit — Nutzer können zwischen den Schaltflächen mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Leertaste</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantische (schlechte) Markup, wenn Sie es konsequent von Beginn Ihres Projekts an tun. Noch besser ist, dass semantisches Markup neben der Barrierefreiheit auch andere Vorteile bietet:

1. **Einfacher in der Entwicklung** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, und es ist möglicherweise einfacher zu verstehen.
2. **Besser für Mobilgeräte** — semantisches HTML ist in der Dateigröße wahrscheinlich leichter als nicht-semantischer Spaghetti-Code und einfacher, responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen messen Schlagwörtern in Überschriften, Links usw. mehr Bedeutung bei als Schlagwörtern in nicht-semantischen `<div>`s usw., sodass Ihre Dokumente von Kunden besser auffindbar sein werden.

Lassen Sie uns einen genaueren Blick auf barrierefreies HTML werfen.

## Gute Semantik

Wir haben bereits über die Bedeutung ordnungsgemäßer Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptorte ist, an denen die Barrierefreiheit schlecht funktioniert, wenn sie nicht richtig gehandhabt wird.

Draußen im Web ist die Wahrheit, dass Menschen sehr seltsame Dinge mit HTML-Markup machen. Oft liegt die Fehlverwendung von HTML an alten Praktiken, die noch nicht verschwunden sind, aber manchmal tritt sie auf, weil die Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechtes Code durch gutes semantisches Markup ersetzen, wo immer dies möglich ist, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML aus [Server-seitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [Client-seitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von Server-seitigem Code oder Web-/Frameworkkomponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Drittanbieterinhalte auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie machen können, hilft der Sache der Barrierefreiheit.

### Verwenden Sie gut strukturierten Textinhalt

Eines der besten Barrierefreiheitshilfsmittel, das ein Bildschirmleser-Nutzer haben kann, ist eine hervorragende Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte in etwa folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, um sie mit einem Bildschirmleser auszuprobieren (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich durch diese zu navigieren, werden Sie feststellen, dass dies ziemlich einfach ist:

1. Der Bildschirmleser liest jede Überschrift vor, während Sie sich durch den Inhalt bewegen und benachrichtigt Sie, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element und lässt Sie in Ihrem eigenen angenehmen Tempo weitermachen.
3. Sie können in vielen Bildschirmlesern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Bildschirmlesern auch eine Liste aller Überschriften aufrufen, um sie als praktische Inhaltsverzeichnis zu verwenden, um bestimmte Inhalte zu finden.

Manchmal schreiben Menschen Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente rein zur Stilierung hinzufügen, so etwas wie das folgende:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung haben — der Bildschirmleser hat nichts, um es als Wegweiser zu verwenden, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die ganze Seite wird als ein einzelner riesiger Block gesehen und einfach auf einmal vorgelesen.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann auch die Barrierefreiheit beeinflussen. Generell sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slang-Ausdrücke enthält. Das hilft nicht nur Menschen mit kognitiven oder anderen Beeinträchtigungen, es hilft auch Lesern, deren Muttersprache nicht die des Textes ist, jüngeren Menschen ... praktisch allen! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die von Bildschirmlesern nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Striche, wenn Sie sie vermeiden können. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — anstatt Jan zu schreiben, schreiben Sie Januar.
- Akronyme ausschreiben, zumindest ein- oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag verwenden, um sie zu beschreiben.

### Strukturieren Sie Abschnitte der Seite logisch

Sie sollten geeignete [Abschnittselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Bildschirmleser (und andere Werkzeuge), um den Nutzern zusätzliche Hinweise auf den Inhalt zu geben, den sie navigieren.

Zum Beispiel könnte eine moderne Inhaltsstruktur in etwa folgendermaßen aussehen:

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

Zusätzlich zu einer guten Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später immer mit CSS an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig machen, damit das, was den Nutzern von Bildschirmlesern vorgelesen wird, Sinn ergibt.

### Verwenden Sie, wo möglich, semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Bedenken zur Barrierefreiheit ansprechen, die bei der Erstellung solcher Steuerelemente zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit betrachten.

Ein Schlüsselaspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser es standardmäßig ermöglichen, diese mit der Tastatur zu manipulieren. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulator-Taste zu drücken; nach ein paar Drücken sollten Sie sehen, dass der Tab-Fokus beginnt, durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (es unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit den Texten "Click me!", "Click me too!" und "And me!" in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, der den aktuellen Tab-Fokus anzeigt.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklertools anzeigt. Weitere Informationen siehe: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um den Schaltflächen eine Nachricht auszulösen), oder beginnen zu tippen, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und zwischen ihnen mit den Pfeiltasten nach oben und unten wechseln.

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

Dies bedeutet die korrekte Verwendung von Links, Schaltflächen, Formularelementen und Beschriftungen (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dies ist jedoch ein weiteres Beispiel, bei dem Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sieht man manchmal Schaltflächen, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung solcher Codes wird nicht empfohlen — Sie verlieren sofort die native Tastatur-Barrierefreiheit, die Sie hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keinen der standardmäßigen CSS-Stile, die Schaltflächen erhalten. In den seltenen bis nicht vorhandenen Fällen, in denen Sie ein Nicht-Button-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standardbutton-Verhaltensweisen, einschließlich Tastatur- und Maustaster-Unterstützung.

#### Tastatur-Barrierefreiheit wieder einbauen

Solche Vorteile wieder einzubauen, erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tab) durch das Hinzufügen des Attributs `tabindex="0"` zu jedem. Wir fügen auch `role="button"` hinzu, damit Bildschirmleser-Nutzer wissen, dass sie das Element fokussieren und interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut in erster Linie dafür gedacht, dass tabbare Elemente eine benutzerdefinierte Tab-Reihenfolge erhalten (in einer positiven numerischen Reihenfolge angegeben), anstatt einfach in ihrer Standardquellreihenfolge getabt zu werden. Dies ist fast immer eine schlechte Idee, da es große Verwirrung verursachen kann. Verwenden Sie es nur, wenn Sie es wirklich benötigen, z. B. wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge zeigt als der Quellcode und Sie die Dinge logischer machen möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabbar sind, tabbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht, dass nicht tabbare Elemente programmgesteuert fokussiert werden können, z. B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es erlaubt, zu den Schaltflächen zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Um dies zu tun, mussten wir das folgende JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste gedrückt wurde, über die `key`-Eigenschaft des Ereignisobjekts; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die in den `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird sicher noch andere Probleme damit geben. **Es ist besser, von Anfang an das richtige Element für die jeweilige Aufgabe zu verwenden.**

#### Verwenden Sie aussagekräftige Textbeschriftungen

Textbeschriftungen für UI-Steuerelemente sind sehr nützlich für alle Benutzer, aber es ist besonders wichtig, sie für Benutzer mit Behinderungen richtig hinzubekommen.

Stellen Sie sicher, dass Ihre Button- und Linktextbeschriftungen verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Click here" für Ihre Beschriftungen, da Bildschirmleser-Nutzer manchmal eine Liste von Buttons und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formular-Eingabe-Beschriftungen, die von der VoiceOver-Software auf dem Mac gelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie "happy menu button" für verschiedene Formularelemente wie Schaltflächen, Textfelder und Links](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl aus dem Kontext heraus Sinn ergeben, allein gelesen werden, als auch im Kontext des Absatzes, in dem sie enthalten sind. Zum Beispiel zeigt das folgende Beispiel gute Linktexte:

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
> Sie können viel mehr über die Implementierung von Links und bewährte Praktiken in unserem Artikel [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formularfeld eingeben müssen. Das folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für Benutzer mit Behinderungen nicht sehr nützlich. Es gibt nichts in dem obigen Beispiel, das die Beschriftung eindeutig mit dem Formularfeld in Verbindung bringt und es klar macht, wie man es ausfüllt, wenn man es nicht sehen kann. Wenn Sie diese Beschreibung mit einigen Bildschirmlesern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das folgende ist ein wesentlich besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung klar mit dem Eingabefeld verknüpft; die Beschreibung wird eher wie "Füllen Sie Ihren Namen aus: Text bearbeiten" sein.

![Eine gute Formularbeschriftung, die "Füllen Sie Ihren Namen aus" liest, wird einem Textinput-Feld gegeben.](voiceover-good-form-label.png)

Zusätzlich erlaubt das Verknüpfen einer Beschriftung mit einem Eingabefeld in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies vergrößert die Trefffläche des Eingabefelds und macht es leichter auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

In dem folgenden Video finden Sie eine schöne Erklärung der Bedeutung von ordnungsgemäßen Textbeschriftungen und wie Sie Probleme mit Textbeschriftungen mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Nutzer, Zeilen oder Spalten als Datenpakete zu gruppieren. Dazu müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Kopfzeilen für Zeilen, Spalten usw. sind. Dies kann visuell nur für die obige Tabelle getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich jetzt unser [Punk-Bands-Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — hier sehen Sie einige Barrierefreiheitshilfen am Werk:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen komplette Datenpakete, die von Bildschirmlesern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben — sie fungieren als Alternativtext für eine Tabelle und geben einem Bildschirmleser-Nutzer eine nützliche kurze Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Nutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie benötigen nicht wirklich beide.

> [!NOTE]
> Sehen Sie sich unseren Artikel zur [HTML-Tabellenbarrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details über barrierefreie Datentabellen an.

## Textalternativen

Während Textinhalte von Natur aus barrierefrei sind, gilt dies nicht unbedingt für Multimedia-Inhalte — Bild- und Video-Inhalte können von sehbehinderten Menschen nicht gesehen werden, und Audio-Inhalte können von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audioinhalte ausführlich im Artikel [Barrierefreie Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel betrachten wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element.

Wir haben ein einfaches Beispiel erstellt, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

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

Das erste Bild bietet, wenn es von einem Bildschirmleser betrachtet wird, dem Nutzer nicht wirklich viel Hilfe — zum Beispiel liest VoiceOver "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um zumindest etwas Hilfe zu bieten. In diesem Beispiel weiß der Nutzer zumindest, dass es sich um einen Dinosaurier handelt, aber oft werden Dateien mit maschinell generierten Dateinamen (z. B. von einer Digitalkamera) hochgeladen und diese Dateinamen bieten wahrscheinlich keinen Kontext für den Inhalt des Bildes.

> [!NOTE]
> Deshalb sollten Sie nie Textinhalte in einem Bild einschließen – Bildschirmleser können es nicht lesen. Es gibt auch andere Nachteile – Sie können es nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild stößt, liest er das vollständige alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies unterstreicht die Bedeutung von nicht nur sinnvollen Dateinamen für den Fall, dass sogenannter **Alternativtext** nicht verfügbar ist, sondern auch dafür, dass Alternativtext in `alt`-Attributen so oft wie möglich bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen visueller Aussage bieten. Der Alternativtext sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen enthalten, die nicht im umgebenden Text dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert je nach Kontext. Zum Beispiel ist `alt="Fluffy"` angemessen, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist. Wenn das Foto Teil von Fluffys Adoptionsseite für den Tierschutzverein ist, sollte nicht im umgebenden Text enthaltene Information, die für einen potenziellen Hundebesitzer relevant ist, im Bild enthalten sein gespeichert werden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar und einem Tennisball im Mund."` ist angemessen. Da im umgebenden Text wahrscheinlich Fluffys Größe und Rasse angegeben sind, wird dies nicht im `alt` angegeben. Da in der Biografie des Hundes jedoch wahrscheinlich keine Haarlänge, Farben oder Spielzeugvorlieben enthalten sind, was der potenzielle Besitzer wissen muss, ist dies enthalten. Ist das Bild im Freien oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht enthalten. Alle vom Bild übermittelte Informationen, die ein sehender Benutzer zugreifen kann und die für den Kontext relevant sind, müssen übermittelt werden; nichts weiter. Halten Sie es kurz, präzise und nützlich.

Persönliche Kenntnisse oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Personen, die das Bild noch nie gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht aus dem Bild erkennen kann, dann nehmen Sie es nicht auf.

Eine Überlegung ist, ob Ihre Bilder Bedeutung innerhalb Ihres Inhalts haben oder ob sie rein zur visuellen Dekoration sind und daher keinen Kontext haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere Alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzuschließen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viel mehr Informationen zur Implementierung von Bildern und bewährten Praktiken.
> Sie können auch [Ein Entscheidungsbaum für Alternativtexte](https://www.w3.org/WAI/tutorials/images/decision-tree/) ansehen, um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese im umgebenden Text oder in einem `title`-Attribut, wie oben gezeigt, platzieren. In diesem Fall lesen die meisten Bildschirmleser den Alternativtext, das title-Attribut und den Dateinamen vor. Darüber hinaus zeigen Browser Titeltoken bei Mouseover als Tooltips an.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier", der bei Mouseover als Tooltip angezeigt wird.](title-attribute.png)

Schauen wir uns schnell noch einmal die vierte Methode an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was Bildschirmlesern ermöglicht, diesen Absatz als den Alternativtext/die Beschriftung für dieses Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik zu ihrem Markup hinzuzufügen, um die Bildschirmleser-Barrierefreiheit bei Bedarf zu verbessern.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung (es kann alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Während die Unterstützung durch Bildschirmleser bei der Verknüpfung von Bildunterschriften mit ihren Abbildungen gemischt ist, schafft die Einbindung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verknüpfung, wenn keine vorhanden ist. Das Elementstruktur ist jedoch nützlich für CSS-Stilgebung, außerdem bietet es eine Möglichkeit, eine Beschreibung des Bildes neben der Abbildung im Quelltext zu platzieren.

### Leere Alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, sein Hauptzweck jedoch rein visuelle Dekoration ist. Ihnen fällt im obigen Codebeispiel auf, dass das `alt`-Attribut des Bildes leer ist — dies soll Bildschirmleser erkennen lassen, dass sich ein Bild dort befindet, damit sie aber nicht versuchen, das Bild zu beschreiben (stattdessen sagen sie nur "Bild", oder Ähnliches).

Der Grund, ein leeres `alt` zu verwenden, anstatt es gar nicht einzuschließen, ist, dass viele Bildschirmleser die gesamte Bild-URL ankünden, wenn kein `alt` angegeben ist. Im obigen Beispiel dient das Bild als visuelle Dekoration zu der damit verbundenen Überschrift. In Fällen wie diesem und in Fällen, in denen ein Bild nur eine Dekoration ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente einfügen. Eine andere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), wie dies ebenfalls das Vorlesen alternativen Texts durch Bildschirmleser stoppt.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können die Barrierefreiheit verbessern oder beeinträchtigen. Standardmäßig sind Links im Erscheinungsbild barrierefrei. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch die Barrierefreiheit beeinträchtigen, wenn ihr barrierefreies Erscheinungsbild entfernt wird oder wenn JavaScript dazu führt, dass sie sich unerwartet verhalten.

### Linkstilierung

Standardmäßig unterscheiden sich Links visuell von anderem Text in Farbe und [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [focus-ring](/de/docs/Web/CSS/:focus), wenn sie über die Tastatur fokussiert werden.

Farbe sollte nicht als alleiniges Mittel verwendet werden, um Links von nicht verlinktem Inhalt zu unterscheiden. Die Linktextfarbe, wie alle Texte, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant von nicht verlinktem Text abweichen, mit einem Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen den Standard-, Besucht-, und Fokus-/Aktivzuständen und einem 4,5:1 Kontrast zwischen allen diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick` Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten, wenn Links kopiert oder gezogen werden, Links in einem neuen Tab oder Fenster geöffnet, Lesezeichen gesetzt werden und wenn JavaScript noch heruntergeladen wird, Fehler auftritt oder deaktiviert ist. Dies vermittelt auch falsche Semantik für unterstützende Technologien (z. B. Bildschirmleser). In diesen Fällen wird empfohlen, stattdessen eine {{HTMLElement("button")}} zu verwenden. Grundsätzlich sollten Sie ein Ankertag nur für die Navigation mit einer korrekten URL verwenden.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresource verweist, sollten einen Indikator darüber enthalten, welches Verhalten zu erwarten ist, wenn der Link aktiviert wird.

Nutzer mit Seheinschränkungen, die mit Bildschirmlesetechnologie navigieren, oder die kognitive Bedenken haben können verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware könnten nicht einmal das Verhalten ankundigen.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link zu einer Nicht-HTML-Resource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol anstelle von Text verwendet wird, um auf das Verhalten dieser Art von Links hinzuweisen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis von WCAG, Erklärungen zu Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur, wenn nötig | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am öffnenden {{HTMLElement("body")}}-Element platziert wird und zum Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, wiederholten Inhalt auf mehreren Seiten einer Website zu überspringen, wie etwa die Kopfzeile und die primäre Navigation der Website.

Sprunglinks sind besonders nützlich für Menschen, die mit der Hilfe von assistiven Technologien wie Schaltsteuerung, Sprachkommandos oder Mundstäbchen/Kopfstiften navigieren, wobei der Vorgang des Durchsuchens von wiederholten Links eine mühevolle Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip Navigation-Links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis von WCAG, Erklärungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis von Erfolgskriterium 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Anker —, die in enger visueller Nähe zueinander platziert sind, sollten durch Einfügen von Abständen getrennt werden. Dieser Abstand ist nützlich für Menschen, die Probleme mit der Feinmotorik haben, und kann es vermeiden, dass sie versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Schaltflächen-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten jetzt gut auf das Schreiben von barrierefreiem HTML für die meisten Anlässe vorbereitet sein. Im nächsten Artikel werden wir Ihnen einige Tests geben, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
