---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces stellt einen Hinweis für den Browser dar, wie das Laden eines externen Skripts im Vergleich zu anderen externen Skripten priorisiert werden sollte.

Sie spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Lädt das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten.
- `low`
  - : Lädt das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten.
- `auto`
  - : Standardmodus, der keine Präferenz für die Ladepriorität angibt.
    Der Browser entscheidet, was für den Benutzer am besten ist.

Wenn das `fetchpriority`-Attribut nicht angegeben ist oder mit einem anderen Wert angegeben ist, ist es dasselbe, als wäre es mit `auto` angegeben.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, hohe oder niedrige Priorität für das Laden externer Skripte anzugeben. Dies kann nützlich sein, wenn es auf {{HTMLElement("script")}}-Elemente angewendet wird, um externe Skripte zu kennzeichnen, die früh im Ladeprozess für die Benutzererfahrung "wichtig" sind.

Die Auswirkungen des Hinweises auf das Laden von Ressourcen sind browserspezifisch, daher sollten Sie auf mehreren Browser-Engines testen.

Verwenden Sie es sparsam für außergewöhnliche Fälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch den besten Weg zum Laden des externen Skripts zu ermitteln. Übermäßiger Gebrauch kann zu einer Verschlechterung der Leistung führen.

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
