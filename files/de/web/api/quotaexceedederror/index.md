---
title: QuotaExceededError
slug: Web/API/QuotaExceededError
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("DOM")}}

Das **`QuotaExceededError`**-Interface stellt einen Fehler dar, der auftritt, wenn eine angeforderte Operation ein vom System vorgegebenes Speicherkontingent überschreiten würde.

> [!NOTE]
> In Browserversionen, bevor dieses Interface implementiert wurde, handelte es sich um eine reguläre `DOMException`. Durch die Unterklasse können zusätzliche Informationen wie `quota` und `requested` bereitgestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`QuotaExceededError()`](/de/docs/Web/API/QuotaExceededError/QuotaExceededError)
  - : Erstellt ein `QuotaExceededError`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften vom Vorgänger [`DOMException`](/de/docs/Web/API/DOMException)._

- [`QuotaExceededError.quota`](/de/docs/Web/API/QuotaExceededError/quota) {{ReadOnlyInline}}
  - : Gibt das vom System festgelegte Speicherlimit (in Byte) zurück, das überschritten wurde.
- [`requested`](/de/docs/Web/API/QuotaExceededError/requested) {{ReadOnlyInline}}
  - : Gibt die während der Operation angeforderte Speichermenge (in Byte) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
- [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)
- [Speicherkontingente und Kriterien für die Verdrängung](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
