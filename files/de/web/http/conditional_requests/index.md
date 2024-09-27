---
title: HTTP-Bedingungsanfragen
slug: Web/HTTP/Conditional_requests
l10n:
  sourceCommit: bd0943479fcba3b885f72892a3c11cc1222878ce
---

{{HTTPSidebar}}

HTTP hat das Konzept der _Bedingungsanfragen_, bei denen das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ gesteuert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der bereits im Browser verfügbaren Kopie unterscheiden. Bedingungsanfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads zu gewährleisten oder verlorene Aktualisierungen beim Hochladen oder Ändern eines Dokuments auf dem Server zu verhindern.

## Prinzipien

HTTP-Bedingungsanfragen sind Anfragen, die je nach Wert bestimmter Header unterschiedlich ausgeführt werden. Diese Header definieren eine Bedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Bedingung erfüllt ist oder nicht.

Die verschiedenen Verhaltensweisen werden durch die verwendete Anfragemethode und die für eine Bedingung verwendete Header-Menge definiert:

- Bei [sicheren](/de/docs/Glossary/Safe/HTTP) Methoden wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die Bedingungsanfrage verwendet werden, um das Dokument nur bei Relevanz zu senden. Dies spart Bandbreite.
- Bei [unsicheren](/de/docs/Glossary/Safe/HTTP) Methoden wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die Bedingungsanfrage verwendet werden, um das Dokument nur hochzuladen, wenn das Original, auf dem es basiert, mit dem auf dem Server gespeicherten identisch ist.

## Validatoren

Alle Bedingungsheader versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource einer bestimmten Version entspricht. Um dies zu erreichen, müssen die Bedingungsanfragen die Version der Ressource angeben. Da der Vergleich der ganzen Ressource Byte für Byte unpraktisch ist und nicht immer gewollt ist, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind in zwei Arten unterteilt:

- das Datum der letzten Änderung des Dokuments, das _Last-Modified_-Datum.
- eine undurchsichtige Zeichenkette, die jede Version eindeutig identifiziert, genannt _Entity-Tag_ oder _ETag_.

Der Vergleich von Versionen derselben Ressource ist etwas schwierig: Je nach Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn Byte-für-Byte-Identität erwartet wird, zum Beispiel beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Benutzeragent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich betrachtet werden, selbst wenn geringfügige Unterschiede bestehen, wie unterschiedliche Anzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig von dem verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig starke Validierung und gibt an, wann schwache Validierung verwendet werden kann.

### Starke Validierung

Die starke Validierung besteht darin, zu garantieren, dass die Ressource bytegenau mit derjenigen identisch ist, mit der sie verglichen wird. Dies ist für einige Bedingungsheader obligatorisch und der Standard für die anderen. Starke Validierung ist sehr streng und möglicherweise schwierig auf dem Serverniveau zu gewährleisten, bietet jedoch die Gewährleistung, dass zu keinem Zeitpunkt Datenverlust auftritt, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Bezeichner für die starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Häufig wird dies mithilfe eines {{HTTPHeader("ETag")}} mit dem MD5-Hash der Ressource (oder einem Derivat) gemacht.

