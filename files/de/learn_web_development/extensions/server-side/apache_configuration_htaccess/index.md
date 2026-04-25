---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: aae9b839c637d0860c1cedeb15f1325e02e9d5ae
---

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von .htaccess-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei (die normalerweise `httpd.conf` genannt wird) haben, sollten Sie diese Logik dort in einem `Directory`-Block hinzufügen.

Weitere Details darüber, was .htaccess-Dateien tun können, finden Sie in der [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) Dokumentation auf der Apache HTTPD-Website.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen erörtern, die Sie zur `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert wurde und der Server es geladen hat. Auf diese Weise verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass eine Ressource entweder temporär oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

```apacheconf
<IfModule mod_alias.c>
  # Redirect to a URL on a different host
  Redirect "/service" "http://foo2.example.com/service"

  # Redirect to a URL on the same host
  Redirect "/one" "/two"

  # Equivalent redirect to URL on the same host
  Redirect temp "/one" "/two"

  # Permanent redirect to a URL on the same host
  Redirect permanent "/three" "/four"

  # Redirect to an external URL
  # Using regular expressions and RedirectMatch
  RedirectMatch "^/oldfile\.html/?$" "http://example.com/newfile.php"
</IfModule>
```

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, wird er standardmäßig auf `temp` gesetzt.

- permanent
  - : Gibt einen permanenten Redirect-Status (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Redirect-Status (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der angibt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der angibt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Zugriff auf Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der einem Server erlaubt, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, welche ein Browser beim Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen `XMLHttpRequest` und die `Fetch API` der selben Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von der gleichen Origin anfordern, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses überschreiben, wird jede Anfrage von externen Servern gewährt, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben. Im folgenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigen, zu tun.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Erlauben der Verwendung von CORS-fähigen Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut bei den Bildern verwenden, die Sie anfordern, und den folgenden Codeausschnitt in Ihrer `.htaccess`, um den CORS-Header vom Server festzulegen.

```apacheconf
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|a?png|svgz?|webp|heic|heif|avif)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=*IS_CORS*
    </FilesMatch>
  </IfModule>
