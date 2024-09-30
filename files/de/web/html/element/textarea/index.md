---
title: "<textarea>: Das Textarea-Element"
slug: Web/HTML/Element/textarea
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{HTMLSidebar}}

Das **`<textarea>`**-Element von [HTML](/de/docs/Web/HTML) stellt eine mehrzeilige reine Textbearbeitungssteuerung dar, nützlich, wenn Sie den Benutzern ermöglichen möchten, eine beträchtliche Menge an freiformatiertem Text einzugeben, zum Beispiel einen Kommentar in einem Bewertungs- oder Feedback-Formular.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine Reihe von Funktionen von `<textarea>`:

- Ein `id`-Attribut, um die `<textarea>` mit einem {{htmlelement("label")}}-Element für Barrierefreiheitszwecke zu verknüpfen.
- Ein `name`-Attribut, um den Namen des zugehörigen Datenpunkts festzulegen, der beim Absenden des Formulars an den Server gesendet wird.
- `rows`- und `cols`-Attribute, um die genaue Größe anzugeben, die `<textarea>` einnehmen soll. Das Setzen dieser Attribute ist eine gute Idee für Konsistenz, da die Standardwerte in Browsern unterschiedlich sein können.
- Standardinhalt, der zwischen den Anfangs- und Endmarkierungen eingegeben wird. `<textarea>` unterstützt nicht das `value`-Attribut.

