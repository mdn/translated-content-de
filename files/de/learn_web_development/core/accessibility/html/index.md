---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen HTML-Elemente jederzeit zu ihrem vorgesehenen Zweck verwendet werden. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit sicherzustellen.

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
          <li>Verwendung von semantischem HTML, auch bekannt als "das richtige Element für den richtigen Zweck", weil der Browser so viele eingebaute Barrierefreihooks bereitstellt.</li>
          <li>Barrierefreie Best Practices wie Alt-Text, gute Linktexte, Formularbeschriftungen und Tabellenkopf- und Spaltenüberschriften mit entsprechender Markierung.</li>
          <li>Verwendung einfacher klarer Sprache, Vermeidung von Umgangssprache und Abkürzungen, wenn möglich, und Bereitstellung von Definitionen, wenn dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, sich mehr Beispiele ansehen usw. — werden Sie ein wiederkehrendes Thema bemerken: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH genannt, oder Plain Old Semantic HTML). Das bedeutet, die korrekten HTML-Elemente so weit wie möglich für ihren beabsichtigten Zweck zu nutzen.

Sie könnten sich fragen, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um fast jedes HTML-Element so zu verhalten, wie Sie es möchten. Ein Beispiel: Eine Steuertaste zum Abspielen eines Videos auf Ihrer Seite könnte so ausgezeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für den Job zu verwenden:

```html
<button>Play video</button>
```

Nicht nur haben HTML `<button>`s von vornherein passende Stile (die Sie wahrscheinlich überschreiben möchten), sie verfügen auch über eingebaute Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Tasten navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsequent machen. Noch besser, semantisches Markup hat neben der Barrierefreiheit noch weitere Vorteile:

1. **Einfachere Entwicklung** — wie bereits erwähnt, erhalten Sie einige Funktionen kostenlos, und es lässt sich leichter verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und leichter responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung als Schlüsselwörtern in nicht-semantischen `<div>`s usw., sodass Ihre Dokumente für Kunden auffindbarer sind.

Schauen wir uns HTML zur Barrierefreiheit genauer an.

## Gute Semantik

Wir haben bereits über die Bedeutung von richtiger Semantik gesprochen und warum wir das richtige HTML-Element für den jeweiligen Job verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen Barrierefreiheit schlecht gebrochen ist, wenn sie nicht richtig behandelt wird.