</IfModule>
```

Der [Google Fonts-Troubleshooting-Leitfaden](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome sagt uns, dass, obwohl Google Fonts den CORS-Header mit jeder Antwort senden kann, einige Proxy-Server ihn entfernen können, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcentiming

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständige Timing-Information für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, die berechtigt sind, Werte von Attributen abzurufen, die über Funktionen der Resource Timing API ermittelt werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als null gemeldet werden würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` geliefert wird oder wenn der Header nach der Anfrage nicht den Ursprung enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-meldungen

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument Direktiv](https://httpd.apache.org/docs/current/mod/core.html#errordocument) Dokumentation auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlerprävention

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis funktionieren, auf das die Konfiguration angewendet wird.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat, und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis und sucht nach Dateien namens foo.\*, und stellt effektiv eine Typkarte zusammen, die alle diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltscodierungen zuweist, die sie hätten, wenn der Client eine von ihnen namentlich angefordert hätte. Anschließend wählt er die beste Übereinstimmung mit den Anforderungen des Clients.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache als Ergebnis eines Rewrites einen 404-Fehler zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert

```apacheconf
Options -MultiViews
```

## Medien-Typen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Content-Metadaten dem Inhalt zuzuordnen, der für eine HTTP-Antwort ausgewählt wird, indem Muster im URI oder Dateinamen den Metadatenwerten zugeordnet werden.

Beispielsweise definieren die Dateinamenerweiterungen der Inhaltsdateien häufig den Internetmedientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten, die diesen Inhalt enthalten, gesendet und bei der Inhaltsaushandlung beim Auswählen von Alternativen verwendet, sodass die Vorlieben des Benutzers respektiert werden, wenn eine von mehreren möglichen Inhalten bereitgestellt wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien immer noch von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten ändern (Sprache, Inhaltstyp, Zeichensatz oder Codierung), müssen Sie möglicherweise die betroffenen Dateien 'berühren' (ihren letzten Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (auch bekannt als MIME-Typen) bereitstellen

Verknüpft Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen ordnungsgemäß bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben

```apacheconf
<IfModule mod_mime.c>
  # Data interchange
    AddType application/atom+xml      atom
    AddType application/json          json map topojson
    AddType application/ld+json       jsonld
    AddType application/rss+xml       rss
    AddType application/geo+json      geojson
    AddType application/rdf+xml       rdf
    AddType application/xml           xml
  # JavaScript
    AddType text/javascript           js mjs
  # Manifest files
    AddType application/manifest+json     webmanifest
    AddType application/x-web-app-manifest+json         webapp
  # Media files
    AddType audio/mp4                     f4a f4b m4a
    AddType audio/ogg                     oga ogg opus
    AddType image/bmp                     bmp
    AddType image/svg+xml                 svg svgz
    AddType image/webp                    webp
    AddType video/mp4                     f4v f4p m4v mp4
    AddType video/ogg                     ogv
    AddType video/webm                    webm
    AddType image/x-icon    cur ico
  # HEIF Images
    AddType image/heic                    heic
    AddType image/heif                    heif
  # HEIF Image Sequence
    AddType image/heics                   heics
    AddType image/heifs                   heifs
  # AVIF Images
    AddType image/avif                    avif
  # AVIF Image Sequence
    AddType image/avis                    avis
  # WebAssembly
    AddType application/wasm              wasm
  # Web fonts
    AddType font/woff                         woff
    AddType font/woff2                        woff2
    AddType application/vnd.ms-fontobject                eot
    AddType font/ttf                          ttf
    AddType font/collection                   ttc
    AddType font/otf                          otf
  # Other
    AddType application/octet-stream          safariextz
    AddType application/x-bb-appworld         bbaw
    AddType application/x-chrome-extension    crx
    AddType application/x-opera-extension     oex
    AddType application/x-xpinstall           xpi
    AddType text/calendar                     ics
    AddType text/markdown                     markdown md
    AddType text/vcard                        vcard vcf
    AddType text/vnd.rim.location.xloc        xloc
    AddType text/vtt                          vtt
    AddType text/x-component                  htc
</IfModule>
```

## Standard-Charset-Attribut setzen

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle Inhalte, sind in UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem Zeichensatz `UTF-8` zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für spezifische Medientypen festlegen

Verwenden Sie die folgende Direktive [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset), die in `mod_mime` verfügbar ist, um die folgenden Dateitypen mit dem Parameter `charset` auf `UTF-8` zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddCharset utf-8 \
    .bbaw \
    .css \
    .htc \
    .ics \
    .js \
    .json \
    .manifest \
    .map \
    .markdown \
    .md \
    .mjs \
    .topojson \
    .vtt \
    .vcard \
    .vcf \
    .webmanifest \
    .xloc
</IfModule>
```

## `Mod_rewrite` und die `RewriteEngine`-Direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl an angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um granulare URL-Übereinstimmungen zu erzielen.

### `mod_rewrite` aktivieren

Das grundlegende Muster, um `mod_rewrite` zu aktivieren, ist eine Voraussetzung für alle anderen Aufgaben, die es nutzen.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) Dokumentation dokumentiert
2. Aktivieren Sie die `FollowSymLinks`-Option, falls sie noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options) Dokumentation
3. Wenn Ihr Webhoster die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber seien Sie sich der [Leistungsauswirkungen](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst
   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### Forcing HTTPS

Diese Rewrite-Regeln leiten von der unsicheren Version `http://` zur sicheren Version `https://` der URL um, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode zum Erstellen Ihrer TLS-Zertifikate verwenden, wird die Zertifikatsvalidierung fehlschlagen, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Aktivieren Sie die Bedingung(en), die Sie benötigen.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
  RewriteCond %{REQUEST_URI} !^/\.well-known/cpanel-dcv/[\w-]+$
  RewriteCond %{REQUEST_URI} !^/\.well-known/pki-validation/[A-F0-9]{32}\.txt(?:\ Comodo\ DCV)?$
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

### Umleitung von `www.`-URLs

Diese Direktiven leiten `www.example.com` auf `example.com` um.

Sie sollten keinen Inhalt an mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann zu SEO-Problemen (doppelter Inhalt) führen. Daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL von Suchmaschinen gecrawlt werden soll (falls sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um es Umschreibungen zu ermöglichen, automatisch mit dem passenden Schema (`http` oder `https`) umzuleiten.

Der Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^ %{ENV:PROTO}://%1%{REQUEST_URI} [R=301,L]
</IfModule>
```

### Einfügen von `www.` am Anfang von URLs

Diese Regeln fügen `www.` am Anfang einer URL ein. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzuzeigen, welche URL von Suchmaschinen gecrawlt werden soll.

Setzen Sie die `%{ENV:PROTO}`-Variable, um es Umschreibungen zu ermöglichen, automatisch mit dem passenden Schema (`http` oder `https`) umzuleiten.

Der Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat keinen der während der Umleitung verwendeten Domains verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das Folgende ist möglicherweise keine gute Idee, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTPS} !=on

  RewriteCond %{HTTP_HOST} !^www\. [NC]
  RewriteCond %{SERVER_ADDR} !=127.0.0.1
  RewriteCond %{SERVER_ADDR} !=::1
  RewriteRule ^ %{ENV:PROTO}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

## Frame-Optionen

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY und informiert Browser darüber, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten über [die anderen zwei möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Während Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es auch jegliches Einrahmen Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website mit einer Google Images-Suchergebnisseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, eine statusändernde Operation durchzuführen (z.B.: Seiten, die Ein-Klick-Kauf-Links, Checkout oder Banküberweisungsbestätigungsseiten enthalten, Seiten, die dauerhafte Konfigurationsänderungen durchführen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site-Scripting und anderen Content-Injection-Angriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Quellen für Ihre Website-Inhalte erlaubt.

Es gibt keine Richtlinie, die für alle Websites geeignet ist. Das folgende Beispiel dient als Leitfaden, den Sie für Ihre Website anpassen sollten.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - dies fungiert als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven, die für Ihre Website gelten, angeben müssen, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, usw.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher(n) Website(n) Ihre Website Ressourcen laden kann. Andernfalls wird sie auf denselben Ursprung wie die Seite, die die Anfrage stellt, beschränkt

2. Verbietet das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden
   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`

3. Erlaubt nur, dass Formularübermittlungen vom aktuellen Ursprung aus erfolgen: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>`-Element einbetten, indem: `frame-ancestors 'none'` gesetzt wird.
   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ist ähnlich wie der `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Erzwingt es, dass der Browser alle über HTTP bereitgestellten Ressourcen behandelt, als wären sie sicher über HTTPS geladen, indem die `upgrade-insecure-requests`-Direktive gesetzt wird
   - **`upgrade-insecure-requests` garantiert nicht HTTPS für die Top-Level-Navigation. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen**

6. Einschließt den `Content-Security-Policy`-Header in alle Antworten, die in der Lage sind, Skripte auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien in einem "Browsing-Kontext" keine Skripte ausführen können, werden sie eingeschlossen, um auf [Web-Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) abzuzielen

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im Format haben, das der Server verwendet, wie z.B. `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Auf Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor der Ansicht verborgen, jedoch nicht vor Zugriff, wenn man ihren Namen und Standort kennt. Diese Arten von Dateien enthalten in der Regel Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können ziemlich private Orte wie beispielsweise das `.git` oder `.svn`-Verzeichnis umfassen.

Das `.well-known/`-Verzeichnis repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) des Pfadpräfixes für "bekannte Orte" (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden.

```apacheconf
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_URI} "!(^|/)\.well-known/([^./]+./?)+$" [NC]
    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]
</IfModule>
```

## Zugriff auf Dateien mit sensiblen Informationen blockieren

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden und ein Sicherheitsrisiko darstellen können, wenn jeder Zugriff darauf hat.

Aktualisieren Sie den `<FilesMatch>`-Regulären Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien, die Metadaten über das Projekt enthalten, einschließen, unter anderen.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, lässt ein Server ihn, selbst wenn er ihn zur sicheren Version der Website umleitet, immer noch mit einem Zeitfenster der Möglichkeit (die anfänglichen HTTP-Verbindung) für einen Angreifer zurück, um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS eine Verbindung zu Ihrem Server herstellt, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht wiederrufbar ist und Sie sicherstellen müssen, dass Sie in der Lage sind, die Website für die Dauer, die Sie in der `max-age`-Direktive angegeben haben, über HTTPS bereitzustellen. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), werden Ihre Besucher sogar beim Versuch, über HTTP eine Verbindung herzustellen, eine Fehlermeldung sehen.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den Antwortinhalt wirken

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, auch wenn er nicht ordnungsgemäß in der Serverkonfiguration festgelegt ist. Dies verringert das Risiko von Drive-By-Download-Angriffen und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in die Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu navigieren).

Dies umfasst die häufig verwendeten Dateitypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um den Referrer-Leak vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die untenstehenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE`-HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl anscheinend harmlos, kann in einigen Szenarien erfolgreich verwendet werden, um die Anmeldedaten legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern nun `TRACE`-Anfragen über JavaScript, allerdings wurden andere Wege entdeckt, um `TRACE`-Anfragen mit Browsern zu senden, wie z.B. der Einsatz von Java.

Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwort-Headers

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. deren Name, Versionsnummer)

