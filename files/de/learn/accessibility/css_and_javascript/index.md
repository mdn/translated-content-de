---
title: CSS- und JavaScript-Barrierefreiheit Best Practices
slug: Learn/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS und JavaScript, wenn sie richtig eingesetzt werden, haben das Potenzial, zugängliche Web-Erfahrungen zu ermöglichen oder sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch eingesetzt werden. Dieser Artikel beschreibt einige CSS- und JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit der angemessenen Verwendung von CSS und JavaScript in Ihren
        Webdokumenten zu erlangen, um die Barrierefreiheit zu maximieren und sie nicht zu beeinträchtigen.
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können je nach Einsatz die Barrierefreiheit unterstützen oder schädigen. Anders ausgedrückt ist es wichtig, einige bewährte Verfahrensweisen zu berücksichtigen, um sicherzustellen, dass die Verwendung von CSS und JavaScript die Zugänglichkeit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Richtige Semantik und Benutzererwartung

Es ist möglich, mit CSS jedes HTML-Element _beliebig_ aussehen zu lassen, aber das bedeutet nicht, dass Sie es tun sollten. Wie in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn/Accessibility/HTML) häufig erwähnt, sollten Sie das passende semantische Element für die jeweilige Aufgabe verwenden, wann immer es möglich ist. Wenn Sie das nicht tun, kann dies Verwirrung und Usability-Probleme für alle verursachen, insbesondere jedoch für Benutzer mit Behinderungen. Die Verwendung der richtigen Semantik hat viel mit den Erwartungen der Nutzer zu tun — Elemente sehen aus und verhalten sich auf bestimmte Weise, je nach ihrer Funktionalität, und diese allgemeinen Konventionen werden von den Benutzern erwartet.

Zum Beispiel kann ein Screenreader-Benutzer nicht über Überschriftselemente auf einer Seite navigieren, wenn der Entwickler nicht korrekt Überschriftselemente verwendet hat, um den Inhalt zu markieren. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht wie eine Überschrift aussieht.

Unterm Strich, Sie können das Styling eines Seitenelements ändern, damit es in Ihr Design passt, aber nicht so sehr, dass es nicht mehr so aussieht oder sich so verhält, wie es erwartet wird. Die folgenden Abschnitte fassen die wichtigsten zu berücksichtigenden HTML-Funktionen zusammen.

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

- Vernünftige Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. wählen, damit Ihr Text logisch, lesbar und angenehm zu lesen ist.
- Stellen Sie sicher, dass Ihre Überschriften sich vom Fließtext abheben, typischerweise groß und fett wie das Standard-Styling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [HTML text fundamentals](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) und [Styling text](/de/docs/Learn/CSS/Styling_text) für weitere Informationen.

#### Hervorgehobener Text

Inline-Markup, das einen bestimmten Schwerpunkt auf den Text legt, den es umgibt:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Sie könnten Ihrem hervorgehobenen Text eine einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden jedoch selten die Notwendigkeit verspüren, Hervorhebungselemente signifikant zu stylen. Die Standardkonventionen für fetten und kursiven Text sind sehr erkennbar, und eine Änderung des Stils kann Verwirrung stiften. Für mehr über Hervorhebung, siehe [Emphasis and importance](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Erweiterung verknüpfen lässt:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier möchten Sie es vielleicht einfach stylen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, erheblich davon abzuweichen. Für mehr zu Abkürzungen, siehe [Abbreviations](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations).

#### Links

Hyperlinks — die Art, wie Sie zu neuen Orten im Web gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Linkstyling ist unten gezeigt:

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

Die Standard-Linkkonventionen sind unterstrichen und in ihrer Standardfarbe unterschiedlich (Standard: blau), eine weitere Farbvariation, wenn der Link zuvor besucht wurde (Standard: lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: rot). Darüber hinaus ändert sich das Mauszeigersymbol in ein Zeigersymbol, wenn Links mit der Maus berührt werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. über Tab-Funktion) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement wird hervorgehoben, indem es über eine blaue, gepunktete Umrandung verfügt, wenn es über Tab fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement wird hervorgehoben, indem es über eine blaue Umrandung verfügt, wenn es über Tab fokussiert wird.](focus-highlight-chrome.png)

Sie können beim Linkdesign kreativ sein, solange Sie den Nutzern Feedback geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas geschehen, wenn sich die Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen — beide sind sehr wichtige Zugänglichkeitshilfen für diejenigen, die Tastatursteuerelemente verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten auf Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Sie können einige gute Beispiel-CSS in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html)) sehen.

