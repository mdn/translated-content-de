---
title: HTML-Formulare in Legacy-Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser schlimmster Fluch sind Legacy-Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte benutzen, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job. Glücklicherweise gibt es ein paar Tricks, die Ihnen helfen können, die meisten der durch Legacy-Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-`<input>`-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wollen, die "schöner" oder "mit erweiterten Funktionen" sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage des Designs oder der Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial [Forms Usability on UX For The Masses](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Stufenweise Umstellung ist der beste Freund des Webentwicklers

[Stufenweise Umstellung und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu schaffen, indem Sie eine breite Palette von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser bauen und sicherstellen wollen, dass es auf die eine oder andere Weise auch in Legacy-Browsern funktioniert, führen Sie eine stufenweise Umstellung durch.

Sehen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern, sogar in sehr alten, verwendbar, da ihre Degradierung äußerst vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines `<input>`-Elements nicht kennt, fällt er zurück, als ob der Wert `text` wäre.

```html
<label for="myColor">
  Pick a color
  <input type="color" id="myColor" name="color" />
</label>
```

<table class="no-markdown">
  <thead>
    <tr>
      <th>Unterstützt</th>
      <th>Nicht unterstützt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Screenshot des Farbeingabefelds in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot des Farbeingabefelds in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formular-Buttons

Es gibt zwei Möglichkeiten, um Buttons innerhalb von HTML-Formularen zu definieren:

- Das `<input>`-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist
- Das `<button>`-Element

##### `<input>`

Das `<input>`-Element kann die Dinge etwas schwierig machen, wenn Sie versuchen, etwas CSS durch den Elementselektor anzuwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingaben entfernen, können wir dann das Standarderscheinungsbild nur bei Eingabeschaltflächen wiederherstellen?

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* This does NOT restore the default rendering */
  border: none;
}
input[type="button"] {
  /* These don't either! Actually there is no standard way to do it in any browser */
  border: auto;
  border: initial;
}
input[type="button"] {
  /* This will come the closest to restoring default rendering. */
  border: revert;
}
```

Weitere Informationen zum globalen CSS-Wert {{cssxref('revert')}} finden Sie hier.

### Verzicht auf CSS

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formularsteuerungen ist browser- und betriebssystemspezifisch. Zum Beispiel sieht das Eingabefeld des Farbtyps in Safari, Chrome und Firefox anders aus, aber das Farbauswahl-Widget ist in allen Browsern auf einem Gerät gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Es ist im Allgemeinen eine gute Idee, das Standarderscheinungsbild der Formularsteuerungen nicht zu ändern, da die Änderung eines CSS-Eigenschaftswertes einige Eingabetypen, aber nicht andere beeinflussen kann. Wenn Sie zum Beispiel `input { font-size: 2rem; }` deklarieren, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise verändern. Zum Beispiel könnte `[value] { background-color: #ccc; }` verwendet worden sein, um jedes `<input>` mit einem `value`-Attribut zu zielen, aber das Ändern der Hintergrundfarbe oder des Rahmenradius auf einem `<meter>` führt wahrscheinlich zu unerwarteten Ergebnissen, die zwischen Browsern variieren. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das stellt im Allgemeinen den eigentlichen Zweck in Frage: wenn Sie alle Stile verlieren, entfernen Sie das vertraute Erscheinungsbild, das Ihre Besucher gewohnt sind.

Zusammengefasst, wenn es um das Styling von Formularsteuerungs-Widgets geht, können die Nebenwirkungen des Stylings mit CSS unvorhersehbar sein. Also lassen Sie es. Auch wenn es immer noch möglich ist, geringfügige Anpassungen an Textelementen (wie Größe oder Schriftfarbe) vorzunehmen, gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Aber Sie können immer noch Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets ändern müssen, definieren Sie einen Styleguide, um Konsistenz zwischen all Ihren Formularsteuerungen zu gewährleisten, damit die Benutzererfahrung nicht gestört wird. Sie können auch einige schwierige Techniken untersuchen, wie z.B. [Widgets mit JavaScript neu erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls). Aber in diesem Fall zögern Sie nicht, [Ihren Kunden für eine solche Torheit zu belasten](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature-Detection und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie Legacy-Browser nicht beeinträchtigen. Bevor Sie Funktionen verwenden, die in den von Ihnen angestrebten Browsern nicht vollständig unterstützt werden, sollten Sie Feature-Detection verwenden:

### CSS-Feature-Detection

Bevor Sie ein ersetztes Formularsteuerungs-Widget stylen, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformbasiertem nativen Styling anzuzeigen oder, wie es mit dem Wert `none` gemacht wird, das standardmäßige plattformbasierte Styling zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code bricht, müssen der Inhalt und die grundlegenden Funktionen weiterhin zugänglich und nutzbar sein.

[Die Prinzipien des unaufdringlichen JavaScripts](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich geschrieben von Peter-Paul Koch für Dev.Opera.com) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills sehr auf die Leistung achten, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinflussen. Dies ist besonders kritisch bei Legacy-Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer mühsam machen kann. Leistung ist ein Thema für sich, aber Legacy-Browser sind sehr empfindlich dafür: Grundsätzlich sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Daher sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit Legacy-Browsern, um zu sehen, wie sie tatsächlich funktionieren. Manchmal führt das Weglassen einiger Funktionen zu einer besseren Benutzererfahrung, als über alle Browser hinweg genau die gleichen Funktionen zu haben. Als letzte Erinnerung: Denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen können, ist es wichtig, das Standarderscheinungsbild der Formularsteuerungen von Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch liegt es außerhalb des Umfangs dieses Artikels, alle davon zu meistern. Der grundlegende Gedanke ist, abzuwägen, ob es die Mühe wert ist, die Standardimplementierung zu ändern, bevor Sie sich der Herausforderung stellen.

Wenn Sie alle Artikel dieses [HTML Forms guide](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie sich jetzt beim Umgang mit Formularen sicher fühlen. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.
