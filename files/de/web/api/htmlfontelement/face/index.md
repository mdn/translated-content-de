---
title: "HTMLFontElement: face-Eigenschaft"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

Die veraltete
**`HTMLFontElement.face`**
Eigenschaft ist ein String, der das [`face`](/de/docs/Web/HTML/Element/font#face) HTML-Attribut widerspiegelt und eine kommagetrennte Liste von einem oder mehreren Schriftartnamen enthält.

Der Dokumenttext wird im Standardstil als das erste Schriftbild gerendert, das vom Browser des Clients unterstützt wird. Falls keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser in der Regel die proportionale oder festbreite Schriftart für dieses System.

Das Format des Strings muss einer der folgenden HTML-Mikrosyntaxen entsprechen:

| Mikrosyntax                                                 | Beschreibung                                                                    | Beispiele         |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------- |
| Liste von einem oder mehreren gültigen Schriftfamiliennamen | _Eine Liste von Schriftnamen, die auf dem lokalen System vorhanden sein müssen_ | `courier,verdana` |

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

- Die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Schnittstelle, zu der es gehört.
