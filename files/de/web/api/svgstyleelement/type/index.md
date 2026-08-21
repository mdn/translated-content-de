---
title: "SVGStyleElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGStyleElement/type
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.type`**-Eigenschaft gibt den Typ des aktuellen Stils zurück. Der Wert spiegelt das [`type`](/de/docs/Web/SVG/Reference/Element/style#type) Attribut des zugehörigen SVG-`<style>`-Elements wider.

Autoren sollten diese Eigenschaft nicht verwenden oder sich auf den Wert verlassen.

## Wert

Die erlaubten Werte sind ein leerer String oder eine Groß-/Kleinschreibung nicht beachtende Übereinstimmung mit "text/css".

## Ausnahmen

SVG 1.1 definierte, dass eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst wird, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern. Diese Einschränkung wurde in SVG 2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type)
