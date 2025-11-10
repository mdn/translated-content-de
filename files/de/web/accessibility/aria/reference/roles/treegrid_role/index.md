---
title: "ARIA: treegrid Rolle"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die `treegrid`-Rolle identifiziert ein Element als ein Raster, dessen Zeilen auf dieselbe Weise wie bei einem `tree` erweitert und eingeklappt werden können.

## Beschreibung

Eine `treegrid` ist ein hierarchisches Datengitter oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitbar oder interaktiv sind. Eine `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht die `treegrid` aus Zeilen, Spalten und Rasterzellen. Wie ein `tree` sind Elternelemente in einer `treegrid` erweiterbar und einklappbar. Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme oder im Besitz eines Zeilenelements und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-, [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)- oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Element, wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Informationen enthalten.

Eine `row`, die erweitert oder eingeklappt werden kann, um eine Reihe von untergeordneten Zeilen anzuzeigen oder zu verbergen, ist eine **Elternzeile**. Jede Elternzeile hat den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle gesetzt.

Der `aria-expanded`-Zustand ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn die untergeordneten Zeilen verborgen sind. Elemente, die die Anzeige von untergeordneten Zeilen nicht steuern, sollten das `aria-expanded`-Attribut nicht haben, da die Präsenz des Attributs assistiven Technologien anzeigt, dass das Element ein Elternteil ist.

Wenn Ihre Raster-Benutzeroberfläche Zeilen mit Unterstützung für `aria-expanded` erfordert oder wenn Ihr Raster die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) benötigt, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und die Tastaturfokussierung für alle diese Treegrid-Nachkommen muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenkopfzeilen, die nicht fokussierbar sein müssen, wenn sie keine Funktionen wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der individuelle Zellinhalt bearbeitbar oder interaktiv ist.

### Einzel- und Mehrfachauswahl in Treegrids

Wenn die `treegrid` dem Benutzer erlaubt, nur ein Element für eine Aktion auszuwählen, wird sie als **Einzel-Auswahl**-Treegrid bezeichnet. In Einzel-Auswahl-Treegrids hat das fokussierte Element auch einen ausgewählten Zustand mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn die Treegrid die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um eine **Mehrfach-Auswahl**-Treegrid. In der Mehrfachauswahl-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen ausgewählten Elementen und dem Element, das den Fokus hat, unterscheiden.

Für Mehrfachauswahl-Treegrids wird auf dem Element mit der `treegrid`-Rolle [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) gesetzt. Alle ausgewählten Zeilen oder Zellen haben `aria-selected` auf `true` gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Setzen Sie das `aria-selected`-Attribut nicht auf Zeilen und Zellen, die nicht individuell auswählbar sind, da das Vorhandensein des Attributs assistiven Technologien anzeigt, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, bei denen eine untergeordnete `row` oder `rowgroup` nicht im `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut, das alle IDs der nicht-Nachkommen-Kinder referenziert, auf dem `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in eine Treegrid eingeschlossen werden, werden sie assistiven Technologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Grids sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) ins Spiel. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf der `treegrid` gesetzt. Die Werte sind die Gesamtzahl der Spalten und Zeilen des vollständig geladenen Grids. Die Indizes für jede Zeile und Spalte werden auf individuellen Zellen und nicht auf dem `treegrid`-Element gesetzt.

### Der zugängliche Name, die Beschreibung und der Fokus einer Treegrid

Das Element mit der `treegrid`-Rolle muss einen zugänglichen Namen haben. Wenn ein geeigneter Beschriftungstext im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Anders ausgedrückt, wenn es ein Element in der Benutzeroberfläche gibt, das als Beschriftung für die Treegrid dient, fügen Sie `aria-labelledby` als Attribut an das Element mit der `treegrid`-Rolle hinzu und setzen den Attributwert auf die `id` des betitelnden Elements oder der Elemente. Wenn keine sichtbare Beschriftung vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beide.

Wenn der Inhalt eine Beschriftung oder Beschreibung für die `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf dem `treegrid`-Element hinzu, wobei der Attributwert die `id` des Elements ist, das die Beschreibung enthält.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` referenzieren, es sei denn, ein beweglicher Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn die `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut auf der `treegrid` selbst hinzu, um assistive Technologien über ihren deaktivierten Zustand zu informieren.

### Sortierung in Treegrids

Wenn die Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf den entsprechenden Kopfzeilen-Zellenelementen und nicht auf dem Raster selbst hinzugefügt.

### Menüs in Treegrids

