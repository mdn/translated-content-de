---
title: "NDEFRecord: Eigenschaft id"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`id`**-Eigenschaft der
{{DOMxRef("NDEFRecord")}}-Schnittstelle gibt den Datensatzidentifikator zurück, der eine
absolute oder relative URL ist, die zur Identifizierung des Datensatzes verwendet wird.

Dieser Identifikator wird vom Ersteller des Datensatzes erstellt, der allein für die
Durchsetzung der Einzigartigkeit des Datensatzidentifikators verantwortlich ist. Web NFC signiert den NFC-Inhalt nicht, daher sollten Konsumenten des Datensatzes keine Annahmen über die Integrität oder Authentizität des Identifikators oder eines anderen Teils der Datensätze treffen.

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
