---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des
[`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) Interfaces stellt einen Hinweis für den Browser dar,
wie er die Vormerkung der angegebenen Ressource im Vergleich zu anderen
Ressourcen desselben
[Typs](/de/docs/Web/HTML/Attributes/rel/preload#what_types_of_content_can_be_preloaded) priorisieren sollte.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Lädt die Vormerkungsressource mit hoher Priorität im Vergleich zu anderen Ressourcen
    desselben Typs.
- `low`
  - : Lädt die Vormerkungsressource mit niedriger Priorität im Vergleich zu anderen Ressourcen
    desselben Typs.
- `auto`
  - : Standardmodus, der keine Präferenz für
    die Ladepriorität angibt. Der Browser entscheidet, was am besten für den Benutzer ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, Preloads mit hoher oder niedriger Priorität zu signalisieren. Dies kann nützlich sein, wenn es auf {{HTMLElement("link")}}-Elemente angewendet wird, um Preloads zu signalisieren, die für die Benutzererfahrung früh im Ladeprozess mehr oder weniger wichtig sind.

Die Auswirkungen des Hinweises auf das Laden von Ressourcen sind browserspezifisch, daher sollten Sie Tests mit mehreren Browser-Engines durchführen.

Verwenden Sie diese Eigenschaft sparsam für Ausnahmefälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch die beste Methode zum Laden der Ressource zu erkennen. Eine Übernutzung kann zu einer Verschlechterung der Leistung führen.

## Beispiele

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myimage.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
