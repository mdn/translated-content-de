---
title: Wichtige Fehlerbehebungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Dieser Artikel bietet eine Liste von wichtigen Fehlerbehebungen, die in Firefox 3 angeboten werden und die nicht unbedingt in der Dokumentation offensichtlich sind.

- Wenn ein Fehler beim Parsen eines Overlays auftritt, wird das Overlay nicht angewendet. Parse-Fehler werden in der Fehlerkonsole protokolliert. ([Firefox-Fehler 335755](https://bugzil.la/335755))
- Fehler behoben, bei dem `<menupopup>`-Elemente innerhalb einer Bindung platziert werden können, wenn sie an ein Menü oder ein menüartiges Element angehängt sind. ([Firefox-Fehler 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert nun ordnungsgemäß. ([Firefox-Fehler 308591](https://bugzil.la/308591))
- Das `canBubble`-Argument von [`event.initEvent`](/de/docs/Web/API/Event/initEvent) funktioniert jetzt richtig, sodass Ereignisse ausgelöst werden können, die nicht blubbern. ([Firefox-Fehler 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis behandelt nun namensraumspezifische Attribute korrekt. ([Firefox-Fehler 362391](https://bugzil.la/362391))
- XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>`, werden nun zum DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht garantiert das Wurzelelement ist, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement). Außerdem haben `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen außerhalb des Dokumentprologs keine Wirkung mehr. ([Firefox-Fehler 319654](https://bugzil.la/319654))
- [`getElementsByAttributeNS()`](https://web.archive.org/web/20201210015651/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/getElementsByAttributeNS)-Funktionen wurden zu XUL-Elementen und Dokumenten hinzugefügt. ([Firefox-Fehler 239976](https://bugzil.la/239976))
- Ereignis-Listener werden beibehalten, wenn ein Element aus einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Fehler 286619](https://bugzil.la/286619))
- Mutationsereignisse werden jetzt für nicht angezeigte Dokumente ausgelöst. ([Firefox-Fehler 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit der falschen Zeichnungsreihenfolge von Elementen wurden behoben. ([Firefox-Fehler 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde behoben, um korrekt mit Unterknoten mit Namensraumprefixen in ihren Tag-Namen zu funktionieren ([Firefox-Fehler 206053](https://bugzil.la/206053)).
- Die `DOMNodeInserted`- und `DOMNodeRemoved`-Ereignisse gelten jetzt korrekt für die richtigen Knoten ([Firefox-Fehler 367164](https://bugzil.la/367164)).
- `\d`, eines der Sonderzeichen in regulären Ausdrücken, wurde so korrigiert, dass es nur Ziffern des Basis-Latein-Alphabets (äquivalent zu `[0-9]`) entspricht. ([Firefox-Fehler 378738](https://bugzil.la/378738))
- Die Kategorie "Image-Sniffing-Services" ermöglicht es Bilddecodern, die als Erweiterungen implementiert sind, Bilder mit falschen Mime-Typen korrekt zu dekodieren. ([Firefox-Fehler 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularelemente bringen standardmäßig kein Kontextmenü mehr auf. ([Firefox-Fehler 404536](https://bugzil.la/404536). Siehe [Anbieten eines Kontextmenüs für Formularelemente](https://web.archive.org/web/20210612231358/https://developer.mozilla.org/de/docs/Archive/Add-ons/Offering_a_context_menu_for_form_controls), um zu erfahren, wie Sie dies fallweise aktivieren können.)

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
