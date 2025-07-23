---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: 068bb0449377f73e358a92b1b26265aa30c02db1
---

{{APIRef("SVG")}}

Das **`SVGAElement`** Interface ermöglicht den Zugriff auf die Eigenschaften eines {{SVGElement("a")}} Elements sowie Methoden, um diese zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
  - : Siehe [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download).
- [`SVGAElement.hash`](/de/docs/Web/API/SVGAElement/hash)
  - : Ein String, der den Fragmentbezeichner einschließlich des führenden Rautenzeichens (`#`), falls vorhanden, in der referenzierten URL repräsentiert.
- [`SVGAElement.host`](/de/docs/Web/API/SVGAElement/host)
  - : Ein String, der den Hostnamen und den Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL repräsentiert.
- [`SVGAElement.hostname`](/de/docs/Web/API/SVGAElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL repräsentiert.
- [`SVGAElement.href`](/de/docs/Web/API/SVGAElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} widerspiegelt.
- [`SVGAElement.hreflang`](/de/docs/Web/API/SVGAElement/hreflang)
  - : Ein String, der das Attribut `hreflang` widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`SVGAElement.origin`](/de/docs/Web/API/SVGAElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d.h. ihr Schema, ihre Domain und ihren Port.
- [`SVGAElement.pathname`](/de/docs/Web/API/SVGAElement/pathname)
  - : Ein String, der mit einem initialen `/` beginnt, gefolgt vom Pfad der URL, ohne den Abfrage-String oder das Fragment.
- [`SVGAElement.password`](/de/docs/Web/API/SVGAElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
  - : Ein String, der das `ping` Attribut widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält, an die, wenn der Hyperlink verfolgt wird, {{HTTPMethod("POST")}} Anfragen mit dem Inhalt `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking verwendet.
- [`SVGAElement.port`](/de/docs/Web/API/SVGAElement/port)
  - : Ein String, der die Portkomponente, falls vorhanden, der referenzierten URL repräsentiert.
- [`SVGAElement.protocol`](/de/docs/Web/API/SVGAElement/protocol)
  - : Ein String, der die Protokollkomponente einschließlich des abschließenden Doppelpunkts (`:`) der referenzierten URL repräsentiert.
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerPolicy)
  - : Siehe [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy).
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
  - : Ein String, der das `rel` SVG-Attribut widerspiegelt und die Beziehung zum Ziel des Links spezifiziert.
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das `rel` SVG-Attribut als Liste von Tokens widerspiegelt.
- [`SVGAElement.search`](/de/docs/Web/API/SVGAElement/search)
  - : Ein String, der das Suchelement einschließlich des führenden Fragezeichens (`?`), falls vorhanden, der referenzierten URL repräsentiert.
- [`SVGAElement.target`](/de/docs/Web/API/SVGAElement/target) {{ReadOnlyInline}}
  - : Es entspricht dem {{SVGAttr("target")}} Attribut des angegebenen Elements.
- [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) {{deprecated_inline}}
  - : Ein String, der synonym zur [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft ist.
- [`SVGAElement.type`](/de/docs/Web/API/SVGAElement/type)
  - : Ein String, der das `type` Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`SVGAElement.username`](/de/docs/Web/API/SVGAElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Dieses Interface hat keine Methoden, erbt aber Methoden von seinem Eltern-Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Beispiel

Im folgenden Beispiel wird das {{SVGAttr("target")}} Attribut des {{SVGElement("a")}} Elements auf `_blank` gesetzt, und wenn der Link angeklickt wird, wird protokolliert, ob die Bedingung erfüllt ist oder nicht.

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
