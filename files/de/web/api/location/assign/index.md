---
title: "Location: assign()-Methode"
short-title: assign()
slug: Web/API/Location/assign
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{ APIRef("HTML DOM") }}

Die **`assign()`**-Methode des {{DOMXref("Location")}} Interfaces veranlasst das Fenster, das Dokument an der angegebenen URL zu laden und anzuzeigen. Nach der Navigation kann der Benutzer zur Seite, die `Location.assign()` aufgerufen hat, zurückkehren, indem er die "Zurück"-Taste drückt.

## Syntax

```js-nolint
assign(url)
```

### Parameter

- `url`
  - : Ein String, der die URL der Seite enthält, zu der navigiert werden soll; zum Beispiel eine absolute URL wie `https://developer.mozilla.org/de/docs/Web/API/Location/reload` oder eine relative URL — wie `/Web` (nur ein Pfad, um zu einem anderen Dokument am selben Ursprung zu navigieren) oder `#specifications` (nur ein Fragment-String, um zu einem Teil derselben Seite zu navigieren), und so weiter.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{Glossary("origin")}} des Skripts, das die Methode aufruft, nicht der {{Glossary("Same-origin policy", "gleiche Ursprung")}} der ursprünglich durch das {{domxref("Location")}}-Objekt beschriebenen Seite ist, hauptsächlich wenn das Skript auf einer anderen Domain gehostet wird. Browser drosseln auch Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte `url`-Parameter keine gültige URL ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Zur Location.reload-Artikel navigieren
window.location.assign(
  "https://developer.mozilla.org/de/docs/Web/API/Location/reload",
);

// Dann zur Spezifikationssektion navigieren
window.location.assign("#specifications");

// Schließlich zu https://developer.mozilla.org/de/docs/Web navigieren
window.location.assign("/Web");
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("Location")}} Interface, zu dem es gehört.
- Ähnliche Methoden: {{domxref("Location.replace()")}} und
  {{domxref("Location.reload()")}}.
