---
title: "HTMLElement: editContext-Eigenschaft"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`editContext`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces erhält und setzt das einem Element zugeordnete [`EditContext`](/de/docs/Web/API/EditContext)-Objekt.

Die [EditContext API](/de/docs/Web/API/EditContext_API) kann genutzt werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Textein- und -ausgabemöglichkeiten unterstützen, wie zum Beispiel die Nutzung eines {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) für die Komposition, Emoji-Auswahl oder jede andere plattformspezifische, bearbeitungsbezogene Benutzeroberfläche.

### Mögliche Elemente

Das Setzen der `editContext`-Eigenschaft funktioniert nur bei bestimmten Typen von Elementen:

- Eines dieser HTML-Elemente: [`<article>`](/de/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/de/docs/Web/HTML/Reference/Elements/aside), [`<blockquote>`](/de/docs/Web/HTML/Reference/Elements/blockquote), [`<body>`](/de/docs/Web/HTML/Reference/Elements/body), [`<div>`](/de/docs/Web/HTML/Reference/Elements/div), [`<footer>`](/de/docs/Web/HTML/Reference/Elements/footer), [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<header>`](/de/docs/Web/HTML/Reference/Elements/header), [`<main>`](/de/docs/Web/HTML/Reference/Elements/main), [`<nav>`](/de/docs/Web/HTML/Reference/Elements/nav), [`<p>`](/de/docs/Web/HTML/Reference/Elements/p), [`<section>`](/de/docs/Web/HTML/Reference/Elements/section), oder [`<span>`](/de/docs/Web/HTML/Reference/Elements/span).
- Ein gültiges [Custom Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- Ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element.

Wenn Sie versuchen, die `editContext`-Eigenschaft auf ein anderes als die oben genannten Elemente zu setzen, wird ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

### Elementzuordnung

Das Setzen der `editContext`-Eigenschaft eines Elements auf eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz ordnet diesem Element die `EditContext`-Instanz zu.

Die Zuordnung ist eins-zu-eins:

- Ein Element kann nur mit einer `EditContext`-Instanz verknüpft sein.
- Eine `EditContext`-Instanz kann nur mit einem Element verknüpft sein.

Wenn Sie versuchen, eine bereits zugeordnete `EditContext`-Instanz einem anderen Element zuzuordnen, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn Sie versuchen, eine andere `EditContext`-Instanz zu einem bereits zugeordneten Element hinzuzufügen, wird ebenfalls eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Um zu überprüfen, ob ein Element bereits mit einer `EditContext`-Instanz verknüpft ist, verwenden Sie die Methode [`EditContext.attachedElements()`](/de/docs/Web/API/EditContext/attachedElements).

### Garbage Collection

Eine `EditContext`-Instanz hält das zugeordnete Element am Leben, wenn es andere vorhandene Referenzen gibt, selbst wenn das zugeordnete Element aus dem DOM entfernt wird.

Wenn Sie sicherstellen möchten, dass das Element vom Garbage Collector gesammelt wird, löschen Sie die `editContext`-Eigenschaft des Elements.

## Wert

Ein [`EditContext`](/de/docs/Web/API/EditContext)-Objekt oder `null`.

## Beispiele

### Setzen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie man die `editContext`-Eigenschaft eines `<canvas>`-Elements auf eine neue `EditContext`-Instanz setzt, um das Element bearbeitbar zu machen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### Löschen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie man die `editContext`-Eigenschaft eines bearbeitbaren `<canvas>`-Elements löscht, um das Element sicher aus dem DOM zu entfernen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
// Create the EditContext and associate it with the canvas element.
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

// Later, clear the editContext property, and remove the element.
canvas.editContext = null;
canvas.remove();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`EditContext`](/de/docs/Web/API/EditContext)-Interface.
