---
title: Transport Layer Security (TLS) Konfiguration
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Sicherheiten hinsichtlich der Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen werden, die Zugriff auf die Daten erhalten und diese verändern können — dies wird oft als {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch — alle Browser bewegen sich in Richtung der Anforderung von {{Glossary("HTTPS", "HTTPS")}} als Standard, und viele Web-Features können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Serversoftware so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel den Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcenladen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Benutzer abgewertete Benutzeroberflächen und [gemischte Inhalte](/de/docs/Web/Security/Mixed_content) Warnungen. Im folgenden Codebeispiel wird HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu abgewerteten Benutzeroberflächen und gemischten Inhaltswarnungen und können aktiven Angreifern ermöglichen, Websites zu verunstalten oder Benutzer zu phishen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich zeigen, wenn Websites Ressourcen unsicher laden, treten diese Fehler immer noch mit bedeutender Häufigkeit im Web auf.

### Lösung

Überprüfen Sie vor der Bereitstellung, dass alle Ressourcen über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP Umleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) lauschen, um Verbindungsfehler zu vermeiden, wenn Benutzer eine URL in die Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP erfolgen. Dies stellt ein initiales Sicherheitsrisiko während der ersten Verbindung zu Websites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Umleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#http_strict_transport_security_implementierung)).

### Lösung

Websites, die auf Port 80 lauschen, sollten nur zu derselben Ressource auf HTTPS umleiten. Sobald die Umleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, auf die Seite über HTTP zuzugreifen, automatisch zur sicheren Seite umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff bestimmt sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das Problem der "verschiedenen Hosts" zu beheben:

1. Zuerst von http\://example.com/ auf https\://example.com/ umleiten.
2. Dann von https\://example.com/ auf https\://example.org/ umleiten.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zu derselben Seite und URI auf HTTPS um, unter Verwendung von NGINX:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP auf HTTPS um, unter Verwendung von Apache:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## HTTP Strict Transport Security Implementierung

### Problem

Um {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffe zu verhindern, sollten Browser nur über HTTPS mit Seiten verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser darüber informiert, sich nur über HTTPS mit einer angegebenen Website zu verbinden, auch wenn das ursprünglich angegebene Schema HTTP war. Browser mit HSTS, das für eine bestimmte Seite gesetzt ist, werden alle Anfragen für diese Seite automatisch zu HTTPS aufwerten. HSTS weist Browser auch an, TLS- und zertifikatbezogene Fehler strenger zu behandeln, indem es die Möglichkeit deaktiviert, die Zertifikatfehlerseite zu umgehen.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser zu HTTPS umleiten werden.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen für alle Subdomains zu HTTPS aufwerten sollen. Zum Beispiel wird durch das Setzen von `includeSubDomains` auf `domain.example.com` sichergestellt, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` aufgewertet werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Seite vorab geladen werden soll. Das Einschließen dieser Direktive bedeutet, dass Ihre Website in die [HSTS-Vorladen-Liste](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age` Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Seite HTTPS weiter unterstützen, bis die Ablaufzeit erreicht ist.
2. Wenn möglich, setzen Sie `includeSubDomains`, um die Sicherheit aller Subdomains zu verbessern. Eine sorgfältige Überprüfung ist erforderlich, wenn diese Direktive gesetzt wird, da sie Websites auf Subdomains deaktivieren könnte, die noch nicht über HTTPS verfügen.
3. Wenn möglich, setzen Sie `preload`, um es zu ermöglichen, Ihre Website in die HSTS-Vorladen-Liste aufzunehmen. Um sie zur Liste hinzuzufügen, besuchen Sie https://hstspreload.org/ und geben Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie alle erwähnten Probleme. Webbrowser führen HTTPS-Upgrades für vorab geladene Seiten durch, bevor die anfänglichen `Strict-Transport-Security` Header erhalten werden. Dies verhindert [Down-Grade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Gebrauch und wird für alle stark gefährdeten Websites empfohlen. Beachten Sie, dass für die Aufnahme in die HSTS-Vorladen-Liste auch `includeSubDomains` gesetzt und `max-age` auf mindestens 1 Jahr (`31536000`) gesetzt werden muss.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Dies weist Browser an, alle unsicheren URLs einer Seite (die über HTTP serviert werden) so zu behandeln, als ob sie über HTTPS serviert worden wären. `upgrade-insecure-requests` ist für Websites mit einer großen Anzahl unsicherer alter URLs gedacht, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, sich für zwei Jahre per HTTPS mit einer Seite zu verbinden:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Subdomain-Anfragen auf HTTPS aufwerten und die Seite in die Vorladenliste aufnehmen:

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
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
