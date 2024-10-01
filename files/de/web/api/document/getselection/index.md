---
title: "Document: Methode getSelection()"
short-title: getSelection()
slug: Web/API/Document/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("DOM")}}

Die **`getSelection()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt das [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das mit diesem Dokument verbunden ist. Es repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Selection`](/de/docs/Web/API/Selection)-Objekt oder `null`, wenn das Dokument keinen {{Glossary("Browsing_context", "Browsing Context")}} hat (zum Beispiel, wenn es sich um das Dokument eines nicht an ein Dokument angehängten {{htmlelement("iframe")}} handelt).

## Beispiele

### Ein Selection-Objekt abrufen

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

### Zeichenkettenrepräsentation des Selection-Objekts

Einige Funktionen (wie [`Window.alert()`](/de/docs/Web/API/Window/alert)) rufen {{JSxRef("Object.toString", "toString()")}} automatisch auf und der zurückgegebene Wert wird an die Funktion übergeben. Folglich wird der ausgewählte Text zurückgegeben und nicht das `Selection`-Objekt:

```js
alert(selection);
```

Allerdings rufen nicht alle Funktionen `toString()` automatisch auf. Um ein `Selection`-Objekt als Zeichenkette zu verwenden, rufen Sie direkt die `toString()`-Methode auf:

```js
let selectedText = selection.toString();
```

## Verwandte Objekte

Sie können [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) aufrufen, welches identisch zu `window.document.getSelection()` ist.

Es ist zu beachten, dass `getSelection()` derzeit nicht bei den Inhalten von {{htmlelement("input")}}-Elementen in Firefox funktioniert.
[`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)) könnte als Workaround verwendet werden.

Beachten Sie auch den Unterschied zwischen _selection_ und _focus_.
[`Document.activeElement`](/de/docs/Web/API/Document/activeElement) gibt das fokussierte Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
