---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ein Großteil des Webinhalts kann barrierefrei gestaltet werden, indem sichergestellt wird, dass die richtigen Hypertext Markup Language-Elemente für den richtigen Zweck verwendet werden. Dieser Artikel untersucht im Detail, wie HTML eingesetzt werden kann, um maximale Barrierefreiheit zu gewährleisten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis der Konzepte zur Barrierefreiheit</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von semantischem HTML, auch bekannt als "Das richtige Element für den richtigen Zweck", da der Browser so viele integrierte Barrierefreiheits-Hooks bereitstellt.</li>
          <li>Beste Praktiken für Barrierefreiheit wie Alt-Text, gute Link-Praktiken, Formularbeschriftungen und Zeilen- und Spaltenüberschriften in Tabellen.</li>
          <li>Verwendung einfacher, klarer Sprache, Vermeidung von Slang und Abkürzungen, wenn möglich, und Bereitstellung von Definitionen, wenn dies nicht möglich ist.</li>
          <li>Das Konzept und die Praxis der Tastaturzugänglichkeit.</li>
          <li>Die Bedeutung der Quellreihenfolge.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen — mehr Ressourcen lesen, mehr Beispiele ansehen usw. — sehen Sie immer wieder ein gemeinsames Thema: die Bedeutung der Verwendung von semantischem HTML (manchmal auch als POSH, oder Plain Old Semantic HTML bezeichnet). Dies bedeutet, dass die richtigen HTML-Elemente so oft wie möglich für ihren vorgesehenen Zweck verwendet werden.

Sie fragen sich vielleicht, warum das so wichtig ist. Schließlich können Sie eine Kombination aus CSS und JavaScript verwenden, um jedes HTML-Element so zu gestalten, dass es sich in beliebiger Weise verhält. Zum Beispiel könnte ein Steuerknopf zum Abspielen eines Videos auf Ihrer Website folgendermaßen ausgezeichnet sein:

```html
<div>Play video</div>
```

Aber wie Sie weiter unten ausführlicher sehen werden, macht es Sinn, das richtige Element für die Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML `<button>`s haben nicht nur einige geeignete Standard-Stile (die Sie vermutlich überschreiben möchten), sie haben auch eine integrierte Tastaturzugänglichkeit — Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen den Schaltflächen navigieren und ihre Auswahl mit <kbd>Space</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML dauert nicht länger zu schreiben als nicht-semantische (schlechte) Markierungen, wenn Sie es von Anfang an konsequent umsetzen. Noch besser, semantische Markierungen haben neben der Barrierefreiheit auch andere Vorteile:

1. **Einfacher zu entwickeln** — wie bereits erwähnt, erhalten Sie einige Funktionen kostenlos, außerdem ist es wahrscheinlich einfacher zu verstehen.
2. **Besser auf mobilen Geräten** — semantisches HTML ist tendenziell leichter in der Dateigröße als nicht-semantischer Spaghetti-Code und einfacher responsiv zu gestalten.
3. **Gut für SEO** — Suchmaschinen geben Schlüsselwörtern in Überschriften, Links usw. mehr Bedeutung als Schlüsselwörter, die in nicht-semantischen `<div>`s enthalten sind, sodass Ihre Dokumente für Kunden leichter auffindbar sind.

Schauen wir uns barrierefreies HTML genauer an.

## Gute Semantik

Wir haben bereits über die Bedeutung einer richtigen Semantik gesprochen und warum wir das richtige HTML-Element für die Aufgabe verwenden sollten. Dies kann nicht ignoriert werden, da dies einer der Hauptpunkte ist, an denen die Barrierefreiheit bei falscher Handhabung erheblich beeinträchtigt wird.

Im Web machen die Leute mit HTML-Markup die seltsamsten Dinge. Einige Missbräuche von HTML sind auf veraltete Praktiken zurückzuführen, die noch nicht völlig aufgegeben wurden, und einige sind einfach nur Ignoranz. Unabhängig vom Fall sollten Sie solchen schlechten Code ersetzen.

Manchmal sind Sie nicht in der Lage, schlechten Markup-Code loszuwerden — Ihre Seiten könnten von einer Art serverseitiger Framework generiert werden, über das Sie keine volle Kontrolle haben, oder Sie könnten Dritt-Inhalte auf Ihrer Seite haben (wie Werbebanner), über die Sie keine Kontrolle haben.

