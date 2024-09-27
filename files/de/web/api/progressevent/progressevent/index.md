---
title: "ProgressEvent: ProgressEvent() Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 6c65e4c3e6130fe260c248af8e4f79eb5a8a0ebd
---

{{APIRef("XMLHttpRequest API")}}

Der **`ProgressEvent()`** Konstruktor gibt ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt zurück, das den aktuellen Abschluss eines langen Prozesses darstellt.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die gesamte zu erledigende Arbeit und die bereits erledigte Arbeit des zugrunde liegenden Prozesses berechenbar sind. Anders ausgedrückt, es zeigt an, ob der Fortschritt messbar ist oder nicht. Es ist standardmäßig `false`.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die von dem zugrunde liegenden Prozess bereits geleistete Arbeit darstellt. Das Verhältnis der geleisteten Arbeit kann mit dieser Eigenschaft und `ProgressEvent.total` berechnet werden. Beim Herunterladen einer Ressource über HTTP stellt dies nur den Teil des Inhalts selbst dar, nicht jedoch die Header und andere Overheads. Es ist standardmäßig `0`.
    - `total` {{optional_inline}}
      - : Eine Zahl, die die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess noch zu leisten hat. Beim Herunterladen einer Ressource über HTTP stellt dies nur den Inhalt selbst dar, nicht jedoch die Header und andere Overheads. Es ist standardmäßig `0`.

### Rückgabewert

Ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt.

## Beispiel

Das Beispiel zeigt, wie ein `ProgressEvent` mithilfe eines Konstruktors erstellt wird. Dies ist besonders nützlich, um den Fortschritt von Prozessen wie Datei-Uploads, Downloads oder anderen lang andauernden Aufgaben zu verfolgen.

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded: loaded,
    total: total,
  });

  document.dispatchEvent(progressEvent);
}

document.addEventListener("progress", (event) => {
  console.log(`Progress: ${event.loaded}/${event.total}`);
});

updateProgress(50, 100);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Schnittstelle, zu der es gehört.
