---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("SVG")}}

Die **`SVGAElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften eines {{SVGElement("a")}}-Elements sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
  - : Ein String, der anzeigt, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
- [`SVGAElement.hash`](/de/docs/Web/API/SVGAElement/hash) {{experimental_inline}}
  - : Ein String, der den Fragment-Identifikator darstellt, einschließlich des führenden Rautensymbols (`#`), falls vorhanden, in der referenzierten URL.
- [`SVGAElement.host`](/de/docs/Web/API/SVGAElement/host) {{experimental_inline}}
  - : Ein String, der den Hostnamen und Port (falls es nicht der Standardport ist) in der referenzierten URL darstellt.
- [`SVGAElement.hostname`](/de/docs/Web/API/SVGAElement/hostname) {{experimental_inline}}
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`SVGAElement.href`](/de/docs/Web/API/SVGAElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}}-Attribut {{deprecated_inline}} widerspiegelt.
- [`SVGAElement.hreflang`](/de/docs/Web/API/SVGAElement/hreflang)
  - : Ein String, der die Sprache der verlinkten Ressource angibt.
- [`SVGAElement.interestForElement`](/de/docs/Web/API/SVGAElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Ruft das Zielelement eines [Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) ab oder setzt es, in Fällen, in denen das zugehörige {{svgelement("a")}}-Element als Interest Invoker spezifiziert ist.
- [`SVGAElement.origin`](/de/docs/Web/API/SVGAElement/origin) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält — also das Schema, die Domain und den Port.
- [`SVGAElement.pathname`](/de/docs/Web/API/SVGAElement/pathname) {{experimental_inline}}
  - : Ein String, der ein anfängliches `/` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`SVGAElement.password`](/de/docs/Web/API/SVGAElement/password) {{experimental_inline}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
  - : Ein String, der das `ping`-Attribut widerspiegelt, das eine durch Leerzeichen getrennte Liste von URLs enthält, an die, wenn der Hyperlink verfolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking verwendet.
- [`SVGAElement.port`](/de/docs/Web/API/SVGAElement/port) {{experimental_inline}}
  - : Ein String, der die Portkomponente der referenzierten URL darstellt, falls vorhanden.
- [`SVGAElement.protocol`](/de/docs/Web/API/SVGAElement/protocol) {{experimental_inline}}
  - : Ein String, der die Protokollkomponente, einschließlich des nachfolgenden Doppelpunktes (`:`), der referenzierten URL darstellt.
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerpolicy)
  - : Ein String, der angibt, welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn die {{Glossary("URL", "URL")}} abgerufen wird.
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
  - : Ein String, der das `rel`-SVG-Attribut widerspiegelt und die Beziehung zum Ziel des Links angibt.
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das `rel`-SVG-Attribut als Liste von Token widerspiegelt.
- [`SVGAElement.search`](/de/docs/Web/API/SVGAElement/search) {{experimental_inline}}
  - : Ein String, der die Abfragezeichenfolge der URL darstellt, falls vorhanden, einschließlich des führenden Fragezeichens (`?`).
- [`SVGAElement.target`](/de/docs/Web/API/SVGAElement/target) {{ReadOnlyInline}}
  - : Entspricht dem {{SVGAttr("target")}}-Attribut des angegebenen Elements.
- [`SVGAElement.text`](/de/docs/Web/API/Node/textContent) {{deprecated_inline}}
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft ist.
- [`SVGAElement.type`](/de/docs/Web/API/SVGAElement/type)
  - : Ein String, der das `type`-Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`SVGAElement.username`](/de/docs/Web/API/SVGAElement/username) {{experimental_inline}}
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanzmethoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Beispiel

Im nachstehenden Beispiel wird das {{SVGAttr("target")}}-Attribut des {{SVGElement("a")}}-Elements auf `_blank` gesetzt, und wenn der Link angeklickt wird, wird protokolliert, ob die Bedingung erfüllt ist oder nicht.

```js
const linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = () => {
  if (linkRef.target === "_blank") {
    console.log("BLANK!");
    linkRef.target = "_self";
  } else {
    console.log("SORRY! not _blank");
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("a")}} Element
