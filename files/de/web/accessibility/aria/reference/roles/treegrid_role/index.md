---
title: "ARIA: treegrid-Rolle"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: 96758f3d8ce1e5fbd9d58053bdef103eec1de108
---

Die Rolle `treegrid` kennzeichnet ein Grid, dessen Zeilen wie bei einem `tree` erweitert und reduziert werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Daten-Grid oder eine Tabelle mit tabellarischen Informationen, die bearbeitbar oder interaktiv sind. Ein `treegrid` kombiniert die Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht ein `treegrid` aus Zeilen, Spalten und Grid-Zellen. Wie bei einem `tree` können übergeordnete Knoten in einem `treegrid` erweitert und reduziert werden.

Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, deren Zeilen optional durch [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elemente gruppiert werden. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachfahre eines Zeilenelements oder diesem zugeordnet und ist ein Element mit der Rolle [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Die Rolle `gridcell` wird für alle Zellen verwendet, die keine Spalten- oder Zeilenüberschriften enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um untergeordnete Zeilen ein- oder auszublenden, ist eine **übergeordnete Zeile**. Bei jeder übergeordneten Zeile ist der Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entweder auf dem Zeilenelement oder auf einer Zelle innerhalb der Zeile gesetzt.

Der Zustand `aria-expanded` ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn sie ausgeblendet sind. Elemente, die die Anzeige untergeordneter Zeilen nicht steuern, sollten kein `aria-expanded`-Attribut haben. Das Vorhandensein des Attributs signalisiert assistiven Technologien nämlich, dass das betreffende Element übergeordnet ist.

Wenn Zeilen in Ihrer Grid-Benutzeroberfläche `aria-expanded` unterstützen sollen oder Ihr Grid [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) unterstützen muss, verwenden Sie `treegrid` statt `grid`.

Jede `row` und jede `gridcell` innerhalb einer Zeile sollte per Tastatur fokussierbar sein. Der Tastaturfokus muss für alle diese Nachfahren des Treegrids verwaltet werden. Eine Ausnahme bilden Zellen mit Spaltenüberschriften: Sie müssen nicht fokussierbar sein, wenn sie keine Funktionen wie Sortieren oder Filtern bereitstellen. Jede Zeile und jede Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein – unabhängig davon, ob der Inhalt einzelner Zellen bearbeitbar oder interaktiv ist.

### Treegrids mit Einfach- und Mehrfachauswahl

Wenn Benutzer im `treegrid` nur ein Element für eine Aktion auswählen können, handelt es sich um ein **Treegrid mit Einfachauswahl**. In solchen Treegrids hat das fokussierte Element auch einen mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) festgelegten Auswahlzustand.

Wenn das Treegrid die Auswahl mehrerer Zeilen oder Zellen unterstützt, handelt es sich um ein **Treegrid mit Mehrfachauswahl**. In diesem Fall ist der Auswahlzustand unabhängig vom Fokus. Die visuelle Gestaltung und assistive Technologien müssen zwischen ausgewählten Elementen und dem fokussierten Element unterscheiden können.

Fügen Sie bei Treegrids mit Mehrfachauswahl [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf dem Element mit der Rolle `treegrid` hinzu. Bei allen ausgewählten Zeilen oder Zellen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Bei allen auswählbaren, aber derzeit nicht ausgewählten Zeilen und Zellen ist `aria-selected` auf `false` gesetzt. Fügen Sie das Attribut `aria-selected` nicht bei Zeilen und Zellen hinzu, die nicht einzeln auswählbar sind: Das Vorhandensein des Attributs signalisiert assistiven Technologien, dass die Zeile oder Zelle auswählbar ist.

### Zeilen außerhalb der DOM-Hierarchie

Wenn eine untergeordnete `row` oder `rowgroup` im DOM nicht innerhalb des `treegrid` verschachtelt ist, muss auf dem `treegrid`-Element das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) gesetzt werden. Es muss auf die IDs aller untergeordneten Elemente verweisen, die keine DOM-Nachfahren sind. Wenn Zeilen oder Zellen über `aria-owns` in ein Treegrid eingebunden werden, erscheinen sie für assistive Technologien nach den DOM-Nachfahren des `treegrid`-Elements – es sei denn, die tatsächlichen DOM-Nachfahren des Grids sind ebenfalls im Attribut `aria-owns` aufgeführt.

### Treegrids mit dynamisch geladenen Inhalten

Wenn einige Zeilen oder Spalten nicht im DOM vorhanden sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) zum Einsatz. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Ihre Werte geben die Gesamtzahl der Spalten beziehungsweise Zeilen des vollständig geladenen Grids an. Die Indizes der einzelnen Zeilen und Spalten werden auf den jeweiligen Zellen gesetzt, nicht auf dem `treegrid`-Element.

