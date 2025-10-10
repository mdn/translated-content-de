---
title: Sicherheit im Internet
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Websites enthalten verschiedene Arten von Informationen. Einige davon sind nicht sensibel, beispielsweise der auf öffentlichen Seiten angezeigte Text. Andere sind sensibel, wie Benutzernamen, Passwörter und Bankdaten von Kunden oder interne Algorithmen und private Produktinformationen.

Sensiblen Informationen müssen geschützt werden, und das ist der Schwerpunkt der Web-Sicherheit. Wenn diese Informationen in die falschen Hände geraten, könnten sie dazu verwendet werden:

- Unternehmen wettbewerblich zu benachteiligen, indem ihre Informationen mit Wettbewerbern geteilt werden.
- Ihre Dienste zu deaktivieren oder zu kapern, was erneut zu ernsten Problemen in ihrem Betrieb führen könnte.
- Die [Privatsphäre](/de/docs/Web/Privacy) ihrer Kunden zu gefährden, indem diese anfällig für Profiling, Zielgruppenansprache, Datenverlust, Identitätsdiebstahl oder sogar finanziellen Verlust gemacht werden.

Moderne Browser verfügen bereits über mehrere Funktionen, um die Sicherheit von Nutzern im Web zu schützen, aber Entwickler müssen auch bewährte Praktiken anwenden und sorgfältig programmieren, um sicherzustellen, dass ihre Websites sicher sind. Selbst einfache Fehler in Ihrem Code können zu Schwachstellen führen, die von böswilligen Akteuren ausgenutzt werden können, um Daten zu stehlen und unbefugte Kontrolle über Dienste zu erlangen.

Dieser Artikel bietet eine Einführung in die Web-Sicherheit, einschließlich konzeptioneller Informationen, die Ihnen helfen, Website-Schwachstellen zu verstehen, und praktischer Leitfäden, wie Sie diese sichern können.

## Verhältnis zwischen Sicherheit und Privatsphäre

Sicherheit und Privatsphäre sind unterschiedliche, aber eng verwandte Themen. Es lohnt sich, die Unterschiede zwischen den beiden und ihre Beziehung zu kennen.

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies schließt sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern) ein.

- **Privatsphäre** bezieht sich auf die Kontrolle, die den Nutzern überlassen wird, wie ihre Daten gesammelt, gespeichert und verwendet werden, während gleichzeitig sichergestellt wird, dass sie nicht unverantwortlich verwendet werden. Zum Beispiel sollten Sie Ihre Benutzer darüber informieren, welche Daten Sie von ihnen sammeln, mit welchen Parteien sie geteilt werden und wie sie verwendet werden. Benutzern muss die Möglichkeit gegeben werden, Ihrer Datenschutzrichtlinie zuzustimmen, auf ihre gespeicherten Daten zuzugreifen und diese zu löschen, wenn sie möchten.

Gute Sicherheit ist unerlässlich für gute Privatsphäre. Sie könnten allen Rat in unserem [Datenschutzleitfaden](/de/docs/Web/Privacy) befolgen, aber mit Integrität handeln und eine robuste Datenschutzrichtlinie haben wäre vergeblich, wenn Ihre Site nicht sicher ist und Angreifer trotzdem Daten stehlen können.

## Sicherheitsfunktionen, die von Browsern bereitgestellt werden

Webbrowser folgen einem strengen Sicherheitsmodell, das starke Sicherheit für Inhalte, Verbindungen zwischen Browser und Server und Datenübertragung durchsetzt. Dieser Abschnitt beleuchtet die Funktionen, die diesem Modell zugrunde liegen.

### Same-Origin-Policy und CORS

Die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) ist ein grundlegender Sicherheitsmechanismus des Webs, der einschränkt, wie ein Dokument oder ein Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wurde, mit einer Ressource von einem anderen Ursprung interagieren kann. Es hilft, potenziell bösartige Dokumente zu isolieren und reduziert mögliche Angriffsvektoren.

Im Allgemeinen können Dokumente eines Ursprungs keine Anfragen an andere Ursprünge stellen. Dies ist sinnvoll, da Sie nicht möchten, dass Seiten miteinander interagieren und unbefugte Datenzugriffe erhalten.

In manchen Fällen möchten Sie diese Einschränkung jedoch lockern; zum Beispiel, wenn Sie mehrere Websites haben, die miteinander interagieren, können Sie ihnen erlauben, Ressourcen voneinander anzufordern, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden. Dies kann durch [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) gestattet werden, einem HTTP-Header-basierten Mechanismus, der einem Server erlaubt, jegliche Ursprünge (Domain, Schema oder Port) anzugeben, außer seinem eigenen, von denen ein Browser das Laden von Ressourcen erlauben soll.

