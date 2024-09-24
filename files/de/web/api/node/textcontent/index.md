---
title: "Node: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`textContent`**-Eigenschaft des {{domxref("Node")}}-Interfaces repräsentiert den Textinhalt des Knotens und seiner Nachkommen.

> **Hinweis:** `textContent` und {{domxref("HTMLElement.innerText")}} werden leicht verwechselt,
> jedoch sind die beiden Eigenschaften [in wichtigen Punkten unterschiedlich](#unterschiede_zu_innertext).

## Wert

Ein String oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Sein Wert hängt von der Situation ab:

- Wenn der Knoten ein {{domxref("document")}} oder ein {{glossary("doctype")}} ist,
  gibt `textContent` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

  > [!NOTE]
  > Um _alle_ Text- und [CDATA-Daten](/de/docs/Web/API/CDATASection) für das gesamte
  > Dokument zu erhalten, verwenden Sie `document.documentElement.textContent`.

- Wenn der Knoten ein [CDATA-Abschnitt](/de/docs/Web/API/CDATASection),
  ein Kommentar, eine [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction) oder ein [Textknoten](/de/docs/Web/API/Text) ist,
  gibt `textContent` den Text innerhalb des Knotens zurück oder setzt diesen,
  d. h. den {{domxref("Node.nodeValue")}}.
- Für andere Knotentypen gibt `textContent` die Verkettung des
  `textContent` jedes Kindknotens zurück, ohne Kommentare und Verarbeitungsanweisungen. (Dies ist ein leerer String, wenn der Knoten keine Kinder hat.)

> [!WARNING]
> Das Setzen von `textContent` auf einem Knoten entfernt _alle_ Kinder des Knotens
> und ersetzt sie durch einen einzigen Textknoten mit dem angegebenen String-Wert.

### Unterschiede zu innerText

Lassen Sie sich nicht von den Unterschieden zwischen `Node.textContent` und
{{domxref("HTMLElement.innerText")}} verwirren. Obwohl die Namen ähnlich erscheinen, gibt es
wichtige Unterschiede:

- `textContent` erhält den Inhalt von _allen_ Elementen, einschließlich
  {{HTMLElement("script")}} und {{HTMLElement("style")}}-Elementen. Im Gegensatz dazu
  zeigt `innerText` nur "menschlich lesbare" Elemente.
- `textContent` gibt jedes Element im Knoten zurück. Im Gegensatz dazu
  berücksichtigt `innerText` Styles und gibt den Text von "versteckten"
  Elementen nicht zurück.

  - Da `innerText` CSS-Stile berücksichtigt,
    löst das Lesen des Wertes von `innerText` ein
    {{glossary("reflow")}} aus, um sicherzustellen, dass die berechneten Stile aktuell sind. (Reflows können
    rechnerisch aufwendig sein und sollten daher nach Möglichkeit vermieden werden.)

### Unterschiede zu innerHTML

{{domxref("Element.innerHTML")}} gibt HTML zurück, wie der Name schon andeutet. Manchmal verwenden Menschen
`innerHTML`, um Text innerhalb eines Elements zu lesen oder zu schreiben, aber
`textContent` bietet eine bessere Leistung, da sein Wert nicht als
HTML geparst wird.

Zudem kann die Verwendung von `textContent` {{glossary("Cross-site_scripting", "XSS-Angriffe")}} verhindern.

## Beispiele

Beginnen Sie mit diesem HTML-Fragment.

```html
<div id="divA">This is <span>some</span> text!</div>
```

Sie können `textContent` verwenden, um den Textinhalt des Elements zu erhalten:

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

Wenn Sie den Textinhalt des Elements setzen möchten, können Sie dies tun:

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

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
- [Mehr über die Unterschiede zwischen `innerText` und `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/)
  (Blog-Beitrag)
