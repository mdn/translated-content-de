---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ APIRef("HTML DOM") }}

Die Schnittstelle **`HTMLLinkElement`** repräsentiert Referenzinformationen zu externen Ressourcen sowie die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt. Sie entspricht dem Element [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) und ist nicht mit [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) zu verwechseln, das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Dieses Objekt erbt alle Eigenschaften und Methoden der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein String, der den Typ des Inhalts angibt, der über den HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) verwendet wird.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
  - : Ein String, der angibt, dass bestimmte Vorgänge blockiert werden sollen, bis eine externe Ressource abgerufen wurde. Er spiegelt das Attribut `blocking` des Elements {{HTMLElement("link")}} wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Ein String, der der CORS-Einstellung für dieses Link-Element entspricht. Einzelheiten finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein boolescher Wert, der angibt, ob der Link deaktiviert ist; derzeit wird er nur für Stylesheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, mit welcher Priorität er ein Preload im Verhältnis zu anderen Ressourcen desselben Typs abrufen soll. Falls ein Wert angegeben wird, muss er einer der zulässigen Werte sein: `high` für eine höhere Priorität, `low` für eine niedrigere Priorität oder `auto`, wenn keine Präferenz besteht (der Standardwert).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Ein String, der den URI der Zielressource angibt.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Ein String, der den Sprachcode der verlinkten Ressource angibt.
- [`HTMLLinkElement.imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)
  - : Ein String, der das HTML-Attribut [`imagesizes`](/de/docs/Web/HTML/Reference/Elements/link#imagesizes) widerspiegelt; eine durch Kommas getrennte Liste von Bildbedingungen und -größen.
- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)
  - : Ein String, der das HTML-Attribut [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset) widerspiegelt; eine durch Kommas getrennte Liste von Strings für Bildkandidaten.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Ein String mit Inline-Metadaten, anhand derer ein Browser überprüfen kann, ob eine abgerufene Ressource ohne unerwartete Änderungen bereitgestellt wurde. Er spiegelt das Attribut `integrity` des Elements {{HTMLElement("link")}} wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Ein String, der eine Liste mit einem oder mehreren Medienformaten angibt, für die die Ressource gilt. Er spiegelt das Attribut `media` des Elements {{HTMLElement("link")}} wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy) widerspiegelt und angibt, welcher Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Ein String, der die Beziehung der verlinkten Ressource aus Sicht des Dokuments angibt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das dem jeweiligen Element zugeordnete Objekt [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zurück oder `null`, falls keines vorhanden ist.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Ein String, der den MIME-Typ der verlinkten Ressource angibt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung der Zielressource angibt.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}
  - : Ein String, der die umgekehrte Beziehung der verlinkten Ressource zur Dokumentressource angibt.

    > [!NOTE]
    > Derzeit ist `rev` laut der W3C-Spezifikation HTML 5.2 nicht mehr veraltet, während es im WHATWG Living Standard weiterhin als veraltet gekennzeichnet ist. Bis dieser Widerspruch geklärt ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Ein String, der den Namen des Zielframes angibt, für den die Ressource gilt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("link")}}.
