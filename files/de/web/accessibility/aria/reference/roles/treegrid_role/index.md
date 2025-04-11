---
title: "ARIA: treegrid-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `treegrid`-Rolle identifiziert ein Element als Gitter, dessen Zeilen auf die gleiche Weise wie bei einem `tree` erweitert und reduziert werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die sich aus tabellarischen Informationen zusammensetzt, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Gitterzellen. Wie ein `tree` sind übergeordnete Knoten in einem `treegrid` erweiterbar und zusammenklappbar. Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachfahre von oder gehört einem Zeilenelement und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Element, wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Informationen enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um eine Gruppe von untergeordneten Zeilen anzuzeigen oder zu verbergen, ist eine **übergeordnete Zeile**. Jede übergeordnete Zeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand, der entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle festgelegt ist.

Der `aria-expanded`-Zustand ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn die untergeordneten Zeilen ausgeblendet werden. Elemente, die das Anzeigen von untergeordneten Zeilen nicht steuern, sollten das `aria-expanded`-Attribut nicht haben, da das Vorhandensein des Attributs assistiven Technologien signalisiert, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihre Grid-Benutzeroberfläche Zeilen erfordert, die `aria-expanded` unterstützen, oder wenn Ihr Grid die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Treegrid-Nachfahren muss verwaltet werden. Die Ausnahme dieser Regel sind Spaltenkopfzellen, die nicht fokussierbar sein müssen, wenn sie keine Funktionalität wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt individueller Zellen bearbeitbar oder interaktiv ist.

### Einfach- und Mehrfachauswahl-Treetgrids

Wenn das `treegrid` dem Benutzer erlaubt, nur ein Element für eine Aktion auszuwählen, bezeichnet man es als **Einzelauswahl-Treegrid**. In Einzelauswahl-Treegrids hat das fokussierte Element auch einen ausgewählten Zustand, der mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzt ist.

Unterstützt das Treegrid die Auswahl von mehr als einer Zeile oder Zelle, so handelt es sich um ein **Mehrfachauswahl-Treegrid**. Im Mehrfachauswahl-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen Elementen unterscheiden, die ausgewählt sind, und dem Element, das den Fokus hat.

Für Mehrfachauswahl-Treegrids geben Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf dem Element mit der `treegrid`-Rolle an. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht für Reihen und Zellen ein, die nicht einzeln auswählbar sind, da das Vorhandensein des Attributs signalisiert, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine untergeordnete `row` oder `rowgroup` nicht im `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut, das alle IDs der nicht-nachfahrenden Kinder referenziert, auf dem `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein Treegrid aufgenommen werden, werden sie assistiven Technologien nach den DOM-Nachfahren des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachfahren des Grids sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) ins Spiel. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Die Werte sind die Gesamtzahl der Spalten und Reihen des vollständig geladenen Grids. Die Indizes für jede Zeile und Spalte werden auf einzelnen Zellen und nicht auf dem `treegrid`-Element festgelegt.

### Ein Treegrid: Name, Beschreibung und Fokus

Das Element mit der `treegrid`-Rolle muss einen zugänglichen Namen haben. Wenn ein geeigneter sichtbarer Titel im Inhalt vorhanden ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Titel für das Treegrid dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der `treegrid`-Rolle hinzu und setzen Sie den Wert des Attributs auf das `id` des titelgebenden Elements oder der Elemente. Wenn kein sichtbares Etikett vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

Wenn der Inhalt eine Überschrift oder Beschreibung für das `treegrid` enthält, schließen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf dem `treegrid`-Element ein, wobei der Attributwert die `id` des Elements ist, das die Beschreibung enthält.

