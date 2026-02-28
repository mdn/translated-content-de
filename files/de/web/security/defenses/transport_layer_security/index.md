---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Defenses/Transport_Layer_Security
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Transport Layer Security (TLS) ist ein Protokoll, das es einem Client ermöglicht, sicher mit einem Server über ein nicht vertrauenswürdiges Netzwerk zu kommunizieren. Am bekanntesten ist seine Verwendung zur Sicherung von HTTP-Verbindungen im Web: Das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt.

TLS sichert eine Netzwerkverbindung auf drei Arten:

- **Verschlüsselung**: Die zwischen Client und Server ausgetauschten Daten werden während der Übertragung verschlüsselt, sodass sie von Angreifern nicht gelesen werden können.
- **Integrität**: Ein Angreifer kann Daten nicht heimlich ändern (ohne dass es bemerkt wird), während sie zwischen Client und Server übertragen werden.
- **Authentifizierung**: Client und Server können sich gegenseitig nachweisen, dass sie die Entität sind, die sie vorgeben zu sein. Im Web authentifizieren sich in der Regel Server gegenüber Clients, aber Clients authentifizieren sich normalerweise nicht gegenüber Servern.

Insbesondere ist HTTPS die Verteidigung gegen einen [Angriff eines Mittelsmannes (MITM)](/de/docs/Web/Security/Attacks/MITM), bei dem sich der Angreifer zwischen den Browser des Benutzers und den Server, mit dem er sich verbindet, einfügt und den ausgetauschten Datenverkehr lesen und ändern kann.

Browser betrachten Seiten, die über HTTPS geliefert werden, als Bereitstellung eines [sicheren Kontexts](/de/docs/Web/Security/Defenses/Secure_Contexts). Viele leistungsstarke Web-APIs stehen nur Code zur Verfügung, der in einem sicheren Kontext ausgeführt wird.

**Alle Websites sollten alle ihre Seiten und Subressourcen über HTTPS bereitstellen und eine Serverauthentifizierung implementieren.**

## TLS-Handschlag

Wenn ein Client sich mit einem Server über TLS verbindet, legt ein initialer _Handschlag_ die Sicherheitsparameter für das Protokoll fest:

- Client und Server einigen sich auf die zu verwendende TLS-Version. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}), und dies ist die am weitesten verbreitete Version. TLS 1.2 wird noch von einigen Websites verwendet, TLS 1.1 und 1.0 sollten nicht mehr verwendet werden.
- Client und Server einigen sich auf die zu verwendende {{Glossary("cipher_suite", "Cipher Suite")}}: Diese definiert die Algorithmen, die sie für Schlüsselvereinbarung, Authentifizierung, Verschlüsselung und Nachrichtenauthentifizierung verwenden werden.
- Optional authentifizieren sich Client und Server gegenseitig. Die Client-Authentifizierung, bei der der Client dem Server seine Identität nachweist, ist im Web selten, abgesehen von einigen spezialisierten Anwendungen. Die Serverauthentifizierung, bei der der Server dem Client seine Identität nachweist, ist jedoch ein grundlegender Bestandteil der Websicherheit.
- Client und Server einigen sich auf einen {{Glossary("Symmetric-key_cryptography", "geheimen Schlüssel")}}, den sie zum Verschlüsseln und Entschlüsseln von Nachrichten verwenden werden.

Nach dem Handschlag verwenden Client und Server den geheimen Schlüssel, um alle Nachrichten zu verschlüsseln und zu entschlüsseln, einschließlich HTTP-Headern und -Körpern.

## TLS-Konfiguration

Die Wahl der richtigen TLS-Serverkonfiguration hat einen großen Einfluss auf die Sicherheit der Verbindung. Insbesondere bestimmt sie die zu verwendende TLS-Version und die kryptografischen Algorithmen. Wenn Sie Ihren eigenen Server konfigurieren müssen, konsultieren Sie eine Ressource wie Mozillas [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Mozilla bietet auch einen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/), der Konfigurationsdateien für eine Vielzahl von Webservern erstellt.

## Serverauthentifizierung

Um die Serverauthentifizierung zu unterstützen, muss Ihre Website über ein {{Glossary("digital_certificate", "digitales Zertifikat")}} verfügen, das eine {{Glossary("digital_signature", "digital signierte")}} Kopie des öffentlichen Schlüssels enthält, der das Gegenstück zum privaten Schlüssel der Website ist. Dies bindet die Schlüssel der Website an ihren Domainnamen, sodass der Browser weiß, dass er sich tatsächlich mit beispielsweise "https://example.com" verbindet.

