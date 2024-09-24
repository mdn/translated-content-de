---
title: HTTP bedingte Anfragen
slug: Web/HTTP/Conditional_requests
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{HTTPSidebar}}

HTTP hat ein Konzept der _bedingten Anfragen_, bei dem das Ergebnis und sogar der Erfolg einer Anfrage durch den Vergleich der betroffenen Ressourcen mit dem Wert eines _Validators_ beeinflusst werden können. Solche Anfragen können nützlich sein, um den Inhalt eines Caches zu validieren und eine unnötige Kontrolle zu vermeiden, um die Integrität eines Dokuments zu überprüfen, beispielsweise beim Fortsetzen eines Downloads oder beim Verhindern verlorener Aktualisierungen beim Hochladen oder Ändern eines Dokuments auf dem Server.

## Prinzipien

HTTP bedingte Anfragen sind Anfragen, die unterschiedlich ausgeführt werden, je nach dem Wert spezifischer Header. Diese Header definieren eine Vorbedingung, und das Ergebnis der Anfrage wird unterschiedlich sein, je nachdem, ob die Vorbedingung erfüllt ist oder nicht.

Das unterschiedliche Verhalten wird durch die verwendete Methode der Anfrage und durch die zur Vorbedingung verwendeten Header bestimmt:

- Für {{glossary("Safe/HTTP", "sichere")}} Methoden, wie {{HTTPMethod("GET")}}, die normalerweise versuchen, ein Dokument abzurufen, kann die bedingte Anfrage verwendet werden, um das Dokument nur dann zurückzusenden, wenn es relevant ist. Dies spart Bandbreite.
- Für {{glossary("Safe/HTTP", "unsichere")}} Methoden, wie {{HTTPMethod("PUT")}}, die normalerweise ein Dokument hochladen, kann die bedingte Anfrage verwendet werden, um das Dokument nur hochzuladen, wenn das Original, auf dem es basiert, dasselbe ist wie das auf dem Server gespeicherte.

## Validatoren

Alle bedingten Header versuchen zu überprüfen, ob die auf dem Server gespeicherte Ressource mit einer bestimmten Version übereinstimmt. Um dies zu erreichen, müssen die bedingten Anfragen die Version der Ressource angeben. Da es undurchführbar ist, die ganze Ressource Byte für Byte zu vergleichen und das nicht immer gewünscht ist, übermittelt die Anfrage einen Wert, der die Version beschreibt. Diese Werte werden _Validatoren_ genannt und sind zweierlei Art:

- das Datum der letzten Änderung des Dokuments, das _Zuletzt-geändert_-Datum.
- eine undurchsichtige Zeichenkette, die jede Version eindeutig identifiziert, genannt _Entity-Tag_ oder _etag_.

Der Vergleich von Versionen derselben Ressource ist etwas knifflig: Abhängig vom Kontext gibt es zwei Arten von _Gleichheitsprüfungen_:

- _Strikte Validierung_ wird verwendet, wenn Identität von Byte zu Byte erwartet wird, zum Beispiel beim Fortsetzen eines Downloads.
- _Schwache Validierung_ wird verwendet, wenn der Benutzeragent nur bestimmen muss, ob zwei Ressourcen denselben Inhalt haben. Die Ressourcen können als gleich angesehen werden, selbst wenn geringe Unterschiede bestehen, wie unterschiedliche Werbeanzeigen oder ein Footer mit einem anderen Datum.

Die Art der Validierung ist unabhängig vom verwendeten Validator. Sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} ermöglichen beide Arten der Validierung, obwohl die Komplexität der Implementierung auf der Serverseite variieren kann. HTTP verwendet standardmäßig strikte Validierung und gibt an, wann schwache Validierung verwendet werden kann.

### Strikte Validierung

Strikte Validierung besteht darin, zu garantieren, dass die Ressource Byte für Byte identisch mit derjenigen ist, mit der sie verglichen wird. Dies ist für einige bedingte Header zwingend erforderlich und der Standard für die anderen. Strikte Validierung ist sehr strikt und kann auf Serversebene schwierig zu garantieren sein, bietet jedoch jederzeit Datenverlustschutz, manchmal auf Kosten der Leistung.

Es ist ziemlich schwierig, einen eindeutigen Bezeichner für strikte Validierung mit {{HTTPHeader("Last-Modified")}} zu haben. Oft wird dies mit einem {{HTTPHeader("ETag")}} mit dem MD5-Hash der Ressource (oder einem Derivat) durchgeführt.

