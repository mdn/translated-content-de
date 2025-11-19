---
title: XUL Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen bestehender Elemente. Während dieses Material an anderer Stelle detailliert dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zur detaillierten Dokumentation.

## Neue Elemente

- Numerische Steuerungen:
  - Das neue `<scale>`-Element ermöglicht es Ihnen, Schieberegler zu erstellen, mit denen der Benutzer jeden Wert in einem angegebenen Bereich auswählen kann. Dieses Widget würde typischerweise verwendet werden, um beispielsweise eine Lautstärkeregelung zu erstellen.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textfeldern erstellt ein Textfeld, in das nur Zahlen eingegeben werden dürfen. Zusätzlich erscheinen Pfeiltasten auf einer Seite, die verwendet werden können, um durch die Werte zu blättern. [Mehr Informationen über numerische Textfelder](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das beim Erstellen von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in einer Reihe von Stilen verfügbar, indem das `type`-Attribut gesetzt wird, um die Eingabe mit Textfeldern oder einem Kalendergitter zu ermöglichen. [Mehr Informationen über Datumswähler.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden wurde für Menüs und Popups erstellt, der neue verfügbare Funktionen beschreibt:
  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups gedacht, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das \<menupopup>-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und unterstützen das Öffnen und Schließen von Untermenüs.

## Verbesserungen der Baumstrukturen

- Baumstrukturen können jetzt horizontal gescrollt werden. Wenn die Spalten nicht in die verfügbare Breite passen, erscheint ein horizontaler Scrollbalken. Dies geschieht, wenn die angegebenen Breiten der Spalten zusammen mehr als der verfügbare Platz sind. Siehe [Firefox Bug 212789](https://bugzil.la/212789) für Details.
- Ein neuer Auswahlstil ermöglicht es, Zellen einzeln auszuwählen, anstatt ganze Zeilen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baumes auf `cell`.
- Baumstrukturen unterstützen jetzt die Bearbeitung einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Siehe [diese Notizen](https://wiki.mozilla.org/XUL:Tree) für Details.
- \<treecol>-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text der Zellen innerhalb dieser Spalte auf benachbarte leere Zellen auszuweiten, wenn der Text zu groß ist, um in eine einzelne Zelle zu passen.

## Verbesserungen der Menüs

- Das `image`-Attribut wird nun konsistent für die Einstellung von Bildern verwendet.
- Menüliste feuern das `select`-Ereignis beim Auswählen eines Elements ab.
- Die `inputField`- und `editable`-Eigenschaften wurden zur menulist hinzugefügt
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer \<menulist> ausgewählt ist
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `control`-Eigenschaft, die die umschließende \<menulist> zurückgibt
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen jetzt die `accessKey`, `disabled`, `crop`, `image` und `label`-Eigenschaften, die das entsprechende Attribut setzen
- Das \<menu>-Element hat jetzt Methoden zum Anhängen, Einfügen und Entfernen von Menüpunkten. ([Firefox Bug 372552](https://bugzil.la/372552))
- Bearbeitbare Menüliste bieten jetzt eine `editor`-Eigenschaft, um den internen `nsIEditor` für ihr Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die es unterstützen, transluzent gemacht werden ([Firefox Bug 70798](https://bugzil.la/70798)).

## Verbesserungen der Textfelder

- Das Setzen des `spellcheck`-Attributs eines Textfeldes auf `true` aktiviert die Rechtschreibprüfung für dieses Textfeld.
- Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, die es Ihnen ermöglicht, den internen `nsIEditor` für das Textfeld zu erhalten.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, das angibt, wie Zeilenumbrüche in eingefügtem Text behandelt werden. Mögliche Werte sind:
  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche durch Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche durch Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebende Leerzeichen entfernen

## Weitere Verbesserungen

- Das `type`-Attribut an einem `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Befehlsereignis wiederholt feuern, während die Maustaste gedrückt gehalten wird.
- Das `buttondisabledaccept`-Attribut kann nun beim `<dialog>`-Element verwendet werden, um die Akzeptieren (OK)-Schaltfläche initial zu deaktivieren.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um Ereignisse an die Kinder der Titelleiste weiterzugeben.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, was bedeutet, dass der Splitter Elemente auf beiden Seiten von ihm beim Ziehen zusammenklappen kann. Das `substate`-Attribut wird auf entweder `before` oder `after` gesetzt, wenn eines zusammengeklappt ist. ([Firefox Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elements gesetzt werden kann, zu dem der Radio-Button gehört. Dies ermöglicht es, die Radio-Buttons in einer Weise anzuordnen, die möglicherweise nicht so geeignet ist, wenn sie alle innerhalb einer Radiogruppe platziert werden.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, da letzteres als verwirrend in der Nutzung empfunden wurde.
- Der Umgang mit dem `<key>`-Element wurde für Benutzer mit nicht-lateinischen Tastaturlayouts verbessert.
- Unter Mac OS X sind die `activetitlebarcolor` und `inactivetitlebarcolor` Attribute der Root-Elemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) verfügbar, um die Farbe der Titelleisten der Fenster anzupassen.

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
