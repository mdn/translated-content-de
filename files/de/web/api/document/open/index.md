---
title: "Dokument: open() Methode"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.open()`** Methode öffnet ein Dokument zum
{{domxref("Document.write", "Schreiben", "", "1")}}.

Dies hat einige Nebenwirkungen. Zum Beispiel:

- Alle derzeit auf dem Dokument, Knoten innerhalb des Dokuments,
  oder dem Fenster des Dokuments registrierten Ereignislistener werden entfernt.
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

Der folgende einfache Code öffnet das Dokument und ersetzt seinen Inhalt mit einer Reihe von
unterschiedlichen HTML-Fragmenten, bevor es wieder geschlossen wird.

```js
document.open();
document.write("<p>Hello world!</p>");
document.write("<p>I am a fish</p>");
document.write("<p>The number is 42</p>");
document.close();
```

## Anmerkungen

Ein automatischer `document.open()` Aufruf erfolgt, wenn
{{domxref("document.write()")}} aufgerufen wird, nachdem die Seite geladen wurde.

### Inhaltssicherheit

Diese Methode unterliegt derselben [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) wie andere Eigenschaften und funktioniert nicht, wenn dies die Herkunft des Dokuments ändern würde.

## Drei-Argumente document.open()

Es gibt eine weniger bekannte und wenig genutzte Drei-Argumente-Version von
`document.open()`, die ein Alias von {{domxref("Window.open()")}} ist (siehe
dessen Seite für vollständige Details).

Dieser Aufruf öffnet zum Beispiel github.com in einem neuen Fenster, wobei der Opener auf
`null` gesetzt ist:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Zwei-Argumente document.open()

Browser unterstützten früher eine Zwei-Argumente `document.open()`, mit der
folgenden Signatur:

```js
document.open(type, replace);
```

Wo `type` den MIME-Typ der Daten, die Sie schreiben (z.B.
`text/html`), spezifizierte und `replace`, wenn gesetzt (d.h. ein String mit dem Wert `"replace"`),
spezifizierte, dass der Verlaufseintrag für das neue Dokument den aktuellen Verlaufseintrag des zu beschreibenden Dokuments ersetzen würde.

Diese Form ist jetzt veraltet; sie löst keinen Fehler aus, sondern leitet einfach an
`document.open()` weiter (d.h. ist gleichbedeutend damit, es ohne
Argumente auszuführen). Das Verhalten der Verlaufsersetzung erfolgt jetzt immer.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
