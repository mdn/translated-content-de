---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers zu konfigurieren, die sie kontrollieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Dokumentation der Apache HTTPD-Seite für weitere Details darüber, was .htaccess-Dateien tun können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen besprechen, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul richtig konfiguriert wurde und der Server es geladen hat. Auf diese Weise schützen wir unseren Server vor Abstürzen, wenn das Modul nicht geladen wurde.

## Weiterleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass sich eine Ressource entweder vorübergehend oder dauerhaft verschoben hat. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgelistet. Wenn der erste Parameter nicht eingeschlossen wird, ist der Standardwert `temp`.

- permanent
  - : Gibt einen permanenten Weiterleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other" Status (303) zurück, der angibt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone" Status (410) zurück, der angibt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_ Argument weggelassen werden.

## Cross-Origin-Ressourcen

Der erste Satz von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing) Zugriff auf Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, die ein Browser beim Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen `XMLHttpRequest` und die Fetch-API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Es sei denn, Sie überschreiben die Direktive später in der Konfiguration oder in der Konfiguration eines Verzeichnisses unterhalb dort, wo Sie diese gesetzt haben, wird jede Anfrage von externen Servern akzeptiert, was wahrscheinlich nicht das ist, was Sie wollen.

Ein Alternative ist, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Seite haben. Im untenstehenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Erlauben der CORS-Nutzung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu minimieren, sollten Sie das `crossorigin` Attribut in den Bildern verwenden, die Sie anfordern, und das untenstehende Code-Snippet in Ihrer `.htaccess` verwenden, um den CORS-Header vom Server zu setzen.

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

