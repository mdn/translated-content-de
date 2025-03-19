---
title: "CSS- und JavaScript-Barrierefreiheit: Beste Praktiken"
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

Bei richtiger Verwendung können CSS und JavaScript barrierefreie Web-Erfahrungen ermöglichen oder bei falscher Verwendung die Barrierefreiheit erheblich schädigen. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so barrierefrei wie möglich sind.

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
          <li>Barrierefreie Textgröße und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code> Styles.</li>
          <li>Vernünftige Animationen — Animationen subtil verwenden und Kontrollen bereitstellen, um sie auszuschalten.</li>
          <li>Beste Praktiken zum Verbergen von Inhalten, damit diese nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt und den Wert von unaufdringlichem JavaScript.</li>
          <li>Ereignisse sinnvoll nutzen, um bestimmte Steuerungstypen nicht auszuschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht dieselbe unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können trotzdem Barrierefreiheit unterstützen oder behindern, je nachdem, wie sie eingesetzt werden. Anders ausgedrückt: Es ist wichtig, dass Sie einige Best-Practices in Betracht ziehen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Lassen Sie uns mit einem Blick auf CSS beginnen.

### Korrekte Semantik und Benutzererwartungen

Es ist möglich, mit CSS jedes HTML-Element _irgendwie_ aussehen zu lassen, aber das bedeutet nicht, dass Sie das auch tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie wann immer möglich das passende semantische Element für die jeweilige Aufgabe verwenden. Wenn Sie dies nicht tun, kann dies Verwirrung und Nutzbarkeitsprobleme für alle verursachen, insbesondere für Benutzer mit Behinderungen. Die korrekte Semantik hängt stark mit den Erwartungen der Benutzer zusammen — Elemente sehen je nach ihrer Funktionalität auf bestimmte Weise aus und verhalten sich entsprechend, und diese gängigen Konventionen werden von den Benutzern erwartet.

Zum Beispiel kann ein Screenreader-Benutzer eine Seite nicht über Überschriften-Elemente navigieren, wenn der Entwickler die Überschriften-Elemente nicht angemessen verwendet hat, um den Inhalt zu markieren. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht mehr wie eine Überschrift aussieht.

Fazit: Sie können das Styling eines Seitenelements an Ihr Design anpassen, aber ändern Sie es nicht so sehr, dass es nicht mehr wie erwartet aussieht oder sich verhält. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die Sie beachten sollten.

#### "Standard"-Textinhaltstruktur

Überschriften, Absätze, Listen — der Kerntextinhalt Ihrer Seite:

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

- Sinnvolle Schriftgrößen, Zeilenabstände, Buchstabenabstände usw. auswählen, um Ihren Text logisch, lesbar und angenehm zu gestalten.
- Sicherstellen, dass Ihre Überschriften sich vom Fließtext abheben, normalerweise groß und fett wie beim Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Text-Styling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Betonter Text

Inline-Markup, das bestimmten Text, den es umschließt, besonders hervorhebt:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Sie möchten Ihrem betonten Text möglicherweise etwas einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

In der Regel müssen Sie Elemente zur Hervorhebung jedoch selten in bedeutender Weise gestalten. Die Standardkonventionen von fettem und kursivem Text sind sehr erkennbar, und eine Änderung des Stils kann Verwirrung stiften. Für mehr Informationen zur Hervorhebung siehe [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das es ermöglicht, einer Abkürzung, einem Akronym oder einer Initialisierung seine Erweiterung zuzuordnen:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Sie möchten es möglicherweise auf einfache Weise gestalten:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Gestaltungskonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, davon erheblich abzuweichen. Für mehr Informationen zu Abkürzungen siehe [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — die Art und Weise, wie Sie zu neuen Orten im Web gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Link-Styling sieht folgendermaßen aus:

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

Die Standard-Link-Konventionen bestehen aus einer Unterstreichung und einer anderen Farbe (Standard: blau) im normalen Zustand, einer weiteren Farbvariation, wenn der Link zuvor besucht wurde (Standard: lila), und nochmals einer anderen Farbe, wenn der Link aktiviert ist (Standard: rot). Außerdem ändert sich der Mauszeiger in ein Zeigersymbol, wenn der Link mit der Maus überfahren wird, und der Link erhält eine Hervorhebung, wenn er fokussiert (z.B. durch Tabulator) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Einträge. Der zweite Listeneintrag ist hervorgehoben mit einer blauen gepunkteten Umrandung, wenn er über Tabulator fokussiert ist.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Einträge. Der dritte Listeneintrag ist hervorgehoben mit einer blauen Umrandung, wenn er über Tabulator fokussiert ist.](focus-highlight-chrome.png)

Sie können kreativ sein mit Link-Stilen, solange Sie weiterhin den Benutzern eine Rückmeldung geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich die Zustände ändern, und Sie sollten weder den Zeiger-Cursor noch die Umrandung entfernen — beide sind sehr wichtige Barrierefreiheitshilfen für diejenigen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gutes Beispiel-CSS finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html) ebenfalls).

