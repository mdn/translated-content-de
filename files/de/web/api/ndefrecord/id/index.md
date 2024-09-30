---
title: "NDEFRecord: id-Eigenschaft"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`id`**-Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt den Datensatzbezeichner zurück, der eine absolute oder relative URL ist und zur Identifizierung des Datensatzes verwendet wird.

Dieser Bezeichner wird vom Ersteller des Datensatzes generiert, der allein für die Durchsetzung der Einzigartigkeit des Datensatzbezeichners verantwortlich ist. Web NFC signiert die NFC-Inhalte nicht, daher sollten Datensatzkonsumenten keine Annahmen über die Integrität oder Authentizität des Bezeichners oder eines anderen Teils der Datensätze treffen.

## Syntax

```js-nolint
NDEFRecord.id
```

### Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
