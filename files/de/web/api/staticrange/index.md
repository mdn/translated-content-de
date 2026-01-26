---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die [DOM](/de/docs/Web/API/Document_Object_Model) **`StaticRange`**-Schnittstelle erweitert [`AbstractRange`](/de/docs/Web/API/AbstractRange), um eine Methode bereitzustellen, die einen Inhaltsbereich im DOM angibt, dessen Inhalt sich nicht aktualisiert, um Änderungen im DOM-Baum widerzuspiegeln.

Diese Schnittstelle bietet denselben Satz von Eigenschaften und Methoden wie `AbstractRange`.

`AbstractRange` und `StaticRange` sind nicht in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

{{InheritanceDiagram}}

## Konstruktor

- [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)
  - : Erstellt ein neues `StaticRange`-Objekt, basierend auf Optionen, die die Standardwerte für seine Eigenschaften angeben.

## Instanz-Eigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`AbstractRange`](/de/docs/Web/API/AbstractRange)._

## Nutzungshinweise

Ein DOM-Bereich spezifiziert einen Spannweite von Inhalten in einem Dokument, die möglicherweise in einem Knoten (oder Element) beginnen und in einem anderen enden. Im Gegensatz zu einem [`Range`](/de/docs/Web/API/Range) stellt ein `StaticRange` einen Bereich dar, der in der Zeit fest ist; er ändert sich nicht, um zu versuchen, denselben Inhalt innerhalb des Bereichs zu halten, während sich das Dokument ändert. Wenn Änderungen am DOM vorgenommen werden, kann sich die tatsächliche Menge an Daten, die durch den von einem `StaticRange` angegebenen Bereich erfasst werden, ändern. Dadurch kann der {{Glossary("user_agent", "User Agent")}} viel unnötige Arbeit vermeiden, wenn die Web-App oder -Seite keinen live-aktualisierenden Bereich benötigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Live-aktualisierender Inhaltsbereich innerhalb des DOM: [`Range`](/de/docs/Web/API/Range)
- [`AbstractRange`](/de/docs/Web/API/AbstractRange), die abstrakte Schnittstelle, von der alle Bereiche abgeleitet sind
