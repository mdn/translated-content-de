---
title: "ARIA: Rolle treegrid"
slug: Web/Accessibility/ARIA/Roles/treegrid_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `treegrid`-Rolle identifiziert ein Element als ein Raster, dessen Zeilen auf die gleiche Weise expandiert und kollabiert werden können wie bei einem `tree`.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Datengitter oder Tabelle, bestehend aus tabellarischen Informationen, die bearbeitbar oder interaktiv sind. Ein `treegrid` ist eine Kombination der Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Wie ein `grid` besteht das `treegrid` aus Zeilen, Spalten und Zellen (`gridcells`). Wie ein `tree` können Knotenkinder in einem `treegrid` expandiert und kollabiert werden.
Das `treegrid`-Widget enthält ein oder mehrere [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)-Elemente, optional mit [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)-Elementen, die die Zeilen gruppieren. Jede Zeile wiederum enthält eine oder mehrere Zellen. Jede Zelle ist entweder ein DOM-Nachkomme einer Zeilenrolle oder gehört zu einer, und ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder ein [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), wobei die Rolle `gridcell` für alle Zellen verwendet wird, die keine Spalten- oder Zeilenkopf-Daten enthalten.

Eine `row`, die expandiert oder kollabiert werden kann, um festgelegte Kindzeilen anzuzeigen oder zu verbergen, ist eine **Elternzeile**. Jede Elternzeile hat den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded), der entweder auf dem Zeilenelement selbst oder auf einer darin enthaltenen Zelle gesetzt ist.

Der `aria-expanded`-Zustand wird auf `true` gesetzt, wenn die Kindzeilen angezeigt werden, und auf `false`, wenn die Kindzeilen verborgen sind. Elemente, die die Anzeige von Kindzeilen nicht steuern, sollten das `aria-expanded`-Attribut nicht haben, da die Anwesenheit des Attributs assistiven Technologien signalisiert, dass das Element mit dem Attribut ein Elternteil ist.

Wenn Ihr Raster-UI Zeilen mit Unterstützung für `aria-expanded` erfordert oder wenn Ihr Raster Unterstützung für [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) benötigt, verwenden Sie `treegrid` anstatt `grid`.

Jede `row` oder `gridcell` in einer Zeile sollte mit der Tastatur fokussierbar sein, und der Tastaturfokus für alle Nachkommen der `treegrid` muss verwaltet werden. Die Ausnahme von dieser Regel sind Spaltenkopf-Zellen, die nicht fokussierbar sein müssen, sofern sie keine Funktionalität wie Sortieren oder Filtern bereitstellen. Jede Zeile und Zelle sollte entweder ein fokussierbares Element enthalten oder selbst fokussierbar sein, unabhängig davon, ob der Inhalt der einzelnen Zellen bearbeitbar oder interaktiv ist.

### Einfach- und Mehrfachauswahl in Treegrids

Wenn das `treegrid` dem Benutzer erlaubt, nur ein Element für eine Aktion zu wählen, spricht man von einem **Einfachauswahl-Treegrid**. In Einfachauswahl-Treegrids hat das Element mit Fokus auch einen ausgewählten Zustand, der mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) gesetzt wird.

Wenn das `treegrid` die Auswahl von mehr als einer Zeile oder Zelle unterstützt, handelt es sich um ein **Mehrfachauswahl-Treegrid**. In einem Mehrfachauswahl-Treegrid ist der ausgewählte Zustand unabhängig vom Fokus. Das visuelle Design und assistive Technologien müssen zwischen ausgewählten Elementen und dem Fokus-Element unterscheiden.

Für Mehrfachauswahl-Treegrids fügen Sie dem Element mit der `treegrid`-Rolle [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) hinzu. Alle ausgewählten Zeilen oder Zellen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf true gesetzt. Alle Zeilen und Zellen, die auswählbar aber derzeit nicht ausgewählt sind, haben `aria-selected` auf `false` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht zu Zeilen und Zellen hinzu, die nicht individuell auswählbar sind, da die Anwesenheit des Attributs assistiven Technologien signalisiert, dass die Zeile oder Zelle auswählbar ist.

