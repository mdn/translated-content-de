---
title: "Node: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

Die **`textContent`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces repräsentiert den Textinhalt des Knotens und dessen Nachkommen.

> [!NOTE]
> `textContent` und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) werden leicht verwechselt, aber die beiden Eigenschaften sind [in wichtigen Punkten unterschiedlich](#unterschiede_zu_innertext).

## Wert

Ein String oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Sein Wert hängt von der Situation ab:

- Wenn der Knoten ein [`document`](/de/docs/Web/API/Document) oder ein {{Glossary("doctype", "doctype")}} ist, gibt `textContent` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

  > [!NOTE]
  > Um _alle_ Text- und [CDATA-Daten](/de/docs/Web/API/CDATASection) für das gesamte Dokument zu erhalten, verwenden Sie `document.documentElement.textContent`.

- Wenn der Knoten ein [CDATA-Abschnitt](/de/docs/Web/API/CDATASection), ein Kommentar, eine [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction) oder ein [Textknoten](/de/docs/Web/API/Text) ist, gibt `textContent` den Text innerhalb des Knotens zurück oder setzt ihn, d.h. den [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue).
- Für andere Knotentypen gibt `textContent` die Verkettung des `textContent` jedes Kindknotens zurück, ausgenommen Kommentare und Verarbeitungsanweisungen. (Dies ist ein leerer String, wenn der Knoten keine Kinder hat.)

> [!WARNING]
> Wenn Sie `textContent` für einen Knoten festlegen, werden _alle_ Kindknoten des Knotens entfernt und durch einen einzelnen Textknoten mit dem angegebenen String-Wert ersetzt.

### Unterschiede zu innerText

Lassen Sie sich nicht von den Unterschieden zwischen `Node.textContent` und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) verwirren. Obwohl die Namen ähnlich erscheinen, gibt es wichtige Unterschiede:

- `textContent` erhält den Inhalt _aller_ Elemente, einschließlich {{HTMLElement("script")}}- und {{HTMLElement("style")}}-Elementen. Im Gegensatz dazu zeigt `innerText` nur „menschlich lesbare“ Elemente.
- `textContent` gibt jedes Element im Knoten zurück. Im Gegensatz dazu nimmt `innerText` Rücksicht auf das Styling und gibt den Text von „versteckten“ Elementen nicht zurück.
  - Da `innerText` CSS-Stile berücksichtigt, löst das Lesen des Werts von `innerText` ein {{Glossary("reflow", "Reflow")}} aus, um sicherzustellen, dass die berechneten Stile auf dem neuesten Stand sind. (Reflows können rechnerisch aufwändig sein und sollten daher nach Möglichkeit vermieden werden.)

### Unterschiede zu innerHTML

[`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) erhält oder setzt HTML, wie der Name andeutet. Wir raten davon ab, `innerHTML` zu verwenden, um Text in einem Element zu erhalten oder zu setzen, da es mit rohem HTML statt mit reinem Text arbeitet und anfällig für {{Glossary("Cross-site_scripting", "XSS-Attacken")}} sein kann. Selbst wenn Sie sicher sind, dass der Text niemals HTML-Syntax enthält, ist es dennoch weniger semantisch und langsamer, da der HTML-Parser aufgerufen werden muss.

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

Wenn Sie den Textinhalt des Elements festlegen möchten, können Sie dies tun:

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

- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) und [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
