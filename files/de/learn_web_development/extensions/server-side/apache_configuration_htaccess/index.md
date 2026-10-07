---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

Mit Apache-.htaccess-Dateien können Benutzer Verzeichnisse des Webservers konfigurieren, über die sie Kontrolle haben, ohne die Hauptkonfigurationsdatei zu ändern.

Das ist zwar nützlich, aber `.htaccess`-Dateien verlangsamen Apache. Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben (sie heißt üblicherweise `httpd.conf`), sollten Sie diese Konfiguration dort in einem `Directory`-Block vornehmen.

Weitere Einzelheiten zu den Möglichkeiten von .htaccess-Dateien finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache-HTTPD-Dokumentation.

Im Folgenden werden verschiedene Konfigurationsoptionen erläutert, die Sie zu `.htaccess` hinzufügen können, sowie ihre Wirkung.

Die meisten der folgenden Blöcke verwenden die Direktive [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule). Dadurch werden die Anweisungen innerhalb eines Blocks nur ausgeführt, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. So verhindern wir, dass der Server abstürzt, wenn das Modul nicht geladen wurde.

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
  - : Gibt einen Status für eine vorübergehende Weiterleitung (302) zurück. **Dies ist die Standardeinstellung**.
- seeother
  - : Gibt den Status „See Other“ (303) zurück und zeigt damit an, dass die Ressource ersetzt wurde.
- gone
  - : Gibt den Status „Gone“ (410) zurück und zeigt damit an, dass die Ressource dauerhaft entfernt wurde. Bei diesem Status sollte das Argument _URL_ weggelassen werden.

## Cross-Origin-Ressourcen

Die erste Gruppe von Direktiven steuert den Zugriff auf Ressourcen des Servers über [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing). CORS ist ein auf HTTP-Headern basierender Mechanismus, mit dem ein Server angeben kann, von welchen externen Origins (Domain, Protokoll oder Port) ein Browser das Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen schränken Browser Cross-Origin-HTTP-Anfragen ein, die von Skripten ausgehen. Beispielsweise unterliegen XMLHttpRequest und die Fetch API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von derselben Origin anfordern, von der sie geladen wurde, es sei denn, die Antwort einer anderen Origin enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt für alle Ressourcen im Verzeichnis einen CORS-Header hinzu, der den Zugriff von jeder Website erlaubt.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses überschreiben, werden alle Anfragen von externen Servern zugelassen. Das ist vermutlich nicht beabsichtigt.

Eine Alternative besteht darin, ausdrücklich festzulegen, welche Domains auf die Inhalte Ihrer Website zugreifen dürfen. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptwebsite (example.com). Das ist sicherer und entspricht wahrscheinlich eher Ihrer Absicht.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet, kann die unter [Cross-Origin-Verwendung von Bildern und Canvas ermöglichen](/de/docs/Web/HTML/How_to/CORS_enabled_image) beschriebene Nutzung zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um das Risiko solcher Angriffe zu verringern, sollten Sie bei den angeforderten Bildern das Attribut `crossorigin` verwenden und mit dem folgenden Codeausschnitt in Ihrer `.htaccess` den CORS-Header auf dem Server setzen.

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

