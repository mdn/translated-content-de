---
title: CSS Custom-Funktionen und Mixins
slug: Web/CSS/CSS_custom_functions_and_mixins
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

Das Modul **CSS Custom-Funktionen und Mixins** ermöglicht es Entwicklern, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren können, komplexe Logik enthalten (definiert unter Verwendung von Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}} At-Regeln) und basierend auf dieser Logik Werte zurückgeben können.

CSS Custom-Funktionen werden in {{cssxref("@function")}} At-Regeln definiert und unter Verwendung der {{cssxref("&lt;dashed-function>")}} Syntax aufgerufen. Diese Syntax ähnelt stark der von [CSS Custom-Eigenschaften](/de/docs/Web/CSS/--*) mit dem Unterschied, dass sie Klammern am Ende enthält, die Argumente beinhalten (zum Beispiel `--my-function(30px, 3)`). CSS Custom-Funktionen können innerhalb eines jeden Eigenschaftswertes aufgerufen werden und geben einen Wert zurück, basierend auf den in die Funktion übergebenen Argumenten und der Logik in ihr.

CSS Mixins werden in `@mixin` At-Regeln definiert und angewendet, indem `@apply` At-Regeln innerhalb von Regelsets verschachtelt werden. CSS Mixins definieren eine Reihe von Eigenschaften, die in mehreren Regelsets wiederverwendet und mit Argumenten und Logik angepasst werden können.

CSS Custom-Funktionen und Mixins können optionale Datentypen für ihre Argumente und Rückgabewerte zugewiesen werden, um die übergebenen und zurückgegebenen Werte einzuschränken.

> [!NOTE]
> Derzeit haben nur CSS Custom-Funktionen Browser-Support. CSS Mixins werden derzeit in keinem Browser unterstützt.

## Referenz

### At-Regeln

- {{cssxref("@function")}}

Das Modul CSS Custom-Funktionen und Mixins führt auch die `@mixin`, `@apply`, `@contents` und `@env` At-Regeln ein. Derzeit unterstützt jedoch kein Browser diese Funktionen.

### Deskriptoren

- {{cssxref("@function#result", "result")}}

### Datentypen und Werte

- {{cssxref("&lt;dashed-function>")}} Datentyp

### Funktionen

- [`type()`](/de/docs/Web/CSS/type)

Das Modul CSS Custom-Funktionen und Mixins führt auch lokale {{cssxref("env()")}} Variablen ein. Derzeit wird diese Funktion von keinem Browser unterstützt.

### Schnittstellen

- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)

## Leitfäden

- [Verwendung von CSS Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
  - : Dieser Leitfaden lehrt Sie, wie man CSS Custom-Funktionen verwendet und präsentiert einige typische Anwendungsfälle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("if()")}}
- {{cssxref("@media")}}
