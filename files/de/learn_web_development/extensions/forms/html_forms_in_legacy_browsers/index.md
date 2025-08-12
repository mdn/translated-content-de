---
title: HTML-Formulare in älteren Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser größter Fluch sind ältere Browser. Früher bedeutete das „Internet Explorer“, aber es gibt Millionen von Menschen, die alte Geräte verwenden, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job. Zum Glück gibt es ein paar Tricks, die Sie kennen sollten und die Ihnen helfen können, die meisten Probleme zu lösen, die durch ältere Browser verursacht werden. Wenn ein Browser einen bestimmten HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Erfahren Sie mehr über die Probleme

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie am richtigen Ort, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können, Kompatibilitätstabellen an.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wünschen, die „schöner“ oder „mit erweiterter Funktionalität“ sind, aber es geht beim Erstellen effizienter HTML-Formulare nicht um Design oder Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial [Forms Usability on UX For The Masses](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Gnadevolle Degradierung ist der beste Freund eines Webentwicklers

[Graceful Degradation und Progressives Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen, indem Sie gleichzeitig eine breite Palette von Browsern unterstützen. Wenn Sie etwas für einen modernen Browser erstellen und sicherstellen möchten, dass es auf die eine oder andere Weise auch in älteren Browsern funktioniert, führen Sie eine Gnadevolle Degradierung durch.

Sehen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern, sogar in sehr alten, verwendbar, weil die Art und Weise, wie sie abgebaut werden, sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, wird er so behandelt, als wäre der Wert `text`.

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
          alt="Screenshot der Farbeingabe in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot der Farbeingabe in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formular-Schaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit dem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann es etwas schwierig machen, CSS anzuwenden, wenn Sie den Element-Selektor verwenden möchten:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen für alle Eingaben entfernen, können wir das Standardaussehen für Eingabeknöpfe nur mit dem globalen CSS-Wert {{cssxref('revert')}} wiederherstellen.

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #cccccc;
}
input[type="button"] {
  /* Revert the last border declaration */
  border: revert;
}
```

### CSS aufgeben

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild der Formularsteuerelemente ist browser- und betriebssystemspezifisch. Beispielsweise sieht die Eingabe des Farbbereichs in Safari, Chrome und Firefox unterschiedlich aus, aber das Farbwähler-Widget ist auf einem Gerät in allen Browsern gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Es ist im Allgemeinen eine gute Idee, das Standardaussehen von Formularsteuerelementen nicht zu verändern, da die Änderung eines CSS-Eigenschaftswerts einige Eingabetypen beeinflussen kann, andere jedoch nicht. Wenn Sie zum Beispiel `input { font-size: 2rem; }` deklarieren, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise beeinflussen. Zum Beispiel kann `[value] { background-color: #cccccc; }` verwendet worden sein, um alle {{HTMLElement("input")}} mit einem `value`-Attribut zu kennzeichnen, aber das Ändern der Hintergrundfarbe oder des Rahmenradius auf einem {{HTMLElement("meter")}} führt wahrscheinlich zu unerwarteten Ergebnissen, die sich von Browser zu Browser unterscheiden. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das untergräbt im Allgemeinen den Zweck: wenn Sie alle Stile verlieren, entfernen Sie das Standardaussehen und -gefühl, das Ihre Besucher gewohnt sind.

Zusammenfassend lässt sich sagen, dass die Seiteneffekte des Stylings von Formularsteuerungs-Widgets beim Styling mit CSS unvorhersehbar sein können. Tun Sie es also nicht. Auch wenn es immer noch möglich ist, ein paar Anpassungen an Textelementen (wie Größen- oder Schriftfarbe) vorzunehmen, gibt es immer Seiteneffekte. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Aber Sie können weiterhin Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets ändern müssen, definieren Sie einen Stil-Leitfaden, um die Konsistenz aller Ihrer Formularsteuerelemente zu gewährleisten, sodass die Benutzererfahrung nicht zerstört wird. Sie können auch einige schwierige Techniken, wie das [Neubilden von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), untersuchen. Aber in diesem Fall zögern Sie nicht, [Ihrem Kunden für solchen Unsinn Gebühren zu berechnen](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Funktionsentest und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie ältere Browser nicht beeinträchtigen. Bevor Sie Funktionen verwenden, die nicht vollständig in den von Ihnen anvisierten Browsern unterstützt werden, sollten Sie Funktionen testen:

### CSS-Funktionstest

Bevor Sie ein ersetztes Formularsteuerungs-Widget gestalten, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnativer Gestaltung anzuzeigen, oder, wie es mit dem Wert `none` gemacht wird, die standardmäßige plattformnative Gestaltung zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit „unaufdringlichem“ JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen der Inhalt und die grundlegenden Funktionen zugänglich und benutzbar bleiben.

[Die Prinzipien von unaufdringlichem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf Leistung

Auch wenn manche Polyfills sehr auf Leistung bedacht sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Das ist besonders kritisch bei älteren Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber ältere Browser sind sehr empfindlich dafür: Grundsätzlich sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. So sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit älteren Browsern, um zu sehen, wie sie tatsächlich abschneiden. Manchmal führt das Weglassen einiger Funktionen zu einer besseren Benutzererfahrung, als in allen Browsern exakt die gleichen Funktionen zu haben. Als letzte Erinnerung, denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist es wichtig, das standardmäßige Erscheinungsbild von Formularsteuerelementen im Browser und Betriebssystem zu berücksichtigen. Es gibt viele Techniken, um diese Probleme zu bewältigen; jedoch liegt die Beherrschung all dieser Techniken außerhalb des Umfangs dieses Artikels. Die grundlegende Prämisse ist zu prüfen, ob das Ändern der Standardimplementierung den Aufwand wert ist, bevor man sich auf die Herausforderung einlässt.

Wenn Sie alle Artikel dieses [HTML Forms-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie jetzt in der Lage sein, Formulare zu verwenden. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte mit, den Leitfaden zu verbessern.
