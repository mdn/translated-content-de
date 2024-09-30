---
title: Transport Layer Security (TLS) Konfiguration
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Transport Layer Security (TLS)](/de/docs/Glossary/TLS) bietet Garantien für die Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Internet gesendet werden, können sie von Dritten abgefangen werden, die auf die Daten zugreifen und sie verändern können – dies wird oft als ein [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM)-Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Konsequenzen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch – alle Browser bewegen sich in Richtung der Standardeinstellung [HTTPS](/de/docs/Glossary/HTTPS) und viele Web-Features können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) genutzt werden.

### Lösung

Sie sollten Ihre Server-Software so konfigurieren, dass eine sichere Konfiguration eingerichtet wird, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es stehen mehrere TLS-Konfigurationsgeneratoren zur Verfügung, die hierbei helfen können, zum Beispiel der Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Werkzeug bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcennachladen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Dadurch erleben Nutzer eine degradierte Benutzeroberfläche und [gemischten Inhalt](/de/docs/Web/Security/Mixed_content) Warnungen. Im folgenden Codebeispiel wird HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnliche Versuche, passive Inhalte wie Bilder unsicher zu laden, sind zwar weniger riskant, führen jedoch trotzdem zu degradierten Benutzeroberflächen und gemischten Inhalt Warnungen und können aktiven Angreifern ermöglichen, Websites zu verunstalten oder Benutzer zu phishing. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Auch wenn moderne Browser deutlich machen, wenn Webseiten Ressourcen unsicher laden, treten diese Fehler auf dem gesamten Web immer noch mit erheblicher Häufigkeit auf.

### Lösung

Stellen Sie sicher, dass vor der Bereitstellung alle Ressourcen über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Weiterleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) horchen, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP erfolgen. Dies stellt ein Sicherheitsrisiko beim ersten Verbindungsaufbau zu Seiten dar, da diese Verbindung nicht durch TLS geschützt ist.

Außerdem sollten Websites Weiterleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies das Setzen von `Strict-Transport-Security` für den ersten Host verhindert (siehe [HTTP Strict Transport Security](#implementierung_von_http_strict_transport_security)).

### Lösung

Websites, die auf Port 80 horchen, sollten nur auf die gleiche Ressource auf HTTPS umleiten. Sobald die Weiterleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche des Zugriffs auf die Website via HTTP automatisch zur sicheren Seite umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts" Problem zu beheben:

1. Leiten Sie zuerst von http://example.com/ zu https://example.com/ um.
2. Leiten Sie anschließend von https://example.com/ zu https://example.org/ um.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen auf dieselbe Seite und URI auf HTTPS um, mit NGINX:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP zu HTTPS um, mit Apache:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## Implementierung von HTTP Strict Transport Security

### Problem

Um [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM)-Angriffe zu verhindern, sollten Browser nur über HTTPS auf Websites zugreifen.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, nur noch über HTTPS auf eine bestimmte Website zuzugreifen, selbst wenn das ursprünglich angegebene Schema HTTP war. Browser mit HSTS für eine bestimmte Seite werden automatisch alle Anfragen auf HTTPS für diese Seite umstellen. HSTS weist Browser auch an, Fehler im Zusammenhang mit TLS und Zertifikaten strenger zu behandeln, indem die Möglichkeit zur Umgehung der Zertifikatfehlerseite deaktiviert wird.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Bestimmt die Dauer in Sekunden, für die Browser zu HTTPS umleiten.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf allen Subdomains zu HTTPS umleiten sollen. Beispielsweise stellt das Setzen von `includeSubDomains` auf `domain.example.com` sicher, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` ebenso wie `domain.example.com` umgestellt werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Seite vorab geladen werden soll. Die Aufnahme dieser Direktive bedeutet, dass Ihre Seite in die [HSTS preload list](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age`-Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zum Beispiel zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Seite weiterhin HTTPS unterstützen, bis die Ablaufzeit erreicht ist.
2. Wenn möglich, setzen Sie `includeSubDomains`, um die Sicherheit auf allen Subdomains zu erhöhen. Eine sorgfältige Prüfung ist erforderlich, wenn diese Direktive gesetzt wird, da sie Seiten auf Subdomains deaktivieren könnte, die noch nicht HTTPS aktiviert haben.
3. Wenn möglich, setzen Sie `preload`, um Ihre Website in die HSTS preload list aufzunehmen. Um sie der Liste hinzuzufügen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie die dort genannten Probleme. Webbrowser führen HTTPS-Upgrades zu vorab geladenen Seiten durch, bevor der initiale `Strict-Transport-Security`-Header empfangen wird. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) bei der ersten Verwendung und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass für die Aufnahme in die HSTS preload list auch `includeSubDomains` gesetzt sein muss und `max-age` auf mindestens einem Jahr (`31536000`) festgelegt sein muss.

Zusätzlich zu `Strict-Transport-Security` sollten Sie auch die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Diese Direktive weist Browser an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie über HTTPS bereitgestellt worden. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer alter URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, für zwei Jahre via HTTPS auf eine Website zuzugreifen:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Subdomain-Anfragen auf HTTPS umstellen und die Seite in die preload list aufnehmen:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Setzen Sie auch die `upgrade-insecure-requests` CSP:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security)
- [Zertifikattransparenz](/de/docs/Web/Security/Certificate_Transparency)
- [Gemischter Inhalt](/de/docs/Web/Security/Mixed_content)
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
