---
title: "HTMLElement: enterKeyHint-Eigenschaft"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`enterKeyHint`**-Eigenschaft ist eine aufzählbare Eigenschaft, die definiert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt wird. Sie spiegelt das [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) HTML-Globale Attribut wider und ist eine aufzählbare Eigenschaft, die nur die folgenden Werte als Zeichenkette akzeptiert:

- `'enter'`, typischerweise das Einfügen einer neuen Zeile anzeigend.
- `'done'`, was normalerweise bedeutet, dass nichts weiter eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.
- `'go'`, was typischerweise bedeutet, dass der Benutzer zum Ziel des getippten Textes geführt wird.
- `'next'`, was den Benutzer typischerweise zum nächsten Feld führt, das die Eingabe von Text akzeptiert.
- `'previous'`, was den Benutzer typischerweise zum vorherigen Feld führt, das die Eingabe von Text akzeptiert.
- `'search'`, was den Benutzer typischerweise zu den Ergebnissen der Suche nach dem eingegebenen Text führt.
- `'send'`, was typischerweise den Text an sein Ziel liefert.

Wenn kein `enterKeyHint`-Wert angegeben wurde oder wenn er auf einen anderen als die erlaubten Werte gesetzt wurde, wird ein leerer String zurückgegeben.

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

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) HTML-Globales Attribut
