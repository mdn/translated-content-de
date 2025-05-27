---
title: "ProgressEvent: ProgressEvent() Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Der **`ProgressEvent()`** Konstruktor gibt ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Objekt zurück, das den aktuellen Abschluss eines langwierigen Prozesses darstellt.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv, und Browser setzen es auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Gesamtarbeit, die zu erledigen ist, und die
        bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten,
        es zeigt an, ob der Fortschritt messbar ist oder nicht. Standardmäßig ist er `false`.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die Menge der bereits
        durch den zugrunde liegenden Prozess geleisteten Arbeit darstellt. Das Verhältnis der erledigten Arbeit kann mit der
        Eigenschaft und `ProgressEvent.total` berechnet werden. Beim Herunterladen einer Ressource über HTTP
        stellt dies nur den Teil des Inhalts dar, nicht die Header und andere Overheads. Standardmäßig ist es `0`.
    - `total` {{optional_inline}}
      - : Eine Zahl, die die Gesamtmenge der Arbeit darstellt, die der
        zugrunde liegende Prozess gerade erledigt. Beim Herunterladen einer Ressource über
        HTTP stellt dies nur den Inhalt selbst dar, nicht die Header und andere Overheads. Standardmäßig ist es `0`.

### Rückgabewert

Ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Objekt.

## Beispiel

Das Beispiel zeigt, wie ein `ProgressEvent` mithilfe eines Konstruktors erstellt wird. Dies ist besonders nützlich, um den Fortschritt von Prozessen wie Dateiuploads, -downloads oder anderen lang andauernden Aufgaben zu verfolgen.

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded,
    total,
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

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Interface, zu dem es gehört.
