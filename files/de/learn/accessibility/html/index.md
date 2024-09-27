---
title: "HTML: Eine gute Grundlage für Zugänglichkeit"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel zeigt im Detail, wie HTML genutzt werden kann, um maximale Zugänglichkeit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis davon,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Zugänglichkeit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den HTML-Features zu erlangen, die zugängliche Vorteile bieten und wie Sie sie angemessen in Ihren Webdokumenten verwenden.
      </td>
    </tr>
  </tbody>
</table>

## HTML und Zugänglichkeit

Je mehr Sie über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — desto mehr werden Sie ein gemeinsames Thema erkennen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Das bedeutet, die korrekten HTML-Elemente so weit wie möglich für ihren vorgesehenen Zweck zu verwenden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript nahezu jedem HTML-Element das gewünschte Verhalten verleihen. Ein Steuerknopf zum Abspielen eines Videos auf Ihrer Seite könnte beispielsweise so ausgezeichnet werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch ausführlicher sehen werden, macht es Sinn, das richtige Element für den Job zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur einige passende Standard-Stilvorgaben (die Sie wahrscheinlich überschreiben möchten), sie bieten auch eingebauten Tastaturzugang — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen den Schaltflächen navigieren und ihre Auswahl mit <kbd>Leertaste</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML zu schreiben dauert nicht länger als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsequent umsetzen. Noch besser, semantisches Markup bietet neben der Zugänglichkeit weitere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos, es ist zudem einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist in der Regel leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher anpassbar.
3. **Gut für SEO** — Suchmaschinen messen Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung zu als in nicht-semantischen `<div>`s enthaltene Schlüsselwörter, sodass Ihre Dokumente von Kunden besser gefunden werden.

Lassen Sie uns nun zugängliches HTML im Detail betrachten.

> [!NOTE]
> Es ist eine gute Idee, einen Screenreader auf Ihrem lokalen Computer einzurichten, damit Sie einige der unten gezeigten Beispiele testen können. Weitere Informationen finden Sie in unserem [Screenreader-Leitfaden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers).

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und darüber, warum wir das richtige HTML-Element für den jeweiligen Zweck verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Zugänglichkeit erheblich beeinträchtigt wird, wenn sie nicht ordnungsgemäß behandelt wird.

Da draußen im Web ist es wahr, dass Leute mit HTML-Markup sehr seltsame Dinge machen. Einige Missbräuche von HTML sind auf alte Praktiken zurückzuführen, die nicht vollständig vergessen wurden, und einige sind schlicht Ignoranz. In jedem Fall sollten Sie solche schlechten Codes ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von einer Art serverseitigem Framework generiert werden, über das Sie nicht die vollständige Kontrolle haben, oder Sie könnten Drittanbieterinhalte auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, hilft der Sache der Zugänglichkeit.

### Textinhalt

Eine der besten Zugänglichkeits-Hilfen, die ein Screenreader-Benutzer haben kann, ist eine hervorragende Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie durch dieses navigieren, werden Sie feststellen, dass es ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift aus, während Sie durch den Inhalt fortschreiten und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo vorgehen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften aufrufen, sodass Sie sie als praktische Inhaltsübersicht verwenden können, um spezifische Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw., indem sie Zeilenumbrüche verwenden und HTML-Elemente nur zum Styling hinzufügen, etwas wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, das er als Wegweiser verwenden kann, sodass Sie keine nützliche Inhaltsübersicht abrufen können, und die gesamte Seite wird als einzelner großer Block gesehen, der in einem Zug gelesen wird.

Es gibt auch andere Probleme über die Zugänglichkeit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder ihn mit JavaScript zu manipulieren, da es keine Elemente als Selektoren gibt.

#### Verwendung klarer Sprache

