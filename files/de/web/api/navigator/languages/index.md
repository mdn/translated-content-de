---
title: "Navigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{APIRef("HTML DOM")}}

Die **`Navigator.languages`**-Eigenschaft ist schreibgeschützt und gibt ein Array von Zeichenfolgen zurück, die die vom Benutzer bevorzugten Sprachen repräsentieren. Die Sprache wird mit Sprach-Tags gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen Array sind sie in der Reihenfolge der Präferenz angeordnet, wobei die am meisten bevorzugte Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/Navigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich dessen Wert ändert, da die bevorzugten Sprachen des Benutzers geändert werden, wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst.

Der {{HTTPHeader("Accept-Language")}} HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers listet im Allgemeinen dieselben Regionen wie die `navigator.languages`-Eigenschaft auf, mit abnehmenden `q`-Werten (Qualitätswerte). Einige Browser (Chrome und Safari) fügen im `Accept-Language`-Header nur sprachbasierte Fallback-Tags hinzu - zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (um [Fingerprinting](/de/docs/Glossary/fingerprinting) zu reduzieren) können sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie etwa in Safari (immer) und im Inkognito-Modus von Chrome, wo nur eine Sprache aufgeführt wird.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

### Auflisten der Inhalte von navigator.language und navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Verwenden von Intl-Konstruktoren für sprachenabhängige Formatierung mit Fallback

Das Array von Sprachidentifikatoren, das in `navigator.languages` enthalten ist, kann direkt an die {{jsxref("Intl")}}-Konstruktoren übergeben werden, um eine präferenzbasierte Fallback-Auswahl von Regionen durchzuführen, wobei der erste Eintrag in der Liste verwendet wird, der mit einer von `Intl` unterstützen Region übereinstimmt:

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
