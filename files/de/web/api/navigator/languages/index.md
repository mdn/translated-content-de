---
title: "Navigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`Navigator.languages`**-Eigenschaft gibt ein Array von Zeichenfolgen zurück, die die bevorzugten Sprachen des Benutzers darstellen. Die Sprache wird mit Sprach-Tags gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die bevorzugteste Sprache zuerst kommt.

Der Wert von {{domxref("Navigator.language","navigator.language")}} ist das erste Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, weil die bevorzugten Sprachen des Benutzers geändert werden, wird ein {{domxref("Window.languagechange_event", "languagechange")}}-Ereignis auf dem {{domxref("Window")}}-Objekt ausgelöst.

Der {{HTTPHeader("Accept-Language")}} HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers listet im Allgemeinen die gleichen Locales auf wie die `navigator.languages`-Eigenschaft, mit abnehmenden `q`-Werten (Qualitätswerte). Einige Browser (Chrome und Safari) fügen in `Accept-Language` fallback-Sprachtags hinzu - zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Verringerung des {{Glossary("fingerprinting")}}) dürfen sowohl `Accept-Language` als auch `navigator.languages` möglicherweise nicht die vollständige Liste der Benutzervorlieben enthalten, wie z.B. in Safari (immer) und im Inkognito-Modus von Chrome, wo nur eine Sprache aufgeführt wird.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

### Auflisten des Inhalts von navigator.language und navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Verwendung von Intl-Konstruktoren zur sprachspezifischen Formatierung mit Fallback

Das Array von Sprachkennungen in `navigator.languages` kann direkt an die {{jsxref("Intl")}}-Konstruktoren übergeben werden, um ein präferenzbasiertes Fallback-Auswahlsystem für Locales zu implementieren, bei dem der erste Eintrag in der Liste verwendet wird, der mit einem von `Intl` unterstützten Locale übereinstimmt:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- {{domxref("Window.languagechange_event", "languagechange")}}-Ereignis
- {{jsxref("Intl")}}
