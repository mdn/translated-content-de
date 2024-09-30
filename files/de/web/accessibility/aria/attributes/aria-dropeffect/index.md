---
title: aria-dropeffect
slug: Web/Accessibility/ARIA/Attributes/aria-dropeffect
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-dropeffect`-Attribut gibt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Zielbereich losgelassen wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 als veraltet eingestuft, gibt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Zielbereich losgelassen wird. Das globale `aria-dropeffect`-Attribut bietet Nutzern von unterstützenden Technologien dieselben Informationen, die über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) an sehende Nutzer über das Drop-Effect-Symbol bereitgestellt werden.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable) Attributes, Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), mit einem [`dragstart` Event-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jeder DOM-Knoten ebenfalls zum Ziehen aktiviert werden.

Wenn ein Ziehereignis auftritt, wird ein durchscheinendes Bild des gezogenen Elements erzeugt, das dem Zeiger des Nutzers während des Ziehens folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) in ein beliebiges Bild geändert werden. Neben dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft, die zur Steuerung des visuellen Feedbacks verwendet werden kann, das der Nutzer während einer Drag-and-Drop-Operation erhält. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Nutzern von unterstützenden Technologien dasselbe Feedback zu geben, das sehende Nutzer über die `dataTransfer.dropEffect`-Eigenschaft erhalten.

`dropeffect` definiert, welchen Cursor der Browser beim Ziehen anzeigt, und wird auf das Element gesetzt, auf das das Element fallen gelassen werden darf. Während des Ziehvorgangs, wenn das ziehbare Element über verschiedene Zielbereiche gezogen wird, sollten die Zieheffekte - sowohl `dataTransfer.dropeffect` als auch `aria-dropeffect` - angepasst werden, um anzuzeigen, welche Art von Operation stattfinden wird, wenn das gezogene Element losgelassen wird.

Mehr als ein Drop-Effect kann für ein bestimmtes Element unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributes eine durch Leerzeichen getrennte Liste von Funktionen. Zu den Funktionen gehören `copy`, `execute`, `link` und `move`. Die Standardeinstellung ist `none`, was bedeutet, dass in der Anwendung keine Funktionalität unterstützt wird. Das Setzen von `aria-dropeffect="popup"` informiert Nutzer von unterstützenden Technologien darüber, dass es ein Popup-Menü oder einen Dialogkasten mit Ziehoperationen gibt, aus dem der Nutzer wählen kann.

Das Einfügen des Attributes ermöglicht es unterstützenden Technologien, die möglichen Ziehoptionen an den Benutzer der unterstützenden Technologie zu übermitteln, fügt aber keine tatsächliche Funktionalität hinzu.

Es wird erwartet, dass die `aria-dropeffect`-Eigenschaft in einer zukünftigen Version von WAI-ARIA durch ein neues Feature ersetzt wird und gilt daher als veraltet.

Normalerweise können Drop-Effect-Funktionen erst bereitgestellt werden, nachdem ein Objekt für eine Ziehoperation erfasst wurde, da die verfügbaren Drop-Effect-Funktionen vom gezogenen Objekt abhängen. Daher sollten Sie im Allgemeinen `aria-dropeffect` an alle potenziellen Zielbereiche hinzufügen, wenn das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste von möglichen Aktionen. Die folgenden sind die gültigen Tokens:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel abgelegt.
- `execute`
  - : Eine vom Ziel unterstützte Funktion wird ausgeführt, wobei das Zieh-Quellobjekt als Eingabe verwendet wird.
- `link`
  - : Eine Referenz oder Verknüpfung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird aus seiner aktuellen Position entfernt und in das Ziel verschoben.
- `none` (Standard)
  - : Es kann keine Operation ausgeführt werden; der Ziehvorgang wird effektiv abgebrochen, wenn ein Versuch unternommen wird, auf dieses Objekt zu ziehen. Wird ignoriert, wenn mit einem anderen Token-Wert kombiniert; zum Beispiel ist 'none copy' gleichbedeutend mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder einen Dialog, der es dem Nutzer ermöglicht, eine der Ziehoperationen (copy, move, link, execute) und jede andere Ziehfunktionalität wie z.B. Abbrechen, auszuwählen.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [HTML globales `draggable`-Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
