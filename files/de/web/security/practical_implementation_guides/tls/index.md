---
title: Transport Layer Security (TLS)-Konfiguration
short-title: Transport Layer Security (TLS)
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

{{Glossary("TLS", "Transport Layer Security (TLS)")}} bietet Sicherheiten hinsichtlich der Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Web gesendet werden, können sie von Dritten abgefangen werden, die Zugriff auf die Daten erlangen und diese verändern können — dies wird oft als {{Glossary("MitM", "Manipulator-in-der-Mitte")}} (MiTM) Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS verwendet, um die Daten zu verschlüsseln. Das moderne Web erzwingt dies praktisch — alle Browser bewegen sich in Richtung einer Standardanforderung von {{Glossary("HTTPS", "HTTPS")}}, und viele Webfunktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

### Lösung

Sie sollten Ihre Server-Software so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel den Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet verschiedene Optionen basierend auf Mozillas [TLS-Richtlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcenladen

### Problem

Alle Ressourcen, unabhängig von ihrer Herkunft, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Webseiten, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Nutzer verschlechterte Benutzeroberflächen und [Mixed Content](/de/docs/Web/Security/Mixed_content)-Warnungen. Im untenstehenden Code wird zum Beispiel HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ähnlich führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, immer noch zu verschlechterten Benutzeroberflächen und Mixed Content-Warnungen und können aktiven Angreifern ermöglichen, Websites zu verunstalten oder Benutzer zu täuschen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser deutlich machen, wenn Websites Ressourcen unsicher laden, treten diese Fehler immer noch häufig im Internet auf.

### Lösung

Überprüfen Sie, dass alle Ressourcen über HTTPS geladen werden, bevor Sie die Website bereitstellen.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Umleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) lauschen, um Verbindungsfehler zu verhindern, wenn Nutzer eine URL in ihre Adressleiste eingeben, da initiale Browserverbindungen oft über HTTP hergestellt werden. Dies stellt ein anfängliches Sicherheitsrisiko während der ersten Verbindung zu Websites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Umleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#implementierung_von_http_strict_transport_security)).

### Lösung

Websites, die auf Port 80 lauschen, sollten nur auf dieselbe Ressource über HTTPS umleiten. Sobald die Umleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Zugriffsversuche auf die Website über HTTP automatisch zur sicheren Website umgeleitet werden.

APIs oder Websites, die nicht für den öffentlichen Zugriff vorgesehen sind, sollten die Verwendung von HTTP vollständig deaktivieren.

Um das Problem der "unterschiedlichen Hosts" zu beheben:

1. Leiten Sie zuerst von http\://example.com/ zu https\://example.com/ um.
2. Leiten Sie dann von https\://example.com/ zu https\://example.org/ um.

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

Um {{Glossary("MitM", "Manipulator-in-der-Mitte")}} (MiTM)-Angriffe zu verhindern, sollten Browser nur über HTTPS mit Websites verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser anweist, nur über HTTPS mit einer bestimmten Website zu verbinden, auch wenn das ursprünglich angegebene Schema HTTP war. Browser, die HSTS für eine bestimmte Site gesetzt haben, upgraden automatisch alle Anfragen zu HTTPS für diese Site. HSTS teilt den Browsern auch mit, TLS- und zertifikatsbezogene Fehler strenger zu behandeln, indem es die Möglichkeit deaktiviert, die Zertifikatsfehlerseite zu umgehen.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser zu HTTPS umleiten werden.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf alle Subdomains zu HTTPS upgraden sollten. Beispielsweise sorgt das Setzen von `includeSubDomains` auf `domain.example.com` dafür, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` ebenso wie an `domain.example.com` aufgerüstet werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Website vorab geladen werden soll. Das Einschließen dieser Direktive bedeutet, dass Ihre Website in die [HSTS-Vorladeliste](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age`-Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert festgelegt ist, muss die Site HTTPS bis zum Ablauf unterstützen.
2. Wenn möglich, setzen Sie `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Sorgfältige Tests sind erforderlich, wenn diese Direktive gesetzt wird, da sie Sites auf Subdomains deaktivieren könnte, die noch kein HTTPS aktiviert haben.
3. Wenn möglich, setzen Sie `preload`, damit Ihre Website in die HSTS-Vorladeliste aufgenommen werden kann. Um sie in die Liste aufzunehmen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Website-URL in das Formular oben auf der Seite ein und beheben Sie alle gemeldeten Probleme. Webbrowser führen HTTPS-Upgrades auf vorab geladenen Sites durch, bevor sie den anfänglichen `Strict-Transport-Security`-Header erhalten. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) bei der ersten Verwendung und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS-Vorladeliste auch erfordert, dass `includeSubDomains` gesetzt ist und `max-age` auf mindestens 1 Jahr (`31536000`) festgelegt ist.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) in Ihrem {{httpheader("Content-Security-Policy")}} setzen. Dies weist Browser an, alle unsicheren URLs einer Website (solche, die über HTTP bereitgestellt werden) so zu behandeln, als ob sie über HTTPS bereitgestellt wurden. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer Legacy-URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, für zwei Jahre über HTTPS mit einer Website zu verbinden:

```http
Strict-Transport-Security: max-age=63072000
```

Wenn möglich, zusätzlich Subdomain-Anfragen auf HTTPS upgraden und die Site in die Preload-Liste aufnehmen:

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
