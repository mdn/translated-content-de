---
title: CSS and JavaScript Zugänglichkeitsbest Practices
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript haben, wenn sie richtig eingesetzt werden, die Möglichkeit, zugängliche Web-Erfahrungen zu ermöglichen, oder sie können die Zugänglichkeit erheblich beeinträchtigen, wenn sie missbraucht werden. Dieser Artikel skizziert einige CSS und JavaScript Best Practices, die in Betracht gezogen werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">Grundverständnis der Barrierefreiheits-Konzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zugängliche Textgrößen und Layouts.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code> Stilen.</li>
          <li>Sinnvolle Nutzung von Animationen — setzen Sie Animationen subtil ein und bieten Sie Steuerungen zur Deaktivierung an.</li>
          <li>Best Practices zum Verbergen von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt und den Wert von unobtrusivem JavaScript.</li>
          <li>Sinnvolle Nutzung von Ereignissen, um spezielle Steuertypen nicht auszuschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript zugänglich?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, sie können jedoch je nach Verwendung die Barrierefreiheit fördern oder schädigen. Anders ausgedrückt: Es ist wichtig, dass Sie einige Best-Practice-Empfehlungen berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht ruiniert.

## CSS

Lassen Sie uns mit CSS beginnen.

### Richtige Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element wie _alles_ aussehen zu lassen, aber das bedeutet nicht, dass Sie es tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie, wann immer möglich, das geeignete semantische Element verwenden. Wenn Sie das nicht tun, kann es zu Verwirrungen und Nutzbarkeitsproblemen für alle führen, insbesondere aber für Benutzer mit Behinderungen. Die Verwendung korrekter Semantiken hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen aus und verhalten sich auf bestimmte Weise, entsprechend ihrer Funktionalität, und diese gemeinsamen Konventionen werden von Benutzern erwartet.

Ein Beispiel: Ein Screenreader-Benutzer kann nicht über Überschriftselemente auf einer Seite navigieren, wenn der Entwickler Überschriftselemente nicht korrekt verwendet hat, um den Inhalt zu markieren. Genauso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht wie eine Überschrift aussieht.

Das Fazit ist: Sie können die Gestaltung eines Seitenelements aktualisieren, um in Ihr Design zu passen, aber ändern Sie es nicht so sehr, dass es nicht mehr aussieht oder sich so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die zu berücksichtigen sind.

#### "Standardmäßige" Textinhaltsstruktur

Überschriften, Absätze, Listen — der Kerntextinhalt Ihrer Seite:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

Einige typische CSS könnten folgendermaßen aussehen:

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

- Vernünftige Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. wählen, um Ihren Text logisch, lesbar und angenehm zu lesen zu machen.
- Stellen Sie sicher, dass sich Ihre Überschriften von Ihrem Fließtext abheben, in der Regel groß und fett wie das Standard-Styling. Ihre Listen sollten wie Listen aussehen.
- Die Farbe Ihres Textes sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS Text Styling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Hervorhebter Text

