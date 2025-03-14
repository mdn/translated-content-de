---
title: HTTP-Bedingungsanfragen
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

HTTP hat ein Konzept der _Bedingungsanfragen_, bei denen das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validierer_ gesteuert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der bereits im Browser verfügbaren Kopie unterscheiden. Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads zu gewährleisten oder zu verhindern, dass Aktualisierungen beim Hochladen oder Ändern eines Dokuments auf dem Server verloren gehen.

## Grundprinzipien

HTTP-Bedingungsanfragen sind Anfragen, die unterschiedlich ausgeführt werden, abhängig vom Wert spezifischer Header. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Vorbedingung erfüllt wird oder nicht.

Die unterschiedlichen Verhaltensweisen werden durch die verwendete Methode der Anfrage und durch die für eine Vorbedingung verwendeten Header bestimmt:

- für {{Glossary("Safe/HTTP", "sichere")}} Methoden wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zurückzusenden, wenn es relevant ist. Dies spart daher Bandbreite.
- für {{Glossary("Safe/HTTP", "unsichere")}} Methoden wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, mit dem auf dem Server gespeicherten übereinstimmt.

## Validierer

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource mit einer bestimmten Version übereinstimmt. Dazu müssen die Bedingungsanfragen die Version der Ressource angeben. Da es unpraktisch ist, die gesamte Ressource Byte für Byte zu vergleichen, und dies nicht immer gewünscht ist, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validierer_ genannt und sind von zwei Arten:

- das Datum der letzten Änderung des Dokuments, das _Last-Modified_-Datum.
- eine undurchsichtige Zeichenfolge, die jede Version eindeutig identifiziert, genannt _Entity-Tag_ oder _ETag_.

Der Vergleich von Versionen derselben Ressource ist ein wenig kompliziert: Je nach Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn eine Byte-für-Byte-Identität erwartet wird, beispielsweise beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Benutzer-Agent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich betrachtet werden, selbst wenn kleinere Unterschiede existieren, wie unterschiedliche Anzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validierer. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig die starke Validierung und spezifiziert, wann die schwache Validierung verwendet werden kann.

### Starke Validierung

Die starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte identisch mit derjenigen ist, mit der sie verglichen wird. Dies ist für einige bedingte Header zwingend erforderlich und der Standard für die anderen. Die starke Validierung ist sehr strikt und kann auf der Serverseite schwer zu garantieren sein, aber sie garantiert zu keinem Zeitpunkt einen Datenverlust, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Identifikator für die starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Dies wird häufig mit einem {{HTTPHeader("ETag")}} unter Verwendung des MD5-Hashes der Ressource (oder eines Derivats) erreicht.

> [!NOTE]
> Da eine Änderung der Inhaltskodierung eine Änderung der ETag erfordert, ändern einige Server die ETags beim Komprimieren von Antworten von einem Quellserver (zum Beispiel Reverse-Proxys).
> Der Apache-Server fügt standardmäßig den Namen der Komprimierungsmethode (`-gzip`) zu ETags hinzu, dies kann jedoch [mit der Direktive `DeflateAlterETag` konfiguriert werden](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Die schwache Validierung unterscheidet sich von der starken Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt äquivalent ist. Zum Beispiel würde eine Seite, die sich von einer anderen nur durch ein anderes Datum im Footer oder unterschiedliche Werbung unterscheidet, mit schwacher Validierung als _identisch_ angesehen. Dieselben zwei Versionen gelten bei starker Validierung als _verschieden_. Der Aufbau eines Systems von ETags, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann aber komplex sein, da es die Bedeutung der verschiedenen Elemente einer Seite kennt.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource gleich einem der in diesem Header aufgelisteten ist. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource ungleich jedem der in diesem Header aufgelisteten ist. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einziges ETag oder ein Datum haben. Wenn es fehlschlägt, schlägt die Bereichsanfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}} Antwort wird eine {{HTTPStatus("200", "200 OK")}} Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Bei einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die ausgeführt wird, wenn der Cache leer ist, löst den Download der Ressource aus, wobei beide Validatordaten als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validierer in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte genauso gut nur einer von beiden sein. Diese Validierer werden zusammen mit der Ressource (wie alle Header) zwischengespeichert und werden verwendet, um bedingte Anfragen zu erstellen, sobald der Cache veraltet ist.

