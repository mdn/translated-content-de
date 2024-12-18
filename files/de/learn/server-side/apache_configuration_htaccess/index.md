---
title: "Apache-Konfiguration: .htaccess"
slug: Learn/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{LearnSidebar}}

Apache `.htaccess`-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugang zur Hauptserver-Konfigurationsdatei haben (welche normalerweise `httpd.conf` genannt wird), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Sehen Sie [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was `.htaccess`-Dateien tun können.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen diskutieren, die Sie zu `.htaccess` hinzufügen können und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule) Direktive, um die Anweisungen innerhalb des Blocks nur auszuführen, wenn das entsprechende Modul richtig konfiguriert wurde und der Server es geladen hat. Auf diese Weise schützen wir unseren Server vor Abstürzen, wenn das Modul nicht geladen wurde.

## Umleitungen

Es gibt Zeiten, in denen wir den Benutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, wird `temp` als Standardwert verwendet.

- permanent
  - : Gibt einen permanenten Umleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Umleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Der erste Satz von Direktiven steuert den Zugang zu [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing) Ressourcen vom Server. CORS ist ein HTTP-Header basierter Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domain, Protokoll oder Port) zu kennzeichnen, die ein Browser laden darf.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen `XMLHttpRequest` und die `Fetch-API` der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner Zugriff auf CORS

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive später in der Konfiguration oder in der Konfiguration eines darunter liegenden Verzeichnisses nicht überschreiben, wird jede Anfrage von externen Servern akzeptiert, was wahrscheinlich nicht das ist, was Sie möchten.

Eine Alternative besteht darin, explizit anzugeben, welche Domains auf den Inhalt Ihrer Seite zugreifen dürfen. Im folgenden Beispiel beschränken wir den Zugriff auf eine Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und in [Verwendung von Cross-Origin-Bildern und Canvas](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den Bildern verwenden, die Sie anfordern, und den unten stehenden Code-Snippet in Ihrer `.htaccess` verwenden, um den CORS-Header vom Server zu setzen.

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

In Google Chromes [Fehlerbehebungsleitfaden für Google Fonts](https://developers.google.com/fonts/docs/troubleshooting) wird uns gesagt, dass, obwohl Google Fonts den CORS-Header mit jeder Antwort sendet, einige Proxy-Server diesen entfernen können, bevor der Browser ihn verwenden kann, um die Schriftart zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin-Ressourcen-Timing

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/) Spezifikation definiert eine Schnittstelle für Webanwendungen zum Zugriff auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin) Antwortheader gibt Ursprünge an, die die Werte von Attributen einsehen dürfen, die über die Funktionen der Resource Timing API abgerufen wurden und sonst aufgrund von Cross-Origin-Einschränkungen als Null gemeldet würden.

Wenn eine Ressource nicht mit `Timing-Allow-Origin` bereitgestellt wird oder wenn der Header nach der Anforderung nicht den Ursprung enthält, werden einige Attribute des `PerformanceResourceTiming` Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/nachrichten

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) Dokumentation auf der HTTPD-Dokumentationsseite für mehr Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis arbeiten, auf das die Konfiguration angewendet wird.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, liest der Server das Verzeichnis, um nach Dateien namens foo.\* zu suchen, und simuliert effektiv eine Typenkarte, die alle diese Dateien benennt, und ordnet ihnen die gleichen Medientypen und Inhaltskodierungen zu, die es hätte, wenn der Client eine von ihnen namentlich angefordert hätte. Es wählt dann die beste Übereinstimmung mit den Anforderungen des Clients.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration angewendet wird, und verhindert, dass Apache als Ergebnis einer Umschreibung einen 404-Fehler zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhalts-Metadaten den ausgewählten Inhalten für eine HTTP-Antwort zuzuweisen, indem Muster in der URI oder Dateinamen den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltskodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und in der Inhaltsverhandlung verwendet, wenn Alternativen ausgewählt werden, sodass die Präferenzen des Benutzers respektiert werden, wenn eine von mehreren möglichen Inhalten bereitgestellt wird.

**Das Ändern der Metadaten einer Datei ändert nicht den Wert des Last-Modified-Headers. Somit können bereits zwischengespeicherte Kopien weiterhin von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Kodierung) ändern, müssen Sie eventuell die betroffenen Dateien 'berühren' (das Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen bereitstellen (auch bekannt als MIME-Typen)

Ordnet Medientypen einem oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bereitgestellt werden.

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

## Das Standard-Zeichensatzattribut festlegen

Jedes Content-Stück im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` beschrifteten Ressourcen mit dem Zeichensatz `UTF-8` bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für bestimmte Medientypen festlegen

Dienen Sie die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` gesetzt, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset) Direktive verwenden, die in `mod_mime` verfügbar ist.

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

