---
title: QuotaExceededError
slug: Web/API/QuotaExceededError
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`QuotaExceededError`**-Schnittstelle repräsentiert einen Fehler, wenn eine angeforderte Operation ein systembedingtes Speicherlimit überschreiten würde.

> [!NOTE]
> In Browserversionen vor der Implementierung dieser Schnittstelle war es ein regulärer `DOMException`. Die Unterklassifizierung erlaubt die Einbeziehung zusätzlicher Informationen wie `quota` und `requested`.

{{InheritanceDiagram}}

## Konstruktor

- [`QuotaExceededError()`](/de/docs/Web/API/QuotaExceededError/QuotaExceededError) {{experimental_inline}}
  - : Erstellt ein `QuotaExceededError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Vorfahren [`DOMException`](/de/docs/Web/API/DOMException)._

- [`QuotaExceededError.quota`](/de/docs/Web/API/QuotaExceededError/quota) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt das vom System festgelegte Speicherlimit (in Bytes) zurück, das überschritten wurde.
- [`requested`](/de/docs/Web/API/QuotaExceededError/requested) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die während der Operation angeforderte Speichermenge (in Bytes) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
- [`navigator.storage.estimate()`](/de/docs/Web/API/Navigator/storage/estimate)
- [Speicherbegrenzungen und Auslöschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
