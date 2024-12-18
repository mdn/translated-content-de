---
title: Sicherheit im Web
slug: Web/Security
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, wie zum Beispiel der Text auf öffentlichen Seiten. Andere sind sensibel, wie zum Beispiel Kundennamen, Passwörter und Bankinformationen, oder interne Algorithmen und private Produktinformationen.

Sensible Informationen müssen geschützt werden, und darauf liegt der Fokus der Websicherheit. Wenn diese Informationen in die falschen Hände gelangen, könnten sie genutzt werden, um:

- Unternehmen durch das Teilen ihrer Informationen mit Wettbewerbern einen Wettbewerbsnachteil zu verschaffen.
- Ihre Dienste zu deaktivieren oder zu kapern und damit ernste Probleme für den Betrieb zu verursachen.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch sie anfällig für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanziellen Verlust werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Nutzer im Web zu schützen, aber Entwickler müssen auch bewährte Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Websicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, sowie praktischen Leitfäden zur Sicherung solcher Schwachstellen.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind voneinander getrennte, aber eng verwandte Themen. Es ist wichtig, die Unterschiede zwischen beiden und ihre Beziehung zueinander zu kennen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich auf den Akt, den Nutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und genutzt werden, und sicherzustellen, dass sie nicht verantwortungslos genutzt werden. Beispielsweise sollten Sie Ihre Nutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Benutzer müssen die Möglichkeit erhalten, Ihrer Datenschutzrichtlinie zuzustimmen, auf ihre bei Ihnen gespeicherten Daten zuzugreifen und diese bei Bedarf zu löschen.

Gute Sicherheit ist für gute Privatsphäre unerlässlich. Sie könnten alle Ratschläge aus unserem [Privatsphäre im Web](/de/docs/Web/Privacy) Leitfaden befolgen, aber Integrität und eine robuste Datenschutzrichtlinie sind zwecklos, wenn Ihre Seite nicht sicher ist und Angreifer ohnehin Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser folgen einem strikten Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen dem Browser und dem Server sowie den Datentransport durchsetzt. In diesem Abschnitt sehen wir uns die Funktionen an, die diesem Modell zugrunde liegen.

### Same-origin policy und CORS

Die [Same-origin Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wird, mit einer Ressource von einem anderen Ursprung interagieren kann. Es hilft, potenziell schädliche Dokumente zu isolieren und so mögliche Angriffsvektoren zu reduzieren.

Im Allgemeinen können Dokumente von einem Ursprung keine Anfragen an andere Ursprünge stellen. Dies ist sinnvoll, da verhindert werden soll, dass Websites einander stören und unbefugten Zugriff auf Daten erhalten.

In manchen Fällen möchten Sie diese Einschränkung jedoch lockern, z. B. wenn Sie mehrere Websites haben, die miteinander interagieren. Dann könnten Sie es ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) ermöglicht werden, einem HTTP-Header-basierten Mechanismus, der es einem Server erlaubt, Browsern mitzuteilen, welche Ursprünge (Domain, Schema oder Port) von seinem eigenen abweichend sind, von denen das Laden von Ressourcen erlaubt sein sollte.

### HTTP-Modell für die Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (z. B. um eine angeforderte Ressource bereitzustellen oder zu erläutern, warum eine Anfrage fehlgeschlagen ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem Daten während des Transports über das Netzwerk verschlüsselt werden, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es Dritten verwehrt, übertragene Daten abzufangen und diese böswillig zu nutzen.

