---
title: Wichtige in Firefox 3 behobene Fehler
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Dieser Artikel bietet eine Liste wichtiger Fehlerbehebungen von Firefox 3, die in der Dokumentation nicht unbedingt offensichtlich sind.

- Wenn beim Parsen einer Overlay ein Fehler auftritt, wird die Overlay nicht angewendet. Parsefehler werden in die Fehlerkonsole protokolliert. ([Firefox-Bug 335755](https://bugzil.la/335755))
- Ein behobener Fehler, bei dem `<menupopup>`-Elemente innerhalb einer Bindung platziert werden können, wenn sie einem Menü oder menüähnlichem Element zugewiesen sind. ([Firefox-Bug 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert jetzt richtig. ([Firefox-Bug 308591](https://bugzil.la/308591))
- Das `canBubble`-Argument für {{ Domxref("event.initEvent") }} funktioniert nun korrekt, sodass Ereignisse ausgelöst werden können, die nicht blubbern. ([Firefox-Bug 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis verarbeitet jetzt Namenraumattribute korrekt. ([Firefox-Bug 362391](https://bugzil.la/362391))
- XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>`, werden jetzt zum DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, dass {{ Domxref("Node.firstChild", "document.firstChild") }} nicht garantiert das Wurzelelement ist; verwenden Sie stattdessen {{ Domxref("document.documentElement") }}. Auch `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen haben außerhalb des Dokumentprologs keine Wirkung mehr. ([Firefox-Bug 319654](https://bugzil.la/319654))
- [`getElementsByAttributeNS()`](/de/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS)-Funktionen wurden zu XUL-Elementen und -Dokumenten hinzugefügt. ([Firefox-Bug 239976](https://bugzil.la/239976))
- Ereignis-Listener werden beibehalten, wenn ein Element aus einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Bug 286619](https://bugzil.la/286619))
- Mutationsereignisse werden jetzt auch für nicht angezeigte Dokumente ausgelöst. ([Firefox-Bug 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit Elementen, die in der falschen Reihenfolge gezeichnet werden, sind behoben. ([Firefox-Bug 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde korrigiert, um richtig auf Teilbäume zu funktionieren, die Elemente mit Namespace-Präfixen in ihren Tag-Namen haben. ([Firefox-Bug 206053](https://bugzil.la/206053))
- Die `DOMNodeInserted` und `DOMNodeRemoved` Ereignisse werden jetzt richtig auf die korrekten Knoten angewendet. ([Firefox-Bug 367164](https://bugzil.la/367164))
- `\d`, eines der Sonderzeichen in regulären Ausdrücken, wurde korrigiert, um nur Ziffern des Basic Latin Alphabets zu matchen (entspricht `[0-9]`). ([Firefox-Bug 378738](https://bugzil.la/378738))
- Die Kategorie der Bild-Sniffing-Dienste ermöglicht es, dass Bilddecoder, die als Erweiterungen implementiert sind, Bilder korrekt dekodieren können, die mit falschen MIME-Typen gesendet wurden. ([Firefox-Bug 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularelemente bringen standardmäßig kein Kontextmenü mehr auf. ([Firefox-Bug 404536](https://bugzil.la/404536). Siehe [Ein Kontextmenü für Formularelemente anbieten](/de/docs/Offering%20a%20context%20menu%20for%20form%20controls), um zu erfahren, wie Sie dies im Einzelfall aktivieren können.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
