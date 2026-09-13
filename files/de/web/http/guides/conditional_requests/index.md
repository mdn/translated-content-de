---
title: HTTP bedingte Anfragen
short-title: Bedingte Anfragen
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

HTTP hat ein Konzept von _bedingten Anfragen_, bei denen das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ gesteuert werden können.
Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der bereits im Browser verfügbaren Kopie unterscheiden.
Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads zu gewährleisten oder verlorene Aktualisierungen zu verhindern, wenn ein Dokument auf dem Server hochgeladen oder geändert wird.

## Prinzipien

HTTP bedingte Anfragen sind Anfragen, die unterschiedlich ausgeführt werden, abhängig vom Wert spezifischer Header. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage ist unterschiedlich, je nachdem, ob die Vorbedingung erfüllt ist oder nicht.

Die unterschiedlichen Verhaltensweisen werden durch die verwendete Anfragemethode und durch die Menge der für eine Vorbedingung verwendeten Header definiert:

- Für {{Glossary("Safe/HTTP", "sichere")}} Methoden wie {{HTTPMethod("GET")}}, die üblicherweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zurückzusenden, wenn es relevant ist. Dies spart Bandbreite.
- Für {{Glossary("Safe/HTTP", "unsichere")}} Methoden wie {{HTTPMethod("PUT")}}, die üblicherweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, das gleiche ist wie das auf dem Server gespeicherte.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource einer bestimmten Version entspricht. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da es unpraktisch ist, die gesamte Ressource Byte für Byte zu vergleichen und dies nicht immer gewünscht ist, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind von zwei Arten:

- das Datum der letzten Änderung des Dokuments, das _Last-Modified_-Datum.
- eine intransparente Zeichenfolge, die jede Version eindeutig identifiziert, genannt der _Entity Tag_ oder das _ETag_.

Der Vergleich von Versionen derselben Ressource ist etwas knifflig: Abhängig vom Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn eine Byte-für-Byte-Identität erwartet wird, zum Beispiel beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der User-Agent nur bestimmen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich angesehen werden, selbst wenn geringfügige Unterschiede bestehen, wie z. B. unterschiedliche Anzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig starke Validierung und gibt an, wann schwache Validierung verwendet werden kann.

### Starke Validierung

Starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte identisch mit derjenigen ist, mit der sie verglichen wird. Dies ist für einige bedingte Header obligatorisch und der Standard für die anderen. Starke Validierung ist sehr strikt und kann auf Serverebene schwer zu garantieren sein, aber sie garantiert jederzeit keinen Datenverlust, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Bezeichner für starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Oft wird dies mit einem {{HTTPHeader("ETag")}} unter Verwendung des MD5-Hashes der Ressource (oder eines Derivats) erreicht.

