---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

Webseiten enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensitiver Natur, wie zum Beispiel der Text auf öffentlichen Seiten. Andere sind sensibel, wie etwa Benutzernamen, Passwörter und Bankinformationen der Kunden oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und genau darauf konzentriert sich die Websicherheit. Fallen diese Informationen in falsche Hände, könnten sie verwendet werden, um:

- Unternehmen durch das Teilen ihrer Informationen mit Wettbewerbern einen Wettbewerbsnachteil zu verschaffen.
- Ihre Dienste zu deaktivieren oder zu kapern, was wiederum ernsthafte Probleme bei deren Betrieb verursacht.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanziellen Verlust werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Benutzer im Web zu schützen, aber Entwickler müssen auch bewährte Verfahren verwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Webseiten sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von Angreifern ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, um Ihnen das Verständnis von Schwachstellen auf Webseiten zu erleichtern, sowie praktische Leitfäden zur Sicherung dieser.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng miteinander verbundene Themen. Es lohnt sich, die Unterschiede zwischen beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** ist das Bemühen, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich auf das Bestreben, Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während auch sichergestellt wird, dass sie nicht unverantwortlich verwendet werden. Zum Beispiel sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Den Benutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzerklärung zuzustimmen, auf ihre gespeicherten Daten zuzugreifen und diese zu löschen, falls sie dies wünschen.

Gute Sicherheit ist essenziell für gute Privatsphäre. Sie könnten alle in unserem [Privatsphäre im Web](/de/docs/Web/Privacy) Leitfaden aufgeführten Ratschläge befolgen, aber Integrität wahren und eine robuste Datenschutzrichtlinie haben, sind sinnlos, wenn Ihre Seite nicht sicher ist und Angreifer dennoch Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, die Verbindungen zwischen Browser und Server sowie die Datenübertragung durchsetzt. Dieser Abschnitt befasst sich mit den Eigenschaften, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Origin")}} geladen wird, mit einer Ressource von einem anderen Origin interagieren kann. Sie hilft dabei, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einem Origin keine Anfragen an andere Origins stellen. Dies macht Sinn, da man nicht möchte, dass Seiten sich gegenseitig stören und unbefugt Daten aufrufen können.

In bestimmten Fällen möchte man jedoch diese Einschränkung lockern, zum Beispiel, wenn Sie mehrere Webseiten haben, die miteinander interagieren und sich gegenseitig Ressourcen anfordern dürfen. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) erlaubt werden, ein auf HTTP-Headern basierendes Mechanismus, das einem Server ermöglicht, beliebige andere Origins (Domain, Schema oder Port) als den eigenen anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten zu geben (z. B. eine angefragte Ressource bereitstellen oder erläutern, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es verhindert, dass Dritte übertragene Daten abfangen und missbrauchen können.

Alle Browser bewegen sich in Richtung der standardmäßigen Anforderung von HTTPS; dies ist praktisch bereits der Fall, da man im Web ohne dieses Protokoll nicht viel machen kann.

Verwandte Themen:

- [Transportschichtsicherheit](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, um es zwei vernetzten Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was einen erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit von Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header ermöglicht es einer Webseite anzugeben, dass sie nur über HTTPS aufgerufen werden darf.
- [Zertifikattransparenz](/de/docs/Web/Security/Certificate_Transparency)
  - : Die Zertifikattransparenz (CT) ist ein offenes Rahmenwerk, das entwickelt wurde, um gegen Fehlvergabe von Zertifikaten zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Protokollen "protokolliert". Diese bieten erweitbare, kryptografisch abgesicherte Verzeichnisse ausgestellter TLS-Zertifikate.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die unter Verwendung von {{Glossary("Plaintext", "Klartext")}}-HTTP abgerufen wurden, wird als **gemischte Inhalte** Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, wodurch die unverschlüsselten Inhalte für Abhörer und Man-in-the-Middle-Angreifer zugänglich sind.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein entscheidendes Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekannt als schwach und sollten wo immer möglich vermieden werden.

### Sichere Kontexte und Funktionsberechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf unterschiedliche Weise. Diese "leistungsstarken Funktionen" umfassen das Erzeugen von Systembenachrichtigungen auf einer Webseite, die Verwendung der Webcam eines Benutzers, um Zugriff auf einen Medienstream zu erhalten, die Manipulation der System-GPU und die Nutzung von Web-Zahlungen. Wenn eine Seite die APIs, die solche Funktionen steuern, ohne Einschränkung verwenden könnte, könnten böswillige Entwickler versuchen, Folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen zu belästigen.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/Ihr System zu blockieren, um {{Glossary("denial_of_service", "Denial of Service")}}-Angriffe (DoS) durchzuführen.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den vernünftigerweise darauf vertraut werden kann, dass die Inhalte sicher geliefert wurden (via HTTPS/TLS). In einem sicheren Kontext ist das Potenzial zur Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte helfen auch, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, leistungsstarke Funktionen zu nutzen.

  Eine Liste der Web-Plattform-Funktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist hinter einem System von Benutzerberechtigungen beschränkt: Benutzer müssen ausdrücklich zustimmen, um Zugang zu solchen Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanfragen erfolgen automatisch und Sie können den Status einer API-Berechtigung mittels der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken eines Buttons verwendet werden, was bedeutet, dass sie von einem entsprechenden Ereignishandler aus aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Features gated by user activation](/de/docs/Web/Security/User_activation).

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Websicherheit, die sowohl auf der Server- als auch auf der Clientseite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Sicherheitsüberlegungen auf der Clientseite. Eine nützliche Zusammenfassung der Sicherheit aus serverseitiger Perspektive, die auch Beschreibungen häufiger Angriffe enthält, auf die Sie achten sollten, finden Sie unter [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) (Teil unseres [Serverseitigen Webprogrammierungsmoduls](/de/docs/Learn/Server-side)).

### Verantwortungsvolle Speicherung von clientseitigen Daten

Der verantwortungsvolle Umgang mit Daten besteht weitgehend darin, den Gebrauch von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) zu reduzieren und vorsichtig mit den Daten umzugehen, die Sie speichern und teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und es war einfach für Angreifer, diese Tendenz auszunutzen. Infolgedessen haben Browser begonnen, zu begrenzen, was mit Cookies über mehrere Standorte hinweg gemacht werden kann, mit dem Ziel, den Zugang zu ihnen in Zukunft ganz zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise umsetzen. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).

