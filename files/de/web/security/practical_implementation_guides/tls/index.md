---
title: Transport Layer Security (TLS) Konfiguration
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Transport Layer Security (TLS)](/de/docs/Glossary/TLS) bietet Garantien für die Vertraulichkeit, Authentizität und Integrität aller Kommunikationsvorgänge und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen und verändert werden — dies ist oft als [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM) Angriff bekannt. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten nutzt. Das moderne Web erzwingt dies praktisch — alle Browser bewegen sich in die Richtung, standardmäßig [HTTPS](/de/docs/Glossary/HTTPS) zu verlangen, und viele Webfunktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Serversoftware so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel der Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Laden von Ressourcen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Benutzer verschlechterte Benutzeroberflächen und [Mixed Content](/de/docs/Web/Security/Mixed_content) Warnungen. Im folgenden Codebeispiel wird HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu verschlechterten Benutzeroberflächen und Mixed Content Warnungen und können es aktiven Angreifern ermöglichen, Websites zu entstellen oder Benutzer zu phishen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich machen, wenn Websites Ressourcen unsicher laden, treten diese Fehler immer noch mit erheblicher Häufigkeit im gesamten Web auf.

### Lösung

Stellen Sie sicher, dass alle Ressourcen vor der Bereitstellung über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Umleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) lauschen, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in ihre Adressleiste eingeben, da erste Browserverbindungen oft über HTTP erfolgen. Dies stellt ein anfängliches Sicherheitsrisiko bei der ersten Verbindung zu Websites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Umleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#umsetzung_von_http_strict_transport_security)).

### Lösung

Websites, die auf Port 80 lauschen, sollten nur zur gleichen Ressource auf HTTPS umleiten. Sobald die Umleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, auf die Website über HTTP zuzugreifen, automatisch auf die sichere Website umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Nutzung von HTTP vollständig deaktivieren.

Um das Problem der "verschiedenen Hosts" zu beheben:

1. Leiten Sie zuerst von http://example.com/ zu https://example.com/ um.
2. Leiten Sie dann von https://example.com/ zu https://example.org/ um.

### Beispiele

Alle eingehenden HTTP-Anfragen zur gleichen Website und URI auf HTTPS umleiten, mit NGINX:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

`site.example.org` von HTTP zu HTTPS umleiten, mit Apache:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## Umsetzung von HTTP Strict Transport Security

### Problem

Um [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM) Angriffe zu verhindern, sollten Browser nur über HTTPS auf Websites zugreifen.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser anweist, nur über HTTPS auf eine bestimmte Website zuzugreifen, selbst wenn das ursprünglich angegebene Schema HTTP war. Browser, die HSTS für eine bestimmte Website gesetzt haben, werden automatisch alle Anfragen für diese Website auf HTTPS umstellen. HSTS weist Browser auch an, TLS- und zertifikatsbezogene Fehler strikter zu behandeln, indem die Möglichkeit deaktiviert wird, die Zertifikatfehlermeldung zu umgehen.

`Strict-Transport-Security` unterstützt folgende Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser auf HTTPS umleiten.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf allen Subdomains auf HTTPS umstellen sollen. Zum Beispiel wird durch Setzen von `includeSubDomains` auf `domain.example.com` sichergestellt, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` umgestellt werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Website vorab geladen werden soll. Das Einschließen dieser Direktive bedeutet, dass Ihre Website in der [HSTS Preload Liste](https://hstspreload.org/) enthalten sein kann.

Befolgen Sie diese Schritte, um HSTS auf Ihrer Website korrekt zu implementieren:

1. Setzen Sie einen `max-age` Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Website bis zum Ablauf der Zeit weiterhin HTTPS unterstützen.
2. Setzen Sie, wenn möglich, `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Für diese Direktive ist sorgfältiges Testen erforderlich, da sie Websites auf Subdomains deaktivieren könnte, die noch kein HTTPS aktiviert haben.
3. Setzen Sie, wenn möglich, `preload`, um es zu ermöglichen, Ihre Website in die HSTS Preload Liste aufzunehmen. Besuchen Sie dazu https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie eventuelle Probleme, die es anzeigt. Webbrowser werden HTTPS-Upgrades für vorab geladene Websites ausführen, bevor sie den initialen `Strict-Transport-Security` Header erhalten. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Zugriff und wird für alle Hochrisiko-Websites empfohlen. Beachten Sie, dass das Einschließen in die HSTS Preload Liste auch `includeSubDomains` und ein `max-age` von mindestens 1 Jahr (`31536000`) erfordert.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Diese weist Browser an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie über HTTPS bereitgestellt worden. `upgrade-insecure-requests` ist für Websites mit einer großen Anzahl unsicherer veralteter URLs gedacht, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, für zwei Jahre über HTTPS auf eine Website zuzugreifen:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Anfragen von Subdomains auf HTTPS umstellen und die Website in die Preload-Liste aufnehmen:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Auch die `upgrade-insecure-requests` CSP setzen:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Siehe auch

- [Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security)
- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
- [Mixed content](/de/docs/Web/Security/Mixed_content)
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
