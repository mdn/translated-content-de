---
title: Bedeutende Fehlerbehebungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Dieser Artikel bietet eine Liste wichtiger Fehlerbehebungen, die in Firefox 3 enthalten sind und nicht unbedingt offensichtlich in der Dokumentation erscheinen.

- Wenn beim Parsen eines Overlays ein Fehler auftritt, wird das Overlay nicht angewendet. Parsefehler werden in der Fehlerkonsole protokolliert. ([Firefox-Bug 335755](https://bugzil.la/335755))
- Fehler behoben, bei dem `<menupopup>`-Elemente in ein Binding platziert werden können, wenn sie an ein Menü oder menüähnliches Element angehängt sind. ([Firefox-Bug 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert jetzt ordnungsgemäß. ([Firefox-Bug 308591](https://bugzil.la/308591))
- Das `canBubble`-Argument für [`event.initEvent`](/de/docs/Web/API/Event/initEvent) funktioniert jetzt ordnungsgemäß, sodass Ereignisse ausgelöst werden können, die nicht bubblen. ([Firefox-Bug 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis behandelt jetzt Namensraum-Attribute ordnungsgemäß. ([Firefox-Bug 362391](https://bugzil.la/362391))
- XML-Verarbeitungsanweisungen wie `<?xml-stylesheet ?>` werden jetzt dem DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht mehr garantiert das Wurzelelement ist; verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement). Zudem haben die Verarbeitungsanweisungen `<?xml-stylesheet ?>` und `<?xul-overlay ?>` außerhalb des Dokument-Prologs keine Wirkung mehr. ([Firefox-Bug 319654](https://bugzil.la/319654))
- [`getElementsByAttributeNS()`](/de/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS)-Funktionen wurden zu XUL-Elementen und -Dokumenten hinzugefügt. ([Firefox-Bug 239976](https://bugzil.la/239976))
- Ereignislistener werden beibehalten, wenn ein Element aus einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Bug 286619](https://bugzil.la/286619))
- Veränderungsereignisse werden jetzt auch für nicht angezeigte Dokumente ausgelöst. ([Firefox-Bug 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit Elementen, die in der falschen Reihenfolge gezeichnet werden, wurden behoben. ([Firefox-Bug 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde korrigiert, um korrekt auf Teilbäume zu wirken, die Elemente mit Namespace-Präfixen in ihren Tag-Namen haben ([Firefox-Bug 206053](https://bugzil.la/206053)).
- Die `DOMNodeInserted`- und `DOMNodeRemoved`-Ereignisse gelten jetzt ordnungsgemäß für die richtigen Knoten ([Firefox-Bug 367164](https://bugzil.la/367164)).
- `\d`, eines der Sonderzeichen in regulären Ausdrücken, wurde korrigiert, sodass es nur Ziffern des Basic Latin-Alphabets matcht (entspricht `[0-9]`). ([Firefox-Bug 378738](https://bugzil.la/378738))
- Die Kategorie „image-sniffing-services“ ermöglicht es Bilddecodern, die als Erweiterungen implementiert sind, Bilder korrekt zu decodieren, die mit falschen MIME-Typen gesendet werden. ([Firefox-Bug 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularelemente öffnen standardmäßig kein Kontextmenü mehr ([Firefox-Bug 404536](https://bugzil.la/404536). Sehen Sie [Ein Kontextmenü für Formularelemente anbieten](/de/docs/Offering%20a%20context%20menu%20for%20form%20controls), um zu erfahren, wie Sie dies im Einzelfall aktivieren können.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
