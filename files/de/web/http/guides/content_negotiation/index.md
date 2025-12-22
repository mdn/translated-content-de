---
title: Inhaltsverhandlung
slug: Web/HTTP/Guides/Content_negotiation
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

Im {{Glossary("HTTP", "HTTP")}} ist **_Inhaltsverhandlung_** der Mechanismus, der verwendet wird, um dem selben URI verschiedene {{Glossary("Representation_header", "Repräsentationen")}} einer Ressource zuzuweisen und es so dem Benutzeragenten zu ermöglichen, festzulegen, welche Repräsentation am besten für den Benutzer geeignet ist (zum Beispiel, welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Sie finden einige Nachteile der HTTP-Inhaltsverhandlung auf [einer Wiki-Seite der WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhaltsverhandlung, zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Reference/Elements/source).

## Prinzipien der Inhaltsverhandlung

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource abrufen möchte, fordert er sie über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Repräsentation_ bezeichnet – und gibt eine spezifische Repräsentation an den Client zurück. Die gesamte Ressource sowie jede der Repräsentationen verfügt über eine spezifische URL. Die _Inhaltsverhandlung_ bestimmt, wie eine spezifische Repräsentation ausgewählt wird, wenn die Ressource angefordert wird. Es gibt mehrere Möglichkeiten der Verhandlung zwischen Client und Server.

![Ein Client, der eine URL anfordert. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet basierend auf der Anfrage den entsprechenden Inhalt zurück.](httpnego.png)

Die am besten geeignete Repräsentation wird über einen der beiden Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch den Client (_serverseitige Verhandlung_ oder _proaktive Verhandlung_), was die Standardmethode für die Verhandlung einer bestimmten Art von Ressource ist.
- Die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Reference/Status) durch den Server (_agentseitige Verhandlung_ oder _reaktive Verhandlung_), die als Rückfallmechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Inhaltsverhandlung wie [transparente Inhaltsverhandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header vorgeschlagen. Sie konnten sich jedoch nicht durchsetzen und wurden aufgegeben.

## Serverseitige Inhaltsverhandlung

Bei der _serverseitigen Inhaltsverhandlung_ oder proaktiven Inhaltsverhandlung sendet der Browser (oder ein anderer Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Auswahl des Benutzers. Der Server verwendet sie als Hinweise, und ein internes Algorithmus wählt den besten Inhalt aus, den er dem Client anbietet. Ist keine geeignete Ressource vorhanden, kann er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die Arten von Medien festlegen, die er unterstützt (z. B. unter Verwendung der Header {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- bzw. PATCH-Anfragen). Der Algorithmus ist server-spezifisch und nicht im Standard definiert. Siehe den [Apache-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet den Inhalt für die bevorzugte Sprache zurück und komprimiert den Anforderungstext basierend auf den Headern des Clients.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standardheader, die eine serverseitige Verhandlung einleiten (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste enthalten ist, wird er manchmal auch verwendet, um eine bestimmte Repräsentation der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzuzeigen, welche Header er tatsächlich für die Inhaltsverhandlung verwendet hat (oder genauer gesagt, die damit verbundenen Anforderungsheader), so dass [Caches](/de/docs/Web/HTTP/Guides/Caching) optimal arbeiten können.

Zusätzlich dazu gibt es einen experimentellen Vorschlag, um weitere Header zur Liste der verfügbaren Header hinzuzufügen, genannt _Client-Hints_. Client-Hints werben dafür, welche Art von Gerät der Benutzeragent ausführt (z. B. ein Desktop-Computer oder ein mobiles Gerät).

Selbst wenn die serverseitige Inhaltsverhandlung die gebräuchlichste Möglichkeit ist, sich auf eine spezifische Repräsentation einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Selbst mit der Client-Hints-Erweiterung hat er kein vollständiges Wissen über die Fähigkeiten des Browsers. Anders als bei der reaktiven Inhaltsverhandlung, bei der der Client die Wahl trifft, ist die Wahl des Servers immer etwas willkürlich.
- Die Informationen vom Client sind ziemlich umfangreich (HTTP/2-Header-Kompression mildert dieses Problem) und ein Datenschutzrisiko (HTTP {{Glossary("Fingerprinting", "Fingerprinting")}}).
- Da mehrere Repräsentationen einer gegebenen Ressource gesendet werden, sind freigegebene Caches weniger effizient und die Serverimplementierungen komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent verarbeiten kann. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, die jeweils mit einem {{Glossary("Quality_values", "Qualitätsfaktor")}} kombiniert sind, ein Parameter, der den relativen Grad der Präferenz zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragent definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, Videos oder Skripts. Er unterscheidet sich beim Abrufen eines Dokuments, das in der Adressleiste eingegeben wird, oder eines Elements, das über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkt ist. Browser können frei den Wert des Headers verwenden, den sie für am geeignetsten halten; eine erschöpfende Liste von [Standardwerten für gängige Browser](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client Hints_. Erste Unterstützung gibt es in Chrome 46 oder höher. Der Wert für Device-Memory ist in Chrome 61 oder höher verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}}-Header listet Konfigurationsdaten auf, die der Server verwenden kann, um eine angemessene Antwort auszuwählen. Beispiel gültiger Werte umfassen:

| Wert                    | Bedeutung                                                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Sec-CH-Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher (RAM) an. Dieser Wert ist eine Approximation, die durch Runden auf die nächste Zweierpotenz und Teilen dieser Zahl durch 1024 gegeben ist. Zum Beispiel werden 512 Megabyte als `0.5` angegeben. |
| `Sec-CH-Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                                                      |
| `Sec-CH-Width`          | Gibt die Ressourcenbreite in physischen Pixeln an (mit anderen Worten die intrinsische Größe eines Bildes).                                                                                                                                 |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Kompressionen). Der Wert ist eine Q-Faktor-Liste (z. B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (sofern nicht anders angegeben).

Die Komprimierung von HTTP-Nachrichten ist eine der wichtigsten Möglichkeiten, die Leistung einer Website zu verbessern. Sie verringert die Größe der übermittelten Daten und nutzt die verfügbare Bandbreite effizienter. Browser senden diesen Header immer und der Server sollte so konfiguriert sein, dass er Kompression verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Es ist eine Liste von Werten mit Qualitätsfaktoren (z. B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragents festgelegt, aber die meisten Browser erlauben es, unterschiedliche Sprachpräferenzen festzulegen.

Aufgrund der [Entropie der konfigurationsbasierten Information](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu identifizieren. Es wird nicht empfohlen, diesen zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers widerzuspiegeln. Für Webdesigner ist es am besten, die Sprachenerkennung über diesen Header zu vermeiden, da dies zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache zu überschreiben, z. B. durch ein Sprachmenü auf der Website. Die meisten Benutzeragenten stellen einen Standardwert für den `Accept-Language`-Header entsprechend der Benutzeroberflächensprache bereit. Endbenutzer ändern ihn häufig nicht, weil sie entweder nicht wissen, wie oder nicht dazu in der Lage sind, basierend auf ihrem Computerumfeld.
- Einmal hat ein Benutzer die vom Server gewählte Sprache überschrieben, sollte eine Website keine Sprachenerkennung mehr verwenden und die explizit gewählte Sprache beibehalten. Mit anderen Worten sollten nur Einstiegsseiten einer Website diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungen dieses Headers für die Auswahl von Inhalten gibt, [wird es als schlechte Praxis angesehen](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen vom Benutzeragent unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Diese Zeichenfolge kann eine durch Leerzeichen getrennte Liste von _Produkttokens_ und _Kommentare_ enthalten.

Ein _Produkttoken_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der Benutzeragent kann so viele davon einfügen, wie er möchte. Ein _Kommentar_ ist eine optionale Zeichenkette, die durch Klammern abgegrenzt ist. Die in einem Kommentar bereitgestellten Informationen sind nicht standardisiert, obwohl mehrere Browser mehrere Tokens in Form von durch `;` getrennten Kommentaren hinzufügen.

### Der `Vary`-Response-Header

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}} HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der serverseitigen Inhaltsverhandlungsphase verwendet hat. Der `Vary`-Header ist erforderlich, um den Cache über die Entscheidungskriterien zu informieren, so dass er sie reproduzieren kann. Dadurch kann der Cache funktional sein und gleichzeitig sicherstellen, dass dem Benutzer der richtige Inhalt bereitgestellt wird.

Der spezielle Wert `*` bedeutet, dass die serverseitige Inhaltsverhandlung auch Informationen verwendet, die nicht in einem Header enthalten sind, um den entsprechenden Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht es den Caches, angemessen zu arbeiten. Um mit serverseitiger Inhaltsverhandlung zu arbeiten, muss ein Cache wissen, auf welche Kriterien der Server zur Auswahl des übermittelten Inhalts zurückgegriffen hat. Auf diese Weise kann der Cache den Algorithmus erneut ausführen und in der Lage sein, akzeptablen Inhalt direkt zu liefern, ohne zusätzliche Anfragen an den Server. Offensichtlich verhindert der Wildcard `*` das Caching, da der Cache nicht wissen kann, welches Element dahinter steht. Weitere Informationen finden Sie unter [HTTP-Caching > Variierende Antworten](/de/docs/Web/HTTP/Guides/Caching#vary).

## Agentgesteuerte Verhandlung

Die serverseitige Verhandlung hat einige Nachteile: Sie ist nicht skalierbar. Ein Header pro Funktion wird in der Verhandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Diese Header müssen dann mit jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header sind, aber wenn die Anzahl der Header zunimmt, könnte die Nachrichtengröße schließlich die Leistung beeinflussen. Je genauer Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerprinting und entsprechende Datenschutzbedenken ermöglicht.

HTTP erlaubt eine andere Verhandlungsart: _agentgesteuerte Verhandlung_ oder _reaktive Verhandlung_. In diesem Fall sendet der Server bei einer mehrdeutigen Anfrage eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält. Der Benutzer wird über die Ressourcen informiert und wählt diejenige aus, die er verwenden möchte.

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet mehrere Antworten zurück, so dass der Client einen Körper mit bevorzugten Kompressionsalgorithmen auswählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite für die Auswahl zwischen den verfügbaren Ressourcen, was den Prozess davon abhält, automatisiert zu werden. Abgesehen davon, dass er auf die _serverseitige Verhandlung_ zurückfällt, wird diese Methode fast immer mit Skripting verwendet, insbesondere mit JavaScript-Umleitungen: Nachdem die Verhandlungskriterien überprüft wurden, führt das Skript die Umleitung durch. Ein weiteres Problem ist, dass eine zusätzliche Anfrage erforderlich ist, um die tatsächliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.

## Siehe auch

- [Caching](/de/docs/Web/HTTP/Guides/Caching)
