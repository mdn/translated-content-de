---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLinkElement`**-Interface repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Reference/Elements/a), das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird). Dieses Objekt erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein String, der den Typ des Inhalts repräsentiert, der durch den HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) verwendet wird.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Ein String, der der CORS-Einstellung für dieses Link-Element entspricht. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Einzelheiten.
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein boolescher Wert, der angibt, ob der Link deaktiviert ist; wird derzeit nur bei Stylesheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Ein optionaler String, der einen Hinweis darauf gibt, wie der Browser die Priorität des Abrufs eines Preloads im Vergleich zu anderen Ressourcen desselben Typs festlegen soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high` für eine höhere Priorität, `low` für eine niedrigere Priorität oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Ein String, der die URI für die Zielressource darstellt.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Ein String, der den Sprachcode für die verlinkte Ressource repräsentiert.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die sich die Ressource bezieht. Es spiegelt das `media`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/link#referrerpolicy) HTML-Attribut widerspiegelt, welches angibt, welcher Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Ein String, der die Vorwärtsbeziehung der verlinkten Ressource vom Dokument zur Ressource darstellt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) HTML-Attribut als eine Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) HTML-Attribut als eine Liste von Tokens widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das mit dem gegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Ein String, der den MIME-Typ der verlinkten Ressource darstellt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung für die Zielressource darstellt.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}

  - : Ein String, der die umgekehrte Beziehung der verlinkten Ressource von der Ressource zum Dokument darstellt.

    > [!NOTE]
    > Derzeit gibt die W3C HTML 5.2-Spezifikation an, dass `rev` nicht mehr veraltet ist, während der WHATWG-Lebende Standard es weiterhin als veraltet kennzeichnet. Bis diese Diskrepanz gelöst ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Ein String, der den Namen des Zielrahmens darstellt, auf den sich die Ressource bezieht.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("link")}}.
