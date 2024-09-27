---
title: "Document: open() Methode"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.open()`**-Methode öffnet ein Dokument zum [Schreiben](/de/docs/Web/API/Document/write).

Dies hat einige Nebeneffekte. Beispielsweise:

- Alle aktuell im Dokument, in Knoten innerhalb des Dokuments oder im Fenster des Dokuments registrierten Event-Listener werden entfernt.
- Alle bestehenden Knoten werden aus dem Dokument entfernt.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Eine `Document` Objektinstanz.

## Beispiele

Der folgende einfache Code öffnet das Dokument und ersetzt seinen Inhalt mit einer Reihe verschiedener HTML-Fragmente, bevor es wieder geschlossen wird.

```js
document.open();
document.write("<p>Hello world!</p>");
document.write("<p>I am a fish</p>");
document.write("<p>The number is 42</p>");
document.close();
```

## Hinweise

Ein automatischer `document.open()`-Aufruf erfolgt, wenn [`document.write()`](/de/docs/Web/API/Document/write) nach dem Laden der Seite aufgerufen wird.

### Inhaltssicherheit

Diese Methode unterliegt der gleichen [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) wie andere Eigenschaften und funktioniert nicht, wenn dies die Ursprungsquelle des Dokuments ändern würde.

## Drei-Argumente document.open()

Es gibt eine weniger bekannte und wenig genutzte Version von `document.open()` mit drei Argumenten, die ein Alias von [`Window.open()`](/de/docs/Web/API/Window/open) ist (siehe die entsprechende Seite für umfassende Details).

Dieser Aufruf öffnet beispielsweise github.com in einem neuen Fenster, wobei der `Opener` auf `null` gesetzt ist:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Zwei-Argumente document.open()

Browser unterstützten früher ein `document.open()` mit zwei Argumenten und folgender Signatur:

```js
document.open(type, replace);
```

Wobei `type` den MIME-Typ der Daten spezifizierte, die Sie schreiben (z.B. `text/html`), und `replace`, wenn gesetzt (d.h. ein String `"replace"`), spezifizierte, dass der Historieneintrag für das neue Dokument den aktuellen Historieneintrag des Dokuments ersetzen würde, zu dem geschrieben wird.

Diese Form ist nun veraltet; es wird keinen Fehler werfen, sondern stattdessen nur `document.open()` weiterleiten (d.h. es entspricht dem Ausführen ohne Argumente). Das Verhalten des Ersetzens der Historie tritt nun immer auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)
- [`Window.open()`](/de/docs/Web/API/Window/open)
