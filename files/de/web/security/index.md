---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie beispielsweise der Text, der auf öffentlichen Seiten gezeigt wird. Andere hingegen sind sensibel, wie zum Beispiel Benutzernamen, Passwörter und Bankinformationen von Kunden oder interne Algorithmen und vertrauliche Produktinformationen.

Sensible Informationen müssen geschützt werden, und das ist der Schwerpunkt der Web-Sicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie verwendet werden, um:

- Unternehmen einen Wettbewerbsnachteil zu verschaffen, indem ihre Informationen mit Konkurrenten geteilt werden.
- Ihre Dienste lahmzulegen oder zu kapern und somit ernsthafte Probleme in ihrem Betrieb zu verursachen.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch diese anfällig für Profilbildung, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Web zu schützen. Entwickler müssen jedoch auch bewährte Verfahren anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Sogar einfache Fehler im Code können Schwachstellen verursachen, die von böswilligen Akteuren ausgenutzt werden könnten, um Daten zu stehlen und unbefugten Zugriff auf Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, die Anfälligkeiten von Websites zu verstehen, sowie praktischer Leitfäden zur Sicherung dieser.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng miteinander verbundene Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dazu gehören sowohl unternehmensinterne (interne) Daten als auch Nutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich darauf, den Nutzern die Kontrolle darüber zu geben, wie ihre Daten erfasst, gespeichert und verwendet werden, während es gleichzeitig sichergestellt wird, dass sie nicht unangemessen verwendet werden. Zum Beispiel sollten Sie Ihre Nutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien diese geteilt werden und wie sie verwendet werden. Den Nutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzerklärung zuzustimmen, Zugriff auf die von Ihnen gespeicherten Daten zu erhalten und diese, falls gewünscht, zu löschen.

Eine gute Sicherheit ist essenziell für eine gute Privatsphäre. Sie könnten allen Rat aus unserem [Privatsphäre im Web](/de/docs/Web/Privacy)-Leitfaden befolgen, aber Integrität walten zu lassen und eine robuste Datenschutzrichtlinie zu haben, ist sinnlos, wenn Ihre Seite nicht sicher ist und Angreifer die Daten dennoch stehlen können.

## Von Browsern bereitgestellte Sicherheitsfunktionen

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server sowie für die Datenübertragung durchsetzt. Dieser Abschnitt betrachtet die Funktionen, die dieses Modell untermauern.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein fundamentales Sicherheitsmechanismus des Webs, das einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wurde, mit einer Ressource von einem anderen Ursprung interagieren kann. Sie hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge senden. Dies ist sinnvoll, da Sie nicht möchten, dass Seiten in der Lage sind, gegenseitig zu stören und unautorisierte Daten zuzugreifen.

