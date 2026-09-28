---
title: MediaKeyStatusMap
slug: Web/API/MediaKeyStatusMap
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`MediaKeyStatusMap`**-Interface der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) ist eine schreibgeschützte Zuordnung von Statuswerten für Medienschlüssel zu Schlüssel-IDs.

## Instanzeigenschaften

- [`MediaKeyStatusMap.size`](/de/docs/Web/API/MediaKeyStatusMap/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Schlüssel-Wert-Paare in der Statuszuordnung zurück.

## Instanzmethoden

- [`MediaKeyStatusMap.entries()`](/de/docs/Web/API/MediaKeyStatusMap/entries)
  - : Gibt ein neues `Iterator`-Objekt zurück, das für jeden Eintrag in der Statuszuordnung ein Array der Form `[key, value]` enthält, in der Reihenfolge des Einfügens.
- [`MediaKeyStatusMap.forEach()`](/de/docs/Web/API/MediaKeyStatusMap/forEach)
  - : Ruft `callback` für jedes Schlüssel-Wert-Paar in der Statuszuordnung einmal auf, in der Reihenfolge des Einfügens. Falls `argument` angegeben ist, wird es an den Callback übergeben.
- [`MediaKeyStatusMap.get()`](/de/docs/Web/API/MediaKeyStatusMap/get)
  - : Gibt den dem angegebenen Schlüssel zugeordneten Wert zurück oder `undefined`, wenn kein Wert zugeordnet ist.
- [`MediaKeyStatusMap.has()`](/de/docs/Web/API/MediaKeyStatusMap/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob dem angegebenen Schlüssel ein Wert zugeordnet ist.
- [`MediaKeyStatusMap.keys()`](/de/docs/Web/API/MediaKeyStatusMap/keys)
  - : Gibt ein neues `Iterator`-Objekt zurück, das die Schlüssel aller Einträge in der Statuszuordnung enthält, in der Reihenfolge des Einfügens.
- [`MediaKeyStatusMap.values()`](/de/docs/Web/API/MediaKeyStatusMap/values)
  - : Gibt ein neues `Iterator`-Objekt zurück, das die Werte aller Einträge in der Statuszuordnung enthält, in der Reihenfolge des Einfügens.
- `MediaKeyStatusMap[Symbol.iterator]()`
  - : Gibt ein neues `Iterator`-Objekt zurück, das für jeden Eintrag in der Statuszuordnung ein Array der Form `[key, value]` enthält, in der Reihenfolge des Einfügens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
