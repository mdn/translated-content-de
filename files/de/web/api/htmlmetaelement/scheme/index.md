---
title: "HTMLMetaElement: scheme-Eigenschaft"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.scheme`**-Eigenschaft definiert das Schema des Wertes im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut.
Die `scheme`-Eigenschaft wurde erstellt, um zusätzliche Informationen bereitzustellen, die zur Interpretation des Werts der `content`-Eigenschaft verwendet werden können. Die `scheme`-Eigenschaft nimmt als Wert ein Schemaformat (z.B. `YYYY-MM-DD`) oder einen Schemaformatnamen (z.B. `ISBN`), oder eine URI, die weitere Informationen über das Schemaformat liefert. Das Schema definiert das Format des Wertes des `content`-Attributs.
Der Inhalt von `scheme` wird als Erweiterung des [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)-Elements interpretiert, wenn ein Browser oder Benutzeragent das Schema erkennt.

Diese Eigenschaft ist veraltet und sollte auf neuen Webseiten nicht mehr verwendet werden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel fragt ein `<meta>`-Element ab, das ein `name`-Attribut mit dem Wert `identifier` enthält.
Der `scheme`-Wert wird in die Konsole protokolliert, um das Schema des Metadateninhalts anzuzeigen:

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
