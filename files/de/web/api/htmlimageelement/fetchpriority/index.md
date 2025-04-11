---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces steht für einen Hinweis an den Browser, wie er das Laden eines bestimmten Bildes im Vergleich zu anderen Bildern priorisieren soll. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/img#fetchpriority)-Attribut des entsprechenden {{htmlelement("img")}}-Elements wider.

Die Eigenschaft ermöglicht es Entwicklern, dem Browser mitzuteilen, dass das frühzeitige Laden eines bestimmten Bildes während des Ladeprozesses einen größeren oder geringeren Einfluss auf die Benutzererfahrung hat, als ein Browser vernünftigerweise bei der Vergabe einer internen Priorisierung ableiten könnte. Dies ermöglicht dem Browser, die Priorität zu erhöhen oder zu verringern und möglicherweise das Bild früher oder später zu laden, als es sonst der Fall wäre. Die Eigenschaft sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung verschlechtern kann.

Die Abrufpriorität kann genutzt werden, um das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu ergänzen, sodass ein Entwickler die Priorität im Voraus gegenüber weniger wichtigen Ressourcen erhöhen kann, die eine höhere Standardpriorität haben. Zum Beispiel, wenn ein Entwickler weiß, dass ein bestimmtes Bild erheblich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für das Bild hinzufügen und dann die Priorität weiter mit der `fetchpriority`-Eigenschaft erhöhen.

Beachten Sie, dass sowohl die interne Priorität eines Abrufvorgangs als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Läd das Bild mit hoher Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung.
- `low`
  - : Läd das Bild mit niedriger Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung.
- `auto`
  - : Legt keine Benutzervoreinstellung für die Abrufpriorität fest.
    Dies ist der Standardwert.
    Er wird verwendet, wenn kein Wert gesetzt wurde oder ein ungültiger Wert gesetzt wurde.

## Beispiele

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
- HTTP {{httpheader("Link")}}-Header
- [Optimierung der Ressourcenladung mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
