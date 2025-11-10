---
title: HTTP bedingte Anfragen
short-title: Bedingte Anfragen
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP hat ein Konzept der _bedingten Anfragen_, bei dem das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ gesteuert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der bereits verfügbaren Kopie im Browser unterscheiden. Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads sicherzustellen oder verlorene Aktualisierungen zu verhindern, wenn ein Dokument auf dem Server hochgeladen oder geändert wird.

## Prinzipien

HTTP-bedingte Anfragen sind Anfragen, die je nach Wert bestimmter Header unterschiedlich ausgeführt werden. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage ist unterschiedlich, ob die Vorbedingung erfüllt ist oder nicht.

Die verschiedenen Verhaltensweisen werden durch die verwendete Methode der Anfrage und durch die Menge der für eine Vorbedingung verwendeten Header definiert:

- Für {{Glossary("Safe/HTTP", "sichere")}} Methoden, wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um nur das relevante Dokument zurückzusenden. Dies spart Bandbreite.
- Für {{Glossary("Safe/HTTP", "unsichere")}} Methoden, wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, mit dem auf dem Server gespeicherten übereinstimmt.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource einer bestimmten Version entspricht. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da das Vergleichen der gesamten Ressource Byte für Byte unpraktikabel und nicht immer gewünscht ist, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind von zwei Arten:

- das Datum der letzten Änderung des Dokuments, das _Last-Modified_-Datum.
- ein undurchsichtiger String, der jede Version eindeutig identifiziert, genannt _Entity-Tag_ oder _ETag_.

Der Vergleich von Versionen derselben Ressource ist etwas knifflig: Je nach Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn Byte für Byte Identität erwartet wird, zum Beispiel beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Nutzeragent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich angesehen werden, selbst wenn geringfügige Unterschiede existieren, wie unterschiedliche Werbung oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Server-Seite variieren kann. HTTP verwendet standardmäßig starke Validierung und spezifiziert, wann schwache Validierung verwendet werden kann.

### Starke Validierung

Starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte mit derjenigen identisch ist, mit der sie verglichen wird. Dies ist für einige bedingte Header zwingend notwendig und der Standard für die anderen. Starke Validierung ist sehr streng und kann auf Server-Ebene schwierig zu garantieren sein, bietet jedoch die Gewähr, dass zu keinem Zeitpunkt Datenverlust auftritt, manchmal auf Kosten der Leistung.

Es ist recht schwierig, einen eindeutigen Identifikator für starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Oft wird dies mit einem {{HTTPHeader("ETag")}} unter Verwendung des MD5-Hashes der Ressource (oder eines Derivats) getan.

> [!NOTE]
> Da eine Änderung der Inhaltskodierung eine Änderung eines ETags erfordert, modifizieren einige Server ETags, wenn sie Antworten von einem Ursprungsserver komprimieren (z.B. Reverse Proxies).
> Apache Server fügt standardmäßig den Namen der Komprimierungsmethode (`-gzip`) zu ETags hinzu, aber dies ist [konfigurierbar mit der `DeflateAlterETag`-Direktive](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Schwache Validierung unterscheidet sich von starker Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt gleichwertig ist. Beispielsweise würde eine Seite, die sich nur durch ein anderes Datum in ihrem Footer oder unterschiedliche Werbung von einer anderen unterscheidet, mit schwacher Validierung als _identisch_ zur anderen angesehen. Diese gleichen beiden Versionen werden jedoch als _verschieden_ angesehen, wenn starke Validierung verwendet wird. Der Aufbau eines Systems von ETags, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann jedoch komplex sein, da es das Erkennen der Relevanz der verschiedenen Elemente einer Seite erfordert.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource gleich einem in diesem Header aufgelisteten ist. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource anders ist als jeder in diesem Header aufgelistete. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einzelnes ETag oder ein Datum haben. Wenn es fehlschlägt, schlägt die Bereichsanfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Mit einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die ausgelöst wird, wenn der Cache leer ist, führt dazu, dass die Ressource heruntergeladen wird, wobei beide Validierungswerte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch ebenso nur einer von ihnen sein. Diese Validatoren werden zusammen mit der Ressource (wie alle Header) zwischengespeichert und werden verwendet, um bedingte Anfragen zu erstellen, sobald der Cache veraltet ist.

Solange der Cache nicht veraltet ist, werden keine Anfragen gestellt. Aber sobald er veraltet ist, was hauptsächlich durch den {{HTTPHeader("Cache-Control")}}-Header gesteuert wird, verwendet der Client nicht direkt den zwischengespeicherten Wert, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}}- und {{HTTPHeader("If-None-Match")}}-Header verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dies macht den Cache wieder aktuell, und der Client verwendet die zwischengespeicherte Ressource. Obwohl ein Antwort-/Anforderungs-Rundtrip einige Ressourcen verbraucht, ist dies effizienter als die gesamte Ressource erneut über das Netz zu übertragen.