Alle Browser bewegen sich in Richtung einer verpflichtenden Nutzung von HTTPS als Standard; dies ist bereits fast der Fall, da auf dem Web ohne dieses Protokoll nicht viel unternommen werden kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für die sichere und robuste Übermittlung von Informationen zwischen zwei Netzwerkanwendungen oder -geräten. Anwendungen, die TLS nutzen, können ihre Sicherheitsparameter selbst wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header erlaubt es einer Website zu spezifizieren, dass sie nur über HTTPS zugänglich sein darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das entwickelt wurde, um Zertifikatsmissbrauch zu verhindern und zu überwachen. Neu ausgegebene Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Protokollen 'geloggt'. Diese bieten unveränderliche, kryptografisch gesicherte Aufzeichnungen über ausgegebene TLS-Zertifikate.
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte enthält, die über {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **Mixed Content**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, was den unverschlüsselten Inhalt für Lauscher und Man-in-the-Middle-Angreifer zugänglich macht.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, der bei der {{Glossary("Signature/Security", "Signierung")}} eines {{Glossary("digital_certificate", "Digitalzertifikats")}} verwendet wird, ist ein entscheidendes Element für die Sicherheit des Zertifikats. Einige Signaturalgorithmen sind bekanntlich schwach und sollten, wenn angebracht, vermieden werden.

### Sichere Kontexte und Feature-Berechtigungen

Browser kontrollieren die Nutzung von "leistungsstarken Funktionen" auf unterschiedliche Weise. Diese "leistungsstarken Funktionen" umfassen das Erstellen von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Benutzers, um Zugriff auf einen Medienstream zu erhalten, das Manipulieren der System-GPU und die Nutzung von Webzahlungen. Wenn eine Website einfach so die APIs nutzen könnte, die diese Funktionen steuern, könnten böswillige Entwickler versuchen, Folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen zu belästigen.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser/System zu überlasten, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS)-Angriffe durchzuführen.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden auf folgende Weise kontrolliert:

- Die Nutzung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem eine angemessene Sicherheit angenommen werden kann, dass die Inhalte sicher übermittelt wurden (via HTTPS/TLS). In einem sicheren Kontext ist das Potenzial für die Kommunikation mit Kontexten, die **nicht** sicher sind, begrenzt. Sichere Kontexte helfen auch, die Nutzung leistungsstarker Funktionen durch [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) zu verhindern.

  Eine Liste der Webplattformfunktionen, die nur in sicheren Kontexten verfügbar sind, finden Sie unter [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen hängt von einem System von Benutzerberechtigungen ab: Benutzer müssen ausdrücklich zustimmen, Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch genutzt werden können. Benutzerberechtigungsanfragen erfolgen automatisch, und Sie können den Status einer API-Berechtigung abfragen, indem Sie die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden.

- Mehrere andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf eine Schaltfläche genutzt werden, was bedeutet, dass sie innerhalb eines entsprechenden Event-Handlers aufgerufen werden müssen. Dies wird als **transiente Aktivierung** bezeichnet. Weitere Informationen finden Sie unter [Features gated by user activation](/de/docs/Web/Security/User_activation).

## Wichtige Sicherheitsüberlegungen

Es gibt viele Aspekte der Websicherheit, die sowohl auf der Server- als auch auf der Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Sicherheitsüberlegungen auf der Client-Seite. Sie können eine nützliche Zusammenfassung von Sicherheitsperspektiven auf der Server-Seite finden, die auch Beschreibungen häufiger Angriffe enthält, auf die man achten sollte, unter [Websitesicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) (Teil unseres Lernmoduls [Serverseitige Webseitenprogrammierung](/de/docs/Learn/Server-side)).

### Clientseitige Daten verantwortungsvoll speichern

Ein verantwortungsvoller Umgang mit Daten betrifft größtenteils die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und die sorgfältige Handhabung der Daten, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle möglichen Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Infolgedessen haben Browser begonnen, die Nutzung von Cross-Site-Cookies einzuschränken, mit dem Ziel, den Zugriff auf sie in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von Cross-Site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten einschränken, auf die Sie angewiesen sind, und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzeridentität schützen und Anmeldungen verwalten

Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn die Daten sensibel sind, wie beispielsweise Anmeldeinformationen, ist es sinnvoll, eine seriöse Lösung zu verwenden. Zum Beispiel wird ein respektiertes serverseitiges Framework eingebaute Funktionen zum Schutz vor häufigen Schwachstellen bieten. Sie könnten auch in Erwägung ziehen, ein spezielles Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identitätsanbieterlösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA) zur besseren Absicherung. Ziehen Sie die Verwendung einer speziellen API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) in Erwägung, um die clientseitige App zu optimieren.

Hier sind einige weitere Tipps, um sichere Anmeldungen bereitzustellen:

- Wenn Sie Benutzeranmeldeinformationen sammeln, erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverstöße. Darüber hinaus sollten Sie Ihre Benutzer ermutigen, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter nutzen können, sich keine Sorgen um das Merken dieser machen müssen und keine Sicherheitsrisiko durch das Aufschreiben erzeugen. Siehe auch unseren Artikel zu [Unsicheren Passwörtern](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** aufklären. Phishing ist der Akt des Versendens einer Nachricht an einen Benutzer (z. B. eine E-Mail oder eine SMS), die einen Link zu einer Webseite enthält, die aussieht wie eine, die sie täglich nutzen, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die darauf abzielt, Benutzer dazu zu verleiten, ihren Benutzernamen und ihr Passwort auf der Webseite einzugeben, damit es gestohlen und dann von einem Angreifer für böswillige Zwecke verwendet werden kann.

  > [!NOTE]
  > Einige Phishing-Websites können sehr ausgeklügelt sein und sich nur schwer von echten Websites unterscheiden lassen. Sie sollten Ihre Benutzer daher darauf schulen, keine zufälligen Links in E-Mails und SMS-Nachrichten zu vertrauen. Wenn sie eine Nachricht im Sinne von "Dringend, Sie müssen sich jetzt einloggen, um ein Problem zu lösen" erhalten, sollten sie die Seite direkt in einem neuen Tab aufrufen und sich direkt einloggen, anstatt auf den Link in der Nachricht zu klicken. Alternativ könnten sie Sie anrufen oder Ihnen eine E-Mail senden, um die erhaltene Nachricht zu besprechen.

- Schützen Sie Anmeldeseiten vor Brute-Force-Angriffen durch {{Glossary("rate_limit", "Ratenbegrenzung")}}, Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwenden Sie für die Verwaltung von Benutzeranmeldesitzungen eindeutige [Session-IDs](https://en.wikipedia.org/wiki/Session_ID) und melden Sie Benutzer automatisch nach längeren Inaktivitätsphasen ab.

### Sensible Daten nicht in URL-Abfragezeichenfolgen einfügen

Als allgemeine Regel sollten Sie [sensible Daten nicht in URL-Abfragezeichenfolgen einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da ein Drittanbieter die URL abfangen könnte (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header) und diese Informationen stehlen könnte. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Web-Crawlern, HTTP-Proxys und Archivierungswerkzeugen wie dem [Internetarchiv](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen bestehen bleiben könnten.

Verwenden Sie `POST`-Anfragen statt `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt detaillierter die Datenschutz- und Sicherheitsrisiken, die mit dem Referer-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Vermeiden Sie die Übertragung sensibler Daten in URLs über `GET`-Anfragen, dies kann auch helfen, {{Glossary("CSRF", "Cross-site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu verhindern.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Nutzung von Webplattform-Funktionen wie [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Reihe von Regeln für die Nutzung von Funktionen und Ressourcen auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen einzuführen.

CSP erlaubt es Ihnen, eine zusätzliche Sicherheitsebene hinzuzufügen, indem Sie zum Beispiel festlegen, dass Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen geladen werden dürfen. Dies hilft dabei, bestimmte Arten von Angriffen zu erkennen und abzuschwächen, darunter Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffe. Diese Angriffe umfassen eine Reihe von bösartigen Aktivitäten, einschließlich Datendiebstahl, Website-Defacement und der Verteilung von Malware.

Die Berechtigungsrichtlinie funktioniert auf ähnliche Weise, ist jedoch mehr darauf ausgerichtet, den Zugang zu spezifischen "leistungsstarken Funktionen" ([wie bereits erwähnt](#sichere_kontexte_und_feature-berechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, insbesondere wenn Sie viel Fremdcode auf Ihrer Website verwenden. Beachten Sie jedoch, dass wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittskript angewiesen ist, um zu funktionieren, es sein kann, dass Sie die Funktionalität Ihrer Seite beeinträchtigen.

### Datenintegrität aufrechterhalten

Aufbauend auf dem vorherigen Abschnitt sollten Sie, wenn Sie die Nutzung von Funktionen und Ressourcen auf Ihrer Seite erlauben, versuchen sicherzustellen, dass Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, dass die Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), unverändert bereitgestellt werden. Sie funktioniert, indem Sie es Ihnen erlauben, einen kryptografischen Hash bereitzustellen, den die abgerufene Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`**-Antwortheader gibt an, ob die Antwort mit anforderndem Code aus dem angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`**-Antwortheader ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die in den {{HTTPHeader("Content-Type")}}-Headers angegebenen [MIME-Typen](/de/docs/Web/HTTP/MIME_types) nicht geändert werden dürfen und beachtet werden müssen. Dieser Header ist eine Möglichkeit, sich vom [MIME-Typ-Riechen](/de/docs/Web/HTTP/MIME_types#mime_sniffing) abzumelden, oder, mit anderen Worten, anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formularinput bereinigen

Als allgemeine Regel sollten Sie nichts, was Benutzer in Formulare eingeben, als vertrauenswürdig betrachten. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist einfach für Benutzer, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind bösartige Benutzer geschickt darin, bestimmte Zeichenfolgen ausführbaren Codes in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie bei der Behandlung solcher Eingaben nicht vorsichtig sind, könnten sie entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Ein gutes Beispiel dafür, wie dies geschehen könnte, finden Sie unter [SQL-Injection](/de/docs/Learn/Server-side/First_steps/Website_security#sql_injection).

Zum Schutz dagegen sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Implementieren Sie clientseitige Validierung, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mithilfe integrierter HTML-Formularvalidierungsfunktionen tun, oder Sie schreiben Ihre eigene Validierung. Weitere Informationen finden Sie unter [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).
- Verwenden Sie eine Ausgabekodierung, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um eingegebene Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu vermeiden, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Ausgabekodierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Allein auf klientseitige Validierung kann man sich nicht zur Sicherheit verlassen — diese sollte mit serverseitiger Validierung kombiniert werden. Klientseitige Validierung verbessert die Benutzererfahrung und liefert sofortiges Feedback zur Validierung, ohne auf eine Rundreise zum Server warten zu müssen. Allerdings ist es für einen böswilligen Benutzer einfach, die klientseitige Validierung zu umgehen (zum Beispiel, indem er JavaScript im Browser ausschaltet, um Validierungen auf JavaScript-Basis zu umgehen).

Jedes hochwertige serverseitige Framework wird Funktionen zur Verfügung stellen, um Formulareingaben zu validieren. Eine gängige bewährte Praxis ist darüber hinaus, alle Sonderzeichen, die Teil einer ausführbaren Syntax sind, zu maskieren und so jeden eingegebenen Code nicht mehr ausführbar und als reinen Text zu behandeln.

### Schutz vor Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer dazu verleitet, auf ein UI-Element zu klicken, das eine andere Aktion ausführt, als der Benutzer erwartet, was oft dazu führt, dass vertrauliche Informationen des Benutzers an einen böswilligen Dritten weitergegeben werden. Dieses Risiko besteht bei eingebetteten Drittanbieterinhalten, daher stellen Sie sicher, dass Sie dem vertrauen, was auf Ihrer Seite eingebettet wird. Außerdem sollten Sie beachten, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Anmeldungen verwalten](#benutzeridentität_schützen_und_anmeldungen_verwalten) lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu verteidigen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwortheader kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Element/frame), [`<iframe>`](/de/docs/Web/HTML/Element/iframe), [`<embed>`](/de/docs/Web/HTML/Element/embed) oder [`<object>`](/de/docs/Web/HTML/Element/object) rendern darf. Websites können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive spezifiziert gültige Eltern, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Leitfäden zur Sicherheitsimplementierung

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und sicherzustellen, dass Sie den bewährten Praktiken folgen, sehen Sie sich unser Set von [Praktischen Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory)-Tool. Observatory führt Sicherheitsprüfungen auf einer Website durch und liefert zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme eine Bewertung und Punktzahl. Diese Leitfäden erklären, wie man die bei den MDN Observatory-Tests aufgedeckten Probleme löst: Das Tool verweist für jedes Problem auf den entsprechenden Leitfaden, der Ihnen hilft, eine effektive Lösung zu finden. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitung bei der Implementierung von Websites, um sicherzustellen, dass die besten Sicherheitspraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernbereich: Websitesicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla Sicherheitsblog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
