---
title: Sicherheit im Web
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, zum Beispiel der auf öffentlichen Seiten angezeigte Text. Andere sind sensibel, wie etwa Benutzernamen, Passwörter und Bankdaten von Kunden oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und darauf liegt der Fokus der Web-Sicherheit. Wenn solche Informationen in die falschen Hände fallen, könnten sie verwendet werden, um:

- Unternehmen im Wettbewerb zu benachteiligen, indem ihre Informationen mit Wettbewerbern geteilt werden.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut zu schwerwiegenden Problemen in ihrem Betrieb führen würde.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profilbildung, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser bieten bereits mehrere Funktionen zum Schutz der Sicherheit der Benutzer im Web, aber Entwickler müssen auch bewährte Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, sowie praktischer Leitfäden, wie Sie sie sichern können.

## Beziehung zwischen Sicherheit und Datenschutz

Sicherheit und Datenschutz sind eigene, aber eng miteinander verbundene Themen. Es ist wertvoll, die Unterschiede zwischen beiden zu kennen und wie sie zusammenhängen.

- **Sicherheit** bezieht sich auf das Handeln, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Datenschutz** bezieht sich auf die Handlung, Benutzern Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während gleichzeitig sichergestellt wird, dass sie nicht unverantwortlich genutzt werden. Beispielweise sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Benutzer müssen die Möglichkeit haben, Ihrer Datenschutzrichtlinie zuzustimmen, Zugriff auf ihre gespeicherten Daten zu haben und sie bei Wunsch zu löschen.

Gute Sicherheit ist entscheidend für guten Datenschutz. Sie könnten alle Ratschläge in unserem [Leitfaden zu Datenschutz im Web](/de/docs/Web/Privacy) befolgen, aber mit Integrität zu handeln und eine robuste Datenschutzrichtlinie zu haben, ist sinnlos, wenn Ihre Website nicht sicher ist und Angreifer einfach Daten stehlen können.

## Von Browsern bereitgestellte Sicherheitsfunktionen

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server sowie die Datenübertragung erzwingt. Dieser Abschnitt behandelt die Funktionen, die dieses Modell untermauern.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Herkunft")}} geladen wird, mit einer Ressource einer anderen Herkunft interagieren kann. Sie hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einer Herkunft keine Anfragen an andere Herkünfte stellen. Das ist sinnvoll, weil Sie nicht möchten, dass Websites sich gegenseitig stören und auf unbefugte Daten zugreifen können.

Es kann jedoch Situationen geben, in denen Sie diese Einschränkung lockern möchten; zum Beispiel, wenn Sie mehrere Websites haben, die miteinander interagieren, können sie einander erlauben, Ressourcen von der jeweils anderen anzufordern, indem sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) gestattet werden, einem mechanismus auf Basis von HTTP-Headern, der einem Server ermöglicht, jede Herkunft (Domain, Schema oder Port) außer seiner eigenen anzugeben, von der ein Browser Ressourcen laden soll.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und -servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource oder Details darüber, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Datenschutz, indem es Daten während des Transports über das Netzwerk verschlüsselt und die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll darstellt. TLS ist gut für den Datenschutz, da es verhindert, dass Dritte übertragene Daten abfangen und böswillig verwenden können.

Alle Browser bewegen sich in Richtung einer Standardeinstellung von HTTPS; dies ist praktisch bereits der Fall, da Sie ohne dieses Protokoll im Web kaum etwas tun können.

Verwandte Themen:

- [Transportschichtsicherheit](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, mit dem zwei vernetzte Anwendungen oder Geräte Informationen privat und robust austauschen können. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was einen erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header lässt eine Website angeben, dass sie nur über HTTPS abgerufen werden darf.
- [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency)
  - : Die Zertifikatstransparenz (CT) ist ein offener Rahmen, der entwickelt wurde, um gegen fehlerhafte Zertifikatsausstellung zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Protokollen „geloggt“. Diese bieten kryptografisch gesicherte Aufzeichnungen von ausgestellten TLS-Zertifikaten, die nur ergänzt werden.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über unverschlüsseltes {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **gemischte Inhalte**-Seite bezeichnet. Seiten dieser Art sind nur teilweise verschlüsselt, sodass der unverschlüsselte Inhalt für Abhörer und Man-in-the-middle-Angreifer zugänglich bleibt.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der zur {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekannt dafür, schwach zu sein, und sollten, wenn möglich, vermieden werden.

### Sichere Kontexte und Funktionsberechtigungen

Browser kontrollieren die Nutzung "leistungsfähiger Funktionen" auf verschiedene Weise. Diese "leistungsfähigen Funktionen" umfassen die Generierung von Systembenachrichtigungen auf einer Website, die Verwendung der Webcam eines Benutzers, um Zugriff auf einen Medienstream zu erhalten, die Manipulation der System-GPU und die Nutzung von Webzahlungen. Wenn eine Website diese APIs zur Steuerung solcher Funktionen ohne Einschränkung verwenden könnte, könnten böswillige Entwickler Folgendes versuchen:

- Benutzer mit unnötigen Benachrichtigungen und anderen Benutzeroberflächenelementen zu belästigen.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/Ihr System zu überlasten, um {{Glossary("denial_of_service", "Denial-of-Service")}} (DoS)-Angriffe zu erstellen.
- Daten oder Geld zu stehlen.

Diese "leistungsfähigen Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) gestattet. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem ein angemessenes Vertrauen besteht, dass die Inhalte sicher (über HTTPS/TLS) geliefert wurden. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte helfen auch, [Man-in-the-middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) davon abzuhalten, auf leistungsfähige Funktionen zuzugreifen.

  Eine Liste der Webplattform-Funktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen wird durch ein System von Benutzerberechtigungen gesteuert: Benutzer müssen ausdrücklich zustimmen, Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanfragen erfolgen automatisch und Sie können den Status einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Verschiedene andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf eine Schaltfläche verwendet werden, was bedeutet, dass sie von innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Features gated by user activation](/de/docs/Web/Security/User_activation).

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Web-Sicherheit, die sowohl serverseitig als auch clientseitig berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf sicherheitsrelevante Überlegungen auf der Clientseite. Eine nützliche Zusammenfassung der Sicherheit aus einer serverseitigen Perspektive, die auch Beschreibungen häufiger Angriffe enthält, auf die geachtet werden muss, finden Sie unter [Websitesicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernmoduls).

### Clientseitige Daten verantwortungsbewusst speichern

Der verantwortungsvolle Umgang mit Daten betrifft hauptsächlich die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und den vorsichtigen Umgang mit den Daten, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Daher haben Browser begonnen, einzuschränken, was Sie mit Cookies über mehrere Seiten hinweg tun können, mit dem Ziel, den Zugriff darauf in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von Cookies über mehrere Seiten hinweg vorbereiten, indem Sie die Anzahl der Verfolgungsaktivitäten, auf die Sie angewiesen sind, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).

### Benutzeridentität schützen und Anmeldungen verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn die Daten sensibel sind, wie Anmeldeinformationen, ist es sinnvoll, eine renommierte Lösung zu verwenden. Beispielsweise werden in jedem respektablen serverseitigen Framework integrierte Funktionen zum Schutz vor häufigen Schwachstellen vorhanden sein. Sie könnten auch in Betracht ziehen, für Ihren Zweck ein spezialisierteres Produkt zu verwenden, wie z. B. eine Identitätsanbieter-Lösung oder einen sicheren Anbieter von Online-Umfragen.

Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System umzusetzen, und testen Sie es gründlich. Verwenden Sie Multi-Faktor-Authentifizierung (MFA) für einen besseren Schutz. Ziehen Sie in Betracht, eine spezielle API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) zu verwenden, um den Client-Teil der Anwendung zu optimieren.

Hier sind einige weitere Tipps für sichere Anmeldungen:

- Beim Sammeln von Benutzerlogin-Informationen erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie zudem Ihre Benutzer, einen Passwortmanager zu verwenden, damit sie komplexere Passwörter nutzen können, sich keine Sorgen über das Merken machen müssen und keine Sicherheitsrisiken durch Aufschreiben erzeugen. Siehe auch unseren Artikel zu [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist die Handlung, eine Nachricht an einen Benutzer zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Website enthält, die wie eine Website aussieht, die sie täglich nutzen, es aber nicht ist. Der Link ist mit einer Nachricht versehen, die darauf abzielt, Benutzer dazu zu verleiten, ihren Benutzernamen und ihr Passwort auf der Website einzugeben, damit diese gestohlen und dann von einem Angreifer missbraucht werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Deshalb sollten Sie Ihre Benutzer darüber aufklären, keine zufälligen Links in E-Mails und SMS-Nachrichten zu vertrauen. Wenn sie eine Nachricht erhalten, die in etwa lautet: "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu klären", sollten sie die Website in einem neuen Tab direkt aufrufen und versuchen, sich direkt einzuloggen, anstatt den Link in der Nachricht zu klicken. Oder sie könnten Sie telefonisch oder per E-Mail kontaktieren, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich vor Brute-Force-Angriffen auf Anmeldeseiten mit {{Glossary("rate_limit", "Rate-Limits")}}, Kontosperrungen nach einer bestimmten Anzahl von erfolglosen Versuchen und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Session-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer automatisch ab, nachdem sie eine gewisse Zeit inaktiv waren.

### Keine sensiblen Daten in URL-Abfragezeichenfolgen einfügen

Im Allgemeinen sollten Sie [keine sensiblen Daten in URL-Abfragezeichenfolgen einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da ein Dritter die URL abfangen könnte (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header) und diese Informationen stehlen könnte. Noch gravierender ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxies und Archivierungstools wie dem [Internet-Archiv](https://web.archive.org/) indiziert werden könnten, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinien: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch dabei helfen, sich gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Berücksichtigen Sie die Verwendung von Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Nutzungsregeln für Funktionen und Ressourcen auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine zusätzliche Sicherheitsebene zu hinzufügen, indem Sie beispielsweise nur von bestimmten vertrauenswürdigen Herkünften Bilder oder Skripte laden lassen. Dies hilft, bestimmte Arten von Angriffen, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Daten-Injektionsangriffe, zu erkennen und zu mindern. Diese Angriffe umfassen eine Reihe böswilliger Aktivitäten, darunter Datendiebstahl, Website-Schändung und Malware-Verbreitung.

Berechtigungspolitik funktioniert ähnlich, allerdings ist es mehr darauf ausgerichtet, den Zugriff auf spezifische "leistungsfähige Funktionen" ([wie bereits erwähnt](#sichere_kontexte_und_funktionsberechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie auf Ihrer Website viele Drittanbieter-Codes verwenden. Beachten Sie jedoch, dass Sie möglicherweise die Funktionalität Ihrer Website beeinträchtigen, wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist, um zu funktionieren.

### Datenintegrität aufrechterhalten

Anknüpfend an den vorherigen Abschnitt sollten Sie versuchen, sicherzustellen, dass Ressourcen, deren Nutzung Sie auf Ihrer Website zulassen, nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, ob Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation geliefert werden. Es funktioniert, indem es Ihnen ermöglicht, einen kryptografischen Hash bereitzustellen, den eine abgerufene Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit anforderndem Code von der angegebenen {{Glossary("origin", "Herkunft")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, den der Server verwendet, um anzugeben, dass die in den {{HTTPHeader("Content-Type")}}-Headern angegebenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist eine Möglichkeit, auf [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu verzichten, oder in anderen Worten, anzugeben, dass die MIME-Typen bewusst konfiguriert sind.

### Formulareingaben bereinigen

Im Allgemeinen sollten Sie nichts vertrauen, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Zudem sind böswillige Menschen geschickt darin, spezielle Zeichenfolgen von ausführbarem Code in Formularfelder einzugeben (z.B. SQL oder JavaScript). Wenn Sie bei der Handhabung solcher Eingaben nicht vorsichtig sind, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) als gutes Beispiel dafür, wie das geschehen könnte.

Um sich davor zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten sorgfältig bereinigen:

- Sie sollten eine clientseitige Validierung implementieren, um Benutzer darüber zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mit den integrierten HTML-Formularvalidierungsfunktionen tun oder Ihre eigene Validierungscodierung schreiben. Siehe [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Informationen.
- Sie sollten eine Ausgabecodierung verwenden, wenn Sie Benutzereingaben in einer Anwendungsoberfläche anzeigen möchten, um Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, ohne dass sie als Code ausgeführt werden. Siehe [Ausgabecodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für weitere Informationen.

Sie können sich nicht allein auf die clientseitige Validierung für die Sicherheit verlassen — sie sollte durch serverseitige Validierung ergänzt werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungs-Feedback gibt, ohne dass eine Wartezeit für eine Rückmeldung vom Server erforderlich ist. Jedoch ist es für böswillige Parteien einfach, die clientseitige Validierung zu umgehen (z.B. durch Ausschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes seriöse serverseitige Framework bietet Funktionalitäten zur Validierung von Formularübertragungen. Darüber hinaus ist es eine gängige bewährte Praxis, alle Sonderzeichen zu maskieren, die Teil der ausführbaren Syntax sind, damit der eingegebene Code nicht mehr ausführbar ist und als reiner Text behandelt wird.

### Schutz gegen Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird der Benutzer dazu verleitet, auf ein Benutzeroberflächenelement zu klicken, das eine andere Aktion ausführt, als der Benutzer erwartet, und oft dazu führt, dass vertrauliche Informationen des Benutzers an eine böswillige Drittpartei weitergegeben werden. Dieses Risiko besteht bei eingebetteten Drittanbieter-Inhalten, also stellen Sie sicher, dass Sie dem vertrauen können, was in Ihre Seite eingebettet wird. Darüber hinaus sollten Sie sich darüber im Klaren sein, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Anmeldungen verwalten](#benutzeridentität_schützen_und_anmeldungen_verwalten) lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern können soll. Websites können dies verwenden, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive gibt gültige Eltern an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Sicherheitsimplementierungsleitfäden

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie bewährte Praktiken befolgen, siehe unsere Sammlung von [Praktischen Sicherheitsimplementierungsleitfäden](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsüberprüfungen auf einer Website durch und liefert eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme. Diese Leitfäden erklären, wie man Probleme löst, die durch die MDN Observatory-Tests aufgedeckt werden: Das Tool verlinkt zu dem jeweiligen Leitfaden für jedes Problem und hilft so bei der effektiven Lösung. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Leitfäden beim Implementieren von Websites, um sicherzustellen, dass bewährte Sicherheitspraktiken angewendet werden.

## Siehe auch

- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Sicherheits-Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)
