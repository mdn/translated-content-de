---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

Mit Apache-.htaccess-Dateien können Benutzer Verzeichnisse des Webservers konfigurieren, über die sie die Kontrolle haben, ohne die Hauptkonfigurationsdatei zu ändern.

Das ist zwar nützlich, allerdings verlangsamt die Verwendung von `.htaccess`-Dateien Apache. Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben (die normalerweise `httpd.conf` heißt), sollten Sie die entsprechende Konfiguration dort in einem `Directory`-Block vornehmen.

Weitere Informationen zu den Möglichkeiten von .htaccess-Dateien finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache-HTTPD-Dokumentation.

Im weiteren Verlauf dieses Dokuments werden verschiedene Konfigurationsoptionen erläutert, die Sie zu `.htaccess` hinzufügen können, sowie deren Wirkung.

Die meisten der folgenden Blöcke verwenden die Direktive [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule). Dadurch werden die Anweisungen innerhalb eines Blocks nur ausgeführt, wenn das entsprechende Modul korrekt konfiguriert und vom Server geladen wurde. So verhindern wir, dass der Server abstürzt, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Manchmal müssen wir Benutzern mitteilen, dass eine Ressource vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wird der erste Parameter weggelassen, gilt standardmäßig `temp`.

- permanent
  - : Gibt einen Status für eine dauerhafte Weiterleitung (301) zurück und zeigt damit an, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen Status für eine vorübergehende Weiterleitung (302) zurück. **Dies ist der Standardwert**.
- seeother
  - : Gibt den Status „See Other“ (303) zurück und zeigt damit an, dass die Ressource ersetzt wurde.
- gone
  - : Gibt den Status „Gone“ (410) zurück und zeigt damit an, dass die Ressource dauerhaft entfernt wurde. Bei Verwendung dieses Status sollte das Argument _URL_ weggelassen werden.

## Cross-Origin-Ressourcen

Die erste Gruppe von Direktiven steuert den Zugriff auf Ressourcen des Servers über [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing). CORS ist ein auf HTTP-Headern basierender Mechanismus, mit dem ein Server angeben kann, von welchen externen Origins (Domain, Protokoll oder Port) ein Browser Ressourcen laden darf.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten ausgelöst werden. Beispielsweise folgen XMLHttpRequest und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von derselben Origin anfordern, von der die Anwendung geladen wurde – es sei denn, die Antwort einer anderen Origin enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt für alle Ressourcen im Verzeichnis einen CORS-Header hinzu, der den Zugriff von jeder Website aus erlaubt.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses überschreiben, werden alle Anfragen von externen Servern zugelassen. Das entspricht wahrscheinlich nicht Ihren Absichten.

Eine Alternative besteht darin, ausdrücklich festzulegen, welche Domains Zugriff auf die Inhalte Ihrer Website haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptwebsite (example.com). Das ist sicherer und entspricht vermutlich eher dem, was Sie erreichen möchten.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet, kann die unter [Cross-Origin-Nutzung von Bildern und Canvas erlauben](/de/docs/Web/HTML/How_to/CORS_enabled_image) beschriebene Verwendung zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um das Risiko solcher Angriffe zu verringern, sollten Sie bei den angeforderten Bildern das Attribut `crossorigin` verwenden und mit dem folgenden Codeausschnitt in Ihrer `.htaccess`-Datei den CORS-Header auf dem Server setzen.

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

