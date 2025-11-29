---
title: Sicherheit im Web
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: 4bfe0fea3d3f9f911f934cd511442e73b87db080
---

Websites enthalten mehrere verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie zum Beispiel der auf öffentlichen Seiten angezeigte Text. Andere Informationen sind sensibel, wie beispielsweise Benutzernamen und Passwörter von Kunden sowie Bankinformationen oder interne Algorithmen und private Produktinformationen.

Sensible Informationen müssen geschützt werden, und das ist der Fokus der Web-Sicherheit. Wenn diese Informationen in die falschen Hände geraten würden, könnten sie genutzt werden, um:

- Unternehmen durch das Teilen ihrer Informationen mit Wettbewerbern einen wettbewerblichen Nachteil zu bescheren.
- Ihre Dienste zu deaktivieren oder zu kapern, was wiederum ernsthafte Probleme beim Betrieb verursachen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden und sie anfällig für Profilbildung, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste zu machen.

Moderne Browser haben bereits mehrere Funktionen, um die Sicherheit der Benutzer im Web zu schützen. Entwickler müssen jedoch auch Best Practices anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen zu verstehen, welche Schwachstellen Websites haben, und umfasst praktische Leitfäden, wie diese gesichert werden können.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind verschiedene, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und zu verstehen, wie sie miteinander in Beziehung stehen.

- **Sicherheit** ist der Akt des Schutzes privater Daten und Systeme vor unbefugtem Zugriff. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich auf den Akt, den Benutzern die Kontrolle über die Erhebung, Speicherung und Nutzung ihrer Daten zu geben und gleichzeitig sicherzustellen, dass diese nicht unverantwortlich genutzt werden. Zum Beispiel sollten Sie Ihre Nutzer darüber informieren, welche Daten Sie von ihnen erheben, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Nutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzrichtlinie zuzustimmen, auf ihre gespeicherten Daten zuzugreifen und sie bei Bedarf zu löschen.

Gute Sicherheit ist wesentlich für den Schutz der Privatsphäre. Sie könnten allen Ratschlägen in unserem [Leitfaden zur Privatsphäre im Web](/de/docs/Web/Privacy) folgen, aber selbst wenn Sie mit Integrität handeln und über eine robuste Datenschutzrichtlinie verfügen, ist dies wirkungslos, wenn Ihre Website nicht sicher ist und Angreifer trotzdem Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser folgen einem strengen Sicherheitsmodell, das eine starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server und den Datentransport durchsetzt. Dieser Abschnitt befasst sich mit den Funktionen, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Script, das von einem {{Glossary("origin", "Origin")}} geladen wird, mit einer Ressource von einem anderen Origin interagieren kann. Sie trägt dazu bei, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einem Origin keine Anfragen an andere Origins stellen. Das ist sinnvoll, denn Sie möchten nicht, dass Websites miteinander interferieren und unbefugten Zugang zu Daten erhalten.

