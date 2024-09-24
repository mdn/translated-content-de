---
title: Transport Layer Security (TLS)-Konfiguration
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Transport Layer Security (TLS)](/de/docs/Glossary/TLS) gewährleistet die Vertraulichkeit, Authentizität und Integrität aller Kommunikationen und sollte daher für alle eingehenden und ausgehenden Website-Kommunikationen verwendet werden.

## TLS-Konfiguration

### Problem

Wenn Daten unverschlüsselt über das Internet gesendet werden, können sie von Dritten abgefangen werden, die Zugriff auf die Daten erhalten und sie ändern können — dies wird oft als [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM)-Angriff bezeichnet. MiTM-Angriffe haben schwerwiegende Folgen für die Sicherheit Ihres Systems.

Alle Anfragen und Antworten sollten daher über HTTPS gesendet werden, das TLS zur Verschlüsselung der Daten verwendet. Das moderne Web erzwingt dies praktisch — alle Browser bewegen sich in Richtung von [HTTPS](/de/docs/Glossary/HTTPS) als Standard, und viele Webfunktionen können nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) genutzt werden.

### Lösung

Sie sollten Ihre Serversoftware so einrichten, dass sie eine sichere Konfiguration verwendet, die die Nutzung von HTTPS mit sicheren TLS-Einstellungen erzwingt. Es gibt mehrere TLS-Konfigurationsgeneratoren, die dabei helfen können, zum Beispiel der Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). Dieses Tool bietet mehrere Optionen basierend auf Mozillas [TLS-Leitlinien](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Ressourcen laden

### Problem

Alle Ressourcen, unabhängig von ihrem Ursprung, sollten über sichere Kanäle geladen werden.

Sichere (HTTPS) Websites, die versuchen, aktive Ressourcen wie JavaScript über unsichere Verbindungen (HTTP) zu laden, werden von Browsern blockiert. Infolgedessen erleben Benutzer verschlechterte Benutzeroberflächen und [Mixed Content](/de/docs/Web/Security/Mixed_content)-Warnungen. Im folgenden Codebeispiel wird zum Beispiel HTTP fälschlicherweise verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Ebenso führen Versuche, passive Inhalte wie Bilder unsicher zu laden, obwohl weniger riskant, dennoch zu verschlechterten Benutzeroberflächen und Mixed Content-Warnungen und können es aktiven Angreifern ermöglichen, Websites zu verunstalten oder Benutzer zu täuschen. Zum Beispiel:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Obwohl moderne Browser auffällig anzeigen, wenn Websites Ressourcen unsicher laden, treten diese Fehler im Web immer noch mit erheblicher Häufigkeit auf.

### Lösung

Stellen Sie sicher, dass alle Ressourcen vor der Bereitstellung über HTTPS geladen werden.

### Beispiele

In diesem Beispiel wird HTTPS korrekt verwendet, um eine JavaScript-Bibliothek zu laden:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP-Weiterleitung

### Problem

Websites können weiterhin auf Port 80 (HTTP) lauschen, um Verbindungsfehler zu verhindern, wenn Benutzer eine URL in ihre Adressleiste eingeben, da anfängliche Browserverbindungen oft über HTTP hergestellt werden. Dies stellt ein anfängliches Sicherheitsrisiko bei der ersten Verbindung zu Websites dar, da diese Verbindung nicht durch TLS geschützt ist.

Darüber hinaus sollten Websites Weiterleitungen von HTTP auf einem Host zu HTTPS auf einem anderen Host vermeiden, da dies verhindert, dass `Strict-Transport-Security` für den ersten Host gesetzt wird (siehe [HTTP Strict Transport Security](#implementierung_von_http_strict_transport_security)).

### Lösung

Websites, die auf Port 80 lauschen, sollten nur auf dieselbe Ressource über HTTPS umleiten. Sobald die Weiterleitung erfolgt ist, sollte `Strict-Transport-Security` sicherstellen, dass alle zukünftigen Versuche, die Website über HTTP zu erreichen, automatisch auf die sichere Website umgeleitet werden.

APIs oder Websites, die nicht für öffentlichen Zugriff gedacht sind, sollten die Nutzung von HTTP vollständig deaktivieren.

Um das "verschiedene Hosts"-Problem zu beheben:

1. Leiten Sie zunächst von http://example.com/ auf https://example.com/ um.
2. Leiten Sie anschließend von https://example.com/ auf https://example.org/ um.

### Beispiele

Leiten Sie alle eingehenden HTTP-Anfragen zur selben Site und URI auf HTTPS um, mit NGINX:

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Leiten Sie `site.example.org` von HTTP auf HTTPS um, mit Apache:

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## Implementierung von HTTP Strict Transport Security

### Problem

Um [Manipulator-in-the-Middle](/de/docs/Glossary/MitM) (MiTM)-Angriffe zu verhindern, sollten Browser nur über HTTPS mit Websites verbinden.

### Lösung

HTTP [`Strict-Transport-Security`](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) ist ein HTTP-Header, der Browser informiert, dass sie nur über HTTPS mit einer bestimmten Site verbinden sollen, selbst wenn das ursprünglich angegebene Schema HTTP war. Browser, bei denen HSTS für eine bestimmte Site gesetzt ist, werden automatisch alle Anfragen für diese Site auf HTTPS aufwerten. HSTS weist Browser auch an, TLS- und zertifikatsbezogene Fehler durch Deaktivierung der Möglichkeit, die Zertifikatfehlerseite zu umgehen, strenger zu behandeln.

`Strict-Transport-Security` unterstützt die folgenden Direktiven:

- `max-age`
  - : Legt die Dauer in Sekunden fest, für die Browser auf HTTPS umleiten werden.
- `includeSubDomains` {{optional_inline}}
  - : Gibt an, ob Browser Anfragen auf allen Subdomains auf HTTPS upgraden sollen. Zum Beispiel stellt das Setzen von `includeSubDomains` bei `domain.example.com` sicher, dass Anfragen an `host1.domain.example.com` und `host2.domain.example.com` zusätzlich zu `domain.example.com` aufgerüstet werden.
- `preload` {{optional_inline}}
  - : Gibt an, ob die Site vorab geladen werden soll. Das Einschließen dieser Direktive bedeutet, dass Ihre Site in die [HSTS-Vorladeliste](https://hstspreload.org/) aufgenommen werden kann.

Befolgen Sie diese Schritte, um HSTS korrekt auf Ihrer Website zu implementieren:

1. Setzen Sie einen `max-age`-Wert von mindestens sechs Monaten (`15768000`). Längere Zeiträume, wie zum Beispiel zwei Jahre (`63072000`), werden empfohlen. Sobald dieser Wert gesetzt ist, muss die Site weiterhin HTTPS unterstützen, bis die Ablaufzeit erreicht ist.
2. Setzen Sie, wenn möglich, `includeSubDomains`, um die Sicherheit auf allen Subdomains zu verbessern. Eine sorgfältige Prüfung ist erforderlich, wenn diese Direktive gesetzt wird, da dadurch Sites auf Subdomains, die noch nicht über HTTPS verfügen, deaktiviert werden könnten.
3. Setzen Sie, wenn möglich, `preload`, um zu ermöglichen, dass Ihre Website in die HSTS-Vorladeliste aufgenommen wird. Um sie in die Liste aufzunehmen, besuchen Sie https://hstspreload.org/ und geben Sie Ihre Site-URL in das Formular oben auf der Seite ein, und beheben Sie alle erwähnten Probleme. Webbrowser führen HTTPS-Upgrades von vorab geladenen Sites durch, bevor der anfängliche `Strict-Transport-Security`-Header empfangen wird. Dies verhindert [Downgrade-Angriffe](https://en.wikipedia.org/wiki/Downgrade_attack) beim ersten Gebrauch und wird für alle hochriskanten Websites empfohlen. Beachten Sie, dass die Aufnahme in die HSTS-Vorladeliste auch erfordert, dass `includeSubDomains` gesetzt und `max-age` auf mindestens 1 Jahr (`31536000`) gesetzt ist.

Zusammen mit `Strict-Transport-Security` sollten Sie auch die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) in Ihrer {{httpheader("Content-Security-Policy")}} setzen. Diese weist Browser an, alle unsicheren URLs einer Site (die über HTTP bedient werden) so zu behandeln, als ob sie über HTTPS bedient worden wären. `upgrade-insecure-requests` ist für Websites gedacht, die eine große Anzahl unsicherer alter URLs haben, die umgeschrieben werden müssen.

### Beispiele

Es wird empfohlen, sich zwei Jahre lang über HTTPS mit einer Site zu verbinden:

```http
Strict-Transport-Security: max-age=63072000
```

Falls möglich, zusätzlich Subdomain-Anfragen auf HTTPS upgraden und die Site in die Vorladeliste aufnehmen:

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
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
- [Schwache Signaturalgorithmen](/de/docs/Web/Security/Weak_Signature_Algorithm)