> [!NOTE]
> Da eine Änderung der Inhaltscodierung eine Änderung eines ETags erfordert, ändern einige Server ETags, wenn sie Antworten von einem Ursprungsserver komprimieren (z. B. Reverse-Proxies).
> Apache Server hängt standardmäßig den Namen der Komprimierungsmethode (`-gzip`) an ETags an, aber dies ist [konfigurierbar mit der `DeflateAlterETag`-Direktive](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Schwache Validierung unterscheidet sich von starker Validierung, da sie zwei Dokumentversionen als identisch ansieht, wenn der Inhalt äquivalent ist. Beispielsweise würde eine Seite, die sich nur durch ein unterschiedliches Datum im Footer oder unterschiedliche Werbung unterscheidet, bei schwacher Validierung als _identisch_ angesehen. Dieselben zwei Versionen werden bei starker Validierung als _unterschiedlich_ angesehen. Der Aufbau eines ETags-Systems, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann jedoch komplex sein, da es das Wissen um die Wichtigkeit der verschiedenen Elemente einer Seite erfordert.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource einem in diesem Header aufgelisteten entspricht. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource von jedem in diesem Header aufgelisteten verschieden ist. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einzelnes ETag oder ein Datum enthalten. Wenn es fehlschlägt, schlägt die Bereichsanfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Mit einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die ausgeführt wird, wenn der Cache leer ist, löst den Download der Ressource aus, wobei beide Validator-Werte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, aber es könnte ebenso nur einer der beiden sein. Diese Validatoren werden mit der Ressource (wie alle Header) zwischengespeichert und werden zum Erstellen bedingter Anfragen verwendet, sobald der Cache alt wird.

Solange der Cache nicht veraltet ist, werden überhaupt keine Anfragen gestellt. Aber sobald er veraltet ist, wird dies hauptsächlich durch den {{HTTPHeader("Cache-Control")}}-Header kontrolliert. Der Client verwendet nicht direkt den zwischengespeicherten Wert, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-None-Match")}} Header verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dadurch wird der Cache wieder aktuell und der Client verwendet die zwischengespeicherte Ressource. Obwohl es einen Antwort-/Anforderungs-Zyklus gibt, der einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut über das Netzwerk zu übertragen.

![Bei einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann bestimmen, ob sich die Ressource geändert hat, und wie in diesem Fall entscheiden, sie nicht erneut zu senden, da sie dieselbe ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, mit der neuen Version der Ressource (so, als wäre die Anfrage nicht bedingt).
Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als wäre die Anfrage nicht bedingt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen von der Einstellung der Validatoren auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler dafür besonderes tun müssen.

### Integrität eines teilweisen Downloads

Teilweises Herunterladen von Dateien ist eine HTTP-Funktionalität, die es ermöglicht, frühere Operationen fortzusetzen und Bandbreite und Zeit zu sparen, indem die bereits erhaltenen Informationen behalten werden:

![Ein Download wurde angehalten und nur teilweise Inhalte wurden abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der partielle Downloads unterstützt, signalisiert dies durch Senden des {{HTTPHeader("Accept-Ranges")}} Headers. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Range")}} Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den benötigten Bereich angibt und die Validatoren der teilweise erhaltenen Anfrage überprüft.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource, und das endgültige Dokument wird beschädigt.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten: Die flexiblere Variante verwendet {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}} und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet dann den Download von vorne:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss komplett neu heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie eine zusätzliche Antwort-/Anfrage-Austausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range Header ermöglicht es dem Server, direkt die gesamte Ressource zurückzusenden, wenn sie geändert wurde, ohne 412-Fehler zu senden und zu warten, bis der Client den Download neu startet.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, jedoch etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Selten wird eine solche zusätzliche Flexibilität benötigt.

### Vermeidung des Problems mit verlorenen Aktualisierungen durch optimistisches Sperren

Eine gängige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist sehr häufig in jedem Dateisystem oder jeder Versionskontrollanwendung, aber jede Anwendung, die es Ihnen ermöglicht, entfernte Ressourcen zu speichern, benötigt einen solchen Mechanismus. Allgemeine Websites, wie Wikis und andere CMS, haben ein solches Bedürfnis.

Mit der Methode {{HTTPMethod("PUT")}} können Sie dies implementieren. Der Client liest zunächst die Originaldateien, ändert sie und schiebt sie schließlich auf den Server:

![Aktualisieren einer Datei mit PUT, wenn keine Parallelität besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider wird die Sache etwas ungenau, sobald wir die Parallelität berücksichtigen. Während ein Client lokal seine neue Kopie der Ressource bearbeitet, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe mit seiner Kopie tun. Was als nächstes passiert, ist sehr unglücklich: Wenn sie zum Server zurückkehren, werden die Änderungen des ersten Clients durch den nächsten Client-Push verworfen, da dieser zweite Client sich der Änderungen des ersten Clients an der Ressource nicht bewusst ist. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients beibehalten werden, variiert je nach der Geschwindigkeit, mit der sie bestätigen; dies hängt von der Leistung der Clients, des Servers und sogar des Menschen ab, der das Dokument beim Client bearbeitet. Der Gewinner wird von Zeit zu Zeit wechseln. Dies ist eine _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu debuggen sind:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einem Race Condition: Der Langsamste gewinnt, und die anderen wissen nicht einmal, dass sie verloren haben. Problematik!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keine Möglichkeit, dieses Problem zu lösen, ohne einen der beiden Clients zu verärgern. Allerdings sind verlorene Aktualisierungen und Race Conditions zu vermeiden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _Optimistischen Sperralgorithmus_ (verwendet von den meisten Wikis oder Versionskontrollsystemen). Das Konzept besteht darin, allen Clients zu erlauben, Kopien der Ressource zu erhalten, sie dann lokal zu bearbeiten und die Parallelität zu kontrollieren, indem dem ersten Client erlaubt wird, eine Aktualisierung erfolgreich einzureichen. Alle nachfolgenden Aktualisierungen, die auf der jetzt veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Implementierung des optimistischen Sperrens: Nun gewinnt der Schnellste, und die anderen erhalten einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird mithilfe der {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}} Header implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit ihrer Erfassung geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem er den Benutzer benachrichtigt, von vorne zu beginnen (diesmal mit der neuesten Version), oder indem er dem Benutzer ein _Diff_ beider Versionen zeigt, wodurch er entscheiden kann, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Hochladen einer Ressource

Das erste Hochladen einer Ressource ist ein Grenzfall des vorhergehenden. Wie jede Aktualisierung einer Ressource unterliegt sie einem Race Condition, wenn zwei Clients versuchen, sie zu ähnlichen Zeiten auszuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: indem {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*` hinzugefügt wird, der ein beliebiges ETag darstellt. Die Anfrage wird nur erfolgreich sein, wenn die Ressource vorher nicht existierte:

![Wie bei einem regulären Upload unterliegt das erste Hochladen einer Ressource einem Race Condition: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` wird nur mit HTTP/1.1 (und später) konformen Servern funktionieren. Wenn unklar ist, ob der Server konform sein wird, müssen Sie zuerst eine {{HTTPMethod("HEAD")}} Anfrage an die Ressource senden, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind ein zentrales Feature von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder das Fortsetzen von Downloads ist vom Webmaster nur die ordnungsgemäße Konfiguration des Servers erforderlich; das Einstellen korrekter ETags kann in einigen Umgebungen schwierig sein. Sobald dies erreicht ist, bedient der Browser die erwarteten bedingten Anfragen.

Für Sperrmechanismen ist das Gegenteil der Fall: Webentwickler müssen eine Anfrage mit den richtigen Headern ausgeben, während sich Webmasters meist auf die Anwendung verlassen können, um die Überprüfungen vorzunehmen.

In beiden Fällen wird deutlich, dass bedingte Anfragen ein grundlegendes Merkmal des Webs sind.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Komprimierung
