---
title: Sicherheit im Internet
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, zum Beispiel der veröffentlichte Text auf öffentlichen Seiten. Andere sind sensibel, wie zum Beispiel Kundennamen, Passwörter und Bankinformationen oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und das ist der Fokus der Web-Sicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie verwendet werden, um:

- Unternehmen dadurch in einen Wettbewerbsnachteil zu versetzen, dass ihre Informationen mit Wettbewerbern geteilt werden.
- Ihre Dienste zu deaktivieren oder zu übernehmen, was wiederum ernsthafte Probleme bei ihrem Betrieb verursachen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, wodurch diese anfällig werden für Profiling, gezielte Angriffe, Datenverlust, Identitätsdiebstahl oder sogar finanzielle Verluste.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit der Benutzer im Web zu schützen. Entwickler müssen jedoch auch bewährte Praktiken anwenden und sorgfältig kodieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler im Code können zu Schwachstellen führen, die von Angreifern ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, um Ihnen dabei zu helfen, die Schwachstellen von Websites zu verstehen, sowie praktischer Leitfäden zur Sicherung dieser.

## Beziehung zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng miteinander verbundene Themen. Es lohnt sich, die Unterschiede zwischen beiden zu kennen und zu verstehen, wie sie zusammenhängen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe).

- **Privatsphäre** bezieht sich darauf, Benutzern die Kontrolle darüber zu geben, wie ihre Daten gesammelt, gespeichert und verwendet werden, während auch sichergestellt wird, dass sie nicht unverantwortlich genutzt werden. Zum Beispiel sollten Sie Ihre Nutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit wem diese geteilt werden und wie sie verwendet werden. Nutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzrichtlinie zuzustimmen, auf ihre bei Ihnen gespeicherten Daten zuzugreifen und diese zu löschen, falls sie dies möchten.

Gute Sicherheit ist essentiell für gute Privatsphäre. Sie könnten allen Rat aus unserem [Leitfaden zur Privatsphäre im Internet](/de/docs/Web/Privacy) folgen, aber Integrität zeigen und eine robuste Datenschutzerklärung haben bringt nichts, wenn Ihre Website nicht sicher ist und Angreifer trotzdem Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser befolgen ein striktes Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server sowie den Datentransport durchsetzt. Dieser Abschnitt beschäftigt sich mit den Funktionen, die diesem Modell zugrunde liegen.

### Same-origin policy und CORS

[Same-origin policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einer {{Glossary("origin", "Herkunft")}} geladen wird, mit einer Ressource von einer anderen Herkunft interagieren kann. Es hilft, potenziell bösartige Dokumente zu isolieren und reduziert mögliche Angriffsvektoren.

Im Allgemeinen können Dokumente von einer Herkunft keine Anfragen an andere Herkunftsquellen stellen. Dies ist sinnvoll, da man nicht möchte, dass Websites miteinander interferieren und unbefugten Zugriff auf Daten erhalten.

Manchmal möchte man jedoch diese Einschränkung lockern, zum Beispiel wenn mehrere Websites miteinander interagieren sollen. Sie können es ihnen ermöglichen, mit anderen mittels [`fetch()`](/de/docs/Web/API/Window/fetch) Ressourcen anzufordern. Dies kann mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS), einem HTTP-Header-basierten Mechanismus, der einem Server erlaubt, andere als seine eigenen Ursprünge anzugeben, erlaubt werden, von denen ein Browser Ressourcen laden darf.

### HTTP-Modell zur Kommunikation

Das [HTTP](/de/docs/Web/HTTP) Protokoll wird von Webbrowsern und Servern genutzt, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten zu geben (zum Beispiel eine angeforderte Ressource bereitzustellen oder zu erklären, warum eine Anfrage gescheitert ist) und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für die Privatsphäre, weil es Dritte daran hindert, übertragene Daten abzufangen und diese böswillig zu verwenden.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; das ist praktisch schon der Fall, weil man im Internet ohne dieses Protokoll nicht viel tun kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard für den privaten und sicheren Informationsaustausch zwischen zwei vernetzten Anwendungen oder Geräten. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit von Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP) Header erlaubt es einer Website anzugeben, dass sie nur über HTTPS erreicht werden darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das darauf ausgelegt ist, gegen die Fehlvergabe von Zertifikaten zu schützen und darüber zu wachen. Neu ausgestellte Zertifikate werden in öffentlich geführten, oft unabhängigen CT-Protokollen 'geloggt'. Diese bieten nur anhängbare, kryptographisch gesicherte Aufzeichnungen der ausgegebenen TLS-Zertifikate.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte einbindet, die über {{Glossary("Plaintext", "Klartext")}} HTTP abgerufen werden, wird als **gemischte Inhalte**-Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt, wodurch der unverschlüsselte Inhalt für Lauscher und Man-in-the-Middle Angreifer zugänglich bleibt.

