---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{HTMLSidebar}}

Das **`<textarea>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert ein mehrzeiliges Klartext-Bearbeitungsfeld. Es ist nützlich, wenn Sie Benutzern erlauben möchten, eine größere Menge an freien Text einzugeben, beispielsweise einen Kommentar zu einer Bewertung oder ein Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel demonstriert eine Reihe von Merkmalen des `<textarea>`:

- Ein `id`-Attribut, um das `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheit zu verbinden.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server übermittelt wird.
- `rows`- und `cols`-Attribute, um eine genaue Größe für das `<textarea>` festzulegen. Es ist ratsam, diese zu setzen, um Konsistenz zu gewährleisten, da die Standardeinstellungen der Browser variieren können.
- Standardinhalt, der zwischen den öffnenden und schließenden Tags eingefügt wird. `<textarea>` unterstützt nicht das `value`-Attribut.

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die bei Formular-`<input>`s üblich sind, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss für jede Verwendung explizit einen Wert in dieses Feld eingeben, oder das Dokument stellt seine eigene Autovervollständigungsmethode bereit; der Browser vervollständigt die Eingabe nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf den Werten, die der Benutzer bei früheren Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Ein geordneter Satz von durch Leerzeichen getrennten Autofill-Detail-Token, möglicherweise vorangestellt durch ein Abschnitts-Token, ein Rechnungs- oder Versandgruppen-Token und/oder ein Token, das den Typ des Empfängers identifiziert.

    `textarea`-Elemente, die das `autocomplete`-Attribut nicht angeben, erben den Status `on` oder `off`, der beim Formularbesitzer des `<textarea>` gesetzt ist. Der Formularbesitzer ist entweder das {{HTMLElement("form")}}-Element, dessen Nachfolger dieses `<textarea>`-Element ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingangselements angegeben wurde. Weitere Informationen finden Sie im [`autocomplete`-Attribut](/de/docs/Web/HTML/Element/form#autocomplete) in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Ein String, der angibt, ob die automatische Rechtschreibkorrektur und die Verarbeitung von Textsubstitutionen (sofern konfiguriert) aktiviert werden sollen, während der Benutzer dieses `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen aktivieren.
    - `off`
      - : Automatische Rechtschreibkorrektur und Textsubstitutionen deaktivieren.

- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es, dass ein Formularelement beim Laden der Seite den Eingabefokus erhält. Es kann nur ein Formular-zugehöriges Element in einem Dokument dieses Attribut spezifiziert haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Inhalts des Elements anzuzeigen. Weitere Informationen finden Sie auf der Seite des [`dirname`-Attributs](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt die Steuerung ihre Einstellung vom umgebenden Element, z.B. {{ HTMLElement("fieldset")}}; wenn kein umgebendes Element existiert, wenn das `disabled`-Attribut gesetzt ist, wird die Steuerung aktiviert.
- `form`
  - : Das Formular-Element, mit dem das `<textarea>`-Element verbunden ist (sein "Formularbesitzer"). Der Wert des Attributs muss die `id` eines Formular-Elements im selben Dokument sein. Ist dieses Attribut nicht angegeben, muss das `<textarea>`-Element ein Nachfolger eines Formular-Elements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall im Dokument zu platzieren, nicht nur als Nachfolger von Formular-Elementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimal erforderliche Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben soll.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrücklauf oder Zeilenumbruch innerhalb des Platzhaltertextes müssen als Zeilenumbrüche behandelt werden, wenn der Hinweis gerendert wird.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Sehen Sie sich [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung an.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer auf die Steuerung klickt oder sie auswählt. Der Wert einer schreibgeschützten Steuerung wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absendet.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive ganze Zahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)

  - : Gibt an, ob das `<textarea>` einer Rechtschreibprüfung durch den zugrunde liegenden Browser/Betriebssystem unterliegt. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default`: Gibt an, dass das Element entsprechend einem Standardverhalten handeln soll, möglicherweise basierend auf dem `spellcheck`-Wert des übergeordneten Elements.
    - `false`: Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert zur Formularübermittlung umschließen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt Zeilenumbrüche (CR+LF) automatisch ein, so dass jede Zeile nicht länger als die Breite der Steuerung ist; das [`cols`](#cols)-Attribut muss angegeben sein, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber es werden keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt.
    - `off` {{non-standard_inline}}: Wie `soft`, jedoch ändert sich das Erscheinungsbild zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und das `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` der Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Abmessungen, ähnlich einem Rasterbild. Standardmäßig hat es den {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, da man sein Box-Modell, die Schriftarten, das Farbschema usw. mithilfe normaler CSS-Regeln leicht anpassen kann.

[Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Stylen von `<textarea>`s.

### Grundlinien-Inkonsistenz

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` ist, daher setzen verschiedene Browser sie an unterschiedliche Positionen. Für Gecko wird die `<textarea>`-Grundlinie auf die Grundlinie der ersten Zeile des Textareas gesetzt; in einem anderen Browser kann sie am unteren Rand des `<textarea>`-Rahmens gesetzt sein. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung der Größenanpassbarkeit eines Textareas

In den meisten Browsern sind `<textarea>`s größenanpassbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, mit dem Sie die Größe des Elements auf der Seite verändern können. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Anpassen ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling gültiger und ungültiger Werte

Gültige und ungültige Werte eines `<textarea>`-Elements (z.B. solche, die innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` gesetzten Grenzen liegen) können mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} hervorgehoben werden. Beispielsweise können Sie Ihrem Textarea einen anderen Rahmen geben, abhängig davon, ob es gültig oder ungültig ist:

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

Das folgende Beispiel zeigt ein Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, etwas Standardinhalt und CSS-Stilen, die verhindern, dass Benutzer das Element auf mehr als 500 Pixel Breite und 130 Pixel Höhe anpassen:

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

Dieses Beispiel hat eine minimale und maximale Anzahl von Zeichen — von 10 bzw. 20. Testen Sie es und sehen Sie.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die Anzahl der eingegebenen Zeichen unter das Minimum fällt, aber es macht den in das `<textarea>` eingegebenen Wert ungültig. Beachten Sie auch, dass ein `<textarea>` selbst dann als gültig betrachtet wird, wenn mit einem `minlength`-Wert von (z.B. 3) konfiguriert, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Sehen Sie sich [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung an.

### Deaktivierte und schreibgeschützte Textareas

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly) und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled).
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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung von Inhalten</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >kennzeichnend</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role"
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
