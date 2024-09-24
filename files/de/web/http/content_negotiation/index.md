---
title: Inhalt-Aushandlung
slug: Web/HTTP/Content_negotiation
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{HTTPSidebar}}

Im [HTTP](/de/docs/Glossary/HTTP) ist die **_Inhalt-Aushandlung_** der Mechanismus, der verwendet wird, um verschiedene {{Glossary("Representation header","Darstellungen")}} einer Ressource unter derselben URI bereitzustellen. Dies hilft dem Benutzeragenten, anzugeben, welche Darstellung am besten für den Benutzer geeignet ist (z. B. welche Dokumentensprache, welches Bildformat oder welche Inhalt-Codierung).

> [!NOTE]
> Sie finden einige Nachteile der HTTP-Inhalt-Aushandlung auf [einer Wiki-Seite der WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Inhalt-Aushandlung, zum Beispiel über das [`<source>`-Element](/de/docs/Web/HTML/Element/source).

## Prinzipien der Inhalt-Aushandlung

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource abrufen möchte, fordert der Client diese über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Darstellung_ bezeichnet – und gibt dem Client eine spezifische Darstellung zurück. Sowohl die gesamte Ressource als auch jede der Darstellungen hat eine spezifische URL. _Inhalt-Aushandlung_ bestimmt, wie eine spezifische Darstellung ausgewählt wird, wenn die Ressource angefordert wird. Es gibt mehrere Möglichkeiten der Aushandlung zwischen dem Client und dem Server.

![Ein Client fordert eine URL an. Der Server hat mehrere Ressourcen, die durch die URL dargestellt werden, und sendet basierend auf der Anfrage entsprechende Inhalte zurück.](httpnego.png)

Die am besten geeignete Darstellung wird durch einen von zwei Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Headers) vom Client (_server-gesteuerte Aushandlung_ oder _proaktive Aushandlung_), was die Standardmethode zur Aushandlung einer spezifischen Art von Ressource ist.
- Der {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Status) vom Server (_agent-gesteuerte Aushandlung_ oder _reaktive Aushandlung_), die als Rückfallmechanismen verwendet werden.