Inline-Markierungen, die dem Text, den sie umschließen, eine bestimmte Betonung verleihen:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie Ihrem hervorgehobenen Text eine einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden jedoch selten die Notwendigkeit haben, Betonungselemente in irgendeiner wesentlichen Weise zu gestalten. Die Standardkonventionen von Fett- und Kursivtext sind sehr anerkannt, und das Ändern des Stils kann Verwirrung stiften. Für mehr zur Betonung siehe [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit ihrer Erweiterung assoziieren kann:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier könnten Sie es auf einfache Weise stylen wollen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Styling-Konvention für Abkürzungen ist eine punktierte Unterstreichung, und es ist unklug, hiervon abzuweichen. Für mehr zu Abkürzungen siehe [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — die Art, wie Sie zu neuen Orten im Web gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Eine sehr einfache Link-Stilierung ist unten gezeigt:

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

Die Standardlink-Konventionen sind unterstrichen und eine andere Farbe (Standard: Blau) im normalen Zustand, eine andere Farbvariante, wenn der Link zuvor besucht wurde (Standard: Lila) und eine weitere Farbe, wenn der Link aktiviert wird (Standard: Rot). Darüber hinaus ändert der Mauszeiger sein Icon in eine Zeiger-Ikone, wenn Links übermalt werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. per Tab) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine punktierte Umrahmung) als auch in Chrome (eine blaue Umrahmung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist fokussiert und wird mit einer blauen gepunkteten Umrandung hervorgehoben, wenn es per Tabulator fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement wird mit einer blauen Umrandung hervorgehoben, wenn es per Tabulator fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Linkstilen sein, solange Sie den Benutzern Feedback geben, wenn sie mit den Links interagieren. Irgendetwas sollte definitiv passieren, wenn sich Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen – beide sind sehr wichtige Barrierefreiheitsunterstützungen für Benutzer, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gute CSS-Beispiele finden Sie in unserem Beispiel [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) ([siehe es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) ebenfalls).

Der Großteil des CSS, das Sie für Formulare schreiben, wird zur Größenanpassung der Elemente, zur Ausrichtung von Labels und Eingaben dienen und es ordentlich aussehen lassen.

Sie sollten jedoch nicht zu sehr von dem erwarteten visuellen Feedback abweichen, das Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde das gleiche ist wie bei Links (siehe oben). Sie könnten Fokus/Hover-Zustände von Formularen stylen, um dieses Verhalten zwischen den Browsern konsistenter zu machen oder es besser in Ihr Seitendesign einzufügen, aber entfernen Sie es nicht vollständig – Menschen verlassen sich auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung von Tabellendaten.

Ein gutes, einfaches Beispiel für HTML und CSS bei Tabellen finden Sie in unserem Beispiel [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient in der Regel dazu, die Tabelle besser in Ihr Design einzupassen und weniger unschön aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise durch Fettung) und dass Sie Zebra-Streifung verwenden, um verschiedene Zeilen leichter zu parsen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website wählen, stellen Sie sicher, dass die Farbe des Textes (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design könnte cool aussehen, aber es bringt nichts, wenn Personen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt einen einfachen Weg zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Kontrastüberprüfung, in die Sie Ihre Vorder- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Farbkontrastprüfer von WebAIM](https://webaim.org/resources/contrastchecker/) einfach zu verwenden und bietet eine Erklärung, was Sie benötigen, um den WCAG-Kriterien bezüglich Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrast wird auch allen Benutzern eines Smartphones oder Tablets mit einem glänzenden Bildschirm ermöglichen, Seiten in einer hellen Umgebung, wie Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht nur auf Farbe allein für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, unbrauchbar ist. Anstatt z.B. erforderliche Formulare auszufüllen, indem Sie sie rot markieren, markieren Sie sie mit einem Sternchen und in Rot.

### Verbergen von Elementen

In vielen Fällen erfordert ein visuelles Design, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel haben wir in unserem [Tabbed Info Box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Informationspanels, aber wir platzieren sie [übereinander](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) und bieten Registerkarten zum Klicken an, um jedes anzuzeigen (es ist auch tastaturfreundlich — Sie können alternativ Tab und Eingabe/Return verwenden, um sie auszuwählen).

![Dreifach-Registeroberfläche mit ausgewähltem Tab 1 und nur dessen Inhalt wird angezeigt. Die Inhalte der anderen Registerkarten sind verborgen. Wenn eine Registerkarte ausgewählt ist, ändert sich die Textfarbe von schwarz zu weiß und die Hintergrundfarbe ändert sich von orangerot zu sattelbraun.](tabbed-info-box.png)

Benutzer von Screenreadern kümmern sich nicht um all das — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge einen Sinn ergibt und sie dazu Zugang haben. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte für visuelle Effekte zu verbergen, weil sie Screenreader nicht daran hindert, darauf zuzugreifen.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, weil sie Inhalte vor Screenreadern verbergen. Es sei denn, es gibt einen guten Grund, warum Sie wollen, dass dieser Inhalt vor Screenreadern verborgen wird.

> **Hinweis:** [Unsichtbarer Inhalt nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/) hat viele weitere nützliche Details zu diesem Thema.

### Akzeptieren Sie, dass Benutzer Stile überschreiben können

Benutzer können Ihre Stile mit ihren eigenen benutzerdefinierten Stilen überschreiben, beispielsweise:

- Sehen Sie Sarah Maddox' [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für eine nützliche Anleitung, wie dies manuell in Firefox durchgeführt werden kann.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)-Äquivalent ist.

Benutzer tun dies aus verschiedenen Gründen. Ein sehbehinderter Benutzer möchte möglicherweise den Text auf allen von ihm besuchten Websites vergrößern, oder ein Benutzer mit schwerer Farbdefizienz möchte möglicherweise alle Websites in hochkontrastfarbene Farben setzen, die für ihn leicht zu erkennen sind. Was auch immer das Bedürfnis ist, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, damit solche Änderungen in Ihr Design passen. Beispielsweise könnten Sie sicherstellen, dass Ihr Hauptinhaltbereich größere Texte verarbeiten kann (vielleicht wird er beginnen zu scrollen, damit alles gesehen werden kann), und nicht einfach verschwindet oder vollständig auseinanderbricht.

## JavaScript

JavaScript kann Barrierefreiheit auch brechen, je nachdem, wie es verwendet wird.

Modernes JavaScript ist eine mächtige Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalte- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100% für alle Menschen zugänglich sein müssen – Sie müssen nur tun, was Sie können, und Ihre Apps so zugänglich wie möglich gestalten.

Einfache Inhalte und Funktionalitäten lassen sich vermutlich leicht zugänglich machen — zum Beispiel Text, Bilder, Tabellen, Formulare und Drucktasten, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) angesprochen haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze verwenden und {{htmlelement("button")}} und {{htmlelement("a")}} Elemente
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textlabels für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben uns auch ein Beispiel dafür angeschaut, wie man mit JavaScript Funktionen einbaut, wo sie fehlen — siehe [Keyboard-Zugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — wirklich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es in Situationen möglich ist, in denen Sie aus irgendeinem Grund das verwendete Markup nicht kontrollieren können. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantiken für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies ebenfalls im Detail behandeln.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach zugänglich zu machen — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das bisher keine Möglichkeit hat, Textalternativen oder andere Informationen bereitzustellen, die schwer sehbehinderte Benutzer nutzen können. Es ist fraglich, ob ein solches Spiel diese Gruppe wirklich als Hauptzielgruppe hat, und es wäre unvernünftig, zu erwarten, dass Sie es zu 100% für Blinde zugänglich machen. Allerdings könnten Sie [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es für Nutzer ohne Maus verwendbar ist, und sicherstellen, dass das Farbschema ausreichend kontrastiert, um von Menschen mit Farbdefiziten genutzt werden zu können.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn sich Menschen zu stark auf JavaScript verlassen. Manchmal sieht man eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde durch JavaScript generiert, das CSS wurde durch JavaScript generiert usw. Dies hat allerlei Barrierefreiheits- und andere Probleme, die damit verbunden sind, daher ist es nicht ratsam.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie sich genau, ob Sie diese glänzende, JavaScript-gestützte 3D-Informationsbox wirklich benötigen oder ob es einfacher Text auch tun würde. Überlegen Sie genau, ob Sie ein komplexes, nicht-standardisiertes Formular-Widget benötigen oder ob ein Texteingabefeld ausreichen würde. Und generieren Sie nicht all Ihren HTML-Inhalt mit JavaScript, wenn es irgendwie möglich ist.

### Es unauffällig halten

Sie sollten **unauffälliges JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unauffälligem JavaScript ist, es wann immer möglich zu nutzen, um Funktionen zu verbessern, anstatt sie vollständig einzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, obwohl dies nicht immer eine Option ist. Aber nochmal, ein großer Teil davon besteht darin, integrierte Browser-Funktionalitäten zu nutzen, wo möglich.

Gute Beispiel für die Verwendung von unauffälligem JavaScript umfassen:

- Bereitstellung von Client-seitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, funktioniert das Formular immer noch, aber die Validierung könnte langsamer sein.
- Bereitstellung von benutzerdefinierten Steuerungen für HTML `<video>`s, die für Tastaturbenutzer zugänglich sind, zusammen mit einem direkten Link zum Video, der zugänglich ist, wenn JavaScript nicht verfügbar ist (die Standard-`<video>`-Browsersteuerungen sind in den meisten Browsern nicht tastaturfreundlich).

Als Beispiel haben wir eine schnelle und einfache Client-seitige Formularvalidierung geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (sehen Sie auch die [Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern abzuschicken, schlägt die Übertragung fehl, und ein Fehlerdialog erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unauffällig — Sie können das Formular absolut ohne JavaScript verwenden, und jede vernünftige Formularimplementierung wird auch serverseitige Validierung aktiv haben, weil es zu einfach ist, Client-seitige Validierung von böswilligen Benutzern zu umgehen (zum Beispiel, indem JavaScript im Browser deaktiviert wird). Die Client-seitige Validierung ist dennoch sehr nützlich für die Berichterstattung über Fehler — Benutzer können sofort über Fehler informiert werden, anstatt auf einen Rundgang zum Server und ein erneutes Laden der Seite warten zu müssen. Dies ist ein deutlicher Vorteil in der Nutzbarkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}} Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen unmissverständlich mit ihren Eingaben verknüpft sind, damit Screenreader sie zusammen mit den Eingaben vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur aus, wenn das Formular abgesendet wird — das liegt daran, dass wir die Benutzeroberfläche nicht zu oft aktualisieren und möglicherweise Benutzer von Screenreadern (und möglicherweise auch andere) verwirren wollen:

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
> In diesem Beispiel verbergen und zeigen wir den Fehlermeldungsdialog mit absoluter Positionierung anstelle einer anderen Methode wie Sichtbarkeit oder Anzeige, weil es den Screenreader nicht daran hindert, Inhalte daraus zu lesen.

Eine echte Formularvalidierung wäre viel komplexer als diese — Sie würden überprüfen wollen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch (z.B. nicht negativ und kleiner als 4 Ziffern). Hier haben wir einfach nur eine einfache Überprüfung implementiert, dass ein Wert in jedes Eingabefeld eingetragen wurde (`if (testItem.input.value === '')`).

Wenn die Validierung ausgeführt wurde, wird das Formular, wenn die Tests bestanden werden, übermittelt. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), dann stoppen wir das Absenden des Formulars (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen alle Fehlernachrichten, die erstellt wurden, an (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es welche gibt, was besser für die Benutzerfreundlichkeit ist.

Für jede Eingabe, die keinen Wert enthält, wenn das Formular gesendet wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link erfüllt einen doppelten Zweck — er sagt Ihnen, was der Fehler ist, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich wird das `errorField` an den Anfang der Quellreihenfolge gesetzt (obwohl es im UI mit CSS anders positioniert ist), so dass Benutzer genau herausfinden können, was mit ihren Formulareinträgen nicht stimmt und zu den betreffenden Eingabeelementen gelangen können, indem sie zum Beginn der Seite zurückkehren.

Abschließend haben wir in unserem Demo einige WAI-ARIA-Attribute verwendet, um Barrierefreiheitsprobleme zu lösen, die durch ständig ohne Seitenneuladung aktualisierte Inhaltsbereiche verursacht werden (Screenreader erkennen dies nicht automatisch oder informieren Benutzer nicht darüber):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich an die Tatsache denken, dass HTML-Formulare eingebaute Validierungsmechanismen wie die Attribute `required`, `min`/`minlength` und `max`/`maxlength` verfügen (siehe die {{htmlelement("input")}} Element-Referenz für weitere Informationen). Wir haben sie in der Demo nicht verwendet, weil die Unterstützung über verschiedene Browser hinweg ungleichmäßig ist (zum Beispiel erst ab IE10).

> [!NOTE]
> WebAIMs [Nutzbare und zugängliche Formularvalidierung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen zur zugänglichen Formularvalidierung.

### Andere JavaScript-Zugänglichkeitsbedenken

Es gibt andere Dinge, die Sie beachten sollten, wenn Sie JavaScript implementieren und an Barrierefreiheit denken. Wir werden weitere hinzufügen, wenn wir sie finden.

#### Maus-spezifische Ereignisse

Wie Ihnen bewusst ist, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mit Ereignishandlern implementiert, die es uns ermöglichen, Funktionen als Antwort auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind Maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionen, die als Reaktion auf diese Ereignisse ausgeführt werden, sind mit anderen Mechanismen, wie Tastatursteuerungen, nicht zugänglich.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen verdoppeln, die auf andere Weise aktiviert werden können (so genannte Geräte-unabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Tastaturbenutzern Barrierefreiheit bieten.

Betrachten wir ein Beispiel, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Miniaturbild bereitstellen, das ein größeres Bild zeigt, wenn es übermalt oder fokussiert wird (wie in einem E-Commerce-Produktkatalog).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild zeigen und verbergen; diese werden durch die folgenden Zeilen ausgeführt, die sie als Ereignishandler festlegen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Miniaturbild schwebt und aufhört zu schweben. Dadurch ist das Zoom-Bild jedoch nicht über die Tastatur zugänglich – um das zu erreichen, haben wir die letzten beiden Zeilen eingefügt, die die Funktionen ausführen, wenn das Bild fokussiert oder verwischt wird (wenn der Fokus aufhört). Dies kann durch Übergehen des Bildes mit der Tabulatortaste erreicht werden, weil wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler, nachdem die Eingabe/Return-Taste auf einem Link- oder Formularelement gedrückt wird, das den Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angeklickt wird. Dies funktioniert jedoch standardmäßig nicht, wenn Sie einem Ereignishandler, der nicht standardmäßig fokussierbar ist, den Fokus mit `tabindex` erlauben — in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Keyboard-Zugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen viele Details und ein Verständnis für die Zugänglichkeitsprobleme rund um die Verwendung von CSS und JavaScript auf Webseiten gegeben hat.

Als Nächstes: WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
