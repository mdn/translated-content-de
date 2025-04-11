---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element stellt ein mehrzeiliges Klartext-Bearbeitungsfeld dar, das nützlich ist, wenn Sie Benutzern ermöglichen möchten, eine beträchtliche Menge an freiformatigem Text einzugeben, zum Beispiel einen Kommentar zu einer Bewertung oder ein Feedback-Formular.

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

Das obige Beispiel zeigt eine Reihe von Funktionen von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` für Barrierefreiheitszwecke mit einem {{htmlelement("label")}}-Element zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugeordneten Datensatzes festzulegen, der an den Server übermittelt wird, wenn das Formular abgeschickt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Das Setzen dieser Attribute ist für die Konsistenz eine gute Idee, da die Browser-Standards unterschiedlich sein können.
- Das `<textarea>`-Element gibt seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich an:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript verfügen `<textarea>`-Elemente über eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt abzurufen oder festzulegen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um den anfänglichen Wert zu erhalten und zu setzen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)

  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und wenn ja, in welcher Weise.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : Steuert, ob der eingegebene Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss bei jeder Verwendung explizit einen Wert in dieses Feld eingeben oder das Dokument stellt seine eigene Methode zur automatischen Vervollständigung bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert automatisch basierend auf Werten, die der Benutzer bei früheren Verwendungen eingegeben hat, vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autovervollständigungsdetails, optional vorangestellt von einem Gliederungstoken, einem Abrechnungs- oder Versandgruppierungstoken und/oder einem Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der am Formularbesitzer des `<textarea>` gesetzt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachfahre ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)

  - : Steuert, ob die automatische Rechtschreibprüfung und Textverarbeitung aktiviert ist, während der Benutzer dieses `textarea` bearbeitet.
    Erlaubte Werte sind:

    - `on`
      - : Aktiviert die automatische Rechtschreibkorrektur und Textersatz.
    - `off`
      - : Deaktiviert die automatische Rechtschreibkorrektur und Textersatz.

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Dieses boolesche Attribut lässt Sie angeben, dass ein Formularelement beim Laden der Seite den Eingabefokus haben soll. Nur ein Formular-assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Texteingabe in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Elementinhalts anzugeben.
    Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Reference/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer mit dem Steuerelement nicht interagieren kann. Wenn dieses Attribut nicht angegeben ist, übernimmt das Steuerelement seine Einstellung aus dem umgebenden Element, wie beispielsweise {{ HTMLElement("fieldset") }}; wenn es kein umgebendes Element gibt, ist das Steuerelement aktiviert, wenn das `disabled`-Attribut gesetzt ist.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element assoziiert ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachfahre eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachfahren von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl an Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben soll.
- `name`
  - : Der Name des Steuerelements.
- [`placeholder`](/de/docs/Web/HTML/Reference/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was im Steuerelement eingegeben werden kann. Wagenrückläufe oder Zeilenumbrüche innerhalb des Platzhaltertextes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _nicht_ ein Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerelement klickt oder auswählt. Der Wert eines nur-lesen-Steuerelements wird trotzdem mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgeschickt wird.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` von der zugrunde liegenden Browser-/Betriebssystem-Rechtschreibprüfung überprüft werden soll. Der Wert kann sein:

    - `true`: Gibt an, dass die Rechtschreibung und Grammatik des Elements überprüft werden muss.
    - `default` : Gibt an, dass das Element entsprechend einem Standardverhalten handelt, möglicherweise basierend auf dem `spellcheck`-Wert des Elternelements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie das Steuerelement den Wert für die Formularübermittlung umbrochen werden soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite des Steuerelements ist; das [`cols`](#cols)-Attribut muss angegeben sein, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert aber das Erscheinungsbild in `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, beträgt der Standardwert `soft`.

## CSS-Styling

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} — es hat intrinsische Dimensionen, ähnlich wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, da sein Boxmodell, seine Schriftarten, sein Farbschema usw. durch reguläres CSS leicht manipulierbar sind.

[Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Inkonsistenz der Basislinie

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` liegt, sodass verschiedene Browser sie an verschiedenen Positionen setzen. Bei Gecko wird die `<textarea>`-Basislinie auf die Basislinie der ersten Zeile des Textbereichs gesetzt, bei einem anderen Browser kann sie am unteren Rand der `<textarea>`-Box liegen. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuern, ob ein Textarea größenveränderbar ist

In den meisten Browsern sind `<textarea>`-Elemente größenveränderbar — Sie bemerken den Ziehgriff in der rechten Ecke, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Ändern der Größe ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize`-Wert von `none` festlegen:

```css
textarea {
  resize: none;
}
```

### Styling gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Begrenzungen) können mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich je nach Gültigkeit eine andere Rahmenfarbe zu geben:

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

Das folgende Beispiel zeigt ein Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, einigen Standardinhalten und CSS-Stilen, die verhindern, dass Benutzer das Element mehr als 500px breit und 130px hoch machen:

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

### Beispiel unter Verwendung von "minlength" und "maxlength"

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die Anzahl unter das Minimum fällt, aber es macht den Wert, der in das `<textarea>` eingegeben wurde, ungültig. Beachten Sie auch, dass ein leerer `<textarea>` immer noch als gültig angesehen wird, selbst wenn Sie einen `minlength`-Wert (zum Beispiel 3) festlegen, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel unter Verwendung von "placeholder"

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _nicht_ ein Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) und das andere ist [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled). Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das `readonly`-Element ist fokussierbar und sein Wert wird in Formularen übermittelt. Der Wert des `disabled`-Elements wird nicht übermittelt und es ist nicht fokussierbar.

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
          >etikettierbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-assoziiertes</a
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
      <th scope="row">Zulässige Eltern</th>
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
