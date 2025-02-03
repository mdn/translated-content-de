---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.info()`** gibt eine Nachricht auf der Konsole auf der "info"-Protokollebene aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Informationsausgaben anzeigt. In den meisten Fällen wird die Protokollebene innerhalb der Konsolenbenutzeroberfläche konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie zum Beispiel ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
console.info(val1)
console.info(val1, /* …, */ valN)
console.info(msg)
console.info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung dazwischen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungsstrings ersetzt werden. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungsstrings, werden die zusätzlichen Werte selbst nach der detaillierten Assertionsmeldung auf die gleiche Weise in die Konsole geschrieben, wie wenn es keinen Format-String gibt.

Siehe [Text auf die Konsole ausgeben](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.js Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
