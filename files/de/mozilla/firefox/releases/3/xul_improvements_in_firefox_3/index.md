---
title: XUL-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen bestehender Elemente. Während dieses Material an anderer Stelle detailliert dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zur detaillierten Dokumentation.

### Neue Elemente

- Numerische Steuerelemente:

  - Das neue `<scale>`-Element ermöglicht die Erstellung von Schiebereglern, mit denen der Benutzer beliebige Werte in einem festgelegten Bereich auswählen kann. Dieses Widget wird typischerweise verwendet, um beispielsweise eine Lautstärkeregelung zu erstellen.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textfeldern erstellt ein Textfeld, in das nur Zahlen eingegeben werden können. Außerdem erscheinen Pfeiltasten an einer Seite, die verwendet werden können, um durch Werte zu blättern. [Weitere Informationen über numerische Textfelder](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das bei der Erstellung von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in mehreren Stilen verfügbar, indem das Attribut `type` gesetzt wird, um die Eingabe mit Textfeldern oder einem Kalendergitter zu ermöglichen. [Weitere Informationen über Datepicker.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden für Menüs und Popups wurde erstellt, der neue verfügbare Funktionen beschreibt:

  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das \<menupopup>-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und Unterstützung zum Öffnen und Schließen von Untermenüs.

### Verbesserungen an Trees

- Trees können jetzt horizontal gescrollt werden. Wenn die Spalten nicht in die verfügbare Breite passen, erscheint eine horizontale Bildlaufleiste. Dies geschieht, wenn die angegebenen Breiten der Spalten mehr ausmachen als der verfügbare Platz. Weitere Details finden Sie im [Firefox Bug 212789](https://bugzil.la/212789).
- Ein neuer Auswahlstil ermöglicht es, einzelne Zellen anstelle ganzer Zeilen auszuwählen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baums auf `cell`.
- Trees unterstützen jetzt die Bearbeitung einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Weitere Details finden Sie in [diesen Anmerkungen](https://wiki.mozilla.org/XUL:Tree).
- `<treecol>`-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf wahr gesetzt werden kann, um den Text von Zellen innerhalb dieser Spalte zu erweitern, sodass er in benachbarte leere Zellen passt, wenn der Text zu groß ist, um in die einzelne Zelle zu passen.

### Verbesserungen an Menüs

- Das `image`-Attribut wird jetzt konsistent zum Einstellen von Bildern verwendet.
- Menüliste lösen das `select`-Ereignis aus, wenn ein Element ausgewählt wird.
- Die `inputField`- und `editable`-Eigenschaften wurden zur Menüliste hinzugefügt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine readonly `selected`-Eigenschaft, die abfragt, ob das Element in einer \<menulist> ausgewählt ist.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine readonly `control`-Eigenschaft, die die umschließende \<menulist> zurückgibt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen jetzt die `accessKey`-, `disabled`-, `crop`-, `image`- und `label`-Eigenschaften, die das entsprechende Attribut setzen.
- Das \<menu>-Element hat jetzt Methoden zum Anhängen, Einfügen und Entfernen von Menüelementen. ([Firefox Bug 372552](https://bugzil.la/372552))
- Bearbeitbare Menüliste bieten jetzt eine `editor`-Eigenschaft, um den internen `nsIEditor` für ihr Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die diese Funktion unterstützen, durchsichtig gemacht werden ([Firefox Bug 70798](https://bugzil.la/70798)).

### Verbesserungen an Textfeldern

- Das Setzen des `spellcheck`-Attributs eines Textfeldes auf `true` aktiviert die Rechtschreibprüfung für dieses Textfeld.
- Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfelds auf den Standardwert zurückzusetzen. Die Eigenschaft `defaultValue` kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, die es Ihnen ermöglicht, den internen `nsIEditor` für das Textfeld zu erhalten.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, das angibt, wie Zeilenumbrüche in eingefügtem Text behandelt werden. Mögliche Werte sind:

  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche durch Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche durch Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebende Leerzeichen entfernen

### Weitere Verbesserungen

- Das `type`-Attribut eines `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihre Befehlsereignisse wiederholt auslösen, während die Maustaste gedrückt gehalten wird.
- Das `buttondisabledaccept`-Attribut kann jetzt auf das `<dialog>`-Element angewendet werden, um die Schaltfläche Akzeptieren (OK) anfänglich zu deaktivieren.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um Ereignisse an die Kinder der Titelleiste weiterzuleiten.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, der angibt, dass der Splitter Elemente auf beiden Seiten kollabieren kann, wenn er gezogen wird. Das `substate`-Attribut wird entweder auf vorher oder nachher gesetzt, wenn eines kollabiert wird. ([Firefox Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt die Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elementes gesetzt werden kann, zu dem der Radiobutton gehört. Dadurch können die Radiobuttons so angeordnet werden, dass sie sich möglicherweise besser integrieren lassen, wenn sie nicht alle in einer Radiogruppe platziert sind.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, da sich letztere als verwirrend erwiesen hat.
- Die Behandlung des `<key>`-Elementes wurde für Benutzer mit nicht-lateinischen Tastaturlayouts verbessert.
- Unter Mac OS X stehen die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Wurzelelemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) zur Verfügung, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
