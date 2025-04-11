---
title: CSS und JavaScript Barrierefreiheit Best Practices
short-title: Barrierefreie CSS und JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

CSS und JavaScript haben, wenn sie richtig eingesetzt werden, das Potenzial, barrierefreie Web-Erfahrungen zu ermöglichen oder sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch eingesetzt werden. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so barrierefrei wie möglich sind.

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
          <li>Farbkontraste.</li>
          <li>Die Bedeutung von <code>:focus</code> und <code>:hover</code> Stilen.</li>
          <li>Sinnvolle Verwendung von Animationen – verwenden Sie Animationen subtil und bieten Sie Steuerungsmöglichkeiten, um sie abzuschalten.</li>
          <li>Best Practices zum Ausblenden von Inhalten, damit sie nicht unzugänglich werden.</li>
          <li>Dass es so etwas wie zu viel JavaScript gibt und der Wert von unobtrusivem JavaScript.</li>
          <li>Sensible Verwendung von Ereignissen, damit Sie keine bestimmten Steuerungstypen ausgrenzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sind CSS und JavaScript barrierefrei?

CSS und JavaScript haben nicht die gleiche unmittelbare Bedeutung für die Barrierefreiheit wie HTML, aber sie können dennoch die Barrierefreiheit unterstützen oder beeinträchtigen, abhängig davon, wie sie verwendet werden. Anders ausgedrückt, es ist wichtig, einige Best-Practice-Ratschläge zu berücksichtigen, um sicherzustellen, dass Ihre Verwendung von CSS und JavaScript die Barrierefreiheit Ihrer Dokumente nicht beeinträchtigt.

## CSS

Lassen Sie uns mit CSS beginnen.

### Korrekte Semantik und Benutzererwartungen

Es ist möglich, mit CSS jedes HTML-Element wie _irgendetwas_ aussehen zu lassen, aber das bedeutet nicht, dass Sie das tun sollten. Wie wir häufig in unserem Artikel [HTML: Eine gute Grundlage für die Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) erwähnt haben, sollten Sie wann immer möglich das passende semantische Element für die jeweilige Aufgabe verwenden. Wenn Sie dies nicht tun, kann es zu Verwirrung und Benutzbarkeitsproblemen für alle führen, insbesondere aber für Nutzer mit Behinderungen. Die Verwendung korrekter Semantik hat viel mit den Erwartungen der Benutzer zu tun – Elemente sehen entsprechend ihrer Funktionalität aus und verhalten sich in bestimmter Weise, und diese allgemeinen Konventionen werden von den Benutzern erwartet.

Ein Beispiel: Ein Bildschirmleser-Nutzer kann nicht über Überschriftselemente auf einer Seite navigieren, wenn der Entwickler nicht angemessen Überschriftselemente verwendet hat, um den Inhalt zu markieren. Ebenso verliert eine Überschrift ihren visuellen Zweck, wenn Sie sie so stylen, dass sie nicht wie eine Überschrift aussieht.

Kurz gesagt, Sie können das Styling eines Seitenfeatures an Ihr Design anpassen, aber ändern Sie es nicht so sehr, dass es nicht mehr so aussieht oder sich nicht mehr so verhält, wie erwartet. Die folgenden Abschnitte fassen die wichtigsten HTML-Features zusammen, die berücksichtigt werden sollten.

#### Struktur "standardmäßiger" Textinhalte

Überschriften, Absätze, Listen – der Kerntextinhalt Ihrer Seite:

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

- Sinnvolle Schriftgrößen, Zeilenabstände, Buchstabenabstände usw. auswählen, um Ihren Text logisch, lesbar und angenehm lesbar zu machen.
- Stellen Sie sicher, dass Ihre Überschriften sich von Ihrem Fließtext abheben, typischerweise groß und fett wie das Standardstyling. Ihre Listen sollten wie Listen aussehen.
- Ihre Textfarbe sollte gut mit Ihrer Hintergrundfarbe kontrastieren.

Siehe [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) und [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling) für weitere Informationen.

#### Hervorgehobener Text

Inline-Markup, das dem umschlossenen Text eine besondere Betonung verleiht:

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

