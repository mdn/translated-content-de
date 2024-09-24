---
title: "Fenster: opener Eigenschaft"
short-title: opener
slug: Web/API/Window/opener
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die **`opener`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt eine Referenz auf das Fenster zurück, das das aktuelle Fenster geöffnet hat, entweder mit {{domxref("Window.open", "open()")}} oder durch das Navigieren über einen Link mit einem [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut.

Mit anderen Worten, wenn Fenster `A` Fenster `B` öffnet, gibt `B.opener` `A` zurück.

## Wert

Ein {{domxref("Window")}}-ähnliches Objekt, das auf das Fenster verweist, das das aktuelle Fenster geöffnet hat (mit {{domxref("window.open()")}} oder durch einen Link mit gesetztem [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut). Wenn dieses Fenster nicht durch Verknüpfung oder Erstellung von einem anderen geöffnet wurde, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

Wenn der Opener nicht im gleichen Ursprung wie die aktuelle Seite ist, ist die Funktionalität des Opener-Objekts eingeschränkt. Zum Beispiel sind Variablen und Funktionen des Fensterobjekts nicht zugänglich. Allerdings ist die Navigation des Opener-Fensters möglich, was bedeutet, dass die geöffnete Seite eine URL im ursprünglichen Tab oder Fenster öffnen kann. In einigen Fällen macht dies Phishing-Angriffe möglich, bei denen eine vertrauenswürdige Seite, die im ursprünglichen Fenster geöffnet wird, durch eine Phishing-Seite von der neu geöffneten Seite ersetzt wird.

Genauer gesagt, für plattformübergreifende Opener-Objekte sind die folgenden Eigenschaften verfügbar:

- {{domxref("Window.window", "window")}}
- {{domxref("Window.self", "self")}}
- {{domxref("Window.location", "location")}}: nur mit den Eigenschaften {{domxref("Location.replace")}} und {{domxref("Location.href")}}
- {{domxref("Window.close", "close")}}
- {{domxref("Window.closed", "closed")}}
- {{domxref("Window.focus", "focus")}}
- {{domxref("Window.blur", "blur")}}
- {{domxref("Window.frames", "frames")}}
- {{domxref("Window.length", "length")}}
- {{domxref("Window.top", "top")}}
- `opener`
- {{domxref("Window.parent", "parent")}}
- {{domxref("Window.postMessage", "postMessage")}}
- `window[0]`, `window[1]`, etc.

Darüber hinaus gibt es einige Eigenschaften: [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), {{jsxref("Symbol/toStringTag", "[Symbol.toStringTag]")}}, {{jsxref("Symbol/hasInstance", "[Symbol.hasInstance]")}}, {{jsxref("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}, die von verschiedenen JavaScript-Operationen verwendet werden. Diese Eigenschaften haben den Wert `undefined`. Alle anderen Eigenschaften führen zu einem `SecurityError`-{{domxref("DOMException")}}, wenn darauf zugegriffen wird.

In den folgenden Fällen wird `window.opener` vom Browser nicht befüllt, sondern bleibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null):

- Der Opener kann weggelassen werden, indem [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) auf einem Link angegeben oder `noopener` im {{domxref("Window.open", "windowFeatures")}}-Parameter übergeben wird.
- Fenster, die wegen Links mit einem [`target`](/de/docs/Web/HTML/Element/a#target) von `_blank` geöffnet werden, erhalten keinen `opener`, es sei denn, es wird ausdrücklich mit [`rel=opener`](/de/docs/Web/HTML/Attributes/rel#opener) angefordert.
- Das Vorhandensein eines {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Headers mit einem Wert von `same-origin` verhindert das Setzen von `opener`. Da das neue Fenster in einem anderen Browsing-Kontext geladen wird, hat es keinen Verweis auf das öffnende Fenster.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
