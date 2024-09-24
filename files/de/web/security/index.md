---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

Websites enthalten verschiedene Arten von Informationen. Manche davon sind nicht sensibel, zum Beispiel der Text auf öffentlichen Seiten. Andere Informationen sind sensibel, wie Benutzernamen, Passwörter und Bankinformationen von Kunden oder interne Algorithmen und private Produktinformationen.

Empfindliche Informationen müssen geschützt werden, und darauf liegt der Fokus der Web-Sicherheit. Falls diese Informationen in die falschen Hände gelangen, könnten sie verwendet werden, um:

- Unternehmen durch Weitergabe ihrer Informationen an Wettbewerber in eine nachteilige Position zu bringen.
- Ihre Dienste zu deaktivieren oder zu kapern, was zu ernsthaften Betriebsproblemen führen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profiling, Targeting, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Web zu gewährleisten. Entwickler müssen jedoch auch Best Practices anwenden und sorgfältigen Code schreiben, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die von Schadakteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich Konzepten, die Ihnen helfen, Website-Schwachstellen zu verstehen, und praktischen Anleitungen, wie Sie sie sichern können.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen beiden und ihre Beziehung zueinander zu kennen.

- **Sicherheit** ist der Akt, private Daten und Systeme gegen unbefugten Zugriff zu schützen. Dies betrifft sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich darauf, den Nutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während gleichzeitig sichergestellt wird, dass sie nicht unverantwortlich genutzt werden. Beispielsweise sollten Sie Ihren Nutzern mitteilen, welche Daten Sie von ihnen erheben, mit welchen Parteien sie geteilt werden und wie sie genutzt werden. Nutzer müssen die Möglichkeit haben, Ihrer Datenschutzrichtlinie zuzustimmen, Zugang zu ihren gespeicherten Daten zu erhalten und sie bei Bedarf zu löschen.

Gute Sicherheit ist essentiell für gute Privatsphäre. Sie könnten alle Ratschläge in unserem [Leitfaden zur Privatsphäre im Web](/de/docs/Web/Privacy) befolgen, aber mit Integrität handeln und eine robuste Datenschutzrichtlinie haben ist sinnlos, wenn Ihre Seite nicht sicher ist und Angreifer die Daten ohnehin stehlen können.

## Sicherheitsfunktionen von Browsern

Webbrowser folgen einem strikten Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server sowie den Datentransport erzwingt. Dieser Abschnitt befasst sich mit den Funktionen, die dieses Modell untermauern.

### Same-Origin-Policy und CORS

[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder Skript von einem {{Glossary("origin", "Ursprung")}} mit einer Ressource von einem anderen Ursprung interagieren kann. Es hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge stellen. Das macht Sinn, weil man nicht möchte, dass Seiten miteinander interferieren und unbefugten Zugriff auf Daten haben.

Manchmal möchten Sie diese Einschränkung jedoch lockern; beispielsweise, wenn Sie mehrere Websites haben, die miteinander interagieren. Sie können ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) ermöglicht werden, einen auf HTTP-Headern basierenden Mechanismus, der einem Server erlaubt, anzugeben, welche Ursprünge (Domäne, Schema oder Port) außer seiner eigenen erlaubt sind, um Ressourcen zu laden.

### HTTP-Kommunikationsmodell

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern genutzt, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource bereitzustellen oder die Gründe zu detaillieren, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation zu bieten.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es verhindert, dass Dritte übertragene Daten abfangen und missbräuchlich verwenden können.

