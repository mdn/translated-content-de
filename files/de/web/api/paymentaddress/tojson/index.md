---
title: "PaymentAddress: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PaymentAddress/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die Methode **`toJSON()`** des Interfaces [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PaymentAddress`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PaymentAddress`-Objekt vorkommt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`country`](/de/docs/Web/API/PaymentAddress/country)
- [`addressLine`](/de/docs/Web/API/PaymentAddress/addressLine)
- [`region`](/de/docs/Web/API/PaymentAddress/region)
- [`city`](/de/docs/Web/API/PaymentAddress/city)
- [`dependentLocality`](/de/docs/Web/API/PaymentAddress/dependentLocality)
- [`postalCode`](/de/docs/Web/API/PaymentAddress/postalCode)
- [`sortingCode`](/de/docs/Web/API/PaymentAddress/sortingCode)
- [`organization`](/de/docs/Web/API/PaymentAddress/organization)
- [`recipient`](/de/docs/Web/API/PaymentAddress/recipient)
- [`phone`](/de/docs/Web/API/PaymentAddress/phone)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Wenn ein `PaymentAddress`-Objekt namens `address` vorliegt, gibt der direkte Aufruf von `toJSON()` ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = address.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.country); // Same value as address.country
```

### In einen JSON-String serialisieren

Das `PaymentAddress`-Objekt wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

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

## Browser-Kompatibilität

{{Compat}}
