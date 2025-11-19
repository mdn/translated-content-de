---
title: "ARIA: aria-dropeffect-Attribut"
short-title: aria-dropeffect
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: c6ed438b7656ab8e2e43ac890bd4da4f8f9b1804
---

Das globale `aria-dropeffect`-Attribut zeigt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Ziel abgelegt wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 als veraltet eingestuft, zeigt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Ziel abgelegt wird. Das globale `aria-dropeffect`-Attribut bietet Benutzern assistierender Technologien die gleichen Informationen, die über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) den sehenden Benutzern über das Dropeffekt-Symbol bereitgestellt werden.

Texte, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs, Teil der HTML5-[Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API), mit einem [`dragstart`-Ereignishandler](/de/docs/Web/API/HTMLElement/dragstart_event), kann auch jeder DOM-Knoten ziehbar gemacht werden.

Bei einem Ziehereignis wird ein durchscheinendes Bild des gezogenen Elements erzeugt, das dem Zeiger des Benutzers während des Ziehvorgangs folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) durch jedes andere Bild ersetzt werden. Zusammen mit dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft, die verwendet werden kann, um das visuelle Feedback zu steuern, das der Benutzer während eines Drag-and-Drop-Vorgangs erhält. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Benutzern assistierender Technologien das gleiche Feedback bereitzustellen, das sehende Benutzer über die `dataTransfer.dropEffect`-Eigenschaft erhalten.

`dropeffect` definiert, welchen Cursor der Browser beim Ziehen anzeigt und wird auf dem Element gesetzt, auf das das Element abgelegt werden kann. Während des Ziehvorgangs, wenn das ziehbare Element über verschiedene Ablegebereiche gezogen wird, sollten sowohl die `dataTransfer.dropeffect` als auch die `aria-dropeffect` angepasst werden, um die Art der Operation anzuzeigen, die ausgeführt wird, wenn das gezogene Element freigegeben wird.

Für ein bestimmtes Element können mehrere Ablegeeffekte unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Zu den Funktionen gehören `copy`, `execute`, `link` und `move`. Die Standardeinstellung ist `none`, was bedeutet, dass keine Funktionalität in der Anwendung unterstützt wird. Die Einstellung `aria-dropeffect="popup"` informiert Benutzer assistierender Technologien darüber, dass es ein Popup-Menü oder einen Dialog mit Ziehoperationen gibt, aus denen der Benutzer wählen kann.

Das Einfügen des Attributs ermöglicht es assistierenden Technologien, die möglichen Ziehoptionen an den Benutzer der assistierenden Technologie zu übermitteln, fügt jedoch keine tatsächliche Funktionalität hinzu.

Es wird erwartet, dass die `aria-dropeffect`-Eigenschaft in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt wird und gilt als veraltet.

Typischerweise können Ablegeeffekt-Funktionen erst bereitgestellt werden, nachdem ein Objekt für einen Ziehvorgang ergriffen wurde, da die verfügbaren Ablegeeffekt-Funktionen vom gezogenen Objekt abhängen. Daher fügen Sie `aria-dropeffect` in der Regel allen potenziellen Ablegezielen hinzu, wenn das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Die folgenden sind die gültigen Tokens:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel abgelegt.
- `execute`
  - : Eine Funktion, die vom Ziel unterstützt wird, wird ausgeführt, wobei die Ziehquelle als Eingabe verwendet wird.
- `link`
  - : Eine Referenz oder Verknüpfung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird von seinem aktuellen Standort entfernt und in das Ziel abgelegt.
- `none` (Standard)
  - : Es kann keine Operation ausgeführt werden; bricht den Ziehvorgang effektiv ab, wenn versucht wird, auf dieses Objekt abzulegen. Wird ignoriert, wenn es mit einem anderen Tokenwert kombiniert wird; beispielsweise ist 'none copy' gleichbedeutend mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder einen Dialog, der dem Benutzer erlaubt, eine der Ziehoperationen (copy, move, link, execute) und jede andere Ziehfunktionalität wie Abbrechen auszuwählen.

## Zugeordnete Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [HTML Globales `draggable`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- HTML [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
