---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie zum Beispiel der Text, der auf öffentlichen Seiten angezeigt wird. Andere Informationen sind sensibel, wie zum Beispiel Benutzernamen, Passwörter und Bankinformationen von Kunden oder interne Algorithmen und private Produktinformationen.

Sensibile Informationen müssen geschützt werden, und das ist der Fokus der Websicherheit. Wenn diese Informationen in die falschen Hände geraten würden, könnten sie verwendet werden, um:

- Unternehmen durch die Weitergabe ihrer Informationen an Wettbewerber einen wettbewerblichen Nachteil zu verschaffen.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut ernste Probleme mit ihrem Betrieb verursacht.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profiling, zielgerichtete Angriffe, Datenverluste, Identitätsdiebstahl oder sogar finanziellen Verlust werden.

Moderne Browser bieten bereits mehrere Funktionen, um die Sicherheit der Benutzer im Web zu schützen, aber Entwickler müssen auch Best Practices befolgen und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Sogar einfache Fehler im Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen oder unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Schwachstellen von Websites zu verstehen, sowie praktischer Leitfäden zur Sicherung dieser.

## Beziehungen zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen den beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** bedeutet, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (intern) als auch Benutzerdaten und Partnerdaten (extern).

- **Privatsphäre** bezieht sich darauf, den Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sicherzustellen, dass sie nicht unverantwortlich verwendet werden. Beispielsweise sollten Sie Ihren Benutzern mitteilen, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Benutzer müssen die Möglichkeit haben, Ihrer Datenschutzrichtlinie zuzustimmen, Zugang zu ihren gespeicherten Daten zu haben und diese bei Bedarf zu löschen.

Gute Sicherheit ist entscheidend für gute Privatsphäre. Sie könnten alle Ratschläge in unserem [Leitfaden zur Privatsphäre im Web](/de/docs/Web/Privacy) befolgen, aber auch das Handeln mit Integrität und das Vorhandensein einer robusten Datenschutzrichtlinie sind nutzlos, wenn Ihre Website nicht sicher ist und Angreifer dennoch Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser folgen einem strikten Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server und die Datenübertragung erzwingt. Dieser Abschnitt befasst sich mit den Funktionen, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wird, mit einer Ressource eines anderen Ursprungs interagieren kann. Sie hilft, möglicherweise schädliche Dokumente zu isolieren und reduziert mögliche Angriffspunkte.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge stellen. Dies ist sinnvoll, denn Sie möchten nicht, dass Websites miteinander in Konflikt geraten und unbefugten Zugriff auf Daten erhalten.

Es kann jedoch Situationen geben, in denen Sie diese Einschränkung lockern möchten; Beispielsweise, wenn Sie mehrere Websites haben, die miteinander interagieren, können Sie ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) ermöglicht werden, einem mechanismenbasierten HTTP-Header, der es einem Server ermöglicht, beliebige Ursprünge (Domäne, Schema oder Port) als andere als seine eigenen anzugeben, von denen ein Browser das Laden von Ressourcen zulassen sollte.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern genutzt, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource oder warum eine Anforderung fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es Dritte daran hindert, übermittelte Daten abzufangen und sie missbräuchlich zu verwenden.

