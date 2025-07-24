---
title: "Node: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: ec82c62a496c953e23f0324bd830fa7401b1f84c
---

{{APIRef("DOM")}}

Die **`textContent`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces repräsentiert den Textinhalt des Knotens und seiner Nachkommen.

> [!NOTE]
> `textContent` und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) werden leicht verwechselt,
> aber die beiden Eigenschaften sind [in wichtigen Punkten unterschiedlich](#unterschiede_zu_innertext).

## Wert

Ein String oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Der Wert hängt von der Situation ab:

- Wenn der Knoten ein [`document`](/de/docs/Web/API/Document) oder ein {{Glossary("doctype", "doctype")}} ist,
  gibt `textContent` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

  > [!NOTE]
  > Um _alle_ Texte und [CDATA-Daten](/de/docs/Web/API/CDATASection) für das gesamte
  > Dokument zu erhalten, verwenden Sie `document.documentElement.textContent`.

- Wenn der Knoten ein [CDATA-Bereich](/de/docs/Web/API/CDATASection),
  ein Kommentar, eine [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction)
  oder ein [Textknoten](/de/docs/Web/API/Text) ist,
  gibt `textContent` den Text im Knoten zurück oder setzt ihn,
  d.h. den [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue).
- Für andere Knotentypen gibt `textContent` die Verkettung der
  `textContent` jedes Kindknotens zurück, ausgenommen Kommentare und Verarbeitungsanweisungen. (Dies ist eine leere Zeichenfolge, wenn der Knoten keine Kinder hat.)

> [!WARNING]
> Wenn Sie `textContent` auf einem Knoten setzen, werden _alle_ Kinder dieses Knotens entfernt
> und durch einen einzigen Textknoten mit dem angegebenen Zeichenfolgenwert ersetzt.

### Unterschiede zu innerText

Lassen Sie sich nicht von den Unterschieden zwischen `Node.textContent` und
[`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) verwirren. Obwohl die Namen ähnlich erscheinen, gibt es wichtige Unterschiede:

- `textContent` erhält den Inhalt _aller_ Elemente, einschließlich
  {{HTMLElement("script")}}- und {{HTMLElement("style")}}-Elementen. Im Gegensatz dazu
  zeigt `innerText` nur "für Menschen lesbare" Elemente.
- `textContent` gibt jedes Element im Knoten zurück. Im Gegensatz dazu
  berücksichtigt `innerText` das Styling und gibt den Text von "versteckten"
  Elementen nicht zurück.
  - Da `innerText` jedoch CSS-Stile berücksichtigt,
    löst das Lesen des `innerText`-Wertes ein
    {{Glossary("reflow", "Reflow")}} aus, um sicherzustellen, dass die berechneten Stile auf dem neuesten Stand sind. (Reflows können
    rechenintensiv sein und sollten daher möglichst vermieden werden.)

### Unterschiede zu innerHTML

[`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) erhält oder setzt HTML, wie der Name schon sagt. Wir raten davon ab, `innerHTML` zu verwenden, um Text innerhalb eines Elements zu erhalten oder zu setzen, da es mit rohem HTML anstelle von Klartext arbeitet und anfällig für {{Glossary("Cross-site_scripting", "XSS-Angriffe")}} sein kann. Selbst wenn Sie sicher sind, dass der Text niemals HTML-Syntax enthält, ist es immer noch weniger semantisch und langsamer, da der HTML-Parser aufgerufen werden muss.

## Beispiele

Beginnen Sie mit diesem HTML-Fragmente.

```html
<div id="divA">This is <span>some</span> text!</div>
```

Sie können `textContent` verwenden, um den Textinhalt des Elements zu erhalten:

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

Wenn Sie den Textinhalt des Elements einstellen möchten, können Sie folgendes tun:

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
