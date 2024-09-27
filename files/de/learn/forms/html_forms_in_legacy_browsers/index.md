---
title: HTML-Formulare in älteren Browsern
slug: Learn/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 721a334af54dd04cbd005bb91edc2c8ce2ad4744
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzlich), dass das Web ein sehr rauer Ort für sie ist. Unser größter Fluch sind ältere Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte benutzen, besonders Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job. Glücklicherweise gibt es ein paar Tricks, die Sie kennen sollten und die Ihnen helfen können, die meisten Probleme zu lösen, die durch ältere Browser verursacht werden. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Informieren Sie sich über die Probleme

Um häufige Muster zu verstehen, hilft es, Dokumentation zu lesen. Wenn Sie dies gerade auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare "schöner" oder "mit erweiterten Funktionen" haben möchten, aber der Aufbau effizienter HTML-Formulare ist keine Frage des Designs oder der Technologie. Es geht vielmehr um Einfachheit, Intuitivität und die Leichtigkeit der Benutzerinteraktion. Das Tutorial, [Formularbenutzbarkeit auf UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt das gut.

### Graziöse Degradation ist der beste Freund des Webentwicklers

[Graziöse Degradation und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen, indem Sie eine Vielzahl von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser entwickeln und sicherstellen möchten, dass es auf die eine oder andere Weise auch in älteren Browsern funktioniert, wenden Sie graziöse Degradation an.

Schauen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern verwendbar, selbst in sehr alten, da die Art, wie sie degradieren, vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er auf den Wert `text` zurück.

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

#### Formularbuttons

Es gibt zwei Möglichkeiten, Buttons innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Element/input#type) auf die Werte `button`, `submit`, `reset` oder `image` gesetzt
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann es ein wenig schwierig machen, wenn Sie etwas CSS anwenden möchten, indem Sie den Element-Selektor verwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rand bei allen Eingaben entfernen, können wir das Standardaussehen nur bei Eingabebuttons wiederherstellen?

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

Sehen Sie sich den globalen CSS-Wert {{cssxref('revert')}} für weitere Informationen an.

### CSS weglassen

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Aussehen der Formular-Steuerelemente ist browser- und betriebssystemspezifisch. Zum Beispiel sieht der Input des Farbtyps in Safari, Chrome und Firefox unterschiedlich aus, aber das Farbwähler-Widget ist auf allen Browsern auf einem Gerät gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Es ist generell eine gute Idee, das Standardaussehen der Formular-Steuerelemente nicht zu ändern, da die Änderung eines CSS-Eigenschaftswerts einige Eingabetypen, aber nicht andere, beeinflussen kann. Wenn Sie beispielsweise `input { font-size: 2rem; }` deklarieren, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann das Erscheinungsbild des Widgets auf unerwartete Weise beeinflusst werden. Zum Beispiel könnte `[value] { background-color: #ccc; }` verwendet worden sein, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut zu beeinflussen, aber die Änderung der Hintergrundfarbe oder der Rahmenradius an einem {{HTMLElement("meter")}} führt wahrscheinlich zu unerwarteten Ergebnissen, die sich von Browser zu Browser unterscheiden. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das führt im Allgemeinen das Ziel ad absurdum: Da Sie das gesamte Styling verlieren, entfernen Sie das Standardaussehen und das Gefühl, an das Ihre Besucher gewöhnt sind.

Zusammengefasst: Wenn es um das Styling von Formular-Steuerelement-Widgets geht, können die Nebenwirkungen des Stylings mit CSS unvorhersehbar sein. Also tun Sie es nicht. Wie aus der Komplexität des Artikels über die [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls) hervorgeht, ist es sehr schwierig. Auch wenn es immer noch möglich ist, einige Anpassungen an Text-Elementen (wie Größe oder Schriftfarbe) vorzunehmen, gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Sie können jedoch weiterhin Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets unbedingt ändern müssen, definieren Sie einen Stil-Leitfaden, um Konsistenz zwischen all Ihren Formular-Steuerelementen zu gewährleisten, sodass die Benutzererfahrung nicht zerstört wird. Sie können auch einige harte Techniken untersuchen, wie z.B. [Widgets mit JavaScript neu zu erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls). Aber in diesem Fall zögern Sie nicht, [Ihren Kunden für eine solche Torheit in Rechnung zu stellen](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Funktionsdetektion und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie ältere Browser nicht ausbrechen. Bevor Sie Funktionen verwenden, die in den von Ihnen angezielten Browsern nicht vollständig unterstützt werden, sollten Sie eine Funktionsdetektion durchführen:

### CSS-Funktionsdetektion

Bevor Sie ein ausgetauschtes Formular-Steuerelement-Widget stylen, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden wollen {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit der plattformspezifischen Nativen-Darstellung anzuzeigen oder, wie im Fall mit dem Wert `none`, die standardmäßige plattformspezifische Styling zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund wird als Best Practice betrachtet, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code nicht funktioniert, müssen der Inhalt und die grundlegenden Funktionalitäten zugänglich und verwendbar bleiben.

[Die Prinzipien von unaufdringlichem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich geschrieben von Peter-Paul Koch für Dev.Opera.com) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills sehr leistungsbewusst sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei alten Browsern; viele von ihnen haben sehr langsame JavaScript-Engines, was die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber alte Browser sind sehr empfindlich darauf: Grundsätzlich sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Sie sind also doppelt belastet im Vergleich zu modernen Browsern. Testen Sie Ihren Code mit alten Browsern, um zu sehen, wie sie tatsächlich funktionieren. Manchmal führt das Weglassen einiger Funktionen zu einem besseren Benutzererlebnis, als exakt die gleichen Funktionen in allen Browsern zu haben. Als letzte Erinnerung: Denken Sie einfach immer an die Endbenutzer.

## Fazit

Wie Sie sehen können, ist es wichtig, das Standarderscheinungsbild von Formular-Steuerelementen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um diese Probleme zu bewältigen; jedoch ist das Beherrschen all dieser Techniken außerhalb des Umfangs dieses Artikels. Der grundlegende Ansatz besteht darin, zu überlegen, ob die Änderung der Standardimplementierung die Arbeit wert ist, bevor man sich der Herausforderung stellt.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn/Forms) gelesen haben, sollten Sie jetzt mit der Verwendung von Formularen vertraut sein. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formular-Steuerelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Validieren von Formulardaten](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- **HTML-Formulare in älteren Browsern**
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
