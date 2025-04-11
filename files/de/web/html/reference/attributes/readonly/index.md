---
title: "HTML-Attribut: readonly"
short-title: readonly
slug: Web/HTML/Reference/Attributes/readonly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das Boolean-Attribut **`readonly`**, wenn es vorhanden ist, macht das Element nicht veränderbar, was bedeutet, dass der Benutzer das Steuerelement nicht bearbeiten kann.

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

## Überblick

Wenn das `readonly`-Attribut auf einem Eingabe-Element (`input`) angegeben ist, nimmt das Element aufgrund der Tatsache, dass der Benutzer die Eingabe nicht bearbeiten kann, nicht an der Einschränkungsvalidierung teil.

Das `readonly`-Attribut wird von textuellen Formularelementen unterstützt, einschließlich:

- {{HTMLElement("input")}}-Elemente des Typs:
  - `{{HTMLElement("input/text","text")}}`
  - `{{HTMLElement("input/search","search")}}`
  - `{{HTMLElement("input/tel","tel")}}`
  - `{{HTMLElement("input/url","url")}}`
  - `{{HTMLElement("input/email","email")}}`
  - `{{HTMLElement("input/password","password")}}`
  - `{{HTMLElement("input/date","date")}}`
  - `{{HTMLElement("input/month","month")}}`
  - `{{HTMLElement("input/week","week")}}`
  - `{{HTMLElement("input/time","time")}}`
  - `{{HTMLElement("input/datetime-local","datetime-local")}}`
  - `{{HTMLElement("input/number","number")}}`
- {{HTMLElement("textarea")}}

Das Attribut ist für alle anderen Elemente, einschließlich {{HTMLElement("select")}} und {{HTMLElement("button")}}, nicht relevant. Es gilt auch nicht für nicht-textuelle Eingabeelemente, einschließlich:

- `{{HTMLElement("input/hidden","hidden")}}`
- `{{HTMLElement("input/range","range")}}`
- `{{HTMLElement("input/color","color")}}`
- `{{HTMLElement("input/checkbox","checkbox")}}`
- `{{HTMLElement("input/radio","radio")}}`
- `{{HTMLElement("input/file","file")}}`
- `{{HTMLElement("input/submit","submit")}}`
- `{{HTMLElement("input/image","image")}}`
- `{{HTMLElement("input/reset","reset")}}`
- `{{HTMLElement("input/button","button")}}`

Eingaben, die das `readonly`-Attribut unterstützen, aber nicht gesetzt haben, entsprechen der {{cssxref(":read-write")}} Pseudo-Klasse. Alle anderen Elemente entsprechen der {{cssxref(":read-only")}} Pseudo-Klasse.

### Attribut-Interaktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) und `readonly` ist, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten können und nicht mit dem Formular gesendet werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert werden.

Da ein schreibgeschütztes Feld seinen Wert nicht durch Benutzerinteraktion ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

Die einzige Möglichkeit, den Wert des `readonly`-Attributs dynamisch zu ändern, ist durch ein Skript.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit dem `readonly`-Attribut nicht erlaubt.

### Benutzerfreundlichkeit

Browser zeigen das `readonly`-Attribut an.

### Einschränkungsvalidierung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements vom Benutzer nicht aktualisiert werden und nimmt nicht an der Einschränkungsvalidierung teil.

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
