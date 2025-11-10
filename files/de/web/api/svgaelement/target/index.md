---
title: "SVGAElement: target-Eigenschaft"
short-title: target
slug: Web/API/SVGAElement/target
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("SVG")}}

Die schreibgeschützte **`SVGAElement.target`**-Eigenschaft von [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt zurück, das den Teil eines Ziel-Fensters, -Rahmens oder -Paneels angibt, in den ein Dokument geöffnet werden soll, wenn ein Link aktiviert wird.

Diese Eigenschaft wird verwendet, wenn es mehrere mögliche Ziele für die Endressource gibt, wie zum Beispiel, wenn das Elterndokument ein Mehrfach-Rahmen HTML- oder XHTML-Dokument ist.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das Ziel der Endressource angibt, die das Dokument öffnet, wenn der Link aktiviert wird. Siehe {{SVGAttr("target")}} für gültige Werte.

## Beispiele

Der Code stammt aus dem ["SVGAElement-Beispielcode"](/de/docs/Web/API/SVGAElement#example)

```js
// …
const linkRef = document.querySelector("a");
linkRef.target = "_blank";
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGAttr("target") }}
