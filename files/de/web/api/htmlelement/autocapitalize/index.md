---
title: "HTMLElement: autocapitalize-Eigenschaft"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}

Die **`autocapitalize`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert das Verhalten der Großschreibung für Benutzereingaben des Elements. Sie ist auf allen HTML-Elementen verfügbar, wirkt sich jedoch nicht auf alle aus, einschließlich:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit aktiviertem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

`autocapitalize` beeinflusst das Verhalten beim Tippen auf einer physischen Tastatur nicht. Es betrifft das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingaben. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem zum Beispiel automatisch der erste Buchstabe jedes Satzes großgeschrieben wird.

Es spiegelt den Wert des globalen HTML-Attributs [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wider.

## Wert

Ein String, der das Großschreibungsverhalten für Benutzereingaben des Elements repräsentiert. Gültige Werte sind wie folgt:

- `none` oder `off`
  - : Es sollte keine automatische Großschreibung angewendet werden, d.h., alle Buchstaben sollten standardmäßig kleingeschrieben werden.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes sollte standardmäßig großgeschrieben werden; alle anderen Buchstaben sollten kleingeschrieben werden.
- `words`
  - : Der erste Buchstabe jedes Wortes sollte standardmäßig großgeschrieben werden; alle anderen Buchstaben sollten kleingeschrieben werden.
- `characters`
  - : Alle Buchstaben sollten standardmäßig großgeschrieben werden.

## Beispiele

Das folgende Beispiel zeigt, wie das Großschreibungsverhalten für Benutzereingaben über ein Skript gesteuert werden kann:

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

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globales HTML-Attribut