### Sichere Kontexte und Funktionserlaubnisse

Browser kontrollieren die Nutzung von "starken Features" auf verschiedene Weise. Zu diesen "starken Features" gehören beispielsweise das Generieren von Systembenachrichtigungen auf einer Website, die Nutzung der Webcam eines Benutzers, um Zugriff auf einen Medienstream zu erhalten, das Manipulieren des System-GPUs und die Nutzung von Web-Zahlungen. Wenn eine Seite einfach ohne Einschränkungen die APIs nutzen könnte, die solche Features steuern, könnten böswillige Entwickler Folgendes versuchen:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Features zu belästigen.
- Ihre Webcam ohne Vorwarnung einzuschalten, um sie auszuspionieren.
- Ihren Browser oder Ihr System zu blockieren, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS) Angriffe zu erzeugen.
- Daten oder Geld zu stehlen.

Diese "starken Features" sind auf folgende Weise kontrolliert:

- Die Nutzung solcher Features ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), bei dem die vernünftige Sicherheit besteht, dass der Inhalt sicher (über HTTPS/TLS) geliefert wurde. In einem sicheren Kontext ist das Potenzial für die Kommunikation mit nicht sicheren Kontexten eingeschränkt. Sichere Kontexte helfen ebenfalls, [Man-in-the-Middle Angreifer](https://de.wikipedia.org/wiki/Man-in-the-Middle-Angriff) daran zu hindern, Zugang zu starken Features zu erhalten.

  Um eine Liste von Webplattform-Features anzuzeigen, die nur in sicheren Kontexten verfügbar sind, siehe [Features eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Features ist durch ein Erlaubnissystem für Benutzer gesteuert: Benutzer müssen ausdrücklich zustimmen, um Zugang zu solchen Features zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzererlaubnisanfragen passieren automatisch, und Sie können den Status einer API-Erlaubnis mit der [Permissions API](/de/docs/Web/API/Permissions_API) abfragen.

- Mehrere andere Browser-Features können nur als Reaktion auf eine Benutzeraktion wie das Klicken eines Buttons verwendet werden, was bedeutet, dass sie von einem passenden Event-Handler aus aufgerufen werden müssen. Dies wird **transiente Aktivierung** genannt. Siehe [Features gesteuert durch Benutzeraktivierung](/de/docs/Web/Security/User_activation) für weitere Informationen.

## Sicherheitsüberlegungen auf hoher Ebene

Es gibt viele Aspekte der Web-Sicherheit, die auf Server- und Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf client-seitige Sicherheitsüberlegungen. Eine nützliche Zusammenfassung zur Sicherheit aus serverseitiger Perspektive, die auch Beschreibungen gängiger Angriffe umfasst, auf die geachtet werden muss, finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Serverseitigen Website-Programmiermoduls](/de/docs/Learn_web_development/Extensions/Server-side)).

### Verantwortungsbewusste Speicherung von clientseitigen Daten

Der verantwortungsvolle Umgang mit Daten umfasst weitgehend die Reduzierung der Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und das achtsame Handling der Daten, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle Arten von Daten zu speichern, und es war für Angreifer einfach, diese Neigung auszunutzen. Infolgedessen haben Browser damit begonnen, einzuschränken, was mit cross-site-Cookies gemacht werden kann, mit dem Ziel, den Zugang zu ihnen in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von cross-site-Cookies vorbereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder die Persistenz der gewünschten Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersatz von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzeridentität schützen und Logins verwalten

Bei der Implementierung einer sicheren Lösung, die die Erfassung von Daten beinhaltet, insbesondere wenn es sich um sensible Daten wie Anmeldeinformationen handelt, macht es Sinn, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework über eingebaute Funktionen zum Schutz gegen gängige Schwachstellen verfügen. Sie könnten auch ein spezialisiertes Produkt für Ihren Zweck in Betracht ziehen, zum Beispiel eine Identity-Provider-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten entwickeln wollen, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder einen Sicherheitsingenieur ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Ziehen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) in Betracht, um die clientseitige der App zu vereinfachen.

