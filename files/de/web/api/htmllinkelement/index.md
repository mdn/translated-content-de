---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLinkElement`** Interface repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Reference/Elements/a), welches durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird). Dieses Objekt erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein String, der den Typ des Inhalts darstellt, der vom HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt ist.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es spiegelt das `blocking` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Ein String, der der CORS-Einstellung für dieses Link-Element entspricht. Weitere Details finden Sie unter [CORS Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein boolescher Wert, der darstellt, ob der Link deaktiviert ist; wird momentan nur mit Stylesheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie das Laden eines Preloads im Vergleich zu anderen Ressourcen desselben Typs priorisiert werden sollte. Wenn dieser Wert angegeben ist, muss er einer der zulässigen Werte sein: `high` für eine höhere Priorität, `low` für eine niedrigere Priorität oder `auto` um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Ein String, der die URI für die Zielressource darstellt.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Ein String, der den Sprachcode für die verlinkte Ressource darstellt.
- [`HTMLLinkElement.imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)
  - : Ein String, der das [`imagesizes`](/de/docs/Web/HTML/Reference/Elements/link#imagesizes) HTML-Attribut widerspiegelt; eine Liste von durch Kommata getrennten Bildbedingungen und -größen.
- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)
  - : Ein String, der das [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset) HTML-Attribut widerspiegelt; eine durch Kommata getrennte Liste von Bildkandidaten-Strings.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Änderungen geliefert wurde. Es spiegelt das `integrity` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die die Ressource angewendet wird. Es spiegelt das `media` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Ein String, der die Vorwärtsbeziehung der verlinkten Ressource vom Dokument zur Ressource darstellt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Objekt, das das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Objekt, das das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet) Objekt zurück, das mit dem angegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Ein String, der den MIME-Typ der verlinkten Ressource darstellt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung für die Zielressource darstellt.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}
  - : Ein String, der die Rückwärtsbeziehung der verlinkten Ressource von der Ressource zum Dokument darstellt.

    > [!NOTE]
    > Aktuell besagt die W3C HTML 5.2 Spezifikation, dass `rev` nicht mehr veraltet ist, während der lebende Standard der WHATWG es noch als veraltet kennzeichnet. Bis diese Diskrepanz gelöst ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Ein String, der den Namen des Zielframes darstellt, auf den die Ressource angewendet wird.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("link")}}.
