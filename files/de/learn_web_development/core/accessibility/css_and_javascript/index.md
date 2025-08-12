---
title: CSS- und JavaScript-Barrierefreiheitsbest-Praktiken
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Wenn sie richtig verwendet werden, haben CSS und JavaScript das Potenzial, barrierefreie Web-Erfahrungen zu ermöglichen, oder sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch eingesetzt werden. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Praktiken, die Sie berücksichtigen sollten, um sicherzustellen, dass auch komplexe Inhalte so barrierefrei wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einem <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegenden Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Barrierefreies Textlayout und Schriftgröße.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code>- und <code>:hover</code>-Stilen.</li>
          <li>Sinnvolle Animationen — Animationen dezent verwenden und Steuerungen zum Abschalten bereitstellen.</li>
          <li>Beste Praktiken, um Inhalte zu verstecken, ohne dass diese unzugänglich werden.</li>
          <li>Dass es „zu viel JavaScript“ gibt und der Wert von dezentem JavaScript.</li>
          <li>Verwendung von Ereignissen auf sinnvolle Weise, sodass keine spezifischen Steuerungstypen ausgeschlossen werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können die Barrierefreiheit dennoch unterstützen oder schädigen, je nachdem, wie sie verwendet werden. Anders ausgedrückt, es ist wichtig, einige Best-Practices-Ratschläge zu berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript nicht die Barrierefreiheit Ihrer Dokumente ruiniert.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzerserwartung

Man kann mithilfe von CSS aus jedem HTML-Element _alles_ machen, aber das bedeutet nicht, dass Sie das tun sollten. Wie wir häufig in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie das passende semantische Element für die jeweilige Aufgabe verwenden, wann immer möglich. Andernfalls kann dies zu Verwirrung und Benutzerfreundlichkeitsproblemen für alle führen, insbesondere für Benutzer mit Behinderungen. Die Verwendung der korrekten Semantik hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen aus und verhalten sich auf bestimmte Weise entsprechend ihrer Funktionalität, und diese bekannten Konventionen werden von den Benutzern erwartet.

Ein Beispiel: Ein Screenreader-Benutzer kann eine Seite nicht anhand von Überschriftenelementen navigieren, wenn der Entwickler diese nicht ordnungsgemäß zur Strukturierung des Inhalts verwendet hat. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht mehr wie eine Überschrift aussieht.

Fazit: Sie können das Styling eines Seitenfeatures aktualisieren, um in Ihr Design zu passen, aber verändern Sie es nicht so sehr, dass es nicht mehr aussieht oder sich nicht mehr verhält wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Features zusammen, die berücksichtigt werden sollten.

#### „Standard“-Textinhaltsstruktur

Überschriften, Absätze, Listen — die Haupttextinhalte Ihrer Seite:

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

- Angemessene Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, um Ihren Text logisch, lesbar und angenehm zu gestalten.
- Sicherstellen, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten als Listen erkennbar sein.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Headings and paragraphs in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS text styling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Betonter Text

Inline-Markup, das dem umschlossenen Text eine bestimmte Betonung verleiht:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Es könnte nützlich sein, Ihrem betonten Text eine einfache Färbung hinzuzufügen:

```css
strong,
em {
  color: #a60000;
}
```

In der Regel müssen Sie jedoch Betonungselemente nicht wesentlich stilisieren. Die Standardkonventionen von fett und kursivem Text sind sehr erkennbar, und eine Stiländerung kann zur Verwirrung führen. Weitere Informationen zu Betonung finden Sie unter [Emphasis and importance](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Erweiterung verknüpfen kann:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier möchten Sie es möglicherweise auf einfache Weise stilisieren:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, hiervon signifikant abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abbreviations](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — der Weg zu neuen Orten im Web:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Eine sehr einfache Link-Styling-Methode wird unten gezeigt:

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

Die Standardlink-Konventionen sind unterstrichen und in ihrer Standardfarbe (Standard: Blau), eine andere Farbvariation, wenn der Link zuvor besucht wurde (Standard: Lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: Rot). Außerdem ändert sich der Mauszeiger zu einem Zeiger-Symbol, wenn Links übermalt werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. über Tab) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung in sowohl Firefox (eine gepunktete Umrandung) als auch Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Einträge. Der zweite Listeneintrag ist mit einer blauen gepunkteten Umrandung hervorgehoben, wenn er über Tab navigiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Einträge. Der dritte Listeneintrag ist mit einer blauen Umrandung hervorgehoben, wenn er über Tab navigiert wird.](focus-highlight-chrome.png)

