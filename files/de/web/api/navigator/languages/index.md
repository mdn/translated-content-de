---
title: "Navigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`languages`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces
gibt ein Array von Strings zurück, die die bevorzugten
Sprachen des Benutzers darstellen. Die Sprache wird mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} beschrieben. Im zurückgegebenen
Array sind sie nach Präferenz geordnet, wobei die am meisten bevorzugte Sprache zuerst erscheint.

Der Wert von [`navigator.language`](/de/docs/Web/API/Navigator/language) ist das
erste Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, beispielsweise wenn die bevorzugten Sprachen des Benutzers geändert werden, wird ein
[`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst.

Der {{HTTPHeader("Accept-Language")}} HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers listet im Allgemeinen die gleichen Locale wie die `navigator.languages`-Eigenschaft auf, mit abnehmenden `q`-Werten (Qualitätswerte). Einige Browser (Chrome und Safari) fügen im `Accept-Language`-Header Sprachtags ohne Länderkennzeichnung als Fallback hinzu—zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung von {{Glossary("fingerprinting", "Fingerprinting")}}) können sowohl `Accept-Language` als auch `navigator.languages` möglicherweise nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie zum Beispiel in Safari (immer) und im Inkognito-Modus von Chrome, wo nur eine Sprache aufgelistet ist.

## Wert

Ein Array von Strings.

## Beispiele

### Auflisten der Inhalte von navigator.language und navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Verwenden von Intl-Konstruktoren für sprachspezifische Formatierung mit Fallback

Das Array von Sprachkennungen, das in `navigator.languages` enthalten ist, kann direkt an die {{jsxref("Intl")}}-Konstruktoren übergeben werden, um eine präferenzbasierte Fallbackauswahl von Locales zu implementieren, bei der der erste Eintrag in der Liste verwendet wird, der eine von `Intl` unterstützte Locale entspricht:

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
- [`languagechange`](/de/docs/Web/API/Window/languagechange_event) Ereignis
- {{jsxref("Intl")}}
