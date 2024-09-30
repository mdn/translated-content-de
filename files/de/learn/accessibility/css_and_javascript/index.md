---
title: "CSS und JavaScript: Barrierefreiheits-Best Practices"
slug: Learn/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS und JavaScript haben, wenn sie richtig eingesetzt werden, das Potenzial, für barrierefreie Web-Erfahrungen zu sorgen, oder sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch verwendet werden. Dieser Artikel umreißt einige CSS- und JavaScript-Best Practices, die beachtet werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        JavaScript sowie Verständnis von
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit der angemessenen Verwendung von CSS und JavaScript in Ihren Web-Dokumenten gewinnen, um die Barrierefreiheit zu maximieren und nicht zu beeinträchtigen.
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, können jedoch je nach Verwendung die Barrierefreiheit unterstützen oder verschlechtern. Anders ausgedrückt, es ist wichtig, einige Best Practices zu beachten, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzungserwartungen

Es ist möglich, mit CSS jedes HTML-Element wie _alles_ aussehen zu lassen, aber das bedeutet nicht, dass Sie dies tun sollten. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) häufig erwähnt haben, sollten Sie das passende semantische Element für die jeweilige Aufgabe verwenden, wann immer dies möglich ist. Andernfalls kann dies Verwirrung und Nutzungsprobleme für alle verursachen, insbesondere aber für Benutzer mit Behinderungen. Die richtige Semantik hat viel mit den Erwartungen der Benutzer zu tun – Elemente sehen und verhalten sich auf bestimmte Weise entsprechend ihrer Funktionalität, und diese allgemeinen Konventionen werden von den Benutzern erwartet.

Ein Beispiel: Ein Screenreader-Benutzer kann eine Seite nicht über Überschriften navigieren, wenn der Entwickler die entsprechenden Überschriftselemente nicht zum Markieren des Inhalts verwendet hat. In gleicher Weise verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so stilisieren, dass sie nicht mehr wie eine Überschrift aussieht.

Fazit: Sie können das Styling eines Seitenelements aktualisieren, um es in Ihr Design einzupassen, aber ändern Sie es nicht so sehr, dass es nicht mehr den Erwartungen entspricht. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die berücksichtigt werden sollten.

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

Typisches CSS könnte folgendermaßen aussehen:

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, damit Ihr Text logisch, lesbar und angenehm zu lesen ist.
- Sicherstellen, dass sich Ihre Überschriften vom Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Weitere Informationen finden Sie unter [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) und [Textstyling](/de/docs/Learn/CSS/Styling_text).

#### Hervorgehobener Text

Inline-Markup, das dem umschlossenen Text bestimmte Hervorhebungen verleiht:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Vielleicht möchten Sie Ihrem hervorgehobenen Text eine einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

In der Regel brauchen Sie Hervorhebungselemente jedoch nicht in signifikantem Maße zu stylen. Die Standardkonventionen für fett und kursiv sind sehr erkennbar, und das Ändern des Stils kann Verwirrung stiften. Mehr zu Hervorhebungen finden Sie unter [Betonung und Bedeutung](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Erweiterung in Verbindung bringen kann:

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

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, hiervon erheblich abzuweichen. Mehr zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations).

#### Links

Hyperlinks — die Möglichkeit, neue Orte im Web zu erreichen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Linkstyling wird unten gezeigt:

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

Die Standard-Linkkonventionen sind unterstrichen und eine andere Farbe (Standard: Blau) in ihrem Normalzustand, eine andere Farbvariante, wenn der Link bereits besucht wurde (Standard: Lila), und noch eine andere Farbe, wenn der Link aktiviert wird (Standard: Rot). Zusätzlich ändert sich das Maussymbol zu einem Zeiger, wenn Links mit der Maus überfahren werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z.B. via Tabben) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement wird mit einer blauen gepunkteten Umrandung hervorgehoben, wenn es über Tabben fokussiert ist.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement wird mit einer blauen Umrandung hervorgehoben, wenn es über Tabben fokussiert ist.](focus-highlight-chrome.png)

Sie können kreativ mit Linkstilen sein, solange Sie den Benutzern weiterhin Feedback geben, wenn sie mit den Links interagieren. Etwas sollte definitiv passieren, wenn sich die Zustände ändern, und Sie sollten den Zeigerzeiger oder die Umrandung nicht entfernen — beide sind sehr wichtige Hilfen für die Zugänglichkeit für Benutzer, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern erlauben, Daten in Webseiten einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gute Beispiel-CSS-Code für Formulare finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) auch).

Die meiste CSS, die Sie für Formulare schreiben, wird darauf abzielen, die Elemente zu dimensionieren, Labels und Eingaben auszurichten und sie ordentlich und übersichtlich aussehen zu lassen.

