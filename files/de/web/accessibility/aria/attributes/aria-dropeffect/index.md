---
title: aria-dropeffect
slug: Web/Accessibility/ARIA/Attributes/aria-dropeffect
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-dropeffect`-Attribut zeigt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Ziel losgelassen wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 als veraltet eingestuft, zeigt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Zielobjekt losgelassen wird. Das globale `aria-dropeffect`-Attribut bietet Benutzern von unterstützenden Technologien die gleiche Information, die über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) den sehenden Benutzern über das Dropeffekt-Symbol bereitgestellt wird.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable)-Attributs, das Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ist, zusammen mit einem [`dragstart`-Ereignishandler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jeder DOM-Knoten ebenfalls ziehbar gemacht werden.

Wenn ein Zieh-Ereignis auftritt, wird ein durchscheinendes Bild des gezogenen Elements erzeugt, das dem Zeiger des Benutzers während des Ziehens folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) in jedes Bild geändert werden. Zusammen mit dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft, die verwendet werden kann, um die visuelle Rückmeldung zu steuern, die dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um den Benutzern unterstützender Technologie die gleiche Rückmeldung zu geben, die sehenden Benutzern über die `dataTransfer.dropEffect`-Eigenschaft bereitgestellt wird.

`dropeffect` definiert, welchen Cursor der Browser während des Ziehens anzeigt, und wird auf dem Element gesetzt, auf dem das Element abgelegt werden kann. Während der Zieh-Operation, wenn das ziehbare Element über verschiedene Ablagebereiche gezogen wird, sollten die Zieheffekte—sowohl `dataTransfer.dropeffect` als auch `aria-dropeffect`—angepasst werden, um den Vorgangstyp anzuzeigen, der ausgeführt wird, wenn das gezogene Element losgelassen wird.

Mehr als ein Drop-Effekt kann für ein gegebenes Element unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Zu den Funktionen gehören `copy`, `execute`, `link` und `move`. Der Standardwert ist `none`, was bedeutet, dass es in der Anwendung keine unterstützte Funktionalität gibt. Durch Setzen von `aria-dropeffect="popup"` wird den Benutzern unterstützender Technologien mitgeteilt, dass es ein Popup-Menü oder Dialogfeld von Ziehoperationen gibt, aus dem der Benutzer wählen kann.

Das Einfügen des Attributs ermöglicht es unterstützenden Technologien, die möglichen Ziehoptionen bereitzustellen, die dem Benutzer der unterstützenden Technologie zur Verfügung stehen, fügt aber keine tatsächliche Funktionalität hinzu.

Es wird erwartet, dass die `aria-dropeffect`-Eigenschaft in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt und als veraltet betrachtet wird.

Typischerweise können Drop-Effekt-Funktionen nur bereitgestellt werden, nachdem ein Objekt für eine Ziehoperation erfasst wurde, da die verfügbaren Drop-Effekt-Funktionen vom gezogenen Objekt abhängen. Daher fügen Sie `aria-dropeffect` im Allgemeinen zu allen potenziellen Zielbereichen hinzu, wenn das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Die folgenden sind die gültigen Token:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel eingefügt.
- `execute`
  - : Eine vom Ziel unterstützte Funktion wird ausgeführt, wobei die Ziehquelle als Eingabe verwendet wird.
- `link`
  - : Eine Referenz oder Abkürzung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird von seinem aktuellen Standort entfernt und in das Ziel eingefügt.
- `none` (Standard)
  - : Es kann keine Operation ausgeführt werden; hebt effektiv die Ziehoperation auf, wenn ein Versuch unternommen wird, auf diesem Objekt abzulegen. Wird ignoriert, wenn mit einem anderen Tokenwert kombiniert; zum Beispiel ist 'none copy' gleichbedeutend mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder Dialogfeld, das dem Benutzer erlaubt, eine der Ziehoperationen (Kopieren, Bewegen, Verknüpfen, Ausführen) und jede andere Ziehfunktionalität, wie Abbrechen, auszuwählen.

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
