---
title: HTTP bedingte Anfragen
short-title: Bedingte Anfragen
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

HTTP hat ein Konzept von _bedingten Anfragen_, wobei das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ kontrolliert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren, um sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der Kopie unterscheiden, die dem Browser bereits zur Verfügung steht. Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads zu gewährleisten oder um verlorene Updates zu verhindern, wenn ein Dokument auf dem Server hochgeladen oder geändert wird.

## Prinzipien

HTTP-bedingte Anfragen sind Anfragen, die je nach Wert bestimmter Header unterschiedlich ausgeführt werden. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Vorbedingung erfüllt ist oder nicht.

Die unterschiedlichen Verhaltensweisen werden durch die Methode der verwendeten Anfrage und durch die Menge der für eine Vorbedingung verwendeten Header definiert:

- für {{Glossary("Safe/HTTP", "sichere")}} Methoden wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zurückzusenden, wenn es relevant ist. Dies schont die Bandbreite.
- für {{Glossary("Safe/HTTP", "unsichere")}} Methoden wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, das gleiche ist wie das auf dem Server gespeicherte.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource mit einer bestimmten Version übereinstimmt. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da ein Vergleich der gesamten Ressource Byte für Byte unpraktikabel ist und nicht immer gewünscht wird, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind von zwei Arten:

- das Datum der letzten Änderung des Dokuments, das _last-modified_ Datum.
- eine undurchsichtige Zeichenkette, die jede Version eindeutig identifiziert, genannt der _entity tag_ oder das _ETag_.

Der Vergleich von Versionen derselben Ressource ist ein wenig knifflig: In Abhängigkeit vom Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn eine Byte-für-Byte-Identität erwartet wird, beispielsweise beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der User-Agent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich angesehen werden, auch wenn geringfügige Unterschiede bestehen, wie z. B. verschiedene Anzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl der Komplexitätsgrad zu deren Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig eine starke Validierung und gibt an, wann eine schwache Validierung verwendet werden kann.

### Starke Validierung

Die starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte identisch mit der Ressource ist, mit der sie verglichen wird. Dies ist für einige bedingte Header zwingend erforderlich und der Standard für die anderen. Die starke Validierung ist sehr streng und kann auf Serverseite schwierig zu gewährleisten sein, sie garantiert jedoch jederzeit keinen Datenverlust, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Bezeichner für die starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Oft wird dies mit einem {{HTTPHeader("ETag")}} unter Verwendung des MD5-Hashes der Ressource (oder einer Ableitung) gemacht.

> [!NOTE]
> Da eine Änderung der Inhaltskodierung eine Änderung eines ETags erfordert, ändern einige Server ETags beim Komprimieren von Antworten eines Ursprungsservers (z. B. Reverse-Proxy). Der Apache-Server fügt standardmäßig den Namen der Kompressionsmethode (`-gzip`) zu ETags hinzu, aber dies ist [mit der `DeflateAlterETag`-Direktive konfigurierbar](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Die schwache Validierung unterscheidet sich von der starken Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt gleichwertig ist. Beispielsweise würde eine Seite, die sich von einer anderen nur durch ein anderes Datum im Footer oder unterschiedliche Werbung unterscheidet, mit schwacher Validierung als _identisch_ angesehen werden. Diese gleichen zwei Versionen werden bei Verwendung der starken Validierung als _unterschiedlich_ betrachtet. Der Aufbau eines ETag-Systems, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann jedoch komplex sein, da es das Wissen um die Wichtigkeit der verschiedenen Elemente einer Seite erfordert.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource mit einem in diesem Header aufgeführten Wert übereinstimmt. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource von jedem in diesem Header aufgeführten Wert abweicht. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene Datum.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen Datum ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann aber nur ein einzelnes ETag oder ein Datum haben. Wenn es fehlschlägt, schlägt die Range-Anfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der gesamten Ressource zurückgegeben.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Mit einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} `OK` zurückgegeben.

![Die Anfrage, die bei leerem Cache gestellt wird, löst das Herunterladen der Ressource aus, wobei beide Validator-Werte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch genauso gut nur einer von ihnen gewesen sein. Diese Validatoren werden zusammen mit der Ressource (wie alle Header) zwischengespeichert und werden zur Erstellung bedingter Anfragen verwendet, sobald der Cache veraltet ist.

Solange der Cache nicht veraltet ist, werden überhaupt keine Anfragen gestellt. Aber sobald er veraltet ist, was hauptsächlich durch den {{HTTPHeader("Cache-Control")}}-Header kontrolliert wird, verwendet der Client nicht den zwischengespeicherten Wert direkt, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}}- und {{HTTPHeader("If-None-Match")}}-Header verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dadurch wird der Cache wieder frisch, und der Client verwendet die zwischengespeicherte Ressource. Obwohl eine Anfrage/Antwort-Rundreise stattfindet, die einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut über das Netzwerk zu übertragen.

