---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("SVG")}}

Das **`SVGAElement`**-Interface bietet Zugriff auf die Eigenschaften eines {{SVGElement("a")}}-Elements sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
- [`SVGAElement.hash`](/de/docs/Web/API/SVGAElement/hash)
  - : Ein String, der den Fragmentbezeichner, einschließlich des führenden Rautensymbols (`#`), sofern vorhanden, in der referenzierten URL darstellt.
- [`SVGAElement.host`](/de/docs/Web/API/SVGAElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL darstellt.
- [`SVGAElement.hostname`](/de/docs/Web/API/SVGAElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`SVGAElement.href`](/de/docs/Web/API/SVGAElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut widerspiegelt.
- [`SVGAElement.hreflang`](/de/docs/Web/API/SVGAElement/hreflang)
  - : Ein String, der die Sprache der verlinkten Ressource angibt.
- [`SVGAElement.interestForElement`](/de/docs/Web/API/SVGAElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Ruft das Zielelement eines [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) ab oder setzt es, in Fällen, in denen das zugehörige {{svgelement("a")}}-Element als Interest Invoker spezifiziert ist.
- [`SVGAElement.origin`](/de/docs/Web/API/SVGAElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält - also das Schema, die Domain und den Port.
- [`SVGAElement.pathname`](/de/docs/Web/API/SVGAElement/pathname)
  - : Ein String, der einen anfänglichen `/` gefolgt vom Pfad der URL enthält, ohne den Abfrage-String oder das Fragment.
- [`SVGAElement.password`](/de/docs/Web/API/SVGAElement/password)
  - : Ein String, der das Passwort enthält, das vor dem Domainnamen angegeben ist.
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
  - : Ein String, der das `ping` Attribut widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält, zu denen beim Folgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden. Wird typischerweise für Tracking verwendet.
- [`SVGAElement.port`](/de/docs/Web/API/SVGAElement/port)
  - : Ein String, der die Portkomponente, sofern vorhanden, der referenzierten URL darstellt.
- [`SVGAElement.protocol`](/de/docs/Web/API/SVGAElement/protocol)
  - : Ein String, der die Protokollkomponente, einschließlich des nachfolgenden Doppelpunkts (`:`), der referenzierten URL darstellt.
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerpolicy)
  - : Ein String, der angibt, welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der {{Glossary("URL", "URL")}} gesendet werden soll.
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
  - : Ein String, der das `rel` SVG-Attribut widerspiegelt und die Beziehung zum Ziel des Links angibt.
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das `rel` SVG-Attribut als Liste von Tokens widerspiegelt.
- [`SVGAElement.search`](/de/docs/Web/API/SVGAElement/search)
  - : Ein String, der den Abfrage-String der URL darstellt, sofern vorhanden, einschließlich des führenden Fragezeichens (`?`).
- [`SVGAElement.target`](/de/docs/Web/API/SVGAElement/target) {{ReadOnlyInline}}
  - : Entspricht dem {{SVGAttr("target")}} Attribut des gegebenen Elements.
- [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) {{deprecated_inline}}
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft ist.
- [`SVGAElement.type`](/de/docs/Web/API/SVGAElement/type)
  - : Ein String, der das `type` Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`SVGAElement.username`](/de/docs/Web/API/SVGAElement/username)
  - : Ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Instanzmethoden

_Dieses Interface hat keine Methoden, erbt jedoch Methoden von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Beispiel

Im nachstehenden Beispiel wird das {{SVGAttr("target")}} Attribut des {{SVGElement("a")}} Elements auf `_blank` gesetzt und beim Klicken auf den Link wird protokolliert, ob die Bedingung erfüllt ist oder nicht.

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