Hier sind einige weitere Tipps für sichere Logins:

- Erzwingen Sie bei der Erfassung von Benutzeranmeldeinformationen starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer außerdem, einen Passwort-Manager zu verwenden, damit sie komplexere Passwörter nutzen können, sich keine Sorgen über das Merken machen müssen und kein Sicherheitsrisiko eingehen, indem sie sie aufschreiben. Siehe auch unseren Artikel über [Passwortauthentifizierung](/de/docs/Web/Security/Authentication/Passwords).
- Sie sollten auch Ihre Benutzer über **Phishing** aufklären. Phishing ist der Akt des Sendens einer Nachricht an einen Benutzer (zum Beispiel eine E-Mail oder SMS), die einen Link zu einer Website enthält, die wie eine von ihm täglich genutzte Website aussieht, es aber nicht ist. Der Link wird von einer Nachricht begleitet, die Sie dazu veranlasst, Ihren Benutzernamen und Ihr Passwort auf der Seite einzugeben, damit diese gestohlen und von einem Angreifer für böswillige Zwecke verwendet werden können.

  > [!NOTE]
  > Einige Phishing-Seiten können sehr ausgeklügelt sein und sind schwer von einer echten Website zu unterscheiden. Sie sollten daher Ihre Benutzer darüber aufklären, zufälligen Links in E-Mails und SMS-Nachrichten nicht zu vertrauen. Wenn sie eine Nachricht in der Art von "Dringend, bitte loggen Sie sich jetzt ein, um ein Problem zu beheben" erhalten, sollten sie auf die Seite direkt in einem neuen Tab gehen und sich direkt einloggen, anstatt den Link in der Nachricht zu klicken. Alternativ könnten sie Sie anrufen oder Ihnen eine E-Mail schreiben, um die Nachricht zu besprechen, die sie erhalten haben.

