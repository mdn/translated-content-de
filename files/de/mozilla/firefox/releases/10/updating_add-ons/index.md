---
title: Aktualisieren von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch zu Inkompatibilitätsproblemen bei Add-ons führen können, sind die meisten Änderungen relativ unauffällig und werden Sie wahrscheinlich nicht betreffen. Dieser Artikel wird Ihnen helfen, Ihr Add-on zu aktualisieren.

## Standardmäßig kompatibel

Das erste und wichtigste, das zu beachten ist: Ab Firefox 10 werden Add-ons standardmäßig als kompatibel angesehen. Wenn Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility)-Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel markieren. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das wahrscheinlich Probleme verursachen könnte, nicht versucht, in aktualisierten Versionen von Firefox zu laufen. Es ist erwähnenswert, dass Add-ons mit binären Komponenten immer streng auf Kompatibilität geprüft werden, da binäre Komponenten für jede größere Firefox-Version neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 10 testen, selbst in einer Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest dieses Artikels, um zu sehen, ob es etwas gibt, das Sie ändern müssen.

## DOM-Änderungen

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Diese Entfernung hat die größte Wahrscheinlichkeit, Add-on-Entwickler zu betreffen, da sie recht häufig verwendet wurde. Sie können jetzt den JavaScript-Operator `===` verwenden, um Knoten zu vergleichen, anstatt diese veraltete Methode. Diese Methode wurde durch die DOM4-Spezifikation obsolet.
- [`text.isElementContentWhitespace`](/de/docs/Web/API/Text/isElementContentWhitespace)

  `text.replaceWholeText()`

  - : Diese APIs wurden durch die DOM4-Spezifikation obsolet.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding)

  [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone)

  [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)

  - : Alle diese APIs wurden durch die DOM4-Spezifikation obsolet. Sie wurden am häufigsten verwendet, um zu erkennen, ob das angezeigte Dokument HTML oder XML war. Siehe den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Methode, dies zukünftig zu testen.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung besteht darin, dass überall dort, wo zuvor der `PRBool` Datentyp verwendet wurde, nun der standardmäßige C++ `bool`-Typ verwendet wird.

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
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, sodass Add-ons ohne Neustart Wörterbücher zum Rechtschreibprüfer hinzufügen können. Siehe [Externen Rechtschreibprüfer verwenden](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es schon seit einiger Zeit nicht mehr unterstützt wurde.
- Mehrere interne [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Schnittstellen wurden geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht betreffen, ist jedoch erwähnenswert, falls Sie etwas Ungewöhnliches getan haben.

## Weitere Änderungen, die erwähnenswert sind

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Address Space Layout Randomization) erstellt werden. Obwohl dies **noch** nicht erforderlich ist, könnte es in Zukunft der Fall sein, und ein Nichteinschalten führt zu Leistungseinbußen.
- Ein in Firefox 7 eingeführter Fehler in der Behandlung von regulären Ausdrücken wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, seien Sie sich dessen bewusst.
- Sie können jetzt [chrome.manifest-Dateien in Bootstrap-Add-ons dynamisch laden und entladen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Ereignisse `mouseenter` und `mouseleave` werden jetzt unterstützt.
