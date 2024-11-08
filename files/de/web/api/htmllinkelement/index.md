---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLinkElement`**-Interface repräsentiert Referenzinformationen für externe Ressourcen und die Beziehung dieser Ressourcen zu einem Dokument und umgekehrt (entspricht dem [`<link>`](/de/docs/Web/HTML/Element/link) Element; nicht zu verwechseln mit [`<a>`](/de/docs/Web/HTML/Element/a), das durch [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird). Dieses Objekt erbt alle Eigenschaften und Methoden des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLinkElement.as`](/de/docs/Web/API/HTMLLinkElement/as)
  - : Ein Zeichenkette, die den Typ des Inhalts repräsentiert, der durch den HTML-Link geladen wird, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) oder [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) verwendet wird.
- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
  - : Eine Zeichenkette, die angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
  - : Eine Zeichenkette, die den CORS-Einstellungen für dieses Link-Element entspricht. Siehe [CORS-Einstellungs-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.
- [`HTMLLinkElement.disabled`](/de/docs/Web/API/HTMLLinkElement/disabled)
  - : Ein boolescher Wert, der darstellt, ob der Link deaktiviert ist; wird derzeit nur mit Style-Sheet-Links verwendet.
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
  - : Eine optionale Zeichenkette, die einen Hinweis an den Browser darstellt, wie das Laden einer Vorabruf-Ressource im Verhältnis zu anderen Ressourcen desselben Typs priorisiert werden sollte. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high`, um beim Laden eine höhere Priorität zu setzen, `low`, um eine niedrigere Priorität zu setzen, oder `auto`, um keine Vorzugsrichtung anzugeben (was der Standard ist).
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
  - : Eine Zeichenkette, die den URI für die Zielressource darstellt.
- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)
  - : Eine Zeichenkette, die den Sprachcode für die verlinkte Ressource darstellt.
- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
  - : Eine Zeichenkette, die Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.media`](/de/docs/Web/API/HTMLLinkElement/media)
  - : Eine Zeichenkette, die eine Liste von einem oder mehreren Medienformaten repräsentiert, für die die Ressource gilt. Es spiegelt das `media`-Attribut des {{HTMLElement("link")}}-Elements wider.
- [`HTMLLinkElement.referrerPolicy`](/de/docs/Web/API/HTMLLinkElement/referrerPolicy)
  - : Eine Zeichenkette, die das [`referrerpolicy`](/de/docs/Web/HTML/Element/link#referrerpolicy) HTML-Attribut widerspiegelt, das angibt, welchen Referrer verwendet werden soll.
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
  - : Eine Zeichenkette, die die fortlaufende Beziehung der verlinkten Ressource vom Dokument zur Ressource darstellt.
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`rel`](/de/docs/Web/HTML/Element/link#rel) HTML-Attribut als Liste von Token widerspiegelt.
- [`HTMLLinkElement.sizes`](/de/docs/Web/API/HTMLLinkElement/sizes) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`sizes`](/de/docs/Web/HTML/Element/link#sizes) HTML-Attribut als Liste von Token widerspiegelt.
- [`HTMLLinkElement.sheet`](/de/docs/Web/API/HTMLLinkElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das mit dem gegebenen Element verknüpft ist, oder `null`, wenn es keines gibt.
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
  - : Eine Zeichenkette, die den MIME-Typ der verlinkten Ressource darstellt.

### Veraltete Eigenschaften

- [`HTMLLinkElement.charset`](/de/docs/Web/API/HTMLLinkElement/charset) {{deprecated_inline}}
  - : Eine Zeichenkette, die die Zeichenkodierung für die Zielressource repräsentiert.
- [`HTMLLinkElement.rev`](/de/docs/Web/API/HTMLLinkElement/rev) {{deprecated_inline}}

  - : Eine Zeichenkette, die die umgekehrte Beziehung der verlinkten Ressource von der Ressource zum Dokument darstellt.

    > [!NOTE]
    > Derzeit besagt die W3C HTML 5.2-Spezifikation, dass `rev` nicht mehr veraltet ist, während der lebendige Standard von WHATWG es noch als veraltet bezeichnet. Bis diese Diskrepanz gelöst ist, sollten Sie weiterhin davon ausgehen, dass es veraltet ist.

- [`HTMLLinkElement.target`](/de/docs/Web/API/HTMLLinkElement/target) {{deprecated_inline}}
  - : Eine Zeichenkette, die den Namen des Ziel-Frames darstellt, auf den sich die Ressource bezieht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden vom Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("link")}}.
