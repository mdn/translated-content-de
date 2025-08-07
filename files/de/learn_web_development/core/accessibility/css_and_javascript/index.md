---
title: Barrierefreiheit Best Practices für CSS und JavaScript
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript können bei korrekter Verwendung barrierefreie Web-Erlebnisse ermöglichen oder bei Missbrauch die Barrierefreiheit erheblich beeinträchtigen. Dieser Artikel beschreibt einige Best Practices für CSS und JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so barrierefrei wie möglich sind.

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
          <li>Barrierefreie Textgrößen und Layouts.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code>-Stilen.</li>
          <li>Sinnvolle Verwendung von Animationen — Verwenden Sie Animationen subtil und bieten Sie Steuerungen zum Ausschalten an.</li>
          <li>Best Practices zum Verbergen von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Es gibt zu viel JavaScript, und der Wert von unaufdringlichem JavaScript.</li>
          <li>Verwenden Sie Ereignisse sinnvoll, damit Sie keine bestimmten Steuerungstypen ausschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS und JavaScript sind barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können dennoch helfen oder Barrierefreiheit beschädigen, je nachdem, wie sie verwendet werden. Anders ausgedrückt: Es ist wichtig, einige Best-Practice-Ratschläge zu berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht ruiniert.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzererwartung

Es ist möglich, jedes HTML-Element mit CSS so aussehen zu lassen wie _alles Mögliche_, aber das bedeutet nicht, dass Sie es sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie das passende semantische Element für die jeweilige Aufgabe verwenden, wann immer möglich. Wenn Sie das nicht tun, kann dies zu Verwirrung und Bedienungsproblemen für alle führen, insbesondere aber für Benutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit den Erwartungen der Benutzer zu tun — Elemente sehen entsprechend ihrer Funktionalität auf bestimmte Weise aus und verhalten sich entsprechend, und diese gängigen Konventionen werden von den Benutzern erwartet.

Ein Beispiel: Ein Bildschirmleser-Benutzer kann eine Seite nicht über Überschriftenelemente navigieren, wenn der Entwickler Überschriftenelemente nicht angemessen zur Markierung des Inhalts verwendet hat. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so gestalten, dass sie nicht wie eine Überschrift aussieht.

Unterm Strich: Sie können das Styling eines Seitenfeatures aktualisieren, um es in Ihr Design einzufügen, aber nicht so weit verändern, dass es nicht mehr so aussieht oder sich so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Funktionen zusammen, die berücksichtigt werden sollten.

#### "Standard"-Textstruktur

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Buchstabenabstände usw. auswählen, um Ihren Text logikgerecht, lesbar und angenehm zu machen.
- Sicherstellen, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Betonter Text

Inline-Markup, das den Text, den es umschließt, spezifisch betont:

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

Möglicherweise möchten Sie Ihrem betonten Text eine einfache Farbgebung hinzufügen:

```css
strong,
em {
  color: #a60000;
}
```

Sie werden selten Bedarf haben, Betonungselemente in bedeutender Weise zu stylen. Die Standardkonventionen für fett und kursiv sind sehr erkennbar, und eine Änderung des Stils kann Verwirrung verursachen. Mehr über Betonung erfahren Sie unter [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das erlaubt, dass eine Abkürzung, ein Akronym oder eine Initialisierung mit ihrer Erweiterung verknüpft wird:

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

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung, und es ist unklug, wesentlich davon abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks — die Möglichkeit, um zu neuen Orten im Web zu gelangen:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Eine sehr einfache Link-Stilgebung wird unten gezeigt:

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

Die Standardkonventionen für Links sind unterstrichen und haben in ihrem Standardzustand eine andere Farbe (Standard: Blau), eine weitere Farbvariation, wenn der Link zuvor besucht wurde (Standard: Lila), und noch eine andere Farbe, wenn der Link aktiviert ist (Standard: Rot). Darüber hinaus ändert sich das Maussymbol zu einem Zeiger-Icon, wenn Links übermalt werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z. B. durch Tabben) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung in sowohl Firefox (eine gepunktete Umrandung) als auch Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement wird hervorgehoben, indem es über eine blaue gepunktete Umrandung verfügt, wenn es über Tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement wird hervorgehoben, indem es über eine blaue Umrandung verfügt, wenn es über Tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Link-Stilen sein, solange Sie den Benutzern Rückmeldung geben, wenn sie mit den Links interagieren. Etwas sollte definitiv passieren, wenn sich die Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen — beide sind sehr wichtige Hilfen zur Barrierefreiheit für Personen, die Tastatursteuerung verwenden.

