---
title: "Apache-Konfiguration: .htaccess"
slug: Learn/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers zu konfigurieren, die sie kontrollieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort in einem `Directory`-Block hinzufügen.

Weitere Details darüber, was .htaccess-Dateien tun können, finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache HTTPD-Dokumentationsseite.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen erörtern, die Sie zur `.htaccess` hinzufügen können, und deren Funktionalität erklären.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul korrekt konfiguriert und vom Server geladen wurde. So verhindern wir, dass unser Server abstürzt, wenn das Modul nicht geladen wurde.

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

Die möglichen Werte für den ersten Parameter sind unten aufgelistet. Wenn der erste Parameter nicht enthalten ist, ist der Standardwert `temp`.

- permanent
  - : Gibt einen permanenten Weiterleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Weiterleitungsstatus (302) zurück. **Dies ist der Standardwert**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Bei Verwendung dieses Status sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Die erste Reihe von Direktiven steuert den Zugriff auf [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, deren Laden von Ressourcen ein Browser erlauben soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen XMLHttpRequest und die Fetch-API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von derselben Herkunft anfordern, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt allen Ressourcen im Verzeichnis den CORS-Header für jede Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines darunter liegenden Verzeichnisses überschreiben, wird jede Anfrage von externen Servern akzeptiert, was vermutlich nicht beabsichtigt ist.

Eine Alternative ist es, explizit anzugeben, welche Domains auf den Inhalt Ihrer Website zugreifen dürfen. Im folgenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium-Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Erlauben der cross-origin-Nutzung von Bildern und Canvas](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert, können [Fingerabdruck-](fingerprinting-)Angriffe ermöglichen.

Um die Möglichkeit solcher Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den untenstehenden Codeausschnitt in Ihrer `.htaccess` verwenden, um den CORS-Header vom Server zu setzen.

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

Das [Google Schriftarten-Troubleshooting-Leitfaden](https://developers.google.com/fonts/docs/troubleshooting) von Google Chrome erklärt, dass, während Google Fonts den CORS-Header mit jeder Antwort senden kann, einige Proxy-Server ihn entfernen können, bevor der Browser ihn verwenden kann, um die Schriftart anzuzeigen.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcen-Timing

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/) Spezifikation definiert eine Schnittstelle für Webanwendungen, um vollständige Timing-Informationen für Ressourcen in einem Dokument zu erhalten.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin) Antwort-Header spezifiziert Ursprünge, die die Werte der über Funktionen der Resource Timing API abgerufenen Attribute sehen dürfen, die sonst aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bedient wird oder der Header nicht den Ursprung nach der Durchführung der Anfrage enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-nachrichten

Apache ermöglicht es, Benutzern je nach Art des Fehlers, den sie erhalten, benutzerdefinierte Fehlerseiten bereitzustellen.

Die Fehlerseiten werden als URLs angezeigt. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Weitere Informationen finden Sie in der [Direktive ErrorDocument](https://httpd.apache.org/docs/current/mod/core.html#errordocument) in der HTTPD-Dokumentation.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis funktionieren, für das die Konfiguration gilt.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, liest der Server das Verzeichnis nach Dateien mit dem Namen foo.\* durchsucht und effektiv eine Typzuordnung erstellt, die alle diese Dateien benennt und ihnen dieselben Medientypen und Inhaltskodierungen zuweist, die sie hätte, wenn der Client nach einer davon namentlich gefragt hätte. Dann wählt er die beste Übereinstimmung mit den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umschreibung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhalts-Metadaten des Inhalts zuzuweisen, der für eine HTTP-Antwort ausgewählt wurde, indem Muster in der URI oder Dateinamen auf die Metadatenwerte gemappt werden.

Zum Beispiel definieren die Dateierweiterungen von Inhaltsdateien häufig den Internet-Medientyp, die Sprache, die Zeichencodierung und die Inhaltskodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und in der Inhaltsverhandlung verwendet, um Alternativen auszuwählen, sodass die Präferenzen des Benutzers berücksichtigt werden, wenn einer von mehreren möglichen Inhalten ausgewählt werden soll.

**Änderungen der Metadaten für eine Datei ändern nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien möglicherweise immer noch von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten ändern (Sprache, Inhaltstyp, Zeichensatz oder Kodierung), müssen Sie die betroffenen Dateien möglicherweise "anfassen" (Änderung des letzten Änderungsdatums), um sicherzustellen, dass alle Besucher die korrigierten Inhalts-Header erhalten.**

### Ressourcen mit den richtigen Medientypen (auch bekannt als MIME-Typen) bereitstellen

Weist Medientypen einem oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen ordnungsgemäß bereitgestellt werden.

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

## Setzen Sie das Standard-Zeichensatzattribut

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem `UTF-8`-Charset zu bedienen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Setzen Sie das Charset für bestimmte Medientypen

Dienen Sie die folgenden Dateitypen mit dem `charset` Parameter, der auf `UTF-8` gesetzt ist, unter Verwendung der [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset) Direktive, die in `mod_mime` verfügbar ist.

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

## `Mod_rewrite` und die `RewriteEngine` Direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu modifizieren. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl an angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsfähigen URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umweltvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine detaillierte URL-Match-Funktion zu erreichen.

### Aktivierung von `mod_rewrite`

Das Grundmuster, um `mod_rewrite` zu aktivieren, ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) Dokumentation beschrieben
2. Aktivieren Sie die Option `FollowSymLinks`, wenn sie nicht bereits aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options) Dokumentation
3. Wenn Ihr Webhost die Option `FollowSymlinks` nicht zulässt, müssen Sie sie auskommentieren oder entfernen und anschließend die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber beachten Sie die [Auswirkungen auf die Leistung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks)

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` festlegen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Je nach Ihrer Serverkonfiguration müssen Sie möglicherweise auch die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

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

Diese Rewrite-Regeln leiten von der unsicheren Version `http://` zur sicheren Version `https://` der URL wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben weiter.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Zertifikatsvalidierung fehl, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Aktivieren Sie die Bedingungen, die Sie benötigen.

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

