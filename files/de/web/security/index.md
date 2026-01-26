---
title: Sicherheit im Web
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie beispielsweise der Text, der auf den öffentlichen Seiten angezeigt wird. Andere Informationen sind sensibel, beispielsweise Benutzernamen, Passwörter und Bankdaten von Kunden oder interne Algorithmen und private Produktinformationen.

Sensible Informationen müssen geschützt werden, und das ist der Fokus der Websicherheit. Wenn diese Informationen in die falschen Hände geraten, können sie verwendet werden, um:

- Unternehmen in einen Wettbewerbsnachteil zu bringen, indem ihre Informationen mit Konkurrenten geteilt werden.
- Ihre Dienste zu deaktivieren oder zu kapern, was wiederum ernsthafte Probleme mit ihrem Betrieb verursachen kann.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, indem die Kunden anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanziellen Verlust werden.

Moderne Browser bieten bereits mehrere Funktionen zum Schutz der Sicherheit der Nutzer im Internet, aber Entwickler müssen auch Best Practices anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von Angreifern ausgenutzt werden können, um Daten zu stehlen oder unbefugten Zugriff auf Dienste zu erhalten.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, um Ihnen zu helfen, die Schwachstellen von Websites zu verstehen, sowie praktische Anleitungen zur Sicherung dieser Schwachstellen.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen beiden und ihre Beziehung zueinander zu kennen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich darauf, den Nutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sicherzustellen, dass diese nicht missbräuchlich verwendet werden. Zum Beispiel sollten Sie Ihre Nutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien diese geteilt werden und wie sie verwendet werden. Den Nutzern muss die Möglichkeit gegeben werden, in Ihre Datenschutzerklärung einzuwilligen, auf ihre bei Ihnen gespeicherten Daten zuzugreifen und diese zu löschen, wenn sie dies wünschen.

Gute Sicherheit ist entscheidend für guten Datenschutz. Sie könnten alle Ratschläge in unserem [Privatsphäre im Web](/de/docs/Web/Privacy) Leitfaden befolgen, aber Integrität und eine robuste Datenschutzerklärung sind nutzlos, wenn Ihre Website nicht sicher ist und Angreifer Daten dennoch stehlen können.

## Sicherheitsfunktionen von Browsern

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server und den Datentransport durchsetzt. In diesem Abschnitt werden die Funktionen betrachtet, die dieses Modell untermauern.

### Same-Origin-Policy und CORS

[Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Script, das von einem {{Glossary("origin", "Ursprung")}} geladen wurde, mit Ressourcen von einem anderen Ursprung interagieren kann. Sie hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge stellen. Das ist sinnvoll, denn man möchte nicht, dass Websites ineinander eingreifen und unbefugten Zugriff auf Daten erhalten können.

In bestimmten Fällen möchten Sie diese Einschränkung jedoch möglicherweise lockern; zum Beispiel, wenn Sie mehrere Websites haben, die miteinander interagieren, könnten Sie erlauben, dass sie Ressourcen voneinander anfordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) ermöglicht werden, einem Mechanismus auf Basis von HTTP-Headern, der es einem Server ermöglicht, beliebige Ursprünge (Domain, Schema oder Port) außer seinem eigenen anzugeben, von denen ein Browser Ressourcen laden darf.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP) Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten zu geben (z. B. eine angeforderte Ressource bereitzustellen oder zu erläutern, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für den Datenschutz, da es Dritte daran hindert, übertragene Daten abzufangen und bösartig zu verwenden.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch schon der Fall, da man im Internet ohne dieses Protokoll nicht viel tun kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für den sicheren und zuverlässigen Austausch von Informationen zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter auswählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP) Header ermöglicht es einer Website, anzugeben, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das zum Schutz vor und zur Überwachung von Fehlzertifikationen entwickelt wurde. Neu ausgestellte Zertifikate werden in öffentlich geführte, oft unabhängige CT-Logs "protokolliert". Diese bieten unveränderliche, kryptographisch abgesicherte Aufzeichnungen ausgegebener TLS-Zertifikate.
- [Mixed content](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über {{Glossary("Plaintext", "Cleartext")}} HTTP abgerufen werden, wird als **Mixed Content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt und lassen den unverschlüsselten Inhalt anfällig für Abhörer und Man-in-the-Middle-Angreifer.

### Sichere Kontexte und Feature-Berechtigungen

Browser kontrollieren die Nutzung von "mächtigen Funktionen" auf verschiedene Arten. Diese "mächtigen Funktionen" umfassen das Generieren von Systembenachrichtigungen auf einer Website, das Verwenden der Webcam eines Nutzers für den Zugriff auf ein Medienstream, das Manipulieren der System-GPU und das Verwenden von Web-Zahlungen. Wenn eine Webseite diese APIs kontrollfrei nutzen könnte, könnten böswillige Entwickler Folgendes tun:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Features belästigen.
- Die Webcam ohne Vorwarnung einschalten, um den Nutzer auszuspionieren.
- Den Browser/das System verstopfen, um {{Glossary("denial_of_service", "Denial-of-Service")}} (DoS)-Angriffe zu erstellen.
- Daten oder Geld stehlen.

Diese "mächtigen Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den angemessene Sicherheit, basierend auf der sicheren Bereitstellung von Inhalten (über HTTPS/TLS), gewährleistet ist. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit unsicheren Kontexten begrenzt. Sichere Kontexte helfen auch dabei, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf mächtige Funktionen zuzugreifen.

  Eine Liste der Webplattform-Features, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist hinter einem System von Benutzerberechtigungen geschützt: Benutzer müssen explizit zustimmen, Zugriff auf solche Funktionen zu gewähren, sodass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanforderungen erfolgen automatisch, und Sie können den Zustand einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf eine Schaltfläche verwendet werden, was bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/Defenses/User_activation).

