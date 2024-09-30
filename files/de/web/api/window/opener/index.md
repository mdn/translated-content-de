---
title: "Window: opener-Eigenschaft"
short-title: opener
slug: Web/API/Window/opener
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die **`opener`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt eine Referenz auf das Fenster zurück, das das aktuelle Fenster geöffnet hat, entweder mit [`open()`](/de/docs/Web/API/Window/open), oder durch das Navigieren eines Links mit einem [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut.

Mit anderen Worten, wenn Fenster `A` Fenster `B` öffnet, gibt `B.opener` `A` zurück.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-ähnliches Objekt, das auf das Fenster verweist, das das aktuelle Fenster geöffnet hat (unter Verwendung von [`window.open()`](/de/docs/Web/API/Window/open) oder durch einen Link mit gesetztem [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut). Falls dieses Fenster nicht durch Verlinkung oder von einem anderen Fenster erstellt wurde, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Wenn der Opener nicht auf demselben Ursprung wie die aktuelle Seite ist, ist die Funktionalität des Opener-Objekts eingeschränkt. Beispielsweise sind Variablen und Funktionen auf dem Fensterobjekt nicht zugänglich. Allerdings ist die Navigation des Opener-Fensters möglich, was bedeutet, dass die geöffnete Seite eine URL im ursprünglichen Tab oder Fenster öffnen kann. Dies kann in einigen Fällen Phishing-Angriffe ermöglichen, bei denen eine vertrauenswürdige Seite im ursprünglichen Fenster durch eine Phishing-Seite ersetzt wird, die von der neu geöffneten Seite stammt.

Genauer gesagt, für Cross-Origin-Opener-Objekte sind die folgenden Eigenschaften verfügbar:

- [`window`](/de/docs/Web/API/Window/window)
- [`self`](/de/docs/Web/API/Window/self)
- [`location`](/de/docs/Web/API/Window/location): nur mit den Eigenschaften [`Location.replace`](/de/docs/Web/API/Location/replace) und [`Location.href`](/de/docs/Web/API/Location/href)
- [`close`](/de/docs/Web/API/Window/close)
- [`closed`](/de/docs/Web/API/Window/closed)
- [`focus`](/de/docs/Web/API/Window/focus)
- [`blur`](/de/docs/Web/API/Window/blur)
- [`frames`](/de/docs/Web/API/Window/frames)
- [`length`](/de/docs/Web/API/Window/length)
- [`top`](/de/docs/Web/API/Window/top)
- `opener`
- [`parent`](/de/docs/Web/API/Window/parent)
- [`postMessage`](/de/docs/Web/API/Window/postMessage)
- `window[0]`, `window[1]`, etc.

Zusätzlich gibt es einige Eigenschaften: [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), {{jsxref("Symbol/toStringTag", "[Symbol.toStringTag]")}}, {{jsxref("Symbol/hasInstance", "[Symbol.hasInstance]")}}, {{jsxref("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}, die von verschiedenen JavaScript-Operationen verwendet werden. Diese Eigenschaften haben den Wert `undefined`. Alle anderen Eigenschaften führen zu einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException), wenn darauf zugegriffen wird.

In den folgenden Fällen füllt der Browser `window.opener` nicht aus, sondern belässt es bei [`null`](/de/docs/Web/JavaScript/Reference/Operators/null):

- Der Opener kann weggelassen werden, indem [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) in einem Link spezifiziert wird oder durch Übergabe von `noopener` im [`windowFeatures`](/de/docs/Web/API/Window/open)-Parameter.
- Fenster, die aufgrund von Links mit einem [`target`](/de/docs/Web/HTML/Element/a#target) von `_blank` geöffnet wurden, erhalten keinen `opener`, es sei denn, es wird explizit mit [`rel=opener`](/de/docs/Web/HTML/Attributes/rel#opener) angefordert.
- Ein {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit dem Wert `same-origin` verhindert das Setzen des `opener`. Da das neue Fenster in einem anderen Browsing-Kontext geladen wird, hat es keine Referenz zum öffnenden Fenster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
