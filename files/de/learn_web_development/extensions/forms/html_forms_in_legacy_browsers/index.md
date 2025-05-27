---
title: HTML-Formulare in älteren Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser schlimmster Fluch sind alte Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte nutzen, besonders Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job. Glücklicherweise gibt es ein paar Tricks, die helfen können, die meisten der durch ältere Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Informieren Sie sich über die Probleme

Um gängige Muster zu verstehen, ist es hilfreich, die Dokumentation zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die in einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, was auch als "[KISS-Prinzip](https://de.wikipedia.org/wiki/KISS-Prinzip)" bekannt ist. Es gibt so viele Fälle, in denen wir Formulare wollen, die "schöner" oder "mit fortschrittlicher Funktionalität" sind, aber der Aufbau effizienter HTML-Formulare ist keine Frage des Designs oder der Technologie. Vielmehr geht es um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [forms usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt dies gut.

### Graceful Degradation ist der beste Freund des Webentwicklers

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu erstellen, indem Sie eine breite Palette von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser entwickeln und sicherstellen möchten, dass es auf die eine oder andere Weise auch in alten Browsern funktioniert, führen Sie einen Prozess der Graceful Degradation durch.

Schauen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern verwendbar, selbst in sehr alten, da ihre Degradierung hochgradig vorhersehbar ist. Wenn ein Browser den Wert des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er zurück, als wäre der Wert `text`.

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
          alt="Bildschirmfoto des Farbeingabefelds in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Bildschirmfoto des Farbeingabefelds in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formular-Buttons

Es gibt zwei Möglichkeiten, Buttons innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Dinge etwas kompliziert machen, wenn Sie CSS-Anpassungen über den Elementselektor anwenden möchten:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen auf allen Eingabefeldern entfernen, können wir das standardmäßige Erscheinungsbild der Eingabebuttons nur mit dem globalen CSS-Wert {{cssxref('revert')}} wiederherstellen.

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* Revert the last border declaration */
  border: revert;
}
```

### Lassen Sie CSS los

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formularelementen ist browser- und betriebssystemspezifisch. Beispielsweise sieht der Input des Farbtyps in den Browsern Safari, Chrome und Firefox unterschiedlich aus, aber das Farbauswahl-Widget ist auf einem Gerät in allen Browsern gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Es ist generell eine gute Idee, das Standard-Erscheinungsbild von Formularelementen nicht zu ändern, da die Änderung eines CSS-Wert möglicherweise einige Eingabetypen betrifft, andere jedoch nicht. Wenn Sie beispielsweise `input { font-size: 2rem; }` deklarieren, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise beeinflussen. Zum Beispiel könnte `[value] { background-color: #ccc; }` verwendet worden sein, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut anzusprechen, aber das Ändern der Hintergrundfarbe oder des Rahmenradius bei einem {{HTMLElement("meter")}} führt wahrscheinlich zu unerwarteten Ergebnissen, die sich je nach Browser unterscheiden. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das widerspricht im Allgemeinen dem Zweck: da Sie alle Stile verlieren und das gewohnte Aussehen und Verhalten für Ihre Besucher entfernen.

Zusammenfassend lässt sich sagen, dass bei der Stilgestaltung von Formularelementen die Nebenwirkungen oft unvorhersehbar sind. Also lassen Sie es. Selbst wenn es noch möglich ist, einige Anpassungen an Textelementen (wie Größe oder Schriftfarbe) vorzunehmen, gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formularelemente überhaupt nicht zu stylen. Sie können jedoch immer noch Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formularelemente ändern müssen, definieren Sie einen Stil-Leitfaden, um Konsistenz unter all Ihren Formularelementen zu gewährleisten, damit die Benutzererfahrung nicht zerstört wird. Sie können auch einige anspruchsvolle Techniken untersuchen, wie das [Erstellen von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls). In diesem Fall zögern Sie nicht, [Ihren Kunden für solche Torheiten zur Kasse zu bitten](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Funktions-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie alte Browser nicht unbrauchbar machen. Bevor Sie Funktionen verwenden, die in den Browsern, die Sie ansprechen, nicht vollständig unterstützt werden, sollten Sie Funktionen erkennen:

### CSS-Funktions-Erkennung

Bevor Sie ein ersetztes Formularelement stylen, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnativen Stilen anzuzeigen oder, wie in dem Wert `none` getan, die standardmäßigen plattformnativen Stile zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als beste Praxis, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsansatz, der zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen der Inhalt und die grundlegenden Funktionen dennoch zugänglich und benutzbar bleiben.

[Die Prinzipien des unaufdringlichen JavaScripts](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Selbst wenn einige Polyfills sich ihrer Leistung sehr bewusst sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei alten Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber alte Browser sind sehr empfindlich darauf: Grundsätzlich sind sie langsam, und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Sie sind also im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit alten Browsern, um zu sehen, wie sie tatsächlich abschneiden. Manchmal führt der Verzicht auf einige Funktionen zu einer besseren Benutzererfahrung, als genau die gleichen Funktionen in allen Browsern zu haben. Denken Sie letztlich immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist es wichtig, das standardmäßige Erscheinungsbild von Formularsteuerelementen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch übersteigt das Beherrschen aller dieser Techniken den Rahmen dieses Artikels. Die grundlegende Prämisse ist, zu überlegen, ob es die Arbeit wert ist, die Standardimplementierung zu ändern, bevor man sich auf die Herausforderung einlässt.

Wenn Sie alle Artikel dieses [HTML Formulare-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie nun mit der Verwendung von Formularen vertraut sein. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.
