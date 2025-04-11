---
title: Inhaltsaushandlung
slug: Web/HTTP/Guides/Content_negotiation
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Im {{Glossary("HTTP", "HTTP")}} ist die **_Inhaltsaushandlung_** das Mechanismus, das verwendet wird, um verschiedene {{Glossary("Representation_header", "Darstellungen")}} einer Ressource unter derselben URI bereitzustellen, um dem Benutzeragenten zu helfen, die Darstellung zu spezifizieren, die am besten für den Benutzer geeignet ist (zum Beispiel, welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Sie finden einige Nachteile der HTTP-Inhaltsaushandlung auf [einer Wiki-Seite der WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhaltsaushandlung zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Reference/Elements/source).

## Prinzipien der Inhaltsaushandlung

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource beziehen möchte, fordert der Client diese über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Darstellung_ bezeichnet – und gibt dem Client eine spezifische Darstellung zurück. Die gesamte Ressource sowie jede der Darstellungen hat eine spezifische URL. Die _Inhaltsaushandlung_ bestimmt, wie eine spezifische Darstellung ausgewählt wird, wenn die Ressource angefordert wird. Es gibt mehrere Möglichkeiten der Aushandlung zwischen dem Client und dem Server.

![Ein Client fordert eine URL an. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet auf der Anfrage basierenden passenden Inhalt zurück.](httpnego.png)

Die am besten geeignete Darstellung wird durch einen von zwei Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) vom Client (_serverseitige Aushandlung_ oder _proaktive Aushandlung_), was die übliche Art der Aushandlung einer bestimmten Art von Ressource ist.
- Die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Reference/Status) vom Server (_agentengetriebene Aushandlung_ oder _reaktive Aushandlung_), die als Rückfallmechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Inhaltsaushandlung gemacht, wie die [transparente Inhaltsaushandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header. Diese konnten sich jedoch nicht durchsetzen und wurden aufgegeben.

## Serverseitige Inhaltsaushandlung

Bei der _serverseitigen Inhaltsaushandlung_ oder proaktiven Inhaltsaushandlung sendet der Browser (oder jeder andere Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Wahl des Benutzers. Der Server verwendet sie als Hinweise und ein interner Algorithmus wählt den besten Inhalt aus, um ihn dem Client bereitzustellen. Wenn er keine geeignete Ressource bereitstellen kann, könnte er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die unterstützten Medientypen setzen (z.B. unter Verwendung von {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- und PATCH-Anfragen respektive). Der Algorithmus ist spezifisch für den Server und nicht im Standard definiert. Siehe den [Apache-Aushandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet den Inhalt für die bevorzugte Sprache zurück und komprimiert den Anforderungskörper, unter Berücksichtigung der Header der Clientanfrage.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standardheader, die die serverseitige Aushandlung starten (wie z.B. {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste enthalten ist, wird er manchmal auch verwendet, um eine spezifische Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzuzeigen, welche Header er tatsächlich für die Inhaltsaushandlung (oder präziser gesagt, die damit verbundenen Anforderungsheader) verwendet hat, damit [Caches](/de/docs/Web/HTTP/Guides/Caching) optimal funktionieren können.

Zusätzlich dazu gibt es einen experimentellen Vorschlag, mehr Header zur Liste der verfügbaren Header hinzuzufügen, genannt _Client-Hinweise_. Client-Hinweise geben an, auf welcher Art von Gerät der Benutzeragent ausgeführt wird (zum Beispiel auf einem Desktop-Computer oder einem mobilen Gerät).

Auch wenn serverseitige Inhaltsaushandlung die häufigste Methode zur Vereinbarung einer spezifischen Darstellung einer Ressource ist, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Selbst mit der Client-Hinweise-Erweiterung hat er kein vollständiges Wissen über die Fähigkeiten des Browsers. Im Gegensatz zur reaktiven Inhaltsaushandlung, bei der der Client die Wahl trifft, bleibt die Serverentscheidung immer ein Stück weit willkürlich.
- Die Informationen vom Client sind ziemlich umfangreich (HTTP/2-Header-Komprimierung mildert dieses Problem) und ein Datenschutzrisiko (HTTP-{{Glossary("Fingerprinting", "Fingerprinting")}}).
- Da mehrere Darstellungen einer gegebenen Ressource gesendet werden, sind gemeinsame Caches weniger effizient und Serverimplementierungen sind komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent zu verarbeiten bereit ist. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, die jeweils mit einem {{Glossary("Quality_values", "Qualitätsfaktor")}} kombiniert sind, einem Parameter, der den relativen Grad der Präferenz zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragenten definiert und kann je nach Kontext variieren. Zum Beispiel, beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er ist unterschiedlich, wenn ein Dokument in der Adressleiste eingegeben oder ein Element über ein {{HTMLElement("img")}}, {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Element verlinkt wird. Browser sind frei, den Headerwert zu verwenden, den sie für am angemessensten halten; eine umfassende Liste der [Standardwerte für gängige Browser](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client-Hinweise_. Erste Unterstützung kommt in Chrome 46 oder später. Der Device-Memory-Wert ist in Chrome 61 oder später verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}}-Header listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerät-RAM an. Dieser Wert ist eine Annäherung, die durch Rundung auf die nächste Zweierpotenz gegeben ist und durch 1024 dividiert wird. Zum Beispiel wird 512 Megabyte als `0.5` gemeldet. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                                  |
| `Width`          | Gibt die Ressourcenbreite in physischen Pixeln an (also die intrinsische Größe eines Bildes).                                                                                                                           |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Kompressionen). Der Wert ist eine Q-Faktor-Liste (z.B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (es sei denn, anders angegeben).

Die Komprimierung von HTTP-Nachrichten ist eine der wichtigsten Methoden zur Verbesserung der Leistung einer Website. Sie reduziert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser aus. Browser senden diesen Header immer und der Server sollte so konfiguriert sein, dass er Kompression verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzuzeigen. Es handelt sich um eine Liste von Werten mit Qualitätsfaktoren (z.B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragenten gesetzt, aber die meisten Browser ermöglichen es, unterschiedliche Sprachpräferenzen zu setzen.

Aufgrund der [Konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) -Zunahme kann ein modifizierter Wert verwendet werden, um den Benutzer zu fingerprinten. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers widerzuspiegeln. Es ist am besten, wenn Site-Designer die Spracherkennung über diesen Header vermeiden, da dies zu einem schlechten Benutzererlebnis führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache zu überschreiben, z.B. durch ein Sprachmenü auf der Seite. Die meisten Benutzeragenten bieten einen Standardwert für den `Accept-Language`-Header, der an die Sprache der Benutzeroberfläche angepasst ist. Endbenutzer ändern ihn oft nicht, weil sie entweder nicht wissen, wie oder aufgrund ihrer Computerumgebung nicht dazu in der Lage sind.
- Sobald ein Benutzer die vom Server gewählte Sprache überschrieben hat, sollte eine Site keine Spracheerkennung mehr verwenden und bei der explizit gewählten Sprache bleiben. Mit anderen Worten, nur Einstiegsseiten für eine Site sollten diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Anwendungen dieses Headers zur Inhaltsauswahl gibt, [wird es als schlechte Praxis angesehen](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen vom Benutzeragent unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Dieser String kann eine durch Leerzeichen getrennte Liste von _Produkttokens_ und _Kommentaren_ enthalten.

Ein _Produkttoken_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der Benutzeragent kann so viele davon einfügen, wie er möchte. Ein _Kommentar_ ist ein optionaler String, der in Klammern eingeschlossen ist. Die im Kommentar enthaltenen Informationen sind nicht standardisiert, obwohl mehrere Browser mehrere Tokens dazu trennen, die durch `;` getrennt sind.

### Der `Vary`-Antwortheader

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}}-HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der serverseitigen Inhaltsaushandlungsphase verwendet hat. Der `Vary`-Header ist notwendig, um den Cache über die Entscheidungskriterien zu informieren, damit er diesen reproduzieren kann. Dies ermöglicht es dem Cache, funktional zu bleiben, während sichergestellt wird, dass der richtige Inhalt dem Benutzer bereitgestellt wird.

Der spezielle Wert `*` bedeutet, dass die serverseitige Inhaltsaushandlung auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den geeigneten Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht Caches, ordnungsgemäß zu funktionieren. Um mit serverseitiger Inhaltsaushandlung zu arbeiten, muss ein Cache wissen, welche Kriterien der Server zur Auswahl des übertragenen Inhalts verwendet hat. Auf diese Weise kann der Cache den Algorithmus erneut abspielen und akzeptablen Inhalt direkt bereitstellen, ohne weitere Anfragen an den Server zu stellen. Offensichtlich verhindert der Platzhalter `*`, dass das Caching erfolgt, da der Cache nicht weiß, welches Element dahinter steckt. Weitere Informationen finden Sie unter [HTTP Caching > Varying responses](/de/docs/Web/HTTP/Guides/Caching#vary).

## Agentengetriebene Aushandlung

Die serverseitige Aushandlung hat einige Nachteile: Sie skaliert nicht gut. Ein Header pro Merkmal wird in der Aushandlung verwendet. Wenn Sie die Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann bei jedem Request mitgesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber wenn die Anzahl der Header zunimmt, könnte die Nachrichtengröße möglicherweise die Leistung beeinträchtigen. Je genauer Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerprinting und entsprechende Datenschutzbedenken ermöglicht.

HTTP erlaubt eine andere Aushandlungsart: _agentengetriebene Aushandlung_ oder _reaktive Aushandlung_. In diesem Fall sendet der Server eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält, wenn er mit einer mehrdeutigen Anfrage konfrontiert ist. Der Benutzer erhält die Ressourcen und wählt die zu verwendende aus.

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet mehrere Antworten zurück, damit der Client einen Körper mit einem bevorzugten Komprimierungsalgorithmus wählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite zur Auswahl zwischen den verfügbaren Ressourcen, was den Prozess von Automatisierung abhält. Abgesehen vom Rückgriff auf die _serverseitige Aushandlung_ wird diese Methode fast immer mit Scripting verwendet, insbesondere mit JavaScript-Weiterleitung: Nachdem die Aushandlungskriterien überprüft wurden, führt das Skript die Weiterleitung durch. Ein zweites Problem ist, dass eine weitere Anfrage erforderlich ist, um die eigentliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.

## Siehe auch

- [Caching](/de/docs/Web/HTTP/Guides/Caching)
