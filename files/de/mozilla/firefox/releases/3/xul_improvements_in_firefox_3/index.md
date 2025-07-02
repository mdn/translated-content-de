---
title: Verbesserungen in XUL in Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 3 bietet eine Reihe neuer XUL-Elemente sowie Verbesserungen an bestehenden Elementen. Während dieses Material an anderer Stelle ausführlich dokumentiert ist, bietet dieser Artikel eine praktische Liste dieser Verbesserungen sowie Links zu den detaillierten Dokumentationen.

### Neue Elemente

- Numerische Kontrollen:
  - Das neue `<scale>`-Element ermöglicht es Ihnen, Schieberegler zu erstellen, mit denen der Benutzer einen beliebigen Wert in einem angegebenen Bereich auswählen kann. Dieses Widget wird typischerweise z. B. zur Erstellung einer Lautstärkeregelung verwendet.
  - Ein neuer Wert, `number`, für das `type`-Attribut von Textboxen erstellt eine Textbox, in die nur Zahlen eingegeben werden können. Zusätzlich erscheinen Pfeiltasten auf einer Seite, mit denen Sie durch Werte blättern können. [Weitere Informationen zu numerischen Textboxen](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([Firefox Bug 345510](https://bugzil.la/345510))
  - Ein `<spinbuttons>`-Element wurde hinzugefügt, das bei der Erstellung von Widgets mit XBL-Bindungen verwendet werden kann. ([Firefox Bug 155053](https://bugzil.la/155053))
  - Zwei Widgets, `<datepicker>` und `<timepicker>`, können verwendet werden, um die Eingabe von Daten und Zeiten zu ermöglichen. Der Datepicker ist in mehreren Stilen verfügbar, indem das `type`-Attribut festgelegt wird, um die Eingabe mit Textboxen oder einem Kalendergitter zu ermöglichen. [Weitere Informationen zu Datumswählern.](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Ein Leitfaden wurde für Menüs und Popups erstellt, der neue verfügbare Funktionen beschreibt:
  - Ein `<dropmarker>`-Element wurde hinzugefügt, das nützlich ist, wenn menüähnliche Widgets mit XBL-Bindungen erstellt werden. ([Firefox Bug 348614](https://bugzil.la/348614))
  - Das `<panel>`-Element ist neu und für Popups konzipiert, die keine Menüs sind. Sie können jeden Inhaltstyp unterstützen. Das \<menupopup>-Element sollte für Menüs verwendet werden. Menüs bieten Tastaturnavigation und unterstützen das Öffnen und Schließen von Untermenüs.

### Verbesserungen an Bäumen

- Bäume können jetzt horizontal gescrollt werden. Wenn die Spalten nicht in die verfügbare Breite passen, erscheint eine horizontale Bildlaufleiste. Dies passiert, wenn die angegebenen Breiten der Spalten mehr als den verfügbaren Platz ausmachen. Details finden Sie unter [Firefox Bug 212789](https://bugzil.la/212789).
- Ein neuer Auswahlstil erlaubt es, Zellen individuell auszuwählen, anstatt ganze Zeilen. Um diesen Auswahlstil zu verwenden, setzen Sie das `seltype`-Attribut des Baums auf `cell`.
- Bäume unterstützen jetzt das Bearbeiten einzelner Zellen. Wenn der Benutzer auf eine bearbeitbare Zelle doppelklickt, erscheint ein Textfeld, in dem der Benutzer den Inhalt der Zelle bearbeiten kann. Für Details siehe [diese Hinweise](https://wiki.mozilla.org/XUL:Tree).
- \<treecol>-Elemente unterstützen jetzt ein `overflow`-Attribut, das auf true gesetzt werden kann, um den Text der Zellen innerhalb dieser Spalte zu benachbarten leeren Zellen zu erweitern, wenn der Text zu groß ist, um in diese einzelne Zelle zu passen.

### Verbesserungen an Menüs

- Das `image`-Attribut wird jetzt konsistent für das Setzen von Bildern verwendet.
- Menülists lösen das `select`-Ereignis aus, wenn ein Element ausgewählt wird.
- Die Eigenschaften `inputField` und `editable` wurden zu menulist hinzugefügt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `selected`-Eigenschaft, die abruft, ob das Element in einer \<menulist> ausgewählt ist.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente haben jetzt eine schreibgeschützte `control`-Eigenschaft, die die umgebende \<menulist> zurückgibt.
- Die `<menu>`, `<menuitem>` und `<menuseparator>`-Elemente unterstützen jetzt die Eigenschaften `accessKey`, `disabled`, `crop`, `image` und `label`, die das entsprechende Attribut setzen.
- Das \<menu>-Element hat jetzt Methoden, um Menüelemente anzuhängen, einzufügen und zu entfernen. ([Firefox Bug 372552](https://bugzil.la/372552))
- Bearbeitbare Menülists bieten jetzt eine `editor`-Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten.
- Menüs können jetzt auf Plattformen, die dies unterstützen, durchsichtig gemacht werden ([Firefox Bug 70798](https://bugzil.la/70798)).

### Verbesserungen an Textboxen

- Das Setzen des `spellcheck`-Attributs einer Textbox auf `true` aktiviert die Inline-Rechtschreibprüfung für diese Textbox.
- Die `<textbox>` hat jetzt eine `reset()` Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert der Textbox abzurufen und zu ändern.
- Eine `editor`-Eigenschaft wird jetzt angeboten, die es ermöglicht, den internen `nsIEditor` für das Textfeld zu erhalten.
- `textbox` unterstützt jetzt ein `newlines`-Attribut, das angibt, wie Zeilenumbrüche im eingefügten Text behandelt werden. Mögliche Werte sind:
  - `pasteintact` - alles unverändert einfügen
  - `pastetofirst` - (Standardwert) nur bis zum ersten Zeilenumbruch einfügen
  - `replacewithspaces` - Zeilenumbrüche mit Leerzeichen ersetzen
  - `replacewithcommas` - Zeilenumbrüche mit Kommas ersetzen
  - `strip` - alle Zeilenumbrüche entfernen
  - `stripsurroundingwhitespace` - alle Zeilenumbrüche und umgebenden Leerraum entfernen

### Weitere Verbesserungen

- Das `type`-Attribut auf einem `<button>` kann auf `repeat` gesetzt werden, um Schaltflächen zu erstellen, die ihr Befehl-Ereignis wiederholt auslösen, während die Maustaste gedrückt wird.
- Das `buttondisabledaccept`-Attribut kann jetzt auf dem `<dialog>`-Element verwendet werden, um die akzeptieren (OK) Schaltfläche initial deaktiviert zu haben.
- Das `<titlebar>`-Element unterstützt jetzt das `allowevents`-Attribut, um zu ermöglichen, dass Ereignisse an die Kinder der Titelleiste weitergegeben werden.
- Der `<splitter>` unterstützt jetzt einen zusätzlichen Wert für das `collapse`-Attribut von `'both'`, das angibt, dass der Splitter in beide Richtungen Elemente einklappen kann, wenn er gezogen wird. Das `substate`-Attribut wird entweder auf before oder after gesetzt, wenn eines eingeklappt ist. ([Firefox Bug 337955](https://bugzil.la/337955))
- Das `<richlistbox>`-Element unterstützt jetzt Mehrfachauswahl. Setzen Sie das `seltype`-Attribut auf `'multiple'`, um dies zu aktivieren.
- Das `<radio>`-Element hat ein `group`-Attribut, das auf die ID eines `<radiogroup>`-Elements gesetzt werden kann, zu dem die Radio-Schaltfläche gehört. Dies ermöglicht es, die Radio-Schaltflächen in einer Weise zu arrangieren, die möglicherweise nicht so geeignet ist, wenn sie alle in einer radiogroup platziert sind.
- Menüs, Panels und Tooltips unterstützen zwei zusätzliche Methoden, `openPopup()` und `openPopupAtScreen()`. Diese Methoden sollten anstelle von `showPopup()` verwendet werden, das als verwirrend in der Verwendung empfunden wurde.
- Die Verarbeitung des `<key>`-Elements wurde für Benutzer von nicht-lateinischen Tastaturlayouts verbessert.
- Auf Mac OS X sind die Attribute `activetitlebarcolor` und `inactivetitlebarcolor` der Root-Elemente (`<window>`, `<dialog>`, `<prefwindow>` und `<wizard>`) verfügbar, um die Farbe der Titelleisten der Fenster anzupassen.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