### Zugänglicher Name, Beschreibung und Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn eine geeignete Beschriftung im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Gibt es also ein Element in der Benutzeroberfläche, das als Beschriftung für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut zum Element mit der Rolle `treegrid` hinzu und setzen Sie seinen Wert auf die `id` des beschriftenden Elements oder der beschriftenden Elemente. Wenn keine sichtbare Beschriftung vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Verwenden Sie nicht beides.

Wenn der Inhalt eine Bildunterschrift oder Beschreibung für das `treegrid` enthält, fügen Sie dem `treegrid`-Element [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu. Der Attributwert ist die `id` des Elements, das die Beschreibung enthält.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen. Eine Ausnahme gilt, wenn der Fokus zwischen diesen Rollen über einen roving tabindex verwaltet wird; in diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen Zustand visuell erkennbar, erzwingen Sie ihn programmatisch und fügen Sie dem `treegrid` selbst das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) hinzu, um assistive Technologien über den deaktivierten Zustand zu informieren.

### Sortierung in Treegrids

Wenn das Treegrid Sortierfunktionen bereitstellt, wird das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) auf den betreffenden Überschriftenzellen gesetzt, nicht auf dem Grid selbst.

### Treegrid-Menüs

Wenn dem `treegrid` ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) zugeordnet ist, das sich bei einem Rechtsklick öffnet, fügen Sie dem `treegrid`-Element [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) hinzu. Dadurch erfahren assistive Technologien, dass dem `treegrid` ein Popup zugeordnet ist. Die Möglichkeit, das Menü per Tastatur und Zeigegerät zu öffnen und darin den Fokus zu setzen, muss mit JavaScript implementiert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen mit Grid-Zellen, Spaltenüberschriften oder Zeilenüberschriften.
- Rolle [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachbilden, kommt innerhalb der Rollen `grid` und `treegrid` vor und muss ein direktes Kind einer `row` sein.
- Rolle [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Zelle in einer Zeile, die Überschrifteninformationen für eine Spalte enthält, ähnlich dem nativen Element {{HTMLElement('th')}} mit Geltungsbereich für eine Spalte.
- Rolle [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Zelle mit Überschrifteninformationen für eine `row` innerhalb einer tabellarischen Struktur.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Bei erweiterbaren Elementen ist der Wert `true` oder `false`. Das Attribut zeigt zugleich an, dass das Element erweiterbar ist, und sollte daher nicht vorhanden sein, wenn es nicht erweitert werden kann.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Gibt an, ob Zelleninhalte in einem Treegrid mit Bearbeitungsfunktionen bearbeitet werden können. Lassen Sie dieses Attribut weg, wenn das Treegrid keine Bearbeitung von Zelleninhalten ermöglicht. Beachten Sie, dass das Erweitern und Reduzieren von Zeilen keine Bearbeitung von Zelleninhalten darstellt. Der auf dem Treegrid gesetzte Wert wird an seine Grid-Zellen weitergegeben und kann für einzelne Grid-Zellen überschrieben werden. Das Attribut informiert lediglich assistive Technologien; es aktiviert oder deaktiviert die Bearbeitung nicht.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Kennzeichnet die Beziehung zwischen einem übergeordneten Element und seinen untergeordneten Elementen, wenn sich diese Beziehung nicht durch die DOM-Hierarchie darstellen lässt.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu beschriften. `aria-labelledby` enthält in der Regel die ID des Elements, das als Titel des Treegrids dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine menschenlesbare Zeichenfolge, die das `treegrid` identifiziert. Wenn eine sichtbare Beschriftung vorhanden ist, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Damit ein Treegrid zugänglich ist, muss der Fokus per Tastatur zwischen den Zeilen und Zellen des Grids bewegt werden können. Wenn der Fokus in das Grid gelangt, kann die erste Zelle oder die erste Zeile fokussiert werden. Ob der Fokus anschließend zur nächsten benachbarten Zelle oder zur nächsten Zeile wechselt, hängt von den Anforderungen des Inhalts ab. Bei manchen Treegrids können Zeilen keinen Fokus erhalten.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Grid den Fokus erhalten hat, beispielsweise nachdem Benutzer den Fokus mit Tab in das Grid bewegt haben.

- <kbd>Enter</kbd>
  - : Wenn nur Zellen fokussiert werden können und sich der Fokus auf der ersten Zelle mit der Eigenschaft `aria-expanded` befindet, werden die untergeordneten Zeilen ein- oder ausgeblendet. Andernfalls wird die Standardaktion der Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die fokussierte Zeile fokussierbare Elemente wie {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wird der Fokus zum nächsten Eingabeelement in der Zeile bewegt. Befindet sich der Fokus auf dem letzten fokussierbaren Element der Zeile, wird er aus dem Treegrid-Widget zum nächsten fokussierbaren Element bewegt.
- <kbd>Right Arrow</kbd>
  - : Befindet sich der Fokus auf einer reduzierten Zeile, wird die Zeile erweitert. Befindet er sich auf einer erweiterten Zeile oder auf einer Zeile ohne untergeordnete Zeilen, wird er zur ersten Zelle der Zeile bewegt. Befindet sich der Fokus auf der äußersten rechten Zelle einer Zeile, bleibt er dort. Bei jeder anderen Zelle wird der Fokus um eine Zelle nach rechts bewegt.
- <kbd>Left Arrow</kbd>
  - : Befindet sich der Fokus auf einer erweiterten Zeile, wird die Zeile reduziert. Befindet er sich auf einer reduzierten Zeile oder auf einer Zeile ohne untergeordnete Zeilen, bleibt er dort. Befindet sich der Fokus auf der ersten Zelle einer Zeile und können Zeilen fokussiert werden, wird er auf die Zeile bewegt. Können Zeilen nicht fokussiert werden, bleibt er auf der ersten Zelle. Bei jeder anderen Zelle wird der Fokus um eine Zelle nach links bewegt.
- <kbd>Down Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird er um eine Zeile nach unten bewegt. In der letzten Zeile bleibt er unverändert. Befindet sich der Fokus auf einer Zelle, wird er um eine Zelle nach unten bewegt. In der untersten Zelle einer Spalte bleibt er unverändert.
- <kbd>Up Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird er um eine Zeile nach oben bewegt. In der ersten Zeile bleibt er unverändert. Befindet sich der Fokus auf einer Zelle, wird er um eine Zelle nach oben bewegt. In der obersten Zelle einer Spalte bleibt er unverändert.
- <kbd>Page Down</kbd>
  - : Befindet sich der Fokus auf einer Zeile oder Zelle, wird er um eine festgelegte Anzahl von Zeilen oder Zellen nach unten bewegt. In der Regel entspricht die Strecke der Höhe des Treegrids. Dabei wird so gescrollt, dass die unterste Zeile der aktuell sichtbaren Zeilen zu einer der ersten sichtbaren Zeilen wird. Befindet sich der Fokus in der letzten Zeile, bleibt er unverändert.
- <kbd>Page Up</kbd>
  - : Befindet sich der Fokus auf einer Zeile oder Zelle, wird er um eine festgelegte Anzahl von Zeilen nach oben bewegt. In der Regel entspricht die Strecke der Höhe des Treegrids. Dabei wird so gescrollt, dass die oberste Zeile der aktuell sichtbaren Zeilen zu einer der letzten sichtbaren Zeilen wird. Befindet sich der Fokus in der ersten Zeile, bleibt er unverändert.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird er zur ersten Zeile bewegt. Befindet er sich bereits in der ersten Zeile, bleibt er unverändert. Befindet sich der Fokus auf einer Zelle, wird er zur ersten Zelle der Zeile bewegt. Befindet er sich bereits dort, bleibt er unverändert.
- <kbd>End</kbd> <kbd>Control + End</kbd></td><td>
  - : Befindet sich der Fokus auf einer Zeile, wird er zur letzten Zeile bewegt. Befindet er sich bereits in der letzten Zeile, bleibt er unverändert. Befindet sich der Fokus auf einer Zelle, wird er zur letzten Zelle der Zeile bewegt. Befindet er sich bereits dort, bleibt er unverändert. Wenn nicht alle Zeilen im DOM vorhanden sind, kann damit die letzte im DOM vorhandene Zeile oder die letzte verfügbare Zeile fokussiert werden, die bei vollständig im DOM vorhandener Datenbank angezeigt würde.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden dafür üblicherweise die folgenden Tasten verwendet.

- <kbd>Control + Space</kbd>
  - : Befindet sich der Fokus auf einer Zeile, werden alle Zellen ausgewählt. Befindet er sich auf einer Zelle, wird die Spalte mit dieser Zelle ausgewählt.
- <kbd>Shift + Space</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird diese Zeile ausgewählt. Befindet er sich auf einer Zelle, wird die Zeile mit dieser Zelle ausgewählt. Wenn das Treegrid eine Spalte mit Checkboxen zur Auswahl von Zeilen enthält, kann diese Tastenkombination auch verwendet werden, um die Checkbox zu aktivieren, wenn sie nicht fokussiert ist.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Right Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zelle, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Shift + Left Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zelle, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Shift + Down Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird die Auswahl auf alle Zellen der nächsten Zeile erweitert. Befindet er sich auf einer Zelle, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Shift + Up Arrow</kbd>
  - : Befindet sich der Fokus auf einer Zeile, wird die Auswahl auf alle Zellen der vorherigen Zeile erweitert. Befindet er sich auf einer Zelle, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen dynamisch weitere Zeilen oder Spalten zum DOM hinzufügen können, bewegen Tastenereignisse für den Anfang oder das Ende des Grids, beispielsweise <kbd>control + End</kbd>, den Fokus möglicherweise zur letzten Zeile im DOM statt zur letzten verfügbaren Zeile der Backend-Daten.

Während Navigationstasten wie die Pfeiltasten den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um beispielsweise eine Combobox zu bedienen oder den Cursor bei der Bearbeitung innerhalb einer Zelle zu bewegen. Wenn Sie diese Funktionalität benötigen, lesen Sie [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

<!--
### Required JavaScript features

## Examples
-->

## Hinweise zur Barrierefreiheit

Alle Zellen müssen den Tastaturfokus erhalten oder ein fokussierbares Element enthalten können. Screenreader befinden sich bei der Interaktion mit dem Grid im Allgemeinen im Anwendungs-Lesemodus und nicht im Dokument-Lesemodus. Im Anwendungsmodus hören Benutzer eines Screenreaders nur fokussierbare Elemente und Inhalte, die diese Elemente beschriften. Wenn Inhalte keinen Fokus erhalten können, übersehen Screenreader-Benutzer möglicherweise Elemente im Treegrid, ohne es zu bemerken.

<!--
## Best Practices

### Prefer HTML
-->

## Spezifikationen

{{Specifications}}
