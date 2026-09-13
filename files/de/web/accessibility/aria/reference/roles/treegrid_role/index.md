---
title: "ARIA: treegrid Rolle"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Die `treegrid` Rolle identifiziert ein Element als ein Raster, dessen Zeilen auf die gleiche Weise wie bei einem `tree` erweitert und eingeklappt werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitet oder interaktiv sein können. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Gitterzellen. Ähnlich wie bei einem `tree` sind übergeordnete Knoten in einem `treegrid` erweiterbar und einklappbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachfolger einer Zeilen-Element oder wird von einem solchen besessen und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Element, wobei die `gridcell` Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Informationen enthalten.

Eine `row`, die erweitert oder eingeklappt werden kann, um eine Reihe von untergeordneten Zeilen anzuzeigen oder zu verbergen, ist eine **übergeordnete Zeile**. Jede übergeordnete Zeile hat den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle gesetzt.

Der `aria-expanded` Zustand wird auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn die untergeordneten Zeilen ausgeblendet werden. Elemente, die die Anzeige der untergeordneten Zeilen nicht steuern, sollten nicht das `aria-expanded` Attribut haben, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihre Raster-UI Zeilen erfordert, die `aria-expanded` unterstützen, oder wenn Ihr Raster die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte per Tastatur fokussierbar sein, und der Tastaturfokus für all diese `treegrid`-Nachfahren muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenkopf-Zellen, die nicht fokussierbar sein müssen, wenn sie keine Funktionalität wie Sortieren oder Filtern bieten. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der individuelle Zellinhalt bearbeitbar oder interaktiv ist.

### Single- und Multi-Select Treegrids

Wenn das `treegrid` dem Benutzer erlauben, nur ein Element für eine Aktion auszuwählen, wird es als **Single-Select** Treegrid bezeichnet. In Single-Select Treegrids hat das fokussierte Element auch einen ausgewählten Zustand mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzt.

Wenn das `treegrid` die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Multi-Select** Treegrid. In einem Multi-Select Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen ausgewählten Elementen und dem fokussierten Element unterscheiden.

