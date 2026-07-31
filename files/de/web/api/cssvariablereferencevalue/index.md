---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSVariableReferenceValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ermöglicht es Ihnen, einen benutzerdefinierten Namen für einen integrierten CSS-Wert zu erstellen. Diese Objektfunktionalität wird manchmal als "CSS-Variable" bezeichnet und erfüllt denselben Zweck wie die {{cssxref("var", "var()")}}-Funktion. Der benutzerdefinierte Name muss mit zwei Bindestrichen beginnen.

## Konstruktor

- [`CSSVariableReferenceValue()`](/de/docs/Web/API/CSSVariableReferenceValue/CSSVariableReferenceValue)
  - : Erstellt ein neues `CSSVariableReferenceValue`-Objekt.

## Instanzeigenschaften

- [`CSSVariableReferenceValue.variable`](/de/docs/Web/API/CSSVariableReferenceValue/variable)
  - : Gibt den benutzerdefinierten Namen zurück, der an den Konstruktor übergeben wurde.
- [`CSSVariableReferenceValue.fallback`](/de/docs/Web/API/CSSVariableReferenceValue/fallback) {{ReadOnlyInline}}
  - : Gibt den integrierten CSS-Wert für den benutzerdefinierten Namen zurück.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
