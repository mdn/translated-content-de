---
title: "Apache-Konfiguration: .htaccess"
short-title: Apache .htaccess
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache HTTPD-Dokumentationsseite für weitere Informationen darüber, was .htaccess-Dateien tun können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen diskutieren, die Sie zu `.htaccess` hinzufügen können und welche Effekte sie haben.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. Auf diese Weise schützen wir unseren Server vor einem Absturz, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass eine Ressource verschoben wurde, entweder vorübergehend oder dauerhaft. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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
  - : Gibt einen permanenten Weiterleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Der erste Satz von Direktiven steuert den Zugriff auf [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Ressourcen vom Server aus. CORS ist ein HEADER-basierter Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben sollte.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen XMLHttpRequest und die Fetch-API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur auf Ressourcen von dem Origin zugreifen, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Origins enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive wird den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzufügen.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive später in der Konfiguration oder in der Konfiguration eines darunter liegenden Verzeichnisses nicht überschreiben, wird jede Anfrage von externen Servern genehmigt, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative ist, explizit anzugeben, welche Domains auf den Inhalt Ihrer Website zugreifen dürfen. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Erlauben des Cross-Origin-Gebrauchs von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerabdruckangriffen")}} führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den unten stehenden Codeausschnitt in Ihrem `.htaccess` verwenden, um den CORS-Header vom Server zu setzen.

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

Googles Chrome [Google Fonts Troubleshooting Guide](https://developers.google.com/fonts/docs/troubleshooting) informiert uns darüber, dass obwohl Google Fonts den CORS-Header mit jeder Antwort senden kann, einige Proxy-Server ihn entfernen, bevor der Browser ihn verwenden kann, um die Schriftart darzustellen.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcen-Timing

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um vollständige Zeitinformationen für Ressourcen in einem Dokument zu erhalten.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, denen es erlaubt ist, die Werte von Attributen zu sehen, die über Funktionen der Resource Timing API abgerufen wurden und die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header nach der Anfrage den Origin nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/Nachrichten

Apache erlaubt es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs bereitgestellt. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zu DocumentRoot) oder als vollständige URL beginnen, die der Client auflösen kann.

Siehe die Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis funktioniert, auf das die Konfiguration zutrifft.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, falls /some/dir `MultiViews` aktiviert hat, und /some/dir/foo nicht existiert, liest der Server das Verzeichnis, sucht nach Dateien, die foo.\* heißen, und emuliert effektiv eine Typzuordnung, die alle diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltskodierungen zuweist, die sie hätte, wenn der Client eine von ihnen nach Namen angefordert hätte. Der Server wählt dann die beste Übereinstimmung zu den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, für das diese Konfiguration gilt, und verhindert, dass Apache einen 404-Fehler als Ergebnis eines Rewrites zurückgibt, wenn das Verzeichnis mit dem gleichen Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten den für eine HTTP-Antwort ausgewählten Inhalten zuzuordnen, indem Muster in der URI oder Dateinamen zu den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren die Dateinamenserweiterungen von Inhaltsdateien oft den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltskodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten mit diesem Inhalt gesendet und in der Inhaltsverhandlung verwendet, wenn Alternativen ausgewählt werden, sodass die Präferenzen des Benutzers berücksichtigt werden, wenn eine der mehreren möglichen Inhalte ausgewählt wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien von einem Client oder Proxy weiterhin verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Kodierung) ändern, müssen Sie unter Umständen die betroffenen Dateien "berühren" (ihr Letztänderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhalts-Header erhalten.**

### Ressourcen mit den richtigen Medientypen (auch bekannt als MIME-Typen) bereitstellen

Ordnet Medientypen einer oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie es in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben ist.

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
    AddType text/cache-manifest           appcache
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

## Den Standard-Zeichensatz-Attribut festlegen

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem Zeichensatz `UTF-8` bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für spezifische Medientypen festlegen

Stellen Sie sicher, dass die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` gesetzt bereitgestellt werden, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive verwenden, die in `mod_mime` verfügbar ist.

```apacheconf
<IfModule mod_mime.c>
  AddCharset utf-8 .appcache \
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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu modifizieren. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur auf beliebige Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben
2. Aktivieren Sie die Option `FollowSymLinks`, falls sie noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Webhost die Option `FollowSymlinks` nicht erlaubt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, seien Sie sich jedoch der [Leistungsfolgen](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst
   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Je nachdem, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### Erzwingen von HTTPS

Diese Rewrite-Regeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL um, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt-Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung des Zertifikats fehl, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Schalten Sie die benötigte(n) Bedingung(en) ein.

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

### Weiterleitung von `www.` URLs

Diese Direktiven leiten `www.example.com` zu `example.com` um.

Sie sollten Inhalte nicht in mehreren Ursprüngen duplizieren (mit und ohne www). Dies kann SEO-Probleme verursachen (doppelter Inhalt), daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [Canonical URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollten (falls sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen so automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten zu lassen.

Die Regel nimmt standardmäßig an, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind.

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

### Einfügen des `www.` am Anfang von URLs

Diese Regeln werden `www.` am Anfang einer URL einfügen. Es ist wichtig zu beachten, dass Sie Inhalte niemals unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelter Inhalt) verursachen, daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [Canonical URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umschreibungen so automatisch mit dem entsprechenden Schema (`http` oder `https`) umleiten zu lassen.

Die Regel nimmt standardmäßig an, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eines der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung einschalten.

Das folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

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

Das folgende Beispiel sendet den Antwortheader `X-Frame-Options` mit dem Wert DENY, der Browsern mitteilt, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den möglichen Nachteil, dass es selbst jegliche Einbettung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website über eine Google-Bildersuche-Ergebnisseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die einem Benutzer erlauben, eine statusändernde Operation durchzuführen (z.B., Seiten, die Links zum einmaligen Kauf enthalten, Checkout- oder Banküberweisungsbestätigungsseiten, Seiten, die permanente Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Inhaltseinspeisungsangriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die für alle Websites passt, das folgende Beispiel ist als Richtlinie gedacht, die Sie für Ihre Website anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie wollen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei enthalten, in welchem Format der Server auch immer konfiguriert ist, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor der Ansicht verborgen, jedoch nicht vor dem Zugriff, wenn Sie ihren Namen und ihre Position kennen. Diese Art von Dateien enthält normalerweise Benutzereinstellungen oder den gespeicherten Zustand eines Dienstprogramms und kann eher private Orte wie die Verzeichnisse `.git` oder `.svn` umfassen.

Das Verzeichnis `.well-known/` stellt den [Standardpfad (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "bekannte Orte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), daher sollte der Zugriff auf dessen sichtbare Inhalte nicht blockiert werden.

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

Blockiert den Zugriff auf Sicherungs- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen können, wenn irgendjemand auf sie zugreifen kann.

Aktualisieren Sie den regulären Ausdruck im folgenden Beispiel `<FilesMatch>`, um alle Dateien einzubeziehen, die möglicherweise auf Ihrem Produktionsserver landen und empfindliche Informationen über Ihre Website offenlegen können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, auch wenn der Server ihn zur sicheren Version der Website umleitet, lässt dies immer noch ein Fenster der Gelegenheit (die anfängliche HTTP-Verbindung) für einen Angreifer offen, die Anfrage herunterzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht rückgängig gemacht werden kann und Sie müssen sicherstellen, dass die Seite über HTTPS so lange bereitgestellt wird, wie Sie den `max-age`-Parameter angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, auch wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den MIME-Typ der Antwort erraten

1. Beschränkt alle Aufrufe standardmäßig auf den Ursprung der aktuellen Website, indem die Direktive `default-src` auf `'self'` gesetzt wird - dies dient als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die auf Ihre Website anwendbar sind, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher Website(n) Ihre Website Ressourcen laden darf. Andernfalls wird es auf den gleichen Ursprung wie die Seite, die die Anfrage macht, beschränkt

2. Verbietet das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Speicherorte von Ressourcen manipulieren, die von relativen URLs geladen werden
   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`

3. Erlaubt das Einreichen von Formularen nur vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb z.B., der `<iframe>` oder `<object>` Elemente einbetten, indem `frame-ancestors 'none'` gesetzt wird.
   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe zu vermeiden und ist ähnlich wie der `X-Frame-Options` Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als ob sie sicher über HTTPS geladen würden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird
   - **`upgrade-insecure-requests` stellt nicht sicher, dass das Top-Level-Navigation über HTTPS erfolgt. Wenn Sie sicherstellen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen**

6. Schließt den `Content-Security-Policy`-Header in alle Rückmeldungen ein, die Skripte ausführen können. Dies schließt die häufig verwendeten Dateitypen: HTML, XML und PDF-Dokumente ein. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Webworker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu erreichen

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, auch wenn er nicht richtig in der Serverkonfiguration eingerichtet ist. Dies reduziert die Exposition gegenüber Drive-by-Download-Angriffen und Cross-Origin-Datenleckagen.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Policy

Wir schließen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind Anfragen zu stellen (oder zu anderen Ressourcen zu navigieren).

Dies schließt häufig verwendete Ressourcentypen ein: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um ein vollständiges Referrer-Leck zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass sich dies negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten aufgeführten, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## `TRACE` HTTP-Methode deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE) Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich genutzt werden, um die Anmeldeinformationen von legitimen Nutzern zu stehlen. Siehe [Ein Cross-Site Tracing (XST)-Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gestellt werden, jedoch wurden andere Möglichkeiten entdeckt, um TRACE-Anfragen mit Browsern zu senden, wie z.B. mit Java.

Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive stattdessen.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer)

Dieser Header liefert keinen Mehrwert und kann in einigen Fällen die Sicherheitslücken, die er aufzeigt, ausnutzen

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf der Sprache/Framework-Ebene deaktivieren (z.B.: für PHP können Sie dies tun, indem Sie das Folgende in `php.ini` setzen.

```ini
expose_php = off;
```

## Entfernen des von Apache generierten Server-Informationsfußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeile mit Informationen über den Server zu den vom Server generierten Dokumenten hinzufügt (z.B., Fehlermeldungen, Verzeichnislisten, etc.). Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Direktive-Dokumentation für weitere Informationen, was die Server-Signatur bereitstellt und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens) Direktive für Informationen darüber, wie die bereitgestellten Informationen in der Signatur konfiguriert werden.

```apacheconf
ServerSignature Off
```

## Korrigieren von kaputten `AcceptEncoding`-Headers

Einige Proxies und Sicherheitssoftware vermischen oder entfernen den `Accept-Encoding` HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine ausführlichere Erklärung.

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

## Medienformate komprimieren

Komprimieren Sie alle Ausgaben, die mit einem der folgenden Medientypen gekennzeichnet sind, unter Verwendung der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen Medienformaten zuordnen

Ordnen Sie die folgenden Dateiendungstypen dem angegebenen Kodierungstyp zu, indem Sie [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) verwenden, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies wird sie NICHT komprimieren!). Wenn diese Dateitypen ohne den entsprechenden `Content-Encoding`-Antwortheader bereitgestellt werden, wüssten

Klientenanwendungen (z.B., Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssten, und hätten daher keinerlei Möglichkeit, den Inhalt zu verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Stellen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum bereit, indem Sie das [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Modul und die [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires)-Header verwenden.

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
