---
title: "Element: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Die **`Element.namespaceURI`** schreibgeschützte Eigenschaft gibt den Namespace-URI des Elements zurück oder `null`, wenn das Element in keinem Namespace ist.

## Wert

Ein String oder `null`.

## Beispiele

In diesem Beispiel wird ein Element auf seinen [`localName`](/de/docs/Web/API/Element/localName) und seinen `namespaceURI` untersucht. Wenn der `namespaceURI` den XUL-Namespace zurückgibt und der `localName` "browser" zurückgibt, gilt der Knoten als ein XUL `<browser/>`.

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

Dies ist kein berechneter Wert, der das Ergebnis einer Namespace-Suche auf der Grundlage der Prüfung der Namespace-Deklarationen im Gültigkeitsbereich ist. Der Namespace-URI eines Knotens ist zum Zeitpunkt der Knoten-Erstellung festgelegt.

Der Namespace-URI für HTML-Elemente in HTML-Dokumenten ist [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) wie in XHTML.

Sie können ein Element mit dem angegebenen `namespaceURI` mit der Methode [`document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellen.

Das DOM behandelt oder erzwingt keine Namespace-Validierung an sich. Es liegt in der Verantwortung der DOM-Anwendung, alle erforderlichen Validierungen durchzuführen. Beachten Sie auch, dass der Namespace-Präfix, sobald er einem bestimmten Element zugeordnet ist, nicht geändert werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.localName`](/de/docs/Web/API/Element/localName)
- [`Element.prefix`](/de/docs/Web/API/Element/prefix)
- [`Attr.namespaceURI`](/de/docs/Web/API/Attr/namespaceURI)