Das `<textarea>`-Element akzeptiert auch mehrere Attribute, die allgemein für Formularelemente `<input>` gelten, wie `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly` und `required`.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite des [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-globalen Attributs.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Dieses Attribut gibt an, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann. Mögliche Werte sind:

    - `off`: Der Benutzer muss bei jeder Verwendung explizit einen Wert in dieses Feld eingeben oder das Dokument stellt seine eigene automatische Vervollständigungsmethode bereit; der Browser vervollständigt den Eintrag nicht automatisch.
    - `on`: Der Browser kann den Wert basierend auf Werten, die der Benutzer während vorheriger Verwendungen eingegeben hat, automatisch vervollständigen.
    - [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens): Eine geordnete Menge von durch Leerzeichen getrennten Autovervollständigungs-Detail-Token, optional gefolgt von einem Abschnitts-Token, einem Rechnungs- oder Versandgruppentoken und/oder einem Token, das den Typ des Empfängers identifiziert.

    `<textarea>`-Elemente, die das `autocomplete`-Attribut nicht spezifizieren, erben den `autocomplete`-Status `on` oder `off`, der beim Formulareigentümer des `<textarea>` festgelegt ist. Der Formulareigentümer ist entweder das {{HTMLElement("form")}}-Element, von dem dieses `<textarea>`-Element ein Nachkomme ist, oder das Formularelement, dessen `id` durch das `form`-Attribut des Eingabeelements angegeben wird. Für weitere Informationen siehe das [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-Attribut in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : Ein String, der angibt, ob automatische Rechtschreibkorrektur und Verarbeitung von Textsubstitutionen (wenn konfiguriert) aktiviert wird, während der Benutzer dieses `textarea` bearbeitet. Erlaubte Werte sind:

    - `on`
      - : Aktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.
    - `off`
      - : Deaktiviert automatische Rechtschreibkorrektur und Textsubstitutionen.

- `autofocus`
  - : Dieses boolesche Attribut ermöglicht es Ihnen zu spezifizieren, dass ein Formularsteuerelement den Eingabefokus haben soll, wenn die Seite geladen wird. Nur ein formularzugehöriges Element in einem Dokument kann dieses Attribut angegeben haben.
- `cols`
  - : Die sichtbare Breite der Textsteuerung in durchschnittlichen Zeichenbreiten. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert `20`.
- [`dirname`](/de/docs/Web/HTML/Attributes/dirname)
  - : Dieses Attribut wird verwendet, um die Textrichtung des Elementinhalts anzuzeigen. Weitere Informationen finden Sie im [`dirname`-Attribut](/de/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit der Steuerung interagieren kann. Wenn dieses Attribut nicht angegeben ist, wird die Steuerung von dem umgebenden Element übernommen, zum Beispiel {{ HTMLElement("fieldset") }}; wenn es kein umgebendes Element gibt, wenn das `disabled`-Attribut gesetzt ist, ist die Steuerung aktiviert.
- `form`
  - : Das Formularelement, mit dem das `<textarea>`-Element verknüpft ist (sein "Formulareigentümer"). Der Wert des Attributs muss die `id` eines Formularelements im selben Dokument sein. Wenn dieses Attribut nicht angegeben ist, muss das `<textarea>`-Element ein Nachkomme eines Formularelements sein. Dieses Attribut ermöglicht es Ihnen, `<textarea>`-Elemente überall in einem Dokument zu platzieren, nicht nur als Nachkommen von Formularelementen.
- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - : Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben kann. Wenn dieser Wert nicht angegeben ist, kann der Benutzer eine unbegrenzte Anzahl von Zeichen eingeben.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - : Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer eingeben muss.
- `name`
  - : Der Name der Steuerung.
- [`placeholder`](/de/docs/Web/HTML/Attributes/placeholder)

  - : Ein Hinweis für den Benutzer, was in die Steuerung eingegeben werden kann. Wagenrücklauf oder Zeilenumbrüche innerhalb des Platzhaltertextes müssen beim Rendern des Hinweises als Zeilenumbrüche behandelt werden.

    > [!NOTE]
    > Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

- [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - : Dieses boolesche Attribut zeigt an, dass der Benutzer den Wert der Kontrolle nicht ändern kann. Im Gegensatz zum `disabled`-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer auf die Steuerung klickt oder sie auswählt. Der Wert einer schreibgeschützten Steuerung wird dennoch mit dem Formular übermittelt.
- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Dieses Attribut gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absendet.
- `rows`
  - : Die Anzahl der sichtbaren Textzeilen für die Steuerung. Wenn es angegeben ist, muss es eine positive Ganzzahl sein. Wenn es nicht angegeben ist, beträgt der Standardwert 2.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)

  - : Gibt an, ob die `<textarea>` von der zugrunde liegenden Browser-/Betriebssystem-Rechtschreibprüfung unterzogen werden soll. Der Wert kann sein:

    - `true`: Gibt an, dass das Element auf Rechtschreibung und Grammatik überprüft werden muss.
    - `default` : Gibt an, dass das Element gemäß einem Standardverhalten agieren soll, möglicherweise basierend auf dem eigenen `spellcheck`-Wert des übergeordneten Elements.
    - `false` : Gibt an, dass das Element nicht auf Rechtschreibung überprüft werden soll.

- `wrap`

  - : Gibt an, wie die Steuerung den Wert für die Formularübermittlung umbrechen soll. Mögliche Werte sind:

    - `hard`: Der Browser fügt automatisch Zeilenumbrüche (CR+LF) ein, sodass jede Zeile nicht breiter als die Steuerung ist; das [`cols`](#cols)-Attribut muss festgelegt werden, damit dies wirksam wird.
    - `soft`: Der Browser stellt sicher, dass alle Zeilenumbrüche im eingegebenen Wert ein `CR+LF`-Paar sind, aber keine zusätzlichen Zeilenumbrüche zum Wert hinzugefügt werden.
    - `off` {{non-standard_inline}}: Wie `soft`, ändert aber das Aussehen zu `white-space: pre`, sodass Zeilenabschnitte, die `cols` überschreiten, nicht umbrochen werden und die `<textarea>` horizontal scrollbar wird.

    Wenn dieses Attribut nicht angegeben ist, ist `soft` sein Standardwert.

## Styling mit CSS

`<textarea>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) — es hat intrinsische Abmessungen, wie ein Rasterbild. Standardmäßig ist sein {{cssxref("display")}}-Wert `inline-block`. Im Vergleich zu anderen Formularelementen ist es relativ einfach zu stylen, da sein Box-Modell, seine Schriftarten, sein Farbschema usw. mit normalem CSS leicht manipulierbar sind.

[Styling HTML Forms](/de/docs/Learn/Forms/Styling_web_forms) bietet einige nützliche Tipps zum Styling von `<textarea>`s.

### Inkonstante Grundlinie

Die HTML-Spezifikation definiert nicht, wo die Grundlinie eines `<textarea>` liegt, sodass verschiedene Browser sie an unterschiedlichen Positionen setzen. Bei Gecko liegt die `<textarea>`-Grundlinie auf der Grundlinie der ersten Zeile der Textarea, in einem anderen Browser könnte sie auf der Unterseite der `<textarea>`-Box liegen. Verwenden Sie nicht {{cssxref("vertical-align", "vertical-align: baseline")}} darauf; das Verhalten ist unvorhersehbar.

### Steuerung, ob eine Textarea skalierbar ist

In den meisten Browsern sind `<textarea>`s skalierbar — Sie bemerken den Ziehgriff in der rechten unteren Ecke, mit dem Sie die Größe des Elements auf der Seite ändern können. Dies wird durch die {{ cssxref("resize") }} CSS-Eigenschaft gesteuert — das Skalieren ist standardmäßig aktiviert, aber Sie können es explizit deaktivieren, indem Sie einen `resize`-Wert von `none` verwenden:

```css
textarea {
  resize: none;
}
```

### Styling von gültigen und ungültigen Werten

Gültige und ungültige Werte eines `<textarea>`-Elements (z. B. solche, die innerhalb und außerhalb der durch `minlength`, `maxlength` oder `required` festgelegten Grenzen liegen) können mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen hervorgehoben werden. Um beispielsweise Ihrer Textarea einen anderen Rahmen zu geben, je nachdem, ob sie gültig oder ungültig ist:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Beispiele

### Grundbeispiel

Das folgende Beispiel zeigt eine Textarea mit einer festgelegten Anzahl von Zeilen und Spalten, einem standardmäßigen Inhalt und CSS-Stilen, die verhindern, dass Benutzer das Element breiter als 500px und höher als 130px ändern:

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

Dieses Beispiel hat eine Mindest- und Höchstanzahl von Zeichen — jeweils 10 und 20. Probieren Sie es aus und sehen Sie selbst.

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

Beachten Sie, dass `minlength` den Benutzer nicht daran hindert, Zeichen zu entfernen, sodass die Anzahl der eingegebenen Zeichen unter das Minimum geht, aber der eingegebene Wert im `<textarea>` ungültig wird. Beachten Sie auch, dass, selbst wenn Sie einen `minlength`-Wert setzen (z. B. `3`), ein leeres `<textarea>` immer noch als gültig angesehen wird, es sei denn, Sie haben auch das `required`-Attribut gesetzt.

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
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie sind _kein_ Ersatz für ein richtiges {{HTMLElement("label")}}-Element, das mit der Eingabe verbunden ist. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für eine vollständige Erklärung.

### Deaktivierte und schreibgeschützte Textareas

Dieses Beispiel zeigt zwei `<textarea>`s — eines ist [`readonly`](/de/docs/Web/HTML/Attributes/readonly), und eines ist [`disabled`](/de/docs/Web/HTML/Attributes/disabled). 
Sie können den Inhalt keines der beiden Elemente bearbeiten, aber das schreibgeschützte Element ist fokussierbar und sein Wert wird in Formularen übermittelt. 
Der Wert des deaktivierten Elements wird nicht übermittelt, und es ist nicht fokussierbar.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >kennzeichnbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
