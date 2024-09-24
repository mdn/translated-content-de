---
title: XUL-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 75d617bb931a8d0ae0f87ce49b7b815b1e5ddcf8
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen bestehender Elemente. Während dieses Material an anderer Stelle ausführlich dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zu den detaillierten Dokumentationen.

### Neue Elemente

- Numerische Steuerungen:

  - Das neue `<scale>`-Element ermöglicht die Erstellung von Schiebereglern, mit denen der Benutzer einen beliebigen Wert in einem festgelegten Bereich auswählen kann. Dieses Widget wird typischerweise beispielsweise zur Erstellung einer Lautstärkeregelung verwendet.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textboxen erstellt eine Textbox, in der nur Zahlen eingegeben werden dürfen. Zusätzlich erscheinen Pfeiltasten auf einer Seite, die verwendet werden können, um durch Werte zu blättern. [Mehr Informationen über numerische Textboxen](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das beim Erstellen von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in verschiedenen Stilen verfügbar, indem das `type`-Attribut gesetzt wird, um die Eingabe mit Textboxen oder einem Kalendernetz zu ermöglichen. [Mehr Informationen über Datepicker.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden wurde für Menüs und Popups erstellt, der neue verfügbare Funktionen beschreibt:

  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das `<menupopup>`-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und Unterstützung für das Öffnen und Schließen von Untermenüs.

### Verbesserungen der Bäume

- Bäume können nun horizontal gescrollt werden. Wenn die Spalten nicht in die verfügbare Breite passen, erscheint ein horizontaler Bildlaufbalken. Dies passiert, wenn die angegebenen Breiten der Spalten mehr als den verfügbaren Platz einnehmen. Siehe [Firefox Bug 212789](https://bugzil.la/212789) für Details.
- Ein neuer Auswahlstil ermöglicht es, Zellen einzeln anstelle ganzer Zeilen auszuwählen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baumes auf `cell`.
- Bäume unterstützen jetzt das Bearbeiten einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Siehe [diese Notizen](https://wiki.mozilla.org/XUL:Tree) für Details.
- `<treecol>`-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text der Zellen innerhalb dieser Spalte in benachbarte leere Zellen zu erweitern, wenn der Text zu groß ist, um in diese einzelne Zelle zu passen.

### Verbesserungen der Menüs

- Das `image`-Attribut wird jetzt konsistent zum Setzen von Bildern verwendet.
- Menülists lösen das `select`-Ereignis aus, wenn ein Element ausgewählt wird.
- Die `inputField`- und `editable`-Eigenschaften wurden zu Menülists hinzugefügt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer `<menulist>` ausgewählt ist.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `control`-Eigenschaft, die die umgebende `<menulist>` zurückgibt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen jetzt die `accessKey`, `disabled`, `crop`, `image` und `label`-Eigenschaften, die das entsprechende Attribut setzen.
- Das `<menu>`-Element hat jetzt Methoden zum Anhängen, Einfügen und Entfernen von Menüitems. ([Firefox Bug 372552](https://bugzil.la/372552))
- Bearbeitbare Menülists bieten nun eine `editor`-Eigenschaft, um den internen `nsIEditor` für dessen Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die dies unterstützen, transluzent gemacht werden ([Firefox Bug 70798](https://bugzil.la/70798)).

### Verbesserungen der Textboxen

- Durch Setzen des `spellcheck`-Attributs einer Textbox auf `true` wird die Rechtschreibprüfung für diese Textbox aktiviert.
- Die `<textbox>` hat jetzt eine `reset()`-Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert der Textbox abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, mit der Sie den internen `nsIEditor` für das Textfeld erhalten.
- `textbox` unterstützt nun ein `newlines`-Attribut, das spezifiziert, wie Zeilenumbrüche im eingefügten Text behandelt werden. Mögliche Werte sind:

  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche mit Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche mit Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebenden Leerzeichen entfernen

### Weitere Verbesserungen

- Das `type`-Attribut auf einem `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Befehlsereignis wiederholt auslösen, solange die Maustaste gedrückt bleibt.
- Das `buttondisabledaccept`-Attribut kann jetzt auf dem `<dialog>`-Element verwendet werden, um die Schaltfläche Akzeptieren (OK) initial deaktiviert zu haben.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um Ereignisse an die Kinder der Titelleiste weiterzuleiten.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, was anzeigt, dass der Splitter Elemente auf beiden Seiten von ihm beim Ziehen kollabieren kann. Das `substate`-Attribut wird entweder auf before oder after gesetzt, wenn eines kollabiert ist. ([Firefox Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die id eines `<radiogroup>`-Elements gesetzt werden kann, zu dem die Radio-Schaltfläche gehört. Dies ermöglicht das Anordnen der Radio-Schaltflächen in einer Weise, die möglicherweise nicht so geeignet ist, wenn sie alle innerhalb einer Radiogruppe platziert werden.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, das als schwer verständlich galt.
- Die Handhabung des `<key>`-Elements wurde für Benutzer von nicht-lateinischen Tastaturlayouts verbessert.
- Auf Mac OS X stehen die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Root-Elemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) zur Verfügung, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
