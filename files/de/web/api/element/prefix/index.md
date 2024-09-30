---
title: "Element: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.prefix`** gibt das Namespace-Präfix des angegebenen Elements zurück oder `null`, wenn kein Präfix angegeben ist.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel gibt "x" in der Konsole aus.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Hinweise

Dies funktioniert nur, wenn ein namespace-fähiger Parser verwendet wird, d.h. wenn ein Dokument mit einem XML-MIME-Typ ausgeliefert wird. Dies funktioniert nicht für HTML-Dokumente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [`Element.localName`](/de/docs/Web/API/Element/localName)
- [`Attr.prefix`](/de/docs/Web/API/Attr/prefix)
