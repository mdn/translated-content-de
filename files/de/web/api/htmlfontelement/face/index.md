---
title: "HTMLFontElement: face-Eigenschaft"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

Die veraltete **`HTMLFontElement.face`**-Eigenschaft ist ein String, der das [`face`](/de/docs/Web/HTML/Reference/Elements/font#face) HTML-Attribut widerspiegelt und eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen enthält.

Der Dokumententext wird im Standardstil als die erste Schriftart angezeigt, die vom Browser des Clients unterstützt wird. Wenn keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder festbreite Schriftart für dieses System.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen:

| Mikrosyntax                                                  | Beschreibung                                                                       | Beispiele         |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------------- |
| Liste von einem oder mehreren gültigen Schriftfamilien-Namen | _Eine Liste von Schriftartnamen, die auf dem lokalen System vorhanden sein müssen_ | `courier,verdana` |

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
