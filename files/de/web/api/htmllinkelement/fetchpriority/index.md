---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des {{domxref("HTMLLinkElement")}}-Interfaces stellt einen Hinweis für den Browser dar, wie er das Preloading der angegebenen Ressource im Vergleich zu anderen Ressourcen desselben [Typs](/de/docs/Web/HTML/Attributes/rel/preload#what_types_of_content_can_be_preloaded) priorisieren soll.

## Wert

Ein Zeichenfolgenwert, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Lädt die Preload-Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs.
- `low`
  - : Lädt die Preload-Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs.
- `auto`
  - : Standardmodus, der keine Präferenz für die Ladepriorität angibt. Der Browser entscheidet, was für den Benutzer am besten ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, Preloads mit hoher oder niedriger Priorität zu kennzeichnen. Dies kann nützlich sein, wenn es auf {{HTMLElement("link")}}-Elemente angewendet wird, um Preloads zu signalisieren, die für die Benutzererfahrung in der frühen Ladephase mehr oder weniger wichtig sind.

Die Auswirkungen des Hinweises auf das Ressourceladen sind browserspezifisch, daher sollten Sie Tests auf mehreren Browser-Engines durchführen.

Verwenden Sie es sparsam für Ausnahmefälle, in denen der Browser möglicherweise nicht automatisch die beste Möglichkeit finden kann, die Ressource zu laden. Übermäßiger Gebrauch kann die Leistung beeinträchtigen.

## Beispiele

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myimage.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
