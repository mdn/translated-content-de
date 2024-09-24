---
title: "SVGAElement: target-Eigenschaft"
short-title: target
slug: Web/API/SVGAElement/target
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Die **`SVGAElement.target`** schreibgeschützte Eigenschaft des {{domxref("SVGAElement")}} gibt ein {{domxref("SVGAnimatedString")}}-Objekt zurück, das den Teil eines Ziel-Fensters, -Rahmens oder -Bereichs angibt, in den ein Dokument geöffnet werden soll, wenn ein Link aktiviert wird.

Diese Eigenschaft wird verwendet, wenn es mehrere mögliche Ziele für die Endressource gibt, wie zum Beispiel, wenn das übergeordnete Dokument ein HTML- oder XHTML-Dokument mit mehreren Rahmen ist.

## Wert

Ein {{domxref("SVGAnimatedString")}}, das das Ziel der Endressource angibt, welches das Dokument öffnet, wenn der Link aktiviert wird.

Beispielwerte finden Sie [hier](https://www.w3.org/TR/2011/REC-SVG11-20110816/linking.html#AElementTargetAttribute)

## Beispiele

Der Code stammt aus dem ["SVGAElement-Beispielcode"](/de/docs/Web/API/SVGAElement#example)

```js
// ...
const linkRef = document.querySelector("a");
linkRef.target = "_blank";
// ...
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{ SVGAttr("target") }}
