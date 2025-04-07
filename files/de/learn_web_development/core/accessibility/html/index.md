---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein großer Teil der Webinhalte kann zugänglich gemacht werden, indem man einfach sicherstellt, dass die richtigen Hypertext Markup Language-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit sicherzustellen.

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
          <li>Semantisches HTML verwenden, auch bekannt als "Das richtige Element für die richtige Aufgabe", da der Browser so viele eingebaute Hooks für die Barrierefreiheit bietet.</li>
          <li>Barrierefreie Best Practices wie Alternativtexte, gute Link-Best, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften und -abgrenzungen.</li>
          <li>Einfache, klare Sprache verwenden, soweit möglich auf Slang und Abkürzungen verzichten und Definitionen bieten, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen, usw. — werden Sie ein gemeinsames Thema immer wieder sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal als POSH bezeichnet, oder Plain Old Semantic HTML). Das bedeutet, die korrekten HTML-Elemente so oft wie möglich für ihren vorgesehenen Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um fast jedes HTML-Element so verhalten zu lassen, wie Sie es möchten. Zum Beispiel könnte eine Steuerungstaste, um ein Video auf Ihrer Website abzuspielen, so formatiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur einige passende Voreinstellungen (die Sie wahrscheinlich überschreiben möchten), sie bieten auch eingebaute Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen den Tasten navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML erfordert nicht mehr Zeit zum Schreiben als nicht-semantische (schlechte) Markup, wenn Sie von Anfang an konsequent vorgehen. Noch besser ist, dass semantisches Markup über Barrierefreiheit hinaus weitere Vorteile bietet:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, und es ist wohl einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist tendenziell leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher responsive zu machen.
3. **Gut für SEO** — Suchmaschinen geben Keywords innerhalb von Überschriften, Links usw. mehr Bedeutung als Keywords, die in nicht-semantischen `<div>`s usw. enthalten sind, so dass Ihre Dokumente für Kunden auffindbarer werden.

Lassen Sie uns nun im Detail auf barrierefreies HTML eingehen.

## Gute Semantik

Wir haben bereits über die Bedeutung korrekter Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen Barrierefreiheit ernsthaft beeinträchtigt wird, wenn sie nicht ordnungsgemäß behandelt wird.

