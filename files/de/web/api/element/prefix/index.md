---
title: "Element: prefix Eigenschaft"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Die **`Element.prefix`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die das Namensraum-Präfix des angegebenen Elements zurückgibt, oder `null`, wenn kein Präfix angegeben ist.

## Wert

Ein Zeichenstring.

## Beispiele

Das folgende Beispiel gibt "x" in der Konsole aus.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Hinweise

Dies funktioniert nur, wenn ein namensraumfähiger Parser verwendet wird, d.h. wenn ein Dokument mit einem XML-MIME-Typ geliefert wird. Dies funktioniert nicht für HTML-Dokumente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
