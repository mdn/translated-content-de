---
title: "CSSValueList: length-Eigenschaft"
short-title: length
slug: Web/API/CSSValueList/length
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`length`** schreibgeschützte Eigenschaft des
[`CSSValueList`](/de/docs/Web/API/CSSValueList)-Interfaces repräsentiert die Anzahl der [`CSSValue`](/de/docs/Web/API/CSSValue)s
in der Liste. Der Bereich der gültigen Werte der Indizes ist einschließlich `0` bis `length-1`.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weitgehend unterstützt, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Wert

Ein `unsigned long`, der die Anzahl der [`CSSValue`](/de/docs/Web/API/CSSValue)s darstellt.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsversuch entfernt.

Sie wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
