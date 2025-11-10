---
title: CSS-Benutzerdefinierte Funktionen und Mixins
slug: Web/CSS/CSS_custom_functions_and_mixins
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Das Modul **CSS-Benutzerdefinierte Funktionen und Mixins** ermöglicht es Entwicklern, wiederverwendbare CSS-Codeblöcke zu erstellen, die Argumente akzeptieren, komplexe Logik (definiert durch Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}}-At-Regeln) enthalten und basierend auf dieser Logik Werte zurückgeben können.

CSS-Benutzerdefinierte Funktionen werden in {{cssxref("@function")}}-At-Regeln definiert und verwenden die {{cssxref("&lt;dashed-function>")}}-Syntax, die der [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*)-Syntax sehr ähnlich ist, jedoch mit Klammern am Ende, die Argumente enthalten (zum Beispiel `--my-function(30px, 3)`). CSS-Benutzerdefinierte Funktionen können innerhalb eines jeden Eigenschaftswerts aufgerufen werden und geben einen Wert basierend auf den in die Funktion übergebenen Argumenten und der Logik innerhalb der Funktion zurück.

CSS-Mixins werden in `@mixin`-At-Regeln definiert und mit `@apply`-At-Regeln angewendet, die innerhalb von Regelsets verschachtelt sind. CSS-Mixins definieren eine Gruppe von Eigenschaften, die in mehreren Regelsets wiederverwendet und mit Argumenten und Logik angepasst werden können.

CSS-Benutzerdefinierte Funktionen und Mixins können optionale Datentypen für ihre Argumente und Rückgabewerte zugewiesen werden, um die übergebenen und zurückgegebenen Werte einzuschränken.

> [!NOTE]
> Derzeit werden nur CSS-Benutzerdefinierte Funktionen von Browsern unterstützt. CSS-Mixins werden derzeit in keinem Browser unterstützt.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@function")}}
  - {{cssxref("@function#result", "result")}}

Das Modul CSS-Benutzerdefinierte Funktionen und Mixins führt auch die `@mixin`, `@apply`, `@contents` und `@env`-At-Regeln ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen und Werte

- {{cssxref("dashed-function")}}

### Funktionen

- {{cssxref("type")}}

### Schnittstellen

- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)

## Leitfäden

- [Verwendung von CSS-Benutzerdefinierten Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
  - : Dieser Leitfaden zeigt Ihnen, wie Sie CSS-Benutzerdefinierte Funktionen verwenden und stellt einige typische Anwendungsfälle vor.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("if()")}}
- {{cssxref("@media")}}
