---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Ein Großteil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel beleuchtet im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis davon,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den HTML-Funktionen zu erlangen, die Vorteile für die Barrierefreiheit bieten, und wie diese angemessen in Ihren Webdokumenten eingesetzt werden.
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Während Sie mehr über HTML lernen — weitere Ressourcen lesen, sich mehr Beispiele ansehen usw. — werden Sie ein wiederkehrendes Thema feststellen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch als POSH, oder Plain Old Semantic HTML, bezeichnet). Das bedeutet, dass die richtigen HTML-Elemente möglichst für ihren vorgesehenen Zweck verwendet werden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um jedes HTML-Element so zu verhalten, wie Sie es möchten. Beispielsweise könnte ein Steuerungsknopf zum Abspielen eines Videos auf Ihrer Seite so markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für den Zweck zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur standardmäßig eine passende Stilgestaltung (die Sie wahrscheinlich überschreiben möchten), sondern sie bieten auch eingebaute Tastaturzugänglichkeit — Benutzer können zwischen den Schaltflächen mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es konsequent von Beginn Ihres Projekts an umsetzen. Noch besser, semantisches Markup hat weitere Vorteile über die Barrierefreiheit hinaus:

1. **Einfacher zu entwickeln** — wie bereits erwähnt, erhalten Sie einige Funktionen kostenlos, außerdem ist es wohl einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist wahrscheinlich leichter in der Dateigröße als nicht-semantischer Spaghetticode und leichter anpassbar.
3. **Gut für SEO** — Suchmaschinen messen Keywords in Überschriften, Links usw. mehr Bedeutung bei als Keywords, die in nicht-semantischen `<div>`s usw. enthalten sind, sodass Ihre Dokumente für Kunden besser findbar sind.

Lassen Sie uns nun ausführlicher auf barrierefreies HTML eingehen.

> [!NOTE]
> Es ist eine gute Idee, einen Screenreader auf Ihrem lokalen Computer eingerichtet zu haben, damit Sie einige der unten gezeigten Beispiele testen können. Weitere Einzelheiten finden Sie in unserem [Screenreader-Leitfaden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers).

## Gute Semantik

Wir haben bereits über die Bedeutung richtiger Semantik gesprochen und warum wir das richtige HTML-Element für die jeweilige Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es eines der Hauptursachen ist, warum Barrierefreiheit nicht gut umgesetzt wird, wenn es nicht ordentlich gehandhabt wird.

