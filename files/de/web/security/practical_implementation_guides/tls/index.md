---
title: Transport Layer Security (TLS)-Konfiguration
short-title: Transport Layer Security (TLS)
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Zusicherungen über die Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen werden, die auf die Daten zugreifen und sie ändern können – dies wird oft als {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM)-Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch – alle Browser bewegen sich darauf zu, {{Glossary("HTTPS", "HTTPS")}} standardmäßig zu erfordern, und viele Web-Funktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Serversoftware so einrichten, dass eine sichere Konfiguration verwendet wird, die die Verwendung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel der Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcenladen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen werden Benutzer eine degradierte Benutzeroberfläche und [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content)-Warnungen erleben. Im folgenden Codebeispiel wird HTTP zum Laden einer JavaScript-Bibliothek fälschlicherweise verwendet:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu einer schlechten Benutzeroberfläche und Mixed Content-Warnungen und können aktiven Angreifern ermöglichen, Websites zu entstellen oder Benutzer zu täuschen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich machen, wenn Websites Ressourcen unsicher laden, treten diese Fehler im gesamten Web immer noch häufig auf.

### Lösung

Stellen Sie sicher, dass alle Ressourcen vor der Bereitstellung über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Umleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) hören, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP hergestellt werden. Dies stellt ein anfängliches Sicherheitsrisiko bei der ersten Verbindung mit Sites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Seiten Weiterleitungen von HTTP auf einem Host auf HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#implementierung_von_http_strict_transport_security)).

### Lösung

Seiten, die auf Port 80 hören, sollten nur auf die gleiche Ressource auf HTTPS umleiten. Sobald die Umleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, die Seite über HTTP zu erreichen, automatisch zur sicheren Seite umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugang gedacht sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts"-Problem zu beheben:

1. Leiten Sie zunächst von http\://example.com/ zu https\://example.com/ um.
2. Leiten Sie anschließend von https\://example.com/ zu https\://example.org/ um.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zur gleichen Website und URI auf HTTPS um, mit NGINX:

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

Um {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM)-Angriffe zu verhindern, sollten Browser nur über HTTPS auf Seiten zugreifen.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, sich nur über HTTPS mit einer bestimmten Seite zu verbinden, auch wenn das ursprünglich angegebene Schema HTTP war. Browser, die HSTS für eine bestimmte Site gesetzt haben, werden alle Anfragen für diese Site automatisch auf HTTPS hochstufen. HSTS weist Browser auch an, TLS- und zertifikatsbezogene Fehler strenger zu behandeln, indem die Möglichkeit, die Zertifikatsfehlermeldungsseite zu umgehen, deaktiviert wird.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser auf HTTPS umleiten.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an ob Browser Anfragen auf allen Subdomains auf HTTPS hochstufen sollen. Zum Beispiel sorgt das Setzen von `includeSubDomains` auf `domain.example.com` dafür, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` hochgestuft werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Site vorab geladen werden soll. Das Hinzufügen dieser Direktive bedeutet, dass Ihre Site in die [HSTS Preload-Liste](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age`-Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert festgelegt ist, muss die Seite weiterhin HTTPS unterstützen, bis die Ablaufzeit erreicht ist.
2. Setzen Sie, wenn möglich, `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Eine sorgfältige Prüfung ist erforderlich, wenn diese Direktive festgelegt ist, da dies Seiten auf Subdomains deaktivieren könnte, die noch kein HTTPS aktiviert haben.
3. Setzen Sie, wenn möglich, `preload`, um die Möglichkeit zu schaffen, Ihre Website in die HSTS Preload-Liste aufzunehmen. Um es in die Liste aufzunehmen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie alle angesprochenen Probleme. Webbrowser führen HTTPS-Upgrades zu vorab geladenen Seiten durch, bevor sie den ursprünglichen `Strict-Transport-Security`-Header empfangen. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Gebrauch und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS Preload-Liste auch erfordert, dass `includeSubDomains` gesetzt ist und `max-age` auf mindestens 1 Jahr (`31536000`) gesetzt ist.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) in Ihrem {{httpheader("Content-Security-Policy")}} setzen. Dies weist Browser an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) als über HTTPS bereitgestellt zu behandeln. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer älterer URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, für zwei Jahre über HTTPS eine Verbindung zu einer Seite herzustellen:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Subdomain-Anfragen auf HTTPS hochstufen und die Seite in die Preload-Liste aufnehmen:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Auch die `upgrade-insecure-requests` CSP setzen:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Transparenz-Zertifikate](/de/docs/Web/Security/Defenses/Certificate_Transparency)
- [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content)
