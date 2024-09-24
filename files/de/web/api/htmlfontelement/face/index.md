---
title: "HTMLFontElement: face-Eigenschaft"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

Die veraltete **`HTMLFontElement.face`**-Eigenschaft ist ein String, der das [`face`](/de/docs/Web/HTML/Element/font#face)-HTML-Attribut widerspiegelt und eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen enthält.

Der Dokumenttext wird im Standardstil als die erste Schriftart gerendert, die vom Browser des Clients unterstützt wird. Wenn keine aufgelistete Schriftart auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder fixed-width Schriftart für das System.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen:

| Mikrosyntax                                 | Beschreibung                                                        | Beispiele          |
| ------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| Liste von einem oder mehreren gültigen Schriftfamiliennamen | _Eine Liste von Schriftartnamen, die auf dem lokalen System vorhanden sein müssen_ | `courier,verdana` |

## Wert

Ein String.

## Beispiele

```js
// Geht davon aus, dass es im HTML ein <font id="f">-Element gibt

const f = document.getElementById("f");
f.face = "arial";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLFontElement")}}-Interface, zu dem es gehört.
