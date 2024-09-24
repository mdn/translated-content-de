---
title: "HTMLMediaElement: canPlayType() Methode"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: f52c17d00ec3e2abeb7662bbb7e57b753b65f5d5
---

{{APIRef("HTML DOM")}}

Die Methode **`canPlayType()`** des {{domxref("HTMLMediaElement")}} gibt an, wie wahrscheinlich es ist, dass der aktuelle Browser Medien eines bestimmten [MIME-Typs](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) abspielen kann.

## Syntax

```js-nolint
canPlayType(type)
```

### Parameter

- `type`
  - : Ein String, der den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Medien und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält, der eine durch Kommas getrennte Liste der unterstützten Codecs umfasst.

### Rückgabewert

Ein String, der angibt, wie wahrscheinlich es ist, dass die Medien abgespielt werden können. Der String wird einer der folgenden Werte sein:

- `""` (leerer String)
  - : Die Medien können auf dem aktuellen Gerät nicht abgespielt werden.
- `probably`
  - : Die Medien sind wahrscheinlich auf diesem Gerät abspielbar.
- `maybe`
  - : Es gibt nicht genügend Informationen, um festzustellen, ob die Medien abgespielt werden können (bis tatsächlich versucht wird, sie abzuspielen).

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.canPlayType()` Methode
- {{domxref("MediaCapabilities")}}
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
- [Leitfaden für Medientypen und -formate](/de/docs/Web/Media/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
