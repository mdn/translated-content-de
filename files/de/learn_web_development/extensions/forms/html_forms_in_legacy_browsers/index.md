---
title: HTML-Formulare in Legacy-Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser schlimmster Fluch sind Legacy-Browser. Früher bedeutete dies „Internet Explorer“, aber es gibt Millionen von Menschen, die alte Geräte benutzen, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Den Umgang mit dieser Wildnis gehört zum Job. Glücklicherweise gibt es ein paar Tricks, die Ihnen helfen können, die meisten der durch Legacy-Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um allgemeine Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Prüfen Sie einfach die Unterstützung der Elemente (oder DOM-Interfaces), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das „[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)“. Es gibt so viele Fälle, in denen wir Formulare wollen, die „schöner“ oder „mit fortschrittlicher Funktionalität“ sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage von Design oder Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [Forms Usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt das gut.

### Graceful Degradation ist der beste Freund des Webentwicklers

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen und gleichzeitig eine breite Palette von Browsern zu unterstützen. Wenn Sie etwas für einen modernen Browser erstellen und sicherstellen möchten, dass es, auf die eine oder andere Weise, in Legacy-Browsern funktioniert, führen Sie eine Graceful Degradation durch.

Lassen Sie uns einige Beispiele in Bezug auf HTML-Formulare ansehen.

#### HTML input types

Alle HTML-Eingabetypen sind in allen Browsern nutzbar, sogar in den ältesten, da ihre Degradierung sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er auf den Wert `text` zurück.

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

#### Formularelemente

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf die Werte `button`, `submit`, `reset` oder `image` gesetzt
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann es etwas schwierig machen, wenn Sie CSS mit dem Element-Selektor anwenden möchten:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen für alle Inputs entfernen, können wir das Standardaussehen nur für Schaltflächen auf Inputs wiederherstellen?

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

Sehen Sie sich den globalen CSS-{{cssxref('revert')}}-Wert für weitere Informationen an.

### Auf CSS verzichten

Eines der großen Probleme bei HTML-Formularen ist das Styling von Formularelementen mit CSS. Das Erscheinungsbild von Formularsteuerungen ist spezifisch für Browser und Betriebssystem. Beispielsweise sieht der Input eines Farbelements in Safari, Chrome und Firefox unterschiedlich aus, aber das Farbauswahl-Widget ist auf allen Browsern eines Geräts gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Im Allgemeinen ist es eine gute Idee, das Standardaussehen von Formularsteuerungen nicht zu verändern, da das Ändern eines CSS-Eigenschaftswerts einige Eingabetypen, aber nicht andere beeinflussen kann. Wenn Sie beispielsweise deklarieren `input { font-size: 2rem; }`, wird dies `number`, `date` und `text` beeinflussen, aber nicht `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies das Erscheinungsbild des Widgets auf unerwartete Weise beeinflussen. Wenn z.B. `[value] { background-color: #ccc; }` genutzt wurde, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut zu kennzeichnen, könnte das Ändern des Hintergrunds oder des Radius auf einem {{HTMLElement("meter")}} zu unerwarteten Ergebnissen führen, die sich zwischen den Browsern unterscheiden. Sie können {{cssxref('appearance', 'appearance: none;')}} verwenden, um die Browserstile zu entfernen, aber das stellt oft den Sinn in Frage: Da Sie alle Stile verlieren, entfernen Sie den Standard-Look und das Gefühl, an das Ihre Besucher gewöhnt sind.

Zusammenfassend lässt sich sagen, dass beim Styling von Formularsteuerungs-Widgets die Nebenwirkungen der Stiländerung mit CSS unvorhersehbar sein können. Also besser nicht. Auch wenn es noch möglich ist, einige Anpassungen an Textelementen vorzunehmen (z.B. Größenänderung oder Schriftfarbe), gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formularelemente überhaupt nicht zu stylen. Aber Sie können immer noch Stile auf alle umgebenden Elemente anwenden. Und wenn Sie die Standardstile Ihrer Formularelemente ändern müssen, definieren Sie eine Stilrichtlinie, um Konsistenz bei all Ihren Formularsteuerungen sicherzustellen, sodass das Benutzererlebnis nicht zerstört wird. Sie können auch einige anspruchsvolle Techniken untersuchen, z.B. [Widgets mit JavaScript neu erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls). Aber in diesem Fall zögern Sie nicht, [Ihrem Kunden für solch eine Torheit Gebühren zu erheben](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig, sicherzustellen, dass Sie Legacy-Browser nicht brechen. Bevor Sie Features verwenden, die in den Browsern, die Sie anvisieren, nicht vollständig unterstützt werden, sollten Sie eine Feature-Erkennung durchführen:

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formularsteuerungs-Widget stylen, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten, {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnativer Gestaltung anzuzeigen oder, wie bei dem Wert `none`, die plattformnative Basenentstehung zu entfernen.

### Unaufdringliches JavaScript

Eine der größten Herausforderungen ist die Verfügbarkeit von APIs. Aus diesem Grund gilt die Arbeit mit „unaufdringlichem“ JavaScript als bewährte Praxis. Es ist ein Entwicklungsmuster mit zwei Anforderungen:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code bricht, müssen die Inhalte und die grundlegenden Funktionen zugänglich und nutzbar bleiben.

[Die Prinzipien des unaufdringlichen JavaScripts](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com verfasst) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Performance

Auch wenn einige Polyfills sehr auf Performance bedacht sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei Legacy-Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein Thema für sich, aber Legacy-Browser sind sehr empfindlich dafür: grundsätzlich sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Also sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit Legacy-Browsern, um zu sehen, wie sie tatsächlich performen. Manchmal führt der Verzicht auf einige Funktionen zu einem besseren Benutzererlebnis als dieselbe Funktionalität in allen Browsern zu haben. Als letzte Erinnerung, denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist es wichtig, das Standard-Erscheinungsbild von Formularsteuerungen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um diese Probleme zu behandeln; das Beherrschen aller von ihnen liegt aber außerhalb des Umfangs dieses Artikels. Das Grundprinzip ist, zu überlegen, ob sich die Änderung der Standardimplementierung lohnt, bevor man sich der Herausforderung stellt.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie sich nun bei der Verwendung von Formularen sicher fühlen. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.
