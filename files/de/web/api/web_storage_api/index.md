---
title: Web Storage API
slug: Web/API/Web_Storage_API
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, mit denen Browser Schlüssel-Wert-Paare speichern können, und zwar auf eine weitaus intuitivere Weise als mit {{Glossary("cookie", "Cookies")}}.

## Konzepte und Verwendung

Die beiden Mechanismen innerhalb von Web Storage sind wie folgt:

- `sessionStorage` hält einen separaten Speicherbereich für jeden gegebenen {{Glossary("origin", "Origin")}} bereit, der für die Dauer der Sitzung der Seite verfügbar ist (solange der Browser-Tab geöffnet ist, einschließlich des Neuladens und Wiederherstellens der Seite).

- `localStorage` tut dasselbe, bleibt jedoch erhalten, auch wenn der Browser geschlossen und wieder geöffnet wird.

Diese Mechanismen sind über die Eigenschaften [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) verfügbar. Der Aufruf einer dieser Eigenschaften gibt eine Instanz eines [`Storage`](/de/docs/Web/API/Storage)-Objekts zurück, über das Datenobjekte gesetzt, abgerufen und entfernt werden können. Ein anderes Speicherobjekt wird für die `sessionStorage` und `localStorage` für jeden Origin verwendet – sie funktionieren unabhängig und werden separat kontrolliert.

