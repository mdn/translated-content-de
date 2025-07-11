---
title: Garantiert ungültiger Wert
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im CSS ist der garantiert ungültige Wert {{CSSXref("initial")}}.

Wenn der Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) der garantiert ungültige Wert ist, kann die {{CSSXref("var")}}-Funktion ihn nicht für die Ersetzung verwenden. Der Versuch dies zu tun führt dazu, dass die Deklaration _bei der Berechnung der Werte ungültig_ wird, es sei denn, es wird ein gültiger Fallback angegeben.

## Siehe auch

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS Custom Properties for Cascading Variables Module Level 1](https://drafts.csswg.org/css-variables/#guaranteed-invalid) Spezifikation
