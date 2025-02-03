---
title: "NDEFRecord: id-Eigenschaft"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`id`**-Eigenschaft des
[`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt den Datensatzbezeichner zurück, der eine
absolute oder relative URL ist, die verwendet wird, um den Datensatz zu identifizieren.

Dieser Bezeichner wird vom Erzeuger des Datensatzes erstellt, der allein für die Sicherstellung der Eindeutigkeit des Datensatzbezeichners verantwortlich ist. Web NFC signiert den NFC-Inhalt nicht, daher sollte der Datensatzverbraucher keine Annahmen über die Integrität oder Authentizität des Bezeichners oder eines anderen Teils der Datensätze treffen.

### Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
