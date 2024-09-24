---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Ein großer Teil der Webinhalte kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language Elemente stets für den richtigen Zweck verwendet werden. Dieser Artikel beschreibt ausführlich, wie HTML zur Sicherstellung maximaler Barrierefreiheit genutzt werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis von
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den HTML-Funktionen zu erlangen, die Barrierefreiheitsvorteile
        bieten und zu lernen, wie sie angemessen in Ihren Webdokumenten verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — weitere Ressourcen lesen, mehr Beispiele ansehen usw. — werden Sie immer wieder ein gemeinsames Thema sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH, oder Plain Old Semantic HTML genannt). Dies bedeutet, dass die korrekten HTML-Elemente so weit wie möglich für ihren vorgesehenen Zweck verwendet werden.

Sie könnten sich fragen, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um nahezu jedes HTML-Element so funktionieren zu lassen, wie Sie es möchten. Beispielsweise könnte ein Steuerungsbutton, um ein `<video>` auf Ihrer Website abzuspielen, wie folgt markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie später noch genauer sehen werden, macht es Sinn, das richtige Element für die jeweilige Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur einige geeignete Standardformatierungen (die Sie wahrscheinlich überschreiben möchten), sie besitzen auch eingebaute Tastaturzugänglichkeit — Benutzer können zwischen Buttons mit der <kbd>Tab</kbd>-Taste navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML ist nicht aufwendiger zu schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsistent umsetzen. Noch besser, semantisches Markup bietet neben der Barrierefreiheit weitere Vorteile:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionalitäten kostenlos, außerdem ist es arguably einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist arguably leichter in der Dateigröße als nicht-semantischer Spaghetticode, und einfacher zu reagieren.
3. **Gut für SEO** — Suchmaschinen gewichten Schlüsselwörter in Überschriften, Links usw. höher als Schlüsselwörter in nicht-semantischen `<div>`s usw., sodass Ihre Dokumente von Kunden besser auffindbar sind.

Lassen Sie uns nun die zugängliche Verwendung von HTML im Detail betrachten.

> [!NOTE]
> Es ist eine gute Idee, einen Screenreader auf Ihrem lokalen Computer einzurichten, damit Sie einige der unten gezeigten Beispiele testen können. Weitere Informationen finden Sie in unserem [Screenreader-Leitfaden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers).

## Gute Semantik

Wir haben bereits über die Bedeutung der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die jeweilige Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Barrierefreiheit stark eingeschränkt wird, wenn sie nicht korrekt behandelt wird.

