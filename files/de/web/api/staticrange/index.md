---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: 1a9aa33c8071362dec1426e7e45b587bd472d559
---

{{APIRef("DOM")}}

Die [DOM](/de/docs/Web/API/Document_Object_Model) **`StaticRange`**-Schnittstelle erweitert [`AbstractRange`](/de/docs/Web/API/AbstractRange), um eine Methode bereitzustellen, die einen Inhaltsbereich im DOM angibt, dessen Inhalte nicht aktualisiert werden, um Änderungen innerhalb des DOM-Baums widerzuspiegeln.

Diese Schnittstelle bietet denselben Satz von Eigenschaften und Methoden wie `AbstractRange`.

`AbstractRange` und `StaticRange` sind nicht verfügbar in [Web Workern](/de/docs/Web/API/Web_Workers_API).

{{InheritanceDiagram}}

## Konstruktor

- [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)
  - : Erstellt ein neues `StaticRange`-Objekt mit Optionen, die die Standardwerte für seine Eigenschaften festlegen.

## Instanzeigenschaften

_Die untenstehenden Eigenschaften werden von ihrer übergeordneten Schnittstelle, [`AbstractRange`](/de/docs/Web/API/AbstractRange), geerbt._

- [`StaticRange.collapsed`](/de/docs/Web/API/StaticRange/collapsed) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die Start- und Endpositionen des Bereichs gleich sind, was zu einem Bereich der Länge 0 führt.
- [`StaticRange.endContainer`](/de/docs/Web/API/StaticRange/endContainer) {{ReadOnlyInline}}
  - : Gibt den DOM-[`Node`](/de/docs/Web/API/Node) zurück, der den Endpunkt des Bereichs enthält. Der Versatz in den Knoten, an dem sich die Endposition befindet, wird durch `endOffset` angegeben.
- [`StaticRange.endOffset`](/de/docs/Web/API/StaticRange/endOffset) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Versatz in den vom `endContainer` angegebenen Knoten anzeigt, an dem das letzte Zeichen des Bereichs gefunden wird.
- [`StaticRange.startContainer`](/de/docs/Web/API/StaticRange/startContainer) {{ReadOnlyInline}}
  - : Gibt den DOM-[`Node`](/de/docs/Web/API/Node) zurück, der den Startpunkt des Bereichs enthält, der wiederum durch `startOffset` identifiziert wird.
- [`StaticRange.startOffset`](/de/docs/Web/API/StaticRange/startOffset) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Versatz in den vom `startContainer` angegebenen Knoten anzeigt, an dem das erste Zeichen des Bereichs gefunden wird.

## Nutzungshinweise

Ein DOM-Bereich gibt eine Spanne von Inhalten in einem Dokument an, die möglicherweise innerhalb eines Knotens (oder Elements) beginnt und innerhalb eines anderen endet. Im Gegensatz zu einem [`Range`](/de/docs/Web/API/Range) stellt ein `StaticRange` einen Bereich dar, der zeitlich festgelegt ist; er ändert sich nicht, um zu versuchen, denselben Inhalt beizubehalten, wenn sich das Dokument ändert. Wenn Änderungen am DOM vorgenommen werden, können sich die tatsächlichen Daten, die im durch einen `StaticRange` angegebenen Bereich enthalten sind, ändern. Dies ermöglicht es dem [User-Agent](/de/docs/Glossary/user_agent), eine Menge unnötiger Arbeit zu vermeiden, wenn die Web-App oder die Website keinen live-aktualisierten Bereich benötigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Live aktualisierender Inhaltsbereich im DOM: [`Range`](/de/docs/Web/API/Range)
- [`AbstractRange`](/de/docs/Web/API/AbstractRange), die abstrakte Schnittstelle, von der alle Bereiche abgeleitet sind
