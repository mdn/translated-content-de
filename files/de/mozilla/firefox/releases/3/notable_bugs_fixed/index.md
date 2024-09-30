---
title: Bemerkenswerte Fehlerbehebungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Dieser Artikel bietet eine Liste wichtiger Fehlerbehebungen, die in Firefox 3 angeboten werden und nicht unbedingt offensichtlich in der Dokumentation sind.

- Wenn ein Fehler beim Parsen eines Overlays auftritt, wird das Overlay nicht angewendet. Parserfehler werden in der Fehlerkonsole protokolliert. ([Firefox-Bug 335755](https://bugzil.la/335755))
- Ein Fehler wurde behoben, bei dem `<menupopup>`-Elemente innerhalb einer Bindung platziert werden können, wenn sie an ein Menü oder menüähnliches Element angehängt sind. ([Firefox-Bug 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert jetzt ordnungsgemäß. ([Firefox-Bug 308591](https://bugzil.la/308591))
- Das Argument `canBubble` von [`event.initEvent`](/de/docs/Web/API/Event/initEvent) funktioniert jetzt ordnungsgemäß, sodass Ereignisse ausgelöst werden können, die nicht bubbling sind. ([Firefox-Bug 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis behandelt jetzt namenspaced Attribute korrekt. ([Firefox-Bug 362391](https://bugzil.la/362391))
- XML-Verarbeitungshinweise, wie `<?xml-stylesheet ?>`, werden jetzt dem DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht garantiert das Root-Element; verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement). Außerdem haben `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungshinweise jetzt außerhalb des Dokumentenprologs keine Wirkung. ([Firefox-Bug 319654](https://bugzil.la/319654))
- [`getElementsByAttributeNS()`](/de/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS)-Funktionen wurden zu XUL-Elementen und Dokumenten hinzugefügt. ([Firefox-Bug 239976](https://bugzil.la/239976))
- Ereignis-Listener werden beibehalten, wenn ein Element aus einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Bug 286619](https://bugzil.la/286619))
- Mutationsereignisse werden jetzt auch für nicht angezeigte Dokumente ausgelöst. ([Firefox-Bug 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit Elementen, die in der falschen Reihenfolge gezeichnet werden, sind behoben. ([Firefox-Bug 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde behoben, um korrekt auf Teilbäumen zu arbeiten, die Elemente mit Namespace-Präfixen in ihren Tag-Namen haben. ([Firefox-Bug 206053](https://bugzil.la/206053))
- Die Ereignisse `DOMNodeInserted` und `DOMNodeRemoved` gelten jetzt ordnungsgemäß für die richtigen Knoten. ([Firefox-Bug 367164](https://bugzil.la/367164))
- `\d`, eines der Sonderzeichen in regulären Ausdrücken, wurde korrigiert, um nur Ziffern des Basic Latin-Alphabets zu matchen (äquivalent zu `[0-9]`). ([Firefox-Bug 378738](https://bugzil.la/378738))
- Die Kategorie image-sniffing-services ermöglicht es, dass Bilddekodierer, die als Erweiterungen implementiert sind, Bilder korrekt dekodieren, die mit falschen MIME-Typen gesendet werden. ([Firefox-Bug 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularelemente bringen standardmäßig kein Kontextmenü mehr hervor. ([Firefox-Bug 404536](https://bugzil.la/404536). Sehen Sie sich [Anbieten eines Kontextmenüs für Formularelemente](/de/docs/Offering%20a%20context%20menu%20for%20form%20controls) an, um zu erfahren, wie Sie dies fallweise aktivieren können.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
