---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("SVG")}}

Das **`SVGAElement`** Interface bietet Zugriff auf die Eigenschaften eines {{SVGElement("a")}} Elements sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
  - : Siehe [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download).
- [`SVGAElement.hash`](/de/docs/Web/API/SVGAElement/hash)
  - : Ein String, der den Fragmentbezeichner darstellt, einschließlich des führenden Hash-Zeichens (`#`), falls vorhanden, in der referenzierten URL.
- [`SVGAElement.host`](/de/docs/Web/API/SVGAElement/host)
  - : Ein String, der den Hostnamen und Port (falls es nicht der Standardport ist) in der referenzierten URL darstellt.
- [`SVGAElement.hostname`](/de/docs/Web/API/SVGAElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- [`SVGAElement.href`](/de/docs/Web/API/SVGAElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut widerspiegelt.
- [`SVGAElement.hreflang`](/de/docs/Web/API/SVGAElement/hreflang)
  - : Ein String, der das `hreflang` Attribut widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`SVGAElement.origin`](/de/docs/Web/API/SVGAElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`SVGAElement.pathname`](/de/docs/Web/API/SVGAElement/pathname)
  - : Ein String, der ein initiales `/` gefolgt vom Pfad der URL enthält, ohne die Suchzeichenkette oder das Fragment.
- [`SVGAElement.password`](/de/docs/Web/API/SVGAElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`SVGAElement.ping`](/de/docs/Web/API/SVGAElement/ping)
  - : Ein String, der das ping Attribut widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält, an die bei Aufruf des Hyperlinks {{HTTPMethod("POST")}} Anfragen mit dem Body `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für das Tracking verwendet.
- [`SVGAElement.port`](/de/docs/Web/API/SVGAElement/port)
  - : Ein String, der die Portkomponente, falls vorhanden, der referenzierten URL darstellt.
- [`SVGAElement.protocol`](/de/docs/Web/API/SVGAElement/protocol)
  - : Ein String, der die Protokollkomponente, einschließlich abschließendem Doppelpunkt (`:`), der referenzierten URL darstellt.
- [`SVGAElement.referrerPolicy`](/de/docs/Web/API/SVGAElement/referrerPolicy)
  - : Siehe [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy).
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
  - : Siehe [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel).
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
  - : Siehe [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList).
- [`SVGAElement.search`](/de/docs/Web/API/SVGAElement/search)
  - : Ein String, der das Suchelement darstellt, einschließlich des führenden Fragezeichens (`?`), falls vorhanden, der referenzierten URL.
- [`SVGAElement.target`](/de/docs/Web/API/SVGAElement/target) {{ReadOnlyInline}}
  - : Entspricht dem {{SVGAttr("target")}} Attribut des gegebenen Elements.
- [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) {{deprecated_inline}}
  - : Ein String, der ein Synonym für die [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft ist.
- [`SVGAElement.type`](/de/docs/Web/API/SVGAElement/type)
  - : Ein String, der das `type` Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`SVGAElement.username`](/de/docs/Web/API/SVGAElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanz-Methoden

_Dieses Interface hat keine Methoden, erbt jedoch Methoden von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Beispiel

Im untenstehenden Beispiel wird das {{SVGAttr("target")}} Attribut des {{SVGElement("a")}} Elements auf `_blank` gesetzt und beim Klicken auf den Link wird geloggt, ob die Bedingung erfüllt ist oder nicht.

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
