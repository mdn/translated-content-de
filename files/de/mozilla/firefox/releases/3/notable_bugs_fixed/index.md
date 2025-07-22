---
title: Wichtige Fehlerbehebungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet eine Liste von wichtigen Fehlerbehebungen, die von Firefox 3 angeboten werden und die nicht unbedingt offensichtlich in der Dokumentation zu finden sind.

- Tritt ein Fehler beim Parsen eines Overlays auf, wird das Overlay nicht angewendet. Parse-Fehler werden in der Fehlerkonsole protokolliert. ([Firefox-Bug 335755](https://bugzil.la/335755))
- Ein behobener Fehler, bei dem `<menupopup>`-Elemente innerhalb eines Bindings platziert werden können, wenn sie an ein Menü oder ein menu-ähnliches Element angehängt sind. ([Firefox-Bug 345896](https://bugzil.la/345896))
- Die `dlgType`-Eigenschaft des Buttons funktioniert jetzt ordnungsgemäß. ([Firefox-Bug 308591](https://bugzil.la/308591))
- Das `canBubble`-Argument von [`event.initEvent`](/de/docs/Web/API/Event/initEvent) funktioniert jetzt ordnungsgemäß, sodass Ereignisse ausgelöst werden können, die nicht bubble. ([Firefox-Bug 330190](https://bugzil.la/330190))
- Das `DOMAttrModified`-Ereignis verarbeitet jetzt Namenraumattribute korrekt. ([Firefox-Bug 362391](https://bugzil.la/362391))
- XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>`, werden jetzt dem DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht mehr garantiert das Wurzelelement ist, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement). Außerdem haben die Verarbeitungsanweisungen `<?xml-stylesheet ?>` und `<?xul-overlay ?>` keine Wirkung mehr außerhalb des Dokument-Prologs. ([Firefox-Bug 319654](https://bugzil.la/319654))
- Die Funktionen [`getElementsByAttributeNS()`](https://web.archive.org/web/20201210015651/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Method/getElementsByAttributeNS) wurden zu XUL-Elementen und -Dokumenten hinzugefügt. ([Firefox-Bug 239976](https://bugzil.la/239976))
- Ereignis-Listener bleiben erhalten, wenn ein Element in einem XUL-Dokument verschoben oder entfernt wird. ([Firefox-Bug 286619](https://bugzil.la/286619))
- Mutationsereignisse werden jetzt auch für nicht angezeigte Dokumente ausgelöst. ([Firefox-Bug 201236](https://bugzil.la/201236))
- Verschiedene Probleme mit Elementen, die in falscher Reihenfolge gezeichnet werden, wurden behoben. ([Firefox-Bug 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName) wurde behoben, um korrekt in Teilbäumen zu funktionieren, die Elemente mit Namespace-Präfixen in ihren Tag-Namen haben. ([Firefox-Bug 206053](https://bugzil.la/206053))
- Die `DOMNodeInserted`- und `DOMNodeRemoved`-Ereignisse werden jetzt korrekt auf die richtigen Knoten angewendet. ([Firefox-Bug 367164](https://bugzil.la/367164))
- `\d`, eines der Sonderzeichen in regulären Ausdrücken, wurde behoben, um nur Ziffern des Basis-Latin-Alphabets zu matchen (entspricht `[0-9]`). ([Firefox-Bug 378738](https://bugzil.la/378738))
- Die Kategorie der image-sniffing-services ermöglicht es Bilddecodern, die als Erweiterungen implementiert sind, Bilder korrekt zu decodieren, die mit falschen MIME-Typen gesendet wurden. ([Firefox-Bug 391667](https://bugzil.la/391667))
- Rechtsklicks auf Formularelementen rufen standardmäßig kein Kontextmenü mehr auf. ([Firefox-Bug 404536](https://bugzil.la/404536). Siehe [Anbieten eines Kontextmenüs für Formularelemente](https://web.archive.org/web/20210612231358/https://developer.mozilla.org/de/docs/Archive/Add-ons/Offering_a_context_menu_for_form_controls), um zu erfahren, wie dies fallweise aktiviert werden kann.

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