Alle Browser bewegen sich in Richtung einer standardmäßigen Anforderung von HTTPS; dies ist praktisch bereits der Fall, da Sie ohne dieses Protokoll kaum etwas im Web tun können.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die sichere und zuverlässige Übertragung von Informationen zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS nutzen, können ihre Sicherheitsparameter wählen, die einen erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben können.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header ermöglicht es einer Website, anzugeben, dass sie nur mit HTTPS erreichbar sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das dazu entwickelt wurde, gegen unrechtmäßige Ausstellung von Zertifikaten zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Protokollen protokolliert. Diese bieten nur anhängbare, kryptografisch gesicherte Aufzeichnungen von ausgestellten TLS-Zertifikaten.
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die unter Verwendung von {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen wurden, wird als **Mixed Content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, was den unverschlüsselten Inhalt für Lauschangriffe und Man-in-the-Middle-Angreifer zugänglich macht.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element für dessen Sicherheit. Einige Signaturalgorithmen sind als schwach bekannt und sollten vermieden werden, wenn dies angebracht ist.

### Sichere Kontexte und Funktionsberechtigungen

Browser kontrollieren die Nutzung von "leistungsstarken Funktionen" auf verschiedene Weise. Diese "leistungsstarken Funktionen" umfassen das Generieren von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Benutzers zum Zugang zu einem Medienstream, die Manipulation der System-GPU und das Verwenden von Webzahlungen. Wenn ein Website einfach die APIs, die solche Funktionen kontrollieren, ohne jede Einschränkung nutzen könnte, könnten böswillige Entwickler versuchen, folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen zu belästigen.
- Ihre Webcam einzuschalten, ohne Vorwarnung, um sie auszuspionieren.
- Ihren Browser / Ihr System zu überlasten, um {{Glossary("denial_of_service", "Denial-of-Service")}} (DoS)-Angriffe zu erzeugen.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexte](/de/docs/Web/Security/Secure_Contexts) gestattet. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem mit hinreichender Sicherheit davon ausgegangen wird, dass die Inhalte sicher (über HTTPS/TLS) bereitgestellt wurden. In einem sicheren Kontext gibt es nur begrenzte Möglichkeiten zur Kommunikation mit Kontexten, die **nicht** sicher sind. Sichere Kontexte helfen auch dabei, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke Funktionen zuzugreifen.

  Für eine Liste von Web-Plattform-Funktionen, die nur in sicheren Kontexten verfügbar sind, siehe [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen erfordert ein System von Benutzerberechtigungen: Benutzer müssen ausdrücklich zustimmen, Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Berechtigungsanfragen zur Erteilung geschehen automatisch, und Sie können den Status einer API-Berechtigung mittels der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur in Reaktion auf eine Benutzeraktion, zum Beispiel einem Klick auf einen Button, verwendet werden, das heißt, sie müssen aus einem geeigneten Ereignishandler aufgerufen werden. Dies wird **transiente Aktivierung** genannt. Siehe [Funktionen, die eine Benutzeraktivierung erfordern](/de/docs/Web/Security/User_activation) für weitere Informationen.

## Sicherheitsbetrachtungen auf hoher Ebene

Es gibt viele Aspekte der Websicherheit, die sowohl auf der Server- als auch auf der Clientseite bedacht werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf clientseitige Sicherheitsbetrachtungen. Einen nützlichen Überblick über die Sicherheit aus einer serverseitigen Perspektive, der auch Beschreibungen häufiger Angriffe beinhaltet, auf die Sie achten sollten, finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Lernmoduls zur Programmierung von serverseitigen Websites](/de/docs/Learn_web_development/Extensions/Server-side)).

### Verantwortungsbewusstes Speichern von clientseitigen Daten

Der verantwortungsvolle Umgang mit Daten bezieht sich größtenteils auf die Reduzierung der Verwendung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und die Achtsamkeit bezüglich der Daten, die Sie speichern und mit diesen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Daher haben Browser begonnen einzuschränken, was Sie mit domainsübergreifenden Cookies tun können, mit dem Ziel, den Zugriff auf sie in Zukunft ganz zu entfernen.

Sie sollten sich auf die Entfernung von domainsübergreifenden Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersatz von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzeridentität schützen und Logins verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn die Daten sensibel sind wie Anmeldedaten, ist es sinnvoll, eine renommierte Lösung zu verwenden. Zum Beispiel hat jedes respektable serverseitige Framework eingebaute Funktionen, um vor gängigen Schwachstellen zu schützen. Sie könnten auch in Erwägung ziehen, ein spezialisiertes Produkt für Ihren Zweck zu nutzen, zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie eine eigene Lösung zum Sammeln von Benutzerdaten erstellen möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Nutzen Sie Multi-Faktor-Authentifizierung (MFA) für besseren Schutz. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige App zu optimieren.

Hier sind einige weitere Tipps für sichere Logins:

- Beim Sammeln von Benutzeranmeldeinformationen, erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht einfach erraten werden können. Schwache Passwörter sind einer der Hauptursachen für Sicherheitsverstöße. Darüber hinaus ermutigen Sie Ihre Benutzer, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter verwenden können, sich keine Sorgen um das Erinnern machen müssen und kein Sicherheitsrisiko durch das Aufschreiben der Passwörter entsteht. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Vorgang, eine Nachricht an einen Benutzer zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Website enthält, die wie eine Website aussieht, die sie täglich verwenden, es aber nicht ist. Der Link ist begleitet von einer Nachricht, die darauf abzielt, Benutzer zu täuschen, sodass sie ihren Benutzernamen und ihr Passwort auf der Seite eingeben, damit es gestohlen und dann von einem Angreifer für böswillige Zwecke verwendet werden kann.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr raffiniert sein und schwer von einer echten Website zu unterscheiden sein. Sie sollten daher Ihre Benutzer aufklären, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht erhalten, die in etwa lautet "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen", sollten sie direkt in einem neuen Tab zur Website gehen und versuchen, sich direkt anzumelden, anstatt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie telefonisch oder per E-Mail kontaktieren, um über die empfangene Nachricht zu sprechen.

- Schützen Sie vor Brute-Force-Angriffen auf Anmeldeseiten durch {{Glossary("rate_limit", "Ratenbegrenzung")}}, Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer automatisch ab, nachdem sie längere Zeit inaktiv waren.

