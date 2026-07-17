---
title: CSS und JavaScript Zugänglichkeits-Best-Praktiken
short-title: Zugängliches CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 0c62b082755017d0773ecaaee7e74efd5e066d0b
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript können, wenn sie richtig verwendet werden, zugängliche Web-Erlebnisse ermöglichen oder die Zugänglichkeit erheblich beeinträchtigen, wenn sie falsch verwendet werden. Dieser Artikel skizziert einige Best-Praktiken für CSS und JavaScript, die in Betracht gezogen werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Zugänglichkeitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zugängliche Textgrößen und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Wichtigkeit von <code>:focus</code> und <code>:hover</code> Styles.</li>
          <li>Verantwortungsvolle Nutzung von Animationen — Animationen dezent einsetzen und Kontrollen bereitstellen, um sie abzuschalten.</li>
          <li>Best-Praktiken zum Verstecken von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Das Bewusstsein, dass es so etwas wie zu viel JavaScript gibt, und den Wert von unaufdringlichem JavaScript.</li>
          <li>Verwendung von Ereignissen sinnvoll gestalten, damit Sie bestimmte Steuerungstypen nicht ausschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript zugänglich?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Zugänglichkeit wie HTML, aber sie können dennoch die Zugänglichkeit unterstützen oder schädigen, abhängig davon, wie sie verwendet werden. Anders ausgedrückt ist es wichtig, einige Best-Practice-Ratschläge zu berücksichtigen, um sicherzustellen, dass die Nutzung von CSS und JavaScript die Zugänglichkeit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element wie _irgendetwas_ aussehen zu lassen, aber das bedeutet nicht, dass Sie das tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Basis für Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie, wann immer möglich, das geeignete semantische Element für die jeweilige Aufgabe verwenden. Andernfalls kann es zu Verwirrung und Usability-Problemen für alle führen, insbesondere aber für Benutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit Benutzererwartungen zu tun – Elemente sehen gemäß ihrer Funktionalität aus und verhalten sich so, wie die Benutzer es erwarten.

Ein Beispiel: Ein Benutzer eines Bildschirmlesers kann eine Seite nicht über Überschriftenelemente navigieren, wenn der Entwickler die Inhaltsmarkierung nicht mit Überschriftenelementen richtig implementiert hat. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht wie eine Überschrift aussieht.

Letztlich können Sie das Styling einer Seitenfunktion so anpassen, dass sie zu Ihrem Design passt, aber verändern Sie es nicht so sehr, dass es nicht mehr aussieht oder sich nicht mehr verhält wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die beachtet werden sollten.

#### "Standard"-Textinhaltsstruktur

Überschriften, Absätze, Listen — der Kerninhalt Ihrer Seite:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

Ein typisches CSS könnte so aussehen:

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

Sie sollten:

- Sinnvolle Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, um Ihren Text logisch, leserlich und angenehm zu gestalten.
- Sicherstellen, dass Ihre Überschriften sich vom Fließtext abheben, typischerweise groß und fett wie das Standard-Styling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Weitere Informationen finden Sie unter [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS Textstyling](/de/docs/Learn_web_development/Core/Text_styling).

#### Betonter Text

Inline-Markup, das dem umgebenden Text spezifischen Nachdruck verleiht:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie Ihrem betonten Text eine einfache Färbung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