> [!NOTE]
> Da eine Änderung der Inhaltskodierung eine Änderung an einem ETag erfordert, ändern einige Server die ETags, wenn sie Antworten von einem Ursprungsserver komprimieren (Reverse-Proxies zum Beispiel).
> Der Apache-Server fügt standardmäßig den Namen der Komprimierungsmethode (`-gzip`) zu ETags hinzu, aber dies ist [konfigurierbar mit der `DeflateAlterETag`-Direktive](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Die schwache Validierung unterscheidet sich von der starken Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt gleichwertig ist. Beispielsweise würde eine Seite, die sich nur durch ein anderes Datum im Footer oder unterschiedliche Werbung unterscheidet, als _identisch_ zur anderen angesehen werden, wenn schwache Validierung verwendet wird. Diese beiden Versionen würden als _unterschiedlich_ betrachtet werden, wenn starke Validierung verwendet wird. Der Aufbau eines Systems von ETags, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Performance, kann jedoch komplex sein, da es das Wissen über die Bedeutung der verschiedenen Elemente einer Seite beinhaltet.

## Bedingungsheader

Mehrere HTTP-Header, sogenannte Bedingungsheader, führen zu Bedingungsanfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource mit einem der in diesem Header aufgelisteten übereinstimmt. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource von jedem in diesem Header aufgelisteten abweicht. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}}, oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einzelnes ETag oder ein Datum haben. Wenn es fehlschlägt, schlägt die Range-Anfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für Bedingungsanfragen ist die Aktualisierung eines Caches. Bei einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit dem Status {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die bei einem leeren Cache gestellt wird, löst den Download der Ressource aus, wobei beide Validatorwerte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch ebenso nur einer von ihnen gewesen sein. Diese Validatoren werden mit der Ressource (wie alle Header) zwischengespeichert und werden verwendet, um Bedingungsanfragen zu erstellen, sobald der Cache veraltet ist.

Solange der Cache nicht veraltet ist, werden keine Anfragen gestellt. Sobald er jedoch veraltet ist, wird dies hauptsächlich durch den {{HTTPHeader("Cache-Control")}}-Header gesteuert, verwendet der Client nicht direkt den zwischengespeicherten Wert, sondern gibt eine _Bedingungsanfrage_ aus. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-None-Match")}}-Header verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dadurch wird der Cache wieder aktuell, und der Client verwendet die zwischengespeicherte Ressource. Obwohl es eine Antwort-/Anfragerunde gibt, die einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut über das Netz zu übertragen.

![Bei einem veralteten Cache wird die Bedingungsanfrage gesendet. Der Server kann bestimmen, ob sich die Ressource geändert hat, und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie dieselbe ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, mit der neuen Version der Ressource (als ob die Anfrage nicht bedingt gewesen wäre). Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Im Fall, dass die Ressource geändert wurde, wird sie zurückgesendet, als ob die Anfrage nicht bedingt gewesen wäre.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen von der Einstellung der Validatoren auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche Bedingungsanfragen, ohne dass die Webentwickler besondere Arbeit leisten müssen.

### Integrität eines teilweisen Downloads

Teilweises Herunterladen von Dateien ist eine Funktionalität von HTTP, die es ermöglicht, vorherige Vorgänge fortzusetzen, Bandbreite und Zeit zu sparen, indem bereits erhaltene Informationen beibehalten werden:

![Ein Download wurde gestoppt und es wurde nur teilweise Inhalt abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der Teil-Downloads unterstützt, signalisiert dies, indem er den {{HTTPHeader("Accept-Ranges")}}-Header sendet. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Ranges")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den benötigten Bereich angibt und die Validatoren der teilweise erhaltenen Anfrage überprüft.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein mögliches Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource, und das endgültige Dokument wird beschädigt.

Um dies zu verhindern, werden Bedingungsanfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere Möglichkeit nutzt {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}}, und der Server gibt einen Fehler zurück, wenn die Bedingung fehlschlägt; der Client startet dann den Download von Anfang an neu:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Bedingungen fehl und die Ressource muss vollständig neu heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie eine zusätzliche Antwort-/Anfrageaustausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range-Header ermöglicht es dem Server, direkt die vollständige Ressource zurückzusenden, wenn sie geändert wurde, ohne dass ein 412-Fehler gesendet werden muss und auf den Client gewartet werden muss, um den Download erneut zu beginnen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Selten wird eine solche zusätzliche Flexibilität benötigt.

### Vermeidung des Problems verlorener Updates mit optimistischer Sperrung

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist sehr üblich in jedem Dateisystem oder Quellkontrollanwendungen, aber jede Anwendung, die das Speichern entfernter Ressourcen ermöglicht, benötigt einen solchen Mechanismus. Gewöhnliche Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies implementieren. Der Client liest zuerst die Originaldateien, ändert sie und überträgt sie schließlich an den Server:

![Das Aktualisieren einer Datei mit PUT ist sehr einfach, wenn keine Parallelität involviert ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider werden die Dinge ein wenig ungenau, sobald wir die Parallelität berücksichtigen. Während ein Client lokal seine neue Kopie der Ressource modifiziert, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe mit seiner Kopie tun. Was dann passiert, ist sehr bedauerlich: Wenn sie zurück an den Server übermitteln, werden die Änderungen des ersten Clients von der nächsten Client-Übertragung verworfen, da dieser zweite Client nicht über die Änderungen des ersten Clients an der Ressource informiert ist. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients behalten werden, variiert mit der Geschwindigkeit, mit der sie übermitteln; dies hängt von der Leistung der Clients, des Servers und sogar des Menschen ab, der das Dokument beim Client bearbeitet. Der Gewinner wird von einem Mal zum anderen wechseln. Dies ist ein _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu debuggen sind:

![Wenn mehrere Clients gleichzeitig dieselbe Ressource aktualisieren, stehen wir vor einem Race Condition: Der Langsamste gewinnt, und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keinen Weg, dieses Problem zu lösen, ohne einen der beiden Clients zu verärgern. Verlorene Updates und Race Conditions sind jedoch zu vermeiden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingungsanfragen erlauben die Implementierung des _optimistischen Sperralgorithmus_ (der von den meisten Wikis oder Quellkontrollsystemen verwendet wird). Das Konzept ist, alle Clients eine Kopie der Ressource erhalten zu lassen, sie lokal zu ändern und die Parallelität zu kontrollieren, indem der erste Client erfolgreich ein Update übermitteln darf. Alle nachfolgenden Aktualisierungen, die auf der jetzt veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingungsanfragen ermöglichen die Implementierung des optimistischen Sperrens: Jetzt gewinnt der Schnellste, und die anderen erhalten einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird mithilfe der {{HTTPHeader("If-Match")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Header implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit ihrem Erhalt geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem er den Benutzer benachrichtigt, wieder von vorne zu beginnen (diesmal mit der neuesten Version), oder indem er dem Benutzer einen _Diff_ beider Versionen zeigt, um ihm zu helfen zu entscheiden, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Sonderfall des vorherigen. Wie bei jeder Aktualisierung einer Ressource, unterliegt er einem Race Condition, wenn zwei Clients versuchen, dies gleichzeitig durchzuführen. Um dies zu verhindern, können Bedingungsanfragen verwendet werden: durch Hinzufügen {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*`, der jedes ETag repräsentiert. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource zuvor nicht existierte:

![Wie bei einem regulären Upload unterliegt der erste Upload einer Ressource einem Race Condition: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn unsicher ist, ob der Server konform ist, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource senden, um dies zu überprüfen.

## Fazit

Bedingungsanfragen sind eine Schlüsselkomponente von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder Fortsetzen von Downloads ist die einzige Arbeit, die für Webmastern erforderlich ist, den Server korrekt zu konfigurieren; das Einstellen korrekter ETags in einigen Umgebungen kann schwierig sein. Sobald dies erreicht ist, wird der Browser die erwarteten Bedingungsanfragen ausführen.

Bei Sperrmechanismen ist es umgekehrt: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster sich meist auf die Anwendung verlassen können, die Überprüfungen für sie durchzuführen.

In beiden Fällen ist klar, Bedingungsanfragen sind ein grundlegendes Merkmal im Web.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Kompression
