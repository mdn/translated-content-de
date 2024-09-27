---
title: "CSSValueList: length-Eigenschaft"
short-title: length
slug: Web/API/CSSValueList/length
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die **`length`**-Eigenschaft der schreibgeschützten [`CSSValueList`](/de/docs/Web/API/CSSValueList)-Schnittstelle repräsentiert die Anzahl von [`CSSValue`](/de/docs/Web/API/CSSValue)s in der Liste. Der Bereich der gültigen Werte der Indizes reicht von `0` bis einschließlich `length-1`.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Wert

Ein `unsigned long`, der die Anzahl der [`CSSValue`](/de/docs/Web/API/CSSValue)s darstellt.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
