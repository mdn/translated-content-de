---
title: "WorkerNavigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/WorkerNavigator/appVersion
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Gibt entweder `"4.0"` oder eine Zeichenkette zurück, die Versionsinformationen über den Browser darstellt.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder `"4.0"` oder eine Zeichenkette, die Versionsinformationen über den Browser darstellt.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die `navigator.userAgent`-Eigenschaft kann ebenfalls die Versionsnummer enthalten (zum Beispiel
`"Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"`), aber Sie sollten sich bewusst sein, wie leicht es ist, den User-Agent-String zu ändern und andere Browser, Plattformen oder User-Agents vorzutäuschen, sowie wie leichtfertig die Browserhersteller selbst mit diesen Eigenschaften umgehen.

Die Eigenschaften `navigator.appVersion`, `navigator.appName` und `navigator.userAgent` wurden in "Browser-Sniffing"-Codes verwendet: Skripte, die versuchen zu erkennen, welchen Browser Sie verwenden, und Seiten entsprechend anzupassen. Dies führte zur aktuellen Situation, in der Browser gefälschte Werte für diese Eigenschaften zurückgeben müssen, um nicht von einigen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
