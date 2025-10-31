---
title: "CSS: registerProperty() statische Methode"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.registerProperty()`** registriert
[benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), was die Eigenschafts-Typprüfung, Standardwerte und Eigenschaften, die ihren Wert erben oder nicht, ermöglicht.

Durch die Registrierung einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist.

## Syntax

```js-nolint
CSS.registerProperty(propertyDefinition)
```

### Parameter

- `propertyDefinition`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `name`
      - : Ein String, der den
        Namen der definierten Eigenschaft repräsentiert.
    - `syntax` {{optional_inline}}
      - : Ein String, der die erwartete Syntax der definierten Eigenschaft repräsentiert. Standardmäßig auf `"*"` gesetzt.
    - `inherits`
      - : Ein boolescher Wert, der definiert, ob die definierte Eigenschaft vererbt werden soll
        (`true`) oder nicht (`false`). Standardmäßig auf `false` gesetzt.
    - `initialValue` {{optional_inline}}
      - : Ein String, der den
        Anfangswert der definierten Eigenschaft repräsentiert.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` wurde bereits registriert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` ist kein gültiger benutzerdefinierter Eigenschaftenname (beginnt mit zwei
    Bindestrichen, z. B. `--foo`).
- {{jsxref("TypeError")}}
  - : Die erforderlichen Dictionary-Mitglieder `name` und/oder `inherits` wurden
    nicht bereitgestellt.

## Beispiele

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*),
`--my-color`, unter Verwendung von `registerProperty()`, als Farbe, gibt ihr einen
Standardwert und sorgt dafür, dass der Wert nicht vererbt wird:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--my-color` unter Verwendung
der Syntax `<color>` registriert. Wir können diese Eigenschaft nun verwenden, um einen
Verlauf beim Hover oder Fokus zu überblenden. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten Eigenschaft!

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, white, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, white, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}
```

Wir können diese Stile zu einigen Schaltflächen hinzufügen:

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS-Properties-und-Values-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [`CSS`](/de/docs/Web/API/CSS)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
- [CSS-Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
