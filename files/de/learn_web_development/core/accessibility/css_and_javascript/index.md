---
title: CSS- und JavaScript-Best Practices zur Barrierefreiheit
short-title: Barrierefreies CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript haben das Potenzial, bei richtiger Nutzung barrierefreie Web-Erlebnisse zu ermöglichen, oder sie können bei Missbrauch die Barrierefreiheit erheblich beeinträchtigen. Dieser Artikel erläutert einige CSS- und JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Barrierefreie Schriftgrößen und Layout.</li>
          <li>Farbkontrast.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code>-Stilen.</li>
          <li>Sinnvolle Animationen — Animationen subtil verwenden und Steuerungsmöglichkeiten bieten, um sie auszuschalten.</li>
          <li>Best Practices zur Ausblendung von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Dass es ein Zuviel an JavaScript gibt, und der Wert von unauffälligem JavaScript.</li>
          <li>Ereignisse sinnvoll nutzen, damit Sie keine spezifischen Steuertypen ausschließen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript zugänglich?

CSS und JavaScript haben nicht die gleiche sofortige Bedeutung für die Barrierefreiheit wie HTML, aber sie können je nach Verwendung die Barrierefreiheit unterstützen oder schädigen. Anders ausgedrückt: Es ist wichtig, dass Sie einige Best Practices berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Zugänglichkeit Ihrer Dokumente nicht zerstört.

## CSS

Beginnen wir mit einem Blick auf CSS.

### Korrekte Semantik und Benutzererwartungen

Es ist möglich, CSS zu verwenden, um jedes HTML-Element wie _alles_ aussehen zu lassen, aber das bedeutet nicht, dass Sie es tun sollten. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) häufig erwähnt haben, sollten Sie wann immer möglich das geeignete semantische Element für die jeweilige Aufgabe verwenden. Wenn nicht, kann dies zu Verwirrung und Benutzerfreundlichkeitsproblemen für alle, insbesondere aber für Benutzer mit Behinderungen führen. Korrekte Semantik hat viel mit den Erwartungen der Benutzer zu tun – Elemente sehen in bestimmten Formen aus und verhalten sich auf bestimmte Weisen gemäß ihrer Funktionalität, und diese konventionellen Erwartungen sind den Benutzern bekannt.

Ein Beispiel: Ein Screenreader-Benutzer kann nicht über Heading-Elemente auf einer Seite navigieren, wenn der Entwickler die Inhalte nicht korrekt mit Heading-Elementen ausgezeichnet hat. Ebenso verliert ein Heading seinen visuellen Zweck, wenn Sie es so stylen, dass es nicht wie ein Heading aussieht.

Fazit: Sie können das Styling eines Seitenfeatures an Ihr Design anpassen, aber nicht so stark ändern, dass es nicht mehr wie erwartet aussieht oder funktioniert. Die folgenden Abschnitte fassen die wichtigsten HTML-Features zusammen, die zu beachten sind.

#### "Standard"-Textinhaltsstruktur

Überschriften, Absätze, Listen – der Kerntextinhalt Ihrer Seite:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

Typische CSS könnte folgendermaßen aussehen:

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

- Sinnvolle Schriftgrößen, Zeilenhöhen, Buchstabensperrung etc. auswählen, damit Ihr Text logisch, lesbar und bequem zu lesen ist.
- Stellen Sie sicher, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standard-Styling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte sich gut von der Hintergrundfarbe abheben.

Weitere Informationen finden Sie unter [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling).

#### Hervorgehobener Text

Inline-Markup, das dem umschlossenen Text eine spezifische Betonung verleiht:

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

