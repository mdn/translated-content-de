---
title: Sicherheit im Netz
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie zum Beispiel der Text, der auf den öffentlichen Seiten gezeigt wird. Andere Informationen sind sensibel, wie beispielsweise Benutzernamen, Passwörter und Bankinformationen von Kunden oder interne Algorithmen und private Produktinformationen.

Sensible Informationen müssen geschützt werden, und das ist der Schwerpunkt der Web-Sicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie verwendet werden, um:

- Unternehmen einen Wettbewerbsnachteil zu verschaffen, indem ihre Informationen mit Wettbewerbern geteilt werden.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut ernsthafte Probleme bei ihrem Betrieb verursachen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch diese anfällig für Profiling, gezielte Angriffe, Datenverluste, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Internet zu schützen, aber Entwickler müssen auch Best Practices anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Websiteschwachstellen zu verstehen, und praktischer Anleitungen, wie Sie sie sichern können.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind getrennte, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und wie sie zueinander stehen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern).

- **Privatsphäre** bezieht sich auf den Akt, den Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während gleichzeitig sichergestellt wird, dass sie nicht unverantwortlich genutzt werden. Beispielsweise sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Die Benutzer müssen die Möglichkeit haben, Ihrer Datenschutzrichtlinie zuzustimmen, auf die von Ihnen gespeicherten Daten zuzugreifen und sie bei Bedarf zu löschen.

Eine gute Sicherheit ist unerlässlich für eine gute Privatsphäre. Sie könnten allen Rat in unserem [Leitfaden zur Privatsphäre im Netz](/de/docs/Web/Privacy) befolgen, aber Integrität zeigen und eine robuste Datenschutzrichtlinie haben, ist sinnlos, wenn Ihre Seite nicht sicher ist und Angreifer die Daten einfach stehlen können.

## Sicherheitsfunktionen von Browsern

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server sowie den Datentransport erzwingt. Dieser Abschnitt behandelt die Funktionen, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Origin")}} geladen wird, mit einer Ressource von einem anderen Origin interagieren kann. Sie hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einem Origin keine Anfragen an andere Origins stellen. Dies ist sinnvoll, da Sie nicht möchten, dass Seiten sich gegenseitig stören und auf unautorisierte Daten zugreifen können.

In einigen Fällen möchten Sie jedoch diese Einschränkung lockern; beispielsweise, wenn Sie mehrere Websites haben, die miteinander interagieren, können Sie ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) ermöglicht werden, ein auf HTTP-Headern basierender Mechanismus, der einem Server erlaubt, andere Origins (Domain, Schema oder Port) als seine eigenen anzugeben, von denen aus ein Browser Ressourcen laden darf.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource bereitzustellen oder zu erläutern, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports im Netzwerk verschlüsselt und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, weil es Dritte daran hindert, übermittelte Daten abzufangen und böswillig zu nutzen.

Alle Browser bewegen sich in Richtung eines Standards, der HTTPS standardmäßig erfordert; dies ist praktisch schon der Fall, denn ohne dieses Protokoll kann man nicht viel im Web tun.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die private und robuste Informationsübermittlung zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was einen erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header ermöglicht es einer Website festzulegen, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offener Rahmen, der dazu entwickelt wurde, Zertifikatsmissbrauch vorzubeugen und zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, meist unabhängigen CT-Logs 'protokolliert'. Diese bieten kryptographisch gesicherte, nur anhängbare Aufzeichnungen ausgestellter TLS-Zertifikate.
- [Mixed content](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte abruft und dabei {{Glossary("Plaintext", "Klartext")}} HTTP verwendet, wird als **mixed content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, wodurch unverschlüsselte Inhalte für Abhörer und Man-in-the-Middle-Angreifer zugänglich sind.

### Sichere Kontexte und Feature-Berechtigungen

Browser kontrollieren die Nutzung "mächtiger Funktionen" auf verschiedene Weise. Diese "mächtigen Funktionen" beinhalten das Erzeugen von Systembenachrichtigungen auf einer Website, das Verwenden der Webcam eines Nutzers zur Erlangung eines Medienstreams, die Manipulation der System-GPU und das Nutzen von Web-Zahlungen. Wenn eine Seite die APIs, die solche Funktionen steuern, uneingeschränkt nutzen könnte, könnten böswillige Entwickler versuchen, Folgendes zu tun:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen stören.
- Ihre Webcam ohne Vorwarnung einschalten, um sie auszuspähen.
- Ihren Browser/Ihr System blockieren, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS)-Angriffe zu fahren.
- Daten oder Geld stehlen.

