---
title: Aktualisierung von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl sich in Firefox 10 vieles geändert hat, was theoretisch die Kompatibilität von Add-ons beeinträchtigen könnte, sind die meisten dieser Änderungen relativ unauffällig und werden Sie wahrscheinlich nicht betreffen. Dieser Artikel wird Sie bei der Aktualisierung Ihres Add-ons unterstützen.

## Standardmäßig kompatibel

Das Erste und Wichtigste, was zu beachten ist, ist, dass ab Firefox 10 Add-ons standardmäßig als kompatibel angesehen werden. Sofern Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility)-Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder neuer nicht mehr als inkompatibel markieren. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das wahrscheinlich nicht kompatibel ist, nicht versucht, in aktualisierten Firefox-Versionen auszuführen. Es ist erwähnenswert, dass Add-ons mit binären Komponenten immer auf Kompatibilität überprüft werden, da binäre Komponenten für jede Hauptversion von Firefox neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem auf Firefox 10 testen, auch in der Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest dieses Artikels, um festzustellen, ob es Änderungen gibt, die Sie vornehmen müssen.

## DOM-Änderungen

Einige veraltete APIs wurden aus dem DOM entfernt:

- {{ domxref("Node.isSameNode()") }}
  - : Dies ist die Entfernung, die am wahrscheinlichsten Add-on-Entwickler beeinflusst, da sie recht häufig verwendet wurde. Sie können nun den JavaScript-Operator `===` verwenden, um Knoten zu vergleichen, anstatt diese veraltete Methode zu nutzen. Diese Methode wurde durch die DOM4-Spezifikation obsolet gemacht.
- {{ domxref("text.isElementContentWhitespace") }}

  `text.replaceWholeText()`

  - : Diese APIs wurden durch die DOM4-Spezifikation obsolet.

- {{ domxref("Document.xmlEncoding") }}

  {{ domxref("Document.xmlStandalone") }}

  {{ domxref("Document.xmlVersion") }}

  - : Alle diese APIs wurden durch die DOM4-Spezifikation obsolet. Sie wurden am häufigsten verwendet, um zu erkennen, ob das angezeigte Dokument HTML oder XML ist. Lesen Sie den Artikel zu {{ domxref("Document.xmlVersion") }}, um eine empfohlene Methode zu finden, wie dies künftig getestet werden kann.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall, wo zuvor der [`PRBool`](/de/docs/PRBool)-Datentyp verwendet wurde, nun der standardmäßige C++ `bool`-Typ eingesetzt wird.

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
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, damit Add-ons ohne Neustart Wörterbücher zum Rechtschreibprüfer hinzufügen können. Siehe [Verwendung eines externen Rechtschreibprüfers](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, aber bald wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere interne Schnittstellen von [IndexedDB](/de/docs/Web/API/IndexedDB_API) wurden geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht beeinflussen, ist jedoch bemerkenswert, falls Sie etwas Ungewöhnliches tun.

## Weitere bemerkenswerte Änderungen

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR (Address Space Layout Randomization)-Unterstützung erstellt werden. Obwohl dies **noch** nicht erforderlich ist, könnte es in Zukunft notwendig werden, und das Nichtaktivieren führt zu einer Leistungseinbuße.
- Ein Fehler in der Behandlung regulärer Ausdrücke, der in Firefox 7 eingeführt wurde, wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, daher sollten Sie sich dessen bewusst sein.
- Sie können nun [chrome.manifest-Dateien in bootstrapped Add-ons dynamisch laden und entladen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Events `mouseenter` und `mouseleave` werden nun unterstützt.
