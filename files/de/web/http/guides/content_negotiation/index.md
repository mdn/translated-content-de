---
title: Inhaltsverhandlung
slug: Web/HTTP/Guides/Content_negotiation
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Im {{Glossary("HTTP", "HTTP")}} ist **_Inhaltsverhandlung_** der Mechanismus, der verwendet wird, um dem gleichen URI unterschiedliche {{Glossary("Representation_header", "Darstellungen")}} einer Ressource bereitzustellen, damit der Benutzeragent angeben kann, welche Darstellung am besten für den Benutzer geeignet ist (zum Beispiel welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Einige Nachteile der HTTP-Inhaltsverhandlung finden Sie auf [einer Wiki-Seite von WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhaltsverhandlung, z.B. über das [`<source>`-Element](/de/docs/Web/HTML/Element/source).

## Prinzipien der Inhaltsverhandlung

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource anfordert, geschieht dies über eine URL. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen–jede Variante wird als _Darstellung_ bezeichnet–und gibt eine spezifische Darstellung an den Client zurück. Die gesamte Ressource sowie jede der Darstellungen haben eine spezifische URL. Die _Inhaltsverhandlung_ bestimmt, wie eine spezifische Darstellung ausgewählt wird, wenn die Ressource aufgerufen wird. Es gibt mehrere Möglichkeiten der Verhandlung zwischen Client und Server.

![Ein Client fordert eine URL an. Der Server hat mehrere Ressourcen, die von der URL repräsentiert werden, und sendet basierend auf der Anfrage den passenden Inhalt zurück.](httpnego.png)

Die am besten geeignete Darstellung wird durch einen der beiden folgenden Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch den Client (_servergesteuerte Verhandlung_ oder _proaktive Verhandlung_), was der Standardweg ist, eine spezifische Art von Ressource zu verhandeln.
- Die {{HTTPStatus("300")}} (Mehrere Auswahlmöglichkeiten) oder {{HTTPStatus("406")}} (Nicht akzeptabel), {{HTTPStatus("415")}} (Nicht unterstützter Medientyp) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Reference/Status) durch den Server (_agentengesteuerte Verhandlung_ oder _reaktive Verhandlung_), die als Fallback-Mechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Inhaltsverhandlung gemacht, wie zum Beispiel [transparente Inhaltsverhandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header, die jedoch keinen Anklang fanden und aufgegeben wurden.

## Servergesteuerte Inhaltsverhandlung

Bei der _servergesteuerten Inhaltsverhandlung_ oder proaktiven Inhaltsverhandlung sendet der Browser (oder irgendein anderer Benutzertyp) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Wahl des Benutzers. Der Server verwendet sie als Hinweise, und ein interner Algorithmus wählt den besten Inhalt zur Auslieferung an den Client aus. Kann der Server keine geeignete Ressource bereitstellen, kann er mit {{HTTPStatus("406")}} (Nicht akzeptabel) oder {{HTTPStatus("415")}} (Nicht unterstützter Medientyp) antworten und Header für die Medientypen setzen, die er unterstützt (z.B. unter Verwendung von {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- und PATCH-Anfragen). Der Algorithmus ist server-spezifisch und nicht im Standard definiert. Siehe den [Apache Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die von der URL repräsentiert werden, und sendet den Inhalt für die bevorzugte Sprache und komprimiert den Anfragetext basierend auf den Anforderungsheadern des Clients.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standardheader, die eine servergesteuerte Verhandlung (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}) starten. Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste enthalten ist, wird er manchmal auch verwendet, um eine spezifische Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzuzeigen, welche Header er tatsächlich für die Inhaltsverhandlung (oder genauer gesagt, die zugehörigen Anforderungsheader) verwendet hat, damit [Caches](/de/docs/Web/HTTP/Guides/Caching) optimal arbeiten können.

Zusätzlich zu diesen gibt es einen experimentellen Vorschlag, mehr Header zur Liste der verfügbaren Header hinzuzufügen, die als _Client-Hinweise_ bezeichnet werden. Client-Hinweise geben an, auf welcher Art von Gerät der Benutzeragent läuft (zum Beispiel ein Desktop-Computer oder ein Mobilgerät).

Auch wenn die servergesteuerte Inhaltsverhandlung die häufigste Methode ist, um sich auf eine spezifische Darstellung einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Auch mit der Client-Hinweise-Erweiterung hat er keine vollständige Kenntnis über die Fähigkeiten des Browsers. Im Gegensatz zur reaktiven Inhaltsverhandlung, bei der der Client die Wahl trifft, ist die Serverwahl immer etwas willkürlich.
- Die Informationen vom Client sind ziemlich umfangreich (HTTP/2-Headerkomprimierung mildert dieses Problem) und ein Datenschutzrisiko (HTTP-{{Glossary("Fingerprinting", "Fingerabdruck")}}).
- Da mehrere Darstellungen einer bestimmten Ressource gesendet werden, sind freigegebene Caches weniger effizient und Server-Implementierungen komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent zu verarbeiten bereit ist. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, die jeweils mit einem Qualitätsfaktor kombiniert sind, einem Parameter, der den relativen Grad der Präferenz zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragenten definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er unterscheidet sich beim Abrufen eines Dokuments, das in die Adressleiste eingegeben oder über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkt wurde. Browser können den Wert des Headers verwenden, den sie für am geeignetsten halten; eine umfassende Liste der [Standardwerte für gängige Browser](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client-Hinweise_. Erste Unterstützung ist in Chrome 46 oder später gegeben. Der Wert für Device-Memory ist in Chrome 61 oder später verfügbar.

Das experimentelle {{HTTPHeader("Accept-CH")}} listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher an. Dieser Wert ist eine Annäherung, die durch Aufrunden auf die nächste Zweierpotenz und Teilen dieser Zahl durch 1024 erzeugt wird. Zum Beispiel werden 512 Megabyte als `0.5` gemeldet. |
| `Viewport-Width` | Gibt die Breite des Layout Viewports in CSS-Pixels an.                                                                                                                                                                                |
| `Width`          | Gibt die Ressourcebreite in physischen Pixeln an (mit anderen Worten die intrinsische Größe eines Bildes).                                                                                                                            |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Kompressionen). Der Wert ist eine q-Faktor-Liste (z.B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte anzeigt. Der Standardwert `identity` hat die niedrigste Priorität (es sei denn, es wird anders angegeben).

Die Komprimierung von HTTP-Nachrichten ist eine der wichtigsten Möglichkeiten, die Leistung einer Website zu verbessern. Sie verkleinert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser aus. Browser senden diesen Header immer und der Server sollte so konfiguriert sein, dass er Komprimierung verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Es handelt sich um eine Liste von Werten mit Qualitätsfaktoren (z.B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragenten gesetzt, aber die meisten Browser ermöglichen die Einstellung unterschiedlicher Sprachpräferenzen.

Aufgrund der [konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)-Zunahme kann ein modifizierter Wert verwendet werden, um den Benutzer zu identifizieren. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers zu reflektieren. Am besten vermeiden es Website-Designer, eine Sprachenerkennung über diesen Header zu verwenden, da dies zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache zu überschreiben, z.B., indem sie ein Sprachmenü auf der Website bereitstellen. Die meisten Benutzeragenten bieten einen Standardwert für den `Accept-Language`-Header, der an die Benutzeroberflächensprache angepasst ist. Endbenutzer ändern ihn oft nicht, weil sie entweder nicht wissen wie oder nicht dazu in der Lage sind, basierend auf ihrer Computerumgebung.
- Sobald ein Benutzer die vom Server gewählte Sprache überschrieben hat, sollte eine Website keine Sprachenerkennung mehr verwenden und bei der explizit gewählten Sprache bleiben. Mit anderen Worten sollten nur Einführungsseiten für eine Website diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungszwecke dieses Headers für die Inhaltsauswahl gibt, gilt [es als schlechte Praxis](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), sich auf ihn zu verlassen, um zu definieren, welche Funktionen vom Benutzeragenten unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Dieser String kann eine durch Leerzeichen getrennte Liste von _Produkttoken_ und _Kommentare_ enthalten.

Ein _Produkttoken_ ist ein Name gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der Benutzeragent kann so viele dieser Token einschließen, wie er möchte. Ein _Kommentar_ ist ein optionaler String, der durch Klammern abgegrenzt ist. Die in einem Kommentar bereitgestellten Informationen sind nicht standardisiert, obwohl mehrere Browser mehrere Token hinzufügen, die durch `;` getrennt sind.

### Der `Vary`-Antwortheader

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}} HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der servergesteuerten Inhaltsverhandlungsphase verwendet. Der `Vary`-Header ist notwendig, um den Cache über die Entscheidungskriterien zu informieren, damit er dies reproduzieren kann. Dadurch kann der Cache effizient sein und gleichzeitig sicherstellen, dass der richtige Inhalt an den Benutzer ausgeliefert wird.

Der spezielle Wert `*` bedeutet, dass die servergesteuerte Inhaltsverhandlung auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den passenden Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht es Cache, ordnungsgemäß zu arbeiten. Um mit servergesteuerter Inhaltsverhandlung zu arbeiten, muss der Cache wissen, welche Kriterien der Server verwendet hat, um den übertragenen Inhalt auszuwählen. Auf diese Weise kann der Cache den Algorithmus wiederholen und geeigneten Inhalt direkt bereitstellen, ohne weitere Anfragen an den Server. Offensichtlich verhindert das Platzhalterzeichen `*`, dass ein Caching erfolgt, da der Cache nicht wissen kann, welches Element dahintersteht. Weitere Informationen finden Sie in [HTTP-Caching > Varying responses](/de/docs/Web/HTTP/Guides/Caching#vary).

## Agentengesteuerte Verhandlung

Die servergesteuerte Verhandlung hat einige Nachteile: Sie skaliert nicht gut. Ein Header pro Funktion wird in der Verhandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann mit jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber sobald die Anzahl der Header zunimmt, könnte sich die Nachrichtengröße letztendlich auf die Leistung auswirken. Je genauer Header gesendet werden, desto mehr Entropie wird gesendet, was zu mehr HTTP-Fingerabdrücken und entsprechenden Datenschutzbedenken führt.

HTTP erlaubt eine andere Art der Verhandlung: _agentengesteuerte Verhandlung_ oder _reaktive Verhandlung_. In diesem Fall sendet der Server eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält, wenn er mit einer mehrdeutigen Anfrage konfrontiert wird. Der Benutzer wird mit den Ressourcen konfrontiert und wählt diejenige aus, die er nutzen möchte.

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die von der URL repräsentiert werden, und sendet mehrere Antworten zurück, damit der Client einen Körper mit bevorzugten Komprimierungsalgorithmen auswählen kann.](httpnego3.png)

Leider gibt der HTTP-Standard nicht das Format der Seite an, um zwischen den verfügbaren Ressourcen zu wählen, was den Prozess daran hindert, automatisiert zu werden. Zusätzlich zur Rückfalloption auf die _servergesteuerte Verhandlung_ wird diese Methode fast immer mit Scripting verwendet, insbesondere mit JavaScript-Weiterleitung: Nachdem die Verhandlungskriterien überprüft wurden, führt das Skript die Weiterleitung durch. Ein zweites Problem ist, dass eine weitere Anfrage erforderlich ist, um die tatsächliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.

## Siehe auch

- [Caching](/de/docs/Web/HTTP/Guides/Caching)
