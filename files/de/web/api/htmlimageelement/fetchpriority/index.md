---
title: "HTMLImageElement: fetchPriority Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`** Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces repräsentiert einen Hinweis für den Browser, wie er das Herunterladen eines bestimmten Bildes im Vergleich zu anderen Bildern priorisieren sollte.
Sie spiegelt das [`fetchpriority`](/de/docs/Web/HTML/Element/img#fetchpriority)-Attribut des entsprechenden {{htmlelement("img")}} Elements wider.

Die Eigenschaft ermöglicht es einem Entwickler, dem Browser mitzuteilen, dass das frühzeitige Herunterladen eines bestimmten Bildes für das Benutzererlebnis wichtiger oder weniger wichtig ist, als der Browser vernünftigerweise bei der Zuweisung einer internen Priorität ableiten kann.
Dies ermöglicht es dem Browser, die Priorität zu erhöhen oder zu verringern und das Bild möglicherweise früher oder später zu laden, als es sonst der Fall wäre.
Die Eigenschaft sollte sparsam verwendet werden, da übermäßige oder falsche Priorisierung die Leistung beeinträchtigen kann.

Die Abrufpriorität kann verwendet werden, um das [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) zu ergänzen, indem die Priorität vor weniger wichtigen Ressourcen, die eine höhere Standardpriorität haben, erhöht wird.
Wenn ein Entwickler zum Beispiel weiß, dass ein bestimmtes Bild erheblich zum {{Glossary("Largest_contentful_paint", "Largest contentful paint")}} (LCP) der Website beiträgt, könnte er ein [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) für das Bild hinzufügen und dann die Priorität weiter mit der `fetchpriority` Eigenschaft erhöhen.

Bitte beachten Sie, dass sowohl die interne Priorität eines jeden Abrufvorgangs als auch der Einfluss von `fetchPriority` auf die Priorität vollständig vom Browser abhängen.

## Wert

Ein String, der den Prioritätshinweis darstellt.
Mögliche Werte sind:

- `high`
  - : Das Bild mit hoher Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung abrufen.
- `low`
  - : Das Bild mit niedriger Priorität im Vergleich zu anderen Bildern mit derselben internen Priorisierung abrufen.
- `auto`
  - : Keine Benutzervorgabe für die Abrufpriorität festlegen.
    Dies ist der Standardwert.
    Er wird verwendet, wenn kein Wert festgelegt ist oder ein ungültiger Wert gesetzt ist.

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
- HTTP {{httpheader("Link")}} Header
- [Optimieren Sie das Laden von Ressourcen mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
