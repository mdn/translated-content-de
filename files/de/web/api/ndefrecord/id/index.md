---
title: "NDEFRecord: id-Eigenschaft"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`id`**-Eigenschaft des
[`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt den Datensatz-Identifier zurück, bei dem es sich um eine absolute oder relative URL handelt, die zur Identifizierung des Datensatzes verwendet wird.

Dieser Identifier wird vom Erzeuger des Datensatzes erstellt, der allein für die Durchsetzung der Eindeutigkeit des Datensatz-Identifiers verantwortlich ist. Web NFC signiert den NFC-Inhalt nicht, daher sollte der Datensatzverbraucher keine Annahmen über die Integrität oder Authentizität des Identifiers oder eines anderen Teils der Datensätze treffen.

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
