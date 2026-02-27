---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Defenses/Transport_Layer_Security
l10n:
  sourceCommit: 74109a487250280f5f4c1595e91dfb43efef544a
---

Transport Layer Security (TLS) ist ein Protokoll, das es einem Client ermöglicht, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Am bekanntesten ist es für die Sicherung von HTTP-Verbindungen im Web: Das daraus resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt.

TLS sichert eine Netzwerkverbindung auf drei Arten:

- **Verschlüsselung**: Die zwischen Client und Server ausgetauschten Daten werden während der Übertragung verschlüsselt, sodass sie von Angreifern nicht gelesen werden können.
- **Integrität**: Ein Angreifer kann die Daten nicht heimlich ändern (ohne entdeckt zu werden), während sie zwischen Client und Server übertragen werden.
- **Authentifizierung**: Client und Server können sich gegenseitig beweisen, dass sie die Entität sind, die sie zu sein vorgeben. Im Web authentifizieren sich in der Regel Server gegenüber Clients, aber Clients authentifizieren sich normalerweise nicht gegenüber Servern.

Insbesondere ist HTTPS der Schutz gegen einen [man-in-the-middle (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriff, bei dem sich der Angreifer zwischen den Browser des Benutzers und den Server, mit dem er sich verbindet, einschleust und den ausgetauschten Datenverkehr lesen und ändern kann.

Browser betrachten Seiten, die über HTTPS bereitgestellt werden, als sicherem Kontext [secure context](/de/docs/Web/Security/Defenses/Secure_Contexts). Viele leistungsstarke Web-APIs sind nur für Code verfügbar, der in einem sicheren Kontext ausgeführt wird.

**Alle Websites sollten alle ihre Seiten und Unterressourcen über HTTPS bereitstellen und eine Serverauthentifizierung implementieren.**

## TLS-Handshake

Wenn ein Client eine Verbindung zu einem Server unter Verwendung von TLS herstellt, wird ein initialer _Handshake_ ausgeführt, um die Sicherheitsparameter für das Protokoll festzulegen:

- Client und Server einigen sich auf die TLS-Version, die sie verwenden werden. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}), und dies ist die am weitesten verbreitete Version. TLS 1.2 wird noch von einigen Websites verwendet, und TLS 1.1 und 1.0 sollten nicht mehr verwendet werden.
- Client und Server einigen sich auf die {{Glossary("cipher_suite", "Cipher Suite")}}, die sie verwenden werden: diese definiert die Algorithmen, die sie für Schlüsselvereinbarung, Authentifizierung, Verschlüsselung und Nachrichtenauthentifizierung verwenden.
- Optional authentifizieren sich Client und Server gegenseitig. Die Client-Authentifizierung, bei der der Client dem Server beweist, wer er ist, ist im Web außerhalb einiger spezialisierter Anwendungen selten. Die Server-Authentifizierung, bei der der Server dem Client beweist, wer er ist, ist jedoch ein grundlegender Bestandteil der Websicherheit.
- Client und Server einigen sich auf einen {{Glossary("Symmetric-key_cryptography", "geheimen Schlüssel")}}, den sie zum Verschlüsseln und Entschlüsseln von Nachrichten verwenden.

Nach dem Handshake verwenden Client und Server den geheimen Schlüssel, um alle Nachrichten, einschließlich HTTP-Header und -Körper, zu verschlüsseln und zu entschlüsseln.

## TLS konfigurieren

Die Wahl der richtigen TLS-Serverkonfiguration hat großen Einfluss auf die Sicherheit der Verbindung. Insbesondere bestimmt sie die zu verwendende TLS-Version und die kryptografischen Algorithmen. Wenn Sie Ihren eigenen Server konfigurieren müssen, konsultieren Sie eine Ressource wie Mozillas [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Mozilla bietet auch einen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) an, der Konfigurationsdateien für eine Vielzahl von Webservern generiert.

## Serverauthentifizierung

Um die Serverauthentifizierung zu unterstützen, muss Ihre Website über ein {{Glossary("digital_certificate", "digitales Zertifikat")}} verfügen, das eine {{Glossary("digital_signature", "digital signierte")}} Kopie des öffentlichen Schlüssels enthält, der das Gegenstück zum privaten Schlüssel der Website darstellt. Dies bindet die Schlüssel der Website an ihren Domainnamen, sodass der Browser weiß, dass er wirklich eine Verbindung zu z. B. "https://example.com" herstellt.

