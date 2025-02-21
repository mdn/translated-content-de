---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, zum Beispiel der Text, der auf den öffentlichen Seiten angezeigt wird. Andere sind sensibel, wie zum Beispiel Benutzernamen, Passwörter und Bankinformationen von Kunden oder interne Algorithmen und vertrauliche Produktinformationen.

Sensible Informationen müssen geschützt werden, und darauf liegt der Schwerpunkt der Websicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie genutzt werden, um:

- Unternehmen durch die Weitergabe ihrer Informationen an Wettbewerber einen Wettbewerbsnachteil zu verschaffen.
- Ihre Dienste zu deaktivieren oder zu kapern, was zu ernsthaften Betriebsproblemen führt.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden und sie dadurch anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste zu machen.

Moderne Browser verfügen bereits über mehrere Funktionen zum Schutz der Sicherheit der Benutzer im Web. Entwickler müssen jedoch auch beste Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die von Angreifern ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, und praktischen Leitfäden zur Sicherung dieser Schwachstellen.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng miteinander verbundene Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich darauf, den Benutzern Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während gleichzeitig sichergestellt wird, dass sie nicht unverantwortlich genutzt werden. Zum Beispiel sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien diese Daten geteilt werden und wie sie verwendet werden. Benutzer müssen die Möglichkeit haben, Ihrer Datenschutzrichtlinie zuzustimmen, Zugriff auf ihre gespeicherten Daten zu erhalten und sie bei Bedarf zu löschen.

Gute Sicherheit ist wesentlich für gute Privatsphäre. Sie könnten alle Ratschläge in unserem [Privatsphäre im Web](/de/docs/Web/Privacy) Leitfaden befolgen, aber Integrität zeigen und eine robuste Datenschutzrichtlinie haben, bringt wenig, wenn Ihre Website nicht sicher ist und Angreifer Daten einfach stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser befolgen ein striktes Sicherheitsmodell, das eine starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server und den Datentransport durchsetzt. Dieser Abschnitt befasst sich mit den Funktionen, die diesem Modell zugrunde liegen.

### Same-origin policy und CORS

Die [Same-origin policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder Skript, das von einer {{Glossary("origin", "Herkunft")}} geladen wurde, mit einer Ressource von einer anderen Herkunft interagieren kann. Er hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren.

Im Allgemeinen können Dokumente von einer Herkunft keine Anfragen an andere Herkünfte stellen. Dies ist sinnvoll, da Sie nicht möchten, dass Websites miteinander interagieren und unbefugten Zugriff auf Daten erhalten.

In einigen Fällen möchten Sie diese Einschränkung jedoch lockern. Wenn Sie beispielsweise mehrere Websites haben, die miteinander interagieren, können Sie ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) ermöglicht werden, einem auf HTTP-Headern basierenden Mechanismus, der einem Server ermöglicht, alle Herkünfte (Domain, Schema oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen zulassen soll.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP) Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource oder eine Erklärung, warum eine Anforderung fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Die Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem sie Daten während des Transports über das Netzwerk verschlüsselt und ist die Technik hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für die Privatsphäre, da es Dritte daran hindert, übertragene Daten abzufangen und böswillig zu verwenden.

Alle Browser bewegen sich in Richtung der Notwendigkeit von HTTPS als Standard; dies ist praktisch bereits der Fall, da im Web kaum etwas ohne dieses Protokoll erledigt werden kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, der es zwei vernetzten Anwendungen oder Geräten ermöglicht, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter auswählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit von Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP) Header ermöglicht es einer Website, anzugeben, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das dazu entwickelt wurde, Zertifikatsfehlvergabe zu überwachen und zu schützen. Neu ausgegebene Zertifikate werden in öffentlich geführte, häufig unabhängige CT-Logs 'geloggt'. Diese bieten kryptografisch gesicherte, unveränderbare Protokolle der ausgestellten TLS-Zertifikate.
- [Mischinhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die mit {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen wurden, wird als **Mischinhalte**-Seite bezeichnet. Seiten wie diese sind nur teilweise verschlüsselt, wodurch die unverschlüsselten Inhalte für Abhörer und Man-in-the-Middle-Angreifer zugänglich sind.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind dafür bekannt, schwach zu sein und sollten, wenn möglich, vermieden werden.

### Sichere Kontexte und Funktionsberechtigungen

Browser kontrollieren die Nutzung "mächtiger Funktionen" auf unterschiedliche Weise. Diese "mächtigen Funktionen" umfassen das Generieren von Systembenachrichtigungen auf einer Website, die Nutzung der Kamera eines Benutzers, um Zugriff auf einen Medienstream zu erhalten, die Manipulation der System-GPU und die Verwendung von Webzahlungen. Wenn eine Seite diese APIs, die solche Funktionen steuern, uneingeschränkt nutzen könnte, könnten böswillige Entwickler Folgendes versuchen:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen belästigen.
- Ihre Webcam ohne Vorwarnung einschalten, um sie auszuspionieren.
- Ihren Browser/Ihr System verstopfen, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS)-Angriffe zu starten.
- Daten oder Geld stehlen.

Diese "mächtigen Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) gestattet. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für das eine angemessene Sicherheit besteht, dass die Inhalte sicher (via HTTPS/TLS) geliefert wurden. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte helfen auch, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) vom Zugriff auf mächtige Funktionen abzuhalten.

  Eine Liste der Webplattform-Funktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen wird durch ein System von Benutzerberechtigungen gesteuert: Benutzer müssen ausdrücklich zustimmen, den Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Benutzerberechtigungsanfragen passieren automatisch, und Sie können den Status einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Einige andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Button verwendet werden, was bedeutet, dass sie innerhalb eines entsprechenden Ereignishandlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Funktionen, die von Benutzeraktivierungen abhängen](/de/docs/Web/Security/User_activation).

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Websicherheit, die sowohl auf der Server- als auch auf der Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Client-seitige Sicherheitsüberlegungen. Eine nützliche Zusammenfassung der Sicherheitsaspekte aus Server-Sicht, die auch Beschreibungen häufiger Angriffe enthält, finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernmoduls).

