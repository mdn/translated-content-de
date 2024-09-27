---
title: "ARIA: treegrid Rolle"
slug: Web/Accessibility/ARIA/Roles/treegrid_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `treegrid` Rolle identifiziert ein Element als Raster, dessen Zeilen auf die gleiche Weise wie bei einem `tree` erweitert und reduziert werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination aus den Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Zellen. Wie ein `tree` sind die Knoten in einem `treegrid` erweiterbar und reduzierbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachfolger oder gehört zu einem Zeilenelement und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder ein [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Element, wobei die `gridcell` Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenheaderinformationen enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um eine Gruppe von untergeordneten Zeilen anzuzeigen oder zu verbergen, ist eine **übergeordnete Zeile**. Jede übergeordnete Zeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Zustand, der entweder am Zeilenelement oder an einer in der Zeile enthaltenen Zelle gesetzt ist.

Der `aria-expanded` Zustand wird auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn die untergeordneten Zeilen verborgen sind. Elemente, die nicht die Anzeige von untergeordneten Zeilen steuern, sollten nicht das `aria-expanded` Attribut haben, da das Vorhandensein des Attributs darauf hinweist, dass das Element ein Elternteil ist.

Wenn Ihre Rasteroberfläche Zeilen erfordert, die `aria-expanded` unterstützen oder wenn Ihr Raster Unterstützung für [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte mit der Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Baumraster-Nachkommen muss verwaltet werden. Die Ausnahme für diese Regel sind Spaltenkopfzellen, die fokussierbar sein müssen, wenn sie keine Funktionalität wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt der einzelnen Zellen bearbeitbar oder interaktiv ist.

### Einzel- und Multi-Selektions-Treegrids

Wenn das `treegrid` dem Benutzer erlaubt, nur einen Eintrag für eine Aktion auszuwählen, dann wird es als **Einzel-Selektions-Treegrid** bezeichnet. In Einzel-Selektions-Treegrids hat der Fokus auch einen gewählten Zustand, der mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) gesetzt ist.

Unterstützt das Treegrid die Auswahl von mehr als einer Zeile oder Zelle, handelt es sich um ein **Multi-Selektions-Treegrid**. Im Multi-Selektions-Treegrid ist der gewählte Zustand unabhängig vom Fokus. Das visuelle Design und unterstützende Technologien müssen zwischen ausgewählten Einträgen und dem Eintrag unterscheiden, der den Fokus hat.

Für Multi-Selektions-Treegrids fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) auf dem Element mit der `treegrid` Rolle hinzu. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false`. Fügen Sie das `aria-selected` Attribut nicht auf Zeilen und Zellen hinzu, die nicht einzeln auswählbar sind, da das Vorhandensein des Attributs Technologien zur Unterstützung von Funktionen darauf hinweist, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine untergeordnete `row` oder `rowgroup` nicht innerhalb des `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut, das auf alle IDs der nicht-nachfolgenden Kinder verweist, auf dem `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein Treegrid aufgenommen werden, werden sie unterstützenden Technologien nach den DOM-Nachkommen des `treegrid` Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Grids sind auch im `aria-owns` Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM enthalten sind und dynamisch beim Scrollen geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) zum Einsatz. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Die Werte sind die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf einzelne Zellen gesetzt, nicht auf das `treegrid` Element.

### Ein Treegrid's zugänglicher Name, Beschreibung und Fokus

Das Element mit der Rolle des `treegrid` muss einen zugänglichen Namen haben. Wenn ein geeigneter Tisch im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Beschriftung für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle des `treegrid` hinzu und setzen Sie den Wert des Attributs auf die `id` des beschriftenden Elements oder der Elemente. Wenn keine sichtbare Beschriftung vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Nicht beide.

Wenn der Inhalt eine Captionierung oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) auf dem `treegrid` Element mit dem Attributwert als die `id` des Elements, das die Beschreibung enthält, hinzu.

Wenn der `treegrid` Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Eigenschaft auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, dass roving tabindex verwendet wird, um den Fokus zwischen diesen Rollen zu verwalten, in diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Attribut auf dem `treegrid` selbst hinzu, um assistive Technologien über den deaktivierten Zustand zu informieren.

### Treegrid Sortierung

Wenn das Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut auf den relevanten Kopfzellen-Elementen eingefügt, nicht auf dem Raster selbst.

### Treegrid Menüs

Wenn das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) hat, das geöffnet wird, wenn Sie mit der rechten Maustaste klicken, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) auf dem `treegrid` Element hinzu. Dies informiert unterstützende Technologien, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit für sowohl Tastatur- als auch Zeigergerätbenutzer, das Menü zu öffnen und den Fokus im Menü zu setzen, muss mit JavaScript hinzugefügt werden.

### Schreibgeschützte Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Wenn ein Baumraster nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut, um assistive Technologien darüber zu informieren, dass das `treegrid` schreibgeschützt ist. Der Attributwert, wenn auf das Element mit der `treegrid` Rolle eingestellt, wird bis zu allen `columnheader`, `rowheader`, und `gridcell` Elementen propagiert. Dieser globale Wert kann für einzelne `gridcell` Elemente überschrieben werden, indem `aria-readonly` auf einzelne Baumraster-Element-Nachkommen hinzugefügt wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur unterstützende Technologien darüber, dass der Inhalt bearbeitbar oder nicht bearbeitbar ist, aber es tut nichts, um die Interaktivität zu aktivieren oder zu deaktivieren. Das muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut von HTML oder mit JavaScript erfolgen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen von Rasterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Rolle
  - : Soll die Funktionalität des HTML {{HTMLElement('td')}} Elements nachahmen und ist in `grid` und `treegrid` Rollen zu finden und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Headerinformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}} Element mit Spaltenbereich.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) Rolle
  - : Eine Zelle mit Headerinformationen für eine `row` innerhalb einer tabellarischen Struktur.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Bei erweiterbaren Elementen ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist und sollte nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Identifiziert ein kontextuelles Verhältnis zwischen einem Elternteil und seinen Kindelementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um das Verhältnis darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das das Treegrid bezeichnet.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenkettenwert, der das `treegrid` identifiziert. Wenn ein sichtbares Label vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden.

### Tastaturinteraktionen

Die Fähigkeit, den Fokus mit einer Tastatur zwischen Zeilen und Zellen des Rasters zu bewegen, muss implementiert werden, um ein zugängliches Treegrid zu erstellen. Beim Fokussieren auf das Raster kann dies dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus zur nächsten benachbarten Zelle oder zur Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids den Fokus nicht auf Zeilen bereitstellen.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit Tab auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn nur der Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt die untergeordneten Zeilen. Ansonsten führt es die Standardaktion für die Zelle aus.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, verschiebt den Fokus auf das nächste Eingabeelement in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, wird der Fokus aus dem Treegrid-Widget auf das nächste fokussierbare Element verschoben.
- <kbd>Rechtspfeil</kbd>
  - : Wenn der Fokus auf einer reduzierten Zeile liegt, wird die Zeile erweitert. Wenn der Fokus auf einer erweiterten Zeile oder auf einer Zeile liegt, die keine untergeordneten Zeilen hat, wird der Fokus auf die erste Zelle in der Zeile verschoben. Wenn der Fokus auf der am weitesten rechten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach rechts verschoben.
- <kbd>Linkspfeil</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile reduziert. Wenn der Fokus auf einer reduzierten Zeile oder auf einer Zeile liegt, die keine untergeordneten Zeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, wird der Fokus zur Zeile verschoben. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach links verschoben.
- <kbd>Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus um eine Zeile nach unten bewegt. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach unten verschoben. Wenn der Fokus auf der untersten Zelle der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus um eine Zeile nach oben bewegt. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach oben verschoben. Wenn der Fokus auf der obersten Zelle der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-abwärts</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine vordefinierte Anzahl von Zeilen oder Zellen verschoben. In der Regel bewegt es sich nach unten um die Höhe des Treegrid-Pendants, scrollt, sodass die unterste Zeile in der aktuell sichtbaren Reihe von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-aufwärts</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine vordefinierte Anzahl von Zeilen verschoben. In der Regel bewegt es sich nach oben um die Höhe des Treegrid-Pendants, scrollt, sodass die oberste Zeile in der aktuell sichtbaren Reihe von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Steuerung + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus auf die erste Zeile bewegt. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus auf die erste Zelle der Zeile verschoben. Wenn der Fokus auf der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Steuerung + Ende</kbd></td><td>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus auf die letzte Zeile bewegt. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus auf die letzte Zelle der Zeile verschoben. Wenn der Fokus auf der letzten Zelle in der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile oder auf die letzte verfügbaren Zeile zu setzen, falls die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Steuerung + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt die Spalte aus, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, werde die Zeile ausgewählt. Wenn der Fokus auf einer Zelle liegt, wählen Sie die Zeile aus, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Taste auch als Abkürzung zum Aktivieren des Kontrollkästchens verwendet werden, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Steuerung + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Rechtspfeil</kbd>
  - : wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Shift + Linkspfeil</kbd>
  - : wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Shift + Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der nächsten Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Shift + Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der vorherigen Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen mehr Zeilen oder Spalten dynamisch zum DOM hinzufügen können, können Tasteereignisse, die den Fokus an den Anfang oder das Ende des Rasters bewegen, wie z.B. <kbd>Steuerung + Ende</kbd>, den Fokus auf die letzte Zeile im DOM anstatt auf die letzte verfügbare Zeile in den Backend-Daten verschieben.

Während Navigationstasten wie Pfeiltasten den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um etwas wie eine Kombobox zu bedienen oder einen Bearbeitungscursor in einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, sehen Sie [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Barrierefreiheitsaspekte

Es ist wichtig, dass alle Zellen den Tastaturfokus empfangen oder enthalten können, weil Screenreader-Nutzer in der Regel im Anwendungslesemodus sind, anstatt im Dokumentenlesemodus, wenn sie mit dem Raster interagieren. Während sie sich im Anwendungsmodus befinden, hört ein Screenreader-Benutzer nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente kennzeichnen. Wenn Inhalte den Fokus nicht empfangen können, könnten Screenreader-Nutzer möglicherweise Elemente im Treegrid übersehen.
