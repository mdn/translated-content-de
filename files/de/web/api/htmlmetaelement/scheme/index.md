---
title: "HTMLMetaElement: scheme-Eigenschaft"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLMetaElement.scheme`**-Eigenschaft definiert das Schema des Wertes im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut. Die `scheme`-Eigenschaft wurde erstellt, um zusätzliche Informationen bereitzustellen, die zur Interpretation des Wertes der `content`-Eigenschaft verwendet werden. Die `scheme`-Eigenschaft nimmt als Wert ein Schema-Format (z. B. `YYYY-MM-DD`) oder einen Schema-Formatnamen (z. B. `ISBN`) an oder eine URI, die weitere Informationen zum Schema-Format bereitstellt. Das Schema definiert das Format des Wertes des `content`-Attributs. Der `scheme`-Inhalt wird als Erweiterung des [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)-Elements interpretiert, wenn ein Browser oder Benutzeragent das Schema erkennt.

Diese Eigenschaft ist veraltet und sollte nicht auf neuen Webseiten verwendet werden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel fragt ein `<meta>`-Element ab, das ein `name`-Attribut mit dem Wert `identifier` enthält. Der `scheme`-Wert wird in der Konsole protokolliert, um das Schema des Metadateninhalts anzuzeigen:

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
