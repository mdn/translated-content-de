---
title: "SVGStyleElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGStyleElement/type
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}} {{Deprecated_Header}}

Die **`SVGStyleElement.type`**-Eigenschaft gibt den Typ des aktuellen Stils zurück. Der Wert spiegelt das assoziierte SVG-`<style>`-Element-Attribut [`type`](/de/docs/Web/SVG/Element/style#type) wider.

Autoren sollten diese Eigenschaft nicht verwenden oder sich auf den Wert verlassen.

## Wert

Die zulässigen Werte sind ein leerer String oder ein nicht case-sensitives "text/css".

## Ausnahmen

SVG 1.1 definierte, dass ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst wird, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern. Diese Einschränkung wurde in SVG 2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type)
