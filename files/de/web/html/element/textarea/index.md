---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar}}

Das **`<textarea>`** [HTML](/de/docs/Web/HTML)-Element stellt eine mehrzeilige Eingabesteuerung für einfachen Text dar, die nützlich ist, wenn Sie Benutzern erlauben möchten, eine beträchtliche Menge an freiformuliertem Text einzugeben, zum Beispiel einen Kommentar in einem Bewertungs- oder Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine Reihe von Funktionen des `<textarea>`:

- Ein `id`-Attribut zur Verknüpfung des `<textarea>` mit einem {{htmlelement("label")}}-Element aus Barrierefreiheitsgründen.
- Ein `name`-Attribut zum Festlegen des Namens des zugehörigen Datenpunkts, der beim Absenden des Formulars an den Server gesendet wird.
- `rows` und `cols`-Attribute, um eine exakte Größe für das `<textarea>` festzulegen. Es ist sinnvoll, diese festzulegen, um Konsistenz zu gewährleisten, da die Standardwerte in verschiedenen Browsern variieren können.
- Standardinhalt, der zwischen den öffnenden und schließenden Tags eingegeben wird. `<textarea>` unterstützt das `value`-Attribut nicht.

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die für Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss den Wert bei jeder Verwendung explizit eingeben, oder das Dokument bietet seine eigene Auto-Vervollständigungsmethode; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten vervollständigen, die der Benutzer bei vorherigen Verwendungen eingegeben hat.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autofill-Detail-Token, optional gefolgt von einem Abschnittstoken, einem Rechnungs- oder Versandgruppierungstoken und/oder einem Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der auf dem `<textarea>`-Formularbesitzer festgelegt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Weitere Informationen finden Sie im Attribut [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete) in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Eine Zeichenfolge, die angibt, ob die automatische Rechtschreibkorrektur und Textsubstitutionen (falls konfiguriert) während der Bearbeitung dieses `textarea` aktiviert werden. Erlaubte Werte sind:

    - `on`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen deaktivieren.

- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen zu spezifizieren, dass eine Formulareingabekontrolle beim Laden der Seite den Eingabefokus haben sollte. Nur ein Element, das mit einem Formular verknüpft ist, kann dieses Attribut im Dokument spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Falls angegeben, muss es eine positive Ganzzahl sein. Falls nicht angegeben, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung der Elementinhalte anzuzeigen. Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umschließenden Element, z.B. {{ HTMLElement("fieldset") }}; falls es kein umschließendes Element gibt, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verknüpft ist (sein „Formulareigentümer“). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall im Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Codierungseinheiten), die der Benutzer eingeben sollte.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer darauf, was in die Steuerung eingegeben werden kann. Wagenrückläufe oder Zeilenwechsel innerhalb des Platzhaltertextes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten anzuzeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert `readonly` jedoch nicht, dass der Benutzer in der Steuerung klickt oder Text auswählt. Der Wert einer schreibgeschützten Steuerung wird trotzdem mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor das Formular abgeschickt werden kann.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Falls angegeben, muss es eine positive Ganzzahl sein. Falls nicht angegeben, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/OS unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten handeln soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht rechtschreibgeprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss angegeben sein, damit dies wirksam wird.
    - `soft`: Der Browser sorgt dafür, dass alle Zeilenwechsel im eingegebenen Wert ein `CR+LF`-Paar sind, fügt jedoch keine zusätzlichen Zeilenumbrüche zum Wert hinzu.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert jedoch das Erscheinungsbild zu `white-space: pre`, sodass Linienabschnitte, die `cols` überschreiten, nicht umgebrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` sein Standardwert.

## Gestaltung mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Dimensionen, ähnlich einem Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu gestalten, da das Boxmodell, die Schriftarten, das Farbschema usw. mit regulärem CSS leicht manipulierbar sind.

[HTML-Formulare gestalten](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zur Gestaltung von `<textarea>`s.

### Baseline-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Basislinie eines `<textarea>` ist, sodass verschiedene Browser sie an unterschiedlichen Positionen setzen. Bei Gecko wird die `<textarea>`-Basislinie auf die Basislinie der ersten Zeile des Textbereichs gesetzt. Bei einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt werden. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob ein Textbereich skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie werden den Ziehgriff in der rechten unteren Ecke bemerken, der verwendet werden kann, um die Größe des Elements auf der Seite zu ändern. Dies wird durch die CSS-Eigenschaft {{ cssxref("resize") }} gesteuert — die Größenänderung ist standardmäßig aktiviert, aber Sie können sie explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen) können mithilfe der Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Zum Beispiel, um Ihrem Textbereich eine andere Umrandung zu geben, je nachdem, ob er gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textarea mit einer festen Anzahl von Zeilen und Spalten, einigen Standardinhalten und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500px Breite und 130px Höhe skalieren:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen — jeweils 10 und 20. Probieren Sie es aus und sehen Sie es sich an.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die eingegebene Anzahl die Mindestanzahl unterschreitet, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass selbst wenn Sie einen `minlength`-Wert (zum Beispiel 3) festgelegt haben, ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut festgelegt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten anzuzeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein ordentliches {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgeführt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_"
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
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