### Verwaiste Zeilen

In Fällen, in denen eine Kindzeile oder -zeilengruppe (`rowgroup`) nicht im DOM als Nachkomme des `treegrid` verschachtelt ist, muss das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns), das alle IDs der nicht-nachkommenden Kinder referenziert, auf das `treegrid`-Element gesetzt werden. Wenn Zeilen oder Zellen über `aria-owns` in ein `treegrid` einbezogen werden, werden sie assistiven Technologien nach den DOM-Nachkommen des `treegrid`-Elements präsentiert, es sei denn, die tatsächlichen DOM-Nachkommen des Rasters sind ebenfalls im `aria-owns`-Attribut enthalten.

### Treegrids mit dynamisch geladenem Inhalt

Wenn einige Zeilen oder Spalten nicht im DOM sind und dynamisch geladen werden, wenn gescrollt wird, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) ins Spiel. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Die Werte sind jeweils die Gesamtanzahl der Spalten und Zeilen des vollständig geladenen Rasters. Die Indizes für jede Zeile und Spalte werden auf den einzelnen Zellen gesetzt, nicht auf dem `treegrid`-Element.

### Der zugängliche Name, die Beschreibung und der Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn ein entsprechendes Etikett im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Etikett für das `treegrid` dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `treegrid` hinzu und setzen Sie den Wert des Attributs auf die `id` des/labelling Elements oder der Elemente. Wenn kein sichtbares Etikett vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Nicht beides.

Wenn der Inhalt eine Beschriftung oder Beschreibung für das `treegrid` enthält, fügen Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) auf dem `treegrid`-Element hinzu, wobei der Attributwert die `id` des Elements ist, das die Beschreibung enthält.

Wenn das `treegrid` selbst den Fokus erhält, sollte der Wert seiner [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Eigenschaft die [`id`](/de/docs/Web/HTML/Global_attributes#id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` referenzieren, es sei denn, ein "roving tabindex" wird verwendet, um den Fokus zwischen diesen Rollen zu verwalten. In diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen deaktivierten Zustand visuell offensichtlich, programmatisch durchgesetzt und fügen Sie das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Attribut auf dem `treegrid` selbst hinzu, um assistiven Technologien seinen deaktivierten Zustand mitzuteilen.

### Treegrid Sortierung

Wenn das `treegrid` Sortierfunktionen bietet, wird das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut auf relevanten Kopfzellen-Elementen hinzugefügt, nicht auf dem Raster selbst.

### Treegrid Menüs

Wenn das `treegrid` ein angehängtes [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) hat, das bei Rechtsklick geöffnet wird, fügen Sie [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) dem `treegrid`-Element hinzu. Dies informiert assistive Technologien, dass das `treegrid` ein zugehöriges Popup hat. Die Fähigkeit für sowohl Tastatur- als auch Zeigegerätenutzer, das Menü zu öffnen und den Fokus darauf zu setzen, muss mit JavaScript hinzugefügt werden.

### Nur-Lese-Treegrids

Standardmäßig wird angenommen, dass Treegrids bearbeitbar sind. Wenn ein Treegrid nicht bearbeitbar ist, verwenden Sie das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut, um assistiven Technologien mitzuteilen, dass das `treegrid` schreibgeschützt ist. Der Attributswert, wenn er auf dem Element mit der `treegrid`-Rolle gesetzt ist, wird auf alle `columnheader`, `rowheader` und `gridcell`-Elemente übertragen. Dieser globale Wert kann für einzelne `gridcell`-Elemente überschrieben werden, indem `aria-readonly` auf individuellen Nachkommen des Treegrid-Elements hinzugefügt wird.

Wie bei allen ARIA-Attributen informiert das Hinzufügen von `aria-readonly` nur assistive Technologien darüber, dass der Inhalt bearbeitbar ist oder nicht, es bewirkt jedoch nichts, um Interaktivität zu aktivieren oder zu deaktivieren. Das muss mit dem globalen HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) oder mit JavaScript durchgeführt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) Rolle
  - : Eine Zeile von Zellen in einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Zeilen von Grid-Zellen, Spaltenüberschriften oder Zeilenüberschriften.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) Rolle
  - : Soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachbilden, wird in `grid`- und `treegrid`-Rollen gefunden und muss direktes Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
  - : Eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich wie das native {{HTMLElement('th')}} Element mit Spaltenbereich.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) Rolle
  - : Eine Zelle, die Kopfzeileninformationen für eine `row` in einer tabellarischen Struktur enthält.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Für erweiterbare Elemente ist der Wert `true` oder `false`. Zeigt auch an, dass der Artikel erweiterbar ist, daher sollte er nicht vorhanden sein, wenn das Element nicht erweitert werden kann.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Identifiziert eine kontextuelle Beziehung zwischen einem Elternteil und seinen Kindelementen, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die id des Elements, das das `treegrid` betitelt.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Ein menschenlesbarer String-Wert, der das `treegrid` identifiziert. Wenn es ein sichtbares Etikett gibt, sollte `aria-labelledby` stattdessen verwendet werden.

