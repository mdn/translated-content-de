---
title: aria-dropeffect
slug: Web/Accessibility/ARIA/Attributes/aria-dropeffect
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-dropeffect`-Attribut gibt an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Ziel fallen gelassen wird. {{deprecated_inline}}

## Beschreibung

In ARIA 1.1 veraltet, gibt die `aria-dropeffect`-Eigenschaft an, welche Funktionen ausgeführt werden können, wenn ein gezogenes Objekt auf das Ziel fallen gelassen wird. Das globale `aria-dropeffect`-Attribut bietet Nutzern von unterstützenden Technologien dieselben Informationen, die siteden Nutzern über das [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Symbol bereitgestellt werden.

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch das Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable) Attributs, das Teil der HTML5 [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ist, zusammen mit einem [`dragstart`-Ereignishandler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jedes DOM-Element ebenfalls ziehbar gemacht werden.

Wenn ein Zieh-Ereignis auftritt, wird ein halbtransparentes Bild des gezogenen Elements erzeugt, das dem Zeiger des Nutzers während des Ziehens folgt. Das Standardbild kann mit [`setDragImage`](/de/docs/Web/API/DataTransfer/setDragImage) in jedes Bild geändert werden. Neben dem Standardbild, das das gezogene Element identifiziert, gibt es eine [`dataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft, die verwendet werden kann, um die visuelle Rückmeldung zu steuern, die der Nutzer während einer Drag-and-Drop-Operation erhält. Die `aria-dropeffect`-Eigenschaft sollte verwendet werden, um Nutzern von unterstützenden Technologien dieselbe Rückmeldung zu geben, die siteden Nutzern über die `dataTransfer.dropEffect`-Eigenschaft bereitgestellt wird.

`dropeffect` definiert, welchen Cursor der Browser während des Ziehens anzeigt, und wird auf dem Element gesetzt, auf das das Element fallen gelassen werden kann. Während der Zieh-Operation, wenn das ziehbare Element über verschiedene Ablageflächen gezogen wird, sollten sowohl die Zieh-Effekte, das `dataTransfer.dropeffect` als auch das `aria-dropeffect`, geändert werden, um die Art der Operation anzuzeigen, die erfolgen wird, wenn das gezogene Element freigegeben wird.

Mehr als ein Ablageeffekt kann für ein gegebenes Element unterstützt werden. Daher ist der Wert des `aria-dropeffect`-Attributs eine durch Leerzeichen getrennte Liste von Funktionen. Zu den Funktionen gehören `copy`, `execute`, `link` und `move`. Der Standardwert ist `none`, was bedeutet, dass im Anwendungsprogramm keine unterstützte Funktionalität vorhanden ist. Das Setzen von `aria-dropeffect="popup"` informiert Nutzer unterstützender Technologien, dass ein Popup-Menü oder Dialogfeld mit Zieh-Operationen zur Auswahl bereitsteht.

Das Einfügen des Attributs gibt unterstützenden Technologien die Möglichkeit, die möglichen Ziehoptionen an den Nutzer der unterstützenden Technologie zu übermitteln, fügt jedoch keine tatsächliche Funktionalität hinzu.

Die `aria-dropeffect`-Eigenschaft soll in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt werden und gilt als veraltet.

In der Regel können Ablageeffekt-Funktionen nur bereitgestellt werden, sobald ein Objekt für eine Zieh-Operation ergriffen wurde, da die verfügbaren Ablageeffekt-Funktionen vom gezogenen Objekt abhängen. Daher fügen Sie in der Regel `aria-dropeffect` allen potenziellen Ablagezielen hinzu, wenn das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis ausgelöst wird.

## Werte

Der Wert ist eine durch Leerzeichen getrennte Liste möglicher Aktionen. Die folgenden sind die gültigen Token:

- `copy`
  - : Eine Kopie des Quellobjektes wird in das Ziel abgelegt.
- `execute`
  - : Eine vom Ablageziel unterstützte Funktion wird ausgeführt, wobei das Zieh-Objekt als Eingabe dient.
- `link`
  - : Eine Referenz oder Verknüpfung zum gezogenen Objekt wird im Zielobjekt erstellt.
- `move`
  - : Das Quellobjekt wird von seinem aktuellen Ort entfernt und in das Ziel abgelegt.
- `none` (Standard)
  - : Keine Operation kann ausgeführt werden; bricht effektiv die Ziehoperation ab, wenn versucht wird, auf diesem Objekt abzulegen. Wird ignoriert, wenn mit einem anderen Tokenwert kombiniert; zum Beispiel ist 'none copy' gleichbedeutend mit einem 'copy'-Wert.
- `popup`
  - : Es gibt ein Popup-Menü oder Dialog, das es dem Benutzer ermöglicht, eine der Zieh-Operationen (kopieren, verschieben, verknüpfen, ausführen) und jede andere Zieh-Funktionalität, wie Abbrechen, auszuwählen.

## Zugehörige Rollen

Verwendet in **ALLE** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [HTML globales `draggable` Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
