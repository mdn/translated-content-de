---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Ein großer Teil des Webinhalts kann barrierefrei gemacht werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language-Elemente zu jeder Zeit für den richtigen Zweck verwendet werden. Dieser Artikel untersucht ausführlich, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis dafür,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den Funktionen von HTML zu erlangen, die Vorteile im Bereich Barrierefreiheit haben, und wie Sie diese angemessen in Ihren Web-Dokumenten verwenden.
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — werden Sie ein zentrales Thema immer wieder sehen: die Bedeutung der Verwendung von semantischem HTML (manchmal auch POSH oder Plain Old Semantic HTML genannt). Das bedeutet, dass nach Möglichkeit die richtigen HTML-Elemente für den vorgesehenen Zweck verwendet werden.

Sie könnten sich fragen, warum dies so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element so verhalten lassen, wie Sie es möchten. Zum Beispiel könnte ein Steuerungsknopf, um ein Video auf Ihrer Seite abzuspielen, so ausgezeichnet werden:

```html
<div>Play video</div>
```

Aber wie Sie später ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur eine passende Styling-Voreinstellung (die Sie wahrscheinlich übersteuern möchten), sondern auch eine integrierte Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Buttons navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML benötigt nicht länger zum Schreiben als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsequent tun. Noch besser ist, dass semantisches Markup über die Barrierefreiheit hinaus weitere Vorteile hat:

1. **Einfacher zu entwickeln** — wie oben erwähnt, erhalten Sie einige Funktionen kostenlos dazu, außerdem ist es wohl einfacher zu verstehen.
2. **Besser auf Mobilgeräten** — semantisches HTML ist in der Regel leichter von der Dateigröße her als nicht-semantischer spaghetti code und einfacher responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen gewichten Schlüsselwörter in Überschriften, Links usw. stärker als Schlüsselwörter in nicht-semantischen `<div>`s usw., sodass Ihre Dokumente von Kunden leichter gefunden werden.

Schauen wir uns nun barrierefreies HTML im Detail an.

