---
title: "Navigator: appVersion Eigenschaft"
short-title: appVersion
slug: Web/API/Navigator/appVersion
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Gibt entweder "`4.0`" oder eine Zeichenfolge zurück, die Versionsinformationen über den Browser darstellt.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder "`4.0`" oder eine Zeichenfolge, die Versionsinformationen über den Browser darstellt.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die Eigenschaft `window.navigator.userAgent` kann auch die Versionsnummer enthalten (zum Beispiel
"`Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1`"), aber Sie sollten sich bewusst sein, wie einfach es ist, den User-Agent-String zu ändern und andere Browser, Plattformen oder User-Agents zu "fälschen", und auch wie unbekümmert der Browseranbieter selbst mit diesen Eigenschaften ist.

Die Eigenschaften `window.navigator.appVersion`, `window.navigator.appName` und
`window.navigator.userAgent` wurden in "Browsererkennungs"-Code verwendet: Skripte, die versuchen herauszufinden, welchen Browser Sie verwenden, und die Seiten entsprechend anzupassen. Dies führte zur aktuellen Situation, in der Browser falsche Werte für diese Eigenschaften zurückgeben mussten, um nicht von einigen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
