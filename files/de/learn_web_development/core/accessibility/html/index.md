---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente zu jeder Zeit für den richtigen Zweck verwendet werden. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">Grundverständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als „Das richtige Element für den richtigen Zweck“, da der Browser viele eingebaute Barrierefreiheitshaken bietet.</li>
          <li>Barrierefreie Best Practices wie Alt-Text, gute Linkbeschreibungen, Formularbeschriftungen und Tabellenzeilen- und -spaltenüberschriften und deren Bereichsfestlegung.</li>
          <li>Verwendung einfacher Sprache, Vermeidung von Slang und Abkürzungen, wo möglich, und Bereitstellung von Definitionen, wo es nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Während Sie mehr über HTML lernen – weitere Ressourcen lesen, mehr Beispiele anschauen usw. –, werden Sie ein wiederkehrendes Thema bemerken: die Wichtigkeit der Verwendung von semantischem HTML (manchmal als POSH oder Plain Old Semantic HTML bezeichnet). Dies bedeutet, dass die richtigen HTML-Elemente so weit wie möglich für ihren vorgesehenen Zweck verwendet werden.

Sie fragen sich vielleicht, warum dies so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript nahezu jedes HTML-Element so verhalten lassen, wie Sie es möchten. Ein Steuerknopf zum Abspielen eines Videos auf Ihrer Seite könnte beispielsweise so markiert werden:

```html
<div>Play video</div>
```

