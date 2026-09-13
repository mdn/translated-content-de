---
title: Transport Layer Security (TLS) Konfiguration
short-title: Transport Layer Security (TLS)
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Sicherheiten bezüglich der Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen werden, die auf die Daten zugreifen und diese verändern können – dies wird oft als {{Glossary("MitM", "Manipulator in der Mitte")}} (MiTM) Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Konsequenzen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS verwendet, um die Daten zu verschlüsseln. Das moderne Web erzwingt dies praktisch – alle Browser bewegen sich in Richtung der Standardanforderung von {{Glossary("HTTPS", "HTTPS")}}, und viele Webfunktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Server-Software so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, wie beispielsweise der Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet verschiedene Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcenladen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Nutzer verschlechterte Benutzeroberflächen und [Mischinhalts](/de/docs/Web/Security/Defenses/Mixed_content) Warnungen. Im untenstehenden Code wird beispielsweise HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu verschlechterten Benutzeroberflächen und Mischinhaltswarnungen und können es aktiven Angreifern erlauben, Websites zu verunstalten oder Nutzer zu täuschen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich machen, wenn Websites Ressourcen unsicher laden, treten diese Fehler im gesamten Web nach wie vor mit großer Häufigkeit auf.

### Lösung

Stellen Sie sicher, dass alle Ressourcen vor der Bereitstellung über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Umleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) hören, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP hergestellt werden. Dies stellt während der ersten Verbindung zu den Seiten ein anfängliches Sicherheitsrisiko dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Umleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host eingestellt wird (siehe [HTTP Strict Transport Security](#http_strict_transport_security_implementierung)).

### Lösung

Websites, die auf Port 80 hören, sollten nur auf dieselbe Ressource über HTTPS umleiten. Sobald die Umleitung stattgefunden hat, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, auf die Website über HTTP zuzugreifen, automatisch auf die sichere Website umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts"-Problem zu beheben:

1. Zuerst weiterleiten von http\://example.com/ zu https\://example.com/.
2. Dann weiterleiten von https\://example.com/ zu https\://example.org/.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zur selben Website und URI über HTTPS mithilfe von NGINX um:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP zu HTTPS mithilfe von Apache um:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## HTTP Strict Transport Security Implementierung

### Problem

Um {{Glossary("MitM", "Manipulator in der Mitte")}} (MiTM) Angriffe zu verhindern, sollten Browser nur über HTTPS zu Websites verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, nur über HTTPS mit einer bestimmten Website zu verbinden, auch wenn das ursprünglich angegebene Schema HTTP war. Browser mit gesetztem HSTS für eine bestimmte Website werden alle Anfragen für diese Website automatisch auf HTTPS upgraden. HSTS sagt Browsern auch, TLS- und zertifikatbezogene Fehler strenger zu behandeln, indem die Möglichkeit deaktiviert wird, die Zertifikatsfehlerseite zu umgehen.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser zu HTTPS umleiten.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser auch Anfragen auf allen Subdomains zu HTTPS upgraden sollen. Wenn zum Beispiel `includeSubDomains` auf `domain.example.com` gesetzt wird, wird sichergestellt, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` aufgewertet werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Website vorab geladen werden soll. Das Einfügen dieser Direktive bedeutet, dass Ihre Website in die [HSTS preload list](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age` Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Website weiterhin HTTPS unterstützen, bis die Ablaufzeit erreicht ist.
2. Setzen Sie, wenn möglich, `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Sorgfältige Tests sind erforderlich beim Setzen dieser Direktive, da sie Websites auf Subdomains, die noch kein HTTPS aktiviert haben, deaktivieren könnte.
3. Setzen Sie, wenn möglich, `preload`, um die Aufnahme Ihrer Website in die HSTS preload list zu ermöglichen. Um sie auf die Liste zu setzen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie die dort genannten Probleme. Webbrowser werden HTTPS-Upgrades zu vorab geladenen Websites ausführen, bevor sie den initialen `Strict-Transport-Security` Header erhalten. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Gebrauch und wird für alle Hochrisikowebsites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS preload list auch erfordert, dass `includeSubDomains` gesetzt ist und `max-age` auf mindestens 1 Jahr (`31536000`) gesetzt ist.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Dies weist Browser an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie über HTTPS bereitgestellt worden. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer Legacy-URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, sich über HTTPS mit einer Website für zwei Jahre zu verbinden:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, aktualisieren Sie zusätzlich Subdomain-Anfragen zu HTTPS und nehmen Sie die Website in die Preload-Liste auf:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Setzen Sie auch die `upgrade-insecure-requests` CSP:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
- [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content)
