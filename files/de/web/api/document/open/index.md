---
title: "Dokument: open()-Methode"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}

Die **`Document.open()`**-Methode öffnet ein Dokument zum
[Schreiben](/de/docs/Web/API/Document/write).

Dies hat einige Nebeneffekte. Zum Beispiel:

- Alle aktuell im Dokument registrierten Ereignislistener, Knoten im Dokument oder das Fenster des Dokuments werden entfernt.
- Alle vorhandenen Knoten werden aus dem Dokument entfernt.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz des `Document`-Objekts.

## Beispiele

Der folgende einfache Code öffnet das Dokument und ersetzt seinen Inhalt durch eine Reihe verschiedener HTML-Fragmente, bevor es wieder geschlossen wird.

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

Diese Methode unterliegt der gleichen [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) wie andere Eigenschaften und funktioniert nicht, wenn dies zu einer Änderung des Ursprungs des Dokuments führen würde.

## Drei-Argumente document.open()

Es gibt eine weniger bekannte und wenig genutzte Drei-Argumente-Version von
`document.open()`, die ein Alias für [`Window.open()`](/de/docs/Web/API/Window/open) ist (siehe
dessen Seite für vollständige Details).

Dieser Aufruf öffnet zum Beispiel github.com in einem neuen Fenster, wobei dessen opener auf
`null` gesetzt ist:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Zwei-Argumente document.open()

Browser unterstützten früher ein Zwei-Argumente `document.open()`, mit der
folgenden Signatur:

```js
document.open(type, replace);
```

Wo `type` den MIME-Typ der Daten, die Sie schreiben (z.B.
`text/html`) angab, und `replace`, wenn gesetzt (d.h. eine Zeichenfolge von `"replace"`),
spezifizierte, dass der Verlaufseintrag für das neue Dokument den aktuellen Verlaufseintrag des Dokuments, in das geschrieben wird, ersetzen würde.

Diese Form ist jetzt veraltet; sie wirft keinen Fehler, sondern leitet stattdessen einfach an
`document.open()` weiter (d.h. ist äquivalent zum Ausführen ohne
Argumente). Das Verhalten des Verlaufsersetzens tritt jetzt immer auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)
- [`Window.open()`](/de/docs/Web/API/Window/open)
