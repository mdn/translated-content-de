---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein mehrzeiliges Nur-Text-Bearbeitungssteuerfeld, das nützlich ist, wenn Sie Benutzern die Eingabe einer größeren Menge an freiformatiertem Text erlauben möchten, zum Beispiel einen Kommentar auf einem Bewertungs- oder Feedbackformular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine Reihe von Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}} Element zu verknüpfen, um es zugänglich zu machen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der an den Server gesendet wird, wenn das Formular abgeschickt wird.
- `rows`- und `cols`-Attribute, um eine exakte Größe für das `<textarea>` anzugeben. Diese festzulegen ist eine gute Idee für Konsistenz, da sich die Browser-Standardwerte unterscheiden können.
- Standardinhalt, der zwischen den öffnenden und schließenden Tags eingegeben wird. `<textarea>` unterstützt das `value`-Attribut nicht.

Das `<textarea>` Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert des Steuerfelds vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld für jede Verwendung eingeben oder das Dokument bietet seine eigene Autovervollständigungsmethode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten automatisch vervollständigen, die der Benutzer bei früheren Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von Leerzeichen-getrennten Autofill-Detail-Token, optional vorangestellt durch ein Sektions-Token, ein Abrechnungs- oder Versandgruppen-Token und/oder ein Token, das den Typ des Empfängers identifiziert.

    `<textarea>` Elemente, die das `autocomplete` Attribut nicht spezifizieren, erben den `autocomplete` `on` oder `off` Status des Formularbesitzers des `<textarea>`. Der Formularbesitzer ist entweder das {{HTMLElement("form")}} Element, von dem dieses `<textarea>` Element ein Nachfahre ist, oder das Formularelement, dessen `id` durch das `form` Attribut des Input-Elements angegeben ist. Weitere Informationen finden Sie im Attribut [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete) in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Ein String, der angibt, ob die automatische Rechtschreibkorrektur und Textsubstitutionen (falls konfiguriert) aktiviert werden sollen, während der Benutzer dieses `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Aktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.

- `autofocus`
  - : Dieses boolesche Attribut lässt Sie angeben, dass ein Formularelement bei Laden der Seite den Eingabefokus haben soll. Nur ein formularassoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite des Textsteuerelements in durchschnittlichen Zeichenbreiten. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textausrichtung der Elementinhalte anzugeben. Weitere Informationen finden Sie im Attribut [`dirname`](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom enthaltenden Element, zum Beispiel {{ HTMLElement("fieldset") }}; wenn es kein enthaltendes Element gibt, wenn das `disabled` Attribut gesetzt ist, wird das Steuerelement aktiviert.
- `form`
  - : Das Formularelement, dem das `<textarea>` Element zugeordnet ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>` Element ein Nachfahre eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>` Elemente überall innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name des Steuerelements.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in das Steuerelement eingegeben werden kann. Zeilenumbrüche oder Zeilenvorschübe innerhalb des Platzhalters müssen als Zeilenumbrüche behandelt werden, wenn der Hinweis angezeigt wird.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel des Datentyps zu zeigen, der in ein Formular eingegeben werden sollte; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}} Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine ausführliche Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Im Gegensatz zum `disabled` Attribut verhindert das `readonly` Attribut nicht, dass der Benutzer auf das Steuerelement klickt oder es auswählt. Der Wert eines Nur-Lese-Steuerelements wird dennoch mit dem Formular abgesendet.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut spezifiziert, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgesendet werden kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es spezifiziert ist, muss es eine positive Ganzzahl sein. Wenn es nicht spezifiziert ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)

  - : Gibt an, ob das `<textarea>` der Rechtschreibprüfung durch den zugrundeliegenden Browser/OS unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie das Steuerelement den Wert für die Formularübertragung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerelements ist; das [`cols`](#cols) Attribut muss spezifiziert sein, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber es werden keine zusätzlichen Zeilenumbrüche in den Wert eingefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild in `white-space: pre`, sodass Zeilenabschnitte, die die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}} Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, wobei sein Box-Modell, seine Schriftarten, Farbpaletten usw. mit regulärem CSS leicht manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`s.

### Inkonsistenz der Basislinie

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedlichen Positionen. Bei Gecko wird die `<textarea>`-Basislinie auf der Basislinie der ersten Zeile des Textareas gesetzt, bei einem anderen Browser könnte sie am unteren Rand des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textarea veränderbar ist

In den meisten Browsern sind `<textarea>`s veränderbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, der zum Ändern der Größe des Elements auf der Seite verwendet werden kann. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Resizing ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize` Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>` Elements (z. B. diejenigen innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen) können unter Verwendung der Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrer Textarea je nach Gültigkeit einen anderen Rand zu geben:

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

Das folgende Beispiel zeigt eine Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, etwas Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px in der Breite und 130px in der Höhe vergrößern können:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen — von 10 bzw. 20. Probieren Sie es aus.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Minimum fällt, aber es macht den eingegebenen Wert der `<textarea>` ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength` Wert festgelegt haben (z. B. 3), ein leeres `<textarea>` immer noch als gültig betrachtet wird, es sei denn, Sie haben auch das `required` Attribut gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen Platzhalter gesetzt. Beachten Sie, wie er verschwindet, wenn Sie anfangen, in das Feld zu tippen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel des Datentyps zu zeigen, der in ein Formular eingegeben werden sollte; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}} Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine ausführliche Erklärung.

### Deaktivierte und schreibgeschützte Textareas

Dieses Beispiel zeigt zwei `<textarea>`s — eine ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eine ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das `readonly` Element ist fokussierbar und sein Wert wird in Formularen eingesendet.
Der Wert des `disabled` Elements wird nicht eingesendet und es ist nicht fokussierbar.

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

{{EmbedLiveSample('disabled_and_readonly_textareas', '', '230')}}

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
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelisteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >etikettierter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbarer Inhalt</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbarer Inhalt</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
          >formular-assoziiertes</a
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
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role"
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
      <td>{{domxref("HTMLTextAreaElement")}}</td>
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
