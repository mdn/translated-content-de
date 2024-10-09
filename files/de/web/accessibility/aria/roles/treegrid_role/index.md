---
title: "ARIA: treegrid role"
slug: Web/Accessibility/ARIA/Roles/treegrid_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die `treegrid`-Rolle identifiziert ein Element als ein Raster, dessen Zeilen auf die gleiche Weise erweitert und reduziert werden können wie bei einem `tree`.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Gitterzellen. Wie ein `tree` sind Elternknoten in einem `treegrid` erweiterbar und reduzierbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachfahre oder wird von einem Reihen-Element besessen und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)-Element, wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Informationen enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um eine Gruppe von Kinderzeilen anzuzeigen oder zu verbergen, ist eine **Elternzeile**. Jede Elternzeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Zustand entweder am Reihen-Element selbst oder an einer in der Reihe enthaltenen Zelle gesetzt.

Der `aria-expanded`-Zustand wird auf `true` gesetzt, wenn die Kinderzeilen angezeigt werden, und auf `false`, wenn die Kinderzeilen ausgeblendet sind. Elemente, die die Anzeige von Kinderzeilen nicht steuern, sollten nicht das `aria-expanded`-Attribut haben, da die Anwesenheit des Attributs Assistive Technologies anzeigt, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihre Raster-UI Zeilen erfordert, die `aria-expanded` unterstützen, oder wenn Ihr Raster die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) erfordert, verwenden Sie `treegrid` anstelle von `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Treegrid-Nachkommen muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenheaderzellen, die nicht fokussierbar sein müssen, wenn sie keine Funktionalität wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob einzelne Zellinhalte bearbeitbar oder interaktiv sind.

### Einzel- und Mehrfachauswahl-Treegrids

Wenn das `treegrid` es dem Benutzer erlaubt, nur ein Element für eine Aktion auszuwählen, wird es als **Einzelselektions-Treegrid** bezeichnet. In Einzelselektions-Treegrids wird das Element mit Fokus auch mit dem ausgewählten Zustand [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) versehen.

Wenn das Treegrid die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Mehrfachselektions-Treegrid**. Im Mehrfachselektions-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und Assistive Technologies müssen zwischen den ausgewählten Elementen und dem Element, das den Fokus hat, unterscheiden.

Für Mehrfachselektions-Treegrids fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) auf dem Element mit der `treegrid`-Rolle hinzu. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die wählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht auf Zeilen und Zellen ein, die nicht individuell wählbar sind, da die Anwesenheit des Attributs Assistive Technologies anzeigt, dass die Zeile oder Zelle wählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine Kinder-`row` oder eine `rowgroup` nicht im DOM innerhalb des `treegrid` verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attribut, das auf alle IDs der nicht-nachfahren Kinder verweist, auf dem `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein Treegrid aufgenommen werden, werden sie Assistive Technologies nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Grids sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und dynamisch beim Scrollen geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) ins Spiel. Die `aria-colcount`- und `aria-rowcount`-Eigenschaften werden auf dem `treegrid` gesetzt. Die Werte sind die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Reihe und Spalte werden auf einzelnen Zellen, nicht auf dem `treegrid`-Element gesetzt.

### Der zugängliche Name, die Beschreibung und der Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn ein entsprechendes Etikett im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Etikett für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `treegrid` hinzu und setzen Sie den Wert des Attributs auf die `id` des etikettierenden Elements oder der Elemente. Wenn kein sichtbares Etikett vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Niemals beides.

Wenn der Inhalt eine Überschrift oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) auf dem `treegrid`-Element hinzu, wobei der Attributwert die `id` des Elements ist, das die Beschreibung enthält.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein schwebender Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt, und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attribut auf dem `treegrid` selbst hinzu, um Assistive Technologies über den deaktivierten Zustand zu informieren.

### Treegrid-Sortierung

Wenn das Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut auf relevanten Headerzellen-Elementen hinzugefügt, nicht auf dem Grid selbst.

### Treegrid-Menüs

Wenn das `treegrid` über ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) verfügt, das sich bei einem Rechtsklick öffnet, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) auf dem `treegrid`-Element hinzu. Dies informiert Assistive Technologies, dass das `treegrid` ein zugehöriges Popup hat. Die Möglichkeit, das Menü sowohl für Tastatur- als auch Zeigereingabegeräte zu öffnen und den Fokus zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese-Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Wenn ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attribut, um Assistive Technologies darüber zu informieren, dass das `treegrid` schreibgeschützt ist. Der Attributwert, wenn er auf dem Element mit der `treegrid`-Rolle gesetzt ist, wird auf alle `columnheader`-, `rowheader`- und `gridcell`-Elemente übertragen. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelne Treegrid-Element-Nachkommen einbezogen wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur Assistive Technologies darüber, dass der Inhalt bearbeitbar oder nicht bearbeitbar ist, tut aber nichts, um die Interaktivität zu aktivieren oder zu deaktivieren. Dies muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut von HTML oder mit JavaScript erfolgen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) Rolle
  - : Eine Reihe von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Gitterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Reihen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Rolle
  - : Gedacht, um die Funktionalität des HTML-{{HTMLElement('td')}}-Elements nachzuahmen, wird in `grid`- und `treegrid`-Rollen gefunden und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Reihe, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenscope.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Deutet auch darauf hin, dass das Element erweiterbar ist, sollte also nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem übergeordneten Element und seinen Kindelementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das zum Betiteln des Treegrids verwendet wird.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgenwert, der das `treegrid` identifiziert. Wenn ein sichtbares Etikett vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden.

