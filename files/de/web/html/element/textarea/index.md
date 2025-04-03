---
title: "<textarea>: Das Textbereichs-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<textarea>`**-Element [HTML](/de/docs/Web/HTML) stellt ein mehrzeiliges Klartext-Bearbeitungsfeld dar, das nützlich ist, wenn Benutzer eine größere Menge an freiformuliertem Text eingeben sollen, wie zum Beispiel Kommentare zu einer Bewertung oder ein Feedback-Formular.

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

Das obige Beispiel zeigt eine Reihe von Funktionen des `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der bei der Übermittlung des Formulars an den Server gesendet wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Es ist eine gute Idee, diese zu setzen, um Konsistenz zu gewährleisten, da die Browser-Standardeinstellungen unterschiedlich sein können.
- Das `<textarea>`-Element gibt seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich an:
  - In HTML wird der Anfangsinhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript haben `<textarea>`-Elemente eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die zum Abrufen oder Festlegen des aktuellen Inhalts verwendet werden kann, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue) zum Abrufen und Festlegen des Anfangswertes (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formulareingaben `<input>` üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und auf welche Weise.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Steuert, ob eingegebener Text vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit einen Wert in dieses Feld eingeben, oder das Dokument bietet seine eigene Autovervollständigungsmethode; der Browser vervollständigt die Eingabe nicht automatisch.
    - `on`: Der Browser kann den Wert anhand von Werten, die der Benutzer zuvor eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autofill-Detail-Token, optional vorangestellt von einem Abschnitts-Token, einem Rechnungs- oder Versandgruppierungs-Token und/oder einem Token, das den Empfängertyp identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den `autocomplete`-Status `on` oder `off`, der im Besitzerformular des `<textarea>` gesetzt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabefelds spezifiziert wird. Für weitere Informationen siehe das [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)

  - : Bestimmt, ob während der Bearbeitung dieses `textarea` die automatische Rechtschreibkorrektur und Textverarbeitung aktiviert ist.
    Zulässige Werte sind:

    - `on`
      - : Aktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Dieses boolesche Attribut ermöglicht es Ihnen festzulegen, dass ein Formularsteuerelement beim Laden der Seite in den Eingabefokus gerät. Nur ein formassoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Texteingabe, in durchschnittlichen Zeichenbreiten. Falls angegeben, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut gibt die Textrichtung des Elementinhalts an.
    Für weitere Informationen siehe das [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Falls dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umschließenden Element, zum Beispiel {{HTMLElement("fieldset")}}; wenn es kein umschließendes Element gibt, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, dem das `<textarea>`-Element zugeordnet ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements sein, das sich im selben Dokument befindet. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall innerhalb eines Dokuments zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenvorschübe innerhalb des Platzhaltertexts müssen als Zeilenumbrüche behandelt werden, wenn der Hinweis gerendert wird.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer in die Steuerung klickt oder sie auswählt. Der Wert einer nur lesbaren Steuerung wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Falls angegeben, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/Betriebssystem unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass Elemente hinsichtlich ihrer Rechtschreibung und Grammatik überprüft werden müssen.
    - `default`: Gibt an, dass das Element nach einem Standardverhalten handeln soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht hinsichtlich Rechtschreib- oder Grammatikfehlern überprüft werden sollte.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss für diese Wirkung angegeben werden
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche werden dem Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber das Erscheinungsbild wird auf `white-space: pre` geändert, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Falls dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}} – es hat intrinsische Dimensionen, wie ein Rasterbild. Standardmäßig ist der {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formelementen ist es relativ einfach zu stylen, wobei sein Boxmodell, seine Schriftarten, sein Farbschema usw. leicht mit regulärem CSS manipulierbar sind.

[Styling HTML forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedliche Positionen. Für Gecko wird die Basislinie des `<textarea>` auf die Basislinie der ersten Zeile des Textareas gesetzt, bei einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar – Sie werden den Ziehpunkt in der rechten unteren Ecke bemerken, der zum Ändern der Größe des Elements auf der Seite verwendet werden kann. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert – das Skalieren ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich eine andere Umrandung zu geben, je nachdem, ob es gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textfeld mit einer festgelegten Anzahl von Zeilen und Spalten, einem Standardinhalt und CSS-Stilen, die Benutzer daran hindern, das Element mehr als 500px breit und 130px hoch zu skalieren:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen – jeweils 10 und 20. Probieren Sie es aus und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Minimum fällt, aber es macht den eingegebenen Wert im `<textarea>` ungültig. Beachten Sie auch, dass, selbst wenn Sie einen `minlength`-Wert (z. B. 3) festgelegt haben, ein leeres `<textarea>` dennoch als gültig gilt, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

### Beispiel mit "placeholder"

Dieses Beispiel hat einen gesetzten Platzhalter. Beachten Sie, wie er verschwindet, wenn Sie mit dem Tippen in das Feld beginnen.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verknüpft ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textfelder

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >aufgelisteter</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbarer</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#resettable"
          >rücksetzbarer</a
        > und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >übermittbarer</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziierter</a
        >
        Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Öffnungs- als auch der Schlusstag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