#### Formularelemente

Elemente zur Eingabe von Daten auf Websites durch Benutzer:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gute Beispiel-CSS können Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html)-Beispiel sehen ([siehe es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) ebenfalls).

Der größte Teil des CSS, das Sie für Formulare schreiben werden, dient dem Größen der Elemente, dem Ausrichten von Beschriftungen und Eingabefeldern und dem sauberen und ordentlichen Aussehen.

Sie sollten jedoch nicht zu sehr von der erwarteten visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie fokussiert sind, was im Wesentlichen dasselbe ist wie bei Links (siehe oben). Sie könnten die Fokus-/Hover-Zustände von Formularen stylen, um dieses Verhalten in allen Browsern konsistenter zu machen oder besser in Ihr Seitendesign zu integrieren, aber entfernen Sie es nicht vollständig — wiederum verlassen sich Menschen auf diese Hinweise, um zu verstehen, was passiert.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML- und CSS-Tabellen finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html)-Beispiel ([siehe es ebenfalls live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Tabellen-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzupassen und weniger unattraktiv aussehen zu lassen. Es ist eine gute Idee sicherzustellen, dass die Tabellenüberschriften sich hervorheben (normalerweise fett) und Zebra-Streifen zu verwenden, um das Durchgehen der verschiedenen Zeilen zu erleichtern.

### Farbe und Farbkontrast

Beim Entwerfen eines Farbschemas für Ihre Website stellen Sie sicher, dass die Text- (Vordergrund-) Farbe gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Personen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt eine einfache Möglichkeit, um zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt Online-Kontrastprüfwerkzeuge, in die Sie Ihre Vordergrund- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu bedienen und bietet eine Erklärung dessen, was Sie benötigen, um die WCAG-Kriterien in Bezug auf Farbkontrast zu erfüllen.

> [!NOTE]
> Ein hoher Kontrastverhältnis ermöglicht es auch jedem Benutzer eines Smartphones oder Tablets mit einem glänzenden Bildschirm, Seiten in einer hellen Umgebung, wie z. B. Sonnenlicht, besser zu lesen.

Ein weiterer Tipp ist, sich nicht allein auf Farbe für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, keinen Nutzen hat. Stattdessen könnten beispielsweise erforderliche Formularfelder in Rot markiert werden, markiert sie mit einem Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Instanzen, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. Zum Beispiel haben wir in unserem [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) an) drei Informationspaneele, aber wir positionieren sie übereinander und bieten Tabs, die angeklickt werden können, um jeweils eines anzuzeigen (es ist auch per Tastatur zugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Benutzeroberfläche mit drei Tabs, bei dem Tab 1 ausgewählt ist und nur dessen Inhalte angezeigt werden. Der Inhalt der anderen Tabs ist verborgen. Wenn ein Tab ausgewählt ist, ändert sich dessen Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orange-Rot zu Satt-Braun.](tabbed-info-box.png)

Benutzer eines Bildschirmlesers kümmern sich nicht darum — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie auf alle zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte für den visuellen Effekt zu verstecken, da es Bildschirmlesern nicht verhindert, darauf zuzugreifen.

Andererseits sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie Inhalte vor Bildschirmlesern verbergen. Es sei denn natürlich, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Bildschirmlesern verborgen bleibt.

> [!NOTE]
> [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) bietet viele weitere nützliche Details zu diesem Thema.

### Akzeptieren, dass Benutzer Stile überschreiben können

Es ist möglich, dass Benutzer Ihre Stile mit eigenen, benutzerdefinierten Stilen überschreiben, zum Beispiel:

- Sarah Maddoxs Anleitung [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) bietet einen nützlichen Leitfaden, wie Sie dies manuell in Firefox tun können.
- Es ist wahrscheinlich einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, mit Stylish als [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Entsprechung.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer könnte den Text auf allen besuchten Websites vergrößern möchten, oder ein Benutzer mit schwerer Farbdefizienz könnte alle Websites in hohem Kontrast anzeigen, der für sie leicht zu sehen ist. Welche Bedürfnisse auch immer bestehen, Sie sollten damit einverstanden sein und Ihre Designs flexibel genug gestalten, damit solche Anpassungen in Ihrem Design funktionieren. Zum Beispiel könnten Sie sicherstellen, dass Ihr Hauptinhaltsbereich größere Texte verarbeiten kann (vielleicht beginnt er zu scrollen, damit alles gesehen werden kann) und sie nicht einfach versteckt oder komplett zerstört werden.

## JavaScript

JavaScript kann auch die Barrierefreiheit beeinträchtigen, abhängig von seiner Nutzung.

Modernes JavaScript ist eine mächtige Sprache, und wir können heutzutage viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu voll entwickelten 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte 100% barrierefrei für alle Personen sein müssen — Sie sollten einfach tun, was Sie können, und Ihre Apps so barrierefrei wie möglich machen.

Einfache Inhalte und Funktionalitäten sind arguably leicht barrierefrei zu machen — zum Beispiel Text, Bilder, Tabellen, Formulare und Funktion aktivierende Schaltflächen. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erkundet haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Verwenden Sie das richtige Element für die richtige Aufgabe. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}}- und {{htmlelement("a")}}-Elemente verwenden.
- Sicherstellen, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textbeschriftungen für Formularelemente, oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z. B. Alt-Text für Bilder.

