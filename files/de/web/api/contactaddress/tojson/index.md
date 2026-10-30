---
title: "ContactAddress: Methode toJSON()"
short-title: toJSON()
slug: Web/API/ContactAddress/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`ContactAddress`](/de/docs/Web/API/ContactAddress) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `ContactAddress`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `ContactAddress`-Objekt vorkommt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`country`](/de/docs/Web/API/ContactAddress/country)
- [`addressLine`](/de/docs/Web/API/ContactAddress/addressLine)
- [`region`](/de/docs/Web/API/ContactAddress/region)
- [`city`](/de/docs/Web/API/ContactAddress/city)
- [`dependentLocality`](/de/docs/Web/API/ContactAddress/dependentLocality)
- [`postalCode`](/de/docs/Web/API/ContactAddress/postalCode)
- [`sortingCode`](/de/docs/Web/API/ContactAddress/sortingCode)
- [`organization`](/de/docs/Web/API/ContactAddress/organization)
- [`recipient`](/de/docs/Web/API/ContactAddress/recipient)
- [`phone`](/de/docs/Web/API/ContactAddress/phone)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Bei einem `ContactAddress`-Objekt namens `address` gibt ein direkter Aufruf von `toJSON()` ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = address.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.country); // Same value as address.country
```

### In einen JSON-String serialisieren

Das `ContactAddress`-Objekt wird mit {{jsxref("JSON.stringify()")}} serialisiert, wobei die Methode `toJSON()` automatisch aufgerufen wird.

```js
console.log(JSON.stringify(address));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "country": "US",
  "addressLine": ["123 Main Street"],
  "region": "CA",
  "city": "San Francisco",
  "dependentLocality": "",
  "postalCode": "94105",
  "sortingCode": "",
  "organization": "",
  "recipient": "Alex Smith",
  "phone": ""
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
