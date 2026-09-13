---
title: "ProgressEvent: ProgressEvent() Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Der **`ProgressEvent()`** Konstruktor gibt ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt zurück, das den aktuellen Fortschritt eines langwierigen Prozesses repräsentiert.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungssensitiv und Browser setzen es auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die gesamte zu leistende Arbeit und der bereits geleistete Umfang des zugrunde liegenden Prozesses berechenbar sind.
        Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
        Standardmäßig ist er auf `false` gesetzt.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die bereits geleistete Arbeit des zugrunde liegenden Prozesses darstellt.
        Bei einem vom Browser in HTTP-Nachrichten ausgelösten `ProgressEvent` bezieht sich der Wert auf die Größe des Nachrichtenkörpers in Bytes, ohne Berücksichtigung von Headern und anderem Overhead.
        In einem selbst erstellten `ProgressEvent` können Sie jeder `loaded`-Eigenschaft einen numerischen Wert zuweisen, der die Menge der im Verhältnis zum `total`-Wert geleisteten Arbeit darstellt.
        Standardmäßig ist er auf `0` gesetzt.
    - `total` {{optional_inline}}
      - : Eine Zahl, die die Gesamtgröße der zu übertragenden oder zu verarbeitenden Daten angibt.
        Bei vom Browser in HTTP-Nachrichten ausgelösten `ProgressEvent`s bezieht sich der Wert auf die Größe einer Ressource in Bytes und wird aus dem `Content-Length`-Antwortheader abgeleitet.
        In einem selbst erstellten `ProgressEvent` möchten Sie `total` eventuell auf einen Wert wie `100` oder `1` normalisieren, falls die genaue Anzahl von Bytes einer Ressource vertraulich ist.
        Wenn Sie beispielsweise `1` als Gesamtwert verwenden, sollte `loaded` ein Dezimalwert zwischen `0` und `1` sein.
        Standardmäßig ist er auf `0` gesetzt.

### Rückgabewert

Ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt.

## Beispiel

### Dateiupload

Das Beispiel zeigt, wie ein `ProgressEvent` mithilfe eines Konstruktors erstellt wird. Dies ist besonders nützlich, um den Fortschritt von Prozessen wie Datei-Uploads, Downloads oder beliebigen langwierigen Aufgaben zu verfolgen.

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

Die Gesamtanzahl der Bytes einer Ressource könnte zu viele Informationen über einen Download preisgeben, daher kann stattdessen eine Zahl zwischen 0 und 1 verwendet werden:

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

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle, zu der es gehört.
