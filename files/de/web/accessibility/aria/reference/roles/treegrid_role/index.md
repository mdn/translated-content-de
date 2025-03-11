---
title: "ARIA: treegrid-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

Die `treegrid`-Rolle identifiziert ein Element als ein Gitter, dessen Zeilen auf die gleiche Weise wie bei einem `Baum` erweitert und reduziert werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Gitterzellen. Wie ein `Baum` sind Elternknoten in einem `treegrid` erweiterbar und reduzierbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme von oder im Besitz eines Zeilenelements und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role), oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Element, wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenüberschrifteninformationen enthalten.

Eine `Zeile`, die erweitert oder reduziert werden kann, um einen Satz von untergeordneten Zeilen anzuzeigen oder auszublenden, ist eine **übergeordnete Zeile**. Jede übergeordnete Zeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand entweder am Zeilenelement oder an einer in der Zeile enthaltenen Zelle gesetzt.

Der Zustand `aria-expanded` ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn die untergeordneten Zeilen ausgeblendet sind. Elemente, die keine Anzeige von untergeordneten Zeilen steuern, sollten nicht das `aria-expanded`-Attribut haben, da die Anwesenheit des Attributs assistiven Technologien signalisiert, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihr Gitter-UI Zeilen erfordert, die `aria-expanded` unterstützen, oder wenn Ihr Gitter die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte per Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Treegrid-Nachkommen muss verwaltet werden. Die Ausnahme zu dieser Regel sind Spaltenkopfzellen, die nicht fokussierbar sein müssen, wenn sie keine Funktionalität wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt einzelner Zellen bearbeitbar oder interaktiv ist.

### Einzelselektion- und Mehrfachselektion-Treegrids

Wenn das `treegrid` dem Benutzer erlaubt, nur ein einziges Element für eine Aktion auszuwählen, wird es als **Einzelselektions-Treegrid** bezeichnet. In Einzelselektions-Treegrids hat das fokussierte Element auch einen ausgewählten Zustand, der mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzt ist.

Wenn das Treegrid die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Mehrfachselektion-Treegrid**. Im Mehrfachselektion-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen Elementen unterscheiden, die ausgewählt sind, und dem Element, auf das fokussiert ist.

Für Mehrfachselektion-Treegrids geben Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) am Element mit der `treegrid`-Rolle an. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht zu Zeilen und Zellen hinzu, die nicht einzeln auswählbar sind, da das Vorhandensein des Attributs assistiven Technologien signalisiert, dass die Zeile oder die Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine untergeordnete `row` oder `rowgroup` nicht innerhalb des `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut, das alle IDs der nicht-Nachkommen-Kinder referenziert, am `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein Treegrid aufgenommen werden, werden sie assistiven Technologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Grids sind auch im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und dynamisch beim Scrollen geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) ins Spiel. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden am `treegrid` gesetzt. Die Werte sind die Gesamtzahl der Spalten bzw. Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf individuellen Zellen gesetzt, nicht auf dem `treegrid`-Element.

### Der zugängliche Name, die Beschreibung und der Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut dem Element mit der Rolle `treegrid` hinzu und setzen Sie den Wert des Attributs auf die `id` des beschriftenden Elements oder der Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beide verwenden.

Wenn der Inhalt eine Überschrift oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) am `treegrid`-Element hinzu mit dem Attributwert, der die `id` des Elements, das die Beschreibung enthält, ist.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein wandernder Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in welchem Fall `aria-activedescendant` nicht verwendet werden sollte.

Wenn das `treegrid` deaktiviert ist, stellen Sie sicher, dass dieser deaktivierte Zustand visuell erkennbar, programmatisch durchgesetzt wird und das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut am `treegrid` selbst enthalten ist, um assistiven Technologien seinen deaktivierten Zustand mitzuteilen.

### Treegrid-Sortierung

Wenn das Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf den relevanten Headerzellen-Elementen, nicht auf dem Grid selbst, enthalten.

### Treegrid-Menüs

Wenn das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das beim Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) am `treegrid`-Element hinzu. Dies informiert assistive Technologien, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit für sowohl Tastatur- als auch Zeigereingabegeräte-Benutzer, das Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese Treegrids

