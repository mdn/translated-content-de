---
title: "HTMLLinkElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des
[`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces stellt einen Hinweis für den Browser dar,
wie er das Preload der angegebenen Ressource im Vergleich zu anderen Ressourcen des gleichen
[Typs](/de/docs/Web/HTML/Attributes/rel/preload#what_types_of_content_can_be_preloaded) priorisieren sollte.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Die Preload-Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen
    des gleichen Typs abrufen.
- `low`
  - : Die Preload-Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen
    des gleichen Typs abrufen.
- `auto`
  - : Standardmodus, der keine Präferenz für
    die Abrufpriorität angibt. Der Browser entscheidet, was am besten für den Benutzer ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, Preload-Abrufe mit hoher oder niedriger Priorität zu signalisieren. Dies kann nützlich sein, wenn es auf {{HTMLElement("link")}}-Elemente angewendet wird, um Preloads zu signalisieren, die früh im Ladeprozess mehr oder weniger wichtig für die Benutzererfahrung sind.

Die Auswirkungen des Hinweises auf das Laden von Ressourcen sind browserspezifisch, deshalb sollten Sie Tests auf mehreren Browser-Engines durchführen.

Verwenden Sie es sparsam in Ausnahmefällen, in denen der Browser möglicherweise nicht in der Lage ist, die beste Möglichkeit zum Laden der Ressource automatisch zu ermitteln. Eine übermäßige Nutzung kann die Leistung beeinträchtigen.

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

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
