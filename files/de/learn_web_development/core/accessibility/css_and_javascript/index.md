---
title: "CSS- und JavaScript-Barrierefreiheit: Best Practices"
short-title: Zugängliches CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

Wenn sie richtig eingesetzt werden, können CSS und JavaScript dazu beitragen, zugängliche Web-Erfahrungen zu schaffen, oder sie können die Zugänglichkeit erheblich beeinträchtigen, wenn sie falsch verwendet werden. Dieser Artikel beschreibt einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, Grundkenntnisse über <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">Barrierefreiheitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zugängliche Textgrößen und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code>- und <code>:hover</code>-Stilen.</li>
          <li>Sinnvoller Einsatz von Animationen — Animationen subtil einsetzen und Steuerungsmöglichkeiten bereitstellen, um sie auszuschalten.</li>
          <li>Best Practices zum Verstecken von Inhalten, damit diese nicht unzugänglich werden.</li>
          <li>Dass es auch zu viel JavaScript gibt und der Wert von unaufdringlichem JavaScript.</li>
          <li>Verwendung von Ereignissen sinnvoll gestalten, damit Sie keine bestimmten Steuerungstypen ausschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS und JavaScript sind zugänglich?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, können aber dennoch die Barrierefreiheit verbessern oder verschlechtern, je nachdem, wie sie verwendet werden. Anders ausgedrückt, es ist wichtig, einige Best-Practice-Ratschläge zu berücksichtigen, um sicherzustellen, dass Ihr CSS- und JavaScript-Einsatz die Barrierefreiheit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Schauen wir uns zunächst CSS an.

### Korrekte Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element _wie irgendetwas_ aussehen zu lassen, aber das bedeutet nicht, dass Sie es tun sollten. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) häufig erwähnt haben, sollten Sie, wenn möglich, das geeignete semantische Element für die jeweilige Aufgabe verwenden. Wenn Sie dies nicht tun, kann dies zu Verwirrung und Nutzbarkeitsproblemen für alle führen, insbesondere aber für Benutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit Benutzererwartungen zu tun – Elemente sehen in der Regel aus und verhalten sich in bestimmter Weise, entsprechend ihrer Funktionalität, und diese gängigen Konventionen werden von den Benutzern erwartet.

Ein Beispiel dafür ist, dass ein Screenreader-Benutzer eine Seite nicht über Überschriftenelemente navigieren kann, wenn der Entwickler diese nicht angemessen zur Markierung der Inhalte verwendet. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie das Styling so ändern, dass sie nicht mehr wie eine Überschrift aussieht.

Das Fazit ist, dass Sie das Styling eines Seitenelements aktualisieren können, damit es in Ihr Design passt, aber ändern Sie es nicht so sehr, dass es nicht mehr so aussieht oder sich so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die berücksichtigt werden sollten.

#### "Standard"-Textinhaltstruktur

Überschriften, Absätze, Listen — der Kerntext Ihrer Seite:

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. wählen, damit Ihr Text logisch, lesbar und angenehm zu lesen ist.
- Stellen Sie sicher, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling) für mehr Informationen.

#### Betonter Text

Inline-Markup, das dem umschlossenen Text spezifische Betonung verleiht:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Vielleicht möchten Sie Ihren betonten Text einfach einfärben:

```css
strong,
em {
  color: #a60000;
}
```

Allerdings werden Sie nur selten betonelemente in signifikanter Weise stylen müssen. Die Standardkonventionen von fett und kursivem Text sind sehr gut erkennbar, und Änderungen des Stils können Verwirrung stiften. Weitere Informationen zur Betonung finden Sie unter [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das es erlaubt, einer Abkürzung, einem Akronym oder einer Initialisierung seine Erweiterung zuzuordnen:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Vielleicht möchten Sie es auch einfach stylen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, hiervon stark abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — der Weg, um neue Orte im Web zu besuchen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Unten sehen Sie ein sehr einfaches Linkstyling:

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

Die standardmäßigen Linkkonventionen sind unterstrichen und eine andere Farbe (Standard: blau) im Normalzustand, eine weitere Farbvariation, wenn der Link im Voraus besucht wurde (Standard: lila), und wieder eine andere Farbe, wenn der Link aktiviert wird (Standard: rot). Zusätzlich wechselt der Mauszeiger zu einem Zeiger-Symbol, wenn Links mit der Maus darüber gehalten werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. durch Tabulator) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listen-Element ist hervorgehoben, indem es mit einer blauen gepunkteten Umrandung fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listen-Element ist hervorgehoben, indem es mit einer blauen Umrandung fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Link-Stilen umgehen, solange Sie den Benutzern weiterhin Rückmeldungen geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich die Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen – beide sind sehr wichtige Unterstützungshilfen für Personen, die nur Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können einige gute Beispiel-CSS in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel sehen ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) auch).