Wenn die `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das bei einem Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) auf dem `treegrid`-Element hinzu. Dies informiert assistive Technologien darüber, dass die `treegrid` ein zugeordnetes Pop-up hat. Die Möglichkeit, sowohl für Tastatur- als auch für Zeigereingabegeräte-Benutzer das Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese-Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Wenn eine Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut, um assistiven Technologien mitzuteilen, dass die `treegrid` schreibgeschützt ist. Der Attributwert, wenn er auf dem Element mit der `treegrid`-Rolle gesetzt ist, propagiert sich auf alle `columnheader`, `rowheader` und `gridcell`-Elemente. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelne Nachkommen-Elemente der Treegrid gesetzt wird.

Wie bei allen ARIA-Attributen informiert die Hinzufügung von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt bearbeitbar ist oder nicht, tut aber nichts, um die Interaktivität zu ermöglichen oder zu deaktivieren. Das muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut von HTML oder mit JavaScript erfolgen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Rasterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Rolle
  - : Soll die Funktionalität des HTML-{{HTMLElement('td')}}-Elements nachahmen, ist in `grid` und `treegrid`-Rollen zu finden und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist, daher sollte es nicht vorhanden sein, wenn das Element nicht erweiterbar ist.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternelement und seinen Kinderelementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um die `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das verwendet wird, um die Treegrid zu betiteln.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die `treegrid` identifiziert. Wenn es eine sichtbare Beschriftung gibt, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Die Möglichkeit, den Fokus mit der Tastatur zwischen den Zeilen und Zellen des Rasters zu bewegen, muss implementiert werden, um eine zugängliche Treegrid zu erstellen. Das Bewegen des Fokus in das Raster kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus auf die nächste angrenzende Zelle oder die Zeile geht, hängt von den Content-Anforderungen ab, wobei einige Treegrids keinen Fokus auf Zeilen bieten.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z.B. nachdem ein Benutzer den Fokus mit Tab auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn nur der Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, werden die untergeordneten Zeilen geöffnet oder geschlossen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile mit dem Fokus fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, bewegt sich der Fokus zum nächsten Eingabefeld in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, bewegt sich der Fokus aus dem Treegrid-Widget zum nächsten fokussierbaren Element.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Wenn der Fokus auf einer eingeklappten Zeile liegt, erweitern Sie die Zeile. Wenn der Fokus auf einer erweiterten Zeile oder einer Zeile ohne untergeordnete Zeilen liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus auf der rechten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus eine Zelle nach rechts.
- <kbd>Linke Pfeiltaste</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile eingeklappt. Wenn der Fokus auf einer eingeklappten Zeile oder einer Zeile ohne untergeordnete Zeilen liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, bewegt sich der Fokus zur Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus eine Zelle nach links.
- <kbd>Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach unten. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach oben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-ab</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus eine vordefinierte Anzahl von Zeilen oder Zellen nach unten. Normalerweise bewegt es sich nach unten entsprechend der Höhe der Treegrid und scrollt so, dass die unterste Zeile im aktuell sichtbaren Zeilensatz zu einer der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-auf</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus eine vordefinierte Anzahl von Zeilen nach oben. Normalerweise bewegt es sich nach oben entsprechend der Höhe der Treegrid und scrollt so, dass die oberste Zeile im aktuell sichtbaren Zeilensatz zu einer der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Strg + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur ersten Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Strg + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur letzten Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM präsente Zeile zu bewegen oder auf die letzte verfügbare Zeile, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn eine Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Strg + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Spalte aus, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Zeile aus, die den Fokus enthält. Wenn die Treegrid eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Taste auch als Abkürzung zum Aktivieren des Kontrollkästchens verwendet werden, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Strg + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Rechter Pfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Shift + Linker Pfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Shift + Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert sich die Auswahl auf alle Zellen in der nächsten Zeile. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Shift + Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert sich die Auswahl auf alle Zellen in der vorherigen Zeile. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen dynamisch weitere Zeilen oder Spalten zum DOM hinzufügen können, können Tastenereignisse, die den Fokus zum Anfang oder Ende des Grids verschieben, wie z.B. <kbd>Strg + Ende</kbd>, den Fokus möglicherweise auf die letzte Zeile im DOM verschieben, anstatt auf die letzte verfügbare Zeile in den Backend-Daten.

Während Navigationstasten, wie Pfeiltasten, den Fokus von Zelle zu Zelle verschieben, sind sie nicht verfügbar, um z.B. ein Kombinationsfeld zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu verschieben. Wenn diese Funktionalität benötigt wird, siehe [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Zugänglichkeitshinweise

Es ist wichtig, dass alle Zellen den Tastaturfokus empfangen oder enthalten können, da Bildschirmlesegeräte sich generell im Anwendungslesemodus befinden, anstatt im Dokumentenlesemodus, wenn Benutzer mit dem Raster interagieren. Im Anwendungsmodus hört ein Benutzer eines Bildschirmlesegeräts nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente beschriften. Wenn ein Inhalt keinen Fokus erhalten kann, können Benutzer von Bildschirmlesegeräten die in der Treegrid enthaltenen Elemente möglicherweise übersehen.

## Spezifikationen

{{Specifications}}
