---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, beispielsweise der Text, der auf den öffentlichen Seiten angezeigt wird. Andere Informationen sind sensibel, wie zum Beispiel Benutzernamen von Kunden, Passwörter und Bankinformationen, oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und das ist der Fokus der Web-Sicherheit. Wenn diese Informationen in die falschen Hände gelangen, könnten sie verwendet werden, um:

- Unternehmen durch das Teilen ihrer Informationen mit Wettbewerbern einen Wettbewerbsvorteil zu verschaffen.
- Ihre Dienste zu deaktivieren oder zu kapern, was wiederum ernste Probleme bei ihrem Betrieb verursachen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Web zu schützen, aber Entwickler müssen auch Best Practices befolgen und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von Angreifern ausgenutzt werden können, um Daten zu stehlen und unberechtigte Kontrolle über Dienste zu gewinnen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, und praktischer Anleitungen, wie Sie diese schützen können.

## Verhältnis zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind separate, aber eng miteinander verbundene Themen. Es lohnt sich, die Unterschiede zwischen beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** ist der Akt, private Daten und Systeme gegen unbefugten Zugriff zu schützen. Dazu gehören sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern).

- **Privatsphäre** bezieht sich auf den Akt, Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und gleichzeitig sicherzustellen, dass sie nicht verantwortungslos verwendet werden. Beispielsweise sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Benutzer müssen die Gelegenheit haben, Ihrer Datenschutzrichtlinie zuzustimmen, Zugang zu den von Ihnen gespeicherten Daten zu erhalten und diese zu löschen, wenn sie dies wünschen.

Gute Sicherheit ist für gute Privatsphäre unerlässlich. Sie könnten allen Rat aus unserem Leitfaden [Privatsphäre im Web](/de/docs/Web/Privacy) befolgen, aber Integrität zu zeigen und eine robuste Datenschutzrichtlinie zu haben, ist sinnlos, wenn Ihre Website nicht sicher ist und Angreifer einfach Daten stehlen können.

## Vom Browser bereitgestellte Sicherheitsfunktionen

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server sowie den Datentransport durchsetzt. Dieser Abschnitt beleuchtet die Funktionen, die diesem Modell zugrunde liegen.

### Same-origin policy und CORS

[Die Same-origin policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin")}} geladen wurde, mit einer Ressource eines anderen Ursprungs interagieren kann. Sie hilft, potenziell bösartige Dokumente zu isolieren und reduziert somit mögliche Angriffsvektoren.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge senden. Dies macht Sinn, denn Sie möchten nicht, dass Websites untereinander interferieren und unberechtigten Datenzugriff haben.

Möglicherweise möchten Sie diese Einschränkung unter bestimmten Umständen lockern; beispielsweise wenn Sie mehrere Websites haben, die miteinander interagieren. Sie könnten es erlauben, dass sie Ressourcen voneinander mit [`fetch()`](/de/docs/Web/API/Window/fetch) anfordern. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) ermöglicht werden, einen auf HTTP-Headern basierenden Mechanismus, der einem Server erlaubt, anzugeben, welche Ursprünge (Domain, Schema oder Port) außer dem eigenen Laden von Ressourcen im Browser ermöglichen soll.

