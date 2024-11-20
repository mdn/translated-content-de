---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle stellt einen Hinweis für den Browser dar, wie er das Herunterladen eines bestimmten Bildes im Vergleich zu anderen Bildern priorisieren sollte. Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/img#fetchpriority)-Attribut des entsprechenden {{htmlelement("img")}}-Elements wider.

Die Eigenschaft ermöglicht einem Entwickler, dem Browser zu signalisieren, dass das frühe Herunterladen eines bestimmten Bildes im Ladeprozess mehr oder weniger Einfluss auf die Benutzererfahrung hat, als der Browser vernünftigerweise beim Zuweisen einer internen Priorität vermuten kann. Dadurch kann der Browser die Priorität erhöhen oder verringern und das Bild möglicherweise früher oder später als sonst laden. Diese Eigenschaft sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Fetch-Priorität kann verwendet werden, um das [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) zu ergänzen, wodurch ein Entwickler die Priorität vor weniger wichtigen Ressourcen erhöhen kann, die eine höhere Standardpriorität haben. Wenn ein Entwickler beispielsweise weiß, dass ein bestimmtes Bild erheblich zum {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) der Website beiträgt, könnte er [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) für das Bild hinzufügen und dann die Priorität weiter mit der `fetchpriority`-Eigenschaft erhöhen.

Beachten Sie, dass sowohl die interne Priorität eines jeden Abrufvorgangs als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Lade das Bild mit hoher Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung.
- `low`
  - : Lade das Bild mit niedriger Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung.
- `auto`
  - : Setzen Sie keine Benutzerpräferenz für die Fetch-Priorität.
    Dies ist der Standardwert.
    Er wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt wird.

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
- [Ressourcenladen mit der Fetch Priority API optimieren](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
