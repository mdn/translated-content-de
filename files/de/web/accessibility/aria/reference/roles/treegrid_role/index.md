---
title: "ARIA: Baumraster-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `treegrid` identifiziert ein Element als ein Raster, dessen Zeilen auf die gleiche Weise erweitert und minimiert werden können wie bei einem `tree`.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datenraster oder eine Tabelle, die aus tabellarischen Informationen besteht, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Rasterzellen. Wie bei einem `tree` sind Elternelemente in einem `treegrid` erweiterbar und zusammenklappbar. Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme oder gehört einem Zeilenelement an und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Element, wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Informationen enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um eine Reihe von Kinderzeilen anzuzeigen oder zu verbergen, ist eine **Elternzeile**. Jede Elternzeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand entweder auf das Zeilenelement oder auf eine darin enthaltene Zelle gesetzt.

Der `aria-expanded`-Zustand wird auf `true` gesetzt, wenn die Kinderzeilen angezeigt werden, und auf `false`, wenn die Kinderzeilen verborgen sind. Elemente, die keine Kinderzeilen anzeigen, sollten kein `aria-expanded`-Attribut haben, da die Anwesenheit des Attributs Assistenztechnologien anzeigt, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihr Raster-UI Zeilen erfordert, die `aria-expanded` unterstützen, oder wenn Ihr Raster Unterstützung für [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und der Tastaturfokus für alle diese Treegrid-Nachkommen muss verwaltet werden. Die Ausnahme zu dieser Regel sind Spaltenkopfzeilen, die nicht fokussierbar sein müssen, wenn sie keine Funktionen wie Sortierung oder Filterung bereitstellen. Jede Zeile und jede Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt der einzelnen Zellen bearbeitbar oder interaktiv ist.

### Einzelauswahl- und Mehrfachauswahl-Baumraster

Wenn das `treegrid` dem Benutzer erlaubt, nur ein Element für eine Aktion auszuwählen, wird es als **Einzelauswahl**-Baumraster bezeichnet. In Einzelauswahl-Baumrastern hat das fokussierte Element auch einen ausgewählten Zustand, der mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzt ist.

Wenn das Baumraster die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Mehrfachauswahl**-Baumraster. Im Mehrfachauswahl-Baumraster ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und die Assistenztechnologien müssen zwischen ausgewählten Elementen und dem Element, das den Fokus hat, unterscheiden.

Für Mehrfachauswahl-Baumraster schließen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf dem Element mit der `treegrid`-Rolle ein. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar, aber nicht derzeit ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht für Zeilen und Zellen ein, die nicht einzeln auswählbar sind, da die Anwesenheit des Attributs den Assistenztechnologien anzeigt, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine `row` oder `rowgroup` nicht innerhalb des `treegrid` im DOM verschachtelt ist, muss das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut, das auf alle IDs der nicht-abstammenden Kinder verweist, auf dem `treegrid`-Element gesetzt sein. Wenn Zeilen oder Zellen über `aria-owns` in ein Baumraster eingefügt werden, werden sie Assistenztechnologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Rasters sind auch im `aria-owns`-Attribut enthalten.

### Baumraster mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM vorhanden sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) zum Einsatz. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf das `treegrid` gesetzt. Die Werte sind jeweils die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf individuellen Zellen und nicht auf dem `treegrid`-Element gesetzt.

### Ein Baumraster's zugänglicher Name, Beschreibung und Fokus

Das Element mit der `treegrid`-Rolle muss einen zugänglichen Namen haben. Wenn ein passendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das Baumraster dient, schließen Sie `aria-labelledby` als Attribut am Element mit der `treegrid`-Rolle ein und setzen Sie den Wert des Attributs auf die `id` des Labels oder der Labels. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beide.

Wenn der Inhalt eine Bildunterschrift oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf dem `treegrid`-Element hinzu, wobei der Attributwert die `id` des Elements mit der Beschreibung ist.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein wandernder Tabindex wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in welchem Fall `aria-activedescendant` nicht verwendet werden sollte.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt, und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut am `treegrid` selbst hinzu, um Assistenztechnologien über seinen deaktivierten Zustand zu informieren.

### Baumraster-Sortierung

Wenn das Baumraster Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut auf relevanten Kopfzeilenelementen und nicht auf dem Raster selbst hinzugefügt.

### Baumraster-Menüs

Wenn das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das durch einen Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) auf dem `treegrid`-Element hinzu. Dies informiert Assistenztechnologien, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit, sowohl für Tastatur- als auch für Zeigegerätenutzer das Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-lesen-Baumraster

