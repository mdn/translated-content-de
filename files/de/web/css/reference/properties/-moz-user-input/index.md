---
title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla-Anwendungen bestimmt **`-moz-user-input`**, ob ein Element Benutzereingaben akzeptiert.

Seit Firefox 60 kann diese Eigenschaft einem Element nicht mehr die Fähigkeit verleihen, Benutzereingaben zu akzeptieren, wenn es dies normalerweise nicht tut. Sie kann nur verwendet werden, um Benutzereingaben zu deaktivieren.

Die `user-input` Eigenschaft befindet sich derzeit nicht auf einem Standardpfad.

## Syntax

```css
/* Keyword values */
-moz-user-input: auto;
-moz-user-input: none;

/* Global values */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Werte

- `auto`
  - : Das Element wird auf Benutzereingaben reagieren, wenn es normalerweise Benutzereingaben entgegennimmt, wie z. B. ein {{HTMLElement("textarea")}}.
- `none`
  - : Das Element reagiert nicht auf Benutzereingaben und wird nicht {{CSSxRef(":active")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-user-input = auto | none`)}}

## Beispiele

### Deaktivieren von Benutzereingaben für ein Element

```css
input.example {
  /* The user will be able to select the text, but not change it. */
  -moz-user-input: none;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
