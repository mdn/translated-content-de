---
title: "CSS- und JavaScript-Barrierefreiheit: Best Practices"
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript haben, wenn sie richtig verwendet werden, das Potenzial, zugängliche Web-Erfahrungen zu ermöglichen oder die Barrierefreiheit erheblich zu beeinträchtigen, wenn sie falsch eingesetzt werden. Dieser Artikel beschreibt einige Best Practices für CSS und JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einem <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegenden Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Zugängliche Textgestaltung und Layouts.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code> Stilen.</li>
          <li>Sinnvolle Animationen — verwenden Sie Animationen subtil und bieten Sie Kontrollen, um sie auszuschalten.</li>
          <li>Best Practices zum Ausblenden von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt und den Wert von dezentem JavaScript.</li>
          <li>Verwendung von Ereignissen, die sinnvoll sind, damit keine spezifischen Steuerungstypen ausgeschlossen werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript zugänglich?

CSS und JavaScript haben nicht die gleiche unmittelbare Wichtigkeit für die Barrierefreiheit wie HTML, aber sie können dennoch helfen oder die Barrierefreiheit beeinträchtigen, je nachdem, wie sie verwendet werden. Anders ausgedrückt: Es ist wichtig, einige Best Practices zu berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht ruiniert.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzenerwartung

Es ist möglich, mithilfe von CSS jedes HTML-Element so aussehen zu lassen wie _irgendetwas_, aber das bedeutet nicht, dass Sie das tun sollten. Wie bereits in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) oft erwähnt, sollten Sie, wann immer möglich, das passende semantische Element für die Aufgabe verwenden. Andernfalls kann dies zu Verwirrung und Benutzbarkeitsproblemen führen, insbesondere für Nutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen je nach ihrer Funktionalität auf bestimmte Weise aus und verhalten sich entsprechend, und diese allgemeinen Konventionen werden von den Benutzern erwartet.

Ein Beispiel: Ein Screenreader-Nutzer kann eine Seite nicht über Überschriften-Elemente navigieren, wenn der Entwickler diese nicht richtig verwendet hat, um den Inhalt zu strukturieren. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht mehr wie eine Überschrift aussieht.

Kurz gesagt, Sie können das Styling eines Seitenelements aktualisieren, um es in Ihr Design einzupassen, aber verändern Sie es nicht so sehr, dass es nicht mehr wie erwartet aussieht oder sich verhält. Die folgenden Abschnitte fassen die wichtigsten HTML-Features zusammen, die beachtet werden sollten.

#### "Standard"-Textinhalt-Struktur

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

- Angemessene Schriftgrößen, Zeilenabstände, Buchstabenabstände usw. auswählen, um Ihren Text logisch, lesbar und angenehm zu machen.
- Sicherstellen, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Weitere Informationen finden Sie unter [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling).

#### Betonter Text

Inline-Markup, das dem umschlossenen Text spezifische Betonung verleiht:

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