Im Web ist die Wahrheit, dass Menschen mit HTML-Markup manchmal sehr merkwürdige Dinge machen. Oft geschieht die falsche Nutzung von HTML wegen alter Praktiken, die noch nicht verschwunden sind, aber manchmal geschieht es auch, weil Autoren es nicht besser wissen. In jedem Fall sollten Sie schlechtem Code, wo immer möglich, gutes semantisches Markup gegenüberstellen, sowohl in statischen HTML-Seiten als auch in dynamisch generiertem HTML von [Server-seitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [Client-seitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu beseitigen — Ihre Seiten könnten von serverseitigem Code oder Web-/Framework-Komponenten abhängen, über die Sie keine Kontrolle haben, oder Sie könnten Inhalte von Drittanbietern auf Ihrer Seite haben (wie z.B. Werbebanner).

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird zur Barrierefreiheit beitragen.

### Verwenden Sie gut strukturierten Textinhalt

Eine der besten Barrierefreiheitshelfer für einen Screenreader-Benutzer ist eine exzellente Textstruktur mit Überschriften, Absätzen, Listen usw. Ein gutes semantisches Beispiel könnte etwa so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich dadurch zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten, und teilt Ihnen mit, was eine Überschrift, ein Absatz usw. ist.
2. Er stoppt nach jedem Element und lässt Ihnen somit die Möglichkeit, in Ihrem Tempo weiterzugehen.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Screenreadern eine Liste aller Überschriften aufrufen, sodass Sie diese als praktische Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente rein für das Styling hinzu, etwa so:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine gute Erfahrung machen — der Screenreader hat nichts, womit er arbeiten kann, um signifikante Merkmale zu erkennen, weshalb Sie kein nützliches Inhaltsverzeichnis erhalten können, und die ganze Seite wird als ein einziger großer Block gesehen und wird in einem Rutsch vorgelesen.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

### Verwenden Sie klare Sprache

Die Sprache, die Sie verwenden, kann die Barrierefreiheit beeinflussen. Generell sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slang-Begriffe verwendet. Dies ist nicht nur für Menschen mit kognitiven oder anderen Behinderungen vorteilhaft, sondern auch für Leser, deren Erstsprache nicht die Sprache ist, in der der Text geschrieben ist, jüngere Menschen… tatsächlich für alle! Zudem sollten Sie Sprache und Zeichen vermeiden, die nicht klar von einem Screenreader vorgelesen werden. Beispielsweise:

- Verwenden Sie keine Bindestriche, wenn Sie es vermeiden können. Statt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Erweitern Sie Abkürzungen - statt Jan zu schreiben, schreiben Sie Januar.
- Erweitern Sie Akronyme, mindestens ein- oder zweimal, und verwenden Sie das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Tag, um sie zu beschreiben.

### Strukturieren Sie Seitensektionen logisch

Sie sollten geeignete [Strukturierungselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning) verwenden, um Ihre Webseiten zu strukturieren, beispielsweise Navigation ({{htmlelement("nav")}}), Footer ({{htmlelement("footer")}}) und wiederholende Inhaltseinheiten ({{htmlelement("article")}}). Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Nutzern zusätzliche Hinweise über den Inhalt zu geben, den sie durchblättern.

Ein modernes Inhaltsstruktur könnte so aussehen:

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

Zusätzlich zu guter Semantik und ansprechendem Layout sollte Ihr Inhalt auch in der Quellreihenfolge logisch nachvollziehbar sein — Sie können jederzeit später mit CSS anpassen, wie es platziert wird, aber die Quellreihenfolge sollte von Anfang an richtig eingestellt sein, damit das, was Screenreader-Benutzer vorgelesen bekommen, sinnvoll ist.

### Verwenden Sie, wo möglich, semantische UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — die am häufigsten verwendeten Schaltflächen, Links und Formularsteuerelemente. In diesem Abschnitt werden wir die grundlegenden Gesichtspunkte der Barrierefreiheit betrachten, die bei der Erstellung solcher Elemente zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit behandeln.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur aus manipuliert werden können. Sie können dies anhand unseres [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)-Beispiels (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) ausprobieren. Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach einigen Drücken sollten Sie sehen, dass der Tab-Fokus anfängt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (der sich leicht zwischen verschiedenen Browsern unterscheidet), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!", und "And me!" in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwicklertools ein Overlay aktivieren, das die Tab-Reihenfolge der Seite zeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Zeige Tab-Reihenfolge von Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht zeigen zu lassen), oder beginnen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben andere Steuerungen; beispielsweise kann das {{htmlelement("select")}}-Element seine Optionen anzeigen lassen und mit den Pfeiltasten nach oben und unten zwischen ihnen wechseln.

Im Wesentlichen erhalten Sie dieses Verhalten kostenlos, indem Sie die entsprechenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Labels angemessen verwendet werden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dies ist jedoch ein weiterer Fall, bei dem Menschen manchmal merkwürdige Dinge mit HTML machen. Zum Beispiel sieht man manchmal Schaltflächen, die mit {{htmlelement("div")}}s ausgezeichnet sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung von solchem Code wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und außerdem erhalten Sie keinen der Standard-CSS-Stile, die Schaltflächen bekommen. In dem seltenen bis nicht existenten Fall, dass Sie ein Nicht-Schaltflächen-Element als Schaltfläche benötigen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren alle Standard-Schaltflächen-Verhaltensweisen, einschließlich Tastatur- und Maus-Schaltfläche-Unterstützung.

#### Tastaturzugänglichkeit wieder herstellen

Diese Vorteile mit zusätzlicher Arbeit wieder hinzuzufügen (ein Beispiel finden Sie in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich durch Tab), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hauptsächlich dafür gedacht, tabbbare Elemente in einer benutzerdefinierten Reihenfolge zu tabben (in aufsteigender Zahlenreihenfolge), anstatt sie in ihrer Standard-Quellreihenfolge durchzutaben. Das ist fast immer eine schlechte Idee, da es große Verwirrung verursachen kann. Verwenden Sie es nur, wenn es wirklich notwendig ist, z.B. wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge als der Quellcode anzeigt und Sie möchten, dass die Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert, dass nicht normalerweise tabbare Elemente zu tabbbaren werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt, dass nicht normalerweise tabbbare Elemente programmatisch fokussiert werden, z.B. über JavaScript, oder als Ziel von Links.

Obiger Zusatz erlaubt es uns, die Schaltflächen zu tabben, ermöglicht es aber nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir den folgenden JavaScript-Code hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste gedrückt wurde, indem wir die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts verwenden; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion im `onclick`-Handler der Schaltfläche über `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist viel zusätzliche Arbeit, um die Funktionalität wiederherzustellen. Und es gibt sicherlich noch andere Probleme damit. **Besser ist es, von Anfang an das richtige Element für den richtigen Job zu verwenden.**

#### Verwenden Sie aussagekräftige Textlabels

Texte von UI-Steuerelementen sind für alle Nutzer von Nutzen, aber sie richtig hinzubekommen ist besonders wichtig für Nutzer mit Behinderungen.

Sie sollten sicherstellen, dass die Texte Ihrer Schaltflächen und Links verständlich und unverwechselbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Labels, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen abrufen. Der folgende Screenshot zeigt unsere Steuerelemente aufgelistet von VoiceOver auf dem Mac.

![Liste von Texteingabelabels, die von der Software VoiceOver auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Labels wie "happy menu button", die verschiedenen Formularelementen wie Schaltflächen, Eingabefeldern und Links zugeordnet sind](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Labels auch aus dem Kontext heraus gelesen werden können, sowie im Kontext des Absatzes, in dem sie erscheinen. Zum Beispiel, folgendes zeigt ein Beispiel für guten Linktext:

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
> Sie können viel mehr über die Implementierung und Best Practices von Links in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, da sie Ihnen einen Hinweis darauf geben, welche Angaben in jedes Formulareingabefeld eingegeben werden müssen. Das folgende Beispiel scheint vernünftig genug:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Aber dies ist nicht so hilfreich für behinderte Nutzer. Es gibt nichts im obigen Beispiel, das das Label unmissverständlich mit dem Formulareingabefeld assoziiert und klarmacht, wie es ausgefüllt wird, wenn Sie es nicht sehen können. Wenn Sie dies mit einigen Screenreadern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung in der Art von "edit text".

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit Code wie diesem wird das Label deutlich mit der Eingabe assoziiert; die Beschreibung wird eher wie "Fill in your name: edit text" sein.

![Ein gutes Formularbeschriftung mit der Aufschrift 'Fill in your name' wird einem texteingabefeld zugewiesen. ](voiceover-good-form-label.png)

Ein zusätzlicher Bonus ist, dass in den meisten Browsern die Zuordnung eines Labels zu einem Formulareingabefeld bedeutet, dass Sie auf das Label klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies vergrößert den Trefferbereich der Eingabe, was die Auswahl erleichtert.

> [!NOTE]
> Sie können einige gute und schlechte Formen in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Eine schöne Erklärung zur Bedeutung von richtigen Textlabels und wie man Textlabel-Probleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, finden Sie im folgenden Video:

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
    <td>Xavier</td>
    <td>23</td>
    <td>he/him</td>
  </tr>
  <tr>
    <td>Tina</td>
    <td>8</td>
    <td>she/her</td>
  </tr>
  <tr>
    <td>Sam</td>
    <td>17</td>
    <td>she/her</td>
  </tr>
</table>
```

Aber das hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Gruppierungen von Daten zu assoziieren. Um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. überschreiben. Dies kann nur visuell für die obige Tabelle gemacht werden (sehen Sie sich [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) an und probieren Sie das Beispiel selbst aus).

Schauen Sie sich nun unser [Punkbands-Tabelle Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — hier sind einige Barrierefreiheits-Hilfsmittel im Einsatz:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Gruppierungen von Daten, die von Screenreadern als Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `<table>`-Element's `summary`-Attribut leisten beide ähnliche Aufgaben, sie fungieren als Alt-Text für eine Tabelle, die einem Screenreader-Benutzer eine nützliche Kurzfassung des Tabelleninhalts gibt. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch Sehenden zugänglich macht, die ihn ebenfalls nützlich finden könnten. Sie brauchen nicht wirklich beides.

> [!NOTE]
> Lesen Sie unseren Artikel zu [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für weitere Details über barrierefreie Datentabellen.

## Textalternativen

Während Textinhalt von Natur aus barrierefrei ist, kann dasselbe nicht unbedingt für Multimedia-Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiomaterial kann von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiomaterial ausführlich in den [Barrierefreien Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir uns die Barrierefreiheit des bescheidenen {{htmlelement("img")}}-Elements anschauen.

Wir haben ein einfaches Beispiel aufgeschrieben, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

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

Beim Betrachten des ersten Bildes mit einem Screenreader erhält der Benutzer nicht wirklich viel Hilfe — VoiceOver liest beispielsweise "/dinosaur.png, image" vor. Es liest den Dateinamen aus, um zu versuchen, etwas Hilfe zu bieten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier handelt, aber oft werden Dateien mit maschinengenerierten Dateinamen hochgeladen (z.B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalt in ein Bild einfügen — Screenreader können darauf nicht zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht markieren und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader das zweite Bild trifft, liest er das vollständige `alt`-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kurzen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung, nicht nur, bedeutungsvolle Dateinamen zu verwenden, falls sogenannter **alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass alt-Text in `alt`-Attributen so oft wie möglich bereitgestellt wird.

Beachten Sie, dass die Inhalte des `alt`-Attributs immer eine direkte Darstellung des Bildes und dessen visuelle Darstellung bieten sollten. Das `alt` sollte kurz und prägnant sein und alle im Bild vermittelten Informationen enthalten, die nicht im umgebenden Text dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Wenn das Foto von Fluffy beispielsweise als Avatar neben einer Rezension für Yuckymeat-Hundefutter steht, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hundebesitzer relevant sind und nicht im umgebenden Text dupliziert werden, eingeschlossen sein. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball in ihrem Mund."` ist angemessen. Da die umgebenden Texte wahrscheinlich Fluffys Größe und Rasse enthalten, sind diese nicht im `alt` enthalten. Da jedoch die Biographie des Hundes wahrscheinlich nicht die Haarlänge, Farben oder Spielzeugpräferenzen enthält, die ein potenzieller Besitzer wissen sollte, sind diese eingeschlossen. Ist das Bild draußen oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Das sind nicht wichtige Informationen für die Adoption des Haustieres und sind daher nicht enthalten. Alle Informationen, die das Bild vermittelt, auf die ein sehender Benutzer zugreifen kann und relevant für den Kontext ist, ist es, was vermittelt werden muss; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Jedes persönliche Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Personen, die das Bild zuvor nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn ein sehender Benutzer das nicht aus dem Bild wissen kann, dann sollten Sie es nicht aufnehmen.

Eine Überlegung ist, ob Ihre Bilder innerhalb Ihres Inhalts eine Bedeutung haben oder ob sie rein zur visuellen Dekoration sind und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzubinden.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für viel mehr Informationen über Bildimplementierung und Best Practices.
> Sie können auch [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) ansehen, um zu lernen, wie man das alt-Attribut für Bilder in verschiedenen Situationen verwendet.

Wenn Sie zusätzliche Kontextinformationen bereitstellen möchten, sollten Sie sie in den Text um das Bild herum oder in einem `title`-Attribut einfügen, wie oben gezeigt. In diesem Fall werden die meisten Screenreader sowohl den alt-Text, das title-Attribut als auch den Dateinamen vorlesen. Zusätzlich zeigen Browser den Titeltext als Tooltip an, wenn man mit der Maus darüber fährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The mozilla red dinosaur", der als Tooltip bei Mausüberfahrt angezeigt wird.](title-attribute.png)

Werfen wir einen kurzen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir nicht das `alt`-Attribut, sondern haben unsere Beschreibung des Bildes als normalen Textabsatz präsentiert, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation, die es Entwicklern ermöglicht, ihrem Markup zusätzliche Semantik hinzuzufügen, um die Barrierefreiheit von Screenreadern zu verbessern, wo dies erforderlich ist.

### Figuren und Bildunterschriften

HTML umfasst zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift assoziieren:

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

Während der Support von Screenreadern, die Bildunterschriften mit ihren Figuren assoziieren, gemischt ist, schafft die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Assoziation, wenn keine vorhanden ist. Das gesagt, ist die Elementstruktur nützlich für CSS-Styling, plus sie bietet eine Möglichkeit, eine Beschreibung des Bildes neben ihm in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in das Design einer Seite eingebunden wird, aber sein Hauptzweck der visuellen Dekoration dient. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll dafür sorgen, dass Screenreader das Bild erkennen, aber nicht versuchen, das Bild zu beschreiben (stattdessen würden sie nur "Bild" oder ähnliches sagen).

Der Grund, ein leeres `alt` zu verwenden, anstelle es nicht einzuschließen, ist, dass viele Screenreader die ganze Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, wo ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente einschließen. Eine andere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies auch verhindert, dass Screenreader Alt-Text vorlesen.

> [!NOTE]
> Wenn möglich sollten Sie CSS zur Anzeige von rein dekorativen Bildern verwenden.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element mit einem `href`-Attribut) können, je nachdem wie sie verwendet werden, die Barrierefreiheit unterstützen oder beeinträchtigen. Standardmäßig sind Links in Ihrem Aussehen barrierefrei. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch die Barrierefreiheit beeinträchtigen, wenn ihr barrierefreies Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch [text-decoration](/de/docs/Web/CSS/Reference/Properties/text-decoration), wobei Links standardmäßig blau und unterstrichen, lila und unterstrichen, wenn sie besucht wurden, und mit einem [focus-ring](/de/docs/Web/CSS/Reference/Selectors/:focus) wenn sie Tastaturfokus erhalten.

Farbe sollte nicht das einzige Mittel sein, um Links von nicht-verlinktem Inhalt zu unterscheiden. Die Farbe des Linktextes muss, wie aller Text, signifikant anders sein als die Hintergrundfarbe ([ein 4.5:1-Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant anders sein als nicht-verlinkter Text, mit einer minimalen Kontrastanforderung von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, besucht- und Fokus-/aktiv-Zuständen und einem 4.5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick` Ereignisse

Anker-Tags werden häufig mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem das **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten, wenn Links kopiert oder gezogen werden, in einem neuen Tab oder Fenster geöffnet werden, gebookmarkt werden und wenn JavaScript noch herunterlädt, fehlerhaft ist oder deaktiviert wird. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen einen {{HTMLElement("button")}} zu verwenden. Allgemein sollten Sie nur einen Anker für die Navigation mit einer richtigen URL verwenden.

### Externe Links und das Verlinken zu nicht-HTML-Ressourcen

Links, die über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster geöffnet werden und Links, deren `href`-Wert auf eine Dateiresource verweist, sollten einen Indikator über das Verhalten enthalten, das auftritt, wenn der Link aktiviert wird.

Menschen mit niedrigen Sehfähigkeiten, die mit Leseunterstützungstechnologie navigieren, oder die kognitive Bedenken haben, könnten verwirrt sein, wenn der neue Tab, das neue Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software könnten das Verhalten nicht einmal ankündigen.

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

Wenn ein Symbol anstelle von Text verwendet wird, um dieses Link-Verhalten zu kennzeichnen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur wenn nötig | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Überspringen von Links

Ein Überspringen-Link, auch bekannt als Skipnav, ist ein `a`-Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element gesetzt wird und auf den Beginn des Hauptinhalts der Seite verweist. Dieser Link ermöglicht es den Menschen, auf wiederholte Inhalte auf mehreren Seiten einer Website zu verzichten, wie z.B. auf eine Header- und Hauptnavigation einer Website.

Überspringen-Links sind besonders nützlich für Menschen, die mit unterstützender Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstöcke/Kopfbohren navigieren, bei denen das Navigieren durch sich wiederholende Links eine mühevolle Aufgabe sein kann.

- [WebAIM: "Navigation überspringen" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden Sie Links zum Überspringen der Navigation - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgs Kriteriums 2.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen von interaktivem Inhalt — einschließlich Anker — die in enger visueller Nähe zueinander platziert werden, sollten Platz eingefügt bekommen, um sie zu trennen. Dieser Abstand ist vorteilhaft für Menschen, die Probleme mit der Feinmotorik haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Schaltflächen-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten jetzt gut darin geübt sein, barrierefreies HTML für die meisten Anlässe zu schreiben. Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie alle diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