Im [Leitfaden zur Fehlerbehebung bei Google Fonts](https://fonts.google.com/faq#troubleshooting) weist Google Chrome darauf hin, dass Google Fonts den CORS-Header zwar mit jeder Antwort senden kann, manche Proxyserver ihn aber entfernen, bevor der Browser ihn zum Rendern der Schriftart nutzen kann.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcen-Timing

Die [Resource-Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle, über die Webanwendungen auf die vollständigen Timing-Informationen der Ressourcen in einem Dokument zugreifen können.

Der Antwort-Header [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin) legt fest, welche Origins die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden. Andernfalls würden diese Werte aufgrund von Cross-Origin-Beschränkungen als null gemeldet.

Wird eine Ressource ohne `Timing-Allow-Origin` ausgeliefert oder enthält der Header nach der Anfrage die Origin nicht, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten und -meldungen

Mit Apache können Sie Benutzern je nach Art des aufgetretenen Fehlers benutzerdefinierte Fehlerseiten anzeigen.

Die Fehlerseiten werden als URLs angegeben. Diese URLs können mit einem Schrägstrich (/) beginnen, wenn es sich um lokale Webpfade handelt (relativ zu DocumentRoot), oder vollständige URLs sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationswebsite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis funktioniert, auf das die Konfiguration angewendet wird.

`MultiViews` funktioniert folgendermaßen: Wenn der Server eine Anfrage für /some/dir/foo erhält, `MultiViews` für /some/dir aktiviert ist und /some/dir/foo nicht existiert, durchsucht der Server das Verzeichnis nach Dateien mit dem Namen foo.\*. Anschließend erstellt er praktisch eine Typzuordnung für alle gefundenen Dateien und weist ihnen dieselben Medientypen und Inhaltskodierungen zu, die sie hätten, wenn der Client sie namentlich angefordert hätte. Danach wählt er die Datei aus, die den Anforderungen des Clients am besten entspricht.

Die Einstellung deaktiviert `MultiViews` für das betroffene Verzeichnis und verhindert, dass Apache infolge eines Rewrites einen 404-Fehler zurückgibt, wenn das gleichnamige Verzeichnis nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um dem für eine HTTP-Antwort ausgewählten Inhalt Metadaten zuzuweisen. Dazu werden Muster in der URI oder in Dateinamen den jeweiligen Metadatenwerten zugeordnet.

Beispielsweise bestimmen Dateiendungen häufig den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltskodierung. Diese Informationen werden in HTTP-Nachrichten mit dem betreffenden Inhalt gesendet und bei der Inhaltsaushandlung zur Auswahl zwischen Alternativen verwendet, damit die Präferenzen des Benutzers bei der Auswahl des auszuliefernden Inhalts berücksichtigt werden.

**Eine Änderung der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Daher können Clients oder Proxys weiterhin zuvor zwischengespeicherte Kopien mit den bisherigen Headern verwenden. Wenn Sie Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Kodierung) ändern, müssen Sie möglicherweise das Änderungsdatum der betroffenen Dateien aktualisieren, damit alle Besucher die korrigierten Inhalts-Header erhalten.**

### Ressourcen mit den richtigen Medientypen (auch MIME-Typen genannt) ausliefern

Ordnet einer oder mehreren Dateiendungen Medientypen zu, damit die Ressourcen korrekt ausgeliefert werden.

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

## Standardzeichensatz festlegen

Jeder Inhalt im Web hat einen Zeichensatz. Die meisten Inhalte, wenn nicht sogar alle, verwenden UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem Zeichensatz `UTF-8` auszuliefern.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für bestimmte Medientypen festlegen

Liefern Sie die folgenden Dateitypen mithilfe der in `mod_mime` verfügbaren Direktive [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset) aus, wobei der Parameter `charset` auf `UTF-8` gesetzt ist.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) ermöglicht es, eingehende URL-Anfragen anhand von Regeln mit regulären Ausdrücken dynamisch zu ändern. So können Sie beliebige URLs nach Bedarf Ihrer internen URL-Struktur zuordnen.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl zugehöriger Bedingungen pro Regel. Dadurch bietet es einen sehr flexiblen und leistungsfähigen Mechanismus zur URL-Manipulation. Die URL-Manipulationen können von verschiedenen Prüfungen abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, Abfragen externer Datenbanken sowie verschiedene andere externe Programme oder Handler können für einen präzisen URL-Abgleich verwendet werden.

### `mod_rewrite` aktivieren

