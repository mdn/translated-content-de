---
title: "SVGAElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/SVGAElement/ping
l10n:
  sourceCommit: acb7e62eb10471075a46e78542cdb4798e82bfe7
---

{{APIRef("SVG")}}

Die **`ping`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interfaces gibt einen String zurück, der das `ping`-Attribut widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält. Wenn der Hyperlink verfolgt wird, sendet der Browser im Hintergrund {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING`. Diese Eigenschaft wird typischerweise für das Tracking verwendet.

Diese Eigenschaft kann gesetzt werden, um den `ping`-Wert der URL zu ändern. Sie spiegelt den Wert des [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attributs wider.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut
