---
title: XUL-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 75d617bb931a8d0ae0f87ce49b7b815b1e5ddcf8
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen für bestehende Elemente. Während dieses Material an anderer Stelle ausführlich dokumentiert wird, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zur detaillierten Dokumentation.

### Neue Elemente

- Numerische Steuerungselemente:

  - Das neue `<scale>`-Element ermöglicht die Erstellung von Schiebereglern, mit denen der Benutzer einen beliebigen Wert innerhalb eines bestimmten Bereichs auswählen kann. Dieses Widget könnte typischerweise verwendet werden, um beispielsweise eine Lautstärkeregelung zu erstellen.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textfeldern erstellt ein Textfeld, in das nur Zahlen eingegeben werden können. Zusätzlich erscheinen Pfeiltasten an einer Seite, mit denen Werte durchgeblättert werden können. [Weitere Informationen über numerische Textfelder](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox-Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das bei der Erstellung von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox-Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in mehreren Stilen verfügbar, indem das `type`-Attribut so gesetzt wird, dass die Eingabe über Textfelder oder ein Kalendergitter erfolgt. [Weitere Informationen über Datumsauswähler.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden wurde für Menüs und Popups erstellt, der neue verfügbare Funktionen beschreibt:

  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox-Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das `<menupopup>`-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und unterstützen das Öffnen und Schließen von Untermenüs.

### Verbesserungen bei Bäumen

- Bäume können nun horizontal gescrollt werden. Wenn die Spaltenbreiten nicht in die verfügbare Breite passen, erscheint ein horizontaler Bildlauf. Dies geschieht, wenn die angegebenen Breiten der Spalten die verfügbare Fläche übersteigen. Details hierzu finden Sie unter [Firefox-Bug 212789](https://bugzil.la/212789).
- Ein neuer Auswahlstil ermöglicht die individuelle Auswahl von Zellen anstelle ganzer Zeilen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baums auf `cell`.
- Bäume unterstützen jetzt das Bearbeiten einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Weitere Einzelheiten finden Sie in [diesen Notizen](https://wiki.mozilla.org/XUL:Tree).
- `<treecol>`-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text von Zellen innerhalb dieser Spalte auf benachbarte leere Zellen auszuweiten, wenn der Text zu groß ist, um in diese einzelne Zelle zu passen.

### Verbesserungen bei Menüs

- Das `image`-Attribut wird nun einheitlich zur Festlegung von Bildern verwendet.
- Menüliste erzeugen das `select`-Ereignis beim Auswählen eines Elements.
- Die Eigenschaften `inputField` und `editable` wurden zur Menüliste hinzugefügt.
- Die Elemente `<menu>`, `<menuitem>` und `<menuseparator>` besitzen nun eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer `<menulist>` ausgewählt ist.
- Die Elemente `<menu>`, `<menuitem>` und `<menuseparator>` besitzen nun eine schreibgeschützte `control`-Eigenschaft, die die umschließende `<menulist>` zurückgibt.
- Die Elemente `<menu>`, `<menuitem>` und `<menuseparator>` unterstützen jetzt die Eigenschaften `accessKey`, `disabled`, `crop`, `image` und `label`, die das entsprechende Attribut festlegen.
- Das `<menu>`-Element besitzt nun Methoden zum Anhängen, Einfügen und Entfernen von Menüelementen. ([Firefox-Bug 372552](https://bugzil.la/372552))
- Editierbare Menüliste bieten nun eine `editor`-Eigenschaft, um den internen `nsIEditor` für sein Textfeld zu erhalten.
- Menüs können nun auf Plattformen, die dies unterstützen, transluzent gemacht werden ([Firefox-Bug 70798](https://bugzil.la/70798)).

### Verbesserungen bei Textboxen

- Durch Setzen des `spellcheck`-Attributs einer Textbox auf `true` wird die Rechtschreibprüfung für diese Textbox aktiviert.
- Die `<textbox>` verfügt nun über eine `reset()` -Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert der Textbox abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird nun angeboten, mit der Sie den internen `nsIEditor` für das Textfeld abrufen können.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, das angibt, wie Zeilenumbrüche im eingefügten Text behandelt werden. Mögliche Werte sind:

  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche durch Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche durch Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebende Leerzeichen entfernen

### Weitere Verbesserungen

- Das `type`-Attribut eines `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Befehlsereignis wiederholt auslösen, solange die Maustaste gedrückt wird.
- Das `buttondisabledaccept`-Attribut kann jetzt auf dem `<dialog>`-Element verwendet werden, um die Akzeptieren (OK)-Schaltfläche zunächst zu deaktivieren.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um Ereignisse an die Kinder der Titelleiste zu übergeben.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, der anzeigt, dass der Splitter Elemente auf beiden Seiten zusammenfalten kann, wenn er gezogen wird. Das `substate`-Attribut wird auf entweder vor oder nach gesetzt, wenn einer zusammengefaltet ist. ([Firefox-Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt die Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element besitzt ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elements gesetzt werden kann, zu dem die Radioschaltfläche gehört. Dies ermöglicht es, Radiobuttons in einer Anordnung unterzubringen, die möglicherweise nicht so geeignet ist, wenn sie alle innerhalb einer Radiogruppe platziert werden.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, dessen Nutzung als verwirrend empfunden wurde.
- Die Handhabung des `<key>`-Elements wurde für Benutzer mit nicht-lateinischen Tastaturlayouts verbessert.
- Auf Mac OS X stehen die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Root-Elemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) zur Verfügung, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