Sie sollten jedoch nicht zu sehr von der erwarteten visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie fokussiert werden, was im Wesentlichen dasselbe wie bei Links (siehe oben) ist. Sie könnten Fokus-/Hover-Zustände von Formularelementen so stylen, dass dieses Verhalten in allen Browsern konsistenter ist oder besser in Ihr Seitendesign passt, aber entfernen Sie es nicht einfach — Menschen sind auf diese Hinweise angewiesen, um zu verstehen, was gerade passiert.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes einfaches Beispiel für HTML- und CSS-Tabellen finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient in der Regel dazu, die Tabelle besser in Ihr Design zu integrieren und weniger unschön aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise fett), und Zebramuster zu verwenden, um verschiedene Zeilen leichter lesbar zu machen.

### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) mit der Hintergrundfarbe gut kontrastiert. Ihr Design mag toll aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit zu überprüfen, ob Ihr Kontrast stark genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Kontrastprüfung, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) einfach zu bedienen und bietet eine Erklärung, was Sie tun müssen, um den WCAG-Kriterien in Bezug auf den Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hoher Kontrast hilft auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm in einer hellen Umgebung, wie Sonnenlicht, verwendet, Seiten besser zu lesen.

Ein weiterer Tipp ist der Verzicht auf farbliche Alleinstellungsmerkmale für Hinweise/Informationen, da das für diejenigen nutzlos ist, die die Farbe nicht sehen können. Markieren Sie beispielsweise erforderliche Formularfelder nicht nur in Rot, sondern kennzeichnen Sie sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. In unserem [Tabbed Info Box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir beispielsweise drei Informationspanels, die wir jedoch [positionieren](/de/docs/Learn/CSS/CSS_layout/Positioning) sie übereinander und bieten Registerkarten, die angeklickt werden können, um jede anzuzeigen (sie sind auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei Registeroberfläche mit ausgewähltem Register 1, und nur dessen Inhalte werden angezeigt. Die Inhalte anderer Register sind verborgen. Wenn ein Register ausgewählt ist, ändert sich die Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orange-Rot zu Sattelbraun.](tabbed-info-box.png)

Screenreader-Benutzern ist das alles egal — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie auf alles zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) gilt allgemein als einer der besten Mechanismen, Inhalte für visuelle Effekte zu verbergen, da sie Screenreader nicht daran hindert, auf sie zuzugreifen.

Auf der anderen Seite sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie Inhalte vor Screenreadern verbergen. Es sei denn natürlich, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Screenreadern verborgen bleibt.

> **Hinweis:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Benutzer können Ihre Stile mit ihren eigenen benutzerdefinierten Stilen überschreiben, beispielsweise:

