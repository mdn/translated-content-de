---
title: HTTP Conditional Requests
slug: Web/HTTP/Conditional_requests
l10n:
  sourceCommit: bd0943479fcba3b885f72892a3c11cc1222878ce
---

{{HTTPSidebar}}

HTTP hat ein Konzept von _bedingten Anfragen_, bei dem das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ gesteuert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der Kopie unterscheiden, die bereits im Browser verfügbar ist. Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments zu gewährleisten, wenn ein Download fortgesetzt wird, oder um verlorene Aktualisierungen zu verhindern, wenn ein Dokument auf den Server hochgeladen oder dort geändert wird.

## Prinzipien

HTTP-bedingte Anfragen sind Anfragen, die je nach Wert bestimmter Header unterschiedlich ausgeführt werden. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Vorbedingung erfüllt ist oder nicht.

Das unterschiedliche Verhalten wird durch die verwendete Methode der Anfrage und das Set von Headern, das für eine Vorbedingung verwendet wird, definiert:

- Für {{Glossary("Safe/HTTP", "sichere")}} Methoden, wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zurückzusenden, wenn es relevant ist. Dies spart Bandbreite.
- Für {{Glossary("Safe/HTTP", "unsichere")}} Methoden, wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, mit dem auf dem Server gespeicherten übereinstimmt.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource mit einer bestimmten Version übereinstimmt. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da ein Vergleich der gesamten Ressource Byte für Byte unpraktikabel und nicht immer gewünscht ist, übermittelt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind zweierlei Art:

- das Datum der letzten Änderung des Dokuments, das _Last-Modified_-Datum.
- eine undurchsichtige Zeichenfolge, die jede Version eindeutig identifiziert, genannt das _Entity-Tag_ oder _ETag_.

Das Vergleichen von Versionen derselben Ressource ist etwas knifflig: Abhängig vom Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Starke Validierung_ wird verwendet, wenn eine Identität Byte für Byte erwartet wird, zum Beispiel beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Benutzeragent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich angesehen werden, auch wenn kleinere Unterschiede bestehen, wie unterschiedliche Anzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} erlauben beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig eine starke Validierung und gibt an, wann eine schwache Validierung verwendet werden kann.

### Starke Validierung

Starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte mit derjenigen identisch ist, mit der sie verglichen wird. Dies ist für einige bedingte Header zwingend erforderlich und der Standard für die anderen. Die starke Validierung ist sehr streng und kann auf Serverseite schwer zu garantieren sein, garantiert jedoch zu keinem Zeitpunkt Datenverlust, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Bezeichner für eine starke Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Oft wird dies mit einem {{HTTPHeader("ETag")}} unter Verwendung des MD5-Hashes der Ressource (oder eines Ablegers davon) gemacht.

