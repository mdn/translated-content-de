---
title: XUL-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 75d617bb931a8d0ae0f87ce49b7b815b1e5ddcf8
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen für bestehende Elemente. Während dieses Material an anderer Stelle ausführlich dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zur detaillierten Dokumentation.

### Neue Elemente

- Numerische Steuerungen:

  - Mit dem neuen `<scale>`-Element können Sie Schieberegler erstellen, mit denen der Benutzer einen beliebigen Wert in einem angegebenen Bereich auswählen kann. Dieses Widget würde typischerweise beispielsweise zur Erstellung einer Lautstärkeregelung verwendet.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textboxen erstellt eine Textbox, in der nur Zahlen eingegeben werden können. Zusätzlich erscheinen Pfeiltasten an einer Seite, mit denen Sie die Werte durchblättern können. [Mehr Informationen über numerische Textboxen](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox-Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wird hinzugefügt, das bei der Erstellung von Widgets unter Verwendung von XBL-Bindungen verwendet werden kann. ([Firefox-Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in mehreren Stilen verfügbar, indem Sie das `type`-Attribut setzen, um die Eingabe über Textboxen oder ein Kalendergitter zu ermöglichen. [Mehr Informationen über Datepicker.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden für Menüs und Popups wurde erstellt, der neue verfügbare Funktionen beschreibt:

  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox-Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das \<menupopup>-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und unterstützen das Öffnen und Schließen von Untermenüs.

### Verbesserungen bei Bäumen

- Bäume können jetzt horizontal gescrollt werden. Wenn die Spalten nicht in die verfügbare Breite passen, erscheint ein horizontaler Scrollbalken. Dies passiert, wenn die angegebenen Breiten der Spalten die verfügbare Breite überschreiten. Einzelheiten finden Sie in [Firefox-Bug 212789](https://bugzil.la/212789).
- Ein neuer Auswahlsstil ermöglicht es, Zellen einzeln auszuwählen, anstatt ganze Zeilen. Um diesen Auswahlsstil zu verwenden, setzen Sie das `seltype`-Attribut des Baums auf `cell`.
- Bäume unterstützen jetzt die Bearbeitung einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Weitere Details finden Sie in [diesen Notizen](https://wiki.mozilla.org/XUL:Tree).
- \<treecol>-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text der Zellen innerhalb dieser Spalte zu erweitern, wenn der Text zu groß ist, um in diese einzelne Zelle zu passen.

### Verbesserungen bei Menüs

- Das `image`-Attribut wird nun durchgängig zum Setzen von Bildern verwendet.
- Menulisten lösen das `select`-Ereignis aus, wenn ein Element ausgewählt wird.
- Die Eigenschaften `inputField` und `editable` wurden zu Menulisten hinzugefügt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer \<menulist> ausgewählt ist.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `control`-Eigenschaft, die die umschließende \<menulist> zurückgibt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen jetzt die Eigenschaften `accessKey`, `disabled`, `crop`, `image` und `label`, die das entsprechende Attribut setzen.
- Das \<menu>-Element hat jetzt Methoden zum Anhängen, Einfügen und Entfernen von Menuitems. ([Firefox-Bug 372552](https://bugzil.la/372552))
- Editierbare Menulisten bieten jetzt eine `editor`-Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die dies unterstützen, transparent gemacht werden ([Firefox-Bug 70798](https://bugzil.la/70798)).

### Verbesserungen bei Textboxen

- Das Setzen des `spellcheck`-Attributs einer Textbox auf `true` aktiviert die Inline-Rechtschreibprüfung für diese Textbox.
- Die `<textbox>` hat jetzt eine `reset()` Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die Eigenschaft `defaultValue` kann verwendet werden, um den Standardwert der Textbox abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, die es ermöglicht, den internen `nsIEditor` für das Textfeld zu erhalten.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, das angibt, wie Zeilenumbrüche im eingefügten Text gehandhabt werden. Mögliche Werte sind:

  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche durch Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche durch Kommata ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebende Leerzeichen entfernen

### Weitere Verbesserungen

- Das `type`-Attribut eines `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Kommandoereignis wiederholt auslösen, während die Maustaste gedrückt wird.
- Das `buttondisabledaccept`-Attribut kann jetzt auf das `<dialog>`-Element angewendet werden, um die Schaltfläche Akzeptieren (OK) initial zu deaktivieren.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um das Durchreichen von Ereignissen an die Kinder der Titelleiste zu ermöglichen.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das Attribut `collapse` von `'both'`, der angibt, dass der Splitter Elemente auf beiden Seiten zusammenklappen kann, wenn er gezogen wird. Das `substate`-Attribut wird auf either before oder after gesetzt, wenn eines zusammengeklappt ist. ([Firefox-Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt die Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elements gesetzt werden kann, zu dem der Radio-Button gehört. Dies ermöglicht es, die Radio-Buttons in einer Weise anzuordnen, die möglicherweise nicht so geeignet ist, wenn alle in einer Radiogruppe platziert werden.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, da letztere als verwirrend empfunden wurde.
- Die Handhabung des `<key>`-Elements wurde für Benutzer von nicht-lateinischen Tastaturlayouts verbessert.
- Unter Mac OS X stehen die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Hauptelemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) zur Verfügung, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
