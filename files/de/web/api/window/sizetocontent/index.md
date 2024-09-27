---
title: "Window: sizeToContent()-Methode"
short-title: sizeToContent()
slug: Web/API/Window/sizeToContent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

Die **`Window.sizeToContent()`**-Methode passt die Größe des Fensters an seinen Inhalt an. Damit sie funktioniert, sollte der DOM-Inhalt geladen sein, wenn diese Funktion aufgerufen wird – zum Beispiel, nachdem das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis aufgetreten ist.

Seit Firefox 20 wird die minimale Größe des Fensters begrenzt, um zu verhindern, dass das Fenster zu klein wird, um für den Benutzer interaktiv zu sein.

## Syntax

```js-nolint
sizeToContent()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.sizeToContent();
```

## Spezifikationen

Dieses Feature ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