Im Web machen die Menschen seltsame Dinge mit HTML-Markup. Oft ist der Missbrauch von HTML auf veraltete Praktiken zurückzuführen, die noch nicht verschwunden sind, aber manchmal passiert es auch, weil Autoren nichts Besseres wissen. In jedem Fall sollten Sie schlechtes Code durch gutes semantisches Markup ersetzen, wo immer möglich, sowohl in statischen HTML-Seiten als auch dynamisch generiertem HTML aus [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, die außerhalb Ihrer Kontrolle liegen, oder Sie könnten Drittinhalte auf Ihrer Seite haben (wie Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird dem Zweck der Barrierefreiheit helfen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Hilfen für Nutzer von Screenreader ist eine ausgezeichnete Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte folgendermaßen aussehen:

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

Wir haben eine längere Textversion für Sie vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie sich durch diese Version navigieren, werden Sie feststellen, dass sie ziemlich einfach zu bedienen ist:

1. Der Screenreader liest jede Überschrift aus, während Sie den Inhalt durchgehen, und informiert Sie darüber, was eine Überschrift, was ein Absatz usw. ist.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo vorgehen können.
3. In vielen Screenreadern können Sie zur nächsten/vorherigen Überschrift springen.
4. Viele Screenreader bieten eine Liste aller Überschriften an, die Sie wie ein Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und rein zu Stilzwecken HTML-Elemente hinzufügen, wie im folgenden Beispiel:

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

Wenn Sie mit einem Screenreader unsere längere Version ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat keine strukturellen Hinweise, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können und die ganze Seite als ein einziger großer Block wahrgenommen wird, der in einem Zug durchgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu gestalten oder mit JavaScript zu manipulieren, zum Beispiel, weil es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Generell sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slangwörter verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es hilft auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen... im Grunde jedem! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Vermeiden Sie, wenn möglich, Bindestriche zu verwenden. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben — statt Jan zu schreiben, schreiben Sie Januar.
- Abkürzungen erläutern, mindestens ein- oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr) Tag verwenden, um sie zu beschreiben.

### Gliedern Sie Seitensektionen logisch

Sie sollten geeignete [Abschnittselemente](/de/docs/Web/HTML/Element#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, zum Beispiel für die Navigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Werkzeuge), um den Benutzern zusätzliche Hinweise über den navigierten Inhalt zu geben.

Ein modernes Inhaltsstrukturbeispiel könnte etwa so aussehen:

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

Sie finden ein [komplettes Beispiel hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Neben guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge auch logischen Sinn ergeben — Sie können ihn später immer dort platzieren, wo Sie möchten, indem Sie CSS verwenden, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, sodass das, was Screenreader-Nutzer vorgelesen bekommen, Sinn ergibt.

### Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Buttons, Links und Formularelemente. In diesem Abschnitt beschäftigen wir uns mit den grundlegenden Themen der Barrierefreiheit, die bei der Erstellung solcher Steuerelemente zu beachten sind. Spätere Artikel zu WAI-ARIA und Multimedia werden sich mit anderen Aspekten der UI-Barrierefreiheit befassen.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser diese standardmäßig über die Tastatur bedienbar machen. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Drücken sollten Sie sehen, wie der Tab-Fokus durch die verschiedenen fokussierbaren Elemente wechselt. Die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (es unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!" und "And me!" darin. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwickler-Tools eine Überlagerung aktivieren, die die Tabulatorreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingebaut, damit die Schaltflächen eine Nachricht anzeigen), oder anfangen zu tippen, um Text in einem Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen mit den Pfeiltasten nach oben und unten anzeigen und zwischen ihnen wechseln.

Im Grunde erhalten Sie dieses Verhalten kostenlos, indem Sie einfach die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, Links, Buttons, Formularelemente und Beschriftungen angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Allerdings kommt es vor, dass Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sieht man manchmal Tasten, die mit {{htmlelement("div")}}s formatiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber solche Codeverwendung wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keine der Standard-CSS-Styling-Optionen, die Tasten bekommen. In seltenen bis nicht existierenden Fällen, in denen Sie ein Nicht-Tasten-Element für eine Taste verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Tastenverhalten einschließlich Tastatur- und Maustastensupport.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile zurückzubringen erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Tasten die Möglichkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedes mit dem Attribut `tabindex="0"` versehen. Wir schließen auch `role="button"` ein, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hauptsächlich dazu gedacht, tabbbaren Elementen eine benutzerdefinierte Tab-Reihenfolge (in positiver numerischer Reihenfolge) zu geben, anstatt sie in ihrer Standard-Quellreihenfolge zu tabben. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel, wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge als im Quellcode zeigt und Sie die Dinge logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben erwähnt, erlaubt dieser Wert, dass Elemente, die normalerweise nicht tabbbar sind, tabbbar werden. Das ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht normalerweise nicht tabbenden Elementen, programmatisch fokussiert zu werden, z. B. über JavaScript oder als Ziel von Links.

Obiger Zusatz ermöglicht es uns zwar, zu den Tasten zu tabben, erlaubt es uns jedoch nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende JavaScript-Stück hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir einen Listener zum `document`-Objekt hinzu, um zu erkennen, wenn eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste gedrückt wurde, über die Eigenschaft [`key`](/de/docs/Web/API/KeyboardEvent/key) des Event-Objekts; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, rufen wir die Funktion auf, die im `onclick`-Handler der Taste gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web(API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge extra Arbeit, um die Funktionalität wiederherzustellen. Und es wird sicherlich andere Probleme damit geben. **Besser, gleich das richtige Element für die richtige Aufgabe zu verwenden.**

#### Verwenden Sie bedeutungsvolle Textbeschriftungen

UI-Steuerelement-Textbeschriftungen sind für alle Benutzer sehr nützlich, aber sie richtig hinzubekommen, ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten darauf achten, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und deutlich sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formular-Eingabebeschriftungen, die von der VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button`, die verschiedenen Formularsteuerelementen wie Schaltfläche, Textfeld und Link zugewiesen sind](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl aus dem Kontext heraus als auch als Teil des umgebenden Textes Sinn ergeben. Zum Beispiel zeigt das folgende Beispiel, wie guter Linktext aussieht:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

doch dies ist schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie finden viel mehr über die Implementierung und Best Practices von Links in unserem [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)-Artikel. Sie können auch gute und schlechte Beispiele bei [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende Beispiel scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Das ist jedoch für behinderte Benutzer nicht sehr nützlich. Es gibt nichts im obigen Beispiel, das die Beschriftung eindeutig mit der Formulareingabe verbindet und klar macht, wie sie auszufüllen ist, wenn man sie nicht sehen kann. Wenn Sie dieses Beispiel mit einigen Screenreadern verwenden, erhalten Sie möglicherweise nur eine Beschreibung wie "Edit Text".

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird die Beschriftung deutlich mit der Eingabe verbunden; die Beschreibung wird sein wie "Fill in your name: Edit Text".

![Eine gute Formularbeschriftung, die "Fill in your name" liest, wird einem Text-Eingabeformularsteuerlement zugewiesen. ](voiceover-good-form-label.png)

Als zusätzlicher Vorteil bedeutet das Verknüpfen einer Beschriftung mit einer Formulareingabe in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies vergrößert die Trefferfläche des Eingabefelds und erleichtert die Auswahl.

> [!NOTE]
> Einige gute und schlechte Formulbbeispiele finden Sie in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html).

In folgendem Video finden Sie eine schöne Erklärung über die Bedeutung von richtigen Textbeschriftungen und wie Sie Probleme mit Textbeschriftungen mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können:

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Datengruppierungen zu verbinden. Dazu müssen die Überschriftenzeilen bekannt sein und ob sie Zeilen oder Spalten überschreiben usw. Dies kann für die obige Tabelle nur visuell erfolgen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser [punk bands table example](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — hier können Sie einige Barrierefreiheitsunterstützungen sehen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, mithilfe des Attributs `scope`. Dies gibt Ihnen vollständige Datengruppen, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben — sie geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch sehenden Benutzern zugänglich macht, die es auch nützlich finden könnten. Sie benötigen nicht unbedingt beides.

> [!NOTE]
> Siehe unseren [HTML table accessibility](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)-Artikel für mehr Details zu barrierefreien Datentabellen.

## Textalternativen

Während textueller Inhalt inhärent barrierefrei ist, kann dies nicht unbedingt für multimediale Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden und Audioinhalte nicht von hörgeschädigten Menschen. Wir behandeln Video- und Audioinhalte ausführlich im [Accessible multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber in diesem Artikel befassen wir uns mit der Barrierefreiheit des bescheidenen {{htmlelement("img")}}-Elements.

Wir haben ein einfaches Beispiel geschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes beinhaltet:

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

Das erste Bild bietet beim Betrachten durch einen Screenreader dem Benutzer nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, Bild" vor. Es liest dem Benutzer den Dateinamen vor, um einige Informationen zu geben. In diesem Fall weiß der Benutzer zumindest, dass es sich um einen Dinosaurier irgendeiner Art handelt, aber oft werden Dateien mit maschinengenerierten Dateinamen (z. B. von einer Digitalkamera) hochgeladen, die wahrscheinlich keinen Kontext zu den Bildinhalten bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalte in ein Bild einfügen — Screenreader können darauf nicht zugreifen. Es gibt auch andere Nachteile — man kann sie nicht auswählen oder kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, liest er das vollständige `alt`-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen".

Dies hebt die Bedeutung hervor, nicht nur bedeutungsvolle Dateinamen zu verwenden, falls so genannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text in `alt`-Attributen, wo immer möglich, bereitgestellt wird.

Beachten Sie, dass der Inhalt des `alt`-Attributs immer eine direkte Darstellung des Bildes und seiner visuellen Aussage bieten sollte. Das `alt` sollte kurz und prägnant sein und alle Informationen enthalten, die im Bild vermittelt werden, aber nicht im umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild variiert je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hundebesitzer relevant sind, aber nicht im umgebenden Text bereits stehen, enthalten sein. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, wird dies nicht im `alt` aufgenommen. Da die Biographie des Hundes wahrscheinlich keine Haarlänge, Farben oder Spielzeugvorlieben enthält, die für potenzielle Besitzer wichtig sind, wird dies aufgenommen. Ist das Bild im Freien, oder trägt Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht aufgenommen. Alle Informationen, die ein sehender Benutzer aus dem Bild entnehmen kann und die im Kontext relevant sind, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht eingefügt werden, da sie für Personen, die das Bild zuvor nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingst Spielzeug ist oder ein sehender Benutzer das nicht aus dem Bild erkennen kann, dann nicht aufnehmen.

Bedenken Sie, ob Ihre Bilder in Ihrem Inhalt eine Bedeutung haben oder ob sie rein zur visuellen Dekoration verwendet werden und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Responsive_images) für viele weitere Informationen über Bildimplementierung und Best Practices.
> Sie können auch [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) lesen, um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese im umgebenden Text, oder in einem `title`-Attribut unterbringen, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den alt-Text, das title-Attribut und den Dateinamen vor. Außerdem zeigen Browser Title-Text als Tooltip an, wenn mit der Maus darauf gezeigt wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The mozilla red dinosaur", der als Tooltip beim Mouseover angezeigt wird.](title-attribute.png)

Lassen Sie uns schnell noch einmal die vierte Methode betrachten:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabschnitt präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um sich auf diese `id` zu beziehen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Beschriftung für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern ermöglicht, ihrem Markup zusätzliche Semantik hinzuzufügen, um die Zugänglichkeit von Screenreadern zu verbessern, wenn nötig.

### Abbilder und Abbildungsüberschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Abbildungsüberschrift assoziieren:

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

Während es gemischte Unterstützung durch Screenreader gibt, Abbildungsüberschriften mit ihren Abbildungen zu assoziieren, schafft die Einbeziehung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Assoziation, wenn keine vorhanden ist. Davon abgesehen ist die Elementstruktur nützlich für das CSS-Styling und bietet eine Möglichkeit, eine Beschreibung des Bildes neben diesem in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann vorkommen, dass ein Bild im Design einer Seite enthalten ist, aber sein Hauptzweck visuelle Dekoration ist. Im obigen Codebeispiel werden Sie bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll Screenreader erkennen, das Bild nicht versuchen zu beschreiben (stattdessen würden sie nur "Bild" oder ähnliches sagen).

Der Grund, ein leeres `alt` anstelle keines zu verwenden, ist, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` angegeben ist. Im obigen Beispiel dient das Bild als visuelle Dekoration für die Überschrift, mit der es verbunden ist. In solchen Fällen und bei Bildern, die nur dekorativ sind und keinen Inhaltswert bieten, sollten Sie ein leeres `alt` in Ihre `img`-Elemente aufnehmen. Eine andere Möglichkeit besteht darin, das `aria` [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribut [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu verwenden, da dies auch Screenreader davon abhält, Alternativtext vorzulesen.

> [!NOTE]
> Wo möglich, sollten Sie CSS verwenden, um Bilder darzustellen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), abhängig davon, wie sie verwendet werden, können sie die Barrierefreiheit verbessern oder verschlechtern. Standardmäßig sind Links in der visuellen Darstellung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie dem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können die Barrierefreiheit auch beeinträchtigen, wenn ihre zugängliche Darstellung entfernt wird oder wenn JavaScript sie in unvorhersehbarer Weise verhalten lässt.

### Linkgestaltung

Standardmäßig heben sich Links visuell von anderem Text durch sowohl Farbe als auch [text-decoration](/de/docs/Web/CSS/text-decoration) ab, wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokus-Ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht das einzige Unterscheidungsmerkmal zwischen Links und nicht-verlinktem Inhalt sein. Die Linktextfarbe, genauso wie jede andere Textfarbe, muss sich erheblich von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollte sich der Linktext visuell signifikant von nicht-verlinktem Text unterscheiden, mit einem Mindestkontrast von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Standard-, besuchtem und Fokus/aktivem Zustand und einem 4,5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Tasten zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, Bookmarking und wenn JavaScript noch heruntergeladen wird, Fehler verursacht oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z. B. Screenreader). In solchen Fällen wird empfohlen, stattdessen eine {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker nur zum Navigieren mit einer richtigen URL verwenden.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster geöffnet werden, und Links, deren `href`-Wert auf eine Datei-Ressource verweist, sollten einen Indikator darüber enthalten, welches Verhalten beim Aktivieren des Links auftreten wird.

Personen mit Sehbehinderungen, die mit der Hilfe einer Screenreading-Technologie navigieren, oder die kognitive Probleme haben, könnten verwirrt sein, wenn das neue Tab, Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreading-Software könnten das Verhalten nicht einmal ankündigen.

#### Link, der ein neues Tab oder Fenster öffnet

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

Wenn ein Symbol anstelle von Text verwendet wird, um auf diese Art von Linkverhalten hinzuweisen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnung neuer Fenster und Tabs nur bei Bedarf | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer vorher warnen, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Eine Skip-Links, auch bekannt als Skipnav, ist ein `a`-Element, das so nah wie möglich an dem öffnenden {{HTMLElement("body")}}-Element platziert ist und auf den Beginn des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, Inhalte zu überspringen, die auf mehreren Seiten einer Website wiederholt werden, wie die Kopfzeile und Hauptnavigation der Website.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe von assistiven Technologien wie Schaltsteuerung, Sprachbefehl oder Mundstäben/Kopfwandschaltern navigieren, bei denen die Bewegung durch wiederholte Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Wenn große Mengen interaktiver Inhalte eingeschlossen werden — einschließlich Anker —, die in enger visueller Nähe zueinander platziert sind, sollten Abstände eingefügt werden, um sie zu trennen. Dies begünstigt Menschen, die unter feinmotorischen Problemen leiden und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Handtremors und das große-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie sind am Ende dieses Artikels angekommen, aber können Sie sich an die wichtigsten Informationen erinnern? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren.

## Zusammenfassung

Sie sollten jetzt gut darin sein, barrierefreies HTML für die meisten Gelegenheiten zu schreiben. Unser Artikel zu WAI-ARIA-Grundlagen wird helfen, Wissenslücken zu füllen, aber dieser Artikel hat die Grundlagen behandelt. Als Nächstes erkunden wir CSS und JavaScript und wie deren gute oder schlechte Verwendung die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
