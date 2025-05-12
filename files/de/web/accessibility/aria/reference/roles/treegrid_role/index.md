---
title: "ARIA: `treegrid`-Rolle"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `treegrid`-Rolle identifiziert ein Element als ein Raster, dessen Zeilen erweitert und reduziert werden können, ähnlich wie bei einem `tree`.

## Beschreibung

Eine `treegrid` ist ein hierarchisches Datenraster oder -tabelle, bestehend aus tabellarischen Informationen, die bearbeitbar oder interaktiv sind. Eine `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht die `treegrid` aus Zeilen, Spalten und Rasterzellen. Wie ein `tree` sind die Elternknoten in einer `treegrid` erweiterbar und reduzierbar.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile enthält wiederum eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme einer Zeile oder gehört zu einem Zeilenelement und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder eine [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), wobei die `gridcell`-Rolle für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopfinformationen enthalten.

Eine `row`, die erweitert oder reduziert werden kann, um einen Satz von untergeordneten Zeilen anzuzeigen oder zu verbergen, ist eine **Elternzeile**. Jede Elternzeile hat den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand entweder auf dem Zeilenelement gesetzt oder auf einer in der Zeile enthaltenen Zelle.

Der `aria-expanded`-Zustand ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn sie ausgeblendet sind. Elemente, die die Anzeige von Unterzeilen nicht steuern, sollten das `aria-expanded`-Attribut nicht enthalten, da das Vorhandensein des Attributs assistiven Technologien anzeigt, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihre Raster-UI Zeilen vorsieht, die `aria-expanded` unterstützen, oder wenn Ihr Raster die Unterstützung von [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) erfordert, verwenden Sie `treegrid` und nicht `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte über die Tastatur fokussierbar sein, und der Tastaturfokus für alle diese treegrid-Nachfolger muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenkopfzeilen, die nicht fokussierbar sein müssen, wenn sie keine Funktionen wie Sortieren oder Filtern bereitstellen. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt der einzelnen Zellen bearbeitbar oder interaktiv ist.

### Einzel- und Mehrfachauswahl-Treegrids

Wenn die `treegrid` dem Benutzer erlaubt, nur einen Eintrag für eine Aktion auszuwählen, wird sie als **Einzel-Auswahl-Treegrid** bezeichnet. In Einzel-Auswahl-Treegrids wird der Eintrag, der den Fokus hat, auch mit dem ausgewählten Zustand [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzt.

Wenn die `treegrid` die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um eine **Mehrfachauswahl-Treegrid**. In der Mehrfachauswahl-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen ausgewählten Elementen und dem Element mit dem Fokus unterscheiden.

Für Mehrfachauswahl-Treegrids, fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) dem Element mit der `treegrid`-Rolle hinzu. Alle ausgewählten Zeilen oder Zellen haben `aria-selected` auf `true` gesetzt. Alle Zeilen und Zellen, die auswählbar aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht bei Zeilen und Zellen hinzu, die nicht einzeln auswählbar sind, da das Vorhandensein des Attributs assistiven Technologien anzeigt, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine untergeordnete `row` oder `rowgroup` nicht innerhalb der `treegrid` im DOM verschachtelt ist, muss das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns), das sich auf alle IDs der nicht nachkommen Kinder bezieht, auf das `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in einer `treegrid` aufgenommen werden, werden sie für assistive Technologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Rasters sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) ins Spiel. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf der `treegrid` gesetzt. Die Werte sind die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf einzelnen Zellen festgelegt, nicht auf dem `treegrid`-Element.

### Der zugängliche Name, die Beschreibung und der Fokus einer treegrid

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Bezeichnung für die Treegrid dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `treegrid` hinzu und setzen Sie den Wert des Attributs auf die `id` des bezeichnenden Elements oder der Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

Wenn der Inhalt eine Überschrift oder Beschreibung für die `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) dem `treegrid`-Element hinzu, wobei der Attributwert die `id` des Elements mit der Beschreibung ist.

