---
title: "NDEFRecord: lang-Eigenschaft"
short-title: lang
slug: Web/API/NDEFRecord/lang
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`lang`**
Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) Schnittstelle gibt die Sprache einer textuellen Nutzlast zurück oder `null`, wenn keine angegeben wurde.

Der Datensatz könnte ein Sprach-Tag fehlen, zum Beispiel, wenn die aufgezeichneten Informationen nicht lokalspezifisch sind.

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

- [HTML `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang), das die Sprache des Inhalts des Dokuments oder seiner Elemente deklariert
- HTTP-Header, die die Sprache des Inhalts deklarieren: {{HTTPHeader("Content-Language")}} und {{HTTPHEader("Accept-Language")}}
