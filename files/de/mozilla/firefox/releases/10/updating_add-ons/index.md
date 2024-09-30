---
title: Aktualisierung von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch die Kompatibilität von Add-ons beeinträchtigen könnten, sind die meisten dieser Änderungen relativ unauffällig und werden Sie wahrscheinlich nicht betreffen. Dieser Artikel wird Sie bei der Aktualisierung Ihres Add-ons unterstützen.

## Standardmäßig kompatibel

Das erste und wichtigste, was zu beachten ist, ist, dass ab Firefox 10 Add-ons standardmäßig als kompatibel angesehen werden. Solange Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel markieren. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das wahrscheinlich Probleme verursacht, nicht in aktualisierten Versionen von Firefox ausgeführt wird. Es ist wichtig zu erwähnen, dass Add-ons mit binären Komponenten immer streng auf Kompatibilität geprüft werden, da binäre Komponenten für jede wichtige Firefox-Version neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 10 testen, auch in der Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest des Artikels, um zu sehen, ob es etwas gibt, das Sie ändern müssen.

## Änderungen im DOM

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Dies ist die Entfernung, die am ehesten Add-on-Entwickler betreffen könnte, da sie ziemlich häufig verwendet wurde. Sie können nun den JavaScript `===` Operator verwenden, um Knoten anstelle dieser veralteten Methode zu vergleichen. Diese Methode wurde durch die DOM4-Spezifikation als veraltet erklärt.
- [`text.isElementContentWhitespace`](/de/docs/Web/API/Text/isElementContentWhitespace)

  `text.replaceWholeText()`

  - : Diese APIs wurden durch die DOM4-Spezifikation als veraltet erklärt.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding)

  [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone)

  [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)

  - : Alle diese APIs wurden durch die DOM4-Spezifikation als veraltet erklärt. Sie wurden am häufigsten verwendet, um festzustellen, ob das angezeigte Dokument HTML oder XML ist. Siehe den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Möglichkeit, dies künftig zu testen.

## XPCOM- und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall, wo zuvor der [`PRBool`](/de/docs/PRBool) Datentyp verwendet wurde, nun der Standard-C++ `bool` Typ verwendet wird.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIDOMNSHTMLFrameElement`
  - : Diese Schnittstelle wurde in die `nsIDOMHTMLFrameElement` Schnittstelle integriert.
- `nsIDOMNSHTMLElement`
  - : Diese Schnittstelle wurde in `nsIDOMHTMLElement` integriert.
- `nsIDocumentViewer`
  - : Diese Schnittstelle wurde in `nsIContentViewer` integriert.

### Weitere Schnittstellenänderungen

- `nsNavHistory` implementiert nicht mehr die `nsICharsetResolver` Schnittstelle. **Beachten Sie, dass `nsICharsetResolver` nicht mehr verwendet wird und in Firefox 11.0 entfernt wird**.
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um pausierbaren Add-ons zu ermöglichen, Wörterbücher dem Rechtschreibprüfer hinzuzufügen. Siehe [Verwendung eines externen Rechtschreibprüfers](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, aber bald wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere [IndexedDB](/de/docs/Web/API/IndexedDB_API) interne Schnittstellen wurden geändert, um überarbeitete APIs zu unterstützen. Dies sollte Sie nicht betreffen, ist aber erwähnenswert, falls Sie etwas Ungewöhnliches gemacht haben.

## Weitere erwähnenswerte Änderungen

- Alle Binärkomponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Address Space Layout Randomization) erstellt werden. Obwohl dies **noch** nicht erforderlich ist, könnte es in Zukunft sein, und das Fehlen dieser Option führt zu einer Leistungseinbuße.
- Ein in Firefox 7 eingeführter Fehler bei der Verarbeitung regulärer Ausdrücke wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, seien Sie sich dessen bewusst.
- Sie können nun [chrome.manifest Dateien in bootstrapbaren Add-ons dynamisch laden und entladen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die Ereignisse `mouseenter` und `mouseleave` werden nun unterstützt.
