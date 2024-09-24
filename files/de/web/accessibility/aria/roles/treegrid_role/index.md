---
title: "ARIA: treegrid Rolle"
slug: Web/Accessibility/ARIA/Roles/treegrid_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `treegrid` kennzeichnet ein Element als ein Raster, dessen Zeilen auf die gleiche Weise wie bei einem `tree` erweitert und eingeklappt werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitet oder interaktiv sein können. Ein `treegrid` ist eine Kombination aus den Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Rasterzellen. Wie ein `tree` sind übergeordnete Knoten in einem `treegrid` erweiterbar und einklappbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)-Elemente, eventuell mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme oder gehört zu einem Zeilenelement und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder ein [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)-Element, wobei die Rolle `gridcell` für alle Zellen verwendet wird, die keine Spalten- oder Zeilenheaderinformationen enthalten.

Eine `row`, die erweitert oder eingeklappt werden kann, um eine Menge von Kindzeilen anzuzeigen oder zu verbergen, ist eine **übergeordnete Zeile**. Jede übergeordnete Zeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Status entweder auf das Zeilenelement oder auf eine Zelle in der Zeile gesetzt.

Der `aria-expanded`-Status ist auf `true` gesetzt, wenn die Kindzeilen angezeigt werden, und auf `false`, wenn die Kindzeilen verborgen sind. Elemente, die die Anzeige von Kindzeilen nicht steuern, sollten das `aria-expanded`-Attribut nicht haben, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihr Raster-UI für Zeilen `aria-expanded` erfordert oder wenn Ihr Raster die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) benötigt, verwenden Sie `treegrid` anstelle von `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Treegrid-Nachkommen muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenheader-Zellen, die nicht fokussierbar sein müssen, wenn sie keine Funktionalitäten wie Sortierung oder Filterung bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der einzelne Zellinhalt bearbeitbar oder interaktiv ist.

### Einzelauswahl- und Mehrfachauswahl-Treegrids

Wenn das `treegrid` dem Benutzer erlaubt, nur ein Element für eine Aktion auszuwählen, wird es als **Einzelauswahl**-Treegrid bezeichnet. In Einzelauswahl-Treegrids hat das Element mit Fokus auch einen ausgewählten Status gesetzt mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

Wenn das Treegrid die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Mehrfachauswahl**-Treegrid. Im Mehrfachauswahl-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und die assistiven Technologien müssen zwischen Objekten unterscheiden, die ausgewählt sind, und dem Objekt, das den Fokus hat.

Für Mehrfachauswahl-Treegrids fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) in das Element mit der Rolle `treegrid` ein. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht in Zeilen und Zellen ein, die nicht individuell auswählbar sind, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine Kind-`row` oder `rowgroup` nicht als Nachkomme des `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut, das auf alle IDs der nicht-Nachkommen-Kinder verweist, auf das `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in einem Treegrid eingeschlossen sind, werden sie den assistiven Technologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Rasters sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM enthalten sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) ins Spiel. Die `aria-colcount` und `aria-rowcount` Eigenschaften werden auf dem `treegrid` gesetzt. Die Werte sind die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Grids. Die Indizes für jede Zeile und Spalte werden auf individuellen Zellen gesetzt, nicht auf dem `treegrid`-Element.

### Der zugängliche Name, die Beschreibung und der Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Falls ein passendes Label im Inhalt sichtbar ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Anders gesagt, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut zu dem Element mit der Rolle `treegrid` hinzu, und setzen Sie den Wert des Attributs auf die `id` des beschriftenden Elements oder der beschriftenden Elemente. Falls kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Nicht beides.

Falls der Inhalt eine Überschrift oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) auf dem `treegrid`-Element mit dem Attributwert die `id` des Elements, das die Beschreibung enthält, hinzu.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein roving tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in welchem Fall `aria-activedescendant` nicht verwendet werden sollte.

Falls das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Status visuell erkennbar, programmatisch durchgesetzt, und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attribut auf dem `treegrid` selbst hinzu, um assistive Technologien über seinen deaktivierten Zustand zu informieren.

### Treegrid-Sortierung

Falls das Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut auf die relevanten Headerzellen-Elemente gesetzt, nicht auf das Raster selbst.

### Treegrid-Menüs

Falls das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) hat, das beim Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) auf dem `treegrid`-Element hinzu. Dies informiert assistive Technologien darüber, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit, sowohl für Tastatur- als auch für Zeigegerätenutzer ein Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese-Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Falls ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attribut, um assistive Technologien darüber zu informieren, dass das `treegrid` schreibgeschützt ist. Der Attributwert, wenn auf dem Element mit der `treegrid`-Rolle gesetzt, propagiert sich zu allen `columnheader`, `rowheader` und `gridcell`-Elementen. Dieser globale Wert kann für individuelle `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelnen Elementnachkommen des Treegrids gesetzt wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt bearbeitbar oder nicht bearbeitbar ist, es tut jedoch nichts, um Interaktivität zu aktivieren oder zu deaktivieren. Dies muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut von HTML oder mit JavaScript geschehen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Rasterzellen, Spaltenheadern oder Zeilenheadern.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Rolle
  - : Soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachahmen, wird in `grid` und `treegrid` Rollen gefunden und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Headerinformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenscope.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Headerinformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist, sollte also nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternteil und seinen Kindelementen, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu beschriften. Das `aria-labelledby`-Attribut ist in der Regel die id des Elements, das zur Benennung des Treegrids verwendet wird.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Ein menschenlesbarer Stringwert, der das `treegrid` identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Um ein zugängliches Treegrid zu erstellen, muss der Fokus mit der Tastatur auf Zeilen und Zellen des Rasters bewegt werden können. Der Fokus in das Raster zu bewegen, kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus zur nächsten angrenzenden Zelle oder Zeile geht, hängt von den Inhaltsanforderungen ab, bei einigen Treegrids wird der Fokus nicht auf Zeilen gesetzt.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z.B. nachdem ein Benutzer den Fokus mit Tab auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn ausschließlich Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der Eigenschaft `aria-expanded` ist, werden die Kindzeilen geöffnet oder geschlossen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, verschiebt sich der Fokus auf das nächste Eingabefeld in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, verschiebt sich der Fokus aus dem Treegrid-Widget auf das nächste fokussierbare Element.