Im [Leitfaden zur Fehlerbehebung bei Google Fonts](https://fonts.google.com/faq#troubleshooting) weist Google Chrome darauf hin, dass Google Fonts zwar bei jeder Antwort den CORS-Header mitsenden kann, manche Proxyserver ihn jedoch entfernen, bevor der Browser ihn zum Rendern der Schriftart verwenden kann.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin Resource Timing

Die Spezifikation [Resource Timing](https://w3c.github.io/resource-timing/) definiert eine Schnittstelle, über die Webanwendungen auf vollständige Zeitmessungsinformationen zu Ressourcen in einem Dokument zugreifen können.

Der Response-Header [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin) legt fest, welche Origins die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden. Aufgrund von Cross-Origin-Beschränkungen würden diese Werte andernfalls als null gemeldet.

Wird eine Ressource ohne `Timing-Allow-Origin` bereitgestellt oder enthält der Header nach der Anfrage die anfragende Origin nicht, werden einige Attribute des Objekts `PerformanceResourceTiming` auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten und -meldungen

Apache ermöglicht es Ihnen, Benutzern je nach Art des aufgetretenen Fehlers benutzerdefinierte Fehlerseiten anzuzeigen.

Die Fehlerseiten werden als URLs angegeben. Diese URLs können mit einem Schrägstrich (/) beginnen, wenn es sich um lokale Webpfade relativ zum DocumentRoot handelt, oder als vollständige URL angegeben werden, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationswebsite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehler vermeiden

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis arbeitet, auf das die Konfiguration angewendet wird.

`MultiViews` hat folgende Wirkung: Wenn der Server eine Anfrage für /some/dir/foo erhält, `MultiViews` für /some/dir aktiviert ist und /some/dir/foo nicht existiert, durchsucht der Server das Verzeichnis nach Dateien mit dem Namen foo.\*. Daraus erstellt er praktisch eine Typzuordnung für alle gefundenen Dateien und weist ihnen dieselben Medientypen und Inhaltskodierungen zu, die sie hätten, wenn der Client sie direkt über ihren Dateinamen angefordert hätte. Anschließend wählt er die Datei aus, die den Anforderungen des Clients am besten entspricht.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird. Sie verhindert, dass Apache infolge eines Rewrites einen 404-Fehler zurückgibt, wenn ein gleichnamiges Verzeichnis nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um dem für eine HTTP-Antwort ausgewählten Inhalt Metadaten zuzuweisen. Dazu werden Muster in der URI oder in Dateinamen Metadatenwerten zugeordnet.

Beispielsweise bestimmen die Dateiendungen von Inhaltsdateien häufig den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltskodierung. Diese Informationen werden in den HTTP-Nachrichten mit dem jeweiligen Inhalt gesendet und bei der Content Negotiation zur Auswahl zwischen Alternativen verwendet. So können die Präferenzen der Benutzer bei der Auswahl eines von mehreren möglichen Inhalten berücksichtigt werden.

**Eine Änderung der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Daher können Clients oder Proxys weiterhin zuvor zwischengespeicherte Kopien mit den bisherigen Headern verwenden. Wenn Sie Metadaten wie Sprache, Inhaltstyp, Zeichensatz oder Kodierung ändern, müssen Sie die betroffenen Dateien gegebenenfalls „berühren“ (ihr Datum der letzten Änderung aktualisieren), damit alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (auch MIME-Typen genannt) bereitstellen

Ordnet Medientypen einer oder mehreren Dateiendungen zu, damit die Ressourcen korrekt bereitgestellt werden.

Server sollten für JavaScript-Ressourcen `text/javascript` verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

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

## Das Standard-charset-Attribut festlegen

Jeder Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht sogar alle Inhalte verwenden UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem Zeichensatz `UTF-8` bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Den Zeichensatz für bestimmte Medientypen festlegen

Stellen Sie die folgenden Dateitypen mit dem auf `UTF-8` gesetzten Parameter `charset` bereit. Verwenden Sie dazu die in `mod_mime` verfügbare Direktive [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset).

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) ermöglicht es, eingehende URL-Anfragen anhand von Regeln mit regulären Ausdrücken dynamisch zu verändern. So können Sie beliebige URLs nach Bedarf Ihrer internen URL-Struktur zuordnen.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl zugehöriger Bedingungen pro Regel. Dadurch entsteht ein sehr flexibler und leistungsfähiger Mechanismus zur URL-Manipulation. Die Manipulationen können von verschiedenen Prüfungen abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, Abfragen externer Datenbanken sowie verschiedene andere externe Programme oder Handler können für einen präzisen URL-Abgleich verwendet werden.

### `mod_rewrite` aktivieren

Die grundlegende Konfiguration zur Aktivierung von `mod_rewrite` ist Voraussetzung für alle weiteren Aufgaben, die das Modul verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist erforderlich, damit die `RewriteRule`-Direktiven funktionieren), wie in der Dokumentation zu [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) beschrieben.
2. Aktivieren Sie die Option `FollowSymLinks`, sofern sie nicht bereits aktiviert ist. Weitere Informationen finden Sie in der Dokumentation zu [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options).
3. Falls Ihr Webhoster die Option `FollowSymlinks` nicht zulässt, müssen Sie sie auskommentieren oder entfernen und anschließend die Zeile `Options +SymLinksIfOwnerMatch` einkommentieren. Beachten Sie dabei die [Auswirkungen auf die Leistung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).
   - Bei einigen Cloud-Hosting-Diensten müssen Sie `RewriteBase` festlegen.
   - Weitere Informationen finden Sie in den [Rackspace-FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und in der [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Je nach Serverkonfiguration müssen Sie möglicherweise auch die Direktive [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) verwenden, um bestimmte Optionen für die Rewrite-Engine zu aktivieren.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### HTTPS erzwingen

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version einer URL zur sicheren `https://`-Version weiter, wie im [Apache-HTTPD-Wiki](https://cwiki.apache.org/confluence/spaces/HTTPD/pages/115522478/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Webroot-Methode von Let's Encrypt verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Zertifikatsvalidierung fehl, wenn die Validierungsanfragen zu HTTPS weitergeleitet werden. Aktivieren Sie die benötigte(n) Bedingung(en).

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

### Von `www.`-URLs weiterleiten

Diese Direktiven schreiben `www.example.com` in `example.com` um.

Sie sollten Inhalte nicht unter mehreren Origins (mit und ohne www) doppelt bereitstellen. Das kann SEO-Probleme durch doppelte Inhalte verursachen. Wählen Sie daher eine der beiden Varianten und leiten Sie die andere dorthin weiter. Verwenden Sie außerdem [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/), um anzugeben, welche URL Suchmaschinen crawlen sollen, sofern sie diese Funktion unterstützen.

Setzen Sie die Variable `%{ENV:PROTO}`, damit Rewrites automatisch mit dem passenden Schema (`http` oder `https`) weiterleiten.

Die Regel setzt standardmäßig voraus, dass sowohl HTTP als auch HTTPS für die Weiterleitung verfügbar sind.

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

### `www.` am Anfang von URLs einfügen

Diese Regeln fügen `www.` am Anfang einer URL ein. Beachten Sie, dass Sie denselben Inhalt niemals unter zwei verschiedenen URLs bereitstellen sollten.

Das kann SEO-Probleme durch doppelte Inhalte verursachen. Wählen Sie daher eine der beiden Varianten und leiten Sie die andere dorthin weiter. Bei Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL gecrawlt werden soll.

Setzen Sie die Variable `%{ENV:PROTO}`, damit Rewrites automatisch mit dem passenden Schema (`http` oder `https`) weiterleiten.

Die Regel setzt standardmäßig voraus, dass sowohl HTTP als auch HTTPS für die Weiterleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der bei der Weiterleitung verwendeten Domains nicht abdeckt, sollten Sie die Bedingung aktivieren.

Die folgende Konfiguration ist möglicherweise keine gute Idee, wenn Sie für bestimmte Bereiche Ihrer Website „echte“ Subdomains verwenden.

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

Das folgende Beispiel sendet den Response-Header `X-Frame-Options` mit dem Wert DENY. Damit wird Browsern mitgeteilt, dass sie den Inhalt der Webseite in keinem Frame anzeigen sollen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Diese Einstellung ist möglicherweise nicht für jeden geeignet. Informieren Sie sich auch über [die beiden anderen möglichen Werte für den Header `X-Frame-Options`](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM`.

Sie könnten den Header `X-Frame-Options` zwar für alle Seiten Ihrer Website senden. Das hat jedoch den möglichen Nachteil, dass jegliche Einbettung Ihrer Inhalte in Frames verhindert wird – beispielsweise wenn Benutzer Ihre Website über eine Google-Bildersuche-Ergebnisseite besuchen.

Stellen Sie dennoch sicher, dass Sie den Header `X-Frame-Options` für alle Seiten senden, auf denen Benutzer eine zustandsändernde Aktion ausführen können. Dazu gehören beispielsweise Seiten mit Links für den Kauf per Klick, Seiten für den Bezahlvorgang oder die Bestätigung von Überweisungen sowie Seiten, auf denen dauerhafte Konfigurationsänderungen vorgenommen werden können.

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site Scripting und anderen Angriffen durch das Einschleusen von Inhalten, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die für alle Websites passt. Das folgende Beispiel dient als Ausgangspunkt, den Sie an Ihre Website anpassen sollten.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/tools/csp-builder) verwenden. Außerdem sollten Sie mit einem [Validator](https://csp-evaluator.withgoogle.com/) prüfen, ob Ihr Header die gewünschte Wirkung hat.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt durch Setzen der Direktive `default-src` auf `'self'` standardmäßig alle Abrufe auf die Origin der aktuellen Website. Dies dient als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Das ist praktisch, weil Sie nicht alle für Ihre Website geltenden Fetch-Direktiven einzeln angeben müssen, beispielsweise `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'` usw.
   - Diese Beschränkung bedeutet auch, dass Sie ausdrücklich festlegen müssen, von welchen Websites Ihre Website Ressourcen laden darf. Andernfalls ist das Laden auf dieselbe Origin wie die anfragende Seite beschränkt.

2. Untersagt das Element `<base>` auf der Website. Dadurch wird verhindert, dass Angreifer die Speicherorte von Ressourcen ändern, die über relative URLs geladen werden.
   - Wenn Sie das Element `<base>` verwenden möchten, nutzen Sie stattdessen `base-uri 'self'`.

3. Erlaubt mit `form-action 'self'` Formularübermittlungen nur an die aktuelle Origin.
4. Verhindert mit `frame-ancestors 'none'`, dass Websites (einschließlich Ihrer eigenen) Ihre Webseiten beispielsweise in ein `<iframe>`- oder `<object>`-Element einbetten.
   - Die Direktive `frame-ancestors` hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu verhindern, und ähnelt dem Header `X-Frame-Options`.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn auch `frame-ancestors` angegeben ist.

5. Erzwingt mit der Direktive `upgrade-insecure-requests`, dass der Browser alle über HTTP bereitgestellten Ressourcen so behandelt, als würden sie sicher über HTTPS geladen.
   - **`upgrade-insecure-requests` stellt für die Navigation auf oberster Ebene kein HTTPS sicher. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den Header `Strict-Transport-Security` einfügen.**

6. Fügt den Header `Content-Security-Policy` in alle Antworten ein, die Skripte ausführen können. Dazu gehören die häufig verwendeten Dateitypen HTML-, XML- und PDF-Dokumente. JavaScript-Dateien können zwar keine Skripte in einem „Browsing Context“ ausführen, sind aber eingeschlossen, um [Web Workers](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu berücksichtigen.

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, in denen keine Indexdatei in einem vom Server konfigurierten Format vorhanden ist, beispielsweise `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Unter Macintosh und Linux sind Dateien, deren Name mit einem Punkt beginnt, in der Anzeige verborgen. Wenn Name und Speicherort bekannt sind, kann jedoch weiterhin auf sie zugegriffen werden. Solche Dateien enthalten gewöhnlich Benutzereinstellungen oder den gespeicherten Zustand eines Hilfsprogramms. Dazu können auch besonders sensible Verzeichnisse wie `.git` oder `.svn` gehören.

Das Verzeichnis `.well-known/` ist gemäß [Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) das Pfadpräfix für „bekannte Speicherorte“ (beispielsweise `/.well-known/manifest.json` und `/.well-known/keybase.txt`). Der Zugriff auf seine sichtbaren Inhalte sollte daher nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Sicherungs- und Quelldateien, die manche Texteditoren zurücklassen. Wenn jeder darauf zugreifen kann, können sie ein Sicherheitsrisiko darstellen.

Ergänzen Sie im folgenden Beispiel den regulären Ausdruck von `<FilesMatch>` um alle Dateien, die auf Ihrem Produktivserver landen und sensible Informationen über Ihre Website offenlegen könnten. Dazu können unter anderem Konfigurationsdateien oder Dateien mit Projektmetadaten gehören.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, bleibt selbst bei einer Weiterleitung durch den Server zur sicheren Version der Website ein Zeitfenster – die anfängliche HTTP-Verbindung –, in dem ein Angreifer die Anfrage auf eine unsichere Verbindung herabstufen oder umleiten kann.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS eine Verbindung zu Ihrem Server herstellt, unabhängig davon, was Benutzer in die Adressleiste eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufen werden kann. Sie müssen sicherstellen, dass Sie die Website mindestens so lange über HTTPS bereitstellen können, wie Sie in der Direktive `max-age` festgelegt haben. Wenn keine gültige TLS-Verbindung mehr besteht, beispielsweise wegen eines abgelaufenen TLS-Zertifikats, sehen Ihre Besucher auch dann eine Fehlermeldung, wenn sie versuchen, eine Verbindung über HTTP herzustellen.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## MIME-Sniffing der Antwort durch einige Browser verhindern

Manche älteren Browser versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er in der Serverkonfiguration nicht korrekt festgelegt ist. Diese Einstellung verringert das Risiko von Drive-by-Download-Angriffen und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den Header `Referrer-Policy` in Antworten für Ressourcen ein, die andere Ressourcen anfordern können oder eine Navigation zu ihnen ermöglichen.

Dazu gehören häufig verwendete Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um die Weitergabe von Referrer-Informationen vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken kann.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Die HTTP-Methode `TRACE` deaktivieren

Die Methode [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE) erscheint zwar harmlos, kann in manchen Szenarien jedoch ausgenutzt werden, um Anmeldedaten berechtigter Benutzer zu stehlen. Siehe [Ein Cross-Site-Tracing-Angriff (XST)](https://community.owasp.org/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://wstg.owasp.org/v4.2/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods/#testing-for-cross-site-tracing-potential).

Moderne Browser verhindern inzwischen TRACE-Anfragen über JavaScript. Es wurden jedoch andere Wege gefunden, TRACE-Anfragen über Browser zu senden, beispielsweise mithilfe von Java.

Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben, verwenden Sie stattdessen die Direktive [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable).

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Den Response-Header `X-Powered-By` entfernen

Manche Frameworks wie PHP und ASP.NET setzen einen Header `X-Powered-By`, der Informationen über sie enthält, beispielsweise ihren Namen und ihre Versionsnummer.

Dieser Header bietet keinen Nutzen. In manchen Fällen können die darin enthaltenen Informationen Schwachstellen offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn möglich, sollten Sie den Header `X-Powered-By` auf Ebene der Programmiersprache oder des Frameworks deaktivieren. In PHP können Sie dazu beispielsweise Folgendes in `php.ini` festlegen:

```ini
expose_php = off;
```

## Von Apache erzeugte Fußzeile mit Serverinformationen entfernen

Verhindern Sie, dass Apache von ihm erzeugten Dokumenten (beispielsweise Fehlermeldungen und Verzeichnisauflistungen) eine abschließende Fußzeile mit Informationen über den Server hinzufügt. Weitere Informationen zur Serversignatur finden Sie in der Dokumentation zur [Direktive `ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature). Wie Sie die darin enthaltenen Informationen konfigurieren, ist unter [Direktive `ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens) beschrieben.

```apacheconf
ServerSignature Off
```

## Fehlerhafte `AcceptEncoding`-Header korrigieren

Manche Proxys und Sicherheitsprogramme verändern oder entfernen den HTTP-Header `Accept-Encoding`. Eine ausführlichere Erklärung finden Sie unter [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/).

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

## Medientypen komprimieren

Komprimieren Sie mithilfe der [Direktive AddOutputFilterByType](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype) alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind.

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

## Dateiendungen Medientypen zuordnen

Ordnen Sie die folgenden Dateiendungen mithilfe von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) dem angegebenen Kodierungstyp zu. So kann Apache die Dateitypen mit dem passenden Response-Header `Content-Encoding` bereitstellen. (Dadurch werden die Dateien **nicht** von Apache komprimiert!) Würden diese Dateitypen ohne passenden Response-Header `Content-Encoding` bereitgestellt, wüssten Clientanwendungen wie Browser nicht, dass sie die Antwort zunächst dekomprimieren müssen, und könnten den Inhalt daher nicht verarbeiten.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Stellen Sie Ressourcen mithilfe des Moduls [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) sowie der Header [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) mit einem weit in der Zukunft liegenden Ablaufdatum bereit.

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
