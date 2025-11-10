---
title: "Navigator: cookieEnabled-Eigenschaft"
short-title: cookieEnabled
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` gibt einen booleschen Wert zurück, der anzeigt, ob Cookies aktiviert sind oder nicht.

Die Eigenschaft ist schreibgeschützt.

## Wert

Ein boolescher Wert.

> [!NOTE]
> Webbrowser können in bestimmten Szenarien das Schreiben bestimmter Cookies verhindern. Zum Beispiel erlauben Chrome-basierte Browser sowie einige experimentelle Versionen von Firefox das Erstellen von Cookies mit dem [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut nicht, es sei denn, sie werden über HTTPS und mit dem `Secure`-Attribut erstellt.

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