Die meisten der CSS, die Sie für Formulare schreiben, werden für die Größenanpassung der Elemente, das Ausrichten von Labels und Eingaben und das saubere und ordentlich Aussehen sein.

Sie sollten jedoch nicht zu weit vom erwarteten visuellen Feedback für Formularelemente abweichen, wenn sie fokussiert sind, was im Wesentlichen das gleiche ist wie bei Links (siehe oben). Sie könnten Zustände für Fokus/Hover von Formularstilen so gestalten, dass dieses Verhalten konsistenter über alle Browser hinweg ist oder besser zu Ihrem Seitendesign passt, aber entfernen Sie es nicht vollständig — auch hier verlassen sich die Menschen auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung von tabellarischen Daten.

Sie können ein gutes, einfaches Beispiel für Tabellen-HTML und CSS in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel sehen ([sehen Sie auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzufügen und weniger unansehnlich zu machen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise fett) und gestreifte Zebra-Elemente zu verwenden, um verschiedene Zeilen leichter zu lesen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website wählen, stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nutzlos, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt einen einfachen Weg, um zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Kontrastprüfwerkzeugen, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu bedienen und bietet eine Erklärung darüber, was benötigt wird, um den WCAG-Kriterien hinsichtlich Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn sie sich in einer hellen Umgebung wie Sonnenlicht befinden.

Ein weiterer Tipp ist, sich nicht nur auf Farbe für Wegweiser/Informationen zu verlassen, da dies für Personen, die die Farbe nicht sehen können, nutzlos ist. Statt zum Beispiel erforderliche Formularfelder in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel, in unserem [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (sehen Sie [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Infopaneele, aber wir positionieren [sie](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) übereinander und stellen Tabs zur Verfügung, die geklickt werden können, um jedes von ihnen anzuzeigen (es ist auch per Tastatur zugänglich – Sie können alternativ Tabulator und Enter/Return verwenden, um sie auszuwählen).

![Drei Registerkarten mit ausgewählter Registerkarte 1 und nur deren Inhalte werden angezeigt. Die Inhalte der anderen Registerkarten sind ausgeblendet. Wenn eine Registerkarte ausgewählt ist, wechselt ihre Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orangerot zu Sattbraun.](tabbed-info-box.png)

Screenreader-Benutzer interessiert all dies nicht – sie sind mit dem Inhalt zufrieden, solange die Quellordnung Sinn ergibt und sie zu allem gelangen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte für visuelle Effekte zu verstecken, weil es dem Screenreader nicht hindert, darauf zuzugreifen.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, weil sie Inhalte vor Screenreadern verbergen. Es sei denn natürlich, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt auch für Screenreader versteckt wird.

> [!NOTE] > [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Benutzer können Ihre Stile mit ihren eigenen benutzerdefinierten Stilen überschreiben, zum Beispiel:

- Lesen Sie Sarah Maddox' [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für einen nützlichen Leitfaden, der erklärt, wie dies manuell in Firefox gemacht wird.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)-Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer möchte vielleicht den Text auf allen Websites, die er besucht, vergrößern, oder ein Benutzer mit schwerem Farbdefizit möchte vielleicht alle Websites in kontrastreichen Farben anzeigen, die für ihn leicht zu sehen sind. Was auch immer der Bedarf ist, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, damit solche Änderungen in Ihrem Design funktionieren. Zum Beispiel möchten Sie vielleicht sicherstellen, dass Ihr Hauptinhaltsbereich größerem Text standhalten kann (vielleicht wird er anfangen zu scrollen, um alles anzuzeigen), und nicht einfach fehlschlägt oder vollständig bricht.

## JavaScript

Auch JavaScript kann die Barrierefreiheit beeinträchtigen, je nachdem, wie es verwendet wird.

Moderne JavaScript ist eine leistungsfähige Sprache, und wir können heutzutage viel damit machen, von einfachen Inhalts- und UI-Updates über vollständig ausgereifte 2D- und 3D-Spiele. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100 % barrierefrei für alle Menschen sein müssen – Sie müssen nur tun, was Sie können, und Ihre Apps so barrierefrei wie möglich machen.

Einfache Inhalte und Funktionalitäten sind vermutlich einfacher barrierefrei zu gestalten – z.B. Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Verwenden des richtigen Elements für den richtigen Zweck. Zum Beispiel: Sicherstellen, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}}- und {{htmlelement("a")}}-Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbezeichnungen für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel untersucht, wie man JavaScript verwendet, um Funktionalitäten dort wieder einzubauen, wo sie fehlen – siehe [Zugänglichkeit mit der Tastatur zurückbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal – wirklich sollten Sie einfach das richtige Element für den richtigen Zweck verwenden – aber es zeigt, dass es möglich ist in Situationen, in denen Sie aus irgendeinem Grund das verwendete Markup nicht kontrollieren können. Eine weitere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantiken für Screenreader-Benutzer bereitzustellen. Im nächsten Artikel werden wir dies auch detaillierter behandeln.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach barrierefrei zu gestalten – ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert, das derzeit keine Möglichkeit hat, Textalternativen oder andere Informationen für stark sehbehinderte Benutzer bereitzustellen. Es könnte argumentiert werden, dass solch ein Spiel diese Benutzergruppe nicht wirklich als Hauptzielpublikum hat, und es wäre unvernünftig zu erwarten, dass Sie es zu 100 % barrierefrei für blinde Menschen machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es für Benutzer ohne Maus nutzbar ist, und das Farbschema kontrastreich genug gestalten, um es für Farbdefizienten nutzbar zu machen.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn Menschen zu sehr auf JavaScript angewiesen sind. Manchmal sehen Sie eine Website, auf der alles mit JavaScript gemacht wurde – das HTML wurde durch JavaScript generiert, das CSS wurde durch JavaScript generiert usw. Dies hat alle Arten von Barrierefreiheits- und anderen Problemen, die damit verbunden sind, daher wird es nicht empfohlen.

Neben der Verwendung des richtigen Elements für den richtigen Zweck sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Denken Sie sorgfältig darüber nach, ob Sie dieses glänzende JavaScript-gesteuerte 3D-Informationsfenster benötigen oder ob einfacher alter Text ausreicht. Denken Sie sorgfältig darüber nach, ob Sie ein komplexes, nicht standardmäßiges Formular-Widget benötigen, oder ob ein Texteingabefeld ausreicht. Und generieren Sie nicht Ihr gesamtes HTML-Inhalt mit JavaScript, wenn es vermeidbar ist.

### Es unaufdringlich halten

Sie sollten das Konzept von **unaufdringlichem JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unaufdringlichem JavaScript besteht darin, es so weit wie möglich zu verwenden, um die Funktionalität zu verbessern und nicht vollständig einzubauen — Basiskomponenten sollten idealerweise ohne JavaScript funktionieren, obwohl anerkannt wird, dass dies nicht immer eine Option ist. Aber wiederum, ein großer Teil davon ist, eingebaute Browser-Funktionalität wo möglich zu verwenden.

Gute Anwendungsbeispiele für unaufdringliches JavaScript sind:

- Bereitstellung clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf die Überprüfung der Daten durch den Server warten zu müssen. Wenn dies nicht verfügbar ist, funktioniert das Formular immer noch, aber die Validierung könnte langsamer sein.
- Bereitstellen benutzerdefinierter Steuerungen für HTML `<video>`-Elemente, die für Benutzer mit Tastaturzugang zugänglich sind, sowie einen direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, falls JavaScript nicht verfügbar ist (die Standard-`<video>`-Browser-Steuerungen sind in den meisten Browsern nicht über die Tastatur zugänglich).

Als Beispiel haben wir ein schnelles und einfaches Beispiel einer clientseitigen Formularvalidierung geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (sehen Sie sich auch das [Live-Demo](https://mdn.github.io/learning-area/accessibility/css/form-validation.html) an). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular zu senden, während eines oder beide Felder leer sind, schlägt das Absenden fehl und ein Fehlermeldungsfeld erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular ganz normal ohne JavaScript verwenden, und jede sinnvolle Formularimplementierung wird auch serverseitige Validierung beinhalten, da es für böswillige Benutzer zu einfach ist, clientseitige Validierung zu umgehen (zum Beispiel, indem sie JavaScript im Browser ausschalten). Die clientseitige Validierung ist dennoch sehr nützlich zur Fehlerberichterstattung — Benutzer können sofort von Fehlern, die sie machen, erfahren, anstatt auf eine Serverantwort und einen Seitenneuaufbau warten zu müssen. Dies ist ein deutlicher Bedienungsvorteil.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig ihren Eingabefeldern zugeordnet sind, sodass sie von Screenreadern zusammen mit:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular gesendet wird — dies dient dazu, dass wir die UI nicht zu oft aktualisieren und eventuell Screenreader (und möglicherweise andere) Benutzer verwirren:

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
> In diesem Beispiel verstecken und zeigen wir das Fehlermeldungsfeld mittels absoluter Positionierung anstatt mit einer anderen Methode wie Sichtbarkeit oder Anzeige, da dies nicht verhindert, dass der Screenreader Inhalte daraus lesen kann.

Echte Formularvalidierung wäre viel komplexer als dies — Sie möchten sicherstellen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z. B. nicht negativ und weniger als 4 Ziffern). Hier haben wir nur eine einfache Überprüfung implementiert, dass ein Wert in jedes Eingabefeld eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird das Formular gesendet, wenn die Tests erfolgreich bestehen. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), verhindern wir, dass das Formular gesendet wird (durch Verwendung von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen jegliche Fehlermeldungen an, die erstellt wurden (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es Fehler gibt, was besser für die Benutzbarkeit ist.

Für jedes Eingabefeld, das keinen Wert hat, wenn das Formular gesendet wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link dient einem doppelten Zweck — er teilt Ihnen mit, was der Fehler ist, und Sie können darauf klicken/aktivieren, um direkt zum betreffenden Eingabefeld zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich wird das `errorField` an den Anfang der Quellreihenfolge gesetzt (obwohl es in der Benutzeroberfläche mittels CSS anders positioniert wird), sodass Benutzer genau herausfinden können, was an ihren Formulareinreichungen falsch ist, und zu den betreffenden Eingabeelementen gelangen, indem sie zurück zum Seitenanfang navigieren.

Als letzter Hinweis haben wir einige WAI-ARIA-Attribute in unserem Demo verwendet, um Barrierefreitprobleme zu lösen, die durch sich ständig aktualisierende Inhaltsbereiche ohne Seitenaufruf verursacht werden (Screenreader werden dies nicht von selbst wahrnehmen oder Benutzer darauf hinweisen):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel detaillierter behandelt.

> [!NOTE]
> Einige von Ihnen denken wahrscheinlich darüber nach, dass HTML-Formulare eingebaute Validierungsmechanismen wie die Attribute `required`, `min`/`minlength` und `max`/`maxlength` haben (siehe die {{htmlelement("input")}}-Elementreferenz für mehr Informationen). Wir haben sie in diesem Demo nicht verwendet, weil die Unterstützung über verschiedene Browser hinweg lückenhaft ist (zum Beispiel nur IE10 und höher).

> [!NOTE]
> WebAIMs [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen über barrierefreie Formularvalidierung.

### Weitere JavaScript-Anliegen hinsichtlich Barrierefreiheit

Es gibt weitere Punkte, die Sie beachten sollten, wenn Sie JavaScript implementieren und über Barrierefreiheit nachdenken. Wir werden mehr hinzufügen, sobald wir sie finden.

#### maus-spezifische Ereignisse

Wie Sie wissen werden, werden die meisten Benutzerinteraktionen clientseitig mit JavaScript über Ereignis-Handler implementiert, die es uns ermöglichen, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können barrierefreiheitsrelevante Probleme haben. Das Hauptbeispiel, dem Sie begegnen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalitäten, die als Reaktion auf diese Ereignisse ausgeführt werden, sind nicht über andere Mechanismen wie Tastatursteuerungen zugänglich.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen kombinieren, die durch andere Mittel aktiviert werden können (sogenannten geräteunabhängigen Ereignis-Handlern) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturbenutzer mit sich bringen.

Schauen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Thumbnail-Bild bereitstellen, das eine größere Version des Bildes zeigt, wenn es mit der Maus darüber gehalten oder fokussiert wird (wie man es in einem E-Commerce-Produktkatalog sehen würde).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild zeigen und verbergen; diese werden von den folgenden Zeilen ausgeführt, die sie als Ereignis-Handler setzen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn sich der Mauszeiger über dem Thumbnail befindet und wenn er nicht mehr darüber gehalten wird. Dies wird uns das Zoomansichts-Bild nicht über die Tastatur zugänglich machen – um dies zu ermöglichen, haben wir die letzten beiden Zeilen eingefügt, die die Funktionen ausführen, wenn das Bild fokussiert und wieder entfokussiert (fokussiert verlassen) wird. Dies kann durch Tabbern über das Bild gemacht werden, weil wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant – es klingt mausabhängig, aber die meisten Browser werden [onclick](/de/docs/Web/API/Element/click_event)-Ereignis-Handler nach dem Drücken von Enter/Return auf einem Link oder einem fokussierten Formularelement auslösen oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert allerdings nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Ereignis mit tabindex Fokus geben – in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Zugänglichkeit mit der Tastatur zurückbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen eine gute Menge an Detailwissen und Verständnis über die Barrierefreiheitsprobleme im Zusammenhang mit der Nutzung von CSS und JavaScript auf Webseiten vermittelt hat.

Als nächstes: WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