Standardmäßig werden Baumraster als bearbeitbar angenommen. Wenn ein Baumraster nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut, um Assistenztechnologien darüber zu informieren, dass das `treegrid` schreibgeschützt ist. Der Attributwert wird, wenn auf das Element mit der `treegrid`-Rolle gesetzt, auf alle `columnheader`, `rowheader` und `gridcell`-Elemente weitergegeben. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelnen Baumraster-Nachkommelementen enthalten ist.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur Assistenztechnologien darüber, dass der Inhalt bearbeitbar ist oder nicht, es tut aber nichts, um die Interaktivität zu aktivieren oder zu deaktivieren. Dies muss mit dem globalen HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) oder mit JavaScript geschehen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) Rolle
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen von Rasterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Rolle
  - : Beabsichtigt, die Funktionalität des HTML-{{HTMLElement('td')}}-Elements nachzuahmen, befindet sich in `grid`- und `treegrid`-Rollen und muss ein direktes Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Rolle
  - : Eine Zelle mit Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Auch zeigt, dass das Element erweiterbar ist, sollte daher nicht vorhanden sein, wenn das Element nicht erweiterbar ist.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem übergeordneten Element und seinen Kinderelementen, wenn die DOM-Hierarchie nicht genutzt werden kann, um die Beziehung darzustellen
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das das Baumraster bezeichnet.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenkettenwert, der das `treegrid` identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Die Möglichkeit, den Fokus mit einer Tastatur zwischen Zeilen und Zellen des Rasters zu bewegen, muss implementiert werden, um ein zugängliches Baumraster zu erstellen. Wird der Fokus in das Raster verlegt, kann es dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus zur nächsten angrenzenden Zelle oder zur Zeile geht, hängt von den Inhaltsanforderungen ab, da einige Baumraster keine Fokussierung auf Zeilen bieten.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit der Tab-Taste auf das Raster gelegt hat.

- <kbd>Enter</kbd>
  - : Wenn nur Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt dies die Kinderzeilen. Andernfalls wird die Standardaktion für die Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile mit Fokus fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, bewegt es den Fokus zum nächsten Eingabefeld in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, bewegt sich der Fokus aus dem Treegrid-Widget heraus zum nächsten fokussierbaren Element.
- <kbd>Pfeil-rechts</kbd>
  - : Wenn der Fokus auf einer eingefalteten Zeile ist, erweitert diese die Zeile. Wenn der Fokus auf einer erweiterten Zeile oder auf einer Zeile ohne Kinderreihen liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus auf der rechten Zelle einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus um eine Zelle nach rechts.
- <kbd>Pfeil-links</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, klappt diese die Zeile zusammen. Wenn der Fokus auf einer eingefalteten Zeile oder auf einer Zeile ohne Kinderreihen liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und Zeilenfokus unterstützt wird, bewegt sich der Fokus zur Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und kein Zeilenfokus unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus um eine Zelle nach links.
- <kbd>Pfeil-runter</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach unten. Wenn der Fokus auf der untersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Pfeil-rauf</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus eine Zelle nach oben. Wenn der Fokus auf der obersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-runter</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus um eine vordefinierte Anzahl von Zeilen oder Zellen nach unten. Normalerweise bewegt es sich um die Höhe des Baumrasters nach unten und scrollt so, dass die unterste Zeile im derzeit sichtbaren Satz von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn sich der Fokus in der letzten Zeile befindet, bewegt sich der Fokus nicht.
- <kbd>Bild-rauf</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, bewegt sich der Fokus um eine vordefinierte Anzahl von Zeilen nach oben. Normalerweise bewegt es sich um die Höhe des Baumrasters nach oben und scrollt so, dass die oberste Zeile im derzeit sichtbaren Satz von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Start</kbd> <kbd>Control + Start</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur ersten Zeile. Wenn sich der Fokus in der ersten Zeile befindet, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Control + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, bewegt sich der Fokus zur letzten Zeile. Wenn sich der Fokus in der letzten Zeile befindet, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, bewegt sich der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile oder auf die letzte verfügbare Zeile zu setzen, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn ein Baumraster die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Control + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, werden alle Zellen ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Spalte ausgewählt, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Zeile ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Zeile ausgewählt, die den Fokus enthält. Wenn das Baumraster eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Taste auch als Abkürzung verwendet werden, um das Kästchen zu markieren, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Pfeil-rechts</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach rechts.
- <kbd>Shift + Pfeil-links</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach links.
- <kbd>Shift + Pfeil-runter</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert sich die Auswahl auf alle Zellen in der nächsten Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach unten.
- <kbd>Shift + Pfeil-rauf</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert sich die Auswahl auf alle Zellen in der vorherigen Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach oben.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Ereignisse beim Wechseln des Fokus zum Anfang oder Ende des Rasters, wie <kbd>Control + Ende</kbd>, den Fokus zur letzten Zeile im DOM verschieben, anstatt zur letzten verfügbaren Zeile in den Back-End-Daten.

Während Navigationsschlüssel, wie Pfeiltasten, den Fokus von Zelle zu Zelle verschieben, sind sie nicht verfügbar, um etwas wie eine Kombinationsbox zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu bewegen. Wenn diese Funktionalität benötigt wird, siehe [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

<!--
### Erforderliche JavaScript-Funktionen

## Beispiele
-->

## Barrierefreiheitsaspekte

Es ist wichtig, dass alle Zellen den Tastaturfokus erhalten oder enthalten können, da Bildschirmlesegeräte normalerweise im Anwendungslesemodus und nicht im Dokumentlesemodus sind, wenn Benutzer mit dem Raster interagieren. Im Anwendungsmodus hört ein Bildschirmleserbenutzer nur fokussierbare Elemente und den Inhalt, der fokussierbare Elemente bezeichnet. Wenn Inhalt keinen Fokus erhalten kann, können Benutzer von Bildschirmlesegeräten möglicherweise Elemente im Baumraster übersehen.

<!--
## Beste Praktiken

### HTML bevorzugen
-->

## Spezifikationen

{{Specifications}}

## Siehe auch
