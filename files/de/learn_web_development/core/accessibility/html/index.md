---
title: "HTML: Eine gute Grundlage für Barrierefreiheit"
short-title: Barrierefreies HTML
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Ein großer Teil der Webinhalte lässt sich barrierefrei gestalten, indem Sie konsequent die richtigen HTML-Elemente für den jeweiligen Zweck verwenden. Dieser Artikel zeigt im Detail, wie HTML zu größtmöglicher Barrierefreiheit beitragen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> sowie ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheit</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Semantisches HTML verwenden – also „das richtige Element für die richtige Aufgabe“ –, weil Browser dafür zahlreiche Funktionen zur Barrierefreiheit bereitstellen.</li>
          <li>Bewährte Verfahren für Barrierefreiheit anwenden, etwa Alternativtexte, aussagekräftige Linktexte, Beschriftungen für Formulare sowie Überschriften und Geltungsbereiche für Tabellenzeilen und -spalten.</li>
          <li>Einfache, klare Sprache verwenden, Umgangssprache und Abkürzungen möglichst vermeiden und andernfalls Erklärungen bereitstellen.</li>
          <li>Das Konzept der Tastaturbedienbarkeit verstehen und anwenden.</li>
          <li>Die Bedeutung der Reihenfolge im Quellcode verstehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML und Barrierefreiheit

Wenn Sie mehr über HTML lernen – weitere Quellen lesen, sich mehr Beispiele ansehen usw. –, wird Ihnen ein Thema immer wieder begegnen: die Bedeutung von semantischem HTML (manchmal auch POSH, „Plain Old Semantic HTML“, genannt). Das bedeutet, HTML-Elemente möglichst entsprechend ihrem vorgesehenen Zweck einzusetzen.

Vielleicht fragen Sie sich, warum das so wichtig ist. Schließlich können Sie mit einer Kombination aus CSS und JavaScript nahezu jedes HTML-Element dazu bringen, sich beliebig zu verhalten. Eine Schaltfläche zum Abspielen eines Videos auf Ihrer Website ließe sich beispielsweise so auszeichnen:

```html
<div>Play video</div>
```

Wie Sie später genauer sehen werden, ist es jedoch sinnvoll, das passende Element für die jeweilige Aufgabe zu verwenden:

```html
<button>Play video</button>
```

HTML-`<button>`-Elemente verfügen nicht nur standardmäßig über eine passende Gestaltung (die Sie vermutlich anpassen möchten), sondern sind auch von Haus aus per Tastatur bedienbar: Benutzer können mit der <kbd>Tab</kbd>-Taste zwischen Schaltflächen wechseln und ihre Auswahl mit <kbd>Leertaste</kbd>, <kbd>Return</kbd> oder <kbd>Enter</kbd> aktivieren.

Semantisches HTML zu schreiben dauert nicht länger als nicht semantisches (schlechtes) Markup, wenn Sie es von Beginn Ihres Projekts an konsequent verwenden. Darüber hinaus bietet semantisches Markup weitere Vorteile:

1. **Einfachere Entwicklung** – wie oben erwähnt, erhalten Sie einige Funktionen ohne zusätzlichen Aufwand; außerdem ist der Code oft leichter zu verstehen.
2. **Besser für Mobilgeräte** – semantisches HTML ist in der Regel weniger umfangreich als nicht semantischer Spaghetti-Code und lässt sich leichter responsiv gestalten.
3. **Gut für SEO** – Suchmaschinen gewichten Schlüsselwörter in Überschriften, Links usw. stärker als solche in nicht semantischen `<div>`-Elementen. Ihre Dokumente sind dadurch für Kunden leichter auffindbar.

Sehen wir uns barrierefreies HTML nun genauer an.

## Gute Semantik

Wir haben bereits besprochen, wie wichtig eine passende Semantik ist und warum wir für jede Aufgabe das richtige HTML-Element verwenden sollten. Das darf nicht vernachlässigt werden: Falsche Semantik ist eine der Hauptursachen für mangelnde Barrierefreiheit.