Das Ziel ist nicht "alles oder nichts"; jede Verbesserung, die Sie vornehmen können, hilft der Sache der Barrierefreiheit.

### Textinhalt

Eine der besten Hilfen für Benutzer von Screenreadern ist eine exzellente Inhaltsstruktur mit Überschriften, Absätzen, Listen usw. Ein ausgezeichnetes semantisches Beispiel könnte in etwa so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können (siehe [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Wenn Sie versuchen, darin zu navigieren, werden Sie feststellen, dass dies ziemlich einfach ist:

1. Der Screenreader liest jede Überschrift vor, während Sie durch den Inhalt fortschreiten und benachrichtigt Sie, was eine Überschrift, ein Absatz usw. ist.
2. Er stoppt nach jedem Element, sodass Sie in einem für Sie angenehmen Tempo fortfahren können.
3. Sie können in vielen Screenreadern zur nächsten/vorherigen Überschrift springen.
4. Sie können in vielen Screenreadern auch eine Liste aller Überschriften anzeigen, die Ihnen als praktische Inhaltsübersicht bei der Suche nach bestimmten Inhalten dient.

Menschen schreiben manchmal Überschriften, Absätze usw. mit Zeilenumbrüchen und fügen HTML-Elemente rein für das Styling hinzu, etwas so:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren (siehe [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine sehr gute Erfahrung machen — der Screenreader hat nichts, was als Wegweiser fungiert, sodass Sie keine nützliche Inhaltsübersicht erhalten können, und die gesamte Seite wird als ein einziger gigantischer Block angesehen, der in einem Rutsch, alles auf einmal, vorgelesen wird.

Es gibt auch andere Probleme über die Barrierefreiheit hinaus — es ist schwieriger, den Inhalt mit CSS zu stylen oder mit JavaScript zu manipulieren, da keine Elemente als Selektoren verwendet werden können.

#### Verwendung klarer Sprache

Die Sprache, die Sie verwenden, kann ebenfalls die Barrierefreiheit beeinflussen. Im Allgemeinen sollten Sie klare Sprache verwenden, die nicht übermäßig komplex ist und keine unnötigen Fachbegriffe oder Slang-Ausdrücke verwendet. Dies kommt nicht nur Menschen mit kognitiven oder anderen Behinderungen zugute, sondern auch Lesern, für die der Text nicht in ihrer Muttersprache geschrieben ist, jüngeren Menschen …, allen, in der Tat! Abgesehen davon sollten Sie versuchen, Sprache und Zeichen zu vermeiden, die vom Screenreader nicht eindeutig vorgelesen werden. Zum Beispiel:

- Verwenden Sie keine Bindestriche, wenn Sie sie vermeiden können. Anstelle von 5–7 schreiben Sie 5 bis 7.
- Erweitern Sie Abkürzungen — anstelle von Jan schreiben Sie Januar.
- Erweitern Sie Akronyme, zumindest einmal oder zweimal, und verwenden Sie dann den [`<abbr>`](/de/docs/Web/HTML/Element/abbr)-Tag, um sie zu beschreiben.

### Seitenlayouts

In den schlechten alten Tagen haben Menschen Seitenlayouts mit HTML-Tabellen erstellt — verschiedene Tabellenzellen wurden verwendet, um die Kopfzeile, Fußzeile, Seitenleiste, Hauptinhaltsspalte usw. zu enthalten. Dies ist keine gute Idee, da ein Screenreader wahrscheinlich verwirrende Ausgaben geben wird, besonders wenn das Layout komplex ist und viele geschachtelte Tabellen enthält.

Versuchen Sie unser Beispiel [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) Beispiel, das ungefähr so aussieht:

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

Wenn Sie versuchen, dies mit einem Screenreader zu navigieren, wird er Ihnen wahrscheinlich sagen, dass es eine Tabelle zu betrachten gibt (obwohl einige Screenreader einen Unterschied zwischen Tabellenlayouts und Datentabellen erkennen können). In Abhängigkeit vom verwendeten Screenreader müssen Sie dann wahrscheinlich in die Tabelle als Objekt gehen und ihre Funktionen separat betrachten, bevor Sie die Tabelle wieder verlassen und den Inhalt weiter navigieren können.

Tabellenlayouts sind ein Relikt der Vergangenheit — sie machten damals Sinn, als CSS-Unterstützung in Browsern noch nicht weit verbreitet war, aber jetzt schaffen sie nur Verwirrung für Screenreader-Benutzer. Darüber hinaus erfordert ihr Quellcode mehr Markup, was sie weniger flexibel und schwieriger zu warten macht. Sie können diese Aussagen überprüfen, indem Sie Ihre vorherige Erfahrung mit einem [moderneren Website-Strukturbeispiel](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) vergleichen, das ungefähr so aussehen könnte:

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

Wenn Sie unser moderneres Strukturbeispiel mit einem Screenreader ausprobieren, werden Sie feststellen, dass das Layout-Markup nicht mehr mit der Inhaltssprache interferiert oder Verwirrung stiftet. Es ist auch viel schlanker und kleiner in Bezug auf die Codegröße, was bedeutet, dass der Code einfacher zu warten ist und weniger Bandbreite benötigt, um von Benutzern heruntergeladen zu werden, was besonders für diejenigen von Vorteil ist, die langsame Verbindungen haben.

Ein weiterer zu beachtender Punkt bei der Erstellung von Layouts ist die Verwendung von HTML-Semantik-Elementen, wie im obigen Beispiel gesehen (siehe [content sectioning](/de/docs/Web/HTML/Element#content_sectioning)) — Sie können ein Layout nur mit verschachtelten {{htmlelement("div")}}-Elementen erstellen, aber es ist besser, geeignete Abschnittselemente zu verwenden, um Ihre Hauptnavigation ({{htmlelement("nav")}}), Fußzeile ({{htmlelement("footer")}}), sich wiederholende Inhaltseinheiten ({{htmlelement("article")}}) usw. zu umwickeln. Diese bieten zusätzliche Semantik für Screenreader (und andere Tools), um Benutzern zusätzliche Hinweise auf den von ihnen navigierten Inhalt zu geben (siehe [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) für eine Vorstellung davon, wie die Unterstützung von Screenreadern aussieht).

> [!NOTE]
> Zusätzlich zu guten Semantiken und einem ansprechenden Layout sollte Ihr Inhalt in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später immer mit CSS an beliebiger Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten, damit das, was Screenreader-Benutzern vorgelesen wird, sinnvoll ist.

### UI-Steuerelemente

Mit UI-Steuerelementen meinen wir die Hauptteile von Webdokumenten, mit denen Benutzer interagieren — meist Tasten, Links und Formularelemente. In diesem Abschnitt werden wir die grundlegenden Barrierefreiheitsbedenken betrachten, die beim Erstellen solcher Steuerelemente bewusst sein sollten. Spätere Artikel zu WAI-ARIA und Multimedia werden andere Aspekte der Benutzeroberflächenzugänglichkeit betrachten.

Ein Schlüsselmerkmal der Zugänglichkeit von UI-Steuerelementen ist, dass sie in den meisten Fällen von der Tastatur standardmäßig manipuliert werden können. Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Tastenanschlägen sollten Sie sehen, dass sich der Tabfocus durch die verschiedenen fokussierbaren Elemente bewegt. Die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (dieser unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie sehen können, welches Element fokussiert ist.

![Drei Tasten mit dem Text "Click me!", "Click me too!" und "And me!" innen. Die dritte Taste hat einen blauen Umriss, der den aktuellen Tabfocus anzeigt.](button-focused-unfocused.png)

> [!NOTE]
> Sie können ein Overlay aktivieren, das die Seiten-Tabs-Reihenfolge in Ihren Entwicklertools anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Anschließend können Sie [Enter/Return] drücken, um einen fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, um die Schaltflächen eine Nachricht ausgeben zu lassen), oder anfangen, Text in ein Texteingabefeld einzugeben. Andere Formularelemente haben unterschiedliche Steuerelemente; zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Pfeiltasten nach oben und unten durchgegangen werden.

Diese Funktionalität erhalten Sie im Wesentlichen kostenlos, einfach durch die Verwendung der geeigneten Elemente, z.B.

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

Das bedeutet, Links, Tasten, Formularelemente und Beschriftungen angemessen zu verwenden (einschließlich des {{htmlelement("label")}}-Elements für Formularkontrollen).

Es ist jedoch wiederum der Fall, dass Menschen manchmal seltsame Dinge mit HTML machen. Zum Beispiel sehen Sie manchmal Tasten, die mit {{htmlelement("div")}}s ausgezeichnet sind, z.B.:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Aber solch ein Code wird nicht empfohlen — Sie verlieren sofort die native Tastaturzugänglichkeit, die Sie hätten haben können, wenn Sie einfach {{htmlelement("button")}}-Elemente verwendet hätten, zudem erhalten Sie keine der Standard-CSS-Stilierungen, die Tasten erhalten. In dem seltenen bis nicht existierenden Fall, dass Sie ein Nicht-Taste-Element für eine Taste verwenden müssen, verwenden Sie die [`button` role](/de/docs/Web/Accessibility/ARIA/Roles/button_role) und implementieren Sie alle Standard-Schaltflächenverhaltensweisen, einschließlich Tastatur- und Mausunterstützung.

#### Tastaturzugänglichkeit wieder einbauen

Solche Vorteile wieder hinzuzufügen, erfordert etwas Arbeit (Sie können ein Beispiel in unserem [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel sehen — siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Tasten die Möglichkeit gegeben, fokussierbar zu sein (einschließlich über Tab) indem wir jedem Attribut `tabindex="0"` geben. Wir fügen auch `role="button"` hinzu, damit Screenreader-Benutzer wissen, dass sie sich auf das Element fokussieren und mit ihm interagieren können:

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

Grundsätzlich ist das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut primär dafür gedacht, fokussierbaren Elementen eine benutzerdefinierte Tab-Reihenfolge zu ermöglichen (in positiver numerischer Reihenfolge spezifiziert), anstatt sie einfach in ihrer Standardquellreihenfolge getabt zu durchlaufen. Dies ist fast immer eine schlechte Idee, da es zu großer Verwirrung führen kann. Verwenden Sie es nur, wenn es wirklich nötig ist, zum Beispiel wenn das Layout Dinge in einer sehr unterschiedlichen visuellen Reihenfolge zum Quellcode anzeigt und Sie die Dinge logischer gestalten möchten. Es gibt zwei weitere Optionen für `tabindex`:

- `tabindex="0"` — wie oben erwähnt, ermöglicht dieser Wert, dass nicht normalerweise fokussierbare Elemente fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dadurch können nicht normalerweise fokussierbare Elemente programmatisch fokussiert werden, z.B. über JavaScript oder als Ziel von Links.

Während die obige Ergänzung es uns erlaubt, zu den Tasten zu taben, erlaubt sie uns nicht, sie über die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste zu aktivieren. Um dies zu tun, mussten wir das folgende JavaScript hinzugefügt:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir einen Listener am `document`-Objekt hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste gedrückt wurde, über das `key`-Attribut des Ereignisobjektes; wenn die gedrückte Taste <kbd>Enter</kbd>/<kbd>Return</kbd> ist, führen wir die Funktion aus, die im `onclick`-Handler der Taste gespeichert ist, mit `document.activeElement.click()`. [`activeElement`](/de/docs/Web/API/Document/activeElement), das uns das Element gibt, das gerade auf der Seite fokussiert ist.

Dies ist eine Menge zusätzlicher Aufwand, um die Funktionalität wiederherzustellen. Und es gibt mit Sicherheit auch andere Probleme damit. **Besser, einfach von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.**

#### Bedeutungsvolle Textbezeichnungen

Textbezeichnungen von UI-Steuerelementen sind für alle Benutzer sehr nützlich, aber es ist besonders wichtig, dass sie für Benutzer mit Behinderungen korrekt sind.

Sie sollten sicherstellen, dass Ihre Button- und Linktextbezeichnungen verständlich und unterscheidbar sind. Verwenden Sie nicht einfach "Click here" für Ihre Beschriftungen, da Screenreader-Benutzer manchmal eine Liste von Schaltflächen und Formularelementen abrufen. Der folgende Screenshot zeigt unsere Steuerelemente, die von VoiceOver auf dem Mac aufgelistet werden.

![Liste von Formulareingabelabels, die von der VoiceOver-Software auf dem Mac aufgelistet werden. Diese Liste enthält bedeutungslose Labels wie 'happy menu button', die verschiedenen Formularelementen wie Tasten, Textfeldern und Links gegeben wurden.](voiceover-formcontrols.png)

Stellen Sie sicher, dass Ihre Bezeichnungen auch ohne Kontext, gelesen für sich allein, als auch im Kontext des Paragraphen, in dem sie sich befinden, sinnvoll sind. Beispiele für gute Linktexte sind:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

aber dies ist ein schlechter Linktext:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Sie können viel mehr über die Implementierung von Links und die besten Praktiken in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) finden. Sie können auch einige gute und schlechte Beispiele in [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) sehen.

Formularbezeichnungen sind auch wichtig, da sie Ihnen einen Hinweis darauf geben, was in jedes Formulareingabefeld eingegeben werden muss. Folgendes scheint ein ausreichend vernünftiges Beispiel zu sein:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Dies ist jedoch nicht so nützlich für behinderte Benutzer. Es gibt nichts im obigen Beispiel, das die Beschriftung unmissverständlich mit der Formulareingabe verknüpft und klarstellt, wie man sie ausfüllt, wenn man sie nicht sehen kann. Wenn Sie darauf mit einigen Screenreadern zugreifen, werden Sie möglicherweise mit einer Beschreibung erhalten, die ungefähr so lautet: "edit text."

Das Folgende ist ein viel besseres Beispiel:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Mit solchem Code wird die Beschriftung eindeutig mit der Eingabe verknüpft; die Beschreibung wird eher lauten: "Fill in your name: edit text."

![Eine gute Formularbezeichnung, die 'Fill in your name' liest und einer Texteingabe-Formularsteuerung gegeben wurde. ](voiceover-good-form-label.png)

Als zusätzlicher Bonus bedeutet das Verknüpfen einer Bezeichnung mit einer Formulareingabe in den meisten Browsern, dass Sie die Bezeichnung anklicken können, um das Formularfeld auszuwählen oder zu aktivieren. Dadurch erhält die Eingabe eine größere Trefffläche, was es einfacher macht, sie auszuwählen.

> [!NOTE]
> Sie können einige gute und schlechte Formularbeispiele in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) sehen.

Sie können eine schöne Erklärung der Bedeutung von richtigen Textlabels und wie man Textlabel-Probleme mit dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersucht, im folgenden Video finden:

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

Aber das hat Probleme — es gibt keine Möglichkeit für einen Screenreader-Benutzer, Reihen oder Spalten als Gruppierungen von Daten zu assoziieren. Dazu müssen Sie wissen, was die Überschriftenzeilen sind und ob sie Reihen oder Spaltenüberschriften sind. Dies kann nur visuell für die obige Tabelle getan werden (siehe [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und versuchen Sie das Beispiel selbst).

Schauen Sie sich jetzt unser [Punk-Bands-Tabellen-Beispiel](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) an — Sie können hier einige Barrierefreiheitshilfen in Aktion sehen:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert — Sie können auch angeben, ob sie Kopfzeilen für Reihen oder Spalten sind, indem Sie das `scope`-Attribut verwenden. Dies gibt Ihnen vollständige Datengruppen, die von Screenreadern als einzelne Einheiten konsumiert werden können.
- Das {{htmlelement("caption")}}-Element und das `summary`-Attribut des `<table>`-Elements erfüllen ähnliche Aufgaben — sie wirken als Alt-Text für eine Tabelle und geben einem Screenreader-Benutzer eine nützliche kurze Zusammenfassung der Inhalte der Tabelle. Das `<caption>`-Element wird im Allgemeinen bevorzugt, da es seinen Inhalt auch für sehende Benutzer zugänglich macht, die es ebenfalls nützlich finden könnten. Sie brauchen nicht wirklich beide.

> [!NOTE]
> Siehe unseren Artikel [HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) für mehr Details zu zugänglichen Datentabellen.

## Textalternativen

Während textbasierte Inhalte von Natur aus zugänglich sind, kann das gleiche nicht unbedingt für Multimedia-Inhalte gesagt werden — Bild- und Videoinhalte können von sehbehinderten Menschen nicht gesehen und Audiomaterial von hörgeschädigten Menschen nicht gehört werden. Wir behandeln Video- und Audiomaterialien detailliert in [Barrierefreies Multimedia](/de/docs/Learn_web_development/Core/Accessibility/Multimedia), aber für diesen Artikel werden wir die Barrierefreiheit für das bescheidene {{htmlelement("img")}}-Element betrachten.

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

Das erste Bild bietet dem Benutzer, wenn es von einem Screenreader betrachtet wird, wenig Hilfe — VoiceOver zum Beispiel liest "/dinosaur.png, image" vor. Es liest den Dateinamen vor, um etwas Hilfe zu leisten. In diesem Beispiel wird der Benutzer zumindest wissen, dass es eine Art Dinosaurier ist, aber oft können Dateien mit maschinengenerierten Dateinamen hochgeladen werden (z.B. aus einer Digitalkamera), die wahrscheinlich keinen Kontext zum Inhalt des Bildes bieten würden.

> [!NOTE]
> Aus diesem Grund sollten Sie niemals Textinhalte in ein Bild einbetten — Screenreader können es nicht darauf zugreifen. Es gibt auch andere Nachteile — man kann es nicht auswählen und kopieren/einfügen. Tun Sie es einfach nicht!

Wenn ein Screenreader auf das zweite Bild stößt, liest er das vollständige alt-Attribut vor — "A red Tyrannosaurus rex: A two-legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.".

Dies unterstreicht die Wichtigkeit, nicht nur bedeutungsvolle Dateinamen zu verwenden, falls sogenannter **Alt-Text** nicht verfügbar ist, sondern auch sicherzustellen, dass wo immer möglich Alt-Text in `alt`-Attributen bereitgestellt wird.

Der Inhalt des `alt`-Attributs sollte immer eine direkte Darstellung des Bildes und seiner visuellen Aussage bieten. Der Alt-Text sollte kurz und prägnant sein und alle im Bild enthaltenen Informationen umfassen, die nicht in den umgebenden Text dupliziert sind.

Der Inhalt des `alt`-Attributs für ein einzelnes Bild unterscheidet sich je nach Kontext. Wenn das Foto von Fluffy zum Beispiel ein Avatar neben einer Rezension für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn das Foto Teil der Adoptionsseite von Fluffy für die Tierrettungsgesellschaft ist, sollten Informationen, die im Bild vermittelt werden und die für einen potenziellen Hundebesitzer relevant sind und nicht im umgebenden Text dupliziert werden, aufgenommen werden. Eine längere Beschreibung, wie etwa `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."` ist angemessen. Da der umgebende Text wahrscheinlich bereits Fluffys Größe und Rasse enthält, wird dies nicht in den `alt` aufgenommen. Da jedoch die Biographie des Hundes wahrscheinlich keine Haarlänge, Farben oder Spielzeugpräferenzen enthält, die ein potenzieller Besitzer wissen muss, wird dies aufgenommen. Ist das Bild im Freien, oder hat Fluffy ein rotes Halsband mit einer blauen Leine? Nicht wichtig im Hinblick auf die Adoption des Haustiers und daher nicht mit eingeschlossen. Alle Informationen, die ein Bild vermittelt und auf die ein sitativer Benutzer zugreifen kann und die im Kontext relevant sind, müssen vermittelt werden; nicht mehr. Halten Sie es kurz, präzise und nützlich.

Jede persönliche Kenntnis oder zusätzliche Beschreibung sollte hier nicht eingefügt werden, da sie für Personen, die das Bild nicht vorher gesehen haben, nicht nützlich ist. Wenn der Ball Fluffys Lieblingsspielzeug ist oder wenn der sitativer Benutzer das nicht aus dem Bild wissen kann, dann fügen Sie es nicht hinzu.

Eine Sache, die Sie berücksichtigen sollten, ist, ob Ihre Bilder innerhalb Ihres Inhalts eine Bedeutung haben oder ob sie rein zur visuellen Verzierung dienen und somit keine Bedeutung haben. Wenn sie dekorativ sind, ist es besser, einen leeren Text als Wert für das `alt`-Attribut zu schreiben (siehe [Leere alt attribute](#leere_alt_attribute)) oder sie einfach auf der Seite als CSS-Hintergrundbilder einzuschließen.

> [!NOTE]
> Lesen Sie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive images](/de/docs/Web/HTML/Responsive_images) für viele weitere Informationen über die Implementierung von Bildern und bewährte Verfahren.
> Sie können auch den [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) überprüfen, um zu erfahren, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche kontextuelle Informationen bereitstellen möchten, sollten Sie diese im textlichen Kontext um das Bild herum oder in einem `title`-Attribut platzieren, wie oben gezeigt. In diesem Fall lesen die meisten Screenreader den Alt-Text, das Title-Attribut und den Dateinamen vor. Außerdem zeigen die Browser den Title-Text als Tooltips an, wenn sie mit der Maus darüber gefahren wird.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text "The mozilla red dinosaur", der bei Mouseover als Tooltip angezeigt wird.](title-attribute.png)

Werfen wir noch einen schnellen Blick auf die vierte Methode:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In diesem Fall verwenden wir das `alt`-Attribut überhaupt nicht — stattdessen haben wir unsere Beschreibung des Bildes als regulären Textabsatz präsentiert, ihm eine `id` gegeben und dann das `aria-labelledby`-Attribut verwendet, um auf diese `id` zu verweisen, was von Screenreadern dazu genutzt wird, diesen Absatz als Alt-Text/Beschriftung für dieses Bild zu verwenden. Dies ist besonders nützlich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten — etwas, das mit `alt` nicht möglich ist.

> **Hinweis:** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) Spezifikation, die es Entwicklern ermöglicht, zusätzliche Semantik in ihr Markup einzufügen, um die Barrierefreiheit von Screenreadern dort zu verbessern, wo sie benötigt wird.

### Abbildungen und Bildunterschriften

HTML inkludiert zwei Elemente — {{htmlelement("figure")}} und {{htmlelement("figcaption")}} — die eine Abbildung jeglicher Art (es könnte alles sein, nicht unbedingt ein Bild) mit einer Bildunterschrift verknüpfen:

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

Obwohl die Unterstützung von Screenreadern für die Verknüpfung von Bildunterschriften mit ihren Abbildungen gemischt ist, schafft die Einfügung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) die Verbindung, wenn keine vorhanden ist. Dennoch ist die Elementstruktur nützlich für CSS-Stilierungen, zudem bietet sie einen Weg, eine Beschreibung des Bildes im Quellinhalt daneben zu platzieren.

### Leere alt attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Es kann Zeiten geben, in denen ein Bild im Design einer Seite enthalten ist, aber sein primärer Zweck nur die visuelle Dekoration ist. Sie werden im obigen Codebeispiel bemerken, dass das `alt`-Attribut des Bildes leer ist — dies veranlasst Screenreader, das Bild zu erkennen, ohne zu versuchen, es zu beschreiben (stattdessen würden sie einfach "image", oder ähnliches sagen).

Der Grund, ein leeres `alt` anstelle es auszulassen, ist, weil viele Screenreader die gesamte Bild-URL ankündigen, wenn kein `alt` bereitgestellt wird. Im obigen Beispiel fungiert das Bild als visuelle Dekoration für die Überschrift, mit der es verbunden ist. In solchen Fällen und in Fällen, in denen ein Bild nur zur Dekoration dient und keinen Inhaltswert hat, sollten Sie ein leeres `alt` in Ihren `img`-Elementen beifügen. Eine Alternative ist die Verwendung des [role](/de/docs/Web/Accessibility/ARIA/Roles)-Attributs [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), das ebenfalls verhindert, dass Screenreader alternativen Text vorlesen.

> [!NOTE]
> Wenn möglich, sollten Sie CSS verwenden, um Bilder darzustellen, die nur dekorativ sind.

## Mehr zu Links

Links (das [`<a>`](/de/docs/Web/HTML/Element/a) Element mit einem `href`-Attribut), je nach ihrer Verwendung, können sie die Barrierefreiheit unterstützen oder schaden. Standardmäßig sind Links in Aussehen barrierefrei. Sie können die Barrierefreiheit unterstützen, indem sie dem Benutzer helfen, schnell zu verschiedenen Abschnitten eines Dokuments zu navigieren. Sie können jedoch auch die Barrierefreiheit beeinträchtigen, wenn ihr barrierefreies Styling entfernt wird oder wenn JavaScript dazu führt, dass sie sich unerwartet verhalten.

### Link Styling

Standardmäßig sind Links visuell von anderen Texten unterschiedlich in sowohl Farbe als auch [text-decoration](/de/docs/Web/CSS/text-decoration), wobei Links standardmäßig blau und unterstrichen, violett und unterstrichen sind, wenn sie besucht wurden, und mit einem [focus-ring](/de/docs/Web/CSS/:focus), wenn sie Tastaturfokus erhalten.

Farbe sollte nicht als das einzige Mittel verwendet werden, um Links von nicht-verlinkten Inhalten zu unterscheiden. Die Linktextfarbe, wie aller Text, muss sich erheblich von der Hintergrundfarbe abheben ([ein 4.5:1 Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten sich Links visuell erheblich von nicht-verlinktem Text unterscheiden, mit einer Mindestkontrastanforderung von 3:1 zwischen Linktext und umgebendem Text sowie zwischen Standard, Besuchs- und Fokus/Aktiv-Zuständen und einem 4.5:1 Kontrast zwischen all diesen Zustandfarben und der Hintergrundfarbe.

### `onclick`-Ereignisse

Ankertags werden oft in Verbindung mit dem `onclick`-Ereignis zur Erstellung von Pseudo-Schaltflächen missbraucht, indem **href** auf `"#"` oder `"javascript:void(0)"` gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird.

Diese Werte verursachen unerwartetes Verhalten beim Kopieren oder Ziehen von Links, Öffnen von Links in einem neuen Tab oder Fenster, beim Erstellen von Lesezeichen und wenn JavaScript noch heruntergeladen wird, fehlerhaft ist oder deaktiviert ist. Dies vermittelt auch falsche Semantik an assistive Technologien (z.B. Screenreader). In diesen Fällen wird empfohlen, stattdessen einen {{HTMLElement("button")}} zu verwenden. Im Allgemeinen sollten Sie eine Verknüpfung für die Navigation mit einer richtigen URL verwenden.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die über die `target="_blank"`-Deklaration in einem neuen Tab oder Fenster geöffnet werden, und Links zu deren `href`-Wert auf eine Dateiquelle zeigt, sollten einen Indikator darüber enthalten, welches Verhalten zu erwarten ist, wenn der Link aktiviert wird.

Personen mit Sehbehinderungen, die mit Hilfe von Screenreadern navigieren, oder die kognitive Bedenken haben, können verwirrt werden, wenn unerwartet ein neuer Tab, Fenster oder eine Anwendung geöffnet wird. Ältere Versionen von Screenreading-Software geben möglicherweise nicht einmal das Verhalten an.

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

Wenn ein Symbol verwendet wird, um dieses Verhalten von Links anstelle von Text anzuzeigen, stellen Sie sicher, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Element/img#alt) enthält.

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster oder Tabs von einem Link nur, wenn nötig | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Gibt Benutzern eine Vorwarnung, wenn ein neues Fenster geöffnet wird | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip Links

Ein Skip-Link, auch als Skipnav bekannt, ist ein `a`-Element, das so nah wie möglich am Beginn des {{HTMLElement("body")}}-Elements platziert wird und der zum Beginn des Hauptinhalts der Seite verlinkt. Dieser Link ermöglicht es Personen, Inhalt, der sich auf mehreren Seiten einer Website wiederholt, wie die Kopfzeile und die Hauptnavigation, zu überspringen.

Skip Links sind besonders nützlich für Menschen, die mit Unterstützungstechnologien wie Steuerungen, Sprachbefehlen oder Mundstäben/Kopfstöcken navigieren, bei denen das Durchgehen von sich wiederholenden Links eine mühsame Aufgabe sein kann.

- [WebAIM: "Navigation überspringen" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigation Links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Anker — sollten in enger visueller Nähe zueinander Platze eingefügt haben, um sie zu trennen. Dieser Abstand ist vorteilhaft für Personen, die an feinmotorischen Kontrollproblemen leiden und beim Navigieren versehentlich den falschen interaktiven Inhalt aktivieren können.

Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Problem mit großen Tasten - Axess Lab](https://axesslab.com/hand-tremors/)

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sehen Sie [Test your skills: HTML Accessibility](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility), um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen.

## Zusammenfassung

Sie sollten nun gut in der Lage sein, zugängliches HTML für die meisten Anlässe zu schreiben. Unser Artikel über WAI-ARIA-Grundlagen wird helfen, Lücken in diesem Wissen zu schließen, aber dieser Artikel hat die Grundlagen behandelt. Als Nächstes werden wir CSS und JavaScript erforschen und wie Barrierefreiheit durch deren gutes oder schlechtes Einsatz beeinflusst wird.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
