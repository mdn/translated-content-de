---
title: fetchLater() API
slug: Web/API/fetchLater_API
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()` API** bietet eine Schnittstelle, um eine verzögerte Abfrage anzufordern, die nach einem bestimmten Zeitraum oder wenn die Seite geschlossen oder navigiert wird, gesendet werden kann.

## Konzepte und Nutzung

Entwickler müssen oft Daten zurück an den Server senden (oder "beacon"), insbesondere am Ende des Besuchs eines Benutzers auf einer Seite - zum Beispiel für Analysedienste. Es gibt mehrere Möglichkeiten, dies zu tun: von der Hinzufügung von 1-Pixel-{{HTMLElement("img")}}-Elementen zur Seite, über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bis hin zur dedizierten [Beacon API](/de/docs/Web/API/Beacon_API) und der [Fetch API](/de/docs/Web/API/Fetch_API) selbst.

Das Problem besteht darin, dass all diese Methoden Zuverlässigkeitsprobleme beim Senden von Beacons am Ende des Besuchs haben. Während die Beacon API und die [`keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft der Fetch API Daten senden, selbst wenn das Dokument zerstört wird (so weit wie in diesem Szenario möglich), löst dies nur einen Teil des Problems.

Der andere, schwierigere Teil betrifft die Entscheidung, _wann_ die Daten gesendet werden sollen, da es keinen idealen Zeitpunkt im Lebenszyklus einer Seite gibt, um den JavaScript-Aufruf zu tätigen, um das Beacon zu senden:

- Die [`unload`](/de/docs/Web/API/Window/unload_event)- und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse sind unzuverlässig und werden von mehreren großen Browsern vollständig ignoriert.
- Die [`pagehide`](/de/docs/Web/API/Window/pagehide_event)- und [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignisse sind zuverlässiger, haben aber immer noch Probleme auf mobilen Plattformen.

Das bedeutet, dass Entwickler, die zuverlässige Daten über ein Beacon senden möchten, dies häufiger tun müssen als ideal ist. Beispielsweise könnten sie bei jeder Änderung ein Beacon senden, auch wenn der endgültige Wert für die Seite noch nicht erreicht ist. Dies verursacht Kosten im Netzwerkverbrauch, in der Serververarbeitung sowie beim Zusammenführen oder Verwerfen veralteter Beacons auf dem Server.

Alternativ können Entwickler auch akzeptieren, dass einige Daten fehlen - entweder indem sie:

- Ein Beacon nach einer festgelegten Ausschaltzeit senden und spätere Daten nicht erfassen.
- Ein Beacon am Ende des Seitenlebenszyklus senden, aber akzeptieren, dass dies manchmal nicht zuverlässig ist.

Die `fetchLater()` API erweitert die [Fetch API](/de/docs/Web/API/Fetch_API), um Abfragen im Voraus einzurichten. Diese verzögerten Abfragen können aktualisiert werden, bevor sie gesendet wurden, sodass die Nutzlast die neuesten zu sendenden Daten widerspiegelt.

Der Browser sendet das Beacon dann, wenn der Tab geschlossen oder navigiert wird oder nach einer festgelegten Zeit, falls angegeben. Dies vermeidet das Senden mehrerer Beacons, gewährleistet aber weiterhin ein zuverlässiges Beacon innerhalb vernünftiger Erwartungen (d.h. ausgeschlossen, wenn der Browserprozess während eines Absturzes unerwartet beendet wird).

Verzögerte Abfragen können auch mit einem [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, wenn sie nicht mehr erforderlich sind, um weitere unnötige Kosten zu vermeiden.

### Quoten

Verzögerte Abfragen werden gesammelt und gesendet, sobald der Tab geschlossen wird; zu diesem Zeitpunkt gibt es keine Möglichkeit für den Benutzer, sie abzubrechen. Um Situationen zu vermeiden, in denen Dokumente diese Bandbreite missbrauchen, um unbegrenzte Datenmengen über das Netzwerk zu senden, ist das Gesamtkontingent für ein oberstes Dokument auf 640KiB begrenzt.

Aufrufer von `fetchLater()` sollten defensiv agieren und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

Da dieses Limit die Bandbreite für verzögerte Abfragen zu einer knappen Ressource macht, die zwischen mehreren Berichtserstellungs-Ursprüngen (zum Beispiel mehreren RUM-Bibliotheken) und Unterrahmen aus mehreren Ursprüngen geteilt werden muss, bietet die Plattform eine vernünftige Standardverteilung dieses Kontingents. Darüber hinaus bietet sie die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinien {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, um es bei Bedarf anders zu teilen.

Siehe [fetchLater() Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Schnittstellen

- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
  - : Wird verwendet, um eine Ressource für das spätere Senden in die Warteschlange zu stellen.
- [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)
  - : Repräsentiert die Menge an Optionen, die zur Konfiguration einer verzögerten Abfrage verwendet werden können.
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
  - : Repräsentiert das Ergebnis der Anforderung einer verzögerten Abfrage.

## HTTP-Header

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Steuert [oberste Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für die `fetchLater()` API.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Steuert [gemeinsame, plattformübergreifende Unterrahmenquoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für die `fetchLater()` API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [Fetch API](/de/docs/Web/API/Fetch_API)
