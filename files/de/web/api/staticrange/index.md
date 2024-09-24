---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: 1a9aa33c8071362dec1426e7e45b587bd472d559
---

{{APIRef("DOM")}}

Die [DOM](/de/docs/Web/API/Document_Object_Model) **`StaticRange`**-Schnittstelle erweitert {{domxref("AbstractRange")}}, um eine Methode bereitzustellen, mit der ein Bereich von Inhalten im DOM festgelegt werden kann, dessen Inhalt nicht aktualisiert wird, um Änderungen widerzuspiegeln, die innerhalb der DOM-Baumstruktur auftreten.

Diese Schnittstelle bietet denselben Satz von Eigenschaften und Methoden wie `AbstractRange`.

`AbstractRange` und `StaticRange` sind in [Web Workern](/de/docs/Web/API/Web_Workers_API) nicht verfügbar.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("StaticRange.StaticRange", "StaticRange()")}}
  - : Erstellt ein neues `StaticRange`-Objekt mit Optionen, die die Standardwerte für seine Eigenschaften festlegen.

## Instanz-Eigenschaften

_Die folgenden Eigenschaften werden von der übergeordneten Schnittstelle {{domxref("AbstractRange")}} geerbt._

- {{domxref("StaticRange.collapsed")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Start- und Endpositionen des Bereichs gleich sind, was zu einem Bereich der Länge 0 führt.
- {{domxref("StaticRange.endContainer")}} {{ReadOnlyInline}}
  - : Gibt den DOM-{{domxref("Node")}} zurück, der den Endpunkt des Bereichs enthält. Der Versatz in den Knoten, an dem sich die Endposition befindet, wird durch `endOffset` angegeben.
- {{domxref("StaticRange.endOffset")}} {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Versatz in dem durch `endContainer` angegebenen Knoten anzeigt, an dem das letzte Zeichen des Bereichs gefunden wird.
- {{domxref("StaticRange.startContainer")}} {{ReadOnlyInline}}
  - : Gibt den DOM-{{domxref("Node")}} zurück, der den Anfangspunkt des Bereichs enthält (der seinerseits durch `startOffset` identifiziert wird).
- {{domxref("StaticRange.startOffset")}} {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Versatz in dem durch `startContainer` angegebenen Knoten anzeigt, an dem das erste Zeichen des Bereichs gefunden wird.

## Verwendungshinweise

Ein DOM-Bereich gibt eine Spanne von Inhalten in einem Dokument an, die möglicherweise in einem Knoten (oder Element) beginnt und in einem anderen endet. Im Gegensatz zu einem {{domxref("Range")}} stellt ein `StaticRange` einen Bereich dar, der zeitlich festgelegt ist; er ändert sich nicht, um zu versuchen, denselben Inhalt in sich zu behalten, während sich das Dokument ändert. Wenn Änderungen am DOM vorgenommen werden, können sich die tatsächlichen Daten innerhalb des durch einen `StaticRange` festgelegten Bereichs ändern. Dies ermöglicht es dem {{Glossary("user agent")}}, viel unnötige Arbeit zu vermeiden, wenn die Webanwendung oder -seite keinen live-aktualisierenden Bereich benötigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Live-aktualisierender Bereich von Inhalten innerhalb des DOM: {{domxref("Range")}}
- {{domxref("AbstractRange")}}, die abstrakte Schnittstelle, von der alle Bereiche abgeleitet sind
