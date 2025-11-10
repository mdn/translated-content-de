---
title: CSS benutzerdefinierte Funktionen und Mixins
short-title: Benutzerdefinierte Funktionen und Mixins
slug: Web/CSS/Guides/Custom_functions_and_mixins
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Modul für benutzerdefinierte Funktionen und Mixins** ermöglicht es Entwicklern, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente annehmen, komplexe Logik enthalten können (definiert durch Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}} At-Regeln) und basierend auf dieser Logik Werte zurückgeben.

CSS benutzerdefinierte Funktionen werden in {{cssxref("@function")}} At-Regeln definiert und mit der {{cssxref("&lt;dashed-function>")}} Syntax aufgerufen. Diese sieht der [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) Syntax sehr ähnlich, jedoch beinhalten sie am Ende Klammern mit Argumenten (zum Beispiel, `--my-function(30px, 3)`). CSS benutzerdefinierte Funktionen können in jedem Eigenschaftswert aufgerufen werden und geben einen Wert zurück, der auf den übergebenen Argumenten und der Logik innerhalb der Funktion basiert.

CSS Mixins werden in `@mixin` At-Regeln definiert und unter Verwendung von `@apply` At-Regeln innerhalb von Regelsets angewendet. CSS Mixins definieren eine Reihe von Eigenschaften, die in mehreren Regelsets wiederverwendet und mit Argumenten und Logik angepasst werden können.

CSS benutzerdefinierte Funktionen und Mixins können optionale Datentypen für ihre Argumente und Rückgabewerte zugewiesen werden, um die Werte, die in sie hinein- und aus ihnen herausgegeben werden, zu beschränken.

> [!NOTE]
> Derzeit haben nur CSS benutzerdefinierte Funktionen Browser-Unterstützung. CSS Mixins werden derzeit in keinem Browser unterstützt.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@function")}}
  - {{cssxref("@function#result", "result")}}

Das CSS Modul für benutzerdefinierte Funktionen und Mixins führt auch die `@mixin`, `@apply`, `@contents` und `@env` At-Regeln ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen und Werte

- {{cssxref("dashed-function")}}

### Funktionen

- {{cssxref("type")}}

### Schnittstellen

- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)

## Leitfäden

- [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
  - : Dieser Leitfaden zeigt Ihnen, wie Sie CSS benutzerdefinierte Funktionen verwenden und präsentiert einige typische Anwendungsfälle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("if()")}}
- {{cssxref("@media")}}