Sie werden jedoch selten den Bedarf haben, Betonungselemente in bedeutender Weise zu stylen. Die Standardkonventionen von fettem und kursivem Text sind sehr erkennbar, und eine Änderung des Stils kann Verwirrung stiften. Für mehr Informationen zur Hervorhebung siehe [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abkürzungen

Ein Element, das es ermöglicht, einer Abkürzung, einem Akronym oder einer Initialisierung ihre Entfaltung zuzuordnen:

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

Auch hier möchten Sie es vielleicht auf einfache Weise stylen:

```css
abbr {
  color: #a60000;
}
```

Die anerkannte Stilkonvention für Abkürzungen ist eine gestrichelte Unterstreichung, und es ist nicht ratsam, davon deutlich abzuweichen. Für mehr über Abkürzungen siehe [Abkürzungen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations).

#### Links

Hyperlinks – mit ihnen gelangen Sie zu neuen Orten im Web:

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

Die Standardlink-Konventionen sind unterstrichen und eine andere Farbe (Standard: Blau) im Standardzustand, eine weitere Farbvariation, wenn der Link zuvor besucht wurde (Standard: Lila), und wiederum eine andere Farbe, wenn der Link aktiviert ist (Standard: Rot). Darüber hinaus ändert sich der Mauszeiger in ein Zeiger-Icon, wenn Links überfahren werden, und der Link wird hervorgehoben, wenn er fokussiert (z.B. durch Tabben) oder aktiviert wird. Die folgende Abbildung zeigt die Hervorhebung sowohl in Firefox (eine gestrichelte Umrandung) als auch in Chrome (eine blaue Umrandung):

![Screenshot einer Liste von Links im Firefox-Browser. Die Liste enthält 4 Elemente. Das zweite Listenelement ist mit einer blauen gestrichelten Umrandung hervorgehoben, wenn es durch Tabben fokussiert wird.](focus-highlight-firefox.png)

![Screenshot einer Liste von Links im Chrome-Browser. Die Liste enthält 4 Elemente. Das dritte Listenelement ist mit einer blauen Umrandung hervorgehoben, wenn es durch Tabben fokussiert wird.](focus-highlight-chrome.png)

Sie können kreativ mit Linkstilen sein, solange Sie den Benutzern Rückmeldungen geben, wenn sie mit den Links interagieren. Es sollte definitiv etwas passieren, wenn sich Zustände ändern, und Sie sollten den Zeiger-Cursor oder die Umrandung nicht entfernen – beide sind sehr wichtige Hilfsmittel für die Barrierefreiheit von Nutzern, die Tastatursteuerungen verwenden.

#### Formularelemente

Elemente, die es Benutzern ermöglichen, Daten in Websites einzugeben:

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

Ein gutes Beispiel für CSS in Formularen finden Sie in unserem [form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/css/form-css.html) auch).

Der Großteil des CSS, das Sie für Formulare schreiben, wird für die Größenanpassung der Elemente, das Ausrichten von Labels und Eingabefeldern und den ordentlichen und sauberen Look verwendet.

Sie sollten jedoch nicht zu sehr von der erwarteten visuellen Rückmeldung für Formularelemente abweichen, wenn sie fokussiert sind, was im Wesentlichen dasselbe ist wie bei Links (siehe oben). Sie könnten die Fokus-/Hover-Zustände von Formularen so stylen, dass dieses Verhalten plattformübergreifend konsistenter ist oder besser in Ihr Seitendesign passt, aber entfernen Sie es nicht vollständig – erneut verlassen sich Nutzer auf diese Hinweise, um zu wissen, was vor sich geht.

#### Tabellen

Tabellen zur Darstellung tabellarischer Daten.

