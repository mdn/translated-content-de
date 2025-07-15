---
title: -moz-user-input
slug: Web/CSS/-moz-user-input
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla-Anwendungen bestimmt **`-moz-user-input`**, ob ein Element Benutzereingaben akzeptiert.

Ab Firefox 60 kann diese Eigenschaft einem Element nicht länger die Fähigkeit verleihen, Benutzereingaben zu akzeptieren, wenn es normalerweise nicht dazu in der Lage ist. Es kann nur noch verwendet werden, um Benutzereingaben zu deaktivieren.

Die `user-input`-Eigenschaft befindet sich derzeit nicht auf einem Standardpfad.

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
  - : Das Element wird auf Benutzereingaben reagieren, wenn es normalerweise Benutzereingaben entgegennehmen kann, wie z. B. ein {{HTMLElement("textarea")}}.
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
