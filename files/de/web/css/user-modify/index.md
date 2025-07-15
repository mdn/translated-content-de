---
title: user-modify
slug: Web/CSS/user-modify
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

Die **`user-modify`**-Eigenschaft hat in Firefox keine Wirkung. Sie war ursprünglich dazu gedacht, zu bestimmen, ob der Inhalt eines Elements von einem Benutzer bearbeitet werden kann oder nicht.

> [!WARNING]
> Diese Eigenschaft wurde durch das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut ersetzt.

## Syntax

```css
/* Keyword values */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* Global values */
user-modify: inherit;
user-modify: initial;
user-modify: revert;
user-modify: unset;
```

Die `-moz-user-modify`-Eigenschaft wird als eines der Schlüsselwortwerte aus der untenstehenden Liste angegeben.

### Werte

- `read-only`
  - : Standardwert. Inhalte sind schreibgeschützt.
- `read-write`
  - : Der Benutzer kann Inhalte lesen und schreiben.
- `read-write-plaintext-only`
  - : Wie `read-write`, aber die Formatierung von Rich-Text geht verloren.
- `write-only`
  - : Der Benutzer kann den Inhalt bearbeiten, aber nicht lesen.

## Formale Syntax

{{CSSSyntaxRaw(`user-modify = read-only | read-write | read-write-plaintext-only | write-only`)}}

## Beispiele

### HTML

```html
<div class="readwrite">The user is able to change this text.</div>
```

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
