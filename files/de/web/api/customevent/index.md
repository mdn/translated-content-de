---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`CustomEvent`**-Interface kann verwendet werden, um benutzerdefinierte Daten an ein von einer Anwendung erzeugtes Ereignis anzuhängen.

Als Alternative zu `CustomEvent` können Sie [das `Event`-Interface erweitern](/de/docs/Web/API/Document_Object_Model/Events#adding_custom_data_–_subclassing_event), um benutzerdefinierte Daten und Verhalten hinzuzufügen.

> [!NOTE]
> Wenn versucht wird, zwischen einem Web-Erweiterung-Inhaltsskript und einem Webseitenskript zu kommunizieren, wird in Firefox eine nicht-String `detail`-Eigenschaft mit "Permission denied to access property" ausgeworfen. Um dieses Problem zu vermeiden, klonen Sie das Objekt. Weitere Informationen finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

{{InheritanceDiagram}}

## Konstruktor

- [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent)
  - : Erstellt ein neues `CustomEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) {{ReadOnlyInline}}
  - : Gibt alle Daten zurück, die beim Initialisieren des Ereignisses übergeben wurden.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CustomEvent.initCustomEvent()`](/de/docs/Web/API/CustomEvent/initCustomEvent) {{deprecated_inline}}
  - : Initialisiert ein `CustomEvent`-Objekt. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Ereignisse erstellen und senden](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