Alle Browser bewegen sich in Richtung einer standardmäßigen Anforderung von HTTPS; in der Praxis ist dies bereits der Fall, da man ohne dieses Protokoll im Web nicht viel tun kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, um zwei vernetzten Anwendungen oder Geräten eine private und robuste Informationsübermittlung zu ermöglichen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header lässt eine Website spezifizieren, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Rahmenwerk, das entwickelt wurde, um gegen die fehlerhafte Ausstellung von Zertifikaten zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Logs protokolliert. Diese bieten append-only, kryptographisch abgesicherte Aufzeichnungen der ausgestellten TLS-Zertifikate.
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte einbindet, die über {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **mixed content** Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt und lassen den unverschlüsselten Inhalt angreifbar für Abhörer und Man-in-the-Middle-Angreifer.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind dafür bekannt, schwach zu sein und sollten vermieden werden, wenn es angebracht ist.

### Sichere Kontexte und Funktionsberechtigungen

Browser kontrollieren die Nutzung von "leistungsstarken Features" auf unterschiedliche Weise. Diese "leistungsstarken Features" umfassen das Generieren von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Benutzers, um Zugriff auf einen Medienstrom zu erhalten, die Manipulation der System-GPU und die Verwendung von Web-Zahlungen. Wenn eine Website einfach die APIs nutzen könnte, die solche Features kontrollieren, ohne Einschränkungen, könnten böswillige Entwickler versuchen, folgendes zu tun:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen nerven.
- Ihre Webcam ohne Warnung einschalten, um sie auszuspionieren.
- Ihren Browser/System belasten, um {{Glossary("denial_of_service", "Denial of Service")}}-Angriffe (DoS) zu erstellen.
- Daten oder Geld stehlen.

Diese "leistungsstarken Features" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Features ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem es eine hinreichende Gewissheit gibt, dass die Inhalte sicher (über HTTPS/TLS) geliefert wurden. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte helfen auch dabei, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, leistungsstarke Features zu nutzen.

  Eine Liste von Web-Plattform-Features, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Features wird durch ein Benutzergenehmigungssystem gesteuert: Nutzer müssen ausdrücklich zustimmen, Zugang zu solchen Features zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Benutzerberechtigungsanfragen erfolgen automatisch, und Sie können den Status einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion verwendet werden, wie zum Beispiel das Klicken auf einen Button, was bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Siehe [Features gated by user activation](/de/docs/Web/Security/User_activation) für weitere Informationen.

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Web-Sicherheit, die sowohl auf der Server- als auch auf der Client-Seite bedacht werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf sicherheitsrelevante Überlegungen auf der Client-Seite. Eine nützliche Zusammenfassung der Sicherheit aus serverseitiger Perspektive, die auch Beschreibungen häufiger Angriffe enthält, auf die Sie achten sollten, finden Sie unter [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) (Teil unseres [Programmiermoduls für die serverseitige Website-Entwicklung](/de/docs/Learn/Server-side)).

### Speichern Sie clientseitige Daten verantwortungsbewusst

Der verantwortungsvolle Umgang mit Daten konzentriert sich hauptsächlich auf die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und darauf, vorsichtig mit den Daten zu sein, die Sie speichern und weitergeben. Traditionell haben Webentwickler Cookies benutzt, um alle Arten von Daten zu speichern, und es war für Angreifer einfach, diese Neigungen auszunutzen. Infolgedessen haben Browser begonnen, einzuschränken, was mit cookiesähnlichen Daten getan werden kann, mit dem Ziel, den Zugang zu ihnen in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von cookiesähnlichen Daten aus Dritthand vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, beschränken und/oder die Persistence der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies) für mehr Informationen.

### Schützen Sie die Benutzeridentität und verwalten Sie Logins

Wenn Sie eine sichere Lösung implementieren, die die Erfassung von Daten beinhaltet, insbesondere wenn es sich um sensible Daten wie Anmeldedaten handelt, ist es sinnvoll, eine seriöse Lösung zu verwenden. Beispielsweise bietet jedes angesehene serverseitige Framework integrierte Funktionen zum Schutz vor häufigen Schwachstellen. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identitätsprovider-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zum Sammeln von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Ziehen Sie in Betracht, eine dedizierte API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) zu nutzen, um die clientseitige App zu optimieren.

Hier sind einige andere Tipps für sichere Logins:

- Bei der Erfassung von Benutzeranmeldeinformationen sollten Sie starke Passwörter durchsetzen, damit die Kontodaten Ihrer Nutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Außerdem sollten Sie Ihre Nutzer dazu ermutigen, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter nutzen können, sich nicht daran erinnern müssen und kein Sicherheitsrisiko eingehen, indem sie sie aufschreiben. Siehe dazu auch unseren Artikel über [unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Nutzer auch über **Phishing** aufklären. Phishing ist der Akt, einem Nutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder SMS), die einen Link zu einer Website enthält, die wie eine bekannte Seite aussieht, aber nicht ist. Der Link ist von einer Nachricht begleitet, die den Nutzer dazu bringen soll, seine Benutzerdaten und sein Passwort einzugeben, damit diese gestohlen und von einem Angreifer für böswillige Zwecke verwendet werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Sie sollten Ihre Nutzer daher darauf hinweisen, nicht blindlings Links in E-Mails oder SMS zu vertrauen. Erhalten sie eine Nachricht mit einer Aufforderung wie "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen", sollten sie die Seite in einem neuen Tab direkt aufrufen und versuchen, sich direkt einzuloggen, anstatt den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder eine E-Mail senden, um die erhaltene Nachricht zu besprechen.

- Schützen Sie Login-Seiten gegen Brute-Force-Angriffe durch {{Glossary("rate_limit", "Rate Limiting")}}, Konto-Sperrungen nach einer bestimmten Anzahl fehlgeschlagener Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Nutzer nach Inaktivitätsperioden automatisch ab.

### Sensible Daten nicht in URL-Query-Strings einfügen

