---
title: aria-dropeffect
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale `aria-dropeffect`-Attribut gibt an, welche Funktionen möglich sind, wenn ein gezogenes Objekt auf dem Zielbereich losgelassen wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 als veraltet eingestuft, zeigt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Zielbereich losgelassen wird. Das globale `aria-dropeffect`-Attribut bietet Benutzern von unterstützenden Technologien die gleiche Information, die über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) symbolisch an sehende Benutzer über das dropeffect-Symbol gegeben wird.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Das Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs, Teil von HTML5's [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), mit einem [`dragstart`-Ereignis-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), ermöglicht es, dass jeder DOM-Knoten ebenfalls ziehbar gemacht werden kann.

Wenn ein Zieh-Ereignis auftritt, wird ein durchscheinendes Bild des gezogenen Elements generiert, das dem Zeiger des Benutzers während des Ziehens folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) auf jedes Bild geändert werden. Neben dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft, mit der die visuelle Rückmeldung gesteuert werden kann, die der Benutzer während einer Drag-and-Drop-Operation erhält. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Benutzern von unterstützenden Technologien das gleiche Feedback zu geben, das sehenden Benutzern über die `dataTransfer.dropEffect`-Eigenschaft gegeben wird.

`dropeffect` definiert, welchen Cursor der Browser beim Ziehen anzeigt und wird auf das Element gesetzt, auf dem das Element abgelegt werden kann. Während der Ziehoperation, wenn das ziehbare Element über verschiedene Ablagebereiche gezogen wird, sollten sowohl die `dataTransfer.dropeffect` als auch die `aria-dropeffect`-Eigenschaft geändert werden, um den Operationstyp anzuzeigen, der ausgeführt wird, wenn das gezogene Element losgelassen wird.

Für ein bestimmtes Element können mehr als ein Ablage-Effekt unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Funktionen umfassen `copy`, `execute`, `link` und `move`. Der Standardwert ist `none`, was bedeutet, dass keine Funktionalität in der Anwendung unterstützt wird. Wenn `aria-dropeffect="popup"` gesetzt ist, informiert dies Benutzer von unterstützenden Technologien darüber, dass es ein Popup-Menü oder einen Dialog mit Ziehoperationen gibt, aus dem der Benutzer wählen kann.

Das Hinzufügen des Attributs ermöglicht es unterstützenden Technologien, die möglichen Ziehoptionen, die dem Benutzer der unterstützenden Technologie zur Verfügung stehen, zu übermitteln, fügt jedoch keine tatsächliche Funktionalität hinzu.

Die `aria-dropeffect`-Eigenschaft wird voraussichtlich in einer zukünftigen Version von WAI-ARIA durch ein neues Feature ersetzt und gilt als veraltet.

Typischerweise können Drop-Effekt-Funktionen erst bereitgestellt werden, wenn ein Objekt für eine Ziehoperation erfasst wurde, da die verfügbaren Drop-Effekt-Funktionen vom gezogenen Objekt abhängen. Daher wird `aria-dropeffect` allgemein allen potenziellen Ablagezielen hinzugefügt, wenn das [`dragstart`-Ereignis](/de/docs/Web/API/HTMLElement/dragstart_event) ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Die folgenden sind die gültigen Tokens:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel abgelegt.
- `execute`
  - : Eine vom Ziel unterstützte Funktion wird ausgeführt, indem die Ziehquelle als Eingabe verwendet wird.
- `link`
  - : Eine Referenz oder Abkürzung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird aus seinem aktuellen Standort entfernt und in das Ziel abgelegt.
- `none` (Standard)
  - : Es kann keine Operation ausgeführt werden; hebt die Ziehoperation effektiv auf, wenn versucht wird, auf diesem Objekt abzulegen. Wird ignoriert, wenn mit einem anderen Token-Wert kombiniert; zum Beispiel ist 'none copy' gleichbedeutend mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder einen Dialog, der es dem Benutzer ermöglicht, eine der Ziehoperationen (Kopieren, Verschieben, Verlinken, Ausführen) und andere Zieh-Funktionalitäten wie Abbrechen auszuwählen.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [HTML globales `draggable`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
