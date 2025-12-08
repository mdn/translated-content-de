---
title: Temporal.Now.timeZoneId()
short-title: timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.Now.timeZoneId()`** gibt einen [Zeitzonen-Identifier](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems darstellt. Die meisten Systeme geben einen primären Zeitzonen-Identifier wie `"America/New_York"` zurück, es ist jedoch auch ein Zeitzonen-Identifier als Offset wie `"-04:00"` möglich. Der zurückgegebene Zeitzonen-Identifier ist der Standard-Zeitzonen-Identifier, der von den anderen `Temporal.Now`-Methoden verwendet wird.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameter

Keine.

### Rückgabewert

Ein gültiger [Zeitzonen-Identifier](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), der die aktuelle Zeitzone des Systems darstellt. Der zurückgegebene Zeitzonen-Identifier ist nie ein nicht-primärer Zeitzonen-Identifier (Alias). Beispielsweise würde immer `"Asia/Kolkata"` (neuer Name) anstelle von `"Asia/Calcutta"` (alter Name) zurückgegeben. Weitere Informationen finden Sie unter [time zones and offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

Wenn die Implementierung keine Zeitzonen unterstützt, gibt die Methode immer `"UTC"` zurück.

## Beispiele

### Ermitteln der aktuellen Zeitzone des Systems

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
