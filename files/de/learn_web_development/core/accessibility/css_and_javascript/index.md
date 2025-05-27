---
title: CSS und JavaScript Zugänglichkeits-Best Practices
short-title: Zugängliches CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript, wenn sie richtig verwendet werden, haben das Potenzial, zugängliche Web-Erfahrungen zu ermöglichen, oder sie können die Zugänglichkeit erheblich schädigen, wenn sie missbraucht werden. Dieser Artikel skizziert einige CSS und JavaScript Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

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
          <li>Zugängliche Textgröße und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code> Stile.</li>
          <li>Vernünftige Animation Nutzung — verwenden Sie Animation subtil und bieten Sie Kontrollmöglichkeiten, um sie auszuschalten.</li>
          <li>Best Practices zum Verstecken von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt, und der Wert von unaufdringlichem JavaScript.</li>
          <li>Sinnvoller Einsatz von Ereignissen, um keine bestimmten Steuerungstypen auszuschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ist CSS und JavaScript zugänglich?

CSS und JavaScript haben nicht die gleiche sofortige Bedeutung für die Zugänglichkeit wie HTML, aber sie können dennoch die Zugänglichkeit je nach ihrer Verwendung unterstützen oder schädigen. Anders ausgedrückt, es ist wichtig, dass Sie einige Best-Practice-Ratschläge in Betracht ziehen, um sicherzustellen, dass Ihr Einsatz von CSS und JavaScript die Zugänglichkeit Ihrer Dokumente nicht ruiniert.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element so aussehen zu lassen wie _irgendetwas_, aber das bedeutet nicht, dass Sie es tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Basis für Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie das entsprechende semantische Element für die Aufgabe verwenden, wann immer möglich. Wenn Sie das nicht tun, kann das Verwirrung und Usabilitätsprobleme für alle verursachen, insbesondere für Nutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit den Erwartungen der Nutzer zu tun — Elemente sehen aus und verhalten sich auf bestimmte Weise, gemäß ihrer Funktion, und diese üblichen Konventionen werden von den Nutzern erwartet.

Ein Beispiel ist, dass ein Benutzer eines Screenreaders nicht über die Heading-Elemente auf einer Seite navigieren kann, wenn der Entwickler nicht angemessen Headings zur Markierung des Inhalts verwendet hat. Ebenso verliert ein Heading seinen visuellen Zweck, wenn Sie es so gestalten, dass es nicht mehr wie ein Heading aussieht.

Das Fazit ist, Sie können das Styling eines Seitenmerkmals an Ihr Design anpassen, aber ändern Sie es nicht so stark, dass es nicht mehr aussieht oder sich so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die berücksichtigt werden sollten.

#### "Standard"-Textstruktur

Headings, Absätze, Listen — der Kerntextinhalt Ihrer Seite:

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Zeichenabstände usw. wählen, um Ihren Text logisch, lesbar und komfortabel lesbar zu machen.
- Stellen Sie sicher, dass Ihre Headings sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standard-Styling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Headings und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Hervorgehobener Text

