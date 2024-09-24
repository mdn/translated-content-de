---
title: "WorkerNavigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/WorkerNavigator/appVersion
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Gibt entweder "`4.0`" oder einen String zurück, der Versionsinformationen über den Browser repräsentiert.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder "`4.0`" oder ein String, der Versionsinformationen über den Browser repräsentiert.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die Eigenschaft `navigator.userAgent` kann ebenfalls die Versionsnummer enthalten (zum Beispiel "`Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1`"), aber Sie sollten sich bewusst sein, wie einfach es ist, den User-Agent-String zu ändern und andere Browser, Plattformen oder User Agents zu "fälschen", und auch, wie leichtfertig die Browseranbieter selbst mit diesen Eigenschaften umgehen.

Die Eigenschaften `navigator.appVersion`, `navigator.appName` und `navigator.userAgent` wurden in "Browser-Sniffing"-Code verwendet: Skripte, die versuchen herauszufinden, welchen Browser Sie verwenden, und entsprechend die Seiten anpassen. Dies führte zur aktuellen Situation, in der Browser gezwungen waren, falsche Werte für diese Eigenschaften zurückzugeben, um nicht von einigen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
