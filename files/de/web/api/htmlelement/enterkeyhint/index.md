---
title: "HTMLElement: enterKeyHint-Eigenschaft"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`enterKeyHint`**-Eigenschaft ist eine aufgezählte Eigenschaft, die kennzeichnet, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll. Sie spiegelt das globale HTML-Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) wider und ist eine aufgezählte Eigenschaft, die nur die folgenden Werte als Zeichenkette akzeptiert:

- `'enter'` deutet typischerweise an, dass eine neue Zeile eingefügt wird.
- `'done'` bedeutet typischerweise, dass nichts mehr einzugeben ist und die Eingabemethode (IME) geschlossen wird.
- `'go'` bedeutet typischerweise, dass der Benutzer zum Ziel des eingegebenen Textes geführt wird.
- `'next'` führt den Benutzer typischerweise zum nächsten Feld, das Text akzeptiert.
- `'previous'` führt den Benutzer typischerweise zum vorherigen Feld, das Text akzeptiert.
- `'search'` führt den Benutzer typischerweise zu den Ergebnissen der Suche nach dem eingegebenen Text.
- `'send'` liefert den Text typischerweise an sein Ziel.

Wenn kein `enterKeyHint`-Wert angegeben wurde oder ein anderer Wert als die erlaubten gesetzt wurde, wird ein leerer String zurückgegeben.

## Beispiele

Geben Sie einer virtuellen Tastatur einen Hinweis, wie die Eingabetaste beschriftet werden soll (kann je nach Betriebssystem oder Sprache des Benutzers als <kbd>Send</kbd> und <kbd>Search</kbd> angezeigt werden).

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

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) Globales HTML-Attribut
