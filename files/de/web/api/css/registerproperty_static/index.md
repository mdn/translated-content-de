---
title: "CSS: registerProperty() statische Methode"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.registerProperty()`** registriert
[benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*), die Typprüfung, Standardwerte
und Eigenschaften, die ihren Wert erben oder nicht, ermöglichen.

Das Registrieren einer benutzerdefinierten Eigenschaft erlaubt Ihnen, dem Browser mitzuteilen, wie die benutzerdefinierte Eigenschaft sich verhalten soll; welche Typen zugelassen sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und welcher der Standardwert der benutzerdefinierten Eigenschaft ist.

## Syntax

```js-nolint
CSS.registerProperty(propertyDefinition)
```

### Parameter

- `propertyDefinition`
  - : Ein Objekt, welches folgende Eigenschaften enthält:
    - `name`
      - : Ein String, der den
        Namen der Eigenschaft repräsentiert, die definiert wird.
    - `syntax` {{optional_inline}}
      - : Ein String, der die erwartete Syntax der definierten Eigenschaft repräsentiert. Standardmäßig auf `"*"` gesetzt.
    - `inherits`
      - : Ein boolescher Wert, der definiert, ob die definierte Eigenschaft vererbt werden soll
        (`true`), oder nicht (`false`). Standardmäßig auf `false` gesetzt.
    - `initialValue` {{optional_inline}}
      - : Ein String, der den Anfangswert der definierten Eigenschaft repräsentiert.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` wurde bereits registriert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` ist kein gültiger Name für eine benutzerdefinierte Eigenschaft (beginnt mit zwei Bindestrichen, z.B. `--foo`).
- {{jsxref("TypeError")}}
  - : Die erforderlichen `name` und/oder `inherits` Wörterbucheinträge wurden
    nicht bereitgestellt.

## Beispiele

Das Folgende wird eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*),
`--my-color`, mit `registerProperty()` als Farbe registrieren, ihr einen
Standardwert geben und dafür sorgen, dass sie ihren Wert nicht erbt:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--my-color` mit der
Syntax `<color>` registriert. Jetzt können wir diese Eigenschaft nutzen, um einen
Gradienten beim Überfahren mit der Maus oder bei Fokus zu überblenden. Beachten Sie, dass mit der registrierten Eigenschaft die Überblendung funktioniert, aber nicht mit der nicht registrierten Eigenschaft!

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
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

Wir können diese Stile einigen Buttons hinzufügen:

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

- [Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [`CSS`](/de/docs/Web/API/CSS)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
- [CSS Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