- Schützen Sie sich vor Brute-Force-Angriffen auf Anmeldeseiten mit {{Glossary("rate_limit", "Rate-Limitierung")}}, Kontosperrungen nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Herausforderungen](https://de.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzeranmeldesitzungen mit eindeutigen [Session-IDs](https://de.wikipedia.org/wiki/Session-ID) und loggen Sie Benutzer automatisch nach Inaktivitätsperioden aus.

### Sensible Daten nicht in URL-Abfragestrings einfügen

Im Allgemeinen sollten Sie [sensible Daten nicht in URL-Abfragestrings einfügen](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da wenn ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), diese Informationen stehlen könnte. Noch schwerwiegender ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxies und Archivierungstools wie dem [Internet-Archiv](https://web.archive.org/) indexiert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen fortbestehen könnten.

Verwenden Sie `POST` Anfragen anstelle von `GET` Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt die Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem `Referer`-Header ausführlicher und bietet Ratschläge zur Risikominderung.

> [!NOTE]
> Das Ablehnen der Übertragung sensibler Daten in URLs über `GET` Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://de.wikipedia.org/wiki/Wiedergabeangriff) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie die Verwendung von Webplattform-Features wie der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Nutzungsregeln für Features und Ressourcen auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine zusätzliche Sicherheitsebene hinzuzufügen, indem Sie zum Beispiel Bilder oder Skripte nur von bestimmten vertrauenswürdigen Ursprüngen laden lassen. Dies hilft, bestimmte Arten von Angriffen zu erkennen und abzuwehren, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffen. Diese Angriffe beinhalten eine Reihe bösartiger Aktivitäten, einschließlich Datendiebstahl, Seitenverunstaltung und Malware-Verteilung.

Die Erlaubnispolitik funktioniert auf ähnliche Weise, konzentriert sich jedoch mehr auf die Erlaubnis oder Blockierung des Zugriffs auf bestimmte "starke Features" ([wie bereits erwähnt](#sichere_kontexte_und_funktionserlaubnisse)).

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viel Drittanbieter-Code auf Ihrer Seite verwenden. Beachten Sie jedoch, dass Sie bei der Blockierung eines Features, auf das ein Drittanbieter-Skript für seine Funktion angewiesen ist, möglicherweise die Funktionalität Ihrer Website beeinträchtigen.

### Datenintegrität aufrechterhalten

Im Anschluss an den vorherigen Abschnitt sollten Sie beim Zulassen von Feature- und Ressourcennutzung auf Ihrer Seite versuchen sicherzustellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist ein Sicherheitsfeature, das es Browsern ermöglicht, zu überprüfen, dass Ressourcen, die sie abrufen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ungeändert geliefert werden. Es funktioniert, indem es Ihnen erlaubt, einen kryptografischen Hash bereitzustellen, den eine abgerufene Ressource entsprechen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwortheader zeigt an, ob die Antwort mit dem anfragenden Code von der angegebenen {{Glossary("origin", "Herkunft")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwortheader ist ein Marker, der von dem Server verwendet wird, um anzuzeigen, dass die in den {{HTTPHeader("Content-Type")}}-Headern angekündigten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) nicht verändert werden dürfen und eingehalten werden müssen. Dieser Header ist eine Möglichkeit, sich gegen [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) abzumelden oder, anders gesagt, anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formulareingaben bereinigen

Im Allgemeinen gilt, dass Sie nichts vertrauen sollten, was Benutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es fällt Benutzern leicht, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen geschickt darin, spezielle Zeichenfolgen von ausführbarem Code in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie mit solchen Eingaben nicht vorsichtig umgehen, könnten sie entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Siehe [SQL-Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection) für ein gutes Beispiel, wie dies passieren könnte.

Um sich davor zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten clientseitige Validierung implementieren, um Benutzer zu informieren, wenn sie Daten im falschen Format eingegeben haben. Dies können Sie mit den eingebauten HTML-Formular-Validierungsfunktionen tun, oder Sie können eigenen Validierungscode schreiben. Siehe [Client-side-Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für mehr Informationen.
- Sie sollten eine Ausgabe-Codierung verwenden, wenn Sie Benutzereingaben in einer Anwendungs-UI anzeigen, um Daten sicher genau so anzuzeigen, wie ein Benutzer sie eingegeben hat, und zu vermeiden, dass sie als Code ausgeführt werden. Siehe [Output-Encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) für mehr Informationen.

Sie können sich nicht allein auf clientseitige Validierung für die Sicherheit verlassen – sie sollte mit der serverseitigen Validierung kombiniert werden. Die clientseitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungsfeedback ohne Wartezeit auf eine Serverrunde bietet. Dennoch ist die clientseitige Validierung einfach für eine böswillige Partei zu umgehen (zum Beispiel durch das Deaktivieren von JavaScript im Browser, um eine JavaScript-basierte Validierung zu umgehen).

Jedes respektable serverseitige Framework wird Funktionalitäten zur Validierung von Formulareinreichungen bereitstellen. Darüber hinaus ist es eine gängige Best Practice, alle Sonderzeichen, die Teil einer ausführbaren Syntax sind, zu escapen, wodurch eingegebener Code nicht mehr ausführbar ist und als Klartext behandelt wird.

### Schutz vor Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriff wird ein Benutzer dazu gebracht, ein UI-Element anzuklicken, das eine andere Aktion ausführt, als der Benutzer erwartet, was oft dazu führt, dass die vertraulichen Informationen des Benutzers an Dritte weitergegeben werden. Dieses Risiko ist in eingebetteten Inhalten von Drittanbietern inhärent, also stellen Sie sicher, dass Sie darauf vertrauen, was in Ihre Seite eingebettet wird. Darüber hinaus seien Sie sich bewusst, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Logins verwalten](#benutzeridentität_schützen_und_logins_verwalten) lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwortheader kann verwendet werden, um anzuzeigen, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern darf. Seiten können dies nutzen, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihr Inhalt nicht in andere Seiten eingebettet wird.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige Elternanwendungen an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Leitfäden zur Sicherheitsimplementierung

Für umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites und zur Sicherstellung, dass Sie bewährte Praktiken befolgen, siehe unseren Satz von [Praktischen Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides).

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory) Tool. Observatory führt Sicherheitsprüfungen auf einer Website durch und stellt eine Bewertung und Punktezahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme zur Verfügung. Diese Leitfäden erläutern, wie man die von den MDN Observatory-Tests aufgedeckten Probleme behebt: Das Tool verlinkt auf den entsprechenden Leitfaden für jedes Problem und hilft dabei, eine effektive Lösung zu finden. Interessanterweise verwenden Mozillas interne Entwicklerteams diese Anleitung, um bei der Implementierung von Websites sicherzustellen, dass bewährte Sicherheitspraktiken angewendet werden.

## Siehe auch

- [Privatsphäre im Internet](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)