Der größte Teil des CSS, das Sie für Formulare schreiben, wird dazu dienen, die Elemente zu dimensionieren, Beschriftungen und Eingabe-Felder anzuordnen und sie ordentlich aussehen zu lassen.

Sie sollten jedoch nicht zu weit von der erwarteten visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie fokussiert sind, was im Grunde dasselbe wie bei Links ist (siehe oben). Sie könnten Fokus-/Hover-Zustände von Formularen stylen, um dieses Verhalten browserübergreifend einheitlicher zu gestalten oder besser in Ihr Seitendesign einzufügen, sollten es jedoch nicht völlig beseitigen – noch einmal, Menschen verlassen sich auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung von tabellarischen Daten.

Sie können ein gutes, einfaches Beispiel für HTML-Tabelle und CSS in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel sehen ([siehe es auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Table-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzufügen und weniger hässlich aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise fett), und abwechselnde Streifen zu verwenden, um verschiedene Zeilen leichter interpretierbar zu machen.

### Farbe und Farbkontrast

Bei der Wahl eines Farbschemas für Ihre Website stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nicht gut, wenn Menschen mit Sehbehinderungen wie der Farbenblindheit Ihren Inhalt nicht lesen können.

Es gibt eine einfache Möglichkeit, zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Kontrastprüfung, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Beispielsweise ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu bedienen und bietet eine Erklärung dessen, was Sie tun müssen, um den WCAG-Kriterien zum Farbkontrast gerecht zu werden.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm benutzt, Seiten besser zu lesen, wenn sie sich in einer hellen Umgebung befinden, wie z.B. im Sonnenlicht.

Ein weiterer Tipp ist, sich nicht ausschließlich auf Farbe als Wegweiser/Information zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, keinen Nutzen hat. Anstatt beispielsweise Pflichtfelder im Formular rot zu kennzeichnen, markieren Sie sie mit einem Sternchen und in Rot.

### Inhalte verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Beispielsweise haben wir in unserem [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) drei Informationspanels, die wir jedoch [positionieren](/de/docs/Learn/CSS/CSS_layout/Positioning), um sie übereinanderzulegen und Registerkarten bereitzustellen, die angeklickt werden können, um jeweils eines anzuzeigen (es ist auch über die Tastatur zugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei-Tab-Oberfläche mit ausgewähltem Tab 1, wobei nur dessen Inhalte angezeigt werden. Die Inhalte der anderen Tabs sind versteckt. Wenn ein Tab ausgewählt wird, ändert sich die Textfarbe von schwarz zu weiß und die Hintergrundfarbe von orangerot zu sattelbraun.](tabbed-info-box.png)

Screenreader-Benutzer kümmern sich nicht um all dies — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als einer der besten Mechanismen angesehen, um Inhalte mit visueller Wirkung zu verbergen, da dies dem Screenreader keinen Zugang dazu verschafft.

Auf der anderen Seite sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da diese den Inhalt vor Screenreadern verbergen. Es sei denn natürlich, es gibt einen guten Grund, warum Sie wollen, dass dieser Inhalt vor Screenreadern verborgen bleibt.

> **Note:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Es ist möglich, dass Benutzer Ihre Stile mit ihren eigenen benutzerdefinierten Stilen überschreiben, zum Beispiel:

- Sehen Sie sich Sarah Maddox's Anleitung [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) an, die beschreibt, wie Sie dies manuell in Firefox tun können.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, wobei Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer möchte möglicherweise den Text auf allen von ihm besuchten Websites vergrößern, oder ein Benutzer mit schweren Farbbehinderungen möchte möglicherweise alle Websites in Kontrastfarben sehen, die für ihn leicht erkennbar sind. Was auch immer das Bedürfnis ist, Sie sollten damit einverstanden sein und Ihre Designs so flexibel gestalten, dass solche Änderungen funktionieren. Beispielsweise könnten Sie sicherstellen, dass Ihr Hauptinhaltsbereich größere Texte verarbeiten kann (vielleicht beginnt er zu scrollen, um alles anzeigen zu können) und nicht einfach ausgeblendet oder komplett zerstört wird.

## JavaScript

Auch JavaScript kann die Barrierefreiheit beeinträchtigen, je nachdem, wie es verwendet wird.

Modernes JavaScript ist eine leistungsfähige Sprache, und heutzutage kann man so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100 % für alle Menschen zugänglich sein müssen — Sie müssen lediglich tun, was Sie können, und Ihre Apps so zugänglich wie möglich gestalten.

Einfache Inhalte und Funktionen sind vermutlich einfach barrierefrei zu gestalten — zum Beispiel Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn/Accessibility/HTML) gesehen haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Beispielsweise sicherstellen, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente oder [text alternatives](/de/docs/Learn/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel gesehen, wie JavaScript verwendet wird, um fehlende Funktionalität einzubauen — siehe [Building keyboard accessibility back in](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — wirklich sollten Sie das richtige Element für die richtige Aufgabe verwenden —, aber es zeigt, dass es in Situationen möglich ist, in denen Sie aus irgendeinem Grund die Markup-Kontrolle nicht haben. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-basierte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird darauf auch im Detail eingehen.

Komplexe Funktionen wie 3D-Spiele sind nicht so einfach barrierefrei zu gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen für Menschen mit schwerwiegenden Sehbehinderungen bereitzustellen. Es ist argumentierbar, dass ein solches Spiel diese Gruppe von Menschen nicht wirklich als Hauptzielgruppe hat und es unvernünftig wäre, zu erwarten, dass Sie es 100 % zugänglich für Blinde machen. Sie könnten jedoch [keyboard controls](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Benutzern verwendet werden kann, und das Farbschema kontrastierend genug gestalten, um von Menschen mit Farbdefiziten verwendet werden zu können.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn Menschen sich zu sehr auf JavaScript verlassen. Manchmal sieht man eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert, usw. Dies hat alle möglichen Barrieren und andere damit verbundene Probleme, daher ist es nicht ratsam.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Überlegen Sie gründlich, ob Sie diese glänzende JavaScript-gesteuerte 3D-Informationsbox benötigen, oder ob einfacher Text ausreicht. Überlegen Sie gründlich, ob Sie ein komplexes nicht-standardmäßiges Formular-Widget benötigen, oder ob ein Texteingabefeld ausreicht. Und generieren Sie nach Möglichkeit nicht Ihr gesamtes HTML-InHALT über JavaScript.

### Es unaufdringlich halten

Sie sollten **unaufdringliches JavaScript** im Kopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee des unaufdringlichen JavaScripts besteht darin, es so weit wie möglich zu verwenden, um die Funktionalität zu verbessern, aber nicht völlig einzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, obwohl anerkannt wird, dass dies nicht immer eine Option ist. Aber erneut, ein großer Teil davon besteht darin, integrierte Browser-Funktionalität zu verwenden, wann immer möglich.

Gute Beispielanwendungen von unaufdringlichem JavaScript beinhalten:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, funktioniert das Formular trotzdem, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerungen für HTML-`<video>`s, die für Tastaturbenutzer zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die standardmäßigen Video-Browsersteuerungen sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnell und schmutziges Beispiel einer clientseitigen Formularvalidierung geschrieben — sehen Sie [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (auch [siehe das Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular zu senden, ohne eines oder beide Felder auszufüllen, schlägt das Senden fehl und ein Fehlermeldungsfenster erscheint und informiert Sie darüber, was falsch ist.

Diese Art von Formularvalidierung ist unaufdringlich — Sie können das Formular immer noch einwandfrei benutzen, wenn JavaScript nicht verfügbar ist, und jede sinnvolle Formularimplementierung wird auch serverseitige Validierung haben, da es zu einfach ist, die clientseitige Validierung von bösartigen Benutzern zu umgehen (indem JavaScript im Browser deaktiviert wird). Die clientseitige Validierung ist immer noch sehr nützlich, um Fehler zu melden — Benutzer können sofort über gemachte Fehler informiert werden, anstatt auf eine Rückmeldung vom Server und einen Neuladevorgang zu warten. Dies ist ein deutlicher Usability-Vorteil.

> [!NOTE]
> In diesem einfachen Demo ist keine serverseitige Validierung implementiert.

Wir haben diese Formularvalidierung auch recht zugänglich gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen eindeutig mit ihren Eingabefeldern verknüpft sind, damit sie von Screenreadern zusammen mit ihnen vorgelesen werden können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular gesendet wird — dies geschieht, damit wir das UI nicht zu oft aktualisieren und möglicherweise Screenreader (und möglicherweise andere) Benutzer verwirren:

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
> In diesem Beispiel verwenden wir absolute Positionierung, um das Fehlernachrichtenfenster ein- und auszublenden, anstatt einer anderen Methode wie Sichtbarkeit oder Anzeige, da dies den Screenreader nicht daran hindert, den Inhalt lesen zu können.

Echte Formularvalidierung wäre viel komplexer als dies — Sie möchten überprüfen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z.B. nicht-negativ und weniger als 4 Ziffern). Hier haben wir nur eine einfache Überprüfung implementiert, dass in jedes Eingabefeld ein Wert eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wird, übergeben die Tests dann wird das Formular gesendet. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), verhindern wir, dass das Formular gesendet wird (mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen alle Fehlernachrichten an, die erstellt wurden (siehe unten). Dieser Mechanismus zeigt die Fehler nur an, wenn es welche gibt, was besser für die Usability ist.

Für jedes Eingabefeld, das nicht ausgefüllt ist, wenn das Formular gesendet wird, erstellen wir Listenelement mit einem Link und fügen es dem `errorList` hinzu.

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

Jeder Link erfüllt einen doppelten Zweck — er sagt Ihnen, was der Fehler ist, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabefeld zu gelangen und Ihre Eingabe zu korrigieren.

Darüber hinaus wird das `errorField` zu Beginn der Quellreihenfolge platziert (obwohl es in der UI mit CSS anders positioniert ist), was bedeutet, dass Benutzer genau wissen, was mit ihren Formulareinreichungen falsch ist, und zu den betroffenen Eingabefeldern gelangen, indem sie zurück zum Anfang der Seite gehen.

Hinzu kommt, dass wir einige WAI-ARIA-Attribute in unserem Demo verwendet haben, um Barrierefreiheitsprobleme zu lösen, die durch Bereiche mit Inhalten, die ständig ohne Seitenneuladen aktualisiert werden (Screenreader nehmen dies standardmäßig nicht auf oder informieren Benutzer darüber), auftreten:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel näher erläutern, der [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich darüber nachdenken, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe das {{htmlelement("input")}}-Element-Referenz für weitere Informationen). Wir haben diese im Demo nicht verwendet, da die browserübergreifende Unterstützung für sie lückenhaft ist (zum Beispiel IE10 und höher nur).

> [!NOTE]
> WebAIM's [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen über zugängliche Formularvalidierung.

### Andere JavaScript-Barrierefreiheitsbedenken

Es gibt andere Dinge, die Sie beachten sollten, wenn Sie JavaScript implementieren und über Barrierefreiheit nachdenken. Wir werden weitere hinzufügen, wenn wir sie entdecken.

#### Maus-spezifische Ereignisse

Wie Ihnen bekannt sein wird, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mit Ereignishandlern implementiert, die es uns ermöglichen, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme haben. Das Hauptbeispiel dafür sind Maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionen, die in Reaktion auf diese Ereignisse ausgeführt werden, sind nicht über andere Mechanismen wie Tastatursteuerungen zugänglich.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen verdoppeln, die auf andere Weise aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturnutzer bieten.

Schauen wir uns ein Beispiel an, das zeigt, wann das nützlich sein könnte. Vielleicht möchten wir ein Vorschaubild bereitstellen, das bei Überfahren mit der Maus oder beim Fokussieren eine größere Version des Bildes zeigt (wie man es in einem E-Commerce-Produktkatalog sehen würde).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie auf [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und verbergen; diese werden durch die folgenden Zeilen als Ereignishandler gesetzt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Thumbnail schwebt und wenn er nicht mehr darüber schwebt. Dies erlaubt uns jedoch nicht, die vergrößerte Ansicht mit der Tastatur zu erreichen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen aufgenommen, die die Funktionen ausführen, wenn das Bild fokussiert und verschwommen ist (wenn der Fokus stoppt). Dies kann durch Tabben über das Bild geschehen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser werden [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler aktivieren, nachdem die Eingabetaste oder Return auf einem fokussierten Link oder Formularelement gedrückt wurde oder wenn ein solches Element auf einem berührungsempfindlichen Gerät angetippt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Ereignis mit tabindex Fokus ermöglichen — in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Building keyboard accessibility back in](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: CSS and JavaScript accessibility](/de/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dass Ihnen dieser Artikel einen guten Einblick und Verständnis über die Barrierefreiheitsprobleme im Zusammenhang mit der Verwendung von CSS und JavaScript auf Webseiten verschafft hat.

Als nächstes: WAI-ARIA!

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}