- Sehen Sie sich Sarah Maddoxs [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) an, einen nützlichen Leitfaden, der erklärt, wie Sie dies manuell in Firefox tun können.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, wobei Stylish eine [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein User mit Seheinschränkungen könnte wollen, dass der Text auf allen von ihnen besuchten Websites größer ist, oder ein User mit schwerer Farbsehschwäche könnte alle Websites in kontraststarken Farben sehen wollen, die für sie einfach zu erkennen sind. Wie auch immer der Bedarf aussieht, Sie sollten sich damit wohlfühlen und Ihre Designs flexibel genug gestalten, damit solche Änderungen in Ihrem Design funktionieren. Beispielsweise könnten Sie sicherstellen, dass Ihr Hauptinhaltbereich mit größerem Text umgehen kann (vielleicht beginnt er zu scrollen, um alles sichtbar zu machen) und ihn nicht einfach versteckt oder komplett bricht.

## JavaScript

Auch JavaScript kann die Barrierefreiheit beeinträchtigen, abhängig davon, wie es verwendet wird.

Modernes JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollständigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100% für alle Menschen zugänglich sein müssen — Sie müssen nur tun, was Sie können, und Ihre Apps so zugänglich wie möglich machen.

Einfache Inhalte und Funktionen sind argumentierbar leicht zugänglich zu machen — zum Beispiel Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) betrachtet haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Das richtige Element für die richtige Aufgabe verwenden. Beispielsweise sicherstellen, dass Sie Überschriften und Absätze verwenden und {{htmlelement("button")}} und {{htmlelement("a")}} Elemente.
- Sicherstellen, dass Inhalte als Text vorliegen, entweder direkt als Textinhalt, gute Textbezeichnungen für Formularelemente oder [textuelle Alternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben auch ein Beispiel dafür betrachtet, wie man mit JavaScript Funktionen nachrüstet, wo sie fehlen — siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal — wirklich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es in Situationen möglich ist, in denen Sie aus irgendeinem Grund das verwendete Markup nicht kontrollieren können. Eine andere Möglichkeit, die Barrierefreiheit für nicht-semantische JavaScript-gesteuerte Widgets zu verbessern, besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies ebenfalls im Detail behandeln.

Komplexere Funktionen wie 3D-Spiele lassen sich nicht so einfach barrierefrei gestalten — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, textuelle Alternativen oder andere Informationen für Benutzer mit starker Sehbehinderung bereitzustellen. Es ist arguierbar, dass ein solches Spiel nicht wirklich diese Personengruppe als Teil seiner Hauptzielgruppe hat, und es wäre unvernünftig, von Ihnen zu erwarten, dass es zu 100% für blinde Menschen zugänglich ist. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es von Nicht-Maus-Benutzern verwendet werden kann und das Farbschema kontrastierend genug machen, um von denen mit Farbsehschwächen benutzt zu werden.

### Das Problem mit zu viel JavaScript

Das Problem tritt häufig auf, wenn Menschen zu sehr von JavaScript abhängen. Manchmal sehen Sie eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, die CSS wurde von JavaScript generiert, usw. Dies hat alle möglichen Barrierefreiheits- und anderen Probleme damit, sodass es nicht empfohlen wird.

Neben der Verwendung des richtigen Elements für den richtigen Zweck sollten Sie auch sicherstellen, dass Sie die richtige Technologie für den richtigen Zweck verwenden! Überlegen Sie sorgfältig, ob Sie diese schicke, JavaScript-gesteuerte 3D-Informationsbox benötigen oder ob alter einfacher Text ausreicht. Überlegen Sie sorgfältig, ob Sie ein komplexes nicht standardmäßiges Formular-Widget benötigen oder ob ein Texteingabefeld ausreicht. Und generieren Sie bitte nicht den gesamten HTML-Inhalt mit JavaScript, wenn dies möglich ist.

### Halten Sie es dezent

Sie sollten **unaufdringliches JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Der Gedanke bei unaufdringlichem JavaScript ist, dass es wenn möglich verwendet werden sollte, um Funktionalität zu erweitern, nicht komplett zu erstellen — Grundfunktionen sollten idealerweise ohne JavaScript funktionieren, auch wenn dies nicht immer eine Option ist. Aber wieder, ein großer Teil davon ist, eingebaute Browserfunktionalität wo möglich zu verwenden.

Gute Anwendungsbeispiele für unaufdringliches JavaScript beinhalten:

- Bereitstellung von Client-seitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben aufmerksam macht, ohne warten zu müssen, bis der Server die Daten überprüft. Wenn es nicht verfügbar ist, funktioniert das Formular trotzdem, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML `<video>`s, die für reine Tastaturbenutzer zugänglich sind, zusammen mit einem direkten Link zum Video, das verwendet werden kann, um es zuzugreifen, falls JavaScript nicht verfügbar ist (die Standard-`<video>`-Browsersteuerelemente sind in den meisten Browsern nicht keyboard-zugänglich).

Wir haben ein schnelles und einfaches Beispiel für Client-seitige Formularvalidierung erstellt — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (auch [sehen Sie das Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular abzusenden, während eines oder beide Felder leer sind, schlägt die Übermittlung fehl, und eine Fehlermeldungsbox erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich — Sie können das Formular problemlos verwenden, auch wenn JavaScript nicht verfügbar ist, und jede sinnvolle Formularimplementierung wird auch serverseitige Validierung aktiviert haben, da es zu einfach ist, clientseitige Validierung zu umgehen (z.B. indem JavaScript im Browser ausgeschaltet wird). Die clientseitige Validierung ist dennoch sehr nützlich, um Fehler zu melden — Benutzer können umgehend über Fehler informiert werden, anstatt auf eine Runde zum Server und ein Seitenneuladen warten zu müssen. Dies ist ein definitiver Benutzervorteil.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich barrierefrei gemacht. Wir haben {{htmlelement("label")}} Elemente verwendet, um sicherzustellen, dass die Formularbezeichnungen eindeutig mit ihren Eingaben verknüpft sind, sodass Screenreader sie zusammen mit dem Elementnamen vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular übermittelt wird — dies ist, damit wir die Benutzeroberfläche nicht zu oft aktualisieren und Screenreader (und möglicherweise andere) Benutzer verwirren:

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
> In diesem Beispiel verbergen und zeigen wir die Fehlermeldungsbox mithilfe der absoluten Positionierung anstelle einer anderen Methode wie visibility oder display, da es die Fähigkeit des Screenreaders zu lesen nicht beeinträchtigt.

Echte Formularvalidierung wäre viel komplexer als dies — Sie würden überprüfen wollen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch (z.B. nicht negativ und weniger als 4 Stellen). Hier haben wir nur eine einfache Überprüfung implementiert, dass in jedes Eingabefeld ein Wert eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, das heißt, wenn die Tests bestanden werden, wird das Formular abgesendet. Wenn es jedoch Fehler gibt (`if (errorList.hasChildNodes())`), stoppen wir die Formularübermittlung (unter Verwendung von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen alle Fehlermeldungen an, die erzeugt wurden (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn Fehler vorhanden sind, was besser für die Benutzerfreundlichkeit ist.

Für jedes Eingabefeld, das keinen Wert hat, wenn das Formular übermittelt wird, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link dient einem doppelten Zweck — er sagt Ihnen, was das Problem ist, plus Sie können darauf klicken/ihn aktivieren, um direkt zu dem jeweiligen Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Zusätzlich wird das `errorField` an den Anfang der Quellreihenfolge platziert (auch wenn es in der Benutzeroberfläche mithilfe von CSS anders positioniert wird), was bedeutet, dass Benutzer genau wissen können, was mit ihren Formulareingaben falsch ist und zu den jeweiligen Eingabeelementen gelangen, indem sie zur Anfang der Seite zurück gehen.

Als abschließende Bemerkung haben wir in unserem Demo einige WAI-ARIA Attribute verwendet, um Barrierefreiheitsprobleme zu lösen, die von Bereichen, die ständig ohne Seitenneuladen aktualisiert werden, verursacht werden (Screenreader erkennen dies nicht oder benachrichtigen Benutzer standardmäßig nicht):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erläutern, der [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen denken vielleicht darüber nach, dass HTML-Formulare integrierte Validierungsmechanismen wie die Attribute `required`, `min`/`minlength`, und `max`/`maxlength` haben (siehe das {{htmlelement("input")}} Element-Referenz für mehr Informationen). Wir haben diese im Demo nicht verwendet, weil der browserübergreifende Support dafür lückenhaft ist (zum Beispiel unterstützt IE10 und darüber nur).

> [!NOTE]
> WebAIM's [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen über zugängliche Formularvalidierung.

### Andere JavaScript-Zugänglichkeitsanliegen

Es gibt noch andere Dinge, zu denen man hinsichtlich der Implementierung von JavaScript und der Überlegungen zur Barrierefreiheit aufmerksam sein sollte. Wir fügen mehr hinzu, wenn wir sie finden.

#### Maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mithilfe von Ereignishandlern implementiert, die es uns erlauben, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme haben. Das Hauptbeispiel, dem Sie begegnen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event), usw. Funktionalität, die als Reaktion auf diese Ereignisse abläuft, wird nicht zugänglich für andere Mechanismen, wie Tastatursteuerungen.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen koppeln, die auf andere Weise aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden dafür sorgen, dass Tastaturbenutzer auch Zugang erhalten.

Sehen wir uns ein Beispiel an, das aufzeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Miniaturbild bereitstellen, das eine größere Version des Bildes zeigt, wenn es mit der Maus überfahren oder fokussiert wird (wie Sie es in einem Produktkatalog eines E-Commerce-Anbieters sehen würden.)

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code beinhaltet zwei Funktionen, die das verkleinerte Bild zeigen und verstecken; diese werden durch die folgenden Zeilen ausgeführt, die sie als Ereignishandler einrichten:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn sich der Mauszeiger über die Miniatur bewegt und aufhört, sie zu überfahren. Dies erlaubt uns jedoch nicht, die Zoomansicht mit der Tastatur zugänglich zu machen — um dies zu ermöglichen, haben wir die letzten zwei Zeilen eingeschlossen, die die Funktionen ausführen, wenn das Bild fokussiert und verschwommen (fokussierter Bereich wird verlassen) wird. Dies kann durch Tabben über das Bild erreicht werden, weil wir `tabindex="0"` darauf eingefügt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler, nachdem Enter/Return auf einem Link oder Formularelement gedrückt wurde, das den Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert standardmäßig jedoch nicht, wenn Sie ein standardmäßig nicht-fokusierbares Ereignis mit dem Tabindex fokussieren lassen — in solchen Fällen müssen Sie spezifisch erkennen, wenn genau diese Taste gedrückt wird (siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: CSS- und JavaScript-Barrierefreiheit](/de/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen eine gute Menge an Details und Verständnis über die Barrierefreiheitsprobleme im Zusammenhang mit der Verwendung von CSS und JavaScript auf Webseiten gegeben.

Als nächstes kommt WAI-ARIA!

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}
