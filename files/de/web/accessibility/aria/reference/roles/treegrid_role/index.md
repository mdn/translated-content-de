---
title: "ARIA: treegrid-Rolle"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: 9a211854aefbe716aabfcebb0b2f0de2c1a52b23
---

Die Rolle `treegrid` kennzeichnet ein Element als Grid, dessen Zeilen wie bei einem `tree` auf- und zugeklappt werden können.

## Beschreibung

Ein `treegrid` ist ein hierarchisches Daten-Grid oder eine Tabelle mit tabellarischen Informationen, die bearbeitbar oder interaktiv sind. Ein `treegrid` kombiniert die Rollen [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) und [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wie ein `grid` besteht ein `treegrid` aus Zeilen, Spalten und Grid-Zellen. Wie bei einem `tree` können übergeordnete Knoten in einem `treegrid` auf- und zugeklappt werden.

Das `treegrid`-Widget enthält mindestens ein [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Element. Optional können [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Elemente die Zeilen gruppieren. Jede Zeile enthält wiederum mindestens eine Zelle. Jede Zelle ist entweder ein DOM-Nachfahre eines Zeilenelements oder diesem über eine ARIA-Beziehung zugeordnet. Sie ist entweder ein [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-, [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)- oder [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Element. Die Rolle `gridcell` wird für alle Zellen verwendet, die keine Spalten- oder Zeilenüberschriften enthalten.

Eine `row`, die zum Ein- oder Ausblenden untergeordneter Zeilen auf- oder zugeklappt werden kann, ist eine **übergeordnete Zeile**. Bei jeder übergeordneten Zeile ist der Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entweder auf dem Zeilenelement oder auf einer Zelle innerhalb der Zeile gesetzt.

Der Zustand `aria-expanded` ist auf `true` gesetzt, wenn die untergeordneten Zeilen angezeigt werden, und auf `false`, wenn sie ausgeblendet sind. Elemente, die die Anzeige untergeordneter Zeilen nicht steuern, sollten das Attribut `aria-expanded` nicht haben. Das Vorhandensein dieses Attributs signalisiert assistiven Technologien, dass das betreffende Element übergeordnet ist.

Wenn Ihre Grid-Benutzeroberfläche Zeilen mit `aria-expanded` benötigt oder Ihr Grid [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) oder [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) unterstützen muss, verwenden Sie `treegrid` statt `grid`.

Jede `row` und jede `gridcell` in einer Zeile sollte per Tastatur fokussierbar sein. Der Tastaturfokus muss für alle diese untergeordneten Elemente des Treegrids verwaltet werden. Eine Ausnahme bilden Spaltenüberschriften: Sie müssen nicht fokussierbar sein, wenn sie keine Funktionen wie Sortieren oder Filtern bereitstellen. Jede Zeile und jede Zelle sollte entweder selbst fokussierbar sein oder ein fokussierbares Element enthalten – unabhängig davon, ob der Inhalt einzelner Zellen bearbeitbar oder interaktiv ist.

### Treegrids mit Einfach- und Mehrfachauswahl

Wenn das `treegrid` Benutzern erlaubt, nur ein Element für eine Aktion auszuwählen, handelt es sich um ein Treegrid mit **Einfachauswahl**. In solchen Treegrids hat das fokussierte Element zugleich einen mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) gesetzten Auswahlzustand.

Wenn das Treegrid die Auswahl mehrerer Zeilen oder Zellen unterstützt, handelt es sich um ein Treegrid mit **Mehrfachauswahl**. Dort ist der Auswahlzustand unabhängig vom Fokus. Sowohl die visuelle Gestaltung als auch assistive Technologien müssen zwischen ausgewählten Elementen und dem fokussierten Element unterscheiden können.

Fügen Sie bei Treegrids mit Mehrfachauswahl [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) zum Element mit der Rolle `treegrid` hinzu. Bei allen ausgewählten Zeilen oder Zellen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Bei allen auswählbaren, aber derzeit nicht ausgewählten Zeilen und Zellen ist `aria-selected` auf `false` gesetzt. Fügen Sie das Attribut `aria-selected` nicht zu Zeilen und Zellen hinzu, die nicht einzeln auswählbar sind: Das Vorhandensein des Attributs signalisiert assistiven Technologien, dass die Zeile oder Zelle auswählbar ist.

### Zeilen außerhalb der DOM-Hierarchie

Wenn eine untergeordnete `row` oder `rowgroup` im DOM nicht innerhalb des `treegrid` liegt, muss auf dem `treegrid`-Element das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) gesetzt werden. Es muss auf die IDs aller untergeordneten Elemente verweisen, die keine DOM-Nachfahren sind. Werden Zeilen oder Zellen über `aria-owns` in ein Treegrid eingebunden, erscheinen sie für assistive Technologien nach den DOM-Nachfahren des `treegrid`-Elements – es sei denn, die tatsächlichen DOM-Nachfahren des Grids sind ebenfalls im Attribut `aria-owns` aufgeführt.

### Treegrids mit dynamisch geladenen Inhalten

Wenn einige Zeilen oder Spalten nicht im DOM vorhanden sind und beim Scrollen dynamisch geladen werden, kommen [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) zum Einsatz. Die Eigenschaften `aria-colcount` und `aria-rowcount` werden auf dem `treegrid` gesetzt. Ihre Werte geben die Gesamtzahl der Spalten beziehungsweise Zeilen des vollständig geladenen Grids an. Die Indizes für die einzelnen Zeilen und Spalten werden auf den jeweiligen Zellen gesetzt, nicht auf dem `treegrid`-Element.

### Zugänglicher Name, Beschreibung und Fokus eines Treegrids

Das Element mit der Rolle `treegrid` muss einen zugänglichen Namen haben. Wenn im Inhalt eine geeignete Beschriftung sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Wenn also ein Element der Benutzeroberfläche als Beschriftung für das Treegrid dient, fügen Sie dem Element mit der Rolle `treegrid` das Attribut `aria-labelledby` hinzu. Setzen Sie dessen Wert auf die `id` des beschriftenden Elements beziehungsweise auf die IDs der beschriftenden Elemente. Wenn keine sichtbare Beschriftung vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Verwenden Sie nicht beides.

Wenn der Inhalt eine Bildunterschrift oder Beschreibung für das `treegrid` enthält, fügen Sie dem `treegrid`-Element [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu. Als Attributwert verwenden Sie die `id` des Elements, das die Beschreibung enthält.

Wenn der `treegrid`-Container selbst den Fokus erhält, sollte der Wert seiner Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der ausgewählten `row`, `columnheader`, `rowheader` oder `gridcell` verweisen. Dies gilt nicht, wenn der Fokus zwischen diesen Rollen mit einem wandernden tabindex verwaltet wird. In diesem Fall sollte `aria-activedescendant` nicht verwendet werden.

Wenn das `treegrid` deaktiviert ist, machen Sie diesen Zustand visuell erkennbar und setzen Sie ihn programmatisch durch. Fügen Sie außerdem dem `treegrid` selbst das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) hinzu, um assistive Technologien über den deaktivierten Zustand zu informieren.

### Sortieren in Treegrids

Wenn das Treegrid Sortierfunktionen bereitstellt, wird das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) auf den betreffenden Überschriftenzellen gesetzt, nicht auf dem Grid selbst.

### Menüs für Treegrids

Wenn dem `treegrid` ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) zugeordnet ist, das sich per Rechtsklick öffnet, fügen Sie dem `treegrid`-Element [`aria-haspopup="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) hinzu. Dadurch erfahren assistive Technologien, dass dem `treegrid` ein Popup zugeordnet ist. Die Möglichkeit, das Menü sowohl per Tastatur als auch mit einem Zeigegerät zu öffnen und den Fokus darin zu setzen, muss mit JavaScript implementiert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Rolle
  - : Eine Zeile mit Zellen innerhalb einer tabellarischen Struktur, optional innerhalb einer `rowgroup`. Enthält eine oder mehrere Reihen von Grid-Zellen, Spaltenüberschriften oder Zeilenüberschriften.
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)-Rolle
  - : Eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur.
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)-Rolle
  - : Soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachbilden, kommt in den Rollen `grid` und `treegrid` vor und muss ein direktes Kind einer `row` sein.
- [columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-Rolle
  - : Eine Zelle in einer Zeile, die Überschrifteninformationen für eine Spalte enthält, ähnlich dem nativen Element {{HTMLElement('th')}} mit Spaltenbezug.
- [rowheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)-Rolle
  - : Eine Zelle mit Überschrifteninformationen für eine `row` innerhalb einer tabellarischen Struktur.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Bei aufklappbaren Elementen ist der Wert `true` oder `false`. Das Attribut zeigt zugleich an, dass das Element aufklappbar ist. Es sollte daher nicht vorhanden sein, wenn das Element nicht aufgeklappt werden kann.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Gibt an, ob Zellinhalte in einem Treegrid mit Bearbeitungsfunktionen bearbeitet werden können. Lassen Sie dieses Attribut weg, wenn das Treegrid keine Bearbeitung von Zellinhalten ermöglicht. Beachten Sie, dass das Auf- und Zuklappen von Zeilen keine Bearbeitung von Zellinhalten darstellt. Der auf dem Treegrid gesetzte Wert wird an seine Grid-Zellen weitergegeben und kann für einzelne Grid-Zellen überschrieben werden. Das Attribut informiert lediglich assistive Technologien; es aktiviert oder deaktiviert die Bearbeitung nicht.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Kennzeichnet die Beziehung zwischen einem übergeordneten Element und seinen untergeordneten Elementen, wenn sich diese Beziehung nicht durch die DOM-Hierarchie darstellen lässt.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das `treegrid` zu beschriften. Der Wert von `aria-labelledby` ist im Allgemeinen die ID des Elements, das dem Treegrid seinen Titel gibt.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine menschenlesbare Zeichenfolge, die das `treegrid` bezeichnet. Wenn eine sichtbare Beschriftung vorhanden ist, sollte stattdessen `aria-labelledby` verwendet werden.

### Tastaturinteraktionen

Damit ein Treegrid zugänglich ist, muss die Navigation per Tastatur zwischen seinen Zeilen und Zellen implementiert werden. Wenn der Fokus in das Grid gelangt, kann zunächst die erste Zelle oder die erste Zeile fokussiert werden. Ob der Fokus anschließend zur benachbarten Zelle oder zur nächsten Zeile wechselt, hängt von den Anforderungen des Inhalts ab. Bei manchen Treegrids können Zeilen keinen Fokus erhalten.

Die folgenden Tastaturinteraktionen müssen unterstützt werden, wenn ein Element im Grid den Fokus erhalten hat, beispielsweise nachdem ein Benutzer mit der Tabulatortaste zum Grid gewechselt ist.

- <kbd>Enter</kbd>
  - : Wenn nur Zellen fokussiert werden können und der Fokus auf der ersten Zelle mit der Eigenschaft `aria-expanded` liegt, werden die untergeordneten Zeilen auf- oder zugeklappt. Andernfalls wird die Standardaktion der Zelle ausgeführt.
- <kbd>Tab</kbd>
  - : Wenn die fokussierte Zeile fokussierbare Elemente wie {{HTMLElement('input')}}, {{HTMLElement('button')}} oder {{HTMLElement('a')}} enthält, wechselt der Fokus zum nächsten fokussierbaren Element in der Zeile. Befindet sich der Fokus auf dem letzten fokussierbaren Element der Zeile, wechselt er aus dem Treegrid-Widget zum nächsten fokussierbaren Element.
- <kbd>Right Arrow</kbd>
  - : Liegt der Fokus auf einer zugeklappten Zeile, wird diese aufgeklappt. Liegt er auf einer aufgeklappten Zeile oder auf einer Zeile ohne untergeordnete Zeilen, wechselt er zur ersten Zelle der Zeile. Liegt der Fokus auf der Zelle ganz rechts in einer Zeile, bleibt er unverändert. Von jeder anderen Zelle wechselt er eine Zelle nach rechts.
- <kbd>Left Arrow</kbd>
  - : Liegt der Fokus auf einer aufgeklappten Zeile, wird diese zugeklappt. Liegt er auf einer zugeklappten Zeile oder auf einer Zeile ohne untergeordnete Zeilen, bleibt er unverändert. Liegt der Fokus auf der ersten Zelle einer Zeile und können Zeilen fokussiert werden, wechselt er zur Zeile. Können Zeilen nicht fokussiert werden, bleibt er auf der ersten Zelle. Von jeder anderen Zelle wechselt er eine Zelle nach links.
- <kbd>Down Arrow</kbd>
  - : Liegt der Fokus auf einer Zeile, wechselt er eine Zeile nach unten. In der letzten Zeile bleibt er unverändert. Liegt der Fokus auf einer Zelle, wechselt er eine Zelle nach unten. In der untersten Zelle der Spalte bleibt er unverändert.
- <kbd>Up Arrow</kbd>
  - : Liegt der Fokus auf einer Zeile, wechselt er eine Zeile nach oben. In der ersten Zeile bleibt er unverändert. Liegt der Fokus auf einer Zelle, wechselt er eine Zelle nach oben. In der obersten Zelle der Spalte bleibt er unverändert.
- <kbd>Page Down</kbd>
  - : Liegt der Fokus auf einer Zeile oder Zelle, wechselt er um eine festgelegte Anzahl von Zeilen oder Zellen nach unten. Üblicherweise entspricht die Strecke der Höhe des Treegrids. Dabei wird so weit gescrollt, dass die unterste der derzeit sichtbaren Zeilen anschließend zu den ersten sichtbaren Zeilen gehört. Liegt der Fokus in der letzten Zeile, bleibt er unverändert.
- <kbd>Page Up</kbd>
  - : Liegt der Fokus auf einer Zeile oder Zelle, wechselt er um eine festgelegte Anzahl von Zeilen nach oben. Üblicherweise entspricht die Strecke der Höhe des Treegrids. Dabei wird so weit gescrollt, dass die oberste der derzeit sichtbaren Zeilen anschließend zu den letzten sichtbaren Zeilen gehört. Liegt der Fokus in der ersten Zeile, bleibt er unverändert.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : Liegt der Fokus auf einer Zeile, wechselt er zur ersten Zeile. In der ersten Zeile bleibt er unverändert. Liegt der Fokus auf einer Zelle, wechselt er zur ersten Zelle der Zeile. In der ersten Zelle der Zeile bleibt er unverändert.
- <kbd>End</kbd> <kbd>Control + End</kbd></td><td>
  - : Liegt der Fokus auf einer Zeile, wechselt er zur letzten Zeile. In der letzten Zeile bleibt er unverändert. Liegt der Fokus auf einer Zelle, wechselt er zur letzten Zelle der Zeile. In der letzten Zelle der Zeile bleibt er unverändert. Wenn nicht alle Zeilen im DOM vorhanden sind, kann damit die letzte im DOM vorhandene Zeile oder die letzte verfügbare Zeile fokussiert werden, die bei vollständiger Einbindung der Datenbank im DOM vorhanden wäre.

Wenn ein Treegrid die Auswahl von Zellen, Zeilen oder Spalten unterstützt, werden dafür häufig die folgenden Tasten verwendet.

- <kbd>Control + Space</kbd>
  - : Liegt der Fokus auf einer Zeile, werden alle Zellen ausgewählt. Liegt er auf einer Zelle, wird die Spalte ausgewählt, die den Fokus enthält.
- <kbd>Shift + Space</kbd>
  - : Liegt der Fokus auf einer Zeile, wird diese Zeile ausgewählt. Liegt er auf einer Zelle, wird die Zeile ausgewählt, die den Fokus enthält. Wenn das Treegrid eine Spalte mit Kontrollkästchen zur Auswahl von Zeilen enthält, kann diese Tastenkombination auch als Kurzbefehl zum Aktivieren des Kontrollkästchens verwendet werden, wenn dieses nicht fokussiert ist.
- <kbd>Control + A</kbd>
  - : Wählt alle Zellen aus.
- <kbd>Shift + Right Arrow</kbd>
  - : Liegt der Fokus auf einer Zelle, wird die Auswahl um eine Zelle nach rechts erweitert.
- <kbd>Shift + Left Arrow</kbd>
  - : Liegt der Fokus auf einer Zelle, wird die Auswahl um eine Zelle nach links erweitert.
- <kbd>Shift + Down Arrow</kbd>
  - : Liegt der Fokus auf einer Zeile, wird die Auswahl auf alle Zellen der nächsten Zeile erweitert. Liegt er auf einer Zelle, wird die Auswahl um eine Zelle nach unten erweitert.
- <kbd>Shift + Up Arrow</kbd>
  - : Liegt der Fokus auf einer Zeile, wird die Auswahl auf alle Zellen der vorherigen Zeile erweitert. Liegt er auf einer Zelle, wird die Auswahl um eine Zelle nach oben erweitert.

Wenn Navigationsfunktionen dynamisch weitere Zeilen oder Spalten zum DOM hinzufügen können, setzen Tastenereignisse für den Wechsel zum Anfang oder Ende des Grids – etwa <kbd>control + End</kbd> – den Fokus möglicherweise auf die letzte Zeile im DOM statt auf die letzte in den Backend-Daten verfügbare Zeile.

Solange Navigationstasten wie die Pfeiltasten den Fokus von Zelle zu Zelle bewegen, können sie nicht zugleich für andere Aufgaben verwendet werden, etwa zum Bedienen einer Combobox oder zum Bewegen der Einfügemarke innerhalb einer Zelle. Wenn diese Funktionalität benötigt wird, lesen Sie [Bearbeiten und Navigieren innerhalb einer Zelle](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

<!--
### Required JavaScript features
-->

## Hinweise zur Barrierefreiheit

Es ist wichtig, dass alle Zellen den Tastaturfokus erhalten oder ein fokussierbares Element enthalten können. Screenreader befinden sich bei der Interaktion mit einem Grid üblicherweise im Anwendungsmodus und nicht im Dokumentlesemodus. Im Anwendungsmodus hören Benutzer von Screenreadern nur fokussierbare Elemente und Inhalte, die diese Elemente beschriften. Wenn Inhalte keinen Fokus erhalten können, übersehen Benutzer von Screenreadern möglicherweise unbemerkt Elemente innerhalb des Treegrids.

<!--
## Best Practices

### Prefer HTML

## Examples
-->

## Spezifikationen

{{Specifications}}