[Let's Encrypt](https://letsencrypt.org/) ist eine weit verbreitete gemeinnützige Zertifizierungsstelle, die kostenlose TLS-Zertifikate ausstellt.

Moderne Webhosting-Dienste unterstützen HTTPS für Sie, entweder standardmäßig oder über eine Konfigurationseinstellung. In diesem Fall wird der Hosting-Dienst wahrscheinlich Ihr Zertifikat verwalten und den Server in Ihrem Namen konfigurieren.

## Gemischte Inhalte

Eine Website sollte HTTPS nicht nur für das Hauptdokument verwenden, sondern auch für alle Unterressourcen, die sie lädt, wie Skripte, Stylesheets, Bilder und Schriftarten. Wenn eine Website das Hauptdokument über HTTPS lädt, aber dann eine ihrer Unterressourcen über HTTP lädt, nennt man dies [gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content).

Beispielsweise, wenn ein Dokument von `https://example.org` die folgenden Inhalte einbezieht, dann stellt es gemischte Inhalte dar:

```html
<img src="http://example.org/my-image.png" />
```

Gemischte Inhalte sind unsicher, weil die Unterressourcen nicht den Schutz bekommen, den HTTPS bietet, sodass ein Angreifer sie nicht nur lesen kann, sondern möglicherweise auch modifizieren kann. Dies kann die Integrität der gesamten Seite untergraben! Beispielsweise könnten wir uns einen Angreifer vorstellen, der ein Skript so modifiziert, dass es schädlich ist. Andere Ressourcen sind weniger gefährlich als Skripte, aber immer noch potenziell gefährlich: Beispielsweise könnte ein Angreifer Bilder ändern, um Benutzer zu verwirren oder in die Irre zu führen.

Aus diesem Grund erlauben Browser keine sicheren Seiten, unsichere Unterressourcen zu laden. Stattdessen, je nach Art der Unterressource, wird die Ladeanforderung entweder aktualisiert, um HTTPS zu verwenden, oder die Anfrage wird vollständig blockiert.

Wenn es Ihnen nicht möglich ist, Ihren Code zu aktualisieren, um Ressourcen über HTTPS-URLs zu laden (zum Beispiel, weil Ihr HTML archiviert wurde), kann Ihr Server eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) setzen, die die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) enthält, und der Browser wird diese Anfragen automatisch auf HTTPS aktualisieren.

Siehe [Gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) für weitere Details.

## HTTP-Verbindungen upgraden

Selbst wenn eine Seite nur über HTTPS bereitgestellt wird, können Benutzer sie immer noch über HTTP anfordern: zum Beispiel, indem sie `http://example.org` in die Adressleiste eingeben. Um die Seite in solchen Fällen funktionsfähig zu machen, lauschen Sie auf HTTP-Anfragen und verwenden Sie eine [301 Moved Permanently](/de/docs/Web/HTTP/Reference/Status/301) Antwort, um auf die HTTPS-Version umzuleiten.

Dies gibt Angreifern jedoch die Möglichkeit, den initialen Austausch abzufangen und das Upgrade zu HTTPS zu verhindern. Dies wird manchmal als _SSL-Stripping_-Angriff bezeichnet ({{Glossary("SSL", "SSL")}} ist der Vorgänger von TLS).

Um das Risiko dieses Angriffs zu verringern, sollte der Server auch den {{httpheader("Strict-Transport-Security")}} HTTP-Antwortheader senden (auch bekannt als HSTS): dies informiert die Clients, dass die Seite wünscht, dass sie HTTPS verwenden, und wird dazu führen, dass der Browser bei allen nachfolgenden Besuchen direkt HTTPS verwendet, selbst bei solchen mit HTTP-URLs.

Mit HSTS wird SSL-Stripping verhindert, außer beim ersten Mal, wenn der Browser versucht, eine Verbindung zu Ihrer Seite herzustellen (oder, da HSTS ein Ablaufdatum hat, beim ersten Mal nach dem Ablauf eines HSTS-Eintrags im Browser). Um die Seite auch bei der ersten Verbindung oder bei Ablauf eines HSTS-Eintrags zu schützen, verwaltet Chrome eine Liste von Domains namens [HSTS-Preload-Liste](https://hstspreload.org/): Wenn eine Domain auf dieser Liste steht, wird Chrome immer HTTP-Anfragen zu HTTPS upgraden, was effektiv das Verhalten zeigt, als hätte der Server bereits den HSTS-Header gesendet. Safari und Firefox verhalten sich ähnlich und verwenden eine Liste, die von der Chrome-Liste abgeleitet ist.

## Siehe auch

- Testen von HTTPS/TLS-Konfigurationen:
  - [Mozilla HTTP Observatory](/en-US/observatory)
  - [SSL Labs](https://www.ssllabs.com/ssltest/)
- Empfohlene TLS-Konfigurationen:
  - [Mozilla empfohlene Konfigurationen](https://ssl-config.mozilla.org/)
  - [Cipherlist.eu empfohlene TLS-Konfigurationen](https://cipherlist.eu/)
