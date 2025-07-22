---
title: Aktualisierung von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch die Kompatibilität von Add-ons beeinträchtigen können, sind die meisten Änderungen relativ unbedeutend, sodass sie wahrscheinlich keinen Einfluss auf Sie haben werden. Dieser Artikel soll Ihnen als Leitfaden dienen, während Sie Ihr Add-on aktualisieren.

## Standardmäßig kompatibel

Das erste und wichtigste zu beachtende ist, dass Add-ons ab Firefox 10 standardmäßig als kompatibel angesehen werden. Sofern Sie nicht das [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility)-Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel markieren. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das wahrscheinlich nicht funktioniert, nicht versucht, in aktualisierten Versionen von Firefox auszuführen. Es ist bemerkenswert, dass Add-ons, die binäre Komponenten enthalten, immer streng auf Kompatibilität geprüft werden müssen, da binäre Komponenten für jede Hauptversion von Firefox neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch auf Firefox 10 testen, auch in einer Welt der Standardkompatibilität. Lesen Sie den Rest dieses Artikels, um zu sehen, ob es etwas gibt, das Sie ändern müssen.

## DOM-Änderungen

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Dies ist die Entfernung, die am ehesten Add-on-Entwickler betreffen könnte, da sie ziemlich häufig verwendet wurde. Sie können jetzt den JavaScript-Operator `===` verwenden, um Knoten zu vergleichen, anstatt dieser veralteten Methode. Diese Methode wurde durch die DOM4-Spezifikation veraltet gemacht.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`
  - : Diese APIs wurden durch die DOM4-Spezifikation veraltet.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding), [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone), [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)
  - : All diese APIs wurden durch die DOM4-Spezifikation veraltet. Sie wurden am häufigsten verwendet, um festzustellen, ob das angezeigte Dokument HTML oder XML war. Siehe den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Methode, um dies künftig zu testen.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall dort, wo zuvor der Datentyp [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) verwendet wurde, nun der standardmäßige C++-Typ `bool` verwendet wird.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIDOMNSHTMLFrameElement`
  - : Diese Schnittstelle wurde in die `nsIDOMHTMLFrameElement`-Schnittstelle integriert.
- `nsIDOMNSHTMLElement`
  - : Diese Schnittstelle wurde in `nsIDOMHTMLElement` integriert.
- `nsIDocumentViewer`
  - : Diese Schnittstelle wurde in `nsIContentViewer` integriert.

### Weitere Schnittstellenänderungen

- `nsNavHistory` implementiert nicht mehr die `nsICharsetResolver`-Schnittstelle. **Beachten Sie, dass `nsICharsetResolver` nicht mehr verwendet wird und in Firefox 11.0 entfernt wird**.
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um neustartlose Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen. Siehe [Using an external spell checker](/de/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, aber bald wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere interne Schnittstellen von [IndexedDB](/de/docs/Web/API/IndexedDB_API) haben sich geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht betreffen, ist jedoch erwähnenswert, falls Sie etwas Ungewöhnliches gemacht haben.

## Weitere erwähnenswerte Änderungen

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Address Space Layout Randomization) kompiliert werden. Obwohl dies **noch nicht** erforderlich ist, könnte es in Zukunft notwendig werden, und das Nicht-Aktivieren führt zu einem Leistungsabfall.
- Ein in Firefox 7 eingeführter Fehler in der Regulären-Ausdruck-Verarbeitung wurde behoben. Dies kann die Ergebnisse einiger regulärer Ausdrücke ändern, also seien Sie sich dessen bewusst.
- Sie können jetzt [chrome.manifest-Dateien in bootstrap-fähigen Add-ons dynamisch laden und entladen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Ereignisse `mouseenter` und `mouseleave` werden nun unterstützt.