Sie werden jedoch nur selten betonen, dass Elemente auf eine bedeutende Weise stilisiert werden müssen. Die Standardkonventionen von fettem und kursivem Text sind sehr erkennbar, und eine Änderung des Stils kann zu Verwirrung führen. Weitere Informationen zur Betonung finden Sie unter [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das eine Abkürzung, ein Akronym oder eine Initialisierung mit seiner Entfaltung verbindet:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Möglicherweise möchten Sie es auf einfache Weise stylen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gepunktete Unterstreichung und es ist unklug, davon wesentlich abzuweichen. Weitere Informationen zu Abkürzungen finden Sie unter [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks – der Weg zu neuen Orten im Web:

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

Ein einfaches Link-Styling sieht folgendermaßen aus:

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

Die Standardlinkkonventionen sind unterstrichen und in ihrem Standardzustand eine andere Farbe (Standard: blau), eine andere Farbvariation, wenn der Link bereits besucht wurde (Standard: lila), und wiederum eine andere Farbe, wenn der Link aktiviert ist (Standard: rot). Zusätzlich ändert sich der Mauszeiger zu einem Zeiger-Symbol, wenn Links übermoused werden, und der Link erhält eine Hervorhebung, wenn er fokussiert (z.B. über Tabulator) oder aktiviert wird. Das folgende Bild zeigt die Hervorhebung sowohl in Firefox (eine gepunktete Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist hervorgehoben mit einer blauen gepunkteten Umrandung, wenn es über tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement ist hervorgehoben mit einer blauen Umrandung, wenn es über tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können mit Link-Stilen kreativ sein, solange Sie den Benutzern Rückmeldungen geben, wenn sie mit den Links interagieren. Etwas sollte definitiv passieren, wenn sich die Zustände ändern, und Sie sollten weder den Zeiger-Cursor noch die Outline entfernen — beide sind sehr wichtige Hilfen für die Barrierefreiheit für diejenigen, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Gute Beispiel-CSS finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([siehe live](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

Das meiste CSS, das Sie für Formulare schreiben, wird dazu dienen, die Elemente zu dimensionieren, Labels und Eingaben auszurichten und sie ordentlich aussehen zu lassen.

Sie sollten jedoch nicht zu sehr von der erwarteten visuellen Rückmeldung abweichen, die Formularelemente erhalten, wenn sie fokussiert sind, was im Wesentlichen dasselbe wie Links ist (siehe oben). Sie könnten die Fokus-/Hover-Zustände der Formulare gestalten, um diese optische Rückmeldung über Browser hinweg konsistenter zu gestalten oder sie besser an Ihr Seitendesign anzupassen, aber Sie sollten sie nicht komplett weglassen — wieder verlassen sich Leute auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML und CSS in einer Tabelle finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel ([siehe auch live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Table CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzupassen und weniger hässlich erscheinen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise mit Fett), und Zebra-Streifen zu verwenden, um verschiedene Reihen leichter analysierbar zu machen.

### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website, stellen Sie sicher, dass die Text(foreground)-Farbe sich gut vom Hintergrund abhebt. Ihr Design mag cool aussehen, aber es ist nicht gut, wenn Personen mit Sehbeeinträchtigungen wie Farbenblindheit Ihre Inhalte nicht lesen können.

Es gibt einen einfachen Weg, zu überprüfen, ob Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Kontrastprüfung, in die Sie Ihre Vorder- und Hintergrundfarben eingeben können, um sie zu überprüfen. Zum Beispiel ist der [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM einfach zu bedienen und bietet eine Erklärung dessen, was Sie benötigen, um die WCAG-Kriterien bezüglich Farbkontrast zu erfüllen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten leichter in einer hellen Umgebung, wie Sonnenlicht, zu lesen.

Ein weiterer Tipp ist, sich nicht ausschließlich auf Farbe für Wegweiser/Informationen zu verlassen, da das für diejenigen sinnlos ist, die die Farbe nicht sehen können. Anstatt zum Beispiel erforderliche Formularfelder rot zu markieren, kennzeichnen Sie diese mit einem Sternchen und in Rot.

### Dinge verbergen

Es gibt viele Situationen, in denen das visuelle Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel in unserem [Tabbed Info Box Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Informationspanels, aber wir positionieren sie übereinander und bieten klickbare Tabs, um jedes einzelne anzuzeigen (es ist auch tastaturzugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Drei-Tab-Oberfläche mit Tab 1 ausgewählt und nur dessen Inhalt wird angezeigt. Der Inhalt anderer Tabs ist verborgen. Wenn ein Tab ausgewählt wird, wechselt seine Textfarbe von schwarz zu weiß und die Hintergrundfarbe von rot-orange zu sattelbraun.](tabbed-info-box.png)

Nutzer von Screenreadern kümmern sich nicht um all das — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie auf alles zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird allgemein als einer der besten Mechanismen angesehen, um Inhalte für visuelle Effekte zu verstecken, da er Screenreadern nicht den Zugriff darauf verweigert.

Andererseits sollten Sie nicht {{cssxref("visibility", "sichtbarkeit: versteckt")}} oder {{cssxref("display", "Anzeige: keine")}} verwenden, da diese Inhalte vor Screenreadern verbergen. Es sei denn, es gibt einen triftigen Grund, warum Sie möchten, dass dieser Inhalt auch vor Screenreadern verborgen ist.

> [!NOTE]
> [Unsichtbarer Inhalt nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/) hat viele weitere nützliche Details zu diesem Thema.

### Akzeptieren Sie, dass Benutzer Stile überschreiben können

Es ist möglich, dass Benutzer Ihre Styles mit ihren eigenen benutzerdefinierten Stilen überschreiben, z.B.:

- Sarah Maddoxs [Anleitung zur Verwendung eines benutzerdefinierten Style Sheets (CSS) mit Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) bietet einen nützlichen Leitfaden, wie Sie dies manuell in Firefox tun können.
- Wahrscheinlich ist es einfacher, dies mit einer Erweiterung zu tun. Zum Beispiel ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)-Äquivalent ist.

Benutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Benutzer könnte die Schrift auf allen besuchten Websites größer machen wollen, oder ein Benutzer mit starker Farbsehschwäche könnte alle Websites in Farben mit hohem Kontrast darstellen, die für ihn leicht zu sehen sind. Was auch immer der Grund, Sie sollten damit einverstanden sein und Ihr Design flexibel genug gestalten, damit solche Änderungen auch in Ihr Design passen. Als Beispiel könnten Sie sicherstellen, dass Ihr Hauptinhaltsbereich mit größerem Text umgehen kann (vielleicht wird er beginnen zu scrollen, um alles sichtbar zu machen) und nicht einfach verborgen wird oder komplett kaputt geht.

## JavaScript

JavaScript kann ebenso die Barrierefreiheit beeinträchtigen, je nach Verwendung.

Modernes JavaScript ist eine mächtige Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollwertigen 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100% für alle Menschen zugänglich sein müssen — Sie müssen nur tun, was Sie können, und Ihre Anwendungen so zugänglich wie möglich machen.

Einfacher Inhalt und Funktionalität sind wohl einfach zugänglich zu machen — zum Beispiel Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) besprochen haben, sind die wichtigsten Überlegungen:

- Gute Semantik: Verwenden Sie das richtige Element für die richtige Aufgabe. Zum Beispiel, stellen Sie sicher, dass Sie Überschriften und Absätze sowie {{htmlelement("button")}}- und {{htmlelement("a")}}-Elemente verwenden.
- Stellen Sie sicher, dass Inhalte als Text verfügbar sind, entweder direkt als Textinhalt, gute Textlabels für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z.B. Alt-Text für Bilder.

Wir haben uns auch ein Beispiel angesehen, wie man mit JavaScript Funktionalität einbauen kann, wo sie fehlt — siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Das ist nicht ideal — eigentlich sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden — aber es zeigt, dass es möglich ist, wenn aus irgendeinem Grund das verwendete Markup nicht kontrolliert werden kann. Ein weiterer Weg, die Zugänglichkeit nicht-semantischer JavaScript-gesteuerter Widgets zu verbessern, ist die Verwendung von WAI-ARIA, um zusätzliche Semantik für Screenreader-Benutzer bereitzustellen. Der nächste Artikel wird dies ebenfalls im Detail behandeln.

Komplexe Funktionalität wie 3D-Spiele sind nicht so einfach zugänglich zu machen — ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}}-Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen für schwer sehbehinderte Benutzer bereitzustellen. Es kann argumentiert werden, dass ein solches Spiel diese Benutzergruppe nicht als Hauptzielgruppe hat, und es wäre unzumutbar, von Ihnen zu erwarten, dass es zu 100% für blinde Menschen zugänglich ist. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nutzern ohne Maus bedienbar ist, und das Farbschema so gestaltet sein, dass es kontrastreich genug ist, um von Menschen mit Farbsehschwächen genutzt zu werden.

### Das Problem mit zu viel JavaScript

Das Problem tritt oft auf, wenn Leute sich zu sehr auf JavaScript verlassen. Manchmal sieht man eine Website, auf der alles mit JavaScript gemacht wurde — das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert, usw. Dies ist mit allerlei Barrierefreiheits- und anderen Problemen verbunden und daher nicht ratsam.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Denken Sie sorgfältig darüber nach, ob Sie dieses glänzende, mit JavaScript betriebene 3D-Informationsfeld wirklich benötigen oder ob einfacher Text ausreicht. Überlegen Sie genau, ob Sie ein komplexes, nicht standardmäßiges Formular-Widget benötigen oder ob ein Texteingabefeld ausreichen würde. Und erzeugen Sie nicht alle Ihre HTML-Inhalte mithilfe von JavaScript, wenn immer möglich.

### Unauffällig bleiben

Sie sollten **unauffälliges JavaScript** im Hinterkopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee des unauffälligen JavaScript ist, dass es überall dort eingesetzt werden sollte, um Funktionalität zu verbessern, nicht um sie vollständig zu integrieren — grundlegende Funktionen sollten idealerweise auch ohne JavaScript funktionieren, auch wenn dies nicht immer möglich ist. Aber auch hier spielt die Verwendung der eingebauten Browserfunktionalität eine große Rolle.

Gute Anwendungsbeispiele für unauffälliges JavaScript sind:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf die Prüfung der Daten durch den Server warten zu müssen. Ist dies nicht verfügbar, funktioniert das Formular dennoch, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerungen für HTML-`<video>`s, die auch für nur-Tastatur-Nutzer zugänglich sind, zusammen mit einem direkten Link zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die standardmäßigen `<video>`-Browsersteuerungen sind in den meisten Browsern nicht über die Tastatur zugänglich).

Als Beispiel haben wir ein schnelles und einfaches clientseitiges Formularvalidierungsbeispiel geschrieben — siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch die [Live-Demo](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern einzureichen, schlägt die Einreichung fehl, und eine Fehlermeldungsbox erscheint, um Ihnen anzuzeigen, was falsch ist.

Diese Art der Formularvalidierung ist unauffällig — Sie können das Formular immer noch problemlos verwenden, auch wenn JavaScript nicht verfügbar ist, und jede sinnvolle Formulumsetzung wird auch eine serverseitige Validierung aktiv haben, da es zu einfach ist, clientseitige Validierung zu umgehen (zum Beispiel durch Ausschalten von JavaScript im Browser). Die clientseitige Validierung ist dennoch wirklich nützlich für die Fehlermeldung — Benutzer können sofort über Fehler informiert werden, anstatt auf eine Serverrückmeldung und eine Seitenaktualisierung warten zu müssen. Das ist ein definitiver Vorteil in Bezug auf Benutzerfreundlichkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich zugänglich gemacht. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularlabels unmissverständlich mit ihren Eingaben verbunden sind, sodass Screenreader sie zusammen mit dem Eingabefeld vorlesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Die Validierung wird nur beim Absenden des Formulars durchgeführt — dies dient dazu, die Benutzeroberfläche nicht zu oft zu aktualisieren und mögliche Verwirrung bei Screenreader-Benutzern (und möglicherweise anderen) zu vermeiden:

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
> In diesem Beispiel verbergen und zeigen wir die Fehlermeldungsbox durch absolute Positionierung anstelle einer anderen Methode wie Sichtbarkeit oder Anzeige, weil dies den Screenreader nicht daran hindert, Inhalte daraus zu lesen.

Echte Formularvalidierung wäre viel komplexer als diese — Sie würden prüfen wollen, ob der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z.B. nicht negativ und weniger als 4 Ziffern). Hier haben wir nur eine einfache Überprüfung implementiert, dass in jedes Eingabefeld ein Wert eingefügt wurde (`if (testItem.input.value === '')`).

Wenn die Validierung durchgeführt wurde, wird das Formular gesendet, wenn die Tests bestanden werden. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), verhindern wir das Absenden des Formulars (mithilfe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus stellt sicher, dass die Fehler nur angezeigt werden, wenn tatsächlich welche vorhanden sind, was die Benutzerfreundlichkeit verbessert.

Für jedes Eingabefeld, das beim Absenden des Formulars keinen Wert hat, erstellen wir eine Listenposition mit einem Link und fügen ihn in die `errorList` ein.

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

Jeder Link dient einem doppelten Zweck — er teilt Ihnen mit, was der Fehler ist, und Sie können darauf klicken/den Link aktivieren, um direkt auf das betroffene Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Darüber hinaus ist das `errorField` an die oberste Stelle der Quellreihenfolge gesetzt (auch wenn es im UI anders positioniert wird mittels CSS), was bedeutet, dass Benutzer genau herausfinden können, was mit ihren Formulareinreichungen falsch ist und zu den betroffenen Eingabeelementen gelangen, indem sie zur Startseite zurückkehren.

Als abschließende Bemerkung haben wir einige WAI-ARIA-Attribute in unser Demo eingebaut, um Barrierefreiheitsprobleme zu lösen, die durch ständig aktualisierte Inhaltsbereiche ohne Seitenaktualisierung verursacht werden (Screenreader nehmen das standardmäßig nicht auf oder weisen Benutzer darauf hin):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute im nächsten Artikel erklären, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) im Detail behandelt.

> [!NOTE]
> Einige von Ihnen denken wahrscheinlich über die Tatsache nach, dass HTML-Formulare eingebaute Validierungsmechanismen wie die `erforderlich`, `min`/`minlänge` und `max`/`maxlänge`-Attribute haben (siehe das {{htmlelement("input")}}-Element-Referenz für weitere Informationen). Wir haben diese im Demo nicht verwendet, da die Unterstützung über die Browser hinweg nicht einheitlich ist (zum Beispiel nur in IE10 und höher).

> [!NOTE]
> WebAIMs [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet weitere nützliche Informationen zur barrierefreien Formularvalidierung.

### Andere JavaScript-Barrierefreiheitsbedenken

Es gibt andere Dinge, die bei der Implementierung von JavaScript und dem Nachdenken über Barrierefreiheit zu beachten sind. Wir werden mehr hinzufügen, sobald wir sie finden.

#### Maus-spezifische Ereignisse

Wie Ihnen bekannt ist, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript mithilfe von Ereignishandlern implementiert, die uns erlauben, Funktionen als Antwort auf bestimmte Ereignisse auszuführen. Einige Ereignisse können bezüglich Barrierefreiheit problematisch sein. Das Hauptbeispiel, dem Sie begegnen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalität, die als Reaktion auf diese Ereignisse ausgeführt wird, wird nicht über andere Mechanismen wie Tastatursteuerungen zugänglich sein.

Um solche Probleme zu mindern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen kombinieren, die auf andere Art aktiviert werden können (sogenannte geräteunabhängige Ereignishandler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Zugänglichkeit für Tastaturbenutzer bieten.

Sehen wir uns ein Beispiel an, das zeigt, wann dies nützlich sein könnte. Vielleicht möchten wir ein Thumbnail-Bild bereitstellen, das eine größere Version des Bildes zeigt, wenn es übermoused oder fokussiert wird (so wie du es auf einem E-Commerce-Produktkatalog sehen würdest).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das gezoomte Bild zeigen und verbergen; diese werden durch die folgenden Zeilen, die sie als Ereignishandler setzen, ausgeführt:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über oder nicht mehr über dem Thumbnail schwebt. Dies wird es uns jedoch nicht erlauben, die gezoomte Ansicht per Tastatur zuzugreifen — um dies zu ermöglichen, haben wir die letzten beiden Zeilen hinzugefügt, die die Funktionen ausführen, wenn das Bild fokussiert oder abgebrochen wird (wenn der Fokus aufhört). Dies kann durch Überfliegen des Bildes geschehen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant — es klingt mausabhängig, aber die meisten Browser werden [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler aktivieren, nachdem Enter/Return auf einem Link oder Formularelement, das den Fokus hat, gedrückt wurde, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch standardmäßig nicht, wenn Sie einem nicht-standardmäßig fokussierbaren Ereignis mit tabindex den Fokus erlauben — in solchen Fällen müssen Sie speziell erkennen, wenn genau diese Taste gedrückt wird (siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen eine gute Menge an Details und Verständnis über die Barrierefreiheitsprobleme bei der Verwendung von CSS und JavaScript auf Webseiten gegeben hat.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
