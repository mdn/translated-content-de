---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie beispielsweise der Inhalt auf öffentlichen Seiten. Andere sind sensibel, wie Benutzernamen, Passwörter, Bankinformationen von Kunden oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und das ist der Schwerpunkt der Websicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie verwendet werden, um:

- Unternehmen einen Wettbewerbsnachteil zu verschaffen, indem ihre Informationen an Wettbewerber weitergegeben werden.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut ernsthafte Probleme für ihren Betrieb verursachen kann.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profilbildung, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Benutzer im Web zu schützen, aber auch Entwickler müssen bewährte Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen sollen, die Schwachstellen von Websites zu verstehen, und praktischen Leitfaden, wie Sie sie sichern können.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und zu verstehen, wie sie zueinander in Beziehung stehen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dazu gehören sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern).

- **Privatsphäre** bezieht sich auf den Akt, den Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sicherzustellen, dass sie nicht unverantwortlich genutzt werden. Zum Beispiel sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien diese geteilt werden und wie sie verwendet werden. Benutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzerklärung zuzustimmen, auf ihre von Ihnen gespeicherten Daten zuzugreifen und sie bei Bedarf zu löschen.

Gute Sicherheit ist unerlässlich für gute Privatsphäre. Sie könnten alle Ratschläge in unserem [Leitfaden zur Privatsphäre im Web](/de/docs/Web/Privacy) befolgen, aber mit Integrität handeln und eine robuste Datenschutzrichtlinie zu haben, ist sinnlos, wenn Ihre Website nicht sicher ist und Angreifer trotzdem Daten stehlen können.

## Von Browsern bereitgestellte Sicherheitsfunktionen

Webbrowser folgen einem strikten Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server und den Datentransport erzwingt. Dieser Abschnitt behandelt die Funktionen, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