### Benutzeridentität schützen und Logins verwalten

Bei der Implementierung einer sicheren Lösung, die Datenerhebung beinhaltet, insbesondere wenn die Daten sensibel sind, wie z. B. Anmeldeinformationen, ist es sinnvoll, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes angesehene serverseitige Framework über eingebautes Features verfügen, um sich vor häufigen Schwachstellen zu schützen. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, wie z. B. eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Sammlung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA) für besseren Schutz. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentifizierung](/de/docs/Web/API/Web_Authentication_API) oder [Föderiertes Credential-Management](/de/docs/Web/API/FedCM_API), um die clientseitige Implementierung der App zu optimieren.

Hier sind einige weitere Tipps für sichere Logins:

- Wenn Sie Anmeldeinformationen von Benutzern sammeln, erzwingen Sie starke Passwörter, damit die Kontodetails Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Zudem sollten Sie Ihre Benutzer dazu ermutigen, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter verwenden können, sich keine Sorgen machen müssen, diese zu merken, und kein Sicherheitsrisiko eingehen, indem sie diese aufschreiben. Siehe auch unser Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Versuch, einem Benutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Seite enthält, die wie eine Seite aussieht, die sie täglich nutzen, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die darauf ausgelegt ist, die Benutzer zu täuschen, damit sie ihren Benutzernamen und ihr Passwort auf der Seite eingeben, damit diese gestohlen werden können und anschließend von einem Angreifer für böswillige Zwecke verwendet werden.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr raffiniert sein und schwer von einer echten Webseite zu unterscheiden sein. Sie sollten Ihre Benutzer daher darüber aufklären, zufälligen Links in E-Mails und SMS nicht zu vertrauen. Wenn sie eine Nachricht erhalten, die in etwa so lautet: "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen", sollten sie die Seite direkt in einem neuen Tab aufrufen und versuchen, sich direkt einzuloggen, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie telefonisch oder per E-Mail kontaktieren, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich vor Brute-Force-Angriffen auf Anmeldeseiten mit {{Glossary("rate_limit", "Rate Limiting")}}, Kontosperren nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer automatisch ab nach Perioden der Inaktivität.

### Keine sensiblen Daten in URL-Query-Strings einfügen

