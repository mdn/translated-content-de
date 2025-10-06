---
title: HTML-Formulare in älteren Browsern
short-title: Formulare in älteren Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort für sie ist. Unser schlimmster Fluch sind ältere Browser. Dies bedeutete früher "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte verwenden, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit diesem wilden Umfeld umzugehen, ist Teil des Jobs. Glücklicherweise gibt es einige Tricks, die Ihnen helfen können, die meisten Probleme, die durch ältere Browser verursacht werden, zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Informieren Sie sich über die Probleme

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN hat Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen erfordern, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das „[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)“. Es gibt viele Fälle, in denen wir Formulare wollen, die „schöner“ oder „mit erweiterten Funktionen“ sind, aber der Bau effizienter HTML-Formulare ist keine Frage von Design oder Technologie. Es geht vielmehr um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial [Forms Usability on UX For The Masses](https://www.uxforthemasses.com/forms-usability/) erklärt das gut.

### Sanfte Verschlechterung ist der beste Freund eines Webentwicklers

[Sanfte Verschlechterung und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen, indem Sie eine Vielzahl von Browsern gleichzeitig unterstützen. Wenn Sie etwas für einen modernen Browser entwickeln und sicherstellen möchten, dass es auf die eine oder andere Weise auch auf älteren Browsern funktioniert, betreiben Sie sanfte Verschlechterung.

Sehen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Input-Typen

Alle HTML-Input-Typen sind in allen Browsern nutzbar, sogar in sehr alten, weil ihre Verschlechterung sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, wird er darauf zurückfallen, als ob der Wert `text` wäre.

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
          alt="Bildschirmfoto des Farbeingabefelds auf Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Bildschirmfoto des Farbeingabefelds auf Firefox für Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formularschaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf die Werte `button`, `submit`, `reset` oder `image` gesetzt
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Dinge etwas erschweren, wenn Sie versuchen möchten, einige CSS durch die Verwendung des Elementauswählers anzuwenden:

```html
<input type="button" value="click me" />
```

Wenn wir die Umrandung bei allen Eingaben entfernen, können wir das Standarderscheinungsbild für Eingabe-Schaltflächen nur mit dem globalen CSS {{cssxref('revert')}}-Wert wiederherstellen.

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

### Stilbeschränkungen in älteren Browsern

Eines der großen Probleme mit HTML-Formularen in älteren Browsern ist deren Stilgestaltung mit CSS. Wie an anderer Stelle behandelt, können Sie {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Standardstile zu entfernen und Ihre eigenen darauf aufzubauen. Allerdings unterstützen ältere Browser weniger wahrscheinlich die im früheren Modul behandelten Stiltechniken im Vergleich zu modernen Browsern. Es könnte besser sein, die Formularsteuerelemente in älteren Browsern ungestylt zu lassen, wenn Sie diese unterstützen müssen. Siehe den nächsten Abschnitt für Ratschläge zur Erkennung der Unterstützung für bestimmte Eingabetypen.

Wenn Sie die Standardstile Ihrer Formular-Widgets in älteren Browsern ändern müssen, definieren Sie einen Stil-Leitfaden, um Konsistenz unter all Ihren Formularsteuerelementen sicherzustellen, sodass die Benutzererfahrung nicht zerstört wird. Sie könnten auch einige schwierige Techniken wie [Erstellung von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) untersuchen, aber es könnte mehr Ärger als Nutzen sein.

## Funktionsprüfung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie ältere Browser nicht außer Acht lassen. Bevor Sie Funktionen verwenden, die in den von Ihnen abgestrebten Browsern nicht vollständig unterstützt werden, sollten Sie eine Funktionsprüfung durchführen.

### CSS-Funktionsprüfung

Bevor Sie ein Formular-Steuerelement mit ersetztem Widget gestalten, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnativen Stil darzustellen oder, wie es mit dem Wert `none` gemacht wird, den Standardplattform-Stil zu entfernen.

### JavaScript-Formular-Eingabeprüfung

Sie können JavaScript verwenden, um zu erkennen, ob ein bestimmter Eingabetyp unterstützt wird. Dies basiert auf der zuvor erwähnten Tatsache, dass jeder Eingabetyp in nicht unterstützenden Browsern auf `<input type="text">` zurückfällt.

1. Definieren Sie eine Testfunktion. Die erste Zeile des Funktionskörpers sollte ein Test-`<input>`-Element erstellen:

   ```js
   function testDatetimeLocalSupport() {
     const testInput = document.createElement("input");
   ```

2. Setzen Sie als Nächstes das `type`-Attribut auf den Typ, den Sie testen möchten:

   ```js-nolint
     testInput.setAttribute("type", "datetime-local");
   ```

3. Testen Sie nun den Wert des `type`-Attribus. In Browsern, die diesen Eingabetyp nicht unterstützen, hat die letzte Zeile keine Wirkung und der `type` wird als `text` zurückgegeben. In der folgenden Zeile kehren wir den Rückgabewert mithilfe des Negationsoperators (`!`) um, da wenn der `type` nicht `text` ist, der Typ unterstützt wird und wir `true` zurückgeben möchten:

   ```js
     return testInput.type !== "text";
   }
   ```

Das obige Beispiel zeigt die grundlegende Idee solcher Tests. Anstatt das Rad neu zu erfinden, sollten Sie jedoch eine Funktionsprüfbibliothek wie [Modernizr](https://modernizr.com/) verwenden, um solche Tests durchzuführen.

Auf Grundlage der Ergebnisse dieses Tests könnten Sie sich dann beispielsweise entscheiden, JavaScript zu verwenden, um einen benutzerdefinierten Ersatz für den nicht unterstützten Typ zu erstellen oder ein Stylesheet, das den nicht unterstützten Typ formatiert, nicht anzuwenden, weil Sie einfache Standardstile für ältere Browser bereitstellen möchten.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code bricht, müssen die Inhalte und die grundlegenden Funktionen zugänglich und nutzbar bleiben.

[Die Prinzipien von unauffälligem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für dev.opera.com geschrieben) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Obwohl einige Polyfills sehr auf die Leistung achten, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinflussen. Dies ist besonders kritisch bei älteren Browsern; viele von ihnen verfügen über eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Nutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber ältere Browser sind sehr empfindlich darauf: Sie sind grundsätzlich langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Daher sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihr Code mit älteren Browsern, um zu sehen, wie sie tatsächlich funktionieren. Manchmal führt das Weglassen einiger Funktionen zu einer besseren Benutzererfahrung, als wenn in allen Browsern genau dieselbe Funktionalität vorhanden ist. Als letzten Hinweis: Denken Sie einfach immer an die Endbenutzer.

## Fazit

Wie Sie sehen können, ist es wichtig, das Standarderscheinungsbild von Formular-Steuerelementen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um diese Probleme zu lösen; das Beherrschen aller von ihnen liegt jedoch außerhalb des Umfangs dieses Artikels. Die grundlegende Prämisse besteht darin, zu überlegen, ob es die Arbeit wert ist, die Standardimplementierung zu ändern, bevor Sie sich an die Herausforderung wagen.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie jetzt im Umgang mit Formularen sicher sein. Wenn Sie neue Techniken oder Tipps entdecken, helfen Sie bitte, den Leitfaden zu verbessern.
