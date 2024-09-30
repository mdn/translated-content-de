---
title: HTML-Formulare in älteren Browsern
slug: Learn/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 721a334af54dd04cbd005bb91edc2c8ce2ad4744
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr schwieriger Ort für sie ist. Unser schlimmster Fluch sind alte Browser. Dies bezog sich früher auf "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte benutzen, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job dazu. Glücklicherweise gibt es ein paar Tricks, die Ihnen helfen können, die meisten der durch alte Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt dies nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies gerade auf [MDN](/) lesen, sind Sie am richtigen Ort, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. Auf MDN sind Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs verfügbar, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn/Forms) komplexe Interaktion beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare möchten, die "schöner" oder "mit fortgeschrittener Funktionalität" sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage des Designs oder der Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [forms usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Graceful Degradation ist der beste Freund des Webentwicklers

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen, indem Sie eine Vielzahl von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser bauen und sicherstellen möchten, dass es irgendwie auch in alten Browsern funktioniert, dann führen Sie graceful degradation durch.

Schauen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern verwendbar, selbst in sehr alten, da die Art und Weise, wie sie sich verschlechtern, sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er darauf zurück, als wäre der Wert `text`.

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
          alt="Screenshot des Farbeingabe in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot des Farbeingabe in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formular-Schaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen in HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Element/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist.
- Das {{HTMLElement("button")}}-Element.

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Dinge ein wenig kompliziert machen, wenn Sie versuchen, CSS mit dem Elementselektor zu verwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingaben entfernen, können wir das Standardaussehen nur bei den Eingabeschaltflächen wiederherstellen?

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

Weitere Informationen finden Sie im globalen CSS-Wert {{cssxref('revert')}}.

### Lassen Sie CSS los

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formular-Steuerelementen ist spezifisch für Browser und Betriebssystem. Zum Beispiel sieht das Eingabefeld vom Typ Farbe in Safari, Chrome und Firefox unterschiedlich aus, aber das Farbauswahl-Widget ist auf allen Browsern eines Geräts gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Im Allgemeinen ist es eine gute Idee, das Standarderscheinungsbild von Formularsteuerelementen nicht zu ändern, da das Ändern eines CSS-Eigenschaftswerts einige Eingabetypen, aber nicht andere beeinflussen kann. Wenn Sie beispielsweise `input { font-size: 2rem; }` deklarieren, wirkt sich dies auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann sich dies in unerwarteter Weise auf das Erscheinungsbild des Widgets auswirken. Beispiel: `[value] { background-color: #ccc; }` könnte verwendet worden sein, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut anzusprechen, aber das Ändern der Hintergrundfarbe oder des Rahmensradius bei einem {{HTMLElement("meter")}} führt wahrscheinlich zu unerwarteten Ergebnissen, die zwischen Browsern unterschiedlich sind. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, was jedoch im Allgemeinen den Zweck verfehlt: da Sie alle Stile verlieren, entfernen Sie das Standard-Look-and-Feel, an das Ihre Besucher gewöhnt sind.

Zusammenfassend lässt sich sagen, dass die Auswirkungen des Stylings von Formularsteuerelement-Widgets mit CSS unvorhersehbar sein können. Also verzichten Sie darauf. Wie Sie aus der Komplexität des [Artikel zu Eigenschaftskompatibilitätstabellen für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls) sehen können, ist es sehr schwierig. Selbst wenn es noch möglich ist, ein paar Anpassungen an Textelementen (wie Größe oder Schriftfarbe) vorzunehmen, gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Aber Sie können immer noch Styles auf alle umliegenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets ändern müssen, definieren Sie einen Stil-Leitfaden, um Konsistenz unter all Ihren Formularsteuerelementen zu gewährleisten, sodass die Benutzererfahrung nicht zerstört wird. Sie können auch einige harte Techniken wie [Widgets mit JavaScript neu erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls) untersuchen. Aber in diesem Fall zögern Sie nicht, [Ihrem Kunden für solche Torheiten in Rechnung zu stellen](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie alte Browser nicht außer Gefecht setzen. Bevor Sie Funktionen verwenden, die in den von Ihnen anvisierten Browsern nicht vollständig unterstützt werden, sollten Sie Features ermitteln:

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formular-Steuerelement-Widget stylen, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformtypischem Styling anzuzeigen oder, wie es mit dem Wert `none` getan wird, das standardmäßige plattformtypische Styling zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen die Inhalte und die grundlegenden Funktionen weiterhin zugänglich und benutzbar bleiben.

[Die Prinzipien des unaufdringlichen JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills sehr auf die Leistung achten, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei alten Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber alte Browser sind sehr sensibel dafür: Grundsätzlich sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Daher sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit alten Browsern, um zu sehen, wie er tatsächlich funktioniert. Manchmal führt das Streichen einiger Funktionen zu einer besseren Benutzererfahrung, als wenn alle Funktionen in allen Browsern identisch sind. Als letzte Erinnerung: Denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen können, ist das Betrachten der Standarddarstellung von Formularsteuerelementen in Browsern und Betriebssystemen wichtig. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch ist es über den Umfang dieses Artikels hinausgehend, all diese zu meistern. Die grundlegende Prämisse ist, zu überlegen, ob die Änderung der Standardimplementierung den Aufwand wert ist, bevor man sich der Herausforderung stellt.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn/Forms) gelesen haben, sollten Sie jetzt im Umgang mit Formularen vertraut sein. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formular-Steuerelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Erweitere Themen

- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- **HTML-Formulare in älteren Browsern**
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