Das meiste CSS, das Sie für Formulare schreiben, wird zur Größenanpassung der Elemente, Ausrichtung von Beschriftungen und Eingabefeldern und für ein ordentliches Erscheinungsbild eingesetzt.

Sie sollten jedoch nicht zu stark von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde dasselbe wie bei Links ist (siehe oben). Sie könnten die Fokus-/Hover-Zustände für Formulare gestalten, um dieses Verhalten in Browsern konsistenter zu machen oder besser in Ihr Seitendesign zu integrieren, aber entfernen Sie sie nicht ganz — wieder verlassen sich Menschen auf diese Hinweise, um zu verstehen, was vor sich geht.

#### Tabellen

Tabellen zur Präsentation tabellarischer Daten.

Ein gutes, einfaches Beispiel für Tabelle HTML und CSS finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel ([Live-Demo ebenfalls ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabelle-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzufügen und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass sich die Tabellenkopfzeilen abheben (normalerweise in Fett) und Zebrastreifen verwenden, um verschiedene Zeilen leichter lesbar zu machen.

### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website stellen Sie sicher, dass die Text- (Vordergrund-) Farbe gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es bringt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit, um zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Anzahl von Kontrastprüfwerkzeugen online, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu prüfen. Zum Beispiel ist WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) einfach zu bedienen und bietet eine Erklärung dessen, was Sie benötigen, um den WCAG-Kriterien zum Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrastquotient ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm nutzt, Seiten in einer hellen Umgebung, wie Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht allein auf Farbe als Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nutzlos sein wird. Statt Pflichtfelder in Rot zu markieren, markieren Sie sie zum Beispiel mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. Zum Beispiel haben wir in unserem [Tabbed info box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)), drei Informationstafeln, aber wir positionieren sie [übereinander](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) und bieten Tabs an, die angeklickt werden können, um jede zu sehen (es ist auch Tastaturzugänglich — Sie können alternativ Tab und Enter/Enter verwenden, um sie auszuwählen).

![Dreieckige Benutzeroberfläche mit Tab 1 ausgewählt und nur dessen Inhalt angezeigt. Der Inhalt anderer Tabs ist verborgen. Wenn eine Tab ausgewählt ist, ändert sich seine Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orange-Rot zu Sattbraun.](tabbed-info-box.png)

Screenreader-Benutzer interessieren sich nicht für all das — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge Sinn ergibt und sie zu allem gelangen können. Absolute Positionierung, wie in diesem Beispiel verwendet, wird im Allgemeinen als einer der besten Mechanismen zum Verbergen von Inhalten für visuelle Effekte angesehen, da sie es Screenreadern nicht verwehrt, die Inhalte zu erreichen.

Andererseits sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da diese Inhalte auch vor Screenreadern verbergen. Es sei denn, es gibt einen guten Grund, warum Sie möchten, dass diese Inhalte vor Screenreadern verborgen werden.

> **Note:** [Unsichtbare Inhalte nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Benutzer können Ihre Stile mit eigenen benutzerdefinierten Stilen überschreiben, zum Beispiel:

- Siehe Sarah Maddox's [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden, der erklärt, wie man dies manuell in Firefox macht.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, und Stylish ist eine [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Entsprechung.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer könnte den Text auf allen besuchten Websites größer machen wollen, oder ein Benutzer mit starker Farbenblindheit könnte alle Websites in kontrastreichen Farben anzeigen lassen, die für ihn leicht erkennbar sind. Egal, welches Bedürfnis besteht, Sie sollten damit zufrieden sein und Ihre Designs so flexibel gestalten, dass solche Änderungen in Ihrem Design funktionieren. Als Beispiel könnten Sie sicherstellen, dass Ihr Hauptinhalt größere Texte handhaben kann (vielleicht beginnt er zu scrollen, um alles sichtbar zu machen) und nicht einfach versteckt oder ganz kaputt ist.

## JavaScript

JavaScript kann auch die Barrierefreiheit beeinträchtigen, je nachdem, wie es eingesetzt wird.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und Benutzeroberflächen-Aktualisierungen bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte 100% barrierefrei für alle Menschen sein müssen — Sie müssen nur tun, was Sie können, und Ihre Apps so barrierefrei wie möglich gestalten.

Einfache Inhalte und Funktionen sind wahrscheinlich leicht barrierefrei zu gestalten — z.B. Text, Bilder, Tabellen, Formulare und Druckknöpfe, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}} und {{htmlelement("a")}}-Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [textuelle Alternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben uns auch ein Beispiel angesehen, wie man mit JavaScript Funktionalität hinzufügt, wo sie fehlt — siehe [Baue Tastaturzugänglichkeit wieder ein](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — in der Tat sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es möglich ist in Situationen, in denen Sie aus irgendeinem Grund das verwendete Markup nicht kontrollieren können. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Nutzer bereitzustellen. Der nächste Artikel behandelt dies auch ausführlich.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach barrierefrei zu gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird in einem {{htmlelement("canvas")}}-Element gerendert, das derzeit keine Möglichkeit bietet, textuelle Alternativen oder andere Informationen für schwer sehbehinderte Nutzer bereitzustellen. Es ist arguable, dass ein solches Spiel diese Personengruppe nicht wirklich als Hauptzielgruppe hat, und es wäre unvernünftig zu erwarten, dass Sie es 100% für blinde Menschen zugänglich machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Nutzern verwendbar ist, und das Farbschema kontrastreich genug gestalten, damit es von Personen mit Farbfehlern verwendet werden kann.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn JavaScript zu stark vertraut wird. Manchmal werden Sie auf eine Website stoßen, bei der alles mit JavaScript erledigt wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert usw. Dies hat alle möglichen Barrierefreiheits- und andere Probleme, daher ist es nicht ratsam.

Neben dem Einsatz des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sorgfältig, ob Sie dieses schicke, von JavaScript gesteuerte 3D-Informationsfeld wirklich benötigen oder ob einfacher, alter Text ausreicht. Überlegen Sie sorgfältig, ob Sie ein komplexes nicht standardmäßiges Formular-Widget benötigen oder ob ein Texteingabefeld ausreicht. Und generieren Sie nicht alle Ihre HTML-Inhalte mit JavaScript, wenn möglich.

### Es unaufdringlich halten

Sie sollten **unaufdringliches JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unaufdringlichem JavaScript ist, dass es soweit wie möglich verwendet werden sollte, um Funktionalität zu verbessern und nicht komplett aufzubauen — Grundfunktionen sollten idealerweise ohne JavaScript funktionieren, obwohl anerkannt wird, dass dies nicht immer eine Option ist. Aber nochmal, ein großer Teil davon ist, die eingebaute Browserfunktionalität nach Möglichkeit zu nutzen.

Gute Beispiele für unaufdringliches JavaScript sind:

- Bereitstellen von clientseitiger Formularvalidierung, die Benutzer schnell über Probleme mit ihren Formulareingaben informiert, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, wird das Formular weiterhin funktionieren, aber die Validierung könnte langsamer sein.
- Bereitstellen benutzerdefinierter Steuerungen für HTML `<video>`, die für Tastaturbenutzer zugänglich sind, zusammen mit einem direkten Link zum Video, das verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die Standard `<video>`-Browserelemente sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnelles und kleines Beispiel einer clientseitigen Formularvalidierung geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (auch [siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier finden Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern abzusenden, schlägt die Übermittlung fehl, und ein Fehlermeldungsfenster erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular absolut ohne JavaScript verwenden, und jede vernünftige Formulareinführung bietet serverseitige Validierung, weil es zu einfach für böswillige Benutzer ist, clientseitige Validierung zu umgehen (zum Beispiel durch Ausschalten von JavaScript im Browser). Die clientseitige Validierung ist jedoch wirklich nützlich für die Fehlerrückmeldung — Benutzer können sofort über Fehler Bescheid wissen, anstatt auf eine Server-Rundreise und einen Seitenreload warten zu müssen. Dies ist ein definitiver Nutzerfreundlichkeitsvorteil.

> [!NOTE]
> In dieser einfachen Demo wurde keine serverseitige Validierung umgesetzt.

Wir haben diese Formularvalidierung auch ziemlich barrierefrei gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen unmissverständlich mit ihren Eingabefeldern verknüpft sind, sodass Screenreader sie zusammen mit den Eingabefeldern vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular übermittelt wird — das ist, um zu vermeiden, dass die Benutzeroberfläche zu oft aktualisiert wird und möglicherweise Screenreader-(und mögliche andere) Benutzer verwirrt:

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
> In diesem Beispiel verwenden wir absolute Positionierung zum Verstecken und Anzeigen des Fehlermeldungsfensters, anstatt eine andere Methode wie Sichtbarkeit oder Anzeige, da dies den Screenreader nicht dabei stört, Inhalte von ihr vorlesen zu können.

Eine echte Formularvalidierung wäre viel komplexer als das — Sie würden sicherstellen wollen, dass der eingetragene Name tatsächlich wie ein Name aussieht, das eingetragene Alter tatsächlich eine Zahl ist und realistisch (z.B. nicht negativ und weniger als 4 Stellen). Hier haben wir nur eine einfache Überprüfung implementiert, dass ein Wert in jedes Eingabefeld eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird, wenn die Tests bestanden werden, das Formular übermittelt. Wenn Fehler vorhanden sind (`if (errorList.hasChildNodes())`), verhindern wir die Formularübermittlung (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen any erstellte Fehlermeldungen an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn Fehler vorhanden sind, was besser für die Bedienerfreundlichkeit ist.

Für jedes Eingabefeld, bei dem kein Wert eingetragen ist, wenn das Formular übermittelt wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link erfüllt einen doppelten Zweck — es sagt Ihnen, was der Fehler ist, plus Sie können darauf klicken/aktivieren, um direkt zum betreffenden Eingabefeld zu springen und Ihren Eintrag zu korrigieren.

Darüber hinaus wird das `errorField` am Anfang der Quellreihenfolge platziert (obwohl es mit CSS im UI anders positioniert ist), was bedeutet, dass Benutzer genau herausfinden können, was falsch an ihrer Formularübermittlung ist, und zu den betreffenden Eingabefeldern gelangen, indem sie wieder zum Seitenanfang zurückkehren.

Als abschließende Bemerkung haben wir einige WAI-ARIA-Attribute in unserem Beispiel verwendet, um Barrierefreiheitsprobleme zu lösen, die durch Bereiche von Inhalten verursacht werden, die ständig ohne Seitenreload aktualisiert werden (Screenreader nehmen dies von selbst nicht auf oder warnen Benutzer nicht darüber):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) im Detail behandelt.

> [!NOTE]
> Einige von Ihnen werden sich wahrscheinlich an die Tatsache erinnern, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe die {{htmlelement("input")}}-Elementreferenz für mehr Informationen). Wir haben diese nicht im Beispiel verwendet, weil die Unterstützung über verschiedene Browser hinweg uneinheitlich ist (zum Beispiel nur IE10 und höher).

> [!NOTE]
> WebAIM's [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen zu barrierefreier Formularvalidierung.

### Andere JavaScript-Barrierefreiheitsbedenken

Es gibt andere Dinge, auf die man achten sollte, wenn man JavaScript implementiert und über Barrierefreiheit nachdenkt. Wir werden mehr hinzufügen, wenn wir sie finden.

#### Maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mit Ereignishandlern implementiert, die es uns ermöglichen, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event), usw. Funktionalität, die als Reaktion auf diese Ereignisse ausgeführt wird, wird nicht über andere Mechanismen, wie Tastatursteuerungen, zugänglich sein.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen, die auf andere Weise aktiviert werden können (sogenannte geräteunabhängige Ereignishandhabersysteme), kombinieren — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturbenutzer bieten.

Schauen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Vorschaubild bieten, das eine größere Version des Bildes anzeigt, wenn es mit der Maus überfahren oder fokussiert wird (wie Sie es in einem E-Commerce-Produktkatalog sehen würden.)

Wir haben ein sehr einfaches Beispiel geschaffen, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und verbergen; diese werden durch die folgenden Zeilen als Ereignishandler festgelegt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Vorschaubild schwebt und aufhört zu schweben, jeweils. Das wird uns jedoch nicht ermöglichen, die vergrößerte Ansicht über die Tastatur zugänglich zu machen — um das zu ermöglichen, haben wir die letzten beiden Zeilen eingeschlossen, die die Funktionen ausführen, wenn das Bild fokussiert und verblasst (wenn der Fokus endet). Dies kann durch Überstreichen des Bilds geschehen, weil wir `tabindex="0"` auf ihm eingeschlossen haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler nach dem Drücken von Enter/Return auf einem Link oder Formelement, das Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Das funktioniert jedoch standardmäßig nicht, wenn Sie einem nicht-standart-fokussierbaren Ereignis Fokus durch `tabindex` geben — in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Baue Tastaturzugänglichkeit wieder ein](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen verinnerlicht haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Kenntnisse: CSS und JavaScript Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen einen guten Einblick und Verständnis für die Barrierefreiheitsprobleme im Zusammenhang mit der Verwendung von CSS und JavaScript auf Webseiten gegeben hat.

Weiter geht es mit WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
