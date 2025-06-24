---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Mit den .htaccess-Dateien von Apache können Benutzer Verzeichnisse des Webservers konfigurieren, die sie steuern, ohne die Hauptkonfigurationsdatei zu ändern.

Auch wenn dies nützlich ist, sollte beachtet werden, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben (in der Regel `httpd.conf` genannt), sollten Sie diese Logik dort unter einem `Directory`-Block hinzufügen.

Weitere Einzelheiten zu den Möglichkeiten von .htaccess-Dateien finden Sie unter [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) auf der Apache HTTPD-Dokumentationssite.

Der Rest dieses Dokuments wird verschiedene Konfigurationsoptionen behandeln, die Sie zu `.htaccess` hinzufügen können, und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert und vom Server geladen wurde. So vermeiden wir, dass unser Server abstürzt, wenn das Modul nicht geladen war.

## Weiterleitungen

Es gibt Zeiten, in denen wir den Nutzern mitteilen müssen, dass eine Ressource entweder vorübergehend oder dauerhaft verschoben wurde. Dafür verwenden wir `Redirect` und `RedirectMatch`.

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

Die möglichen Werte für den ersten Parameter sind unten aufgelistet. Wenn der erste Parameter nicht enthalten ist, wird `temp` als Standard verwendet.