### Tastaturinteraktionen

Um eine zugängliche Treegrid zu erstellen, muss es mit der Tastatur möglich sein, den Fokus zwischen den Zeilen und Zellen des Rasters zu verschieben. Wenn der Fokus in das Raster wechselt, kann der Fokus auf die erste Zelle oder die erste Zeile fallen. Ob der Fokus zur nächsten angrenzenden Zelle oder zur Zeile wechselt, hängt von den Inhaltsanforderungen ab, wobei einige Treegrids den Fokus nicht auf Zeilen zulassen.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Raster den Fokus erhalten hat, z. B. nachdem ein Benutzer den Fokus mit Tab auf das Raster verschoben hat.

- <kbd>Enter</kbd>
  - : Wenn nur Zellenfokus aktiviert ist und der Fokus auf der ersten Zelle mit der Eigenschaft `aria-expanded` liegt, werden die Kindzeilen geöffnet oder geschlossen. Ansonsten wird die Standardaktion der Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die Zeile mit Fokus fokussierbare Elemente wie ein {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wechselt der Fokus zum nächsten Eingabefeld in der Zeile. Wenn der Fokus auf dem letzten fokussierbaren Element in der Zeile liegt, wechselt der Fokus aus dem `treegrid`-Widget zum nächsten fokussierbaren Element.
- <kbd>Rechtspfeil</kbd>
  - : Wenn der Fokus auf einer kollabierten Zeile liegt, wird die Zeile erweitert. Wenn der Fokus auf einer erweiterten Zeile oder einer Zeile ohne Kindzeilen liegt, wechselt der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus auf der am weitesten rechts gelegenen Zelle in einer Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus um eine Zelle nach rechts.
- <kbd>Linkspfeil</kbd>
  - : Wenn der Fokus auf einer erweiterten Zeile liegt, wird die Zeile kollabiert. Wenn der Fokus auf einer kollabierten Zeile oder einer Zeile ohne Kindzeilen liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf der ersten Zelle in einer Zeile liegt und Zeilenfokus unterstützt wird, wechselt der Fokus zur Zeile. Wenn der Fokus auf der ersten Zelle in einer Zeile und Zeilenfokus nicht unterstützt wird, bewegt sich der Fokus nicht. Wenn der Fokus auf einer anderen Zelle liegt, bewegt sich der Fokus um eine Zelle nach links.
- <kbd>Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wechselt der Fokus eine Zeile nach unten. Wenn der Fokus auf der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wechselt der Fokus um eine Zelle nach unten. Wenn der Fokus auf der unteren Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wechselt der Fokus eine Zeile nach oben. Wenn der Fokus auf der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wechselt der Fokus um eine Zelle nach oben. Wenn der Fokus auf der oberen Zelle in der Spalte liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-ab</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wechselt der Fokus eine vordefinierte Anzahl von Zeilen oder Zellen nach unten. Normalerweise bewegt es sich um die Höhe des `treegrid` nach unten und scrollt so, dass die unterste Zeile im aktuell sichtbaren Bereich der Zeilen zu einem der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Bild-auf</kbd>
  - : Wenn der Fokus auf einer Zeile oder Zelle liegt, wechselt der Fokus eine vordefinierte Anzahl von Zeilen nach oben. Normalerweise bewegt es sich um die Höhe des `treegrid` nach oben und scrollt so, dass die oberste Zeile im aktuell sichtbaren Bereich der Zeilen zu einem der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wechselt der Fokus zur ersten Zeile. Wenn der Fokus in der ersten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wechselt der Fokus zur ersten Zelle in der Zeile. Wenn der Fokus in der ersten Zelle der Zeile liegt, bewegt sich der Fokus nicht.
- <kbd>Ende</kbd> <kbd>Control + Ende</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wechselt der Fokus zur letzten Zeile. Wenn der Fokus in der letzten Zeile liegt, bewegt sich der Fokus nicht. Wenn der Fokus auf einer Zelle liegt, wechselt der Fokus zur letzten Zelle in der Zeile. Wenn der Fokus in der letzten Zelle der Zeile liegt, bewegt sich der Fokus nicht. Wenn nicht alle Zeilen im DOM vorhanden sind, kann dies verwendet werden, um sich auf die letzte Zeile im DOM oder, falls die gesamte Datenbank im DOM vorhanden wäre, auf die letzte verfügbare Zeile im DOM zu fokussieren.

Wenn ein `treegrid` die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden die folgenden Tasten häufig für diese Funktionen verwendet.

- <kbd>Strg + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, werden alle Zellen ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Spalte ausgewählt, die den Fokus enthält.
- <kbd>Umschalt + Leertaste</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Zeile ausgewählt. Wenn der Fokus auf einer Zelle liegt, wird die Zeile ausgewählt, die den Fokus enthält. Wenn das `treegrid` eine Spalte mit Kontrollkästchen für die Auswahl von Zeilen enthält, kann diese Taste auch als Verknüpfung zum Markieren des Feldes verwendet werden, wenn der Fokus nicht auf dem Kontrollkästchen liegt.
- <kbd>Strg + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Umschalt + Rechtspfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach rechts.
- <kbd>Umschalt + Linkspfeil</kbd>
  - : Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach links.
- <kbd>Umschalt + Abwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der nächsten Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach unten.
- <kbd>Umschalt + Aufwärtspfeil</kbd>
  - : Wenn der Fokus auf einer Zeile liegt, wird die Auswahl auf alle Zellen in der vorherigen Zeile erweitert. Wenn der Fokus auf einer Zelle liegt, erweitert sich die Auswahl um eine Zelle nach oben.

Wenn Navigationsfunktionen dynamisch mehr Zeilen oder Spalten zum DOM hinzufügen können, können Tastenereignisse, die den Fokus zum Anfang oder Ende des Rasters verlagern, wie z.B. <kbd>Steuerung + Ende</kbd>, den Fokus zur letzten Zeile im DOM anstatt zur letzten verfügbaren Zeile in den Backend-Daten bewegen.

Während Navigationsschlüssel, wie die Pfeiltasten, den Fokus von Zelle zu Zelle verschieben, stehen sie nicht zur Verfügung, um z.B. ein Kombinationsfeld zu bedienen oder einen Bearbeitungscursor innerhalb einer Zelle zu verschieben. Wenn diese Funktionalität benötigt wird, siehe [Bearbeiten und Navigieren in einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Barrierefreiheitsbedenken

Es ist wichtig, dass alle Zellen den Tastaturfokus erhalten oder enthalten können, da Screenreader normalerweise im Anwendungslesemodus sind und nicht in ihrem Dokumentlesemodus, wenn Benutzer mit dem Raster interagieren. Im Anwendungsmodus hört ein Screenreader-Benutzer nur fokussierbare Elemente und Inhalte, die fokussierbare Elemente kennzeichnen. Wenn Inhalte keinen Fokus erhalten können, könnten Benutzer von Screenreadern Elemente, die im `treegrid` enthalten sind, unbemerkt übersehen.

## Spezifikationen

{{Specifications}}

## Siehe auch
