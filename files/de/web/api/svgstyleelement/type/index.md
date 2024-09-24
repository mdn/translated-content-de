---
title: "SVGStyleElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGStyleElement/type
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}} {{Deprecated_Header}}

Die **`SVGStyleElement.type`**-Eigenschaft gibt den Typ des aktuellen Stils zurück. Der Wert spiegelt das [`type`](/de/docs/Web/SVG/Element/style#type)-Attribut des zugehörigen SVG `<style>` Elements wider.

Autoren sollten diese Eigenschaft nicht verwenden oder sich auf den Wert verlassen.

## Wert

Die erlaubten Werte sind ein leerer String oder eine Groß-/Kleinschreibung-unabhängige Übereinstimmung für "text/css".

## Ausnahmen

SVG 1.1 definierte, dass ein {{domxref("DOMException")}} mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst wird, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern. Diese Einschränkung wurde in SVG 2 entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLStyleElement.type")}}