Im Web wird HTML-Markup mitunter auf recht ungewöhnliche Weise eingesetzt. Häufig liegt das an veralteten Praktiken, die sich gehalten haben; manchmal wissen Autoren es aber auch nicht besser. In jedem Fall sollten Sie schlechten Code nach Möglichkeit durch gutes semantisches Markup ersetzen – sowohl auf statischen HTML-Seiten als auch in dynamisch generiertem HTML aus [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code oder [clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) wie React.

Manchmal können Sie ungeeignetes Markup nicht entfernen: Ihre Seiten hängen möglicherweise von serverseitigem Code oder Web- beziehungsweise Framework-Komponenten ab, auf die Sie keinen Einfluss haben. Vielleicht enthalten sie auch Inhalte Dritter, etwa Werbebanner.

Es geht nicht um „alles oder nichts“: Jede Verbesserung trägt zur Barrierefreiheit bei.

### Textinhalte gut strukturieren

Eine gut aufgebaute Textstruktur mit Überschriften, Absätzen, Listen usw. ist eine der größten Hilfen für Menschen, die Screenreader verwenden. Ein gutes semantisches Beispiel könnte so aussehen:

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

Wir haben eine Version mit längerem Text vorbereitet, die Sie mit einem Screenreader ausprobieren können: [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html). Beim Navigieren werden Sie feststellen, dass die Seite recht einfach zu bedienen ist:

1. Der Screenreader liest die Überschriften vor, während Sie sich durch den Inhalt bewegen, und teilt Ihnen mit, ob es sich um eine Überschrift, einen Absatz usw. handelt.
2. Er hält nach jedem Element an, sodass Sie in einem für Sie angenehmen Tempo fortfahren können.
3. In vielen Screenreadern können Sie zur nächsten oder vorherigen Überschrift springen.
4. Außerdem können Sie sich in vielen Screenreadern eine Liste aller Überschriften anzeigen lassen. Sie dient als praktisches Inhaltsverzeichnis, mit dem Sie bestimmte Inhalte finden können.

Manchmal werden Überschriften, Absätze usw. mithilfe von Zeilenumbrüchen und HTML-Elementen erstellt, die ausschließlich der Gestaltung dienen. Das kann etwa so aussehen:

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

Wenn Sie unsere längere Version mit einem Screenreader ausprobieren ([bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), werden Sie keine gute Erfahrung machen: Dem Screenreader fehlen Orientierungspunkte. Sie können kein brauchbares Inhaltsverzeichnis abrufen, und die gesamte Seite erscheint als ein einziger großer Block, der am Stück vorgelesen wird.

Neben der Barrierefreiheit entstehen weitere Probleme: Ohne geeignete Elemente als Selektoren lassen sich die Inhalte beispielsweise schwerer mit CSS gestalten oder mit JavaScript bearbeiten.

### Klare Sprache verwenden

Auch Ihre Sprache kann die Barrierefreiheit beeinflussen. Verwenden Sie grundsätzlich klare Sprache, die nicht unnötig kompliziert ist und auf überflüssige Fachausdrücke oder Umgangssprache verzichtet. Das hilft nicht nur Menschen mit kognitiven oder anderen Beeinträchtigungen, sondern auch Menschen, für die der Text nicht in ihrer Erstsprache verfasst ist, jüngeren Menschen – letztlich allen! Vermeiden Sie außerdem nach Möglichkeit Formulierungen und Zeichen, die Screenreader nicht eindeutig vorlesen. Zum Beispiel:

- Verwenden Sie nach Möglichkeit keine Gedankenstriche für Zahlenbereiche. Schreiben Sie statt „5–7“ besser „5 bis 7“.
- Schreiben Sie Abkürzungen aus – statt „Jan“ beispielsweise „Januar“.
- Schreiben Sie Akronyme zumindest bei den ersten ein oder zwei Vorkommen aus und verwenden Sie anschließend das [`<abbr>`](/de/docs/Web/HTML/Reference/Elements/abbr)-Element, um sie zu erläutern.

### Seitenabschnitte logisch strukturieren

Verwenden Sie geeignete [Elemente zur Gliederung von Inhalten](/de/docs/Web/HTML/Reference/Elements#content_sectioning), um Ihre Webseiten zu strukturieren, etwa für die Navigation ({{htmlelement("nav")}}), die Fußzeile ({{htmlelement("footer")}}) und wiederkehrende Inhaltseinheiten ({{htmlelement("article")}}). Diese Elemente liefern Screenreadern und anderen Werkzeugen zusätzliche semantische Informationen und erleichtern Benutzern die Orientierung.

Eine moderne Inhaltsstruktur könnte beispielsweise so aussehen:

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

Ein [vollständiges Beispiel finden Sie hier](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Neben guter Semantik und einem ansprechenden Layout sollten Ihre Inhalte auch in der Reihenfolge im Quellcode logisch aufgebaut sein. Sie können sie später mit CSS an der gewünschten Stelle platzieren. Die Reihenfolge im Quellcode sollte jedoch von Anfang an stimmen, damit das, was Screenreader vorlesen, sinnvoll ist.

### Nach Möglichkeit semantische Bedienelemente verwenden

Mit Bedienelementen meinen wir die Teile von Webdokumenten, mit denen Benutzer interagieren – vor allem Schaltflächen, Links und Formularelemente. In diesem Abschnitt betrachten wir die grundlegenden Aspekte der Barrierefreiheit, die Sie beim Erstellen solcher Elemente beachten sollten. Spätere Artikel über WAI-ARIA und Multimedia behandeln weitere Aspekte barrierefreier Benutzeroberflächen.

Ein entscheidender Aspekt ist, dass Browser die Bedienung nativer Bedienelemente per Tastatur standardmäßig ermöglichen. Probieren Sie das anhand unseres Beispiels [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) aus (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Öffnen Sie die Seite in einem neuen Tab und drücken Sie mehrmals die Tabulatortaste. Sie sollten sehen, wie sich der Tastaturfokus durch die verschiedenen fokussierbaren Elemente bewegt. Fokussierte Elemente erhalten in jedem Browser eine hervorgehobene Standarddarstellung, die sich von Browser zu Browser leicht unterscheidet.

![Drei Schaltflächen mit den Beschriftungen „Click me!“, „Click me too!“ und „And me!“. Die dritte Schaltfläche ist blau umrandet, um den aktuellen Tastaturfokus anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> In Ihren Entwicklerwerkzeugen können Sie eine Einblendung aktivieren, die die Tabulatorreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Anschließend können Sie mit Enter oder Return einem fokussierten Link folgen oder eine Schaltfläche betätigen (wir haben etwas JavaScript hinzugefügt, damit die Schaltflächen eine Meldung anzeigen). Bei einem Texteingabefeld können Sie einfach mit der Eingabe beginnen. Andere Formularelemente werden anders bedient: Beim Element {{htmlelement("select")}} lassen sich die Optionen beispielsweise mit den Pfeiltasten nach oben und unten anzeigen und durchlaufen.

Dieses Verhalten erhalten Sie im Wesentlichen ohne zusätzlichen Aufwand, indem Sie die passenden Elemente verwenden, zum Beispiel:

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

Das bedeutet, Links, Schaltflächen, Formularelemente und Beschriftungen angemessen einzusetzen – einschließlich des Elements {{htmlelement("label")}} für Formularelemente.

Auch hier wird HTML allerdings manchmal auf ungewöhnliche Weise verwendet. So werden Schaltflächen gelegentlich mit {{htmlelement("div")}}-Elementen ausgezeichnet:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

Davon ist abzuraten: Sie verlieren dadurch sofort die native Tastaturbedienbarkeit, die {{htmlelement("button")}}-Elemente bieten. Außerdem fehlt die Standardgestaltung, die Schaltflächen durch CSS erhalten. Falls Sie tatsächlich einmal ein anderes Element als `button` für eine Schaltfläche verwenden müssen, nutzen Sie die [`button`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) und implementieren Sie sämtliche Standardfunktionen einer Schaltfläche, einschließlich der Bedienung per Tastatur und Maus.

#### Tastaturbedienbarkeit nachträglich herstellen

Diese Vorteile nachträglich wiederherzustellen erfordert einiges an Arbeit. Ein Beispiel finden Sie in [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Dort machen wir unsere als Schaltflächen verwendeten `<div>`-Elemente fokussierbar – auch mit der Tabulatortaste –, indem wir jedem das Attribut `tabindex="0"` geben. Zusätzlich verwenden wir `role="button"`, damit Menschen mit Screenreadern erkennen, dass sie das Element fokussieren und damit interagieren können:

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

Das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist in erster Linie dazu gedacht, mit der Tabulatortaste erreichbaren Elementen eine benutzerdefinierte Tabulatorreihenfolge zu geben (festgelegt durch positive Zahlen), statt sie in der Reihenfolge des Quellcodes zu durchlaufen. Das ist fast immer eine schlechte Idee, weil es erhebliche Verwirrung stiften kann. Verwenden Sie es nur, wenn es wirklich nötig ist – etwa wenn die visuelle Reihenfolge im Layout stark von der Reihenfolge im Quellcode abweicht und Sie eine logischere Bedienung ermöglichen möchten. Für `tabindex` gibt es zwei weitere Werte:

- `tabindex="0"` – wie oben gezeigt, macht dieser Wert Elemente per Tabulatortaste erreichbar, die es normalerweise nicht sind. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` – damit können normalerweise nicht per Tabulatortaste erreichbare Elemente programmatisch fokussiert werden, etwa über JavaScript oder als Ziel von Links.

Durch die Ergänzungen oben können wir die Schaltflächen zwar mit der Tabulatortaste erreichen, aber noch nicht mit <kbd>Enter</kbd>/<kbd>Return</kbd> aktivieren. Dafür mussten wir folgendes JavaScript hinzufügen:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wenn eine Taste gedrückt wird. Über die Eigenschaft [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisobjekts prüfen wir, welche Taste gedrückt wurde. Ist es <kbd>Enter</kbd>/<kbd>Return</kbd>, führen wir die im `onclick`-Handler der Schaltfläche hinterlegte Funktion mit `document.activeElement.click()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) liefert das Element, das auf der Seite gerade fokussiert ist.

Es ist viel zusätzlicher Aufwand, diese Funktionalität nachträglich einzubauen. Wahrscheinlich entstehen dabei noch weitere Probleme. **Verwenden Sie daher am besten von Anfang an das richtige Element für die richtige Aufgabe.**

#### Aussagekräftige Textbeschriftungen verwenden

Textbeschriftungen für Bedienelemente sind für alle Benutzer hilfreich. Für Menschen mit Behinderungen ist es besonders wichtig, dass sie passend formuliert sind.

Achten Sie darauf, dass die Beschriftungen von Schaltflächen und Links verständlich und unterscheidbar sind. Verwenden Sie nicht einfach „Hier klicken“, denn Screenreader können Benutzern eine Liste von Schaltflächen und Formularelementen anzeigen. Der folgende Screenshot zeigt eine solche Liste in VoiceOver auf einem Mac.

![Liste von Beschriftungen für Formularelemente in VoiceOver auf einem Mac. Sie enthält wenig aussagekräftige Beschriftungen wie „happy menu button“ für verschiedene Bedienelemente, darunter Schaltflächen, Textfelder und Links.](voiceover-formcontrols.png)

Ihre Beschriftungen sollten sowohl für sich allein als auch im Kontext des umgebenden Absatzes verständlich sein. Das folgende Beispiel zeigt einen guten Linktext:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

Dieser Linktext hingegen ist schlecht:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> Mehr über die Umsetzung von Links und bewährte Verfahren erfahren Sie in unserem Artikel [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links). Gute und schlechte Beispiele finden Sie außerdem unter [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) und [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Auch Formularbeschriftungen sind wichtig: Sie zeigen an, was in ein Eingabefeld eingetragen werden soll. Das folgende Beispiel scheint zunächst angemessen:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

Für Menschen mit Behinderungen ist es jedoch wenig hilfreich. Nichts in diesem Beispiel verknüpft die Beschriftung eindeutig mit dem Eingabefeld. Wer das Feld nicht sehen kann, erfährt daher nicht, was einzutragen ist. Manche Screenreader geben möglicherweise nur eine Beschreibung wie „Text bearbeiten“ aus.

Das folgende Beispiel ist wesentlich besser:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

Hier ist die Beschriftung eindeutig mit dem Eingabefeld verknüpft. Die Ausgabe lautet dann eher „Geben Sie Ihren Namen ein: Text bearbeiten“.

![Ein Texteingabefeld mit der passenden Beschriftung „Fill in your name“.](voiceover-good-form-label.png)

Ein weiterer Vorteil: In den meisten Browsern können Sie bei einem Eingabefeld mit zugehöriger Beschriftung auch auf die Beschriftung klicken, um das Formularelement auszuwählen oder zu aktivieren. Dadurch wird die anklickbare Fläche größer.

> [!NOTE]
> Gute und schlechte Formularbeispiele finden Sie unter [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) und [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html).

Das folgende Video erklärt anschaulich, warum passende Textbeschriftungen wichtig sind und wie Sie Probleme damit mithilfe des [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) untersuchen können:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Barrierefreie Datentabellen

Eine einfache Datentabelle lässt sich mit sehr einfachem Markup erstellen, zum Beispiel:

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

Das bringt jedoch Probleme mit sich: Benutzer von Screenreadern können Zeilen oder Spalten nicht als zusammengehörige Datengruppen erkennen. Dafür muss ersichtlich sein, welche Zellen Überschriften sind und ob sie für Zeilen, Spalten usw. gelten. Bei der obigen Tabelle lässt sich das nur visuell erkennen. Sehen Sie sich [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) an und probieren Sie das Beispiel selbst aus.

Betrachten Sie nun unser [Tabellenbeispiel mit Punkbands](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html). Dort kommen mehrere Hilfen für die Barrierefreiheit zum Einsatz:

- Tabellenüberschriften werden mit {{htmlelement("th")}}-Elementen definiert. Über das Attribut `scope` können Sie außerdem angeben, ob sie sich auf Zeilen oder Spalten beziehen. So entstehen zusammengehörige Datengruppen, die Screenreader als Einheiten erfassen können.
- Das Element {{htmlelement("caption")}} und das Attribut `summary` des `<table>`-Elements erfüllen ähnliche Aufgaben: Sie bieten eine Art Alternativtext für die Tabelle und geben Benutzern von Screenreadern einen schnellen, hilfreichen Überblick über ihren Inhalt. Das `<caption>`-Element ist in der Regel vorzuziehen, da sein Inhalt auch für sehende Benutzer zugänglich ist, denen er ebenfalls helfen kann. Beides zusammen ist nicht wirklich nötig.

> [!NOTE]
> Weitere Informationen zu barrierefreien Datentabellen finden Sie in unserem Artikel [Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility).

## Textalternativen

Textinhalte sind von sich aus zugänglich; für Multimedia-Inhalte gilt das nicht unbedingt. Menschen mit Sehbeeinträchtigungen können Bild- und Videoinhalte nicht sehen, und Menschen mit Hörbeeinträchtigungen können Audioinhalte nicht hören. Video- und Audioinhalte behandeln wir ausführlich im Artikel [Barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia). Hier befassen wir uns mit der Barrierefreiheit des einfachen {{htmlelement("img")}}-Elements.

Unser einfaches Beispiel [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html) enthält viermal dasselbe Bild:

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

Das erste Bild bietet Benutzern von Screenreadern kaum Hilfe. VoiceOver liest beispielsweise „/dinosaur.png, Bild“ vor. Der Dateiname wird ausgegeben, um wenigstens einen Hinweis zu geben. In diesem Beispiel erfahren Benutzer zumindest, dass es sich um eine Art Dinosaurier handelt. Oft werden Dateien jedoch mit automatisch erzeugten Namen hochgeladen, etwa von einer Digitalkamera. Solche Dateinamen bieten wahrscheinlich keinen Hinweis auf den Bildinhalt.

> [!NOTE]
> Deshalb sollten Sie Textinhalte niemals in ein Bild einfügen: Screenreader können nicht darauf zugreifen. Es gibt weitere Nachteile – der Text lässt sich beispielsweise weder auswählen noch kopieren und einfügen. Verzichten Sie darauf!

Beim zweiten Bild liest ein Screenreader den vollständigen Inhalt des `alt`-Attributs vor: „A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.“.

Das verdeutlicht, wie wichtig nicht nur aussagekräftige Dateinamen für den Fall fehlender **Alternativtexte** sind, sondern auch Alternativtexte in `alt`-Attributen, wo immer dies möglich ist.

Der Inhalt des `alt`-Attributs sollte das Bild und seine visuelle Aussage stets unmittelbar wiedergeben. Der Alternativtext sollte kurz und präzise sein und alle durch das Bild vermittelten Informationen enthalten, die nicht bereits im umgebenden Text stehen.

Welcher Inhalt für das `alt`-Attribut eines Bildes passend ist, hängt vom Kontext ab. Steht ein Foto von Fluffy als Avatar neben einer Bewertung des Hundefutters Yuckymeat, ist `alt="Fluffy"` angemessen. Gehört das Foto dagegen zu Fluffys Vermittlungsseite bei einem Tierschutzverein, sollten die für potenzielle Hundehalter relevanten Informationen aus dem Bild enthalten sein, sofern sie nicht bereits im umgebenden Text stehen. Dann ist eine längere Beschreibung wie `alt="Fluffy, a tri-color terrier with very short hair, with a tennis ball in her mouth."` angemessen. Größe und Rasse von Fluffy stehen wahrscheinlich bereits im umgebenden Text und müssen daher nicht in `alt` wiederholt werden. Felllänge, Farben oder Spielzeugvorlieben werden in Fluffys Beschreibung dagegen möglicherweise nicht erwähnt, könnten für Interessenten aber relevant sein. Steht Fluffy im Freien oder trägt sie ein rotes Halsband mit blauer Leine? Für die Vermittlung ist das nicht wichtig und gehört deshalb nicht in den Alternativtext. Vermitteln Sie alle Informationen, die sehende Benutzer dem Bild entnehmen können und die im jeweiligen Kontext relevant sind – nicht mehr. Halten Sie den Text kurz, präzise und nützlich.

Persönliches Wissen oder zusätzliche Beschreibungen gehören nicht hierher, da sie Menschen, die das Bild nicht gesehen haben, nicht weiterhelfen. Wenn der Ball Fluffys Lieblingsspielzeug ist, sehende Benutzer das aber nicht aus dem Bild erkennen können, erwähnen Sie es nicht.

Überlegen Sie auch, ob Ihre Bilder eine inhaltliche Bedeutung haben oder lediglich der visuellen Gestaltung dienen. Sind sie rein dekorativ, ist ein leerer Wert für das `alt`-Attribut besser (siehe [Leere alt-Attribute](#leere_alt-attribute)). Alternativ können Sie sie als CSS-Hintergrundbilder einbinden.

> [!NOTE]
> Weitere Informationen zur Einbindung von Bildern und zu bewährten Verfahren finden Sie unter [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).
> Der [Entscheidungsbaum für alt-Texte](https://www.w3.org/WAI/tutorials/images/decision-tree/) zeigt außerdem, wie Sie das `alt`-Attribut in verschiedenen Situationen verwenden.

Wenn Sie zusätzliche Kontextinformationen bereitstellen möchten, fügen Sie sie in den Text um das Bild herum oder, wie oben gezeigt, in ein `title`-Attribut ein. In diesem Fall lesen die meisten Screenreader den Alternativtext, das `title`-Attribut und den Dateinamen vor. Browser zeigen den Text des `title`-Attributs zudem als Tooltip an, wenn der Mauszeiger über dem Bild steht.

![Screenshot eines roten Tyrannosaurus Rex mit dem Text „The mozilla red dinosaur“, der beim Zeigen mit dem Mauszeiger als Tooltip erscheint.](title-attribute.png)

Sehen wir uns die vierte Methode noch kurz an:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

Hier verwenden wir das `alt`-Attribut überhaupt nicht. Stattdessen steht die Bildbeschreibung in einem normalen Textabsatz, dem wir eine `id` gegeben haben. Mit dem Attribut `aria-labelledby` verweisen wir auf diese `id`. Dadurch verwenden Screenreader den Absatz als Alternativtext beziehungsweise Beschriftung für das Bild. Das ist besonders hilfreich, wenn Sie denselben Text als Beschriftung für mehrere Bilder verwenden möchten – mit `alt` ist das nicht möglich.

> [!NOTE]
> [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ist Teil der [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation. Sie ermöglicht es Entwicklern, ihrem Markup bei Bedarf zusätzliche semantische Informationen hinzuzufügen und so die Zugänglichkeit für Screenreader zu verbessern.

### Abbildungen und Bildunterschriften

HTML enthält zwei Elemente – {{htmlelement("figure")}} und {{htmlelement("figcaption")}} –, mit denen sich eine Abbildung beliebiger Art (nicht unbedingt ein Bild) und ihre Beschriftung einander zuordnen lassen:

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

Screenreader unterstützen die Zuordnung von Bildunterschriften zu Abbildungen unterschiedlich gut. Mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) können Sie die Zuordnung herstellen, falls sie sonst nicht erkannt wird. Die Elementstruktur ist zudem für die Gestaltung mit CSS nützlich und ermöglicht es, eine Beschreibung direkt neben dem Bild im Quellcode zu platzieren.

### Leere alt-Attribute

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

Manchmal gehört ein Bild zum Design einer Seite, dient aber hauptsächlich der visuellen Dekoration. Im obigen Codebeispiel ist das `alt`-Attribut des Bildes leer. Dadurch erkennen Screenreader das Bild, versuchen aber nicht, es zu beschreiben (stattdessen geben sie lediglich „Bild“ oder etwas Ähnliches aus).

Ein leeres `alt`-Attribut ist besser als gar keines, weil viele Screenreader andernfalls die vollständige Bild-URL vorlesen. Im obigen Beispiel dient das Bild als visuelle Dekoration für die zugehörige Überschrift. In solchen Fällen und immer dann, wenn ein Bild ausschließlich dekorativ ist und keinen inhaltlichen Wert hat, sollten Sie für Ihre `img`-Elemente ein leeres `alt`-Attribut verwenden. Eine weitere Möglichkeit ist das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) mit dem Wert [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role). Auch damit verhindern Sie, dass Screenreader Alternativtext vorlesen.

> [!NOTE]
> Stellen Sie rein dekorative Bilder nach Möglichkeit mit CSS dar.

## Mehr über Links

Links (das Element [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) mit einem `href`-Attribut) können die Barrierefreiheit je nach Verwendung verbessern oder beeinträchtigen. Standardmäßig sind Links an ihrem Erscheinungsbild gut erkennbar. Sie können die Barrierefreiheit verbessern, indem sie Benutzern helfen, schnell zu anderen Abschnitten eines Dokuments zu navigieren. Entfernt man jedoch ihre zugängliche Gestaltung oder verändert JavaScript ihr Verhalten auf unerwartete Weise, können sie die Barrierefreiheit beeinträchtigen.

### Gestaltung von Links

Links unterscheiden sich standardmäßig sowohl durch ihre Farbe als auch durch ihre [Textdekoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) vom übrigen Text: Unbesuchte Links sind blau und unterstrichen, besuchte Links violett und unterstrichen. Wenn sie per Tastatur fokussiert werden, erhalten sie außerdem einen [Fokusring](/de/docs/Web/CSS/Reference/Selectors/:focus).

Farbe sollte nicht das einzige Mittel sein, um Links von anderen Inhalten zu unterscheiden. Wie jeder Text muss sich auch Linktext deutlich von der Hintergrundfarbe abheben ([Kontrastverhältnis von 4,5:1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Darüber hinaus sollten Links sich visuell deutlich von nicht verlinktem Text unterscheiden: Zwischen Linktext und umgebendem Text sowie zwischen den Zuständen „Standard“, „besucht“ und „fokussiert/aktiv“ ist ein Mindestkontrast von 3:1 erforderlich. Zwischen den Farben all dieser Zustände und der Hintergrundfarbe sollte der Kontrast 4,5:1 betragen.

### `onclick`-Ereignisse

Anker-Elemente werden häufig mithilfe des `onclick`-Ereignisses als Pseudo-Schaltflächen verwendet. Dabei wird **href** auf `"#"` oder `"javascript:void(0)"` gesetzt, um ein erneutes Laden der Seite zu verhindern.

Solche Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen in einem neuen Tab oder Fenster und beim Anlegen von Lesezeichen. Das gilt auch, wenn JavaScript noch geladen wird, einen Fehler verursacht oder deaktiviert ist. Außerdem vermitteln sie assistiven Technologien wie Screenreadern eine falsche Semantik. Verwenden Sie in solchen Fällen besser ein {{HTMLElement("button")}}-Element. Ein Anker-Element sollten Sie grundsätzlich nur zur Navigation mit einer gültigen URL einsetzen.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die über `target="_blank"` in einem neuen Tab oder Fenster geöffnet werden, sowie Links, deren `href`-Wert auf eine Datei verweist, sollten auf das Verhalten beim Aktivieren hinweisen.

Menschen mit Sehbeeinträchtigungen, Benutzer von Screenreadern und Menschen mit kognitiven Beeinträchtigungen können verwirrt sein, wenn sich unerwartet ein neuer Tab, ein Fenster oder eine Anwendung öffnet. Ältere Screenreader weisen möglicherweise nicht einmal auf dieses Verhalten hin.

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

Wenn Sie statt Text ein Symbol verwenden, um auf dieses Linkverhalten hinzuweisen, achten Sie darauf, dass es eine [alternative Beschreibung](/de/docs/Web/HTML/Reference/Elements/img#alt) hat.

- [WebAIM: Links und Hypertext – Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Neue Fenster und Tabs über einen Link nur bei Bedarf öffnen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer vor dem Öffnen eines neuen Fensters darauf hinweisen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein Sprunglink, auch „Skipnav“ genannt, ist ein `a`-Element, das möglichst nahe am öffnenden {{HTMLElement("body")}}-Element platziert wird und zum Anfang des Hauptinhalts der Seite führt. Damit können Benutzer Inhalte überspringen, die auf mehreren Seiten einer Website wiederholt werden, etwa den Seitenkopf und die Hauptnavigation.

Sprunglinks sind besonders hilfreich für Menschen, die mit assistiven Technologien wie Schaltersteuerung, Sprachbefehlen oder Mund- beziehungsweise Kopfstäben navigieren. Für sie kann es mühsam sein, sich durch wiederholte Links zu bewegen.

- [WebAIM: „Skip Navigation“-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Sprunglinks verwenden – The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erfolgskriterium 2.4.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Abstand

Wenn viele interaktive Inhalte – einschließlich Links – visuell dicht beieinanderliegen, sollten Sie Abstand zwischen ihnen schaffen. Das hilft Menschen mit eingeschränkter Feinmotorik, die beim Navigieren sonst versehentlich das falsche Bedienelement aktivieren könnten.

Abstände lassen sich mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugen.

- [Zitternde Hände und das Problem riesiger Schaltflächen – Axess Lab](https://axesslab.com/hand-tremors/)

## Zusammenfassung

Sie sollten nun gut darauf vorbereitet sein, in den meisten Fällen barrierefreies HTML zu schreiben. Im nächsten Artikel finden Sie einige Tests, mit denen Sie prüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