### Verantwortungsbewusste Speicherung von Client-seitigen Daten

Der verantwortungsvolle Umgang mit Daten betrifft hauptsächlich die Reduktion der Verwendung von [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und die Vorsicht bei den Daten, die Sie speichern und mit Dritten teilen. Traditionell haben Webentwickler Cookies verwendet, um alle möglichen Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Als Ergebnis haben Browser begonnen, zu begrenzen, was Sie mit Cross-Site-Cookies tun können, mit dem Ziel, den Zugriff auf sie in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise umsetzen. Weitere Informationen finden Sie unter [Übergang von Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersatz für Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).

### Schutz der Benutzeridentität und Verwaltung von Logins

Bei der Implementierung einer sicheren Lösung, die Datenerfassung beinhaltet, insbesondere wenn es sich um sensible Daten wie Anmeldedaten handelt, macht es Sinn, eine seriöse Lösung zu verwenden. Jede respektable serverseitige Framework-Lösung wird über eingebaute Funktionen verfügen, um gegen häufige Schwachstellen zu schützen. Sie könnten auch ein spezialisiertes Produkt für Ihren Zweck einsetzen, zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrage-Anbieter.

Wenn Sie Ihre eigene Lösung zur Datenerfassung entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstanden haben. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA) für besseren Schutz. Erwägen Sie die Nutzung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den Client-Teil der App zu vereinfachen.

Hier sind einige weitere Tipps für sichere Logins:

- Erzwingen Sie beim Sammeln von Benutzeranmeldedaten starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der häufigsten Ursachen für Sicherheitsverletzungen. Außerdem sollten Sie Ihre Benutzer ermutigen, einen Passwortmanager zu verwenden, damit sie komplexere Passwörter verwenden können, sich nicht darum kümmern müssen, sie zu merken, und kein Sicherheitsrisiko eingehen, indem sie sie aufschreiben. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Vorgang, bei dem eine Nachricht an einen Benutzer gesendet wird (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Site enthält, die aussieht wie eine Site, die sie täglich nutzen, aber nicht ist. Der Link wird von einer Nachricht begleitet, die den Benutzer dazu verleiten soll, seinen Benutzernamen und sein Passwort auf der Site einzugeben, damit sie gestohlen und dann von einem Angreifer für böswillige Zwecke verwendet werden können.

  > [!NOTE]
  > Einige Phishing-Sites können sehr raffiniert sein und schwer von einer echten Website zu unterscheiden. Daher sollten Sie Ihre Benutzer aufklären, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht erhalten, die in etwa lautet "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen", sollten sie die Seite direkt in einem neuen Tab aufrufen und versuchen, sich direkt einzuloggen, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder Ihnen eine E-Mail senden, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich gegen Brute-Force-Angriffe auf Anmeldeseiten mit {{Glossary("rate_limit", "Rate Limiting")}}, Kontosperrungen nach einer bestimmten Anzahl fehlgeschlagener Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzer-Login-Sitzungen mit eindeutigen [Session-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer automatisch ab, nachdem sie eine Zeit lang inaktiv waren.

### Keine sensiblen Daten in URL-Query-Strings einschließen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Query-Strings einschließen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), denn wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), könnte sie diese Informationen stehlen. Noch schwerwiegender ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxies und Archivierungstools wie dem [Internet Archive](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten in öffentlich zugänglichen Ressourcen bestehen bleiben könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinien: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header ausführlicher und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch beim Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) helfen.

### Verwendung von Richtlinien durchsetzen

Erwägen Sie den Einsatz von Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um ein Set von Nutzungsregeln für Funktionen und Ressourcen auf Ihrer Website durchzusetzen, das es erschwert, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie zum Beispiel nur erlauben, dass Bilder oder Skripte von bestimmten vertrauenswürdigen Herkünften geladen werden. Dies hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektions-Angriffen. Diese Angriffe beinhalten eine Reihe von böswilligen Aktivitäten, einschließlich Datendiebstahl, Webseitenverunstaltung und Verbreitung von Malware.

Die Berechtigungsrichtlinie funktioniert auf ähnliche Weise, ist jedoch mehr darauf ausgerichtet, den Zugang zu bestimmten "mächtigen Funktionen" [wie bereits erwähnt](#sichere_kontexte_und_funktionsberechtigungen) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie auf Ihrer Site eine Menge Drittanbieter-Code verwenden. Beachten Sie jedoch, dass Sie möglicherweise die Funktion Ihrer Website zerstören, wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist.

### Datenintegrität aufrechterhalten

Fortsetzend aus dem vorherigen Abschnitt, wenn Sie auf Ihrer Site die Nutzung von Funktionen und Ressourcen erlauben, sollten Sie versuchen sicherzustellen, dass Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, ob Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation geliefert werden. Sie funktioniert, indem Sie einen kryptografischen Hash bereitstellen, der mit einer abgerufenen Ressource übereinstimmen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwortheader gibt an, ob die Antwort mit anforderndem Code von der gegebenen {{Glossary("origin", "Herkunft")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwortheader ist ein Marker, der vom Server verwendet wird, um anzugeben, dass die [MIME-Typen](/de/docs/Web/HTTP/MIME_types), die in den {{HTTPHeader("Content-Type")}} Headers beworben werden, nicht geändert werden sollten und eingehalten werden müssen. Dieser Header ist ein Weg, um auf [MIME-Typ-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu verzichten, oder mit anderen Worten, um anzugeben, dass die MIME-Typen bewusst konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel gilt: Vertrauen Sie nicht auf die Eingaben, die Benutzer in Formulare machen. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist leicht für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen im Umgang mit der Eingabe bestimmter ausführbarer Codesequenzen in Formularexperten (zum Beispiel SQL oder JavaScript). Wenn Sie beim Umgang mit solchen Eingaben nicht vorsichtig sind, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies geschehen könnte.

Um sich dagegen zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Implementieren Sie eine Client-seitige Validierung, um Benutzer darauf hinzuweisen, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mit eingebauten HTML-Formularvalidierungsfunktionen tun oder Ihren eigenen Validierungscode schreiben. Weitere Informationen finden Sie unter [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).
- Sie sollten eine Ausgabe-Codierung verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu vermeiden, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Ausgabe-Codierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Sie können sich nicht allein auf Client-seitige Validierung für die Sicherheit verlassen — sie sollte mit einer Server-seitigen Validierung kombiniert werden. Die Client-seitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungsfeedback bietet, ohne auf eine Rückmeldung vom Server warten zu müssen. Client-seitige Validierung ist jedoch für böswillige Parteien leicht zu umgehen (zum Beispiel durch das Ausschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jede seriöse Server-seitige Framework-Lösung wird Funktionalitäten zur Validierung von Formulareinsendungen bieten. Zudem ist es eine bewährte Praxis, alle Sonderzeichen, die Teil einer ausführbaren Syntax sind, zu maskieren, damit eingegebener Code nicht mehr ausführbar ist und als Klartext behandelt wird.

### Schutz gegen Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriff wird ein Benutzer dazu verleitet, auf ein UI-Element zu klicken, das eine andere Aktion ausführt als die, die der Benutzer erwartet, oft mit dem Ergebnis, dass vertrauliche Informationen des Benutzers an einen bösartigen Dritten weitergegeben werden. Dieses Risiko ist inhärent in eingebetteten Inhalten von Drittparteien, also stellen Sie sicher, dass Sie dem, was in Ihre Site eingebettet wird, vertrauen. Beachten Sie auch, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können die Informationen zum Thema Phishing im vorherigen Abschnitt [Schutz der Benutzeridentität und Verwaltung von Logins](#schutz_der_benutzeridentität_und_verwaltung_von_logins) nachlesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwortheader kann verwendet werden, um anzugeben, ob ein Browser erlaubt sein soll, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) zu rendern. Sites können dies verwenden, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihr Inhalt nicht in andere Seiten eingebettet wird.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Anleitungen zur Sicherheitsimplementierung

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie den besten Praktiken folgen, sehen Sie sich unser Set von [Praktischen Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory) Tool. Observatory führt Sicherheitsüberprüfungen auf einer Website durch und liefert eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme. Diese Leitfäden erklären, wie man Probleme löst, die bei den MDN Observatory-Tests gefunden wurden: Das Tool verlinkt zu den relevanten Leitfäden für jedes Problem, um Sie auf einen effektiven Lösungsweg zu führen. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitungen bei der Implementierung von Websites, um sicherzustellen, dass die besten Sicherheitspraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
