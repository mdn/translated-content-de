---
title: "HTMLElement: enterKeyHint-Eigenschaft"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`enterKeyHint`**-Eigenschaft ist eine enumerierte Eigenschaft, die festlegt, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll. Sie spiegelt das [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) HTML-Globale Attribut wider und ist eine enumerierte Eigenschaft, die nur die folgenden Werte als Zeichenkette akzeptiert:

- `'enter'` gibt typischerweise an, dass eine neue Zeile eingefügt wird.
- `'done'` bedeutet typischerweise, dass nichts mehr eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.
- `'go'` bedeutet typischerweise, dass der Benutzer zum Ziel des eingegebenen Textes geführt wird.
- `'next'` führt den Benutzer typischerweise zum nächsten Feld, das Texteingaben akzeptiert.
- `'previous'` führt den Benutzer typischerweise zum vorherigen Feld, das Texteingaben akzeptiert.
- `'search'` führt den Benutzer typischerweise zu den Ergebnissen der Suche nach dem eingegebenen Text.
- `'send'` liefert den Text typischerweise an sein Ziel.

Wenn kein `enterKeyHint`-Wert angegeben wurde oder ein anderer Wert als die zulässigen gesetzt wurde, wird eine leere Zeichenkette zurückgegeben.

## Beispiele

Geben Sie einer virtuellen Tastatur einen Hinweis, wie die Eingabetaste beschriftet werden soll (kann je nach Betriebssystem oder Sprache des Benutzers als <kbd>Send</kbd> und <kbd>Search</kbd> dargestellt werden).

```js
const send = document.getElementById("sendInput");
const search = document.getElementById("searchInput");

send.enterKeyHint = "send";
search.enterKeyHint = "search";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) HTML globales Attribut
