---
title: Web Storage API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: bc2cef34be29df5439a5a6162bd9e5b07d173571
---

{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, mit denen Browser Schlüssel/Wert-Paare speichern können, auf eine viel intuitivere Weise als mit {{Glossary("cookie", "Cookies")}}.

## Konzepte und Nutzung

Die beiden Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` ist nach Browser-Tabs und nach {{Glossary("origin", "Origin")}} partitioniert. Das Hauptdokument und alle eingebetteten {{Glossary("browsing_context", "Browsing-Kontexte")}} (iframes) werden nach ihrer Origin gruppiert, und jede Origin hat Zugriff auf ihren eigenen separaten Speicherbereich. Das Schließen des Browser-Tabs löscht alle mit diesem Tab verknüpften `sessionStorage`-Daten.
- `localStorage` ist nur nach {{Glossary("origin", "Origin")}} partitioniert. Alle Dokumente mit derselben Origin haben Zugriff auf denselben `localStorage`-Bereich, der auch dann bestehen bleibt, wenn der Browser geschlossen und erneut geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar. Der Zugriff auf eine dieser Eigenschaften gibt eine Instanz eines [`Storage`](/de/docs/Web/API/Storage)-Objekts zurück, über das Daten gesetzt, abgerufen und entfernt werden können. Für jede Origin wird ein anderes Speicherobjekt für `sessionStorage` und `localStorage` verwendet — sie funktionieren und werden separat gesteuert.

Um mehr über die verfügbare Speichermenge mithilfe der APIs zu erfahren und was passiert, wenn Speicherlimits überschritten werden, siehe [Speicherquoten und Ausweisungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Sowohl `sessionStorage` als auch `localStorage` in Web Storage sind von Natur aus synchron. Das bedeutet, dass beim Setzen, Abrufen oder Entfernen von Daten aus diesen Speichermethoden die Operationen synchron ausgeführt werden, was die Ausführung anderer JavaScript-Codes blockiert, bis die Operation abgeschlossen ist. Dieses synchrone Verhalten kann potenziell die Leistung der Webanwendung beeinträchtigen, insbesondere wenn eine große Menge an Daten gespeichert oder abgerufen wird.

Entwickler sollten vorsichtig sein, wenn sie Operationen auf `sessionStorage` oder `localStorage` ausführen, die eine beträchtliche Menge an Daten oder rechnerisch intensive Aufgaben betreffen. Es ist wichtig, den Code zu optimieren und synchrone Operationen zu minimieren, um eine Blockierung der Benutzeroberfläche und Verzögerungen in der Reaktionsfähigkeit der Anwendung zu vermeiden.

Asynchrone Alternativen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) können besser geeignet sein für Szenarien, bei denen die Leistung eine Rolle spielt oder wenn mit größeren Datenmengen gearbeitet wird. Diese Alternativen ermöglichen nicht-blockierende Operationen, wodurch reibungslosere Benutzererfahrungen und eine bessere Leistung in Webanwendungen erreicht werden.

> [!NOTE]
> Der Zugriff auf Web Storage von Drittanbieter-IFrames wird verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat.

## Bestimmen des Speicherzugriffs durch Drittanbieter

Jede Origin hat ihren eigenen Speicher — dies gilt sowohl für Web Storage als auch für [Shared Storage](/de/docs/Web/API/Shared_Storage_API). Der Zugriff von Drittanbieter- (d.h. eingebettetem) Code auf Shared Storage hängt von seinem {{Glossary("Browsing_context", "Browsing-Kontext")}} ab. Der Kontext, in dem ein Drittanbieter-Code einer anderen Origin läuft, bestimmt den Speicherzugriff des Drittanbieter-Codes.

![Ein Box-Diagramm, das einen Top-Level-Browsing-Kontext namens publisher.com zeigt, mit Drittanbieter-Inhalten, die darin eingebettet sind](embedded-content.png)

Drittanbieter-Code kann einer anderen Seite hinzugefügt werden, indem er mit einem {{htmlelement("script")}}-Element eingefügt wird oder indem die Quelle eines {{htmlelement("iframe")}} auf eine Seite gesetzt wird, die Drittanbieter-Code enthält. Die Methode, die zur Integration von Drittanbieter-Code verwendet wird, bestimmt den Browsing-Kontext des Codes.

- Wenn Ihr Drittanbieter-Code mit einem `<script>`-Element zu einer anderen Seite hinzugefügt wird, wird Ihr Code im Browsing-Kontext des Embedders ausgeführt. Daher wird beim Aufruf von [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) oder [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) das Schlüssel/Wert-Paar in den Speicher des Embedders geschrieben. Aus Sicht des Browsers gibt es keinen Unterschied zwischen erstem und Drittanbieter-Code, wenn ein `<script>`-Tag verwendet wird.
- Wenn Ihr Drittanbieter-Code innerhalb eines `<iframe>` zu einer anderen Seite hinzugefügt wird, wird der Code innerhalb des `<iframe>` mit der Origin des Browsing-Kontexts des `<iframe>` ausgeführt. Wenn der Code innerhalb des `<iframe>` [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) aufruft, werden Daten in den lokalen oder Session-Speicher der Origin des `<iframe>` geschrieben. Wenn der `<iframe>`-Code [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufruft, werden die Daten in den Shared Storage der Origin des `<iframe>` geschrieben.

## Web Storage-Schnittstellen

- [`Storage`](/de/docs/Web/API/Storage)
  - : Ermöglicht es Ihnen, Daten für eine bestimmte Domain und einen bestimmten Speicherart (Session oder lokal) zu setzen, abzurufen und zu entfernen.
- [`Window`](/de/docs/Web/API/Window)
  - : Die Web Storage API erweitert das [`Window`](/de/docs/Web/API/Window)-Objekt um zwei neue Eigenschaften — [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) — die Zugriff auf die Session und lokalen [`Storage`](/de/docs/Web/API/Storage)-Objekte der aktuellen Domain bieten, sowie einen [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignis-Handler, der ausgelöst wird, wenn sich ein Speicherbereich ändert (z. B. wenn ein neuer Artikel gespeichert wird).
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)
  - : Das `storage`-Ereignis wird auf einem Dokument-`Window`-Objekt ausgelöst, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige typische Verwendungen von Web Storage zu veranschaulichen, haben wir ein Beispiel erstellt, das fantasievoll [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) genannt wird. Die [Landing Page](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerelemente, mit denen Sie die Farbe, Schriftart und das dekorative Bild anpassen können. Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahlmöglichkeiten in `localStorage` gespeichert, sodass sie bei erneutem Laden der Seite nach Verlassen wiedererkannt werden.

Zudem haben wir eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt. Wenn Sie diese Seite in einem anderen Tab laden und dann Ihre Auswahl auf der Landing Page ändern, sehen Sie die aktualisierten Speicherinformationen als `StorageEvent` ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Privates Surfen / Inkognito-Modi

Private Fenster, Inkognito-Modus und ähnlich benannte Datenschutzoptionen speichern keine Daten wie Verlauf und Cookies. Im privaten Modus wird `localStorage` wie `sessionStorage` behandelt. Die Speicher-APIs sind immer noch verfügbar und voll funktionsfähig, aber alle im privaten Fenster gespeicherten Daten werden gelöscht, wenn der Browser oder der Browsertab geschlossen wird.

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Browser storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