Wenn das `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein umherwandernder Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in welchem Fall `aria-activedescendant` nicht verwendet werden sollte.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt, und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut auf dem `treegrid` selbst hinzu, um assistiven Technologien seinen deaktivierten Zustand mitzuteilen.

### Treegrid-Sortierung

Wenn das Treegrid Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf relevanten Kopfzellen-Elementen eingeschlossen, nicht auf dem Grid selbst.

### Treegrid-Menüs

Wenn das `treegrid` ein angeschlossenes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das beim Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) auf dem `treegrid`-Element hinzu. Dies informiert assistive Technologien, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit, das Menü sowohl für Tastatur- als auch Zeigegerätbenutzer zu öffnen und den Fokus zu setzen, muss mit JavaScript hinzugefügt werden.

### Schreibgeschützte Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Wenn ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut, um assistiven Technologien mitzuteilen, dass das `treegrid` schreibgeschützt ist. Der Attributwert propagiert sich, wenn er auf dem Element mit der `treegrid`-Rolle gesetzt ist, nach unten zu allen `columnheader`, `rowheader` und `gridcell`-Elementen. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelnen Treegrid-Elementnachfahren eingeschlossen wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt entweder bearbeitbar oder nicht bearbeitbar ist, tut jedoch nichts, um Interaktivität zu aktivieren oder zu deaktivieren. Dies muss mit dem globalen HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder mit JavaScript durchgeführt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Gitterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Rolle
  - : Eine Gruppe von [Reihen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Rolle
  - : Soll die Funktionalität des HTML {{HTMLElement('td')}}-Elements nachahmen, befindet sich in `grid`- und `treegrid`-Rollen und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-Rolle
  - : Eine Zelle in einer Reihe, die Überschrifteninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenscope.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)-Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist, sollte also nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternteil und seinen Kindelementen, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu benennen. Das `aria-labelledby`-Attribut ist in der Regel die Id des Elements, das verwendet wird, um das Treegrid zu betiteln.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgenwert, der das `treegrid` identifiziert. Wenn ein sichtbares Etikett vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden.

### Tastatur-Interaktionen

Um ein zugängliches Treegrid zu erstellen, muss die Möglichkeit implementiert werden, mit der Tastatur den Fokus zwischen Reihen und Zellen des Rasters zu verschieben. Das Bewegen des Fokus in das Raster kann dazu führen, dass die erste Zelle oder die erste Reihe fokussiert wird. Ob der Fokus zur nächsten angrenzenden Zelle oder zur Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids keinen Fokus auf Zeilen bieten.

Die folgenden Tastatur-Interaktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit Tab zum Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn nur Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt es die untergeordneten Zeilen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, verschiebt sich der Fokus auf die nächste Eingabe in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, verschiebt sich der Fokus vom Treegrid-Widget zum nächsten fokussierbaren Element.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Wenn der Fokus auf einer zusammengeklappten Zeile liegt, erweitern Sie die Zeile. Wenn der Fokus auf einer erweiterten Zeile oder auf einer Zeile liegt, die keine untergeordneten Zeilen hat, verschiebt sich der Fokus auf die erste Zelle in der Zeile. Wenn der Fokus auf der rechten äußersten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, verschiebt sich der Fokus eine Zelle nach rechts.
- <kbd>Linke Pfeiltaste</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile eingeklappt. Wenn der Fokus auf einer zusammengeklappten Zeile oder auf einer Zeile liegt, die keine untergeordneten Zeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, verschiebt sich der Fokus auf die Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, verschiebt sich der Fokus eine Zelle nach links.
- <kbd>Nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus eine Zelle nach unten. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, verschiebt sich der Fokus eine Zelle nach oben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild ab</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, verschiebt sich der Fokus um eine vorher festgelegte Anzahl von Zeilen oder Zellen nach unten. Normalerweise wird so weit nach unten geschoben, dass die unterste Zeile der aktuell sichtbaren Reihe zu einer der ersten sichtbaren Reihen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild auf</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus um eine vorher festgelegte Anzahl von Zeilen nach oben. Normalerweise bewegt es sich nach oben, um so weit nach oben zu scrollen, dass die oberste Zeile der aktuell sichtbaren Reihe zu einer der letzten sichtbaren Reihen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Strg + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus auf die erste Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegen sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus auf die erste Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Strg + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, verschiebt sich der Fokus auf die letzte Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um auf die letzte im DOM vorhandene Zeile oder auf die letzte verfügbare Zeile zu fokussieren, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten üblicherweise für diese Funktionen verwendet.

- <kbd>Strg + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Spalte aus, die den Fokus enthält.
- <kbd>Umschalt + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählen Sie die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählen Sie die Zeile aus, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Taste auch als Verknüpfung verwendet werden, um das Kästchen zu markieren, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Strg + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Umschalt + Pfeil nach rechts</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Umschalt + Pfeil nach links</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Umschalt + Pfeil nach unten</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der nächsten Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach unten verlängert.
- <kbd>Umschalt + Pfeil nach oben</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der vorherigen Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach oben verlängert.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Tastenevents, die den Fokus zum Anfang oder Ende des Grids verschieben, wie <kbd>Strg + Ende</kbd>, den Fokus auf die letzte Zeile im DOM bewegen, anstatt auf die letzte verfügbare Zeile in den Backend-Daten.

Während die Navigationstasten, wie Pfeiltasten, den Fokus von Zelle zu Zelle verschieben, stehen sie nicht zur Verfügung, um beispielsweise ein Combobox zu bedienen oder einen Bearbeitungscursor in einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, siehe [Editing and Navigating Inside a Cell](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Barrierefreiheitsbedenken

Es ist wichtig, dass alle Zellen Tastaturfokus erhalten oder enthalten können, da Bildschirmleseprogramme im Allgemeinen im Anwendungslesemodus und nicht im Dokumentenlesemodus sind, wenn Benutzer mit dem Raster interagieren. Während des Anwendungsmodus hört ein Benutzer eines Bildschirmleseprogramms nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente beschriften. Wenn der Inhalt keinen Fokus erhalten kann, könnten Benutzer von Bildschirmleseprogrammen unbewusst Elemente im Treegrid übersehen.

## Spezifikationen

{{Specifications}}
