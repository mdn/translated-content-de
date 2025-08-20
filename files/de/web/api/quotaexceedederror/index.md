---
title: QuotaExceededError
slug: Web/API/QuotaExceededError
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`QuotaExceededError`** Schnittstelle repräsentiert einen Fehler, wenn eine angeforderte Operation ein vom System auferlegtes Speicherbegrenzung überschreiten würde.

> [!NOTE]
> In Browser-Versionen, bevor diese Schnittstelle implementiert wurde, war es ein regulärer `DOMException`. Das Subclassing ermöglicht zusätzliche Informationen wie `quota` und `requested` einzubeziehen.

{{InheritanceDiagram}}

## Konstruktor

- [`QuotaExceededError()`](/de/docs/Web/API/QuotaExceededError/QuotaExceededError) {{experimental_inline}}
  - : Erstellt ein `QuotaExceededError` Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Vorfahren [`DOMException`](/de/docs/Web/API/DOMException)._

- [`QuotaExceededError.quota`](/de/docs/Web/API/QuotaExceededError/quota) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt das systemdefinierte Speicherlimit (in Bytes) zurück, das überschritten wurde.
- [`requested`](/de/docs/Web/API/QuotaExceededError/requested) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Menge an Speicher (in Bytes) zurück, die während der Operation angefordert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
- [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)
- [Speicherbegrenzungen und Räumungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