### HTTP-Kommunikationsmodell

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und -servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel Bereitstellung einer angeforderten Ressource oder Beschreibung, warum eine Anfrage fehlschlug) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem Daten während des Transports über das Netzwerk verschlüsselt werden, und ist die Technologie hinter dem [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll. TLS ist gut für die Privatsphäre, da es Dritte daran hindert, übertragene Daten abzufangen und böswillig zu nutzen.

Alle Browser bewegen sich darauf zu, standardmäßig HTTPS zu erfordern; dies ist praktisch bereits der Fall, da Sie ohne dieses Protokoll wenig im Web tun können.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, um zwei vernetzten Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, die erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben können.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header erlaubt es einer Website, zu spezifizieren, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das entwickelt wurde, um gegen falsche Ausstellung von Zertifikaten zu schützen und diese zu überwachen. Neue ausgestellte Zertifikate werden in öffentlich geführte, oft unabhängige CT-Protokolle eingeloggt. Diese bieten schreibgeschützte, kryptographisch gesicherte Aufzeichnungen ausgestellter TLS-Zertifikate.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über [Klartext](/de/docs/Glossary/Plaintext)-HTTP abgerufen werden, wird als **gemischte Inhalte**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, wodurch die unverschlüsselten Inhalte für Lauschers und Man-in-the-Middle-Angreifer zugänglich sind.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der beim {{Glossary("Signature/Security", "Signieren")}} eines {{Glossary("digital certificate")}} verwendet wird, ist ein entscheidendes Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekannt als schwach und sollten, wenn möglich, vermieden werden.

### Sichere Kontexte und Feature-Berechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf unterschiedliche Weise. Zu diesen "leistungsstarken Funktionen" gehören die Generierung von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Benutzers für den Zugriff auf einen Medienstream, die Manipulation der System-GPU und die Nutzung von Web-Zahlungen. Wenn eine Website die APIs, die solche Funktionen kontrollieren, ohne Einschränkung verwenden könnte, könnten bösartige Entwickler versuchen, Folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen zu belästigen.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/System zu verstopfen, um {{glossary("denial of service", "Denial-of-Service")}} (DoS)-Angriffe zu starten.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Verwendung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein {{domxref("Window", "Fenster")}} oder ein {{domxref("WorkerGlobalScope", "Worker")}}, für den eine angemessene Sicherheit besteht, dass die Inhalte sicher (über HTTPS/TLS) geliefert wurden. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte tragen auch dazu bei, zu verhindern, dass [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) auf leistungsstarke Funktionen zugreifen.

  Eine Liste der Plattformfunktionen im Web, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen erfolgt über ein System von Benutzerberechtigungen: Benutzer müssen explizit der Bereitstellung des Zugriffs auf solche Funktionen zustimmen, was bedeutet, dass sie nicht automatisch genutzt werden können. Anfragen für Benutzerberechtigungen erfolgen automatisch, und Sie können den Status einer API-Berechtigung mit der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Einige andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Button verwendet werden, was bedeutet, dass sie innerhalb eines entsprechenden Ereignis-Handlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation).

## Hochrangige Sicherheitsüberlegungen

Es gibt viele Aspekte der Web-Sicherheit, die sowohl auf der Server- als auch auf der Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf clientseitige Sicherheitsüberlegungen. Sie finden eine nützliche Zusammenfassung der Sicherheit aus einer serverseitigen Perspektive, die auch Beschreibungen häufiger Angriffe enthält, auf die Sie achten sollten, auf [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) (Teil unseres [Serverseitigen Webseitenprogrammierung](/de/docs/Learn/Server-side)-Lernmoduls).

### Kundendaten auf Client-Seite verantwortungsbewusst speichern

