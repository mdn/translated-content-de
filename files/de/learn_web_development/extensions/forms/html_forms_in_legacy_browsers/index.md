---
title: HTML-Formulare in veralteten Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser schlimmster Fluch sind veraltete Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte benutzen, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, ist Teil des Jobs. Glücklicherweise gibt es einige Tricks, die helfen können, die meisten Probleme zu lösen, die durch veraltete Browser verursacht werden. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet stattdessen einfach den Standardwert `type=text`.

## Lernen Sie die Probleme kennen

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) eine komplexe Interaktion beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wollen, die "schöner" oder "mit erweiterten Funktionen" sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage von Design oder Technologie. Es geht vielmehr um Einfachheit, Intuitivität und einfache Benutzerinteraktion. Das Tutorial [Forms Usability on UX For The Masses](https://www.uxforthemasses.com/forms-usability) erklärt das gut.

### Allmähliche Verschlechterung ist der beste Freund eines Webentwicklers

[Allmähliche Verschlechterung und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsansätze, die es ermöglichen, großartige Dinge zu erstellen, indem ein breites Spektrum von Browsern gleichzeitig unterstützt wird. Wenn Sie etwas für einen modernen Browser erstellen und sicherstellen möchten, dass es auf die eine oder andere Weise in veralteten Browsern funktioniert, betreiben Sie eine allmähliche Verschlechterung.

Lassen Sie uns einige Beispiele in Bezug auf HTML-Formulare betrachten.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern, sogar in sehr alten, verwendbar, da die Art ihrer Verschlechterung hochgradig vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er so zurück, als ob der Wert `text` wäre.

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
          alt="Bildschirmfoto der Farbeingabe in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Bildschirmfoto der Farbeingabe in Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formularschaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Element/input#type) auf die Werte `button`, `submit`, `reset` oder `image` gesetzt.
- Das {{HTMLElement("button")}}-Element.

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Dinge etwas schwierig machen, wenn Sie etwas CSS mit dem Element-Selektor anwenden möchten:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingaben entfernen, können wir dann das Standardaussehen nur auf Eingabeschaltflächen wiederherstellen?

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

### Lassen Sie CSS los

Eines der großen Probleme bei HTML-Formularen ist das Styling von Formular-Widgets mit CSS. Das Erscheinungsbild von Formularsteuerungen ist browser- und betriebssystemabhängig. Zum Beispiel sieht der Eingabetyp Farbe in Safari, Chrome und Firefox anders aus, aber das Farbauswahl-Widget ist auf allen Browsern auf einem Gerät gleich, da es den nativen Farbwähler des Betriebssystems öffnet.

Es ist im Allgemeinen eine gute Idee, das Standardaussehen der Formularsteuerungen nicht zu verändern, da das Ändern eines CSS-Eigenschaftswertes einige Eingabetypen, aber nicht andere beeinflussen kann. Zum Beispiel wird `input { font-size: 2rem; }` die Typen `number`, `date` und `text` beeinflussen, aber nicht `color` oder `range`. Wenn Sie eine Eigenschaft ändern, kann dies die Erscheinung des Widgets auf unerwartete Weise beeinflussen. Beispielsweise könnte `[value] { background-color: #ccc; }` verwendet werden, um jedes {{HTMLElement("input")}} mit einem `value`-Attribut anzusprechen, aber das Ändern der Hintergrundfarbe oder des Rahmenradius bei einem {{HTMLElement("meter")}} wird wahrscheinlich zu unerwarteten Ergebnissen führen, die sich zwischen den Browsern unterscheiden. Sie können {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Browserstile zu entfernen, aber das widerspricht im Allgemeinen dem Zweck: Da Sie alle Stile verlieren, entfernen Sie das Standardaussehen, an das Ihre Besucher gewöhnt sind.

Zusammengefasst: Wenn es darum geht, Formularsteuerungs-Widgets zu stylen, können die Nebenwirkungen von CSS unvorhersehbar sein. Also tun Sie es nicht. Auch wenn es immer noch möglich ist, einige Anpassungen an Textelementen (wie Größe oder Schriftfarbe) vorzunehmen, gibt es immer Nebenwirkungen. Der beste Ansatz bleibt, HTML-Formular-Widgets überhaupt nicht zu stylen. Sie können jedoch weiterhin alle umliegenden Elemente stylen. Und wenn Sie die Standardstile Ihrer Formular-Widgets ändern müssen, definieren Sie einen Styleguide, um Konsistenz bei allen Ihren Formularsteuerungen sicherzustellen, damit die Benutzererfahrung nicht zerstört wird. Sie können auch einige anspruchsvolle Techniken wie das [Neuerstellen von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) untersuchen. Aber in diesem Fall zögern Sie nicht, [Ihrem Kunden für solch eine Torheit Geld zu berechnen](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie veraltete Browser nicht ausbrechen. Bevor Sie Funktionen verwenden, die in den von Ihnen angezielten Browsern nicht vollständig unterstützt werden, sollten Sie die Funktionserkennung durchführen:

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formularsteuerungs-Widget stylen, können Sie überprüfen, ob der Browser die Features unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit platform-nativem Styling anzuzeigen oder, wie mit dem Wert `none`, um das standardmäßige platform-native basierte Styling zu entfernen.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund wird es als best practice angesehen, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen der Inhalt und die grundlegenden Funktionen weiterhin zugänglich und nutzbar sein.

[Die Prinzipien von unaufdringlichem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für Dev.Opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Obwohl einige Polyfills sehr auf die Leistung achten, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei veralteten Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein Thema für sich, aber veraltete Browser sind sehr empfindlich dafür: Im Grunde sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. So sind sie doppelt belastet im Vergleich zu modernen Browsern. Testen Sie Ihren Code in veralteten Browsern, um zu sehen, wie sie tatsächlich performen. Manchmal führt das Weghlassen einiger Funktionalitäten zu einer besseren Benutzererfahrung als die gleiche Funktionalität in allen Browsern zu haben. Als letzte Erinnerung: Denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist das Betrachten des standardmäßigen Erscheinungsbildes von Browser- und Betriebssystem-Formularsteuerungen wichtig. Es gibt viele Techniken, um mit diesen Problemen umzugehen; jedoch ist die Beherrschung all dieser Techniken außerhalb des Umfangs dieses Artikels. Die grundlegende Prämisse besteht darin, zu überlegen, ob die Änderung der Standardimplementierung die Arbeit wert ist, bevor Sie sich der Herausforderung stellen.

Wenn Sie alle Artikel dieses [HTML-Formulare-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie nun in der Lage sein, Formulare sicher zu verwenden. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte mit, den Leitfaden zu verbessern.
