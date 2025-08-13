---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<textarea>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein mehrzeiliges Bearbeitungselement für Klartext. Es ist nützlich, wenn Sie Benutzern erlauben möchten, eine große Menge an Freitext einzugeben, beispielsweise einen Kommentar in einem Bewertungs- oder Feedbackformular.

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

Das obige Beispiel demonstriert mehrere Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>`-Element aus Barrierefreiheitsgründen mit einem {{htmlelement("label")}}-Element zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, mit denen Sie eine genaue Größe für das `<textarea>` festlegen können. Das Setzen dieser Attribute ist eine gute Idee, um Konsistenz sicherzustellen, da sich die Standardwerte der Browser unterscheiden können.
- Das `<textarea>`-Element gibt seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich an:
  - In HTML wird der Anfangsinhalt eines `<textarea>` zwischen den öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript verfügen `<textarea>`-Elemente über eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, mit der der aktuelle Inhalt abgerufen oder festgelegt werden kann, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue) zum Abrufen und Festlegen des Anfangswertes (äquivalent zum Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere gemeinsame Attribute von Form-`<input>`s, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, wie.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Steuert, ob eingegebener Text automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:
    - `off`: Der Benutzer muss bei jeder Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument liefert seine eigene Auto-Vervollständigungs-Methode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten automatisch vervollständigen, die der Benutzer bei vorherigen Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von autofill Detail-Token, die durch Leerzeichen getrennt sind, optional vorangestellt durch ein Segmentierungstoken, ein Rechnungs- oder Versandgruppentoken und/oder ein Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den `autocomplete` `on`- oder `off`-Status, der auf dem `<textarea>`-Formular-Owner gesetzt ist. Der Formular-Owner ist entweder das {{HTMLElement("form")}}-Element, dessen Nachkomme das `<textarea>`-Element ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben ist. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:
    - `on`
      - : Automatische Rechtschreibkorrektur und Textersetzungen aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textersetzungen deaktivieren.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses Boolesche Attribut lässt Sie festlegen, dass ein Formularelement den Eingabefokus haben sollte, wenn die Seite geladen wird. Nur ein form assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite des Textelements, in durchschnittlicher Zeichenbreite. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wird es nicht angegeben, ist der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textausrichtung des Inhalts des Elements anzugeben.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom enthaltenen Element, z.B. {{ HTMLElement("fieldset") }}; wenn es kein enthaltenes Element gibt, wenn das `disabled`-Attribut gesetzt wird, bleibt das Steuerelement aktiviert.
- `form`
  - : Das Formular-Element, mit dem das `<textarea>`-Element verknüpft ist (sein „Formular-Owner“). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die eingegeben werden muss.
- `name`
  - : Der Name des Steuerelements.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Ein Hinweis an den Benutzer, was im Steuerelement eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhaltertextes müssen bei der Darstellung des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Anders als das `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in das Steuerelement klickt oder es auswählt. Der Wert eines schreibgeschützten Steuerelements wird immer noch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer vor dem Absenden eines Formulars einen Wert eingeben muss.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wird es nicht angegeben, ist der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/OS unterzogen wird. Der Wert kann sein:
    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden soll.
    - `default`: Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung geprüft werden soll.

- `wrap`
  - : Gibt an, wie das Steuerelement den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:
    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerelements ist; das [`cols`](#cols)-Attribut muss angegeben werden, damit dies wirksam wird
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber es werden keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert jedoch das Erscheinungsbild zu `white-space: pre`, sodass Zeilensegmente, die `cols` überschreiten, nicht umbrochen und das `<textarea>`-Element horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat intrinsische Dimensionen, ähnlich einem Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, wobei sein Box-Modell, seine Schriftarten, sein Farbschema usw. leicht mit regulärem CSS manipuliert werden können.

[Styling HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`-Elementen.

### Basislinien-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, sodass verschiedene Browser sie an unterschiedliche Positionen setzen. Bei Gecko wird die `<textarea>`-Basislinie auf der Basislinie der ersten Zeile des Textarea gesetzt, bei einem anderen Browser möglicherweise am unteren Rand des `<textarea>`-Rahmens. Verwenden Sie {{cssxref("vertical-align", "vertical-align: baseline")}} nicht darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich größenveränderbar ist

In den meisten Browsern sind `<textarea>`-Elemente größenveränderbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, mit dem die Größe des Elements auf der Seite verändert werden kann. Dies wird durch die {{cssxref("resize")}} CSS-Eigenschaft gesteuert — das Ändern der Größe ist standardmäßig aktiviert, kann jedoch durch einen `resize`-Wert von `none` ausdrücklich deaktiviert werden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-Pseudoklassen hervorgehoben werden. Zum Beispiel, um dem Textbereich eine andere Umrandung zu geben, je nachdem, ob er gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl an Zeilen und Spalten, einem Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe vergrößern:

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

Dieses Beispiel hat eine minimale und maximale Zeichenanzahl von 10 bzw. 20. Probieren Sie es aus und sehen Sie selbst.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Mindestmaß fällt, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert gesetzt haben (zum Beispiel 3), ein leeres `<textarea>` immer noch als gültig betrachtet wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textfelder

Dieses Beispiel zeigt zwei `<textarea>`-Elemente — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled).
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
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
          >form-assoziiert</a
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role"
            >Textbox</a
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
