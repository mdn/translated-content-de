---
title: Garantiert ungültiger Wert
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Im CSS ist der garantiert ungültige Wert {{CSSXref("initial")}}.

Wenn der Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) der garantiert ungültige Wert ist, kann die {{CSSXref("var")}}-Funktion ihn nicht zur Ersetzung verwenden. Ein Versuch, dies zu tun, macht die Deklaration _ungültig zur Berechnungszeit_, es sei denn, ein gültiger Fallback ist angegeben.

## Siehe auch

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS Custom Properties for Cascading Variables Module Level 1](https://drafts.csswg.org/css-variables/#guaranteed-invalid) Spezifikation
