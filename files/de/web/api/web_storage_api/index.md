---
title: Web Storage API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, durch die Browser Schlüssel/Wert-Paare speichern können, auf eine viel intuitivere Weise als mit {{Glossary("cookie", "Cookies")}}.

## Konzepte und Verwendung

Die zwei Mechanismen innerhalb des Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jeden gegebenen {{Glossary("origin", "Origin")}} bereit, der für die Dauer der Sitzung der Seite verfügbar ist (solange der Browser-Tab geöffnet bleibt, einschließlich Seitenreloads und -wiederherstellungen).

- `localStorage` erfüllt die gleiche Funktion, bleibt aber auch bestehen, wenn der Browser geschlossen und erneut geöffnet wird.

Diese Mechanismen sind über die [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) Eigenschaften verfügbar. Der Aufruf einer dieser Eigenschaften gibt eine Instanz eines [`Storage`](/de/docs/Web/API/Storage)-Objekts zurück, über das Datenobjekte gesetzt, abgerufen und entfernt werden können. Ein unterschiedliches Speicherobjekt wird für `sessionStorage` und `localStorage` für jeden Origin verwendet — sie funktionieren und werden separat gesteuert.

Um mehr über die verfügbare Speichermenge mithilfe der APIs zu lernen und was passiert, wenn Speicherlimits überschritten werden, siehe [Storage-Quoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Sowohl `sessionStorage` als auch `localStorage` im Web Storage sind synchroner Natur. Dies bedeutet, dass, wenn Daten in diesen Speichermechanismen gesetzt, abgerufen oder entfernt werden, die Operationen synchron durchgeführt werden und die Ausführung anderer JavaScript-Codes blockieren, bis die Operation abgeschlossen ist. Dieses synchrone Verhalten kann potenziell die Leistung der Web-Anwendung beeinträchtigen, insbesondere wenn eine große Datenmenge gespeichert oder abgerufen wird.

Entwickler sollten vorsichtig sein, wenn sie Operationen mit `sessionStorage` oder `localStorage` durchführen, die eine erhebliche Datenmenge oder rechenintensive Aufgaben beinhalten. Es ist wichtig, den Code zu optimieren und synchrone Operationen zu minimieren, um die Benutzeroberfläche nicht zu blockieren und Verzögerungen in der Reaktionsfähigkeit der Anwendung zu verhindern.

Asynchrone Alternativen, wie beispielsweise [IndexedDB](/de/docs/Web/API/IndexedDB_API), könnten geeigneter für Szenarien sein, in denen Leistung von Bedeutung ist oder wenn mit größeren Datensätzen gearbeitet wird. Diese Alternativen ermöglichen nicht-blockierende Operationen, die flüssigere Benutzererfahrungen und bessere Leistung in Webanwendungen bieten.

> [!NOTE]
> Der Zugriff auf Web Storage aus Third-Party-IFrames wird verweigert, wenn der Benutzer [Third-Party-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat.

## Bestimmung des Speicherzugriffs durch Dritte

Jeder Origin hat seinen eigenen Speicher — dies gilt sowohl für Web Storage als auch für [Shared Storage](/de/docs/Web/API/Shared_Storage_API). Der Zugriff von Third-Party- (also eingebettetem) Code auf geteilten Speicher hängt von seinem {{Glossary("Browsing_context", "Browsing-Kontext")}} ab. Der Kontext, in dem ein Third-Party-Code eines anderen Origins ausgeführt wird, bestimmt den Speicherzugriff des Third-Party-Codes.

![Eine Kasten-Diagramm zeigt einen obersten Browsing-Kontext namens publisher.com, mit eingebettetem Third-Party-Inhalt](embedded-content.png)

Third-Party-Code kann einer anderen Website hinzugefügt werden, indem er mit einem {{htmlelement("script")}}-Element injiziert wird, oder indem die Quelle eines {{htmlelement("iframe")}} auf eine Website eingestellt wird, die Third-Party-Code enthält. Die Methode, die zur Integration von Third-Party-Code verwendet wird, bestimmt den Browsing-Kontext des Codes.

- Wenn Ihr Third-Party-Code mit einem `<script>`-Element zu einer anderen Seite hinzugefügt wird, wird Ihr Code im Browsing-Kontext des Einbettenden ausgeführt. Daher wird, wenn Sie [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) oder [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufrufen, das Schlüssel/Wert-Paar im Speicher des Einbettenden geschrieben. Aus der Sicht des Browsers gibt es keinen Unterschied zwischen First-Party-Code und Third-Party-Code, wenn ein `<script>`-Tag verwendet wird.
- Wenn Ihr Third-Party-Code innerhalb eines `<iframe>` zu einer anderen Seite hinzugefügt wird, wird der Code innerhalb des `<iframe>` mit dem Origin des Browsing-Kontexts des `<iframe>` ausgeführt. Ruft der Code innerhalb des `<iframe>` [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) auf, werden die Daten in den lokalen oder Session Storage des Origins des `<iframe>` geschrieben. Wenn der `<iframe>`-Code [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufruft, werden die Daten in den Shared Storage des Origins des `<iframe>` geschrieben.

## Web Storage Schnittstellen

- [`Storage`](/de/docs/Web/API/Storage)
  - : Ermöglicht es Ihnen, Daten für eine bestimmte Domain und einen bestimmten Speichertyp (Session oder Lokal) zu setzen, abzurufen und zu entfernen.
- [`Window`](/de/docs/Web/API/Window)
  - : Die Web Storage API erweitert das [`Window`](/de/docs/Web/API/Window)-Objekt mit zwei neuen Eigenschaften — [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) — die Zugriff auf die Session- und lokalen [`Storage`](/de/docs/Web/API/Storage)-Objekte der aktuellen Domain bieten und einen [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignis-Handler, der ausgelöst wird, wenn sich ein Speicherbereich ändert (z.B. wenn ein neuer Eintrag gespeichert wird).
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)
  - : Das `storage`-Ereignis wird auf dem `Window`-Objekt eines Dokuments ausgelöst, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige typische Anwendungsfälle von Web Storage zu veranschaulichen, haben wir ein einfaches Beispiel erstellt, das kreativ [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerungen, mit denen die Farbe, die Schriftart und das dekorative Bild angepasst werden können. Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Entscheidungen in `localStorage` gespeichert, sodass Ihre Entscheidungen gespeichert werden, wenn Sie die Seite verlassen und später erneut laden.

Des Weiteren haben wir eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Änderungen an Ihren Entscheidungen auf der Startseite vornehmen, wird die aktualisierte Speichernformation ausgegeben, sobald das [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Private Browsing / Inkognito-Modus

Private Fenster, der Inkognito-Modus und ähnlich benannte Datenschutzoptionen speichern keine Daten wie Verlauf und Cookies. Im privaten Modus wird `localStorage` wie `sessionStorage` behandelt. Die Storage-APIs sind weiterhin verfügbar und vollständig funktional, aber alle im privaten Fenster gespeicherten Daten werden gelöscht, wenn der Browser oder der Browser-Tab geschlossen wird.

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