## Hochrangige Sicherheitsüberlegungen

Es gibt viele Aspekte der Websicherheit, die sowohl auf der Server- als auch auf der Clientseite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf sicherheitsrelevante Überlegungen auf der Clientseite. Eine nützliche Zusammenfassung der Sicherheit aus einer Serverperspektive, die auch Beschreibungen gemeinsamer Angriffe enthält, finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Server-seitiges Website-Programmieren](/de/docs/Learn_web_development/Extensions/Server-side) Lernmoduls).

### Verantwortungsbewusste Speicherung von Daten auf der Clientseite

Der verantwortungsvolle Umgang mit Daten bezieht sich hauptsächlich auf den Abbau der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und darauf, vorsichtig mit den Daten umzugehen, die Sie speichern und mit ihnen teilen. Traditionell verwendeten Webentwickler Cookies, um alle Arten von Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Infolgedessen haben Browser begonnen, einzuschränken, was mit Cross-Site-Cookies möglich ist, wobei das Ziel besteht, den Zugriff darauf in Zukunft vollständig zu eliminieren.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Weitere Informationen finden Sie unter [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).

### Benutzeridentität schützen und Logins verwalten

Wenn Sie eine sichere Lösung implementieren, bei der Daten gesammelt werden, insbesondere wenn es sich um sensible Daten wie Log-in-Zugangsdaten handelt, ist es sinnvoll, eine seriöse Lösung zu verwenden. Beispielsweise verfügen alle respektablen serverseitigen Frameworks über integrierte Funktionen zum Schutz vor allgemein bekannten Schwachstellen. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, beispielsweise eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfragendienst.

Wenn Sie Ihre eigene Lösung zur Datensammlung für Benutzer entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beziehen Sie einen erfahrenen serverseitigen Entwickler und/oder einen Sicherheitstechniker mit ein, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den clientseitigen Teil der App zu optimieren.

Hier sind einige weitere Tipps zum Bereitstellen sicherer Logins:

- Bei der Erfassung von Benutzer-Login-Informationen sollten Sie starke Passwörter erzwingen, damit Ihre Benutzerkontodaten nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer außerdem zur Verwendung eines Passwort-Managers, damit sie komplexere Passwörter verwenden können, sich keine Sorgen um das Merken machen müssen und kein Sicherheitsrisiko durch das Aufschreiben ihrer Passwörter entsteht. Lesen Sie auch unseren Artikel über [Passwort-Authentifizierung](/de/docs/Web/Security/Authentication/Passwords).
- Sie sollten auch Ihre Nutzer über **Phishing** aufklären. Phishing ist die Handlung, einem Benutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Site enthält, die so aussieht wie eine, die sie täglich verwenden, aber nicht die echte ist. Der Link wird von einer Nachricht begleitet, die darauf abzielt, den Benutzer dazu zu bringen, seinen Benutzernamen und sein Passwort auf der gefälschten Seite einzugeben, damit diese gestohlen und böswillig verwendet werden können.

  > [!NOTE]
  > Manche Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Sie sollten daher Ihre Nutzer darüber aufklären, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht in der Art von "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen" erhalten, sollten sie die Seite direkt in einem neuen Tab aufrufen und versuchen, sich direkt anzumelden, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder eine E-Mail senden, um die Nachricht zu besprechen, die sie erhalten haben.

- Schützen Sie sich vor Brute-Force-Angriffen auf Login-Seiten mit {{Glossary("rate_limit", "Ratenbegrenzung")}}, Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID), und melden Sie Benutzer nach Phasen der Inaktivität automatisch ab.

