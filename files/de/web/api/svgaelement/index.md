---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: de017519c13fceb33112b8c9e3a4adc7fd488267
---

{{APIRef("SVG")}}

Die **`SVGAElement`**-Schnittstelle ermöglicht den Zugriff auf die Eigenschaften eines {{SVGElement("a")}}-Elements sowie auf Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrem übergeordneten Element [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
  - : Ein String, der angibt, dass die verknüpfte Ressource heruntergeladen und nicht im Browser angezeigt werden soll.
- [`SVGAElement.hash`](/de/docs/Web/API/SVGAElement/hash) {{experimental_inline}}
  - : Ein String, der den Fragmentbezeichner, einschließlich des vorangestellten Hashzeichens (`#`), sofern vorhanden, in der referenzierten URL darstellt.
- [`SVGAElement.host`](/de/docs/Web/API/SVGAElement/host) {{experimental_inline}}
  - : Ein String, der den Hostnamen und den Port (falls dieser nicht der Standardport ist) in der referenzierten URL darstellt.
- [`SVGAElement.hostname`](/de/docs/Web/API/SVGAElement/hostname) {{experimental_inline}}
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`SVGAElement.href`](/de/docs/Web/API/SVGAElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der das Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} widerspiegelt.
- [`SVGAElement.hreflang`](/de/docs/Web/API/SVGAElement/hreflang)
  - : Ein String, der die Sprache der verknüpften Ressource angibt.
- [`SVGAElement.interestForElement`](/de/docs/Web/API/SVGAElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Ruft das Zielelement eines [Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) ab oder legt es fest, wenn das zugehörige {{svgelement("a")}}-Element als Interest Invoker angegeben ist.
- [`SVGAElement.origin`](/de/docs/Web/API/SVGAElement/origin) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält – also ihr Schema, ihre Domain und ihren Port.
- [`SVGAElement.pathname`](/de/docs/Web/API/SVGAElement/pathname) {{experimental_inline}}
  - : Ein String, der einen anfänglichen `/` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment.
- [`SVGAElement.password`](/de/docs/Web/API/SVGAElement/password) {{experimental_inline}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
  - : Ein String, der das Attribut `ping` widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält, an die der Browser beim Folgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` (im Hintergrund) sendet. Wird typischerweise zur Nachverfolgung verwendet.
- [`SVGAElement.port`](/de/docs/Web/API/SVGAElement/port) {{experimental_inline}}
  - : Ein String, der die Portkomponente der referenzierten URL darstellt, sofern vorhanden.
- [`SVGAElement.protocol`](/de/docs/Web/API/SVGAElement/protocol) {{experimental_inline}}
  - : Ein String, der die Protokollkomponente der referenzierten URL einschließlich des abschließenden Doppelpunkts (`:`) darstellt.
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerPolicy)
  - : Ein String, der angibt, welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der {{Glossary("URL", "URL")}} gesendet werden soll.
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
  - : Ein String, der das SVG-Attribut `rel` widerspiegelt und die Beziehung des Linkziels angibt.
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das SVG-Attribut `rel` als Liste von Tokens widerspiegelt.
- [`SVGAElement.search`](/de/docs/Web/API/SVGAElement/search) {{experimental_inline}}
  - : Ein String, der den Query-String der URL, sofern vorhanden, einschließlich des vorangestellten Fragezeichens (`?`) darstellt.
- [`SVGAElement.target`](/de/docs/Web/API/SVGAElement/target) {{ReadOnlyInline}}
  - : Entspricht dem Attribut {{SVGAttr("target")}} des angegebenen Elements.
- [`SVGAElement.type`](/de/docs/Web/API/SVGAElement/type)
  - : Ein String, der das Attribut `type` widerspiegelt und den MIME-Typ der verknüpften Ressource angibt.
- [`SVGAElement.username`](/de/docs/Web/API/SVGAElement/username) {{experimental_inline}}
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanzmethoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von ihrem übergeordneten Element [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Beispiel

Im folgenden Beispiel wird das Attribut {{SVGAttr("target")}} des {{SVGElement("a")}}-Elements auf `_blank` gesetzt. Beim Klicken auf den Link wird protokolliert, ob die Bedingung erfüllt ist oder nicht.

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

- SVG-{{SVGElement("a")}}-Element
