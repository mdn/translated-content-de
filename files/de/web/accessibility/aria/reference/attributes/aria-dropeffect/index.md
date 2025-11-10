---
title: "ARIA: aria-dropeffect-Attribut"
short-title: aria-dropeffect
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-dropeffect`-Attribut gibt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Ziel abgelegt wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 als veraltet markiert, zeigt die `aria-dropeffect`-Eigenschaft auf, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf dem Ziel abgelegt wird. Das globale `aria-dropeffect`-Attribut bietet Benutzern von unterstützenden Technologien die gleiche Information, die sited Nutzern über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) durch das Dropeffekt-Symbol bereitgestellt wird.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs, Teil der HTML5-[Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), zusammen mit einem [`dragstart`-Ereignishandler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jedes DOM-Element ebenfalls ziehbar gemacht werden.

Wenn ein Ziehereignis auftritt, wird ein durchsichtiges Bild des gezogenen Elements erzeugt, das dem Zeiger des Benutzers während des Ziehens folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) in ein beliebiges Bild geändert werden. Zusammen mit dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft, die verwendet werden kann, um die visuelle Rückmeldung zu steuern, die dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Benutzern von unterstützenden Technologien die gleiche Rückmeldung zu geben, die sited Nutzern über die `dataTransfer.dropEffect`-Eigenschaft gegeben wird.

`dropeffect` definiert, welchen Cursor der Browser während des Ziehens anzeigt und wird auf dem Element gesetzt, auf das das Element möglicherweise abgelegt werden kann. Während der Ziehoperation, je nachdem, wie das ziehbare Element über verschiedene Ablagebereiche gezogen wird, sollten die Zieheffekte – sowohl `dataTransfer.dropeffect` als auch `aria-dropeffect` – geändert werden, um anzuzeigen, welche Art von Operation stattfinden wird, wenn das gezogene Element freigegeben wird.

Mehr als ein Dropeffekt kann für ein bestimmtes Element unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Funktionen umfassen `copy`, `execute`, `link` und `move`. Der Standard ist `none`, was bedeutet, dass in der Anwendung keine unterstützte Funktionalität existiert. Das Setzen von `aria-dropeffect="popup"` informiert Benutzer unterstützender Technologien, dass es ein Popup-Menü oder einen Dialog mit Ziehoperationen gibt, aus dem der Benutzer wählen kann.

Durch Einfügen des Attributs erhalten unterstützende Technologien die Möglichkeit, die möglichen Ziehoptionen, die dem Benutzer der unterstützenden Technologie zur Verfügung stehen, zu vermitteln, fügt jedoch keine tatsächliche Funktionalität hinzu.

Es wird erwartet, dass die `aria-dropeffect`-Eigenschaft in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt wird und gilt als veraltet.

Typischerweise können Dropeffekt-Funktionen nur bereitgestellt werden, nachdem ein Objekt für eine Ziehoperation erfasst wurde, da die verfügbaren Dropeffekt-Funktionen von dem gezogenen Objekt abhängen. Daher fügen Sie im Allgemeinen `aria-dropeffect` zu allen potenziellen Ablagezielen hinzu, wenn das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Die folgenden sind gültige Tokens:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel abgelegt.
- `execute`
  - : Eine vom Ablageziel unterstützte Funktion wird ausgeführt, wobei die Quelle des Zugs als Eingabe dient.
- `link`
  - : Eine Referenz oder Verknüpfung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird von seinem aktuellen Ort entfernt und in das Ziel abgelegt.
- `none` (Standard)
  - : Keine Operation kann ausgeführt werden; hebt effektiv die Ziehoperation auf, wenn versucht wird, auf diesem Objekt abzulegen. Wird ignoriert, wenn es mit einem anderen Token-Wert kombiniert wird; zum Beispiel ist 'none copy' äquivalent zu einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder einen Dialog, der es dem Benutzer ermöglicht, eine der Ziehoperationen (copy, move, link, execute) und jede andere Ziehfunktionalität, wie z. B. Abbrechen, auszuwählen.

## Zugewiesene Rollen

In **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [HTML globales `draggable`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
