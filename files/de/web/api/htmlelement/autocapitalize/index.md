---
title: "HTMLElement: autocapitalize-Eigenschaft"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: f58b59a00199bb177beefa245f104ecbd86dae5c
---

{{APIRef("HTML DOM")}}

Die **`autocapitalize`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert das Kapitalisierungsverhalten des Elements für Benutzereingaben. Sie ist auf allen HTML-Elementen verfügbar, wirkt sich jedoch nicht auf alle aus, einschließlich:

- {{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit aktiviertem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingabe. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem beispielsweise der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

Es spiegelt den Wert des globalen HTML-Attributs [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wider.

## Wert

Ein String, der das Kapitalisierungsverhalten des Elements für Benutzereingaben darstellt. Gültige Werte sind wie folgt:

- `none` oder `off`
  - : Es sollte keine automatische Großschreibung angewendet werden, das heißt, alle Buchstaben sollten standardmäßig kleingeschrieben werden.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes sollte standardmäßig großgeschrieben werden; alle anderen Buchstaben sollten standardmäßig kleingeschrieben werden.
- `words`
  - : Der erste Buchstabe jedes Wortes sollte standardmäßig großgeschrieben werden; alle anderen Buchstaben sollten standardmäßig kleingeschrieben werden.
- `characters`
  - : Alle Buchstaben sollten standardmäßig großgeschrieben werden.

## Beispiele

Das folgende Beispiel zeigt, wie man das Kapitalisierungsverhalten für Benutzereingaben über ein Skript steuert:

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

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes#autocapitalize) globales HTML-Attribut