Wir haben auch ein Beispiel untersucht, wie JavaScript verwendet werden kann, um Funktionalität zurückzubauen, wo sie fehlt — siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Das ist nicht ideal — eigentlich sollten Sie einfach das richtige Element für die jeweilige Aufgabe verwenden — aber es zeigt, dass es möglich ist, in Situationen, in denen Sie aus irgendeinem Grund das verwendete Markup nicht kontrollieren können. Eine andere Möglichkeit zur Verbesserung der Barrierefreiheit für nicht-semantische, JavaScript-gesteuerte Widgets ist die Verwendung von WAI-ARIA, um zusätzliche Semantik für Bildschirmleser-Benutzer zu bieten. Der nächste Artikel wird dies auch im Detail behandeln.

Komplexe Funktionalität wie 3D-Spiele sind nicht so einfach barrierefrei zu machen — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert, das zu diesem Zeitpunkt keine Funktion hat, um Textalternativen oder andere Informationen für stark sehbehinderte Benutzer bereitzustellen. Es ist argumentierbar, dass ein solches Spiel diese Gruppe von Menschen nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unvernünftig zu erwarten, dass Sie es zu 100% zugänglich für blinde Personen machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es für Nicht-Maus-Benutzer nutzbar ist, und das Farbschema kontrastreich genug gestalten, um für Personen mit Farbdefiziten nutzbar zu sein.

### Das Problem mit zu viel JavaScript