![Mit einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann feststellen, ob sich die Ressource geändert hat und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie gleich ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der neuen Version der Ressource zurück (als ob die Anfrage nicht bedingt gewesen wäre). Der Client verwendet diese neue Ressource (und speichert sie zwischen).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als ob die Anfrage nicht bedingt gewesen wäre.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen von der Einstellung der Validatoren auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler spezielle Arbeit leisten müssen.

### Integrität eines Teildownloads

Das partielle Herunterladen von Dateien ist eine Funktionalität von HTTP, die es ermöglicht, vorherige Vorgänge fortzuführen und Bandbreite und Zeit zu sparen, indem die bereits erhaltenen Informationen erhalten bleiben:

![Ein Download wurde gestoppt und es wurden nur teilweise Inhalte abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der Teildownloads unterstützt, teilt dies mit, indem er den {{HTTPHeader("Accept-Ranges")}}-Header sendet. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Range")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den benötigten Bereich und die Vorbedingungen zur Prüfung der Validatoren der teilweisen Anfrage angibt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource und das endgültige Dokument wird beschädigt sein.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere Methode nutzt {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}} und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet dann den Download von Anfang an neu:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss erneut vollständig heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Selbst wenn diese Methode funktioniert, fügt sie eine zusätzliche Antwort/Anfrage-Austauschrunde hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range-Header erlaubt es dem Server, direkt die vollständige Ressource zurückzusenden, wenn sie geändert wurde, ohne dass ein 412-Fehler gesendet werden muss, und auf den Client zu warten, um den Download neu zu starten.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, jedoch etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Selten wird eine solche zusätzliche Flexibilität benötigt.

### Vermeidung des verlorenen Update-Problems mit optimistischem Sperren

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist sehr verbreitet in jedem Dateisystem oder Quellkontrollanwendungen, aber jede Anwendung, die es erlaubt, entfernte Ressourcen zu speichern, benötigt einen solchen Mechanismus. Gewöhnliche Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies umsetzen. Der Client liest zuerst die Originaldateien, ändert sie und überträgt sie schließlich an den Server:

![Aktualisieren einer Datei mit einem PUT, wenn keine Gleichzeitigkeit vorliegt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider wird es etwas ungenau, sobald wir die Gleichzeitigkeit berücksichtigen. Während ein Client seine neue Kopie der Ressource lokal modifiziert, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe mit seiner Kopie tun. Was als nächstes passiert, ist sehr bedauerlich: Wenn sie zurück zum Server übertragen werden, werden die Änderungen des ersten Clients durch den nächsten Client-Upload verworfen, da dieser zweite Client die Änderungen des ersten Clients an der Ressource nicht kennt. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients beibehalten werden, variiert mit der Geschwindigkeit, mit der sie übertragen werden; dies hängt von der Leistung der Clients, des Servers und sogar des Menschen ab, der das Dokument am Client bearbeitet. Der Gewinner ändert sich von einem Mal zum anderen. Dies ist eine _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu debuggen sind:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einer Race Condition: der langsamste gewinnt, und die anderen erfahren nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keinen Weg, mit diesem Problem umzugehen, ohne einen der beiden Clients zu verärgern. Dennoch sollten verlorene Updates und Race Conditions vermieden werden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _optimistischen Sperralgorithmus_ (der von den meisten Wikis oder Quellkontrollsystemen verwendet wird). Das Konzept besteht darin, allen Clients zu erlauben, Kopien der Ressource zu erhalten, dann können sie sie lokal ändern und die Gleichzeitigkeit wird durch erfolgreiches Zulassen des ersten Clients zum Einreichen eines Updates kontrolliert. Alle nachfolgenden Aktualisierungen, die auf der jetzt veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Umsetzung des optimistischen Sperrens: jetzt gewinnt der schnellste, und die anderen erhalten einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird unter Verwendung der {{HTTPHeader("If-Match")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Header implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit dem Erlangen geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem der Benutzer benachrichtigt wird, um erneut zu beginnen (diesmal auf der neuesten Version), oder indem dem Benutzer ein _Diff_ beider Versionen angezeigt wird, um ihm zu helfen, zu entscheiden, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Grenzfall des vorherigen. Wie jede Aktualisierung einer Ressource ist es einer Race Condition unterworfen, wenn zwei Clients versuchen, gleichzeitig zu operieren. Um dies zu verhindern, können bedingte Anfragen verwendet werden: indem {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*`, das alle ETags darstellt, hinzugefügt wird. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource zuvor nicht existiert hat:

![Wie bei einem regulären Upload ist der erste Upload einer Ressource einer Race Condition ausgesetzt: If-None-Match kann es verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn Sie sich nicht sicher sind, ob der Server konform ist, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource stellen, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind eine Schlüsselkomponente von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Zwischenspeichern oder das Fortsetzen von Downloads besteht die einzige Arbeit für Webmaster darin, den Server korrekt zu konfigurieren; das Setzen korrekter ETags in einigen Umgebungen kann kompliziert sein. Einmal erreicht, wird der Browser die erwarteten bedingten Anfragen ausführen.

Für Sperrmechanismen ist es das Gegenteil: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster meist darauf vertrauen können, dass die Anwendung die Prüfungen für sie durchführt.

In beiden Fällen ist klar: Bedingte Anfragen sind ein fundamentales Merkmal des Webs.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Kompression
