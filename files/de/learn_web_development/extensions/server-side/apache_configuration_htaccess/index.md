---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

Mit Apache .htaccess-Dateien können Benutzer Verzeichnisse des Webservers, den sie kontrollieren, konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Während dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort im Rahmen eines `Directory`-Blocks hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationswebsite für mehr Details darüber, was .htaccess-Dateien können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen besprechen, die Sie `.htaccess` hinzufügen können, und was sie tun.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert wurde und der Server es geladen hat. Auf diese Weise verhindern wir, dass unser Server abstürzt, falls das Modul nicht geladen wurde.

## Weiterleitungen

Es gibt Zeiten, in denen wir Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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
  - : Ergibt einen permanenten Weiterleitungsstatus (301), der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Ergibt einen temporären Weiterleitungsstatus (302). **Dies ist der Standard**.
- seeother
  - : Ergibt einen "See Other"-Status (303), der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Ergibt einen "Gone"-Status (410), der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcen über verschiedene Ursprünge hinweg

Das erste Set von Direktiven kontrolliert den Zugriff auf [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der einem Server erlaubt, externe Ursprünge (Domain, Protokoll oder Port) anzugeben, die der Browser beim Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin HTTP-Anfragen, die von Skripten ausgelöst werden. Zum Beispiel befolgen XMLHttpRequest und die Fetch-API die Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von dem gleichen Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines untergeordneten Verzeichnisses, in dem Sie diese festgelegt haben, überschreiben, wird jede Anfrage von externen Servern akzeptiert, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Seite haben. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Bilder über verschiedene Ursprünge hinweg

Wie im [Chromium-Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Verwendung von Bildern aus verschiedenen Ursprüngen und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu mindern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den folgenden Codeausschnitt in Ihrer `.htaccess`, um den CORS-Header vom Server zu setzen.

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

Der [Google Fonts-Fehlerbehebungsleitfaden von Google Chrome](https://developers.google.com/fonts/docs/troubleshooting) sagt uns, dass, obwohl Google Fonts den CORS-Header mit jeder Antwort sendet, einige Proxy-Server ihn entfernen können, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Timing von Ressourcen über verschiedene Ursprünge hinweg

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständige Timing-Information für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der Resource Timing API abgerufen wurden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header den Ursprung nach dem Anfordern nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlermeldungen/-seiten

Apache ermöglicht es Ihnen, je nach Art des Fehlers, den Benutzer erhalten haben, benutzerdefinierte Fehlerseiten bereitzustellen.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument)-Dokumentation auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis arbeitet, auf das die Konfiguration zutrifft.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält und /some/dir `MultiViews` aktiviert hat, und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis nach Dateien namens foo.\* und erstellt effektiv eine Typkarte, die alle diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltscodierungen zuweist, die es hätte, wenn der Client eine davon namentlich angefordert hätte. Anschließend wird die beste Übereinstimmung mit den Anforderungen des Clients ausgewählt.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration zutrifft, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umschreibung zurückgibt, wenn das Verzeichnis mit dem gleichen Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhalts-Metadaten für den HTTP-Antwortinhalt zuzuweisen, indem es Muster im URI oder Dateinamen den Metadatenwerten zuordnet.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien häufig den Internetmedia-Typ, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten mit diesem Inhalt gesendet und bei der Inhaltsverhandlung zur Auswahl von Alternativen verwendet, so dass die Präferenzen des Benutzers bei der Auswahl eines von mehreren möglichen Inhalten berücksichtigt werden.

**Das Ändern der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien weiterhin von einem Client oder Proxy verwendet werden, ohne die vorherigen Header. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien 'berühren' (Änderung des letzten Änderungsdatums), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen (a.k.a. MIME-Typen) bereitstellen

Weist einen oder mehrere Erweiterungen Medientypen zu, um sicherzustellen, dass die Ressourcen entsprechend bereitgestellt werden.

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

## Die Standardeinstellung für das charset-Attribut setzen

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten Inhalte, wenn nicht alle, sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem `UTF-8`-Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Das charset für bestimmte Medientypen setzen

Stellen Sie die folgenden Dateitypen mit dem `charset`-Parameter bereit, der mit `UTF-8` unter Verwendung der [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive in `mod_mime` gesetzt ist.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dadurch können Sie beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abbilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelkonditionen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zur Aktivierung von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Umschreibungsmaschine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation dokumentiert
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Webhost die Option `FollowSymlinks` nicht zulässt, müssen Sie diese auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, achten Sie jedoch auf die [Leistungsbeeinträchtigung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks)
   - Einige Cloud-Hosting-Dienste erfordern es, `RewriteBase` zu setzen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig von der Einrichtung Ihres Servers müssen Sie möglicherweise auch die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Umschreibungsmaschine zu aktivieren

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

Diese Umschreibungsregeln leiten von der unsicheren `http://`-Version zur sicheren `https://`-Version der URL um, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt-Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, schlägt die Validierung der Zertifikate fehl, wenn Validierungsanfragen auf HTTPS umgeleitet werden. Schalten Sie die benötigten Bedingungen ein.

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

Diese Direktiven schreiben `www.example.com` auf `example.com` um.

Sie sollten keinen Inhalt in mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann SEO-Probleme (doppelter Inhalt) verursachen. Daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Sie sollten auch [Kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen durchsuchen sollen (sofern sie die Funktion unterstützen).

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem geeigneten Schema (`http` oder `https`) umzuleiten.

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

### Das Einfügen von `www.` am Anfang von URLs

Diese Regeln fügen `www.` am Anfang einer URL hinzu. Es ist wichtig zu beachten, dass Sie niemals den gleichen Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelter Inhalt) verursachen. Daher sollten Sie eine der Alternativen auswählen und die andere umleiten. Für Suchmaschinen, die dies unterstützen, sollten Sie [Kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen durchsuchen sollen.

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem geeigneten Schema (`http` oder `https`) umzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung aktivieren.

Das Folgende ist möglicherweise keine gute Idee, wenn Sie "echte" Subdomains für bestimmte Bereiche Ihrer Website verwenden.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY und informiert Browser darüber, den Inhalt der Webseite in keinem Frame darzustellen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für alle. Sie sollten über [die anderen zwei möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1) lesen: `SAMEORIGIN` und `ALLOW-FROM`.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es sogar jegliches Framing Ihres Inhalts verbietet (z.B.: wenn Besucher Ihre Website über eine Google-Bildersuchergebnisseite besuchen).

Dennoch sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die einem Benutzer ermöglichen, eine zustandsändernde Operation durchzuführen (z.B. Seiten, die Links mit einem Klick enthalten, Checkout- oder Überweisungsbestätigungsseiten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, etc.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Inhaltsinjektionsangriffen durch das Setzen einer `Content Security Policy`, die vertrauenswürdige Inhaltsquellen für Ihre Website ermöglicht.

Es gibt keine Richtlinie, die für alle Websites passt. Das folgende Beispiel dient als Leitlinie, um es für Ihre Website anzupassen.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie wollen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im Format haben, das der Server verwenden soll, z.B. `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, unsichtbar, jedoch nicht unzugänglich, wenn Sie ihren Namen und Speicherort kennen. Diese Dateitypen enthalten normalerweise Benutzerpräferenzen oder den beibehaltenen Zustand eines Dienstprogramms und können ziemlich private Orte beinhalten, wie zum Beispiel die `.git`- oder `.svn`-Verzeichnisse.

Das `.well-known/`-Verzeichnis stellt [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "wohlbekannte Speicherorte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf dessen sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugriff auf Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen, wenn jeder Zugriff darauf hat.

Aktualisieren Sie das Reguläre Ausdruck-Muster `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver enden könnten und sensible Informationen über Ihre Website offenlegen können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn zur sicheren Version der Website umleitet, bleibt immer noch ein Zeitfenster (die anfängliche HTTP-Verbindung) für einen Angreifer, um die Anfrage herunterzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerrufbar ist und Sie sicherstellen müssen, dass die Seite über HTTPS so lange bereitgestellt werden kann, wie Sie in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), erhalten Ihre Besucher eine Fehlermeldung, selbst wenn sie versuchen, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser MIME-Sniffing der Antwort durchführen

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - dies dient als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}}.
   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven spezifizieren müssen, die für Ihre Site gelten, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self';` usw.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welchen Site(s) Ihre Website Ressourcen laden darf. Andernfalls wird sie auf denselben Ursprung wie die anfordernde Seite beschränkt
2. Verbietet das `<base>`-Element auf der Website. Dies soll verhindern, dass Angreifer die Standorte von Ressourcen aus relativen URLs ändern
   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`
3. Ermöglicht nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>`-Element einbetten, indem `frame-ancestors 'none'` gesetzt wird.
   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe zu vermeiden und ähnelt dem `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls spezifiziert ist
5. Erzwingt, dass der Browser alle über HTTP bereitgestellten Ressourcen behandelt, als ob sie sicher über HTTPS geladen worden wären, durch Setzen der `upgrade-insecure-requests`-Direktive
   - **`upgrade-insecure-requests` stellt nicht sicher, dass die Top-Level Navigation über HTTPS erfolgt. Wenn Sie möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen**
6. Schließt den `Content-Security-Policy` Header in alle Antworten ein, die fähig sind zur Skriptausführung. Dies schließt die häufig verwendeten Dateitypen ein: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Web-Arbeiter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu betreffen

Ältere Browser haben versucht, den Inhaltstyp einer Ressource zu erraten, selbst wenn er auf dem Server nicht ordnungsgemäß eingerichtet ist. Dies reduziert die Gefahr von Drive-by-Downloads und Cross-Origin-Datenlecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir schließen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, andere Ressourcen anzufordern (oder zu navigieren).

Dies umfasst die häufig verwendeten Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um das Referrer-Leck vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass sich die Wirkung negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten aufgeführten, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE` HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich genutzt werden, um legitimierte Benutzerdaten zu stehlen. Siehe [Ein Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gemacht werden, jedoch wurden andere Wege entdeckt, um TRACE-Anfragen mit Browsern zu senden, beispielsweise über Java.

Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive stattdessen.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z. B. ihren Namen, Versionsnummer)

Dieser Header bietet keinen Mehrwert und in einigen Fällen können die bereitgestellten Informationen Sicherheitslücken offenlegen

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf der Ebene der Sprache/des Frameworks deaktivieren (z.B.: für PHP können Sie das tun, indem Sie das Folgende in `php.ini` setzen.

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Fußzeile mit Serverinformationen

Verhindern Sie, dass Apache eine Zeile mit Informationen über den Server an das Ende servergenerierter Dokumente hinzufügt (z.B. Fehlermeldungen, Verzeichnislisten usw.). Siehe die [`ServerSignature`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature) Dokumentation für mehr Informationen darüber, was die Serversignatur bietet und die [`ServerTokens`-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen zur Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Beheben defekter `AcceptEncoding`-Header

Einige Proxies und Sicherheitssoftware beschädigen oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Über das Gzipping hinausdrängen](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

## Erweiterungen zu Medientypen zuordnen

Ordnen Sie die folgenden Dateierweiterungen dem angegebenen Kodierungstyp unter Verwendung von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (dies wird Apache NICHT dazu veranlassen, sie zu komprimieren!). Wenn diese Dateitypen ohne einen geeigneten `Content-Encoding`-Antwortheader bereitgestellt würden, würden Clientanwendungen (z.B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssen und könnten den Inhalt daher nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Bedienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) Moduls und der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) Header.

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
