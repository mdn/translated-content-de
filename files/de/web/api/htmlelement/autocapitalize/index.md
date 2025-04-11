---
title: "HTMLElement: autocapitalize-Eigenschaft"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`autocapitalize`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert das Kapitalisierungsverhalten eines Elements für Benutzereingaben. Sie ist bei allen HTML-Elementen verfügbar, obwohl sie nicht auf alle wirkt, einschließlich:

- {{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit gesetzt auf [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingaben. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, zum Beispiel durch automatisches Großschreiben des ersten Buchstabens jedes Satzes.

Es spiegelt den Wert des globalen HTML-Attributs [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wider.

## Wert

Ein String, der das Kapitalisierungsverhalten des Elements für Benutzereingaben darstellt. Gültige Werte sind wie folgt:

- `none` oder `off`
  - : Keine Autokapitalisierung sollte angewandt werden, das heißt, alle Buchstaben sollten standardmäßig klein geschrieben werden.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes sollte standardmäßig ein Großbuchstabe sein; alle anderen Buchstaben sollten standardmäßig klein geschrieben werden.
- `words`
  - : Der erste Buchstabe jedes Wortes sollte standardmäßig ein Großbuchstabe sein; alle anderen Buchstaben sollten standardmäßig klein geschrieben werden.
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

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globales HTML-Attribut