Es kann jedoch Umstände geben, unter denen Sie diese Einschränkung lockern möchten; zum Beispiel, wenn Sie mehrere Websites haben, die miteinander interagieren, können Sie ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) erlaubt werden, einem auf HTTP-Header basierenden Mechanismus, der einem Server erlaubt anzugeben, welche Ursprünge (Domain, Schema oder Port) außer seinem eigenen die Erlaubnis haben sollten, Ressourcen zu laden.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und -servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten zu liefern (z.B. Bereitstellung einer angeforderten Ressource oder Detaildarstellung, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) sorgt für Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, da es verhindert, dass Dritte übertragene Daten abfangen und missbräuchlich verwenden können.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch schon der Fall, da man im Web ohne dieses Protokoll nicht viel tun kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die private und robuste Informationsübertragung zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, die einen wesentlichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben können.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header erlaubt einer Website zu spezifizieren, dass sie nur mit HTTPS zugänglich ist.
- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offener Rahmen, der entwickelt wurde, um Missbrauch von Zertifikaten zu verhindern und zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, häufig unabhängigen CT-Logs 'protokolliert'. Diese bieten nur anhängbare, kryptografisch gesicherte Aufzeichnungen der ausgestellten TLS-Zertifikate.
- [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte einbindet, die über {{Glossary("Plaintext", "Cleartext")}} HTTP abgerufen werden, wird als **Mixed Content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt und lassen den unverschlüsselten Inhalt für Lauschangriffe und Man-in-the-Middle-Angriffe zugänglich.

### Sichere Kontexte und Funktionsberechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf verschiedene Weisen. Diese "leistungsstarken Funktionen" umfassen das Generieren von Systembenachrichtigungen auf einer Website, die Verwendung der Webcam eines Benutzers, um auf einen Medienstrom zuzugreifen, das Manipulieren der System-GPU und die Verwendung von Webzahlungen. Wenn eine Website die APIs, die solche Funktionen steuern, ohne Einschränkung nutzen könnte, könnten böswillige Entwickler versuchen, folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Elementen zu stören.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/System zu überlasten, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS)-Angriffe zu erstellen.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung dieser Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für das hinreichendes Vertrauen besteht, dass der Inhalt sicher übermittelt wurde (über HTTPS/TLS). In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, eingeschränkt. Sichere Kontexte helfen auch, [Man-in-the-Middle-Angriffe](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) auf leistungsstarke Funktionen zu verhindern.

  Um eine Liste der Webplattform-Funktionen einzusehen, die nur in sicheren Kontexten verfügbar sind, siehe [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist durch ein System von Benutzerberechtigungen gesperrt: Benutzer müssen ausdrücklich zustimmen, um Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Benutzerberechtigungsanfragen erfolgen automatisch und Sie können den Status einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken eines Buttons genutzt werden, was bedeutet, dass sie von einem entsprechenden Ereignishandler aus aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Siehe [Funktionen, die von Benutzeraktivierung abhängig sind](/de/docs/Web/Security/Defenses/User_activation) für weitere Informationen.

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Web-Sicherheit, die sowohl auf der Server- als auch auf der Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf sicherheitsrelevante Überlegungen auf der Client-Seite. Eine nützliche Zusammenfassung der Sicherheitsproblematiken aus serverseitiger Perspektive finden Sie bei [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)-Lernmoduls).

### Client-seitige Daten verantwortungsvoll speichern

Verantwortungsvoller Umgang mit Daten bezieht sich hauptsächlich auf die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und darauf, bei der Speicherung und Weiterverarbeitung von Daten vorsichtig zu sein. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, was Angreifern leichtes Spiel gemacht hat, diese Tendenz auszunutzen. Daher haben Browser begonnen, zu beschränken, was Sie mit Cookies über Websites hinweg tun können, mit dem Ziel, den Zugriff auf sie in der Zukunft ganz zu entfernen.

Sie sollten sich darauf vorbereiten, dass Cookies über Websites hinweg entfernt werden, indem Sie die Menge der von Ihnen abhängigen Tracking-Aktivitäten begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

### Benutzeridentität schützen und Logins verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerhebung umfasst, insbesondere wenn die Daten sensibel sind wie Anmeldedaten, ergibt es Sinn, eine renommierte Lösung zu verwenden. Beispielsweise hat jedes respektable serverseitige Framework eingebaute Funktionen, um vor häufigen Schwachstellen zu schützen. Sie könnten auch überlegen, für Ihre Zwecke ein spezialisiertes Produkt zu verwenden, wie eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Sammlung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen Serverentwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Mehrfaktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie, eine dedizierte API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) zu verwenden, um den clientseitigen Einsatz der App zu optimieren.

Hier sind einige weitere Tipps, um sichere Logins zu bieten:

- Beim Sammeln von Benutzeranmeldedaten sollten Sie starke Passwörter erzwingen, damit die Kontodaten Ihrer Nutzer nicht leicht erraten werden können. Schwache Passwörter sind einer der Hauptursachen für Sicherheitsverletzungen. Zusätzlich sollten Sie Ihre Nutzer dazu ermutigen, einen Passwortmanager zu nutzen, damit sie komplexere Passwörter verwenden können, sich keine Sorgen um das Merken machen müssen und kein Sicherheitsrisiko eingegangen wird, indem sie aufgeschrieben werden. Siehe auch unseren Artikel über [Passwort-Authentifizierung](/de/docs/Web/Security/Authentication/Passwords).
- Sie sollten auch Ihre Nutzer über **Phishing** aufklären. Phishing ist der Akt, einem Nutzer eine Nachricht zu senden (z.B. eine E-Mail oder eine SMS), die einen Link zu einer Seite enthält, die wie eine Seite aussieht, die sie täglich nutzen, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die darauf abzielt, Nutzer zu täuschen, ihr Benutzername und Passwort auf der Seite einzugeben, damit sie gestohlen und dann von einem Angreifer für bösartige Zwecke verwendet werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt und schwer von einer echten Website zu unterscheiden sein. Sie sollten daher Ihre Nutzer dazu erziehen, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht in der Art von "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen" erhalten, sollten sie zur Seite in einem neuen Tab gehen und versuchen, sich dort direkt anzumelden, anstatt den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder Ihnen eine E-Mail senden, um die Nachricht, die sie erhalten haben, zu besprechen.

- Schützen Sie sich vor Brute-Force-Angriffen auf Anmeldeseiten mit {{Glossary("rate_limit", "Rate Limiting")}}, Kontosperrung nach einer bestimmten Anzahl von fehlgeschlagenen Versuchen und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzeranmeldesitzungen mit einzigartigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer nach Inaktivität automatisch ab.

### Keine sensiblen Daten in URL-Query-Strings einschließen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Query-Strings einschließen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), denn wenn eine Drittpartei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), könnten sie diese Informationen stehlen. Noch ernsthafter ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxys und Archivierungstools wie dem [Internetarchiv](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen bleiben könnten.

Verwenden Sie `POST`-Anfragen statt `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Policy: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt im Detail die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header und bietet Ratschläge zur Milderung dieser Risiken.

> [!NOTE]
> Das Abweichen von der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie, Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu verwenden, um auf Ihrer Website eine Reihe von Feature- und Ressourcennutzungsregeln durchzusetzen, die es schwerer machen, Schwachstellen einzuführen.

CSP erlaubt Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie beispielsweise erlauben, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden dürfen. Dies hilft, bestimmte Angriffstypen zu erkennen und zu mindern, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffe. Diese Angriffe beinhalten eine Reihe von böswilligen Aktivitäten, einschließlich Datendiebstahl, Website-Verunstaltung und Verbreitung von Malware.

Permissions Policy funktioniert ähnlich, nur dass sie sich mehr damit beschäftigt, den Zugriff auf bestimmte "leistungsstarke Funktionen" ([wie zuvor erwähnt](#sichere_kontexte_und_funktionsberechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viel Drittanbieter-Code auf Ihrer Website verwenden. Denken Sie jedoch daran, dass, wenn Sie die Nutzung einer Funktion blockieren, von der ein Drittanbieter-Script abhängt, um zu funktionieren, Sie möglicherweise die Funktionalität Ihrer Website beeinträchtigen.

### Datenintegrität aufrechterhalten

Im Anschluss an den vorherigen Abschnitt sollten Sie bei der Erlaubnis von Feature- und Ressourcennutzung auf Ihrer Website versuchen sicherzustellen, dass Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, ob die von ihnen abgerufenen Ressourcen (z. B. von einem {{Glossary("CDN", "CDN")}}) ohne unerwartete Manipulation bereitgestellt werden. Sie funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgerufene Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwortheader gibt an, ob die Antwort mit anfordernem Code vom angegebenen {{Glossary("origin", "Origin")}} geteilt werden darf.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwortheader ist ein Indikator, der vom Server verwendet wird, um anzugeben, dass die [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), die im {{HTTPHeader("Content-Type")}} Header angegeben sind, nicht geändert und befolgt werden müssen. Dieser Header ist eine Möglichkeit, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu verhindern oder, mit anderen Worten, zu spezifizieren, dass die MIME-Typen absichtlich konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel sollten Sie nichts vertrauen, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist leicht für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Zudem sind böswillige Personen geschickt darin, bestimmte Strings ausführbaren Codes in Formularfelder einzugeben (z. B. SQL oder JavaScript). Wenn Sie nicht vorsichtig mit der Verarbeitung solcher Eingaben sind, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies geschehen könnte.

Um sich davor zu schützen, sollten Sie die in Ihren Formularen eingegebenen Daten gründlich bereinigen:

- Sie sollten clientseitige Validierung implementieren, um Benutzer darüber zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mit den integrierten HTML-Formularvalidierungsfunktionen erreichen, oder Sie können Ihren eigenen Validierungscode schreiben. Siehe [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Informationen.
- Sie sollten eine Ausgabekodierung verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um die Daten genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu verhindern, dass sie als Code ausgeführt werden. Siehe [Ausgabekodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für weitere Informationen.

Sie können sich nicht allein auf die clientseitige Validierung in Bezug auf Sicherheit verlassen – sie sollte mit serverseitiger Validierung kombiniert werden. Die clientseitige Validierung verbessert das Benutzererlebnis, indem sie eine sofortige Validierungsrückmeldung bietet, ohne auf eine Serverrunde warten zu müssen. Allerdings ist die clientseitige Validierung für eine böswillige Partei leicht zu umgehen (zum Beispiel durch Deaktivierung von JavaScript im Browser, um JavaScript-basierte Validierungen zu umgehen).

Jedes angesehene serverseitige Framework wird Funktionen zur Validierung von Formularübermittlungen bieten. Darüber hinaus besteht eine bewährte Praxis darin, besondere Zeichen zu escapen, die Teil der auszuführenden Syntax sind, und damit jeden eingegebenen Code nicht mehr ausführbar zu machen und als Klartext zu behandeln.

### Schutz gegen Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird der Benutzer dazu gebracht, auf ein UI-Element zu klicken, das eine andere Aktion ausführt, als der Benutzer erwartet, was oft dazu führt, dass vertrauliche Informationen des Benutzers an eine böswillige Drittpartei weitergegeben werden. Dieses Risiko besteht bei eingebetteten Drittinhalten, daher sollten Sie sicherstellen, dass Sie dem, was in Ihre Seite eingebettet wird, vertrauen. Darüber hinaus sollten Sie sich bewusst sein, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzeridentität_schützen_und_logins_verwalten) mehr über Phishing lesen.

Die folgenden Funktionen können helfen, Clickjacking zu verhindern:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwortheader kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern darf. Seiten können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Sites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Der HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive spezifiziert gültige Eltern, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Sicherheitsimplementierungs-Leitfäden

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und um sicherzustellen, dass Sie Best Practices befolgen, siehe unsere Reihe von [Praktischen Sicherheitsimplementierungs-Leitfäden](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory) Tool. Observatory führt Sicherheitsaudits auf einer Website durch und stellt eine Note und Punktzahl zusammen mit Empfehlungen zur Behebung der erkannten Sicherheitsprobleme bereit. Diese Leitfäden erklären, wie man die durch die MDN Observatory-Tests aufgedeckten Probleme behebt: Das Tool verlinkt zu dem entsprechenden Leitfaden für jedes Problem und hilft Ihnen, zu einer effektiven Lösung zu gelangen. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitung bei der Implementierung von Websites, um sicherzustellen, dass die Sicherheitsbestenpraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Learn: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)