Für Multi-Select Treegrids fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf dem Element mit der `treegrid` Rolle ein. Alle ausgewählten Zeilen oder Zellen haben `aria-selected` auf `true` gesetzt. Alle Zeilen und Zellen, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected` Attribut nicht bei Zeilen und Zellen ein, die nicht individuell auswählbar sind, da die Anwesenheit des Attributs assistive Technologien anzeigt, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine untergeordnete `row` oder `rowgroup` nicht im DOM innerhalb des `treegrid` verschachtelt ist, muss das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns), das alle IDs der nicht als Nachkommen vorhandenen Kinder referenziert, auf dem `treegrid` Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein `treegrid` eingefügt werden, werden sie assistiven Technologien nach den DOM-Nachkommen des `treegrid` Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Rasters sind ebenfalls im `aria-owns` Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM stehen und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) zur Anwendung. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Die Werte sind jeweils die Gesamtzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf individuelle Zellen gesetzt, nicht auf das `treegrid`-Element.

### Der zugängliche Name, die Beschreibung und der Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `treegrid` dient, sollte `aria-labelledby` als Attribut auf dem Element mit der `treegrid` Rolle enthalten sein, und der Wert des Attributs sollte auf die `id` des oder der beschriftenden Elemente gesetzt werden. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

Wenn der Inhalt eine Beschriftung oder Beschreibung des `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf dem `treegrid` Element hinzu, wobei der Attributwert die `id` des Elements ist, das die Beschreibung enthält.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Eigenschaft die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` referenzieren, es sei denn, ein wandernder Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in welchem Fall `aria-activedescendant` nicht verwendet werden sollte.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchsetzbar und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Attribut auf dem `treegrid` selbst ein, um assistive Technologien über seinen deaktivierten Zustand zu informieren.

### Treegrid-Sortierung

Wenn das `treegrid` Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut auf relevanten Headerzellenelementen eingefügt, nicht auf dem Raster selbst.

### Treegrid-Menüs

Wenn das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das beim Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) auf dem `treegrid`-Element ein. Dies informiert assistive Technologien, dass das `treegrid` ein zugeordnetes Popup hat. Die Möglichkeit, das Menü sowohl für Tastatur- als auch für Zeigegerätebenutzer zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Read-only Treegrids

Standardmäßig werden Treegrids als bearbeitbar angenommen. Wenn ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut, um assistive Technologien zu informieren, dass das `treegrid` schreibgeschützt ist. Der Attributwert, wenn er auf das Element mit der `treegrid` Rolle gesetzt ist, propagiert sich nach unten zu allen `columnheader`, `rowheader` und `gridcell`-Elementen. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelne `treegrid`-Elementnachfahren eingefügt wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt bearbeitbar oder nicht bearbeitbar ist, es macht jedoch nichts, um die Interaktivität zu aktivieren oder zu deaktivieren. Dies muss mit dem globalen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut von HTML oder mit JavaScript geschehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen von Gitterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [rows](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Rolle
  - : Zur Nachbildung der Funktionalität des HTML-Elements {{HTMLElement('td')}}, kommt in `grid` und `treegrid` Rollen vor und muss das direkte Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}} Element mit Spaltenumfang.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass das Element erweiterbar ist, sodass es nicht vorhanden sein sollte, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternteil und seinen Kinderelementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu beschriften. Das `aria-labelledby` Attribut ist in der Regel die ID des Elements, das zur Titelbeschreibung des `treegrid` verwendet wird.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgewert, der das `treegrid` identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Um ein zugängliches Treegrid zu erstellen, muss die Möglichkeit eingebaut werden, den Fokus mit der Tastatur zwischen Zeilen und Zellen des Rasters zu verschieben. Das Bewegen des Fokus ins Raster kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus zur nächsten benachbarten Zelle oder zur Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids keinen Fokus auf Zeilen bieten.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer durch Drücken der Tabulatortaste den Fokus auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn nur Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit dem `aria-expanded`-Eigenschaft liegt, werden die untergeordneten Zeilen geöffnet oder geschlossen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile, die den Fokus enthält, fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wird der Fokus auf das nächste Eingabefeld in der Zeile verschoben. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, wird der Fokus aus dem `treegrid`-Widget auf das nächste fokussierbare Element verschoben.
- <kbd>Rechter Pfeil</kbd>
  - : Wenn der Fokus auf einer eingeklappten Zeile liegt, wird die Zeile erweitert. Wenn der Fokus auf einer erweiterten Zeile oder auf einer Zeile ohne untergeordnete Zeilen liegt, wird der Fokus auf die erste Zelle in der Zeile verschoben. Wenn der Fokus auf der rechten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach rechts verschoben.
- <kbd>Linker Pfeil</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile eingeklappt. Wenn der Fokus auf einer eingeklappten Zeile oder auf einer Zeile ohne untergeordnete Zeilen liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, bewegt sich der Fokus zur Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach links verschoben.
- <kbd>Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus um eine Zelle nach unten. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus um eine Zelle nach oben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-auf</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine vorher festgelegte Anzahl von Zeilen oder Zellen nach unten verschoben. Normalerweise wird es nach unten verschoben, um die Höhe des `treegrid` zu erreichen, und es wird gescrollt, sodass die untere Zeile im derzeit sichtbaren Satz von Zeilen zu einer der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-ab</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine vorher festgelegte Anzahl von Zeilen nach oben verschoben. Normalerweise bewegt es sich nach oben, um die Höhe des `treegrid` zu erreichen, und es wird gescrollt, sodass die obere Zeile im derzeit sichtbaren Satz von Zeilen zu einer der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Pos1</kbd> <kbd>Strg + Pos1</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur ersten Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus auf der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Strg + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur letzten Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus auf der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um sich auf die letzte im DOM vorhandene Zeile oder auf die letzte verfügbare Zeile zu fokussieren, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Strg + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt die Spalte aus, die den Fokus enthält.
- <kbd>Umschalt + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählen Sie die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählen Sie die Zeile aus, die den Fokus enthält. Wenn das `treegrid` eine Spalte mit Kontrollkästchen zur Auswahl von Zeilen enthält, kann diese Taste auch als Abkürzung verwendet werden, um das Kontrollkästchen zu markieren, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Strg + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Umschalt + Rechter Pfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Umschalt + Linker Pfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Umschalt + Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der nächsten Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Umschalt + Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der vorherigen Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Tastenevents, die den Fokus auf den Anfang oder das Ende des Rasters verschieben, wie <kbd>Strg + Ende</kbd>, den Fokus auf die letzte Zeile im DOM verschieben, nicht auf die letzte verfügbare Zeile in den Hintergrunddaten.

Während Navigationstasten wie Pfeiltasten den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um etwas zu tun, wie z. B. eine Kombinationsbox zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, siehe [Bearbeitung und Navigation in einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Zugänglichkeitsbedenken

Es ist wichtig, dass alle Zellen den Tastaturfokus erhalten oder enthalten können, da Bildschirmleseprogramme sich im Anwendungslademodus und nicht im Dokumentlesemodus befinden, wenn Benutzer mit dem Raster interagieren. Im Anwendungslademodus hört ein Bildschirmleser-Benutzer nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente beschriften. Wenn der Inhalt keinen Fokus erhalten kann, können Bildschirmleser-Benutzer möglicherweise unabsichtlich Elemente im `treegrid` übersehen.

## Spezifikationen

{{Specifications}}