In der Regel benötigen Sie jedoch selten ein bedeutendes Styling von Betonelementen. Die Standardkonventionen von fettem und kursivem Text sind sehr gut erkennbar, und das Ändern des Stils kann Verwirrung stiften. Weitere Informationen zu Betonung finden Sie unter [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Erweiterung assoziiert:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Wiederum möchten Sie es vielleicht auf eine einfache Weise gestalten:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Styling-Konvention für Abkürzungen ist ein gepunkteter Unterstrich, und es ist unklug, davon erheblich abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — der Weg zu neuen Orten im Web:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Link-Styling wird unten gezeigt:

```css
a {
  color: red;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: black;
  background-color: #a60000;
}
```

Die Standard-Link-Konventionen sind unterstrichen und in einer anderen Farbe (Standard: Blau) in ihrem Standardzustand, eine weitere Farbvariation, wenn der Link zuvor besucht wurde (Standard: Lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: Rot). Zusätzlich ändert sich das Mauszeigersymbol zu einem Zeiger, wenn Links übermalt werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. über die Tabulatortaste) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist hervorgehoben durch eine blaue gepunktete Umrandung, wenn es über Tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement ist hervorgehoben durch eine blaue Umrandung, wenn es über Tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Link-Stilen sein, solange Sie den Benutzern eine Rückmeldung geben, wenn sie mit den Links interagieren. Es sollte auf jeden Fall etwas passieren, wenn sich die Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen – beide sind sehr wichtige Zugänglichkeitshelfer für Benutzer, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, um Benutzern das Eingeben von Daten in Websites zu ermöglichen:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können einige gute Beispiel-CSS in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel sehen (auch [live ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Das meiste der CSS, das Sie für Formulare schreiben, wird dafür sein, die Elemente zu dimensionieren, Beschriftungen und Eingaben auszurichten und sie ordentlich und aufgeräumt aussehen zu lassen.

Sie sollten jedoch nicht zu sehr von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde das gleiche ist wie bei Links (siehe oben). Sie könnten Fokus-/Hover-Zustände der Formulare gestalten, um dieses Verhalten über Browser hinweg einheitlicher zu machen oder besser zu Ihrem Seitendesign zu passen, aber entfernen Sie es nicht vollständig – wieder einmal verlassen sich Menschen auf diese Hinweise, um zu wissen, was passiert.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Sie können ein gutes, einfaches Beispiel für HTML und CSS einer Tabelle in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel sehen (auch [live ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient meist dazu, die Tabelle besser in Ihr Design einzufügen und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass sich die Tabellenüberschriften deutlich abheben (normalerweise durch Fett), und Zebrastreifen zu verwenden, um verschiedene Zeilen leichter lesbar zu machen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website wählen, stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nutzlos, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt einen einfachen Weg, um zu überprüfen, ob der Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Kontrast-Tools online, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) einfach zu verwenden und bietet eine Erklärung, was Sie tun müssen, um den WCAG-Kriterien in Bezug auf Farbkontrast gerecht zu werden.

> [!NOTE]
> Ein hoher Kontrast wird auch jedem Smartphone oder Tablet-Benutzer mit einem glänzenden Display helfen, Seiten in einer hellen Umgebung, wie Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht allein auf Farbe für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nutzlos sein wird. Anstatt zum Beispiel erforderliche Formularfelder rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel in unserem [Tabellierte Informationsbox-Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Informationspaneele, aber wir positionieren sie [übereinander](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) und bieten Registerkarten an, die angeklickt werden können, um jedes davon zu zeigen (es ist auch tastaturzugänglich – Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei Registerkarten-Benutzeroberfläche mit ausgewähltem Tab 1 und nur dessen Inhalte werden angezeigt. Die Inhalte anderer Registerkarten sind verborgen. Wenn eine Registerkarte ausgewählt ist, ändert sich ihre Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe wechselt von Orangerot zu Sattbraun.](tabbed-info-box.png)

Bildschirmleser-Benutzer interessieren sich dafür nicht – sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie auf alles zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen zum Verstecken von Inhalten für visuelle Effekte angesehen, da es Bildschirmlesern nicht den Zugriff darauf verwehrt.

Andererseits sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie den Inhalt vor Bildschirmlesern verbergen. Es sei denn, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Bildschirmlesern verborgen bleibt.

> [!NOTE]
> [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Styles überschreiben können

Es ist möglich für Benutzer, Ihre Styles mit ihren eigenen benutzerdefinierten Styles zu überschreiben, zum Beispiel:

- Siehe Sarah Maddox' [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden, der erklärt, wie man das manuell in Firefox macht.
- Es ist wahrscheinlich einfacher, es mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, wobei Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer möchte vielleicht den Text auf allen besuchten Websites vergrößern, oder ein Benutzer mit schwerer Farbsehschwäche möchte vielleicht alle Websites in hohen Kontrastfarben darstellen, die für ihn leicht zu sehen sind. Was auch immer das Bedürfnis ist, Sie sollten damit einverstanden sein und Ihre Designs flexibel gestalten, damit solche Änderungen in Ihrem Design funktionieren. Zum Beispiel könnten Sie sicherstellen, dass Ihr Hauptinhaltsbereich größere Texte verarbeiten kann (vielleicht beginnt er dann zu scrollen, damit alles sichtbar ist) und den Text nicht einfach verborgen oder komplett kaputt gemacht wird.

## JavaScript

JavaScript kann auch die Zugänglichkeit beeinträchtigen, je nachdem, wie es verwendet wird.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage sehr viel damit tun, von einfachen Inhalts- und UI-Aktualisierungen bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100% für alle Menschen zugänglich sein müssen – Sie müssen nur das tun, was Sie können, und Ihre Apps so zugänglich wie möglich machen.

Einfache Inhalte und Funktionen sind wohl einfach zugänglich zu machen – etwa Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML) untersucht haben, sind die zentralen Überlegungen:

- Gute Semantik: Verwenden Sie das richtige Element für die jeweilige Aufgabe. Zum Beispiel, achten Sie darauf, Überschriften und Absätze sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elemente zu verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel angesehen, wie man JavaScript verwendet, um Funktionalität dort einzubauen, wo sie fehlt – siehe [Wieder Einbauen von Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal – Sie sollten wirklich einfach das richtige Element für die richtige Aufgabe verwenden – aber es zeigt, dass es in Situationen, in denen Sie aus irgendeinem Grund die zu verwendende Markup nicht kontrollieren können, möglich ist. Eine andere Möglichkeit, die Zugänglichkeit für nicht-semantische, JavaScript-gesteuerte Widgets zu verbessern, ist die Verwendung von WAI-ARIA, um zusätzlichen Semantik für Benutzer von Bildschirmlesern bereitzustellen. Der nächste Artikel wird dies ebenfalls ausführlich behandeln.

Komplexe Funktionen wie 3D-Spiele sind nicht so einfach zugänglich zu machen – ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen bereitzustellen, die schwer sehbeeinträchtigte Benutzer nutzen können. Es ist argumentierbar, dass ein solches Spiel diese Benutzergruppe nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unrealistisch, von Ihnen zu erwarten, dass Sie es zu 100 % zugänglich für blinde Menschen machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Benutzern bedienbar ist, und das Farbschema kontrastreich genug gestalten, um von Personen mit Farbfehlsichtigkeiten genutzt zu werden.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn Menschen zu sehr auf JavaScript vertrauen. Manchmal sehen Sie eine Website, bei der alles mit JavaScript gemacht wurde – das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert usw. Dies hat alle möglichen Zugänglichkeits- und andere Probleme, die damit verbunden sind, also wird es nicht empfohlen.

Neben der Verwendung des richtigen Elements für

die richtige Aufgabe, sollten Sie auch darauf achten, die richtige Technologie für die richtige Aufgabe zu verwenden! Denken Sie sorgfältig darüber nach, ob Sie diese schicke, JavaScript-gesteuerte 3D-Informationsbox wirklich benötigen oder ob einfacher Text ausreicht. Überlegen Sie sorgfältig, ob Sie ein komplexes, nicht standardmäßiges Formular-Widget benötigen oder ob ein Texteingabefeld ausreicht. Und generieren Sie nach Möglichkeit nicht Ihren gesamten HTML-Inhalt mit JavaScript.

### Es unaufdringlich halten

Sie sollten **unaufdringliches JavaScript** im Auge behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unaufdringlichem JavaScript ist, dass es, wo immer möglich, zur Verbesserung der Funktionalität verwendet werden sollte, nicht um sie vollständig zu integrieren – grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, auch wenn dies nicht immer möglich ist. Aber wiederum geht ein großer Teil davon darauf zurück, die im Browser integrierte Funktionalität wann immer möglich zu nutzen.

Gute Beispiele für die Verwendung von unaufdringlichem JavaScript sind:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf die Serverprüfung der Daten warten zu müssen. Wenn diese nicht verfügbar ist, funktioniert das Formular weiterhin, aber die Validierung kann langsamer sein.
- Bereitstellung von benutzerdefinierten Steuerelementen für HTML `<video>`s, die für Tastatur-only-Benutzer zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die Standard-`<video>`-Browsersteuerungen sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir eine schnelle und simple clientseitige Formularvalidierungs-Beispiel geschrieben – siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch [die Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular einzureichen, während eines oder beide Felder leer sind, schlägt die Einreichung fehl und ein Fehlermeldung erscheint, um Ihnen zu sagen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich – Sie können das Formular weiterhin problemlos nutzen, auch wenn JavaScript nicht verfügbar ist, und jede vernünftige Formulareinführung wird auch eine serverseitige Validierung aktiv haben, da es zu einfach ist für bösartige Benutzer, clientseitige Validierung zu umgehen (zum Beispiel durch Deaktivieren von JavaScript im Browser). Die clientseitige Validierung ist dennoch sehr nützlich für die Fehlerberichterstattung — Benutzer können sofort über Fehler, die sie machen, informiert werden, statt auf einen Roundtrip zum Server und einen Seitenreload warten zu müssen. Das ist ein deutlicher Usability-Vorteil.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}} Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig mit ihren Eingaben verknüpft sind, sodass Bildschirmleser sie zusammen mit der Eingabe lesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular eingereicht wird — das ist, um die UI nicht zu oft zu aktualisieren und möglicherweise Bildschirmleser (und möglicherweise andere) Benutzer zu verwirren:

```js
form.onsubmit = validate;

function validate(e) {
  errorList.textContent = "";
  for (const testItem of formItems) {
    if (testItem.input.value === "") {
      errorField.style.left = "360px";
      createLink(testItem);
    }
  }

  if (errorList.hasChildNodes()) {
    e.preventDefault();
  }
}
```

> [!NOTE]
> In diesem Beispiel blenden wir die Fehlermeldungsbox ein und aus, indem wir absolute Positionierung statt einer anderen Methode wie Sichtbarkeit oder Anzeige verwenden, weil es dem Bildschirmleser nicht im Weg steht, den Inhalt darin zu lesen.

Reale Formularvalidierung wäre viel komplexer als dies — Sie möchten sicherstellen, dass der eingegebene Name tatsächlich wie ein Name aussieht, dass das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z.B. nicht negativ und weniger als 4 Ziffern). Hier haben wir nur eine einfache Überprüfung implementiert, dass ein Wert in jedes Eingabefeld eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird das Formular eingereicht, wenn die Tests bestanden werden. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), verhindern wir das Senden des Formulars (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen alle angeführten Fehlermeldungen an (siehe unten). Dieser Mechanismus sorgt dafür, dass die Fehler nur dann angezeigt werden, wenn es tatsächlich Fehler gibt, was besser für die Benutzerfreundlichkeit ist.

Für jedes Eingabefeld, das keinen Wert enthält, wenn das Formular eingereicht wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

```js
function createLink(testItem) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  const name = testItem.input.name;
  anchor.textContent = `${name} field is empty: fill in your ${name}.`;
  anchor.href = `#${name}`;
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
```

Jeder Link hat eine doppelte Funktion — er teilt Ihnen mit, was der Fehler ist, und Sie können ihn anklicken/aktivieren, um sofort zum betreffenden Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich wird das `errorField` am Anfang der Quellreihenfolge platziert (auch wenn es in der Benutzeroberfläche anders positioniert ist), was bedeutet, dass Benutzer, nachdem sie die Eingabefehler bemerkt haben, sofort zu den betreffenden Eingabeelementen springen können, indem sie direkt an den Anfang der Seite zurückkehren.

Als abschließende Anmerkung haben wir einige WAI-ARIA-Attribute in unseren Demo verwendet, um Zugänglichkeitsprobleme zu lösen, die durch ständiges Aktualisieren von Inhaltsbereichen ohne Seiten-Reload verursacht werden (Bildschirmleser bemerken dies standardmäßig nicht oder benachrichtigen die Benutzer darüber):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel detaillierter behandelt.

> [!NOTE]
> Einige von Ihnen werden vermutlich darüber nachdenken, dass HTML-Formulare eingebettete Validierungsmechanismen wie die `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe den {{htmlelement("input")}} Element-Referenz für mehr Informationen). Wir haben diese im Demo nicht verwendet, weil der übergreifende Browser-Support dafür uneinheitlich ist (zum Beispiel IE10 und darüber).

> [!NOTE]
> WebAIM’s [Verwendbare und zugängliche Formularvalidierung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen über zugängliche Formularvalidierung.

### Andere JavaScript Zugänglichkeitsbedenken

Es gibt weitere Dinge, auf die Sie achten sollten, wenn Sie JavaScript implementieren und über Zugänglichkeit nachdenken. Wir werden weitere hinzufügen, während wir sie finden.

#### maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mithilfe von Ereignisbehandlern implementiert, die es uns ermöglichen, Funktionen als Reaktion auf bestimmte Ereignisse zu implementieren. Einige Ereignisse können Zugänglichkeitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalität, die als Reaktion auf diese Ereignisse läuft, ist möglicherweise nicht über andere Mechanismen wie Tastatursteuerungen zugänglich.

Um solche Probleme zu mindern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen, die durch andere Mittel aktiviert werden können (sogenannte geräteunabhängige Ereignisbehandler), kombinieren – [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) bieten Zugang für Tastaturbenutzer.

Schauen wir uns ein Beispiel an, das darauf hinweist, wann dies nützlich sein könnte. Vielleicht möchten Sie ein Thumbnail-Bild bereitstellen, das eine größere Version des Bildes anzeigt, wenn es gemoust oder fokussiert wird (wie Sie es in einem E-Commerce-Produktkatalog sehen würden).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild zeigen und ausblenden; diese werden durch die folgenden Zeilen, die sie als Ereignisbehandler festlegen, ausgeführt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über das Miniaturbild fährt und aufhört, darüber zu fahren. Dadurch können wir jedoch nicht auf die vergrößerte Ansicht durch die Tastatur zugreifen – um dies zu ermöglichen, haben wir die letzten beiden Zeilen eingefügt, die die Funktionen ausführen, wenn das Bild fokussiert und unscharf wird (wenn der Fokus stoppt). Dies kann durch Über-Tabben des Bildes geschehen, weil wir `tabindex="0"` darauf gesetzt haben.

Das [klick](/de/docs/Web/API/Element/click_event) Ereignis ist interessant – es klingt maus-abhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignisbehandler, nachdem Enter/Return auf einem Link oder Formularelement gedrückt wird, das im Fokus ist, oder wenn solch ein Element auf einem Touchscreen-Gerät angetippt wird. Standardmäßig funktioniert dies jedoch nicht, wenn Sie einem nicht standardmäßig fokussierbaren Element Fokus mit tabindex gewähren – in solchen Fällen müssen Sie erkennen, wann genau diese Taste gedrückt wird (siehe [Wieder Einbauen von Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen eine gute Menge an Detail und Verständnis über die Zugänglichkeitsprobleme gegeben, die mit der Verwendung von CSS und JavaScript auf Webseiten verbunden sind.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
