---
title: "HTML-Attribut: readonly"
short-title: readonly
slug: Web/HTML/Attributes/readonly
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das Boolesche **`readonly`** Attribut, wenn es vorhanden ist, macht das Element nicht veränderbar, was bedeutet, dass der Benutzer das Steuerelement nicht bearbeiten kann.

{{InteractiveExample("HTML Demo: readonly", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" value="Adam" />

<label for="age">Age:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">Hobbies:</label>
<textarea id="hobbies" name="hobbies" readonly>Baseball</textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## Übersicht

Wenn das `readonly` Attribut bei einem Eingabeelement angegeben ist, nimmt das Element, da der Benutzer die Eingabe nicht bearbeiten kann, nicht an der Eingabewertüberprüfung teil.

Das `readonly` Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, und `{{HTMLElement("input/number","number")}}` {{HTMLElement("input")}} Typen und den {{HTMLElement("textarea")}} Formularelementen unterstützt. Wenn bei einem dieser Eingabetypen und Elemente vorhanden, wird die {{cssxref(':read-only')}} Pseudoklasse übereinstimmend sein. Ist das Attribut nicht enthalten, wird die {{cssxref(':read-write')}} Pseudoklasse übereinstimmend sein.

Das Attribut wird nicht von {{HTMLElement("select")}} oder nicht veränderbaren Eingabetypen unterstützt oder ist nicht relevant, wie zum Beispiel `{{HTMLElement("input/checkbox","checkbox")}}` und `{{HTMLElement("input/radio","radio")}}` oder kann definitionsgemäß nicht mit einem Wert starten, wie der `{{HTMLElement("input/file","file")}}` Eingabetyp. `{{HTMLElement("input/range","range")}}` und `{{HTMLElement("input/color","color")}}`, da beide Standardwerte haben. Es wird auch nicht von `{{HTMLElement("input/hidden","hidden")}}` unterstützt, da nicht erwartet werden kann, dass ein Benutzer ein Formular ausfüllt, das versteckt ist. Auch wird es nicht von irgendeinem der Button-Typen, inklusive `image`, unterstützt.

> [!NOTE]
> Nur Textsteuerungen können schreibgeschützt gemacht werden, da es für andere Steuerungen (wie Kontrollkästchen und Schaltflächen) keinen nützlichen Unterschied zwischen schreibgeschützt und deaktiviert gibt, also gilt das `readonly` Attribut nicht.

Wenn ein Eingabeelement das `readonly` Attribut hat, gilt auch die {{cssxref(":read-only")}} Pseudoklasse dafür. Umgekehrt entsprechen Eingaben, die das `readonly` Attribut unterstützen, aber das Attribut nicht gesetzt haben, der {{cssxref(":read-write")}} Pseudoklasse.

### Attributinteraktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Attributes/disabled) und `readonly` ist, dass schreibgeschützte Steuerungen immer noch funktionieren und fokussierbar sind, während deaktivierte Steuerungen keinen Fokus empfangen und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerungen funktionieren, bis sie aktiviert werden.

Weil ein schreibgeschütztes Feld seinen Wert nicht durch eine Benutzerinteraktion ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben, bei denen das `readonly` Attribut ebenfalls angegeben ist.

Der einzige Weg, den Wert des readonly Attributs dynamisch zu ändern, ist über ein Skript.

> [!NOTE]
> Das `required` Attribut ist bei Eingaben mit dem `readonly` Attribut nicht zulässig.

### Benutzbarkeit

Browser zeigen das `readonly` Attribut an.

### Eingabewertüberprüfung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements vom Benutzer nicht aktualisiert werden und nimmt nicht an der Eingabewertüberprüfung teil.

## Beispiel

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(':read-only')}} und {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
