---
title: MediaKeyStatusMap
slug: Web/API/MediaKeyStatusMap
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`MediaKeyStatusMap`**-Interface der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) ist eine schreibgeschützte Zuordnung von Medienschlüsselstatus nach Schlüssel-IDs.

## Instanzeigenschaften

- [`MediaKeyStatusMap.size`](/de/docs/Web/API/MediaKeyStatusMap/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare in der Statuszuordnung zurück.

## Instanzmethoden

- [`MediaKeyStatusMap.entries()`](/de/docs/Web/API/MediaKeyStatusMap/entries) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- [`MediaKeyStatusMap.forEach()`](/de/docs/Web/API/MediaKeyStatusMap/forEach) {{ReadOnlyInline}}
  - : Ruft `callback` einmal für jedes Schlüssel-Wert-Paar in der Statuszuordnung in Einfügereihenfolge auf. Wenn `argument` vorhanden ist, wird es an den Callback übergeben.
- [`MediaKeyStatusMap.get()`](/de/docs/Web/API/MediaKeyStatusMap/get) {{ReadOnlyInline}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- [`MediaKeyStatusMap.has()`](/de/docs/Web/API/MediaKeyStatusMap/has) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Wert mit dem angegebenen Schlüssel verknüpft ist.
- [`MediaKeyStatusMap.keys()`](/de/docs/Web/API/MediaKeyStatusMap/keys) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Schlüssel für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- [`MediaKeyStatusMap.values()`](/de/docs/Web/API/MediaKeyStatusMap/values) {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das Werte für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.
- `MediaKeyStatusMap[Symbol.iterator]()` {{ReadOnlyInline}}
  - : Gibt ein neues `Iterator`-Objekt zurück, das ein Array von `[key, value]` für jedes Element in der Statuszuordnung in Einfügereihenfolge enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