Diese Direktiven ermöglichen es, `www.example.com` in `example.com` umzuschreiben.

Sie sollten keine Inhalte an mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollten (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umleitungen automatisch mit dem entsprechenden Schema (`http` oder `https`) durchzuführen.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind.

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

### Hinzufügen von `www.` am Anfang von URLs

Diese Regeln fügen `www.` am Anfang einer URL hinzu. Es ist wichtig zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die dies unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}`-Variable, um Umleitungen automatisch mit dem entsprechenden Schema (`http` oder `https`) durchzuführen.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat keine der während der Umleitung verwendeten Domains handhaben kann, sollten Sie die Bedingung aktivieren.

Das Folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihrer Website verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options` Antwort-Header mit dem Wert DENY und informiert Browser darüber, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Webseite vor [Clickjacking](/de/docs/Glossary/Clickjacking) zu schützen.

Dies könnte nicht die beste Einstellung für jeden sein. Sie sollten sich über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) informieren: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Webseite senden könnten, hat dies den potenziellen Nachteil, dass selbst das Einrahmen Ihres Inhalts verboten wird (z.B.: wenn Benutzer Ihre Website über eine Google Bildersuche besuchen).

Trotzdem sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die einem Benutzer erlauben, einen zustandsändernden Vorgang durchzuführen (z.B. Seiten, die Ein-Klick-Kaufschaltflächen, Checkout- oder Banküberweisungsbestätigungsseiten enthalten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) reduziert das Risiko von Cross-Site-Scripting und anderen Content-Injection-Angriffen, indem eine `Content Security Policy` gesetzt wird, die vertrauenswürdige Quellen von Inhalten für Ihre Website erlaubt.

Es gibt keine Politik, die für alle Webseiten geeignet ist, das folgende Beispiel ist als Leitlinien gedacht, die Sie für Ihre Webseite anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) benutzen, um sicherzustellen, dass Ihr Header das tut, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in dem vom Server konfigurierten Format enthalten, wie z.B. `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor der Ansicht verborgen, jedoch nicht vor dem Zugriff, wenn Sie ihren Namen und Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzereinstellungen oder den gespeicherten Zustand eines Dienstprogramms und können sehr private Orte wie zum Beispiel die `.git` oder `.svn` Verzeichnisse umfassen.

Das `.well-known/` Verzeichnis entspricht [dem Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "wohlbekannte Orte" (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden.

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

Verhindern Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen, wenn jeder darauf zugreifen kann.

Aktualisieren Sie das reguläre Ausdrucksmuster `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver enden und sensible Informationen über Ihre Webseite preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, auch wenn der Server ihn zur sicheren Version der Webseite umleitet, bleibt dennoch ein Zeitfenster für einen Angreifer, um die Anfrage herabzustufen oder umzuleiten (die anfängliche HTTP-Verbindung).

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS zu Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass strikte Transport-Sicherheit nicht widerrufbar ist und dass Sie sicherstellen müssen, dass die Website über HTTPS so lange bedient werden kann, wie Sie es in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. durch ein abgelaufenes TLS-Zertifikat), sehen Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern Sie, dass einige Browser die Antwort MIME-abharschen

