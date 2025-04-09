---
title: fetchLater() API
slug: Web/API/fetchLater_API
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()` API** bietet eine Schnittstelle, um eine verzögerte Datenabfrage anzufordern, die nach einem bestimmten Zeitraum oder beim Schließen oder Verlassen der Seite gesendet werden kann.

## Konzepte und Verwendung

Entwickler müssen häufig Daten an den Server senden (oder übermitteln), insbesondere am Ende eines Besuchs eines Benutzers auf einer Seite — zum Beispiel für Analysedienste. Es gibt verschiedene Möglichkeiten, dies zu tun: von der Hinzufügung von 1-Pixel-{{HTMLElement("img")}}-Elementen zur Seite, über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), bis hin zur dedizierten [Beacon API](/de/docs/Web/API/Beacon_API) und zur [Fetch API](/de/docs/Web/API/Fetch_API) selbst.

Das Problem besteht darin, dass alle diese Methoden an Zuverlässigkeitsproblemen für das Senden am Ende des Besuchs leiden. Obwohl die Beacon API und die [`keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft der Fetch API Daten senden, selbst wenn das Dokument zerstört wird (nach bestem Bemühen, das unter diesen Umständen möglich ist), löst dies nur einen Teil des Problems.

Der andere — schwierigere — Teil betrifft die Entscheidung, _wann_ die Daten gesendet werden sollen, da es keinen idealen Zeitpunkt im Lebenszyklus einer Seite gibt, um den JavaScript-Aufruf zum Senden des Beacons auszuführen:

- Die [`unload`](/de/docs/Web/API/Window/unload_event) und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse sind unzuverlässig und werden von mehreren großen Browsern vollständig ignoriert.
- Die [`pagehide`](/de/docs/Web/API/Window/pagehide_event) und [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignisse sind zuverlässiger, haben aber immer noch Probleme auf mobilen Plattformen.

Das bedeutet, dass Entwickler, die Daten zuverlässig über ein Beacon senden möchten, dies häufiger tun müssen, als ideal wäre. Zum Beispiel könnten sie bei jeder Änderung ein Beacon senden, selbst wenn der endgültige Wert für die Seite noch nicht erreicht ist. Dies verursacht Kosten in Bezug auf Netzwerkverbrauch, Serververarbeitung sowie das Zusammenführen oder Verwerfen veralteter Beacons auf dem Server.

Alternativ können Entwickler ein gewisses Maß an fehlenden Daten akzeptieren — entweder durch:

- Senden eines Beacons nach einem festgelegten Zeitpunkt und Nicht-Sammeln späterer Daten.
- Senden eines Beacons am Ende des Seitenlebenszyklus, wobei akzeptiert wird, dass dies manchmal nicht zuverlässig sein wird.

Die `fetchLater()` API erweitert die [`Fetch API`](/de/docs/Web/API/Fetch_API), um das Einrichten von Datenanforderungen im Voraus zu ermöglichen. Diese verzögerten Anfragen können aktualisiert werden, bevor sie gesendet werden, sodass die Nutzlast die neuesten zu übermittelnden Daten widerspiegeln kann.

Der Browser sendet dann das Beacon, wenn der Tab geschlossen oder gewechselt wird, oder nach einer festgelegten Zeit, falls angegeben. Dies vermeidet das Senden mehrerer Beacons, stellt jedoch immer noch ein zuverlässiges Beacon innerhalb angemessener Erwartungen sicher (d. h., ausgenommen wenn der Browserprozess während eines Absturzes unerwartet beendet wird).

Verzögerte Anfragen können auch mittels eines [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, wenn sie nicht mehr benötigt werden, um weitere unnötige Kosten zu vermeiden.

### Quotas

Verzögerte Anfragen werden gesammelt und gesendet, sobald der Tab geschlossen wird; zu diesem Zeitpunkt gibt es für den Benutzer keine Möglichkeit, sie abzubrechen. Um Situationen zu vermeiden, in denen Dokumente diese Bandbreite missbrauchen, um unbegrenzt Daten über das Netzwerk zu senden, wird das Gesamtkontingent für ein oberstes Dokument auf 640KiB begrenzt.

Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere, wenn sie Drittanbieter-JavaScript einbetten.

Da dieses Limit die Nutzung von Bandbreite für verzögerte Anfragen zu einer knappen Ressource macht, die zwischen mehreren Berichtsquellen (z. B. mehrere RUM-Bibliotheken) und Subframes aus mehreren Quellen geteilt werden muss, bietet die Plattform eine vernünftige Standardaufteilung dieses Kontingents. Darüber hinaus gibt es die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinien, die es ermöglichen, es bei Bedarf anders zu teilen.

Siehe [fetchLater() Quotas](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Schnittstellen

- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
  - : Wird verwendet, um eine Ressource für das spätere Senden zu platzieren.
- [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)
  - : Stellt die Menge an Optionen dar, die verwendet werden können, um eine verzögerte Anfrage zu konfigurieren.
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
  - : Stellt das Ergebnis einer angeforderten verzögerten Anfrage dar.

## HTTP-Header

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Steuert das [oberste Kontingent](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für die `fetchLater()` API.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Steuert das [geteilter Subframe-Kontingent über Quellen hinweg](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für die `fetchLater()` API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quotas](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [Fetch API](/de/docs/Web/API/Fetch_API)
