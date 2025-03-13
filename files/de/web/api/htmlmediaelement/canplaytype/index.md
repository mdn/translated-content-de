---
title: "HTMLMediaElement: Methode canPlayType()"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die Methode **`canPlayType()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt an, wie wahrscheinlich es ist, dass der aktuelle Browser Medien eines gegebenen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) abspielen kann.

## Syntax

```js-nolint
canPlayType(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) des Mediums angibt und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält, der eine durch Komma getrennte Liste der unterstützten Codecs enthält.

### Rückgabewert

Ein String, der angibt, wie wahrscheinlich es ist, dass das Medium abgespielt werden kann. Der String wird einer der folgenden Werte sein:

- `""` (leerer String)
  - : Das Medium kann auf dem aktuellen Gerät nicht abgespielt werden.
- `probably`
  - : Das Medium kann auf diesem Gerät wahrscheinlich abgespielt werden.
- `maybe`
  - : Es gibt nicht genügend Informationen, um zu bestimmen, ob das Medium abgespielt werden kann (bis tatsächlich versucht wird, es abzuspielen).

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die Methode `HTMLMediaElement.canPlayType()` zu definieren
- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Leitfaden für Medientypen und -formate](/de/docs/Web/Media/Guides/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
