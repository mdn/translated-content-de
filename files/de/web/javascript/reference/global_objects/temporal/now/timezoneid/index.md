---
title: Temporal.Now.timeZoneId()
short-title: timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.timeZoneId()`** gibt eine [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, die die aktuelle Zeitzone des Systems repräsentiert. Die meisten Systeme werden eine primäre Zeitzonenkennung wie `"America/New_York"` zurückgeben, obwohl auch eine Offset-Zeitzonenkennung wie `"-04:00"` möglich ist. Die zurückgegebene Zeitzonenkennung ist die Standardzeitzone, die von den anderen Methoden von `Temporal.Now` verwendet wird.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameter

Keine.

### Rückgabewert

Eine gültige [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), die die aktuelle Zeitzone des Systems repräsentiert. Die zurückgegebene Zeitzonenkennung ist niemals eine nicht-primäre Zeitzonenkennung (Alias). Zum Beispiel würde sie immer `"Asia/Kolkata"` (neuer Name) statt `"Asia/Calcutta"` (alter Name) zurückgeben. Für weitere Informationen siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

Wenn die Implementierung keine Zeitzonen unterstützt, gibt die Methode immer `"UTC"` zurück.

## Beispiele

### Die aktuelle Zeitzone des Systems ermitteln

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