Jedoch könnte es in einigen Fällen sinnvoll sein, diese Einschränkung zu lockern; zum Beispiel wenn Sie mehrere Websites haben, die miteinander interagieren, könnten Sie es ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) gestattet werden, einen auf HTTP-Headern basierenden Mechanismus, der einem Server erlaubt anzugeben, von welchen Ursprüngen (Domain, Schema oder Port) ein Browser Ressourcen laden darf.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP) Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten zu liefern (zum Beispiel eine angeforderte Ressource oder darzulegen, warum eine Anforderung gescheitert ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten beim Transport über das Netzwerk verschlüsselt und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für die Privatsphäre, da es Dritten untersagt, übermittelte Daten abzufangen und missbräuchlich zu verwenden.

Alle Browser bewegen sich in Richtung der Standard-Anforderung von HTTPS; dies ist praktisch schon der Fall, da Sie im Web nicht viel ohne dieses Protokoll tun können.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die Aktivierung von sicheren und robusten Informationsaustauschen zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header ermöglicht es einer Website anzugeben, dass sie nur über HTTPS aufgerufen werden darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offener Rahmen, der dazu konzipiert ist, gegen Fehlzertifizierung zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in häufig unabhängig betriebenen, öffentlichen CT-Logs 'geloggt'. Diese Log-Files bieten append-only, kryptografisch abgesicherte Aufzeichnungen über ausgestellte TLS-Zertifikate.
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **Mixed Content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, wodurch der unverschlüsselte Inhalt für Sniffer und Man-in-the-Middle-Angreifer zugänglich bleibt.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der zur Signierung eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein entscheidendes Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekannt dafür, schwach zu sein und sollten, sofern angebracht, vermieden werden.

### Sichere Kontexte und Feature-Berechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf verschiedene Arten. Diese "leistungsstarken Funktionen" umfassen die Erzeugung von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Nutzers zur Erlangung eines Medienstreams, die Manipulation der System-GPU und die Nutzung von Web-Zahlungen. Könnte eine Seite die APIs, die solche Funktionen steuern, einfach ohne Einschränkung nutzen, könnten bösartige Entwickler versuchen, folgendes zu tun:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen zu belästigen.
- Ihre Webcam ohne Warnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/Ihr System zu überlasten, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS)-Angriffe zu erzeugen.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) gestattet. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den es ein vernünftiges Vertrauen gibt, dass die Inhalte sicher (über HTTPS/TLS) bereitgestellt wurden. In einem sicheren Kontext ist das Potenzial für Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte tragen auch dazu bei, zu verhindern, dass [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) auf leistungsstarke Features zugreifen können.

  Um eine Liste von Web-Features zu sehen, die nur in sicheren Kontexten verfügbar sind, lesen Sie [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist hinter einem System von Benutzerberechtigungen geschützt: Benutzer müssen explizit zustimmen, Zugang zu solchen Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungen-Anfragen passieren automatisch, und Sie können den Status einer API-Berechtigung mit der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion wie das Drücken eines Knopfes genutzt werden, was bedeutet, dass sie von einem angemessenen Ereignishandler aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Für weitere Informationen siehe [Features, die durch Benutzeraktivierung eingeschränkt werden](/de/docs/Web/Security/User_activation).

## Hochrangige Sicherheitsüberlegungen

Es gibt viele Aspekte der Web-Sicherheit, über die sowohl auf Server- als auch auf Client-Seite nachgedacht werden muss. Dieser Abschnitt konzentriert sich hauptsächlich auf Sicherheitsüberlegungen auf der Client-Seite. Sie finden eine nützliche Zusammenfassung der Sicherheit aus einer Server-Perspektive, die auch Beschreibungen von häufigen Angriffen enthält, auf die man achten sollte, unter [Sicherheit von Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Serverseitige Webprogrammierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernmoduls).

### Verantwortungsvolle Speicherung von daten auf der Client-Seite

Verantwortungsvoller Umgang mit Daten betrifft hauptsächlich die Beschränkung der Verwendung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und die Vorsicht bei den Daten, die Sie speichern und weitergeben. Traditionell haben Webentwickler Cookies verwendet, um alle möglichen Daten zu speichern, und es war einfach für Angreifer, diese Angewohnheit auszunutzen. Infolgedessen haben Browser begonnen, zu beschränken, was Sie mit seitenübergreifenden Cookies tun können, mit dem Ziel, den Zugriff darauf insgesamt in der Zukunft zu entfernen.

Sie sollten sich auf die Entfernung von seitenübergreifenden Cookies vorbereiten, indem Sie die Menge der Tracking-Aktivitäten beschränken, auf die Sie sich verlassen, und/oder durch Implementierung der Persistenz der gewünschten Informationen auf anderen Wegen. Siehe [Übergang weg von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Verschiebung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies) für mehr Informationen.

### Schutz von Benutzeridentität und Verwaltung von Logins

Beim Implementieren einer sicheren Lösung, die Datenerhebung beinhaltet, insbesondere wenn es sich um sensible Daten wie Login-Daten handelt, ist es sinnvoll, eine seriöse Lösung zu verwenden. Zum Beispiel hat jedes respektable serverseitige Framework eingebaute Funktionen, um gegen gängige Sicherheitslücken zu schützen. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identity-Provider-Lösungen oder ein sicherer Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung für die Erfassung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen Server-seitigen Entwickler und/oder Sicherheitstechniker zur Implementierung des Systems und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Mehrfaktor-Authentifizierung (MFA) für besseren Schutz. Erwägen Sie die Nutzung einer dedizierten API, wie zum Beispiel [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den Client-Teil der App zu optimieren.

Hier sind einige weitere Tipps für die Bereitstellung sicherer Logins:

- Beim Sammeln von Benutzer-Login-Informationen, erzwingen Sie starke Passwörter, damit die Kontodetails Ihrer Benutzer nicht einfach erraten werden können. Schwache Passwörter sind eine der Hauptursachen von Sicherheitsverletzungen. Darüber hinaus ermutigen Sie Ihre Benutzer, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter nutzen können, sich keine Sorgen machen müssen, sie sich zu merken und kein Sicherheitsrisiko schaffen, indem sie sie aufschreiben. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Akt, einem Nutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Seite enthält, die wie eine Seite aussieht, die sie täglich verwenden, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die darauf abzielt, Nutzer dazu zu bringen, ihren Benutzernamen und ihr Passwort auf der Seite einzugeben, damit es gestohlen werden kann und dann von einem Angreifer für böswillige Zwecke verwendet werden kann.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Daher sollten Sie Ihre Benutzer dazu erziehen, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht in dem Sinne von "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen" erhalten, sollten sie zur Seite direkt in einem neuen Tab gehen und versuchen, sich direkt einzuloggen, anstatt den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder per E-Mail kontaktieren, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich gegen Brute-Force-Angriffe auf Login-Seiten mit {{Glossary("rate_limit", "Rate-Limiting")}}, Sperrung des Kontos nach einer bestimmten Anzahl von erfolglosen Versuchen und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzer-Login-Sitzungen mit einzigartigen [Session-IDs](https://en.wikipedia.org/wiki/Session_ID) und loggen Sie Benutzer nach Zeiten von Inaktivität automatisch aus.

### Sensible Daten nicht in URL-Query-Strings einfügen

Als generelle Regel sollten Sie [sensible Daten nicht in URL-Query-Strings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da falls ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), er diese Informationen stehlen könnte. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxies und Archivierwerkzeugen wie dem [Internet Archive](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header detaillierter und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Fernhalten von sensiblen Daten in URLs durch `GET`-Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungspolitiken durchsetzen

Erwägen Sie die Verwendung von Webplattform-Features wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Feature- und Ressourcennutzungsregeln auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen zu schaffen.

CSP ermöglicht es Ihnen, eine Sicherheitssschicht hinzuzufügen, indem Sie, zum Beispiel, erlauben, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden dürfen. Dies hilft, bestimmte Arten von Angriffen zu erkennen und abzuwehren, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffe. Diese Angriffe umfassen eine Reihe von bösartigen Aktivitäten, einschließlich Datendiebstahl, Website-Verunstaltung und Verbreitung von Malware.

Die Berechtigungspolitik arbeitet auf ähnliche Weise, ist jedoch mehr darauf konzentriert, den Zugriff auf bestimmte "leistungsstarke Funktionen" zu erlauben oder zu blockieren ([wie bereits erwähnt](#sichere_kontexte_und_feature-berechtigungen)).

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Bedenken Sie jedoch, dass wenn Sie die Nutzung eines Features blockieren, auf das ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, könnte dies die Funktionalität Ihrer Seite beeinträchtigen.

### Datenintegrität gewährleisten

Fortführend vom vorhergehenden Abschnitt, wenn Sie Feature- und Ressourcennutzung auf Ihrer Seite erlauben, sollten Sie versuchen sicherzustellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource-Integrität** (SRI) ist ein Sicherheits-Feature, das es Browsern ermöglicht sicherzustellen, dass die Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation geliefert wurden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgerufene Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit anforderndem Code von dem gegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzugeben, dass die [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern beworben werden, nicht geändert und eingehalten werden müssen. Dieser Header ist eine Möglichkeit, das [MIME-Typen-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) abzuwählen oder, mit anderen Worten, um zu spezifizieren, dass die MIME-Typen absichtlich konfiguriert wurden.

### Formulareingaben sanitieren

Als allgemeine Regel gilt, vertrauen Sie nichts, was Nutzer in Formulare eingeben. Formulare online auszufüllen ist kompliziert und mühsam, und es ist leicht für Nutzer, falsche Daten einzugeben oder Daten im falschen Format einzugeben. Darüber hinaus sind bösartige Leute darin geschult, bestimmte Strings von ausführbarem Code in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie nicht sorgfältig mit solchen Eingaben umgehen, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL Injection](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel dafür, wie dies geschehen könnte.

Um sich dagegen zu schützen, sollten Sie eingegebene Daten in Ihren Formularen gründlich reinigen:

- Sie sollten eine clientseitige Validierung implementieren, um Nutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mit eingebauten HTML-Formular-Validierungsfunktionen tun oder Ihren eigenen Validierungscode schreiben. Siehe [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für mehr Informationen.
- Sie sollten Ausgabe-Encoding verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um Daten sicher genauso anzuzeigen, wie ein Nutzer sie eingetippt hat, und zu verhindern, dass sie als Code ausgeführt werden. Siehe [Ausgabe-Encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für mehr Informationen.

Sie können sich nicht allein auf die clientseitige Validierung für die Sicherheit verlassen — es sollte mit Server-seitiger Validierung kombiniert werden. Client-seitige Validierung verbessert das Benutzererlebnis, indem es sofortiges Validierungs-Feedback gibt, ohne auf eine Server-Rundreise warten zu müssen. Jedoch ist die Client-seitige Validierung leicht für eine bösartige Partei zu umgehen (zum Beispiel durch Ausschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes seriöse Server-seitige Framework bietet Funktionalitäten zur Validierung von Formulareinsendungen. Darüber hinaus ist eine häufige bewährte Praxis, alle Sonderzeichen zu maskieren, die Teil der ausführbaren Syntax sind, und somit jeden eingegebenen Code nicht mehr ausführbar zu machen, sodass er als Klartext behandelt wird.

### Schutz gegen Clickjacking

In einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Nutzer dazu gebracht, ein UI-Element zu klicken, das eine andere Aktion ausführt, als der Nutzer erwartet, was oft dazu führt, dass vertrauliche Informationen des Nutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko ist inhärent in eingebetteten Drittanbieter-Inhalten, daher stellen Sie sicher, dass Sie dem, was auf Ihrer Seite eingebettet wird, vertrauen. Zusätzlich sollten Sie sich bewusst sein, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#schutz_von_benutzeridentität_und_verwaltung_von_logins) lesen.

Die folgenden Funktionen können helfen, gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser in der Lage sein soll, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) darzustellen. Seiten können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive spezifiziert gültige Eltern, die eine Seite unter Verwendung von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Leitfäden zur Sicherheitsimplementierung

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie den besten Praktiken folgen, lesen Sie unsere Reihe von [Praktische Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen direkt im Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsprüfungen auf einer Website durch und liefert eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme. Diese Leitfäden erklären, wie Probleme gelöst werden können, die von den MDN Observatory-Tests aufgedeckt wurden: das Tool verweist auf den entsprechenden Leitfaden für jedes Problem, um Sie bei einer effektiven Lösung zu unterstützen. Interessanterweise verwendet die interne Entwicklerteams von Mozilla diese Anleitung beim Implementieren von Websites, um sicherzustellen, dass Sicherheitspraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Sicherheit von Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Sicherheits-Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet-Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
