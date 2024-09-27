---
title: "Navigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/Navigator/appVersion
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Gibt entweder `"4.0"` oder einen String zurück, der Versionsinformationen über den Browser repräsentiert.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder `"4.0"` oder ein String, der Versionsinformationen über den Browser repräsentiert.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die `window.navigator.userAgent`-Eigenschaft kann ebenfalls die Versionsnummer enthalten (zum Beispiel
`"Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"`),
aber Sie sollten sich bewusst sein, wie einfach es ist, den User-Agent-String zu ändern und andere Browser, Plattformen oder User-Agents zu "fälschen", und wie sorglos die Browser-Anbieter selbst mit diesen Eigenschaften umgehen.

Die Eigenschaften `window.navigator.appVersion`, `window.navigator.appName` und
`window.navigator.userAgent` wurden in "Browser-Sniffing"-Code verwendet: Skripte, die versuchen herauszufinden, welchen Browser Sie verwenden und Seiten entsprechend anpassen. Dies führte zur aktuellen Situation, in der Browser gezwungen waren, gefälschte Werte für diese Eigenschaften zurückzugeben, um nicht von einigen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
