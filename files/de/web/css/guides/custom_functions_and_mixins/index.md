---
title: CSS benutzerdefinierte Funktionen und Mixins
short-title: Benutzerdefinierte Funktionen und Mixins
slug: Web/CSS/Guides/Custom_functions_and_mixins
l10n:
  sourceCommit: 569b07ef525429e0929c70e7dd067cbc0ce707bd
---

Das Modul **CSS benutzerdefinierte Funktionen und Mixins** ermöglicht Entwicklern das Erstellen von wiederverwendbaren CSS-Codeblöcken, die Argumente akzeptieren können, komplexe Logik enthalten (definiert durch Funktionen wie die CSS {{cssxref("if()")}} Funktionen und {{cssxref("@media")}} at-rules), und basierend auf dieser Logik Werte zurückgeben.

CSS benutzerdefinierte Funktionen werden in {{cssxref("@function")}} at-rules definiert und mit der Syntax {{cssxref("&lt;dashed-function>")}} aufgerufen, die der [CSS benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) Syntax sehr ähnlich sieht, außer dass sie Klammern am Ende enthält, die Argumente beinhalten (zum Beispiel `--my-function(30px, 3)`). CSS benutzerdefinierte Funktionen können innerhalb jedes Eigenschaftswerts aufgerufen werden und geben einen Wert basierend auf den in die Funktion übergebenen Argumenten und der darin enthaltenen Logik zurück.

CSS Mixins werden in `@mixin` at-rules definiert und mit `@apply` at-rules in verschachtelten Regelmengen angewendet. CSS-Mixins definieren eine Menge von Eigenschaften, die innerhalb mehrerer Regelmengen wiederverwendet und mit Argumenten und Logik angepasst werden können.

CSS benutzerdefinierte Funktionen und Mixins können optionale Datentypen für ihre Argumente und Rückgabewerte zugewiesen werden, um die in sie übergebenen und von ihnen zurückgegebenen Werte einzuschränken.

> [!NOTE]
> Derzeit wird nur CSS benutzerdefinierte Funktionen von Browsern unterstützt. CSS Mixins werden momentan von keinem Browser unterstützt.

## Referenz

### At-rules und Deskriptoren

- {{cssxref("@function")}}
  - {{cssxref("@function#result", "result")}}

Das CSS benutzerdefinierte Funktionen und Mixins Modul führt auch die `@mixin`, `@apply`, `@contents` und `@env` at-rules ein. Derzeit unterstützen keine Browser diese Funktionen.

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
  - : Dieser Leitfaden zeigt Ihnen, wie Sie CSS benutzerdefinierte Funktionen verwenden und stellt einige typische Anwendungsfälle vor.

## Verwandte Konzepte

[CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("if()")}}
- {{cssxref("@media")}}