Im Internet ist es leider so, dass Menschen einige sehr seltsame Dinge mit HTML-Markup tun. Einige Missbräuche von HTML entstehen durch veraltete Praktiken, die nicht vollständig vergessen wurden, und einige sind einfach Ignoranz. Egal aus welchem Grund, man sollte so schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu beseitigen — Ihre Seiten könnten von einem serverseitigen Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder Sie könnten Inhalte von Drittanbietern auf Ihrer Seite haben (wie z.B. Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen, wird der Barrierefreiheit helfen.

### Textinhalt

Eine der besten Hilfen für Benutzer von Screenreadern ist eine exzellente Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein hervorragendes semantisches Beispiel könnte wie folgt aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [gute-semantik.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, dies zu durchlaufen, werden Sie sehen, dass es ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch die Inhalte gehen, und informiert Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Nach jedem Element hält er an, sodass Sie in einem für Sie komfortablen Tempo vorgehen können.
3. Sie können in vielen Screenreadern zur nächsten oder vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften aufrufen, sodass Sie sie als praktische Inhaltsübersicht nutzen können, um bestimmte Inhalte zu finden.

Manchmal schreiben Menschen Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur zum Stylen hinzu, etwa so:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [schlechte-semantik.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat keine Wegweiser, sodass Sie keine nützliche Inhaltsübersicht abrufen können, und die gesamte Seite wird als ein einziger riesiger Block gesehen, sodass sie in einem Zug, alles auf einmal, vorgelesen wird.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente gibt, die als Selektoren genutzt werden können.

#### Klarheit in der Sprache

Auch die Sprache, die Sie verwenden, kann die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht unnötig komplex ist und keinen unnötigen Fachjargon oder Slang verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute, sondern auch Lesern, für die der Text nicht in ihrer Erstsprache geschrieben ist, jüngeren Menschen... tatsächlich allen! Abgesehen davon sollten Sie vermeiden, Sprache und Zeichen zu verwenden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie nach Möglichkeit keine Bindestriche. Statt 5-7 zu schreiben, schreiben Sie 5 bis 7.
- Lösen Sie Abkürzungen auf — statt Jan zu schreiben, schreiben Sie Januar.
- Lösen Sie Akronyme auf, zumindest ein- oder zweimal, und verwenden Sie das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag, um sie zu beschreiben.

### Seitenlayouts

In früheren Zeiten haben Menschen Seitenlayouts mit HTML-Tabellen erstellt — indem verschiedene Tabellenzellen verwendet wurden, um Kopfzeile, Fußzeile, Seitenleiste, Hauptinhaltskolumne usw. zu enthalten. Dies ist keine gute Idee, da ein Screenreader wahrscheinlich verwirrende Ausgaben gibt, besonders wenn das Layout komplex ist und viele verschachtelte Tabellen enthält.

Versuchen Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html), das in etwa so aussieht:

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

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird es Ihnen wahrscheinlich sagen, dass es sich um eine Tabelle handelt, die betrachtet werden sollte (obwohl einige Screenreader den Unterschied zwischen Layouttabellen und Datentabellen erraten können). Sie müssen dann wahrscheinlich (je nachdem, welchen Screenreader Sie verwenden) in die Tabelle als Objekt hinabsteigen und ihre Funktionen separat betrachten, dann wieder aus der Tabelle heraus, um mit der Navigation der Inhalte fortzufahren.

Tabellenlayouts sind ein Relikt vergangener Zeiten — sie ergaben Sinn, als die Unterstützung von CSS in Browsern nicht weit verbreitet war, aber jetzt stiften sie nur Verwirrung bei Screenreader-Benutzern. Zudem erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwieriger zu warten macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einer [moderneren Website-Strukturexample](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, die etwa folgendermaßen aussehen könnte:

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

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr den Inhalt stört oder Verwirrung in der Lesung verursacht. Es ist auch viel schlanker und kleiner in Bezug auf die Codegröße, wodurch der Code leichter zu warten ist und weniger Bandbreite zum Herunterladen der Benutzer erfordert, besonders vorteilhaft für diejenigen mit langsamen Verbindungen.

Ein weiterer Aspekt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie im obigen Beispiel gesehen (siehe [Inhaltsgliederung](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elemente erstellen, aber es ist besser, geeignete Gliederungselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu umschließen. Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Anhaltspunkte über die Inhalte zu geben, die sie navigieren (siehe [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung über die Unterstützung der neuen HTML5-Gliederungselemente durch Screenreader).

> [!NOTE]
> Neben guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später immer noch mit CSS platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit das, was den Benutzern des Screenreaders vorgelesen wird, Sinn ergibt.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Schaltflächen, Links und Formsteuerelemente. In diesem Abschnitt werden wir uns die grundlegenden Barrierefreiheitsaspekte ansehen, die beim Erstellen solcher Steuerelemente zu beachten sind. Spätere Artikel zu WAI-ARIA und Multimedia werden andere Aspekte der UI-Barrierefreiheit beleuchten.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass sie standardmäßig von der Tastatur aus manipuliert werden können. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach ein paar Drücken sollten Sie das Tab-Fokus in den verschiedenen fokussierbaren Elementen sehen. Die fokussierten Elemente erhalten einen markierten Standardstil in jedem Browser (sie unterscheiden sich leicht zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!" und "And me!" in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, um den aktuellen Tab-Fokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tab-Reihenfolge der Seite in Ihren Entwicklertools anzeigt. Weitere Informationen siehe: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingebunden, um die Schaltflächen eine Nachricht anzeigen zu lassen), oder mit dem Tippen beginnen, um Text in ein Textfeld einzugeben. Andere Formularelemente haben verschiedene Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen lassen und diese mit den Pfeiltasten hoch und runter wechseln.

> [!NOTE]
> Unterschiedliche Browser können unterschiedliche Optionen zur Tastatursteuerung bieten. Weitere Einzelheiten finden Sie unter [Verwenden von nativer Tastaturbarrierefreiheit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Im Grunde genommen erhalten Sie dieses Verhalten automatisch, indem Sie die entsprechenden Elemente verwenden, z.B.

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

Das bedeutet, dass Links, Schaltflächen, Formularelemente und Beschriftungen (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente) geeignet verwendet werden müssen.

Es kommt jedoch vor, dass Menschen seltsame Dinge mit HTML tun. Beispielsweise sehen Sie manchmal Schaltflächen, die mit {{htmlelement("div")}}s markiert sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung solcher Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturbarrierefreiheit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und außerdem erhalten Sie keines der standardmäßigen CSS-Stilelemente, die Schaltflächen erhalten. In sehr seltenen Fällen, wenn Sie ein Nicht-Button-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle standardmäßigen Schaltflächenverhaltensweisen, einschließlich Tastatur- und Maustastenunterstützung.

#### Tastatur Zugänglichkeit zurück einbauen

Solche Vorteile zurückzubauen erfordert ein wenig Arbeit (siehe ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel — ebenfalls den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tab) indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Benutzer von Screenreadern wissen, dass sie das Element fokussieren und damit arbeiten können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut in erster Linie gedacht, um elemente, die tabbar sind, eine benutzerdefinierte Tab-Reihenfolge zu ermöglichen (in positiver numerischer Reihenfolge festgelegt), anstatt einfach in ihrer Standard-Quellreihenfolge durchgegangen zu werden. Dies ist fast immer eine schlechte Idee, da es zu weitreichender Verwirrung führen kann. Verwenden Sie es nur, wenn es wirklich notwendig ist, beispielsweise wenn das Layout die Dinge in einer sehr unterschiedlichen visuellen Reihenfolge zum Quellcode zeigt und Sie die Dinge logischer machen wollen. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert das Fokussieren von Elementen, die normalerweise nicht tabbar sind. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — damit können in der Regel nicht tabbare Elemente programmgesteuert fokussiert werden, z.B. über JavaScript oder als Ziel von Links.

Während diese Ergänzung es uns erlaubt, die Schaltflächen zu tabben, erlaubt sie es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Um das zu tun, mussten wir folgenden JavaScript-Trick hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion im `onclick`-Eventhandler der Schaltfläche mit `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das alles ist eine Menge zusätzlicher Aufwand, um die Funktionalität zurückzubauen. Und es gibt bestimmt andere Probleme damit. **Besser ist es, von Anfang an das richtige Element für den richtigen Zweck zu verwenden.**

#### Bedeutungsvolle Textbeschriftungen

Textbeschriftungen von UI-Steuerelementen sind sehr nützlich für alle Benutzer, aber besonders wichtig für Benutzer mit Behinderungen, sie richtig zu gestalten.

Sie sollten sicherstellen, dass Ihre Schaltflächen- und Linktextbeschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen aufrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac gelistet werden.

![Liste von Formulareingabebeschriftungen, die von VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button`, die verschiedenen Formularelementen wie Schaltflächen, Textfeldern und Links zugeordnet sind.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen kontextunabhängig sinnvoll sind, wenn sie alleine vorgelesen werden, sowie im Kontext des Absatzes, in dem sie sich befinden. Das folgende Beispiel zeigt einen guten Linktext:

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
> Mehr über die Implementierung und die besten Praktiken von Links finden Sie in unserem Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). Sie können auch gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Allerdings ist dies nicht besonders nützlich für Benutzer mit Behinderungen. In dem obigen Beispiel gibt es nichts, um die Beschriftung eindeutig mit der Formulareingabe zu verknüpfen und es klar zu machen, wie sie ausgefüllt werden soll, wenn man sie nicht sehen kann. Wenn Sie darauf mit einigen Screenreadern zugreifen, wird möglicherweise nur eine Beschreibung wie "Editierbarer Text" gegeben.

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird die Beschriftung eindeutig mit der Eingabe verknüpft; die Beschreibung wird eher wie "Füllen Sie Ihren Namen aus: Editierbarer Text" lauten.

![Eine gute Formularbeschriftung, die 'Füllen Sie Ihren Namen aus' für eine Texteingabeformulareingabe liest.](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet das Verknüpfen einer Beschriftung mit einer Formulareingabe in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt dem Eingabefeld einen größeren Trefferbereich, was es einfacher macht, ihn auszuwählen.

> [!NOTE]
> Sie können gute und schlechte Beispiele für Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung zur Bedeutung richtiger Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können, im folgenden Video:

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Benutzer eines Screenreaders, Zeilen oder Spalten als Gruppierungen von Daten zu verknüpfen. Um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. sind. Dies kann nur visuell für die obige Tabelle getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser [Punkbands Tabellenbeispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen sehen:

- Tabellenkopfzeilen werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Gruppierungen von Daten, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen beide ähnliche Aufgaben — sie dienen als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die ihn möglicherweise auch nützlich finden. Es werden nicht wirklich beide benötigt.

> [!NOTE]
> Lesen Sie unseren Artikel über die [Erweiterte Funktionen und Barrierefreiheit von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Advanced) für weitere Informationen zu zugänglichen Datentabellen.

## Textalternativen

Während textlicher Inhalt von Natur aus zugänglich ist, kann dies nicht notwendigerweise von Multimediainhalten gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden und Audiomaterialien nicht von hörgeschädigten Personen wahrgenommen werden. Wir behandeln Video- und Audioinhalte detailliert in der [Barrierefreie Multimedia](/de/docs/Learn/Accessibility/Multimedia), aber für diesen Artikel werden wir die Zugänglichkeit für das bescheidene {{htmlelement("img")}}-Element betrachten.

Wir haben ein einfaches Beispiel verfasst, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes enthält:

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

Das erste Bild bietet, wenn es von einem Screenreader betrachtet wird, dem Benutzer nicht wirklich viel Hilfe — VoiceOver beispielsweise liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen, um zu versuchen, etwas Hilfe zu bieten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um eine Art Dinosaurier handelt, aber oft können Dateien mit maschinell generierten Dateinamen hochgeladen werden (z.B. von einer Digitalkamera), und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalte in ein Bild einfügen — Screenreader können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, liest er das vollständige Alt-Attribut vor — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.".

Dies hebt die Bedeutung hervor, nicht nur sinnvolle Dateinamen zu verwenden, falls sogenannter **Alternativtext** nicht verfügbar ist, sondern auch sicherzustellen, dass Alternativtext in `alt`-Attributen, wo immer möglich, bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen visueller Austrahlung bieten. Das alt sollte kurz und präzise sein und alle Informationen enthalten, die im Bild vermittelt werden und die nicht im umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich basierend auf dem Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierschutzgesellschaft ist, sollten Informationen aufgenommen werden, die im Bild vermittelt werden und die für einen potenziellen Hundehalter relevant sind und im umgebenden Text nicht dupliziert werden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzen Haaren, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, wird dies nicht im `alt` aufgenommen. Da aber die Biografie des Hundes wahrscheinlich nicht die Haarlänge, Farben oder Spielzeugvorlieben enthält, die der potenzielle Elternteil wissen muss, wird das eingeschlossen. Ob das Bild im Freien ist oder Fluffy ein rotes Halsband mit einer blauen Leine hat, ist nicht wichtig in Bezug auf die Adoption des Haustiers und wird daher nicht aufgenommen. Alle im Bild zugänglichen Informationen, die ein sehender Benutzer erhalten kann und die im Kontext relevant sind, müssen vermittelt werden; nichts mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht eingefügt werden, da sie nicht nützlich für Menschen sind, die das Bild vorher nicht gesehen haben. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn der sehende Benutzer das aus dem Bild nicht wissen kann, dann sollten Sie es weglassen.

Eine Sache, die Sie berücksichtigen sollten, ist, ob Ihre Bilder im Inhalt Bedeutung haben oder ob sie rein dekorativ sind und somit keine Bedeutung besitzen. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Lesen Sie [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) für viele weitere Informationen über die Implementierung von Bildern und die Besten Praktiken.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese in den Text, der das Bild umgibt, oder in ein `title`-Attribut aufnehmen, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den Alt-Text, das Title-Attribut und den Dateinamen aus. Zudem zeigen Browser den Titeltext als Tooltip an, wenn man mit der Maus darüber fährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der rote Mozilla Dinosaurier", der als Tooltip beim Überfahren mit der Maus angezeigt wird.](title-attribute.png)

Schauen wir uns noch einmal kurz die vierte Methode an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` zugewiesen, und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Label für das Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern ermöglicht, ihrer Markup zusätzliche Semantik hinzuzufügen, um die Barrierefreiheit für Screenreader zu verbessern, wo es erforderlich ist. Um mehr zu erfahren, wie es funktioniert, lesen Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

### Figuren und Beschriftungen

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung irgendeiner Art (sie könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Während es eine gemischte Unterstützung von Screenreadern für die Assoziierung von Bildunterschriften mit ihren Abbildungen gibt, schafft die Aufnahme von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) die Assoziation, wenn keine vorhanden ist. Das gesagt, die Elementstruktur ist nützlich für CSS-Styling, zudem bietet es eine Möglichkeit, eine Beschreibung des Bildes in der Nähe im Quellcode zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, dessen primärer Zweck jedoch die visuelle Dekoration ist. Sie werden in dem obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies ist, damit Screenreader das Bild erkennen, aber nicht versuchen, es zu beschreiben (anstatt dessen würden sie einfach "Bild" oder ähnliches sagen).

Der Grund, ein leeres `alt` zu verwenden, anstatt es nicht einzuschließen, ist, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` angegeben ist. Im obigen Beispiel handelt das Bild als visuelle Dekoration zur Überschrift, mit der es verknüpft ist. In Fällen wie diesem, und in Fällen, in denen ein Bild nur zur Dekoration da ist und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente aufnehmen. Eine andere Alternative ist die Verwendung des [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attributes [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), da dies ebenfalls verhindert, dass Screenreader Alternativtexte vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), je nachdem, wie sie verwendet werden, können die Barrierefreiheit unterstützen oder ihr schaden. Standardmäßig sind Links in ihrem Erscheinungsbild zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch auch die Barrierefreiheit beeinträchtigen, wenn ihr zugängliches Styling entfernt oder wenn JavaScript sie auf unerwartete Weise verhalten lässt.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden und mit einer [focus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einzige Methode verwendet werden, um Links von nicht verlinkenden Inhalten zu unterscheiden. Die Linktextfarbe, wie alle Texte, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein 4.5:1 Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant unterschiedlich von nicht verlinktem Text sein, mit einem minimalen 3:1 Kontrast zwischen Linktext und umgebendem Text und zwischen Standard-, besuchten und Fokus-/Aktiv-Ständen und einem 4.5:1 Kontrast zwischen allen diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript noch heruntergeladen oder blockiert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker nur für die Navigation verwenden, wobei eine richtige URL erforderlich ist.

### Externe Links und Verlinkung zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"` Deklaration und Links zum `href`-Wert eines Dateidonloads geöffnet werden, sollten einen Indikator über das Verhalten, das bei der Aktivierung des Links auftreten wird, einschließen.

Personen, die an visuellen Erschwernissen leiden, die mit einem Screenreader navigieren oder kognitive Anforderungen haben, können verwirrt sein, wenn die neue Registerkarte, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software geben möglicherweise das Verhalten nicht einmal an.

#### Link, der ein neues Tab oder Fenster öffnet

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten dieses Links anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verstehen von WCAG, Erklärungen zur Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs aus einem Link nur dann, wenn notwendig | W3C Techniken zu WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorankündigung geben, wenn ein neues Fenster geöffnet wird | W3C Techniken zu WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch als skipnav bekannt, ist ein `a`-Element, das so nah wie möglich an das öffnende {{HTMLElement("body")}}-Element platziert wird und zum Beginn des Hauptinhalts der Seite linkt. Dieser Link ermöglicht es Menschen, Inhalte zu überspringen, die auf mehreren Seiten einer Website wiederholt werden, wie z.B. die Kopfzeile und die Hauptnavigation einer Website.

Sprunglinks sind besonders nützlich für Menschen, die mit unterstützender Technologie wie Schaltsteuerung, Sprachbefehl oder Maussticks/Kopfstangen navigieren, bei denen das Durchlaufen von wiederholten Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip Navigation Links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verstehen von WCAG, Erklärungen zur Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Ankern — in enger visueller Nähe zueinander sollten Raum eingefügt haben, um sie zu trennen. Dieser Abstand ist vorteilhaft für Personen, die unter Problemen mit der Feinmotorik leiden und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren, während sie navigieren.

Ein Zwischenraum kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Knopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML-Barrierefreiheit](/de/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun versiert im Schreiben von barrierefreiem HTML für die meisten Gelegenheiten sein. Unser Artikel zu WAI-ARIA-Grundlagen wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen behandelt. Als nächstes werden wir CSS und JavaScript erkunden und wie Barrierefreiheit durch deren gute oder schlechte Verwendung beeinflusst wird.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
