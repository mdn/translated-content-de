---
title: CSS Custom-Funktionen und Mixins
slug: Web/CSS/CSS_custom_functions_and_mixins
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das Modul **CSS Custom-Funktionen und Mixins** ermöglicht es Entwicklern, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren können, komplexe Logik enthalten (definiert durch Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}} At-Regeln), und basierend auf dieser Logik Werte zurückgeben.

CSS Custom-Funktionen werden in {{cssxref("@function")}} At-Regeln definiert und mit der {{cssxref("&lt;dashed-function>")}} Syntax aufgerufen, die der Syntax von [CSS Custom Properties](/de/docs/Web/CSS/--*) sehr ähnlich sieht, jedoch am Ende Klammern enthält, die Argumente umfassen (zum Beispiel, `--my-function(30px, 3)`). CSS Custom-Funktionen können innerhalb eines jeden Eigenschaftswertes aufgerufen werden und geben basierend auf den an die Funktion übergebenen Argumenten und der darin enthaltenen Logik einen Wert zurück.

CSS Mixins werden in `@mixin` At-Regeln definiert und mit `@apply` At-Regeln innerhalb von Regelsets angewendet. CSS Mixins definieren einen Satz von Eigenschaften, die innerhalb mehrerer Regelsets wiederverwendet und mit Argumenten und Logik angepasst werden können.

CSS Custom-Funktionen und Mixins können optionale Datentypen für ihre Argumente und Rückgabewerte zugewiesen werden, um die übergebenen und zurückgegebenen Werte zu beschränken.

> [!NOTE]
> Derzeit haben nur CSS Custom-Funktionen Browser-Unterstützung. CSS Mixins werden derzeit in keinem Browser unterstützt.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@function")}}
  - {{cssxref("@function#result", "result")}}

Das Modul CSS Custom-Funktionen und Mixins führt auch die At-Regeln `@mixin`, `@apply`, `@contents` und `@env` ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen und Werte

- {{cssxref("dashed-function")}}

### Funktionen

- {{cssxref("type")}}

### Schnittstellen

- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)

## Leitfaden

- [Verwenden von CSS Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
  - : Dieser Leitfaden lehrt Sie, wie Sie CSS Custom-Funktionen verwenden und präsentiert einige typische Anwendungsfälle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("if()")}}
- {{cssxref("@media")}}
