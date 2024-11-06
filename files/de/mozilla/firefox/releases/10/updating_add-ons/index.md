---
title: Aktualisierung von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch zu Kompatibilitätsproblemen bei Add-ons führen könnten, sind die meisten davon relativ unauffällig, sodass sie Sie vermutlich nicht betreffen werden. Dieser Artikel wird Ihnen als Leitfaden helfen, während Sie Ihr Add-on aktualisieren.

## Standardmäßig kompatibel

Der erste und wichtigste Punkt ist, dass Add-ons ab Firefox 10 standardmäßig als kompatibel gelten. Sofern Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility)-Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel markieren. Sie können dieses Flag nutzen, um sicherzustellen, dass ein Add-on, das voraussichtlich nicht funktionieren wird, nicht versucht, in aktualisierten Versionen von Firefox zu laufen. Es ist wichtig zu beachten, dass Add-ons mit binären Komponenten immer streng auf Kompatibilität überprüft werden, da binäre Komponenten bei jeder neuen Hauptversion von Firefox neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch auf Firefox 10 testen, auch in der Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest dieses Artikels, um zu prüfen, ob es etwas gibt, das Sie ändern müssen.

## DOM-Änderungen

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Diese Entfernung hat wahrscheinlich die größte Auswirkung auf Add-on-Entwickler, da sie ziemlich häufig verwendet wurde. Sie können jetzt stattdessen den JavaScript-Operator `===` verwenden, um Knoten zu vergleichen. Diese Methode wurde durch die DOM4-Spezifikation obsolet.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`

  - : Diese APIs wurden durch die DOM4-Spezifikation obsolet gemacht.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding), [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone), [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)

  - : All diese APIs wurden durch die DOM4-Spezifikation obsolet gemacht. Sie wurden am häufigsten verwendet, um zu erkennen, ob das angezeigte Dokument HTML oder XML ist. Siehe den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Methode zur Überprüfung.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall dort, wo zuvor der Datentyp [`PRBool`](/de/docs/PRBool) verwendet wurde, nun stattdessen der standardmäßige C++-Typ `bool` verwendet wird.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIDOMNSHTMLFrameElement`
  - : Diese Schnittstelle wurde in die Schnittstelle `nsIDOMHTMLFrameElement` integriert.
- `nsIDOMNSHTMLElement`
  - : Diese Schnittstelle wurde in `nsIDOMHTMLElement` integriert.
- `nsIDocumentViewer`
  - : Diese Schnittstelle wurde in `nsIContentViewer` integriert.

### Andere Schnittstellenänderungen

- `nsNavHistory` implementiert nicht mehr die Schnittstelle `nsICharsetResolver`. **Beachten Sie, dass `nsICharsetResolver` nicht mehr verwendet wird und in Firefox 11.0 entfernt wird**.
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen. Siehe [Verwendung eines externen Rechtschreibprüfers](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, dies aber bald erfolgen wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere interne Schnittstellen von [IndexedDB](/de/docs/Web/API/IndexedDB_API) haben sich geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht betreffen, es sei denn, Sie haben etwas Ungewöhnliches getan.

## Weitere bemerkenswerte Änderungen

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Address Space Layout Randomization) erstellt werden. Obwohl dies **noch** nicht erforderlich ist, könnte es in Zukunft notwendig werden, und das Nicht-Aktivieren führt zu einer Leistungseinbuße.
- Ein Fehler in der Regulärausdrucksverarbeitung, der in Firefox 7 eingeführt wurde, wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, seien Sie sich dessen bewusst.
- Sie können jetzt [chrome.manifest-Dateien dynamisch laden und entladen in bootstrapped Add-ons](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Ereignisse `mouseenter` und `mouseleave` werden jetzt unterstützt.
