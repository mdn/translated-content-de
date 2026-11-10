---
title: Best Practices für barrierefreies CSS und JavaScript
short-title: Barrierefreies CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 47def3151aadab22b9438c2eedba276d51f65f25
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript können bei richtiger Verwendung zu barrierefreien Webangeboten beitragen. Werden sie falsch eingesetzt, können sie die Barrierefreiheit jedoch erheblich beeinträchtigen. Dieser Artikel beschreibt einige Best Practices für CSS und JavaScript, mit denen sich auch komplexe Inhalte möglichst barrierefrei gestalten lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> sowie ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheit</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Barrierefreie Textgrößen und Layouts.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von Stilen für <code>:focus</code> und <code>:hover</code>.</li>
          <li>Ein sinnvoller Einsatz von Animationen: Setzen Sie Animationen dezent ein und bieten Sie eine Möglichkeit, sie auszuschalten.</li>
          <li>Best Practices zum Ausblenden von Inhalten, ohne sie unzugänglich zu machen.</li>
          <li>Warum zu viel JavaScript problematisch sein kann und welchen Wert unaufdringliches JavaScript hat.</li>
          <li>Ein sinnvoller Einsatz von Events, damit bestimmte Bedienungsarten nicht ausgeschlossen werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript sind für die Barrierefreiheit nicht so unmittelbar wichtig wie HTML. Je nachdem, wie sie verwendet werden, können sie die Barrierefreiheit aber verbessern oder beeinträchtigen. Anders gesagt: Beachten Sie einige Best Practices, damit Ihr Einsatz von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht verschlechtert.

## CSS

Sehen wir uns zunächst CSS an.

### Korrekte Semantik und Erwartungen der Nutzenden

Mit CSS lässt sich jedes HTML-Element so gestalten, dass es wie _etwas Beliebiges_ aussieht. Das bedeutet jedoch nicht, dass Sie das auch tun sollten. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) mehrfach erwähnt haben, sollten Sie nach Möglichkeit das passende semantische Element für die jeweilige Aufgabe verwenden. Andernfalls kann dies bei allen Nutzenden zu Verwirrung und Problemen bei der Bedienung führen, insbesondere aber bei Menschen mit Behinderungen. Korrekte Semantik hängt eng mit den Erwartungen der Nutzenden zusammen: Elemente sehen entsprechend ihrer Funktion auf bestimmte Weise aus und verhalten sich entsprechend. Nutzende erwarten diese etablierten Konventionen.

Wenn ein Entwickler beispielsweise den Inhalt nicht mit passenden Überschriftenelementen ausgezeichnet hat, können Personen, die einen Screenreader verwenden, nicht über die Überschriften durch die Seite navigieren. Umgekehrt verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht mehr wie eine Überschrift aussieht.

Kurz gesagt: Sie können die Gestaltung eines Seitenelements an Ihr Design anpassen. Verändern Sie es aber nicht so stark, dass es nicht mehr wie erwartet aussieht oder funktioniert. Die folgenden Abschnitte fassen die wichtigsten HTML-Merkmale zusammen, die Sie berücksichtigen sollten.

#### Struktur von „normalem“ Textinhalt

Überschriften, Absätze und Listen bilden den Kern des Textinhalts Ihrer Seite:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

Typisches CSS könnte so aussehen:

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Zeichenabstände usw. wählen, damit Ihr Text logisch aufgebaut, gut lesbar und angenehm zu lesen ist.
- Dafür sorgen, dass sich Überschriften vom Fließtext abheben – üblicherweise sind sie wie in der Standarddarstellung groß und fett. Ihre Listen sollten als Listen erkennbar sein.
- Darauf achten, dass sich Ihre Textfarbe deutlich von der Hintergrundfarbe abhebt.

