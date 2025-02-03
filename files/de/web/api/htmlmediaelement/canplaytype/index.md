---
title: "HTMLMediaElement: canPlayType() Methode"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die Methode **`canPlayType()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt an, wie wahrscheinlich es ist, dass der aktuelle Browser Medien eines bestimmten [MIME-Typs](/de/docs/Web/HTTP/MIME_types) abspielen kann.

## Syntax

```js-nolint
canPlayType(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Medien und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält, der eine kommagetrennte Liste der unterstützten Codecs bereitstellt.

### Rückgabewert

Ein String, der angibt, wie wahrscheinlich es ist, dass die Medien abgespielt werden können. Der String wird einen der folgenden Werte haben:

- `""` (leerer String)
  - : Die Medien können auf dem aktuellen Gerät nicht abgespielt werden.
- `probably`
  - : Die Medien sind wahrscheinlich auf diesem Gerät abspielbar.
- `maybe`
  - : Es gibt nicht genügend Informationen, um festzustellen, ob die Medien abgespielt werden können (bis versucht wird, sie wiederzugeben).

## Beispiele

```js
let obj = document.createElement("video");
console.log(obj.canPlayType("video/mp4")); // "maybe"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der Methode `HTMLMediaElement.canPlayType()`
- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
- [Umgang mit Medienunterstützungsproblemen im Webinhalt](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
