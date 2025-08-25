---
title: "Navigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/Navigator/appVersion
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{APIRef("HTML DOM")}}

Gibt entweder `"4.0"` oder einen String zurück, der Versionsinformationen über den Browser darstellt.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder `"4.0"` oder ein String, der Versionsinformationen über den Browser darstellt.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die `window.navigator.userAgent`-Eigenschaft kann ebenfalls die Versionsnummer enthalten (zum Beispiel
`"Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"`), aber Sie sollten sich bewusst sein, wie einfach es ist, den User-Agent-String zu ändern und andere Browser, Plattformen oder Benutzeragenten zu "fälschen" und auch wie sorglos die Browseranbieter selbst mit diesen Eigenschaften umgehen.

Die Eigenschaften `window.navigator.appVersion`, `window.navigator.appName` und
`window.navigator.userAgent` wurden in "Browser-Sniffing"-Code verwendet: Skripte, die versuchen herauszufinden, welche Art von Browser Sie verwenden, und Seiten entsprechend anzupassen. Dies führte zu der aktuellen Situation, in der Browser gefälschte Werte von diesen Eigenschaften zurückgeben mussten, um nicht von einigen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
