---
title: "SVGAElement: target-Eigenschaft"
short-title: target
slug: Web/API/SVGAElement/target
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("SVG")}}

Die **`SVGAElement.target`**-Schreibeigenshaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt zurück, das den Bereich eines Ziel-Fensters, Rahmens oder Paneels angibt, in den ein Dokument geöffnet werden soll, wenn ein Link aktiviert wird.

Diese Eigenschaft wird verwendet, wenn es mehrere mögliche Ziele für die Ausgabe-Ressource gibt, beispielsweise wenn das übergeordnete Dokument ein HTML- oder XHTML-Dokument mit mehreren Rahmen ist.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das Ziel der Ausgabe-Ressource angibt, das beim Aktivieren des Links das Dokument öffnet. Siehe {{SVGAttr("target")}} für gültige Werte.

## Beispiele

Der Code stammt aus dem ["SVGAElement-Beispielcode"](/de/docs/Web/API/SVGAElement#example).

```js
// ...
const linkRef = document.querySelector("a");
linkRef.target = "_blank";
// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGAttr("target") }}