Im Laufe der Jahre wurden andere Vorschläge zur Inhalt-Aushandlung wie [transparente Inhalt-Aushandlung](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header vorgeschlagen. Sie konnten sich jedoch nicht durchsetzen und wurden aufgegeben.

## Server-gesteuerte Inhalt-Aushandlung

Bei der _server-gesteuerten Inhalt-Aushandlung_ oder proaktiven Inhalt-Aushandlung sendet der Browser (oder eine andere Art von Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Auswahl des Benutzers. Der Server verwendet diese als Hinweise und ein internes Algorithmus wählt den besten Inhalt aus, der dem Client bereitgestellt werden soll. Wenn er keine geeignete Ressource bereitstellen kann, könnte er mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die Medientypen setzen, die er unterstützt (z. B. unter Verwendung des {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST- bzw. PATCH-Anfragen). Der Algorithmus ist server-spezifisch und im Standard nicht definiert. Siehe den [Apache-Aushandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL dargestellt werden, und sendet den Inhalt in der bevorzugten Sprache und komprimiert den Anfragekörper, wobei die Anforderungsheader des Clients respektiert werden.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standard-Header, die die server-gesteuerte Aushandlung initiieren (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht auf dieser Liste steht, wird er manchmal auch verwendet, um eine spezifische Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzugeben, welche Header er tatsächlich für die Inhalt-Aushandlung verwendet hat (oder genauer gesagt, die zugehörigen Anforderungsheader), damit [Caches](/de/docs/Web/HTTP/Caching) optimal funktionieren können.

Zusätzlich zu diesen gibt es einen experimentellen Vorschlag, weitere Header zur Liste der verfügbaren Header hinzuzufügen, die als _Client-Hinweise_ bezeichnet werden. Client-Hinweise geben an, auf welcher Art von Gerät der Benutzeragent läuft (z. B. ein Desktop-Computer oder ein mobiles Gerät).

Auch wenn die server-gesteuerte Inhalt-Aushandlung die gebräuchlichste Methode ist, um sich auf eine spezifische Darstellung einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat kein vollständiges Wissen über den Browser. Selbst mit der Client-Hints-Erweiterung hat er kein vollständiges Wissen über die Fähigkeiten des Browsers. Im Gegensatz zur reaktiven Inhalt-Aushandlung, bei der der Client die Wahl trifft, ist die Wahl des Servers immer etwas willkürlich.
- Die Informationen vom Client sind recht ausführlich (HTTP/2-Header-Komprimierung mildert dieses Problem) und ein Datenschutzrisiko (HTTP-[Fingerprinting](/de/docs/Glossary/Fingerprinting)).
- Da mehrere Darstellungen einer gegebenen Ressource gesendet werden, sind geteilte Caches weniger effizient und Serverimplementierungen komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent verarbeiten kann. Dies ist eine durch Kommas getrennte Liste von MIME-Typen, jeweils kombiniert mit einem Qualitätsfaktor, einem Parameter, der den relativen Grad der Präferenz zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragenten definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er unterscheidet sich beim Abrufen eines Dokuments, das in die Adressleiste eingegeben wurde, oder eines Elements, das über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkt ist. Browser sind frei, den für sie am geeignetsten erscheinenden Wert des Headers zu verwenden; eine umfassende Liste der [Standardwerte für gängige Browser](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie, die _Client-Hinweise_ genannt wird. Die anfängliche Unterstützung beginnt mit Chrome 46 oder höher. Der Device-Memory-Wert ist in Chrome 61 oder höher verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}} listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher (RAM) an. Dieser Wert ist eine Annäherung, indem er auf die nächste Zweierpotenz gerundet und diese Zahl durch 1024 geteilt wird. Zum Beispiel werden 512 Megabyte als `0.5` gemeldet. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                             |
| `Width`          | Gibt die Breite der Ressource in physischen Pixeln an (in anderen Worten die intrinsische Größe eines Bildes).                                                                                                     |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptablen Inhalt-Codierungen (unterstützte Kompressionen). Der Wert ist eine Q-Faktor-Liste (z. B. `br, gzip;q=0.8`), die die Priorität der Codierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (sofern nicht anders angegeben).

Die Komprimierung von HTTP-Nachrichten ist eine der wichtigsten Möglichkeiten, die Leistung einer Website zu verbessern. Sie verringert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser aus. Browser senden diesen Header immer und der Server sollte so konfiguriert sein, dass er die Komprimierung nutzt.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Es handelt sich um eine Liste von Werten mit Qualitätsfaktoren (z. B. `"de, en;q=0.7`"). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragents festgelegt, aber die meisten Browser erlauben es, unterschiedliche Sprachpräferenzen festzulegen.

Aufgrund der [konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu identifizieren. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers zu reflektieren. Es ist am besten für Website-Designer, die Sprachenerkennung über diesen Header zu vermeiden, da dies zu einer schlechten Benutzererfahrung führen kann.

- Sie sollten immer eine Möglichkeit bieten, die vom Server gewählte Sprache außer Kraft zu setzen, z. B. durch ein Sprachmenü auf der Website. Die meisten Benutzeragenten geben einen Standardwert für den `Accept-Language`-Header aus, der an die Benutzeroberflächensprache angepasst ist. Endbenutzer ändern diesen oft nicht, weil sie entweder nicht wissen, wie es geht, oder aufgrund ihrer Computerumgebung nicht dazu in der Lage sind.
- Sobald ein Benutzer die vom Server gewählte Sprache außer Kraft gesetzt hat, sollte eine Website keine Sprachenerkennung mehr verwenden und bei der ausdrücklich gewählten Sprache bleiben. Anders gesagt sollten nur Einstiegsseiten einer Website diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungen dieses Headers zur Auswahl von Inhalten gibt, [wird es als schlechte Praxis angesehen](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), sich auf ihn zu verlassen, um festzulegen, welche Funktionen vom Benutzeragenten unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Diese Zeichenkette kann eine durch Leerzeichen getrennte Liste von _Produktkennungen_ und _Kommentaren_ enthalten.

Eine _Produktkennung_ ist ein Name, gefolgt von einem '`/`' und einer Versionsnummer, z. B. `Firefox/4.0.1`. Der Benutzeragent kann beliebig viele hinzufügen. Ein _Kommentar_ ist eine optionale Zeichenkette, die von Klammern eingeschlossen ist. Die in einem Kommentar bereitgestellten Informationen sind nicht standardisiert, obwohl mehrere Browser mehrere Token hinzufügen, die jeweils durch '`;`' getrennt sind.

### Der `Vary`-Antwortheader

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}}-HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der server-gesteuerten Inhalt-Aushandlungsphase verwendet hat. Der `Vary`-Header ist erforderlich, um den Cache über die Entscheidungskriterien zu informieren, damit er sie reproduzieren kann. Dies ermöglicht es dem Cache, funktional zu bleiben, während sichergestellt wird, dass dem Benutzer der richtige Inhalt bereitgestellt wird.

Der spezielle Wert '`*`' bedeutet, dass die server-gesteuerte Inhalt-Aushandlung auch Informationen verwendet, die nicht in einem Header enthalten sind, um den entsprechenden Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht es Caches, angemessen zu arbeiten. Um mit der server-gesteuerten Inhalt-Aushandlung zu arbeiten, muss ein Cache wissen, welche Kriterien der Server zur Auswahl des übertragenen Inhalts verwendet hat. Auf diese Weise kann der Cache den Algorithmus abspielen und in der Lage sein, akzeptablen Inhalt direkt zu liefern, ohne weitere Anfragen an den Server. Natürlich verhindert das Wildcard '`*`' das Cachen, da der Cache nicht wissen kann, welches Element sich dahinter verbirgt. Für weitere Informationen siehe [HTTP-Caching > Variierende Antworten](/de/docs/Web/HTTP/Caching#vary).

## Agent-gesteuerte Aushandlung

Server-gesteuerte Aushandlung hat ein paar Nachteile: sie skaliert nicht gut. Ein Header pro Funktion wird in der Aushandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen verwenden möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann mit jeder Anfrage gesendet werden. Dies ist kein Problem, wenn es nur wenige Header gibt, aber mit zunehmender Anzahl an Headern könnte die Nachrichtengröße schließlich die Leistung beeinträchtigen. Je präziser Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerprinting und entsprechende Datenschutzbedenken erlaubt.

HTTP erlaubt eine andere Art der Aushandlung: _agent-gesteuerte Aushandlung_ oder _reaktive Aushandlung_. In diesem Fall sendet der Server bei einer unklaren Anfrage eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält. Der Benutzer sieht sich die Ressourcen an und wählt diejenige aus, die verwendet werden soll.

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL dargestellt werden, und sendet mehrere Antworten zurück, damit der Client einen Körper mit bevorzugten Komprimierungsalgorithmen anwenden kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite, über die zwischen den verfügbaren Ressourcen gewählt wird, was den Prozess verhindert, automatisiert zu werden. Abgesehen vom Rückgriff auf _server-gesteuerte Aushandlung_ wird diese Methode fast immer mit Skripten verwendet, insbesondere mit JavaScript-Umleitungen: Nachdem die Aushandlungskriterien überprüft wurden, führt das Skript die Umleitung durch. Ein zweites Problem ist, dass eine weitere Anfrage erforderlich ist, um die tatsächliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.
