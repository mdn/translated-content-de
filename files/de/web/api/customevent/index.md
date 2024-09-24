---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`CustomEvent`**-Schnittstelle steht für Ereignisse, die von einer Anwendung zu beliebigen Zwecken initialisiert werden.

> [!NOTE]
> Wenn Sie versuchen, zwischen einem Inhalts-Skript einer Web-Erweiterung und einem Webseitenskript zu kommunizieren, führt eine nicht-string `detail`-Eigenschaft in Firefox zu einer "Permission denied to access property"-Fehlermeldung. Um dieses Problem zu vermeiden, klonen Sie das Objekt. Weitere Informationen finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : Erstellt ein neues `CustomEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : Gibt alle Daten zurück, die beim Initialisieren des Ereignisses übergeben wurden.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : Initialisiert ein `CustomEvent`-Objekt. Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.postMessage()")}}
- [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events)