### HTTP-Modell für Kommunikation

Das [HTTP](/de/docs/Web/HTTP)-Protokoll wird von Webbrowsern und Servern verwendet, um miteinander zu kommunizieren, Ressourcen anzufordern, Antworten bereitzustellen (beispielsweise eine angeforderte Ressource bereitzustellen oder mitzuteilen, warum eine Anfrage fehlschlug), und Sicherheitsfunktionen für diese Kommunikation bereitzustellen.

Transport Layer Security (TLS) bietet Sicherheit und Privatsphäre, indem sie Daten während des Transports im Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es Dritten erschwert, übertragene Daten abzufangen und bösartig zu nutzen.

Alle Browser bewegen sich in Richtung einer standardmäßigen Verwendung von HTTPS; dies ist praktisch bereits der Fall, da man ohne dieses Protokoll nicht viel im Web tun kann.

Verwandte Themen:

- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS)
  - : Das TLS-Protokoll ist der Standard, um zwei vernetzten Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter auswählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit von Daten haben kann.
- [HTTP Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Der `Strict-Transport-Security` [HTTP](/de/docs/Web/HTTP)-Header erlaubt es einer Website, anzugeben, dass sie nur über HTTPS zugegriffen werden darf.
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Certificate Transparency (CT) ist ein offenes Framework, das entwickelt wurde, um gegen und zur Überwachung von Fehlzertifikatsausstellungen zu schützen. Neu ausgegebene Zertifikate werden in öffentlich betriebenen, oft unabhängigen CT-Protokollen 'protokolliert'. Diese bieten nur hinzufügbare, kryptografisch gesicherte Aufzeichnungen über ausgestellte TLS-Zertifikate.
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
  - : Eine HTTPS-Seite, die Inhalte einbindet, die über {{Glossary("Plaintext", "Klartext")}} HTTP geladen werden, wird als **gemischte Inhalte** Seite bezeichnet. Solche Seiten sind nur teilweise verschlüsselt und lassen unverschlüsselte Inhalte für Schnüffler und Man-in-the-Middle-Angreifer zugänglich.
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
  - : Die Stärke des Hash-Algorithmus, die beim {{Glossary("Signature/Security", "Signieren")}} eines {{Glossary("digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Einige Signaturalgorithmen sind dafür bekannt, schwach zu sein, und sollten vermieden werden, wenn es angebracht ist.

### Sichere Kontexte und Funktionsberechtigungen

Browser steuern die Nutzung von "leistungsstarken Funktionen" auf verschiedene Weise. Diese "leistungsstarken Funktionen" umfassen die Generierung von Systembenachrichtigungen auf einer Webseite, die Verwendung der Webcam eines Nutzers, um Zugang zu einem Medienstream zu erhalten, die Manipulation der System-GPU und die Nutzung von Webzahlungen. Wenn eine Site diese APIs, die solche Funktionen steuern, ohne Einschränkungen verwenden könnte, könnten böswillige Entwickler versuchen, Folgendes zu tun:

- Benutzer mit unnötigen Benachrichtigungen und anderen UI-Funktionen belästigen.
- Ihre Webcam ohne Vorwarnung einschalten, um sie auszuspionieren.
- Ihren Browser/das System verstopfen, um {{Glossary("denial_of_service", "Denial of Service")}} (DoS) Angriffe zu starten.
- Daten oder Geld zu stehlen.

Diese "leistungsstarken Funktionen" werden wie folgt kontrolliert:

- Die Verwendung solcher Funktionen ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) erlaubt. Ein sicherer Kontext ist ein [`window`](/de/docs/Web/API/Window) oder ein [`worker`](/de/docs/Web/API/WorkerGlobalScope), für den es ein berechtigtes Vertrauen gibt, dass der Inhalt sicher geliefert wurde (über HTTPS/TLS). In einem sicheren Kontext ist das Potenzial der Kommunikation mit Kontexten, die **nicht** sicher sind, eingeschränkt. Sichere Kontexte helfen auch, [Man-in-the-Middle-Angreifer](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) daran zu hindern, auf leistungsstarke Funktionen zuzugreifen.

  Um eine Liste der nur in sicheren Kontexten verfügbaren Webplattform-Funktionen zu sehen, siehe [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

- Die Nutzung dieser Funktionen ist durch ein System von Benutzerberechtigungen gesperrt: Benutzer müssen ausdrücklich zustimmen, den Zugriff auf solche Funktionen zu gewähren, was bedeutet, dass sie nicht automatisch verwendet werden können. Benutzerberechtigungsanfragen erfolgen automatisch, und Sie können den Zustand einer API-Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) erfragen.

- Mehrere andere Browserfunktionen können nur als Reaktion auf eine Benutzeraktion wie das Klicken auf eine Schaltfläche verwendet werden, was bedeutet, dass sie innerhalb eines geeigneten Ereignishandlers aufgerufen werden müssen. Dies wird als **vorübergehende Aktivierung** bezeichnet. Siehe [Funktionen, die von der Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation) für weitere Informationen.

## Allgemeine Sicherheitsüberlegungen

Es gibt viele Aspekte der Websicherheit, die auf Server- und Client-Seite berücksichtigt werden müssen. Dieser Abschnitt konzentriert sich hauptsächlich auf Client-seitige Sicherheitsüberlegungen. Eine nützliche Zusammenfassung der Sicherheit aus einer Server-seitigen Perspektive, die auch Beschreibungen häufiger Angriffe enthält, auf die geachtet werden sollte, finden Sie in [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) (Teil unseres [Server-seitigen Website-Programmierungsmoduls](/de/docs/Learn_web_development/Extensions/Server-side)).

### Client-seitige Daten verantwortungsbewusst speichern

Der verantwortungsvolle Umgang mit Daten besteht hauptsächlich darin, die Verwendung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu reduzieren und vorsichtig mit den Daten zu sein, die Sie speichern und mit ihnen teilen. Traditionell haben Webentwickler Cookies verwendet, um alle möglichen Daten zu speichern, und es war für Angreifer einfach, diese Tendenz auszunutzen. Infolgedessen haben Browser damit begonnen, einzuschränken, was mit Website-übergreifenden Cookies möglich ist, mit dem Ziel, den Zugriff auf sie in Zukunft vollständig zu entfernen.

Sie sollten sich auf die Entfernung von Website-übergreifenden Cookies vorbereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie angewiesen sind, begrenzen und/oder die Speicherung der gewünschten Informationen auf andere Weise implementieren. Siehe [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies) für weitere Informationen.

### Benutzeridentität schützen und Anmeldungen verwalten

Wenn Sie eine sichere Lösung implementieren, die Datensammlung beinhaltet, insbesondere wenn die Daten sensibel sind, wie Anmeldedaten, macht es Sinn, eine seriöse Lösung zu verwenden. Zum Beispiel wird jedes respektable Server-seitige Framework über integrierte Funktionen verfügen, um gegen häufige Schwachstellen zu schützen. Sie könnten auch in Betracht ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden, zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrageanbieter.

Wenn Sie Ihre eigene Lösung zur Sammlung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie alle Aspekte und Anforderungen verstehen. Engagieren Sie einen erfahrenen Server-seitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den Client-Teil der App zu optimieren.

Hier sind einige weitere Tipps für sichere Anmeldungen:

- Erzwingen Sie beim Sammeln von Benutzeranmeldeinformationen starke Passwörter, damit die Kontodetails Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Darüber hinaus ermutigen Sie Ihre Benutzer zur Nutzung eines Passwortmanagers, damit sie komplexere Passwörter verwenden können, sich nicht um das Merken kümmern müssen und kein Sicherheitsrisiko durch das Aufschreiben schaffen. Siehe auch unseren Artikel über [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Sie sollten Ihre Benutzer auch über **Phishing** informieren. Phishing ist der Akt, einem Benutzer eine Nachricht zu senden (zum Beispiel eine E-Mail oder eine SMS), die einen Link zu einer Website enthält, die wie eine von ihnen täglich genutzte Website aussieht, es aber nicht ist. Der Link ist von einer Nachricht begleitet, die darauf abzielt, Benutzer dazu zu bringen, ihren Benutzernamen und ihr Passwort auf der Website einzugeben, damit diese gestohlen und dann von einem Angreifer für böswillige Zwecke genutzt werden können.

  > [!NOTE]
  > Einige Phishing-Sites können sehr raffiniert sein und schwer von einer echten Website zu unterscheiden. Sie sollten Ihre Benutzer daher darüber aufklären, nicht wahllos Links in E-Mails und SMS-Nachrichten zu vertrauen. Wenn sie eine Nachricht in der Art von "Dringend, Sie müssen sich jetzt anmelden, um ein Problem zu lösen" erhalten, sollten sie die Seite direkt in einem neuen Tab aufrufen und sich direkt anmelden, statt auf den Link in der Nachricht zu klicken. Oder sie könnten Sie anrufen oder Ihnen eine E-Mail schreiben, um die erhaltene Nachricht zu besprechen.

- Schützen Sie vor Brute-Force-Angriffen auf Anmeldeseiten durch {{Glossary("rate_limit", "Rate Limiting")}}, Kontosperrung nach einer bestimmten Anzahl erfolgloser Versuche und [CAPTCHA-Abfragen](https://en.wikipedia.org/wiki/CAPTCHA).
- Verwalten Sie Benutzersitzungen mit eindeutigen [Sitzungs-IDs](https://en.wikipedia.org/wiki/Session_ID), und melden Sie Benutzer automatisch nach Inaktivitätsphasen ab.

### Keine sensiblen Daten in URL-Query-Strings enthalten

Als allgemeine Regel sollten Sie [keine sensiblen Daten in URL-Query-Strings enthalten](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url), da, wenn Dritte die URL abfangen (zum Beispiel über den {{httpheader("Referer")}} HTTP-Header), sie diese Informationen stehlen könnten. Noch ernster ist die Tatsache, dass diese URLs von öffentlichen Webcrawlern, HTTP-Proxies und Archivierwerkzeuge wie dem [Internet Archive](https://web.archive.org/) indiziert werden können, was bedeutet, dass Ihre sensiblen Daten auf öffentlich zugänglichen Ressourcen persistieren könnten.

Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um diese Probleme zu vermeiden. Unser Artikel [Referer-Header-Richtlinie: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) beschreibt detaillierter die Datenschutz- und Sicherheitsrisiken, die mit dem `Referer`-Header verbunden sind, und bietet Ratschläge zur Minderung dieser Risiken.

> [!NOTE]
> Das Vermeiden der Übertragung sensibler Daten in URLs über `GET`-Anfragen kann auch helfen, sich gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} und [Replay-Angriffe](https://en.wikipedia.org/wiki/Replay_attack) zu schützen.

### Nutzungsrichtlinien durchsetzen

Erwägen Sie, Funktionen der Webplattform wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu verwenden, um einen Satz von Feature- und Ressourcen-Nutzungsregeln auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen.

CSP ermöglicht es Ihnen, eine Sicherheitsschicht hinzuzufügen, indem Sie beispielsweise nur Bilder oder Skripte aus bestimmten vertrauenswürdigen Ursprüngen laden lassen. Dies hilft, bestimmte Arten von Angriffen, einschließlich Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateneinspeisungsangriffe zu erkennen und abzuschwächen. Diese Angriffe umfassen eine Reihe bösartiger Aktivitäten, darunter Datendiebstahl, Website-Schändung und Verteilung von Malware.

Die Berechtigungsrichtlinie funktioniert ähnlich, jedoch ist sie mehr darauf ausgerichtet, den Zugriff auf bestimmte "leistungsstarke Funktionen" ([wie bereits erwähnt](#sichere_kontexte_und_funktionsberechtigungen)) zu erlauben oder zu blockieren.

> [!NOTE]
> Solche Richtlinien sind sehr nützlich, um Websites sicher zu halten, besonders wenn Sie viele Drittanbieter-Codes auf Ihrer Seite verwenden. Beachten Sie jedoch, dass Sie die Funktionalität Ihrer Site beeinträchtigen könnten, wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist.

### Datenintegrität aufrechterhalten

Anknüpfend an den vorherigen Abschnitt, wenn Sie erlauben, dass Funktionen und Ressourcen auf Ihrer Site verwendet werden, sollten Sie versuchen sicherzustellen, dass die Ressourcen nicht manipuliert wurden.

Verwandte Themen:

- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) ist eine Sicherheitsfunktion, die es Browsern ermöglicht zu überprüfen, dass Ressourcen, die sie abfragen (zum Beispiel von einem {{Glossary("CDN", "CDN")}}), ohne unerwartete Manipulation geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den eine abgefragte Ressource erfüllen muss.
- [HTTP Access-Control-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit anfragendem Code aus dem angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.
- [HTTP X-Content-Type-Options](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Der **`X-Content-Type-Options`** Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), die in den {{HTTPHeader("Content-Type")}}-Headern beworben werden, nicht geändert werden sollten und befolgt werden müssen. Dieser Header ist eine Möglichkeit, sich vom [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) abzumelden, oder mit anderen Worten, um anzugeben, dass die MIME-Typen absichtlich konfiguriert sind.

### Formulareingaben bereinigen

Als allgemeine Regel gilt, vertraue nicht auf alles, was Nutzer in Formulare eingeben. Das Ausfüllen von Formularen online ist kompliziert und mühsam, und es ist für Nutzer leicht, falsche Daten oder Daten im falschen Format einzugeben. Darüber hinaus sind böswillige Personen darin geschult, spezifische Zeichenfolgen ausführbaren Codes in Formularfelder einzugeben (zum Beispiel SQL oder JavaScript). Wenn Sie beim Umgang mit solchen Eingaben nicht vorsichtig sind, könnten diese entweder schädlichen Code auf Ihrer Seite ausführen oder Ihre Datenbanken löschen. Weitere Informationen dazu, wie dies geschehen könnte, finden Sie unter [SQL Injektion](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_injection).

Um sich dagegen zu schützen, sollten Sie die in Ihre Formulare eingegebenen Daten gründlich bereinigen:

- Sie sollten eine Client-seitige Validierung implementieren, um Benutzer darauf hinzuweisen, wenn sie Daten im falschen Format eingegeben haben. Sie können dies mithilfe integrierter HTML-Formularvalidierungsfunktionen tun oder Sie können Ihre eigene Validierungscodes schreiben. Weitere Informationen finden Sie unter [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).
- Sie sollten bei der Anzeige von Benutzereingaben in einer Anwendungsausgabe Ausgabe-Codierung verwenden, um Daten genau so sicher anzuzeigen, wie der Benutzer sie eingegeben hat und zu verhindern, dass sie als Code ausgeführt werden. Weitere Informationen finden Sie unter [Ausgabe-Codierung](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding).

Sie können sich nicht nur auf die Client-seitige Validierung für die Sicherheit verlassen — sie sollte mit der Server-seitigen Validierung kombiniert werden. Die Client-seitige Validierung verbessert die Benutzererfahrung, indem sie sofortiges Validierungsfeedback bietet, ohne auf eine Rückmeldung des Servers warten zu müssen. Allerdings ist es für einen böswilligen Akteur einfach, die Client-seitige Validierung zu umgehen (zum Beispiel durch Deaktivieren von JavaScript im Browser, um JavaScript-basierte Validierungen zu umgehen).

Jedes respektable Server-seitige Framework wird Funktionen zur Validierung von Formularübermittlungen bereitstellen. Darüber hinaus ist eine häufige Best Practice, alle Sonderzeichen zu maskieren, die Teil einer ausführbaren Syntax sind, und dadurch eingegebenen Code nicht mehr ausführbar und als Klartext zu behandeln.

### Schutz gegen Clickjacking

Bei einem [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriff wird ein Benutzer dazu gebracht, auf ein UI-Element zu klicken, das eine andere Aktion ausführt als erwartet, was oft dazu führt, dass vertrauliche Informationen des Benutzers an eine bösartige Drittpartei übermittelt werden. Dieses Risiko ist inhärent in eingebetteten Drittinhalten, also stellen Sie sicher, dass Sie dem vertrauen, was in Ihre Website eingebettet wird. Beachten Sie auch, dass Clickjacking mit Phishing-Techniken kombiniert werden kann. Sie können über Phishing im vorherigen Abschnitt [Benutzeridentität schützen und Anmeldungen verwalten](#benutzeridentität_schützen_und_anmeldungen_verwalten) lesen.

Die folgenden Funktionen können helfen, sich gegen Clickjacking zu schützen:

- [HTTP X-Frame-Options](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwortheader kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem [`<frame>`](/de/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/de/docs/Web/HTML/Reference/Elements/embed) oder [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) rendern darf. Websites können dies verwenden, um Clickjacking-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.
- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive legt gültige Eltern fest, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

## Praktische Leitfäden zur Sicherheitsimplementierung

Um umfassende Anleitungen zur effektiven Implementierung von Sicherheitsfunktionen auf Websites zu erhalten und um sicherzustellen, dass Sie bewährte Verfahren befolgen, sehen Sie sich unsere Reihe von [praktischen Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) an.

Einige dieser Leitfäden stehen in direktem Zusammenhang mit dem [HTTP Observatory](/en-US/observatory) Tool. Observatory führt Sicherheitsprüfungen auf einer Website durch und liefert eine Note und Punktzahl zusammen mit Empfehlungen zur Behebung der gefundenen Sicherheitsprobleme. Diese Leitfäden erklären, wie man Probleme löst, die bei den MDN-Observatory-Tests aufgedeckt wurden: Das Tool verlinkt für jedes Problem auf den entsprechenden Leitfaden, um Sie bei der effektiven Lösung zu unterstützen. Interessanterweise nutzen Mozillas interne Entwicklerteams diese Leitfäden bei der Implementierung von Websites, um sicherzustellen, dass Sicherheits-Best-Practices angewendet werden.

## Siehe auch

- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla Security Blog](https://blog.mozilla.org/security/)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)
