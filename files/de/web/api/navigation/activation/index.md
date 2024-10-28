---
title: "Navigation: activation-Eigenschaft"
short-title: activation
slug: Web/API/Navigation/activation
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`activation`** der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte Dokument-übergreifende Navigation enthält, die dieses Dokument "aktiviert" hat. Die Eigenschaft bleibt bei Navigationen im gleichen Dokument konstant.

## Wert

Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt oder `null`, wenn das aktuelle Dokument das anfängliche `about:blank` Dokument ist.

## Beispiele

```js
if (navigation.activation) {
  console.log(navigation.activation.entry.url);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