[Same-origin policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem [Origin](/de/docs/Glossary/origin) geladen wird, mit einer Ressource von einem anderen Origin interagieren kann. Sie hilft, potenziell bösartige Dokumente zu isolieren und reduziert mögliche Angriffsvektoren.

Im Allgemeinen können Dokumente von einem Origin keine Anfragen an andere Origins stellen. Dies macht Sinn, da Sie nicht möchten, dass Websites sich gegenseitig stören und unbefugten Zugriff auf Daten erhalten.

Es kann jedoch sinnvoll sein, diese Einschränkung unter bestimmten Umständen zu lockern; etwa wenn Sie mehrere Websites haben, die miteinander interagieren und sich gegenseitig Ressourcen anfordern dürfen, mithilfe von [`fetch()`](/de/docs/Web/API/Window/fetch). Dies kann mittels [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) erlaubt werden, einem Mechanismus, der auf HTTP-Headern basiert und einem Server ermöglicht, alle anderen als eigenen Origins (Domäne, Schema oder Port), von denen ein Browser Ressourcen laden darf, anzugeben.

### HTTP-Modell für Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und -servern genutzt, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (z. B. eine angeforderte Ressource oder eine Begründung, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem sie Daten während des Transports über das Netzwerk verschlüsselt und ist die Technologie hinter dem [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll. TLS ist gut für die Privatsphäre, weil es Dritten verhindert, übertragene Daten abzufangen und sie böswillig zu nutzen.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch bereits der Fall, da man im Web ohne dieses Protokoll nicht viel machen kann.

Zugehörige Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, um zwei vernetzten Anwendungen oder Geräten den privaten und robusten Austausch von Informationen zu ermöglichen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter auswählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header ermöglicht einer Website zu spezifizieren, dass sie nur über HTTPS erreichbar sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das entworfen wurde, um vor fehlerhafter Zertifikatsausstellung zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Logs 'geloggt'. Diese bieten ein nur-anhängbares, kryptographisch sichergestelltes Aufzeichnung von ausgestellten TLS-Zertifikaten.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte einbezieht, die über [Klartext](/de/docs/Glossary/Plaintext) HTTP geladen werden, wird als Seite mit **gemischten Inhalten** bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, was die unverschlüsselten Inhalte für Lauschangriffe und Man-in-the-Middle-Angreifer zugänglich macht.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der [Signierung](/de/docs/Glossary/Signature/Security) eines [digitalen Zertifikats](/de/docs/Glossary/digital_certificate) verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekannt dafür, schwach zu sein und sollten, wenn möglich, vermieden werden.

### Sichere Kontexte und Berechtigungen für Funktionen

Browser kontrollieren die Nutzung von „leistungsstarken Funktionen“ auf verschiedene Weise. Diese „leistungsstarken Funktionen“ umfassen das Generieren von Systembenachrichtigungen auf einer Website, die Verwendung der Webcam eines Benutzers, um auf einen Mediastream zuzugreifen, das Manipulieren des systemeigenen GPUs und die Verwendung von Web-Zahlungen. Könnte eine Seite solche Features uneingeschränkt verwenden, könnten böswillige Entwickler versuchen, Folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Features zu belästigen.
- Unbemerkt die Webcam einzuschalten, um den Benutzer auszuspionieren.
- Den Browser/das System zu überlasten, um [Denial of Service](/de/docs/Glossary/denial_of_service) (DoS)-Angriffe zu verursachen.
- Daten oder Geld zu stehlen.

Diese „leistungsstarken Funktionen“ werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem eine angemessene Sicherheit besteht, dass die Inhalte sicher ausgeliefert wurden (über HTTPS/TLS). In einem sicheren Kontext ist das Potenzial für Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte tragen auch dazu bei, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke Funktionen zuzugreifen.

  Eine Liste der web Plattformfunktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist durch ein System von Benutzerberechtigungen eingeschränkt: Benutzer müssen ausdrücklich zustimmen, um Zugang zu solchen Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanfragen erfolgen automatisch, und Sie können den Stand einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Einige andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken eines Buttons verwendet werden, was bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird **transiente Aktivierung** genannt. Weitere Informationen finden Sie unter [Features gated by user activation](/de/docs/Web/Security/User_activation).

## Hochrangige Sicherheitsüberlegungen

Es gibt viele Aspekte der Websicherheit, die sowohl auf Server- als auch auf Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Client-seitige Sicherheitsaspekte. Eine nützliche Zusammenfassung der Sicherheit aus Server-Sicht, die auch Beschreibungen häufiger Angriffe enthält, finden Sie unter [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) (Teil unseres [Lehrmoduls Server-seitige Website-Programmierung](/de/docs/Learn/Server-side)).

### Speichern Sie Client-seitige Daten verantwortungsvoll

Der verantwortungsvolle Umgang mit Daten betrifft hauptsächlich die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und die Vorsicht bei den Daten, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und Angreifer konnten diese Tendenz leicht ausnutzen. Daher haben Browser damit begonnen, die Möglichkeiten zur Nutzung von Cross-Site-Cookies einzuschränken, mit dem Ziel, den Zugriff auf sie in Zukunft ganz zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Menge der Tracking-Aktivitäten, auf die Sie sich verlassen, reduzieren und/oder die gewünschten Informationen auf andere Weise persistent machen. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).

### Schützen Sie die Benutzeridentität und verwalten Sie Logins

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, besonders wenn die Daten sensibel sind wie Anmeldedaten, macht es Sinn, eine seriöse Lösung zu verwenden. Beispielsweise hat jedes respektable serverseitige Framework eingebaute Funktionen, um vor gängigen Schwachstellen zu schützen. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, beispielsweise eine Identitätslösung oder einen sicheren Online-Umfragendienst.

Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Beauftragen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA), um einen besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige Anwendung zu vereinfachen.

Hier sind einige weitere Tipps für sichere Logins:

- Wenn Sie Anmeldeinformationen von Benutzern sammeln, erzwingen Sie starke Passwörter, damit die Kontodetails Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer zusätzlich, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter verwenden können, sich keine Sorgen machen müssen, sie sich zu merken, und kein Sicherheitsrisiko durch das Aufschreiben der Passwörter entsteht. Siehe auch unseren Artikel zu [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Akt des Versendens einer Nachricht an einen Benutzer (z. B. eine E-Mail oder eine SMS), die einen Link zu einer Website enthält, die wie eine von ihnen täglich genutzte Website aussieht, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die dazu gedacht ist, den Benutzer dazu zu bringen, seinen Benutzernamen und sein Passwort auf der Website einzugeben, damit diese Informationen gestohlen und dann von einem Angreifer für böswillige Zwecke genutzt werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt sein und schwer von einer echten Website zu unterscheiden. Sie sollten daher Ihre Benutzer dazu bringen, nicht blindlings Links in E-Mails und SMS zu vertrauen. Wenn sie eine Nachricht erhalten, die so etwas sagt wie "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen", sollten sie direkt in einem neuen Tab zur Seite gehen und versuchen, sich direkt einzuloggen, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder Ihnen eine E-Mail senden, um die Nachricht zu besprechen, die sie erhalten haben.

- Schützen Sie Login-Seiten vor Brute-Force-Angriffen durch [Rate Limiting](/de/docs/Glossary/rate_limit), Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.m.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer nach Inaktivitätszeiten automatisch ab.

### Sensible Daten nicht in URL-Abfragezeichenfolgen einfügen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Abfragezeichenfolgen einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da, wenn eine dritte Partei die URL abfängt (beispielsweise über den {{httpheader("Referer")}} HTTP-Header), diese die Informationen stehlen könnte. Noch gravierender ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxys und Archivierungstools wie dem [Internet Archive](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Politik: Datenschutz- und Sicherheitsaspekte](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt detaillierter die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header und gibt Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden des Sendens sensibler Daten in URLs über `GET`-Anfragen kann auch dabei helfen, sich gegen [Cross-Site-Request-Forgery](/de/docs/Glossary/CSRF) und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Verwendung von Webplattformfunktionen wie [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um ein Set von Funktionen- und Ressourcenverwendungsregeln auf Ihrer Website durchzusetzen, das es erschwert, Schwachstellen einzuführen.

CSP ermöglicht es, eine zusätzliche Sicherheitsschicht hinzuzufügen, indem beispielsweise nur Bilder oder Skripte von bestimmten vertrauenswürdigen Ursprüngen geladen werden dürfen. Dies hilft, bestimmte Angriffsarten wie Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) und Dateninjektionsangriffe zu erkennen und zu mildern. Diese Angriffe beinhalten eine Reihe bösartiger Aktivitäten, einschließlich Datendiebstahl, Webseitenverunstaltung und Malware-Verteilung.

