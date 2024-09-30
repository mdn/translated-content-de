---
title: "HTMLMediaElement: canPlayType() Methode"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: f52c17d00ec3e2abeb7662bbb7e57b753b65f5d5
---

{{APIRef("HTML DOM")}}

Die Methode **`canPlayType()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt an, wie wahrscheinlich es ist, dass der aktuelle Browser Medien eines bestimmten [MIME-Typs](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) abspielen kann.

## Syntax

```js-nolint
canPlayType(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) des Mediums und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält, der eine durch Kommata getrennte Liste der unterstützten Codecs enthält.

### Rückgabewert

Ein String, der angibt, wie wahrscheinlich es ist, dass das Medium abgespielt werden kann. Der String wird einer der folgenden Werte sein:

- `""` (leerer String)
  - : Das Medium kann auf dem aktuellen Gerät nicht abgespielt werden.
- `probably`
  - : Das Medium ist wahrscheinlich auf diesem Gerät abspielbar.
- `maybe`
  - : Es gibt nicht genügend Informationen, um festzustellen, ob das Medium abgespielt werden kann (bis der Versuch der Wiedergabe tatsächlich unternommen wird).

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
- [Handhabung von Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
