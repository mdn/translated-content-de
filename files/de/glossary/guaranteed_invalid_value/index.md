---
title: Garantiert ungültiger Wert
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 1c93ad11838b16a30bcda1bb927e34085d694927
---

{{GlossarySidebar}}

In CSS ist der garantiert ungültige Wert {{CSSXref("initial")}}.

Wenn der Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) der garantiert ungültige Wert ist, kann die {{CSSXref("var")}}-Funktion ihn nicht für die Substitution verwenden. Ein solcher Versuch macht die Deklaration _ungültig zum Zeitpunkt der Berechnung des Wertes_, es sei denn, es wird ein gültiger Fallback angegeben.

## Siehe auch

- CSS {{CSSXref("initial")}}
- CSS {{CSSXref("var")}}
- [CSS Custom Properties for Cascading Variables Module Level 1 Specification](https://www.w3.org/TR/css-variables-1/#guaranteed-invalid)
