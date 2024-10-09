---
title: user-modify
slug: Web/CSS/user-modify
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

Die **`user-modify`** Eigenschaft hat in Firefox keine Wirkung. Ursprünglich war geplant, zu bestimmen, ob der Inhalt eines Elements von einem Benutzer bearbeitet werden kann.

> [!WARNING]
> Diese Eigenschaft wurde durch das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut ersetzt.

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

Die `-moz-user-modify` Eigenschaft wird als eines der Schlüsselwortwerte aus der unten stehenden Liste angegeben.

### Werte

- `read-only`
  - : Standardwert. Inhalte sind schreibgeschützt.
- `read-write`
  - : Der Benutzer kann Inhalte lesen und schreiben.
- `read-write-plaintext-only`
  - : Wie `read-write`, aber die Formatierung von Rich Text geht verloren.
- `write-only`
  - : Der Benutzer kann den Inhalt bearbeiten, aber nicht lesen.

## Formale Syntax

```plain
user-modify =
  read-only | read-write | read-write-plaintext-only | write-only
```

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