Wenn das `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen, es sei denn, ein "roving tabindex" wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten, in diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn die `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell erkennbar, programmatisch durchgesetzt und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut der `treegrid` selbst hinzu, um assistive Technologien über ihren deaktivierten Zustand zu informieren.

### Treegrid-Sortierung

Wenn die `treegrid` Sortierfunktionen bietet, wird das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) auf den relevanten Kopfzellelementen und nicht auf dem Raster selbst angebracht.

### Treegrid-Menüs

Wenn die `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) hat, das beim Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) dem `treegrid`-Element hinzu. Dies informiert assistive Technologien darüber, dass die `treegrid` ein zugeordnetes Popup hat. Die Fähigkeit für sowohl Tastatur- als auch Zeigereingerätebenutzer, das Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese-Treegrids

Standardmäßig wird angenommen, dass `treegrids` bearbeitbar sind. Wenn eine `treegrid` nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut, um assistive Technologien zu informieren, dass die `treegrid` schreibgeschützt ist. Der Attributwert, wenn am Element mit der `treegrid`-Rolle gesetzt, wird auf alle `columnheader`, `rowheader` und `gridcell`-Elemente weitervererbt. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf einzelnen tree grid-Elementenachkommen hinzugefügt wird.

Wie alle ARIA-Attribute informiert das Hinzufügen von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt nicht oder nicht bearbeitbar ist, es tut jedoch nichts, um die Interaktivität zu aktivieren oder zu deaktivieren. Das muss mit dem globalen HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut oder mit JavaScript geschehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) Rolle
  - : Eine Reihe von Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Rasterzellen, Spaltenköpfen oder Zeilenköpfen.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) Rolle
  - : Soll die Funktionalität des HTML {{HTMLElement('td')}}-Elements nachahmen, findet man in `grid`- und `treegrid`-Rollen und muss direktes Kind eines `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Kopfzeileninformation für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` innerhalb einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Deutet auch an, dass das Element erweiterbar ist, daher sollte es nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternteil und seinen Kind-Elementen, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um die `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das zur Benennung der Treegrid verwendet wird.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschlich lesbarer Zeichenfolgenwert, der die `treegrid` identifiziert. Wenn es ein sichtbares Label gibt, sollte `aria-labelledby` stattdessen verwendet werden.

### Tastaturinteraktionen

Um eine zugängliche `treegrid` zu erstellen, muss der Fokus mit einer Tastatur zwischen den Zeilen und Zellen des Rasters verschoben werden können. Der Fokus auf das Raster kann dazu führen, dass die erste Zelle oder die erste Zeile fokussiert wird. Ob der Fokus auf die nächste Zelle oder die Zeile geht, hängt von den Inhaltsanforderungen ab, wobei einige treegrids keinen Fokus auf Zeilen bereitstellen.

Die folgenden Tastaturaktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z.B. nachdem ein Benutzer den Fokus mit der Tabulator-Taste auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn der Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der `aria-expanded`-Eigenschaft liegt, öffnet oder schließt er die untergeordneten Zeilen. Andernfalls führt er die Standardaktion für die Zelle aus.
- <kbd>Tab</kbd>
  - : Wenn die Zeile mit Fokus fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wird der Fokus auf das nächste Eingabeelement in der Zeile verschoben. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, wird der Fokus aus dem `treegrid`-Widget auf das nächste fokussierbare Element verschoben.
- <kbd>Rechtspfeil</kbd>
  - : Wenn der Fokus auf einer reduzierten Zeile liegt, erweitert er die Zeile. Wenn der Fokus auf einer erweiterten Zeile liegt oder auf einer Zeile, die keine Unterzeilen hat, wird der Fokus auf die erste Zelle in der Zeile verschoben. Wenn der Fokus auf der äußersten rechten Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach rechts verschoben.
