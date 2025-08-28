---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein mehrzeiliges Plain-Text-Bearbeitungsfeld, das nützlich ist, wenn Benutzer eine größere Menge an freiem Text eingeben sollen, zum Beispiel einen Kommentar in einem Bewertungs- oder Feedback-Formular.

{{InteractiveExample("HTML Demo: &lt;textarea&gt;", "tabbed-standard")}}

```html interactive-example
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

```css interactive-example
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 1px #999999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

Das obige Beispiel demonstriert eine Reihe von Merkmalen des `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Es ist sinnvoll, diese zu setzen, um Konsistenz zu gewährleisten, da die Standardeinstellungen der Browser unterschiedlich sein können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt abzurufen oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen Anfangswert zu erhalten oder zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert außerdem mehrere Attribute, die normalerweise für Formular-`<input>`s gelten, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und wenn ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Steuert, ob eingegebener Text automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:
    - `off`: Der Benutzer muss bei jeder Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument bietet seine eigene Vervollständigungsmethode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei früheren Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autofill-Detail-Token, optional vorangegangen von einem Sektions-Token, einem Zahlungs- oder Versand-Token und/oder einem Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der im Formular des `<textarea>`-Formularbesitzers festgelegt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, dessen Nachfolger das `<textarea>`-Element ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet. Zulässige Werte sind:
    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textsubstitutionen.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses Boolesche Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Element im Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Texteingabe, in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung innerhalb des Elementinhalts anzugeben. Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht spezifiziert ist, übernimmt das Steuerelement die Einstellungen des übergeordneten Elements, zum Beispiel {{ HTMLElement("fieldset") }}; wenn es kein übergeordnetes Element gibt, wenn das `disabled`-Attribut gesetzt ist, wird das Steuerelement aktiviert.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das Formularelement, dem das `<textarea>`-Element zugeordnet ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im gleichen Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachfolger eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren und nicht nur als Nachfolger von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer eingeben sollte.
- `name`
  - : Der Name des Steuerelements.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Ein Hinweis an den Benutzer, was in das Steuerelement eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhaltertexts müssen als Zeilenumbrüche beim Rendern des Hinweises behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Sehen Sie sich [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung an.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Anders als das `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerelement klickt oder auswählt. Der Wert eines schreibgeschützten Steuerelements wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular gesendet wird.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/OS unterzogen wird. Der Wert kann sein:
    - `true`: Zeigt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Zeigt an, dass das Element nach einem Standardverhalten handeln soll, das möglicherweise auf den `spellcheck`-Wert des übergeordneten Elements basiert.
    - `false`: Zeigt an, dass das Element nicht auf Rechtschreibung überprüft werden sollte.

- `wrap`
  - : Gibt an, wie das Steuerelement den Wert für die Formularübermittlung umschließen soll. Mögliche Werte sind:
    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerelements ist; das [`cols`](#cols)-Attribut muss angegeben werden, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild in `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetzbares Element")}} — es hat intrinsische Dimensionen, ähnlich wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, da sein Boxmodell, seine Schriftarten, Farbgebung usw. über reguläres CSS leicht manipulierbar sind.

[Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, sodass verschiedene Browser sie an verschiedenen Positionen setzen. Für Gecko wird die `<textarea>`-Grundlinie auf der Grundlinie der ersten Zeile des Textbereichs gesetzt, in einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} dafür; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird von der CSS-Eigenschaft {{ cssxref("resize") }} gesteuert — das Skalieren ist standardmäßig aktiviert, aber Sie können es explizit mit einem `resize`-Wert von `none` deaktivieren:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. jene innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich eine andere Umrandung zu geben, abhängig davon, ob er gültig oder ungültig ist:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl von Zeilen und Spalten, einem Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch skalieren:

```html
<textarea name="textarea" rows="5" cols="15">Write something here</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example')}}

### Beispiel mit "minlength" und "maxlength"

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen — von 10 bzw. 20. Probieren Sie es aus und sehen Sie.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Write something here…
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Example using "minlength" and "maxlength"')}}

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die Anzahl der eingegebenen Zeichen unter das Minimum fällt, es macht jedoch den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass ein leeres `<textarea>` trotz eingestelltem `minlength`-Wert (z. B. 3) als gültig betrachtet wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit "Platzhalter"

Dieses Beispiel hat einen Platzhalter gesetzt. Beachten Sie, wie er verschwindet, wenn Sie beginnen, in das Feld zu tippen.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Comment text."></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('Example using "placeholder"')}}

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _keine_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Sehen Sie sich [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung an.

### Deaktivierte und nur lesbare Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled).
Sie können den Inhalt keines der Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
Der Wert des `disabled`-Elements wird nicht übermittelt und es ist nicht fokussierbar.

```html
<textarea name="textarea" rows="5" cols="30" readonly>
I am a read-only textarea.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
I am a disabled textarea.
</textarea>
```

```css
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample('disabled_and_readonly_text_areas', '', '230')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschreibbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        > und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role"
            >textbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Formular-bezogene Elemente:
  - {{ HTMLElement("form") }}
  - {{ HTMLElement("button") }}
  - {{ HTMLElement("datalist") }}
  - {{ HTMLElement("legend") }}
  - {{ HTMLElement("label") }}
  - {{ HTMLElement("select") }}
  - {{ HTMLElement("optgroup") }}
  - {{ HTMLElement("option") }}
  - {{ HTMLElement("input") }}
  - {{ HTMLElement("fieldset") }}
  - {{ HTMLElement("output") }}
  - {{ HTMLElement("progress") }}
  - {{ HTMLElement("meter") }}
