---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: 67e109a23d67c4138e36bd03abe7f9a6500eb5c3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`CustomEvent`**-Schnittstelle kann verwendet werden, um benutzerdefinierte Daten zu einem von einer Anwendung generierten Ereignis hinzuzufügen.

Als Alternative zu `CustomEvent` können Sie die [`Event`-Schnittstelle unterklassen](/de/docs/Web/Events/Creating_and_triggering_events#adding_custom_data_–_subclassing_event), um benutzerdefinierte Daten und Verhalten hinzuzufügen.

> [!NOTE]
> Wenn versucht wird, zwischen einem Web-Erweiterungs-Content-Skript und einem Webseitenskript zu kommunizieren, löst eine nicht-String `detail`-Eigenschaft in Firefox "Permission denied to access property" aus. Um dieses Problem zu vermeiden, klonen Sie das Objekt. Weitere Informationen finden Sie unter [Share objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

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
  - : Initialisiert ein `CustomEvent`-Objekt. Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
