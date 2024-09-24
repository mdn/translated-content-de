---
title: "-moz-user-input"
slug: Web/CSS/-moz-user-input
l10n:
  sourceCommit: 016ea3d6160143ec4a05d12be1bff9cad594f0e5
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla-Anwendungen bestimmt **`-moz-user-input`**, ob ein Element Benutzereingaben akzeptiert.

Ab Firefox 60 kann diese Eigenschaft einem Element nicht mehr die Fähigkeit verleihen, Benutzereingaben zu akzeptieren, wenn es dies normalerweise nicht tut. Sie kann nur verwendet werden, um Benutzereingaben zu deaktivieren.

> **Hinweis:** `-moz-user-input` war einer der Vorschläge, die zur vorgeschlagenen CSS 3 {{cssxref("user-input")}} Eigenschaft führten, die noch nicht den Status "Candidate Recommendation" (Aufruf zur Implementierung) erreicht hat. Eine ähnliche Eigenschaft, `user-focus`, wurde in [frühen Entwürfen eines Vorläufers der User Interface für CSS3-Spezifikation](https://www.w3.org/TR/2000/WD-css3-userint-20000216) vorgeschlagen, aber von der Arbeitsgruppe abgelehnt.

## Syntax

```css
/* Schlüsselwortwerte */
-moz-user-input: auto;
-moz-user-input: none;

/* Globale Werte */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Werte

- `auto`
  - : Das Element reagiert auf Benutzereingaben, wenn es normalerweise Benutzereingaben akzeptiert, wie ein {{HTMLElement("textarea")}}.
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
  /* Der Benutzer kann den Text auswählen, ihn aber nicht ändern. */
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