> [!NOTE]
> Da eine Änderung der Inhaltscodierung eine Änderung eines ETag erfordert, ändern einige Server ETags, wenn sie Antworten eines Ursprungsservers komprimieren (z.B. Reverse-Proxys).
> Der Apache Server fügt standardmäßig den Namen der Kompressionsmethode (`-gzip`) zu ETags hinzu, aber dies ist [mit der Direktive `DeflateAlterETag` konfigurierbar](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Schwache Validierung unterscheidet sich von der starken Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt äquivalent ist. Zum Beispiel würde eine Seite, die sich nur durch ein anderes Datum im Footer oder unterschiedliche Werbung von einer anderen unterscheidet, bei schwacher Validierung als _identisch_ betrachtet. Diese gleichen beiden Versionen werden bei Verwendung einer starken Validierung als _unterschiedlich_ betrachtet. Der Aufbau eines ETag-Systems, das schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann jedoch komplex sein, da es das Erkennen der Bedeutung der verschiedenen Elemente einer Seite beinhaltet.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource mit einem in diesem Header aufgelisteten übereinstimmt. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource sich von jedem in diesem Header aufgelisteten unterscheidet. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einzelnes ETag oder ein Datum haben. Falls es fehlschlägt, schlägt die Bereichsanfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Bei einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit einem Status von {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die beim leeren Cache erstellt wird, führt dazu, dass die Ressource heruntergeladen wird, wobei beide Validator-Werte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch auch nur einer von ihnen sein. Diese Validatoren werden mit der Ressource zwischengespeichert (wie alle Header) und werden verwendet, um bedingte Anfragen zu erstellen, sobald der Cache veraltet wird.

Solange der Cache nicht veraltet ist, werden keine Anfragen gestellt. Sobald er jedoch veraltet ist, was meist vom {{HTTPHeader("Cache-Control")}}-Header gesteuert wird, verwendet der Client den zwischengespeicherten Wert nicht direkt, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-None-Match")}}-Header verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dies macht den Cache wieder aktuell und der Client verwendet die zwischengespeicherte Ressource. Obwohl es bei dieser Anforderung/Antwort ein Hin und Her gibt, das einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut über das Netzwerk zu übertragen.

![Mit einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann feststellen, ob sich die Ressource geändert hat und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie gleich ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der neuen Version der Ressource zurück (als ob die Anfrage nicht bedingt gewesen wäre). Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als ob die Anfrage nicht bedingt gewesen wäre.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Neben dem Setzen der Validatoren auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler besondere Arbeiten durchführen müssen.

### Integrität eines teilweisen Downloads

Teilweises Herunterladen von Dateien ist eine Funktionalität von HTTP, die es ermöglicht, vorherige Operationen fortzusetzen und dabei Bandbreite und Zeit zu sparen, indem bereits erhaltene Informationen beibehalten werden:

![Ein Download wurde abgebrochen und es wurden nur teilweise Inhalte abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der Teil-Downloads unterstützt, signalisiert dies durch das Senden des {{HTTPHeader("Accept-Ranges")}}-Headers. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Ranges")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den benötigten Bereich angibt und Vorbedingungen mit den Validatoren der teilweise erhaltenen Anfrage überprüft.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource, und das endgültige Dokument wird beschädigt.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere macht Gebrauch von {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}} und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet den Download dann von vorne:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss komplett neu heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie einen zusätzlichen Anforderung-/Antwortaustausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Die If-Range-Headers erlauben es dem Server, die vollständige Ressource direkt zurückzusenden, wenn sie geändert wurde, ohne einen 412-Fehler zu senden und auf die erneute Initiative des Clients zu warten.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Eine solche zusätzliche Flexibilität wird selten benötigt.

### Vermeidung des verlorenen Update-Problems mit optimistischer Sperre

Eine häufige Operation in Webanwendungen besteht darin, ein entferntes Dokument zu _aktualisieren_. Dies ist sehr verbreitet in jedem Dateisystem oder Quellkontrollanwendungen, aber jede Anwendung, die das Speichern von entfernten Ressourcen ermöglicht, benötigt einen solchen Mechanismus. Gängige Websites, wie Wikis und andere CMS, haben solch einen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies implementieren. Der Client liest zunächst die Originaldateien, modifiziert sie und lädt sie schließlich auf den Server hoch:

![Ein Update einer Datei mit einem PUT ist sehr einfach, solange keine Nebenläufigkeit ins Spiel kommt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider wird es etwas ungenau, sobald wir die Nebenläufigkeit berücksichtigen. Während ein Client seine neue Kopie der Ressource lokal modifiziert, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe mit seiner Kopie tun. Was dann passiert, ist sehr unglücklich: Wenn sie die Änderungen an den Server übermitteln, werden die Änderungen des ersten Clients durch den nächsten Client-Push verworfen, da dieser zweite Client sich der Änderungen des ersten Clients an der Ressource nicht bewusst ist. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen eines Clients beibehalten werden, variiert je nach Geschwindigkeit der Übermittlung; dies hängt von der Leistung der Clients, des Servers und sogar vom Menschen ab, der das Dokument am Client bearbeitet. Der Gewinner ändert sich von Mal zu Mal. Dies ist eine _Race-Bedingung_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu beheben sind:

![Wenn mehrere Clients parallel dieselbe Ressource aktualisieren, stehen wir vor einer Race-Bedingung: Der langsamste gewinnt, und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keine Möglichkeit, dieses Problem zu lösen, ohne einen der beiden Clients zu verärgern. Doch verlorene Updates und Race-Bedingungen sind zu vermeiden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _optimistischen Sperralgorithmus_ (wird von den meisten Wikis oder Quellkontrollsystemen verwendet). Das Konzept besteht darin, allen Clients zu erlauben, Kopien der Ressource zu erhalten, sie dann lokal zu modifizieren und die Nebenläufigkeit zu steuern, indem erfolgreich dem ersten Client erlaubt wird, ein Update zu übermitteln. Alle nachfolgenden Updates, die auf der nun veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Implementierung optimistischer Sperren: Nun gewinnt der Schnellste, und die anderen bekommen einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird unter Verwendung der {{HTTPHeader("If-Match")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Header implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit ihrer Abrufung geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler abgelehnt. Es liegt dann beim Client, den Fehler zu behandeln: entweder indem er den Benutzer benachrichtigt, von vorne zu beginnen (diesmal auf der neuesten Version), oder indem er dem Benutzer ein _diff_ beider Versionen zeigt, um ihm zu helfen zu entscheiden, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Sonderfall des vorherigen. Wie jede Aktualisierung einer Ressource unterliegt auch er einer Race-Bedingung, wenn zwei Clients versuchen, dies zu ähnlichen Zeiten durchzuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: indem {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert `*` hinzugefügt wird, der für jedes ETag steht. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource zuvor nicht vorhanden war:

![Wie bei einem regulären Upload unterliegt der erste Upload einer Ressource einer Race-Bedingung: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn man sich nicht sicher ist, ob der Server konform ist, muss man zunächst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource senden, um dies zu prüfen.

## Fazit

Bedingte Anfragen sind eine Schlüsselfunktion von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder das Fortsetzen von Downloads besteht die einzige erforderliche Arbeit für Webmaster darin, den Server korrekt zu konfigurieren; das Setzen korrekter ETags kann in einigen Umgebungen schwierig sein. Sobald dies erreicht ist, wird der Browser die erwarteten bedingten Anfragen bedienen.

Für Sperrmechanismen ist es das Gegenteil: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster sich in der Regel auf die Anwendung verlassen können, um die Überprüfungen für sie durchzuführen.

In beiden Fällen ist klar, dass bedingte Anfragen eine grundlegende Funktion im Hintergrund des Webs sind.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Kompression
