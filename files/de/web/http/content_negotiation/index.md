---
title: Content-Negotiation
slug: Web/HTTP/Content_negotiation
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Im [HTTP](/de/docs/Glossary/HTTP) ist die **_Content-Negotiation_** der Mechanismus, der verwendet wird, um unterschiedliche [Darstellungen](/de/docs/Glossary/Representation_header) einer Ressource unter derselben URI bereitzustellen, um dem Benutzeragenten zu helfen, die am besten geeignete Darstellung für den Nutzer zu spezifizieren (zum Beispiel, welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Sie finden einige Nachteile der HTTP-Content-Negotiation in [einer Wiki-Seite von WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Content-Negotiation, zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Element/source).

## Prinzipien der Content-Negotiation

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource abrufen möchte, fordert er sie über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen–jede Variante wird als _Darstellung_ bezeichnet–und gibt eine bestimmte Darstellung an den Client zurück. Die gesamte Ressource sowie jede der Darstellungen hat eine spezifische URL. _Content-Negotiation_ bestimmt, wie eine bestimmte Darstellung ausgewählt wird, wenn die Ressource aufgerufen wird. Es gibt mehrere Möglichkeiten der Verhandlung zwischen Client und Server.

![Ein Client, der eine URL anfordert. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet basierend auf der Anforderung geeigneten Inhalt zurück.](httpnego.png)

Die am besten geeignete Darstellung wird durch einen der beiden Mechanismen identifiziert:

- Bestimmte [HTTP-Header](/de/docs/Web/HTTP/Headers) durch den Client (_servergesteuerte Verhandlung_ oder _proaktive Verhandlung_), was die standardmäßige Methode ist, um einen bestimmten Ressourcentyp auszuhandeln.
- Die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Status) durch den Server (_agentengesteuerte Verhandlung_ oder _reaktive Verhandlung_), die als Fallback-Mechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Content-Negotiation gemacht, wie [transparente Content-Negotiation](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header, die jedoch keinen Anklang fanden und aufgegeben wurden.

## Servergesteuerte Content-Negotiation

In der _servergesteuerten Content-Negotiation_ oder proaktiven Content-Negotiation sendet der Browser (oder eine andere Art von Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Wahl des Benutzers. Der Server verwendet sie als Hinweise, und ein interner Algorithmus wählt den besten Inhalt, um ihn an den Client zu liefern. Wenn er keine geeignete Ressource bereitstellen kann, könnte er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die Medientypen setzen, die er unterstützt (z.B. unter Verwendung von {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- bzw. PATCH-Anfragen). Der Algorithmus ist serverspezifisch und im Standard nicht definiert. Siehe den [Apache-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL dargestellt werden, und sendet den Inhalt für die bevorzugte Sprache zurück und komprimiert den Anforderungstext basierend auf den Headern der Clientanfrage.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der standardmäßigen Header, die die servergesteuerte Verhandlung starten (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste steht, wird es manchmal auch verwendet, um eine bestimmte Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzugeben, welche Header er tatsächlich für die Content-Negotiation verwendet hat (oder genauer gesagt, die zugehörigen Anforderungsheader), damit [Caches](/de/docs/Web/HTTP/Caching) optimal funktionieren können.

Zusätzlich zu diesen gibt es einen experimentellen Vorschlag, um mehr Header zur Liste der verfügbaren Header hinzuzufügen, sogenannte _Client Hints_. Client Hints geben an, auf welcher Art von Gerät der Benutzeragent läuft (zum Beispiel ein Desktop-Computer oder ein mobiles Gerät).

Auch wenn servergesteuerte Content-Negotiation die häufigste Methode ist, um sich auf eine spezifische Darstellung einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Selbst mit der Client-Hints-Erweiterung hat er kein vollständiges Wissen über die Fähigkeiten des Browsers. Im Gegensatz zur reaktiven Content-Negotiation, bei der der Client die Wahl trifft, ist die Serverauswahl immer etwas willkürlich.
- Die Informationen vom Client sind recht ausführlich (HTTP/2-Header-Kompression mildert dieses Problem) und ein Datenschutzrisiko (HTTP [Fingerprinting](/de/docs/Glossary/Fingerprinting)).
- Da mehrere Darstellungen einer bestimmten Ressource gesendet werden, sind gemeinsame Caches weniger effizient, und Serverimplementierungen sind komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen der Medienressourcen auf, die der Agent zu verarbeiten bereit ist. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, jeweils kombiniert mit einem Qualitätsfaktor, einem Parameter, der den relativen Präferenzgrad zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragenten definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er ist unterschiedlich, wenn ein Dokument eingegeben wird in die Adressleiste oder ein Element, das über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkt ist. Browser sind frei, den Wert des Headers zu verwenden, den sie für am angemessensten halten; eine erschöpfende Liste von [Standardwerten für gängige Browser](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client Hints_. Erste Unterstützung in Chrome 46 oder höher. Der Device-Memory-Wert ist in Chrome 61 oder höher verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}}-Header listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Gibt die ungefähre Menge an RAM des Geräts an. Dieser Wert ist eine Annäherung, die durch Runden auf die nächste Potenz von 2 und Teilen dieser Zahl durch 1024 erfolgt. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                                 |
| `Width`          | Gibt die Breite der Ressource in physischen Pixeln an (mit anderen Worten die intrinsische Größe eines Bildes).                                                                                                       |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Kompressionen). Der Wert ist eine q-Faktor-Liste (z.B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (es sei denn, es ist anders angegeben).

Das Komprimieren von HTTP-Nachrichten ist einer der wichtigsten Wege, die Leistung einer Website zu verbessern. Es reduziert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser aus. Browser senden immer diesen Header, und der Server sollte so konfiguriert sein, dass er Kompression verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Es handelt sich um eine Liste von Werten mit Qualitätsfaktoren (z.B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragenten gesetzt, aber die meisten Browser erlauben es, unterschiedliche Sprachpräferenzen einzustellen.

Aufgrund der Zunahme der [konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu identifizieren. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Nutzers widerzuspiegeln. Es ist am besten, wenn Seitendesigner die Sprachdetektion über diesen Header vermeiden, da dies zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache zu überschreiben, z.B. durch Bereitstellung eines Sprachmenüs auf der Seite. Die meisten Benutzeragenten liefern einen Standardwert für den `Accept-Language`-Header, der an die Sprache der Benutzeroberfläche angepasst ist. Endnutzer ändern ihn oft nicht, weil sie entweder nicht wissen, wie, oder es in ihrer Computerumgebung nicht können.
- Sobald ein Benutzer die servergewählte Sprache überschrieben hat, sollte eine Seite die Sprachdetektion nicht mehr verwenden und bei der explizit gewählten Sprache bleiben. Mit anderen Worten, nur Einstiegsseiten für eine Seite sollten diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungen dieses Headers zur Auswahl von Inhalten gibt, [wird es als schlechte Praxis angesehen](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen vom Benutzeragenten unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Diese Zeichenfolge kann eine durch Leerzeichen getrennte Liste von _Produkttokens_ und _Kommentaren_ enthalten.

Ein _Produkttoken_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der Benutzeragent kann so viele davon einfügen, wie er möchte. Ein _Kommentar_ ist eine optionale Zeichenfolge, die durch Klammern eingeschlossen ist. Die Informationen, die in einem Kommentar bereitgestellt werden, sind nicht standardisiert, obwohl mehrere Browser mehrere Tokens hinzufügen, die durch `;` getrennt sind.

### Der `Vary`-Antwort-Header

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}} HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der servergesteuerten Content-Negotiation-Phase verwendet. Der `Vary`-Header ist notwendig, um den Cache über die Entscheidungskriterien zu informieren, damit er sie reproduzieren kann. Dies ermöglicht es dem Cache, funktionsfähig zu sein und sicherzustellen, dass der richtige Inhalt an den Benutzer geliefert wird.

Der spezielle Wert `*` bedeutet, dass die servergesteuerte Content-Negotiation auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den geeigneten Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht es Caches, angemessen zu funktionieren. Um mit der servergesteuerten Content-Negotiation zu arbeiten, muss ein Cache wissen, welche Kriterien der Server verwendet hat, um den übertragenen Inhalt auszuwählen. So kann der Cache den Algorithmus wiederholen und akzeptablen Inhalt direkt bereitstellen, ohne zusätzliche Anfragen an den Server. Natürlich verhindert die Platzhalter `*` das Caching, da der Cache nicht wissen kann, welches Element dahinter steckt. Weitere Informationen finden Sie unter [HTTP-Caching > Variierende Antworten](/de/docs/Web/HTTP/Caching#vary).

## Agentengesteuerte Verhandlung

Servergesteuerte Verhandlung hat einige Nachteile: sie skaliert nicht gut. Ein Header pro Funktion wird in der Verhandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann bei jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber je mehr Header es gibt, desto größer könnte die Nachrichtengröße sein, was sich letztendlich auf die Leistung auswirken könnte. Je präziser Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerprinting und entsprechende Datenschutzprobleme ermöglicht.

HTTP ermöglicht eine andere Verhandlungsart: _agentengesteuerte Verhandlung_ oder _reaktive Verhandlung_. In diesem Fall sendet der Server eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält, wenn eine mehrdeutige Anfrage vorliegt. Der Benutzer wird die Ressourcen präsentiert und wählt diejenige aus, die er verwenden möchte.

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL dargestellt werden, und sendet mehrere Antworten zurück, sodass der Client einen Text mit einem bevorzugten Kompressionsalgorithmus auswählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite zur Auswahl zwischen den verfügbaren Ressourcen, was den Prozess davon abhält, automatisiert zu werden. Abgesehen von der Rückkehr zur _servergesteuerten Verhandlung_ wird diese Methode fast immer mit Skripting verwendet, insbesondere mit JavaScript-Umleitung: nachdem die Verhandlungskriterien überprüft wurden, führt das Skript die Umleitung durch. Ein zweites Problem besteht darin, dass eine weitere Anfrage erforderlich ist, um die tatsächliche Ressource abzurufen, wodurch die Verfügbarkeit der Ressource für den Benutzer verzögert wird.
