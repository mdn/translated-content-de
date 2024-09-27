---
title: CSS- und JavaScript-Barrierefreiheits-Best Practices
slug: Learn/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS und JavaScript haben, wenn sie richtig eingesetzt werden, das Potenzial, barrierefreie Web-Erfahrungen zu ermöglichen, oder sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch eingesetzt werden. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so barrierefrei wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript sowie Verständnis von
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit der angemessenen Verwendung von CSS und JavaScript in Ihren
        Webdokumenten zu erlangen, um die Barrierefreiheit zu maximieren und nicht zu beeinträchtigen.
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können dennoch helfen oder schaden, je nachdem, wie sie verwendet werden. Anders ausgedrückt, es ist wichtig, dass Sie einige Best Practice-Empfehlungen berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Fangen wir mit einem Blick auf CSS an.

### Korrekte Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element wie _alles_ aussehen zu lassen, aber das bedeutet nicht, dass Sie das tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) erwähnt haben, sollten Sie immer das passende semantische Element für die jeweilige Aufgabe verwenden, wann immer möglich. Wenn Sie das nicht tun, kann dies Verwirrung und Benutzerfreundlichkeitsprobleme für alle verursachen, insbesondere jedoch für Benutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen auf eine bestimmte Weise aus und verhalten sich in bestimmter Weise, entsprechend ihrer Funktionalität, und diese üblichen Konventionen werden von Benutzern erwartet.

Ein Beispiel: Ein Benutzer eines Screenreaders kann nicht über Überschriftselemente auf einer Seite navigieren, wenn der Entwickler nicht die richtigen Überschriftselemente verwendet hat, um den Inhalt zu markieren. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so stylen, dass sie nicht wie eine Überschrift aussieht.

Fazit: Sie können das Styling einer Seitenfunktion so aktualisieren, dass es in Ihr Design passt, aber ändern Sie es nicht so stark, dass es nicht mehr so aussieht oder sich so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die zu berücksichtigen sind.

#### "Standard"-Textinhaltsstruktur

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

- Vernünftige Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, um Ihren Text logischer, lesbar und angenehm zu gestalten.
- Sicherstellen, dass sich Ihre Überschriften von Ihrem normalen Text abheben, normalerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [HTML Text Grundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) und [Text stilisieren](/de/docs/Learn/CSS/Styling_text) für weitere Informationen.

#### Hervorgehobener Text

Inline-Markup, das spezifische Betonung auf den umschließenden Text legt:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Vielleicht möchten Sie Ihrem hervorgehobenen Text etwas einfache Farbe hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden jedoch selten die Elemente der Hervorhebung in bedeutender Weise stylen müssen. Die Standardkonventionen von fett und kursivem Text sind sehr erkennbar, und ein Wechsel der Stilart kann Verwirrung stiften. Weitere Informationen zur Hervorhebung finden Sie unter [Hervorhebung und Wichtigkeit](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance).

#### Abkürzungen

Ein Element, das einer Abkürzung, einem Akronym oder einer Initialisierung die Verbindung zu ihrer Erweiterung ermöglicht:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Wiederum könnten Sie es auf einfache Weise stylen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, davon stark abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations).

#### Links

Hyperlinks — die Möglichkeit, neue Orte im Web zu erreichen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Stilbeispiel für Links wird unten gezeigt:

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

Die Standardkonventionen für Links sind unterstrichen und haben eine andere Farbe (Standard: Blau) im Normalzustand, eine weitere Farbvariation, wenn der Link zuvor besucht wurde (Standard: Lila), und erneut eine andere Farbe, wenn der Link aktiviert wird (Standard: Rot). Zusätzlich ändert sich der Mauszeiger bei Überfahren mit der Maus in ein Zeiger-Symbol, und der Link erhält eine Hervorhebung, wenn er fokussiert wird (z.B. über Tabulator) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Link-Liste im Firefox-Browser. Die Liste enthält 4 Einträge. Der zweite Listeneintrag ist bei Fokussierung über die Tabulatortaste mit einer blauen gepunkteten Umrandung hervorgehoben.](focus-highlight-firefox.png)

![Screenshot einer Link-Liste im Chrome-Browser. Die Liste enthält 4 Einträge. Der dritte Listeneintrag ist bei Fokussierung über die Tabulatortaste mit einer blauen Umrandung hervorgehoben.](focus-highlight-chrome.png)

Sie können kreativ mit Link-Stilen sein, solange Sie den Benutzern bei der Interaktion mit den Links Feedback geben. Es sollte definitiv etwas geschehen, wenn sich die Zustände ändern, und Sie sollten weder den Zeiger-Cursor noch die Umrandung entfernen — beides sind sehr wichtige Hilfen für die Barrierefreiheit für Personen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern erlauben, Daten in Webseiten einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Ein gutes CSS-Beispiel finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) auch).

