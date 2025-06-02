---
title: "ProgressEvent: ProgressEvent()-Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 03ca44d7f71637a4cad71413fac4e31d5de66638
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Der **`ProgressEvent()`**-Konstruktor gibt ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt zurück, das den aktuellen Abschluss eines langen Prozesses darstellt.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Gesamtarbeit, die zu erledigen ist, und die Menge der bereits erledigten Arbeit durch den zugrunde liegenden Prozess berechenbar sind.
        Mit anderen Worten, es wird angegeben, ob der Fortschritt messbar ist oder nicht.
        Standardmäßig `false`.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die Menge der bereits durch den zugrunde liegenden Prozess geleisteten Arbeit darstellt.
        Bei einem `ProgressEvent`, das vom Browser in HTTP-Nachrichten ausgelöst wird, bezieht sich der Wert auf die Größe der Nachricht, in Bytes, abzüglich der Header und anderer Overhead-Kosten.
        In einem `ProgressEvent`, das Sie selbst erstellen, können Sie `loaded` jeden numerischen Wert zuweisen, der die erledigte Arbeit relativ zum `total`-Wert darstellt.
        Standardmäßig `0`.
    - `total` {{optional_inline}}
      - : Eine Zahl, die die Gesamtgröße der Daten angibt, die übertragen oder verarbeitet werden.
        Bei `ProgressEvent`s, die vom Browser in HTTP-Nachrichten ausgelöst werden, bezieht sich der Wert auf die Größe einer Ressource in Bytes und wird aus dem `Content-Length`-Antwort-Header abgeleitet.
        In einem `ProgressEvent`, das Sie selbst erstellen, möchten Sie vielleicht `total` auf einen Wert wie `100` oder `1` normalisieren, wenn die genaue Anzahl von Bytes einer Ressource ein Anliegen ist.
        Wenn Sie beispielsweise `1` als Gesamtwert verwenden, sollte `loaded` ein Dezimalwert zwischen `0` und `1` sein.
        Standardmäßig `0`.

### Rückgabewert

Ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt.

## Beispiel

### Datei-Upload

Das Beispiel zeigt, wie ein `ProgressEvent` mithilfe eines Konstruktors erstellt wird. Dies ist besonders nützlich, um den Fortschritt von Prozessen wie Datei-Uploads, Downloads oder anderen lang andauernden Aufgaben zu verfolgen.

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

### Verwendung von Brüchen in einem ProgressEvent

Die Gesamtanzahl der Bytes einer Ressource kann zu viele Informationen über einen Download preisgeben, daher kann stattdessen eine Zahl zwischen 0 und 1 verwendet werden:

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

updateProgress(0.123456, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