Weitere Informationen finden Sie unter [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [Textgestaltung mit CSS](/de/docs/Learn_web_development/Core/Text_styling).

#### Hervorgehobener Text

Inline-Markup, das den umschlossenen Text auf bestimmte Weise hervorhebt:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie hervorgehobenen Text zusätzlich einfach einfärben:

```css
strong,
em {
  color: #a60000;
}
```

In der Regel müssen Sie Hervorhebungselemente jedoch nicht wesentlich anders gestalten. Die üblichen Darstellungen als fett oder kursiv sind gut erkennbar; eine Änderung dieser Darstellung kann Verwirrung stiften. Weitere Informationen finden Sie unter [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, mit dem einer Abkürzung, einem Akronym oder einem Initialwort seine ausgeschriebene Form zugeordnet werden kann:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier können Sie eine einfache Gestaltung ergänzen:

```css
abbr {
  color: #a60000;
}
```

Die etablierte Darstellung von Abkürzungen ist eine gepunktete Unterstreichung. Es ist nicht ratsam, deutlich davon abzuweichen. Weitere Informationen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks ermöglichen die Navigation zu anderen Stellen im Web:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein sehr einfaches Beispiel für die Gestaltung von Links sehen Sie hier:

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

Üblicherweise sind Links im Ausgangszustand unterstrichen und haben eine andere Farbe (standardmäßig Blau). Bereits besuchte Links haben eine weitere Farbvariante (standardmäßig Violett), aktivierte Links eine dritte (standardmäßig Rot). Außerdem wird der Mauszeiger zu einem Zeigersymbol, wenn er sich über einem Link befindet. Wenn ein Link den Fokus erhält, etwa durch Navigation mit der Tabulatortaste, oder aktiviert wird, erscheint eine Hervorhebung. Die folgenden Bilder zeigen diese Hervorhebung in Firefox (eine gepunktete Umrandung) und Chrome (eine blaue Umrandung):

![Screenshot einer Linkliste im Browser Firefox. Die Liste enthält vier Einträge. Der zweite Eintrag ist mit einer blauen gepunkteten Umrandung hervorgehoben, weil er durch Navigation mit der Tabulatortaste den Fokus erhalten hat.](focus-highlight-firefox.png)

![Screenshot einer Linkliste im Browser Chrome. Die Liste enthält vier Einträge. Der dritte Eintrag ist mit einer blauen Umrandung hervorgehoben, weil er durch Navigation mit der Tabulatortaste den Fokus erhalten hat.](focus-highlight-chrome.png)

Bei der Gestaltung von Links können Sie kreativ sein, solange Nutzende eine Rückmeldung erhalten, wenn sie mit den Links interagieren. Bei einem Zustandswechsel sollte sich erkennbar etwas ändern. Entfernen Sie weder den Zeiger-Cursor noch die Fokusumrandung – beides sind wichtige Hilfen für Menschen, die die Tastatur verwenden.

#### Formularelemente

Elemente, mit denen Nutzende Daten auf Websites eingeben können:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gutes Beispiel-CSS finden Sie in unserem Beispiel [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) ([Live-Version ansehen](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Das meiste CSS, das Sie für Formulare schreiben, dient dazu, die Größe der Elemente festzulegen, Beschriftungen und Eingabefelder auszurichten und für ein ordentliches Erscheinungsbild zu sorgen.

Sie sollten jedoch nicht zu stark von der erwarteten visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie den Fokus haben. Diese entspricht im Wesentlichen der von Links (siehe oben). Sie können die Fokus- und Hover-Zustände von Formularelementen gestalten, um das Verhalten browserübergreifend einheitlicher zu machen oder besser an Ihr Seitendesign anzupassen. Entfernen Sie diese Rückmeldung aber nicht vollständig: Menschen sind auf solche Hinweise angewiesen, um zu erkennen, was gerade passiert.

#### Tabellen

Tabellen dienen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML und CSS einer Tabelle finden Sie in [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) ([Live-Version ansehen](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

CSS für Tabellen dient im Allgemeinen dazu, sie besser in das Design einzufügen und ansprechender zu gestalten. Achten Sie darauf, dass Tabellenüberschriften hervorstechen (normalerweise durch Fettdruck). Alternierende Zeilenfarben erleichtern es außerdem, die einzelnen Zeilen zu erfassen.

### Farben und Farbkontrast

Achten Sie bei der Wahl eines Farbschemas für Ihre Website darauf, dass sich die Textfarbe (Vordergrundfarbe) deutlich von der Hintergrundfarbe abhebt. Ihr Design mag gut aussehen – wenn Menschen mit Sehbeeinträchtigungen wie Farbenblindheit Ihre Inhalte nicht lesen können, erfüllt es jedoch seinen Zweck nicht.

Ob der Kontrast ausreicht, lässt sich leicht überprüfen. Es gibt verschiedene Online-Tools, in die Sie Ihre Vorder- und Hintergrundfarben eingeben können. Der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM ist beispielsweise einfach zu bedienen und erklärt, welche Anforderungen Sie erfüllen müssen, um den WCAG-Kriterien zum Farbkontrast zu entsprechen.

> [!NOTE]
> Ein hohes Kontrastverhältnis hilft auch allen, die ein Smartphone oder Tablet mit glänzendem Bildschirm verwenden, Seiten in einer hellen Umgebung – etwa bei Sonnenlicht – besser zu lesen.

Verlassen Sie sich außerdem bei Hinweisen und Informationen nicht allein auf Farben. Für Menschen, die die Farbe nicht erkennen können, wäre das nicht hilfreich. Kennzeichnen Sie beispielsweise Pflichtfelder in einem Formular nicht nur rot, sondern zusätzlich mit einem Sternchen.

### Inhalte ausblenden

Bei vielen visuellen Designs sollen nicht alle Inhalte gleichzeitig sichtbar sein. In unserem [Beispiel einer Infobox mit Tabs](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) gibt es beispielsweise drei Informationsbereiche. Wir [positionieren](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) sie übereinander und stellen anklickbare Tabs bereit, mit denen sich jeder Bereich anzeigen lässt. Die Tabs sind auch per Tastatur zugänglich: Sie können sie alternativ mit der Tabulatortaste und der Eingabe- oder Return-Taste auswählen.

![Oberfläche mit drei Tabs, bei der Tab 1 ausgewählt ist und nur dessen Inhalt angezeigt wird. Die Inhalte der anderen Tabs sind ausgeblendet. Wenn ein Tab ausgewählt wird, ändert sich seine Textfarbe von Schwarz zu Weiß und seine Hintergrundfarbe von Orangerot zu Sattelbraun.](tabbed-info-box.png)

Für Personen, die einen Screenreader verwenden, ist diese visuelle Darstellung unerheblich. Entscheidend ist, dass die Reihenfolge im Quellcode sinnvoll ist und alle Inhalte erreichbar sind. Absolute Positionierung, wie sie in diesem Beispiel verwendet wird, gilt allgemein als eine der besten Möglichkeiten, Inhalte aus visuellen Gründen auszublenden, da sie Screenreader nicht daran hindert, auf die Inhalte zuzugreifen.

Dagegen sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, wenn die Inhalte für Screenreader zugänglich bleiben sollen: Diese Eigenschaften verbergen Inhalte auch vor Screenreadern. Eine Ausnahme ist natürlich, wenn es einen guten Grund gibt, die Inhalte auch vor Screenreadern zu verbergen.

> [!NOTE]
> [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) bietet viele weitere nützliche Informationen zu diesem Thema.

### Akzeptieren Sie, dass Nutzende Stile überschreiben können

Nutzende können Ihre Stile durch eigene benutzerdefinierte Stile überschreiben. Zum Beispiel:

- Sarah Maddox beschreibt in [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/), wie sich das in Firefox manuell einrichten lässt.
- Mit einer Erweiterung ist es wahrscheinlich einfacher. Die Erweiterung Stylus ist beispielsweise für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar; Stylish ist ein entsprechendes Angebot für [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe).

Dafür kann es verschiedene Gründe geben. Eine Person mit Sehbeeinträchtigung möchte vielleicht den Text auf allen besuchten Websites vergrößern. Eine Person mit stark eingeschränktem Farbsehvermögen möchte möglicherweise alle Websites mit kontrastreichen Farben darstellen, die sie gut erkennen kann. Welcher Bedarf auch immer dahintersteht: Sie sollten solche Anpassungen zulassen und Ihre Designs so flexibel gestalten, dass sie weiterhin funktionieren. Stellen Sie beispielsweise sicher, dass Ihr Hauptinhaltsbereich größeren Text aufnehmen kann – gegebenenfalls durch Scrollen –, statt ihn einfach auszublenden oder das Layout vollständig zu zerstören.

## JavaScript

Auch JavaScript kann die Barrierefreiheit beeinträchtigen, je nachdem, wie es verwendet wird.

Modernes JavaScript ist eine leistungsfähige Sprache. Heute können wir damit von einfachen Aktualisierungen von Inhalten und Benutzeroberflächen bis hin zu vollwertigen 2D- und 3D-Spielen vieles umsetzen. Es gibt keine Regel, nach der alle Inhalte für alle Menschen zu 100 % barrierefrei sein müssen. Sie sollten jedoch tun, was Ihnen möglich ist, um Ihre Anwendungen so barrierefrei wie möglich zu gestalten.

Einfache Inhalte und Funktionen lassen sich vergleichsweise leicht barrierefrei gestalten – beispielsweise Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen auslösen. Wie wir im Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erläutert haben, sind dabei vor allem folgende Punkte wichtig:

- **Gute Semantik:** Verwenden Sie für jede Aufgabe das richtige Element. Dazu gehören beispielsweise Überschriften und Absätze sowie {{htmlelement("button")}}- und {{htmlelement("a")}}-Elemente.
- **Textliche Verfügbarkeit von Inhalten:** Stellen Sie Inhalte entweder direkt als Text, über aussagekräftige Beschriftungen von Formularelementen oder als [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) bereit, etwa als Alternativtext für Bilder.

Wir haben uns auch ein Beispiel dafür angesehen, wie sich fehlende Funktionen mit JavaScript ergänzen lassen – siehe [Tastaturzugänglichkeit nachträglich herstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Das ist nicht ideal: Eigentlich sollten Sie einfach das richtige Element für die jeweilige Aufgabe verwenden. Es zeigt jedoch, dass dies möglich ist, wenn Sie aus irgendeinem Grund keinen Einfluss auf das verwendete Markup haben. Eine weitere Möglichkeit, die Barrierefreiheit nicht semantischer, JavaScript-gesteuerter Widgets zu verbessern, ist WAI-ARIA. Damit können Sie zusätzliche Semantik für Personen bereitstellen, die einen Screenreader verwenden. Der nächste Artikel behandelt dies ausführlich.

Komplexe Funktionen wie 3D-Spiele sind nicht so leicht barrierefrei zu gestalten. Ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert. Dieses bietet derzeit keine Möglichkeit, Textalternativen oder andere Informationen bereitzustellen, die Menschen mit starken Sehbeeinträchtigungen nutzen könnten. Man könnte argumentieren, dass diese Personengruppe nicht zur Hauptzielgruppe eines solchen Spiels gehört und es unangemessen wäre, von Ihnen eine hundertprozentige Zugänglichkeit für blinde Menschen zu erwarten. Sie könnten jedoch eine [Tastatursteuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit das Spiel auch ohne Maus bedienbar ist, und ein ausreichend kontrastreiches Farbschema wählen, damit Menschen mit eingeschränktem Farbsehvermögen es nutzen können.

### Das Problem mit zu viel JavaScript

Probleme entstehen häufig, wenn man sich zu stark auf JavaScript verlässt. Manchmal begegnen Sie Websites, auf denen alles mit JavaScript umgesetzt wurde: Das HTML wird durch JavaScript erzeugt, das CSS ebenfalls usw. Das bringt unterschiedliche Probleme mit sich, unter anderem bei der Barrierefreiheit, und ist daher nicht empfehlenswert.

Verwenden Sie nicht nur das richtige Element für die jeweilige Aufgabe, sondern auch die richtige Technologie! Überlegen Sie genau, ob Sie wirklich eine aufwendige, JavaScript-gesteuerte 3D-Infobox brauchen oder ob einfacher Text ausreicht. Überlegen Sie, ob ein komplexes, nicht standardisiertes Formular-Widget nötig ist oder ein Texteingabefeld genügt. Und erzeugen Sie nach Möglichkeit nicht Ihren gesamten HTML-Inhalt mit JavaScript.

### JavaScript unaufdringlich einsetzen

Behalten Sie beim Erstellen Ihrer Inhalte das Prinzip des **unaufdringlichen JavaScript** im Blick. Dahinter steht die Idee, JavaScript möglichst zur Erweiterung von Funktionen einzusetzen, statt grundlegende Funktionen vollständig damit zu erstellen. Idealerweise funktionieren diese auch ohne JavaScript – auch wenn das nicht immer möglich ist. Ein wesentlicher Teil dieses Ansatzes besteht darin, nach Möglichkeit integrierte Browserfunktionen zu nutzen.

Gute Beispiele für unaufdringliches JavaScript sind:

- Eine clientseitige Formularvalidierung, die Nutzende schnell auf Probleme mit ihren Eingaben hinweist, ohne auf eine Prüfung der Daten durch den Server warten zu müssen. Ist sie nicht verfügbar, funktioniert das Formular weiterhin; die Validierung kann dann lediglich länger dauern.
- Benutzerdefinierte Steuerelemente für HTML-`<video>`-Elemente, die auch mit der Tastatur zugänglich sind, zusammen mit einem direkten Link zum Video für den Fall, dass JavaScript nicht verfügbar ist. Die standardmäßigen Browser-Steuerelemente für `<video>` sind in den meisten Browsern nicht per Tastatur zugänglich.

Als Beispiel haben wir eine einfache clientseitige Formularvalidierung erstellt: [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Dort sehen Sie ein einfaches Formular. Wenn Sie versuchen, es abzusenden, während eines oder beide Felder leer sind, wird das Absenden verhindert und ein Feld mit einer Fehlermeldung angezeigt, die das Problem beschreibt.

Diese Art der Formularvalidierung ist unaufdringlich: Das Formular lässt sich auch ohne JavaScript verwenden. Eine sinnvolle Formularimplementierung führt zusätzlich eine serverseitige Validierung durch, da böswillige Nutzende die clientseitige Validierung leicht umgehen können, indem sie beispielsweise JavaScript im Browser deaktivieren. Die clientseitige Validierung ist dennoch sehr nützlich, um Fehler zu melden: Nutzende erfahren sofort von ihren Eingabefehlern, statt auf eine Anfrage an den Server und das erneute Laden der Seite warten zu müssen. Das ist ein klarer Vorteil für die Bedienbarkeit.

> [!NOTE]
> In dieser einfachen Demo wurde keine serverseitige Validierung implementiert.

Wir haben auch darauf geachtet, diese Formularvalidierung möglichst barrierefrei zu gestalten. Mit {{htmlelement("label")}}-Elementen stellen wir sicher, dass die Beschriftungen eindeutig mit den zugehörigen Eingabefeldern verknüpft sind, sodass Screenreader sie zusammen vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Die Validierung erfolgt erst beim Absenden des Formulars. So wird die Benutzeroberfläche nicht zu häufig aktualisiert, was Personen, die einen Screenreader verwenden, und möglicherweise auch andere Nutzende verwirren könnte:

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
> In diesem Beispiel blenden wir das Feld mit der Fehlermeldung durch absolute Positionierung ein und aus, statt eine andere Methode wie visibility oder display zu verwenden. So bleibt sein Inhalt für Screenreader lesbar.

Eine echte Formularvalidierung wäre deutlich komplexer. Sie würden beispielsweise prüfen, ob der eingegebene Name tatsächlich wie ein Name aussieht und ob das eingegebene Alter eine Zahl und plausibel ist (etwa nicht negativ und mit weniger als vier Ziffern). Hier prüfen wir lediglich, ob jedes Eingabefeld einen Wert enthält (`if (testItem.input.value === '')`).

Nach der Validierung wird das Formular abgesendet, wenn alle Prüfungen erfolgreich waren. Wenn Fehler vorliegen (`if (errorList.hasChildNodes())`), verhindern wir das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) und zeigen die erzeugten Fehlermeldungen an (siehe unten). Dadurch werden Fehlermeldungen nur angezeigt, wenn tatsächlich Fehler vorliegen – das verbessert die Bedienbarkeit.

Für jedes Eingabefeld, das beim Absenden des Formulars leer ist, erstellen wir einen Listeneintrag mit einem Link und fügen ihn in `errorList` ein.

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

Jeder Link erfüllt zwei Zwecke: Er beschreibt den Fehler und lässt sich anklicken oder aktivieren, um direkt zum betreffenden Eingabefeld zu springen und die Eingabe zu korrigieren.

Außerdem steht `errorField` am Anfang der Reihenfolge im Quellcode, obwohl es in der Benutzeroberfläche mithilfe von CSS an anderer Stelle positioniert ist. So können Nutzende zum Seitenanfang zurückkehren, genau erfahren, was beim Absenden ihres Formulars schiefgegangen ist, und die betreffenden Eingabefelder erreichen.

Abschließend haben wir in unserer Demo einige WAI-ARIA-Attribute verwendet. Sie helfen bei Problemen mit der Barrierefreiheit, die entstehen, wenn Inhaltsbereiche ohne erneutes Laden der Seite laufend aktualisiert werden: Screenreader erkennen solche Aktualisierungen standardmäßig nicht und weisen Nutzende nicht darauf hin.

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Diese Attribute erläutern wir im nächsten Artikel, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) ausführlicher behandelt.

> [!NOTE]
> Einige von Ihnen denken wahrscheinlich daran, dass HTML-Formulare über integrierte Validierungsmechanismen verfügen, etwa die Attribute `required`, `min`/`minlength` und `max`/`maxlength` (weitere Informationen finden Sie in der Referenz zum {{htmlelement("input")}}-Element). Wir haben sie in der Demo nicht verwendet, weil die browserübergreifende Unterstützung dafür uneinheitlich ist (beispielsweise erst ab IE10).

> [!NOTE]
> WebAIMs [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen zur barrierefreien Formularvalidierung.

### Weitere Aspekte der Barrierefreiheit bei JavaScript

Bei der Implementierung von JavaScript und der Berücksichtigung der Barrierefreiheit gibt es noch weitere Punkte zu beachten. Wir werden diesen Abschnitt ergänzen, sobald wir weitere finden.

#### Mausspezifische Events

Die meisten Nutzerinteraktionen werden in clientseitigem JavaScript mithilfe von Event-Handlern umgesetzt. Mit ihnen können wir Funktionen ausführen, wenn bestimmte Events auftreten. Manche Events können Probleme mit der Barrierefreiheit verursachen. Besonders häufig begegnen Ihnen mausspezifische Events wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionen, die nur auf diese Events reagieren, sind über andere Bedienungsarten wie die Tastatur nicht zugänglich.

Um solche Probleme zu vermeiden, sollten Sie diese Events durch ähnliche Events ergänzen, die sich auf andere Weise auslösen lassen (sogenannte geräteunabhängige Event-Handler). [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden beispielsweise die Zugänglichkeit für Tastaturnutzende ermöglichen.

Sehen wir uns ein Beispiel an, bei dem das nützlich ist. Angenommen, wir möchten ein Vorschaubild bereitstellen, das eine größere Version des Bildes anzeigt, sobald sich der Mauszeiger darüber befindet oder das Bild den Fokus erhält – wie in einem Produktkatalog eines Onlineshops.

Ein sehr einfaches Beispiel finden Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das vergrößerte Bild ein- und ausblenden. Die folgenden Zeilen registrieren diese Funktionen als Event-Handler:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn sich der Mauszeiger über dem Vorschaubild befindet beziehungsweise es wieder verlässt. Damit wäre die vergrößerte Ansicht jedoch nicht per Tastatur erreichbar. Deshalb haben wir die letzten beiden Zeilen ergänzt: Sie führen die Funktionen aus, wenn das Bild den Fokus erhält oder verliert. Da wir `tabindex="0"` für das Bild angegeben haben, kann es mit der Tabulatortaste fokussiert werden.

Das [click](/de/docs/Web/API/Element/click_event)-Event ist interessant: Es klingt nach einer Abhängigkeit von der Maus, aber die meisten Browser lösen [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler auch aus, wenn bei einem fokussierten Link oder Formularelement die Eingabe- oder Return-Taste gedrückt wird oder wenn ein solches Element auf einem Touchscreen angetippt wird. Das funktioniert jedoch standardmäßig nicht, wenn Sie ein normalerweise nicht fokussierbares Element mithilfe von tabindex fokussierbar machen. In solchen Fällen müssen Sie ausdrücklich erkennen, wann die entsprechende Taste gedrückt wird (siehe [Tastaturzugänglichkeit nachträglich herstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Zusammenfassung

Wir hoffen, dass Ihnen dieser Artikel einen guten Überblick über die Probleme mit der Barrierefreiheit gegeben hat, die beim Einsatz von CSS und JavaScript auf Webseiten auftreten können.

Im nächsten Artikel stellen wir Ihnen einige Aufgaben vor, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
