---
title: "NDEFRecord: id-Eigenschaft"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`id`**-Eigenschaft der
[`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt die Datensatzkennung zurück, bei der es sich um eine absolute oder relative URL handelt, die zur Identifizierung des Datensatzes verwendet wird.

Dieser Bezeichner wird vom Ersteller des Datensatzes generiert, der allein dafür verantwortlich ist, die Eindeutigkeit des Datensatzbezeichners sicherzustellen. Web NFC signiert den NFC-Inhalt nicht, daher sollte der Verbraucher des Datensatzes keine Annahmen über die Integrität oder Authentizität des Bezeichners oder irgendeines anderen Teils der Datensätze treffen.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
