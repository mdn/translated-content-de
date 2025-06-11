---
title: Garantiert ungültiger Wert
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{GlossarySidebar}}

In CSS ist der garantiert ungültige Wert {{CSSXref("initial")}}.

Wenn der Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) der garantiert ungültige Wert ist, kann die {{CSSXref("var")}}-Funktion diesen nicht für die Substitution verwenden. Ein Versuch, dies zu tun, macht die Deklaration _ungültig zur Berechnungszeit_, es sei denn, ein gültiger Fallback wird angegeben.

## Siehe auch

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS Custom Properties for Cascading Variables Module Level 1](https://drafts.csswg.org/css-variables/#guaranteed-invalid) Spezifikation