- <kbd>Linkspfeil</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, reduziert er die Zeile. Wenn der Fokus auf einer reduzierten Zeile liegt oder auf einer Zeile, die keine Unterzeilen hat, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus unterstützt wird, wird der Fokus auf die Zeile verschoben. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und der Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, wird der Fokus um eine Zelle nach links verschoben.
- <kbd>Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus um eine Zeile nach unten verschoben. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach unten verschoben. Wenn der Fokus auf der untersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus um eine Zeile nach oben verschoben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus um eine Zelle nach oben verschoben. Wenn der Fokus auf der obersten Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-Runter</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine voreingestellte Anzahl von Zeilen oder Zellen nach unten verschoben. Normalerweise bewegt es sich nach unten um die Höhe der `treegrid`, sodass die unterste Zeile in der aktuell sichtbaren Reihe von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn der Fokus sich in der letzten Zeile befindet, bewegt sich der Fokus nicht.
- <kbd>Bild-Hoch</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wird der Fokus um eine voreingestellte Anzahl von Zeilen nach oben verschoben. Normalerweise bewegt es sich nach oben um die Höhe der `treegrid`, sodass die oberste Zeile in der aktuell sichtbaren Reihe von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus sich in der ersten Zeile befindet, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus auf die erste Zeile verschoben. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus auf die erste Zelle in der Zeile verschoben. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Control + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird der Fokus auf die letzte Zeile verschoben. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wird der Fokus auf die letzte Zelle in der Zeile verschoben. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um den Fokus auf die letzte im DOM vorhandene Zeile zu setzen, oder auf die letzte verfügbare Zeile, wenn die gesamte Datenbank im DOM vorhanden wäre.

Wenn eine `treegrid` die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten normalerweise für diese Funktionen verwendet.

- <kbd>Control + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er alle Zellen aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Spalte aus, die den Fokus enthält.
- <kbd>Shift + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wählt er die Zeile aus. Wenn der Fokus auf einer Zelle liegt, wählt er die Zeile aus, die den Fokus enthält. Wenn die `treegrid` eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Taste auch als Verknüpfung verwendet werden, um das Kästchen zu aktivieren, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Rechtspfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach rechts.
- <kbd>Shift + Linkspfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach links.
- <kbd>Shift + Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert die Auswahl auf alle Zellen in der nächsten Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach unten.
- <kbd>Shift + Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, erweitert die Auswahl auf alle Zellen in der vorherigen Zeile. Wenn der Fokus auf einer Zelle liegt, erweitert die Auswahl um eine Zelle nach oben.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Tastaturereignisse, die den Fokus an den Anfang oder das Ende des Rasters bewegen, wie <kbd>Control + Ende</kbd>, den Fokus auf die letzte Zeile im DOM bewegen, anstatt auf die letzte verfügbare Zeile in den Backend-Daten.

Während Navigationsschlüssel wie Pfeiltasten den Fokus von Zelle zu Zelle bewegen, stehen sie nicht zur Verfügung, um etwas wie eine Kombobox zu bedienen oder einen Bearbeitungszeiger innerhalb einer Zelle zu verschieben. Wenn diese Funktionalität benötigt wird, siehe [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

<!--
### Erforderliche JavaScript-Funktionen

## Beispiele
-->

## Barrierefreiheitsbedenken

Es ist wichtig, dass alle Zellen oder den Tastaturfokus erhalten oder enthalten können, weil Bildschirmleser sich generell im Anwendungslesemodus und nicht im Dokumentlesemodus befinden, wenn Benutzer mit dem Raster interagieren. Im Anwendungsmodus hört ein Bildschirmleser-Benutzer nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente kennzeichnen. Wenn Inhalte keinen Fokus erhalten können, können Bildschirmleser-Benutzer Elemente innerhalb der `treegrid` unwissentlich übersehen.

<!--
## Beste Praktiken

### Bevorzugen Sie HTML
-->

## Spezifikationen

{{Specifications}}
