---
title: AudioParamMap
slug: Web/API/AudioParamMap
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Web Audio API")}}

Das **`AudioParamMap`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert eine iterierbare und schreibgeschützte Menge mehrerer Audioparameter.

Eine `AudioParamMap`-Instanz ist ein schreibgeschütztes [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel der Name eines Parameters ist und der entsprechende Wert ein [`AudioParam`](/de/docs/Web/API/AudioParam), der den Wert dieses Parameters enthält.

## Instanzeigenschaften

Die folgenden Methoden stehen allen schreibgeschützten [`Map`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die Links unten führen zur {{jsxref("Map")}}-Referenzseite des globalen Objekts).

- {{jsxref("Map/size", "size")}}
  - : Gibt die Anzahl der Einträge in der Map zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [`Map`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) zur Verfügung (die Links unten führen zur {{jsxref("Map")}}-Referenzseite des globalen Objekts).

- {{jsxref("Map/entries", "entries()")}}
  - : Gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das Einträge in `[key, value]`-Paaren in der Reihenfolge der Einfügung in der Map ausgibt.
- {{jsxref("Map/forEach", "forEach()")}}
  - : Ruft eine bereitgestellte [Callback-Funktion](/de/docs/Glossary/callback_function) einmal für jeden in der Map vorhandenen Wert und Schlüssel in der Reihenfolge der Einfügung auf.
- {{jsxref("Map/get", "get()")}}
  - : Gibt den mit dem String-Schlüssel assoziierten [`AudioParam`](/de/docs/Web/API/AudioParam)-Wert zurück oder `undefined`, falls keiner vorhanden ist.
- {{jsxref("Map/has", "has()")}}
  - : Gibt einen [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) zurück, der angibt, ob ein Schlüssel in der Map vorhanden ist oder nicht.
- {{jsxref("Map/keys", "keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die String-Schlüssel in der Reihenfolge der Einfügung in der Map ausgibt.
- {{jsxref("Map/values", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die [`AudioParam`](/de/docs/Web/API/AudioParam)-Werte in der Map in der Reihenfolge der Einfügung ausgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
