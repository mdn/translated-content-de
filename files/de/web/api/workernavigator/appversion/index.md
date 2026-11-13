---
title: "WorkerNavigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/WorkerNavigator/appVersion
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`appVersion`** der Schnittstelle [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) gibt entweder `"4.0"` oder einen String mit Versionsinformationen über den Browser zurück.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft die korrekte Browserversion zurückgibt.

## Wert

Entweder `"4.0"` oder ein String mit Versionsinformationen über den Browser.

## Beispiele

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Hinweise

Die Eigenschaft `navigator.userAgent` kann ebenfalls die Versionsnummer enthalten (zum Beispiel `"Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"`). Beachten Sie jedoch, wie leicht sich der User-Agent-String ändern lässt, um andere Browser, Plattformen oder User Agents vorzutäuschen. Auch die Browserhersteller selbst gehen mit diesen Eigenschaften recht nachlässig um.

Die Eigenschaften `navigator.appVersion`, `navigator.appName` und `navigator.userAgent` wurden in Code für „Browser Sniffing“ verwendet: Skripte, die zu ermitteln versuchen, welchen Browser Sie verwenden, und Seiten entsprechend anpassen. Das führte dazu, dass Browser für diese Eigenschaften falsche Werte zurückgeben mussten, um nicht von manchen Websites ausgeschlossen zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
