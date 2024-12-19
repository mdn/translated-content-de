---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

Webseiten enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie zum Beispiel der Text auf öffentlichen Seiten. Andere Informationen sind sensibel, wie zum Beispiel Benutzernamen, Passwörter und Bankdaten von Kunden oder interne Algorithmen und private Produktdaten.

Sensible Informationen müssen geschützt werden, und darauf konzentriert sich die Sicherheit im Web. Wenn diese Informationen in die falschen Hände gerieten, könnten sie benutzt werden, um:

- Unternehmen durch die Weitergabe ihrer Informationen an Wettbewerber in einen wettbewerblichen Nachteil zu versetzen.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut ernsthafte Probleme mit ihrem Betrieb verursachen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, sie anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste zu machen.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Web zu schützen, aber Entwickler müssen ebenfalls bewährte Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die böswillige Akteure nutzen können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Sicherheit im Web, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, und praktischer Leitfäden, wie man sie sichert.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen beiden und ihre Beziehung zueinander zu kennen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern).

- **Privatsphäre** bezieht sich darauf, den Nutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sicherzustellen, dass sie nicht unverantwortlich genutzt werden. Beispielsweise sollten Sie den Nutzern mitteilen, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Nutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzerklärung zuzustimmen, auf ihre gespeicherten Daten zuzugreifen und diese bei Bedarf zu löschen.

Gute Sicherheit ist für gute Privatsphäre unerlässlich. Sie könnten allen Rat befolgen, der in unserem [Privatsphäre im Web](/de/docs/Web/Privacy) Leitfaden aufgeführt ist, aber das Handeln mit Integrität und eine robuste Datenschutzrichtlinie sind vergeblich, wenn Ihre Seite nicht sicher ist und Angreifer einfach Daten stehlen können.

## Sicherheitsmerkmale von Browsern

Webbrowser befolgen ein striktes Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server sowie den Datentransport durchsetzt. In diesem Abschnitt werden die Funktionen behandelt, die diesem Modell zugrunde liegen.

### Ursprungsübergreifende Richtlinien und CORS

[Richtlinien für denselben Ursprung](/de/docs/Web/Security/Same-origin_policy) sind ein grundlegender Sicherheitsmechanismus des Webs, der beschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wurde, mit einer Ressource eines anderen Ursprungs interagieren kann. Es hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente eines Ursprungs keine Anfragen an andere Ursprünge stellen. Das macht Sinn, weil man nicht möchte, dass Seiten einander stören und unbefugte Datenzugriffe erhalten.

Jedoch könnten Sie in einigen Fällen diese Einschränkung lockern wollen; zum Beispiel, wenn Sie mehrere Websites haben, die miteinander interagieren, könnten Sie ihnen erlauben, untereinander Ressourcen mit [`fetch()`](/de/docs/Web/API/Window/fetch) anzufordern. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) erlaubt werden, einen HTTP-Header-basierenden Mechanismus, der einem Server ermöglicht, anzugeben, von welchen Ursprüngen (Domain, Schema oder Port) außer dem eigenen ein Browser laden darf.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP) Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (zum Beispiel eine angeforderte Ressource bereitzustellen oder zu erklären, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation zu bieten.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem Daten während des Transports über das Netzwerk verschlüsselt werden. Es ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für die Privatsphäre, da es Dritten verhindert, übertragene Daten abzufangen und böswillig zu verwenden.

Alle Browser bewegen sich in Richtung einer Standardanforderung von HTTPS; dies ist bereits praktisch der Fall, da man ohne dieses Protokoll im Web nicht viel tun kann.

Verwandte Themen:

- [Transportschichtsicherheit](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die sichere und robuste Übertragung von Informationen zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP) Header ermöglicht es einer Website, anzugeben, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das dazu entwickelt wurde, um gegen fehlerhafte Zertifikatsausstellung zu schützen und diese zu überwachen. Neu ausgestellte Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Logs "protokolliert". Diese bieten nur hinzufügbare, kryptografisch gesicherte Berichte über ausgestellte TLS-Zertifikate.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **gemischte Inhalte**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, was bedeutet, dass der unverschlüsselte Inhalt für Abhörer und Man-in-the-Middle-Angreifer zugänglich ist.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des zur Signierung eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendeten Hash-Algorithmus ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind als schwach bekannt und sollten vermieden werden, wenn angebracht.

### Sichere Kontexte und Funktionsberechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf verschiedene Weise. Diese "leistungsstarken Funktionen" umfassen das Generieren von Systembenachrichtigungen auf einer Website, das Verwenden der Webcam eines Nutzers zum Zugriff auf einen Medienstream, das Manipulieren der System-GPU und die Nutzung von Web-Zahlungen. Wenn eine Seite solche Funktionen ohne Einschränkung nutzen könnte, könnten böswillige Entwickler versuchen Folgendes zu tun:

- Nutzer mit unnötigen Benachrichtigungen und anderen UI-Features belästigen.
- Ihre Webcam ohne Vorwarnung einschalten, um sie zu bespitzeln.
- Ihren Browser/Ihr System verstopfen, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS) Attacken zu erzeugen.
- Daten oder Geld stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Arten gesteuert:

- Die Verwendung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den ein angemessenes Maß an Vertrauen besteht, dass der Inhalt sicher (über HTTPS/TLS) geliefert wurde. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte tragen auch dazu bei, zu verhindern, dass [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) Zugriff auf leistungsstarke Funktionen erhalten.

  Eine Liste der Web-Plattform-Funktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist hinter einem System von Nutzerberechtigungen abgesichert: Nutzer müssen ausdrücklich zustimmen, Zugang zu solchen Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Anfragen für Nutzerberechtigungen erfolgen automatisch, und Sie können den Status einer API-Berechtigung mit der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Funktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken eines Buttons genutzt werden, was bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **vorübergehende Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation).

## Sicherheit auf hoher Ebene

Es gibt viele Aspekte der Web-Sicherheit, die auf der Server- und Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf sicherheitsrelevante Überlegungen auf der Client-Seite. Eine nützliche Zusammenfassung der Sicherheit aus einer serverseitigen Perspektive, die auch Beschreibungen häufig vorkommender Angriffe enthält, auf die Sie achten sollten, finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres Lernmoduls für [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side)).

### Client-seitige Datenverantwortung

Ein verantwortungsvoller Umgang mit Daten besteht hauptsächlich darin, den Einsatz von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) zu reduzieren und darauf zu achten, welche Daten Sie speichern und mit diesen teilen. Traditionell haben Webentwickler Cookies benutzt, um alle Arten von Daten zu speichern, und es war einfach für Angreifer, diese Neigung auszunutzen. Infolgedessen haben Browser begonnen, einzuschränken, was man mit Cross-Site-Cookies machen kann, mit dem Ziel, den Zugriff darauf in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten reduzieren, auf die Sie angewiesen sind, und/oder die Beibehaltung der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzerauthentifizierung und Login-Verwaltung

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn es sich um sensible Daten handelt, wie z.B. Anmeldedaten, macht es Sinn, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework über integrierte Funktionen zum Schutz vor häufigen Schwachstellen verfügen. Sie könnten auch in Erwägung ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identitätsanbieterlösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Datenerfassung gewähren wollen, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Heuern Sie einen erfahrenen Entwickler für die Server-Seite und/oder einen Sicherheitsingenieur an, um das System zu implementieren, und sorgen Sie dafür, dass es umfassend getestet wird. Nutzen Sie Mehrfaktor-Authentifizierung (MFA) für besseren Schutz. Ziehen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) in Betracht, um die Client-Seite der App zu optimieren.

Hier sind einige weitere Tipps für sichere Anmeldungen:

- Wenn Sie Anmeldeinformationen von Benutzern sammeln, setzen Sie starke Passwörter durch, damit die Kontodetails Ihrer Nutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer zudem, einen Passwortmanager zu verwenden, damit sie komplexere Passwörter nutzen können, sich keine Gedanken über das Merken machen müssen und kein Sicherheitsrisiko durch Notizen mit ihren Passwörtern schaffen. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Nutzer auch über **Phishing** aufklären. Phishing ist der Akt, eine Nachricht an einen Benutzer zu senden (beispielsweise eine E-Mail oder eine SMS), die einen Link zu einer Website enthält, die wie eine täglich benutzte Website aussieht, es aber nicht ist. Der Link ist mit einer Nachricht versehen, die darauf abzielt, Nutzer dazu zu verleiten, ihren Benutzernamen und ihr Passwort auf der Seite einzugeben, sodass diese gestohlen und dann von einem Angreifer für böswillige Zwecke genutzt werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr raffiniert und schwer von einer echten Website zu unterscheiden sein. Sie sollten daher Ihre Nutzer darauf hinweisen, Links in zufälligen E-Mails und SMS-Nachrichten zu misstrauen. Wenn sie eine Nachricht in der Art "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen" erhalten, sollten sie die Seite in einem neuen Tab direkt besuchen und versuchen, sich direkt anzumelden, anstatt den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder per E-Mail kontaktieren, um die erhaltene Nachricht zu besprechen.