Der Großteil des CSS, das Sie für Formulare schreiben, wird dazu dienen, die Elemente in der Größe anzupassen, Etiketten und Eingaben auszurichten und sie ordentlich und sauber aussehen zu lassen.

Sie sollten jedoch nicht zu sehr von der visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde das gleiche ist wie bei Links (siehe oben). Sie könnten Form-Fokus/Hover-Zustände stylen, um dieses Verhalten über Browser hinweg konsistenter zu machen oder besser mit Ihrem Seitendesign zu harmonieren, aber entfernen Sie es nicht ganz — wiederum verlassen sich Menschen auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML und CSS von Tabellen finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel ([siehe es auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient im Allgemeinen dazu, dass die Tabelle besser in Ihr Design passt und weniger unschön aussieht. Es ist eine gute Idee, sicherzustellen, dass sich die Tabellenköpfe abheben (normalerweise mit Fett gedruckt), und Zebra-Streifen zu verwenden, um unterschiedliche Zeilen leichter erfassbar zu machen.

### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design könnte cool aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit zu überprüfen, ob der Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Kontrastprüfungs-Tools, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu verwenden und bietet eine Erklärung, was Sie tun müssen, um die WCAG-Kriterien in Bezug auf Farbkontrast zu erfüllen.

> [!NOTE]
> Ein hoher Kontrastverhältnis ermöglicht auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten bei heller Umgebung, wie Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht allein auf Farben für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nutzlos sein wird. Anstatt zum Beispiel erforderliche Felder in einem Formular rot zu markieren, kennzeichnen Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. Beispielweise haben wir in unserem [Tabbed info box-Example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Informationspanels, aber wir positionieren sie übereinander und bieten Tabs an, die angeklickt werden können, um jedes anzuzeigen (es ist auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei Tab-Schnittstelle mit Tab 1 ausgewählt und nur dessen Inhalt angezeigt. Der Inhalt der anderen Tabs ist versteckt. Wenn ein Tab ausgewählt ist, ändert sich dessen Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orange-Rot zu Sattelbraun.](tabbed-info-box.png)

Nutzer von Screenreadern kümmern sich um nichts davon — solange die Quellreihenfolge sinnvoll ist und sie darauf zugreifen können, sind sie zufrieden mit dem Inhalt. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte aus visuellen Gründen zu verstecken, da sie nicht verhindert, dass Screenreader darauf zugreifen.

Andererseits sollten Sie {{cssxref("visibility", "sichtbarkeit: versteckt")}} oder {{cssxref("display", "anzeige: keine")}} nicht verwenden, weil sie Inhalte vor Screenreadern verstecken. Es sei denn, es gibt einen guten Grund, warum diese Inhalte vor Screenreadern versteckt sein sollen.

> **Hinweis:** [Unsichtbare Inhalte nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Es ist möglich für Benutzer, Ihre Stile mit eigenen benutzerdefinierten Stilen zu überschreiben. Zum Beispiel:

- Sehen Sie sich Sarah Maddox' [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden an, wie dies manuell in Firefox durchgeführt werden kann.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer könnte den Text auf allen besuchten Websites vergrößern wollen, oder ein Benutzer mit schwerer Farbsehschwäche könnte alle Websites in hohem Kontrast sehen wollen, um sie besser erkennen zu können. Was auch immer der Bedarf ist, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, dass solche Änderungen in Ihrem Design funktionieren. Ein Beispiel wäre, sicherzustellen, dass Ihr Hauptinhalt-Bereich größeren Text verarbeiten kann (vielleicht beginnt sie zu scrollen, um alles sichtbar zu machen) und nicht einfach verbirgt oder vollständig zerbricht.

## JavaScript

JavaScript kann die Barrierefreiheit ebenfalls beeinträchtigen, je nachdem, wie es eingesetzt wird.

Moderne JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100 % für alle Menschen barrierefrei sein müssen — Sie müssen einfach tun, was Sie können, und Ihre Anwendungen so zugänglich wie möglich machen.

Einfache Inhalte und Funktionen sind wohl leicht barrierefrei zu gestalten — zum Beispiel Text, Bilder, Tabellen, Formulare und Druckknöpfe, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) beschrieben haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Verwenden des richtigen Elements für den richtigen Zweck. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze und {{htmlelement("button")}} und {{htmlelement("a")}}-Elemente verwenden.
- Sicherstellen, dass der Inhalt als Text verfügbar ist, sei es direkt als Textinhalt, gute Textetiketten für Formularelemente oder [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel dafür betrachtet, wie man JavaScript verwenden kann, um Funktionalität einzubauen, wo sie fehlt — siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in). Das ist nicht ideal — wirklich sollten Sie einfach das richtige Element für den richtigen Zweck verwenden — aber es zeigt, dass es in Situationen, in denen Sie das Markup aus irgendeinem Grund nicht kontrollieren können, möglich ist. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies auch im Detail behandeln.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach barrierefrei zu gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert, das derzeit über keine Möglichkeit verfügt, Textalternativen oder andere Informationen für stark sehbehinderte Nutzer bereitzustellen. Es ist argumentierbar, dass ein solches Spiel diese Personengruppe nicht wirklich zu seiner Hauptzielgruppe hat, und es wäre unvernünftig, von Ihnen zu erwarten, dass Sie es zu 100 % für blinde Menschen barrierefrei machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es von Nutzern ohne Maus bedient werden kann, und das Farbschema kontrastreich genug gestalten, um es für Farbsehschwache nutzbar zu machen.

### Das Problem mit zu viel JavaScript

Das Problem tritt häufig auf, wenn Menschen zu stark auf JavaScript angewiesen sind. Manchmal werden Sie eine Website sehen, bei der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert, etc. Dies bringt alle möglichen Zugänglichkeits- und anderen Probleme mit sich, und es wird nicht empfohlen.

Neben dem Verwenden des richtigen Elements für den richtigen Zweck sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Denken Sie sorgfältig darüber nach, ob Sie diese glänzende, von JavaScript gesteuerte 3D-Informationsbox brauchen oder ob einfacher Text ausreichen würde. Denken Sie sorgfältig darüber nach, ob Sie ein komplexes, nicht standardmäßiges Formular-Widget benötigen oder ob eine Texteingabe ausreichen würde. Und generieren Sie nicht Ihr gesamtes HTML-Inhalte mit JavaScript, wenn es irgend möglich ist.

### Es unaufdringlich halten

Sie sollten bei der Erstellung Ihrer Inhalte an **unaufdringliches JavaScript** denken. Die Idee von unaufdringlichem JavaScript ist, dass es, wo möglich, dazu genutzt werden sollte, die Funktionalität zu erweitern, nicht sie vollständig aufzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, obwohl es anerkannt wird, dass dies nicht immer eine Option ist. Aber auch hier spielt es eine große Rolle, eingebaute Browserfunktionen, wo möglich, zu nutzen.

Gute Beispiele für die Nutzung von unaufdringlichem JavaScript sind:

- Bereitstellen von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben aufmerksam macht, ohne auf die Serverüberprüfung der Daten warten zu müssen. Wenn sie nicht verfügbar ist, funktioniert das Formular immer noch, aber die Validierung könnte langsamer sein.
- Bereitstellen von benutzerdefinierten Steuerelementen für HTML-`<video>`, die von Tastaturbenutzern zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die standardmäßigen `<video>`-Browser-Steuerelemente sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnelles und schmutziges Beispiel für clientseitige Formularvalidierung geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch das [Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern einzureichen, schlägt das Einreichen fehl, und es erscheint ein Fehlermeldungsfeld, das Ihnen mitteilt, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular absolut problemlos verwenden, ohne dass JavaScript verfügbar ist, und jede sinnvolle Formularimplementierung wird auch serverseitige Validierung aktiv haben, da es zu einfach ist, clientseitige Validierung zu umgehen (zum Beispiel, indem Sie JavaScript im Browser deaktivieren). Die clientseitige Validierung ist immer noch wirklich nützlich für Fehlerberichte — Benutzer können von Fehlern, die sie machen, sofort erfahren, anstatt auf eine Hin- und Rücksendung zum Server und ein Neuladen der Seite warten zu müssen. Dies ist ein definitiver Vorteil für die Benutzerfreundlichkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Beispiel nicht implementiert.

Dieses Formular zur Validierung haben wir auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularetiketten eindeutig mit ihren Eingaben verknüpft sind, sodass Bildschirmlesegeräte sie zusammen mit vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular abgeschickt wird — dies dient dazu, die Benutzeroberfläche nicht zu oft zu aktualisieren und möglicherweise Bildschirmleser (und möglicherweise andere) Benutzer zu verwirren:

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
> In diesem Beispiel verstecken und zeigen wir das Fehlermeldungsfeld mithilfe von absoluter Positionierung anstatt einer anderen Methode wie Sichtbarkeit oder Anzeige, da dies nicht die Fähigkeit des Bildschirmlesers beeinträchtigt, Inhalte aus ihm zu lesen.

Echte Formularvalidierung wäre viel komplexer als dies — Sie möchten sicherstellen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl und realistisch ist (z. B. nicht negativ und weniger als 4-stellig). Hier haben wir einfach eine einfache Prüfung implementiert, dass in jedem Eingabefeld ein Wert eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, werden, wenn die Tests bestanden werden, das Formular abgeschickt. Wenn es zu Fehlern kommt (`if (errorList.hasChildNodes())`), verhindern wir, dass das Formular abgeschickt wird (mithilfe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen wir alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehleranzeige nur dann angezeigt wird, wenn es zu Fehlern kommt, was besser für die Benutzerfreundlichkeit ist.

Für jedes Eingabefeld, das keinen Wert hat, wenn das Formular abgeschickt wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link dient einem doppelten Zweck — er sagt Ihnen, was der Fehler ist, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich wird das `errorField` an oberster Stelle der Quellreihenfolge platziert (obwohl es im UI mit CSS anders positioniert wird), was bedeutet, dass Benutzer direkt herausfinden können, was genau bei ihren Formulareinsendungen falsch ist, und zu den betreffenden Eingabeelementen gelangen können, indem sie zum Anfang der Seite zurückkehren.

Abschließend haben wir einige WAI-ARIA-Attribute in unserem Beispiel verwendet, um Zugänglichkeitsprobleme zu lösen, die durch sich ständig ohne Neuladen der Seite aktualisierende Inhaltsbereiche verursacht werden (Bildschirmleser werden dies nicht automatisch erkennen oder die Benutzer darauf hinweisen):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Diese Attribute werden wir in unserem nächsten Artikel, der [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) im Detail behandeln wird, erklären.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich an die Tatsache denken, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe das {{htmlelement("input")}}-Element-Referenz für mehr Informationen). Wir haben diese im Beispiel nicht verwendet, weil die Unterstützung dafür zwischen den Browsern lückenhaft ist (zum Beispiel ab IE10 und höher nur).

> [!NOTE]
> WebAIMs [Nutzbare und zugängliche Formularvalidierung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) enthält weitere nützliche Informationen zur zugänglichen Formularvalidierung.

### Weitere JavaScript Zugänglichkeitsbedenken

Es gibt weitere Dinge, die zu beachten sind, wenn man JavaScript implementiert und an Barrierefreiheit denkt. Wir werden mehr hinzufügen, sobald wir sie finden.

#### Mäusespezifische Ereignisse

Wie Ihnen bekannt ist, werden die meisten Benutzerinteraktionen mit ereignisgesteuertem JavaScript implementiert, mit dem wir Funktionen als Reaktion auf bestimmte Ereignisse laufen lassen können. Einige Ereignisse können Zugänglichkeitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind mäusespezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event), usw. Funktionalitäten, die als Reaktion auf diese Ereignisse ausgeführt werden, sind nicht über andere Mechanismen wie Tastatursteuerungen zugänglich.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen verknüpfen, die durch andere Mittel aktiviert werden können (sogenannte geräteunabhängige Ereignis-Handler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Zugriff für Tastaturbenutzer ermöglichen.

Sehen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Miniaturbild bereitstellen, das beim Mouseover oder Fokussieren eine größere Version des Bildes anzeigt (wie man es in einem E-Commerce-Produktkatalog sehen würde).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html) an). Der Code enthält zwei Funktionen, die das herein- und herauszoomende Bild anzeigen und ausblenden; sie werden von den folgenden Zeilen als Ereignis-Handler eingeführt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über der Miniatur schwebt bzw. nicht mehr darüber schwebt. Dies erlaubt es uns jedoch nicht, durch die Tastatur auf die Vergrößerungsansicht zuzugreifen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen hinzugefügt, die die Funktionen ausführen, wenn das Bild fokussiert und entfokussiert wird (wenn der Fokus stoppt). Dies kann durch Tabben über das Bild geschehen, da wir `tabindex="0"` darauf eingefügt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser werden [onclick](/de/docs/Web/API/Element/click_event)-Ereignis-Handler aktivieren, nachdem die Eingabetaste/Return-Taste auf einem Link- oder Formularelement gedrückt wird, das den Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch standardmäßig nicht, wenn Sie erlauben, dass ein benutzerdefiniertes Fokusereignis durch `tabindex` aktiviert wird — in solchen Fällen müssen Sie gezielt erkennen, wann genau diese Taste gedrückt wird (siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Zugänglichkeit](/de/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen eine gute Menge an Details und Verständnis über die Probleme der Zugänglichkeit in Bezug auf die Verwendung von CSS und JavaScript auf Webseiten gegeben.

Als nächstes: WAI-ARIA!

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}
