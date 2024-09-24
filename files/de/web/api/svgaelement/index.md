---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: 2d8a8df333e65582086870bfa1bcce40735c0013
---

{{APIRef("SVG")}}

Das **`SVGAElement`**-Interface bietet Zugriff auf die Eigenschaften eines {{SVGElement("a")}}-Elements sowie Methoden, um diese zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGAElement.download")}}
  - : Siehe {{domxref("HTMLAnchorElement.download")}}.
- {{domxref("SVGAElement.hash")}}
  - : Ein String, der den Fragment-Bezeichner darstellt, einschließlich des führenden Gitterzeichens ('`#`'), falls vorhanden, in der referenzierten URL.
- {{domxref("SVGAElement.host")}}
  - : Ein String, der den Hostnamen und Port (falls es sich nicht um den Standardport handelt) in der referenzierten URL darstellt.
- {{domxref("SVGAElement.hostname")}}
  - : Ein String, der den Hostnamen in der referenzierten URL darstellt.
- {{domxref("SVGAElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut widerspiegelt.
- {{domxref("SVGAElement.hreflang")}}
  - : Ein String, der das `hreflang`-Attribut widerspiegelt und die Sprache der verlinkten Ressource angibt.
- {{domxref("SVGAElement.origin")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, d.h. ihr Schema, ihre Domain und ihren Port.
- {{domxref("SVGAElement.pathname")}}
  - : Ein String, der ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- {{domxref("SVGAElement.password")}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- {{domxref("SVGAElement.ping")}}
  - : Ein String, der das ping-Attribut widerspiegelt und eine durch Leerzeichen getrennte Liste von URLs enthält, an die beim Folgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` von dem Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking verwendet.
- {{domxref("SVGAElement.port")}}
  - : Ein String, der die Port-Komponente, falls vorhanden, der referenzierten URL darstellt.
- {{domxref("SVGAElement.protocol")}}
  - : Ein String, der die Protokoll-Komponente, einschließlich dem folgenden Doppelpunkt ('`:`'), der referenzierten URL darstellt.
- {{domxref("SVGAElement.referrerPolicy")}}
  - : Siehe {{domxref("HTMLAnchorElement.referrerPolicy")}}.
- {{domxref("SVGAElement.rel")}}
  - : Siehe {{domxref("HTMLAnchorElement.rel")}}.
- {{domxref("SVGAElement.relList")}}
  - : Siehe {{domxref("HTMLAnchorElement.relList")}}.
- {{domxref("SVGAElement.search")}}
  - : Ein String, der das Such-Element, einschließlich vorangestelltem Fragezeichen ('`?`'), falls vorhanden, der referenzierten URL darstellt.
- {{domxref("SVGAElement.target")}} {{ReadOnlyInline}}
  - : Es entspricht dem {{SVGAttr("target")}}-Attribut des betreffenden Elements.
- {{domxref("SVGAElement.text")}} {{deprecated_inline}}
  - : Ein String, der ein Synonym für die {{domxref("Node.textContent")}}-Eigenschaft ist.
- {{domxref("SVGAElement.type")}}
  - : Ein String, der das `type`-Attribut widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- {{domxref("SVGAElement.username")}}
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Instanzmethoden

_Dieses Interface verfügt über keine Methoden, erbt aber Methoden von seinem Eltern-Interface, {{domxref("SVGGraphicsElement")}}._

## Beispiel

Im folgenden Beispiel wird das {{SVGAttr("target")}}-Attribut des {{SVGElement("a")}}-Elements auf `_blank` gesetzt und wenn der Link geklickt wird, wird protokolliert, ob die Bedingung erfüllt ist oder nicht.

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