- Schützen Sie sich vor Brute-Force-Angriffen auf Anmeldeseiten mit {{Glossary("rate_limit", "Ratenbegrenzung")}}, Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersessions mit einzigartigen [Session-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer nach Phasen der Inaktivität automatisch ab.

### Keine sensiblen Daten in URL-Abfragezeichenfolgen einfügen

Generell sollten Sie [keine sensiblen Daten in URL-Abfragezeichenfolgen einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), denn wenn ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), könnte er diese Informationen stehlen. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxies und Archivierungstools wie dem [Internet Archive](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen fortbestehen könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt die Datenschutz- und Sicherheitsrisiken des `Referer`-Headers ausführlicher und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Die Vermeidung der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch dazu beitragen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Überlegen Sie, webplattformbezogene Funktionen wie die [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) zu nutzen, um auf Ihrer Website eine Reihe von Regeln für die Nutzung von Funktionen und Ressourcen durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP erlaubt Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie beispielsweise erlauben, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden. Das hilft, bestimmte Arten von Angriffen zu erkennen und abzuwehren, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffe. Diese Angriffe umfassen eine Reihe bösartiger Aktivitäten, einschließlich Datendiebstahl, Verunstaltung von Webseiten und Verbreitung von Malware.

Die Berechtigungspolitik funktioniert auf ähnliche Weise, ist jedoch mehr darauf fokussiert, den Zugriff auf spezifische "leistungsstarke Funktionen" zu erlauben oder zu blockieren ([wie zuvor erwähnt](#sichere_kontexte_und_funktionsberechtigungen)).

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viele Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass, wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, Sie möglicherweise die Funktionalität Ihrer Seite beeinträchtigen könnten.

### Datenintegrität aufrechterhalten

In Anlehnung an den vorherigen Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Seite erlauben, sicherstellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subressourcen-Integrität](/de/docs/Web/Security/Subresource_Integrity)
  - : Die **Subressource-Integrität** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht, zu überprüfen, ob Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulationen geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgerufene Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header zeigt an, ob die Antwort mit dem anfordernden Code von dem angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die [MIME-Typen](/de/docs/Web/HTTP/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern beworben werden, nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist ein Weg, um sich gegen [MIME-Typ-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu entscheiden, oder mit anderen Worten, um anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formularinput desinfizieren

Als allgemeine Regel gilt, dass Sie nichts vertrauen sollten, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und lästig, und es ist einfach für Nutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen darin geschickt, spezifische Zeichenfolgen ausführbaren Codes in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie nicht aufpassen, wie solche Eingaben gehandhabt werden, könnten sie entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies passieren könnte.

Um sich davor zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich desinfizieren:

- Sie sollten clientseitige Validierung implementieren, um Nutzer darüber zu informieren, wann sie Daten im falschen Format eingegeben haben. Sie können dies mit eingebauten HTML-Formularvalidierungsfunktionen tun oder Ihre eigene Validierung schreiben. Siehe [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für mehr Informationen.
- Sie sollten Ausgabecodierung verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu vermeiden, dass sie als Code ausgeführt werden. Siehe [Output Encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für mehr Informationen.

Sie können sich nicht allein auf die clientseitige Validierung für die Sicherheit verlassen — sie sollte mit serverseitiger Validierung kombiniert werden. Clientseitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungsfeedback bietet, ohne auf eine Runde zum Server warten zu müssen. Jedoch ist es für eine böswillige Partei einfach, die clientseitige Validierung zu umgehen (zum Beispiel durch das Abschalten von JavaScript im Browser, um JavaScript-basierte Validierung zu umgehen).

Jedes seriöse serverseitige Framework wird Funktionalität zur Validierung von Formularübermittlungen bereitstellen. Darüber hinaus ist eine weitverbreitete Best Practice, alle speziellen Zeichen, die Teil von ausführbarem Syntax-Code sind, zu "escapen", um eingegebenen Code nicht mehr als ausführbaren und als einfachen Text zu behandeln.

### Schutz vor Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, ein UI-Element zu klicken, das eine andere Aktion ausführt als die, die der Benutzer erwartet, was oft dazu führt, dass die vertraulichen Informationen des Benutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko ist in eingebettetem Drittanbieterinhalt inhärent, daher stellen Sie sicher, dass Sie den eingebetteten Inhalt auf Ihrer Website vertrauen. Seien Sie sich auch bewusst, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt lesen: [Benutzeridentität und Logins verwalten](#benutzerauthentifizierung_und_login-verwaltung).

Die folgenden Funktionen können helfen, sich vor Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwort-Header kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) rendern darf. Seiten können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sichergestellt wird, dass ihre Inhalte nicht auf andere Seiten eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive legt gültige Eltern fest, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Sicherheitsimplementierungsanleitungen

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie bewährte Praktiken befolgen, sehen Sie sich unsere [Praktischen Sicherheitsimplementierungsguides](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Guides stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory) Tool. Observatory führt Sicherheitsüberprüfungen einer Website durch und stellt eine Bewertung und einen Score zusammen mit Empfehlungen zur Behebung der festgestellten Sicherheitsprobleme zur Verfügung. Diese Guides erklären, wie man Probleme löst, die in den MDN Observatory-Tests festgestellt wurden: Das Tool verlinkt auf den relevanten Leitfaden für jedes Problem, um Sie bei einer effektiven Lösung zu unterstützen. Interessanterweise verwenden auch die internen Entwicklerteams von Mozilla diese Anleitungen beim Implementieren von Websites, um sicherzustellen, dass Sicherheitsbestpraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Sicherheits-Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
