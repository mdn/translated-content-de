---
title: "Element: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.namespaceURI`** gibt die Namespace-URI des Elements zurück oder `null`, wenn das Element nicht in einem Namespace ist.

## Wert

Ein String oder `null`.

## Beispiele

In diesem Beispiel wird ein Element auf seinen {{domxref("Element.localName", "localName")}} und seinen `namespaceURI` untersucht. Wenn der `namespaceURI` den XUL-Namespace zurückgibt und `localName` "browser" zurückgibt, dann wird der Knoten als XUL-`<browser/>` verstanden.

```js
if (
  element.localName === "browser" &&
  element.namespaceURI ===
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // this is a XUL browser
}
```

## Hinweise

Dies ist kein berechneter Wert, der das Ergebnis einer Namespace-Suche basierend auf einer Untersuchung der im Scope vorhandenen Namespace-Deklarationen wäre. Die Namespace-URI eines Knotens ist zum Zeitpunkt der Knoten-Erstellung festgelegt.

Die Namespace-URI für HTML-Elemente in HTML-Dokumenten ist [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/), wie im XHTML.

Sie können ein Element mit der angegebenen `namespaceURI` mithilfe der Methode [`document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellen.

Das DOM führt keine Namespace-Validierung durch oder erzwingt diese. Es liegt in der Verantwortung der DOM-Anwendung, notwendige Validierungen durchzuführen. Beachten Sie auch, dass das Namespace-Präfix, sobald es mit einem bestimmten Element verknüpft ist, nicht geändert werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