Diese "mächtigen Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den es verlässliche Anzeichen dafür gibt, dass der Inhalt sicher bereitgestellt wurde (via HTTPS/TLS). In einem sicheren Kontext ist das Potenzial zur Kommunikation mit Kontexten, die **nicht** sicher sind, eingeschränkt. Sichere Kontexte helfen auch, [Man-in-the-Middle-Angreifern](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) den Zugriff auf mächtige Funktionen zu verhindern.

  Eine Liste der nur in sicheren Kontexten verfügbaren Webplattform-Funktionen finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist hinter einem System von Benutzerberechtigungen eingeschränkt: Benutzer müssen ausdrücklich zustimmen, diesen Funktionen Zugriff zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanfragen geschehen automatisch, und Sie können den Status einer API-Berechtigung mit der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Einige andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion, wie das Klicken auf eine Schaltfläche, verwendet werden. Das bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Siehe [Features gated by user activation](/de/docs/Web/Security/Defenses/User_activation) für mehr Informationen.

## Hochwertige Sicherheitsüberlegungen

Es gibt viele Aspekte der Web-Sicherheit, die auf der Server- und der Client-Seite bedacht werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Sicherheitsüberlegungen auf der Client-Seite. Eine nützliche Zusammenfassung der Sicherheit aus einer Server-Seiten-Perspektive, die auch Beschreibungen gängiger Angriffe enthält, auf die man achten sollte, finden Sie unter [Website security](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Server-side website programming](/de/docs/Learn_web_development/Extensions/Server-side)-Lernmoduls).

### Klientseitige Daten verantwortungsvoll speichern

Der verantwortungsvolle Umgang mit Daten bezieht sich weitgehend darauf, den Einsatz von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu reduzieren und darauf, vorsichtig mit den Daten umzugehen, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und es war einfach für Angreifer, diese Tendenz auszunutzen. Deshalb haben Browser begonnen, zu begrenzen, was Sie mit Cross-Site-Cookies tun können, und das Ziel, den Zugriff darauf insgesamt zu entfernen.

Sie sollten sich auf die Abschaffung von Cross-Site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, einschränken und/oder indem Sie die Persistenz der gewünschten Informationen auf andere Weise implementieren. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).

### Benutzeridentität schützen und Anmeldungen verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung umfasst, insbesondere wenn es sich um sensible Daten wie Login-Anmeldeinformationen handelt, ist es sinnvoll, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework eingebaute Funktionen zum Schutz vor gängigen Schwachstellen haben. Sie könnten auch in Betracht ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identitätsanbieterlösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Sammlung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen Server-Seiten-Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "multi-factor authentication")}} (MFA) für besseren Schutz. Erwägen Sie den Einsatz einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die Client-Seite der App zu optimieren.

Hier sind einige weitere Tipps zum Bereitstellen sicherer Anmeldungen:

- Wenn Sie Benutzer-Login-Informationen sammeln, erzwingen Sie starke Passwörter, damit die Kontodetails Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen von Sicherheitsverletzungen. Darüber hinaus ermutigen Sie Ihre Nutzer zur Verwendung eines Passwort-Managers, damit sie komplexere Passwörter verwenden können, sich keine Sorgen um das Merken machen müssen und kein Sicherheitsrisiko durch das Aufschreiben der Passwörter besteht. Siehe auch unseren Artikel zur [Passwort-Authentifizierung](/de/docs/Web/Security/Authentication/Passwords).
- Sie sollten auch Ihre Benutzer über **Phishing** aufklären. Phishing ist der Akt, einem Benutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder SMS), die einen Link zu einer Seite enthält, die wie eine bekannte Seite aussieht, es aber nicht ist. Der Link geht mit einer Nachricht einher, die darauf abzielt, Benutzer dazu zu bringen, ihren Benutzernamen und ihr Passwort einzugeben, um diese zu stehlen und dann von einem Angreifer böswillig zu nutzen.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt sein und sind schwer von einer echten Website zu unterscheiden. Deshalb sollten Sie Ihre Benutzer darüber aufklären, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht mit dem Inhalt "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen" erhalten, sollten sie direkt auf der Seite in einem neuen Tab einloggen, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder Ihnen eine E-Mail senden, um die erhaltene Nachricht zu besprechen.

- Schützen Sie gegen Brute-Force-Angriffe auf Login-Seiten mit {{Glossary("rate_limit", "Ratenauslastung")}}, Kontensperrungen nach einer bestimmten Anzahl fehlgeschlagener Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzer-Login-Sitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer nach Inaktivitätsperioden automatisch ab.

### Keine sensiblen Daten in URL-Abfragezeichenfolgen aufnehmen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Abfragezeichenfolgen aufnehmen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da ein Dritter die URL abfangen könnte (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header) und diese Informationen stehlen könnte. Noch ernsthafter ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxies und Archivierungstools wie dem [Internet Archive](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer header policy: Privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header und bietet Ratschläge zur Risikominderung.

