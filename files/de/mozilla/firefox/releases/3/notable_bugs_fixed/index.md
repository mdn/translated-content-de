---
title: Wichtige Bugs, die in Firefox 3 behoben wurden
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet eine Liste wichtiger Bug-Fixes, die von Firefox 3 bereitgestellt werden und die nicht unbedingt in der Dokumentation offensichtlich sind.

- Wenn ein Fehler beim Parsen eines Overlays auftritt, wird das Overlay nicht angewendet. Parserfehler werden in die Fehlerkonsole protokolliert. ([Firefox-Bug 335755](https://bugzil.la/335755))
- Ein Bug wurde behoben, bei dem `<menupopup>`-Elemente innerhalb einer Bindung platziert werden können, wenn sie an ein Menü- oder Menü-ähnliches Element angehängt sind. ([Firefox-Bug 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert jetzt ordnungsgemäß. ([Firefox-Bug 308591](https://bugzil.la/308591))
- Das `canBubble`-Argument von [`event.initEvent`](/de/docs/Web/API/Event/initEvent) funktioniert nun richtig, sodass Ereignisse ausgelöst werden können, die nicht bubbeln. ([Firefox-Bug 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis behandelt nun Namenraum-Attribute ordnungsgemäß. ([Firefox-Bug 362391](https://bugzil.la/362391))
- XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>`, werden nun dem DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht garantiert das Wurzelelement ist; verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement). Außerdem haben `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungsanweisungen außerhalb des Dokumentprologs keinen Effekt mehr. ([Firefox-Bug 319654](https://bugzil.la/319654))
- Funktionen [`getElementsByAttributeNS()`](/de/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS) wurden XUL-Elementen und -Dokumenten hinzugefügt. ([Firefox-Bug 239976](https://bugzil.la/239976))
- Ereignis-Listener bleiben erhalten, wenn ein Element aus einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Bug 286619](https://bugzil.la/286619))
- Mutationsereignisse werden nun auch für nicht angezeigte Dokumente ausgelöst. ([Firefox-Bug 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit Elementen, die in der falschen Reihenfolge gezeichnet werden, sind behoben. ([Firefox-Bug 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde so korrigiert, dass es korrekt in Teilbäumen funktioniert, die Elemente mit Namensraumprefixen in ihren Tag-Namen haben ([Firefox-Bug 206053](https://bugzil.la/206053)).
- Die Ereignisse `DOMNodeInserted` und `DOMNodeRemoved` werden nun korrekt auf die richtigen Knoten angewendet ([Firefox-Bug 367164](https://bugzil.la/367164)).
- `\d`, eines der speziellen Zeichen in regulären Ausdrücken, wurde korrigiert, um nur auf Ziffern des grundlegenden lateinischen Alphabets abzugleichen (entspricht `[0-9]`). ([Firefox-Bug 378738](https://bugzil.la/378738))
- Die Kategorie der Bild-Sniffing-Dienste ermöglicht es Bilddecodern, die als Erweiterungen implementiert wurden, Bilder mit falschem MIME-Typ korrekt zu decodieren. ([Firefox-Bug 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularsteuerelemente öffnen standardmäßig kein Kontextmenü mehr ([Firefox-Bug 404536](https://bugzil.la/404536). Siehe [Ein Kontextmenü für Formularsteuerelemente anbieten](/de/docs/Offering%20a%20context%20menu%20for%20form%20controls), um zu erfahren, wie Sie dies fallweise aktivieren können.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
