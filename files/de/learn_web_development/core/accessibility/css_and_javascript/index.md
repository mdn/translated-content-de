---
title: CSS und JavaScript Barrierefreiheit Best Practices
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript können, wenn sie richtig eingesetzt werden, sowohl barrierefreie Web-Erfahrungen ermöglichen als auch die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch genutzt werden. Dieser Artikel skizziert einige CSS- und JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so barrierefrei wie möglich sind.

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
          <li>Barrierefreie Textgrößen und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code>-Stilen.</li>
          <li>Sinnvolle Animationen: Animation subtil einsetzen und Steuerungen bereitstellen, um sie auszuschalten.</li>
          <li>Best Practices für das Verbergen von Inhalten, sodass sie nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt und der Wert von unaufdringlichem JavaScript.</li>
          <li>Ereignisse sinnvoll nutzen, um nicht bestimmte Steuerungstypen auszuschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ist CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, sind jedoch immer noch in der Lage, die Barrierefreiheit zu verbessern oder zu beschädigen, abhängig davon, wie sie eingesetzt werden. Anders ausgedrückt: Es ist wichtig, dass Sie einige Best Practices in Betracht ziehen, um sicherzustellen, dass Ihre Nutzung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht ruiniert.

## CSS

Lassen Sie uns mit dem Betrachten von CSS beginnen.

### Richtige Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element aussehen zu lassen wie _alles_, jedoch bedeutet das nicht, dass Sie das tun sollten. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) häufig erwähnt haben, sollten Sie das geeignete semantische Element für die jeweilige Aufgabe verwenden, wann immer es möglich ist. Wenn Sie dies nicht tun, kann dies zu Verwirrung und Usability-Problemen führen, insbesondere für Benutzer mit Behinderungen. Das Verwenden korrekter Semantiken hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen aus und verhalten sich auf bestimmte Arten entsprechend ihrer Funktionalität, und diese gängigen Konventionen werden von den Benutzern erwartet.

Zum Beispiel kann ein Benutzer mit einem Screenreader nicht über Überschriftselemente auf einer Seite navigieren, wenn der Entwickler nicht ordnungsgemäß Überschriftselemente zur Markierung der Inhalte verwendet hat. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht mehr wie eine Überschrift aussieht.

Letztendlich können Sie das Styling eines Seitenfeatures anpassen, damit es in Ihr Design passt, aber ändern Sie es nicht so stark, dass es nicht mehr den Erwartungen entspricht oder keinen Sinn mehr ergibt. Die folgenden Abschnitte fassen die wichtigsten HTML-Features zusammen, die berücksichtigt werden sollten.

#### "Standard" Textstruktur

Überschriften, Absätze, Listen — der Kerninhalt Ihrer Seite:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

Ein typisches CSS könnte folgendermaßen aussehen:

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

- Vernünftige Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, um Ihren Text logisch, lesbar und angenehm zu gestalten.
- Achten Sie darauf, dass Ihre Überschriften sich vom Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Hervorgehobener Text

