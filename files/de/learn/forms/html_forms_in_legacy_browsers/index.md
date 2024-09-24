---
title: HTML-Formulare in älteren Browsern
slug: Learn/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 721a334af54dd04cbd005bb91edc2c8ce2ad4744
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr schwieriger Ort für sie ist. Unser größter Fluch sind alte Browser. Früher bedeutete dies "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte nutzen, insbesondere Mobiltelefone, auf denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, gehört zum Job. Glücklicherweise gibt es einige Tricks, die Ihnen helfen können, die meisten der durch alte Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie am richtigen Ort, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die in einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn/Forms) eine komplexe Interaktion erfordern, gibt es eine wichtige Regel: Halten Sie es einfach, bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wünschen, die "schöner" oder "mit fortgeschrittener Funktionalität" sind, aber der Bau effizienter HTML-Formulare ist keine Frage des Designs oder der Technologie. Vielmehr geht es um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [Formularbenutzerfreundlichkeit auf UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt dies gut.

### Stufenweise Degradation ist des Webentwicklers bester Freund

[Stufenweise Degradation und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsansätze, die es Ihnen ermöglichen, großartige Dinge zu schaffen, indem Sie gleichzeitig eine Vielzahl von Browsern unterstützen. Wenn Sie etwas für einen modernen Browser bauen und sicherstellen möchten, dass es auf die eine oder andere Weise in alten Browsern funktioniert, führen Sie eine stufenweise Degradation durch.

Sehen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern verwendbar, sogar in sehr alten, da die Art und Weise, wie sie sich verschlechtern, sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er zurück, als ob der Wert `text` wäre.

```html
<label for="myColor">
  Wählen Sie eine Farbe
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
          alt="Screenshot des Farbeingabefeldes in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot des Farbeingabefeldes in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formularschaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Element/input#type), gesetzt auf die Werte `button`, `submit`, `reset` oder `image`
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Dinge ein wenig kompliziert machen, wenn Sie versuchen, einige CSS mit dem Elementselektor anzuwenden:

```html
<input type="button" value="click me" />
```

Wenn wir die Umrandung bei allen Eingaben entfernen, können wir dann das Standardaussehen nur bei Eingabeschaltflächen wiederherstellen?

```css
input {
  /* Diese Regel schaltet das Standardrendering für die Input-Typen aus, die eine Umrandung haben,
     einschließlich der mit einem Input-Element definierten Schaltflächen */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* Dies stellt das Standardrendering NICHT wieder her */
  border: none;
}
input[type="button"] {
  /* Diese auch nicht! Tatsächlich gibt es keinen Standardweg, das in einem beliebigen Browser zu tun */
  border: auto;
  border: initial;
}
input[type="button"] {
  /* Dies kommt der Wiederherstellung des Standardrenderings am nächsten. */
  border: revert;
}
```

Siehe den globalen CSS-{{cssxref('revert')}}-Wert für weitere Informationen.

### Verzichten Sie auf CSS

Eines der großen Probleme bei HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formularelementen ist browserspezifisch und betriebssystemspezifisch. Zum Beispiel sieht das Farbeingabefeld in Safari, Chrome und Firefox anders aus, aber das Farbauswahl-Widget ist auf allen Browsern eines Geräts dasselbe, da es das native Farbauswahlwerkzeug des Betriebssystems öffnet.

Es ist im Allgemeinen eine gute Idee, das Standardaussehen von Formularelementen nicht zu verändern, da das Ändern eines CSS-Eigenschaftswertes einige Eingabetypen, aber nicht andere beeinflussen kann. Wenn Sie beispielsweise `input { font-size: 2rem; }` erklären, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise beeinflussen. Wenn Sie beispielsweise `[value] { background-color: #ccc; }` verwenden, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut anzusprechen, führt die Änderung der Hintergrundfarbe oder des Randradius bei einem {{HTMLElement("meter")}} wahrscheinlich zu unerwarteten Ergebnissen, die je nach Browser variieren. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das widerspricht im Allgemeinen dem Zweck: Denn Sie verlieren alle Stile und entfernen das vertraute Aussehen, an das Ihre Besucher gewöhnt sind.

Zusammenfassend lässt sich sagen, dass beim Styling von Formularelementen die Nebeneffekte des Stylings mit CSS unvorhersehbar sein können. Also lassen Sie es. Wie Sie aus der Komplexität der [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)-Artikel sehen können, ist es sehr schwierig. Selbst wenn es möglich ist, einige Anpassungen an Textelementen vorzunehmen (wie Größenänderung oder Schriftfarbe), gibt es immer Nebeneffekte. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Sie können jedoch immer noch Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets unbedingt ändern müssen, definieren Sie eine Stilrichtlinie, um Konsistenz bei allen Ihren Formularelementen zu gewährleisten, damit die Benutzererfahrung nicht beeinträchtigt wird. Sie können auch einige harte Techniken untersuchen, wie [Widgets mit JavaScript neu zu erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls). Zögern Sie in diesem Fall nicht, [Ihren Kunden für solchen Unsinn zur Kasse zu bitten](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Funktionsüberprüfung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie alte Browser nicht beschädigen. Bevor Sie Funktionen verwenden, die in den von Ihnen anvisierten Browsern nicht vollständig unterstützt werden, sollten Sie die Funktionserkennung durchführen:

### CSS-Funktionsüberprüfung

Bevor Sie ein ersetztes Formularelement-Widget stylen, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* Suchfeld umstylen */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformspezifischem Styling anzuzeigen oder, wie bei dem Wert `none`, die plattformspezifischen Standardstile zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsansatz, der zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen der Inhalt und die grundlegenden Funktionen weiterhin zugänglich und nutzbar bleiben.

[Die Prinzipien von unaufdringlichem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills sehr auf die Leistung achten, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei alten Browsern; viele davon haben eine sehr langsame JavaScript-Engine, die die Ausführung aller Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein Thema für sich, aber alte Browser sind sehr empfindlich darauf: Im Grunde sind sie langsam, und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Daher sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit alten Browsern, um zu sehen, wie sie tatsächlich abschneiden. Manchmal führt das Weglassen einiger Funktionen zu einer besseren Benutzererfahrung als das Vorhandensein genau derselben Funktionalität in allen Browsern. Abschließend sei daran erinnert, dass Sie immer an die Endbenutzer denken sollten.

## Fazit

Wie Sie sehen können, ist es wichtig, das Standardaussehen von Formularelementen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch liegt es außerhalb des Rahmens dieses Artikels, alle zu beherrschen. Grundsätzlich geht es darum, zu überlegen, ob es die Mühe wert ist, die Standardimplementierung zu ändern, bevor Sie sich auf die Herausforderung einlassen.

Wenn Sie alle Artikel dieses [HTML-Formularleitfadens](/de/docs/Learn/Forms) gelesen haben, sollten Sie jetzt in der Lage sein, Formulare problemlos zu verwenden. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte dabei, den Leitfaden zu verbessern.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- **HTML-Formulare in älteren Browsern**
- [Erweiterte Styles für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
