---
title: "HTMLElement: Eigenschaft editContext"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`editContext`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces erhält und setzt das mit dem Element verknüpfte {{domxref("EditContext")}}-Objekt.

Die {{domxref("EditContext API", "", "", "nocode")}} kann genutzt werden, um Rich-Text-Editoren im Web zu erstellen, die fortschrittliche Texteingabeerfahrungen unterstützen, wie zum Beispiel {{glossary("Input Method Editor")}} (IME)-Komposition, Emoji-Auswahl oder andere plattformspezifische, bearbeitungsbezogene Benutzeroberflächen.

### Mögliche Elemente

Das Setzen der `editContext`-Eigenschaft funktioniert nur bei bestimmten Arten von Elementen:

- Eines dieser HTML-Elemente: [`<article>`](/de/docs/Web/HTML/Element/article), [`<aside>`](/de/docs/Web/HTML/Element/aside), [`<blockquote>`](/de/docs/Web/HTML/Element/blockquote), [`<body>`](/de/docs/Web/HTML/Element/body), [`<div>`](/de/docs/Web/HTML/Element/div), [`<footer>`](/de/docs/Web/HTML/Element/footer), [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<header>`](/de/docs/Web/HTML/Element/header), [`<main>`](/de/docs/Web/HTML/Element/main), [`<nav>`](/de/docs/Web/HTML/Element/nav), [`<p>`](/de/docs/Web/HTML/Element/p), [`<section>`](/de/docs/Web/HTML/Element/section), oder [`<span>`](/de/docs/Web/HTML/Element/span).
- Ein gültiges [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- Ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element.

Wenn Sie versuchen, die `editContext`-Eigenschaft auf ein Element zu setzen, das nicht zu den oben genannten gehört, wird ein `NotSupportedError` {{domxref("DOMException")}} ausgelöst.

### Elementzuordnung

Durch das Setzen der `editContext`-Eigenschaft eines Elements auf eine {{domxref("EditContext")}}-Instanz wird dieses Element mit der `EditContext`-Instanz verknüpft.

Die Zuordnung erfolgt im Eins-zu-Eins-Prinzip:

- Ein Element kann nur mit einer `EditContext`-Instanz verknüpft werden.
- Eine `EditContext`-Instanz kann nur mit einem Element verknüpft werden.

Wenn Sie versuchen, eine bereits verknüpfte `EditContext`-Instanz mit einem anderen Element zu verknüpfen, wird eine {{domxref("DOMException")}} ausgelöst.

Wenn Sie versuchen, eine andere `EditContext`-Instanz mit einem bereits verknüpften Element zu verknüpfen, wird ebenfalls eine {{domxref("DOMException")}} ausgelöst.

Um zu prüfen, ob ein Element bereits mit einer `EditContext`-Instanz verknüpft ist, verwenden Sie die {{domxref("EditContext.attachedElements()")}}-Methode.

### Speicherbereinigung

Eine `EditContext`-Instanz hält ihr zugeordnetes Element am Leben, wenn es andere aktive Verweise gibt, selbst wenn das zugeordnete Element aus dem DOM entfernt wird.

Wenn Sie sicherstellen möchten, dass das Element vom Speicherbereinigungsprozess erfasst wird, löschen Sie die `editContext`-Eigenschaft des Elements.

## Wert

Ein {{domxref("EditContext")}}-Objekt oder `null`.

## Beispiele

### Setzen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie Sie die `editContext`-Eigenschaft eines `<canvas>`-Elements auf eine neue `EditContext`-Instanz setzen, um das Element bearbeitbar zu machen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### Löschen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie Sie die `editContext`-Eigenschaft eines bearbeitbaren `<canvas>`-Elements löschen, um das Element sicher aus dem DOM zu entfernen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
// Erstellen Sie das EditContext und verknüpfen Sie es mit dem Canvas-Element.
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

// Später die editContext-Eigenschaft löschen und das Element entfernen.
canvas.editContext = null;
canvas.remove();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("EditContext")}}-Interface.
