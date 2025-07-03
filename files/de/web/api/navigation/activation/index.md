---
title: "Navigation: Aktivierungs-Eigenschaft"
short-title: activation
slug: Web/API/Navigation/activation
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`activation`** der Schnittstelle [`Navigation`](/de/docs/Web/API/Navigation) gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das Informationen über die letzte Dokument-übergreifende Navigation enthält, welche dieses Dokument "aktiviert" hat. Die Eigenschaft bleibt bei gleichbleibenden Dokument-Navigationen konstant.

## Wert

Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt oder `null`, wenn das aktuelle Dokument das initiale `about:blank` Dokument ist.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
