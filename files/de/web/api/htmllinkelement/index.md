---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLinkElement`** Interface repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Element/link) Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Element/a), das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird). Dieses Objekt erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein String, der den Typ des Inhalts angibt, der durch den HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking) {{Experimental_Inline}}
  - : Ein String, der anzeigt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es spiegelt das `blocking` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Ein String, der der CORS-Einstellung für dieses Link-Element entspricht. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein boolescher Wert, der anzeigt, ob der Link deaktiviert ist; wird derzeit nur für Stylesheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie er das Abrufen eines Preloads im Vergleich zu anderen Ressourcen desselben Typs priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der zulässigen Werte sein: `high` für höhere Priorität, `low` für niedrigere Priorität oder `auto` für keine Präferenz (was der Standard ist).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Ein String, der die URI für die Zielressource darstellt.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Ein String, der den Sprachcode für die verlinkte Ressource darstellt.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die sich die Ressource bezieht. Es spiegelt das `media` Attribut des {{HTMLElement("link")}} Elements wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) widerspiegelt und angibt, welcher Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Ein String, der die Vorwärtsbeziehung der verlinkten Ressource vom Dokument zur Ressource darstellt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das HTML-Attribut [`rel`](/de/docs/Web/HTML/Element/link#rel) als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet) Objekt zurück, das mit dem gegebenen Element assoziiert ist, oder `null`, wenn keines vorhanden ist.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Ein String, der den MIME-Typ der verlinkten Ressource darstellt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung für die Zielressource darstellt.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}

  - : Ein String, der die umgekehrte Beziehung der verlinkten Ressource von der Ressource zum Dokument darstellt.

    > [!NOTE]
    > Derzeit gibt der W3C HTML 5.2 Spec an, dass `rev` nicht länger veraltet ist, während der WHATWG Living Standard es immer noch als veraltet kennzeichnet. Bis diese Diskrepanz geklärt ist, sollten Sie davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Ein String, der den Namen des Zielrahmens darstellt, auf den sich die Ressource bezieht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("link")}}.