Im Internet ist es leider so, dass Menschen sehr seltsame Dinge mit HTML-Markup tun. Einige Missbräuche von HTML resultieren aus veralteten Praktiken, die nicht vollständig vergessen wurden, und andere beruhen schlicht auf Unwissenheit. Welche Ursache auch immer dahinter steckt, Sie sollten solch schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup zu entfernen — Ihre Seiten können von einer Art serverseitigem Framework generiert werden, über das Sie keine vollständige Kontrolle haben, oder es gibt Drittinhalte auf Ihrer Seite (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, wird zur Barrierefreiheit beitragen.

### Textinhalte

Eine der besten Hilfen für einen Screenreader-Benutzer ist eine hervorragende Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte in etwa wie das folgende aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, durch dieses zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift vor, wenn Sie sich durch den Inhalt bewegen, und zeigt an, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element, sodass Sie in Ihrem eigenen Tempo weitermachen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften aufrufen, sodass Sie diese als praktische Inhaltsangabe verwenden können, um bestimmte Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente nur für das Styling hinzu, ähnlich wie im Folgenden:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung haben — der Screenreader hat keine Wegweiser, sodass Sie keine nützliche Inhaltsangabe abrufen können, und die gesamte Seite wird als ein einziger großer Block gesehen, der in einem einzigen Stück und ohne Pause komplett ausgegeben wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da es keine Elemente zum Auswählen gibt.

#### Verwendung klarer Sprache

Auch die Sprache, die Sie verwenden, kann die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie eine klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachjargons oder Slang-Ausdrücke enthält. Dies ist nicht nur für Menschen mit kognitiven oder anderen Beeinträchtigungen von Vorteil; es hilft auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen… eigentlich jedem! Abgesehen davon sollten Sie vermeiden, Sprache und Zeichen zu verwenden, die vom Screenreader nicht klar vorgelesen werden. Beispielsweise:

- Vermeiden Sie nach Möglichkeit Bindestriche. Statt „5–7“ schreiben Sie „5 bis 7“.
- Schreiben Sie Abkürzungen aus — anstatt „Jan“ zu schreiben, schreiben Sie „Januar“.
- Schreiben Sie Akronyme zumindest ein- oder zweimal aus und verwenden Sie dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Tagen haben Menschen Seitenlayouts mit HTML-Tabellen erstellt — verschiedenen Tabellenzellen, die den Header, Fußzeilen, die Seitenleiste, die Hauptinhaltsspalte usw. enthalten. Das ist keine gute Idee, weil ein Screenreader wahrscheinlich verwirrende Ausgaben liefert, insbesondere wenn das Layout komplex ist und viele verschachtelte Tabellen aufweist.

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

Wenn Sie versuchen, mit einem Screenreader zu navigieren, wird er Ihnen wahrscheinlich mitteilen, dass eine Tabelle betrachtet werden kann (obwohl einige Screenreader den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Abhängig davon, welchen Screenreader Sie verwenden, müssen Sie wahrscheinlich in die Tabelle hinein- und wieder herausgehen, um ihren Inhalt durchzunavigieren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie machten Sinn, als CSS-Unterstützung in Browsern nicht weit verbreitet war, aber jetzt verwirren sie nur Benutzer von Screenreadern. Zusätzlich erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwerer zu warten macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Strukturbeispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das in etwa so aussehen könnte:

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

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr mit dem Inhalt kollidiert oder Verwirrung stiftet. Es ist auch viel schlanker und kleiner in Bezug auf die Codegröße, was bedeutet, dass der Code leichter zu warten ist und weniger Bandbreite benötigt, was insbesondere für Benutzer mit langsamen Verbindungen von Vorteil ist.

Ein weiterer Gesichtspunkt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie in dem obigen Beispiel zu sehen (siehe [Inhalts-Sektionierung](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Sektionierungselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu umschließen. Diese bieten zusätzlichen Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise über die Inhalte zu geben, die sie durchsehen (siehe [Screen Reader-Unterstützung für neue HTML5-Abschnittselemente](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/), um einen Überblick über die Unterstützung von Screenreadern zu bekommen).

> [!NOTE]
> Zusätzlich zu einer guten Semantik und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quelldarstellung logisch Sinn machen — Sie können ihn später immer mit CSS an den gewünschten Ort verschieben, aber Sie sollten von Anfang an die richtige Quelldarstellung wählen, damit das, was den Benutzern von Screenreadern vorgelesen wird, sinnvoll ist.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptelemente, mit denen Benutzer auf Webdokumenten interagieren — meist Tasten, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreiheitsaspekte, die bei der Erstellung solcher Steuerelemente zu beachten sind. Spätere Artikel über WAI-ARIA und multimediale Inhalte werden weitere Aspekte der UI-Barrierefreiheit beleuchten.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist die Tatsache, dass Browser standardmäßig deren Manipulation über die Tastatur ermöglichen. Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Drücken sollten Sie sehen, dass der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente werden in jedem Browser mit einem hervorgehobenen Standardstil angezeigt (der sich je nach Browser leicht unterscheidet), damit Sie erkennen können, welches Element derzeit fokussiert ist.

![Drei Schaltflächen mit den Texten "Click me!", "Click me too!" und "And me!" sind in ihnen enthalten. Die dritte Schaltfläche hat einen blauen Umriss, der auf den aktuellen Tab-Fokus hinweist.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatorreihenfolge der Seite in Ihren Entwicklerwerkzeugen anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder auf einen Button zu drücken (wir haben JavaScript eingefügt, damit die Buttons eine Nachricht zeigen), oder beginnen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungen; beispielsweise kann das {{htmlelement("select")}}-Element seine Optionen mit den Pfeiltasten nach oben und unten anzeigen und durchgehen.

> [!NOTE]
> Unterschiedliche Browser haben unterschiedliche Tastatursteuerungsoptionen. Weitere Informationen finden Sie unter [Using native keyboard accessibility](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Dieses Verhalten erhalten Sie im Grunde umsonst, indem Sie die entsprechenden Elemente verwenden, z.B.

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

Das bedeutet, dass Sie Links, Schaltflächen, Formularelemente und Labels angemessen verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Es kommt jedoch gelegentlich vor, dass Menschen seltsame Dinge mit HTML tun. Zum Beispiel sehen Sie manchmal Buttons, die mit {{htmlelement("div")}}s gekennzeichnet sind, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Es wird jedoch nicht empfohlen, solch einen Code zu verwenden — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie hätten, wenn Sie einfach die {{htmlelement("button")}}-Elemente verwendet hätten, zusätzlich zu einem Verzicht auf jegliche CSS-Voreinstellung, die mit Schaltflächen geliefert werden. In dem seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Button-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle Standard-Button-Funktionen, einschließlich Tastatur- und Mausklick-Unterstützung.

#### Tastaturzugänglichkeit wiederherstellen

Das Hinzufügen solcher Vorteile erfordert etwas Aufwand (ein Beispiel finden Sie in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel — zudem sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>` Buttons die Fähigkeit gegeben, fokussiert zu werden (einschließlich der Fokussteuerung durch Tabulator) durch den Zusatz jedes Buttons mit dem Attribut `tabindex="0"`. Wir fügen auch `role="button"` hinzu, damit Benutzer von Screenreadern wissen, dass sie sich auf das Element fokussieren und damit interagieren können:

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

Im Grunde ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut vor allem dazu gedacht, fokussierbare Elemente eine benutzerdefinierte Tabulatorreihenfolge (angegeben in positiver numerischer Reihenfolge) zu geben, anstatt nur in ihrer Standardquelle durchgebtabt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich müssen; zum Beispiel, wenn das Layout Dinge in einer sehr anderen visuellen Reihenfolge darstellt als im Quellcode, und Sie wollen, dass Dinge logischer funktionieren. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert, dass nicht normal fokussierbare Elemente fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht es, dass nicht normal fokussierbare Elemente programmatisch fokussiert werden, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns erlaubt, zu den Buttons zu tabulatorn, ermöglicht sie uns nicht, sie mit der <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir ein bisschen JavaScript-Täuschung hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion im `onclick` Handler des Buttons mithilfe von `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das fokussierte Element auf der Seite zurück.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es wird wahrscheinlich weitere Probleme geben. **Besser, direkt das richtige Element für die richtige Aufgabe zu verwenden.**

#### Aussagekräftige Textbeschriftungen

Textbeschriftungen von UI-Steuerelementen sind sehr nützlich für alle Benutzer, aber ihre korrekte Verwendung ist besonders wichtig für Benutzer mit Behinderungen.

Sie sollten sicherstellen, dass Ihre Button- und Linktextbeschriftungen verständlich und eindeutig sind. Verwenden Sie nicht einfach "Click here" für Ihre Beschriftungen, da Benutzer von Screenreadern manchmal eine Liste von Buttons und Formularelementen anzeigen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formularfeldbeschriftungen, die von VoiceOver-Software auf einem Mac gelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie "happy menu button", die verschiedenen Formularsteuerungen wie Button, Textfeld und Link gegeben sind.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Zusammenhang heraus Sinn ergeben, wenn sie alleine gelesen werden, sowie im Kontext des Absatzes, in dem sie sich befinden. Ein gutes Beispiel für Linktext finden Sie im Folgenden:

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
> Sie finden viel mehr über die Implementierung von Links und Best Practices in unserem Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). Sie können auch einige gute und schlechte Beispiele auf [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind auch wichtig, um Ihnen einen Hinweis darauf zu geben, was in jedes Formularelement eingegeben werden muss. Das folgende Beispiel scheint vernünftig genug zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch für behinderte Benutzer nicht hilfreich. Im obigen Beispiel gibt es nichts, das das Label eindeutig mit dem Formulareingabefeld verbindet und klarstellt, wie es ausgefüllt werden kann, wenn man es nicht sehen kann. Wenn Sie auf einige Screenreadern darauf zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "edit text".

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit einem solchen Code wird das Label eindeutig mit dem Eingabefeld verbunden; die Beschreibung wird eher so etwas sein wie "Füllen Sie Ihre Namen ein: edit text."

![Ein gutes Formularfeld, das "Füllen Sie Ihren Namen ein" lautet, wird einem Texteingabeformularsteuerung zugeordnet. ](voiceover-good-form-label.png)

Ein zusätzlicher Bonus ist, dass Sie in den meisten Browsern, wenn Sie ein Label mit einem Formulareingabefeld verknüpfen, das Label anklicken können, um das Eingabefeld zu markieren oder zu aktivieren. Dies sorgt für einen größeren Trefferbereich und erleichtert das Auswählen.

> [!NOTE]
> Sie können gute und schlechte Formulare in den Beispielen [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung der Bedeutung von korrekten Textlabels und wie man Textlabelprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, in dem folgenden Video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Barrierefreie Tabellen

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Benutzer eines Screenreaders, Zeilen oder Spalten als Gruppierungen von Daten zu assoziieren. Dazu müssen Sie wissen, welches die Kopfzeilenzeilen sind und ob sie Zeilen oder Spalten überschreiben. Dies kann im obigen Beispiel nur visuell erkannt werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Schauen Sie sich jetzt unser [Punk Bands Tisch Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können dort einige Barrierefreiheitsmaßnahmen am Werk sehen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen komplette Datengruppen, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements machen im Wesentlichen das gleiche — sie fungieren als Alt-Text für eine Tabelle und geben einem Benutzer eines Screenreaders eine nützliche Zusammenfassung der Tabelleninhalte. Das `<caption>`-Element wird allgemein bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie benötigen nicht unbedingt beides.

> [!NOTE]
> Weitere Informationen zu fortgeschrittenen HTML-Taschen-Funktionen und Barrierefreiheit finden Sie in unserem Artikel [HTML table advanced features and accessibility](/de/docs/Learn/HTML/Tables/Advanced).

## Textalternativen

Während textbasierte Inhalte inhärent barrierefrei sind, kann dasselbe nicht von multimedialen Inhalten gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiowiedergaben können nicht von hörgeschädigten Menschen gehört werden. Wir betrachten Video- und audiobasierte Inhalte ausführlich in [Barrierefreie Multimedia](/de/docs/Learn/Accessibility/Multimedia), aber für diesen Artikel betrachten wir die Barrierefreiheit für das schlichte {{htmlelement("img")}}-Element.

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

Das erste Bild bietet dem Benutzer eines Screenreaders nicht wirklich viel Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, Bild" vor. Es liest den Dateinamen vor, um er versuchen, Hilfe zu leisten. In diesem Beispiel weiß der Benutzer zumindest, dass es sich um einen Dinosaurier handelt, oft werden jedoch Dateien mit maschinell generierten Dateinamen (z.B. von einer Digitalkamera) hochgeladen, und diese Dateinamen bieten wahrscheinlich keinen Kontext zu dem, was das Bild darstellt.

> [!NOTE]
> Daher sollten Sie niemals Textinformationen in einem Bild enthalten — Screenreader können darauf nicht zugreifen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, liest er das gesamte `alt`-Attribut — „Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen.“

Dies unterstreicht die Bedeutung sowohl der Verwendung aussagekräftiger Dateinamen, falls der so genannte **alt Text** nicht verfügbar ist, als auch die Sicherstellung, dass der alt Text in `alt` Attributen wann immer möglich bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes sein und das visuell übermittelte beschreiben. Der `alt` Text sollte prägnant und klar sein und alle Informationen enthalten, die das Bild übermittelt, die nicht in den umgebenden Text dupliziert werden.

Der Inhalt des `alt` Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Wenn zum Beispiel das Foto von Fluffy ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptivseite für die Tierschutzgesellschaft ist, sollte die Bildbeschreibung Informationen enthalten, die für einen potentiellen Hundebesitzer im Bild relevant sind und nicht in den umgebenden Texten dupliziert werden. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`, ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse hat, werden diese nicht im `alt` aufgenommen. Da die Biografie wahrscheinlich keine Haarlänge, Farben oder Spielzeugpräferenzen enthält, die Informationen, die der potenzielle Besitzer benötigt, sind diese enthalten. Ist das Bild im Freien oder Fluffy hat ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustieres und daher nicht enthalten. Alle Information, die das Bild übermittelt, die ein sehender Benutzer sehen kann und im Kontext relevant ist, muss übermittelt werden; nichts mehr. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht hinzugefügt werden, da sie für Personen, die das Bild noch nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder ein sehender Benutzer das nicht vom Bild sehen kann, dann schließen Sie es nicht ein.

Eine Sache zu beachten ist, ob Ihre Bilder innerhalb des Inhalts eine Bedeutung haben oder ob sie rein zur visuellen Dekoration gedacht sind und daher keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt` Attribut hinzuzufügen (siehe [leere `alt` Attribute](#leere_`alt`_attribute)), oder einfach als CSS Hintergrundbilder auf der Seite zu platzieren.

> [!NOTE]
> Lesen Sie [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) für viele weitere Informationen zur Implementierung von Bildern und Best Practices.

Wenn Sie zusätzliche kontextuelle Informationen geben möchten, sollten Sie es in den umgebenden Text des Bildes oder einem `title` Attribut hinzufügen, wie oben gezeigt. In diesem Fall werden die meisten Screenreadern den Alt Text, das `title` Attribut und den Dateinamen vorlesen. Zusätzlich zeigen die Browser den Titeltext als Tooltips an, wenn über ihn der Mauszeiger bewegt wird.

![Screenshot von einem roten Tyrannosaurus Rex mit dem Tooltip Text "The mozilla red dinosaur" auf der Mouseover-Position.](title-attribute.png)

Lassen Sie uns einen weiteren kurzen Blick auf die vierte Methode werfen:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als gewöhnlichen Textabsatz dargestellt, ihm eine `id` gegeben und dann das `aria-labelledby` Attribut verwendet, um auf diese `id` zu referenzieren, welches Screenreadern ermöglicht, diesen Absatz als Alt Text/Beschriftung für dieses Bild zu nutzen. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spezifikation, die es Entwicklern erlaubt, zusätzliche Semantik in ihren Code einzufügen, um die Barrierefreiheit mit Screenreadern dort zu verbessern, wo es notwendig ist. Um mehr darüber zu erfahren, wie dies funktioniert, lesen Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

### Figuren und Abbildungstitel

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Figur jeglicher Art (es könnte ebenso etwas anderes als ein Bild sein) mit einem Abbildungstitel verbinden:

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

Während die Unterstützung von Screenreadern zur Verknüpfung von Abbildungstiteln mit ihren Figuren gemischt ist, schafft die Eingabe von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) die Verbindung, falls keine vorhanden ist. Dennoch ist die Elementstruktur nützlich für CSS-Styling, und sie bietet eine Möglichkeit, eine Beschreibung neben dem Bild im Quelltext abzulegen.

### Leere `alt` Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es könnte Zeiten geben, in denen ein Bild in das Design einer Seite als rein visueller Schmuck eingefügt wird. Sie werden in dem obigen Beispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies ist, um Screenreader zu signalisieren, dass es als einen alternativen Text darzustellen gibt, zu ignorieren, aber nicht zu ignorieren (statt "Bild", oder ähnliches zu verkünden).

Der Grund, eine leeres `alt`-Attribut anzugehen, anstatt es nicht zu inkludieren, liegt darin, dass viele Screenreader die gesamte Bild-URL ansagen, wenn kein `alt` bereitgestellt wird. In dem obigen Beispiel funktioniert das Bild als visueller Schmuck für die Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild nur dekorativ ist und keinen Inhaltswert hat, sollten Sie in Ihrem `img`-Element ein leeres `alt` aufnehmen. Eine andere Möglichkeit ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), da dies ebenfalls die Ansage des Alternativtextes durch Screenreader verhindert.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder nur zur Dekoration darzustellen.

## Mehr über Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a) Element mit einem `href` Attribut), abhängig davon, wie sie verwendet werden, können die Barrierefreiheit verbessern oder beeinträchtigen. Standardmäßig sind Links in der Darstellung barrierefrei. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch die Barrierefreiheit beeinträchtigen, wenn ihre zugängliche Gestaltung entfernt wird oder wenn JavaScript verursacht, dass sie sich auf unerwartete Weise verhalten.

### Linkgestaltung

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch in [Textdekoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn besucht, und mit einem [Fokus-Ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als alleiniges Mittel verwendet werden, um Links von nichtverlinkten Inhalten zu unterscheiden. Die Farbintensität von Linktext, wie bei allen Texten, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein Verhältnis von 4,5:1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell deutliche Unterschiede vom umgebenden Text aufweisen, mit einem Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen den Zuständen "Standard", "Besucht" und "Focus/Aktiv" und einem 4,5:1 Kontrast zwischen allen Farben dieser Zustände und der Hintergrundfarbe.

### `onclick` Ereignisse

Anker-Tags werden häufig mit dem `onclick` Ereignis missbraucht, um Pseudo-Tasten zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um das Aktualisieren der Seite zu verhindern.

Diese Werte führen zu unerwartetem Verhalten, wenn Links kopiert oder gezogen, in einem neuen Tab oder Fenster geöffnet, als Lesezeichen verwendet oder wenn JavaScript noch heruntergeladen wird, Fehler auftritt oder deaktiviert ist. Dies vermittelt auch falsche Semantik an Hilfstechnologien (z.B. Screenreader). In solchen Fällen wird empfohlen, statt eines Anker-Tags eine {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie ein Anker-Tag nur für die Navigation mit einer URL verwenden.

### Externe Links und Verlinkung auf Nicht-HTML Ressourcen

Links, die über die `target="_blank"` Deklaration in einem neuen Tab oder Fenster geöffnet werden und Links, deren `href` Wert auf eine Dateiressource verweist, sollten einen Hinweis enthalten, welches Verhalten auftritt, wenn der Link aktiviert wird.

Menschen mit Sehbehinderungen, die mit Hilfe von Screenreadernavigationen navigieren, oder kognitiven Anliegen können verwirrt werden, wenn das neue Tab, Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Screenreading-Software verkünden möglicherweise überhaupt nicht den bereitgestellten Aufruf.

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

Wenn ein Symbol anstelle von Text verwendet wird, um das Verhalten solcher Links zu signalisieren, stellen Sie sicher, dass eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthalten ist.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Über das Verstehen von WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine Warnung geben, wenn ein neues Fenster geöffnet wird | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch bekannt als skipnav, ist ein `a`-Element, das so nah wie möglich an das Öffnen des {{HTMLElement("body")}} Elements platziert wird und zum Anfang des Hauptinhalts der Seite verlinkt. Dieser Link erlaubt es den Menschen, wiederholte Inhalte auf mehreren Seiten einer Website, wie das Header und die Hauptnavigation der Website, zu überspringen.

Sprunglinks sind besonders nützlich für Personen, die mit Hilfe von unterstützenden Technologien wie Steuerung über Schalter, Sprachsteuerung oder Mundstücken / Kopfstäben navigieren, wo die Bewegung durch sich wiederholende Links ein mühsamer Vorgang sein kann.

- [WebAIM: "Navigation überspringen" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden Sie Sprunglinks - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiver Inhalte — einschließlich Anker — in unmittelbarer Nähe voneinander sollten durch Einfügen von Abstand getrennt werden. Diese Abstände sind für Menschen von Vorteil, die an motorischen Feinsteuerungsstörungen leiden und beim Navigieren versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können unter Verwendung von CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handtremoren und das Problem mit riesigen Tasten - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie die wichtigsten Informationen noch erinnern? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML Barrierefreiheit](/de/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun gut mit dem Schreiben von barrierefreiem HTML für die meisten Gelegenheiten vertraut sein. Unser Artikel Grundlagen von WAI-ARIA wird helfen, Lücken in diesem Wissen zu schließen, aber dieser Artikel hat die Grundlagen behandelt. Als nächstes werden wir CSS und JavaScript erkunden und wie ihre gute oder schlechte Verwendung die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
