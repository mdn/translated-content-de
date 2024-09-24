---
title: "HTMLMetaElement: scheme-Eigenschaft"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLMetaElement.scheme`**-Eigenschaft definiert das Schema des Wertes im {{domxref("HTMLMetaElement.content")}}-Attribut.
Die `scheme`-Eigenschaft wurde entwickelt, um zusätzliche Informationen bereitzustellen, die zur Interpretation des Wertes der `content`-Eigenschaft verwendet werden können. Die `scheme`-Eigenschaft nimmt als Wert ein Schemaformat (z.B. `YYYY-MM-DD`) oder einen Scemaformatnamen (z.B. `ISBN`), oder eine URI, die mehr Informationen über das Schemaformat liefert. Das Schema definiert das Format des Wertes des `content`-Attributs.
Der Inhalt des `scheme` wird als Erweiterung des {{domxref("HTMLMetaElement.name")}}-Elements interpretiert, wenn ein Browser oder User Agent das Schema erkennt.

Diese Eigenschaft ist veraltet und sollte in neuen Webseiten nicht mehr verwendet werden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel fragt ein `<meta>`-Element ab, das ein `name`-Attribut mit dem Wert `identifier` enthält.
Der `scheme`-Wert wird in die Konsole geloggt, um das Schema des Metadateninhalts anzuzeigen:

```js
// gegeben <meta name="identifier" content="1580081754" scheme="ISBN">
const meta = document.querySelector("meta[name='identifier']");
console.log(meta.scheme);
// "ISBN"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
