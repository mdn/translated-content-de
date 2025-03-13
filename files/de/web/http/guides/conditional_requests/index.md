---
title: HTTP-Bedingte Anfragen
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP hat ein Konzept der _bedingten Anfragen_, bei denen das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit einem _Validator_ gesteuert werden können. Diese Anfragen sind nützlich, um zwischengespeicherte Inhalte zu validieren und sicherzustellen, dass sie nur abgerufen werden, wenn sie sich von der Kopie unterscheiden, die bereits im Browser verfügbar ist. Bedingte Anfragen sind auch nützlich, um die Integrität eines Dokuments beim Fortsetzen eines Downloads sicherzustellen oder um verlorene Aktualisierungen beim Hochladen oder Ändern eines Dokuments auf dem Server zu verhindern.

## Prinzipien

HTTP-Bedingte Anfragen sind Anfragen, die je nach Wert bestimmter Header unterschiedlich ausgeführt werden. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Vorbedingung erfüllt ist oder nicht.

Das unterschiedliche Verhalten wird durch die verwendete Anfragemethode und durch die zur Festlegung einer Vorbedingung verwendeten Header definiert:

- Bei {{Glossary("Safe/HTTP", "sicheren")}} Methoden, wie {{HTTPMethod("GET")}}, die normalerweise versucht, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zu senden. Dies spart Bandbreite.
- Bei {{Glossary("Safe/HTTP", "unsicheren")}} Methoden, wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochlädt, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann hochzuladen, wenn das Original, auf dem es basiert, dasselbe ist wie das auf dem Server gespeicherte.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource einer bestimmten Version entspricht. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da ein Byte-zu-Byte-Vergleich der gesamten Ressource unpraktisch ist und nicht immer gewünscht wird, überträgt die Anfrage einen Wert, der die Version beschreibt. Solche Werte werden _Validatoren_ genannt und sind von zwei Arten:

- Das Datum der letzten Änderung des Dokuments, das _last-modified_ Datum.
- Eine undurchsichtige Zeichenfolge, die jede Version eindeutig identifiziert, genannt der _Entity Tag_ oder das _ETag_.

Der Vergleich von Versionen derselben Ressource ist etwas anspruchsvoll: Je nach Kontext gibt es zwei Arten von _Gleichheitstests_:

- _Starke Validierung_ wird verwendet, wenn Byte-zu-Byte-Identität erwartet wird, beispielsweise beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Benutzer-Agent nur feststellen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich betrachtet werden, auch wenn geringfügige Unterschiede existieren, wie unterschiedliche Anzeigen oder ein Fußbereich mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} ermöglichen beide Validierungsarten, obwohl die Komplexität der Umsetzung auf der Serverseite variieren kann. HTTP verwendet standardmäßig eine starke Validierung und spezifiziert, wann eine schwache Validierung verwendet werden kann.

### Starke Validierung

Starke Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte identisch mit der verglichenen ist. Dies ist für einige bedingte Header zwingend erforderlich und der Standard für die anderen. Starke Validierung ist sehr streng und kann auf Serverebene schwer zu garantieren sein, gewährleistet jedoch, dass keine Daten verloren gehen, manchmal auf Kosten der Leistung.

Es ist recht schwierig, für eine starke Validierung einen eindeutigen Bezeichner mit {{HTTPHeader("Last-Modified")}} zu haben. Häufig wird dies mithilfe eines {{HTTPHeader("ETag")}} mit dem MD5-Hash der Ressource (oder einem Derivat) erreicht.

