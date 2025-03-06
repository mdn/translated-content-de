---
title: aria-dropeffect
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-dropeffect`-Attribut gibt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Ziel fallen gelassen wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 veraltet, gibt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Ziel fallen gelassen wird. Das globale `aria-dropeffect`-Attribut bietet Benutzern von unterstützenden Technologien dieselben Informationen, die auch über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) an sehende Benutzer über das Drop-Effekt-Icon bereitgestellt werden.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch das Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable)-Attributs, das Teil der HTML5 [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ist, mit einem [`dragstart` Event-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann auch jeder DOM-Knoten zum Ziehen aktiviert werden.

Wenn ein Zieh-Ereignis auftritt, wird ein transparentes Bild des gezogenen Elements generiert, das dem Zeiger des Benutzers während des Ziehens folgt. Das Standardbild kann durch jedes Bild mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) ersetzt werden. Neben dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft, die verwendet werden kann, um das visuelle Feedback zu steuern, das der Benutzer während eines Drag-and-Drop-Vorgangs erhält. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Benutzern von unterstützenden Technologien dasselbe Feedback zu geben, das sehenden Benutzern über die `dataTransfer.dropEffect`-Eigenschaft bereitgestellt wird.

`dropeffect` definiert, welchen Cursor der Browser während des Ziehens anzeigt, und wird auf dem Element gesetzt, auf das das Element fallen gelassen werden darf. Während des Zieh-Vorgangs, wenn das ziehbare Element über verschiedene Drop-Bereiche gezogen wird, sollten die Zieh-Effekte - sowohl `dataTransfer.dropeffect` als auch `aria-dropeffect` - geändert werden, um den Typ der Operation anzuzeigen, die erfolgen wird, wenn das gezogene Element freigegeben wird.

Mehr als ein Drop-Effekt kann für ein bestimmtes Element unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Zu den Funktionen gehören `copy`, `execute`, `link` und `move`. Der Standardwert ist `none`, was bedeutet, dass keine Funktionalität in der Anwendung unterstützt wird. Durch das Setzen von `aria-dropeffect="popup"` wird Benutzern von unterstützenden Technologien mitgeteilt, dass es ein Popup-Menü oder einen Dialog mit Zieh-Operationen gibt, aus dem der Benutzer wählen kann.

Das Einfügen des Attributs ermöglicht es unterstützenden Technologien, die möglichen Zieh-Optionen an den Benutzer der unterstützenden Technologie zu übermitteln, fügt jedoch keine tatsächliche Funktionalität hinzu.

Die `aria-dropeffect`-Eigenschaft soll in einer zukünftigen Version von WAI-ARIA durch ein neues Feature ersetzt werden und gilt als veraltet.

In der Regel können Drop-Effekt-Funktionen nur bereitgestellt werden, wenn ein Objekt für eine Zieh-Operation gegriffen wurde, da die verfügbaren Drop-Effekt-Funktionen vom gezogenen Objekt abhängen. Daher werden Sie `aria-dropeffect` im Allgemeinen auf alle potenziellen Drop-Ziele hinzufügen, wenn das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Folgende sind die gültigen Tokens:

- `copy`
  - : Eine Kopie des Quellobjekts wird in das Ziel eingefügt.
- `execute`
  - : Eine vom Drop-Ziel unterstützte Funktion wird ausgeführt, wobei das Zieh-Objekt als Eingabe verwendet wird.
- `link`
  - : Eine Referenz oder Verknüpfung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird aus seiner aktuellen Position entfernt und in das Ziel eingefügt.
- `none` (Standard)
  - : Keine Operation kann ausgeführt werden; verwirft effektiv die Zieh-Operation, wenn ein Versuch unternommen wird, auf diesem Objekt abzulegen. Wird ignoriert, wenn es mit einem anderen Tokenwert kombiniert wird; zum Beispiel ist 'none copy' gleichwertig mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder einen Dialog, der es dem Benutzer ermöglicht, eine der Zieh-Operationen (kopieren, verschieben, verknüpfen, ausführen) und jede andere Zieh-Funktionalität, wie z. B. Abbrechen, auszuwählen.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [HTML globales Attribut `draggable`](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
