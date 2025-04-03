---
title: "Element: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die **`Element.prefix`** schreibgeschützte Eigenschaft gibt das Namensraum-Präfix des angegebenen Elements zurück oder `null`, wenn kein Präfix angegeben ist.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel gibt "x" in der Konsole aus.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Hinweise

Dies funktioniert nur, wenn ein parser verwendet wird, der sich des Namensraums bewusst ist, d.h. wenn ein Dokument mit einem XML-MIME-Typ bereitgestellt wird. Dies funktioniert nicht für HTML-Dokumente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [`Element.localName`](/de/docs/Web/API/Element/localName)
- [`Attr.prefix`](/de/docs/Web/API/Attr/prefix)
