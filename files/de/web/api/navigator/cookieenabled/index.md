---
title: "Navigator: cookieEnabled Eigenschaft"
short-title: cookieEnabled
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: 3fdf7ec9351f9ee8e62648146a7e73e7a6196d5f
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` gibt einen Booleschen Wert zurück, der angibt, ob Cookies aktiviert sind oder nicht.

Die Eigenschaft ist schreibgeschützt.

## Wert

Ein Boolescher Wert.

> [!NOTE]
> Webbrowser können das Schreiben bestimmter Cookies in bestimmten Szenarien verhindern. Zum Beispiel erlauben Chrome-basierte Browser sowie einige experimentelle Versionen von Firefox nicht die Erstellung von Cookies mit dem [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut, es sei denn, sie werden über HTTPS und mit dem `Secure` Attribut erstellt.

## Beispiele

```js
if (!navigator.cookieEnabled) {
  // The browser does not support or is blocking cookies from being set.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
