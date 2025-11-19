---
title: Transport Layer Security (TLS) Konfiguration
short-title: Transport Layer Security (TLS)
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Sicherheiten bezüglich der Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen werden, die auf die Daten zugreifen und sie ändern können — dies wird oft als {{Glossary("MitM", "Manipulator-in-der-Mitte")}} (MiTM) Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch — alle Browser bewegen sich in Richtung der standardmäßigen Anforderung von {{Glossary("HTTPS", "HTTPS")}}, und viele Web-Features können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Server-Software so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel den Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcenladen

### Problem

Alle Ressourcen, unabhängig von ihrem Ursprung, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen werden Benutzer eine verschlechterte Benutzeroberfläche und [gemischte Inhalte](/de/docs/Web/Security/Mixed_content) Warnungen erleben. Im nachfolgenden Code-Beispiel wird HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger risikoreich, dennoch zu verschlechterten Benutzeroberflächen und gemischten Inhalten Warnungen und können es aktiven Angreifern ermöglichen, Websites zu defacen oder Benutzer zu phishen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich machen, wann Websites Ressourcen unsicher laden, treten diese Fehler im Web immer noch mit erheblicher Häufigkeit auf.

### Lösung

Verifizieren Sie vor der Bereitstellung, dass alle Ressourcen über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Weiterleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) hören, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP erfolgen. Dies stellt ein anfängliches Sicherheitsrisiko während der ersten Verbindung zu Seiten dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Seiten Weiterleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#http_strict_transport_security_implementierung)).

### Lösung

Seiten, die auf Port 80 hören, sollten nur auf die gleiche Ressource auf HTTPS weiterleiten. Sobald die Weiterleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, auf die Seite über HTTP zuzugreifen, automatisch auf die sichere Seite umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Nutzung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts"-Problem zu lösen:

1. Leiten Sie zuerst von http\://example.com/ zu https\://example.com/ um.
2. Leiten Sie anschließend von https\://example.com/ zu https\://example.org/ um.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zu derselben Website und URI auf HTTPS mit NGINX um:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP zu HTTPS mit Apache um:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## HTTP Strict Transport Security Implementierung

### Problem

Um {{Glossary("MitM", "Manipulator-in-der-Mitte")}} (MiTM) Angriffe zu verhindern, sollten Browser nur über HTTPS mit Seiten verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, nur über HTTPS mit einer bestimmten Seite zu verbinden, selbst wenn das ursprünglich angegebene Schema HTTP war. Browser, die HSTS für eine gegebene Seite eingestellt haben, werden automatisch alle Anfragen zu HTTPS für diese Seite hochstufen. HSTS weist Browser auch an, TLS- und zertifikatsbezogene Fehler strenger zu behandeln, indem die Möglichkeit deaktiviert wird, die Zertifikatsfehlermeldung zu umgehen.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser zu HTTPS weiterleiten werden.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf allen Subdomains zu HTTPS hochstufen sollen. Zum Beispiel wird durch das Setzen von `includeSubDomains` auf `domain.example.com` sichergestellt, dass Anfragen zu `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` hochgestuft werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Seite vorab geladen werden soll. Die Aufnahme dieser Direktive bedeutet, dass Ihre Seite in die [HSTS-Vorliste](https://hstspreload.org/) aufgenommen werden kann.

Folgen Sie diesen Schritten, um HSTS auf Ihrer Website korrekt zu implementieren:

1. Setzen Sie einen `max-age` Wert von mindestens sechs Monaten (`15768000`). Längere Perioden, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Seite weiterhin HTTPS unterstützen, bis die Ablaufzeit erreicht ist.
2. Setzen Sie nach Möglichkeit `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Eine sorgfältige Prüfung ist erforderlich, wenn diese Direktive gesetzt wird, da sie Seiten auf Subdomains, die noch nicht HTTPS aktiviert haben, deaktivieren könnte.
3. Setzen Sie nach Möglichkeit `preload`, um es zu ermöglichen, Ihre Website in die HSTS-Vorliste aufzunehmen. Um sie in die Liste aufzunehmen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie alle erwähnten Probleme. Webbrowser werden HTTPS-Upgrades zu vorab geladenen Seiten durchführen, bevor der anfängliche `Strict-Transport-Security` Header empfangen wird. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) bei der ersten Nutzung und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS-Vorliste auch die Einstellung von `includeSubDomains` und das Setzen von `max-age` auf mindestens 1 Jahr (`31536000`) erfordert.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Diese weist Browser an, alle unsicheren URLs einer Seite (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie über HTTPS bereitgestellt worden. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer älterer URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, eine Verbindung zu einer Seite über HTTPS für zwei Jahre herzustellen:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, aktualisieren Sie zusätzlich Subdomain-Anfragen zu HTTPS und nehmen die Seite in die Vorladeliste auf:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Setzen Sie auch die `upgrade-insecure-requests` CSP:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport layer security (TLS)](/de/docs/Web/Security/Transport_Layer_Security)
- [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency)
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
