---
title: "Navigation: activation-Eigenschaft"
short-title: activation
slug: Web/API/Navigation/activation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`activation`**-Eigenschaft des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte dokumentübergreifende Navigation enthält, die dieses Dokument "aktiviert" hat. Die Eigenschaft bleibt bei gleiches-Dokument-Navigationen konstant.

## Wert

Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt oder `null`, wenn das aktuelle Dokument das anfängliche `about:blank`-Dokument ist.

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

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
