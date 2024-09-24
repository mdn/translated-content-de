---
title: MediaKeyStatusMap
slug: Web/API/MediaKeyStatusMap
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeyStatusMap`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) ist eine schreibgeschützte Zuordnung von Medienschlüssel-Status nach Schlüssel-IDs.

## Instanz-Eigenschaften

- {{domxref("MediaKeyStatusMap.size")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare in der Statuszuordnung zurück.

## Instanz-Methoden

- {{domxref("MediaKeyStatusMap.entries()")}} {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- {{domxref("MediaKeyStatusMap.forEach()")}} {{ReadOnlyInline}}
  - : Ruft `callback` einmal für jedes Schlüssel-Wert-Paar in der Statuszuordnung in Einfügereihenfolge auf. Wenn `argument` vorhanden ist, wird es an den Callback übergeben.
- {{domxref("MediaKeyStatusMap.get()")}} {{ReadOnlyInline}}
  - : Gibt den Wert zurück, der mit dem angegebenen Schlüssel verknüpft ist, oder `undefined`, wenn keiner vorhanden ist.
- {{domxref("MediaKeyStatusMap.has()")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Wert mit dem angegebenen Schlüssel verknüpft wurde.
- {{domxref("MediaKeyStatusMap.keys()")}} {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Schlüssel für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- {{domxref("MediaKeyStatusMap.values()")}} {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Werte für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- `MediaKeyStatusMap[Symbol.iterator]()` {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
