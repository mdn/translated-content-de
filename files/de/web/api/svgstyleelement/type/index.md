---
title: "SVGStyleElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGStyleElement/type
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}} {{Deprecated_Header}}

Die **`SVGStyleElement.type`**-Eigenschaft gibt den Typ des aktuellen Stils zurück.
Der Wert spiegelt das `type`-Attribut des zugehörigen SVG-`<style>`-Elements wider.

Autoren sollten diese Eigenschaft nicht verwenden oder sich auf den Wert verlassen.

## Wert

Die erlaubten Werte sind ein leerer String oder eine Groß-/Kleinschreibung nicht berücksichtigende Übereinstimmung mit "text/css".

## Ausnahmen

In SVG 1.1 wurde festgelegt, dass ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst wird, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern.
Diese Einschränkung wurde in SVG 2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type)