Inline-Markup, das spezifische Hervorhebung für den Text bietet, den es umschließt:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie Ihrem hervorgehobenen Text einige einfache Farben hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden jedoch selten die Notwendigkeit haben, Hervorhebungselemente in signifikanter Weise zu stylen. Die Standardkonventionen von Fett- und Kursivschrift sind sehr erkennbar, und eine Änderung des Stils kann zur Verwirrung führen. Weitere Informationen zur Hervorhebung finden Sie unter [Hervorhebung und Bedeutung](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das es ermöglicht, eine Abkürzung, ein Akronym oder eine Initialisierung mit ihrer Erweiterung zu verbinden:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier möchten Sie es möglicherweise auf einfache Weise gestalten:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Styling-Konvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, sich erheblich von dieser zu entfernen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — die Art, wie Sie zu neuen Orten im Web gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Einige sehr einfache Link-Stylings werden unten gezeigt:

```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

Die Standardlink-Konventionen sind unterstrichen und in einer anderen Farbe (Standard: blau) in ihrem Standardzustand, eine weitere Farbvariante, wenn der Link bereits besucht wurde (Standard: lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: rot). Darüber hinaus wechselt der Mauszeiger zu einem Zeiger-Icon, wenn Links überfahren werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z.B. über Tab) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Einträge. Der zweite Listeneintrag wird mit einer blauen gepunkteten Umrandung hervorgehoben, wenn er durch Tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Einträge. Der dritte Listeneintrag wird mit einer blauen Umrandung hervorgehoben, wenn er durch Tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Linkstilen umgehen, solange Sie weiterhin den Benutzern Feedback geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen — beides sind sehr wichtige barrierefreie Hilfen für Personen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können einige gute Beispiel-CSS in unserem Beispiel [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) sehen ([live ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html) auch).

Das meiste CSS, das Sie für Formulare schreiben werden, dient der Größenanpassung der Elemente, dem Ausrichten von Labels und Eingaben sowie dem ordentlichen und aufgeräumten Aussehen.

Sie sollten jedoch nicht zu stark von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde das gleiche ist wie bei Links (siehe oben). Sie könnten Fokus-/Hover-Zustände von Formularen stylen, um dieses Verhalten übergreifend anzupassen oder besser in Ihr Seitendesign zu integrieren, aber entfernen Sie es nicht vollständig — erneut: Menschen sind auf diese Hinweise angewiesen, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Sie können ein gutes, einfaches Beispiel für HTML- und CSS-Tabellen in unserem Beispiel [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) sehen ([auch live ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzupassen und sie weniger hässlich aussehen zu lassen. Es ist eine gute Idee, die Tabellenüberschriften hervorzuheben (normalerweise fett) und Zebra-Streifen zu verwenden, um verschiedene Zeilen leichter zu parsen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website auswählen, stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es bringt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit, zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Überprüfung des Kontrasts, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu testen. Zum Beispiel ist der [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/) einfach zu verwenden und bietet eine Erklärung dessen, was Sie benötigen, um die WCAG-Kriterien in Bezug auf Farbkontrast zu erfüllen.

> [!NOTE]
> Ein hoher Kontrast erlaubt es auch jedem mit einem Smartphone oder Tablet mit einem glänzenden Bildschirm, Seiten besser in einer hellen Umgebung wie Sonnenlicht zu lesen.

Ein weiterer Tipp ist, sich nicht allein auf Farbe für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nichts nützt. Statt Beispielsweise Pflichtfelder rot zu markieren, kennzeichnen Sie sie mit einem Sternchen und in Rot.

### Dinge verbergen

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. Beispielsweise gibt es in unserem [Beispiel einer Registerkarteninformationsbox](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Informationsblöcke, aber wir positionieren sie übereinander und bieten Registerkarten an, die angeklickt werden können, um jede anzuzeigen (es ist auch über die Tastatur zugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Dreifache Registerkarten-Oberfläche mit ausgewähltem Tab 1, dessen Inhalt nur angezeigt wird. Die Inhalte anderer Registerkarten sind versteckt. Wenn eine Registerkarte ausgewählt wird, ändert sich ihre Textfarbe von schwarz zu weiß und die Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

Benutzer von Screenreadern kümmern sich nicht darum — sie sind mit dem Inhalt zufrieden, solange die Quellenreihenfolge Sinn ergibt und sie alles erreichen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als einer der besten Mechanismen angesehen, um Inhalte für visuelle Effekte zu verbergen, da sie nicht verhindert, dass Screenreader darauf zugreifen.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, da sie den Inhalt auch vor Screenreadern verbergen. Es sei denn, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt auch vor Screenreadern verborgen bleibt.

> **Hinweis:** [Unsichtbarer Inhalt nur für Screen Reader Benutzer](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Styles überschreiben können

Es ist möglich, dass Benutzer Ihre Styles mit eigenen benutzerdefinierten Styles überschreiben, zum Beispiel:

- Lesen Sie Sarah Maddox's [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden, der erklärt, wie man dies manuell in Firefox macht.
- Es ist wahrscheinlich einfacher, es mit einer Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)-Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer möchte möglicherweise den Text auf allen Websites, die sie besuchen, vergrößern, oder ein Benutzer mit einer schweren Farbsehschwäche möchte möglicherweise alle Websites in Farben mit hohem Kontrast darstellen, die für ihn leicht zu sehen sind. Unabhängig von dem Bedarf sollten Sie damit einverstanden sein und Ihre Designs so flexibel gestalten, dass solche Änderungen innerhalb Ihres Designs funktionieren. Beispielsweise sollten Sie sicherstellen, dass Ihr Hauptinhaltsbereich größere Texte verarbeiten kann (möglicherweise wird er scrollen, um alles sehen zu können) und nicht einfach nur den Inhalt versteckt oder vollständig zerstört.

## JavaScript

JavaScript kann auch die Barrierefreiheit brechen, je nachdem, wie es verwendet wird.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, vom einfachen Update von Inhalten und Benutzeroberflächen bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100 % barrierefrei für alle Menschen sein müssen — Sie müssen einfach tun, was Sie können, und Ihre Apps so barrierefrei wie möglich gestalten.

Einfache Inhalte und Funktionen sind relativ leicht barrierefrei zu gestalten — zum Beispiel Texte, Bilder, Tabellen, Formulare und Drucktasten, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Beispielsweise sicherstellen, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textlabels für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel betrachtet, wie man mit JavaScript Funktionalität einbauen kann, wo sie fehlt — siehe [Erneuter Aufbau der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — eigentlich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es in Situationen möglich ist, in denen Sie aus irgendeinem Grund nicht kontrollieren können, welches Markup verwendet wird. Eine weitere Möglichkeit zur Verbesserung der Barrierefreiheit für nicht-semantische, durch JavaScript gesteuerte Widgets besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies auch ausführlicher behandeln.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach barrierefrei zu gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen für stark sehbehinderte Benutzer bereitzustellen. Es lässt sich argumentieren, dass solch ein Spiel diese Zielgruppe nicht wirklich als Hauptzielgruppe einschließt und es wäre unzumutbar, zu erwarten, dass Sie es zu 100 % barrierefrei für blinde Menschen machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von nicht-mausabhängigen Benutzern verwendbar ist, und das Farbschema so kontrastreich gestalten, dass es von Menschen mit Farbsehschwächen verwendet werden kann.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn Menschen sich zu sehr auf JavaScript verlassen. Manchmal sieht man eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS von JavaScript erstellt, usw. Dies hat alle möglichen Barriereprobleme und anderen Probleme, die damit verbunden sind, so dass es nicht empfohlen wird.

Neben dem Verwenden des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sorgfältig, ob Sie dieses glänzende, von JavaScript gesteuerte 3D-Informationsfenster wirklich benötigen oder ob einfacher Text ausreichen würde. Überlegen Sie, ob Sie ein komplexes, nicht standardisiertes Formular-Widget benötigen oder ob ein Texteingabefeld ausreichen würde. Und generieren Sie nach Möglichkeit nicht Ihren gesamten HTML-Inhalt mit JavaScript.

### Es unauffällig halten

Sie sollten **unauffälliges JavaScript** im Kopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unauffälligem JavaScript ist, dass es, wo immer möglich, zur Erweiterung der Funktionalität verwendet werden sollte, nicht um sie vollständig einzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, auch wenn dies nicht immer möglich ist. Aber nochmals, ein großer Teil davon ist, die eingebaute Browser-Funktionalität dort zu verwenden, wo es möglich ist.

Gute Anwendungsbeispiele für unauffälliges JavaScript umfassen:

- Bereitstellen von clientseitiger Formularüberprüfung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, wird das Formular immer noch funktionieren, nur die Überprüfung könnte langsamer sein.
- Bereitstellen benutzerdefinierter Steuerungen für HTML `<video>`s, die für Benutzer mit Tastaturzugriff zugänglich sind, zusammen mit einem direkten Link auf das Video, der verwendet werden kann, um darauf zuzugreifen, falls JavaScript nicht verfügbar ist (die Standard-`<video>`-Browsersteuerungen sind in den meisten Browsern nicht für Tastaturen zugänglich).

Als Beispiel haben wir ein schnelles und einfaches Client-seitiges Formularüberprüfungsbeispiel geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (auch [sehen Sie das Live-Demo](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden nicht ausgefüllten Feldern abzusenden, schlägt das Übermitteln fehl und eine Fehlermeldungsbox erscheint, um Ihnen zu sagen, was falsch ist.

Diese Art der Formularüberprüfung ist unauffällig — Sie können das Formular ohne das verfügbare JavaScript immer noch absolut verwenden, und jede sinnvolle Formularimplementierung wird auch eine serverseitige Validierung beinhalten, da es für bösartige Benutzer zu einfach ist, clientseitige Validierung zu umgehen (z.B. indem JavaScript im Browser ausgeschaltet wird). Die clientseitige Validierung ist jedoch immer noch sehr nützlich für die Fehlerberichterstattung — Benutzer können sofort über Fehler informiert werden, anstatt auf eine Rückreise zum Server und eine Seitenaktualisierung warten zu müssen. Das ist ein deutlicher Usability-Vorteil.

> [!NOTE]
> Eine serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularüberprüfung auch relativ barrierefrei gestaltet. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularlabels unmissverständlich mit ihren Eingabefeldern verknüpft sind, sodass Screenreader sie gemeinsam mit vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular übermittelt wird — dies geschieht, damit wir die Benutzeroberfläche nicht zu häufig aktualisieren und möglicherweise Benutzer von Screenreadern (und möglicherweise auch andere) verwirren:

```js
form.onsubmit = validate;

function validate(e) {
  errorList.textContent = "";
  for (let i = 0; i < formItems.length; i++) {
    const testItem = formItems[i];
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
> In diesem Beispiel verstecken und zeigen wir die Fehlermeldungsbox mit absoluter Positionierung anstelle einer anderen Methode wie Visibility oder Display an, weil es nicht stört, dass der Screenreader Inhalte daraus lesen kann.

Eine echte Formularüberprüfung wäre viel komplexer als dies — Sie würden überprüfen wollen, dass der eingegebene Name tatsächlich wie ein Name aussieht, dass das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z.B. nicht negativ und weniger als 4 Ziffern). Hier haben wir gerade eine einfache Prüfung implementiert, dass ein Wert in jedes Eingabefeld eingetragen wurde (`if (testItem.input.value === '')`).

Wenn die Überprüfung durchgeführt wurde, wird das Formular bei bestandenen Tests übermittelt. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), verhindern wir das Übermitteln des Formulars (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es tatsächlich welche gibt, was besser für die Benutzerfreundlichkeit ist.

Für jede Eingabe, die keinen Wert hat, wenn das Formular übermittelt wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein:

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

Jeder Link dient einem doppelten Zweck — er sagt Ihnen, was der Fehler ist, plus Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabeelement zu springen und Ihren Eintrag zu korrigieren.

Zusätzlich wird das `errorField` am Anfang der Quellenreihenfolge platziert (obwohl es anders in der Benutzeroberfläche mit CSS positioniert wird), was bedeutet, dass Benutzer genau erfahren, was mit ihren Formularübermittlungen falsch ist und zu den betreffenden Eingabeelementen gelangen können, indem sie wieder nach oben zur Seite gehen.

Als abschließender Hinweis: Wir haben einige WAI-ARIA-Attribute in unserem Demo verwendet, um Barrierefreiheitsprobleme zu lösen, die durch Bereiche von Inhalten verursacht werden, die sich ständig ohne eine Seitenaktualisierung aktualisieren (Screenreader werden dies standardmäßig nicht erkennen oder Benutzer darauf aufmerksam machen):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Diese Attribute erklären wir in unserem nächsten Artikel, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich an die Tatsache denken, dass HTML-Formulare eingebaute Validierungsmechanismen wie `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (sehen Sie das {{htmlelement("input")}}-Element-Referenz für weitere Informationen). Wir haben diese nicht im Demo verwendet, weil die Browserunterstützung dafür lückenhaft ist (zum Beispiel nur IE10 und höher).

> [!NOTE]
> WebAIMs [Verwendbare und barrierefreie Formularüberprüfung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen zur barrierefreien Formularüberprüfung.

### Andere JavaScript-Barrierefreiheitsaspekte

Es gibt andere Dinge, die beim Implementieren von JavaScript und Nachdenken über Barrierefreiheit zu beachten sind. Wir fügen mehr hinzu, wenn wir sie finden.

#### maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mit Ereignishandlern implementiert, die es erlauben, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme aufweisen. Das Hauptbeispiel, das Ihnen begegnen wird, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionen, die als Reaktion auf diese Ereignisse ausgeführt werden, werden mit anderen Mechanismen, wie Tastatursteuerungen, nicht zugänglich sein.

Um solche Probleme zu verringern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen kombinieren, die auf andere Weise aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturbenutzer bieten.

Schauen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Thumbnail-Bild bereitstellen, das eine größere Version des Bildes anzeigt, wenn es mit der Maus überfahren oder fokussiert wird (wie man es in einem E-Commerce-Produktkatalog sehen würde).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code verfügt über zwei Funktionen, die das vergrößerte Bild anzeigen und ausblenden; diese werden durch die folgenden Zeilen ausgeführt, die sie als Ereignishandler setzen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Thumbnail ist und aufhört, über ihm zu sein. Dies erlaubt uns nicht, die vergrößerte Ansicht über die Tastatur zuzugreifen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen eingeschlossen, die die Funktionen ausführen, wenn das Bild fokussiert und verschwommen (wenn der Fokus aufhört) ist. Dies kann durch das Tabben über das Bild erfolgen, weil wir `tabindex="0"` darauf hinzugefügt haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler, nachdem Enter/Return auf einem Link oder Formularelement mit Fokus gedrückt oder wenn ein solches Element auf einem Touchgerät angetippt wird. Dies funktioniert jedoch standardmäßig nicht, wenn Sie einem nicht standardmäßig fokussierbaren Element Fokus durch tabindex gewähren — in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Erneuter Aufbau der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen eine gute Menge an Details und Verständnis über die Barrierefreiheitsprobleme im Zusammenhang mit der Verwendung von CSS und JavaScript auf Webseiten gegeben hat.

Als nächstes WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
