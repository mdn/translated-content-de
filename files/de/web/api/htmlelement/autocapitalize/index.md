---
title: "HTMLElement: autocapitalize-Eigenschaft"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: f58b59a00199bb177beefa245f104ecbd86dae5c
---

{{APIRef("HTML DOM")}}

Die **`autocapitalize`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert das Kapitalisierungsverhalten eines Elements für Benutzereingaben. Sie ist für alle HTML-Elemente verfügbar, hat jedoch nicht auf alle einen Effekt, einschließlich:

- {{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit der [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Eigenschaft.

`autocapitalize` beeinflusst das Verhalten beim Tippen auf einer physischen Tastatur nicht. Es beeinflusst das Verhalten anderer Eingabemethoden, wie virtuelle Tastaturen auf mobilen Geräten und Spracheingaben. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem beispielsweise automatisch der erste Buchstabe jedes Satzes groß geschrieben wird.

Es spiegelt den Wert des [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-HTML-Globalattributs wider.

## Wert

Ein String, der das Kapitalisierungsverhalten eines Elements für Benutzereingaben repräsentiert. Gültige Werte sind wie folgt:

- `none` oder `off`
  - : Es sollte keine Autokapitalisierung angewendet werden, das heißt, alle Buchstaben sollen standardmäßig klein geschrieben werden.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes sollte standardmäßig groß geschrieben werden; alle anderen Buchstaben sollten standardmäßig klein geschrieben werden.
- `words`
  - : Der erste Buchstabe jedes Wortes sollte standardmäßig groß geschrieben werden; alle anderen Buchstaben sollten standardmäßig klein geschrieben werden.
- `characters`
  - : Alle Buchstaben sollten standardmäßig groß geschrieben werden.

## Beispiele

Das folgende Beispiel zeigt, wie das Kapitalisierungsverhalten für Benutzereingaben mit einem Skript gesteuert werden kann:

```html
<div>Current capitalization behavior is: <span id="ac-label"></span></div>
<div id="ac-element" contenteditable="true" autocapitalize="default">
  input here
</div>
<select id="ac-controller" type="checkbox" checked>
  <option value="default">default</option>
  <option value="none">none</option>
  <option value="sentences">sentences</option>
  <option value="words">words</option>
  <option value="characters">characters</option></select
>Select the capitalization behavior
```

```js
const label = document.getElementById("ac-label");
const element = document.getElementById("ac-element");
const controller = document.getElementById("ac-controller");

controller.addEventListener("input", (e) => {
  const behavior = e.target.value;
  label.textContent = behavior;
  element.autocapitalize = behavior;
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes#autocapitalize) HTML-Globalattribut
