---
title: XPathException
slug: Web/API/XPathException
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{APIRef("DOM XPath")}}{{Deprecated_Header}}

Im [DOM XPath API](/de/docs/Web/XPath) stellt das **`XPathException`**-Interface Ausnahmebedingungen dar, die bei der Durchführung von XPath-Operationen auftreten können.

## Instanzeigenschaften

- {{domxref("XPathException.code")}} {{ReadOnlyInline}}
  - : Gibt ein `short` zurück, das eine der [Fehlercode-Konstanten](#konstanten) enthält.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Wert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_EXPRESSION_ERR</code></td>
      <td><code>51</code></td>
      <td>
        Wenn der Ausdruck einen Syntaxfehler hat oder auf andere Weise kein zulässiger Ausdruck gemäß den Regeln des spezifischen {{domxref("XPathEvaluator")}} ist oder spezielle Erweiterungsfunktionen oder Variablen enthält, die von dieser Implementierung nicht unterstützt werden.
      </td>
    </tr>
    <tr>
      <td><code>TYPE_ERR</code></td>
      <td><code>52</code></td>
      <td>
        Wenn der Ausdruck nicht in den angegebenen Typ konvertiert werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{DOMxRef("Document.createExpression()")}}
- {{DOMxRef("XPathExpression")}}
