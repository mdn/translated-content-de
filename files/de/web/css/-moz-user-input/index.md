---
title: "-moz-user-input"
slug: Web/CSS/-moz-user-input
l10n:
  sourceCommit: 016ea3d6160143ec4a05d12be1bff9cad594f0e5
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla-Anwendungen bestimmt **`-moz-user-input`**, ob ein Element Benutzereingaben akzeptiert.

Ab Firefox 60 kann diese Eigenschaft einem Element nicht mehr die Fähigkeit verleihen, Benutzereingaben zu akzeptieren, wenn es normalerweise keine annimmt. Sie kann nur verwendet werden, um Benutzereingaben zu deaktivieren.

> **Note:** `-moz-user-input` war einer der Vorschläge, die zur geplanten CSS 3 {{cssxref("user-input")}} Eigenschaft führten, welche noch nicht den Status eines Candidate Recommendation (Aufruf zur Implementierung) erreicht hat. Eine ähnliche Eigenschaft, `user-focus`, wurde in [frühzeitigen Entwürfen eines Vorgängers der Benutzeroberfläche für die CSS3-Spezifikation](https://www.w3.org/TR/2000/WD-css3-userint-20000216) vorgeschlagen, wurde jedoch von der Arbeitsgruppe abgelehnt.

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
  - : Das Element wird auf Benutzereingaben reagieren, wenn es normalerweise Benutzereingaben annimmt, wie etwa ein {{HTMLElement("textarea")}}.
- `none`
  - : Das Element reagiert nicht auf Benutzereingaben und wird nicht {{CSSxRef(":active")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-moz-user-input =
  auto | none
```

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
