---
title: "SVGImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/SVGImageElement/crossOrigin
l10n:
  sourceCommit: b522a0391a0152cf3f1cc57550d700c87b78ccf5
---

{{APIRef("SVG")}}

Die **`crossOrigin`**-Eigenschaft des [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Interfaces ist ein String, der die Cross-Origin Resource Sharing ({{Glossary("CORS", "CORS")}})-Einstellung angibt, die beim Abrufen des Bildes verwendet werden soll. Sie spiegelt das {{SVGAttr("crossorigin")}}-Inhaltsattribut des angegebenen {{SVGElement("image")}}-Elements wider.

## Wert

Ein String, der den CORS-Modus angibt, der beim Abrufen der Bildressource verwendet wird. Gültige Werte sind `"anonymous"` oder `"use-credentials"`. Wenn die `crossOrigin`-Eigenschaft auf einen anderen Wert gesetzt wird, entspricht dies der Angabe von `"anonymous"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