Ein gutes, einfaches Beispiel für HTML- und CSS-Tabellen finden Sie in unserem [table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) Beispiel (auch [siehe es live](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Table-CSS dient im Allgemeinen dazu, die Tabelle besser in Ihr Design einzupassen und weniger unschön aussehen zu lassen. Es ist eine gute Idee, sicherzustellen, dass die Tabellenüberschriften hervorstechen (normalerweise mit fett) und ein Streifendesign verwenden, um unterschiedliche Zeilen leichter zu parsen.

### Farbe und Farbkontrast

Wenn Sie ein Farbschema für Ihre Website wählen, stellen Sie sicher, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Menschen mit Seheinschränkungen wie Farbenblindheit Ihren Inhalt nicht lesen können.

Es gibt einen einfachen Weg, um sicherzustellen, dass Ihr Kontrast groß genug ist, um keine Probleme zu verursachen. Es gibt eine Reihe von Online-Tools zur Kontrastüberprüfung, in die Sie Ihre Vorder- und Hintergrundfarben eingeben können, um sie zu überprüfen. Beispielsweise ist WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) einfach zu verwenden und bietet eine Erklärung dazu, was Sie benötigen, um die WCAG-Kriterien hinsichtlich Farbkontrast zu erfüllen.

> [!NOTE]
> Ein hohes Kontrastverhältnis ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung wie Sonnenlicht befindet.

Ein weiterer Tipp ist, nicht nur auf Farbe für Wegweiser/Informationen zu setzen, da dies für diejenigen, die die Farbe nicht sehen können, nicht nützlich ist. Statt rote Felder als erforderliche Formularfelder zu markieren, markieren Sie sie durch ein Sternchen und in Rot.

### Dinge verstecken

Es gibt viele Instanzen, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel in unserem [Reiter-Informationsfeld](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe auch [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Informationsbereiche, positionieren sie jedoch aufeinander und bieten Tabs an, die geklickt werden können, um jeden anzuzeigen (es ist auch tastaturzugänglich – Sie können alternativ auch Tab und Eingabe/Return verwenden, um sie auszuwählen).

![Dreifach-Reiter-Benutzeroberfläche mit Reiter 1 ausgewählt und nur dessen Inhalt wird angezeigt. Die Inhalte der anderen Reiter sind verborgen. Wenn ein Reiter ausgewählt wird, ändert sich dessen Textfarbe von Schwarz zu Weiß und die Hintergrundfarbe von Orangerot zu Sattbraun.](tabbed-info-box.png)

Bildschirmleser-Nutzer interessiert das nicht – sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist, und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als eines der besten Mechanismen zum Verstecken von Inhalten für visuelle Effekte angesehen, weil es nicht verhindert, dass Bildschirmleser darauf zugreifen können.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, da sie Inhalte vor Bildschirmlesern verbergen. Natürlich sei denn, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Bildschirmlesern verborgen bleibt.

> **Hinweis:** [Unsichtbarer Inhalt nur für Bildschirmleser-Nutzer](https://webaim.org/techniques/css/invisiblecontent/) bietet viele weitere nützliche Details zu diesem Thema.

### Akzeptieren, dass Nutzer Stile überschreiben können

Es ist möglich für Nutzer, Ihre Stile mit ihren eigenen benutzerdefinierten Stilen zu überschreiben, z. B.:

- Siehe Sarah Maddox's [Wie man ein benutzerdefiniertes Stylesheet (CSS) mit Firefox verwendet](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) für eine hilfreiche Anleitung, wie man dies manuell in Firefox durchführt.
- Wahrscheinlich ist es einfacher, dies über eine Erweiterung zu tun. Beispielsweise ist die Stylus-Erweiterung für [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) verfügbar, während Stylish ein [Chrome](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) Pendant ist.

Nutzer könnten dies aus verschiedenen Gründen tun. Ein sehbehinderter Nutzer könnte den Text auf allen von ihm besuchten Websites größer machen wollen oder ein Nutzer mit starker Farbenblindheit könnte alle Websites in einem kontrastreichen Farbschema anzeigen wollen, das für ihn leicht zu sehen ist. Was auch immer das Bedürfnis ist, Sie sollten damit einverstanden sein und Ihre Designs so flexibel gestalten, dass solche Änderungen in Ihrem Design funktionieren. Beispielsweise sollten Sie sicherstellen, dass Ihr Hauptinhaltsbereich größere Texte verarbeiten kann (vielleicht beginnt er zu scrollen, um alles anzuzeigen) und nicht einfach versteckt wird oder komplett bricht.

## JavaScript

JavaScript kann auch die Barrierefreiheit beeinträchtigen, abhängig davon, wie es verwendet wird.

Moderne JavaScript ist eine leistungsstarke Sprache, und wir können heutzutage so viel damit machen, von einfachen Inhalts- und UI-Updates bis hin zu vollständig entwickelten 2D- und 3D-Spielen. Es gibt keine Regel, die besagt, dass alle Inhalte zu 100% für alle Personen zugänglich sein müssen – Sie müssen nur tun, was Sie können, und Ihre Apps so barrierefrei wie möglich machen.

Einfache Inhalte und Funktionalitäten sind zweifellos leicht barrierefrei zu machen – zum Beispiel Text, Bilder, Tabellen, Formulare und Schaltflächen, die Funktionen aktivieren. Wie wir in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) gezeigt haben, sind die Hauptüberlegungen:

- Gute Semantik: Verwenden des richtigen Elements für die richtige Aufgabe. Zum Beispiel sicherstellen, dass Sie Überschriften und Absätze verwenden sowie {{htmlelement("button")}} und {{htmlelement("a")}} Elemente.
- Sicherstellen, dass der Inhalt als Text verfügbar ist, entweder direkt als Textinhalt, gute Textlabels für Formularelemente oder [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), z. B. Alt-Text für Bilder.

Wir haben uns auch ein Beispiel angesehen, wie man mit JavaScript Funktionalität aufbauen kann, wo sie fehlt – siehe [Eingabetastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in). Dies ist nicht ideal – im Grunde sollten Sie einfach das richtige Element für die richtige Aufgabe verwenden –, aber es zeigt, dass es möglich ist in Situationen, in denen Sie aus irgendeinem Grund das Markup nicht kontrollieren können. Eine andere Möglichkeit zur Verbesserung der Barrierefreiheit für nicht-semantische, JavaScript-gesteuerte Widgets besteht darin, WAI-ARIA zu verwenden, um zusätzliche Semantik für Bildschirmleser-Benutzer bereitzustellen. Der nächste Artikel behandelt dies ebenfalls im Detail.

Komplexe Funktionalitäten wie 3D-Spiele sind nicht so einfach barrierefrei zu machen – ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Web/API/WebGL_API) erstellt wurde, wird auf einem {{htmlelement("canvas")}} Element gerendert, das derzeit keine Möglichkeit bietet, Textalternativen oder andere Informationen bereitzustellen, die von stark sehbehinderten Nutzern verwendet werden können. Es ist durchaus möglich, dass ein solches Spiel diese Nutzergruppe nicht wirklich als Teil seiner Hauptzielgruppe hat, und es wäre unangemessen, zu erwarten, dass Sie es zu 100% für blinde Menschen zugänglich machen. Sie könnten jedoch [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, um es für Nutzer ohne Maus funktionsfähig zu machen, und das Farbschema kontrastreich genug gestalten, um von Menschen mit Farbfehlsichtigkeit genutzt werden zu können.

### Das Problem mit zu viel JavaScript

Das Problem tritt häufig auf, wenn Menschen zu sehr auf JavaScript vertrauen. Manchmal sehen Sie eine Website, auf der alles mit JavaScript gemacht wurde – das HTML wurde von JavaScript generiert, das CSS wurde von JavaScript generiert usw. Dies ist mit vielen Problemen in Bezug auf Barrierefreiheit und andere Aspekte verbunden, weshalb es nicht empfohlen wird.

Neben der Verwendung des richtigen Elements für die richtige Aufgabe sollten Sie auch sicherstellen, dass Sie die richtige Technologie für die richtige Aufgabe verwenden! Denken Sie sorgfältig darüber nach, ob Sie dieses schicke, JavaScript-gesteuerte 3D-Informationsfeld wirklich benötigen oder ob einfacher Text ausreichen würde. Überlegen Sie sorgfältig, ob Sie ein komplexes, nicht standardisiertes Formularwidget benötigen oder ob ein Texteingabefeld genügen würde. Und generieren Sie keinesfalls all Ihr HTML-Inhalte mithilfe von JavaScript, wenn dies möglich ist.

### Es unaufdringlich halten

Sie sollten das Konzept des **unaufdringlichen JavaScript** im Kopf behalten, wenn Sie Ihre Inhalte erstellen. Die Idee des unaufdringlichen JavaScript besteht darin, dass es möglichst zur Verbesserung der Funktionalität und nicht zum vollständigen Aufbau dieser genutzt werden sollte – grundlegende Funktionen sollten idealerweise ohne JavaScript funktionieren, auch wenn dies nicht immer möglich ist. Aber wieder einmal ist ein großer Teil davon, eingebaute Browserfunktionalität dort zu verwenden, wo sie möglich ist.

Gute Beispiele für unaufdringliches JavaScript umfassen:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen hinweist, ohne auf die Überprüfung der Daten durch den Server warten zu müssen. Wenn diese Funktion nicht verfügbar ist, funktioniert das Formular weiterhin, allerdings könnte die Validierung langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML `<video>`s, die für Tastaturbenutzer zugänglich sind, sowie eines direkten Links zum Video, der verwendet werden kann, um darauf zuzugreifen, wenn JavaScript nicht verfügbar ist (die standardmäßigen `<video>`-Browsersteuerelemente sind in den meisten Browsern nicht tastaturzugänglich).

Als Beispiel haben wir ein schnelles und einfaches Beispiel für die clientseitige Formularvalidierung geschrieben – siehe [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (siehe auch [dem Demo live](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Hier sehen Sie ein einfaches Formular; wenn Sie versuchen, das Formular mit einem oder beiden leeren Feldern zu senden, schlägt das Absenden fehl, und es erscheint ein Fehlernachrichtenfeld, das Ihnen mitteilt, was falsch ist.

Diese Art der Formularvalidierung ist unaufdringlich – Sie können das Formular weiterhin problemlos nutzen, falls JavaScript nicht verfügbar ist, und jede vernünftige Formularumsetzung wird auch eine serverseitige Validierung aktiv haben, weil es zu einfach für böswillige Nutzer ist, die clientseitige Validierung zu umgehen (zum Beispiel, indem JavaScript im Browser deaktiviert wird). Die clientseitige Validierung ist dennoch sehr nützlich für die Fehlerberichterstattung – Nutzer können sofort über von ihnen gemachte Fehler informiert werden, anstatt auf eine Rückmeldung des Servers und eine Seitenaktualisierung warten zu müssen. Dies ist ein klarer Vorteil in Sachen Benutzbarkeit.

> [!NOTE]
> Serverseitige Validierung wurde in diesem einfachen Demo nicht implementiert.

Wir haben diese Formularvalidierung auch ziemlich barrierefrei gestaltet. Wir haben {{htmlelement("label")}}-Elemente verwendet, um sicherzustellen, dass die Formularlabels eindeutig mit ihren Eingabefeldern verknüpft sind, sodass Bildschirmlesegeräte sie zusammen mit ihren zugehörigen Eingaben lesen können:

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

Wir führen die Validierung nur durch, wenn das Formular abgeschickt wird – dies dient dazu, dass wir die Benutzeroberfläche nicht zu häufig aktualisieren und möglicherweise Bildschirmleser (und möglicherweise auch andere) Benutzer verwirren:

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
> In diesem Beispiel blenden wir die Fehlernachrichtenbox mithilfe der absoluten Positionierung aus und ein, statt einer anderen Methode, wie Sichtbarkeit oder Anzeige, zu verwenden, weil dies den Bildschirmleser nicht daran hindert, deren Inhalt zu lesen.

Echte Formularvalidierung wäre viel komplexer als dies – Sie würden sicherstellen wollen, dass der eingegebene Name tatsächlich wie ein Name aussieht, das eingegebene Alter tatsächlich eine Zahl ist und realistisch ist (z. B. nicht negativ und weniger als 4-stellig). Hier haben wir einfach eine einfache Überprüfung implementiert, ob ein Wert in jedes Eingabefeld eingegeben wurde (`if (testItem.input.value === '')`).

Wenn die Validierung erfolgt ist, wird das Formular abgesendet, wenn die Tests bestanden werden. Wenn es Fehler gibt (`if (errorList.hasChildNodes())`), dann verhindern wir das Absenden des Formulars (mithilfe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)), und zeigen alle erstellten Fehlermeldungen an (siehe unten). Dieser Mechanismus sorgt dafür, dass die Fehler nur gezeigt werden, wenn es welche gibt, was besser für die Usability ist.

Für jedes Eingabefeld, das keinen Wert beim Senden des Formulars hat, erstellen wir ein Listenelement mit einem Link und fügen es in die `errorList` ein.

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

Jeder Link hat eine doppelte Funktion — er teilt Ihnen mit, was der Fehler ist, und Sie können darauf klicken/ihn aktivieren, um direkt zum betreffenden Eingabeelement zu springen und Ihre Eingabe zu korrigieren.

Außerdem befindet sich das `errorField` am Anfang der Quellreihenfolge (obwohl es in der Benutzeroberfläche anders positioniert wird), was bedeutet, dass Nutzer genau herausfinden können, was mit ihren Formulareinsendungen falsch ist und zu den betreffenden Eingabeelementen gelangen können, indem sie zurück an den Anfang der Seite gehen.

Als abschließende Notiz haben wir in unserem Demo einige WAI-ARIA-Attribute verwendet, um Barrierefreiheitprobleme zu lösen, die durch Bereiche mit ständigem Inhalt ohne Seitenaktualisierung verursacht werden (Bildschirmlesegeräte erfassen dies standardmäßig nicht oder berichten nicht an die Nutzer darüber):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Wir werden diese Attribute in unserem nächsten Artikel erläutern, der [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) viel genauer behandelt.

> [!NOTE]
> Manche von Ihnen denken wahrscheinlich daran, dass HTML-Formulare eingebettete Validierungsmechanismen wie die Attribute `required`, `min`/`minlength` und `max`/`maxlength` haben (siehe das {{htmlelement("input")}}-Elementreferenz für mehr Informationen). Wir haben diese im Demo nicht verwendet, weil ihre plattformübergreifende Unterstützung lückenhaft ist (zum Beispiel erst ab IE10 und höher).

> [!NOTE]
> WebAIM's [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) bietet einige weitere nützliche Informationen zur barrierefreien Formularvalidierung.

### Andere Accessibility-Bedenken im JavaScript

Es gibt weitere Dinge, die beim Implementieren von JavaScript und beim Nachdenken über Barrierefreiheit zu beachten sind. Wir werden mehr hinzufügen, sobald wir sie finden.

#### maus-spezifische Ereignisse

Wie Sie wissen, werden die meisten Benutzerinteraktionen in clientseitigem JavaScript unter Verwendung von Event-Handlern implementiert, die es uns ermöglichen, Funktionen als Reaktion auf bestimmte Ereignisse auszuführen. Einige Ereignisse können Barrierenfreiheitprobleme haben. Das Hauptbeispiel, auf das Sie stoßen werden, sind maus-spezifische Ereignisse wie [mouseover](/de/docs/Web/API/Element/mouseover_event), [mouseout](/de/docs/Web/API/Element/mouseout_event), [dblclick](/de/docs/Web/API/Element/dblclick_event) usw. Funktionalitäten, die als Reaktion auf diese Ereignisse ausgeführt werden, sind nicht mit anderen Mechanismen zugänglich, wie z.B. Tastatursteuerungen.

Um solche Probleme abzumildern, sollten Sie diese Ereignisse mit ähnlichen Ereignissen kombinieren, die auf andere Weise aktiviert werden können (sog. geräteunabhängige Event-Handler) — [focus](/de/docs/Web/API/Element/focus_event) und [blur](/de/docs/Web/API/Element/blur_event) würden Barrierefreiheit für Tastaturnutzer bieten.

Lassen Sie uns ein Beispiel betrachten, das aufzeigt, wann dies nützlich sein könnte. Vielleicht möchten Sie ein Vorschaubild bereitstellen, das eine größere Version des Bildes zeigt, wenn es mit der Maus überfahren oder fokussiert wird (wie man es in einem Produktkatalog eines E-Commerce-Shops sehen könnte).

Wir haben ein sehr einfaches Beispiel erstellt, das Sie unter [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) finden können (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Der Code enthält zwei Funktionen, die das gezoomte Bild ein- und ausblenden; diese werden durch die folgenden Zeilen ausgeführt, die sie als Event-Handler setzen:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Die ersten beiden Zeilen führen die Funktionen aus, wenn der Mauszeiger über das Vorschaubild fährt oder es verlässt. Dies ermöglicht jedoch nicht den Zugriff auf die Zoomansicht per Tastatur – um dies zu ermöglichen haben wir die letzten zwei Zeilen eingefügt, die die Funktionen ausführen, wenn das Bild fokussiert oder verschwommen ist (wenn der Fokus endet). Dies kann durch Tabben über das Bild geschehen, da wir `tabindex="0"` darauf gesetzt haben.

Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist interessant – es klingt mausabhängig, aber die meisten Browser aktivieren [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler, nachdem Eingabe/Return auf einem Link oder Formularelement gedrückt wird, das den Fokus hat, oder wenn ein solches Element auf einem Touchscreen-Gerät angetippt wird. Dies funktioniert jedoch nicht standardmäßig, wenn Sie einem nicht standardmäßig fokussierbaren Element per tabindex den Fokus gestatten – in solchen Fällen müssen Sie speziell erkennen, wann genau diese Taste gedrückt wird (siehe [Eingabetastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Zusammenfassung

Wir hoffen, dass dieser Artikel Ihnen ein gutes Maß an Detail und Verständnis über die Barrierefreiheitsprobleme im Zusammenhang mit der Verwendung von CSS und JavaScript auf Webseiten gegeben hat.

Als Nächstes: WAI-ARIA!

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
