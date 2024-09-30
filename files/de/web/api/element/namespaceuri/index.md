---
title: "Element: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.namespaceURI`** gibt die Namensraum-URI des Elements zurück oder `null`, wenn das Element nicht in einem Namensraum ist.

## Wert

Ein String oder `null`.

## Beispiele

In diesem Beispiel wird ein Element auf seinen [`localName`](/de/docs/Web/API/Element/localName) und seine `namespaceURI` untersucht. Wenn die `namespaceURI` den XUL-Namensraum zurückgibt und der `localName` "browser" ist, wird angenommen, dass der Knoten ein XUL-`<browser/>` ist.

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

Dies ist kein berechneter Wert, der das Ergebnis einer Namensraum-Suche auf der Grundlage einer Prüfung der im Geltungsbereich erklärten Namensräume ist. Die Namensraum-URI eines Knotens wird zum Zeitpunkt der Knoten-Erstellung festgelegt.

Die Namensraum-URI für HTML-Elemente in HTML-Dokumenten ist [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) wie in XHTML.

Sie können ein Element mit der angegebenen `namespaceURI` mit der Methode [`document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellen.

Das DOM behandelt oder erzwingt keine Namensraum-Validierung an sich. Es liegt in der Verantwortung der DOM-Anwendung, die erforderliche Validierung durchzuführen. Beachten Sie auch, dass das Namensraum-Präfix, sobald es einem bestimmten Element zugeordnet ist, nicht geändert werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.localName`](/de/docs/Web/API/Element/localName)
- [`Element.prefix`](/de/docs/Web/API/Element/prefix)
- [`Attr.namespaceURI`](/de/docs/Web/API/Attr/namespaceURI)
