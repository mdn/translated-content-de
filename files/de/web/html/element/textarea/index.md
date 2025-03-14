---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element stellt ein mehrzeiliges Klartextbearbeitungsfeld dar, das nützlich ist, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge an Freiformtext einzugeben, zum Beispiel einen Kommentar zu einer Bewertung oder einem Feedback-Formular.

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

Das obige Beispiel zeigt eine Reihe von Merkmalen des `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugeordneten Datenpunkts festzulegen, der beim Senden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Diese festzulegen ist eine gute Idee für Konsistenz, da die Standardwerte in verschiedenen Browsern variieren können.
- Das `<textarea>`-Element gibt seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich an:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags festgelegt, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder festzulegen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um den anfänglichen Wert zu erhalten und festzulegen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die bei Formulareingaben `<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss für jede Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Vervollständigungsmethode bereit; der Browser vervollständigt die Eingabe nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei vorherigen Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von autofill Detail-Token, die durch Leerzeichen getrennt und optional durch einen Sektionierungs-, Abrechnungs- oder Versandgruppierungstoken und/oder einen Token, der die Art des Empfängers identifiziert, eingeleitet sind.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der auf dem Formulareigner des `<textarea>`s festgelegt ist. Der Formulareigner ist entweder das {{HTMLElement("form")}}-Element, dessen Nachkomme dieses `<textarea>`-Element ist, oder das Formularelement, dessen `id` im `form`-Attribut des Eingabeelements angegeben ist. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Steuert, ob die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist, während der Benutzer diesen `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Automatische Rechtschreibkorrektur und Textersatz aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textersatz deaktivieren.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses boolesche Attribut ermöglicht es Ihnen anzugeben, dass ein Formularelement bei Laden der Seite Eingabefokus haben soll. Nur ein Formular-assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite des Texteingabefeldes, in durchschnittlichen Zeichenbreiten. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, ist der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird genutzt um die Textausrichtungsrichtung des Elementinhalts anzuzeigen.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Bedienelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Bedienelement seine Einstellung vom enthaltenen Element, beispielsweise {{HTMLElement("fieldset")}}; wenn kein enthaltendes Element vorhanden ist, wenn das `disabled`-Attribut gesetzt ist, ist das Bedienelement aktiviert.
- `form`
  - : Das Formularelement, dem das `<textarea>`-Element zugeordnet ist (sein "Formulareigner"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name des Bedienelements.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer darauf, was in das Bedienelement eingegeben werden kann. Zeilenumbrüche innerhalb des Platzhaltertextes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen _nicht_ ein geeignetes {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer den Wert des Bedienelements nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Bedienelement klickt oder auswählt. Der Wert eines schreibgeschützten Bedienelements wird trotzdem mit dem Formular gesendet.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut legt fest, dass der Benutzer einen Wert einfügen muss, bevor ein Formular gesendet wird.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Bedienelement. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, ist der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` der Rechtschreibprüfung des zugrundeliegenden Browsers/OS unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik geprüft werden muss.
    - `default` : Gibt an, dass das Element sich gemäß einem Standardverhalten verhält, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung geprüft werden sollte.

- `wrap`

  - : Gibt an, wie das Bedienelement den Wert für die Formularübermittlung umbricht. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Bedienelements ist; das [`cols`](#cols)-Attribut muss hierfür spezifiziert sein.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber es werden keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert jedoch das Erscheinungsbild zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat intrinsische Abmessungen, wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, mit seinem Box-Modell, Schriften, Farbschema etc., die leicht mit regulärem CSS manipulierbar sind.

[Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, sodass verschiedene Browser sie an verschiedenen Positionen setzen. Für Gecko wird die `<textarea>`-Grundlinie auf die Grundlinie der ersten Zeile des Textareas gesetzt, bei einem anderen Browser könnte sie am unteren Rand des `<textarea>`-Rahmens sein. Verwenden Sie weder {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, mit dem die Größe des Elements auf der Seite verändert werden kann. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Ändern der Größe ist standardmäßig aktiviert, aber Sie können es mit einem `resize`-Wert von `none` explizit deaktivieren:

```css
textarea {
  resize: none;
}
```

### Styling gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel um Ihrem Textfeld eine andere Umrandung zu geben, abhängig davon, ob es gültig oder ungültig ist:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Beispiele

### Grundlegendes Beispiel

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl von Zeilen und Spalten, einem Standardinhalt und CSS-Styles, die verhindern, dass Benutzer das Element größer als 500px breit und 130px hoch skalieren können:

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

Dieses Beispiel hat eine minimale und maximale Anzahl an Zeichen — von 10 bzw. 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl die Mindestanzahl unterschreitet, aber es macht den eingegebenen Wert im `<textarea>` ungültig. Beachten Sie außerdem, dass auch wenn Sie einen `minlength`-Wert festgelegt haben (zum Beispiel 3), ein leeres `<textarea>` immer noch als gültig betrachtet wird, es sei denn, Sie haben das `required`-Attribut ebenfalls festgelegt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter festgelegt. Beachten Sie, wie er verschwindet, wenn Sie in das Feld zu tippen beginnen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen _nicht_ ein geeignetes {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können die Inhalte keines der Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formatierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formularverbundenes</a
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formatierungsinhalt</a
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
