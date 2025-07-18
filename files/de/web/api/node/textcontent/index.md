---
title: "Node: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

{{APIRef("DOM")}}

Die **`textContent`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces repräsentiert den Textinhalt des Knotens und seiner Nachkommen.

> [!NOTE]
> `textContent` und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) werden leicht verwechselt,
> aber die beiden Eigenschaften sind [in wichtigen Punkten verschieden](#unterschiede_zu_innertext).

## Wert

Ein String oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Sein Wert hängt von der Situation ab:

- Wenn der Knoten ein [`document`](/de/docs/Web/API/Document) oder ein {{Glossary("doctype", "doctype")}} ist,
  gibt `textContent` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

  > [!NOTE]
  > Um _alle_ Text- und [CDATA-Daten](/de/docs/Web/API/CDATASection) für das gesamte Dokument zu erhalten, verwenden Sie `document.documentElement.textContent`.

- Wenn der Knoten eine [CDATA-Sektion](/de/docs/Web/API/CDATASection),
  ein Kommentar, eine [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction),
  oder ein [Textknoten](/de/docs/Web/API/Text) ist,
  gibt `textContent` den Text innerhalb des Knotens zurück oder setzt diesen,
  das heißt, den [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue).
- Für andere Knotentypen gibt `textContent` die Verkettung des
  `textContent` jedes untergeordneten Knotens zurück, ausgenommen Kommentare und Verarbeitungsanweisungen. (Dies ist ein leerer String, wenn der Knoten keine Kinder hat.)

> [!WARNING]
> Das Festlegen von `textContent` auf einem Knoten entfernt _alle_ Kinder des Knotens
> und ersetzt sie durch einen einzelnen Textknoten mit dem angegebenen String-Wert.

### Unterschiede zu innerText

Lassen Sie sich nicht von den Unterschieden zwischen `Node.textContent` und
[`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) verwirren. Obwohl die Namen ähnlich erscheinen, gibt es
wichtige Unterschiede:

- `textContent` erhält den Inhalt von _allen_ Elementen, einschließlich
  {{HTMLElement("script")}}- und {{HTMLElement("style")}}-Elementen. Im Gegensatz dazu zeigt
  `innerText` nur "menschenlesbare" Elemente.
- `textContent` gibt jedes Element im Knoten zurück. Im Gegensatz dazu
  beachtet `innerText` das Styling und gibt den Text von "versteckten"
  Elementen nicht zurück.
  - Außerdem, da `innerText` CSS-Stile berücksichtigt,
    löst das Lesen des Werts von `innerText` ein
    {{Glossary("reflow", "Reflow")}} aus, um sicherzustellen, dass die berechneten Stile aktuell sind. (Reflows können
    rechnerisch aufwändig sein und sollten daher nach Möglichkeit vermieden werden.)

### Unterschiede zu innerHTML

[`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gibt HTML zurück, wie der Name schon andeutet. Manchmal verwenden Leute
`innerHTML`, um Text innerhalb eines Elements abzurufen oder zu schreiben, aber
`textContent` bietet bessere Leistung, da sein Wert nicht als
HTML geparst wird.

Darüber hinaus kann die Verwendung von `textContent` {{Glossary("Cross-site_scripting", "XSS-Angriffe")}} verhindern.

## Beispiele

Beginnen Sie mit diesem HTML-Fragment.

```html
<div id="divA">This is <span>some</span> text!</div>
```

Sie können `textContent` verwenden, um den Textinhalt des Elements abzurufen:

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

Wenn Sie den Textinhalt des Elements setzen möchten, können Sie das tun:

```js
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
