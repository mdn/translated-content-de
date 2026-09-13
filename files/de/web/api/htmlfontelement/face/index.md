---
title: "HTMLFontElement: face-Eigenschaft"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("HTML DOM") }}

Die veraltete **`HTMLFontElement.face`**-Eigenschaft ist ein String, der das [`face`](/de/docs/Web/HTML/Reference/Elements/font#face)-HTML-Attribut widerspiegelt. Sie enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen.

Der Dokumententext wird im Standardstil als das erste Schriftbild gerendert, das der Browser des Clients unterstützt. Wenn keine der aufgeführten Schriften auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder feste Schriftart für dieses System.

Das Format des Strings muss einer der folgenden HTML-Mikrosyntaxen folgen:

| Mikrosyntax                                                   | Beschreibung                                                                       | Beispiele         |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------- |
| Liste von einem oder mehreren gültigen Schriftfamilienname(n) | _Eine Liste von Schriftartnamen, die auf dem lokalen System vorhanden sein müssen_ | `courier,verdana` |

## Wert

Ein String.

## Beispiele

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.face = "arial";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Interface, zu dem es gehört.
