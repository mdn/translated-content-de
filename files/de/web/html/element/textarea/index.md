---
title: "<textarea>: Das Textbereich-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: fbc03f30b971a45aac03d7eaac73d295f3753465
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein mehrzeiliges Bearbeitungsfeld für Klartext, nützlich, wenn Sie Benutzern ermöglichen möchten, eine beträchtliche Menge an Freitext einzugeben, beispielsweise ein Kommentar in einem Bewertungs- oder Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel demonstriert eine Reihe von Features von `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>`-Element für Barrierefreiheitszwecke mit einem {{htmlelement("label")}}-Element zu verknüpfen.
- Ein `name`-Attribut, um den Namen des beim Absenden des Formulars übermittelten Datenpunkts festzulegen.
- `rows`- und `cols`-Attribute, mit denen Sie eine genaue Größe für das `<textarea>` festlegen können. Das Festlegen dieser Attribute ist eine gute Idee für Konsistenz, da die Browser-Standardeinstellungen variieren können.
- Das `<textarea>`-Element gibt seinen Inhalt in HTML- und JavaScript-Kontexten unterschiedlich an:
  - In HTML wird der anfängliche Inhalt eines `<textarea>` zwischen seinen öffnenden und schließenden Tags angegeben, nicht als `value`-Attribut.
  - In JavaScript verfügen `<textarea>`-Elemente über eine [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft, die verwendet werden kann, um den aktuellen Inhalt abzurufen oder festzulegen, und [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue), um den anfänglichen Wert zu erhalten und festzulegen (entspricht dem Zugriff auf den Textinhalt des HTML-Elements).

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Steuert, ob eingetippter Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Siehe die Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss explizit bei jeder Verwendung einen Wert in dieses Feld eingeben oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer bei vorherigen Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von Leerzeichen-getrennten Autofill-Detailtoken, die optional durch ein Abschnitts-Token, ein Abrechnungs- oder Versandgruppierungs-Token und/oder ein Token zur Identifizierung des Empfängertyps vorangestellt werden können.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht angeben, übernehmen den `autocomplete`-`on`- oder `off`-Status, der im Formularbesitzer des `<textarea>`-Elements festgelegt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` von dem `form`-Attribut des Eingabeelements angegeben wird. Weitere Informationen finden Sie im [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Ein String, der angibt, ob automatische Rechtschreibkorrektur und Textsubstitutionen (falls konfiguriert) während der Bearbeitung dieses `textarea` aktiviert werden sollen. Erlaubte Werte sind:

    - `on`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen deaktivieren.

- `autofocus`
  - : Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass ein Formularsteuerelement den Eingabefokus erhält, wenn die Seite geladen wird. Nur ein steuerelementbezogenes Element in einem Dokument kann dieses Attribut angegeben haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung, angegeben in durchschnittlichen Zeichenbreiten. Falls es angegeben wird, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben wird, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Inhalts des Elements anzugeben. Weitere Informationen finden Sie auf der Seite zum [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, z.B. {{HTMLElement("fieldset")}}; gibt es kein umgebendes Element beim Setzen des `disabled`-Attributs, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verknüpft ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Falls dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall im Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Falls dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Stringlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenumfüge innerhalb des Platzhaltertextes müssen bei der Darstellung des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses Boolean-Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer innerhalb der Steuerung klickt oder auswählt. Der Wert einer schreibgeschützten Steuerung wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgeschickt werden kann.
- `rows`
  - : Die Anzahl sichtbarer Textzeilen für die Steuerung. Falls es angegeben wird, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben wird, beträgt der Standardwert `2`.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/das Betriebssystem unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element hinsichtlich Rechtschreibung und Grammatik geprüft werden muss.
    - `default` : Gibt an, dass das Element entsprechend einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht automatisch einer Rechtschreibprüfung unterzogen werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umschließen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss für diese Wirkung angegeben sein
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF` paarweise sind, aber es werden dem Wert keine zusätzlichen Zeilenumbrüche hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, aber ändert das Erscheinungsbild zu `white-space: pre`, sodass Liniensegmente, die `cols` überschreiten, nicht umgebrochen werden und der `<textarea>` wird horizontal scrollbar.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, ähnlich einem Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Verglichen mit anderen Formularelementen ist es relativ einfach zu stylen, da das Boxmodell, die Schriftarten, das Farbschema usw. mit regulärem CSS einfach manipulierbar sind.

[HTML-Formulare gestalten](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`-Feldern.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedliche Positionen. Bei Gecko wird die Grundlinie des `<textarea>` auf die Grundlinie der ersten Zeile des Textbereichs gesetzt, bei einem anderen Browser kann sie am unteren Rand der `<textarea>`-Box angesetzt sein. Vermeiden Sie es, {{cssxref("vertical-align", "vertical-align: baseline")}} darauf anzuwenden; das Verhalten ist unvorhersehbar.

### Steuerung der Größe eines Textbereichs

In den meisten Browsern sind `<textarea>`-Felder anpassbar — Sie werden feststellen, dass der Ziehgriff in der rechten unteren Ecke verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft kontrolliert — das Ändern der Größe ist standardmäßig aktiviert, aber Sie können es explizit mit einem `resize`-Wert von `none` deaktivieren:

```css
textarea {
  resize: none;
}
```

### Stylen von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. diejenigen innerhalb und außerhalb der vom `minlength`, `maxlength` oder `required` gesetzten Grenzen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich je nach Gültigkeit eine andere Umrandung zu geben:

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

Das folgende Beispiel zeigt ein Textbereich mit einer festgelegten Anzahl von Zeilen und Spalten, etwas voreingestelltem Inhalt und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe vergrößern:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen — von 10 bzw. 20. Probieren Sie es aus und sehen Sie selbst.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl unter das Minimum fällt, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert gesetzt haben (z.B. 3), ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das an die Eingabe gebunden ist. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textbereiche

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
Sie können den Inhalt beider Elemente nicht bearbeiten, aber das schreibgeschützte Element ist fokussierbar und sein Wert wird in Formularen übermittelt.
Der Wert des deaktivierten Elements wird nicht übermittelt und es ist nicht fokussierbar.

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
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
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
          >formularassoziiertes</a
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
      <td>Keine, sowohl der öffnende als auch der schließende Tag sind obligatorisch.</td>
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
