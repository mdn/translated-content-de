---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`CustomEvent`**-Interface steht für Ereignisse, die von einer Anwendung zu beliebigen Zwecken initialisiert werden.

> [!NOTE]
> Wenn es versucht wird, zwischen einem Inhalts-Skript einer Web-Erweiterung und einem Skript einer Webseite zu kommunizieren, löst eine nicht auf String basierende `detail`-Eigenschaft in Firefox einen Fehler "Permission denied to access property" aus. Um dieses Problem zu vermeiden, klonen Sie das Objekt. Weitere Informationen finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

{{InheritanceDiagram}}

## Konstruktor

- [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent)
  - : Erzeugt ein neues `CustomEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) {{ReadOnlyInline}}
  - : Gibt alle Daten zurück, die beim Initialisieren des Ereignisses übergeben wurden.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.initCustomEvent()`](/de/docs/Web/API/CustomEvent/initCustomEvent) {{deprecated_inline}}
  - : Initialisiert ein `CustomEvent`-Objekt. Wenn das Ereignis bereits ausgeliefert wurde, macht diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
