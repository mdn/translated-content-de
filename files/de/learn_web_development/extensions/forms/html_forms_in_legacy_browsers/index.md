---
title: HTML-Formulare in veralteten Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr herausfordernder Ort für sie ist. Unser größter Fluch sind veraltete Browser. Früher bedeutete dies "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte verwenden, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, ist Teil der Arbeit. Glücklicherweise gibt es ein paar Tricks, die Sie kennen sollten, um die meisten der durch veraltete Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: er verwendet einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um typische Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie am richtigen Ort, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) eine komplexe Interaktion erfordern, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt viele Fälle, in denen wir Formulare wollen, die "schöner" oder "mit erweiterten Funktionen" sind, aber beim Erstellen effizienter HTML-Formulare geht es nicht um Design oder Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [Nutzerfreundlichkeit von Formularen auf UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Graceful Degradation ist der beste Freund eines Webentwicklers

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu entwickeln, indem Sie eine breite Palette von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser entwickeln und sicherstellen möchten, dass es auf die eine oder andere Weise auch in veralteten Browsern funktioniert, führen Sie eine Graceful Degradation durch.

Lassen Sie uns einige Beispiele zu HTML-Formularen sehen.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern nutzbar, sogar in sehr alten, weil die Art und Weise, wie sie entfallen, sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, wird er auf `text` zurückfallen.

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
          alt="Bildschirmaufnahme des Farbeingabefelds in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Bildschirmaufnahme des Farbeingabefelds in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formular-Buttons

Es gibt zwei Möglichkeiten, Buttons innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Element/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann es ein wenig schwierig machen, wenn Sie CSS anwenden möchten, indem Sie den Elemente-Selektor verwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingabefeldern entfernen, können wir dann das Standardaussehen nur bei Eingabebuttons wiederherstellen?

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

### Auf CSS verzichten

Eines der großen Probleme mit HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formularelementen ist spezifisch für Browser und Betriebssystem. Beispielsweise sieht die Eingabe vom Typ Farbe in Safari, Chrome und Firefox unterschiedlich aus, aber das Farbauswahlwerkzeug ist auf einem Gerät in allen Browsern gleich, da es das native Farbauswahlwerkzeug des Betriebssystems öffnet.

Es ist generell eine gute Idee, das Standardaussehen von Formularelementen nicht zu verändern, da das Ändern eines CSS-Eigenschaftswerts einige Eingabetypen beeinflussen kann, aber nicht alle. Wenn Sie z.B. `input { font-size: 2rem; }` deklarieren, wirkt sich das auf `number`, `date` und `text` aus, aber nicht auf `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise ändern. Zum Beispiel kann `[value] { background-color: #ccc; }` benutzt worden sein, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut anzusprechen, aber das Ändern der Hintergrundfarbe oder des Rahmenradius bei einem {{HTMLElement("meter")}} wird wahrscheinlich zu unerwarteten Ergebnissen führen, die je nach Browser unterschiedlich sind. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das führt im Allgemeinen die ursprüngliche Absicht ad absurdum: da Sie alle Stilvorlagen verlieren, entfernen Sie das gewohnte Erscheinungsbild, das Ihre Besucher erwarten.

Zusammengefasst können die Nebeneffekte des Stylens von Formularelement-Widgets mit CSS unvorhersehbar sein. Verzichten Sie also darauf. Auch wenn es noch möglich ist, ein paar Anpassungen an Textelementen vorzunehmen (wie Größenanpassung oder Schriftfarbe), gibt es immer Nebeneffekte. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Sie können jedoch Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formular-Widgets ändern müssen, definieren Sie einen Styleguide, um Konsistenz unter allen Ihren Formularelementen sicherzustellen, sodass das Benutzererlebnis nicht beeinträchtigt wird. Sie können auch einige schwierige Techniken untersuchen, wie zum Beispiel das [Neuaufbau von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls). Zögern Sie in diesem Fall jedoch nicht, [Ihren Kunden für solche Torheiten in Rechnung zu stellen](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature-Erkennung und Polyfills

CSS und JavaScript sind tolle Technologien, aber es ist wichtig sicherzustellen, dass Sie veraltete Browser nicht zum Absturz bringen. Bevor Sie Funktionen nutzen, die in den von Ihnen angepeilten Browsern nicht vollständig unterstützt werden, sollten Sie eine Feature-Erkennung durchführen:

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formular-Kontroll-Widget stylen, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnativen Stylings darzustellen, oder, wie es mit dem Wert `none` getan wird, um das plattformnative Styling zu entfernen.

### Unauffälliges JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unauffälligem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhaltensweisen.
- Wenn der Code bricht, müssen die Inhalte und die grundlegenden Funktionalitäten weiterhin zugänglich und nutzbar bleiben.

[Die Prinzipien von unauffälligem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com verfasst) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills die Leistung sehr gut berücksichtigen, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei veralteten Browsern, viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein Thema für sich, aber veraltete Browser sind sehr empfindlich darauf: Sie sind im Grunde langsam, und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Sie sind also im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit veralteten Browsern, um zu sehen, wie sie tatsächlich abschneiden. Manchmal führt das Weglassen einiger Funktionen zu einem besseren Benutzererlebnis als der Versuch, genau die gleiche Funktionalität in allen Browsern zu haben. Als letzte Erinnerung, denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist es wichtig, die Standardeinstellungen von Formularelementen im Browser und Betriebssystem zu berücksichtigen. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch liegt die Beherrschung aller dieser Techniken außerhalb des Umfangs dieses Artikels. Die grundlegende Prämisse besteht darin, abzuwägen, ob sich die Änderung der Standardimplementierung lohnt, bevor man sich der Herausforderung stellt.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie nun im Umgang mit Formularen sicher sein. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte dabei, den Leitfaden zu verbessern.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5-Input-Typen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- [Formulare durch JavaScript versenden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [Wie man benutzerdefinierte Formular-Widgets baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- **HTML-Formulare in veralteten Browsern**
- [Erweitertes Styling für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
