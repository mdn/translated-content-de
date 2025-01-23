---
title: Temporal.Now.timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.timeZoneId()`** gibt einen [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems darstellt. Die meisten Systeme geben einen primären Zeitzonenbezeichner wie `"America/New_York"` zurück, obwohl auch ein Offset-Zeitzonenbezeichner wie `"-04:00"` möglich ist. Der zurückgegebene Zeitzonenbezeichner ist die Standardzeitzone, die von den anderen Methoden in `Temporal.Now` verwendet wird.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameter

Keine.

### Rückgabewert

Ein gültiger [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), der die aktuelle Zeitzone des Systems darstellt. Der zurückgegebene Zeitzonenbezeichner ist niemals ein nicht-primärer Zeitzonenbezeichner (Alias). Zum Beispiel würde stets `"Asia/Kolkata"` (neuer Name) statt `"Asia/Calcutta"` (alter Name) zurückgegeben werden. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

Falls die Implementierung keine Zeitzonen unterstützt, gibt die Methode immer `"UTC"` zurück.

## Beispiele

### Ermitteln der aktuellen Systemzeitzone

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
