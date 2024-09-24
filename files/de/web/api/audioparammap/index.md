---
title: AudioParamMap
slug: Web/API/AudioParamMap
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Web Audio API")}}

Die **`AudioParamMap`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert eine iterierbare und schreibgeschützte Menge mehrerer Audio-Parameter.

Eine Instanz von `AudioParamMap` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel der Name eines Parameters als String ist und der entsprechende Wert ein {{domxref("AudioParam")}}, das den Wert dieses Parameters enthält.

## Instanz-Eigenschaften

Die folgenden Methoden stehen allen schreibgeschützten [Map-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die untenstehenden Links führen zur globalen Objekt-Referenzseite von {{jsxref("Map")}}).

- {{jsxref("Map/size", "size")}}
  - : Gibt die Anzahl der Einträge in der Map zurück.

## Instanz-Methoden

Die folgenden Methoden stehen allen schreibgeschützten [Map-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die untenstehenden Links führen zur globalen Objekt-Referenzseite von {{jsxref("Map")}}).

- {{jsxref("Map/entries", "entries()")}}
  - : Gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das Einträge in `[key, value]`-Paaren in der Map in Einfügereihenfolge liefert.
- {{jsxref("Map/forEach", "forEach()")}}
  - : Ruft eine bereitgestellte {{glossary("callback function")}} einmal für jeden Wert und Schlüssel in der Map in Einfügereihenfolge auf.
- {{jsxref("Map/get", "get()")}}
  - : Gibt den {{domxref("AudioParam")}}-Wert zurück, der dem String-Schlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("Map/has", "has()")}}
  - : Gibt einen [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) zurück, der angibt, ob ein Schlüssel in der Map vorhanden ist oder nicht.
- {{jsxref("Map/keys", "keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die String-Schlüssel in der Map in Einfügereihenfolge liefert.
- {{jsxref("Map/values", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die {{domxref("AudioParam")}}-Werte in der Map in Einfügereihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
