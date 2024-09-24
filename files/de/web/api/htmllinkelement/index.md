---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLLinkElement`** Schnittstelle repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Element/link) Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Element/a), das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird). Dieses Objekt erbt alle Eigenschaften und Methoden der {{domxref("HTMLElement")}} Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLinkElement.as")}}
  - : Ein String, der den Typ des Inhalts repräsentiert, der von dem HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist.
- {{domxref("HTMLLinkElement.blocking")}} {{Experimental_Inline}}
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es spiegelt das `blocking` Attribut des {{HTMLElement("link")}} Elements wider.
- {{domxref("HTMLLinkElement.crossOrigin")}}
  - : Ein String, der den CORS-Einstellungen für dieses Link-Element entspricht. Siehe [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Details.
- {{domxref("HTMLLinkElement.disabled")}}
  - : Ein boolescher Wert, der angibt, ob der Link deaktiviert ist; derzeit nur für Stylesheet-Links verwendet.
- {{domxref("HTMLLinkElement.fetchPriority")}}
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie es die Priorität beim Abrufen eines Preloads im Vergleich zu anderen Ressourcen desselben Typs setzen soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen erlaubten Werte sein: `high` für eine höhere Priorität, `low` für eine niedrigere Priorität oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- {{domxref("HTMLLinkElement.href")}}
  - : Ein String, der die URI für die Zielressource darstellt.
- {{domxref("HTMLLinkElement.hreflang")}}
  - : Ein String, der den Sprachcode für die verknüpfte Ressource darstellt.
- {{domxref("HTMLLinkElement.integrity")}}
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity` Attribut des {{HTMLElement("link")}} Elements wider.
- {{domxref("HTMLLinkElement.media")}}
  - : Ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die sich die Ressource bezieht. Es spiegelt das `media` Attribut des {{HTMLElement("link")}} Elements wider.
- {{domxref("HTMLLinkElement.referrerPolicy")}}
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) HTML-Attribut widerspiegelt, das angibt, welcher Referrer verwendet werden soll.
- {{domxref("HTMLLinkElement.rel")}}
  - : Ein String, der die Vorwärtsbeziehung der verknüpften Ressource vom Dokument zur Ressource darstellt.
- {{domxref("HTMLLinkElement.relList")}} {{ReadOnlyInline}}
  - : Eine {{domxref("DOMTokenList")}}, die das [`rel`](/de/docs/Web/HTML/Element/link#rel) HTML-Attribut als Liste von Tokens widerspiegelt.
- {{domxref("HTMLLinkElement.sizes")}} {{ReadOnlyInline}}
  - : Eine {{domxref("DOMTokenList")}}, die das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) HTML-Attribut als Liste von Tokens widerspiegelt.
- {{domxref("HTMLLinkElement.sheet")}} {{ReadOnlyInline}}
  - : Gibt das mit dem gegebenen Element assoziierte {{domxref("StyleSheet")}} Objekt zurück oder `null`, wenn keines vorhanden ist.
- {{domxref("HTMLLinkElement.type")}}
  - : Ein String, der den MIME-Typ der verknüpften Ressource darstellt.

### Veraltete Eigenschaften

- {{domxref("HTMLLinkElement.charset")}} {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung für die Zielressource darstellt.
- {{domxref("HTMLLinkElement.rev")}} {{deprecated_inline}}

  - : Ein String, der die Rückwärtsbeziehung der verknüpften Ressource von der Ressource zum Dokument darstellt.

    > [!NOTE]
    > Derzeit besagt das W3C HTML 5.2 Spezifikationen, dass `rev` nicht mehr veraltet ist, während der WHATWG-Living-Standard es immer noch als veraltet kennzeichnet. Bis dieser Unterschied geklärt ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- {{domxref("HTMLLinkElement.target")}} {{deprecated_inline}}
  - : Ein String, der den Namen des Zielframes darstellt, auf den sich die Ressource bezieht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("link")}}.
