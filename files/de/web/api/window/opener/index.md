---
title: "Window: opener-Eigenschaft"
short-title: opener
slug: Web/API/Window/opener
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`opener`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt eine Referenz auf das Fenster zurück, das das aktuelle Fenster geöffnet hat, entweder mit [`open()`](/de/docs/Web/API/Window/open) oder durch das Navigieren mit einem [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut in einem Link.

Mit anderen Worten: Wenn Fenster `A` Fenster `B` öffnet, gibt `B.opener` `A` zurück.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-ähnliches Objekt, das sich auf das Fenster bezieht, das das aktuelle Fenster geöffnet hat (mit [`window.open()`](/de/docs/Web/API/Window/open) oder durch einen Link mit einem [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut). Wenn dieses Fenster nicht durch Verlinken oder Erstellen durch ein anderes geöffnet wurde, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Wenn der Opener nicht auf demselben Ursprung wie die aktuelle Seite ist, ist die Funktionalität des Opener-Objekts eingeschränkt. Zum Beispiel sind Variablen und Funktionen auf dem Fensterobjekt nicht zugänglich. Navigation des Opener-Fensters ist jedoch möglich, was bedeutet, dass die geöffnete Seite eine URL im ursprünglichen Tab oder Fenster öffnen kann. In einigen Fällen macht dies Phishing-Angriffe möglich, bei denen eine vertrauenswürdige Seite im ursprünglichen Fenster durch eine Phishing-Seite durch die neu geöffnete Seite ersetzt wird.

Genauer gesagt, für cross-origin Opener-Objekte sind die folgenden Eigenschaften verfügbar:

- [`window`](/de/docs/Web/API/Window/window)
- [`self`](/de/docs/Web/API/Window/self)
- [`location`](/de/docs/Web/API/Window/location): mit nur den Eigenschaften [`Location.replace`](/de/docs/Web/API/Location/replace) und [`Location.href`](/de/docs/Web/API/Location/href)
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
- `window[0]`, `window[1]`, usw.

Zusätzlich gibt es einige Eigenschaften: [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), {{jsxref("Symbol/toStringTag", "[Symbol.toStringTag]")}}, {{jsxref("Symbol/hasInstance", "[Symbol.hasInstance]")}}, {{jsxref("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}, die von verschiedenen JavaScript-Operationen genutzt werden. Diese Eigenschaften haben den Wert `undefined`. Alle anderen Eigenschaften erzeugen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) bei Zugriff.

In folgenden Fällen befüllt der Browser nicht `window.opener`, sondern lässt es [`null`](/de/docs/Web/JavaScript/Reference/Operators/null):

- Der Opener kann durch Angabe von [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) in einem Link oder durch das Übergeben von `noopener` im [`windowFeatures`](/de/docs/Web/API/Window/open)-Parameter weggelassen werden.
- Fenster, die aufgrund von Links mit einem [`target`](/de/docs/Web/HTML/Reference/Elements/a#target) von `_blank` geöffnet werden, erhalten keinen `opener`, außer es wird explizit mit [`rel=opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener) angefordert.
- Ein {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Header mit einem Wert von `same-origin` verhindert das Einstellen des `opener`. Da das neue Fenster in einem anderen Browsing-Kontext geladen wird, hat es keine Referenz zum öffnenden Fenster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