### Keine sensiblen Daten in URL-Query-Strings einfügen

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Query-Strings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), denn wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), könnten diese Informationen gestohlen werden. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxies und Archivierungs-Tools wie dem [Internet-Archiv](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen könnten.

Nutzen Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt ausführlicher die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übermittlung sensibler Daten in URLs über `GET`-Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie den Einsatz von Web-Plattform-Funktionen wie der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Regeln zur Funktions- und Ressourcennutzung auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie beispielsweise nur das Laden von Bildern oder Skripten von bestimmten vertrauenswürdigen Ursprüngen erlauben. Dies hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffen. Diese Angriffe sind mit einer Reihe von böswilligen Aktivitäten verbunden, einschließlich Datendiebstahl, Verunstaltung von Websites und Verteilung von Malware.

Die Berechtigungspolitik funktioniert ähnlich, außer dass sie sich mehr auf das Erlauben oder Blockieren des Zugriffs auf spezifische "leistungsstarke Funktionen" konzentriert ([wie bereits erwähnt](#sichere_kontexte_und_funktionsberechtigungen)).

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass wenn Sie die Nutzung einer Funktion blockieren, auf die sich ein Drittanbieter-Skript stützt, um zu funktionieren, Sie möglicherweise die Funktionalität Ihrer Website beeinträchtigen.

### Datenintegrität aufrechterhalten

Anknüpfend an den vorherigen Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Seite erlauben, versuchen sicherzustellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, dass die von ihnen abgerufenen Ressourcen (z.B. von einem {{Glossary("CDN", "CDN")}}) ohne unvorhergesehene Manipulation ausgeliefert wurden. Sie funktioniert, indem Sie einen kryptografischen Hash angeben, den eine abgerufene Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit dem anfragenden Code des angegebenen {{Glossary("origin", "Ursprungs")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Indikator, der vom Server verwendet wird, um anzugeben, dass die in den {{HTTPHeader("Content-Type")}} Headers beworbenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) nicht geändert werden sollten und eingehalten werden müssen. Dieser Header ist eine Möglichkeit, sich von [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) abzumelden, oder mit anderen Worten, anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formular-Eingaben bereinigen

Als allgemeine Regel gilt: Vertrauen Sie nichts, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Akteure geschickt darin, spezifische Zeichenfolgen von ausführbarem Code in Formularfelder einzufügen (zum Beispiel SQL oder JavaScript). Wenn Sie beim Umgang mit solchen Eingaben nicht vorsichtig sind, könnten sie entweder schädlichen Code auf Ihrer Website ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injection](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies passieren könnte.

Um sich davor zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten eine clientseitige Validierung implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies durch die eingebauten HTML-Formularvalidierungsfunktionen tun oder Ihre eigene Validierung schreiben. Siehe [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Informationen.
- Sie sollten Ausgabecodierung verwenden, wenn Benutzer-Eingaben in einer Anwendungsoberfläche angezeigt werden, um die Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu verhindern, dass sie als Code ausgeführt werden. Siehe [Ausgabecodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für weitere Informationen.

Sie können sich nicht allein auf clientseitige Validierung für die Sicherheit verlassen – diese sollte mit einer serverseitigen Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungsfeedback bereitstellt, ohne auf eine Rückantwort vom Server warten zu müssen. Allerdings ist die clientseitige Validierung für böswillige Parteien einfach zu umgehen (zum Beispiel durch Deaktivierung von JavaScript im Browser, um eine JavaScript-basierte Validierung zu umgehen).

Jedes angesehene serverseitige Framework wird Funktionalität für die Validierung von Formulareingaben bieten. Darüber hinaus ist es eine gängige Best Practice, alle Sonderzeichen, die Teil der ausführbaren Syntax sind, zu maskieren, wobei eingegebener Code nicht mehr ausführbar und als normaler Text behandelt wird.

### Schutz vor Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer getäuscht, einen UI-Element anzuklicken, das eine andere Aktion ausführt als die, die der Benutzer erwartet, oft mit dem Ergebnis, dass die vertraulichen Informationen des Benutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko ist bei eingebettetem Drittanbieterinhalt vorhanden, stellen Sie also sicher, dass Sie dem vertrauen, was in Ihre Site eingebettet wird. Seien Sie sich außerdem bewusst, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzeridentität_schützen_und_logins_verwalten) lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser berechtigt ist, eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) wiederzugeben. Websites können dies verwenden, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Sites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige übergeordnete Elemente an, die eine Seite unter Verwendung von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Anleitungen zur Sicherheitsimplementierung

Um umfassende Anweisungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie Best Practices befolgen, sehen Sie sich unser Set von [Praktischen Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Leitfäden hängen direkt mit dem [HTTP Observatory](/en-US/observatory)-Tool zusammen. Observatory führt Sicherheitsüberprüfungen auf einer Website durch und liefert zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme eine Bewertung und Punktzahl. Diese Leitfäden erklären, wie man die vom MDN Observatory Test aufgedeckten Problem löst: Das Tool verlinkt den passenden Leitfaden für jedes Problem, um sie effektiv zu einer Lösung zu lenken. Interessanterweise nutzen die internen Entwicklerteams von Mozilla diese Richtlinien beim Erstellen von Websites, um sicherzustellen, dass Sicherheitsbest-Practices angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet-Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
