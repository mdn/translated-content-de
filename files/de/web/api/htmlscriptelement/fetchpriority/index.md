---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des {{domxref("HTMLScriptElement")}}-Interfaces stellt einen Hinweis für den Browser dar, wie er das Laden eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren sollte.

Sie spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Eine Zeichenfolge, die den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten laden.
- `low`
  - : Das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten laden.
- `auto`
  - : Standardmodus, der keine Präferenz für die Ladepriorität angibt.
    Der Browser entscheidet, was für den Benutzer am besten ist.

Wenn das `fetchpriority`-Attribut nicht angegeben wird oder mit einem anderen Wert angegeben ist, entspricht es der Angabe als `auto`.

Die `fetchPriority`-Eigenschaft erlaubt es Ihnen, das Laden von externen Skripten als hoch- oder niedrigprioritär zu kennzeichnen. Dies kann nützlich sein, wenn es auf {{HTMLElement("script")}}-Elemente angewendet wird, um externe Skripte zu signalisieren, die für die Benutzererfahrung früh im Ladevorgang "wichtig" sind.

Die Auswirkungen des Hinweises auf das Laden von Ressourcen sind browserspezifisch. Stellen Sie daher sicher, dass Sie auf mehreren Browser-Engines testen.

Verwenden Sie es sparsam für außergewöhnliche Fälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch die beste Art und Weise zu ermitteln, das externe Skript zu laden. Eine übermäßige Verwendung kann zu Leistungseinbußen führen.

## Beispiele

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Ausgabe: "high"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLLinkElement.fetchPriority")}}