> [!NOTE]
> Es ist eine gute Idee, einen Screenreader auf Ihrem lokalen Computer einzurichten, damit Sie einige der unten gezeigten Beispiele testen können. Siehe unseren [Screenreader-Leitfaden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für mehr Details.

## Gute Semantik

Wir haben bereits über die Bedeutung richtiger Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da es einer der Hauptbereiche ist, in denen die Barrierefreiheit stark beeinträchtigt wird, wenn nicht ordnungsgemäß behandelt.

Im Web machen Menschen die Wahrheit, dass viele sehr seltsame Dinge mit HTML-Markup tun. Einige Missbräuche von HTML beruhen auf alten Praktiken, die nicht vollständig in Vergessenheit geraten sind, und andere sind einfach aus Unwissenheit. In jedem Fall sollten Sie solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup loszuwerden — Ihre Seiten könnten von einem serverseitigen Framework generiert werden, über das Sie nicht die volle Kontrolle haben, oder Sie könnten Drittinhalte auf Ihrer Seite haben (wie z.B. Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "Alles oder Nichts"; jeder Verbesserung, die Sie machen können, wird helfen, die Barrierefreiheit zu verbessern.

### Textinhalt

Eine der besten Hilfen für die Barrierefreiheit, die ein Screenreader-Benutzer haben kann, ist eine ausgezeichnete Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte etwa folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text für Sie vorbereitet, um sie mit einem Screenreader auszuprobieren (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, sich dadurch zu navigieren, werden Sie feststellen, dass es ziemlich einfach zu navigieren ist:

1. Der Screenreader liest jede Überschrift aus, während Sie den Inhalt durchgehen, und teilt Ihnen mit, was eine Überschrift ist, was ein Absatz ist usw.
2. Er hält nach jedem Element an, sodass Sie in einem für Sie angenehmen Tempo vorgehen können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften erstellen, mit deren Hilfe Sie diese als praktische Inhaltsverzeichnis verwenden können, um spezifische Inhalte zu finden.

Menschen schreiben manchmal Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente rein für das Styling ein, etwa so etwas:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, um als Wegweiser zu dienen, sodass Sie kein nützliches Inhaltsverzeichnis abrufen können, und die gesamte Seite wird als einzelner riesiger Block wahrgenommen, sodass sie einfach in einem Rutsch komplett vorgelesen wird.

Es gibt auch andere Probleme abseits der Barrierefreiheit — es ist schwerer, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, weil es keine Elemente gibt, die als Selektoren verwendet werden können.

#### Klare Sprache verwenden

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Jargon- oder Slang-Ausdrücke enthält. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es kommt Lesern zugute, für die der Text nicht in ihrer Erstsprache geschrieben ist, jüngeren Menschen…, allen, in der Tat! Abgesehen davon sollten Sie versuchen, den Gebrauch von Sprache und Zeichen zu vermeiden, die vom Screenreader nicht klar vorgelesen werden. Zum Beispiel:

- Vermeiden Sie es, Striche zu verwenden, wenn Sie können. Statt „5–7“ zu schreiben, schreiben Sie „5 bis 7“.
- Abkürzungen ausschreiben — statt „Jan“ zu schreiben, schreiben Sie „Januar“.
- Abkürzungen einige Male ausschreiben und dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag verwenden, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Zeiten erstellten Leute Seitenlayouts mit HTML-Tabellen – indem sie verschiedene Tabellenspalten verwendeten, um den Header, Footer, die Seitenleiste, die Hauptinhaltsspalte usw. zu enthalten. Dies ist keine gute Idee, weil ein Screenreader wahrscheinlich verwirrende Ausgaben liefert, insbesondere wenn das Layout komplex ist und viele verschachtelte Tabellen hat.

Probieren Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) aus, das etwa so aussieht:

```html
<table width="1200">
  <!-- Hauptüberschriftenzeile -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- Navigationsmenüzeile -->
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
  <!-- Platzhalterzeile -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- Hauptinhalt- und Nebenspaltenzeile -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- Hauptinhalt geht hier -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- Nebeninhalt geht hier -->
    </td>
  </tr>
  <!-- Platzhalterzeile -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- Fußzeile -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird dieser Ihnen wahrscheinlich sagen, dass es eine Tabelle zu betrachten gibt (obwohl einige Screenreader zwischen Tabellenlayouts und Datentabellen unterscheiden können). Sie müssen dann wahrscheinlich (abhängig davon, welchen Screenreader Sie verwenden) in die Tabelle als Objekt hinab und ihre Merkmale separat betrachten, dann aus der Tabelle heraus, um mit der Navigation der Inhalte fortzufahren.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie machten Sinn, als CSS-Unterstützung in Browsern nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Screenreader-Benutzer. Außerdem erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwieriger zu warten macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Strukturbeispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das etwa so aussehen könnte:

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- Hauptnavigation hier -->
</nav>

<!-- Hier ist der Hauptinhalt unserer Seite -->
<main>
  <!-- Es enthält einen Artikel -->
  <article>
    <h2>Article heading</h2>

    <!-- Artikelinhalt hier -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- Nebeninhalt hier -->
  </aside>
</main>

<!-- Und hier ist unsere Hauptfußzeile, die auf allen Seiten unserer Website verwendet wird -->

<footer>
  <!-- Fußzeileninhalt hier -->
</footer>
```

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht länger den Inhalt verwirrt oder in der Ausgabe durcheinander bringt. Zudem ist es schlanker und kleiner in Bezug auf den Code, was bedeutet, dass der Code einfacher zu warten ist und weniger Bandbreite benötigt, damit Benutzer ihn herunterladen können, was besonders für diejenigen mit langsamen Verbindungen von Vorteil ist.

Eine weitere Überlegung bei der Erstellung von Layouts ist die Verwendung von HTML-Semantikelementen, wie im obigen Beispiel gezeigt (siehe [Inhaltsgliederung](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Gliederungselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu kapseln. Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise zu den Inhalten zu geben, die sie navigieren (siehe [Screenreader-Unterstützung für neue HTML5-Bereichelemente](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung von der Screenreader-Unterstützung).

> [!NOTE]
> Zusätzlich zur guten Semantik und einem attraktiven Layout sollte Ihr Inhalt in seiner Quellreihenfolge einen logischen Sinn ergeben — Sie können ihn später immer mit Hilfe von CSS an die gewünschte Stelle setzen, aber Sie sollten von Anfang an die Quellreihenfolge richtig haben, sodass das, was Screenreader-Benutzer vorgelesen bekommen, Sinn ergibt.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptbestandteile von Webdokumenten, mit denen Benutzer interagieren — am häufigsten Buttons, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreiheitsprobleme, auf die man achten sollte, wenn man solche Steuerelemente erstellt. In späteren Artikeln über WAI-ARIA und Multimedia werden weitere Aspekte der Zugänglichkeit von Benutzeroberflächen behandelt.

Ein wichtiger Aspekt der Barrierefreiheit von UI-Steuerelementen ist, dass Browser standardmäßig erlauben, sie über die Tastatur zu manipulieren. Sie können dies ausprobieren, indem Sie unser Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) verwenden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Drücken sollten Sie feststellen, dass der Tabfokus beginnt, durch die verschiedenen fokussierbaren Elemente zu wechseln. Die fokussierten Elemente erhalten in jedem Browser eine hervorgehobene Standardstilierung (sie unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Buttons mit dem Text "Click me!", "Click me too!" und "And me!" in ihnen jeweils. Der dritte Button hat einen blauen Umriss, um den aktuellen Tabfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> Sie können in Ihren Entwickler-Tools eine Überlagerung aktivieren, die die Tabulator-Reihenfolge der Seite anzeigt. Für mehr Informationen siehe: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um einen fokussierten Link zu folgen oder einen Button zu drücken (wir haben etwas JavaScript hinzugefügt, das den Buttons eine Nachricht zur Bestätigung ausgibt), oder beginnen zu tippen, um Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerungsmöglichkeiten; beispielsweise kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Aufwärts- und Abwärtspfeiltasten durchlaufen lassen.

> [!NOTE]
> Verschiedene Browser können unterschiedliche Tastatursteuerungsoptionen verfügbar haben. Für mehr Details siehe [Verwendung der nativen Tastaturzugänglichkeit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Sie erhalten dieses Verhalten im Wesentlichen kostenlos, nur durch die Verwendung der geeigneten Elemente, z.B.

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

Das bedeutet, dass Sie Links, Buttons, Formularelemente und Beschriftungen korrekt verwenden sollten (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Es passiert jedoch auch wieder, dass Menschen mit HTML seltsame Dinge tun. Beispielsweise sehen Sie manchmal Buttons, die mit {{htmlelement("div")}}s ausgezeichnet werden, zum Beispiel:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber die Verwendung solcher Codes wird nicht empfohlen – Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, und Sie erhalten keinen der standardmäßigen CSS-Stile, die Buttons haben. In dem seltenen bis nicht vorhandenen Fall, dass Sie ein Nicht-Button-Element für eine Schaltfläche verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren alle Standard-Button-Verhaltensweisen, einschließlich Tastatur- und Mausbutton-Unterstützung.

#### Zugang zur Tastatur wiederherstellen

Solche Vorteile zurückzubringen, erfordert ein bisschen Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen – siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren falschen `<div>`-Buttons die Möglichkeit gegeben, fokussiert zu werden (einschließlich über Tabulatortaste), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Screenreader-Benutzer wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut hauptsächlich dazu gedacht, fokussierbare Elemente eine benutzerdefinierte Tabulatorreihenfolge haben zu lassen (in positiver numerischer Reihenfolge angegeben), statt nur standardmäßig in ihrer Quellreihenfolge durchgetabt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn Sie es wirklich benötigen, insbesondere wenn das Layout Dinge in einer sehr anderen visuellen Reihenfolge anzeigt als der Quellcode, und Sie es logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — Wie oben erwähnt, ermöglicht dieser Wert, dass normalerweise nicht fokussierbare Elemente fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dies ermöglicht es normalerweise nicht fokussierbaren Elementen, programmgesteuert fokussierbar zu werden, z.B. über JavaScript, oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, zu den Buttons zu tabben, erlaubt sie es uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir den folgenden kleinen JavaScript-Trick hinzufügen:

```js
document.onkeydown = (e) => {
  // Die Enter/Return-Taste
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste gedrückt wurde, über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler des Buttons gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das gerade auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es wird sicherlich andere Probleme damit geben. **Es ist besser, von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.**

#### Bedeutungsvolle Textbeschriftungen

Textbeschriftungen von Benutzeroberfläche-Steuerelementen sind für alle Benutzer sehr hilfreich, ihre richtige Nutzung ist jedoch besonders für Benutzer mit Einschränkungen wichtig.

Sie sollten sicherstellen, dass Ihre Button- und Linktextbeschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Hier klicken" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Buttons und Formularelementen abrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf Mac aufgelistet werden.

![Liste von Formular-Eingabebeschriftungen, die von der VoiceOver-Software auf einem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie 'happy menu button', die verschiedenen Formularelementen wie Schaltflächen, Textfelder und Links gegeben werden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen sowohl im Kontext als auch ohne Kontext sinnvoll sind. Zum Beispiel zeigt das folgende ein Beispiel für guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber das hier ist schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können mehr über die Implementierung von Links und Best Practices in unserem Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) erfahren. Sie können auch einige gute und schlechte Beispiele unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) finden.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eintragen müssen. Das folgende scheint ein angemessenes Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dieses Beispiel ist jedoch nicht so nützlich für Benutzer mit Behinderungen. Es gibt im obigen Beispiel nichts, das die Beschriftung eindeutig mit dem Formulareingabefeld verknüpft und klarstellt, wie es auszufüllen ist, wenn Sie es nicht sehen können. Wenn Sie darauf mit einigen Screenreadern zugreifen, erhalten Sie möglicherweise nur eine Beschreibung wie "Text bearbeiten".

Das folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung eindeutig mit der Eingabe verbunden; die Beschreibung wird eher "Füllen Sie Ihren Namen ein: Text bearbeiten" lauten.

![Eine gute Formularbeschriftung, die "Füllen Sie Ihren Namen ein" lautet, wird einem Texteintrag-Kontrollformular gegeben.](voiceover-good-form-label.png)

Als zusätzlichen Bonus bedeutet das Verknüpfen einer Beschriftung mit einer Formulareingabe in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement zu aktivieren oder auszuwählen. Dies gibt der Eingabe einen größeren Treffbereich, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularbeispiele unter [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie finden eine schöne Erklärung zur Bedeutung von richtigen Textbeschriftungen und wie Sie Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können, im folgenden Video:

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

Aber dies hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Zeilen oder Spalten als Gruppierungen von Daten zu verknüpfen. Dazu müssen Sie wissen, was die Kopfzeilenreihen sind und ob sie Zeilen, Spalten usw. überspannen. Dies kann für die obige Tabelle nur visuell gemacht werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser [Punk-Bands-Tabelle-Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen im Einsatz sehen:

- Tabellenköpfe sind mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Screenreadern als Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben — sie fungieren als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung des Inhalts der Tabelle. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie benötigen nicht wirklich beides.

> [!NOTE]
> Weitere Informationen zu barrierefreien Datentabellen finden Sie in unserem Artikel [Erweiterte HTML-Tabellenfunktionen und Barrierefreiheit](/de/docs/Learn/HTML/Tables/Advanced).

## Textalternativen

Während textbasierter Inhalt im Wesentlichen barrierefrei ist, gilt dies nicht unbedingt für Multimedia-Inhalte — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiocontent kann von hörbehinderten Menschen nicht gehört werden. Wir decken Video- und Audioinhalte im Detail im Artikel [Barrierefreie Multimedia](/de/docs/Learn/Accessibility/Multimedia) ab, aber für diesen Artikel betrachten wir die Barrierefreiheit des bescheidenen {{htmlelement("img")}}-Elements.

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

Das erste Bild bietet einem Screenreader-Benutzer nicht wirklich viel Hilfe — VoiceOver liest zum Beispiel "/dinosaur.png, image" aus. Es liest den Dateinamen vor, um eine gewisse Hilfe zu bieten. In diesem Fall wird der Benutzer zumindest wissen, dass es sich um einen Dinosaurier handelt, aber häufig werden Dateien mit maschinengenerierten Dateinamen (z.B. von einer Digitalkamera) hochgeladen, und diese Dateinamen würden wahrscheinlich keinen Kontext zu dem Bildinhalt bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalte in einem Bild einbinden — Screenreader können ihn nicht aufrufen. Es gibt auch andere Nachteile — Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild trifft, liest er den gesamten `alt`-Attribut-Text vor — "A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.".

Dies unterstreicht die Bedeutung, nicht nur sinnvolle Dateinamen zu verwenden, falls der sogenannte **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass Alt-Text wann immer möglich in `alt`-Attributen bereitgestellt wird.

Beachten Sie, dass der Inhalt des `alt`-Attributs immer eine direkte Darstellung des Bildes und das, was es visuell vermittelt, sein sollte. Das Alt-Attribut sollte kurz und prägnant sein und alle Informationen enthalten, die das Bild vermittelt und nicht im umgebenden Text dupliziert werden.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Zum Beispiel, wenn das Foto von Fluffy ein Avatar neben einem Review für das Hundefutter Yuckymeat ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil von Fluffys Adoptionsseite für den Tierschutz ist, sollten in dem Bild relevante Informationen, die für einen zukünftigen Hundebesitzer nicht im umgebenden Text dupliziert werden, enthalten sein. Eine längere Beschreibung, wie `alt="Fluffy, eine dreifarbige Terrierhündin mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich Fluffys Größe und Rasse enthält, ist dies nicht im `alt` enthalten. Da das Hundeprofil jedoch möglicherweise keine Haarlänge, Farben oder Spielzeugvorlieben enthält, die der potenzielle Besitzer wissen muss, werden diese Informationen hinzugefügt. Play es draußen oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Das ist nicht wichtig für die Adoption des Haustiers und daher nicht enthalten. Alle Informationen, die das Bild vermittelt und die ein sehender Benutzer zugreifen kann und im Kontext relevant ist, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, genau und nützlich.

Persönliches Wissen oder zusätzliche Beschreibung sollten hier nicht enthalten sein, da sie für Personen, die das Bild vorher nicht gesehen haben, nicht nützlich sind. Wenn der Ball Fluffys Lieblingsspielzeug ist oder das der sehende Verwaltung nicht aus dem Bild erkennen kann, dann lassen Sie es heraus.

Ein Aspekt, den Sie bedenken müssen, ist, ob Ihre Bilder innerhalb Ihres Inhalts eine Bedeutung haben oder ob sie rein zu dekorativen Zwecken dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt-Attribute](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder in die Seite aufzunehmen.

> [!NOTE]
> Weitere Informationen über die Implementierung von Bildern und Best Practices finden Sie in den Artikeln [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie dies im umgebenden Text des Bildes tun oder im `title`-Attribut, wie oben gezeigt. In diesem Fall werden die meisten Screenreader den Alt-Text, das `title`-Attribut und den Dateinamen vorlesen. Darüber hinaus zeigen Browser den Titeltext als Tooltips an, wenn man mit der Maus darüberfährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "Der Mozilla rote Dinosaurier", der als Tooltip bei mouseover angezeigt wird.](title-attribute.png)

Lassen Sie uns schnell die vierte Methode noch einmal betrachten:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">Der Mozilla rote Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz bereitgestellt, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, wodurch Screenreader diesen Absatz als Alt-Text/Label für dieses Bild verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Bezeichnung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spezifikation, die es Entwicklern ermöglicht, ihrer Auszeichnung zusätzliche Semantik hinzuzufügen, um die Screenreader-Barrierefreiheit bei Bedarf zu verbessern. Um mehr darüber zu lernen, wie es funktioniert, lesen Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

### Figuren und Figurenunterschriften

HTML enthält zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Art von Abbildung (es könnte alles sein, nicht unbedingt ein Bild) mit einer Abbildungsunterschrift verknüpfen:

```html
<figure>
  <img
    src="dinosaur.png"
    alt="Der Mozilla Tyrannosaurus"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der wie ein
    Mensch aufrecht steht, mit kleinen Armen und einem großen Kopf mit vielen
    scharfen Zähnen.
  </figcaption>
</figure>
```

Obwohl es gemischte Screenreader-Unterstützung für die Verknüpfung von Figurenunterschriften mit ihren Abbildungen gibt, schafft dies das Einbeziehen von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), falls keine vorhanden ist. Das Elementstruktur ist jedoch nützlich für das CSS-Styling, dazu bietet es eine Möglichkeit, eine Beschreibung des Bildes neben ihn im Quelltext zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: der König der Dinosaurier
</h3>
```

Es kann Zeiten geben, in denen ein Bild in einem Seitendesign enthalten ist, aber hauptsächlich zu dekorativen Zwecken. Sie werden im obenstehenden Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies soll Screenreadern signalisieren, das Bild zu erkennen, aber nicht den Versuch zu unternehmen, das Bild zu beschreiben (stattdessen würden sie einfach "Bild" oder Ähnliches sagen).

Der Grund, ein leeres `alt` anstelle, es nicht einzuschließen, zu verwenden, ist, dass viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` angegeben ist. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild nur Dekoration und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihre `img`-Elemente aufnehmen. Eine andere Alternative ist die Verwendung des aria [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), da es auch Screenreader daran hindert, den alternativen Text vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut) können, je nachdem, wie sie verwendet werden, Barrierefreiheit unterstützen oder schaden. Standardmäßig sind Links in der Darstellung zugänglich. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu wechseln. Sie können auch die Barrierefreiheit verletzen, wenn ihr zugängliches Styling entfernt wird oder wenn JavaScript sie in nicht erwarteter Weise reagieren lässt.

### Link-Styling

Standardmäßig sind Links visuell anders als anderer Text in Farbe und [text-decoration](/de/docs/Web/CSS/text-decoration), mit Links, die standardmäßig blau und unterstrichen sind, lila und unterstrichen, wenn sie besucht wurden, und mit einem [Fokusring](/de/docs/Web/CSS/:focus), wenn sie über die Tastatur in den Fokus gelangen.

Farbe sollte nicht als einziges Unterscheidungsmerkmal zwischen Links und nicht verlinktem Inhalt verwendet werden. Linktextfarben, wie alle Textfarben, müssen sich deutlich von der Hintergrundfarbe unterscheiden ([ein Kontrastverhältnis von 4,5:1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Zusätzlich sollten Links visuell signifikant anders als nicht verlinkter Text sein, mit einem Mindestkontrastbedarf von 3:1 zwischen Linktext und umgebendem Text und zwischen Standard-, besucht- und Focus/Aktiv-Stati und einem Kontrast von 4,5:1 zwischen allen diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden häufig mit dem `onclick`-Ereignis missbraucht, um Pseudo-Schaltflächen zu erstellen, indem sie den **href** auf `"#"` oder `"javascript:void(0)"` setzen, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, bei der Lesezeichenverwaltung und wenn JavaScript noch heruntergeladen wird, Fehler auftreten oder JavaScript deaktiviert ist. Dies vermittelt auch falsche Semantik an unterstützende Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen ein {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur einen Anker zur Navigation mit einer richtigen URL verwenden.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab oder Fenster über die `target="_blank"`-Deklaration geöffnet werden, und Links, deren `href`-Wert auf eine Dateiresource zeigt, sollten einen Indikator über das Verhalten enthalten, das beim Aktivieren des Links auftritt.

Personen, die unter geringem Sehvermögen leiden, die mit der Hilfe von Screenreader-Technologie navigieren, oder die kognitive Bedenken haben, könnten verwirrt sein, wenn sich unerwartet ein neuer Tab, ein neues Fenster oder eine neue Anwendung öffnet. Ältere Versionen von Screenreader-Software könnten das Verhalten nicht einmal ankündigen.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (öffnet in einem neuen Fenster)</a
>
```

#### Link zu einer nicht-HTML-Resource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >Jahresbericht 2017 (PowerPoint)</a
>
```

Wenn ein Icon anstelle von Text verwendet wird, um das Verhalten solcher Links zu signalisieren, stellen Sie sicher, dass es eine [abweichende Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Verständnis für WCAG, Richtlinie 3.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Links, die neue Fenster und Tabs nur bei Bedarf öffnen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am Öffnen des {{HTMLElement("body")}}-Elements platziert wird, das auf den Anfang des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Menschen, den auf mehreren Seiten einer Website wiederholten Inhalt zu überspringen, wie z.B. die Kopfzeile und die primäre Navigation einer Website.

Sprunglinks sind besonders nützlich für Personen, die mit technologischem Hilfsmittel wie Schalterbedienung, Sprachsteuerung oder Mundeingabegeräten/Kopfstäbchen navigieren, bei denen das Durchlaufen wiederholter Links eine mühsame Aufgabe sein kann.

- [WebAIM: Links zur "Navigation überspringen"](https://webaim.org/techniques/skipnav/)
- [How–to: Verwenden von Sprunglinks - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Verständnis für WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiver Inhalte — einschließlich von Anchors —, die in enger optischer Nähe zueinander liegen, sollten durch Zwischeneinfügen von Platz getrennt werden. Dieser Platz ist für Menschen von Vorteil, die unter feinmotorischen Steuerungsproblemen leiden und möglicherweise versehentlich den falschen interaktiven Inhalt beim Navigieren aktivieren.

Platz kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Hand Zittern und das Problem mit den Riesenschaltflächen - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML-Barrierefreiheit](/de/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun gut vertraut sein mit dem Schreiben von barrierefreiem HTML für die meisten Gelegenheiten. Unser Artikel über WAI-ARIA Grundlagen wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen behandelt. Als nächstes erforschen wir CSS und JavaScript und wie deren guter oder schlechter Einsatz die Barrierefreiheit beeinflusst.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
