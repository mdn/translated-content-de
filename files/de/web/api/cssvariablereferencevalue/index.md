---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSVariableReferenceValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ermöglicht es Ihnen, einen benutzerdefinierten Namen für einen eingebauten CSS-Wert zu erstellen. Diese Funktionalität des Objekts wird manchmal als "CSS-Variable" bezeichnet und dient demselben Zweck wie die {{cssxref("var", "var()")}}-Funktion. Der benutzerdefinierte Name muss mit zwei Bindestrichen beginnen.

## Konstruktor

- [`CSSVariableReferenceValue()`](/de/docs/Web/API/CSSVariableReferenceValue/CSSVariableReferenceValue)
  - : Erstellt ein neues `CSSVariableReferenceValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSVariableReferenceValue.variable`](/de/docs/Web/API/CSSVariableReferenceValue/variable)
  - : Gibt den benutzerdefinierten Namen zurück, der an den Konstruktor übergeben wurde.
- [`CSSVariableReferenceValue.fallback`](/de/docs/Web/API/CSSVariableReferenceValue/fallback) {{ReadOnlyInline}}
  - : Gibt den eingebauten CSS-Wert für den benutzerdefinierten Namen zurück.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