[Let's Encrypt](https://letsencrypt.org/) ist eine weit verbreitete gemeinnützige Zertifizierungsstelle, die kostenlose TLS-Zertifikate ausstellt.

Moderne Webhosting-Dienste unterstützen HTTPS für Sie, entweder standardmäßig oder über eine Konfigurationseinstellung. In diesem Fall verwaltet der Hosting-Service wahrscheinlich Ihr Zertifikat und konfiguriert den Server in Ihrem Namen.

## Gemischter Inhalt

Eine Website sollte HTTPS nicht nur für das Hauptdokument, sondern auch für alle geladenen Unterressourcen wie Skripte, Stylesheets, Bilder und Schriftarten verwenden. Wenn eine Website das Hauptdokument über HTTPS lädt, aber dann eine ihrer Unterressourcen über HTTP lädt, wird dies als [gemischter Inhalt](/de/docs/Web/Security/Defenses/Mixed_content) bezeichnet.

Wenn beispielsweise ein Dokument von `https://example.org` den folgenden Inhalt einschließt, dann stellt es gemischten Inhalt dar:

```html
<img src="http://example.org/my-image.png" />
```

Gemischter Inhalt ist unsicher, da die Unterressourcen nicht den Schutz erhalten, den HTTPS bietet, sodass ein Angreifer sie nicht nur lesen, sondern möglicherweise auch ändern kann. Dies kann die Integrität der gesamten Seite untergraben! Ein Angreifer könnte zum Beispiel ein Skript ändern, um sich schädlich zu verhalten. Andere Ressourcen sind weniger gefährlich als Skripte, aber dennoch potenziell gefährlich: Ein Angreifer könnte beispielsweise Bilder ändern, um Benutzer zu verwirren oder in die Irre zu führen.

Aus diesem Grund erlauben Browser es nicht, dass sichere Seiten unsichere Unterressourcen laden. Abhängig vom Typ der Unterressource wird entweder die Laderichtlinie auf HTTPS aktualisiert oder die Anfrage vollständig blockiert.

Wenn es nicht möglich ist, Ihren Code so zu aktualisieren, dass Ressourcen von HTTPS-URLs geladen werden (zum Beispiel, weil Ihr HTML archiviert wurde), kann Ihr Server eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) setzen, die die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) enthält und der Browser wird diese Anfragen automatisch auf HTTPS upgraden.

Siehe [Gemischter Inhalt](/de/docs/Web/Security/Defenses/Mixed_content) für weitere Details.

## HTTP-Verbindungen upgraden

Auch wenn eine Website nur über HTTPS bereitgestellt wird, können Benutzer trotzdem Anfragen über HTTP stellen, zum Beispiel indem sie `http://example.org` in die Adressleiste eingeben. Um sicherzustellen, dass die Seite in solchen Fällen funktioniert, hören Sie auf HTTP-Anfragen und verwenden Sie eine [301 Permanent Verschoben](/de/docs/Web/HTTP/Reference/Status/301)-Antwort, um auf die HTTPS-Version umzuleiten.

Allerdings gibt dies Angreifern die Möglichkeit, den anfänglichen Austausch abzufangen und zu verhindern, dass das Upgrade auf HTTPS stattfindet. Dies wird manchmal als _SSL-Stripping_ Angriff bezeichnet ({{Glossary("SSL", "SSL")}} ist der Vorgänger von TLS).

Um das Risiko dieses Angriffs zu verringern, sollte der Server auch den {{httpheader("Strict-Transport-Security")}} HTTP-Antwort-Header senden (auch bekannt als HSTS): dies informiert die Clients darüber, dass die Website wünscht, HTTPS zu verwenden, und führt dazu, dass der Browser bei allen zukünftigen Besuchen direkt über HTTPS verbindet, selbst wenn diese mit HTTP-URLs getätigt werden.

Mit HSTS wird SSL-Stripping verhindert, außer beim ersten Mal, wenn der Browser versucht, sich mit Ihrer Website zu verbinden (oder, da HSTS ein Ablaufdatum hat, beim ersten Mal nach Ablauf eines HSTS-Eintrags im Browser). Um die Website auch bei der ersten Verbindung oder nach Ablauf des HSTS-Eintrags zu schützen, führt Chrome eine Liste von Domains, die als [HSTS Preload-Liste](https://hstspreload.org/) bekannt ist: Wenn eine Domain auf dieser Liste steht, wird Chrome HTTP-Anfragen immer auf HTTPS upgraden, was effektiv so funktioniert, als hätte der Server bereits den HSTS-Header gesendet. Safari und Firefox verhalten sich ähnlich und verwenden eine Liste, die von der Chrome-Liste abgeleitet ist.

## Siehe auch

- Testen von HTTPS/TLS-Konfigurationen:
  - [Mozilla HTTP Observatory](/en-US/observatory)
  - [SSL Labs](https://www.ssllabs.com/ssltest/)
- Empfohlene TLS-Konfigurationen:
  - [Mozilla empfohlene Konfigurationen](https://ssl-config.mozilla.org/)
  - [Cipherlist.eu empfohlene TLS-Konfigurationen](https://cipherlist.eu/)
