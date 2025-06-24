---
title: Aktualisierung von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch die Kompatibilität von Add-ons beeinträchtigen könnten, sind die meisten davon relativ unbedeutend, sodass sie Sie wahrscheinlich nicht betreffen werden. Dieser Artikel wird Sie bei der Aktualisierung Ihres Add-ons unterstützen.

## Standardmäßig kompatibel

Das erste und wichtigste, was zu beachten ist, ist, dass ab Firefox 10 Add-ons standardmäßig als kompatibel angesehen werden. Sofern Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility)-Flag in Ihrem Manifest verwenden, markiert Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das wahrscheinlich nicht funktioniert, nicht versucht, in aktualisierten Kopien von Firefox ausgeführt zu werden. Es ist erwähnenswert, dass Add-ons, die binäre Komponenten enthalten, immer streng auf Kompatibilität überprüft werden, da binäre Komponenten immer für jede Hauptversion von Firefox neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem auf Firefox 10 testen, auch in der Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest dieses Artikels, um festzustellen, ob Sie etwas ändern müssen.

## DOM-Änderungen

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Dies ist die Entfernung, die die größte Wahrscheinlichkeit hat, Add-on-Entwickler zu betreffen, da sie relativ häufig verwendet wurde. Sie können jetzt den JavaScript-Operator `===` verwenden, um Knoten zu vergleichen, anstatt diese veraltete Methode zu verwenden. Diese Methode wurde durch die DOM4-Spezifikation obsolet.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`

  - : Diese APIs wurden durch die DOM4-Spezifikation obsolet gemacht.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding), [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone), [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)
  - : Alle diese APIs wurden durch die DOM4-Spezifikation veraltet. Sie wurden am häufigsten verwendet, um festzustellen, ob das angezeigte Dokument HTML oder XML war. Lesen Sie den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Methode, dies zukünftig zu testen.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall, wo zuvor der Datentyp [`PRBool`](/de/docs/PRBool) verwendet wurde, jetzt der Standard-C++-Datentyp `bool` verwendet wird.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIDOMNSHTMLFrameElement`
  - : Diese Schnittstelle wurde in die `nsIDOMHTMLFrameElement`-Schnittstelle integriert.
- `nsIDOMNSHTMLElement`
  - : Diese Schnittstelle wurde in `nsIDOMHTMLElement` integriert.
- `nsIDocumentViewer`
  - : Diese Schnittstelle wurde in `nsIContentViewer` integriert.

### Andere Schnittstellenänderungen

- `nsNavHistory` implementiert nicht mehr die Schnittstelle `nsICharsetResolver`. **Beachten Sie, dass `nsICharsetResolver` nicht mehr verwendet wird und in Firefox 11.0 entfernt wird**.
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um neustartlose Add-ons das Hinzufügen von Wörterbüchern zum Rechtschreibprüfer zu ermöglichen. Siehe [Verwendung eines externen Rechtschreibprüfers](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, aber bald wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere interne [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Schnittstellen wurden geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht betreffen, aber es ist erwähnenswert für den unwahrscheinlichen Fall, dass Sie etwas Ungewöhnliches gemacht haben.

## Weitere erwähnenswerte Änderungen

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Address Space Layout Randomization) erstellt werden. Obwohl dies **noch nicht** erforderlich ist, könnte es in Zukunft erforderlich sein, und das Nichtaktivieren führt zu einer Leistungseinbuße.
- Ein in Firefox 7 eingeführter Fehler in der Regulärausdrucksverarbeitung wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, seien Sie sich dessen also bewusst.
- Sie können jetzt [Chrome.manifest-Dateien in bootstrapped Add-ons dynamisch laden und entladen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Ereignisse `mouseenter` und `mouseleave` werden jetzt unterstützt.
