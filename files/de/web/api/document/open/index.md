---
title: "Document: open() Methode"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.open()`**-Methode öffnet ein Dokument zum
[Schreiben](/de/docs/Web/API/Document/write).

Dies hat einige Nebeneffekte. Zum Beispiel:

- Alle derzeit im Dokument, in Dokumentknoten oder im Fenster des Dokuments registrierten Event-Listener werden entfernt.
- Alle vorhandenen Knoten werden aus dem Dokument entfernt.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Eine `Document`-Objektinstanz.

## Beispiele

Der folgende einfache Code öffnet das Dokument und ersetzt seinen Inhalt durch eine Reihe unterschiedlicher HTML-Fragmente, bevor es wieder geschlossen wird.

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

Es gibt eine weniger bekannte und kaum genutzte Drei-Argumente-Version von
`document.open()`, die ein Alias für [`Window.open()`](/de/docs/Web/API/Window/open) ist (siehe
die entsprechende Seite für vollständige Details).

Dieser Aufruf öffnet beispielsweise github.com in einem neuen Fenster, wobei sein Opener auf
`null` gesetzt ist:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Zwei-Argumente document.open()

Browser unterstützten früher eine Zwei-Argumente-Version von `document.open()`, mit der
folgenden Signatur:

```js
document.open(type, replace);
```

Dabei spezifizierte `type` den MIME-Typ der Daten, die Sie schreiben (z.B.
`text/html`) und wenn `replace` gesetzt war (d.h. ein String von `"replace"`), wurde angegeben, dass der Verlaufs-Eintrag für das neue Dokument den aktuellen Verlaufs-Eintrag des Dokuments ersetzt, zu dem geschrieben wird.

Diese Form ist jetzt veraltet; sie wirft keinen Fehler, sondern leitet einfach an
`document.open()` weiter (d.h. ist gleichbedeutend mit dem Ausführen ohne
Argumente). Das Verhalten der Verlaufsersetzung erfolgt nun immer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)
- [`Window.open()`](/de/docs/Web/API/Window/open)
