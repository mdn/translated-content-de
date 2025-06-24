---
title: XUL-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen bestehender Elemente. Obwohl dieses Material detailliert an anderer Stelle dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zur ausführlichen Dokumentation.

### Neue Elemente

- Numerische Steuerungen:

  - Das neue `<scale>`-Element ermöglicht Ihnen die Erstellung von Schiebereglern, mit denen der Benutzer einen beliebigen Wert in einem angegebenen Bereich auswählen kann. Dieses Widget wird typischerweise verwendet, um beispielsweise eine Lautstärkeregler zu erstellen.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textfeldern erstellt ein Textfeld, in das nur Zahlen eingegeben werden können. Zudem erscheinen Pfeiltasten an einer Seite, die verwendet werden können, um durch Werte zu scrollen. [Mehr Informationen über numerische Textfelder](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox-Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das beim Erstellen von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox-Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Uhrzeiten zu ermöglichen. Der Datepicker ist in mehreren Stilen verfügbar, indem das `type`-Attribut festgelegt wird, um die Eingabe mit Textfeldern oder einem Kalendergitter zu ermöglichen. [Mehr Informationen über Datumsauswahlfelder.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden für Menüs und Popups wurde erstellt, der neue verfügbare Funktionen beschreibt:
  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, um menüähnliche Widgets mit XBL-Bindungen zu erstellen. ([Firefox-Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das \<menupopup>-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und unterstützen das Öffnen und Schließen von Untermenüs.

### Verbesserungen bei Bäumen

- Bäume können nun horizontal gescrollt werden. Wenn die Spalten nicht auf die verfügbare Breite passen, erscheint ein horizontaler Scrollbalken. Dies geschieht, wenn die angegebenen Breiten der Spalten zusammen größer als der verfügbare Platz sind. Details finden Sie unter [Firefox-Bug 212789](https://bugzil.la/212789).
- Ein neuer Auswahlstil erlaubt es, Zellen einzeln auszuwählen, anstatt ganze Zeilen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baums auf `cell`.
- Bäume unterstützen nun das Bearbeiten einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Details finden Sie in [diesem Hinweis](https://wiki.mozilla.org/XUL:Tree).
- \<treecol>-Elemente unterstützen nun ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text von Zellen innerhalb dieser Spalte zu benachbarten leeren Zellen zu erweitern, wenn der Text zu groß ist, um in diese eine Zelle zu passen.

### Verbesserungen bei Menüs

- Das `image`-Attribut wird jetzt konsistent zum Festlegen von Bildern verwendet.
- Menüliste löst das `select`-Ereignis beim Auswählen eines Elements aus.
- Die Eigenschaften `inputField` und `editable` wurden zu Menüliste hinzugefügt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer \<menulist> ausgewählt ist.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `control`-Eigenschaft, die die umschließende \<menulist> zurückgibt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen nun die Eigenschaften `accessKey`, `disabled`, `crop`, `image` und `label`, die das entsprechende Attribut festlegen.
- Das \<menu>-Element verfügt jetzt über Methoden zum Anfügen, Einfügen und Entfernen von Menüeinträgen. ([Firefox-Bug 372552](https://bugzil.la/372552))
- Editierbare Menüliste bietet jetzt eine `editor`-Eigenschaft, um den internen `nsIEditor` für ihr Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die dies unterstützen, durchscheinend gemacht werden ([Firefox-Bug 70798](https://bugzil.la/70798)).

### Verbesserungen bei Textfeldern

- Das Setzen des `spellcheck`-Attributs eines Textfeldes auf `true` aktiviert die Rechtschreibprüfung für dieses Textfeld.
- Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, die Ihnen ermöglicht, den internen `nsIEditor` für das Textfeld zu erhalten.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, welches spezifiziert, wie Zeilenumbrüche in eingefügtem Text gehandhabt werden. Mögliche Werte sind:
  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche mit Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche mit Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebende Leerzeichen entfernen

### Weitere Verbesserungen

- Das `type`-Attribut eines `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Befehlsereignis wiederholt auslösen, während die Maustaste gedrückt gehalten wird.
- Das Attribut `buttondisabledaccept` kann jetzt auf das `<dialog>`-Element angewendet werden, um die Akzeptieren-Schaltfläche (OK) anfangs deaktiviert zu haben.
- Das `<titlebar>`-Element unterstützt jetzt das Attribut `allowevents`, um Ereignisse an die Kinder der Titelleiste weiterzugeben.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, was anzeigt, dass der Splitter Elemente auf beiden Seiten von sich zusammenschieben kann, wenn er gezogen wird. Das `substate`-Attribut wird entweder auf `before` oder `after` gesetzt, wenn eines eingeklappt ist. ([Firefox-Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elements gesetzt werden kann, zu dem die Radio-Schaltfläche gehört. Dies ermöglicht es, die Radio-Schaltflächen in einer Weise anzuordnen, die möglicherweise nicht so geeignet ist, wenn Sie sie alle in einer Radiogruppe platzieren.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, was als verwirrend empfunden wurde.
- Die Handhabung des `<key>`-Elements wurde für Benutzer von nicht-lateinischen Tastaturlayouts verbessert.
- Auf Mac OS X sind die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Wurzelelemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) verfügbar, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
