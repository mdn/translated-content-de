---
title: "`-moz-user-input` CSS property"
short-title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla-Anwendungen bestimmt **`-moz-user-input`**, ob ein Element Benutzereingaben akzeptiert.

Seit Firefox 60 kann diese Eigenschaft einem Element nicht mehr die Fähigkeit verleihen, Benutzereingaben zu akzeptieren, wenn es dies normalerweise nicht tut. Sie kann nur verwendet werden, um Benutzereingaben zu deaktivieren.

Die `user-input`-Eigenschaft befindet sich derzeit nicht auf einem Standardisierungsweg.

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
  - : Das Element wird auf Benutzereingaben reagieren, wenn es normalerweise Benutzereingaben akzeptiert, wie etwa ein {{HTMLElement("textarea")}}.
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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
