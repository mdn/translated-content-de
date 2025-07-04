---
title: Inhaltsaushandlung
slug: Web/HTTP/Guides/Content_negotiation
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Im {{Glossary("HTTP", "HTTP")}} ist die **_Inhaltsaushandlung_** der Mechanismus, der verwendet wird, um verschiedene {{Glossary("Representation_header", "Darstellungen")}} einer Ressource unter derselben URI bereitzustellen. Dadurch kann der Benutzeragent angeben, welche Darstellung am besten für den Benutzer geeignet ist (zum Beispiel, welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Sie finden einige Nachteile der HTTP-Inhaltsaushandlung auf [einer Wiki-Seite von WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhaltsaushandlung, zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Reference/Elements/source).

## Prinzipien der Inhaltsaushandlung

Ein bestimmtes Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource erhalten möchte, fordert er sie über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Darstellung_ bezeichnet – und gibt eine spezifische Darstellung an den Client zurück. Die gesamte Ressource sowie jede der Darstellungen haben eine spezifische URL. Die _Inhaltsaushandlung_ bestimmt, wie eine spezifische Darstellung gewählt wird, wenn die Ressource aufgerufen wird. Es gibt mehrere Möglichkeiten der Aushandlung zwischen dem Client und dem Server.

![Ein Client, der eine URL anfordert. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet angemessenen Inhalt basierend auf der Anforderung zurück.](httpnego.png)

Die am besten geeignete Darstellung wird durch einen der zwei Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch den Client (_server-gesteuerte Aushandlung_ oder _proaktive Aushandlung_), was die Standardmethode zur Aushandlung einer spezifischen Art von Ressource ist.
- Die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Reference/Status) durch den Server (_agent-gesteuerte Aushandlung_ oder _reaktive Aushandlung_), die als Rückfallmechanismen genutzt werden.