## `Mod_rewrite` und die `RewriteEngine` direktiven

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch aufgrund von regulären Ausdrucksregeln zu ändern. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in jeder gewünschten Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angehängten Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken URL-Manipulationsmechanismus bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine granulare URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das Grundmuster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Umschreibemaschine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine) Dokumentation beschrieben.
2. Aktivieren Sie die Option `FollowSymLinks`, falls sie nicht bereits aktiviert ist. Siehe [Kernoptionen](https://httpd.apache.org/docs/current/mod/core.html#options) Dokumentation.
3. Wenn Ihr Webhost die Option `FollowSymLinks` nicht erlaubt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, aber seien Sie sich der [Leistungsbeeinträchtigung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst.

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` setzen.
   - Siehe [Rackspace-FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig von der Konfiguration Ihres Servers müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions) Direktive verwenden, um einige Optionen für die Umschreibemaschine zu aktivieren.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

### Erzwungene HTTPS-Verbindungen

Diese Umschreiberegeln leiten von der `http://` unsicheren Version zur `https://` sicheren Version der URL um, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt-Webroot-Methode zur Erstellung Ihrer TLS-Zertifikate verwenden, wird die Zertifikatsvalidierung fehlschlagen, wenn Validierungsanfragen auf HTTPS umgeleitet werden. Schalten Sie die benötigte(n) Bedingung(en) ein.

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

Diese Direktiven werden `www.example.com` auf `example.com` umschreiben.

Sie sollten Inhalte nicht auf mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (wenn sie die Funktion unterstützen).

Setzen Sie die `%{ENV:PROTO}` Variable, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

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

### Einfügen von `www.` am Anfang von URLs

Diese Regeln werden `www.` am Anfang einer URL einfügen. Es ist wichtig, zu beachten, dass Sie niemals denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und daher sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die `%{ENV:PROTO}` Variable, um Umschreibungen automatisch mit dem entsprechenden Schema (`http` oder `https`) umzuleiten.

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat einen der während der Umleitung verwendeten Domains nicht verarbeiten kann, sollten Sie die Bedingung einschalten.

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

Das folgende Beispiel sendet den `X-Frame-Options` Antwort-Header mit DENY als Wert und informiert Browser darüber, den Inhalt der Webseite in keinem Frame anzuzeigen, um die Website gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies ist möglicherweise nicht die beste Einstellung für jeden. Sie sollten über [die anderen beiden möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Während Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass selbst keine Rahmung Ihres Inhalts erlaubt ist (z. B. wenn Benutzer Ihre Website über eine Google-Bildersuchergebnisseite besuchen).

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer ermöglichen, eine statusverändernde Operation durchzuführen (z. B. Seiten, die Ein-Klick-Kauf-Links, Checkout- oder Banküberweisungsbestätigungsseiten enthalten, Seiten, die dauerhafte Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Content-Injection-Angriffen, indem eine `Content Security Policy` festgelegt wird, die vertrauenswürdige Quellen von Inhalten für Ihre Website zulässt.

Es gibt keine Policy, die für alle Websites passt, das folgende Beispiel ist als Richtlinie gedacht, die Sie für Ihre Website anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online [CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie möchten.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei in welchem Format auch immer der Server konfiguriert ist, wie `index.html` oder `index.php`, enthalten.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, von der Ansicht versteckt, aber nicht vom Zugriff, wenn Sie deren Namen und Standort kennen. Diese Arten von Dateien enthalten normalerweise Benutzereinstellungen oder den reservierten Zustand eines Dienstprogramms und können ziemlich private Orte wie zum Beispiel die `.git` oder `.svn` Verzeichnisse enthalten.

Das `.well-known/` Verzeichnis repräsentiert [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfad-Präfix für "bekannte Orte" (z. B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), daher sollte der Zugang zu seinem sichtbaren Inhalt nicht blockiert werden.

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

Blockierzugang zu Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden können und ein Sicherheitsrisiko darstellen, wenn jemand Zugang zu ihnen hat.

Aktualisieren Sie den `<FilesMatch>` regulären Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die möglicherweise auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien sein, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server ihn auf die sichere Version der Website umleitet, bleibt dennoch ein Fenster der Gelegenheit (die anfängliche HTTP-Verbindung), das ein Angreifer nutzen könnte, um die Anforderung herabzustufen oder umzulenken.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass Strict Transport Security nicht widerrufbar ist, und Sie müssen sicherstellen, dass Sie die Seite so lange über HTTPS anbieten können, wie Sie es im `max-age` Directive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z. B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn versucht wird, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den MIME-Typ der Antwort raten

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src` Direktive auf `'self'` gesetzt wird - was als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} fungiert.

   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die für Ihre Website gelten, zum Beispiel: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self';` usw.
   - Diese Einschränkung bedeutet auch, dass Sie explizit festlegen müssen, von welcher(n) Seite(n) Ihre Website Ressourcen laden darf. Andernfalls wird es auf denselben Ursprung wie die Seite beschränkt, die die Anforderung macht.

2. Verbot des `<base>`-Elements auf der Website. Dies ist, um zu verhindern, dass Angreifer die Standorte von Ressourcen ändern, die von relativen URLs geladen werden.

   - Wenn Sie das `<base>`-Element verwenden möchten, dann verwenden Sie `base-uri 'self'` stattdessen.

3. Erlaubt Formulareinsendungen nur vom aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb von z.B. dem `<iframe>` oder `<object>` Element einbetten, indem `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors` Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe zu vermeiden und ähnelt dem `X-Frame-Options` Header.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls spezifiziert ist.

5. Zwingt den Browser, alle Ressourcen, die über HTTP bereitgestellt werden, so zu behandeln, als ob sie sicher über HTTPS geladen wurden, indem die `upgrade-insecure-requests` Direktive gesetzt wird.

   - **`upgrade-insecure-requests` stellt nicht sicher, dass die Website selbst über HTTPS geladen wird. Wenn Sie die Website zwingen möchten, über HTTPS geladen zu werden, müssen Sie den `Strict-Transport-Security` Header einschließen.**

6. Beinhaltet den `Content-Security-Policy` Header in allen Antworten, die in der Lage sind, Skripte auszuführen. Dies schließt die häufig verwendeten Dateitypen ein: HTML, XML und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie eingeschlossen, um [Web-Arbeiter](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers) anzuzielen.

Einige ältere Browser würden versuchen, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht richtig auf der Serverkonfiguration eingerichtet ist. Dies reduziert die Gefährdung durch Drive-By-Download-Angriffe und Cross-Origin-Daten-Lecks.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Policy

Wir schließen den `Referrer-Policy` Header in Antworten für Ressourcen ein, die in der Lage sind, (oder zu) anderen Ressourcen anzufordern (oder zu navigieren).

Dies schließt häufig verwendete Ressourcentypen ein: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Arbeiter.

Um das Referrer-Leck vollständig zu verhindern, geben Sie den `no-referrer` Wert an. Beachten Sie, dass der Effekt sich negativ auf Analysetools auswirken könnte.

Verwenden Sie Dienste wie die unten stehenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Deaktivieren der `TRACE` HTTP-Methode

Die [TRACE](/de/docs/Web/HTTP/Methods/TRACE) Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich genutzt werden, um die Anmeldeinformationen legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern jetzt TRACE-Anfragen über JavaScript, jedoch wurden andere Möglichkeiten entdeckt, TRACE-Anfragen mit Browsern zu senden, z.B. mit Java.

Wenn Sie Zugriff auf die Hauptserver-Konfigurationsdatei haben, verwenden Sie die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable) Direktive stattdessen.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By` Antwort-Headers

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By` Header, der Informationen über sie enthält (z. B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Mehrwert und in einigen Fällen können die Informationen, die er bereitstellt, Schwachstellen preisgeben.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By` Header auf der Sprache/Framework-Ebene deaktivieren (z. B. für PHP können Sie das tun, indem Sie Folgendes in `php.ini` festlegen).

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Server-Informationen im Footer

Verhindern Sie, dass Apache eine abschließende Fußzeilenzeile enthält, die Informationen über den Server zu servergenerierten Dokumenten hinzufügt (z. B. Fehlermeldungen, Verzeichnislisten, etc.). Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature) Direktive Dokumentation für mehr Informationen darüber, was die Serversignatur liefert und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen zur Konfiguration der in der Signatur bereitgestellten Informationen.

```apacheconf
ServerSignature Off
```

## Korrigieren von fehlerhaften `AcceptEncoding`-Headern

Einige Proxies und Sicherheitssoftware zerlegen oder entfernen den `Accept-Encoding` HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

Komprimieren Sie alle mit einem der folgenden Medientypen gekennzeichneten Ausgaben mit der [AddOutputFilterByType Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen auf Medientypen abbilden

Ordnen Sie die folgenden Dateinamenerweiterungen dem angegebenen Kodierungstyp mit [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding` Antwort-Header bereitstellen kann (dies wird Apache NICHT dazu bringen, sie zu komprimieren!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwort-Header bereitgestellt werden, würden Clientanwendungen (z.B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssen und könnten daher die Inhalte nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Dienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html) Moduls und der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Headers/Expires) Header.

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