- permanent
  - : Gibt einen Status für eine permanente Weiterleitung (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen Status für eine temporäre Weiterleitung (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Ressourcen von anderen Ursprüngen

Die erste Reihe von Direktiven steuert den [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing)-Zugriff auf Ressourcen vom Server. CORS ist ein auf HTTP-Headern basierender Mechanismus, der einem Server erlaubt, die externen Ursprünge (Domain, Protokoll oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben sollte.

Aus Sicherheitsgründen beschränken Browser HTTP-Anfragen von anderen Ursprüngen, die von Skripten initiiert werden. Zum Beispiel folgen `XMLHttpRequest` und die Fetch-API der Same-Origin-Policy. Eine Webanwendung, die diese APIs verwendet, kann nur Ressourcen vom gleichen Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugriff

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Website hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Wenn Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines Verzeichnisses unterhalb dieses Standorts überschreiben, wird jede Anfrage von externen Servern zugelassen, was wahrscheinlich nicht das ist, was Sie wollen.

Eine Alternative besteht darin, explizit anzugeben, welche Domains Zugriff auf den Inhalt Ihrer Website haben. Im untenstehenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Bilder von anderen Ursprüngen

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und im Artikel [Allowing cross-origin use of images and canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image) dokumentiert, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut bei den angeforderten Bildern verwenden und den folgenden Codeabschnitt in Ihrer `.htaccess`-Datei verwenden, um den CORS-Header vom Server zu setzen.

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

Die [Leitfaden zur Problembehandlung von Google Fonts](https://developers.google.com/fonts/docs/troubleshooting) informiert uns darüber, dass, während Google Fonts den CORS-Header mit jeder Antwort sendet, einige Proxy-Server ihn möglicherweise strippen, bevor der Browser ihn nutzen kann, um die Schrift zu rendern.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin Ressourcentiming

Die [Resource Timing](https://w3c.github.io/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [`Timing-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt an, welche Ursprünge die Werte von Attributen sehen dürfen, die über Funktionen der Resource Timing API abgerufen werden, die aufgrund von Einschränkungen zu einer Nullmeldung führen würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` bedient wird oder wenn der Header den Ursprung nach Erstellung der Anfrage nicht einschließt, werden einige Attribute des `PerformanceResourceTiming`-Objekts auf Null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlermeldungen/-seiten

Apache ermöglicht es Ihnen, benutzerdefinierte Fehlermeldungen für Benutzer bereitzustellen, abhängig vom Typ des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) oder als vollständige URLs beginnen, die der Client auflösen kann.

Weitere Informationen finden Sie in der Dokumentation zur [ErrorDocument-Direktive](https://httpd.apache.org/docs/current/mod/core.html#errordocument) auf der HTTPD-Dokumentationsseite.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst die Funktionsweise von MultiViews für das Verzeichnis, für das die Konfiguration gilt.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, liest der Server das Verzeichnis, sucht nach Dateien, die foo.\* heißen, und täuscht effektiv eine Typenkarte vor, die alle diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltscodierungen zuweist, die sie gehabt hätten, wenn der Client nach einer von ihnen nach Namen gefragt hätte. Er wählt dann die beste Übereinstimmung mit den Anforderungen des Clients aus.

Die Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das diese Konfiguration zutrifft, und verhindert, dass Apache einen 404-Fehler als Ergebnis einer Umschreibung zurückgibt, wenn das Verzeichnis mit demselben Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichencodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten zuzuweisen, indem Muster in der URI oder Dateinamen mit den Metadatenwerten abgebildet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internet-Medientyp, die Sprache, den Zeichensatz und die Inhaltscodierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und werden bei der Inhaltsverhandlung verwendet, wenn Alternativen ausgewählt werden, sodass die Präferenzen des Benutzers respektiert werden, wenn eine von mehreren möglichen Inhalte ausgesucht wird.

**Das Ändern der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können zuvor zwischengespeicherte Kopien weiterhin von einem Client oder Proxy verwendet werden, mit den vorherigen Headern. Wenn Sie die Metadaten (Sprache, Inhaltstyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien "berühren" (deren letztes Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen bereitstellen (auch als MIME-Typen bekannt)

Weist Medientypen einem oder mehreren Erweiterungen zu, um sicherzustellen, dass die Ressourcen angemessen bereitgestellt werden.

Server sollten `text/javascript` für JavaScript-Ressourcen verwenden, wie im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages) angegeben.

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

Jedes Stück Inhalt im Web hat einen Zeichensatz. Der meiste, wenn nicht sogar der gesamte, Inhalt ist UTF-8 Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle als `text/html` oder `text/plain` gekennzeichneten Ressourcen mit dem `UTF-8`-Zeichensatz bereitzustellen.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Zeichensatz für spezifische Medientypen festlegen

Dienen Sie die folgenden Dateitypen mit dem `charset`-Parameter, der auf `UTF-8` gesetzt ist, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive, die in `mod_mime` verfügbar ist, verwenden.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Dies ermöglicht es Ihnen, beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abzubilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl angehängter Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine detaillierte URL-Übereinstimmung zu erreichen.

### `mod_rewrite` aktivieren

Das grundlegende Muster zum Aktivieren von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die notwendigen Schritte sind:

1. Aktivieren Sie die Rewrite-Engine (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie nicht bereits aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation
3. Wenn Ihr Web-Host die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen, und dann die Zeile `Options +SymLinksIfOwnerMatch` entkommentieren, aber beachten Sie den [Performance-Impact](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks)
   - Einige Cloud-Hosting-Dienste verlangen, dass Sie `RewriteBase` setzen
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren

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

Diese Rewrite-Regeln werden von der unsicheren Version `http://` zur sicheren Version `https://` der URL weiterleiten, wie im [Apache HTTPD Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt Webroot-Methode verwenden, um Ihre TLS-Zertifikate zu erstellen, wird die Zertifikatsvalidierung fehlschlagen, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Aktivieren Sie die notwendige(n) Bedingung(en).

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

Diese Direktiven leiten `www.example.com` auf `example.com` um.

Sie sollten Inhalte nicht in mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann zu SEO-Problemen (doppeltem Inhalt) führen, und deshalb sollten Sie eine der Alternativen wählen und die andere umleiten. Sie sollten auch [Kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen (falls sie die Funktion unterstützen).

Setzen Sie die Variable `%{ENV:PROTO}`, um es Rewrite-Regeln zu ermöglichen, mit dem entsprechenden Schema automatisch weiterzuleiten (`http` oder `https`).

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

### Einfügen des `www.` am Anfang von URLs

Diese Regeln werden `www.` am Anfang einer URL einfügen. Es ist wichtig zu beachten, dass Sie nie denselben Inhalt unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann zu SEO-Problemen (doppelter Inhalt) führen, und deshalb sollten Sie eine der Alternativen wählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [Kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um anzugeben, welche URL Suchmaschinen crawlen sollen.

Setzen Sie die Variable `%{ENV:PROTO}`, um es Rewrite-Regeln zu ermöglichen, mit dem entsprechenden Schema automatisch weiterzuleiten (`http` oder `https`).

Die Regel geht standardmäßig davon aus, dass sowohl HTTP- als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat eine der in der Umleitung verwendeten Domains nicht behandeln kann, sollten Sie die Bedingung aktivieren.

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

Das folgende Beispiel sendet den `X-Frame-Options`-Antwortheader mit dem Wert DENY und informiert Browser darüber, den Inhalt der Webseite nicht in irgendeinem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies könnte nicht die beste Einstellung für alle sein. Sie sollten über [die anderen zwei möglichen Werte für den `X-Frame-Options`-Header](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Obwohl Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es auch jede Einrahmung Ihres Inhalts verbietet (z.B.: wenn Benutzer Ihre Website über eine Google Bildersuche-Ergebnisseite besuchen).

Ungeachtet dessen sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Nutzer ermöglichen, eine zustandsverändernde Operation durchzuführen (z.B. Seiten, die One-Click-Kauflinks, Checkout- oder Banküberweisungsbestätigungsseiten enthalten, Seiten, die permanente Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) mindert das Risiko von Cross-Site-Scripting und anderen Inhaltsinjektionsangriffen, indem es eine `Content Security Policy` setzt, die vertrauenswürdige Inhaltsquellen für Ihre Website zulässt.

Es gibt keine Richtlinie, die auf alle Websites passt, das folgende Beispiel soll als Richtlinien für Sie dienen, die Sie für Ihre Website anpassen können.

Um die Implementierung Ihrer CSP zu erleichtern, können Sie einen [CSP-Header-Generator](https://report-uri.com/home/generate/) online verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header das tut, was Sie beabsichtigen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichniszugriff

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im vom Server konfigurierten Format, wie `index.html` oder `index.php`, enthalten.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, von der Ansicht versteckt, aber nicht vom Zugriff ausgeschlossen, wenn Sie deren Namen und Speicherort kennen. Diese Art von Dateien enthalten normalerweise Benutzerpräferenzen oder den erhaltenen Zustand eines Dienstprogramms und können ziemlich private Orte enthalten, wie beispielsweise die `.git`- oder `.svn`-Verzeichnisse.

Das `.well-known/`-Verzeichnis stellt [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) für "gut bekannte Orte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugriff auf seinen sichtbaren Inhalt nicht blockiert werden.

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

Zugriff auf Backup- und Quelldateien blockieren, die von einigen Texteditoren übrig bleiben können und ein Sicherheitsrisiko darstellen können, wenn jeder Zugriff darauf hat.

Aktualisieren Sie den regulären Ausdruck `<FilesMatch>` im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver landen könnten und sensible Informationen über Ihre Website preisgeben können. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eingibt, selbst wenn der Server sie auf die sichere Version der Website umleitet, bleibt immer noch ein Zeitfenster (die anfängliche HTTP-Verbindung) bestehen, das einem Angreifer die Möglichkeit bietet, die Anfrage downzugraden oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Beachten Sie, dass Strict Transport Security nicht widerruflich ist, und Sie müssen sicherstellen, dass Sie die Site über HTTPS so lange bedienen können, wie Sie es im `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z.B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher selbst beim Versuch, über HTTP zu verbinden, eine Fehlermeldung.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Prevent some browsers from MIME-sniffing the response

1. Beschränkt standardmäßig alle Abrufe auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` gesetzt wird - was als Fallback für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} fungiert.

   - Dies ist praktisch, da Sie nicht alle Fetch-Direktiven angeben müssen, die auf Ihre Website anzuwenden sind, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'; usw.
   - Diese Beschränkung bedeutet auch, dass Sie explizit definieren müssen, von welchen Site(s) Ihre Website Ressourcen laden darf. Andernfalls wird es auf denselben Ursprung wie die Seite, die die Anfrage stellte, beschränkt

2. Untersagt das `<base>`-Element auf der Website. Dies soll Angreifer daran hindern, die Standorte von Ressourcen zu ändern, die von relativen URLs geladen werden.

   - Wenn Sie das `<base>`-Element verwenden möchten, dann verwenden Sie stattdessen `base-uri 'self'`

3. Erlaubt nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten in z.B.: das `<iframe>`- oder `<object>`-Element einbetten, indem: `frame-ancestors 'none'` gesetzt wird.

   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ist ähnlich wie der `X-Frame-Options`-Header
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als wären sie sicher über HTTPS geladen, indem die `upgrade-insecure-requests`-Direktive gesetzt wird

   - **`upgrade-insecure-requests` stellt keine HTTPS-Verbindung für die Top-Level-Navigation sicher. Wenn Sie sicherstellen möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen**

6. Schließt den `Content-Security-Policy`-Header in alle Antworten ein, die das Ausführen von Skripten ermöglichen. Dazu gehören die häufig verwendeten Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Web Workers](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) anzusprechen

Einige ältere Browser versuchten den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht korrekt in der Serverkonfiguration eingerichtet war. Dies verringert das Risiko von Drive-by-Download-Angriffen und Datenlecks von anderen Ursprüngen.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, (oder zu) andere(n) Ressourcen anzufordern (oder zu navigieren).

Dazu gehören die häufig verwendeten Ressourcentypen: HTML-, CSS-, XML/SVG-, PDF-Dokumente, Skripts und Workers.

Um Referrer-Lecks vollständig zu verhindern, geben Sie den Wert `no-referrer` an. Beachten Sie, dass dies sich negativ auf Analysetools auswirken kann.

Verwenden Sie Dienste wie die folgenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## `TRACE` HTTP-Methode deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl sie scheinbar harmlos ist, kann in einigen Szenarien erfolgreich genutzt werden, um legitime Benutzeranmeldedaten zu stehlen. Siehe [A Cross-Site Tracing (XST) attack](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential)

Moderne Browser verhindern jetzt TRACE-Anfragen, die über JavaScript gemacht werden, aber andere Wege, TRACE-Anfragen mit Browsern zu senden, wurden gefunden, z.B. in Java.

Wenn Sie Zugriff auf die Hauptkonfigurationsdatei des Servers haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Den `X-Powered-By`-Antwortheader entfernen

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sich enthält (z.B. ihren Namen, Versionsnummer)

Dieser Header bietet keinen Mehrwert und in einigen Fällen können die von ihm bereitgestellten Informationen Schwachstellen aufdecken.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf Sprache/Framework-Ebene deaktivieren (z.B.: für PHP können Sie das durch Setzen des folgenden in `php.ini` tun.

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Serverinformations-Fußzeile

Verhindern Sie, dass Apache eine abschließende Fußzeile, die Informationen über den Server enthält, zu den vom Server generierten Dokumenten hinzufügt (z.B. Fehlermeldungen, Verzeichnisauflistungen usw.). Siehe die [ServerSignature-Direktive](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Dokumentation für weitere Informationen darüber, was die Serversignatur bereitstellt und die [ServerTokens-Direktive](https://httpd.apache.org/docs/current/mod/core.html#servertokens) für Informationen über die Konfiguration der Informationen, die in der Signatur bereitgestellt werden.

```apacheconf
ServerSignature Off
```

## Defekte `AcceptEncoding`-Header beheben

Einige Proxies und Sicherheitssoftware verfälschen oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

Komprimieren Sie alle mit einem der folgenden Medientypen gekennzeichneten Ausgaben mithilfe der [AddOutputFilterByType-Direktive](https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype).

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

## Erweiterungen zu Medientypen zuweisen

Weisen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp mithilfe von [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) zu, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bereitstellen kann (das wird NICHT dazu führen, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bereitgestellt wurden, würden Clientanwendungen (z.B. Browser) nicht wissen, dass sie die Antwort zuerst dekomprimieren müssen, und könnten den Inhalt daher nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablauf

Dienen Sie Ressourcen mit einem Ablaufdatum weit in der Zukunft, indem Sie das [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Modul und die [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires)-Header verwenden.

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
