---
title: Transport Layer Security (TLS)-Konfiguration
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Sicherheitsgarantien hinsichtlich Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen, aufgerufen und verändert werden – dies wird oft als {{Glossary("MitM", "Man-in-the-Middle")}} (MiTM)-Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch – alle Browser bewegen sich in Richtung einer standardmäßigen Anforderung von {{Glossary("HTTPS", "HTTPS")}}, und viele Webfunktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Serversoftware so einrichten, dass sie eine sichere Konfiguration verwendet, welche die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, z.B. den Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Laden von Ressourcen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Benutzer verschlechterte UIs und [Mixed-Content](/de/docs/Web/Security/Mixed_content)-Warnungen. Im untenstehenden Code wird zum Beispiel HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu verschlechterten UIs und Mixed-Content-Warnungen und können es Angreifern ermöglichen, Websites zu verunstalten oder Benutzer zu täuschen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser es offensichtlich machen, wenn Websites Ressourcen unsicher laden, treten diese Fehler im Web mit erheblicher Häufigkeit auf.

### Lösung

Überprüfen Sie, dass alle Ressourcen über HTTPS geladen werden, bevor Sie sie bereitstellen.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Weiterleitung

### Problem

Websites könnten weiterhin auf Port 80 (HTTP) lauschen, um Verbindungsfehler zu verhindern, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browser-Verbindungen oft über HTTP erfolgen. Dies stellt ein anfängliches Sicherheitsrisiko bei der ersten Verbindung zu Websites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Weiterleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt werden kann (siehe [HTTP Strict Transport Security](#implementierung_von_http_strict_transport_security)).

### Lösung

Websites, die auf Port 80 lauschen, sollten nur zum gleichen Resource auf HTTPS weiterleiten. Sobald die Weiterleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, die Website über HTTP zu erreichen, automatisch zur sicheren Website umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts"-Problem zu beheben:

1. Zuerst von http\://example.com/ auf https\://example.com/ weiterleiten.
2. Anschließend von https\://example.com/ auf https\://example.org/ weiterleiten.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zur gleichen Seite und URI auf HTTPS mit NGINX um:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP auf HTTPS mit Apache um:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## Implementierung von HTTP Strict Transport Security

### Problem

Um {{Glossary("MitM", "Man-in-the-Middle")}} (MiTM)-Angriffe zu verhindern, sollten Browser nur über HTTPS mit Websites verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, nur über HTTPS mit einer bestimmten Seite zu verbinden, selbst wenn das ursprünglich angegebene Schema HTTP war. Browser mit gesetztem HSTS für eine bestimmte Seite werden alle Anfragen an diese Seite automatisch zu HTTPS upgraden. HSTS weist Browser auch an, TLS- und zertifikatbezogene Fehler strenger zu behandeln, indem die Möglichkeit deaktiviert wird, die Zertifikat-Fehlerseite zu umgehen.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser auf HTTPS umleiten.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf allen Subdomains zu HTTPS upgraden sollen. Beispielsweise wird durch das Setzen von `includeSubDomains` auf `domain.example.com` sichergestellt, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` ein Upgrade erhalten.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Seite vorab geladen werden soll. Das Hinzufügen dieser Direktive bedeutet, dass Ihre Seite in die [HSTS-Preload-Liste](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age`-Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie etwa zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Seite bis zum Erreichen des Ablaufdatums HTTPS unterstützen.
2. Setzen Sie, wenn möglich, `includeSubDomains` um die Sicherheit auf allen Subdomains zu verbessern. Eine sorgfältige Prüfung ist erforderlich, wenn diese Direktive gesetzt wird, da sie Seiten auf Subdomains deaktivieren kann, die noch kein HTTPS aktiviert haben.
3. Setzen Sie, wenn möglich, `preload`, um Ihre Website in die HSTS-Preload-Liste aufzunehmen. Um sie zur Liste hinzuzufügen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Seiten-URL in das Formular oben auf der Seite ein und beheben Sie alle erwähnten Probleme. Webbrowser werden HTTPS-Upgrades zu vorab geladenen Seiten vornehmen, bevor der initiale `Strict-Transport-Security`-Header empfangen wird. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Gebrauch und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS-Preload-Liste auch erfordert, dass `includeSubDomains` gesetzt ist und `max-age` auf mindestens 1 Jahr (`31536000`) festgelegt ist.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Diese weist Browser an, alle unsicheren URLs einer Seite (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie über HTTPS bereitgestellt worden. `upgrade-insecure-requests` ist für Websites gedacht, die viele unsichere Legacy-URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, sich zwei Jahre lang über HTTPS mit einer Website zu verbinden:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Anfragen an Subdomains auf HTTPS upgraden und die Seite in die Preload-Liste aufnehmen:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Setzen Sie auch die `upgrade-insecure-requests` CSP:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security)
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
- [Mixed content](/de/docs/Web/Security/Mixed_content)
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
