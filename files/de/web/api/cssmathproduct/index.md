---
title: CSSMathProduct
slug: Web/API/CSSMathProduct
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathProduct`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Ergebnis, das durch den Aufruf von {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, oder {{domxref('CSSNumericValue.toSum','toSum()')}} auf {{domxref('CSSNumericValue')}} erhalten wird. Sie erbt Eigenschaften und Methoden von ihrem übergeordneten Objekt {{domxref('CSSNumericValue')}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CSSMathProduct.CSSMathProduct", "CSSMathProduct()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathProduct` Objekt.

## Instanz-Eigenschaften

- {{domxref('CSSMathProduct.values')}}
  - : Gibt ein {{domxref('CSSNumericArray')}} Objekt zurück, das ein oder mehrere {{domxref('CSSNumericValue')}} Objekte enthält.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSMathValue")}} erben._

## Instanz-Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSMathValue")}} erben._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
