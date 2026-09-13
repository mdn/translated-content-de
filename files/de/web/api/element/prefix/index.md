---
title: "Element: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: 68f3a6c1641c2524d291c9103589f3aa361e74a2
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.prefix`** gibt das Namensraum-Präfix des angegebenen Elements zurück oder `null`, wenn kein Präfix angegeben ist.

## Wert

Ein String oder `null`.

## Beispiele

Folgendes gibt "x" in der Konsole aus.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Hinweise

Dies funktioniert nur, wenn ein namensraumsensitiver Parser verwendet wird, d.h. wenn ein Dokument mit einem XML-MIME-Typ bereitgestellt wird. Dies funktioniert nicht für HTML-Dokumente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [`Element.localName`](/de/docs/Web/API/Element/localName)
- [`Attr.prefix`](/de/docs/Web/API/Attr/prefix)