Aber wie Sie weiter unten ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`s haben nicht nur eine passende Standardstilgebung (die Sie wahrscheinlich überschreiben möchten), sondern bieten auch eine integrierte Tastaturzugänglichkeit – Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen den Buttons navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML braucht nicht länger zur Erstellung als nicht-semantisches (schlechtes) Markup, wenn Sie es von Anfang an konsequent tun. Noch besser: Semantisches Markup hat neben der Barrierefreiheit noch andere Vorteile:

1. **Einfacher zu entwickeln** – Wie oben erwähnt, erhalten Sie einige Funktionen kostenlos und es ist möglicherweise leichter zu verstehen.
2. **Besser auf mobilen Geräten** – Semantisches HTML ist in der Regel leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher responsiv zu gestalten.
3. **Gut für SEO** – Suchmaschinen geben Wörtern, die in Überschriften, Links usw. sind, mehr Bedeutung als in nicht-semantischen `<div>`-Elementen etc., wodurch Ihre Dokumente für Kunden leichter auffindbar sind.

Lassen Sie uns damit beginnen, barrierefreies HTML genauer zu betrachten.

## Gute Semantik

Wir haben bereits über die Wichtigkeit der richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da dies einer der Hauptpunkte ist, an denen Barrierefreiheit stark beeinträchtigt wird, wenn nicht ordnungsgemäß gehandhabt.

Im Web machen die Leute in Wahrheit einige sehr seltsame Dinge mit HTML-Markup. Einige Missbräuche von HTML resultieren aus alten Praktiken, die noch nicht vollständig vergessen wurden, und einige sind einfach nur Unwissenheit. Was auch immer der Fall sein mag, Sie sollten solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechtes Markup vollständig zu entfernen – Ihre Seiten könnten von einem serverseitigen Framework generiert werden, über das Sie nicht die volle Kontrolle haben, oder Sie könnten Inhalte von Drittanbietern auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht „alles oder nichts“; jede Verbesserung, die Sie vornehmen können, wird der Sache der Barrierefreiheit helfen.

### Textinhalt

Eine der besten Unterstützungsmittel für einen Bildschirmleser-Benutzer ist eine hervorragende Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein hervorragendes semantisches Beispiel könnte folgendermaßen aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Bildschirmleser ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, durch diese zu navigieren, werden Sie feststellen, dass dies ziemlich einfach zu navigieren ist:

1. Der Bildschirmleser liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten, und informiert Sie darüber, was eine Überschrift ist, was ein Absatz ist usw.
2. Er stoppt nach jedem Element und lässt Sie in Ihrem eigenen Tempo weitergehen.
3. Sie können in vielen Bildschirmlesern zur nächsten/vorherigen Überschrift springen.
4. Sie können auch in vielen Bildschirmlesern eine Liste aller Überschriften aufrufen, sodass Sie diese als praktische Inhaltsübersicht verwenden können, um bestimmte Inhalte zu finden.

Manchmal schreiben Leute Überschriften, Absätze usw. mithilfe von Zeilenumbrüchen und fügen HTML-Elemente ausschließlich zur Stilgebung hinzu, so etwas wie das Folgende:

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

Wenn Sie unsere längere Version mit einem Bildschirmleser ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen – der Bildschirmleser hat nichts zu verwenden wie Wegweiser, sodass Sie keinen nützlichen Inhaltsüberblick abrufen können und die gesamte Seite als ein einziger großer Block wahrgenommen wird, sodass sie in einem Rutsch, alles auf einmal, vorgelesen wird.

Es gibt auch andere Probleme jenseits der Barrierefreiheit – es ist schwerer, den Inhalt mit CSS zu gestalten oder mit JavaScript zu manipulieren, da keine Elemente als Selektoren verwendet werden können.

#### Verwendung klarer Sprache

Die Sprache, die Sie verwenden, kann sich ebenfalls auf die Barrierefreiheit auswirken. Generell sollten Sie eine klare Sprache verwenden, die nicht unnötig komplex ist und keine unnötigen Fachbegriffe oder Slang-Ausdrücke verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute; es nützt auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen … alle profitieren davon! Davon abgesehen sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Bildschirmleser nicht eindeutig vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn es vermeidbar ist. Anstatt 5–7 zu schreiben, schreiben Sie 5 bis 7.
- Abkürzungen ausschreiben – anstatt Jan zu schreiben, schreiben Sie Januar.
- Akronyme ausschreiben, mindestens einmal oder zweimal, und dann das [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag verwenden, um sie zu beschreiben.

### Seitenlayouts

In schlechten alten Zeiten haben Leute Layouts von Seiten mithilfe von HTML-Tabellen erstellt – verschiedene Tabellenzellen wurden verwendet, um den Header, Footer, die Sidebar, die Hauptinhalts-Spalte etc. zu enthalten. Das ist keine gute Idee, da ein Bildschirmleser wahrscheinlich verwirrende Durchsagen gibt, besonders wenn das Layout komplex ist und viele verschachtelte Tabellen hat.

Versuchen Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html), welches in etwa so aussieht:

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

Wenn Sie versuchen, dies mit einem Bildschirmleser zu navigieren, wird es Ihnen wahrscheinlich sagen, dass es eine Tabelle zu betrachten gibt (obwohl einige Bildschirmleser den Unterschied zwischen Tabellenlayouts und Datentabellen erraten können). Sie müssen dann wahrscheinlich (abhängig davon, welchen Bildschirmleser Sie nutzen) in die Tabelle als Objekt hineingehen und ihre Funktionen separat ansehen und dann wieder aus der Tabelle aussteigen, um mit der Navigation des Inhalts fortzufahren.

Tabellenlayouts sind ein Relikt der Vergangenheit – sie ergaben Sinn, als CSS-Unterstützung in Browsern noch nicht weit verbreitet war, aber jetzt erzeugen sie nur Verwirrung für Benutzer von Bildschirmlesern. Außerdem benötigt ihr Quellcode mehr Markup, was sie weniger flexibel und schwieriger zu warten macht. Sie können diese Behauptungen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Beispiel einer Webseitenstruktur](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, die in etwa so aussehen könnte:

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

Wenn Sie unser moderneres Struktur-Beispiel mit einem Bildschirmleser ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr mit dem Inhaltsausgabeverhalten interferiert oder Verwirrung stiftet. Es ist auch viel kompakter und kleiner in Bezug auf die Codegröße, was bedeutet, dass der Code einfacher zu warten ist und weniger Bandbreite erforderlich ist, damit Benutzer ihn herunterladen können, was besonders vorteilhaft für jene mit langsamen Verbindungen ist.

Ein weiterer Aspekt, der beim Erstellen von Layouts berücksichtigt werden sollte, ist die Verwendung von HTML-semantischen Elementen, wie im obigen Beispiel zu sehen (siehe [content sectioning](/de/docs/Web/HTML/Element#content_sectioning)) – Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, besser ist es jedoch, geeignete Abschnittselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), den Footer ({{htmlelement("footer")}}), sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}) etc. zu umschließen. Diese bieten zusätzliche Semantik für Bildschirmleser (und andere Tools), um Benutzer mit zusätzlichen Hinweisen auf den Inhalt zu versorgen, den sie gerade navigieren (siehe [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung davon, wie die Unterstützung durch Bildschirmleser ist).

> [!NOTE]
> Neben einer guten Semantik und einem attraktiven Layout sollte Ihr Inhalt logisch in seiner Quellreihenfolge Sinn ergeben – Sie können ihn später immer mit CSS an den gewünschten Ort verschieben, aber Sie sollten die Quellreihenfolge von Anfang an richtig machen, damit das, was die Benutzer von Bildschirmlesern vorgelesen bekommen, Sinn ergibt.

### Benutzeroberflächen-Steuerungen

Mit UI-Steuerungen meinen wir die wichtigsten Teile von Webdokumenten, mit denen Benutzer interagieren – meist Schaltflächen, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Barrierefreitheitserwägungen, derer Sie sich bewusst sein sollten, wenn Sie solche Steuerungen erstellen. Spätere Artikel zu WAI-ARIA und Multimedia werden andere Aspekte der Barrierefreiheit im Nutzerinterface betrachten.

Ein wesentlicher Aspekt der Barrierefreiheit von UI-Steuerungen ist, dass Browser standardmäßig erlauben, sie mit der Tastatur zu manipulieren. Sie können dies ausprobieren, indem Sie unser Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) verwenden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach einigen Drücken sollten Sie sehen, dass der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen. Die fokussierten Elemente erhalten eine hervorgehobene Standardstilvolle in jedem Browser (sie unterscheidet sich geringfügig zwischen den verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Drei Schaltflächen mit dem Text "Click me!", "Click me too!", und "And me!" in ihnen. Die dritte Schaltfläche hat einen blauen Umriss, der den aktuellen Tabfokus anzeigt.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Tabulatordarstellung der Seite in Ihren Entwicklerwerkzeugen anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einen fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben einige JavaScripts hinzugefügt, damit die Schaltflächen eine Nachricht auslösen), oder mit der Eingabe beginnen, um Text in ein Texteingabefeld einzutragen. Andere Formularelemente haben unterschiedliche Steuerungen; das {{htmlelement("select")}}-Element kann seine Optionen anzeigen und zwischen ihnen wechseln, indem die Aufwärts- und Abwärtspfeiltasten verwendet werden.

Im Grunde erhalten Sie dieses Verhalten kostenlos, indem Sie die passenden Elemente verwenden, z. B.

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

dies bedeutet, dass Sie Links, Schaltflächen, Formularelemente und Beschriftungen angemessen verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularelemente).

Es kommt jedoch wieder vor, dass Menschen manchmal merkwürdige Dinge mit HTML tun. Beispielsweise sehen Sie manchmal Schaltflächen, die mit {{htmlelement("div")}}s markiert werden:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber solch ein Code ist nicht zu empfehlen – Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie gehabt hätten, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, plus Sie erhalten nicht die standardmäßige CSS-Stilvorlage, die Tasten erhalten. In dem seltenen bis nicht existierenden Fall, dass Sie ein nicht-Tasten-Element für einen Button verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie alle Standard-Button-Verhaltensweisen, einschließlich Tastatur- und Maustastensupport.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile zurückzubauen, erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel sehen – sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) an). Hier haben wir unseren gefälschten `<div>`-Buttons die Möglichkeit gegeben, fokussiert zu werden (auch über Tab), indem wir jedem das Attribut `tabindex="0"` gegeben haben. Wir fügen auch `role="button"` hinzu, damit Bildschirmleser-Benutzer wissen, dass sie das Element fokussieren und mit ihm interagieren können:

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

Im Grunde ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut in erster Linie dazu gedacht, fokussierbaren Elementen eine benutzerdefinierte Tabulatorder (in einer positiven numerischen Reihenfolge) zu geben, anstatt einfach in ihrer Standardquellreihenfolge durchgetabbt zu werden. Dies ist fast immer eine schlechte Idee, da es zu großen Verwirrungen kommen kann. Verwenden Sie es nur, wenn Sie es wirklich müssen, z. B. wenn das Layout die Dinge in einer sehr anderen visuellen Reihenfolge zeigt als der Quellcode und Sie die Dinge logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` – wie oben angedeutet, erlaubt dieser Wert Elementen, die normalerweise nicht tabbar sind, tabbar zu werden. Dies ist der nützlichste Wert für `tabindex`.
- `tabindex="-1"` – diese Option erlaubt Elementen, die normalerweise nicht tabbar sind, programmatisch fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns ermöglicht, zu den Buttons zu taben, erlaubt sie uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Dazu mussten wir das folgende bisschen JavaScript-Trickserei hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler des Buttons gespeichert ist, indem wir `document.activeElement.click()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Und es gibt bestimmt andere Probleme damit. **Besser, von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.**

#### Sinnvolle Textbeschriftungen

Textbeschriftungen für UI-Steuerungen sind für alle Benutzer sehr nützlich, aber speziell für Benutzer mit Behinderungen besonders wichtig.

Sie sollten sicherstellen, dass Ihre Button- und Link-Beschriftungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach „Hier klicken“ für Ihre Beschriftungen, da Bildschirmleser-Benutzer manchmal eine Liste von Buttons und Formularelementen erhalten. Der folgende Screenshot zeigt unsere Steuerungen, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formularbeschriftungen, die von VoiceOver auf Mac aufgelistet werden. Diese Liste enthält bedeutungslose Beschriftungen wie „happy menu button“, die verschiedenen Formularelementen wie Schaltflächen, Textfeldern und Links zugewiesen werden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Beschriftungen aus dem Kontext heraus Sinn machen und für sich allein gelesen, ebenso wie im Kontext des Absatzes, in dem sie sich befinden. Das folgende Beispiel zeigt eine gute Link-Beschriftung:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber dies ist eine schlechte Link-Beschriftung:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können mehr über die Implementierung von Links und Best Practices in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) erfahren. Sie können auch einige gute und schlechte Beispiele bei [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbeschriftungen sind ebenfalls wichtig, um Ihnen einen Hinweis darauf zu geben, was Sie in jedes Formulareingabefeld eingeben müssen. Folgendes scheint ein vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Allerdings ist dies für behinderte Nutzer nicht so nützlich. Im obigen Beispiel gibt es nichts, was die Beschriftung eindeutig mit der Formulareingabe verbindet und es klar macht, wie sie auszufüllen ist, wenn man sie nicht sehen kann. Wenn Sie dies mit einigen Bildschirmlesern aufrufen, erhalten Sie möglicherweise nur eine Beschreibung wie „Bearbeitungstext“.

Das folgende Beispiel ist viel besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung eindeutig mit der Eingabe verbunden; die Beschreibung wird eher so lauten: „Geben Sie Ihren Namen ein: Bearbeitungstext.“

![Eine gute Formularbeschriftung, die ‚Geben Sie Ihren Namen ein‘ liest, wird einem Texteingabe-Formularsteuerung zugewiesen.](voiceover-good-form-label.png)

Als zusätzlicher Vorteil bedeutet die Verknüpfung einer Beschriftung mit einem Formularelement in den meisten Browsern, dass Sie auf die Beschriftung klicken können, um das Formularelement auszuwählen oder zu aktivieren. Dies gibt dem Input einen größeren Trefferbereich, sodass er einfacher auszuwählen ist.

> [!NOTE]
> Sie können einige gute und schlechte Formulare in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Im folgenden Video finden Sie eine schöne Erklärung der Bedeutung von ordnungsgemäßen Textbeschriftungen und wie man Textbeschriftungsprobleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht:

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

Aber dies hat Probleme – es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Zeilen oder Spalten als Gruppierung von Daten zu assoziieren. Um dies zu tun, müssen Sie wissen, welche Kopfzeilenreihen vorhanden sind und ob sie Zeilen oder Spalten anführen. Dies kann nur visuell für die obige Tabelle erfolgen (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und probieren Sie das Beispiel selbst aus).

Sehen Sie sich nun unser Beispiel [punk bands table example](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an – Sie können hier einige Barrierefreiheitshilfen bei der Arbeit sehen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert – Sie können auch angeben, ob sie Überschriften für Zeilen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppierungen, die von Bildschirmlesern als einzelne Einheiten erfasst werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben – sie wirken als Alt-Text für eine Tabelle und bieten einem Bildschirmleser-Benutzer eine nützliche schnelle Zusammenfassung des Tabelleninhalts. Das `<caption>`-Element wird generell bevorzugt, da sein Inhalt ebenfalls für sehende Benutzer zugänglich ist, die es vielleicht auch nützlich finden. Sie benötigen eigentlich nicht beides.

> [!NOTE]
> Weitere Details zu barrierefreien Datentabellen finden Sie in unserem Artikel [HTML-Tabellenbarrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility).

## Textalternativen

Während textuelle Inhalte von Natur aus barrierefrei sind, kann dies nicht unbedingt für multimediale Inhalte gesagt werden – Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen werden, und Audiomaterial kann von hörbehinderten Menschen nicht gehört werden. Wir behandeln Video- und Audiomaterial ausführlich im Artikel [Barrierefreies Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber in diesem Artikel betrachten wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element.

Wir haben ein einfaches Beispiel verfasst, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), das vier Kopien desselben Bildes zeigt:

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

Das erste Bild bietet bei Betrachtung durch einen Bildschirmleser dem Benutzer nicht wirklich viel Hilfe – VoiceOver zum Beispiel liest „/dinosaur.png, Bild“ vor. Es liest den Dateinamen vor, um etwas Hilfe zu bieten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es sich um irgendeine Art von Dinosaurier handelt, aber oft werden Dateien möglicherweise mit automatisch generierten Dateinamen hochgeladen (z. B. von einer Digitalkamera) und diese Dateinamen würden wahrscheinlich keinen Kontext zum Bildinhalt bieten.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalt in einem Bild einbetten – Bildschirmleser können darauf nicht zugreifen. Es gibt auch andere Nachteile – Sie können ihn nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Bildschirmleser auf das zweite Bild stoßen würde, liest er das gesamte `alt`-Attribut vor – „Ein roter Tyrannosaurus Rex: Ein zweibeiniger Dinosaurier, der aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen“.

Dies unterstreicht die Wichtigkeit, nicht nur aussagekräftige Dateinamen zu verwenden, falls so genannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass wo möglich im `alt`-Attribut ein Alt-Text angegeben wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und dessen, was es visuell vermittelt, bieten. Der Alt-Text sollte kurz und prägnant sein und alle im Bild vermittelten Informationen enthalten, die nicht im umgebenden Text doppelt vorkommen.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild hängt vom Kontext ab. Wenn das Foto von Fluffy z.B. ein Avatar neben einer Rezension für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto auf Fluffy's Adoptionsseite der Tierrettungsgesellschaft erscheint, dann sollten im Bild enthaltene Informationen, die für einen potenziellen Hundebesitzer relevant sind und nicht im umgebenden Text doppelt vorkommen, einbezogen werden. Eine längere Beschreibung, wie `alt="Fluffy, ein dreifarbiges Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist dann angebracht. Da der umgebende Text Fluffy's Größe und Rasse wahrscheinlich enthalten wird, ist dies nicht im `alt` enthalten. Information indes, dass das Haar des Hundes nicht lang ist und welche Farben oder Spielzeuge die Präferenz ist, wird wahrscheinlich nicht im Lebenslauf des Hundes enthalten sein, was der potenzielle Besitzer wissen muss, also ist dies enthalten. Ob das Bild im Freien ist oder ob Fluffy ein rotes Halsband mit einer blauen Leine hat? Nicht wichtig im Hinblick darauf, das Tier zu adoptieren, und daher nicht enthalten. Alle Informationen, die das Bild vermitteln, die ein sehender Benutzer zugreifen kann und die im Kontext relevant sind, muss vermittelt werden; nichts weiter. Halten Sie es kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen sollten hier nicht enthalten sein, da sie nicht nützlich sind für Personen, die das Bild noch nie gesehen haben. Wenn der Ball Fluffy's Lieblingsspielzeug ist oder ein sehender Benutzer das nicht am Bild erkennen kann, dann lassen Sie es weg.