Im Laufe der Jahre wurden weitere Vorschläge zur Inhaltsaushandlung gemacht, wie [transparente Inhaltsaushandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header, die jedoch keinen Anklang fanden und aufgegeben wurden.

## Server-gesteuerte Inhaltsaushandlung

Bei der _server-gesteuerten Inhaltsaushandlung_ oder proaktiven Inhaltsaushandlung sendet der Browser (oder ein anderer Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Auswahl des Benutzers. Der Server verwendet sie als Hinweise und ein internes Algorithmus wählt den besten Inhalt, um ihn dem Client zur Verfügung zu stellen. Kann er keine geeignete Ressource bereitstellen, könnte er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die unterstützten Medientypen setzen (z. B. mit dem {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- bzw. PATCH-Anfragen). Der Algorithmus ist serverspezifisch und nicht im Standard definiert. Siehe den [Apache-Aushandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet den Inhalt für die bevorzugte Sprache und komprimiert den Anforderungskörper, respektierend die Anforderungsheader des Clients.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standardheader, die die servergesteuerte Aushandlung initiieren (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste ist, wird er manchmal auch verwendet, um eine spezifische Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzuzeigen, welche Header er tatsächlich für die Inhaltsaushandlung verwendet hat (oder genauer gesagt, die zugehörigen Anforderungsheader), damit [Caches](/de/docs/Web/HTTP/Guides/Caching) optimal arbeiten können.

Zusätzlich dazu gibt es einen experimentellen Vorschlag, mehr Header zur Liste der verfügbaren Header hinzuzufügen, sogenannte _Client-Hints_. Client-Hints geben an, auf welcher Art von Gerät der Benutzeragent läuft (zum Beispiel ein Desktop-Computer oder ein mobiles Gerät).

Selbst wenn die servergesteuerte Inhaltsaushandlung die häufigste Methode ist, um sich auf eine spezifische Darstellung einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Auch mit der Client-Hints-Erweiterung hat er kein vollständiges Wissen über die Fähigkeiten des Browsers. Anders als bei der reaktiven Inhaltsaushandlung, bei der der Client die Wahl trifft, ist die Auswahl des Servers immer etwas willkürlich.
- Die Informationen vom Client sind ziemlich ausführlich (die HTTP/2-Header-Komprimierung mildert dieses Problem) und ein Datenschutzrisiko (HTTP {{Glossary("Fingerprinting", "Fingerabdruckerstellung")}}).
- Da mehrere Darstellungen einer Ressource gesendet werden, sind gemeinsame Caches weniger effizient und Serverimplementierungen sind komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent verarbeiten kann. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, jede kombiniert mit einem {{Glossary("Quality_values", "Qualitätsfaktor")}}, einem Parameter, der das relative Maß der Präferenz zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragenten definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite, eines Bildes, eines Videos oder eines Skriptes. Er ist unterschiedlich, wenn ein Dokument in der Adressleiste eingegeben oder ein Element über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkt wird. Browser können den Headerwert verwenden, den sie für am geeignetsten halten; eine umfassende Liste der [Standardwerte für häufige Browser](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client-Hints_. Erste Unterstützung gibt es in Chrome 46 oder später. Der Device-Memory-Wert ist in Chrome 61 oder später verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}} listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher an. Dieser Wert ist eine Näherung, die durch Runden auf die nächste Potenz von 2 und Division dieser Zahl durch 1024 berechnet wird. Zum Beispiel werden 512 Megabyte als `0.5` gemeldet. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                                               |
| `Width`          | Gibt die Ressourcenbreite in physischen Pixeln an (anders ausgedrückt die intrinsische Größe eines Bildes).                                                                                                                          |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Kompressionen). Der Wert ist eine q-Faktor-Liste (z. B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (sofern nicht anders angegeben).

Das Komprimieren von HTTP-Nachrichten ist eine der wichtigsten Möglichkeiten, um die Leistung einer Website zu verbessern. Es verkleinert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser. Browser senden diesen Header immer und der Server sollte so konfiguriert sein, dass er Kompression verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Er ist eine Liste von Werten mit Qualitätsfaktoren (z. B. `de, en;q=0.7`). Ein Standardwert wird häufig entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragenten gesetzt, aber die meisten Browser ermöglichen das Einstellen unterschiedlicher Sprachpräferenzen.

Aufgrund des [konfigurationsbasierten Entropiezuwachses](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu Fingerabdruckerstellen. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann nicht darauf vertrauen, dass dieser Wert die tatsächliche Absicht des Benutzers widerspiegelt. Es ist am besten für Website-Designer, die Sprachenerkennung über diesen Header zu vermeiden, da sie zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache zu überschreiben, z. B. durch ein Sprachmenü auf der Website. Die meisten Benutzeragenten bieten einen Standardwert für den `Accept-Language`-Header, der an die Benutzerschnittstellensprache angepasst ist. Endbenutzer ändern ihn oft nicht, weil sie entweder nicht wissen wie oder es aufgrund ihrer Computerumgebung nicht können.
- Sobald ein Benutzer die vom Server gewählte Sprache überschrieben hat, sollte eine Website keine Sprachenerkennung mehr verwenden und bei der ausdrücklich gewählten Sprache bleiben. Mit anderen Worten, nur Einstiegsseiten einer Website sollten diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungszwecke dieses Headers für die Inhaltsauswahl gibt, [gilt es als schlechte Praxis](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen der Benutzeragent unterstützt.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Diese Zeichenkette kann eine durch Leerzeichen getrennte Liste von _Produkt-Token_ und _Kommentare_ enthalten.

Ein _Produkt-Token_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, zum Beispiel `Firefox/4.0.1`. Der Benutzeragent kann so viele davon enthalten, wie er möchte. Ein _Kommentar_ ist eine optionale Zeichenkette, die durch Klammern begrenzt ist. Die Informationen, die in einem Kommentar bereitgestellt werden, sind nicht standardisiert, obwohl mehrere Browser mehrere Token darin durch `;` getrennt hinzufügen.

### Der `Vary`-Antwort-Header

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}} HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der servergesteuerten Inhaltsaushandlungsphase verwendet hat. Der `Vary`-Header ist erforderlich, um den Cache über die Entscheidungskriterien zu informieren, damit er sie reproduzieren kann. Dies ermöglicht es dem Cache, funktional zu sein, während sichergestellt wird, dass dem Benutzer der richtige Inhalt bereitgestellt wird.

Der spezielle Wert `*` bedeutet, dass die servergesteuerte Inhaltsaushandlung auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den entsprechenden Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht Caches, angemessen zu arbeiten. Um mit servergesteuerter Inhaltsaushandlung zu arbeiten, muss ein Cache wissen, welche Kriterien der Server verwendet hat, um den übertragenen Inhalt auszuwählen. Auf diese Weise kann der Cache den Algorithmus wiederholen und wird in der Lage sein, akzeptablen Inhalt direkt bereitzustellen, ohne weitere Anfragen an den Server zu richten. Offensichtlich verhindert das Platzhalterzeichen `*`, dass eine Zwischenspeicherung erfolgt, da der Cache nicht wissen kann, welches Element sich dahinter befindet. Für weitere Informationen siehe [HTTP-Caching > Varying responses](/de/docs/Web/HTTP/Guides/Caching#vary).

## Agent-gesteuerte Aushandlung

Die servergesteuerte Aushandlung hat einige Nachteile: Sie skaliert nicht gut. Ein Header pro Funktion wird in der Aushandlung verwendet. Wenn Sie die Bildschirmgröße, die Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann mit jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber wenn die Anzahl der Header zunimmt, könnte die Nachrichtengröße letztendlich die Leistung beeinträchtigen. Je genauere Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerabdruckerstellung und entsprechende Datenschutzbedenken ermöglicht.

HTTP erlaubt eine andere Art der Aushandlung: _agent-gesteuerte Aushandlung_ oder _reaktive Aushandlung_. In diesem Fall sendet der Server eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält, wenn er mit einer mehrdeutigen Anfrage konfrontiert ist. Der Benutzer wird mit den Ressourcen präsentiert und wählt diejenige aus, die verwendet werden soll.

![Ein Client, der eine URL mit Headern anfordert, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet mehrere Antworten zurück, damit der Client einen Körper mit bevorzugten Kompressionsalgorithmen wählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite, um zwischen den verfügbaren Ressourcen zu wählen, was den Prozess daran hindert, automatisiert zu werden. Abgesehen vom Rückgriff auf die _servergesteuerte Aushandlung_ wird diese Methode fast immer mit Scripting, insbesondere JavaScript-Weiterleitungen, verwendet: Nachdem die Aushandlungskriterien überprüft wurden, führt das Skript die Weiterleitung durch. Ein zweites Problem ist, dass eine weitere Anfrage erforderlich ist, um die echte Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.

## Siehe auch

- [Caching](/de/docs/Web/HTTP/Guides/Caching)
