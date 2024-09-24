---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSSOM")}}

Die **`CSSVariableReferenceValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ermöglicht es Ihnen, einen benutzerdefinierten Namen für einen integrierten CSS-Wert zu erstellen. Diese Objektfunktionalität wird manchmal als "CSS-Variable" bezeichnet und dient demselben Zweck wie die {{cssxref("var", "var()")}}-Funktion. Der benutzerdefinierte Name muss mit zwei Bindestrichen beginnen.

## Konstruktor

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}}
  - : Erstellt ein neues `CSSVariableReferenceValue`-Objekt.

## Instanzeigenschaften

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : Gibt den benutzerdefinierten Namen zurück, der an den Konstruktor übergeben wurde.
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}}
  - : Gibt den integrierten CSS-Wert für den benutzerdefinierten Namen zurück.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
