---
title: "ProgressEvent: ProgressEvent() Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 6c65e4c3e6130fe260c248af8e4f79eb5a8a0ebd
---

{{APIRef("XMLHttpRequest API")}}

Der **`ProgressEvent()`** Konstruktor gibt ein neues {{domxref("ProgressEvent")}} Objekt zurück, das den aktuellen Abschluss eines langen Prozesses darstellt.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die gesamte zu erledigende Arbeit und die bereits vom zugrunde liegenden Prozess geleistete Arbeit berechenbar ist. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht. Standardwert ist `false`.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die bereits vom zugrunde liegenden Prozess geleistete Arbeit darstellt. Das Verhältnis der geleisteten Arbeit kann mit der Eigenschaft und `ProgressEvent.total` berechnet werden. Beim Herunterladen einer Ressource über HTTP repräsentiert dies nur den Teil des Inhalts selbst, nicht Header und andere Overhead. Standardwert ist `0`.
    - `total` {{optional_inline}}
      - : Eine Zahl, die die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess auszuführen im Begriff ist. Beim Herunterladen einer Ressource über HTTP repräsentiert dies nur den Inhalt selbst, nicht Header und andere Overhead. Standardwert ist `0`.

### Rückgabewert

Ein neues {{domxref("ProgressEvent")}} Objekt.

## Beispiel

Das Beispiel demonstriert, wie ein `ProgressEvent` mit einem Konstruktor erstellt wird. Dies ist besonders nützlich, um den Fortschritt von Prozessen wie Datei-Uploads, Downloads oder anderen lang andauernden Aufgaben zu verfolgen.

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

- Das {{domxref("ProgressEvent")}} Interface, zu dem es gehört.
