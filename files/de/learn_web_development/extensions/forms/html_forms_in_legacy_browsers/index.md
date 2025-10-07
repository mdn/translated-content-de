---
title: HTML-Formulare in älteren Browsern
short-title: Formulare in älteren Browsern
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

Alle Webentwickler lernen sehr schnell (und manchmal schmerzhaft), dass das Web ein sehr herausfordernder Ort für sie ist. Unser größter Fluch sind ältere Browser. Früher bedeutete das "Internet Explorer", aber es gibt Millionen von Menschen, die alte Geräte verwenden, insbesondere Mobiltelefone, bei denen weder der Browser noch das Betriebssystem aktualisiert werden können.

Der Umgang mit dieser Wildnis ist Teil des Jobs. Glücklicherweise gibt es ein paar Tricks, die Ihnen helfen können, die meisten Probleme zu lösen, die durch ältere Browser verursacht werden. Wenn ein Browser einen HTML-{{htmlelement('input')}}-Typ nicht unterstützt, schlägt er nicht fehl: Er verwendet einfach den Standardwert `type=text`.

## Informieren Sie sich über die Probleme

Um gängige Muster zu verstehen, hilft es, Dokumentationen zu lesen. Wenn Sie dies auf [MDN](/) lesen, sind Sie an der richtigen Stelle, um zu beginnen. Überprüfen Sie einfach die Unterstützung der Elemente (oder DOM-Schnittstellen), die Sie verwenden möchten. MDN bietet Kompatibilitätstabellen für die meisten Elemente, Eigenschaften und APIs, die auf einer Webseite verwendet werden können.

Da [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) komplexe Interaktionen beinhalten, gibt es eine wichtige Regel: Halten Sie es einfach, auch bekannt als das "[KISS-Prinzip](https://en.wikipedia.org/wiki/KISS_principle)". Es gibt so viele Fälle, in denen wir Formulare wollen, die "schöner" oder "mit erweiterten Funktionen" sind, aber effiziente HTML-Formulare zu erstellen, ist keine Frage von Design oder Technologie. Vielmehr geht es um Einfachheit, Intuitivität und Benutzerfreundlichkeit. Das Tutorial, [Forms Usability auf UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) erklärt es gut.

### Sanfter Rückgang ist der beste Freund des Webentwicklers

[Sanfter Rückgang und progressive Verbesserung](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) sind Entwicklungsmuster, die es Ihnen ermöglichen, großartige Dinge zu bauen, indem Sie gleichzeitig eine breite Palette von Browsern unterstützen. Wenn Sie etwas für einen modernen Browser bauen und sicherstellen möchten, dass es irgendwie auch in älteren Browsern funktioniert, führen Sie einen sanften Rückgang durch.

Schauen wir uns einige Beispiele im Zusammenhang mit HTML-Formularen an.

#### HTML-Eingabetypen

Alle HTML-Eingabetypen sind in allen Browsern verwendbar, auch in sehr alten, da die Art und Weise, wie sie herabstufen, sehr vorhersehbar ist. Wenn ein Browser den Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs eines {{HTMLElement("input")}}-Elements nicht kennt, fällt er zurück, als wäre der Wert `text`.

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
          alt="Bildschirmfoto des Farbeingabewerts in Chrome für Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Bildschirmfoto des Farbeingabewerts in Firefox für Mac OSX"
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

Das {{HTMLElement("input")}}-Element kann die Sache etwas schwierig machen, wenn Sie versuchen, einige CSS durch die Verwendung des Elementselektors anzuwenden:

```html
<input type="button" value="click me" />
```

Wenn wir den Rahmen bei allen Eingaben entfernen, können wir das Standarderscheinungsbild für Eingabeschaltflächen nur mit dem globalen CSS-Wert {{cssxref('revert')}} wiederherstellen.

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

### Begrenzen Sie Styling in älteren Browsern

Ein großes Problem bei HTML-Formularen in älteren Browsern ist das Styling mit CSS. Wie an anderer Stelle behandelt, können Sie {{cssxref('appearance', 'appearance: none;')}} deklarieren, um die Standardstile zu entfernen und Ihre eigenen darauf aufzubauen. Allerdings unterstützen ältere Browser die zuvor im Modul behandelten Styling-Techniken weniger als moderne Browser. Es wäre besser, Formularelemente in älteren Browsern ungestylt zu lassen, wenn Sie sie unterstützen müssen. Lesen Sie den nächsten Abschnitt, um Ratschläge zur Erkennung der Unterstützung bestimmter Eingabetypen zu erhalten.

Wenn Sie die Standardstile Ihrer Formularwidgets in älteren Browsern ändern müssen, definieren Sie eine Stilrichtlinie, um Konsistenz zwischen all Ihren Formularelementen zu gewährleisten, damit das Benutzererlebnis nicht zerstört wird. Sie könnten auch einige schwierige Techniken wie [Widgets mit JavaScript neu aufbauen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls) untersuchen, aber es könnte mehr Mühe machen, als es wert ist.

## Funktionsentdeckung und Polyfills

