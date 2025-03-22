---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein mehrzeiliges Textbearbeitungsfeld, das nützlich ist, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge an Freiformtext einzugeben, beispielsweise einen Kommentar zu einer Bewertung oder ein Feedback-Formular.

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
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

Das obige Beispiel zeigt eine Reihe von Merkmalen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Es ist eine gute Idee, diese zu setzen, um Konsistenz zu gewährleisten, da sich die Standardeinstellungen der Browser unterscheiden können.
- Das `<textarea>`-Element spezifiziert seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen dessen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder zu setzen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen anfänglichen Wert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für `<input>`-Formulareingaben üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Kontrolliert, ob eingegebener Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf den Werten, die der Benutzer bei vorherigen Anwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von mit Leerzeichen getrennten Autofill-Detail-Token, die optional von einem Abschnitts-Token, einem Rechnungs- oder Versand-Gruppierungs-Token und/oder einem Token, das den Typ des Empfängers identifiziert, vorausgegangen sein können.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der für den Formulareigentümer des `<textarea>` gesetzt ist. Der Formulareigentümer ist entweder der {{HTMLElement("form")}}-Element, dessen Nachkomme dieses `<textarea>`-Element ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Für weitere Informationen siehe das [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Kontrolliert, ob die automatische Rechtschreibkorrektur und Textverarbeitung während der Bearbeitung dieses `textarea` durch den Benutzer aktiviert ist.
    Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textersetzungen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textersetzungen.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses boolesche Attribut erlaubt es Ihnen anzugeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben sollte. Nur ein formspezifisches Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite des Texteingabefeldes, in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Inhaltselements anzuzeigen.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerelementeinstellung von dem enthaltenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; wenn es kein enthaltendes Element gibt, sobald das `disabled`-Attribut gesetzt ist, wird die Steuerelemente aktiviert.
- `form`
  - : Das Formelelement, das mit dem `<textarea>`-Element verknüpft ist (seinen "Formulareigentümer"). Der Wert des Attributs muss die `id` eines Formelementes im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formelements sein. Dieses Attribut ermöglicht es, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachkommen von Formelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in das Steuerelement eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhaltertextes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten anzuzeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit dem Eingang verbunden ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in der Steuerung klickt oder sie auswählt. Der Wert eines schreibgeschützten Steuerelements wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer vor dem Absenden eines Formulars einen Wert ausfüllen muss.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob `<textarea>` von der zugrunde liegenden Browser/OS-Rechtschreibprüfung unterzogen werden soll. Der Wert kann sein:

    - `true`: Gibt an, dass das Element hinsichtlich Rechtschreibung und Grammatik überprüft werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten handeln soll, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss hierfür angegeben sein, um wirksam zu werden.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche dem Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, lautet der Standardwert `soft`.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "Ersetztes Element")}} — es hat intrinsische Dimensionen, wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formelementen ist es relativ einfach zu stylen, da das Boxmodell, die Schriftarten, das Farbschema usw. leicht mit regulärem CSS manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`.

### Inkonsistenz der Basislinie

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` liegt, sodass verschiedene Browser sie an unterschiedlichen Positionen platzieren. Für Gecko wird die `<textarea>`-Basislinie auf die Basislinie der ersten Zeile des Textarea gesetzt, bei einem anderen Browser kann sie auf den unteren Rand des `<textarea>`-Rahmens gesetzt werden. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung der Größenänderbarkeit eines Textarea

In den meisten Browsern sind `<textarea>es` veränderbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{ cssxref("resize") }}-CSS-Eigenschaft gesteuert — das Ändern der Größe ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Stylen gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen) können mit den {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich je nach Gültigkeit oder Ungültigkeit eine andere Umrandung zu geben:

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

Das folgende Beispiel zeigt ein Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, einem Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch ändern können:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen — von 10 bzw. 20. Probieren Sie es aus.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Minimum sinkt, aber es macht den Wert, der in das `<textarea>` eingegeben wird, ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert (z.B. 3) festgelegt haben, ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalterwert gesetzt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten anzuzeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit dem Eingang verbunden ist. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt beider Elemente nicht bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließtext</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrase-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >übermittelbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >mit Formular verknüpfter</a
        >
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrase-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>Keine <code>Rolle</code> erlaubt</td>
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

- Andere formularbezogene Elemente:
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