Als allgemeine Regel sollten Sie [sensible Daten nicht in URL-Query-Strings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da, wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-HTTP-Header), diese Informationen gestohlen werden könnten. Noch gravierender ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxys und Archivierungstools wie dem [Internet-Archiv](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen gespeichert werden könnten.

Verwenden Sie `POST`-Anfragen statt `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlich die Privatsphäre- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übermittlung sensibler Daten in URLs über `GET`-Anfragen kann auch dazu beitragen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Verwendung von Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Reihe von Nutzungsregeln für Features und Ressourcen auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht Ihnen eine zusätzliche Sicherheitsschicht, indem Sie beispielsweise festlegen, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden dürfen. Dies hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffe. Diese Angriffe umfassen eine Reihe von böswilligen Aktivitäten, einschließlich Datendiebstahl, Webseitenschändung und Verteilung von Malware.

Die Berechtigungspolitik funktioniert auf ähnliche Weise, konzentriert sich jedoch mehr darauf, den Zugriff auf bestimmte "leistungsstarke Features" ([wie zuvor erwähnt](#sichere_kontexte_und_funktionsberechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie viel Drittcode auf Ihrer Seite verwenden. Beachten Sie jedoch, dass, wenn Sie die Nutzung eines Features blockieren, auf das ein Drittanbieter-Skript angewiesen ist, Sie möglicherweise die Funktionalität Ihrer Website beeinträchtigen können.

### Datenintegrität wahren

Aufbauend auf dem vorhergehenden Abschnitt sollten Sie, wenn Sie die Nutzung von Features und Ressourcen auf Ihrer Site erlauben, sicherstellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Integrität von Subressourcen](/de/docs/Web/Security/Subresource_Integrity)
  - : **Integrität von Subressourcen** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, dass die von ihnen abgerufenen Ressourcen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation ausgeliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash angeben, den eine abgerufene Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`**-Antwort-Header gibt an, ob die Antwort mit dem anfordernden Code vom angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzugeben, dass die [MIME-Typen](/de/docs/Web/HTTP/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern angekündigt werden, nicht geändert werden dürfen und befolgt werden müssen. Dieser Header ist ein Weg, um [MIME-Typen-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu vermeiden, oder mit anderen Worten, anzugeben, dass die MIME-Typen bewusst konfiguriert sind.

### Formulareingaben sanitär behandeln

Als allgemeine Regel gilt, dass man nichts vertrauen sollte, was Nutzer in Formulare eingeben. Das Ausfüllen von Online-Formularen ist kompliziert und mühsam, und es ist leicht für Nutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen äußerst geschickt darin, spezifische Zeichenfolgen ausführbaren Codes in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie nicht sorgfältig mit solchen Eingaben umgehen, könnten sie schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injection](/de/docs/Learn/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies geschehen könnte.

Um sich davor zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich sanieren:

- Sie sollten eine clientseitige Validierung implementieren, um Nutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mit integrierten HTML-Formularvalidierungsfunktionen tun, oder Sie können Ihren eigenen Validierungscode schreiben. Weitere Informationen finden Sie unter [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).
- Sie sollten eine Ausgabecodierung verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um die Daten sicher genau so anzuzeigen, wie ein Nutzer sie eingegeben hat und zu verhindern, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Ausgabecodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Sie können sich nicht allein auf die clientseitige Validierung verlassen, um Sicherheit zu gewährleisten — sie sollte mit einer serverseitigen Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem sie eine sofortige Validierungsrückmeldung gibt, ohne auf eine Rückrunde zum Server warten zu müssen. Die clientseitige Validierung kann jedoch leicht von einer böswilligen Partei umgangen werden (zum Beispiel durch das Deaktivieren von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes angesehene serverseitige Framework bietet Funktionalitäten zur Validierung von Formularübermittlungen. Zudem ist es eine gängige Best Practice, spezielle Zeichen, die Teil der ausführbaren Syntax sind, zu entwerten. Dadurch wird eingegebener Code nicht mehr ausführbar und als Klartext behandelt.

### Schutz gegen Clickjacking

Bei einem {{Glossary("Clickjacking", "Clickjacking")}} Angriff wird ein Benutzer dazu gebracht, auf ein UI-Element zu klicken, das eine andere Aktion ausführt, als der Benutzer erwartet, was oft dazu führt, dass die vertraulichen Informationen des Benutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko ist bei eingebetteten Drittinhalten inhärent, daher sollten Sie sicherstellen, dass Sie dem, was in Ihre Site eingebettet wird, vertrauen. Seien Sie sich außerdem bewusst, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#schützen_sie_die_benutzeridentität_und_verwalten_sie_logins) über Phishing lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser erlauben sollte, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) zu rendern. Websites können dies verwenden, um sich vor {{Glossary("Clickjacking", "Clickjacking")}}-Angriffen zu schützen, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten können.

## Praktische Sicherheitsimplementierungsleitfäden

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie Best Practices befolgen, siehe unser Satz von [Praktische Sicherheitsimplementierungsleitfäden](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsaudits auf einer Website durch und liefert eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung festgestellter Sicherheitsprobleme. Diese Leitfäden erklären, wie man Sicherheitsprobleme löst, die von den MDN Observatory-Tests aufgedeckt wurden: Das Tool verlinkt zum relevanten Leitfaden für jedes Problem und hilft Ihnen auf dem Weg zu einer effektiven Lösung. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitung bei der Implementierung von Websites, um sicherzustellen, dass Sicherheitsbest-Practices angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