Eine Sache, die Sie beachten sollten, ist, ob Ihre Bilder innerhalb Ihres Inhalts Bedeutung haben oder ob sie rein als visuelle Dekoration dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Empty alt attributes](#leere_alt-attribute)) oder sie einfach als CSS-Hintergrundbilder auf der Seite einzubinden.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Responsive_images) für viel mehr Informationen zur Bilderimplementierung und Best Practices.
> Sie können auch den [Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) lesen, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextbezogene Informationen bereitstellen möchten, sollten Sie diese im Text um das Bild herum oder im `title`-Attribut einfügen, wie oben gezeigt. In diesem Fall werden die meisten Bildschirmleser den Alt-Text, das `title`-Attribut und den Dateinamen vorlesen. Darüber hinaus zeigen Browser Title-Text als Tooltips an, wenn man mit der Maus darüber fährt.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text „The mozilla red dinosaur“, der als Tooltip bei Mouseover angezeigt wird.](title-attribute.png)

Werfen wir einen schnellen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht – stattdessen haben wir unsere Beschreibung des Bildes als reguläres Textparagraph präsentiert, ihm eine `id` zugewiesen und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, wodurch Bildschirmleser diesen Paragraphen als Alt-Text/Label für das Bild nutzen. Dies ist besonders nützlich, wenn Sie denselben Text als Label für mehrere Bilder verwenden möchten – etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)-Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup zum Verbessern der Bildschirmleser-Zugänglichkeit bei Bedarf einzufügen.