- <kbd>Right Arrow</kbd>
  - : Wenn der Fokus auf einer eingeklappten Zeile liegt, wird die Zeile erweitert. Wenn der Fokus auf einer erweiterten Zeile oder auf einer Zeile liegt, die keine Kindzeilen hat, verschiebt sich der Fokus auf die erste Zelle in der Zeile. Wenn der Fokus auf der rechten Zelle einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus eine Zelle nach rechts.
- <kbd>Left Arrow</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile eingeklappt. Wenn der Fokus auf einer eingeklappten Zeile oder auf einer Zeile liegt, die keine Kindzeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und Zeilenfokus unterstützt wird, bewegt sich der Fokus auf die Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus eine Zelle nach links.
- <kbd>Down Arrow</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach unten. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Up Arrow</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach oben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Page Down</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus eine vorgegebene Anzahl von Zeilen oder Zellen nach unten. Normalerweise bewegt es sich nach unten in einem Gegenstück zur Höhe des Treegrids, scrollend, sodass die letzte Zeile im derzeit sichtbaren Satz von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Page Up</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus eine vorgegebene Anzahl von Zeilen nach oben. Normalerweise bewegt es sich nach oben in einem Gegenstück zur Höhe des Treegrids, scrollend, sodass die erste Zeile im derzeit sichtbaren Satz von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur ersten Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>End</kbd> <kbd>Control + End</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur letzten Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile oder auf die letzte verfügbare Zeile zu setzen, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten üblicherweise für diese Funktionen verwendet.

- <kbd>Control + Space</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, werden alle Zellen ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Spalte ausgewählt, die den Fokus enthält.
- <kbd>Shift + Space</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Zeile ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Zeile ausgewählt, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Kontrollkästchen für die Auswahl von Zeilen enthält, kann diese Taste auch als Abkürzung verwendet werden, um das Kästchen zu markieren, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Right Arrow</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Shift + Left Arrow</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Shift + Down Arrow</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der nächsten Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Shift + Up Arrow</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der vorherigen Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Ereignisse, die den Fokus auf den Anfang oder das Ende des Rasters bewegen, wie z.B. <kbd>Control + End</kbd>, den Fokus auf die letzte Zeile im DOM anstelle der letzten verfügbaren Zeile in den Back-End-Daten bewegen.

Während Navigationstasten wie Pfeiltasten den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um etwas wie ein Kombinationsfeld zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, siehe [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Barrierefreiheitserwägungen

Es ist wichtig, dass alle Zellen Tastaturfokus erhalten oder enthalten können, da Bildschirmlesegeräte im Allgemeinen im Anwendungsmodus und nicht im Dokumentmodus sind, wenn Benutzer mit dem Raster interagieren. Während des Anwendungsmodus hört ein Benutzer eines Bildschirmlesegerätes nur fokussierbare Elemente und den Inhalt, der fokussierbare Elemente beschriftet. Wenn Inhalt keinen Fokus erhalten kann, können Benutzer eines Bildschirmlesegerätes Elemente im Treegrid unbemerkt übersehen.

## Spezifikationen

{{Specifications}}

## Siehe auch