Permissions Policy funktioniert ähnlich, ist jedoch mehr darauf ausgerichtet, den Zugriff auf spezifische "leistungsstarke Funktionen" ([wie zuvor erwähnt](#sichere_kontexte_und_berechtigungen_für_funktionen)) zuzulassen oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass das Blockieren der Nutzung eines Features, auf das ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, möglicherweise die Funktionalität Ihrer Website bricht.

### Erhalten Sie die Datenintegrität

Anknüpfend an den vorherigen Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Website zulassen, sicherstellen, dass diese Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es den Browsern ermöglicht zu überprüfen, ob die Ressourcen, die sie abrufen (beispielsweise von einem [CDN](/de/docs/Glossary/CDN)), ohne unerwartete Manipulation bereitgestellt werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, der mit der abgerufenen Ressource übereinstimmen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`**-Response-Header gibt an, ob die Antwort mit anfragendem Code vom angegebenen [Origin](/de/docs/Glossary/origin) geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`**-Response-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern angegeben sind, nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist eine Möglichkeit, sich von [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) abzumelden oder, in anderen Worten, anzugeben, dass die MIME-Typen bewusst konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel gilt: Vertrauen Sie nicht auf das, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen geschickt darin, spezifische Zeichenfolgen ausführbaren Codes in die Formularfelder einzugeben (beispielsweise SQL oder JavaScript). Wenn Sie mit solchen Eingaben nicht vorsichtig umgehen, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Weitere Informationen hierzu finden Sie unter [SQL-Injection](/de/docs/Learn/Server-side/First_steps/Website_security#sql_injection).

Um dies zu verhindern, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich reinigen:

- Implementieren Sie eine Client-seitige Validierung, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mithilfe der integrierten HTML-Formularvalidierungsfunktionen tun oder Ihre eigene Validierungscode schreiben. Weitere Informationen finden Sie unter [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).
- Verwenden Sie Ausgabe-Codierung, wenn Sie Benutzereingaben in einer Anwendungsoberfläche anzeigen, um Daten sicher genau so anzuzeigen, wie sie vom Benutzer eingegeben wurden, und zu verhindern, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Output encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Allein auf die Client-seitige Validierung können Sie sich in Bezug auf die Sicherheit nicht verlassen – sie sollte mit einer serverseitigen Validierung kombiniert werden. Die Client-seitige Validierung verbessert das Benutzererlebnis, indem sie sofortiges Validierungsfeedback gibt, ohne auf eine Antwort vom Server warten zu müssen. Die Client-seitige Validierung kann jedoch leicht von einer böswilligen Partei umgangen werden (zum Beispiel durch Ausschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes respektable serverseitige Framework bietet Funktionalität zur Validierung von Formulareingaben. Außerdem ist eine verbreitete Best Practice, alle Sonderzeichen, die Teil ausführbarer Syntax sind, zu escapen, damit der eingegebene Code nicht mehr ausführbar ist und als normaler Text behandelt wird.

### Schutz gegen Clickjacking

Bei einem [Clickjacking](/de/docs/Glossary/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, auf ein UI-Element zu klicken, das eine andere Aktion ausführt als erwartet, was oft dazu führt, dass die vertraulichen Informationen des Benutzers an einen bösartigen Dritten weitergegeben werden. Dieses Risiko ist bei eingebetteten Inhalten von Drittanbietern inhärent, stellen Sie also sicher, dass Sie dem, was in Ihre Website eingebettet wird, vertrauen. Seien Sie sich auch bewusst, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Mehr zu Phishing finden Sie im vorherigen Abschnitt [Schützen Sie die Benutzeridentität und verwalten Sie Logins](#schützen_sie_die_benutzeridentität_und_verwalten_sie_logins).

Die folgenden Funktionen können helfen, Clickjacking zu verhindern:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Response-Header kann verwendet werden, um anzuzeigen, ob ein Browser erlaubt sein sollte, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) darzustellen. Webseiten können dies verwenden, um [Clickjacking](/de/docs/Glossary/Clickjacking)-Angriffe zu verhindern, indem sichergestellt wird, dass ihre Inhalte nicht in andere Websites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Leitfäden zur Sicherheitsimplementierung

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie Best Practices befolgen, sehen Sie sich unsere [praktischen Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsaudits auf einer Website durch und gibt eine Bewertung und Punktzahl zusammen mit Empfehlungen zur Behebung der festgestellten Sicherheitsprobleme. Diese Leitfäden erklären, wie man die durch die MDN Observatory-Tests aufgedeckten Probleme löst: das Tool verweist auf den entsprechenden Leitfaden für jedes Problem, um Sie zu einer effektiven Lösung zu führen. Interessanterweise verwenden die internen Entwicklerteams von Mozilla diese Anleitung bei der Implementierung von Websites, um sicherzustellen, dass Sicherheits-Best-Practices angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet series](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