Die grundlegende Konfiguration zum Aktivieren von `mod_rewrite` ist Voraussetzung für alle weiteren Aufgaben, die das Modul verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist notwendig, damit `RewriteRule`-Direktiven funktionieren), wie in der Dokumentation zu [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) beschrieben.
2. Aktivieren Sie die Option `FollowSymLinks`, falls sie noch nicht aktiviert ist. Weitere Informationen finden Sie in der Dokumentation zu [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options).
3. Wenn Ihr Webhoster die Option `FollowSymlinks` nicht zulässt, müssen Sie sie auskommentieren oder entfernen und stattdessen die Zeile `Options +SymLinksIfOwnerMatch` einkommentieren. Beachten Sie dabei die [Auswirkungen auf die Leistung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).
   - Bei manchen Cloud-Hosting-Diensten müssen Sie `RewriteBase` festlegen.
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

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL weiter, wie im [Apache-HTTPD-Wiki](https://cwiki.apache.org/confluence/spaces/HTTPD/pages/115522478/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Webroot-Methode von Let's Encrypt zum Erstellen Ihrer TLS-Zertifikate verwenden, schlägt die Zertifikatsvalidierung fehl, wenn Validierungsanfragen zu HTTPS weitergeleitet werden. Aktivieren Sie die benötigten Bedingungen.

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

Sie sollten Inhalte nicht unter mehreren Origins (mit und ohne www) bereitstellen. Das kann SEO-Probleme durch doppelte Inhalte verursachen. Entscheiden Sie sich daher für eine der Varianten und leiten Sie die andere dorthin weiter. Verwenden Sie außerdem [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/), um Suchmaschinen anzugeben, welche URL sie crawlen sollen (sofern sie diese Funktion unterstützen).

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

Das kann SEO-Probleme durch doppelte Inhalte verursachen. Entscheiden Sie sich daher für eine der Varianten und leiten Sie die andere dorthin weiter. Für Suchmaschinen, die diese Funktion unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL sie crawlen sollen.

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

Das folgende Beispiel sendet den Antwort-Header `X-Frame-Options` mit dem Wert DENY. Damit werden Browser angewiesen, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Diese Einstellung ist möglicherweise nicht für alle geeignet. Lesen Sie auch über [die beiden anderen möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM`.

Sie könnten den `X-Frame-Options`-Header zwar für alle Seiten Ihrer Website senden, doch dadurch wird auch jede zulässige Einbettung Ihrer Inhalte in Frames verhindert (beispielsweise wenn Benutzer Ihre Website über eine Ergebnisseite der Google-Bildersuche aufrufen).

Dennoch sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, auf denen Benutzer eine zustandsändernde Aktion ausführen können (beispielsweise Seiten mit Links für einen Kauf per Klick, Kassen- oder Bestätigungsseiten für Banküberweisungen sowie Seiten, auf denen dauerhafte Konfigurationsänderungen vorgenommen werden).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site-Scripting und anderen Angriffen durch das Einschleusen von Inhalten, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die für alle Websites passt. Das folgende Beispiel dient als Orientierung und sollte an Ihre Website angepasst werden.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/tools/csp-builder) verwenden. Prüfen Sie außerdem mit einem [Validator](https://csp-evaluator.withgoogle.com/), ob Ihr Header die gewünschte Wirkung hat.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Diese CSP:

1. Beschränkt durch Setzen der Direktive `default-src` auf `'self'` standardmäßig alle Abrufe auf die Origin der aktuellen Website. Die Direktive dient als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Das ist praktisch, weil Sie nicht alle für Ihre Website geltenden Fetch-Direktiven einzeln angeben müssen, beispielsweise `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'` usw.
   - Diese Beschränkung bedeutet auch, dass Sie ausdrücklich festlegen müssen, von welchen Websites Ihre Website Ressourcen laden darf. Andernfalls ist das Laden auf dieselbe Origin wie die anfragende Seite beschränkt.

2. Untersagt das Element `<base>` auf der Website. Dadurch wird verhindert, dass Angreifer die Speicherorte von Ressourcen ändern, die über relative URLs geladen werden.
   - Wenn Sie das Element `<base>` verwenden möchten, nutzen Sie stattdessen `base-uri 'self'`.

3. Erlaubt Formularübermittlungen mit `form-action 'self'` nur an die aktuelle Origin.
4. Verhindert durch Setzen von `frame-ancestors 'none'`, dass irgendeine Website (einschließlich Ihrer eigenen) Ihre Webseiten beispielsweise in einem `<iframe>`- oder `<object>`-Element einbettet.
   - Die Direktive `frame-ancestors` hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu verhindern, und ähnelt dem Header `X-Frame-Options`.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn auch `frame-ancestors` angegeben ist.

5. Zwingt den Browser durch Setzen der Direktive `upgrade-insecure-requests`, alle über HTTP ausgelieferten Ressourcen so zu behandeln, als wären sie sicher über HTTPS geladen worden.
   - **`upgrade-insecure-requests` stellt HTTPS nicht für die Navigation auf oberster Ebene sicher. Wenn Sie erzwingen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den Header `Strict-Transport-Security` einfügen.**

6. Fügt den Header `Content-Security-Policy` allen Antworten hinzu, die Skripte ausführen können. Dazu gehören häufig verwendete Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien in einem „Browsing Context“ keine Skripte ausführen können, werden sie einbezogen, um [Web-Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) abzudecken.

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in einem der auf dem Server konfigurierten Formate enthalten, beispielsweise `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Auf Macintosh- und Linux-Systemen sind Dateien, deren Name mit einem Punkt beginnt, in der Ansicht verborgen. Wenn ihr Name und Speicherort bekannt sind, kann jedoch weiterhin auf sie zugegriffen werden. Solche Dateien enthalten häufig Benutzereinstellungen oder den gespeicherten Zustand eines Dienstprogramms. Dazu können auch sensible Verzeichnisse wie `.git` oder `.svn` gehören.

Das Verzeichnis `.well-known/` ist das [standardisierte (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für „bekannte Speicherorte“ (beispielsweise `/.well-known/manifest.json` und `/.well-known/keybase.txt`). Der Zugriff auf seine sichtbaren Inhalte sollte daher nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Sicherungs- und Quelldateien, die manche Texteditoren zurücklassen und die ein Sicherheitsrisiko darstellen können, wenn jeder auf sie zugreifen kann.

Erweitern Sie den regulären Ausdruck in `<FilesMatch>` im folgenden Beispiel um alle Dateien, die auf Ihrem Produktivserver landen und sensible Informationen über Ihre Website preisgeben könnten. Dazu zählen unter anderem Konfigurationsdateien oder Dateien mit Projektmetadaten.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, bleibt selbst dann ein Zeitfenster für einen Angreifer, die Anfrage herabzustufen oder umzuleiten, wenn der Server zur sicheren Version der Website weiterleitet: die anfängliche HTTP-Verbindung.

Der folgende Header stellt sicher, dass sich ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufen werden kann. Sie müssen sicherstellen, dass Sie die Website mindestens so lange über HTTPS bereitstellen können, wie in der Direktive `max-age` angegeben. Wenn keine gültige TLS-Verbindung mehr besteht (beispielsweise wegen eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher selbst beim Versuch, eine Verbindung über HTTP herzustellen, eine Fehlermeldung.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## MIME-Sniffing der Antwort durch manche Browser verhindern

Einige ältere Browser versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er in der Serverkonfiguration nicht korrekt festgelegt ist. Diese Einstellung verringert das Risiko von Drive-by-Download-Angriffen und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den Header `Referrer-Policy` zu Antworten für Ressourcen hinzu, die andere Ressourcen anfordern (oder zu ihnen navigieren) können.

Dazu gehören häufig verwendete Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um die Weitergabe von Referrer-Informationen vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken kann.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu prüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## HTTP-Methode `TRACE` deaktivieren

Die Methode [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE) erscheint harmlos, kann in manchen Szenarien aber dazu missbraucht werden, Anmeldedaten legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site-Tracing-Angriff (XST)](https://community.owasp.org/attacks/Cross_Site_Tracing) und den [OWASP-Leitfaden für Web-Sicherheitstests](https://owasp.github.io/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern inzwischen TRACE-Anfragen über JavaScript. Es wurden jedoch andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, beispielsweise über Java.

Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben, verwenden Sie stattdessen die Direktive [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable).

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Antwort-Header `X-Powered-By` entfernen

Manche Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (beispielsweise ihren Namen und ihre Versionsnummer).

Dieser Header bietet keinen Nutzen. In manchen Fällen können die darin enthaltenen Informationen Schwachstellen offenlegen.

Wenn möglich, sollten Sie den `X-Powered-By`-Header auf Ebene der Sprache oder des Frameworks deaktivieren. In PHP können Sie dazu beispielsweise Folgendes in `php.ini` festlegen:

```ini
expose_php = off;
```

## Von Apache erzeugte Fußzeile mit Serverinformationen entfernen

Verhindern Sie, dass Apache an vom Server erzeugte Dokumente (beispielsweise Fehlermeldungen und Verzeichnisauflistungen) eine abschließende Fußzeile mit Serverinformationen anhängt. Weitere Informationen zum Inhalt der Serversignatur finden Sie in der Dokumentation zur [Direktive `ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature). Wie Sie die darin enthaltenen Informationen konfigurieren, beschreibt die Dokumentation zur [Direktive `ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens).

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

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, mithilfe der [Direktive AddOutputFilterByType](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

Ordnen Sie die folgenden Dateiendungen mithilfe von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) dem angegebenen Kodierungstyp zu, damit Apache die Dateitypen mit dem passenden Antwort-Header `Content-Encoding` ausliefern kann (dadurch werden sie von Apache **NICHT** komprimiert!). Würden diese Dateitypen ohne passenden `Content-Encoding`-Antwort-Header ausgeliefert, wüssten Clientanwendungen (beispielsweise Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssen, und könnten den Inhalt daher nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Ablauf des Caches

Liefern Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum aus. Verwenden Sie dazu das Modul [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) sowie die Header [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires).

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