Solange der Cache nicht veraltet ist, werden überhaupt keine Anfragen ausgeführt. Aber einmal veraltet, hauptsächlich gesteuert durch den {{HTTPHeader("Cache-Control")}}-Header, verwendet der Client nicht direkt den zwischengespeicherten Wert, sondern stellt eine _bedingte Anfrage_. Der Wert des Validierers wird als Parameter der Header {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-None-Match")}} verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified` Antwort zurück. Dies macht den Cache wieder aktuell, und der Client verwendet die zwischengespeicherte Ressource. Obwohl es einen Antwort-/Anforderungs-Rundlauf gibt, der einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut zu übertragen.

![Mit einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann feststellen, ob sich die Ressource geändert hat und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie identisch ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der neuen Version der Ressource zurück (als wäre die Anfrage nicht bedingt gewesen). Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als wäre die Anfrage nicht bedingt gewesen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Neben der Einstellung der Validierer auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass die Webentwickler besondere Arbeiten ausführen müssen.

### Integrität eines teilweisen Downloads

Das teilweise Herunterladen von Dateien ist eine Funktionalität von HTTP, die es ermöglicht, frühere Vorgänge fortzusetzen, Bandbreite und Zeit zu sparen, indem die bereits erhaltenen Informationen beibehalten werden:

![Ein Download wurde gestoppt und nur ein Teil des Inhalts wurde abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der Teil-Downloads unterstützt, signalisiert dies durch das Senden des {{HTTPHeader("Accept-Ranges")}} Headers. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Ranges")}} Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfrage fort, indem er den benötigten Bereich angibt und die Validierer der teilweise abgerufenen Anfrage prüft.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, jedoch gibt es ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, werden die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource entsprechen, und das endgültige Dokument wird beschädigt sein.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere Möglichkeit verwendet {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}}, wobei der Server einen Fehler zurückgibt, wenn die Vorbedingung fehlschlägt; der Client startet dann den Download von Anfang an neu:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss erneut vollständig heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie einen zusätzlichen Antwort-/Anforderungsaustausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range-Header ermöglicht es dem Server, die vollständige Ressource direkt zu senden, wenn sie geändert wurde, ohne einen 412-Fehler zu senden und auf die erneute Initiierung des Downloads durch den Client zu warten.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Solch zusätzliche Flexibilität wird selten benötigt.

### Vermeidung des "verlorenen Aktualisierungsproblems" mit optimistischem Sperren

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist in jedem Dateisystem oder Quellkontrollanwendung sehr üblich, aber jede Anwendung, die das Speichern von entfernten Ressourcen ermöglicht, benötigt einen solchen Mechanismus. Gewöhnliche Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies implementieren. Der Client liest zuerst die Originaldateien, ändert sie und überträgt sie schließlich auf den Server:

![Aktualisieren einer Datei mit einem PUT, wenn keine Gleichzeitigkeit vorliegt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider werden die Dinge ein wenig ungenau, sobald wir die Gleichzeitigkeit berücksichtigen. Während ein Client seine neue Kopie der Ressource lokal bearbeitet, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe an seiner Kopie tun. Was als nächstes passiert, ist sehr bedauerlich: Wenn sie ihre Änderungen auf den Server übertragen, werden die Änderungen des ersten Clients durch die nächste Clientübertragung verworfen, da dieser zweite Client nichts von den Änderungen des ersten Clients an der Ressource weiß. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients beibehalten werden, variiert mit der Geschwindigkeit, mit der sie ihre Änderungen übertragen; dies hängt von der Leistung der Clients, des Servers und sogar des Benutzers ab, der das Dokument beim Client bearbeitet. Der Gewinner wechselt von Mal zu Mal. Diese Situation ist ein _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu debuggen sind:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einem Race Condition: Der langsamste gewinnt, und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keinen Weg, mit diesem Problem umzugehen, ohne einen der beiden Clients zu stören. Verlorene Aktualisierungen und Race Conditions sind jedoch zu vermeiden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _optimistischen Sperralgorithmus_ (verwendet von den meisten Wikis oder Quellkontrollsystemen). Das Konzept besteht darin, dass alle Clients Kopien der Ressource erhalten, sie dann lokal bearbeiten und die Gleichzeitigkeit kontrollieren, indem der erste Client erfolgreich ein Update übermitteln darf. Alle nachfolgenden Updates, die auf der nun veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Implementierung von optimistischem Sperren: Jetzt gewinnt der schnellste, und die anderen erhalten einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird mit den Headern {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}} implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit dem Abrufen geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem er den Nutzer benachrichtigt, erneut zu beginnen (diesmal mit der neuesten Version), oder indem er dem Nutzer einen _Diff_ beider Versionen zeigt, um ihm zu helfen, zu entscheiden, welche Änderungen beibehalten werden sollen.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Grenzfall des Vorherigen. Wie jede Aktualisierung einer Ressource unterliegt er einem Race Condition, wenn zwei Clients versuchen, es zu ähnlichen Zeiten durchzuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: durch das Hinzufügen von {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*`, der jedes ETag repräsentiert. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource vorher nicht vorhanden war:

![Wie bei einem regulären Upload unterliegt der erste Upload einer Ressource einem Race Condition: If-None-Match kann es verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn Sie sich nicht sicher sind, ob der Server konform ist, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource stellen, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind ein Schlüsselfeature von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder die Wiederaufnahme von Downloads besteht die einzige Arbeit, die für Webmaster erforderlich ist, darin, den Server korrekt zu konfigurieren; das Einstellen korrekter ETags kann in einigen Umgebungen knifflig sein. Sobald dies erreicht ist, werden die erwarteten bedingten Anfragen vom Browser bereitgestellt.

Für Sperrmechanismen ist es umgekehrt: Webentwickler müssen eine Anfrage mit den richtigen Headern ausstellen, während Webmaster sich hauptsächlich darauf verlassen können, dass die Anwendung die Überprüfungen für sie durchführt.

In beiden Fällen ist klar, dass bedingte Anfragen ein fundamentales Merkmal hinter dem Web sind.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Komprimierung