![Bei einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann bestimmen, ob sich die Ressource geändert hat, und in diesem Fall entscheiden, sie nicht erneut zu senden, da sie identisch ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der neuen Version der Ressource (als ob die Anfrage nicht bedingt gewesen wäre).
Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als wäre die Anfrage nicht bedingt gewesen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen vom Einrichten der Validatoren auf der Server-Seite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler spezielle Arbeit leisten müssen.

### Integrität eines Teil-Downloads

Das partielle Herunterladen von Dateien ist eine Funktionalität von HTTP, die das Fortsetzen vorheriger Operationen ermöglicht und dadurch Bandbreite und Zeit spart, da die bereits erhaltenen Informationen beibehalten werden:

![Ein Download wurde gestoppt und nur ein Teilinhalt wurde abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der Teil-Downloads unterstützt, broadcastet dies, indem er den {{HTTPHeader("Accept-Ranges")}}-Header sendet. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Range")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den Bereich angibt, den er benötigt, und Vorbedingungen überprüft, die die Validatoren der teilweise erhaltenen Anforderung betreffen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, werden die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource entsprechen, und das endgültige Dokument wird beschädigt sein.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten: Die flexiblere verwendet {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}}, und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet dann den Download von vorne:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss erneut vollständig heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie einen zusätzlichen Antwort-/Anforderungs-Austausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen spezifischen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Die If-Range-Header ermöglichen es dem Server, direkt die vollständige Ressource zurückzusenden, wenn sie geändert wurde, ohne einen 412-Fehler zu senden und darauf zu warten, dass der Client den Download neu startet.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Selten wird solche zusätzliche Flexibilität benötigt.

### Vermeidung des Lost-Update-Problems mit optimistischen Sperren

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist sehr üblich in Dateisystemen oder Versionskontrollanwendungen, aber jede Anwendung, die das Speichern entfernter Ressourcen erlaubt, benötigt einen solchen Mechanismus. Allgemeine Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies umsetzen. Der Client liest zuerst die Originaldateien, ändert sie und schiebt sie schließlich auf den Server:

![Aktualisierung einer Datei mit PUT, wenn keine Konkurrenz besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider werden die Dinge etwas ungenau, sobald wir Konkurrenz berücksichtigen. Während ein Client lokal seine neue Kopie der Ressource bearbeitet, kann ein zweiter Client dieselbe Ressource abrufen und das Gleiche an seiner Kopie tun. Was als nächstes passiert, ist sehr unglücklich: Wenn beide zurück auf den Server übertragen, werden die Änderungen des ersten Clients durch den nächsten Client-Push verworfen, da dieser zweite Client sich der Änderungen des ersten Clients an der Ressource nicht bewusst ist. Die Entscheidung, wer gewinnt, wird nicht an die andere Partei kommuniziert. Welche Änderungen eines Clients beibehalten werden, variiert mit der Geschwindigkeit, mit der sie committen; dies hängt von der Leistung der Clients, des Servers und sogar des Menschen ab, der das Dokument beim Client bearbeitet. Der Gewinner wird von einem Zeitpunkt zum nächsten unterschiedlich sein. Dies ist eine _Race Condition_ und führt zu problematischem Verhalten, das schwer zu erkennen und zu debuggen ist:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einer Race Condition: Der langsamste gewinnt, und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keine Möglichkeit, mit diesem Problem umzugehen, ohne einen der beiden Clients zu verärgern. Allerdings sollten verlorene Updates und Race Conditions vermieden werden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _optimistischen Sperralgorithmus_ (verwendet von den meisten Wikis oder Versionskontrollsystemen). Das Konzept besteht darin, allen Clients zu erlauben, Kopien der Ressource zu erhalten, sie dann lokal zu bearbeiten, und die Konkurrenz zu kontrollieren, indem erfolgreichen Updates des ersten Clients zugelassen werden. Alle nachfolgenden Updates, die auf der nun veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Implementierung von optimistischen Sperren: Der Schnellste gewinnt, und die anderen bekommen einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird mit den {{HTTPHeader("If-Match")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Headern umgesetzt. Wenn das ETag nicht mit dem Originaldokument übereinstimmt oder das Dokument seit seiner Erfassung geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem der Benutzer benachrichtigt wird, erneut zu beginnen (diesmal mit der neuesten Version) oder indem der Benutzer ein _Diff_ der beiden Versionen sieht, wobei ihm geholfen wird, zu entscheiden, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Sonderfall des vorherigen. Wie bei jeder Aktualisierung einer Ressource ist er einem Race Condition ausgesetzt, wenn zwei Clients versuchen, ihn zur gleichen Zeit auszuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: indem {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*` hinzugefügt wird, der ein beliebiges ETag repräsentiert. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource zuvor nicht existierte:

![Wie bei einem regulären Upload ist der erste Upload einer Ressource einem Race Condition ausgesetzt: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und neuer) kompatiblen Servern. Wenn Sie sich nicht sicher sind, ob der Server kompatibel ist, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource stellen, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind eine Schlüsselfunktion von HTTP und erlauben den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder das Fortsetzen von Downloads ist die einzige erforderliche Arbeit für Webmaster die korrekte Konfiguration des Servers; das Einrichten korrekter ETags kann in manchen Umgebungen knifflig sein. Sobald dies erreicht ist, wird der Browser die erwarteten bedingten Anfragen stellen.

Bei Sperrmechanismen ist das Gegenteil der Fall: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster sich weitgehend darauf verlassen können, dass die Anwendung die Prüfungen für sie durchführt.

In beiden Fällen ist es klar, bedingte Anfragen sind eine grundlegende Funktion hinter dem Web.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Komprimierung
