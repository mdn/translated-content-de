---
title: HTML-Formulare in Legacy-Browsern
short-title: Formulare in Legacy-Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 5f3da7dfeb0b6938fcae8a08fc08f9b8aea1ff65
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein ziemlich rauer Ort für sie ist. Unser schlimmster Fluch sind Legacy-Browser. Früher bedeutete dies „Internet Explorer“, aber es gibt Millionen von Menschen, die alte Geräte verwenden, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Der Umgang mit dieser Wildnis gehört zum Job. Glücklicherweise gibt es einige Tricks, die Ihnen helfen können, die meisten durch Legacy-Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Informieren Sie sich über die Probleme

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie am richtigen Ausgangspunkt. Prüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das „[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)“. Es gibt so viele Fälle, in denen wir Formulare möchten, die „schöner“ sind oder „erweiterte Funktionalität“ bieten, aber effiziente HTML-Formulare zu erstellen, ist keine Frage des Designs oder der Technologie. Vielmehr geht es um Einfachheit, Intuitivität und die einfache Interaktion für Benutzer. Das Tutorial [Forms usability auf UX For The Masses](https://www.uxforthemasses.com/forms-usability/) erklärt dies gut.

### Graceful Degradation ist der beste Freund von Webentwicklern

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, mit denen Sie großartige Dinge erstellen und gleichzeitig eine breite Palette von Browsern unterstützen können. Wenn Sie etwas für einen modernen Browser entwickeln und sicherstellen möchten, dass es auf die eine oder andere Weise auch in Legacy-Browsern funktioniert, setzen Sie Graceful Degradation ein.

Sehen wir uns einige Beispiele zu HTML-Formularen an.

#### HTML-Eingabetypen

Alle HTML-Eingabetypen sind in allen Browsern verwendbar, sogar in sehr alten, da die Art ihrer Degradierung äußerst vorhersehbar ist. Wenn ein Browser den Wert des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) eines {{HTMLElement("input")}}-Elements nicht kennt, greift er so zurück, als wäre der Wert `text`.

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
          alt="Screenshot der Farbeingabe in Chrome für macOS"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot der Farbeingabe in Firefox für macOS"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Formularschaltflächen

Es gibt zwei Möglichkeiten, Schaltflächen innerhalb von HTML-Formularen zu definieren:

- Das {{HTMLElement("input")}}-Element mit seinem Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), das auf die Werte `button`, `submit`, `reset` oder `image` gesetzt ist
- Das {{HTMLElement("button")}}-Element

##### {{HTMLElement("input")}}

Das {{HTMLElement("input")}}-Element kann die Sache etwas erschweren, wenn Sie CSS mithilfe des Elementselektors anwenden möchten:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingaben entfernen, können wir das Standardaussehen für Eingabeschaltflächen nur mit dem globalen CSS-Wert {{cssxref('revert')}} wiederherstellen.

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

### Begrenzen Sie die Gestaltung in Legacy-Browsern

