---
title: Aktualisieren von Add-ons für Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Obwohl sich in Firefox 10 viele Dinge geändert haben, die theoretisch die Kompatibilität von Add-ons beeinträchtigen können, sind die meisten davon relativ unauffällig, sodass sie Sie wahrscheinlich nicht betreffen werden. Dieser Artikel wird Ihnen als Leitfaden dienen, während Sie Ihr Add-on aktualisieren.

## Standardmäßig kompatibel

Das Erste und Wichtigste, was zu beachten ist, ist, dass ab Firefox 10 Add-ons standardmäßig als kompatibel angesehen werden. Sofern Sie nicht das [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) Flag in Ihrem Manifest verwenden, wird Firefox Ihr Add-on nach einem Upgrade auf Firefox 10 oder höher nicht mehr als inkompatibel markieren. Sie können dieses Flag verwenden, um sicherzustellen, dass ein Add-on, das vermutlich nicht funktioniert, nicht versucht, in aktualisierten Versionen von Firefox zu laufen. Es ist erwähnenswert, dass Add-ons mit binären Komponenten immer streng auf Kompatibilität geprüft werden, da binäre Komponenten für jede Hauptversion von Firefox neu kompiliert werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 10 testen, auch in der Welt der standardmäßigen Kompatibilität. Lesen Sie den Rest dieses Artikels, um zu sehen, ob es etwas gibt, das Sie ändern müssen.

## Änderungen am DOM

Einige veraltete APIs wurden aus dem DOM entfernt:

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Diese Entfernung hat die größte Wahrscheinlichkeit, Add-on-Entwickler zu betreffen, da sie recht häufig verwendet wurde. Sie können jetzt den JavaScript `===` Operator verwenden, um Knoten anstelle dieser veralteten Methode zu vergleichen. Diese Methode wurde durch die DOM4-Spezifikation obsolet.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`
  - : Diese APIs wurden durch die DOM4-Spezifikation obsolet gemacht.

- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding), [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone), [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion)
  - : Alle diese APIs wurden durch die DOM4-Spezifikation obsolet gemacht. Sie wurden am häufigsten verwendet, um zu erkennen, ob das angezeigte Dokument HTML oder XML war. Sehen Sie sich den Artikel zu [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) für eine empfohlene Methode zum Testen an.

## XPCOM und Schnittstellenänderungen

Die bedeutendste Änderung ist, dass überall dort, wo früher der [`PRBool`](/de/docs/PRBool) Datentyp verwendet wurde, nun der Standard C++ `bool` Typ verwendet wird.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIDOMNSHTMLFrameElement`
  - : Diese Schnittstelle wurde in die `nsIDOMHTMLFrameElement` Schnittstelle integriert.
- `nsIDOMNSHTMLElement`
  - : Diese Schnittstelle wurde in `nsIDOMHTMLElement` integriert.
- `nsIDocumentViewer`
  - : Diese Schnittstelle wurde in `nsIContentViewer` integriert.

### Weitere Schnittstellenänderungen

- `nsNavHistory` implementiert nicht mehr die `nsICharsetResolver` Schnittstelle. **Beachten Sie, dass `nsICharsetResolver` nicht mehr verwendet wird und in Firefox 11.0 entfernt wird.**
- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um neustartlose Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen. Siehe [Using an external spell checker](/en-US/Using_an_External_Spell-checker) für Details (beachten Sie, dass dieser Artikel noch nicht aktualisiert wurde, aber bald wird).
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt, da es seit einiger Zeit nicht mehr unterstützt wird.
- Mehrere interne [IndexedDB](/de/docs/Web/API/IndexedDB_API) Schnittstellen haben sich geändert, um überarbeitete APIs zu unterstützen. Das sollte Sie nicht betreffen, ist aber erwähnenswert, falls Sie etwas Ungewöhnliches gemacht haben.

## Weitere erwähnenswerte Änderungen

- Alle binären Komponenten unter Windows sollten mit aktivierter ASLR-Unterstützung (Adressraum-Layout-Zufälligkeit) gebaut werden. Auch wenn dies **noch** nicht erforderlich ist, könnte es dies in Zukunft sein, und das Deaktivieren führt zu einer Leistungseinbuße.
- Ein Fehler in der Behandlung von regulären Ausdrücken, der in Firefox 7 eingeführt wurde, wurde behoben. Dies kann das Ergebnis einiger regulärer Ausdrücke ändern, daher sollten Sie darauf achten.
- Sie können jetzt [chrome.manifest-Dateien in Bootstrap-Add-ons dynamisch laden und entladen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- Die `mouseenter` und `mouseleave` Events werden nun unterstützt.
