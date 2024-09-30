---
title: "DocumentFragment: querySelector()-Methode"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelector()`**-Methode gibt das erste Element oder `null` zurück, falls keine Übereinstimmungen gefunden werden. Dies geschieht innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) (mittels Tiefensuche im Dokument). Die Methode durchsucht die Knoten des Dokuments in Vorbestellung und sucht nach übereinstimmenden Selektorgruppen.

Falls der Selektor eine ID trifft und diese ID irrtümlich mehrfach im Dokument verwendet wird, gibt die Methode das erste übereinstimmende Element zurück.

Wenn die im Parameter angegebenen Selektoren ungültig sind, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `SYNTAX_ERR` ausgelöst.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere CSS-Selektoren enthält, getrennt durch Kommas.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument darstellt, das den angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht, oder `null`, falls keine Übereinstimmungen vorhanden sind.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird das erste Element im [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit der Klasse `myclass` zurückgegeben:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS-Syntax und das Argument der Methode

Das Argument als String, das an `querySelector` übergeben wird, muss der CSS-Syntax folgen. Um ID oder Selektoren zu treffen, die der CSS-Syntax nicht folgen (zum Beispiel durch unpassende Verwendung von Semikolon oder Leerzeichen), muss das fehlerhafte Zeichen zwingend mit einem doppelten Backslash maskiert werden:

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  document.querySelector("#foo\bar"); // Does not match anything
  document.querySelector("#foo\\\\bar"); // Match the first div
  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Schnittstelle, zu der es gehört.