Ein verantwortungsvoller Umgang mit Daten besteht zum großen Teil darin, die Nutzung von [Cookies von Drittanbietern](/de/docs/Web/Privacy/Third-party_cookies) zu reduzieren und vorsichtig mit den Daten zu sein, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle möglichen Daten zu speichern, und es war einfach für Angreifer, diese Tendenz auszunutzen. Infolgedessen haben Browser begonnen, die Verwendung von Cross-Site-Cookies zu beschränken, mit dem Ziel, den Zugriff darauf in Zukunft ganz zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie angewiesen sind, reduzieren und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Cookies von Drittanbietern](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Cookies von Drittanbietern](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzerauthentifizierung und Logins verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn die Daten sensibel sind, wie Zugangsdaten, ist es sinnvoll, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework integrierte Funktionen haben, um gegen häufige Schwachstellen zu schützen. Sie könnten auch die Verwendung eines spezialisierten Produkts für Ihren Zweck in Betracht ziehen, beispielsweise einer Identitätsanbieterlösung oder eines sicheren Online-Umfrageanbieters.

Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Stellen Sie einen erfahrenen Entwickler für serverseitige Entwicklung und/oder Sicherheitsingenieur ein, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Mehrfaktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Ziehen Sie die Verwendung einer speziellen API wie [Web-Authentifizierung](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) in Betracht, um die clientseitige App zu optimieren.

Hier sind einige weitere Tipps für sichere Logins:

- Wenn Sie Benutzerdaten zur Anmeldung sammeln, erzwingen Sie starke Passwörter, damit die Kontendetails Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie außerdem Ihre Benutzer, einen Passwortmanager zu verwenden, damit sie komplexere Passwörter verwenden können, sich keine Gedanken über deren Merken machen müssen und kein Sicherheitsrisiko durch deren Aufschreiben entsteht. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** informieren. Phishing ist der Akt des Sendens einer Nachricht an einen Benutzer (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Seite enthält, die wie eine Seite aussieht, die sie täglich verwenden, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die darauf abzielt, Benutzer dazu zu verführen, ihren Benutzernamen und ihr Passwort auf der Seite einzugeben, damit sie gestohlen und dann von einem Angreifer zu bösartigen Zwecken verwendet werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Deshalb sollten Sie Ihre Benutzer darauf hinweisen, nicht blind Links in E-Mails und SMS-Nachrichten zu vertrauen. Wenn sie eine Nachricht erhalten, die in etwa besagt: "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen", sollten sie die Seite direkt in einem neuen Tab aufrufen und versuchen, sich direkt einzuloggen, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder per E-Mail kontaktieren, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich gegen Brute-Force-Angriffe auf Login-Seiten mit {{glossary("rate limit", "Ratenbegrenzung")}}, Kontosperren nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwenden Sie eindeutige [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) zur Verwaltung von Benutzer-Login-Sitzungen und melden Sie Benutzer nach Perioden der Inaktivität automatisch ab.

### Keine sensiblen Daten in URL-Abfragezeichenfolgen aufnehmen

Als allgemeine Regel sollten Sie [sensiblen Daten in URL-Abfragezeichenfolgen nicht aufnehmen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da, wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-HTTP-Header), sie diese Informationen stehlen könnte. Noch schwerwiegender ist die Tatsache, dass diese URLs durch öffentliche Web-Crawler, HTTP-Proxys und Archivierungswerkzeuge wie das [Internet-Archiv](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen erhalten bleiben könnten.

Verwenden Sie `POST`-Anfragen anstatt `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Die Vermeidung der Übermittlung sensibler Daten in URLs über `GET`-Anfragen kann auch dazu beitragen, sich vor {{glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffen und [Wiederholungsangriffen](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie, Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) zu verwenden, um eine Reihe von Regeln für die Nutzung von Funktionen und Ressourcen auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie beispielsweise zulassen, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden. Dies hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Daten-Injection-Angriffe. Diese Angriffe beinhalten eine Vielzahl bösartiger Aktivitäten, einschließlich Datenraubs, Verunstaltung von Websites und Verbreitung von Malware.

Die Berechtigungspolitik funktioniert auf ähnliche Weise, ist jedoch mehr darauf bedacht, den Zugriff auf spezifische "leistungsstarke Funktionen" zu erlauben oder zu blockieren ([wie bereits früher erwähnt](#sichere_kontexte_und_feature-berechtigungen)).

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie viel Drittanbieter-Code auf Ihrer Website verwenden. Beachten Sie jedoch, dass, wenn Sie die Nutzung einer Funktion blockieren, von der ein Drittanbieterskript abhängt, um zu funktionieren, Sie möglicherweise die Funktionalität Ihrer Website beeinträchtigen.

### Datenintegrität erhalten

Im Anschluss an den vorherigen Abschnitt sollten Sie sicherstellen, dass die Ressourcen, deren Nutzung Sie auf Ihrer Website zulassen, nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, dass Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN")}}), ohne unerwartete Manipulation geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, mit dem eine abgerufene Ressource übereinstimmen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`**-Antwort-Header zeigt an, ob die Antwort mit anfragendem Code vom angegebenen {{glossary("origin")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`**-Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die im {{HTTPHeader("Content-Type")}}-Header angekündigten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) nicht geändert werden sollten und beachtet werden müssen. Dieser Header ist eine Möglichkeit, auf [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) zu verzichten, oder, mit anderen Worten, um anzuzeigen, dass die MIME-Typen absichtlich konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel gilt, vertrauen Sie nichts, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es fällt Benutzern leicht, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind bösartige Personen geschickt darin, spezifische Zeichenfolgen von ausführbarem Code in Formularfelder einzugeben (zum Beispiel, SQL oder JavaScript). Wenn Sie nicht vorsichtig beim Umgang mit solchen Eingaben sind, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injection](/de/docs/Learn/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies passieren könnte.

Um sich davor zu schützen, sollten Sie die in Ihren Formularen eingegebenen Daten gründlich bereinigen:

- Sie sollten clientseitige Validierung implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mithilfe der integrierten HTML-Formularvalidierungsfunktionen tun oder Sie können Ihren eigenen Validierungscode schreiben. Siehe [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) für weitere Informationen.
- Sie sollten Ausgabe-Codierung verwenden, wenn Benutzereingaben in einer Anwendungsoberfläche angezeigt werden sollen, um Daten sicher genau so anzuzeigen, wie der Benutzer sie eingegeben hat und zu vermeiden, dass sie als Code ausgeführt werden. Siehe [Ausgabe-Codierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für weitere Informationen.

Sie können sich nicht allein auf clientseitige Validierung für Sicherheit verlassen – sie sollte mit serverseitiger Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem instantan Feedback zur Validierung bereitgestellt wird, ohne warten zu müssen, dass eine Anfrage zurück zum Server geht. Jedoch ist die clientseitige Validierung leicht von einer bösartigen Partei zu umgehen (zum Beispiel durch das Deaktivieren von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes respektable serverseitige Framework bietet Funktionalität zur Validierung von Formularübermittlungen. Zusätzlich ist es eine gängige Best Practice, alle Sonderzeichen, die Teil einer ausführbaren Syntax sind, zu maskieren, wodurch alle eingegebenen Codes nicht mehr ausführbar und als reiner Text behandelt werden.

### Schutz vor Clickjacking

Bei einem [Clickjacking](/de/docs/Glossary/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, auf ein UI-Element zu klicken, das eine andere Aktion ausführt als die, die der Benutzer erwartet, was oft dazu führt, dass die vertraulichen Informationen des Benutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko ist inhärent bei eingebetteten Drittanbieterinhalten, stellen Sie also sicher, dass Sie vertrauen, was in Ihre Seite eingebettet wird. Zusätzlich sollten Sie sich bewusst sein, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzerauthentifizierung_und_logins_verwalten) über Phishing lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header kann verwendet werden, um anzugeben, ob es einem Browser erlaubt sein soll, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) darzustellen. Websites können dies verwenden, um [Clickjacking](/de/docs/Glossary/Clickjacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Sicherheitsimplementierungsanleitungen

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie Best Practices befolgen, sehen Sie sich unseren Satz von [Praktische Sicherheitsimplementierungsanleitungen](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Anleitungen sind direkt mit dem [HTTP Observatory](/en-US/observatory)-Tool verbunden. Observatory führt Sicherheitsprüfungen auf einer Website durch und bietet eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der festgestellten Sicherheitsprobleme. Diese Anleitungen erklären, wie man Probleme löst, die in den MDN Observatory-Tests auftauchen: das Tool verlinkt zu der entsprechenden Anleitung für jedes Problem, was Ihnen hilft, zu einer effektiven Lösung zu gelangen. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitung bei der Implementierung von Websites, um sicherzustellen, dass Sicherheits-Best-Practices angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
