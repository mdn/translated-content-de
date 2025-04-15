---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 181082d457dc196c519405a7f6cee83fa117f128
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLinkElement`**-Interface repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Reference/Elements/a), das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird). Dieses Objekt erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein String, der den Inhaltstyp repräsentiert, der von dem HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) verwendet wird.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
  - : Ein String, der angibt, dass bestimmte Vorgänge beim Abrufen einer externen Ressource blockiert werden sollten. Er spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Ein String, der den CORS-Einstellungen für dieses Link-Element entspricht. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details.
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein Boolean-Wert, der darstellt, ob der Link deaktiviert ist; derzeit nur bei Stylesheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie das Abrufen eines Preloads im Verhältnis zu anderen Ressourcen desselben Typs priorisiert werden soll. Wenn dieser Wert angegeben ist, muss er einer der zulässigen Werte sein: `high` für höhere Priorität, `low` für niedrigere Priorität oder `auto` um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Ein String, der den URI für die Zielressource repräsentiert.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Ein String, der den Sprachcode für die verknüpfte Ressource repräsentiert.
- [`HTMLLinkElement.imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)
  - : Ein String, der das [`imagesizes`](/de/docs/Web/HTML/Reference/Elements/link#imagesizes)-HTML-Attribut widerspiegelt; eine Liste von kommagetrennten Bildbedingungen und -größen.
- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imagesrcset)
  - : Ein String, der das [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset)-HTML-Attribut widerspiegelt; eine kommagetrennte Liste von Bildkandidat-Strings.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Ein String mit Inline-Metadaten, die ein Browser verwenden kann, um sicherzustellen, dass eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Er spiegelt das `integrity`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Ein String, der eine Liste von einem oder mehreren Medienformaten repräsentiert, auf die sich die Ressource bezieht. Er spiegelt das `media`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Ein String, der die Vorwärtsbeziehung der verknüpften Ressource vom Dokument zur Ressource darstellt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), der das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), der das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das mit dem gegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Ein String, der den MIME-Typ der verknüpften Ressource darstellt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung für die Zielressource repräsentiert.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}

  - : Ein String, der die umgekehrte Beziehung der verknüpften Ressource von der Ressource zum Dokument repräsentiert.

    > [!NOTE]
    > Derzeit gibt die W3C HTML 5.2-Spezifikation an, dass `rev` nicht mehr veraltet ist, während der WHATWG-Living-Standard es weiterhin als veraltet kennzeichnet. Bis dieser Unterschied geklärt ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Ein String, der den Namen des Zielframes repräsentiert, auf den sich die Ressource bezieht.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("link")}}.