Eines der großen Probleme bei HTML-Formularen in Legacy-Browsern ist ihre Gestaltung mit CSS. Wie an anderer Stelle behandelt, können Sie {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Standardstile zu entfernen und darauf eigene Stile aufzubauen. Legacy-Browser unterstützen jedoch mit geringerer Wahrscheinlichkeit als moderne Browser die zuvor im Modul behandelten Gestaltungstechniken. Es könnte besser sein, Formular-Steuerelemente in Legacy-Browsern einfach ungestaltet zu lassen, wenn Sie diese unterstützen müssen. Im nächsten Abschnitt finden Sie Hinweise zur Erkennung der Unterstützung bestimmter Eingabetypen.

Wenn Sie die Standardstile Ihrer Formular-Widgets in Legacy-Browsern ändern müssen, definieren Sie einen Styleguide, um Konsistenz zwischen all Ihren Formular-Steuerelementen sicherzustellen, damit die Benutzererfahrung nicht beeinträchtigt wird. Sie könnten auch einige aufwendige Techniken wie das [Neuerstellen von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) untersuchen, aber dies könnte mehr Aufwand verursachen, als es wert ist.

## Feature-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie Legacy-Browser nicht beeinträchtigen. Bevor Sie Funktionen verwenden, die in den Browsern, auf die Sie abzielen, nicht vollständig unterstützt werden, sollten Sie eine Feature-Erkennung durchführen.

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formular-Steuerelement-Widget gestalten, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie mit {{cssxref('@supports')}} verwenden möchten:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die Eigenschaft {{cssxref('appearance')}} kann verwendet werden, um ein Element mit plattformeigenem Styling darzustellen oder, wie mit dem Wert `none`, das standardmäßige plattformeigene Styling zu entfernen.

### JavaScript-Erkennung von Formular-Eingabetypen

Sie können JavaScript verwenden, um zu erkennen, ob ein bestimmter Eingabetyp unterstützt wird. Dies basiert auf der zuvor erwähnten Tatsache, dass jeder Eingabetyp in nicht unterstützenden Browsern auf `<input type="text">` zurückfällt.

Definieren Sie eine Testfunktion. Die erste Zeile des Funktionsrumpfs sollte ein Test-`<input>`-Element erstellen. Setzen Sie als Nächstes dessen Attribut `type` auf den Typ, den Sie testen möchten. Testen Sie abschließend den Wert des Attributs `type`. In Browsern, die diesen Eingabetyp nicht unterstützen, hat die letzte Zeile keine Wirkung und `type` wird als `text` zurückgegeben. In der folgenden Zeile kehren wir den Rückgabewert mit dem Negationsoperator (`!`) um, weil der Typ unterstützt wird, wenn `type` nicht `text` ist, und wir daher `true` zurückgeben möchten. Die vollständige Funktion sieht folgendermaßen aus:

```js
function testDatetimeLocalSupport() {
  const testInput = document.createElement("input");
  testInput.setAttribute("type", "datetime-local");
  return testInput.type !== "text";
}
```

Das obige Beispiel zeigt die Grundidee hinter solchen Tests. Anstatt jedoch das Rad neu zu erfinden, sollten Sie eine Bibliothek zur Feature-Erkennung verwenden, um solche Tests durchzuführen.

Auf Grundlage der Ergebnisse dieses Tests könnten Sie beispielsweise JavaScript verwenden, um einen benutzerdefinierten Ersatz für den nicht unterstützten Typ zu erstellen, oder kein Stylesheet anwenden, das den nicht unterstützten Typ gestaltet, weil Sie Legacy-Browsern einfache Standardstile bereitstellen möchten.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als bewährte Praxis, mit „unaufdringlichem“ JavaScript zu arbeiten. Dies ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code nicht funktioniert, müssen die Inhalte und die grundlegenden Funktionen zugänglich und nutzbar bleiben.

[Die Prinzipien von unaufdringlichem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für dev.opera.com geschrieben) beschreibt diese Ideen sehr gut.

### Achten Sie auf die Performance

Auch wenn einige Polyfills die Performance stark berücksichtigen, kann das Laden zusätzlicher Skripte die Performance Ihrer Anwendung beeinträchtigen. Dies ist besonders bei Legacy-Browsern kritisch; viele von ihnen verfügen über eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für Benutzer unerquicklich machen kann. Performance ist ein eigenes Thema, aber Legacy-Browser reagieren sehr empfindlich darauf: Grundsätzlich sind sie langsam, und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Daher sind sie im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit Legacy-Browsern, um zu sehen, wie sie tatsächlich funktionieren. Manchmal führt der Verzicht auf bestimmte Funktionalität zu einer besseren Benutzererfahrung, als in allen Browsern exakt dieselbe Funktionalität bereitzustellen. Denken Sie abschließend immer an die Endbenutzer.

## Fazit

Wie Sie sehen können, ist es wichtig, das Standardaussehen von Formular-Steuerelementen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um mit diesen Problemen umzugehen; sie alle zu beherrschen, würde jedoch den Rahmen dieses Artikels sprengen. Die grundlegende Annahme ist, vor Beginn der Herausforderung zu überlegen, ob die Änderung der Standardimplementierung den Aufwand wert ist.

Wenn Sie alle Artikel dieses [Leitfadens zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie sich nun sicher im Umgang mit Formularen fühlen. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte dabei, den Leitfaden zu verbessern.
