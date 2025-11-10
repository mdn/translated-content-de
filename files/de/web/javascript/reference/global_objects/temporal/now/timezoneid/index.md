---
title: Temporal.Now.timeZoneId()
short-title: timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`Temporal.Now.timeZoneId()`** statische Methode gibt einen [Zeitzonen-Identifier](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems repräsentiert. Die meisten Systeme geben einen primären Zeitzonen-Identifier wie `"America/New_York"` zurück, obwohl auch ein Offset-Zeitzonen-Identifier wie `"-04:00"` möglich ist. Der zurückgegebene Zeitzonen-Identifier ist die Standardzeitzone, die von den anderen `Temporal.Now`-Methoden verwendet wird.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameter

Keine.

### Rückgabewert

Ein gültiger [Zeitzonen-Identifier](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), der die aktuelle Zeitzone des Systems repräsentiert. Der zurückgegebene Zeitzonen-Identifier ist niemals ein nicht-primärer Zeitzonen-Identifier (Alias). Zum Beispiel würde er immer `"Asia/Kolkata"` (neuer Name) statt `"Asia/Calcutta"` (alter Name) zurückgeben. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

Falls die Implementierung keine Zeitzonen unterstützt, gibt die Methode immer `"UTC"` zurück.

## Beispiele

### Abrufen der aktuellen Zeitzone des Systems

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