### Figuren und Figurenunterschriften

HTML enthält zwei Elemente – {{htmlelement("figure")}} und {{htmlelement("figcaption")}} – die eine Art von Figur (könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Obwohl es eine gemischte Unterstützung für Bildschirmleser in Bezug auf die Verknüpfung von Bildunterschriften mit ihren Figuren gibt, wird durch die Einbeziehung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) die Verbindung geschaffen, wenn keine vorhanden ist. Das gesagt, ist die Elementstruktur nützlich für CSS-Stilgebung, plus es bietet eine Möglichkeit, eine Beschreibung des Bildes daneben im Quelltext zu platzieren.

### Leere Alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild in das Seitendesign einbezogen wird, aber sein primärer Zweck der visuellen Dekoration dient. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist – dies ist, um Bildschirmleser das Bild erkennen zu lassen, aber nicht zu versuchen, es zu beschreiben (stattdessen würden sie einfach „Bild“ oder Ähnliches sagen).

Der Grund für die Verwendung eines leeren `alt` anstelle der Nichterwähnung ist, dass viele Bildschirmleser die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel dient das Bild als visuelle Dekoration zur Überschrift, der es zugeordnet ist. In Fällen wie diesem und in Fällen, in denen ein Bild nur dekorativ und ohne Inhaltswert ist, sollten Sie ein leeres `alt` in Ihren `img`-Elementen einfügen. Eine andere Alternative ist die Verwendung des aria-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) da dies ebenfalls Bildschirmlesern stoppt, alternativen Text vorzulesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder anzuzeigen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a)-Element mit einem `href`-Attribut), je nachdem wie sie verwendet werden, können sie helfen oder die Barrierefreiheit beeinträchtigen. Standardmäßig sind Links in ihrem Aussehen barrierefrei. Sie können die Barrierefreiheit verbessern, indem sie einem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können auch die Barrierefreiheit beeinträchtigen, wenn ihr barrierefreies Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich unerwartet verhalten.

