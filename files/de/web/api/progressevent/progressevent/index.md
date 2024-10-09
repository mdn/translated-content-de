---
title: "ProgressEvent: ProgressEvent()-Konstruktor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 6b8c7b7dade8173f148031a0695bbf609e10f9f9
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Der **`ProgressEvent()`**-Konstruktor gibt ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt zurück, das den aktuellen Abschluss eines langwierigen Prozesses darstellt.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `loadstart`, `progress`, `abort`, `error`, `load`, `timeout` oder `loadend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `lengthComputable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar ist. Mit anderen Worten, es sagt aus, ob der Fortschritt messbar ist oder nicht. Standardmäßig ist es `false`.
    - `loaded` {{optional_inline}}
      - : Eine Zahl, die die bereits vom zugrunde liegenden Prozess geleistete Arbeit repräsentiert. Das Verhältnis der erledigten Arbeit kann mit der Eigenschaft und `ProgressEvent.total` berechnet werden. Beim Herunterladen einer Ressource mit HTTP repräsentiert dies nur den Teil des Inhalts selbst, nicht die Header und anderen Overheads. Standardmäßig ist es `0`.
    - `total` {{optional_inline}}
      - : Eine Zahl, die den gesamten Arbeitsumfang repräsentiert, den der zugrunde liegende Prozess gerade durchführt. Beim Herunterladen einer Ressource mit HTTP repräsentiert dies nur den Inhalt selbst, nicht die Header und anderen Overheads. Standardmäßig ist es `0`.

### Rückgabewert

Ein neues [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Objekt.

## Beispiel

Das Beispiel demonstriert, wie ein `ProgressEvent` mit einem Konstruktor erstellt wird. Dies ist besonders nützlich zur Verfolgung des Fortschritts von Prozessen wie Datei-Uploads, Downloads oder anderen langlaufenden Aufgaben.

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

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle, zu der es gehört.
