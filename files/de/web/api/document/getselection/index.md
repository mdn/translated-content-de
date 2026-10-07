---
title: "Dokument: Methode getSelection()"
short-title: getSelection()
slug: Web/API/Document/getSelection
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("DOM")}}

Die Methode **`getSelection()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt das diesem Dokument zugeordnete [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück. Es repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Textcursors.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Selection`](/de/docs/Web/API/Selection)-Objekt oder `null`, wenn das Dokument keinen {{Glossary("Browsing_context", "Browsing Context")}} hat (beispielsweise wenn es sich um das Dokument eines {{htmlelement("iframe")}} handelt, das nicht in ein Dokument eingebunden ist).

## Beispiele

### Ein Selection-Objekt abrufen

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

### Zeichenfolgendarstellung des Selection-Objekts

Einige Funktionen (wie [`Window.alert()`](/de/docs/Web/API/Window/alert)) rufen {{JSxRef("Object.toString", "toString()")}} automatisch auf und erhalten den Rückgabewert als Argument. Daher wird der ausgewählte Text übergeben und nicht das `Selection`-Objekt:

```js
alert(selection);
```

Allerdings rufen nicht alle Funktionen `toString()` automatisch auf. Um ein `Selection`-Objekt als Zeichenfolge zu verwenden, rufen Sie dessen Methode `toString()` direkt auf:

```js
let selectedText = selection.toString();
```

## Verwandte Objekte

Sie können [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) aufrufen; dies ist identisch mit `window.document.getSelection()`.

Beachten Sie, dass `getSelection()` derzeit in Firefox nicht für den Inhalt von {{htmlelement("input")}}-Elementen funktioniert. Als Umgehung können Sie [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) verwenden.

Beachten Sie auch den Unterschied zwischen _Auswahl_ und _Fokus_. [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) gibt das fokussierte Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