Der [Google Fonts Troubleshooting Guide](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome gibt an, dass, obwohl Google Fonts möglicherweise den CORS-Header mit jeder Antwort sendet, einige Proxyserver den Header entfernen können, bevor der Browser ihn verwendet, um die Schrift zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcenzeitmessung

Die [Ressourcen-Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf vollständige Zeitinformationen für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Response-Header spezifiziert Ursprünge, die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header den Ursprung nach der Anfrage nicht einschließt, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/Nachrichten

Apache erlaubt es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum `DocumentRoot`) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) in der HTTPD-Dokumentation für mehr Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie `MultiViews` für das Verzeichnis funktioniert, auf das die Konfiguration angewendet wird.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann durchläuft der Server das Verzeichnis, um nach Dateien namens foo.\* zu suchen, und simuliert effektiv eine Typzuordnung, die alle diese Dateien benennt, wobei sie denselben Medientypen und Inhaltscodierungen zugewiesen werden, die sie hätten, wenn der Client eine von ihnen mit Namen angefordert hätte. Anschließend wählt er das beste Übereinstimmung mit den Anforderungen des Clients.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umschreibung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten für den ausgewählten Inhalt einer HTTP-Antwort zuzuweisen, indem Muster in der URI oder Dateinamen den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren Dateinamenerweiterungen von Inhaltsdateien häufig den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und in der Inhaltsverhandlung verwendet, wenn Alternativen ausgewählt werden, sodass die Präferenzen des Benutzers respektiert werden, wenn eine der möglichen Inhalte bereitgestellt werden soll.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des `Last-Modified`-Headers. Daher können zuvor zwischengespeicherte Kopien von einem Client oder Proxy weiterhin verwendet werden, mit den vorherigen Headers. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien 'berühren' (das Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhalt-Header erhalten.**

### Bereitstellung von Ressourcen mit den richtigen Medientypen (auch bekannt als MIME-Typen)

Verknüpft Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen entsprechend bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

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

## Setzen Sie das Standard-zeichensatzattribut

Jedes Stück Inhalt im Web hat einen Zeichensatz. Meistens, wenn nicht sogar alles, ist der Inhalt im UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem `UTF-8` Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Festlegen des Zeichensatzes für spezifische Medientypen

Dienen Sie die folgenden Dateitypen mit dem `charset` Parameter auf `UTF-8` gesetzt, unter Verwendung der [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive, die in `mod_mime` verfügbar ist.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit zur dynamischen Modifikation eingehender URL-Anfragen basierend auf regulären Ausdrucksregeln. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise zuzuordnen.

Es unterstützt eine unbegrenzte Anzahl an Regeln und eine unbegrenzte Anzahl an angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erzielen.

### Aktivieren von `mod_rewrite`

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation dokumentiert.
2. Aktivieren Sie die `FollowSymLinks`-Option, falls diese noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation.
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht zulässt, müssen Sie diese kommentieren oder entfernen, und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber beachten Sie die [Performance-Auswirkungen](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks).

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen.
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Je nachdem, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren.

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

Diese Rewrite-Regeln werden von der unsicheren `http://` Version zur sicheren `https://` Version der URL weiterleiten, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt-Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, wird die Validierung des Zertifikats fehlschlagen, wenn Validierungsanfragen zu HTTPS weitergeleitet werden. Aktivieren Sie die benötigten Bedingung(en).

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

### Umleitung von `www.` URLs

Diese Direktiven schreiben `www.example.com` in `example.com` um.

Sie sollten keinen Inhalt in mehreren Ursprüngen duplizieren (mit und ohne www). Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umleitungen mit dem geeigneten Schema automatisch (`http` oder `https`) umzuleiten.

Die Regel nimmt standardmäßig an, dass sowohl HTTP- als auch HTTPS-Umgebungen für Umleitungen verfügbar sind.

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

Diese Regeln fügen `www.` an den Anfang einer URL ein. Es ist wichtig zu beachten, dass derselbe Inhalt niemals unter zwei verschiedenen URLs verfügbar gemacht werden sollte.

Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umleitungen mit dem geeigneten Schema automatisch (`http` oder `https`) umzuleiten.

Die Regel nimmt standardmäßig an, dass sowohl HTTP- als auch HTTPS-Umgebungen für Umleitungen verfügbar sind. Wenn Ihr TLS-Zertifikat während der Umleitung eine der verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Webseite verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Response-Header mit DENY als Wert, um Browser darüber zu informieren, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Webseite gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies könnte nicht die beste Einstellung für jeden sein. Sie sollten über [die anderen zwei möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Webseite senden könnten, hat dies den potenziellen Nachteil, dass es sogar jegliche Einrahmung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Webseite über eine Google Bildsuche besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, eine zustandsverändernde Operation durchzuführen (z.B., Seiten, die Links für einen Ein-Klick-Kauf enthalten, Checkout- oder Banküberweisungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Richtlinien zur Inhaltsicherheit (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site Scripting und anderen Inhaltsinjektionsangriffen, indem es eine `Content Security Policy` festlegt, die vertrauenswürdige Quellen für Inhalte Ihrer Webseite erlaubt.

Es gibt keine Richtlinie, die für alle Webseiten passt. Das folgende Beispiel ist als Richtlinie gedacht, die Sie für Ihre Website modifizieren können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online- [CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie wollen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im Format enthalten, das der Server zu verwenden konfiguriert ist, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

Auf Macintosh- und Linux-Systemen beginnende Dateien mit einem Punkt sind aus der Ansicht versteckt, aber nicht von Zugriff, wenn Sie deren Namen und Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können ziemlich private Orte wie zum Beispiel die `.git` oder `.svn` Verzeichnisse umfassen.

Das `.well-known/` Verzeichnis repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für "wohlbekannte Orte" (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seine sichtbaren Inhalte nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen, wenn jeder Zugang zu ihnen hat.

Aktualisieren Sie den `<FilesMatch>` regulären Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver enden und sensible Informationen über Ihre Webseite offenlegen könnten. Diese Dateien können Konfigurationsdateien oder Dateien sein, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server sie zur sicheren Version der Webseite umleitet, bleibt noch ein Zeitfenster (die initiale HTTP-Verbindung) für einen Angreifer, um die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in der Adressleiste des Browsers eingeben.

Beachten Sie, dass die Strict Transport Security nicht widerrufbar ist, und Sie müssen sicherstellen, dass die Seite so lange über HTTPS bereitgestellt werden kann, wie Sie es in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser das Antwort-MIME sniffen

1. Beschränkt standardmäßig alle Abrufe auf den Ursprung der aktuellen Webseite durch Setzen der `default-src`-Direktive auf `'self'` - was als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} fungiert.

   - Dies ist bequem, da Sie nicht alle Fetch-Direktiven spezifizieren müssen, die auf Ihre Seite zutreffen, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, etc.
   - Diese Beschränkung bedeutet auch, dass Sie explizit definieren müssen, von welchen Seite(n) Ihre Webseite Ressourcen laden darf. Andernfalls wird es auf den gleichen Ursprung beschränkt, von dem die Anfrage stammt.

2. Verbietet das `<base>` Element auf der Webseite. Dies dient dazu, zu verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden.

   - Wenn Sie das `<base>` Element verwenden möchten, dann verwenden Sie `base-uri 'self'` stattdessen

3. Erlaubt nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Webseiten (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb eines `<iframe>` oder `<object>`-Elements einbetten, indem `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, und ähnelt dem `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls spezifiziert ist

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als ob sie sicher über HTTPS geladen wurden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.

   - **`upgrade-insecure-requests` stellt keine HTTPS-Verbindung für die Top-Level-Navigation sicher. Wenn Sie die Webseite selbst dazu zwingen möchten, über HTTPS geladen zu werden, müssen Sie den `Strict-Transport-Security`-Header einfügen**

6. Schließt den `Content-Security-Policy`-Header in alle Antworten ein, die in der Lage sind, Skripting auszuführen. Dies schließt die häufig verwendeten Dateitypen ein: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Web-Arbeiter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu adressieren.

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn dieser nicht richtig in der Serverkonfiguration eingerichtet war. Dies reduziert die Anfälligkeit von Drive-by-Download-Angriffen und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir schließen den `Referrer-Policy`-Header in die Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu navigieren).

Dies schließt häufig verwendete Ressourcentypen ein: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um Referrer-Leakage vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass der Effekt sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## HTTP TRACE Methode deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode mag harmlos erscheinen, kann jedoch in einigen Szenarien erfolgreich genutzt werden, um legitimen Benutzern Anmeldeinformationen zu stehlen. Siehe [Einen Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern nun TRACE-Anfragen, die über JavaScript gestellt werden, jedoch wurden andere Wege entdeckt, TRACE-Anfragen mit Browsern zu senden, wie zum Beispiel mit Java.

Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By` Antwort-Headers

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. deren Name, Versionsnummer).

Dieser Header bietet keinen Mehrwert und kann in einigen Fällen durch die bereitgestellten Informationen Schwachstellen offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn möglich, sollten Sie den `X-Powered-By`-Header von der Sprache/Framework-Ebene deaktivieren (z.B.: für PHP können Sie dies tun, indem Sie das folgende in `php.ini` festlegen.

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Server-Informationen Fußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeilenzeile mit Informationen über den Server in die vom Server generierten Dokumente (z.B. Fehlermeldungen, Verzeichnisauflistungen, etc.) hinzufügt. Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Direktive für weitere Informationen darüber, welche Informationen die Server-Signatur bereitstellt, und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens)-Direktive für Informationen zur Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Behebung defekter `AcceptEncoding` Headers

Einige Proxies und Sicherheitssoftware beschädigen oder entfernen den `Accept-Encoding` HTTP-Header. Siehe [Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detaillierte Erklärung.

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

## Medienarten komprimieren

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

## Zuordnung von Erweiterungen zu Medientypen

Ordnen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp zu, indem Sie [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) verwenden, sodass Apache die Dateitypen mit dem geeigneten `Content-Encoding` Antwort-Header bereitstellen kann (dies wird Apache NICHT dazu bringen, sie zu komprimieren!). Wenn diese Dateitypen ohne einen geeigneten `Content-Encoding` Antwort-Header bereitgestellt wurden, würden Client-Anwendungen (z.B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssen, und somit den Inhalt nicht verstehen können.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Dienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) Moduls und der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) Header.

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