Sie werden jedoch selten ein bedeutendes Styling für Betonungselemente benötigen. Die Standardkonventionen von fett und kursiv sind sehr erkennbar, und eine Stiländerung kann Verwirrung stiften. Weitere Informationen zur Betonung finden Sie unter [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Entfaltung assoziiert:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Sie könnten es in einfacher Weise formatieren:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, davon erheblich abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — der Weg, um an neue Orte im Web zu gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Link-Styling wird unten gezeigt:

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

Die Standard-Link-Konventionen sind unterstrichen und in ihrer Standardform eine andere Farbe (Standard: Blau), eine andere Farbvariante, wenn der Link zuvor besucht wurde (Standard: Violett) und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: Rot). Zusätzlich ändert sich der Mauszeiger beim Überfahren von Links in ein Zeiger-Symbol und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. durch Tabbing) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (gestrichelte Umrandung) als auch in Chrome (blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist mit einer blauen gestrichelten Umrandung hervorgehoben, wenn es durch Tabbing fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement ist mit einer blauen Umrandung hervorgehoben, wenn es durch Tabbing fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Link-Stilen umgehen, solange Sie den Benutzern Rückmeldung geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich Zustände ändern, und Sie sollten weder den Zeiger-Cursor noch die Umrandung entfernen — beide sind sehr wichtige Zugänglichkeitshilfen für diejenigen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gute Beispiel-CSS finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel (auch [live ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Der Großteil des CSS, das Sie für Formulare schreiben, wird dazu verwendet, die Elemente zu dimensionieren, Labels und Eingaben auszurichten und diese ordentlich und ordentlich aussehen zu lassen.

Sie sollten jedoch nicht zu weit von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Wesentlichen das gleiche ist wie bei Links (siehe oben). Sie könnten Formular-Fokus/Hover-Zustände so gestalten, dass dieses Verhalten in allen Browsern konsistenter erscheint oder besser in Ihr Design passt, aber entfernen Sie es nicht vollständig — denn Menschen sind auf diese Hinweise angewiesen, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML und CSS von Tabellen finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel (auch [live ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzufügen und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass sich die Tabellenüberschriften abheben (normalerweise fett) und Zebrastripes zu verwenden, um verschiedene Zeilen leichter lesbar zu machen.

### Farbe und Farbk contraste

Bei der Wahl eines Farbschemas für Ihre Website sollten Sie darauf achten, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbblindheit Ihren Inhalt nicht lesen können.

Es gibt eine einfache Möglichkeit zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt online zahlreiche Kontrastüberprüfungstools, in die Sie Ihre Vorder- und Hintergrundfarben eingeben können, um sie zu überprüfen. Beispielsweise ist der [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/) einfach zu verwenden und bietet eine Erläuterung dessen, was Sie tun müssen, um den WCAG-Kriterien in Bezug auf Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung, wie beispielsweise Sonnenlicht, befindet.

Ein weiterer Tipp ist, sich nicht ausschließlich auf Farben als Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farben nicht sehen können, nicht von Nutzen ist. Statt erforderliche Formularfelder rot zu markieren, markieren Sie sie stattdessen mit einem Sternchen und in Rot.

### Elemente ausblenden

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel haben wir in unserem [Beispiel für ein Registerkarten-Informationsfeld](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Informationspanels, aber wir positionieren sie übereinander und bieten Registerkarten, die angeklickt werden können, um jeweils eines anzuzeigen (es ist auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei-Registerkarten-Schnittstelle mit ausgewähltem Tab 1, wobei nur dessen Inhalte angezeigt werden. Die Inhalte der anderen Registerkarten sind ausgeblendet. Wenn auf eine Registerkarte geklickt wird, ändert sich die Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

Screenreader-Benutzer kümmern sich darum nicht wirklich — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen zum Verstecken von Inhalten für visuelle Effekte angesehen, da sie Screenreadern nicht daran hindert, darauf zuzugreifen.

Auf der anderen Seite sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie Inhalte für Screenreader verbergen. Natürlich sei denn, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt für Screenreader verborgen ist.

> **Hinweis:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Es ist möglich, dass Benutzer Ihre Stile mit ihren eigenen benutzerdefinierten Stilen überschreiben, zum Beispiel:

- Siehe Sarah Maddox' [Wie man ein benutzerdefiniertes Style Sheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für eine nützliche Anleitung, wie man dies manuell in Firefox macht.
- Wahrscheinlich ist es einfacher, dies mit einer Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, wobei Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer könnten dies aus unterschiedlichen Gründen tun. Ein sehbehinderter Benutzer möchte vielleicht den Text auf allen besuchten Websites vergrößern oder ein Nutzer mit schwerwiegender Farbsehschwäche möchte alle Websites in kontrastreichen Farben darstellen, die für ihn gut sichtbar sind. Welche Bedürfnisse auch immer vorliegen, Sie sollten damit umgehen können und Ihre Designs flexibel genug gestalten, damit solche Änderungen in Ihrem Design funktionieren. Zum Beispiel könnten Sie sicherstellen, dass Ihr Hau...

## JavaScript

JavaScript kann auch die Barrierefreiheit beeinträchtigen, je nachdem, wie es verwendet wird.

Moderne JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage viel damit tun, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte für alle Menschen zu 100 % zugänglich sein müssen — man muss nur tun, was man kann, und seine Anwendungen so zugänglich wie möglich machen.

Einfache Inhalte und Funktionen sind in Bezug auf Barrierefreiheit relativ einfach zu gestalten — z. B. Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) untersucht haben, sind folgende Überlegungen entscheidend:

- Gute Semantik: Verwendung des richtigen Elements für die jeweilige Aufgabe. Beispielsweise die Verwendung von Überschriften und Absätzen, sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elementen.
- Sicherstellung, dass Inhalte als Text verfügbar sind, sei es direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z. B. Alt-Text für Bilder.

Wir haben auch ein Beispiel untersucht, wie JavaScript verwendet werden kann, um Funktionen dort zu integrieren, wo sie fehlen — siehe [Wiederherstellung der Barrierefreiheit für Tastaturen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist zwar nicht ideal — tatsächlich sollte man einfach das richtige Element für die richtige Funktion verwenden —, aber es zeigt, dass es möglich ist, in Situationen, in denen man aus irgendeinem Grund die verwendete Markup nicht kontrollieren kann. Eine weitere Möglichkeit, die Barrierefreiheit nicht-semantischer, von JavaScript betriebener Widgets zu verbessern, besteht darin, WAI-ARIA zur Bereitstellung zusätzlicher Semantik für Nutzer von Screenreader zu verwenden. Der nächste Artikel wird dies ebenfalls detailliert behandeln.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so leicht zugänglich zu machen — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wird, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen für stark sehbehinderte Benutzer bereitzustellen. Es lässt sich argumentieren, dass ein solches Spiel diese Gruppe von Menschen nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unzumutbar zu erwarten, dass Sie es für blinde Menschen zu 100 % zugänglich machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Benutzern genutzt werden kann, und das Farbschema genügend Kontrast verleihen, sodass es von Personen mit Farbsehschwächen verwendet werden kann.

### Das Problem mit zu viel JavaScript

Das Problem entsteht oft, wenn die Leute sich zu stark auf JavaScript verlassen. Manchmal sieht man eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS von JavaScript erstellt usw. Dies zieht alle möglichen Probleme hinsichtlich der Zugänglichkeit und anderer Bereiche nach sich und wird daher nicht empfohlen.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sich genau, ob Sie wirklich dieses glänzende JavaScript-gesteuerte 3D-Infofeld benötigen, oder ob einfacher Text ausreicht. Überlegen Sie sich genau, ob Sie wirklich ein komplexes, nicht standardmäßiges Formular-Widget benötigen, oder ob eine Texteingabe ausreicht. Und generieren Sie nach Möglichkeit nicht Ihr gesamtes HTML-Inhalt mit JavaScript.

### Subtile Nutzung von JavaScript beibehalten

Sie sollten **dezentes JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee des unaufdringlichen JavaScript ist, dass es überall dort verwendet werden sollte, wo möglich, um Funktionen zu verbessern, nicht um diese vollständig aufzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, auch wenn es verständlich ist, dass dies nicht immer möglich ist. Aber auch hier gilt: Ein Großteil davon ist die Nutzung der integrierten Browserfunktionalität, wo immer möglich.

Gute Beispiele für dezentes JavaScript sind:

- Bereitstellung clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf die Serverüberprüfung der Daten zu warten. Wenn es nicht verfügbar ist, funktioniert das Formular trotzdem, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML `<video>`, die für Benutzer mit nur Tastaturbedienung zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die `<video>`-Standardsteuerelemente für den Browser sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnelles und einfaches Beispiel zur clientseitigen Formularvalidierung erstellt — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch [das Live-Demo](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leer gelassenen Feldern zu senden, schlägt das Senden fehl, und ein Fehlermeldungsfeld erscheint, um zu zeigen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular trotzdem absolut ohne das verfügbare JavaScript verwenden, und jede sinnvolle Formularimplementierung wird auch serverseitige Validierung aktiv haben, weil es zu einfach für böswillige Benutzer ist, clientseitige Validierung zu umgehen (zum Beispiel durch Deaktivieren von JavaScript im Browser). Die clientseitige Validierung ist dennoch sehr nützlich zum Melden von Fehlern — Benutzer können sofort über Fehler informiert werden, anstatt auf eine Serveranfrage und das Laden der Seite warten zu müssen. Dies ist definitiv ein Vorteil in Bezug auf Benutzerfreundlichkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Beispiel nicht umgesetzt.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}} Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig mit ihren Eingaben verbunden sind, sodass Screenreader sie zusammen mit dem Eingabeinhalt vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Die Validierung findet nur statt, wenn das Formular gesendet wird — dies dient dazu, die Benutzeroberfläche nicht zu oft zu aktualisieren und potenziell Screenreader (und möglicherweise andere) Benutzer zu verwirren:

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
> In diesem Beispiel verstecken und zeigen wir das Fehlermeldungsfeld mithilfe der absoluten Positionierung, anstatt einer anderen Methode wie Sichtbarkeit oder Anzeige zu verwenden, da es nicht verhindert, dass screenreader Content daraus lesen können.

Eine echte Formularvalidierung wäre viel komplexer als dies — Sie möchten sicherstellen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z. B. nicht negativ und weniger als 4 Ziffern). Wir haben hier nur eine einfache Prüfung implementiert, ob ein Wert in jedes Eingabefeld eingegeben wurde (`wenn (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde und die Tests bestanden werden, wird das Formular gesendet. Wenn es Fehler gibt (`wenn (errorList.hasChildNodes())`), stoppen wir das Absenden des Formulars (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es tatsächlich Fehler gibt, was die Benutzerfreundlichkeit verbessert.

Für jedes Eingabe, das keinen Wert eingegeben hat, wenn das Formular gesendet wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `Fehlerliste` ein.

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

Jeder Link dient einem doppelten Zweck — er zeigt Ihnen, was der Fehler ist, und Sie können darauf klicken/aktivieren, um direkt zum jeweiligen Eingabefeld zu springen und Ihre Eingabe zu korrigieren.

Darüber hinaus wird das `errorField` an die Spitze der Quellreihenfolge gesetzt (obwohl es in der Benutzeroberfläche mit CSS anders positioniert ist), damit Benutzer genau herausfinden können, was mit ihren Formulareinsendungen falsch gelaufen ist, und zu den problematischen Eingabeelementen gelangen können, indem sie wieder nach oben zur Seite navigieren.

Abschließend haben wir einige WAI-ARIA-Attribute in unserem Beispiel verwendet, um Probleme mit der Barrierefreiheit zu lösen, die durch Bereiche verursacht werden, die ohne Seitenaktualisierung ständig aktualisiert werden (Screenreader erkennen dies nicht von allein oder warnen Benutzer standardmäßig davor):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute im nächsten Artikel detailliert erklären, der [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) behandelt.

> [!NOTE]
> Einige von Ihnen denken möglicherweise an die Tatsache, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `erforderlich`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe das {{htmlelement("input")}} Element-Referenz für weitere Informationen). Wir haben diese in dem Demo nicht verwendet, weil die Unterstützung dafür in verschiedenen Browsern lückenhaft ist (z. B. nur für IE10 und höher).

> [!NOTE]
> WebAIMs [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen zur zugänglichen Formularvalidierung.

### Andere JavaScript-Bedenken hinsichtlich der Barrierefreiheit

Es gibt noch andere Dinge, die bei der Implementierung von JavaScript und dem Nachdenken über Barrierefreiheit zu beachten sind. Wir werden mehr hinzufügen, wenn wir sie finden.

#### maus-spezifische Ereignisse

Wie Ihnen bekannt ist, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript unter Verwendung von Ereignishandlern implementiert, die uns erlauben, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können jedoch Barrierefreiheitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionen, die als Reaktion auf diese Ereignisse ausgeführt werden, sind mit anderen Mechanismen, wie z. B. Tastatursteuerungen, nicht zugänglich.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen verdoppeln, die auf andere Weise aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Benutzern mit Tastatur Zugriff bieten.

Schauen wir uns ein Beispiel an, das verdeutlicht, wann dies nützlich sein könnte. Vielleicht möchten wir ein Miniaturbild zur Verfügung stellen, das bei Höhenbestimmung oder Fokussierung ein größeres Bild zeigt (wie in einem E-Commerce-Produktkatalog).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)) finden. Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und ausblenden; diese werden durch die folgenden Zeilen gesetzt, die sie als Ereignishandler festlegen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Miniaturbild schwebt bzw. nicht mehr schwebt. Dies wird uns jedoch nicht erlauben, Ansichten mit der Tastatur zu erhalten — um das zu ermöglichen, haben wir die letzten beiden Zeilen hinzugefügt, die die Funktionen ausführen, wenn das Bild fokussiert und unscharf gemacht wird (wenn der Fokus stoppt). Dies kann durch Tabbing auf dem Bild erfolgen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler, nachdem Enter/Return auf einem Link oder Formularelement gedrückt wurde, das Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Element den Fokus mit tabindex erlauben — in solchen Fällen müssen Sie speziell erfassen, wann genau diese Taste gedrückt wird (siehe [Wiederherstellung der Barrierefreiheit für Tastaturen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Barrierefreiheit von CSS und JavaScript](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen eine gute Menge an Detailwissen und Verständnis für die Barrierefreiheitsprobleme vermittelt, die mit der Verwendung von CSS und JavaScript auf Webseiten verbunden sind.

Als nächstes kommt WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
