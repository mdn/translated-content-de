---
title: "HTMLElement: enterKeyHint-Eigenschaft"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`enterKeyHint`**-Eigenschaft ist eine aufgezählte Eigenschaft, die definiert, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll. Sie spiegelt das [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) HTML-Globale-Attribut wider und ist eine aufgezählte Eigenschaft, die nur die folgenden Werte als Zeichenfolge akzeptiert:

- `'enter'` zeigt typischerweise das Einfügen einer neuen Zeile an.
- `'done'` bedeutet typischerweise, dass es nichts mehr einzugeben gibt und der Eingabemethoden-Editor (IME) geschlossen wird.
- `'go'` bedeutet typischerweise, den Benutzer zum Ziel des eingegebenen Textes zu führen.
- `'next'` führt den Benutzer typischerweise zum nächsten Feld, das Text akzeptieren wird.
- `'previous'` führt den Benutzer typischerweise zum vorherigen Feld, das Text akzeptieren wird.
- `'search'` führt den Benutzer typischerweise zu den Ergebnissen der Suche nach dem eingegebenen Text.
- `'send'` liefert den Text typischerweise an sein Ziel.

Wenn kein `enterKeyHint`-Wert angegeben wurde oder ein anderer als die erlaubten Werte gesetzt wurde, wird ein leerer String zurückgegeben.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) HTML Global-Attribut
