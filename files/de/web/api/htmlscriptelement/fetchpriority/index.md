---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle stellt einen Hinweis für den Browser dar, wie er das Abrufen eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/script#fetchpriority)-Attribut des {{HTMLElement("script")}}-Elements wider.

Die Eigenschaft ermöglicht es einem Entwickler zu signalisieren, dass das frühzeitige oder spätere Abrufen eines bestimmten Skripts während des Ladeprozesses einen größeren oder geringeren Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise bei der Vergabe einer internen Priorität ableiten kann. Dies ermöglicht es dem Browser wiederum, die Priorität zu erhöhen oder zu verringern und das Skript potenziell früher oder später zu laden, als es sonst der Fall wäre. Die Eigenschaft sollte sparsam verwendet werden, da übermäßige oder fehlerhafte Priorisierung die Leistung beeinträchtigen kann.

Die Abrufpriorität erlaubt es, die Priorität von Skripten im unteren Körperbereich zu verringern oder die Priorität von `async`-Skripten zu erhöhen, ohne [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) verwenden zu müssen. Wenn das frühzeitige Laden eines Skripts wichtig ist, kann die Priorität genutzt werden, um das Preloading zu ergänzen, indem die Priorität gegenüber weniger einflussreichen Ressourcen erhöht wird, die eine höhere Standardpriorität haben.

Beachten Sie, dass sowohl die interne Priorität eines jeden Abrufvorgangs als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängt.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten abrufen.
- `low`
  - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten abrufen.
- `auto`
  - : Keine Präferenz für die Abrufpriorität festlegen.
    Dies ist der Standard.
    Er wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

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
- [Optimieren der Ressourcennutzung mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie sich diese API auf Prioritäten in Chrome auswirkt.
