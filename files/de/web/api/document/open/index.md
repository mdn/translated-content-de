---
title: "Document: open()-Methode"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die **`Document.open()`**-Methode öffnet ein Dokument zum
[Schreiben](/de/docs/Web/API/Document/write).

Dies hat einige Nebeneffekte. Zum Beispiel:

- Alle derzeit im Dokument registrierten Ereignislistener, Knoten im Dokument oder im Fenster des Dokuments werden entfernt.
- Alle vorhandenen Knoten werden aus dem Dokument entfernt.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz eines `Document`-Objekts.

## Beispiele

Der folgende einfache Code öffnet das Dokument und ersetzt dessen Inhalt mit einer Reihe von
verschiedenen HTML-Fragmenten, bevor es wieder geschlossen wird.

```js
document.open();
document.write("<p>Hello world!</p>");
document.write("<p>I am a fish</p>");
document.write("<p>The number is 42</p>");
document.close();
```

## Hinweise

Ein automatischer `document.open()`-Aufruf erfolgt, wenn
[`document.write()`](/de/docs/Web/API/Document/write) nach dem Laden der Seite aufgerufen wird.

### Inhaltssicherheit

Diese Methode unterliegt derselben [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) wie andere Eigenschaften und funktioniert nicht, wenn dies dazu führen würde, dass der Ursprung des Dokuments geändert wird.

## Drei-Argumente document.open()

Es gibt eine weniger bekannte und wenig verwendete Drei-Argumente-Version von
`document.open()`, die ein Alias für [`Window.open()`](/de/docs/Web/API/Window/open) ist (sehen Sie sich die Seite für vollständige Details an).

Dieser Aufruf, zum Beispiel, öffnet github.com in einem neuen Fenster, wobei der Verweis auf das öffnende Fenster auf `null` gesetzt ist:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Zwei-Argumente document.open()

Browser unterstützten früher ein Zwei-Argumente `document.open()` mit der
folgenden Signatur:

```js
document.open(type, replace);
```

Wo `type` den MIME-Typ der Daten, die Sie schreiben, spezifiziert (z.B.
`text/html`) und `replace`, wenn gesetzt (d.h. ein String von `"replace"`), angibt, dass der Verlaufs-Eintrag für das neue Dokument den aktuellen Verlaufs-Eintrag des Dokuments, in das geschrieben wird, ersetzen würde.

Diese Form ist jetzt obsolet; sie wird keinen Fehler werfen, sondern einfach zu
`document.open()` weiterleiten (d.h. es ist das Äquivalent, es ohne Argumente auszuführen). Das Verhalten zur Verlaufs-Ersetzung tritt jetzt immer auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)
- [`Window.open()`](/de/docs/Web/API/Window/open)