### Tastaturinteraktionen

Um ein zugängliches Treegrid zu erstellen, muss die Möglichkeit implementiert werden, den Fokus mit der Tastatur zwischen den Zeilen und Zellen des Rasters zu verschieben. Das Verschieben des Fokus in das Raster kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus auf die benachbarte Zelle oder die Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids keinen Fokus auf Zeilen geben.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit der Tab-Taste in das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn der Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt die Kindzeilen. Andernfalls führt die Aktion standardmäßig für die Zelle aus.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, verschiebt sich der Fokus auf die nächste Eingabe in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, verschiebt sich der Fokus aus dem Treegrid-Widget zum nächsten fokussierbaren Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn der Fokus auf einer reduzierten Zeile liegt, erweitern Sie die Zeile. Wenn der Fokus auf einer erweiterten Zeile oder einer Zeile liegt, die keine Kindzeilen hat, verschiebt sich der Fokus auf die erste Zelle in der Zeile. Wenn der Fokus auf der rechtsgelegenen Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, verschiebt sich der Fokus um eine Zelle nach rechts.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, reduzieren Sie die Zeile. Wenn der Fokus auf einer reduzierten Zeile oder einer Zeile liegt, die keine Kindzeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle einer Zeile liegt und der Zeilenfokus unterstützt wird, verschiebt sich der Fokus auf die Zeile. Wenn der Fokus auf der ersten Zelle einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, verschiebt sich der Fokus um eine Zelle nach links.
- <kbd>Pfeil nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus um eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus um eine Zelle nach unten. Wenn der Fokus auf der untersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Pfeil nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus um eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus um eine Zelle nach oben. Wenn der Fokus auf der obersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild ⬇️️</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, verschiebt sich der Fokus um eine vorher bestimmte Anzahl von Reihen oder Zellen nach unten. Normalerweise bewegt er sich um die Höhe des Treegrids nach unten und scrollt, sodass die unterste Reihe im aktuell sichtbaren Set von Zeilen zu einer der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild ⬆️️</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, verschiebt sich der Fokus um eine vorher bestimmte Anzahl von Reihen. Normalerweise bewegt er sich um die Höhe des Treegrids nach oben und scrollt, sodass die oberste Reihe im aktuell sichtbaren Set von Zeilen zu einer der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus auf die erste Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus auf die erste Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Control + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus auf die letzte Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus auf die letzte Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile zu setzen oder auf die letzte verfügbare Zeile, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Control + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er alle Zellen. Wenn der Fokus auf einer Zelle liegt, wählt er die Spalte aus, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Zeile aus, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Checkboxen zum Auswählen von Zeilen enthält, kann diese Taste auch als Tastenkombination zum Überprüfen des Kästchens verwendet werden, wenn sich der Fokus nicht auf der Checkbox befindet.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Pfeil nach rechts</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach rechts.
- <kbd>Shift + Pfeil nach links</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach links.
- <kbd>Shift + Pfeil nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert die Auswahl auf alle Zellen in der nächsten Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach unten.
- <kbd>Shift + Pfeil nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert die Auswahl auf alle Zellen in der vorherigen Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach oben.

Falls Navigationsfunktionen dynamisch weitere Zeilen oder Spalten zum DOM hinzufügen können, können Tastenereignisse, die den Fokus an den Anfang oder das Ende des Rasters verschieben, wie <kbd>control + Ende</kbd>, den Fokus auf die letzte im DOM vorhandene Zeile verschieben, anstatt auf die letzte verfügbare Zeile in den Backend-Daten.

Während Navigations-Tasten, wie Pfeiltasten, den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um etwas wie einen Kombinationsfeld-Operator zu bedienen oder den Bearbeitungscursor innerhalb einer Zelle zu bewegen. Wenn diese Funktionalität erforderlich ist, siehe [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

<!--
### Erforderliche JavaScript-Funktionen

## Beispiele
-->

## Barrierefreiheitserwägungen

Es ist wichtig, dass alle Zellen in der Lage sind, den Tastaturfokus zu erhalten oder zu enthalten, da Bildschirmleseprogramme sich im Allgemeinen im Anwendungslesemodus befinden, anstatt im Dokumentlesemodus, wenn Benutzer mit dem Raster interagieren. Im Anwendungsmodus hört ein Benutzer eines Bildschirmleseprogramms nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente kennzeichnen. Wenn Inhalte keinen Fokus erhalten können, können Benutzer von Bildschirmleseprogrammen möglicherweise unbemerkt an Elementen im Treegrid vorbeigehen.

<!--
## Best Practices

### HTML bevorzugen
-->

## Spezifikationen

{{Specifications}}

## Siehe auch
