---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSSOM")}}

Das **`CSSVariableReferenceValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ermöglicht es Ihnen, einen benutzerdefinierten Namen für einen eingebauten CSS-Wert zu erstellen. Diese Objektfunktionalität wird manchmal als "CSS-Variable" bezeichnet und dient demselben Zweck wie die {{cssxref("var", "var()")}}-Funktion. Der benutzerdefinierte Name muss mit zwei Bindestrichen beginnen.

## Konstruktor

- [`CSSVariableReferenceValue()`](/de/docs/Web/API/CSSVariableReferenceValue/CSSVariableReferenceValue)
  - : Erstellt ein neues `CSSVariableReferenceValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSVariableReferenceValue.variable`](/de/docs/Web/API/CSSVariableReferenceValue/variable)
  - : Gibt den benutzerdefinierten Namen zurück, der dem Konstruktor übergeben wurde.
- [`CSSVariableReferenceValue.fallback`](/de/docs/Web/API/CSSVariableReferenceValue/fallback) {{ReadOnlyInline}}
  - : Gibt den eingebauten CSS-Wert für den benutzerdefinierten Namen zurück.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
