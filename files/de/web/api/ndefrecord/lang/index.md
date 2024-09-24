---
title: "NDEFRecord: lang-Eigenschaft"
short-title: lang
slug: Web/API/NDEFRecord/lang
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`lang`**-Eigenschaft der {{DOMxRef("NDEFRecord")}}-Schnittstelle gibt die Sprache einer Textnutzlast zurück oder `null`, wenn keine angegeben wurde.

Der Datensatz könnte ein Sprach-Tag fehlen, zum Beispiel, wenn die aufgezeichnete Information nicht lokalspezifisch ist.

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

- [HTML `lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang), das die Inhaltssprache des Dokuments oder seiner Elemente deklariert
- HTTP-Header, die die Inhaltssprache deklarieren: {{HTTPHeader("Content-Language")}} und {{HTTPHEader("Accept-Language")}}