### Sensible Daten nicht in URL-Query-Strings einfügen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Query-Strings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da, wenn eine dritte Partei die URL abfängt (z. B. über den {{httpheader("Referer")}} HTTP-Header), diese Informationen gestohlen werden könnten. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxys und Archivierungswerkzeugen wie dem [Internet-Archiv](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen bleiben könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch helfen, {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu verhindern.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Verwendung von Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Funktionen und Nutzungsrichtlinien auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine zusätzliche Sicherheitsebene hinzuzufügen, indem Sie beispielsweise zulassen, dass Bilder oder Skripte nur von spezifischen vertrauenswürdigen Quellen geladen werden. Dies hilft bei der Erkennung und Abmilderung gewisser Angriffsarten, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektion-Angriffen. Diese Angriffe umfassen eine Reihe von bösartigen Aktivitäten, einschließlich Diebstahl von Daten, Verunstaltung von Websites und Verbreitung von Malware.

Permissions Policy funktioniert ähnlich, ist jedoch mehr damit beschäftigt, den Zugang zu spezifischen "mächtigen Funktionen" ([wie zuvor erwähnt](#sichere_kontexte_und_feature-berechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass wenn Sie die Nutzung einer Funktion blockieren, von der ein Drittanbieter-Skript abhängt, um zu funktionieren, Sie eventuell die Funktionalität Ihrer Website beeinträchtigen können.

### Datenintegrität aufrechterhalten

Anknüpfend an den vorherigen Abschnitt, sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Website erlauben, sicherstellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, ob geladene Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Veränderungen geliefert werden. Es funktioniert, indem Ihnen erlaubt wird, einen kryptographischen Hash bereitzustellen, den eine abgerufene Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Response-Header gibt an, ob die Antwort mit anfragendem Code vom angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Response-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die im {{HTTPHeader("Content-Type")}} Header beworbenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) nicht geändert werden und befolgt werden müssen. Dieser Header ist ein Weg, um [MIME-Type-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu verhindern, oder mit anderen Worten, um zu spezifizieren, dass die MIME-Typen bewusst konfiguriert sind.

### Formulareingaben bereinigen

Grundsätzlich sollten Sie nichts vertrauen, das Benutzer in Formulare eingeben. Online-Formularausfüllungen sind kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen geschickt darin, spezielle ausführbare Codezeichenfolgen in Formularfelder einzugeben (z. B. SQL oder JavaScript). Wenn Sie solche Eingaben nicht sorgfältig handhaben, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Weitere Informationen dazu finden Sie unter [SQL Injection](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection).

Um sich dagegen zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten clientseitige Validierungen implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mit eingebauten HTML-Formularvalidierungsfunktionen tun oder Sie können Ihren eigenen Validierungscode schreiben. Weitere Informationen finden Sie unter [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).
- Sie sollten eine Ausgabeverschlüsselung verwenden, wenn Benutzereingaben in einer Anwendungsoberfläche angezeigt werden, um Daten genau so anzuzeigen, wie sie ein Benutzer eingegeben hat, und um zu verhindern, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Output Encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Allein auf clientseitige Validierung für die Sicherheit zu vertrauen, reicht nicht aus — sie sollte mit der serverseitigen Validierung kombiniert werden. Clientseitige Validierung verbessert das Benutzererlebnis, indem es sofortiges Validierungsfeedback bietet, ohne auf eine Server-Übertragung warten zu müssen. Allerdings ist es einfach für einen böswilligen Benutzer, die clientseitige Validierung zu umgehen (zum Beispiel durch Deaktivierung von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes seriöse serverseitige Framework wird Funktionalitäten zur Validierung von Formulareinsendungen bereitstellen. Außerdem ist es eine gängige Best Practice, alle Sonderzeichen zu escapen, die Teil der ausführbaren Syntax sind, wodurch eingegebener Code nicht mehr ausführbar und als reiner Text behandelt wird.

### Schutz vor Clickjacking

In einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, ein UI-Element anzuklicken, das eine andere Aktion ausführt als erwartet, was oft dazu führt, dass vertrauliche Informationen des Benutzers an eine böswillige dritte Partei weitergeleitet werden. Dieses Risiko ist bei eingebetteten Inhalten von Drittanbietern inhärent, stellen Sie also sicher, dass Sie dem vertrauen, was auf Ihrer Website eingebettet wird. Beachten Sie außerdem, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Weitere Informationen zu Phishing finden Sie im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzeridentität_schützen_und_logins_verwalten).

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Response-Header kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern darf. Websites können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht auf anderen Websites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Richtlinie spezifiziert gültige Eltern, die eine Seite unter Verwendung von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Anleitungen zur Implementierung von Sicherheitsmaßnahmen

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie den Best Practices folgen, sehen Sie sich unsere Reihe von [Praktischen Sicherheitsimplementierungsanleitungen](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Anleitungen beziehen sich direkt auf das [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsprüfungen auf einer Website durch und liefert eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme. Diese Anleitungen erklären, wie man Probleme, die in den MDN-Observatory-Tests aufgedeckt werden, löst: Das Tool verlinkt für jedes Problem auf die entsprechende Anleitung und hilft Ihnen, eine effektive Lösung zu finden. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitungen beim Implementieren von Websites, um sicherzustellen, dass Sicherheitsbest Practices angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet-Serie](https://cheatsheetseries.owasp.org/index.html)
