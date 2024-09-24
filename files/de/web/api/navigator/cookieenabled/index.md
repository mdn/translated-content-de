---
title: "Navigator: cookieEnabled Eigenschaft"
short-title: cookieEnabled
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: 3fdf7ec9351f9ee8e62648146a7e73e7a6196d5f
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` gibt einen booleschen Wert zurück, der angibt, ob Cookies aktiviert sind oder nicht.

Die Eigenschaft ist schreibgeschützt.

## Wert

Ein boolescher Wert.

> [!NOTE]
> Webbrowser können in bestimmten Szenarien das Setzen bestimmter Cookies verhindern. Zum Beispiel erlauben Chrome-basierte Browser sowie einige experimentelle Versionen von Firefox das Erstellen von Cookies mit dem [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut nicht, es sei denn, sie werden über HTTPS und mit dem `Secure`-Attribut erstellt.

## Beispiele

```js
if (!navigator.cookieEnabled) {
  // Der Browser unterstützt keine Cookies oder blockiert deren Setzen.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
