---
title: Web Storage API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, mit denen Browser Schlüssel-/Wert-Paare speichern können, auf eine weit intuitivere Weise als mit {{glossary("cookie", "Cookies")}}.

## Konzepte und Verwendung

Die zwei Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jede gegebene {{glossary("origin", "Herkunft")}} bereit, der für die Dauer der Sitzung der Seite verfügbar ist (solange der Browsertab geöffnet ist, einschließlich Seitenaktualisierungen und -wiederherstellungen).

- `localStorage` tut dasselbe, bleibt jedoch bestehen, auch wenn der Browser geschlossen und erneut geöffnet wird.

Diese Mechanismen sind über die Eigenschaften {{domxref("Window.sessionStorage")}} und {{domxref("Window.localStorage")}} verfügbar. Der Aufruf eines dieser Objekte gibt eine Instanz eines {{domxref("Storage")}}-Objekts zurück, durch das Datenelemente gesetzt, abgerufen und entfernt werden können. Für die `sessionStorage` und `localStorage` für jede Herkunft wird ein unterschiedliches Speicherobjekt verwendet – sie funktionieren separat und werden separat gesteuert.

Um mehr über die verfügbare Speichergröße mit den APIs zu erfahren und was passiert, wenn Speichergrenzen überschritten werden, siehe [Speicherquoten und Auswahkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Sowohl `sessionStorage` als auch `localStorage` im Web Storage sind synchron. Das bedeutet, dass wenn Daten in diesen Speichermethoden gesetzt, abgerufen oder entfernt werden, die Operationen synchron ausgeführt werden und die Ausführung von anderem JavaScript-Code blockieren, bis die Operation abgeschlossen ist. Dieses synchrone Verhalten kann die Leistung der Webanwendung potenziell beeinflussen, insbesondere wenn große Datenmengen gespeichert oder abgerufen werden.

Entwickler sollten vorsichtig sein, wenn sie Operationen auf `sessionStorage` oder `localStorage` durchführen, die eine beträchtliche Datenmenge oder rechenintensive Aufgaben beinhalten. Es ist wichtig, den Code zu optimieren und synchrone Operationen zu minimieren, um eine Blockierung der Benutzeroberfläche und Verzögerungen in der Reaktionsfähigkeit der Anwendung zu vermeiden.

Asynchrone Alternativen, wie zum Beispiel [IndexedDB](/de/docs/Web/API/IndexedDB_API), können für Szenarien, in denen die Leistung ein Anliegen ist oder wenn mit größeren Datenmengen gearbeitet wird, besser geeignet sein. Diese Alternativen ermöglichen nicht blockierende Operationen und sorgen für flüssigere Benutzererfahrungen und bessere Leistung in Webanwendungen.

> [!NOTE]
> Der Zugriff auf Web Storage von Drittanbieter-IFrames wird verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat.

## Bestimmung des Speicherzugriffs durch Dritte

Jede Herkunft hat ihren eigenen Speicher – dies gilt sowohl für Web Storage als auch für [Shared Storage](/de/docs/Web/API/Shared_Storage_API). Der Zugang zu gemeinsam genutztem Speicher durch Drittanbieter-Code (d.h., eingebetteter Code) hängt von seinem [Browsing-Kontext](/de/docs/Glossary/Browsing_context) ab. Der Kontext, in dem ein Drittanbieter-Code von einer anderen Herkunft ausgeführt wird, bestimmt den Speicherzugriff des Drittanbieter-Codes.

![Ein Boxdiagramm zeigt einen Browsing-Kontext auf oberster Ebene namens publisher.com, mit eingebettetem Drittanbieter-Inhalt](embedded-content.png)

Drittanbieter-Code kann einer anderen Site hinzugefügt werden, indem er mit einem {{htmlelement("script")}}-Element injiziert oder durch Setzen der Quelle eines {{htmlelement("iframe")}} zu einer Site, die Drittanbieter-Code enthält, integriert wird. Die Methode zur Integration von Drittanbieter-Code bestimmt den Browsing-Kontext des Codes.

- Wenn Ihr Drittanbieter-Code mit einem `<script>`-Element zu einer anderen Site hinzugefügt wird, wird Ihr Code im Browsing-Kontext des Einbettenden ausgeführt. Daher wird, wenn Sie {{domxref("Storage.setItem()")}} oder {{domxref("SharedStorage.set()")}} aufrufen, das Schlüssel-/Wert-Paar im Speicher des Einbettenden geschrieben. Aus der Perspektive des Browsers gibt es keinen Unterschied zwischen erstem und drittem Anbieter-Code, wenn ein `<script>`-Tag verwendet wird.
- Wenn Ihr Drittanbieter-Code innerhalb eines `<iframe>` zu einer anderen Site hinzugefügt wird, wird der Code innerhalb des `<iframe>` mit der Herkunft des Browsing-Kontexts des `<iframe>` ausgeführt. Wenn der Code innerhalb des `<iframe>` {{domxref("Storage.setItem()")}} aufruft, werden Daten in den lokalen oder Sitzungsspeicher der Herkunft des `<iframe>` geschrieben. Wenn der `<iframe>`-Code {{domxref("SharedStorage.set()")}} aufruft, werden die Daten in den gemeinsamen Speicher der Herkunft des `<iframe>` geschrieben.

## Web Storage-Schnittstellen

- {{domxref("Storage")}}
  - : Ermöglicht es Ihnen, Daten für eine bestimmte Domain und Speichertype (Sitzung oder lokal) zu setzen, abzurufen und zu entfernen.
- {{domxref("Window")}}
  - : Die Web Storage API erweitert das {{domxref("Window")}}-Objekt mit zwei neuen Eigenschaften — {{domxref("Window.sessionStorage")}} und {{domxref("Window.localStorage")}} — die Zugriff auf die aktuellen Sitzungs- und lokalen {{domxref("Storage")}}-Objekte der Domain gewähren sowie einen {{domxref("Window/storage_event", "storage")}}-Ereignishandler, der ausgelöst wird, wenn sich ein Speicherbereich ändert (z.B. wenn ein neuer Eintrag gespeichert wird).
- {{domxref("StorageEvent")}}
  - : Das `storage`-Ereignis wird auf dem `Window`-Objekt eines Dokuments ausgelöst, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige typische Anwendungen von Web Storage zu veranschaulichen, haben wir ein einfaches Beispiel erstellt, das fantasievoll [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) genannt wird. Die [Startseite](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerungen, mit denen die Farbe, Schriftart und das dekorative Bild angepasst werden können. Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahl in `localStorage` gespeichert, so dass Ihre Auswahl beim Verlassen der Seite und erneutem Laden beibehalten werden.

Darüber hinaus haben wir eine [Ereignis-Ausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt – wenn Sie diese Seite in einem anderen Tab laden und dann Ihre Auswahl auf der Startseite ändern, sehen Sie die aktualisierten Speicherinformationen ausgegeben, sobald das {{domxref("StorageEvent")}} ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Privates Surfen / Inkognito-Modus

Private Fenster, Inkognito-Modus und ähnlich benannte Datenschutzoptionen speichern keine Daten wie Verlauf und Cookies. Im privaten Modus wird `localStorage` wie `sessionStorage` behandelt. Die Speicher-APIs sind weiterhin verfügbar und voll funktionsfähig, aber alle im privaten Fenster gespeicherten Daten werden gelöscht, wenn der Browser oder der Browsertab geschlossen wird.

## Siehe auch

- [Verwenden der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Browserspeicherquoten und Auswahkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
