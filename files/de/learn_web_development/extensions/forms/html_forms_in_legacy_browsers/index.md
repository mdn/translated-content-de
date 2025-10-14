---
title: HTML-Formulare in veralteten Browsern
short-title: Formulare in veralteten Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr rauer Ort ist. Unser größter Fluch sind veraltete Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte benutzen, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Mit dieser Wildnis umzugehen, ist Teil der Arbeit. Glücklicherweise gibt es ein paar Tricks, die helfen können, die meisten der durch veraltete Browser verursachten Probleme zu lösen. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt es nicht fehl: es verwendet einfach den Standardwert `type=text`.

## Erfahren Sie mehr über die Probleme

Um allgemeine Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies gerade auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die in einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wollen, die "netter" oder "mit fortgeschrittener Funktionalität" sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage des Designs oder der Technologie. Vielmehr geht es um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [Forms Usability auf UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Graceful Degradation ist der beste Freund eines Webentwicklers

[Graceful Degradation und Progressive Enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es ermöglichen, großartige Dinge zu erstellen, indem eine breite Palette von Browsern gleichzeitig unterstützt wird. Wenn Sie etwas für einen modernen Browser erstellen und sicherstellen möchten, dass es, auf die eine oder andere Weise, auch in veralteten Browsern funktioniert, betreiben Sie Graceful Degradation.

Lassen Sie uns einige Beispiele im Zusammenhang mit HTML-Formularen betrachten.

#### HTML Input-Typen

Alle HTML-Input-Typen sind in allen Browsern anwendbar, selbst in alten, da ihr Rückfall hochgradig vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt es zurück, als wäre der Wert `text`.

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
          alt="Screenshot des Farbeingabefeldes auf Chrome für macOS"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screenshot des Farbeingabefeldes auf Firefox für macOS"
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

Das {{HTMLElement("input")}}-Element kann es etwas schwierig machen, wenn Sie versuchen, CSS mit dem Element-Selektor anzuwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rand bei allen Inputs entfernen, können wir das Standardaussehen für Input-Buttons nur mit dem globalen CSS-Wert {{cssxref('revert')}} wiederherstellen.

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

### Begrenzen Sie das Styling in veralteten Browsern

Eines der großen Probleme mit HTML-Formularen in veralteten Browsern ist, sie mit CSS zu stylen. Wie andernorts behandelt, können Sie {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Standardstile zu entfernen und Ihre eigenen darauf aufzubauen. Allerdings unterstützen veraltete Browser die früher im Modul behandelten Styling-Techniken weniger als moderne Browser. Es könnte besser sein, Formularsteuerelemente in veralteten Browsern ungestylt zu lassen, wenn Sie sie unterstützen müssen. Siehe den nächsten Abschnitt für Ratschläge zur Erkennung der Unterstützung für bestimmte Input-Typen.

Wenn Sie die Standardstile Ihrer Formular-Widgets in veralteten Browsern ändern müssen, definieren Sie einen Styleguide, um Konsistenz zwischen allen Ihren Formularsteuerelementen zu gewährleisten, damit die Benutzererfahrung nicht zerstört wird. Sie könnten auch einige schwierige Techniken wie das [Rekonstruieren von Widgets mit JavaScript](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) untersuchen, aber es könnte mehr Ärger bringen, als es wert ist.

## Feature-Erkennung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie keine veralteten Browser kaputt machen. Bevor Sie Funktionen verwenden, die in Ihren gezielten Browsern nicht vollständig unterstützt werden, sollten Sie eine Funktionserkennung durchführen.

### CSS-Feature-Erkennung

Bevor Sie ein ersetztes Formularsteuerungs-Widget stylen, können Sie überprüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mit plattformnative Styling anzuzeigen oder, wie bei dem Wert `none`, das standardmäßig plattformspezifische Styling zu entfernen.

### JavaScript-Formulareingabe-Erkennung

Sie können JavaScript verwenden, um zu erkennen, ob ein bestimmter Eingabetyp unterstützt wird. Dies basiert auf der zuvor genannten Tatsache — dass alle Eingabetypen in nicht unterstützenden Browsern auf `<input type="text">` zurückfallen.

Definieren Sie eine Testfunktion. Die erste Zeile des Funktionskörpers sollte ein Test-`<input>`-Element erstellen. Setzen Sie als Nächstes das `type`-Attribut auf den Typ, den Sie testen möchten. Schließlich testen Sie den Wert des `type`-Attributs. In Browsern, die diesen Eingabetyp nicht unterstützen, hat die letzte Zeile keinen Effekt und das `type`-Attribut wird als `text` zurückgegeben. In der unteren Zeile kehren wir den Rückgabewert mit dem Negationsoperator (`!`) um, weil wenn das `type` nicht `text` ist, der Typ unterstützt wird, also wollen wir `true` zurückgeben. Die vollständige Funktion sieht folgendermaßen aus:

```js
function testDatetimeLocalSupport() {
  const testInput = document.createElement("input");
  testInput.setAttribute("type", "datetime-local");
  return testInput.type !== "text";
}
```

Das obige Beispiel zeigt die grundlegende Idee hinter solchen Tests. Anstatt das Rad neu zu erfinden, sollten Sie jedoch eine Funktions-Erkennungsbibliothek verwenden, um solche Tests durchzuführen.

Basierend auf den Ergebnissen dieses Tests könnten Sie dann beispielsweise JavaScript verwenden, um einen benutzerdefinierten Ersatz für den nicht unterstützten Typ zu erstellen, oder ein Stylesheet, das den nicht unterstützten Typ styled, nicht anwenden, weil Sie einfache Standardstile für veraltete Browser bereitstellen möchten.

### Unauffälliges JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unauffälligem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code nicht funktioniert, müssen der Inhalt und die Grundfunktionen weiterhin zugänglich und benutzbar sein.

[Die Prinzipien von unauffälligem JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich geschrieben von Peter-Paul Koch für dev.opera.com) beschreiben diese Ideen sehr gut.

### Achten Sie auf die Leistung

Auch wenn einige Polyfills sich sehr der Leistung bewusst sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist insbesondere bei veralteten Browsern kritisch; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber veraltete Browser sind sehr empfindlich darauf: im Grunde sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Sie sind also doppelt belastet im Vergleich zu modernen Browsern. Testen Sie Ihren Code mit veralteten Browsern, um zu sehen, wie sie tatsächlich funktionieren. Manchmal führt das Fallenlassen einiger Funktionen zu einer besseren Benutzererfahrung, als in allen Browsern die exakt gleiche Funktionalität zu haben. Als letzte Erinnerung, denken Sie immer an die Endbenutzer.

## Fazit

Wie Sie sehen, ist es wichtig, das Standarderscheinungsbild von Formularsteuerungen in Browsern und Betriebssystemen zu berücksichtigen. Es gibt viele Techniken, um diese Probleme zu handhaben; jedoch ist die Beherrschung all dieser Techniken jenseits des Umfangs dieses Artikels. Die grundlegende Prämisse ist zu überlegen, ob es die Arbeit wert ist, die Standardimplementierung zu ändern, bevor man sich dieser Herausforderung stellt.

Wenn Sie alle Artikel dieses [HTML-Formular-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie nun in der Lage sein, Formulare sicher zu verwenden. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte mit, den Leitfaden zu verbessern.