Sie können mit Link-Stilen kreativ sein, solange Sie den Benutzern bei ihrer Interaktion mit den Links weiterhin Feedback geben. Es sollte definitiv etwas passieren, wenn sich Zustände ändern, und Sie sollten weder den Zeiger-Cursor noch die Umrandung entfernen – beide sind sehr wichtige Barrierefreiheits-Hilfsmittel für diejenigen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können gutes Beispiel-CSS in unserem Beispiel [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) sehen (ebenfalls [live ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Die meisten CSS, die Sie für Formulare schreiben, werden darauf abzielen, die Elemente zu dimensionieren, Beschriftungen und Eingaben auszurichten und sie ordentlich aussehen zu lassen.

Sie sollten jedoch nicht zu sehr von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, das ist im Grunde das gleiche wie bei Links (siehe oben). Sie könnten Fokus/Hover-Zustände von Formularen stylen, um dieses Verhalten über verschiedene Browser hinweg konsistenter zu gestalten oder um besser in Ihr Seitendesign zu passen, aber entfernen Sie es nicht vollständig — wieder: Menschen verlassen sich darauf, um zu wissen, was passiert.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML- und CSS-Tabellen finden Sie in unserem Beispiel [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) (auch [live ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabelle-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design zu integrieren und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften herausstechen (normalerweise durch Fettung), und Zebrastreifen zu verwenden, um unterschiedliche Zeilen leichter lesbar zu machen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website auswählen, stellen Sie sicher, dass die Text- (Vordergrund) Farbe gut mit der Hintergrundfarbe kontrastiert. Ihr Design könnte cool aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihren Inhalt nicht lesen können.

Es gibt eine einfache Möglichkeit, zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt viele Online-Tools zur Kontrastprüfung, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM ist einfach zu bedienen und bietet eine Erklärung, was Sie tun müssen, um den WCAG-Kriterien für Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht auch allen, die ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwenden, Seiten bei hellem Licht wie Sonnenlicht besser zu lesen.

Ein weiterer Tipp ist, sich nicht nur auf Farbe als Wegweiser/Information zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nicht nützlich ist. Anstatt zum Beispiel erforderliche Formularfelder rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Beispielsweise haben wir in unserem [Reiterinfo-Box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Infopaneelen, jedoch positionieren wir sie übereinander und bieten Reiter an, die angeklickt werden können, um jeweils einen anzuzeigen (es ist auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie anzuwählen).

![Drei-Tab-Oberfläche mit Tab 1 ausgewählt und nur dessen Inhalt angezeigt. Die Inhalte der anderen Tabs sind versteckt. Wird ein Tab ausgewählt, dann ändert sich die Textfarbe von schwarz zu weiß und die Hintergrundfarbe von rot-orange zu sattbraun.](tabbed-info-box.png)

Screenreader-Benutzer interessieren sich nicht für all das — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge Sinn ergibt und sie auf alles zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte zu verstecken, da dies nicht verhindert, dass Screenreader darauf zugreifen können.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, da sie Inhalte vor Screenreadern verbergen. Es sei denn, Sie haben einen triftigen Grund, warum dieser Inhalt vor Screenreadern verborgen bleiben soll.

> [!NOTE]
> [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Styles überschreiben können

Benutzer haben die Möglichkeit, Ihre Styles mit ihren eigenen benutzerdefinierten Styles zu überschreiben, zum Beispiel:

- Sehen Sie sich Sarah Maddox' [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden an, wie Sie dies manuell in Firefox durchführen können.
- Wahrscheinlich ist es einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Erweiterung Stylus für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)-Äquivalent ist.

Benutzer könnten dies aus einer Vielzahl von Gründen tun. Ein sehbehinderter Benutzer möchte möglicherweise den Text auf allen von ihm besuchten Websites vergrößern, oder ein Benutzer mit schwerer Farbenblindheit möchte alle Websites in kontrastreiche Farben setzen, die für ihn leicht zu sehen sind. Was auch immer der Bedarf sein mag, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, damit solche Änderungen in Ihr Design passen. Ein Beispiel: Sie möchten sicherstellen, dass Ihr Hauptinhaltsbereich größeren Text verarbeiten kann (vielleicht wird er anfangen zu scrollen, um alles sichtbar zu machen) und ihn nicht einfach ausblenden oder komplett unterbrechen.

## JavaScript

JavaScript kann auch die Barrierefreiheit beeinträchtigen, abhängig davon, wie es verwendet wird.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte 100% barrierefrei für alle Menschen sein müssen — Sie sollten einfach tun, was Sie können, um Ihre Apps so barrierefrei wie möglich zu gestalten.

Einfache Inhalte und Funktionalitäten sind wohl leichter barrierefrei zu gestalten — beispielsweise Text, Bilder, Tabellen, Formulare und Drucktasten, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn_web_development/Core/Accessibility/HTML) betrachtet haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Verwenden Sie das richtige Element für die richtige Aufgabe. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze, sowie {{htmlelement("button")}}- und {{htmlelement("a")}}-Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir betrachteten auch ein Beispiel, wie man mithilfe von JavaScript Funktionalitäten integrieren kann, wo sie fehlen — siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — eigentlich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es möglich ist in Situationen, in denen Sie aus irgendeinem Grund das Markup nicht kontrollieren können, das verwendet wird. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, ist die Verwendung von WAI-ARIA, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies ebenfalls im Detail behandeln.

Komplexe Funktionen wie 3D-Spiele sind nicht so leicht barrierefrei zu gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen für schwer sehbehinderte Benutzer bereitzustellen. Es lässt sich argumentieren, dass ein solches Spiel diese Gruppe von Menschen nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unzumutbar, zu erwarten, dass Sie es 100% barrierefrei für blinde Menschen gestalten. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Benutzern genutzt werden kann, und das Farbschema kontrastreich genug gestalten, damit es von Personen mit Farbdefiziten nutzbar ist.

### Das Problem mit zu viel JavaScript

Das Problem tritt häufig auf, wenn Menschen zu sehr auf JavaScript vertrauen. Manchmal sehen Sie eine Website, bei der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert, usw. Dies ist mit allerlei Barrierefreiheits- und anderen Problemen verbunden, sodass es nicht empfohlen wird.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sorgfältig, ob Sie dieses glänzende, JavaScript-gesteuerte 3D-Informationsfeld benötigen oder ob herkömmlicher Text ausreicht. Überlegen Sie sorgfältig, ob Sie ein komplexes, nicht standardmäßiges Formular-Widget benötigen oder ob ein Texteingabefeld ausreicht. Und generieren Sie nach Möglichkeit nicht all Ihren HTML-Inhalt mithilfe von JavaScript.

### Halten Sie es unaufdringlich

Sie sollten **unaufdringliches JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee des unaufdringlichen JavaScript besteht darin, es wann immer möglich zur Funktionenserweiterung zu verwenden, nicht um es vollständig aufzubauen — Grundfunktionen sollten idealerweise ohne JavaScript funktionieren, obwohl zugegeben wird, dass dies nicht immer eine Option ist. Doch erneut, ein großer Teil davon ist die Nutzung der integrierten Browserfunktionalität, wo möglich.

Gute Anwendungsbeispiele für unaufdringliches JavaScript sind:

- Bereitstellung von Client-seitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, funktioniert das Formular trotzdem, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML-`<video>`s, die für Benutzer, die nur eine Tastatur verwenden, zugänglich sind, sowie einer direkten Verknüpfung zum Video, die für den Zugang genutzt werden kann, wenn JavaScript nicht verfügbar ist (die Standard-`<video>`-Browsersteuerungen sind nicht über die Tastatur in den meisten Browsern zugänglich).

Als Beispiel haben wir ein schnelles und einfaches Client-seitiges Formularvalidierungsbeispiel geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (ebenfalls [sehen Sie das Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern abzusenden, schlägt das Senden fehl, und eine Fehlermeldungsbox erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art von Formularvalidierung ist unaufdringlich — Sie können das Formular auch problemlos ohne das JavaScript nutzen, und jede vernünftige Formularimplementierung wird ebenfalls serverseitige Validierung aktiv haben, da es zu einfach für böswillige Benutzer ist, Client-seitige Validierung zu umgehen (zum Beispiel durch Deaktivierung von JavaScript im Browser). Die Client-seitige Validierung ist dennoch sehr nützlich zur Fehlerberichterstattung — Benutzer können über Fehler sofort informiert werden, anstatt auf eine Serverrundreise und einen Seitenreload warten zu müssen. Dies ist ein klarer Usability-Vorteil.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben dieses Formularvalidation auch ziemlich barrierefrei gestaltet. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig mit ihren Eingabefeldern verknüpft sind, sodass Screenreader sie zusammen mit den Eingabefeldern vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular abgesendet wird — dies ist, um die Benutzeroberfläche nicht zu häufig zu aktualisieren und potenziell Benutzer von Screenreadern (und möglicherweise anderen) zu verwirren:

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
> In diesem Beispiel verstecken und zeigen wir die Fehlermeldungsbox mithilfe der absoluten Positionierung anstatt einer anderen Methode wie Sichtbarkeit oder Anzeige, da dies nicht beeinträchtigt, dass der Screenreader in der Lage ist, Inhalte von dieser zu lesen.

Echte Formularvalidierung wäre viel komplexer als dies — Sie möchten sicherstellen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch (z.B. nicht negativ und weniger als 4 Ziffern). Hier haben wir einfach eine einfache Prüfung implementiert, dass ein Wert in jedes Eingabefeld eingetragen wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird das Formular abgesendet, wenn die Tests bestanden werden. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), dann verhindern wir das Absenden des Formulars (mittels [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen etwaige Fehlermeldungen an, die erstellt wurden (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn Fehler vorhanden sind, was besser für die Benutzerfreundlichkeit ist.

Für jedes Eingabeelement, das keinen Wert eingetragen hat, wenn das Formular abgesendet wird, erstellen wir ein Listenelement mit einem Link und fügen es der `errorList` hinzu.

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

Jeder Link erfüllt einen zweifachen Zweck — er sagt Ihnen, was der Fehler ist, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabefeld zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich ist das `errorField` am Anfang der Quellreihenfolge platziert (obwohl es mittels CSS an anderer Stelle in der Benutzeroberfläche positioniert wird), was bedeutet, dass Benutzer genau herausfinden können, was mit ihren Formulareinträgen nicht stimmt und zu den betreffenden Eingabeelementen gehen können, indem sie zum Anfang der Seite zurückkehren.

Abschließend haben wir einige WAI-ARIA-Attribute in unserem Demo verwendet, um Barrierefreiheitsprobleme zu lösen, die durch häufig aktualisierte Inhaltsbereiche ohne Seitenreload verursacht werden (Screenreader erkennen dies normalerweise nicht oder alarmieren Benutzer nicht):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich an die Tatsache denken, dass HTML-Formulare eingebettete Validierungsmechanismen wie die Attribute `required`, `min`/`minlength` und `max`/`maxlength` haben (siehe das {{htmlelement("input")}}-Element-Referenz für weitere Informationen). Wir haben diese im Demo nicht verwendet, weil die Browserunterstützung dafür ungleichmäßig ist (zum Beispiel nur IE10 und höher).

> [!NOTE]
> WebAIMs [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen über barrierefreie Formularvalidierung.

### Andere JavaScript-Bedenken hinsichtlich der Barrierefreiheit

Es gibt weitere Aspekte zu beachten, wenn JavaScript implementiert wird und die Barrierefreiheit in Betracht gezogen wird. Wir werden weitere hinzufügen, wenn wir sie finden.

#### Maus-spezifische Ereignisse

Wie Sie wissen werden, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mithilfe von Ereignis-Handlern implementiert, die es uns ermöglichen, Funktionen als Antwort auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme verursachen. Das Hauptbeispiel, auf das Sie stoßen werden, sind Maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalitäten, die als Reaktion auf diese Ereignisse ausgeführt werden, können nicht mit anderen Mechanismen wie Tastatursteuerungen zugänglich gemacht werden.

Um solche Probleme zu mindern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen kombinieren, die auf andere Weise aktiviert werden können (so genannte geräteunabhängige Ereignis-Handler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden für die Zugänglichkeit von Tastaturnutzern sorgen.

Schauen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Vorschaubild bereitstellen, das eine vergrößerte Version des Bildes anzeigt, wenn es übermalt oder fokussiert wird (wie man es vielleicht in einem Produktkatalog von E-Commerce sehen würde).

Wir haben ein sehr einfaches Beispiel gemacht, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html) an). Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und ausblenden; diese werden durch die folgenden Zeilen als Ereignis-Handler ausgeführt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Thumbnail schwebt und aufhört zu schweben. Dies ermöglicht es uns nicht, die vergrößerte Ansicht per Tastatur zu erreichen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen hinzugefügt, die die Funktionen ausführen, wenn das Bild fokussiert und unscharf (wenn der Fokus aufhört) wird. Dies kann durch Tab-Bedienung über das Bild geschehen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event)-Ereignis-Handler, nachdem Enter/Return auf einem fokussierten Link oder Formularelement gedrückt wurde, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Element den Fokus mittels Tabindex erlauben — in solchen Fällen müssen Sie speziell erkennen, wann diese bestimmte Taste gedrückt wird (siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen ein gutes Maß an Details und Verständnis über die Barrierefreiheitsprobleme in Bezug auf CSS und JavaScript-Nutzung auf Webseiten gegeben hat.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