> [!NOTE]
> Da eine Änderung der Inhaltskodierung eine Änderung des ETag erfordert, modifizieren einige Server die ETags beim Komprimieren von Antworten eines Ursprungsservers (z. B. Reverse-Proxies).
> Der Apache-Server hängt standardmäßig den Namen der Kompressionsmethode (`-gzip`) an ETags an, dies kann jedoch [mit der `DeflateAlterETag`-Direktive konfiguriert werden](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Schwache Validierung

Schwache Validierung unterscheidet sich von der starken Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt äquivalent ist. Beispielsweise würde eine Seite, die sich nur durch ein anderes Datum im Fußbereich oder durch unterschiedliche Werbung von einer anderen unterscheidet, bei schwacher Validierung als _identisch_ betrachtet. Diese beiden Versionen werden bei Verwendung einer starken Validierung als _unterschiedlich_ betrachtet. Der Aufbau eines ETag-Systems, das eine schwache Validierung verwendet, ist sehr nützlich zur Optimierung der Cache-Leistung, kann jedoch komplex sein, da es die Wichtigkeit der verschiedenen Elemente einer Seite involviert.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource gleich einem in diesem Header aufgeführten ist. Es führt eine starke Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn das {{HTTPHeader("ETag")}} der entfernten Ressource von jedem in diesem Header aufgelisteten abweicht. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einzelnes ETag oder ein Datum haben. Bei Nichtbestehen schlägt die Bereichsanfrage fehl, und anstelle einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort wird eine {{HTTPStatus("200", "200 OK")}} mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Cache. Bei einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit dem Status {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die Anfrage, die beim leeren Cache ausgelöst wird, veranlasst den Download der Ressource, wobei beide Validatorwerte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch genauso gut nur einer von ihnen sein. Diese Validatoren werden zusammen mit der Ressource (wie alle Header) zwischengespeichert und zum Erstellen bedingter Anfragen verwendet, sobald der Cache alt wird.

Solange der Cache nicht veraltet ist, werden keine Anfragen gestellt. Sobald er jedoch veraltet ist, wird dies größtenteils durch den {{HTTPHeader("Cache-Control")}}-Header gesteuert. Der Client verwendet nicht mehr den zwischengespeicherten Wert direkt, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der Header {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-None-Match")}} verwendet.

Wenn sich die Ressource nicht geändert hat, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dadurch wird der Cache wieder aktuell und der Client verwendet die zwischengespeicherte Ressource. Obwohl es eine Anfrage-/Antwort-Rundreise gibt, die einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut zu übertragen.

![Bei einem veralteten Cache wird die bedingte Anfrage gesendet. Der Server kann feststellen, ob sich die Ressource geändert hat, und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie identisch ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Wenn sich die Ressource geändert hat, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, mit der neuen Version der Ressource (als ob die Anfrage nicht bedingt gewesen wäre). Der Client verwendet diese neue Ressource (und speichert sie im Cache).

![Falls die Ressource geändert wurde, wird sie zurückgesendet, als ob die Anfrage nicht bedingt wäre.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen von der Einstellung der Validatoren auf der Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler irgendwelche speziellen Arbeiten durchführen müssen.

### Integrität eines partiellen Downloads

Teilweiser Download von Dateien ist eine Funktionalität von HTTP, die es ermöglicht, vorherige Operationen fortzusetzen, Bandbreite und Zeit zu sparen, indem die bereits erhaltenen Informationen beibehalten werden:

![Ein Download wurde gestoppt und nur teilweise Inhalte wurden abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der teilweise Downloads unterstützt, teilt dies mit, indem er den {{HTTPHeader("Accept-Ranges")}}-Header sendet. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Ranges")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den benötigten Bereich angibt und die Validatoren der teilweise erhaltenen Anfrage überprüft.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource und das endgültige Dokument wird beschädigt.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere verwendet {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}} und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet dann den Download von Anfang an neu:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss erneut vollständig heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie eine zusätzliche Antwort-/Anfrage-Austausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung und HTTP hat einen spezifischen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range-Header erlaubt es dem Server, die gesamte Ressource direkt zurückzusenden, wenn sie geändert wurde, ohne dass ein 412-Fehler gesendet werden muss und auf den Neustart des Downloads durch den Client gewartet wird.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein ETag in der Bedingung verwendet werden kann. Selten wird eine solche zusätzliche Flexibilität benötigt.

### Vermeidung des verlorenen Updates-Problems mit optimistischer Sperrung

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist in jedem Dateisystem oder in Quellkontrollanwendungen sehr häufig, aber jede Anwendung, die das Speichern von Remote-Ressourcen ermöglicht, benötigt einen solchen Mechanismus. Gewöhnliche Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies implementieren. Der Client liest zunächst die Originaldateien, ändert sie und stellt sie schließlich auf den Server:

![Das Aktualisieren einer Datei mit PUT ist sehr einfach, wenn keine Parallelität beteiligt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider wird es ein wenig ungenau, sobald wir die Parallelität berücksichtigen. Während ein Client lokal seine neue Kopie der Ressource bearbeitet, kann ein zweiter Client dieselbe Ressource abrufen und dasselbe an seiner Kopie tun. Was dann passiert, ist sehr unglücklich: Wenn sie zurück auf den Server übermitteln, werden die Änderungen des ersten Clients durch den nächsten Client-Push verworfen, da dieser zweite Client sich der Änderungen des ersten Clients an der Ressource nicht bewusst ist. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients beibehalten werden, variiert je nach Geschwindigkeit, mit der sie übermitteln; dies hängt von der Leistung der Clients, des Servers und sogar des Menschen, der das Dokument beim Client bearbeitet, ab. Der Gewinner wird sich von einem Mal zum nächsten ändern. Dies ist eine _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu beheben sind:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einer Race Condition: Der langsamste gewinnt und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keine Möglichkeit, mit diesem Problem umzugehen, ohne einen der beiden Clients zu verärgern. Allerdings sollten verlorene Updates und Race Conditions vermieden werden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _optimistischen Sperralgorithmus_ (verwendet von den meisten Wikis oder Quellkontrollsystemen). Das Konzept besteht darin, allen Clients zu erlauben, Kopien der Ressource zu erhalten, sie dann lokal zu ändern und die Parallelität zu steuern, indem erfolgreich dem ersten Client erlaubt wird, ein Update einzureichen. Alle nachfolgenden Updates, die auf der jetzt veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen ermöglichen die Implementierung der optimistischen Sperrung: jetzt gewinnt der Schnellste und die anderen erhalten einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird unter Verwendung der {{HTTPHeader("If-Match")}} oder {{HTTPHeader("If-Unmodified-Since")}} Header implementiert. Wenn das ETag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seit ihrer Erhaltung geändert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Precondition Failed")}} Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: Entweder indem er den Benutzer benachrichtigt, noch einmal zu starten (diesmal mit der neuesten Version), oder indem er dem Benutzer einen _Diff_ beider Versionen zeigt, um ihm zu helfen, zu entscheiden, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Randfall des vorherigen. Wie jedes Update einer Ressource unterliegt auch dieser einer Race Condition, wenn zwei Clients versuchen, dies zur gleichen Zeit durchzuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: Durch Hinzufügen von {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert von `*`, der für jedes ETag steht. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource vorher nicht existierte:

![Wie bei einem regulären Upload unterliegt der erste Upload einer Ressource einer Race Condition: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn Sie nicht sicher sind, ob der Server konform ist, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource senden, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind eine Schlüsselfunktion von HTTP und ermöglichen den Aufbau effizienter und komplexer Anwendungen. Für das Caching oder das Fortsetzen von Downloads ist die einzige Arbeit, die Webmastern abverlangt wird, das richtige Konfigurieren des Servers; die korrekten ETags in einigen Umgebungen zu setzen, kann knifflig sein. Sobald dies erreicht ist, erfolgt die erwartete bedingte Anfragen vonseiten des Browsers.

Für Sperrmechanismen ist es das Gegenteil: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster sich größtenteils auf die Anwendung verlassen können, die Überprüfungen für sie durchzuführen.

In beiden Fällen ist klar: Bedingte Anfragen sind eine fundamentale Funktion im Hintergrund des Webs.

## Siehe auch

- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPHeader("If-None-Match")}}
- [Apache Server `mod_deflate.c`](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transformiert ETags während der Komprimierung