CSS und JavaScript sind großartige Technologien, aber es ist wichtig sicherzustellen, dass Sie keine älteren Browser kaputtmachen. Bevor Sie Funktionen verwenden, die in den von Ihnen anvisierten Browsern nicht vollständig unterstützt werden, sollten Sie Funktionserkennung verwenden.

### CSS-Funktionserkennung

Bevor Sie ein ersetztes Formularsteuerungs-Widget stylen, können Sie prüfen, ob der Browser die Funktionen unterstützt, die Sie verwenden möchten {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

Die {{cssxref('appearance')}}-Eigenschaft kann verwendet werden, um ein Element mittels plattformnativer Stile darzustellen oder, wie es mit dem Wert `none` durchgeführt wird, standardmäßig auf plattformnativer basierte Stile zu verzichten.

### JavaScript-Formular-Eingabeerkennung

Sie können JavaScript verwenden, um zu erkennen, ob ein bestimmter Eingabetyp unterstützt wird. Dies basiert auf der zuvor erwähnten Tatsache — dass jeder Eingabetyp in nicht unterstützenden Browsern auf `<input type="text">` zurückfällt.

Definieren Sie eine Testfunktion. Die erste Zeile des Funktionskörpers sollte ein Test-`<input>`-Element erstellen. Setzen Sie als Nächstes dessen `type`-Attribut auf den Typ, den Sie testen möchten. Schließlich testen Sie den Wert des `type`-Attributs. In Browsern, die diesen Eingabetyp nicht unterstützen, hat die letzte Zeile keine Auswirkung und `type` wird als `text` zurückgegeben. In der untenstehenden Zeile invertieren wir den Rückgabewert mithilfe des Negationsoperators (`!`), denn wenn `type` nicht `text` ist, dann ist der Typ unterstützt, und wir möchten `true` zurückgeben. Die vollständige Funktion sieht so aus:

```js
function testDatetimeLocalSupport() {
  const testInput = document.createElement("input");
  testInput.setAttribute("type", "datetime-local");
  return testInput.type !== "text";
}
```

Das obige Beispiel zeigt die grundlegende Idee hinter solchen Tests. Anstatt das Rad neu zu erfinden, sollten Sie jedoch eine Funktionserkennungsbibliothek verwenden, um solche Tests durchzuführen.

Basierend auf den Ergebnissen dieses Tests könnten Sie dann beispielsweise JavaScript verwenden, um einen benutzerdefinierten Ersatz für den nicht unterstützten Typ zu erstellen, oder Sie könnten ein Stylesheet, das den nicht unterstützten Typ stylt, nicht anwenden, weil Sie einfache Standardstile für ältere Browser bereitstellen möchten.

### Unaufdringliches JavaScript

Eines der größten Probleme ist die Verfügbarkeit von APIs. Aus diesem Grund gilt es als Best Practice, mit "unaufdringlichem" JavaScript zu arbeiten. Es ist ein Entwicklungsmuster, das zwei Anforderungen definiert:

- Eine strikte Trennung zwischen Struktur und Verhalten.
- Wenn der Code fehlschlägt, müssen die Inhalte und die grundlegenden Funktionen zugänglich und nutzbar bleiben.

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (ursprünglich von Peter-Paul Koch für dev.opera.com geschrieben) beschreibt diese Ideen sehr gut.

### Achten Sie auf die Leistung

Obwohl einige Polyfills sehr leistungsbewusst sind, kann das Laden zusätzlicher Skripte die Leistung Ihrer Anwendung beeinträchtigen. Dies ist besonders kritisch bei älteren Browsern; viele von ihnen haben eine sehr langsame JavaScript-Engine, die die Ausführung all Ihrer Polyfills für den Benutzer schmerzhaft machen kann. Leistung ist ein eigenes Thema, aber ältere Browser sind sehr empfindlich darauf: Im Grunde sind sie langsam und je mehr Polyfills sie benötigen, desto mehr JavaScript müssen sie verarbeiten. Sie sind daher im Vergleich zu modernen Browsern doppelt belastet. Testen Sie Ihren Code mit älteren Browsern, um zu sehen, wie sie tatsächlich abschneiden. Manchmal führt das Weglassen einiger Funktionen zu einem besseren Benutzererlebnis, als in allen Browsern exakt dieselben Funktionen zu haben. Als letzte Erinnerung: Denken Sie immer an die Endnutzer.

## Fazit

Wie Sie sehen, ist es wichtig, die Standarddarstellung von Formularsteuerelementen im Browser und Betriebssystem in Betracht zu ziehen. Es gibt viele Techniken, um diese Probleme zu handhaben; jedoch alles davon zu beherrschen, liegt außerhalb des Umfangs dieses Artikels. Die Grundvoraussetzung ist jedoch, zu überlegen, ob es den Aufwand wert ist, die Standardimplementierung zu ändern, bevor Sie sich der Herausforderung stellen.

Wenn Sie alle Artikel dieses [HTML Forms-Leitfadens](/de/docs/Learn_web_development/Extensions/Forms) gelesen haben, sollten Sie nun in der Lage sein, Formulare zu verwenden. Wenn Sie neue Techniken oder Hinweise entdecken, helfen Sie bitte, den Leitfaden zu verbessern.
