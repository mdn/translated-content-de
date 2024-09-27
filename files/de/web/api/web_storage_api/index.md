---
title: Web Storage API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, durch die Browser Schlüssel/Wert-Paare auf eine wesentlich intuitivere Weise speichern können als mit [Cookies](/de/docs/Glossary/cookie).

## Konzepte und Nutzung

Die beiden Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jeden bestimmten [Origin](/de/docs/Glossary/origin) bereit, der für die Dauer der Seitensitzung verfügbar ist (solange der Browser-Tab geöffnet ist, einschließlich Seiten-Neuladen und -Wiederherstellung).

- `localStorage` tut dasselbe, aber bleibt erhalten, auch wenn der Browser geschlossen und wieder geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar. Das Aufrufen einer dieser Eigenschaften gibt eine Instanz eines [`Storage`](/de/docs/Web/API/Storage)-Objekts zurück, über das Datenelemente gesetzt, abgerufen und entfernt werden können. Ein unterschiedliches Speicherobjekt wird für `sessionStorage` und `localStorage` für jeden Origin verwendet — sie funktionieren und werden separat gesteuert.

Um mehr über die verfügbare Speichermenge mittels der APIs zu erfahren und was passiert, wenn Speichergrenzen überschritten werden, siehe [Storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Sowohl `sessionStorage` als auch `localStorage` im Web Storage sind synchroner Natur. Das bedeutet, dass beim Setzen, Abrufen oder Entfernen von Daten aus diesen Speichermethoden die Operationen synchron durchgeführt werden, wodurch die Ausführung anderer JavaScript-Codes blockiert wird, bis die Operation abgeschlossen ist. Dieses synchrone Verhalten kann möglicherweise die Leistung der Webanwendung beeinträchtigen, insbesondere wenn eine große Menge an Daten gespeichert oder abgerufen wird.

Entwickler sollten vorsichtig sein, wenn sie Operationen auf `sessionStorage` oder `localStorage` durchführen, die eine signifikante Menge an Daten oder rechnerisch intensive Aufgaben umfassen. Es ist wichtig, den Code zu optimieren und synchrone Operationen zu minimieren, um die Benutzeroberfläche nicht zu blockieren und Verzögerungen in der Reaktionsfähigkeit der Anwendung zu vermeiden.

Asynchrone Alternativen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) können geeigneter sein für Szenarien, in denen Leistung eine Rolle spielt oder größere Datensätze verarbeitet werden. Diese Alternativen ermöglichen nicht blockierende Operationen, die zu reibungsloseren Benutzererfahrungen und besserer Leistung in Webanwendungen führen.

> [!NOTE]
> Der Zugriff auf Web Storage aus Drittanbieter-IFrames wird verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat.

## Bestimmen des Zugriffs auf Speicher durch Dritte

Jeder Origin hat seinen eigenen Speicher — dies gilt sowohl für Web Storage als auch für [Shared Storage](/de/docs/Web/API/Shared_Storage_API). Der Zugriff auf geteilten Speicher durch Drittanbieter-Code (d.h. eingebetteter Code) hängt von seinem [Browsing-Kontext](/de/docs/Glossary/Browsing_context) ab. Der Kontext, in dem Drittanbieter-Code aus einem anderen Origin ausgeführt wird, bestimmt den Speicherzugriff des Drittanbieter-Codes.

![Ein Boxdiagramm, das einen obersten Browsing-Kontext namens publisher.com zeigt, mit darin eingebettetem Drittanbieter-Content](embedded-content.png)

Drittanbieter-Code kann auf einer anderen Seite hinzugefügt werden, indem er mit einem {{htmlelement("script")}}-Element injiziert wird oder indem die Quelle eines {{htmlelement("iframe")}} auf eine Site gesetzt wird, die Drittanbieter-Code enthält. Die verwendete Methode zur Integration von Drittanbieter-Code bestimmt den Browsing-Kontext des Codes.

- Wenn Ihr Drittanbieter-Code mit einem `<script>`-Element auf einer anderen Seite hinzugefügt wird, wird Ihr Code im Browsing-Kontext des Einbettenden ausgeführt. Wenn Sie also [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) oder [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufrufen, wird das Schlüssel/Wert-Paar in den Speicher des Einbettenden geschrieben. Aus der Perspektive des Browsers gibt es keinen Unterschied zwischen Erstanbieter- und Drittanbieter-Code, wenn ein `<script>`-Tag verwendet wird.
- Wenn Ihr Drittanbieter-Code innerhalb eines `<iframe>` auf einer anderen Seite hinzugefügt wird, wird der Code innerhalb des `<iframe>` mit dem Origin des Browsing-Kontexts des `<iframe>` ausgeführt. Wenn der Code innerhalb des `<iframe>` [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) aufruft, werden die Daten in den lokalen oder Session-Speicher des Origins des `<iframe>` geschrieben. Wenn der `<iframe>`-Code [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufruft, werden die Daten in den geteilten Speicher des Origins des `<iframe>` geschrieben.

## Web Storage Schnittstellen

- [`Storage`](/de/docs/Web/API/Storage)
  - : Erlaubt es Ihnen, Daten für eine bestimmte Domain und einen bestimmten Speichertyp (Session oder lokal) zu setzen, abzurufen und zu entfernen.
- [`Window`](/de/docs/Web/API/Window)
  - : Die Web Storage API erweitert das [`Window`](/de/docs/Web/API/Window)-Objekt um zwei neue Eigenschaften — [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) — die Zugriff auf die Session- und lokalen [`Storage`](/de/docs/Web/API/Storage)-Objekte der aktuellen Domain bieten, sowie einen [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignishandler, der ausgelöst wird, wenn sich ein Speicherbereich ändert (z.B. wenn ein neues Element gespeichert wird).
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)
  - : Das `storage`-Ereignis wird auf dem `Window`-Objekt eines Dokuments ausgelöst, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige typische Nutzungen des Web Storage zu veranschaulichen, haben wir ein einfaches Beispiel erstellt, das fantasievoll [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerelemente zur Anpassung von Farbe, Schriftart und dekorativem Bild. Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahlmöglichkeiten in `localStorage` gespeichert, sodass Ihre Auswahl beibehalten wird, wenn Sie die Seite verlassen und später erneut laden.

Zusätzlich haben wir eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab laden und dann Änderungen an Ihren Auswahlmöglichkeiten auf der Startseite vornehmen, sehen Sie die aktualisierten Speicherinformationen ausgegeben, wenn das [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Private Browsing / Inkognito-Modi

Private Fenster, Inkognito-Modus und ähnlich benannte Datenschutz-Browsing-Optionen speichern keine Daten wie Verlauf und Cookies. Im privaten Modus wird `localStorage` wie `sessionStorage` behandelt. Die Speicher-APIs sind weiterhin verfügbar und voll funktionsfähig, aber alle Daten, die im privaten Fenster gespeichert werden, werden gelöscht, wenn der Browser oder der Browser-Tab geschlossen wird.

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Browser storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