Im Allgemeinen sollten Sie [keine sensiblen Daten in URL-Query-Strings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), weil ein Dritter, der die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), diese Informationen stehlen könnte. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxies und Archivierungstools wie dem [Internet-Archiv](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen erhalten bleiben könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übertragung von sensiblen Daten in URLs über `GET`-Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Verwendung von Webplattform-Funktionen wie der [Content-Security-Policy](/de/docs/Web/HTTP/CSP) (CSP) und der [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Reihe von Funktions- und Ressourcennutzungsregeln auf Ihrer Webseite durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine zusätzliche Sicherheitsebene hinzuzufügen, indem Sie beispielsweise zulassen, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Origins geladen werden. Dies hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffen. Diese Angriffe beinhalten eine Reihe von bösartigen Aktivitäten, darunter Datendiebstahl, Seitenverschandelung und Verbreitung von Malware.

Die Berechtigungsrichtlinie arbeitet auf ähnliche Weise, ist jedoch mehr darauf ausgerichtet, den Zugang zu bestimmten "leistungsstarken Funktionen" ([wie zuvor erwähnt](#sichere_kontexte_und_funktionsberechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Webseiten sicher zu halten, insbesondere wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass Sie eine Funktion blockieren könnten, auf die ein Drittanbieterskript angewiesen ist, um zu funktionieren, und Sie könnten dadurch die Funktionalität Ihrer Seite beeinträchtigen.

### Datenintegrität aufrechterhalten

In Anknüpfung an den vorhergehenden Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Seite erlauben, versuchen sicherzustellen, dass Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource-Integrität** (SRI) ist eine Sicherheitsfunktion, die Browsern ermöglicht, zu überprüfen, ob Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unvorhergesehene Manipulation geliefert werden. Sie funktioniert, indem Sie es ermöglichen, einen kryptografischen Hash bereitzustellen, den eine abgerufene Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit anfragendem Code von dem angegebenen {{Glossary("origin", "Origin")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern angegeben sind, nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist ein Weg, um sich vom [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) abzumelden, oder, anders gesagt, anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel gilt, Sie sollten nichts trauen, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist leicht für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Zudem sind böswillige Personen geschickt darin, bestimmte Zeichenfolgen von ausführbarem Code in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie nicht vorsichtig beim Umgang mit solchen Eingaben sind, könnten sie entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Sehen Sie sich [SQL-Injektion](/de/docs/Learn/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel an, wie dies passieren könnte.

Um sich dagegen zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten clientseitige Validierung implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mit eingebauten HTML-Formular-Validierungsfunktionen tun oder Sie können Ihren eigenen Validierungscode schreiben. Siehe [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) für weitere Informationen.
- Sie sollten Ausgabe-Encoding verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um Daten sicher so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu vermeiden, dass sie als Code ausgeführt werden. Siehe [Ausgabe-Encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für weitere Informationen.

Sie können sich nicht allein auf die clientseitige Validierung zur Sicherheit verlassen – sie sollte mit serverseitiger Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzerfreundlichkeit, indem sie durch sofortige Validierungsrückmeldungen den Benutzer darüber informiert, wann er Daten im falschen Format eingegeben hat, ohne auf eine Anfrageantwort des Servers warten zu müssen. Die clientseitige Validierung ist allerdings für eine böswillige Partei leicht zu umgehen (zum Beispiel durch das Ausschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes seriöse serverseitige Framework wird für die Validierung von Formularübermittlungen Funktionalitäten bereitstellen. Zudem ist es eine häufige bewährte Methode, alle Sonderzeichen zu entziehen, die Teil einer ausführbaren Syntax sind, wodurch eingegebener Code nicht mehr ausführbar ist und als reiner Text behandelt wird.

### Schutz vor Clickjacking

Bei einem {{Glossary("Clickjacking", "Clickjacking")}}-Angriff wird ein Benutzer dazu gebracht, auf ein UI-Element zu klicken, das eine andere Aktion als die erwartet ausführt, oft mit dem Ergebnis, dass die vertraulichen Informationen des Benutzers an einen böswilligen Dritten weitergeleitet werden. Dieses Risiko ist inhärent in eingebetteten Inhalten von Drittanbietern, also stellen Sie sicher, dass Sie der Einbettung auf Ihrer Seite vertrauen. Außerdem sollten Sie sich bewusst sein, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Über Phishing können Sie im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzeridentität_schützen_und_logins_verwalten) lesen.

Die folgenden Funktionen können helfen, gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) rendern darf. Seiten können dies nutzen, um {{Glossary("Clickjacking", "Clickjacking")}}-Angriffe zu vermeiden, indem sichergestellt wird, dass ihre Inhalte nicht in andere Seiten eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Anweisung gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Anleitungen zur Sicherheitsimplementierung

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Webseiten zu erhalten und sicherzustellen, dass Sie den bewährten Verfahren folgen, siehe unsere Reihe von [Praktischen Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen in direkter Beziehung zum [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsüberprüfungen auf einer Webseite durch und bietet eine Bewertung und Punktzahl an sowie Empfehlungen zur Behebung der festgestellten Sicherheitsprobleme. Diese Leitfäden erklären, wie man die in den MDN Observatory-Tests aufgedeckten Probleme lösen kann: Das Tool verlinkt zu den entsprechenden Leitfäden für jedes Problem und hilft Ihnen, zu einer effektiven Lösung zu gelangen. Interessanterweise nutzen Mozillas interne Entwicklerteams diese Anleitungen, um beim Implementieren von Webseiten sicherzustellen, dass bewährte Sicherheitspraktiken angewandt werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet series](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