### Schwache Validierung

Schwache Validierung unterscheidet sich von strikter Validierung, da sie zwei Versionen des Dokuments als identisch betrachtet, wenn der Inhalt gleichwertig ist. Ein Beispiel wäre eine Seite, die sich von einer anderen nur durch ein unterschiedliches Datum im Footer oder unterschiedliche Werbung unterscheidet; diese würde als _identisch_ zur anderen mit schwacher Validierung betrachtet. Dieselben beiden Versionen werden als _unterschiedlich_ betrachtet, wenn strikte Validierung verwendet wird. Ein System von etags, das schwache Validierung erzeugt, aufzubauen, kann komplex sein, da es die Kenntnis über die Wichtigkeit der verschiedenen Elemente einer Seite erfordert, ist jedoch sehr nützlich zur Optimierung der Cache-Leistung.

## Bedingte Header

Mehrere HTTP-Header, sogenannte bedingte Header, führen zu bedingten Anfragen. Diese sind:

- {{HTTPHeader("If-Match")}}
  - : Erfolgreich, wenn der {{HTTPHeader("ETag")}} der entfernten Ressource einem in diesem Header aufgeführten entspricht. Es führt eine strikte Validierung durch.
- {{HTTPHeader("If-None-Match")}}
  - : Erfolgreich, wenn der {{HTTPHeader("ETag")}} der entfernten Ressource von jedem in diesem Header aufgeführten abweicht. Es führt eine schwache Validierung durch.