### Link-Styling

Standardmäßig unterscheiden sich Links visuell von anderem Text sowohl in Farbe als auch [text-decoration](/de/docs/Web/CSS/text-decoration), mit Links in Blau und unterstrichen von Haus aus, violett und unterstrichen, wenn sie besucht wurden und mit einem [Focus-Ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als einziges Mittel genutzt werden, um Links von nicht verlinktem Inhalt zu unterscheiden. Link-Textfarbe, wie aller Text, muss sich signifikant von der Hintergrundfarbe unterscheiden ([ein 4.5:1-Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links visuell signifikant unterschiedlich zu nicht verlinktem Text sein, mit einem Mindestkontrastverhältnis von 3:1 zwischen Link-Text und umliegendem Text sowie zwischen Standard-, besuchten und Fokus/Aktiv-Zuständen und einem 4.5:1-Kontrast zwischen all diesen Zustandsfarben und der Hintergrundfarbe.

### `onclick`-Events

Ankertags werden oft mit dem `onclick`-Event missbraucht, um Pseudo-Schaltflächen zu erstellen, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte bewirken unerwartetes Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen von Links in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen und wenn JavaScript immer noch heruntergeladen oder fehlerhaft ist oder deaktiviert wurde. Dies vermittelt auch falsche Semantik für unterstützende Technologien (z.B. Bildschirmleser). In diesen Fällen wird empfohlen, stattdessen {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie nur einen Anker für die Navigation mit einer ordnungsgemäßen URL verwenden.

### Externe Links und Verlinken zu Nicht-HTML-Ressourcen

Links, die sich in einem neuen Tab oder Fenster via `target="_blank"` Erklärung öffnen und Links, deren `href`-Wert auf eine Dateiquelle verweist, sollten einen Hinweis auf das Verhalten enthalten, das beim Aktivieren des Links auftreten wird.

Menschen, die Erfahrungen mit niedrigem Sehvermögen machen, die mit der Hilfe von Bildschirmlesertechnologien navigieren oder die kognitive Bedenken haben, könnten verwirrt sein, wenn der neue Tab, das Fenster oder die Anwendung unerwartet geöffnet wird. Ältere Versionen von Bildschirmleser-Software könnten dieses Verhalten nicht einmal ankündigen.

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

Wenn ein Symbol anstelle von Text verwendet wird, um diese Art von Linkverhalten zu signalisieren, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a`-Element, das so nahe wie möglich an das Öffnen des {{HTMLElement("body")}}-Elements gesetzt ist und das zum Anfang des Hauptinhalts der Seite linkt. Dieser Link ermöglicht es Menschen, Inhalte zu umgehen, die sich auf mehreren Seiten einer Website wiederholen, wie etwa die Website-Überschrift und die Hauptnavigation.

Skip-Links sind besonders nützlich für Personen, die mit der Hilfe assistiver Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstab/Kopfstab navigieren, wo der Akt, durch sich wiederholende Links zu bewegen, eine mühsame Aufgabe sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Wie-zu: Verwenden von Skip Navigation-Links - Das A11Y-Projekt](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Erklärung zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis Erfolgskriterium 2.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen interaktiven Inhalts – einschließlich Ankern – die in enger Sichtnähe zueinander platziert werden, sollten Raum zur Trennung zwischen sich haben. Diese Abstände sind förderlich für Menschen, die Probleme mit feiner Motorik haben und während des Navigierens versehentlich die falschen interaktiven Inhalte aktivieren könnten.

Zwischenräume können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sehen Sie [Testen Sie Ihre Fähigkeiten: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie mit dem nächsten Thema fortfahren.

## Zusammenfassung

Sie sollten nun gut gerüstet sein, um zugängliches HTML in den meisten Fällen zu schreiben. Unser Artikel über die WAI-ARIA-Grundlagen wird helfen, Lücken in diesem Wissen zu füllen, aber dieser Artikel hat die Grundlagen behandelt. Als nächstes werden wir CSS und JavaScript erkunden und wie Barrierefreiheit durch ihre gute oder schlechte Verwendung beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
