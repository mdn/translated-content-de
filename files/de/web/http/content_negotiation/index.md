---
title: Inhaltsverhandlung
slug: Web/HTTP/Content_negotiation
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Im [HTTP](/de/docs/Glossary/HTTP) ist die **_Inhaltsverhandlung_** der Mechanismus, der verwendet wird, um verschiedene [Repräsentationen](/de/docs/Glossary/Representation_header) einer Ressource unter derselben URI zu bedienen. Dies unterstützt den User-Agent dabei, die am besten geeignete Repräsentation für den Benutzer auszuwählen (zum Beispiel, welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Einige Nachteile der HTTP-Inhaltsverhandlung finden Sie auf [einer Wiki-Seite der WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhaltsverhandlung, zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Element/source).

## Grundprinzipien der Inhaltsverhandlung

Ein spezielles Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource abrufen möchte, fordert er sie über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Repräsentation_ bezeichnet – und gibt eine spezifische Repräsentation an den Client zurück. Die gesamte Ressource sowie jede der Repräsentationen hat eine spezifische URL. Die _Inhaltsverhandlung_ bestimmt, wie eine bestimmte Repräsentation ausgewählt wird, wenn die Ressource angefordert wird. Es gibt mehrere Möglichkeiten der Verhandlung zwischen dem Client und dem Server.

![Ein Client fordert eine URL an. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet je nach Anfrage den passenden Inhalt zurück.](httpnego.png)

Die am besten geeignete Repräsentation wird durch einen von zwei Mechanismen identifiziert:

- Durch spezifische [HTTP-Header](/de/docs/Web/HTTP/Headers) des Clients (_servergesteuerte Verhandlung_ oder _proaktive Verhandlung_), was die Standardmethode zur Verhandlung eines bestimmten Ressourcentyps ist.
- Durch die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Status) des Servers (_agentgesteuerte Verhandlung_ oder _reaktive Verhandlung_), die als Rückfallmechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Inhaltsverhandlung, wie [transparente Inhaltsverhandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header, gemacht. Sie konnten sich jedoch nicht durchsetzen und wurden aufgegeben.

## Servergesteuerte Inhaltsverhandlung

In der _servergesteuerten Inhaltsverhandlung_ oder proaktiven Inhaltsverhandlung sendet der Browser (oder ein anderer User-Agent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Wahl des Benutzers. Der Server nutzt sie als Hinweise, und ein internes Algorithmus wählt den besten Inhalt, um ihn dem Client zu liefern. Kann er keine geeignete Ressource bereitstellen, könnte er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die Medientypen setzen, die er unterstützt (z.B. durch die Verwendung von {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- und PATCH-Anfragen). Der Algorithmus ist serverspezifisch und im Standard nicht definiert. Siehe den [Apache-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/de/content-negotiation.html#algorithm).

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet den Inhalt in der bevorzugten Sprache und komprimiert den Anfragekörper entsprechend den Headern des Clients.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standard-Header, die die servergesteuerte Verhandlung starten (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste enthalten ist, wird er manchmal auch verwendet, um eine spezifische Repräsentation der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis betrachtet. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzuzeigen, welche Header er tatsächlich für die Inhaltsverhandlung verwendet hat (oder genauer gesagt, die dazugehörigen Anforderungsheader), damit [Caches](/de/docs/Web/HTTP/Caching) optimal arbeiten können.

Zusätzlich dazu gibt es einen experimentellen Vorschlag, mehr Header zur Liste der verfügbaren Header hinzuzufügen, genannt _Client-Hints_. Client Hints geben an, auf welcher Art von Gerät der User-Agent läuft (zum Beispiel auf einem Desktop-Computer oder einem mobilen Gerät).

Auch wenn die servergesteuerte Inhaltsverhandlung die häufigste Methode ist, um sich auf eine bestimmte Repräsentation einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Selbst mit der Erweiterung Client Hints kennt er nicht die vollständigen Fähigkeiten des Browsers. Im Gegensatz zur reaktiven Inhaltsverhandlung, bei der der Client die Wahl trifft, ist die Wahl des Servers immer etwas willkürlich.
- Die Informationen vom Client sind recht umfangreich (Kompression von HTTP/2-Headern mildert dieses Problem) und ein Datenschutzrisiko (HTTP-[Fingerprinting](/de/docs/Glossary/Fingerprinting)).
- Da mehrere Repräsentationen einer bestimmten Ressource versendet werden, sind geteilte Caches weniger effizient und Serverimplementierungen komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen der Medienressourcen auf, die der Agent verarbeiten möchte. Dies ist eine kommagetrennte Liste von MIME-Typen, jede kombiniert mit einem Qualitätsfaktor, einem Parameter, der den relativen Präferenzgrad zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen User-Agent definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er unterscheidet sich beim Abrufen eines Dokuments, das in die Adressleiste eingegeben wird, oder eines Elements, das über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }}, oder {{ HTMLElement("audio") }}-Element verlinkt ist. Browser sind frei, den Wert des Headers zu verwenden, den sie für am geeignetsten halten; eine umfassende Liste der [Standardwerte für gängige Browser](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client Hints_. Erste Unterstützung gibt es ab Chrome 46 oder später. Der Device-Memory-Wert ist ab Chrome 61 oder später verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}} listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher an. Dieser Wert ist eine Annäherung durch Runden zur nächsten Potenz von 2 und Teilen dieser Zahl durch 1024. Zum Beispiel werden 512 Megabyte als `0.5` angegeben. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                         |
| `Width`          | Gibt die Breite der Ressource in physischen Pixeln an (in anderen Worten die intrinsische Größe eines Bildes).                                                                                                 |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhalt-Codierung (unterstützte Komprimierungen). Der Wert ist eine q-Faktorliste (z.B. `br, gzip;q=0.8`), die die Priorität der Codierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (sofern nicht anders angegeben).

Das Komprimieren von HTTP-Nachrichten ist eine der wichtigsten Möglichkeiten, die Leistung einer Website zu verbessern. Es verkleinert die Größe der übertragenen Daten und sorgt für eine bessere Nutzung der verfügbaren Bandbreite. Browser senden diesen Header immer, und der Server sollte so konfiguriert sein, dass er Komprimierung verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzuzeigen. Es handelt sich um eine Liste von Werten mit Qualitätsfaktoren (z.B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des User-Agents festgelegt, aber die meisten Browser erlauben es, unterschiedliche Sprachpräferenzen einzustellen.

Aufgrund der Erhöhung der [konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu identifizieren. Es wird nicht empfohlen, diesen zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers zu reflektieren. Für Webdesigner ist es am besten, die Spracherkennung über diesen Header zu vermeiden, da dies zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit zur Überschreibung der vom Server gewählten Sprache bieten, z.B. durch ein Sprachmenü auf der Website. Die meisten User-Agents liefern einen Standardwert für den `Accept-Language`-Header, der an die Sprache der Benutzeroberfläche angepasst ist. Endnutzer ändern diesen häufig nicht, da sie entweder nicht wissen, wie dies geht, oder aufgrund ihrer IT-Umgebung dazu bereit oder fähig sind.
- Einmal vom Benutzer die vom Server gewählte Sprache überschrieben, sollte eine Website keine Spracherkennung mehr verwenden und an der explizit gewählten Sprache festhalten. Mit anderen Worten, nur Eintrittsseiten einer Website sollten diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl legitime Verwendungen dieses Headers zur Auswahl von Inhalten existieren, wird [es als schlechte Praxis angesehen](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen vom User-Agent unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Diese Zeichenkette kann eine durch Leerzeichen getrennte Liste von _Produkt-Tokens_ und _Kommentaren_ enthalten.

Ein _Produkt-Token_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der User-Agent kann so viele davon enthalten, wie er möchte. Ein _Kommentar_ ist eine optionale Zeichenfolge, die durch Klammern begrenzt ist. Die in einem Kommentar bereitgestellten Informationen sind nicht standardisiert, obwohl mehrere Browser darin mehrere Tokens hinzufügen, die durch `;` getrennt sind.

### Der `Vary`-Antwort-Header

Im Gegensatz zu den vorhergehenden `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}} HTTP-Header vom Webserver in seiner Antwort gesendet. Er zeigt die Liste der Header an, die der Server während der servergesteuerten Inhaltsverhandlungsphase verwendet. Der `Vary`-Header ist notwendig, um den Cache über die Entscheidungskriterien zu informieren, damit er diese reproduzieren kann. Dies ermöglicht es dem Cache, funktionsfähig zu sein und sicherzustellen, dass der richtige Inhalt dem Benutzer bereitgestellt wird.

Der spezielle Wert `*` bedeutet, dass die servergesteuerte Inhaltsverhandlung auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den geeigneten Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 des HTTP hinzugefügt und ermöglicht es, dass Caches ordnungsgemäß funktionieren. Um mit servergesteuerter Inhaltsverhandlung zu arbeiten, muss ein Cache wissen, nach welchen Kriterien der Server den übertragenen Inhalt ausgewählt hat. Auf diese Weise kann der Cache den Algorithmus wiederholen und in der Lage sein, akzeptablen Inhalt direkt zu liefern, ohne weitere Anfragen an den Server zu stellen. Natürlich verhindert das Wildcard `*` das Caching, da der Cache nicht wissen kann, welches Element dahinter steckt. Weitere Informationen finden Sie unter [HTTP-Caching > Varying responses](/de/docs/Web/HTTP/Caching#vary).

## Agentgesteuerte Verhandlung

Servergesteuerte Verhandlung hat einige Nachteile: Sie skaliert nicht gut. Ein Header pro Feature wird in der Verhandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann mit jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber je mehr Header es gibt, desto größer wird die Nachricht, was schließlich die Leistung beeinträchtigen könnte. Je präziser Header gesendet werden, desto mehr Entropie wird gesendet, was zu mehr HTTP-Fingerprinting und entsprechenden Datenschutzbedenken führt.

HTTP erlaubt eine andere Verhandlungsart: _agentgesteuerte Verhandlung_ oder _reaktive Verhandlung_. In diesem Fall sendet der Server eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält, wenn eine mehrdeutige Anfrage vorliegt. Der Benutzer wird die Ressourcen präsentiert und wählt die zu verwendende aus.

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere durch die URL repräsentierte Ressourcen und sendet mehrere Antworten, so dass der Client einen Body mit bevorzugten Komprimierungsalgorithmen wählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite zur Auswahl zwischen den verfügbaren Ressourcen, was den Prozess daran hindert, automatisiert zu werden. Abgesehen vom Rückgriff auf die _servergesteuerte Verhandlung_ wird diese Methode fast immer mit Skripting verwendet, insbesondere mit JavaScript-Weiterleitung: Nachdem die Verhandlungskriterien überprüft wurden, führt das Skript die Weiterleitung aus. Ein zweites Problem besteht darin, dass eine weitere Anfrage erforderlich ist, um die eigentliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.