> [!NOTE]
> Das Vermeiden der Übertragung sensibler Daten in URLs via `GET`-Anfragen kann ebenfalls helfen, sich gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Nutzung von Webplattform-Features wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Regeln zur Nutzung von Funktionen und Ressourcen auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine zusätzliche Sicherheitsebene hinzuzufügen, indem Sie zum Beispiel erlauben, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Origins geladen werden. Dies hilft, bestimmte Arten von Angriffen zu erkennen und abzumildern, darunter Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateneinspeisungsangriffe. Diese Angriffe umfassen eine Reihe bösartiger Aktivitäten, einschließlich Datendiebstahl, Seitenverunstaltung und Verbreitung von Malware.

Die Berechtigungspolitik funktioniert auf ähnliche Weise, konzentriert sich jedoch eher darauf, den Zugriff auf bestimmte "mächtige Funktionen" ([wie zuvor erwähnt](#sichere_kontexte_und_feature-berechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere, wenn Sie viel Drittanbieter-Code auf Ihrer Website verwenden. Beachten Sie jedoch, dass Sie, wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist, die Funktionalität Ihrer Seite beeinträchtigen könnten.

### Datenintegrität aufrechterhalten

Anknüpfend an den vorherigen Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Seite erlauben, sicherstellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Integrität von Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist ein Sicherheitsfeature, das Browsern ermöglicht zu verifizieren, dass Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation bereitgestellt werden. Es funktioniert, indem Sie ein kryptografisches Hash bereitstellen, das einer abgerufenen Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`**-Antwortheader gibt an, ob die Antwort mit anfragendem Code vom angegebenen {{Glossary("origin", "Origin")}} geteilt werden darf.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`**-Antwortheader ist ein Marker, der vom Server verwendet wird, um anzugeben, dass die beworbenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) in den {{HTTPHeader("Content-Type")}}-Headern nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist eine Möglichkeit, sich von der [MIME-Typ-Erkennung](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) abzumelden, oder anders gesagt, die MIME-Typen sind absichtlich konfiguriert.

### Formulareingaben bereinigen

Im Allgemeinen sollten Sie nichts vertrauen, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen geschickt darin, spezielle Zeichenfolgen ausführbaren Codes in Formulareingabefelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie nicht darauf achten, solche Eingaben zu handhaben, könnten sie entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Siehe [SQL injection](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies geschehen könnte.

Um sich dagegen zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten eine clientseitige Validierung implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mit integrierten HTML-Formularvalidierungsfunktionen tun oder Ihren eigenen Validierungscode schreiben. Siehe [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für mehr Informationen.
- Sie sollten eine Ausgabekodierung verwenden, wenn Sie Benutzereingaben in einer Anwendungsoberfläche anzeigen, um Daten genau so sicher anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu verhindern, dass sie als Code ausgeführt werden. Siehe [Ausgabekodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für mehr Informationen.

Sie können sich nicht alleine auf die clientseitige Validierung für die Sicherheit verlassen – sie sollte mit serverseitiger Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem sie sofortige Validierungs-Feedbacks bereitstellt, ohne auf eine Runde zum Server warten zu müssen. Clientseitige Validierung ist jedoch für eine böswillige Person leicht zu umgehen (zum Beispiel durch Deaktivieren von JavaScript im Browser, um JS-basierte Validierung zu umgehen).

Jedes seriöse serverseitige Framework bietet Funktionalität zur Validierung von Formulareinsendungen. Darüber hinaus ist eine gängige Best Practice, alle speziellen Zeichen zu maskieren, die Teil einer ausführbaren Syntax sind, wodurch sämtlicher eingegebener Code nicht mehr ausführbar wird und als reiner Text behandelt wird.

### Schutz vor Clickjacking

In einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, ein UI-Element anzuklicken, das eine andere Aktion als die erwartete ausführt, was oft zur Folge hat, dass die vertraulichen Informationen des Benutzers an eine böswillige dritte Partei weitergegeben werden. Dieses Risiko geht von eingebetteten Drittanbieter-Inhalten aus, daher stellen Sie sicher, dass Sie dem vertrauen, was in Ihre Seite eingebettet wird. Beachten Sie zudem, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Anmeldungen verwalten](#benutzeridentität_schützen_und_anmeldungen_verwalten) lesen.

Die folgenden Funktionen können dazu beitragen, sich vor Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwortheader kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern darf. Sites können dies verwenden, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht auf anderen Sites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive spezifiziert gültige Eltern, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Sicherheitsanleitungen

Für umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites und um sicherzustellen, dass Sie Best Practices befolgen, siehe unsere [Praktische Sicherheitsanleitungen](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Anleitungen stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsaudits auf einer Website durch und gibt eine Note und Punktezahl sowie Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme ab. Diese Anleitungen erklären, wie man die vom MDN Observatory-Tests aufgedeckten Probleme behebt: das Tool verlinkt für jedes Problem auf die relevante Anleitung und hilft Ihnen, eine effektive Lösung zu finden. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Leitlinien bei der Implementierung von Websites, um sicherzustellen, dass die Sicherheitsbesten-Praktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Netz](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet-Serie](https://cheatsheetseries.owasp.org/index.html)
