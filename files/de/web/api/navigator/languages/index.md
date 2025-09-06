---
title: "Navigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: 3e1f24c70df1a6f5a76e843369b404ecab19e931
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`languages`** des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces liefert ein Array von Zeichenfolgen, die die bevorzugten Sprachen des Benutzers darstellen. Die Sprache wird mit Sprach-Tags gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die bevorzugte Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/Navigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich sein Wert ändert, da die bevorzugten Sprachen des Benutzers geändert wurden, wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst.

Der {{HTTPHeader("Accept-Language")}} HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers listet im Allgemeinen dieselben Gebietsschemata wie die `navigator.languages`-Eigenschaft auf, mit abnehmenden `q`-Werten (Qualitätswerten). Einige Browser (Chrome und Safari) fügen im `Accept-Language`-Header Sprach-Only-Fallback-Tags hinzu — zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung von {{Glossary("fingerprinting", "Fingerprinting")}}) könnten sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie z.B. in Safari (immer) und im Inkognito-Modus von Chrome, wo nur eine Sprache aufgelistet ist.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

### Die Inhalte von navigator.language und navigator.languages auflisten

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Verwendung von Intl-Konstruktoren für sprachspezifisches Formatieren, mit Fallback

Das Array von Sprach-Identifikatoren, das in `navigator.languages` enthalten ist, kann direkt an die {{jsxref("Intl")}}-Konstruktoren übergeben werden, um eine präferenzbasierte Fallback-Auswahl von Gebietsschemata zu implementieren, wobei der erste Eintrag in der Liste verwendet wird, der einem von `Intl` unterstützten Gebietsschema entspricht:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.language`](/de/docs/Web/API/Navigator/language)
- [`navigator`](/de/docs/Web/API/Navigator)
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis
- {{jsxref("Intl")}}
