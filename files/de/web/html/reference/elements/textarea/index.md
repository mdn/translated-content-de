---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine mehrzeilige Textbearbeitungssteuerung, nützlich, wenn Sie Nutzern die Möglichkeit geben möchten, eine beträchtliche Menge an Freiform-Text einzugeben, wie zum Beispiel einen Kommentar zu einer Rezension oder einem Feedback-Formular.

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

- Ein `id`-Attribut, das es erlaubt, das `<textarea>` für Barrierefreiheitszwecke mit einem {{htmlelement("label")}} Element zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenelements festzulegen, das an den Server übertragen wird, wenn das Formular gesendet wird.
- `rows` und `cols`-Attribute, die es Ihnen ermöglichen, eine genaue Größe für das `<textarea>` festzulegen. Es ist ratsam, diese festzulegen, um Konsistenz zu gewährleisten, da die Standardeinstellungen der Browser unterschiedlich sein können.
- Das `<textarea>` Element gibt seinen Inhalt auf unterschiedliche Weise im HTML- und JavaScript-Kontext an:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>` Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt zu erhalten oder festzulegen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um seinen anfänglichen Wert zu erhalten und festzulegen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>` Element akzeptiert auch mehrere Attribute, die für Form-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)

  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss bei jeder Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten automatisch vervollständigen, die der Benutzer bei vorherigen Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autovervollständigungs-Detail-Token, optional vorangestellt durch ein Abschnitts-Token, ein Rechnungs- oder Versand-Gruppierungs-Token und/oder ein Token, das die Art des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`- `on` oder `off`-Status, der auf den Formulareigentümer des `<textarea>` gesetzt ist. Der Formulareigentümer ist entweder das {{HTMLElement("form")}} Element, von dem dieses `<textarea>` Element abstammt, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)

  - : Steuert, ob die automatische Rechtschreibprüfung und Textverarbeitung aktiviert ist, während der Benutzer diesen `textarea` bearbeitet.
    Erlaubte Werte sind:
    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textersetzungen.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textersetzungen.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses boolesche Attribut erlaubt Ihnen, anzugeben, dass ein Formularsteuerungselement beim Laden der Seite den Eingabefokus haben soll. Nur ein Elemente, das einem Formular zugeordnet ist, kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung, in durchschnittlicher Zeichenbreite. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textausrichtung der Inhaltselemente anzuzeigen. Weitere Informationen finden Sie im [dirname-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben wird, erbt die Steuerung ihre Einstellung von dem sie umgebenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; fehlt ein solches Element, ist die Steuerung aktiviert, wenn das `disabled` Attribut gesetzt ist.
- `form`
  - : Das Formularelement, mit dem das `<textarea>` Element (sein "Formulareigentümer") verknüpft ist. Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>` Element ein Nachfahre eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>` Elemente überall in einem Dokument zu platzieren, nicht nur als Nachfahren von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer eingeben muss.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche im Platzhaltertext müssen beim Rendern des Hinweises als Zeilenbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _keine_ Ersatz für ein ordentliches {{HTMLElement("label")}} Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in die Steuerung klickt oder sie auswählt. Der Wert einer schreibgeschützten Steuerung wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eintragen muss, bevor ein Formular abgeschickt wird.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/OS unterzogen wird. Der Wert kann sein:
    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten handeln soll, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, damit jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols) Attribut muss angegeben werden, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, fügt jedoch keine zusätzlichen Zeilenumbrüche zum Wert hinzu.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert jedoch das Erscheinungsbild in `white-space: pre`, sodass Liniensegmente, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat intrinsische Dimensionen, wie ein Rasterbild. Standardmäßig ist der {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, wobei sein Boxmodell, seine Schriftarten, sein Farbschema usw. mit regulärem CSS leicht anpassbar sind.

[Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`s.

### Basislinien-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, sodass verschiedene Browser sie auf verschiedene Positionen setzen. Für Gecko wird die `<textarea>`-Basislinie auf der Basislinie der ersten Zeile des Textareas gesetzt, bei einem anderen Browser kann sie am unteren Rand des `<textarea>`-Blocks gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich größenveränderbar ist

In den meisten Browsern sind `<textarea>`s größenveränderbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, mit dem die Größe des Elements auf der Seite geändert werden kann. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — die Größenänderung ist standardmäßig aktiviert, aber Sie können sie ausdrücklich mit einem `resize`-Wert von `none` deaktivieren:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche innerhalb und außerhalb der Grenzen, die durch `minlength`, `maxlength` oder `required` gesetzt sind) können mithilfe der {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich eine andere Umrandung zu geben, je nachdem ob er gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textarea mit einer festen Anzahl von Zeilen und Spalten, einem Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe ändern können:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl an Zeichen - 10 bzw. 20. Probieren Sie es aus.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Minimum fällt, aber es macht den eingegebenen Wert im `<textarea>` ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert festgelegt haben (zum Beispiel 3), ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut festgelegt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter festgelegt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _keine_ Ersatz für ein ordentliches {{HTMLElement("label")}} Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`-Elemente — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled).
Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
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

## Technische Übersicht

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
          >Fließtext</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularbezogen</a
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