Das Problem entsteht oft, wenn Menschen zu sehr auf JavaScript vertrauen. Manchmal sehen Sie eine Website, bei der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert usw. Dies hat alle möglichen mit Barrierefreiheit und anderen Problemen verbunden, daher wird es nicht empfohlen.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die jeweilige Aufgabe verwenden! Überlegen Sie genau, ob Sie dieses glänzende, JavaScript-gesteuerte 3D-Informationsfenster benötigen, oder ob einfacher Text ausreichen würde. Überlegen Sie genau, ob Sie ein komplexes, nicht standardisiertes Formular-Widget benötigen, oder ob ein Textfeld ausreichen würde. Und generieren Sie nicht alle Ihre HTML-Inhalte mit JavaScript, wenn es irgendwie vermeidbar ist.

### Es unobtrusive gestalten

Sie sollten "**unobtrusive JavaScript**" im Kopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee von unobtrusive JavaScript ist, dass es möglichst zur Erweiterung von Funktionalitäten verwendet werden sollte, nicht um sie vollständig aufzubauen — grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, obwohl dies oft nicht immer eine Option ist. Aber ein Großteil ist wiederum die Nutzung der eingebauten Browser-Funktionalität, wo möglich.

Gute Beispielnutzungen von unobtrusive JavaScript umfassen:

- Bereitstellung von Client-seitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf die Serverüberprüfung der Daten warten zu müssen. Wenn dies nicht verfügbar ist, funktioniert das Formular dennoch, aber die Validierung kann langsamer sein.
- Bereitstellung von benutzerdefinierten Steuerelementen für HTML `<video>`s, die für Tastatur-Benutzer zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die Standardeinstellungen von `<video>` sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnelles und einfaches Client-seitiges Formularvalidierungsbeispiel geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch die [Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern abzusenden, schlägt die Übermittlung fehl, und eine Fehlermeldungsbox erscheint, um Ihnen mitzuteilen, was falsch ist.

Diese Art der Formularvalidierung ist unobtrusive — Sie können das Formular absolut problemlos verwenden, ohne dass JavaScript verfügbar ist, und jede vernünftige Formulardurchführung wird auch serverseitige Validierung aktiv haben, weil es zu einfach für bösartige Benutzer ist, clientseitige Validierung zu umgehen (z. B. indem JavaScript im Browser deaktiviert wird). Die clientseitige Validierung ist dennoch wirklich nützlich, um auf Fehler hinzuweisen — Benutzer können sofort über Fehler informiert werden, anstatt auf eine Server-Rundreise und einen Seitenneuladen warten zu müssen. Dies ist ein eindeutiger Usability-Vorteil.

> [!NOTE]
> Server-seitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich barrierefrei gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularbeschriftungen unmissverständlich mit ihren Eingaben verknüpft sind, sodass Bildschirmleser sie zusammen lesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular abgesendet wird — dies dient dazu, sicherzustellen, dass wir die Benutzeroberfläche nicht zu oft aktualisieren und möglicherweise Bildschirmleser- (und möglicherweise andere) Benutzer verwirren:

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
> In diesem Beispiel verstecken und zeigen wir die Fehlermeldungsbox durch absolute Positionierung anstelle einer anderen Methode wie Sichtbarkeit oder Anzeige, weil es nicht verhindert, dass Bildschirmleser Inhalte daraus lesen können.

Echte Formularvalidierung wäre viel komplexer als dies — Sie würden sicherstellen wollen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch (z. B. nicht negativ und weniger als 4 Ziffern). Hier haben wir einfach eine einfache Überprüfung implementiert, dass ein Wert in jedes Eingabefeld eingetragen wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird das Formular bei bestandener Prüfung übermittelt. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), stoppen wir das Formular vor dem Absenden (mithilfe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)) und zeigen alle Fehlermeldungen an, die erstellt wurden (siehe unten). Dieser Mechanismus bedeutet, dass die Fehler nur angezeigt werden, wenn es Fehler gibt, was besser für die Benutzerfreundlichkeit ist.

Für jedes Eingabefeld, das beim Absenden des Formulars keinen Wert enthält, erstellen wir ein Listenelement mit einem Link und fügen es in das `errorList` ein.

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

