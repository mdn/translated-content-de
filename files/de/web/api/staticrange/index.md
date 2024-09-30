---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: 1a9aa33c8071362dec1426e7e45b587bd472d559
---

{{APIRef("DOM")}}

Die [DOM](/de/docs/Web/API/Document_Object_Model) **`StaticRange`**-Schnittstelle erweitert [`AbstractRange`](/de/docs/Web/API/AbstractRange), um eine Methode bereitzustellen, mit der ein Inhaltsbereich im DOM angegeben werden kann, dessen Inhalte nicht aktualisiert werden, um Änderungen im DOM-Baum widerzuspiegeln.

Diese Schnittstelle bietet denselben Satz von Eigenschaften und Methoden wie `AbstractRange`.

`AbstractRange` und `StaticRange` sind nicht von [Web-Workern](/de/docs/Web/API/Web_Workers_API) aus verfügbar.

{{InheritanceDiagram}}

## Konstruktor

- [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)
  - : Erstellt ein neues `StaticRange`-Objekt unter Verwendung von Optionen, die die Standardwerte für seine Eigenschaften angeben.

## Instanz-Eigenschaften

_Die unten aufgeführten Eigenschaften werden von ihrer übergeordneten Schnittstelle [`AbstractRange`](/de/docs/Web/API/AbstractRange) geerbt._

- [`StaticRange.collapsed`](/de/docs/Web/API/StaticRange/collapsed) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Start- und Endposition des Bereichs identisch sind, was zu einem Bereich der Länge 0 führt.
- [`StaticRange.endContainer`](/de/docs/Web/API/StaticRange/endContainer) {{ReadOnlyInline}}
  - : Gibt den DOM-[`Node`](/de/docs/Web/API/Node) zurück, der den Endpunkt des Bereichs enthält. Der Offset in das Knoten, an dem die Endposition liegt, wird durch `endOffset` angegeben.
- [`StaticRange.endOffset`](/de/docs/Web/API/StaticRange/endOffset) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Offset im Knoten angibt, der durch `endContainer` gegeben ist, wo das letzte Zeichen des Bereichs gefunden wird.
- [`StaticRange.startContainer`](/de/docs/Web/API/StaticRange/startContainer) {{ReadOnlyInline}}
  - : Gibt den DOM-[`Node`](/de/docs/Web/API/Node) zurück, der den Startpunkt des Bereichs enthält (dieser wird wiederum durch `startOffset` identifiziert).
- [`StaticRange.startOffset`](/de/docs/Web/API/StaticRange/startOffset) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Offset im Knoten angibt, der durch `startContainer` angegeben ist, an dem das erste Zeichen des Bereichs gefunden wird.

## Nutzungshinweise

Ein DOM-Bereich spezifiziert einen Inhaltsspanne in einem Dokument, der möglicherweise innerhalb eines Knotens (oder Elements) beginnt und in einem anderen endet. Im Gegensatz zu einem [`Range`](/de/docs/Web/API/Range) stellt ein `StaticRange` einen Bereich dar, der in der Zeit fixiert ist; er ändert sich nicht, um zu versuchen, den gleichen Inhalt innerhalb zu halten, während sich das Dokument ändert. Wenn Änderungen im DOM vorgenommen werden, können sich die tatsächlichen Daten, die innerhalb des durch einen `StaticRange` spezifizierten Bereichs enthalten sind, ändern. Dadurch kann der [User Agent](/de/docs/Glossary/user_agent) viel unnötige Arbeit vermeiden, wenn die Web-App oder die Website keinen live-aktualisierten Bereich benötigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Live-aktualisierender Inhaltsbereich innerhalb des DOM: [`Range`](/de/docs/Web/API/Range)
- [`AbstractRange`](/de/docs/Web/API/AbstractRange), die abstrakte Schnittstelle, von der alle Bereiche abgeleitet sind