- {{HTTPHeader("If-Modified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource neuer ist als das in diesem Header angegebene.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Erfolgreich, wenn das {{HTTPHeader("Last-Modified")}}-Datum der entfernten Ressource älter oder gleich dem in diesem Header angegebenen ist.
- {{HTTPHeader("If-Range")}}
  - : Ähnlich wie {{HTTPHeader("If-Match")}}, oder {{HTTPHeader("If-Unmodified-Since")}}, kann jedoch nur ein einziges etag oder ein Datum haben. Wenn es fehlschlägt, scheitert die Range-Anfrage, und anstelle einer {{HTTPStatus("206")}} `Partial Content`-Antwort wird eine {{HTTPStatus("200")}} `OK`-Antwort mit der vollständigen Ressource gesendet.

## Anwendungsfälle

### Cache-Aktualisierung

Der häufigste Anwendungsfall für bedingte Anfragen ist die Aktualisierung eines Caches. Mit einem leeren Cache oder ohne Cache wird die angeforderte Ressource mit dem Status {{HTTPStatus("200")}} `OK` zurückgesendet.

![Die bei leerem Cache ausgegebene Anfrage löst das Herunterladen der Ressource aus, wobei beide Validatorwerte als Header gesendet werden. Der Cache wird dann gefüllt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Zusammen mit der Ressource werden die Validatoren in den Headern gesendet. In diesem Beispiel werden sowohl {{HTTPHeader("Last-Modified")}} als auch {{HTTPHeader("ETag")}} gesendet, es könnte jedoch auch nur einer von ihnen sein. Diese Validatoren werden zusammen mit der Ressource zwischengespeichert (wie alle Header) und werden verwendet, um bedingte Anfragen zu erstellen, sobald der Cache veraltet ist.

Solange der Cache nicht veraltet ist, werden überhaupt keine Anfragen gestellt. Sobald er jedoch veraltet ist, wird dies meist durch den {{HTTPHeader("Cache-Control")}}-Header gesteuert, verwendet der Client den zwischengespeicherten Wert nicht direkt, sondern stellt eine _bedingte Anfrage_. Der Wert des Validators wird als Parameter der {{HTTPHeader("If-Modified-Since")}}- und {{HTTPHeader("If-None-Match")}}-Header verwendet.

Hat sich die Ressource nicht geändert, sendet der Server eine {{HTTPStatus("304")}} `Not Modified`-Antwort zurück. Dadurch wird der Cache wieder frisch und der Client verwendet die zwischengespeicherte Ressource. Obwohl eine Antwort-/Anfrage-Roundtrip einige Ressourcen verbraucht, ist dies effizienter, als die gesamte Ressource erneut über das Netzwerk zu übertragen.

![Mit veraltetem Cache wird die bedingte Anfrage gesendet. Der Server kann feststellen, ob sich die Ressource geändert hat und, wie in diesem Fall, entscheiden, sie nicht erneut zu senden, da sie dieselbe ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Hat sich die Ressource geändert, sendet der Server einfach eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der neuen Version der Ressource zurück (als wäre die Anfrage nicht bedingt).
Der Client verwendet diese neue Ressource (und speichert sie).

![Im Fall, dass sich die Ressource geändert hat, wird sie zurückgesendet, als wäre die Anfrage nicht bedingt.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

Abgesehen vom Setzen der Validatoren auf Serverseite ist dieser Mechanismus transparent: Alle Browser verwalten einen Cache und senden solche bedingten Anfragen, ohne dass Webentwickler spezielle Arbeiten leisten müssen.

### Integrität eines partiellen Downloads

Das partielle Herunterladen von Dateien ist eine Funktion von HTTP, die es ermöglicht, vorherige Operationen fortzusetzen, Bandbreite und Zeit zu sparen, indem die bereits erhaltenen Informationen beibehalten werden:

![Ein Download wurde gestoppt und nur teilweiser Inhalt wurde abgerufen.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Ein Server, der partielle Downloads unterstützt, gibt dies durch Senden des {{HTTPHeader("Accept-Ranges")}}-Headers an. Sobald dies geschieht, kann der Client einen Download fortsetzen, indem er einen {{HTTPHeader("Ranges")}}-Header mit den fehlenden Bereichen sendet:

![Der Client setzt die Anfragen fort, indem er den Bereich angibt, den er benötigt, und prüft die Validatoren der teilweise erhaltenen Anfrage vorab.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Das Prinzip ist einfach, aber es gibt ein potenzielles Problem: Wenn die heruntergeladene Ressource zwischen den beiden Downloads geändert wurde, entsprechen die erhaltenen Bereiche zwei verschiedenen Versionen der Ressource und das endgültige Dokument wird beschädigt.

Um dies zu verhindern, werden bedingte Anfragen verwendet. Für Bereiche gibt es zwei Möglichkeiten, dies zu tun. Die flexiblere macht Gebrauch von {{HTTPHeader("If-Unmodified-Since")}} und {{HTTPHeader("If-Match")}} und der Server gibt einen Fehler zurück, wenn die Vorbedingung fehlschlägt; der Client startet den Download dann von vorne:

![Wenn die teilweise heruntergeladene Ressource geändert wurde, schlagen die Vorbedingungen fehl und die Ressource muss vollständig erneut heruntergeladen werden.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Auch wenn diese Methode funktioniert, fügt sie einen zusätzlichen Antwort-/Anfrageaustausch hinzu, wenn das Dokument geändert wurde. Dies beeinträchtigt die Leistung, und HTTP hat einen speziellen Header, um dieses Szenario zu vermeiden: {{HTTPHeader("If-Range")}}:

![Der If-Range-Header ermöglicht es dem Server, direkt die gesamte Ressource zu senden, wenn sie geändert wurde, ohne dass ein 412-Fehler gesendet und gewartet werden muss, bis der Client den Download neu initiiert.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Diese Lösung ist effizienter, aber etwas weniger flexibel, da nur ein etag in der Bedingung verwendet werden kann. Selten wird eine solche zusätzliche Flexibilität benötigt.

### Vermeidung des Problems verlorener Aktualisierungen mit optimistischer Sperrung

Eine häufige Operation in Webanwendungen ist das _Aktualisieren_ eines entfernten Dokuments. Dies ist sehr häufig in jedem Dateisystem oder Quellcodesystem, aber jede Anwendung, die entfernte Ressourcen speichert, benötigt einen solchen Mechanismus. Gewöhnliche Websites, wie Wikis und andere CMS, haben einen solchen Bedarf.

Mit der {{HTTPMethod("PUT")}}-Methode können Sie dies umsetzen. Der Client liest zunächst die Originaldateien, modifiziert sie und schiebt sie schließlich auf den Server:

![Das Aktualisieren einer Datei mit PUT ist sehr einfach, wenn keine Parallelität im Spiel ist.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Leider werden die Dinge etwas ungenau, sobald wir die Parallelität berücksichtigen. Während ein Client seine neue Kopie der Ressource lokal modifiziert, kann ein zweiter Client dieselbe Ressource abrufen und mit seiner Kopie dasselbe tun. Was dann passiert, ist sehr unglücklich: Wenn sie ihre Änderungen wieder auf den Server übertragen, werden die Änderungen des ersten Clients durch den nächsten Client-Push verworfen, da dieser zweite Client sich der Änderungen des ersten Clients an der Ressource nicht bewusst ist. Die Entscheidung, wer gewinnt, wird der anderen Partei nicht mitgeteilt. Welche Änderungen des Clients beibehalten werden, variiert mit der Geschwindigkeit, mit der sie die Commit-Aktion durchführen; dies hängt von der Leistung der Clients, des Servers und sogar von der Bearbeitungsgeschwindigkeit des Benutzers am Client ab. Der Gewinner wird sich von einer Zeit zur nächsten ändern. Dies ist eine _Race Condition_ und führt zu problematischen Verhaltensweisen, die schwer zu erkennen und zu debuggen sind:

![Wenn mehrere Clients dieselbe Ressource parallel aktualisieren, stehen wir vor einer Race Condition: Der Langsamste gewinnt und die anderen wissen nicht einmal, dass sie verloren haben. Problematisch!](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Es gibt keine Möglichkeit, dieses Problem zu lösen, ohne einen der beiden Clients zu verärgern. Trotzdem müssen verlorene Aktualisierungen und Race Conditions vermieden werden. Wir wollen vorhersehbare Ergebnisse und erwarten, dass die Clients benachrichtigt werden, wenn ihre Änderungen abgelehnt werden.

Bedingte Anfragen ermöglichen die Implementierung des _Optimistic-Locking-Algorithmus_ (verwendet von den meisten Wikis oder Versionskontrollsystemen). Das Konzept besteht darin, allen Clients Kopien der Ressource zu ermöglichen, sie dann lokal zu modifizieren und die Konkurrenzkontrolle erfolgreich zu steuern, indem der erste Client zugelassen wird, um ein Update einzureichen. Alle nachfolgenden Updates, die auf der nun veralteten Version der Ressource basieren, werden abgelehnt:

![Bedingte Anfragen erlauben die Implementierung der optimistischen Sperrung: Jetzt gewinnt der Schnellste und die anderen bekommen einen Fehler.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

Dies wird mit den {{HTTPHeader("If-Match")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Headern implementiert. Wenn das etag nicht mit der Originaldatei übereinstimmt oder wenn die Datei seitdem modifiziert wurde, wird die Änderung mit einem {{HTTPStatus("412", "412 Vorbedingung fehlgeschlagen")}}-Fehler abgelehnt. Es liegt dann am Client, mit dem Fehler umzugehen: entweder indem der Benutzer benachrichtigt wird, erneut zu beginnen (diesmal auf der neuesten Version), oder indem dem Benutzer ein _Diff_ der beiden Versionen angezeigt wird, um ihm bei der Entscheidung zu helfen, welche Änderungen er behalten möchte.

### Umgang mit dem ersten Upload einer Ressource

Der erste Upload einer Ressource ist ein Grenzfall des vorherigen. Wie bei jeder Aktualisierung einer Ressource ist er anfällig für eine Race Condition, wenn zwei Clients versuchen, ihn in ähnlicher Zeit durchzuführen. Um dies zu verhindern, können bedingte Anfragen verwendet werden: Indem {{HTTPHeader("If-None-Match")}} mit dem speziellen Wert '`*`' hinzugefügt wird, der für ein beliebiges etag steht. Die Anfrage wird nur dann erfolgreich sein, wenn die Ressource zuvor nicht existierte:

![Wie bei einem normalen Upload unterliegt der erste Upload einer Ressource einer Race Condition: If-None-Match kann dies verhindern.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` funktioniert nur mit HTTP/1.1 (und später) konformen Servern. Wenn Sie sich nicht sicher sind, ob der Server konform sein wird, müssen Sie zuerst eine {{HTTPMethod("HEAD")}}-Anfrage an die Ressource stellen, um dies zu überprüfen.

## Fazit

Bedingte Anfragen sind ein Schlüsselelement von HTTP und ermöglichen die Entwicklung effizienter und komplexer Anwendungen. Für das Caching oder das Fortsetzen von Downloads ist die einzige erforderliche Arbeit für Webmaster, den Server korrekt zu konfigurieren; das Setzen korrekter etags in einigen Umgebungen kann knifflig sein. Ist dies einmal erreicht, sieht der Browser die erwarteten bedingten Anfragen.

Für Sperrmechanismen ist es das Gegenteil: Webentwickler müssen eine Anfrage mit den richtigen Headern stellen, während Webmaster sich darauf verlassen können, dass die Anwendung die Überprüfungen für sie durchführt.

In beiden Fällen ist klar, dass bedingte Anfragen eine grundlegende Funktionalität hinter dem Web sind.