Jeder Link hat eine doppelte Funktion — er informiert Sie über den Fehler, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabeelement zu springen und Ihren Eintrag zu korrigieren.

Darüber hinaus wird das `errorField` an den Anfang der Quellreihenfolge platziert (obwohl es in der Benutzeroberfläche durch CSS anders positioniert wird), sodass Benutzer genau herausfinden können, was mit ihren Formulareinsendungen nicht stimmt und zu den betreffenden Eingeschichte-Elementen zurückkehren können, indem sie nach oben zur Seite gehen.

Abschließend haben wir in unserem Demo einige WAI-ARIA-Attribute verwendet, um Barrierefreiheitsprobleme zu lösen, die durch ständig aktualisierte Inhaltsbereich ohne Neuladen der Seite verursacht werden (Bildschirmleser nehmen dies standardmäßig nicht wahr oder benachrichtigen Benutzer nicht):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel detaillierter abdeckt.

> [!NOTE]
> Einige von Ihnen werden wahrscheinlich darüber nachdenken, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `required`, `min`/`minlength` und `max`/`maxlength` Attribute haben (siehe das {{htmlelement("input")}}-Element-Referenz für mehr Informationen). Wir haben diese in der Demo nicht verwendet, weil die Unterstützung über verschiedene Browser hinweg lückenhaft ist (z. B. nur ab IE10).

> [!NOTE]
> WebAIMs [Benutzbare und barrierefreie Formularvalidierung und Fehlerbehebung](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen über barrierefreie Formularvalidierung.

### Andere Bedenken zur JavaScript-Barrierefreiheit

Es gibt andere Dinge, auf die Sie achten sollten, wenn Sie JavaScript implementieren und über Barrierefreiheit nachdenken. Wir werden mehr hinzufügen, wenn wir sie finden.

#### Maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mithilfe von Ereignis-Handlern implementiert, die es uns ermöglichen, Funktionen als Reaktionen auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierefreiheitsprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind Maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalitäten, die als Reaktion auf diese Ereignisse ablaufen, werden nicht zugänglich über andere Mechanismen, wie Tastatursteuerungen.

Um solche Probleme zu mildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen koppeln, die über andere Mittel aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturnutzer bieten.

Schauen wir uns ein Beispiel an, das veranschaulicht, wann dies nützlich sein könnte. Vielleicht möchten wir ein Thumbnail-Bild bereitstellen, das eine größere Version des Bildes zeigt, wenn es übermalt oder fokussiert wird (wie Sie es in einem Produktkatalog eines E-Commerce sehen würden).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html) an). Der Code enthält zwei Funktionen, die das vergrößerte Bild anzeigen und verbergen; diese werden durch die folgenden Zeilen als Ereignis-Handler ausgeführt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über dem Thumbnail schwebt und aufhört zu schweben. Dies wird uns jedoch nicht erlauben, die vergrößerte Ansicht per Tastatur zu erreichen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen enthalten, die die Funktionen ausführen, wenn das Bild fokussiert und verwischt (wenn der Fokus stoppt) wird. Dies kann durch Tabben über das Bild erfolgen, weil wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event) Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser werden [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler aktivieren, nachdem Enter/Return auf einem verlinkten oder Formularelement gedrückt wurde, das den Fokus hat, oder wenn solch ein Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem Ereignis den Fokus mit Tabindex erlauben, das standardmäßig nicht fokussierbar ist — in solchen Fällen müssen Sie genau erkennen, wann diese Taste gedrückt wird (siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).

## Zusammenfassung

Wir hoffen, dass Ihnen dieser Artikel einen guten Einblick in die Barrierefreiheitsaspekte gegeben hat, die mit der Verwendung von CSS und JavaScript auf Webseiten verbunden sind.

Als nächstes steht WAI-ARIA auf dem Programm!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
