---
title: "DocumentFragment: querySelector()-Methode"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelector()`**-Methode gibt das erste
Element oder `null` zurück, falls keine Übereinstimmungen gefunden werden. Dies erfolgt innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) (unter Verwendung einer Tiefensuche in der Vorordnung der Knoten des Dokuments), das mit der angegebenen Gruppe von Selektoren übereinstimmt.

Wenn der Selektor eine ID anspricht und diese ID fälschlicherweise mehrmals im Dokument verwendet wird, wird das erste übereinstimmende Element zurückgegeben.

Falls die im Parameter angegebenen Selektoren ungültig sind, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `SYNTAX_ERR` ausgelöst.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere CSS-Selektoren enthält, getrennt durch Kommas.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument repräsentiert, das mit dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) übereinstimmt, oder `null`, falls keine Übereinstimmungen vorliegen.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird das erste Element im [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit der Klasse `myclass` zurückgegeben:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS-Syntax und das Argument der Methode

Das String-Argument, das an `querySelector` übergeben wird, muss der CSS-Syntax folgen. Um IDs oder Selektoren anzusprechen, die der CSS-Syntax nicht folgen (zum Beispiel durch unangemessene Verwendung von Semikolon oder Leerzeichen), ist es zwingend erforderlich, das falsche Zeichen mit einem doppelten Backslash zu maskieren:

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

- Das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Interface, zu dem es gehört.
