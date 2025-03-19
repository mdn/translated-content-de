---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem sicher gestellt wird, dass die richtigen HTML-Elemente jederzeit für den vorgesehenen Zweck verwendet werden. Dieser Artikel untersucht im Detail, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

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
          <li>Barrierefreie Best Practices wie Alt-Text, gute Linkbeschreibungen, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften und -zuordnung.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wenn dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — werden Sie immer wieder ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Das bedeutet, die richtigen HTML-Elemente so weit wie möglich für ihren beabsichtigten Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie CSS und JavaScript kombinieren, um so ziemlich jedes HTML-Element so zu gestalten, wie Sie es möchten. Beispielsweise könnte eine Steuertaste, um ein Video auf Ihrer Seite abzuspielen, so ausgezeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

Nicht nur haben HTML `<button>`s von Haus aus geeignetes Styling (das Sie wahrscheinlich überschreiben möchten), sie haben auch eine eingebaute Tastaturzugänglichkeit — Benutzer können zwischen den Tasten mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML braucht nicht länger zu schreiben als nicht-semantische (schlechte) Auszeichnungen, wenn Sie es konsistent vom Beginn Ihres Projekts an tun. Noch besser, semantische Auszeichnung hat neben der Barrierefreiheit auch andere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, und es ist wahrscheinlich einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist möglicherweise leichter im Vergleich zu nicht-semantischem Spaghetti-Code und einfacher anpassbar.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung als nicht-semantische `<div>`s, was Ihre Dokumente für Kunden leichter auffindbar macht.

Lassen Sie uns nun barrierefreies HTML genauer betrachten.

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir die richtigen HTML-Elemente für die Aufgabe verwenden sollten. Das kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen Barrierefreiheit nicht funktioniert, wenn sie nicht richtig gehandhabt wird.

Draußen im Web ist es wahr, dass Leute sehr seltsame Dinge mit HTML-Markup machen. Einige Missbräuche von HTML sind auf alte Praktiken zurückzuführen, die noch nicht vollständig vergessen wurden, und einige sind einfach nur Unwissenheit. Was auch immer der Fall sein mag, Sie sollten solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu entfernen — Ihre Seiten könnten von irgendeiner Art von serverseitigem Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder Sie könnten Drittanbieter-Inhalte auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie machen können, wird der Sache der Barrierefreiheit helfen.

### Textinhalt

Eine der besten Barrierehilfen, die ein Benutzer eines Bildschirmlesers haben kann, ist eine exzellente Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein hervorragendes semantisches Beispiel könnte in etwa so aussehen:

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

Wir haben eine Version mit längeren Texten vorbereitet, die Sie mit einem Bildschirmleser ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, dies zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Bildschirmleser liest jede Überschrift vor, während Sie durch den Inhalt gehen, und teilt Ihnen mit, was eine Überschrift, was ein Absatz usw. ist.
2. Er stoppt nach jedem Element und lässt Sie in einem für Sie angenehmen Tempo weitermachen.
3. Sie können in vielen Bildschirmlesern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Bildschirmlesern auch eine Liste aller Überschriften aufrufen, die Sie als praktische Inhaltsverzeichnistabelle verwenden können, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente nur für Styling hinzufügen, etwa so etwas:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung haben — der Bildschirmleser hat nichts, was als Wegweiser verwendet werden kann, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die gesamte Seite wird als ein einziger riesiger Block gesehen, sodass sie in einem Rutsch komplett vorgelesen wird.

Es gibt auch über die Barrierefreiheit hinaus andere Probleme — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren verwendet werden können.

#### Verwendung klarer Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht unnötig komplex ist und keine unnötigen Jargons oder Slangbegriffe verwendet. Dies nützt nicht nur Menschen mit kognitiven oder anderen Behinderungen; es nützt Lesern, für die der Text nicht in ihrer ersten Sprache geschrieben ist, jüngeren Menschen …, jedem, in der Tat! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Bildschirmleser nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Striche, wenn Sie dies vermeiden können. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Erweitern Sie Abkürzungen — anstatt Jan zu schreiben, schreiben Sie Januar.
- Erweitern Sie Akronyme, mindestens einmal oder zweimal, und verwenden Sie dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr) Tag, um sie zu beschreiben.

