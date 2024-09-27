---
title: MediaKeyStatusMap
slug: Web/API/MediaKeyStatusMap
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`MediaKeyStatusMap`**-Interface der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) ist eine schreibgeschützte Karte von Medienschlüsselstatus nach Schlüssel-IDs.

## Instanzeigenschaften

- [`MediaKeyStatusMap.size`](/de/docs/Web/API/MediaKeyStatusMap/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare in der Statuskarte zurück.

## Instanzmethoden

- [`MediaKeyStatusMap.entries()`](/de/docs/Web/API/MediaKeyStatusMap/entries) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuskarte in Einfügereihenfolge enthält.
- [`MediaKeyStatusMap.forEach()`](/de/docs/Web/API/MediaKeyStatusMap/forEach) {{ReadOnlyInline}}
  - : Ruft `callback` einmal für jedes Schlüssel-Wert-Paar in der Statuskarte in Einfügereihenfolge auf. Wenn `argument` vorhanden ist, wird es an den Callback übergeben.
- [`MediaKeyStatusMap.get()`](/de/docs/Web/API/MediaKeyStatusMap/get) {{ReadOnlyInline}}
  - : Gibt den Wert zurück, der mit dem angegebenen Schlüssel verknüpft ist, oder `undefined`, wenn keiner vorhanden ist.
- [`MediaKeyStatusMap.has()`](/de/docs/Web/API/MediaKeyStatusMap/has) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der bestätigt, ob ein Wert mit dem angegebenen Schlüssel verknüpft wurde.
- [`MediaKeyStatusMap.keys()`](/de/docs/Web/API/MediaKeyStatusMap/keys) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Schlüssel für jedes Element in der Statuskarte in Einfügereihenfolge enthält.
- [`MediaKeyStatusMap.values()`](/de/docs/Web/API/MediaKeyStatusMap/values) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Werte für jedes Element in der Statuskarte in Einfügereihenfolge enthält.
- `MediaKeyStatusMap[Symbol.iterator]()` {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuskarte in Einfügereihenfolge enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