Um mehr über die mit den APIs verfügbare Speichergröße zu erfahren und was passiert, wenn die Speicherkapazitäten überschritten werden, siehe [Speicherquoten und Auslöschungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Sowohl `sessionStorage` als auch `localStorage` innerhalb von Web Storage sind synchron. Das bedeutet, dass, wenn Daten in diesen Speichermechanismen gesetzt, abgerufen oder entfernt werden, die Operationen synchron ausgeführt werden und die Ausführung anderer JavaScript-Codes blockieren, bis der Vorgang abgeschlossen ist. Dieses synchrone Verhalten kann die Leistung der Webanwendung potenziell beeinträchtigen, insbesondere wenn eine große Menge an Daten gespeichert oder abgerufen wird.

Entwickler sollten vorsichtig sein, wenn sie Operationen auf `sessionStorage` oder `localStorage` durchführen, die eine erhebliche Datenmenge oder rechenintensive Aufgaben betreffen. Es ist wichtig, den Code zu optimieren und die Anzahl synchroner Operationen zu minimieren, um zu verhindern, dass die Benutzeroberfläche blockiert wird und Verzögerungen in der Reaktionsfähigkeit der Anwendung auftreten.

Asynchrone Alternativen, wie z.B. [IndexedDB](/de/docs/Web/API/IndexedDB_API), können für Szenarien geeigneter sein, in denen die Leistung eine Rolle spielt oder bei größeren Datenmengen. Diese Alternativen ermöglichen nicht-blockierende Operationen und sorgen so für reibungslosere Benutzererfahrungen und eine bessere Leistung in Webanwendungen.

> [!NOTE]
> Der Zugriff auf Web Storage von Drittanbieter-IFrames wird verweigert, wenn der Benutzer [Drittanbieter-Cookies deaktiviert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) hat.

## Bestimmung des Speicherzugriffs durch Dritte

Jeder Webseiten-Urpsrung hat seinen eigenen Speicher – dies gilt sowohl für Web Storage als auch für [Shared Storage](/de/docs/Web/API/Shared_Storage_API). Der Zugriff von Drittanbieter-Code (d.h. eingebetteten Code) auf Shared Storage hängt von seinem {{Glossary("Browsing_context", "Browsing-Kontext")}} ab. Der Kontext, in dem ein Drittanbieter-Code von einem anderen Ursprung ausgeführt wird, bestimmt den Speicherzugriff des Drittanbieter-Codes.

![Ein Box-Diagramm, das einen Top-Level-Browsing-Kontext namens publisher.com zeigt, mit darin eingebettetem Drittanbieterinhalt](embedded-content.png)

Drittanbieter-Code kann einer anderen Site hinzugefügt werden, indem er über ein {{htmlelement("script")}}-Element injiziert wird oder indem die Quelle eines {{htmlelement("iframe")}} auf eine Site gesetzt wird, die Drittanbieter-Code enthält. Die Methode zur Integration von Drittanbieter-Code bestimmt den Browsing-Kontext des Codes.

- Wenn Ihr Drittanbieter-Code mit einem `<script>`-Element zu einer anderen Website hinzugefügt wird, wird Ihr Code im Browsing-Kontext des Einbettenden ausgeführt. Daher wird beim Aufruf von [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) oder [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) das Schlüssel-Wert-Paar in den Speicher des Einbettenden geschrieben. Aus der Sicht des Browsers gibt es keinen Unterschied zwischen Erst- und Drittanbieter-Code, wenn ein `<script>`-Tag verwendet wird.
- Wenn Ihr Drittanbieter-Code innerhalb eines `<iframe>` zu einer anderen Website hinzugefügt wird, wird der Code innerhalb des `<iframe>` mit dem Ursprung des Browsing-Kontexts des `<iframe>` ausgeführt. Wenn der Code innerhalb des `<iframe>` [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) aufruft, werden Daten in den lokalen oder Sitzungsspeicher des Ursprungs des `<iframe>` geschrieben. Wenn der `<iframe>`-Code [`SharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aufruft, werden die Daten in den gemeinsamen Speicher des Ursprungs des `<iframe>` geschrieben.

## Web Storage Schnittstellen

- [`Storage`](/de/docs/Web/API/Storage)
  - : Ermöglicht es Ihnen, Daten für eine bestimmte Domain und Speichertyp (sitzungsspezifisch oder lokal) zu setzen, abzurufen oder zu entfernen.
- [`Window`](/de/docs/Web/API/Window)
  - : Die Web Storage API erweitert das [`Window`](/de/docs/Web/API/Window)-Objekt um zwei neue Eigenschaften — [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) — die Zugriff auf die Sitzungs- und lokalen [`Storage`](/de/docs/Web/API/Storage)-Objekte der aktuellen Domain bieten, sowie eine [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignisbehandlung, die ausgelöst wird, wenn sich ein Speicherbereich ändert (z.B. ein neuer Gegenstand gespeichert wird).
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)
  - : Das `storage`-Ereignis wird auf einem Dokument `Window`-Objekt ausgelöst, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige typische Web Storage-Nutzungen zu veranschaulichen, haben wir ein Beispiel erstellt, das fantasievoll [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage) genannt wird. Die [Landing Page](https://mdn.github.io/dom-examples/web-storage/) bietet Steuerelemente, die verwendet werden können, um die Farbe, Schriftart und das dekorative Bild individuell anzupassen. Wenn Sie verschiedene Optionen wählen, wird die Seite sofort aktualisiert; zusätzlich werden Ihre Auswahlmöglichkeiten in `localStorage` gespeichert, sodass sie wiedererkannt werden, wenn Sie die Seite verlassen und später erneut laden.

Zusätzlich haben wir eine [Ereignisausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) bereitgestellt — wenn Sie diese Seite in einem anderen Tab öffnen und dann die Auswahl auf der Landing Page ändern, sehen Sie die aktualisierten Speicherinformationen, die ausgegeben werden, wenn das [`StorageEvent`](/de/docs/Web/API/StorageEvent) ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Private Browsing / Inkognito-Modus

Private Fenster, der Inkognito-Modus und ähnliche Privatsphäroptionen speichern keine Daten wie Verlauf und Cookies. Im privaten Modus wird `localStorage` wie `sessionStorage` behandelt. Die Speicher-APIs sind weiterhin verfügbar und voll funktionsfähig, aber alle gespeicherten Daten werden gelöscht, wenn das private Fenster oder der Browser-Tab geschlossen wird.

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Speicherquoten und Auslöschungskriterien des Browsers](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