### Seitenlayouts

In schlechten alten Zeiten haben Leute Seitenlayouts mit HTML-Tabellen erstellt — sie haben unterschiedliche Tabellenzellen verwendet, um den Header, Footer, die Seitenleiste, die Hauptinhaltsspalte usw. zu enthalten. Das ist keine gute Idee, da ein Bildschirmleser wahrscheinlich verwirrende Auslesungen gibt, besonders wenn das Layout komplex ist und viele verschachtelte Tabellen enthält.

Probieren Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) aus, das etwa so aussieht:

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <label
          >Search
          <input
            type="search"
            name="q"
            placeholder="Search query"
            width="300" />
        </label>
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

Wenn Sie versuchen, dies mit einem Bildschirmleser zu navigieren, wird er Ihnen wahrscheinlich sagen, dass es sich um eine Tabelle handelt, die betrachtet werden muss (obwohl einige Bildschirmleser den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Sie müssen dann wahrscheinlich (abhängig von welchem Bildschirmleser Sie verwenden) in die Tabelle als Objekt hinabsteigen und dessen Funktionen separat betrachten, dann aus der Tabelle wieder herauskommen, um den Inhalt weiter zu durchsuchen.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie hatten Sinn, als CSS-Unterstützung in Browsern nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Benutzer von Bildschirmlesern. Darüber hinaus erfordert ihr Quellcode mehr Markups, was sie weniger flexibel und schwerer zu pflegen macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Strukturbeispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das etwa so aussehen könnte:

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

Wenn Sie unser moderneres Strukturbeispiel mit einem Bildschirmleser ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr in den Inhaltsausgaben eingreift oder Verwirrung stiftet. Es ist auch deutlich schlanker und kleiner hinsichtlich der Codegröße, was bedeutet, dass der Code leichter zu pflegen ist und weniger Bandbreite für Benutzer zum Herunterladen erfordert, was besonders für Benutzer auf langsamen Verbindungen von Vorteil ist.

Ein weiterer Aspekt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie im obigen Beispiel gezeigt (siehe [content sectioning](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Gliederungselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), den Footer ({{htmlelement("footer")}}), wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu umschließen. Diese verleihen Bildschirmlesern und anderen Tools zusätzliche Semantik, um Benutzern zusätzliche Hinweise über die Inhalte zu geben, die sie navigieren (siehe [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für einen Eindruck davon, wie Bildschirmleser-Unterstützung aussieht).

> [!NOTE]
> Zusätzlich zu guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt im Quellmaterial logisch sinnvoll sein — Sie können ihn mithilfe von CSS später an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge bereits zu Beginn korrekt festlegen, damit das, was Benutzern von Bildschirmlesern vorgelesen wird, einen Sinn ergibt.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Barrierefreiheitsthemen ansprechen, die beim Erstellen solcher Steuerelemente zu beachten sind. Spätere Artikel zu WAI-ARIA und Multimedia werden weitere Aspekte der UI-Barrierefreiheit behandeln.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von Browsern mit der Tastatur manipuliert werden können. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Drücken sollten Sie sehen, dass der Tabfokus zwischen den verschiedenen fokussierbaren Elementen zu verschieben beginnt. Diese fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (dieser unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie sehen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!" und "And me!" in ihnen. Die dritte Schaltfläche hat eine blaue Umrandung, um den aktuellen Tabfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können eine Überlagerung aktivieren, die die Tabulierreihenfolge der Seite in Ihren Entwickler-Tools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, damit die Knöpfe eine Nachricht ausgeben), oder mit dem Tippen beginnen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Auf- und Abwärtspfeiltasten zwischen ihnen wechseln.

Sie erhalten dieses Verhalten im Wesentlichen kostenlos, indem Sie einfach die entsprechenden Elemente verwenden, z.B.

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

Das bedeutet, Links, Schaltflächen, Formularelemente und Etiketten angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Aber es kommt wieder vor, dass Leute seltsame Dinge mit HTML machen. Zum Beispiel sehen Sie manchmal Schaltflächen, die mit {{htmlelement("div")}}s ausgezeichnet sind, z.B.:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung eines solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, außerdem erhalten Sie keinen der Standard-CSS-Stylings, die Schaltflächen erhalten. In dem seltenen bis nicht vorhandenen Fall, in dem Sie ein Nicht-Button-Element als Button verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhaltensweisen, einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Das Hinzufügen solcher Vorteile erfordert einige Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren falschen `<div>`-Tasten die Fähigkeit gegeben, durch Tabellieren fokussiert zu werden, indem wir jedem die Eigenschaft `tabindex="0"` zugewiesen haben. Wir schließen auch `role="button"` ein, damit Benutzer von Bildschirmlesern wissen, dass sie das Element fokussieren und damit interagieren können:

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

Im Wesentlichen ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hauptsächlich dafür gedacht, tabbierbare Elemente in einer benutzerdefinierten Tabreihenfolge (in positiver numerischer Reihenfolge spezifiziert) zu haben, anstatt einfach in ihrer Standardquellenreihenfolge durchgetabbt zu werden. Das ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, zum Beispiel wenn das Layout Dinge in einer sehr unterschiedlichen visuellen Reihenfolge zum Quelltext zeigt und Sie die Dinge logischer gestalten möchten. Es gibt zwei andere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht tabbierbar sind, tabbierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies erlaubt normalerweise nicht tabbierbaren Elementen, programmgesteuert fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Während das obige Hinzufügen uns erlaubt, zu den Buttons zu tabben, erlaubt es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende kleine JavaScript-Trickerei hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann ein Button auf der Tastatur gedrückt wurde. Wir prüfen, welcher Button über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Event-Objekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler des Buttons gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement), das uns das Element gibt, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird sicher andere Probleme damit geben. **Besser, das richtige Element von Anfang an für die richtige Aufgabe zu verwenden.**

#### Sinnvolle Textbeschreibungen

Textbeschreibungen von UI-Steuerelementen sind für alle Benutzer sehr nützlich, aber richtig wichtig für Benutzer mit Behinderungen.

Stellen Sie sicher, dass Ihre Schaltflächen- und Linktextbeschreibungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschreibungen, da Benutzer von Bildschirmlesern manchmal eine Liste von Schaltflächen und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formular-Etiketten, die von der VoiceOver-Software auf Mac angezeigt werden. Diese Liste enthält bedeutungslose Labels wie 'happy menu button', die verschiedenen Formularsteuerelementen wie Schaltfläche, Textfeld und Link zugewiesen sind.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext Sinn machen, für sich alleine gelesen werden, sowie im Kontext des Absatzes, in dem sie sich befinden. Ein gutes Linktextbeispiel ist zum Beispiel:

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
> In unserem Artikel [Creating links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden Sie viele Informationen zur Linkimplementierung und den besten Praktiken. Sie können auch einige gute und schlechte Beispiele in [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende Beispiel scheint vernünftig genug zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht besonders nützlich für Benutzer mit Behinderung. Im obigen Beispiel gibt es nichts, das die Beschriftung eindeutig mit der Formulareingabe in Verbindung bringt und deutlich macht, wie sie ausgefüllt werden soll, wenn Sie es nicht sehen können. Wenn Sie darauf mit einigen Bildschirmlesern zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Bearbeitbarer Text".

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird das Label klar mit der Eingabe verknüpft; die Beschreibung wird mehr wie "Gebe deinen Namen ein: Bearbeitbarer Text." lauten.

![Ein gutes Formular-Label, das 'Gebe deinen Namen ein' liest, wird einem Texteingabeformular-Steuerelement zugewiesen.](voiceover-good-form-label.png)

Als zusätzlichen Bonus bedeutet das Verknüpfen einer Beschriftung mit einem Formulareingabefeld in den meisten Browsern, dass Sie auf das Label klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dadurch wird die Eingabefläche größer, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Eine gute Erklärung über die Bedeutung ordnungsgemäßer Textbeschriftungen und wie man Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen kann, finden Sie im folgenden Video:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Benutzer eines Bildschirmlesers, Zeilen oder Spalten als Datengruppierungen zusammenzuführen. Um dies zu tun, müssen Sie wissen, was die Überschriftszeilen sind und ob sie Zeilen oder Spalten überschriften. Dies kann nur visuell für die obige Tabelle getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Nun werfen Sie einen Blick auf unser [Punk Bands Table Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) — hier sehen Sie einige Barrierefreiheitshilfen:

- Tabellenüberschriften sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dadurch erhalten Sie vollständige Datengruppierungen, die von Bildschirmlesern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen beide ähnliche Aufgaben — sie dienen als Alt-Text für eine Tabelle und bieten dem Benutzer eines Bildschirmlesers eine nützliche kurze Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch sehbehinderten Benutzern zugänglich macht, die es ebenfalls als nützlich empfinden könnten. Eigentlich brauchen Sie nicht beides.

> [!NOTE]
> Lesen Sie unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für mehr Details über barrierefreie Datentabellen.

## Textalternativen

Während Textinhalte inhärent zugänglich sind, gilt das nicht notwendigerweise für multimediale Inhalte — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audioinhalte können von hörbehinderten Menschen nicht gehört werden. Wir behandeln Video- und Audiounterhaltung im Detail in [Barrierefreies Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber in diesem Artikel betrachten wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element.

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

Das erste Bild bietet beim Betrachten mit einem Bildschirmleser dem Benutzer nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um so gut wie möglich Hilfe zu leisten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier irgendeiner Art handelt, aber oft können Dateien mit maschinell generierten Dateinamen hochgeladen werden (z.B. von einer Digitalkamera), und diese Dateinamen bieten wahrscheinlich keinen Kontext zum Bildinhalt.

> [!NOTE]
> Deshalb sollten Sie niemals Textinhalte in ein Bild einfügen — Bildschirmleser können darauf nicht zugreifen. Es gibt auch andere Nachteile — Sie können es nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild trifft, liest er das vollständige alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der wie ein Mensch aufrecht steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies unterstreicht die Bedeutung der Verwendung aussagekräftiger Dateinamen, falls die sogenannte **alt-Text** nicht verfügbar ist, und dass außerdem ein Alt-Text in `alt`-Attribute immer, wenn möglich, angegeben wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, sein. Der Alt-Text sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen, die nicht im umgebenden Text dupliziert sind, enthalten.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich basierend auf dem Kontext. Wenn beispielsweise das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, wäre `alt="Fluffy"` angemessen. Ist das Foto jedoch Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft, sollten Informationen, die im Bild vermittelt werden und für einen potenziellen Hundebesitzer relevant sind, aber im umgebenden Text nicht dupliziert werden, enthalten sein. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifariger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."`, wäre angemessen. Da im umgebenden Text wahrscheinlich Fluffys Größe und Rasse enthalten sind, ist das nicht im `alt` enthalten. Allerdings, da die Biografie des Hundes wahrscheinlich keine Haarlänge, Farben oder Spielzeugpräferenzen enthält, die der potenzielle Elternteil wissen muss, wird es enthalten. Ist das Bild im Freien aufgenommen, oder trägt Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustieres und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die für sehbehinderte Benutzer zugänglich und im Kontext relevant sind, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Menschen, die das Bild vorher nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht aus dem Bild erkennen kann, dann nehmen Sie es nicht auf.

Überlegen Sie, ob Ihre Bilder in Ihren Inhalten eine Bedeutung haben oder ob sie rein zur visuellen Dekoration sind und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite einzufügen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Responsive_images) für eine Menge weiterer Informationen zur Bildimplementierung und zu den besten Praktiken.
> Sie können auch [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) ausprobieren, um zu lernen, wie Sie ein Alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextbezogene Informationen bereitstellen möchten, sollten Sie diese in den umgebenden Text einfügen oder in einem `title`-Attribut, wie oben gezeigt. In diesem Fall werden die meisten Bildschirmleser den Alt-Text, das Title-Attribut und den Dateinamen vorlesen. Zusätzlich zeigen Browser Titeltexte als Tooltips an, wenn mit der Maus darüber gefahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier", der als Tooltip bei Mouseover angezeigt wird.](title-attribute.png)

Lassen Sie uns einen kurzen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir nicht das `alt`-Attribut — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was Bildschirmleser dazu bringt, diesen Absatz als den Alt-Text/das Label für das Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihrem Markup hinzuzufügen, um die Zugänglichkeit von Bildschirmlesern bei Bedarf zu verbessern.

### Figuren und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Art von Abbildung (es kann alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Obwohl die Unterstützung durch Bildschirmleser für die Verknüpfung von Bildunterschriften mit ihren Figuren gemischt ist, wird durch die Einbeziehung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verknüpfung hergestellt, falls keine vorhanden ist. Davon abgesehen ist die Elementstruktur nützlich für CSS-Styling, außerdem bietet sie eine Möglichkeit, eine Beschreibung des Bildes neben ihm in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, aber dessen primärer Zweck ist rein dekorativ. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies geschieht, damit Bildschirmleser das Bild erkennen, aber nicht versuchen, es zu beschreiben (stattdessen sagen sie einfach "Bild" oder etwas Ähnliches).

Der Grund für die Verwendung eines leeren `alt` anstelle des Weglassens ist, dass viele Bildschirmleser die gesamte Bild-URL ankündigen, wenn kein `alt` angegeben ist. Im obigen Beispiel wirkt das Bild als visuelle Dekoration zur Überschrift, mit der es verknüpft ist. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente einfügen. Eine andere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), da dies ebenfalls verhindert, dass Bildschirmleser alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut) können je nach ihrer Verwendung die Barrierefreiheit unterstützen oder schädigen. Standardmäßig sind Links visuell von anderem Text unterschiedlich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch die Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich auf unerwartete Weise verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderen Texten sowohl in der Farbe als auch in der [Textdekoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen, besuchte Links violett und unterstrichen sind und wenn sie Tastaturfokus erhalten, einen [Fokus-Ring](/de/docs/Web/CSS/:focus) haben.

Die Farbe sollte nicht als einzige Methode verwendet werden, um Links von nicht miteinander verknüpften Inhalten zu unterscheiden. Die Linktextfarbe, wie jeder Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Kontrast von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links sich visuell signifikant von nicht miteinander verknüpftem Text unterscheiden, mit einem Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Standard-, Besuchs- und Fokus-/Aktivzuständen und einem Kontrast von 4,5:1 zwischen allen diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Anker-Tags werden oft mit dem `onclick`-Ereignis missbräuchlich verwendet, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript noch heruntergeladen wird, Fehler enthält oder deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Bildschirmleser). In solchen Fällen wird empfohlen, eine {{HTMLElement("button")}} statt eines Anchors zu verwenden. Im Allgemeinen sollten Sie einen Anker nur für die Navigation mit einer richtigen URL verwenden.

### Externe Links und das Verlinken zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden und Links, deren `href`-Wert auf eine Dateiressource zeigt, sollten einen Indikator enthalten, welches Verhalten auftreten wird, wenn der Link aktiviert wird.

Menschen, die niedrig visuelle Bedingungen erfahren oder mit der Hilfe von Bildschirmlesetechnologien navigieren, oder Menschen mit kognitiven Bedenken können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmlesesoftware kündigen das Verhalten möglicherweise nicht einmal an.

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten solcher Links zu signalisieren, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Erläuterungen zur Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorabwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch bekannt als Skipnav, ist ein `a`-Element, das so nahe wie möglich am öffnenden {{HTMLElement("body")}}-Element platziert ist und auf den Anfang des Hauptinhalts der Seite verweist. Dieser Link ermöglicht es Benutzern, wiederkehrende Inhalte auf mehreren Seiten einer Webseite zu überspringen, wie z.B. die Kopfzeile einer Webseite und die Hauptnavigation.

Sprunglinks sind besonders nützlich für Menschen, die mit Unterstützungstechnologien wie Schaltersteuerung, Sprachsteuerung oder Mundstöckern/Kopfstöcken navigieren, bei denen das Durchlaufen wiederkehrender Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip Navigation Links - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Erläuterungen zur Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis von Erfolgskriterium 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Ankern — die in enger visueller Nähe zueinander platziert sind, sollten einen Abstand erhalten, um sie zu trennen. Diese Abstandsvorgaben sind für Menschen von Vorteil, die an Feinmotorikstörungen leiden und vielleicht versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren.

## Zusammenfassung

Sie sollten jetzt gut im Schreiben von barrierefreiem HTML für die meisten Gelegenheiten versiert sein. Unser Artikel zu den Grundlagen von WAI-ARIA wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen abgedeckt. Als Nächstes werden wir CSS und JavaScript erforschen und wie nützlich ihre gute oder schlechte Verwendung für die Barrierefreiheit ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
