---
title: "HTMLMetaElement: scheme-Eigenschaft"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLMetaElement.scheme`**-Eigenschaft definiert das Schema des Werts im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut. Die `scheme`-Eigenschaft wurde erstellt, um zusätzliche Informationen bereitzustellen, die zur Interpretation des Werts der `content`-Eigenschaft verwendet werden können. Die `scheme`-Eigenschaft nimmt als Wert ein Schemaformat (z.B. `YYYY-MM-DD`) oder einen Schemaformatnamen (z.B. `ISBN`) oder eine URI, die weitere Informationen bezüglich des Schemaformats bereitstellt. Das Schema definiert das Format des Werts des `content`-Attributs. Der `scheme`-Inhalt wird als Erweiterung des [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)-Elements interpretiert, wenn ein Browser oder ein Benutzeragent das Schema erkennt.

Diese Eigenschaft ist veraltet und sollte nicht auf neuen Webseiten verwendet werden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel fragt ein `<meta>`-Element ab, das ein `name`-Attribut mit dem Wert `identifier` enthält. Der `scheme`-Wert wird in die Konsole protokolliert, um das Schema des Metadateninhalts anzuzeigen:

```js
// given <meta name="identifier" content="1580081754" scheme="ISBN">
const meta = document.querySelector("meta[name='identifier']");
console.log(meta.scheme);
// "ISBN"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