1. Beschränkt standardmäßig alle Abrufe auf den Ursprung der aktuellen Webseite, indem der `default-src`-Directive auf `'self'` gesetzt wird, was als Fallback für alle [Fetch-Direktiven](/de/docs/Glossary/Fetch_directive) fungiert.

   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die für Ihre Seite gelten, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, usw.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welchen Seiten Ihre Webseite Ressourcen laden darf. Andernfalls wird es auf den gleichen Ursprung wie die Seite beschränkt, die die Anfrage stellt.

2. Verbietet das `<base>`-Element auf der Webseite. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden.

   - Falls Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formulareinreichungen von dem aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Webseiten (einschließlich Ihrer eigenen) Ihre Seiten innerhalb z.B. des `<iframe>` oder `<object>`-Elements einbetten, indem der `frame-ancestors 'none'`-Direktive gesetzt wird.

   - Die Direktive `frame-ancestors` hilft Klickjacking-Angriffe zu vermeiden und ähnelt dem `X-Frame-Options`-Header.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls spezifiziert ist.

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als wären sie sicher über HTTPS geladen, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.

   - **`upgrade-insecure-requests` stellt keine HTTPS-Verbindung für die Top-Level-Navigation sicher. Wenn Sie erzwingen möchten, dass die Webseite selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen.**

6. Enthält den `Content-Security-Policy`-Header in allen Antworten, die Skripting ausführen können. Dazu gehören die häufig verwendeten Dateitypen: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien in einem "Browsing-Kontext" keine Skripte ausführen können, sind sie enthalten, um [Webarbeiter](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers) anzusprechen.

Einige ältere Browser versuchten, den Inhaltstyp einer Ressource zu erraten, auch wenn er nicht ordnungsgemäß in der Serverkonfiguration festgelegt war. Dies verringert die Anfälligkeit für Drive-by-Download-Angriffe und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die andere Ressourcen anfordern (oder darauf zugreifen) können.

Dazu gehören die häufig genutzten Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um die Referrer-Leckage vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass dies sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten aufgeführten, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE` HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Methods/TRACE) Methode kann in einigen Szenarien erfolgreich genutzt werden, um legitime Benutzerdaten zu stehlen. Siehe [Einen Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gestellt werden, jedoch wurden andere Wege entdeckt, TRACE-Anfragen mit Browsern zu senden, z.B. unter Verwendung von Java.

Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable) Direktive stattdessen.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen Sie den `X-Powered-By` Antwort-Header

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer)

Dieser Header liefert keinen Wert, und in einigen Fällen können die bereitgestellten Informationen Sicherheitslücken offenbaren

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn möglich, sollten Sie den `X-Powered-By`-Header auf Sprachen-/Framework-Ebene deaktivieren (z.B. für PHP können Sie dies tun, indem Sie folgendes in `php.ini` einstellen.

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Serverinformationen im Footer

Verhindern Sie, dass Apache eine Fußzeile mit Informationen über den Server zu den servergenerierten Dokumenten hinzufügt (z.B. Fehlermeldungen, Verzeichnislistungen usw.). Weitere Informationen darüber, was die Server-Signatur bereitstellt, finden Sie in der Dokumentation zur [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature) Direktive und zur [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens) Direktive für Informationen über die Konfiguration der bereitgestellten Informationen in der Signatur.

```apacheconf
ServerSignature Off
```

## Reparieren von fehlerhaften `AcceptEncoding`-Headern

Manche Proxies und Sicherheitssoftware verändern oder entfernen den HTTP-Header `Accept-Encoding`. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine ausführlichere Erklärung.

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

Komprimieren Sie alle als eine der folgenden Medientypen gekennzeichneten Ausgaben mit der [AddOutputFilterByType Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen zu Medientypen zuordnen

Ordnen Sie die folgenden Dateinamenserweiterungen dem angegebenen Codierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding` Antwort-Header bereitstellen kann (dies führt NICHT dazu, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne entsprechenden `Content-Encoding` Antwort-Header bereitgestellt wurden, würden Clientanwendungen (z.B. Browser) nicht wissen, dass sie zuerst die Antwort dekomprimieren müssen und daher nicht in der Lage sein, den Inhalt zu verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Stellen Sie Ressourcen mit einem Ablaufdatum in ferner Zukunft mit dem [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) Modul bereit und verwenden Sie [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Headers/Expires) Header.

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