Standardmäßig werden Treegrids als bearbeitbar angenommen. Wenn ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut, um assistiven Technologien mitzuteilen, dass das `treegrid` schreibgeschützt ist. Der Attributwert, wenn er am Element mit der `treegrid`-Rolle gesetzt ist, wird auf alle `columnheader`, `rowheader` und `gridcell`-Elemente weitergegeben. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` an individuellen Treegrid-Element-Nachkommen enthalten ist.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` lediglich assistive Technologien, dass der Inhalt nicht bearbeitbar ist oder nicht, es ermöglicht oder deaktiviert jedoch keine Interaktivität. Das muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut von HTML oder mit JavaScript gemacht werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen von Gitterzellen, Spalten- oder Zeilenkopfzeilen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Rolle
  - : Soll die Funktionalität des HTML-{{HTMLElement('td')}}-Elements nachahmen, wird in den Rollen `grid` und `treegrid` gefunden und muss das direkte Kind einer `Zeile` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-Rolle
  - : Eine Zelle in einer Zeile, die Headerinformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenumfang.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)-Rolle
  - : Eine Zelle, die Headerinformationen für eine `Zeile` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist, also sollte nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Eltern- und seinen untergeordneten Elementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die id des Elements, das zur Titelgebung des Treegrids verwendet wird.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgenwert, der das `treegrid` identifiziert. Wenn ein sichtbares Label vorhanden ist, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Es muss möglich sein, sich mit der Tastatur zwischen den Zeilen und Zellen des Gitters zu bewegen, um ein zugängliches Treegrid zu erstellen. Das Verschieben des Fokus in das Gitter kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus zur nächsten angrenzenden Zelle oder Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids den Fokus nicht auf Zeilen zulassen.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Gitter den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit der Tab-Taste auf das Gitter verschoben hat.

- <kbd>Eingabetaste</kbd>
  - : Wenn nur der Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt die untergeordneten Zeilen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wird der Fokus auf das nächste Eingabefeld in der Zeile verschoben. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, wird der Fokus aus dem Treegrid-Widget zum nächsten fokussierbaren Element verschoben.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn der Fokus auf einer reduzierten Zeile liegt, wird die Zeile erweitert. Wenn der Fokus auf einer erweiterten Zeile liegt oder sich auf einer Zeile befindet, die keine untergeordneten Zeilen hat, wird der Fokus auf die erste Zelle in der Zeile verschoben. Wenn der Fokus auf der rechtesten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus eine Zelle nach rechts verschoben.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile reduziert. Wenn der Fokus auf einer reduzierten Zeile oder auf einer Zeile liegt, die keine untergeordneten Zeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, wird der Fokus auf die Zeile verschoben. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach links verschoben.
- <kbd>Pfeil nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus eine Zeile nach unten verschoben. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach unten verschoben. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Pfeil nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus eine Zeile nach oben verschoben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach oben verschoben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus um eine vorgegebene Anzahl von Zeilen oder Zellen nach unten. In der Regel bewegt er sich um die Höhe des Treegrids nach unten und scrollt so, dass die unterste Zeile im aktuell sichtbaren Satz von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus um eine vorgegebene Anzahl von Zeilen nach oben. In der Regel bewegt er sich um die Höhe des Treegrids nach oben und scrollt so, dass die oberste Zeile im aktuell sichtbaren Satz von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Strg + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt er sich zum ersten Zeilen. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Strg + Ende</kbd></td><td>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur letzten Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile oder die letzte verfügbare Zeile zu setzen, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden üblicherweise die folgenden Tasten für diese Funktionen verwendet.

- <kbd>Strg + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Spalte aus, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Zeile aus, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Kontrollkästchen zur Auswahl von Zeilen enthält, kann diese Taste auch als Abkürzung zum Aktivieren des Kästchens verwendet werden, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Strg + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Pfeil nach rechts</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert er die Auswahl um eine Zelle nach rechts.
- <kbd>Shift + Pfeil nach links</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert er die Auswahl um eine Zelle nach links.
- <kbd>Shift + Pfeil nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert er die Auswahl auf alle Zellen in der nächsten Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert er die Auswahl um eine Zelle nach unten.
- <kbd>Shift + Pfeil nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert er die Auswahl auf alle Zellen in der vorherigen Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert er die Auswahl um eine Zelle nach oben.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Tastenevents, die den Fokus an den Anfang oder das Ende des Gitters verschieben, wie z. B. <kbd>Strg + Ende</kbd>, den Fokus auf die letzte Zeile im DOM und nicht auf die letzte verfügbare Zeile in den Backend-Daten verschieben.

Während Navigationstasten, wie Pfeiltasten, den Fokus von Zelle zu Zelle verschieben, sind sie nicht verfügbar, um z. B. eine Kombinationsbox zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, siehe [Bearbeitung und Navigation innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Barrierefreiheitsbedenken

Es ist wichtig, dass alle Zellen Tastaturfokus empfangen oder enthalten können, da Bildschirmleseprogramme im Allgemeinen im Anwendungslesemodus und nicht im Lesemodus für Dokumente sind, wenn Benutzer mit dem Gitter interagieren. Im Anwendungsmodus hört ein Benutzer eines Bildschirmleseprogramms nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente beschriften. Wenn Inhalte keinen Fokus erhalten können, könnten Benutzer von Bildschirmleseprogrammen möglicherweise unwissentlich Elemente im Treegrid übersehen.

## Spezifikationen

{{Specifications}}
