---
title: "Navigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.languages`** gibt ein Array von Zeichenfolgen zurück, das die bevorzugten Sprachen des Benutzers darstellt. Die Sprache wird mittels Sprach-Tags beschrieben, die gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert sind. Im zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die bevorzugteste Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/Navigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich sein Wert ändert, da die bevorzugten Sprachen des Benutzers geändert wurden, wird auf dem [`Window`](/de/docs/Web/API/Window)-Objekt ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis ausgelöst.

Der {{HTTPHeader("Accept-Language")}} HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers listet im Allgemeinen dieselben Gebietsschemata wie die `navigator.languages`-Eigenschaft auf, mit abnehmenden `q`-Werten (Qualitätswerten). Einige Browser (Chrome und Safari) fügen im `Accept-Language` sprachspezifische Fallback-Tags hinzu - zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Reduzierung der [Fingerprinting](/de/docs/Glossary/fingerprinting)) können sowohl `Accept-Language` als auch `navigator.languages` möglicherweise nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie in Safari (immer) und dem Inkognito-Modus von Chrome, wo nur eine Sprache aufgeführt wird.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

### Auflistung des Inhalts von navigator.language und navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Verwenden von Intl-Konstruktoren zur sprachspezifischen Formatierung mit Fallback

Das Array von Sprachkennzeichen, das in `navigator.languages` enthalten ist, kann direkt an die {{jsxref("Intl")}}-Konstruktoren übergeben werden, um eine präferenzbasierte Fallback-Auswahl von Gebietsschemata zu implementieren, wobei der erste Eintrag in der Liste verwendet wird, der einem von `Intl` unterstützten Gebietsschema entspricht:

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