Dieser Header bietet keinen Mehrwert, und in einigen Fällen können die bereitgestellten Informationen Schwachstellen offenlegen

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf Sprach-/Framework-Ebene (z.B. für PHP, können Sie das tun, indem Sie folgendes in `php.ini` festlegen) deaktivieren.

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Serverinformationen im Footer

Verhindern Sie, dass Apache eine Schlussfußzeile mit Informationen über den Server in von Server generierte Dokumente (z.B. Fehlermeldungen, Verzeichnislisten, usw.) einfügt. Siehe die [ServerSignature-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature) Dokumentation für weitere Informationen darüber, was die Serversignatur bietet und die [`ServerTokens`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen über die Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Korrigieren von beschädigten `AcceptEncoding`-Headers

Einige Proxys und Sicherheitssoftware zerstören oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detaillierte Erklärung.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    </IfModule>
  </IfModule>
</IfModule>
```

## Medien-Typen komprimieren

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, mit der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_filter.c>
    AddOutputFilterByType DEFLATE "application/atom+xml" \
      "application/javascript" \
      "application/json" \
      "application/ld+json" \
      "application/manifest+json" \
      "application/rdf+xml" \
      "application/rss+xml" \
      "application/schema+json" \
      "application/geo+json" \
      "application/vnd.ms-fontobject" \
      "application/wasm" \
      "application/x-font-ttf" \
      "application/x-javascript" \
      "application/x-web-app-manifest+json" \
      "application/xhtml+xml" \
      "application/xml" \
      "font/eot" \
      "font/opentype" \
      "font/otf" \
      "font/ttf" \
      "image/bmp" \
      "image/svg+xml" \
      "image/vnd.microsoft.icon" \
      "text/cache-manifest" \
      "text/calendar" \
      "text/css" \
      "text/html" \
      "text/javascript" \
      "text/plain" \
      "text/markdown" \
      "text/vcard" \
      "text/vnd.rim.location.xloc" \
      "text/vtt" \
      "text/x-component" \
      "text/x-cross-domain-policy" \
      "text/xml"
  </IfModule>
</IfModule>
```

## Zuordnen von Erweiterungen zu Medientypen

Ordnen Sie die folgenden Dateiendungen dem angegebenen Kodierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies wird NICHT dazu führen, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bereitgestellt würden, wüssten Clientanwendungen (z.B. Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssen und könnten daher den Inhalt nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablaufdatum

Bereitstellen von Ressourcen mit einem sehr weit in der Zukunft liegenden Ablaufdatum mithilfe des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Moduls, und der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)- sowie der [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires)-Header.

```apacheconf
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresDefault                                      "access plus 1 month"

  # CSS
    ExpiresByType text/css                              "access plus 1 year"
  # Data interchange
    ExpiresByType application/atom+xml                  "access plus 1 hour"
    ExpiresByType application/rdf+xml                   "access plus 1 hour"
    ExpiresByType application/rss+xml                   "access plus 1 hour"
    ExpiresByType application/json                      "access plus 0 seconds"
    ExpiresByType application/ld+json                   "access plus 0 seconds"
    ExpiresByType application/schema+json               "access plus 0 seconds"
    ExpiresByType application/geo+json                  "access plus 0 seconds"
    ExpiresByType application/xml                       "access plus 0 seconds"
    ExpiresByType text/calendar                         "access plus 0 seconds"
    ExpiresByType text/xml                              "access plus 0 seconds"
  # Favicon (cannot be renamed!) and cursor images
    ExpiresByType image/vnd.microsoft.icon              "access plus 1 week"
    ExpiresByType image/x-icon                          "access plus 1 week"
  # HTML
    ExpiresByType text/html                             "access plus 0 seconds"
  # JavaScript
    ExpiresByType text/javascript                       "access plus 1 year"
  # Manifest files
    ExpiresByType application/manifest+json             "access plus 1 week"
    ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
    ExpiresByType text/cache-manifest                   "access plus 0 seconds"
  # Markdown
    ExpiresByType text/markdown                         "access plus 0 seconds"
  # Media files
    ExpiresByType audio/ogg                             "access plus 1 month"
    ExpiresByType image/bmp                             "access plus 1 month"
    ExpiresByType image/gif                             "access plus 1 month"
    ExpiresByType image/jpeg                            "access plus 1 month"
    ExpiresByType image/svg+xml                         "access plus 1 month"
    ExpiresByType image/webp                            "access plus 1 month"
    # PNG and animated PNG
    ExpiresByType image/apng                            "access plus 1 month"
    ExpiresByType image/png                             "access plus 1 month"
    # HEIF Images
    ExpiresByType image/heic                            "access plus 1 month"
    ExpiresByType image/heif                            "access plus 1 month"
    # HEIF Image Sequence
    ExpiresByType image/heics                           "access plus 1 month"
    ExpiresByType image/heifs                           "access plus 1 month"
    # AVIF Images
    ExpiresByType image/avif                            "access plus 1 month"
    # AVIF Image Sequence
    ExpiresByType image/avis                            "access plus 1 month"
    ExpiresByType video/mp4                             "access plus 1 month"
    ExpiresByType video/ogg                             "access plus 1 month"
    ExpiresByType video/webm                            "access plus 1 month"
  # WebAssembly
    ExpiresByType application/wasm                      "access plus 1 year"
  # Web fonts
    # Collection
    ExpiresByType font/collection                       "access plus 1 month"
    # Embedded OpenType (EOT)
    ExpiresByType application/vnd.ms-fontobject         "access plus 1 month"
    ExpiresByType font/eot                              "access plus 1 month"
    # OpenType
    ExpiresByType font/opentype                         "access plus 1 month"
    ExpiresByType font/otf                              "access plus 1 month"
    # TrueType
    ExpiresByType application/x-font-ttf                "access plus 1 month"
    ExpiresByType font/ttf                              "access plus 1 month"
    # Web Open Font Format (WOFF) 1.0
    ExpiresByType application/font-woff                 "access plus 1 month"
    ExpiresByType application/x-font-woff               "access plus 1 month"
    ExpiresByType font/woff                             "access plus 1 month"
    # Web Open Font Format (WOFF) 2.0
    ExpiresByType application/font-woff2                "access plus 1 month"
    ExpiresByType font/woff2                            "access plus 1 month"
  # Other
    ExpiresByType text/x-cross-domain-policy            "access plus 1 week"
</IfModule>
```