Die Sprache, die Sie verwenden, kann auch die Zugänglichkeit beeinflussen. Im Allgemeinen sollte klare Sprache verwendet werden, die nicht übermäßig kompliziert ist und keine unnötigen Fachbegriffe oder umgangssprachlichen Ausdrücke enthält. Dies nützt nicht nur Menschen mit kognitiven oder anderen Behinderungen, sondern auch Lesern, für die der Text nicht in ihrer Muttersprache ist, jüngeren Menschen... letztendlich jedem! Abgesehen davon sollten Sie versuchen, die Verwendung von Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Striche, wenn Sie es vermeiden können. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen erweitern — anstatt Jan zu schreiben, schreiben Sie Januar.
- Abkürzungen erweitern, zumindest einmal oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag verwenden, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Zeiten haben Leute Seitenlayouts mit HTML-Tabellen erstellt — indem sie verschiedene Tabellenzellen verwendet haben, um die Kopfzeile, die Fußzeile, die Seitenleiste, die Hauptinhalttspalte usw. zu enthalten. Dies ist keine gute Idee, da ein Screenreader wahrscheinlich verwirrende Ausgaben gibt, insbesondere wenn das Layout komplex ist und viele geschachtelte Tabellen enthält.

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

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird er Ihnen wahrscheinlich mitteilen, dass eine Tabelle zu betrachten ist (obwohl einige Screenreader den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Sie müssen dann wahrscheinlich (abhängig davon, welchen Screenreader Sie verwenden) in die Tabelle als Objekt hinuntergehen und ihre Funktionen separat betrachten, dann wieder aus der Tabelle herauskommen, um den Inhalt weiter zu navigieren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie ergaben Sinn, als die Unterstützung für CSS in Browsern noch nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Screenreader-Benutzer. Außerdem erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwieriger zu warten macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Strukturbeispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das etwa so aussehen könnte:

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

Wenn Sie unser Beispiel mit modernerer Struktur mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht länger den Inhalt stört oder Verwirrung verursacht. Es ist auch viel schlanker und kleiner in Bezug auf die Codegröße, was bedeutet, dass der Code einfacher zu warten ist und weniger Bandbreite benötigt wird, damit Nutzer ihn herunterladen, was besonders für jene von Vorteil ist, die langsame Verbindungen haben.

Ein weiterer Aspekt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie sie im obigen Beispiel zu sehen sind (siehe [Inhaltsstrukturierung](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit geschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Abschnittselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}) usw. einzuhüllen. Diese geben Screenreadern (und anderen Tools) zusätzliche Semantik, um den Benutzern zusätzliche Hinweise über den Inhalt zu geben, den sie navigieren (siehe [Screenreader-Unterstützung für neue HTML5-Abschnittselemente](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung davon, wie die Unterstützung von Screenreadern aussieht).

> [!NOTE]
> Zusätzlich zu guter Semantik und einem ansprechenden Layout sollte Ihr Inhalt im Quelltext logisch Sinn ergeben — Sie können ihn später immer mit CSS an die gewünschte Stelle setzen, aber Sie sollten die Reihenfolge des Quelltexts von Anfang an richtig machen, damit Screenreader-Benutzern das, was ihnen vorgelesen wird, Sinn ergibt.

### UI-Steuerungen

Mit UI-Steuerungen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Buttons, Links und Formularsteuerelemente. In diesem Abschnitt werden wir uns die grundlegenden Zugänglichkeitsüberlegungen ansehen, die bei der Erstellung solcher Steuerungen zu beachten sind. Spätere Artikel über WAI-ARIA und Multimedia werden sich mit anderen Aspekten der UI-Zugänglichkeit befassen.

Ein wesentlicher Aspekt der Zugänglichkeit von UI-Steuerungen ist, dass sie standardmäßig von Browsern mit der Tastatur manipuliert werden können. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Drücken sollten Sie sehen, dass sich der Tabfokus durch die verschiedenen fokussierbaren Elemente bewegt. Die fokussierten Elemente erhalten in jedem Browser ein hervorgehobenes Standardstil (dies unterscheidet sich geringfügig zwischen verschiedenen Browsern), sodass Sie sehen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Klicken Sie mich!", "Klicken Sie mich auch!" und "Und mich!" Auf der dritten Schaltfläche befindet sich eine blaue Umrandung als Hinweis auf den aktuellen Tabfokus.](button-focused-unfocused.png)

> [!NOTE]
> Sie können eine Überlagerung in Ihren Entwicklertools aktivieren, die die Tabulatorreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabetaste/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben einige JavaScript-Elemente hinzugefügt, damit die Schaltflächen eine Nachricht anzeigen), oder mit dem Tippen beginnen, um Text in ein Texteingabefeld einzutragen. Andere Formularelemente haben unterschiedliche Steuerungen; beispielsweise können beim {{htmlelement("select")}}-Element die Optionen mit den Pfeiltasten nach oben und unten angezeigt und durchlaufen werden.

> [!NOTE]
> Unterschiedliche Browser können unterschiedliche Tastatursteuerungsoptionen haben. Weitere Einzelheiten finden Sie unter [Verwendung der nativen Tastaturzugänglichkeit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Das bedeutet, dass Sie dieses Verhalten einfach erhalten, indem Sie die passenden Elemente verwenden, z.B.

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

Das bedeutet, Links, Buttons, Formularelemente und -labels angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Dennoch kommt es vor, dass Menschen manchmal seltsame Dinge mit HTML tun. Beispielsweise sehen Sie manchmal Buttons, die mit {{htmlelement("div")}}s ausgezeichnet werden, z.B.:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung solchen Codes wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten auch keine der Standard-CSS-Stilvorgaben, die Schaltflächen erhalten. Im seltenen bis nicht existenten Fall, dass Sie ein Nicht-Schaltflächen-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle standardmäßigen Schaltflächenverhaltensweisen, einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Dieser Vorteil wieder einzubauen, erfordert etwas Arbeit (siehe ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich über die Tabulatortaste), indem wir jedem Attribut `tabindex="0"` gegeben haben. Wir haben auch `role="button"` hinzugefügt, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und damit interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut hauptsächlich dazu gedacht, tabbbaren Elementen eine benutzerdefinierte Tabulatorreihenfolge (in positiver numerischer Reihenfolge angegeben) zu ermöglichen, anstatt sie einfach in ihrer Standard-Quellenreihenfolge zu tabben. Das ist fast immer eine schlechte Idee, da dies große Verwirrung stiften kann. Verwenden Sie es nur, wenn Sie es wirklich brauchen, beispielsweise wenn das Layout in einer sehr unterschiedlichen visuellen Reihenfolge zum Quellcode angezeigt wird und Sie die Funktionalität logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — Wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabbar sind, tabbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dadurch können normalerweise nicht tabbare Elemente programmgesteuert fokussiert werden, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns erlaubt, zu den Schaltflächen zu tabben, erlaubt sie uns nicht, sie über die <kbd>Eingabe</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende JavaScript-Tricksen hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Eingabe</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Das ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es wird damit sicherlich noch andere Probleme geben. **Besser, wenn Sie von Anfang an das richtige Element für den richtigen Job verwenden.**

#### Sinnvolle Text-Labels

UI-Steuertext-Labels sind für alle Benutzer sehr nützlich, aber besonders wichtig für Benutzer mit Behinderungen, wenn sie richtig umgesetzt werden.

Sie sollten sicherstellen, dass Ihre Button- und Linktext-Labels verständlich und deutlich sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Labels, da Screenreader-Benutzer manchmal eine Liste von Buttons und Formularsteuerelementen aufrufen. Das folgende Bildschirmfoto zeigt unsere Steuerungen, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Eingabeetiketten, die durch die VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Etiketten wie 'happy menu button`, die verschiedenen Steuerelementen wie einem Knopf, Textfeld und einem Link gegeben wurden](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Labels auch aus dem Kontext heraus, einzeln gelesen, ebenso wie im Kontext des Absatzes, in dem sie sich befinden, Sinn ergeben. Das folgende Beispiel zeigt beispielsweise einen guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber das ist ein schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können viel mehr über die Implementierung und bewährte Vorgehensweise von Links in unserem Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) finden. Gute und schlechte Beispiele können Sie auch bei [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularlabels sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Das folgende Beispiel scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für Benutzer mit Behinderungen nicht so nützlich. Es gibt nichts im obigen Beispiel, das das Label eindeutig mit der Formulareingabe verbindet und klar macht, wie es ausgefüllt werden soll, falls Sie es nicht sehen können. Wenn Sie mit einigen Screenreadern darauf zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit Code wie diesem wird das Label deutlich mit der Eingabe verknüpft; die Beschreibung wird eher wie "Füllen Sie Ihren Namen ein: Text bearbeiten" lauten.

![Ein gutes Formularlabel, das "Füllen Sie Ihren Namen ein" liest, wird zu einem Texteingabe-Formularelement gegeben.](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet in den meisten Browsern das Zuordnen eines Labels zu einer Formulareingabe, dass Sie auf das Label klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt der Eingabe einen größeren Trefferbereich und macht sie einfacher zu wählen.

> [!NOTE]
> Gute und schlechte Formularbeispiele können Sie unter [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

In folgendem Video finden Sie eine schöne Erklärung der Bedeutung von richtigen Textlabels und wie Sie Textlabel-Probleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten so zuzuordnen, dass sie als Gruppierungen von Daten identifiziert werden. Dazu müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. anführen. Dies kann nur visuell für die obige Tabelle vorgenommen werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser Beispiel [Punkbands Tabelle](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Zugänglichkeitshilfen am Werk sehen:

- Tabellenkopfzeilen werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Screenreadern als einzelne Einheiten verbraucht werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements tun beide ähnliche Aufgaben — sie fungieren als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element ist im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die ihn ebenfalls nützlich finden könnten. Sie benötigen wirklich nicht beides.

> [!NOTE]
> Unser Artikel [HTML-Tabelle erweiterte Funktionen und Zugänglichkeit](/de/docs/Learn/HTML/Tables/Advanced) bietet weitere Einzelheiten zu zugänglichen Datentabellen.

## Textalternativen

Während Textinhalt inhärent zugänglich ist, kann dasselbe nicht notwendigerweise für Multimediainhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Personen nicht gesehen werden und Audi-Inhalte können von hörgeschädigten Personen nicht gehört werden. Wir behandeln Video- und Audi-Inhalte ausführlich im [Zugängliche Multimedia](/de/docs/Learn/Accessibility/Multimedia), aber für diesen Artikel betrachten wir die Zugänglichkeit für das bescheidene {{htmlelement("img")}}-Element.

Wir haben ein einfaches Beispiel erstellt, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes zeigt:

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

Das erste Bild bietet einem Screenreader-Benutzer nicht wirklich viel Hilfe — VoiceOver liest beispielsweise "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um zu versuchen, Hilfe zu bieten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um eine Art Dinosaurier handelt, aber häufig werden Dateien möglicherweise mit maschinell generierten Dateinamen hochgeladen (z.B. von einer Digitalkamera), und diese Dateinamen würden wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten.

> [!NOTE]
> Deshalb sollten Sie nie Textinhalt in einem Bild einschließen — Screenreader können nicht darauf zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Machen Sie das einfach nicht!

Wenn ein Screenreader das zweite Bild erkennt, liest es das vollständige alt-Attribut aus — "Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen."

Dies hebt die Bedeutung hervor, nicht nur sinnvolle Dateinamen zu verwenden, falls der sogenannte **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text in `alt`-Attributen überall dort bereitgestellt wird, wo es möglich ist.

Beachten Sie, dass der Inhalt des `alt`-Attributs stets eine direkte Darstellung des Bildes und dessen visueller Aussage bieten sollte. Das alt sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen enthalten, die im umgebenden Text nicht dupliziert sind.

Der Inhalt des `alt`-Attributes für ein einzelnes Bild unterscheidet sich je nach Kontext. Wenn das Foto von Fluffy z.B. ein Avatar neben einer Rezension für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für die Tierrettungsgesellschaft ist, sollten alle Informationen, die im Bild vermittelt werden und für einen potenziellen Hundebesitzer relevant sind, enthalten sein, die nicht im umgebendenText dupliziert wurden. Eine längere Beschreibung wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich die Größe und den Rassestandard von Fluffy enthält, wird das nicht im `alt` enthalten. Da jedoch die Biografie des Hundes wahrscheinlich nicht Haarlänge, Farben oder Spielzeugpräferenzen umschließt, die der potenzielle Besitzer wissen sollte, werden diese Informationen enthalten. Ist das Bild im Freien aufgenommen, oder hat Fluffy ein rotes Halsband und eine blaue Leine? Nicht wichtig im Hinblick auf die Adoption des Tieres und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer zugreifen kann und im Kontext relevant sind, müssen vermittelt werden; nichts weiter. Halten Sie es kurz, präzise und nützlich.

Persönliche Kenntnisse oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie für Personen, die das Bild noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball das Lieblingsspielzeug von Fluffy ist oder der Sehende das nicht aus dem Bild wissen kann, dann nicht einbeziehen.

Eine Überlegung ist, ob Ihre Bilder in Ihrem Inhalt Sinn machen oder ob sie lediglich zur visuellen Dekoration dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in der Seite zu platzieren.

> [!NOTE]
> Lesen Sie [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) für viel mehr Informationen über die Implementierung von Bildern und bewährte Praktiken.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese im umgebenden Text oder in einem `title`-Attribut platzieren, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den Alt-Text, das Titelattribut und den Dateinamen aus. Zusätzlich zeigen Browser Titeltexte als Tooltips an, wenn sie mit der Maus überfahren werden.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier" als Tooltip bei Mausüberfahrt.](title-attribute.png)

Schauen wir uns noch einmal kurz die vierte Methode an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir überhaupt nicht das `alt`-Attribut — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz dargestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was dazu führt, dass Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten — etwas, was mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup einzufügen, um die Zugänglichkeit für Screenreader dort zu verbessern, wo es nötig ist. Um mehr darüber zu erfahren, wie es funktioniert, lesen Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

### Figuren und Bildunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur irgendeiner Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Es gibt gemischte Unterstützung von Screenreadern bei der Verknüpfung von Bildunterschriften mit ihren Figuren, das Hinzufügen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) schafft die Zuordnung, wenn keine vorhanden ist. Das gesagt, die Elementstruktur ist für das CSS-Styling nützlich, außerdem bietet sie eine Möglichkeit, eine Beschreibung des Bildes direkt daneben in der Quelle zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in das Design einer Seite aufgenommen wird, aber sein primärer Zweck ist die visuelle Dekoration. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll sicherstellen, dass Screenreader das Bild erkennen, aber nicht versuchen, das Bild zu beschreiben (stattdessen würden sie einfach "Bild" oder ähnlich sagen).

Der Grund für die Verwendung eines leeren `alt` statt es nicht aufzunehmen ist, dass viele Screenreader die gesamte Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel dient das Bild als visuelle Dekoration zur Überschrift, mit der es verbunden ist. In Fällen wie diesem und in Fällen, in denen ein Bild nur dekorativ und von keinem Wert für den Inhalt ist, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einschließen. Eine andere Alternative ist, das aria [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attribut [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) zu verwenden, da dies auch verhindert, dass Screenreader alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), je nachdem wie sie verwendet werden, können die Zugänglichkeit verbessern oder verschlechtern. Standardmäßig sind Links im Aussehen zugänglich. Sie können die Zugänglichkeit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch die Zugänglichkeit beeinträchtigen, wenn ihre zugängliche Gestaltung entfernt oder wenn durch JavaScript unerwartete Verhaltensweisen verursacht werden, die auftreten.

### Link-Styling

Standardmäßig sind Links optisch anders als anderer Text sowohl in der Farbe als auch in [text-decoration](/de/docs/Web/CSS/text-decoration), mit Links, die standardmäßig blau und unterstrichen sind, violett und unterstrichen, wenn sie besucht wurden, und mit einem [Focus-Ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einzige Methode verwendet werden, um Verknüpfungen von nicht verknüpften Inhalten zu unterscheiden. Die Linktextfarbe, wie jeder Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Verhältnis von 4.5:1 im Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant anders sein als nicht verknüpfter Text, mit einem Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, besuchten und Fokus/Aktiv States und einem 4.5:1 Kontrast zwischen all diesen State-Farben und der Hintergrundfarbe.

### `onclick` Ereignisse

Ankertags werden oft mit dem `onclick`-Event missbraucht, um Pseudo-Schaltflächen zu erstellen, indem sie **href** auf `"#"` oder `"javascript:void(0)"` setzen, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Lesezeichen setzen und wenn JavaScript noch heruntergeladen wird, Fehler auftreten oder deaktiviert ist. Dies vermittelt auch falsche Semantik an Hilfstechnologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur ein Anker für die Navigation mit einer ordnungsgemäßen URL verwenden.

### Externe Links und Verknüpfung zu nicht-HTML Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden und Links, deren `href`-Wert auf eine Dateiresource verweist, sollten einen Hinweis auf das Verhalten beinhalten, das bei Aktivierung des Links auftreten wird.

Menschen, die aufgrund niedriger Sehzustände navigieren oder die Hilfe einer Screenreader-Technologie benötigen oder kognitive Bedenken haben, können verwirrt werden, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreader-Software kündigen das Verhalten möglicherweise nicht einmal an.

#### Link, die einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link zu einer nicht-HTML Ressource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

Wenn ein Symbol verwendet wird, um dieses Verhalten von Links anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis für WCAG, Erklärung der Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs von einem Link nur, wenn notwendig | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch bekannt als skipnav, ist ein `a`-Element, das so nah wie möglich zur Eröffnung des {{HTMLElement("body")}}-Elements platziert wird und zum Beginn des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, wiederkehrende Inhalte innerhalb mehrerer Seiten einer Website, wie die Kopfzeile und die Hauptnavigationsleiste einer Website, zu überspringen.

Skip-Links sind besonders nützlich für Menschen, die Navigationshilfstechnologien wie Schaltersteuerung, Sprachbefehle oder Mundsticks/Kopfstäbe verwenden, wo das Durchlaufen von wiederkehrenden Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip-Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip Navigation-Links - Das A11Y Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis für WCAG, Erklärung der Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.1 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Anker — die in naher visueller Nähe zueinander platziert sind, sollten mit Abstand zur Trennung versehen werden. Dieser Abstand ist vorteilhaft für Menschen, die an Feinmotorikproblemen leiden und möglicherweise versehentlich die falschen interaktiven Inhalte aktivieren, während sie navigieren.

Der Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} generiert werden.

- [Handzittern und das Riesenknopfproblem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sehen Sie sich [Testen Sie Ihre Fähigkeiten: HTML Zugänglichkeit](/de/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility) an, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten jetzt in der Lage sein, zugängliches HTML für die meisten Gelegenheiten zu schreiben. Unser Artikel über die Grundlagen von WAI-ARIA wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen abgedeckt. Als nächstes werden wir CSS und JavaScript erkunden und wie deren gute oder schlechte Verwendung die Zugänglichkeit beeinträchtigt.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
