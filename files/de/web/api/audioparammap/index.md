---
title: AudioParamMap
slug: Web/API/AudioParamMap
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Web Audio API")}}

Die **`AudioParamMap`** Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert eine durchlaufbare und schreibgeschützte Menge von mehreren Audioparametern.

Eine `AudioParamMap`-Instanz ist ein schreibgeschütztes [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel ein Namens-String für einen Parameter ist, und der entsprechende Wert ein [`AudioParam`](/de/docs/Web/API/AudioParam) mit dem Wert dieses Parameters enthält.

## Instanzeigenschaften

Die folgenden Methoden stehen allen schreibgeschützten [`Map`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die untenstehenden Links führen zur {{jsxref("Map")}}-Referenzseite des globalen Objekts).

- {{jsxref("Map/size", "size")}}
  - : Gibt die Anzahl der Einträge in der Map zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [`Map`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die untenstehenden Links führen zur {{jsxref("Map")}}-Referenzseite des globalen Objekts).

- {{jsxref("Map/entries", "entries()")}}
  - : Gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das Einträge in `[key, value]`-Paaren in der Map in der Einfügereihenfolge liefert.
- {{jsxref("Map/forEach", "forEach()")}}
  - : Ruft eine bereitgestellte [Callback-Funktion](/de/docs/Glossary/callback_function) einmal für jeden Wert und Schlüssel, der in der Map vorhanden ist, in der Einfügereihenfolge auf.
- {{jsxref("Map/get", "get()")}}
  - : Gibt den [`AudioParam`](/de/docs/Web/API/AudioParam)-Wert zurück, der dem Stringschlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("Map/has", "has()")}}
  - : Gibt einen [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) zurück, der angibt, ob ein Schlüssel in der Map vorhanden ist oder nicht.
- {{jsxref("Map/keys", "keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Stringschlüssel in der Map in der Einfügereihenfolge liefert.
- {{jsxref("Map/values", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die [`AudioParam`](/de/docs/Web/API/AudioParam)-Werte in der Map in der Einfügereihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