Inline-Markup, das dem umschlossenen Text eine spezielle Betonung verleiht:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie Ihrem hervorgehobenen Text etwas einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden jedoch selten die Notwendigkeit haben, Betonelemente auf eine bedeutende Weise zu gestalten. Die Standardkonventionen von fett und kursivem Text sind sehr erkennbar, und die Stiländerung kann Verwirrung stiften. Weitere Informationen zur Betonung finden Sie unter [Emphasis und Bedeutung](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das ermöglicht, dass eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Erweiterung in Verbindung gebracht wird:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Wieder könnten Sie es auf einfache Weise gestalten wollen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gestrichelte Unterstreichung, und es ist unklug, hiervon erheblich abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abbreviations](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — der Weg, um neue Orte im Web zu erreichen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Eine sehr einfache Link-Stilisierung wird unten gezeigt:

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

Die Standard-Link-Konventionen sind unterstrichen und eine andere Farbe (Standard: blau) in ihrem normalen Zustand, eine andere Farbvariation, wenn der Link zuvor besucht wurde (Standard: lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: rot). Darüber hinaus ändert sich der Mauszeiger zu einem Zeiger-Symbol, wenn Links mit der Maus überfahren werden, und der Link erhält ein Highlight, wenn er fokussiert (z. B. durch Tabben) oder aktiviert wird. Das folgende Bild zeigt das Highlight sowohl in Firefox (eine gestrichelte Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist hervorgehoben mit einer blauen gepunkteten Umrandung, wenn es mit Tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement ist hervorgehoben mit einer blauen Umrandung, wenn es mit Tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können bei den Link-Stilen kreativ sein, solange Sie den Nutzern Rückmeldungen geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich der Zustand ändert, und Sie sollten nicht den Zeigerzeiger oder die Umrandung entfernen — beide sind sehr wichtige Zugänglichkeitshilfen für diejenigen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können einige gute Beispiel-CSS in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel sehen ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Der größte Teil des CSS, den Sie für Formulare schreiben, wird für die Größenbestimmung der Elemente, das Ausrichten von Beschriftungen und Eingaben und das Erstellen eines ordentlichen und sauberen Aussehens sein.

Sie sollten jedoch nicht zu stark von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Wesentlichen das gleiche ist wie bei Links (siehe oben). Sie könnten die Fokussier-/Hover-Zustände von Formularen so gestalten, dass dieses Verhalten in den verschiedenen Browsern konsistenter wird oder besser in Ihr Seitendesign passt, aber entfernen Sie es nicht ganz — wiederum verlassen sich Menschen auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Sie können ein gutes, einfaches Beispiel für HTML- und CSS-Tabellen in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel sehen ([sehen Sie es auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

CSS für Tabellen dient in der Regel dazu, die Tabelle besser in Ihr Design zu integrieren und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, die Tabellenüberschriften hervorzuheben (normalerweise mit fett), und Zebra-Streifen zu verwenden, um verschiedene Zeilen leichter lesbar zu machen.

### Farbe und Farbkontrast

Bei der Wahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nicht gut, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit, zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Kontrastprüf-Werkzeugen online, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu verwenden und liefert eine Erklärung über die Anforderungen zur Konformität mit den WCAG-Kriterien bezüglich des Farbkontrasts.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten in einer hellen Umgebung, wie Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht nur auf Farben für Schilder/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nicht nutzbar wird. Statt z. B. Pflichtfelder in einem Formular rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal gezeigt werden. Zum Beispiel in unserem [Tabbed info box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Informationspaneele, aber wir positionieren sie [übereinander](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) und stellen Tabs bereit, die angeklickt werden können, um jedes anzuzeigen (es ist auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei-Tab-Oberfläche mit Tab 1 ausgewählt und nur sein Inhalt wird angezeigt. Die Inhalte der anderen Tabs sind versteckt. Wenn ein Tab ausgewählt wird, ändert sich die Textfarbe von schwarz zu weiß und die Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

Benutzer von Screenreadern interessiert das alles nicht — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge Sinn macht und sie auf alles zugreifen können. Absolutpositionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte aus visuellen Gründen zu verstecken, da dies nicht verhindert, dass Screenreader darauf zugreifen können.

Auf der anderen Seite sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, da sie Inhalte vor Screenreadern verbergen. Es sei denn, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Screenreadern versteckt ist.

> **Hinweis:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele weitere nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Es ist möglich für Benutzer, Ihre Stile mit ihren eigenen benutzerdefinierten Stilen zu überschreiben, zum Beispiel:

- Sehen Sie sich Sarah Maddox' [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden an, der behandelt, wie man dies manuell in Firefox macht.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, wobei Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer tun dies aus verschiedenen Gründen. Ein visuell beeinträchtigter Benutzer möchte möglicherweise den Text auf allen von ihm besuchten Websites vergrößern, oder ein Benutzer mit schwerem Farbdefizit möchte möglicherweise alle Websites in kontrastreichen Farben anzeigen lassen, die für ihn leicht zu sehen sind. Welche Bedürfnisse auch immer bestehen, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, sodass solche Änderungen in Ihrem Design funktionieren. Zum Beispiel möchten Sie möglicherweise sicherstellen, dass Ihr Hauptinhaltsbereich größeren Text verarbeiten kann (vielleicht wird er anfangen zu scrollen, um alles sehen zu können), und ihn nicht einfach verstecken oder vollständig kaputtgehen.

## JavaScript

JavaScript kann je nach Verwendung ebenfalls Zugänglichkeit beeinträchtigen.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, dass alle Inhalte zu 100 % für alle Menschen zugänglich sein müssen — Sie müssen nur tun, was Sie können, um Ihre Apps so zugänglich wie möglich zu machen.

Einfache Inhalte und Funktionen sind wohl einfach zugänglich zu machen — z. B. Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML) gesehen haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Zum Beispiel sicherstellen, dass Sie Headings und Absätze sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elemente verwenden
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z. B. Alt-Text für Bilder.

Wir haben auch ein Beispiel dafür betrachtet, wie man mit JavaScript Funktionalität einbaut, wo sie fehlt — siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Das ist nicht ideal — eigentlich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es in Situationen möglich ist, in denen Sie aus irgendeinem Grund das Markup nicht kontrollieren können, das verwendet wird. Eine andere Möglichkeit, die Zugänglichkeit nicht-semantischer, JavaScript-gesteuerter Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies ebenfalls im Detail behandeln.

Komplexe Funktionalität wie 3D-Spiele sind nicht so einfach zugänglich zu machen — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird in einem {{htmlelement("canvas")}} Element gerendert, das im Moment keine Möglichkeit bietet, Textalternativen oder andere Informationen für Benutzer mit schwerer visueller Beeinträchtigung bereitzustellen. Es kann argumentiert werden, dass ein solches Spiel diese Gruppe von Menschen nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unvernünftig zu erwarten, dass Sie es zu 100 % für blinde Menschen zugänglich machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es für Benutzer ohne Maus verwendbar ist und das Farbschema kontrastreich genug machen, um für Menschen mit Farbdefiziten nutzbar zu sein.

### Das Problem mit zu viel JavaScript

Das Problem tritt häufig auf, wenn Menschen sich zu sehr auf JavaScript verlassen. Manchmal werden Sie eine Website sehen, bei der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert, etc. Dies hat alle Arten von Zugänglichkeits- und anderen Problemen, die damit verbunden sind, deshalb wird es nicht empfohlen.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sorgfältig, ob Sie wirklich diese glänzende, JavaScript-gesteuerte 3D-Informationsbox brauchen, oder ob normaler Text ausreichen würde. Überlegen Sie genau, ob Sie ein komplexes nicht standardmäßiges Formular-Widget benötigen, oder ob ein Texteingabefeld ausreichen würde. Und erzeugen Sie, wenn möglich, nicht den gesamten HTML-Inhalt mit JavaScript.

### Unaufdringlich halten

Sie sollten **unaufdringliches JavaScript** im Auge behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unaufdringlichem JavaScript ist, dass es nach Möglichkeit zur Verbesserung von Funktionalität verwendet werden sollte, nicht um sie vollständig einzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, obwohl es verständlich ist, dass dies nicht immer möglich ist. Aber nochmals, ein großer Teil davon ist die Verwendung der eingebauten Browser-Funktionalität, wo immer möglich.

Gute Beispiele für die Verwendung von unaufdringlichem JavaScript beinhalten:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell über Probleme mit ihren Formulareinträgen informiert, ohne auf die Überprüfung der Daten auf dem Server zu warten. Wenn es nicht verfügbar ist, funktioniert das Formular immer noch, aber die Validierung wäre langsamer.
- Bereitstellung von benutzerdefinierten Steuerelementen für HTML `<video>`s, die für Benutzer mit Tastaturzugang zugänglich sind, zusammen mit einem direkten Link zum Video, der für den Zugriff darauf verwendet werden kann, wenn JavaScript nicht verfügbar ist (die Standard-`<video>`-Browser-Steuerelemente sind in den meisten Browsern nicht über die Tastatur zugänglich).

Als Beispiel haben wir ein schnelles und schmutziges clientseitiges Formularvalidierungsbeispiel geschrieben — sehen Sie [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (sehen Sie auch [das Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern abzuschicken, schlägt das Absenden fehl, und ein Fehlermeldungsfeld erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular absolut gut verwenden, ohne dass JavaScript verfügbar ist, und jede sinnvolle Formularimplementierung wird eine serverseitige Validierung aktiv haben, weil es zu einfach für böswillige Benutzer ist, clientseitige Validierung zu umgehen (zum Beispiel durch Ausschalten von JavaScript im Browser). Die clientseitige Validierung ist dennoch sehr nützlich für die Meldung von Fehlern — Benutzer können Fehler, die sie machen, sofort erkennen, anstatt auf eine Rundreise zum Server und einen erneuten Laden der Seite warten zu müssen. Dies ist ein deutlicher Vorteil für die Benutzerfreundlichkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}} Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig mit ihren Eingaben verknüpft sind, sodass Screenreader sie zusammen mit den Eingaben vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular abgeschickt wird — das ist so, dass wir die Benutzeroberfläche nicht zu häufig aktualisieren und möglicherweise Benutzer von Screenreader (und vielleicht auch andere Benutzer) verwirren:

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
> In diesem Beispiel verstecken und zeigen wir das Fehlermeldungsfeld mit absoluter Positionierung, anstatt einer anderen Methode wie Sichtbarkeit oder Anzeige, da es Screenreader nicht daran hindert, Inhalte daraus zu lesen.

Echte Formularvalidierungen wären viel komplexer als diese — Sie möchten überprüfen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z. B. nicht negativ und weniger als 4 Stellen). Hier haben wir nur eine einfache Überprüfung implementiert, dass jeder Eingabefeld einen Wert hat (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, und wenn die Tests bestanden werden, dann wird das Formular abgeschickt. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), dann verhindern wir, dass das Formular abgeschickt wird (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es Fehler gibt, was besser für die Usability ist.

Für jedes Eingabefeld, das keinen Wert hat, wenn das Formular abgeschickt wird, erstellen wir eine Liste von Einträgen mit einem Link und fügen sie in die `errorList` ein.

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

Jeder Link dient einem doppelten Zweck — er teilt Ihnen mit, was der Fehler ist, plus Sie können darauf klicken/aktivieren, um direkt zum entsprechenden Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Darüber hinaus wird das `errorField` am Anfang der Quellreihenfolge platziert (obwohl es in der Benutzeroberfläche mit CSS anders positioniert wird), sodass Benutzer genau herausfinden können, was mit ihren Formularabschickungen falsch ist und zu den betroffenen Eingabeelementen gelangen können, indem sie zurück zum Anfang der Seite navigieren.

Zum Schluss haben wir einige WAI-ARIA-Attribute in unserem Demo verwendet, um Zugänglichkeitsprobleme zu lösen, die durch konstantes Aktualisieren von Inhaltsbereichen ohne erneutes Laden der Seite verursacht werden (Screenreader registrieren dies nicht oder informieren Benutzer standardmäßig nicht darüber):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel detaillierter behandelt.

> [!NOTE]
> Einige von Ihnen denken wahrscheinlich darüber nach, dass HTML-Formulare eingebaute Validierungsmechanismen wie die Attribute `required`, `min`/`minlength` und `max`/`maxlength` haben (siehe die {{htmlelement("input")}} Elementreferenz für mehr Informationen). Wir haben diese im Demo nicht verwendet, da die plattformübergreifende Unterstützung dafür lückenhaft ist (zum Beispiel nur IE10 und höher).

> [!NOTE]
> WebAIM's [Nutzbare und zugängliche Formularvalidierung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen über zugängliche Formularvalidierung.

### Andere Bedenken zur Zugänglichkeit von JavaScript

Es gibt andere Dinge, die Sie beachten sollten, wenn Sie JavaScript implementieren und an Zugänglichkeit denken. Wir werden mehr hinzufügen, wenn wir sie finden.

#### maeuse-spezifische Ereignisse

Wie Sie wahrscheinlich wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mit Ereignis-Handlern implementiert, die es uns erlauben, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Zugänglichkeitsprobleme aufweisen. Das Hauptbeispiel, das Ihnen begegnen wird, sind maeuse-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event), etc. Funktionen, die als Reaktion auf diese Ereignisse ausgeführt werden, sind nicht mit anderen Mechanismen zugänglich, wie z. B. Tastatursteuerung.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen, die durch andere Mittel aktiviert werden können (sogenannte geräteunabhängige Ereignis-Handler), verdoppeln — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden die Zugänglichkeit für Benutzer der Tastatursteuerung bieten.

Sehen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Miniaturbild bereitstellen, das eine größere Version des Bildes zeigt, wenn es mit der Maus überfahren oder fokussiert wird (wie Sie es in einem E-Commerce Produktkatalog sehen würden).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und verstecken; sie werden durch die folgenden Zeilen ausgeführt, die sie als Ereignis-Handler festlegen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Miniaturbild schwebt und aufhört, darüber zu schweben. Dies ermöglicht es uns jedoch nicht, die vergrößerte Ansicht über die Tastatur zuzugreifen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen eingefügt, die die Funktionen ausführen, wenn das Bild fokussiert und geblurt (wenn der Fokus stoppt) wird. Dies kann durch Tabben über das Bild geschehen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignis-Handler, nachdem die Eingabetaste/Return auf einem Link oder Formularelement gedrückt wurde, das den Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angeklickt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Ereignis erlauben, den Fokus mit tabindex zu erhalten — in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: CSS- und JavaScript-Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen eine gute Menge an Details und Verständnis über die Zugänglichkeitsprobleme im Zusammenhang mit der Nutzung von CSS und JavaScript auf Webseiten gegeben hat.

Als Nächstes, WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
