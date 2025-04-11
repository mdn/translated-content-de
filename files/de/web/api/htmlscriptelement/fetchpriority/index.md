---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) stellt einen Hinweis für den Browser dar, der angibt, wie er das Laden eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/script#fetchpriority)-Attribut des {{HTMLElement("script")}}-Elements wider.

Die Eigenschaft ermöglicht es einem Entwickler, anzugeben, dass das frühere oder spätere Laden eines bestimmten Skripts mehr oder weniger Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise schließen könnte, wenn er eine interne Priorität zuweist. Dies ermöglicht es dem Browser, die Priorität zu erhöhen oder zu verringern und das Skript möglicherweise früher oder später zu laden, als es sonst der Fall wäre. Die Eigenschaft sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Abrufpriorität ermöglicht es, die Priorität von Skripten am Ende des Dokuments zu verringern oder die Priorität von `async`-Skripten zu erhöhen, ohne auf [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zurückgreifen zu müssen. Wenn das frühe Laden eines Skripts wichtig ist, kann die Priorität verwendet werden, um Preloading zu ergänzen, indem die Priorität gegenüber weniger wichtigen Ressourcen mit höherer Standardpriorität erhöht wird.

Beachten Sie, dass sowohl die interne Priorität einer Abrufoperation als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis repräsentiert. Mögliche Werte sind:

- `high`
  - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten abrufen.
- `low`
  - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten abrufen.
- `auto`
  - : Keine Präferenz für die Abrufpriorität festlegen.
    Dies ist die Standardeinstellung.
    Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

## Beispiele

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Output: "high"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
- HTTP {{httpheader("Link")}}-Header
- [Optimierung der Ressourcenladezeiten mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
