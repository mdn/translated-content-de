---
title: Inhalt Aushandlung
slug: Web/HTTP/Guides/Content_negotiation
l10n:
  sourceCommit: 280f550adf113a1c3b506438ee42a9d177775ad3
---

{{HTTPSidebar}}

Im {{Glossary("HTTP", "HTTP")}} ist **_Content Negotiation_** der Mechanismus, der verwendet wird, um verschiedene {{Glossary("Representation_header", "Darstellungen")}} einer Ressource für dieselbe URI bereitzustellen. Damit kann der Benutzeragent spezifizieren, welche Darstellung am besten für den Benutzer geeignet ist (z.B. welche Dokumentensprache, welches Bildformat oder welche Inhaltskodierung).

> [!NOTE]
> Einige Nachteile der HTTP-Content-Negotiation finden Sie auf [einer Wiki-Seite der WHATWG](https://wiki.whatwg.org/wiki/Why_not_conneg). HTML bietet Alternativen zur Content Negotiation, zum Beispiel durch das [`<source>`-Element](/de/docs/Web/HTML/Element/source).

## Prinzipien der Content Negotiation

Ein spezifisches Dokument wird als _Ressource_ bezeichnet. Wenn ein Client eine Ressource abrufen möchte, fordert der Client sie über eine URL an. Der Server verwendet diese URL, um eine der verfügbaren Varianten auszuwählen – jede Variante wird als _Darstellung_ bezeichnet – und gibt dem Client eine spezifische Darstellung zurück. Die gesamte Ressource sowie jede der Darstellungen besitzt eine spezifische URL. Die _Content Negotiation_ bestimmt, wie eine spezifische Darstellung ausgewählt wird, wenn die Ressource aufgerufen wird. Es gibt mehrere Möglichkeiten der Aushandlung zwischen Client und Server.

![Ein Client fordert eine URL an. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet basierend auf der Anforderung den passenden Inhalt zurück.](httpnego.png)

Die bestgeeignete Darstellung wird über einen der beiden Mechanismen identifiziert:

- Spezifische [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch den Client (_servergesteuerte Aushandlung_ oder _proaktive Aushandlung_), was die Standardmethode zum Aushandeln einer bestimmten Art von Ressource ist.
- Die {{HTTPStatus("300")}} (Multiple Choices) oder {{HTTPStatus("406")}} (Not Acceptable), {{HTTPStatus("415")}} (Unsupported Media Type) [HTTP-Antwortcodes](/de/docs/Web/HTTP/Reference/Status) durch den Server (_agentgesteuerte Aushandlung_ oder _reaktive Aushandlung_), die als Rückfallmechanismen verwendet werden.

Im Laufe der Jahre wurden weitere Vorschläge zur Content Negotiation gemacht, wie die [transparente Content Negotiation](https://datatracker.ietf.org/doc/html/rfc2295) und der `Alternates`-Header, die jedoch keinen Anklang fanden und aufgegeben wurden.

## Servergesteuerte Content Negotiation

Bei der _servergesteuerten Content Negotiation_ oder proaktiven Content Negotiation sendet der Browser (oder eine andere Art von Benutzeragent) mehrere HTTP-Header zusammen mit der URL. Diese Header beschreiben die bevorzugte Wahl des Benutzers. Der Server verwendet sie als Hinweise und ein internes Algorithmus wählt den besten Inhalt aus, den er dem Client bereitstellen kann. Wenn es keine geeignete Ressource bereitstellen kann, könnte es mit {{HTTPStatus("406")}} (Not Acceptable) oder {{HTTPStatus("415")}} (Unsupported Media Type) antworten und Header für die Medientypen setzen, die es unterstützt (z.B. unter Verwendung von {{HTTPHeader("Accept-Post")}} oder {{HTTPHeader("Accept-Patch")}} für POST bzw. PATCH-Anfragen). Der Algorithmus ist serverspezifisch und nicht im Standard definiert. Siehe den [Apache-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm).

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet den Inhalt für die bevorzugte Sprache und komprimiert die Anfragennachricht auf Basis der Client-Header.](httpnegoserver.png)

Der HTTP/1.1-Standard definiert eine Liste der Standard-Header, die servergesteuerte Aushandlungen einleiten (wie {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}} und {{HTTPHeader("Accept-Language")}}). Obwohl {{HTTPHeader("User-Agent")}} nicht in dieser Liste ist, wird es manchmal auch verwendet, um eine spezifische Darstellung der angeforderten Ressource zu senden. Dies wird jedoch nicht immer als gute Praxis angesehen. Der Server verwendet den {{HTTPHeader("Vary")}}-Header, um anzugeben, welche Header er tatsächlich für die Content Negotiation verwendet hat (oder genauer gesagt, die zugehörigen Anfrageheader), sodass [Caches](/de/docs/Web/HTTP/Guides/Caching) optimal arbeiten können.

Darüber hinaus gibt es einen experimentellen Vorschlag, mehr Header zur Liste der verfügbaren Header hinzuzufügen, sogenannte _Client Hints_. Client Hints geben an, auf welcher Art von Gerät der Benutzeragent läuft (z.B. ein Desktop-Computer oder ein mobiles Gerät).

Auch wenn die servergesteuerte Content Negotiation die häufigste Methode ist, um sich auf eine spezifische Darstellung einer Ressource zu einigen, hat sie mehrere Nachteile:

- Der Server hat keine vollständige Kenntnis über den Browser. Auch mit der Erweiterung Client Hints hat er keine komplette Kenntnis über die Fähigkeiten des Browsers. Anders als bei der reaktiven Content Negotiation, bei der der Client die Wahl trifft, ist die Wahl des Servers immer etwas willkürlich.
- Die Informationen des Clients sind ziemlich ausführlich (die Komprimierung von HTTP/2-Headern mindert dieses Problem) und ein Datenschutzrisiko (HTTP {{Glossary("Fingerprinting", "Fingerprinting")}}).
- Da mehrere Darstellungen einer gegebenen Ressource versendet werden, sind geteilte Caches weniger effizient und Serverimplementierungen komplexer.

### Der `Accept`-Header

Der {{HTTPHeader("Accept")}}-Header listet die MIME-Typen von Medienressourcen auf, die der Agent verarbeiten kann. Dies ist eine kommagetrennte Liste von MIME-Typen, die jeweils mit einem {{Glossary("Quality_values", "Qualitätsfaktor")}} kombiniert sind, einem Parameter, der den relativen Präferenzgrad zwischen den verschiedenen MIME-Typen angibt.

Der `Accept`-Header wird vom Browser oder einem anderen Benutzeragent definiert und kann je nach Kontext variieren. Zum Beispiel beim Abrufen einer HTML-Seite oder eines Bildes, eines Videos oder eines Skripts. Er unterscheidet sich beim Abrufen eines Dokuments, das in die Adressleiste eingegeben wurde, oder eines über ein {{ HTMLElement("img") }}, {{ HTMLElement("video") }} oder {{ HTMLElement("audio") }}-Element verlinkten Elements. Browser sind frei, den Wert des Headers zu verwenden, den sie für am besten geeignet halten; eine umfassende Liste von [Standardwerten für gängige Browser](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) ist verfügbar.

### Der `Accept-CH`-Header

> [!NOTE]
> Dies ist Teil einer **experimentellen** Technologie namens _Client Hints_. Die initiale Unterstützung erfolgt ab Chrome 46. Der Device-Memory-Wert ist ab Chrome 61 verfügbar.

Der experimentelle {{HTTPHeader("Accept-CH")}} listet Konfigurationsdaten auf, die der Server verwenden kann, um eine geeignete Antwort auszuwählen. Gültige Werte sind:

| Wert             | Bedeutung                                                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Gibt die ungefähre Menge an Gerätespeicher (RAM) an. Dieser Wert ist eine Annäherung und wird durch Rundung zur nächsten Zweierpotenz und Division dieser Zahl durch 1024 angegeben. Beispielsweise werden 512 Megabyte als `0,5` berichtet. |
| `Viewport-Width` | Gibt die Breite des Layout-Viewports in CSS-Pixeln an.                                                                                                                                                                                       |
| `Width`          | Gibt die Ressourcenbreite in physischen Pixeln an (also die intrinsische Größe eines Bildes).                                                                                                                                                |

### Der `Accept-Encoding`-Header

Der {{HTTPHeader("Accept-Encoding")}}-Header definiert die akzeptable Inhaltskodierung (unterstützte Komprimierungen). Der Wert ist eine q-Faktor-Liste (z.B. `br, gzip;q=0.8`), die die Priorität der Kodierungswerte angibt. Der Standardwert `identity` hat die niedrigste Priorität (sofern nicht anders angegeben).

Die Komprimierung von HTTP-Nachrichten ist eine der wichtigsten Methoden, um die Leistung einer Website zu verbessern. Sie verringert die Größe der übertragenen Daten und nutzt die verfügbare Bandbreite besser. Browser senden diesen Header immer und der Server sollte so konfiguriert werden, dass er die Komprimierung verwendet.

### Der `Accept-Language`-Header

Der {{HTTPHeader("Accept-Language")}}-Header wird verwendet, um die Sprachpräferenz des Benutzers anzugeben. Er ist eine Liste von Werten mit Qualitätsfaktoren (z.B. `de, en;q=0.7`). Ein Standardwert wird oft entsprechend der Sprache der grafischen Benutzeroberfläche des Benutzeragents gesetzt, aber die meisten Browser erlauben es, verschiedene Sprachpräferenzen festzulegen.

Durch die [erhöhte Konfigurationsbasierte Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) kann ein modifizierter Wert verwendet werden, um den Benutzer zu fingerprinten. Es wird nicht empfohlen, ihn zu ändern, und eine Website kann diesem Wert nicht vertrauen, um die tatsächliche Absicht des Benutzers zu widerspiegeln. Es ist für Webdesigner am besten, die Sprachkennung über diesen Header zu vermeiden, da dies zu einem schlechten Benutzererlebnis führen kann.

- Es sollte immer eine Möglichkeit geboten werden, die vom Server gewählte Sprache zu überschreiben, z.B. durch ein Sprachmenü auf der Website. Die meisten Benutzeragenten stellen einen Standardwert für den `Accept-Language`-Header bereit, der an die Sprache der Benutzeroberfläche angepasst ist. Endbenutzer ändern ihn oft nicht, weil sie entweder nicht wissen, wie es geht, oder aufgrund ihrer Computerumgebung dazu nicht in der Lage sind.
- Sobald ein Benutzer die vom Server gewählte Sprache überschrieben hat, sollte eine Website die Sprachkennung nicht mehr verwenden und bei der ausdrücklich gewählten Sprache bleiben. Mit anderen Worten: Nur Einstiegseiten für eine Site sollten diesen Header verwenden, um die richtige Sprache auszuwählen.

### Der `User-Agent`-Header

> [!NOTE]
> Obwohl es legitime Verwendungen dieses Headers zur Auswahl von Inhalten gibt, [gilt es als schlechte Praxis](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), sich darauf zu verlassen, um zu definieren, welche Funktionen vom Benutzeragent unterstützt werden.

Der {{HTTPHeader("User-Agent")}}-Header identifiziert den Browser, der die Anfrage sendet. Dieser String kann eine leerzeichengetrennte Liste von _Produkt-Token_ und _Kommentaren_ enthalten.

Ein _Produkt-Token_ ist ein Name, gefolgt von einem `/` und einer Versionsnummer, wie `Firefox/4.0.1`. Der Benutzeragent kann so viele davon einfügen, wie er möchte. Ein _Kommentar_ ist ein optionaler String, der in Klammern eingeschlossen ist. Die in einem Kommentar bereitgestellten Informationen sind nicht standardisiert, obwohl mehrere Browser mehrere Token hinzufügen, die durch `;` getrennt sind.

### Der `Vary`-Antwort-Header

Im Gegensatz zu den vorherigen `Accept-*`-Headern, die vom Client gesendet werden, wird der {{HTTPHeader("Vary")}}-HTTP-Header vom Webserver in seiner Antwort gesendet. Er gibt die Liste der Header an, die der Server während der servergesteuerten Content Negotiation-Phase verwendet. Der `Vary`-Header ist notwendig, um den Cache über die Entscheidungskriterien zu informieren, damit er diese reproduzieren kann. Dadurch kann der Cache funktionieren und gleichzeitig sicherstellen, dass der richtige Inhalt dem Benutzer bereitgestellt wird.

Der spezielle Wert `*` bedeutet, dass die servergesteuerte Content Negotiation auch Informationen verwendet, die nicht in einem Header übermittelt werden, um den geeigneten Inhalt auszuwählen.

Der `Vary`-Header wurde in Version 1.1 von HTTP hinzugefügt und ermöglicht es Caches, ordnungsgemäß zu arbeiten. Um mit servergesteuerter Content Negotiation zu arbeiten, muss ein Cache wissen, welche Kriterien der Server verwendet hat, um den übertragenen Inhalt auszuwählen. Auf diese Weise kann der Cache den Algorithmus erneut ausführen und in der Lage sein, akzeptablen Inhalt direkt zu liefern, ohne weitere Anfragen an den Server zu stellen. Selbstverständlich verhindert der Platzhalter `*`, dass Caching stattfindet, da der Cache nicht weiß, welches Element dahinter steht. Weitere Informationen finden Sie unter [HTTP-Caching > Varying responses](/de/docs/Web/HTTP/Guides/Caching#vary).

## Agentgesteuerte Aushandlung

Die servergesteuerte Aushandlung hat einige Nachteile: Sie skaliert nicht gut. Ein Header pro Feature wird in der Aushandlung verwendet. Wenn Sie Bildschirmgröße, Auflösung oder andere Dimensionen nutzen möchten, müssen Sie einen neuen HTTP-Header erstellen. Die Header müssen dann mit jeder Anfrage gesendet werden. Das ist kein Problem, wenn es nur wenige Header gibt, aber wenn die Anzahl der Header zunimmt, könnte die Nachrichtengröße schließlich die Leistung beeinträchtigen. Je präziser die Header gesendet werden, desto mehr Entropie wird gesendet, was mehr HTTP-Fingerprinting ermöglicht und entsprechende Datenschutzbedenken aufwirft.

HTTP erlaubt eine andere Aushandlungsart: _agentgesteuerte Aushandlung_ oder _reaktive Aushandlung_. In diesem Fall sendet der Server bei einer mehrdeutigen Anfrage eine Seite zurück, die Links zu den verfügbaren alternativen Ressourcen enthält. Der Benutzer bekommt die Ressourcen präsentiert und wählt diejenige aus, die er verwenden möchte.

![Ein Client fordert eine URL mit Headern an, die eine Präferenz für Inhaltstypen angeben. Der Server hat mehrere Ressourcen, die durch die URL repräsentiert werden, und sendet mehrere Antworten zurück, damit der Client einen Body mit einem bevorzugten Kompressionsalgorithmus wählen kann.](httpnego3.png)

Leider spezifiziert der HTTP-Standard nicht das Format der Seite, um zwischen den verfügbaren Ressourcen zu wählen, was den Prozess daran hindert automatisiert zu werden. Neben der Rückkehr zur _servergesteuerten Aushandlung_ wird diese Methode fast immer mit Skripting verwendet, insbesondere mit JavaScript-Weiterleitungen: Nachdem die Aushandlungskriterien überprüft wurden, führt das Skript die Weiterleitung aus. Ein zweites Problem ist, dass eine weitere Anfrage benötigt wird, um die eigentliche Ressource abzurufen, was die Verfügbarkeit der Ressource für den Benutzer verlangsamt.

## Siehe auch

- [Caching](/de/docs/Web/HTTP/Guides/Caching)
