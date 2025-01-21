---
title: Temporal.Now.timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`Temporal.Now.timeZoneId()`** gibt einen [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems darstellt. Die meisten Systeme geben einen primären Zeitzonenbezeichner wie `"America/New_York"` zurück, obwohl auch ein Offset-Zeitzonenbezeichner wie `"-04:00"` möglich ist. Der zurückgegebene Zeitzonenbezeichner ist die Standardzeitzone, die von den anderen `Temporal.Now`-Methoden verwendet wird.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameter

Keine.

### Rückgabewert

Ein gültiger [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), der die aktuelle Zeitzone des Systems darstellt. Der zurückgegebene Zeitzonenbezeichner ist niemals ein nicht-primärer Zeitzonenbezeichner (Alias). Zum Beispiel würde immer `"Asia/Kolkata"` (neuer Name) anstelle von `"Asia/Calcutta"` (alter Name) zurückgegeben. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

Falls die Implementierung keine Zeitzonen unterstützt, gibt die Methode immer `"UTC"` zurück.

## Beispiele

### Die aktuelle Zeitzone des Systems abrufen

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
