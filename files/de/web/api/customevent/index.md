---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`CustomEvent`**-Schnittstelle repräsentiert Ereignisse, die von einer Anwendung zu beliebigen Zwecken initialisiert werden.

> [!NOTE]
> Wenn Sie versuchen, zwischen einem Web Extension-Content-Skript und einem Webseitenskript zu kommunizieren, wirft eine nicht-string `detail`-Eigenschaft in Firefox den Fehler "Permission denied to access property". Um dieses Problem zu vermeiden, klonen Sie das Objekt. Weitere Informationen finden Sie unter [Share objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

{{InheritanceDiagram}}

## Konstruktor

- [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent)
  - : Erstellt ein neues `CustomEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) {{ReadOnlyInline}}
  - : Gibt alle Daten zurück, die beim Initialisieren des Ereignisses übergeben wurden.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.initCustomEvent()`](/de/docs/Web/API/CustomEvent/initCustomEvent) {{deprecated_inline}}
  - : Initialisiert ein `CustomEvent`-Objekt. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events)
