---
title: "Node: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`textContent`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces repräsentiert den Textinhalt des Knotens und seiner Nachkommen.

> [!NOTE] > `textContent` und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) werden leicht verwechselt,
> aber die beiden Eigenschaften sind [in wichtigen Punkten unterschiedlich](#unterschiede_zu_innertext).

## Wert

Ein String oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Sein Wert hängt von der Situation ab:

- Wenn der Knoten ein [`document`](/de/docs/Web/API/Document) oder ein {{Glossary("doctype", "doctype")}} ist,
  gibt `textContent` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

  > [!NOTE]
  > Um _den gesamten_ Text und die [CDATA-Daten](/de/docs/Web/API/CDATASection) für das gesamte
  > Dokument zu erhalten, verwenden Sie `document.documentElement.textContent`.

- Wenn der Knoten ein [CDATA-Abschnitt](/de/docs/Web/API/CDATASection),
  ein Kommentar, eine [Verarbeitungsanweisung](/de/docs/Web/API/ProcessingInstruction)
  oder ein [Textknoten](/de/docs/Web/API/Text) ist,
  gibt `textContent` den Text innerhalb des Knotens zurück oder setzt ihn,
  d.h. den [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue).
- Für andere Knotentypen gibt `textContent` die Verkettung der
  `textContent` jedes Kindknotens, ausgenommen Kommentare und Verarbeitungsanweisungen, zurück. (Dies ist ein leerer String, wenn der Knoten keine Kinder hat.)

> [!WARNING]
> Das Setzen von `textContent` auf einen Knoten entfernt _alle_ Kinder des Knotens
> und ersetzt sie durch einen einzigen Textknoten mit dem angegebenen String-Wert.

### Unterschiede zu innerText

Verwechseln Sie nicht die Unterschiede zwischen `Node.textContent` und
[`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText). Obwohl die Namen ähnlich scheinen, gibt es
wichtige Unterschiede:

- `textContent` erfasst den Inhalt _aller_ Elemente, einschließlich
  {{HTMLElement("script")}}- und {{HTMLElement("style")}}-Elementen. Im Gegensatz dazu zeigt
  `innerText` nur "lesbare" Elemente an.
- `textContent` gibt jedes Element im Knoten zurück. Im Gegensatz dazu
  berücksichtigt `innerText` das Styling und gibt den Text von "versteckten"
  Elementen nicht zurück.
  - Da `innerText` außerdem CSS-Stile berücksichtigt,
    löst das Lesen des Werts von `innerText` ein
    {{Glossary("reflow", "Reflow")}} aus, um sicherzustellen, dass die berechneten Stile aktuell sind. (Reflows können
    rechnerisch aufwendig sein und sollten daher vermieden werden, wenn möglich.)

### Unterschiede zu innerHTML

[`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gibt HTML zurück, wie der Name schon sagt. Manchmal verwenden Leute
`innerHTML`, um Text innerhalb eines Elements abzurufen oder zu schreiben, aber
`textContent` bietet eine bessere Leistung, da der Wert nicht als
HTML geparst wird.

Zudem kann die Verwendung von `textContent` {{Glossary("Cross-site_scripting", "XSS-Angriffe")}} verhindern.

## Beispiele

Starten Sie mit diesem HTML-Fragment.

```html
<div id="divA">This is <span>some</span> text!</div>
```

Sie können `textContent` verwenden, um den Textinhalt des Elements zu erhalten:

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

Wenn Sie den Textinhalt des Elements lieber festlegen möchten, können Sie dies tun:

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
- [Mehr über Unterschiede zwischen `innerText` und `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/)
  (Blog-Beitrag)
