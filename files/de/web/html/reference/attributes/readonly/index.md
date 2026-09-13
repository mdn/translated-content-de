---
title: "`readonly` HTML-Attribut"
short-title: readonly
slug: Web/HTML/Reference/Attributes/readonly
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das Boolesche **`readonly`**-Attribut macht das Element, falls vorhanden, unveränderlich, was bedeutet, dass der Benutzer die Steuerung nicht bearbeiten kann.

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

Wenn das `readonly`-Attribut bei einem Eingabeelement angegeben ist, nimmt das Element aufgrund der Tatsache, dass der Benutzer die Eingabe nicht bearbeiten kann, nicht an der Beschränkungsvalidierung teil.

Das `readonly`-Attribut wird von textuellen Formular-Steuerelementen unterstützt, einschließlich:

- {{HTMLElement("input")}}-Elementen vom Typ:
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

Eingaben, die das `readonly`-Attribut unterstützen, bei denen das Attribut jedoch nicht gesetzt ist, entsprechen der {{cssxref(":read-write")}}-Pseudoklasse. Alle anderen Elemente entsprechen der {{cssxref(":read-only")}}-Pseudoklasse.

### Attributinteraktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) und `readonly` besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, wohingegen deaktivierte Steuerelemente nicht fokussierbar sind und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert sind.

Da ein schreibgeschütztes Feld nicht durch eine Benutzerinteraktion geändert werden kann, hat das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

Die einzige Möglichkeit, den Wert des `readonly`-Attributs dynamisch zu ändern, ist über ein Skript.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben, die das `readonly`-Attribut spezifiziert haben, nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen das `readonly`-Attribut an.

### Beschränkungsvalidierung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements nicht vom Benutzer aktualisiert werden und es nimmt nicht an der Beschränkungsvalidierung teil.

## Beispiel

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly id="ta">Some value</textarea>
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
