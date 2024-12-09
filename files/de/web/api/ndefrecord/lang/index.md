---
title: "NDEFRecord: lang-Eigenschaft"
short-title: lang
slug: Web/API/NDEFRecord/lang
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`lang`**
Eigenschaft des [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) Interfaces gibt die Sprache einer textuellen Nutzlast zurück oder `null`, wenn keine angegeben wurde.

Der Eintrag könnte möglicherweise ein Sprach-Tag vermissen, beispielsweise wenn die aufgezeichneten Informationen nicht lokalitätsspezifisch sind.

## Syntax

```js-nolint
NDEFRecord.lang
```

### Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML `lang` Attribute](/de/docs/Web/HTML/Global_attributes/lang), das die Inhaltssprache des Dokuments oder seiner Elemente deklariert
- HTTP-Header, die die Inhaltssprache deklarieren: {{HTTPHeader("Content-Language")}} und {{HTTPHeader("Accept-Language")}}
