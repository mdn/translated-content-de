---
title: "Apache-Konfiguration: .htaccess"
slug: Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.

Obwohl dies nützlich ist, ist es wichtig zu beachten, dass die Verwendung von `.htaccess`-Dateien Apache verlangsamt. Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben (die normalerweise `httpd.conf` genannt wird), sollten Sie die Logik dort in einem `Directory`-Block hinzufügen.

Siehe [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) in der Apache HTTPD-Dokumentationsseite für weitere Details darüber, was .htaccess-Dateien tun können.

Im restlichen Dokument werden verschiedene Konfigurationsoptionen diskutiert, die Sie in `.htaccess` hinzufügen können, und was sie bewirken.

Die meisten der folgenden Blöcke verwenden die [IfModule](https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule)-Direktive, um die Anweisungen im Block nur auszuführen, wenn das entsprechende Modul ordnungsgemäß konfiguriert wurde und der Server es geladen hat. Auf diese Weise schützen wir unseren Server vor einem Absturz, wenn das Modul nicht geladen wurde.

## Weiterleitungen

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

Die möglichen Werte für den ersten Parameter sind unten aufgeführt. Wenn der erste Parameter nicht enthalten ist, lautet der Standardwert `temp`.

- permanent
  - : Gibt einen permanenten Umleitungsstatus (301) zurück, der anzeigt, dass die Ressource dauerhaft verschoben wurde.
- temp
  - : Gibt einen temporären Umleitungsstatus (302) zurück. **Dies ist der Standard**.
- seeother
  - : Gibt einen "See Other"-Status (303) zurück, der anzeigt, dass die Ressource ersetzt wurde.
- gone
  - : Gibt einen "Gone"-Status (410) zurück, der anzeigt, dass die Ressource dauerhaft entfernt wurde. Wenn dieser Status verwendet wird, sollte das _URL_-Argument weggelassen werden.

## Cross-Origin-Ressourcen

Das erste Set von Direktiven steuert den Zugriff auf Ressourcen von Cross-Origin-Servern mittels [CORS](https://fetch.spec.whatwg.org/) (Cross-Origin Resource Sharing). CORS ist ein auf HTTP-Headern basierender Mechanismus, der es einem Server ermöglicht, die externen Ursprünge (Domäne, Protokoll oder Port) anzugeben, die ein Browserm beim Laden von Ressourcen zulassen soll.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert wurden. Zum Beispiel befolgen XMLHttpRequest und die Fetch-API die Same-Origin-Policy. Eine Webanwendung, die diese APIs nutzt, kann nur Ressourcen von demselben Ursprung anfordern, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die entsprechenden CORS-Header.

### Allgemeiner CORS-Zugang

Diese Direktive fügt den CORS-Header für alle Ressourcen im Verzeichnis von jeder Webseite hinzu.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Sofern Sie die Direktive nicht später in der Konfiguration oder in der Konfiguration eines darunterliegenden Verzeichnisses überschreiben, wird jede Anfrage von externen Servern angenommen, was wahrscheinlich nicht Ihre Absicht ist.

Eine Alternative besteht darin, explizit anzugeben, welche Domänen Zugriff auf die Inhalte Ihrer Seite haben. Im untenstehenden Beispiel beschränken wir den Zugriff auf ein Subdomain unserer Hauptseite (example.com). Dies ist sicherer und wahrscheinlich das, was Sie beabsichtigt haben.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

### Cross-Origin-Bilder

Wie im [Chromium Blog](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html) berichtet und im Dokument [Allowing cross-origin use of images and canvas](/de/docs/Web/HTML/CORS_enabled_image) dokumentiert ist, kann dies zu {{Glossary("Fingerprinting", "Fingerprinting")}}-Angriffen führen.

Um die Möglichkeit dieser Angriffe zu verringern, sollten Sie das `crossorigin`-Attribut in den von Ihnen angeforderten Bildern verwenden und das folgende Code-Snippet in Ihrer `.htaccess` verwenden, um den CORS-Header vom Server zu setzen.

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

Googles Chrome's [Google Fonts troubleshooting guide](https://developers.google.com/fonts/docs/troubleshooting) informiert darüber, dass Google Fonts zwar den CORS-Header mit jeder Antwort sendet, aber einige Proxy-Server ihn entfernen können, bevor der Browser ihn verwenden kann, um die Schriftart anzuzeigen.

```apacheconf
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

### Cross-Origin Resource Timing

Die [Resource Timing Level 1](https://www.w3.org/TR/resource-timing/)-Spezifikation definiert eine Schnittstelle für Webanwendungen, um auf die vollständigen Timing-Informationen für Ressourcen in einem Dokument zuzugreifen.

Der [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Antwortheader gibt Ursprünge an, die die Werte der Attribute einsehen dürfen, die über Funktionen der Resource Timing API abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

Wenn eine Ressource nicht mit einem `Timing-Allow-Origin` angeboten wird oder wenn der Header nach der Anfrage den Ursprung nicht enthält, werden einige Attribute des `PerformanceResourceTiming`-Objects auf null gesetzt.

```apacheconf
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

## Benutzerdefinierte Fehlerseiten/-meldungen

Apache erlaubt es Ihnen, benutzerdefinierte Fehlerseiten für Benutzer bereitzustellen, abhängig von der Art des Fehlers, den sie erhalten.

Die Fehlerseiten werden als URLs präsentiert. Diese URLs können mit einem Schrägstrich (/) für lokale Webpfade (relativ zum DocumentRoot) beginnen oder eine vollständige URL sein, die der Client auflösen kann.

Siehe die [ErrorDocument Directive](https://httpd.apache.org/docs/current/mod/core.html#errordocument)-Dokumentation auf der HTTPD-Dokumentationsseite für weitere Informationen.

```apacheconf
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

## Fehlervermeidung

Diese Einstellung beeinflusst, wie MultiViews für das Verzeichnis funktionieren, auf das die Konfiguration angewendet wird.

Die Wirkung von `MultiViews` ist wie folgt: Wenn der Server eine Anfrage für /some/dir/foo erhält, wenn /some/dir `MultiViews` aktiviert hat und /some/dir/foo nicht existiert, dann liest der Server das Verzeichnis und sucht nach Dateien mit dem Namen foo.\* und täuscht effektiv eine Typenkarte vor, die all diese Dateien benennt und ihnen die gleichen Medientypen und Inhaltskodierungen zuweist, die sie hätten, wenn der Client eine davon namentlich angefordert hätte. Dann wählt es die beste Übereinstimmung mit den Anforderungen des Clients.

Diese Einstellung deaktiviert `MultiViews` für das Verzeichnis, auf das sich diese Konfiguration bezieht, und verhindert, dass Apache als Ergebnis einer Umschreibung einen 404-Fehler zurückgibt, wenn das Verzeichnis mit dem gleichen Namen nicht existiert.

```apacheconf
Options -MultiViews
```

## Medientypen und Zeichenkodierungen

Apache verwendet [mod_mime](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), um Inhaltsmetadaten dem Inhalt zuzuweisen, der für eine HTTP-Antwort ausgewählt wurde, indem Muster in der URI oder Dateinamen den Metadatenwerten zugeordnet werden.

Zum Beispiel definieren die Dateinamenerweiterungen von Inhaltsdateien oft den Internet-Medientyp des Inhalts, die Sprache, den Zeichensatz und die Codierung des Inhalts. Diese Informationen werden in HTTP-Nachrichten gesendet, die diesen Inhalt enthalten, und werden bei der Inhaltsaushandlung verwendet, wenn alternative Inhalte ausgewählt werden, sodass die Präferenzen des Benutzers respektiert werden, wenn eine von mehreren möglichen Inhalten angezeigt wird.

**Eine Änderung der Metadaten für eine Datei ändert nicht den Wert des Last-Modified-Headers. Daher können vorher zwischengespeicherte Kopien weiterhin von einem Client oder einem Proxy verwendet werden, mit den vorherigen Headers. Wenn Sie die Metadaten (Sprache, Medientyp, Zeichensatz oder Codierung) ändern, müssen Sie möglicherweise die betroffenen Dateien 'berühren' (indem Sie deren letztes Änderungsdatum aktualisieren), um sicherzustellen, dass alle Besucher die korrigierten Inhaltsheader erhalten.**

### Ressourcen mit den richtigen Medientypen bedienen (auch bekannt als MIME-Typen)

Verbindet Medientypen mit einer oder mehreren Erweiterungen, um sicherzustellen, dass die Ressourcen entsprechend bedient werden.

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

## Setzen des Standard-Zeichensatzattributs

Jedes Stück Inhalt im Web hat einen Zeichensatz. Die meisten, wenn nicht alle, Inhalte sind UTF-8-Unicode.

Verwenden Sie [AddDefaultCharset](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset), um alle Ressourcen, die als `text/html` oder `text/plain` gekennzeichnet sind, mit dem `UTF-8`-Zeichensatz zu servieren.

```apacheconf
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

## Setzen des Zeichensatzes für spezifische Medientypen

Bedienen Sie die folgenden Dateitypen mit dem `charset`-Parameter auf `UTF-8` gesetzt, indem Sie die [AddCharset](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)-Direktive in `mod_mime` verwenden.

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

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) bietet eine Möglichkeit, eingehende URL-Anfragen dynamisch basierend auf regulären Ausdrucksregeln zu ändern. Damit können Sie beliebige URLs auf Ihre interne URL-Struktur in beliebiger Weise abbilden.

Es unterstützt eine unbegrenzte Anzahl von Regeln und eine unbegrenzte Anzahl von angebundenen Regelbedingungen für jede Regel, um einen wirklich flexiblen und leistungsstarken Mechanismus zur URL-Manipulation bereitzustellen. Die URL-Manipulationen können von verschiedenen Tests abhängen: Servervariablen, Umgebungsvariablen, HTTP-Header, Zeitstempel, externe Datenbankabfragen und verschiedene andere externe Programme oder Handler können verwendet werden, um eine feingranulare URL-Übereinstimmung zu erzielen.

### Aktivierung von `mod_rewrite`

Das grundlegende Muster zur Aktivierung von `mod_rewrite` ist eine Voraussetzung für alle anderen Aufgaben, die es verwenden.

Die erforderlichen Schritte sind:

1. Schalten Sie die Rewrite-Engine ein (dies ist notwendig, damit die `RewriteRule`-Direktiven funktionieren), wie in der [RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#RewriteEngine)-Dokumentation beschrieben.
2. Aktivieren Sie die `FollowSymLinks`-Option, wenn sie noch nicht aktiviert ist. Siehe [Core Options](https://httpd.apache.org/docs/current/mod/core.html#options)-Dokumentation.
3. Wenn Ihr Webhost die `FollowSymlinks`-Option nicht zulässt, müssen Sie sie auskommentieren oder entfernen und dann die Zeile `Options +SymLinksIfOwnerMatch` auskommentieren, seien Sie sich jedoch der [Leistungsbeeinträchtigung](https://httpd.apache.org/docs/current/misc/perf-tuning.html#symlinks) bewusst.

   - Einige Cloud-Hosting-Dienste erfordern, dass Sie `RewriteBase` setzen.
   - Siehe [Rackspace FAQ](https://web.archive.org/web/20151223141222/http://www.rackspace.com/knowledge_center/frequently-asked-question/why-is-modrewrite-not-working-on-my-site) und die [HTTPD-Dokumentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase).
   - Abhängig davon, wie Ihr Server eingerichtet ist, müssen Sie möglicherweise die [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)-Direktive verwenden, um einige Optionen für die Rewrite-Engine zu aktivieren.

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

Diese Umschreiberegeln leiten von der unsicheren `http://` Version zur sicheren `https://` Version der URL um, wie im [Apache HTTPD-Wiki](https://cwiki.apache.org/confluence/display/httpd/RewriteHTTPToHTTPS) beschrieben.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

Wenn Sie cPanel AutoSSL oder die Let's Encrypt webroot-Methode zum Erstellen Ihrer TLS-Zertifikate verwenden, wird die Validierung des Zertifikats fehlschlagen, wenn Validierungsanfragen zu HTTPS umgeleitet werden. Aktivieren Sie die Bedingung(en), die Sie benötigen.

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

Diese Direktiven werden `www.example.com` zu `example.com` umschreiben.

Sie sollten keine Inhalte an mehreren Ursprüngen (mit und ohne www) duplizieren. Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und deshalb sollten Sie eine der Alternativen auswählen und die andere umleiten. Sie sollten auch [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um zu kennzeichnen, welche URL Suchmaschinen durchsuchen sollen (sofern sie die Funktion unterstützen).

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem passenden Schema umzuleiten (`http` oder `https`).

Die Regel geht standardmäßig davon aus, dass sowohl HTTP als auch HTTPS-Umgebungen für die Umleitung verfügbar sind.

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

### Hinzufügen von `www.` am Anfang der URLs

Diese Regeln fügen `www.` am Anfang einer URL hinzu. Es ist wichtig zu beachten, dass Sie denselben Inhalt niemals unter zwei verschiedenen URLs verfügbar machen sollten.

Dies kann SEO-Probleme (doppelte Inhalte) verursachen, und deshalb sollten Sie eine der Alternativen auswählen und die andere umleiten. Für Suchmaschinen, die sie unterstützen, sollten Sie [kanonische URLs](https://www.semrush.com/blog/canonical-url-guide/) verwenden, um zu kennzeichnen, welche URL Suchmaschinen durchsuchen sollen.

Setzen Sie die Variable `%{ENV:PROTO}`, um Umschreibungen automatisch mit dem passenden Schema umzuleiten (`http` oder `https`).

Die Regel geht standardmäßig davon aus, dass sowohl HTTP als auch HTTPS-Umgebungen für die Umleitung verfügbar sind. Wenn Ihr TLS-Zertifikat einen der während der Umleitung verwendeten Domänen nicht handhaben kann, sollten Sie die Bedingung aktivieren.

Das Folgende könnte keine gute Idee sein, wenn Sie "echte" Subdomains für bestimmte Teile Ihres Webauftritts verwenden.

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

## Rahmenoptionen

Das folgende Beispiel sendet den `X-Frame-Options` Antwortheader mit DEMY als Wert, der Browsern mitteilt, den Inhalt der Webseite nicht in einem Frame anzuzeigen, um die Website vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu schützen.

Dies könnte nicht die beste Einstellung für jeden sein. Sie sollten [die beiden anderen möglichen Werte des `X-Frame-Options` Headers](https://datatracker.ietf.org/doc/html/rfc7034#section-2.1): `SAMEORIGIN` und `ALLOW-FROM` lesen.

Während Sie den `X-Frame-Options`-Header für alle Seiten Ihrer Website senden könnten, hat dies den potenziellen Nachteil, dass es selbst jegliches Einrahmen Ihres Inhalts (z. B.: wenn Benutzer Ihre Website über eine Google-Bilder-Suchseite besuchen) untersagt.

Nichtsdestotrotz sollten Sie sicherstellen, dass Sie den `X-Frame-Options`-Header für alle Seiten senden, die es einem Benutzer erlauben, eine statusändernde Operation durchzuführen (z.B. Seiten, die Links für den einmaligen Kauf enthalten, Checkout- oder Bankübertragungsbestätigungsseiten, Seiten, die permanente Konfigurationsänderungen vornehmen, usw.).

```apacheconf
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

## Content Security Policy (CSP)

[CSP (Content Security Policy)](https://content-security-policy.com/) verringert das Risiko von Cross-Site-Scripting und anderen Inhaltsinjektionsangriffen, indem es eine `Content Security Policy` festlegt, die vertrauenswürdige Inhaltsquellen für Ihre Website erlaubt.

Es gibt keine Richtlinie, die für alle Websites geeignet ist. Das untenstehende Beispiel ist als Leitfaden gedacht, den Sie für Ihre Seite anpassen können.

Um Ihre CSP-Implementierung zu erleichtern, können Sie einen Online-[CSP-Header-Generator](https://report-uri.com/home/generate/) verwenden. Sie sollten auch einen [Validator](https://csp-evaluator.withgoogle.com/) verwenden, um sicherzustellen, dass Ihr Header tut, was Sie wollen.

```apacheconf
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## Verzeichnisszugang

Diese Direktive verhindert den Zugriff auf Verzeichnisse, die keine Indexdatei im von dem Server konfigurierten Format haben, wie `index.html` oder `index.php`.

```apacheconf
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

## Zugriff auf versteckte Dateien und Verzeichnisse blockieren

In Macintosh- und Linux-Systemen sind Dateien, die mit einem Punkt beginnen, vor Anzeige geschützt, jedoch zugänglich, wenn Sie ihren Namen und Ort kennen. Diese Dateitypen enthalten normalerweise Benutzerpräferenzen oder den gespeicherten Zustand eines Dienstprogramms und können eher private Orte enthalten, wie beispielsweise die `.git`- oder `.svn`-Verzeichnisse.

Das `.well-known/`-Verzeichnis stellt [den Standard (RFC 5785)](https://datatracker.ietf.org/doc/html/rfc5785) Pfadpräfix für "wohlbekannte Orte" dar (z.B.: `/.well-known/manifest.json`, `/.well-known/keybase.txt`), und daher sollte der Zugang zu seinem sichtbaren Inhalt nicht blockiert werden.

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

Blockieren Sie den Zugang zu Backup- und Quelldateien, die von einigen Texteditoren hinterlassen werden könnten und ein Sicherheitsrisiko darstellen können, wenn jeder darauf Zugriff hat.

Aktualisieren Sie das `<FilesMatch>` reguläre Ausdruck im folgenden Beispiel, um alle Dateien einzuschließen, die auf Ihrem Produktionsserver landen und sensible Informationen über Ihre Website offenlegen könnten. Diese Dateien können Konfigurationsdateien oder Dateien enthalten, die Metadaten über das Projekt enthalten, unter anderem.

```apacheconf
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

## HTTP Strict Transport Security (HSTS)

Wenn ein Benutzer `example.com` in seinen Browser eintippt, selbst wenn der Server sie zur sicheren Version der Website umleitet, bleibt ein Fenster der Gelegenheit (die initiale HTTP-Verbindung) für einen Angreifer, die Anfrage herabzustufen oder umzuleiten.

Der folgende Header stellt sicher, dass ein Browser nur über HTTPS mit Ihrem Server verbindet, unabhängig davon, was die Benutzer in die Adressleiste des Browsers eingeben.

Seien Sie sich bewusst, dass `Strict Transport Security` nicht widerrufbar ist, und Sie müssen sicherstellen, dass Sie in der Lage sind, die Seite über HTTPS zu bedienen, solange Sie in der `max-age`-Direktive angegeben haben. Wenn Sie keine gültige TLS-Verbindung mehr haben (z. B. aufgrund eines abgelaufenen TLS-Zertifikats), sehen Ihre Besucher eine Fehlermeldung, selbst wenn versucht wird, über HTTP zu verbinden.

```apacheconf
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

## Verhindern, dass einige Browser den MIME-Typ des Benutzers erraten

1. Beschränkt alle Abrufe standardmäßig auf den Ursprung der aktuellen Website, indem die `default-src`-Direktive auf `'self'` setzt - die als Rückfalllösung für alle {{Glossary("Fetch_directive", "Fetch-Direktiven")}} dient.

   - Dies ist praktisch, da Sie nicht alle für Ihre Site anwendbaren Fetch-Direktiven angeben müssen, z.B.: `connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'`, usw.
   - Diese Einschränkung bedeutet auch, dass Sie explizit definieren müssen, von welcher Seite(n) Ihre Website Ressourcen laden darf. Andernfalls ist sie auf denselben Ursprung wie die Seite beschränkt, die die Anfrage stellt.

2. Verhindert das `<base>` Element auf der Website. Dies soll verhindern, dass Angreifer den Standort von Ressourcen laden von relativen URL ändern.

   - Wenn Sie das `<base>`-Element verwenden möchten, verwenden Sie stattdessen `base-uri 'self'`.

3. Erlaubt nur Formularübermittlungen vom aktuellen Ursprung mit: `form-action 'self'`.
4. Verhindert, dass alle Websites (einschließlich Ihrer eigenen) Ihre Webseiten innerhalb z. B. des `<iframe>`- oder `<object>`-Elements einbetten, indem sie: `frame-ancestors 'none'` setzen.

   - Die `frame-ancestors`-Direktive hilft, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden und ist ähnlich wie der `X-Frame-Options`-Header.
   - Browser, die den CSP-Header unterstützen, ignorieren `X-Frame-Options`, wenn `frame-ancestors` ebenfalls angegeben ist.

5. Erzwingt, dass der Browser alle Ressourcen, die über HTTP bereitgestellt werden, so behandelt, als ob sie sicher über HTTPS geladen wurden, indem die `upgrade-insecure-requests`-Direktive gesetzt wird.

   - **`upgrade-insecure-requests` sorgt nicht für HTTPS beim Top-Level-Navigation. Wenn Sie möchten, dass die Website selbst über HTTPS geladen wird, müssen Sie den `Strict-Transport-Security`-Header einfügen.**

6. Einschließt den `Content-Security-Policy`-Header in alle Antworten, die in der Lage sind, Scripting auszuführen. Dazu gehören die häufig verwendeten Dateitypen: HTML-, XML- und PDF-Dokumente. Obwohl JavaScript-Dateien keine Skripte in einem "Browsing-Kontext" ausführen können, sind sie enthalten, um [Web Worker](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#csp_in_workers) zu adressieren.

Einige ältere Browser versuchten, den Inhaltstyp einer Ressource zu erraten, selbst wenn er nicht richtig auf der Serverkonfiguration eingerichtet ist. Dies verringert die Exposition gegenüber Drive-by-Downloads und Datenlecks aus anderen Quellen.

```apacheconf
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## Referrer-Richtlinie

Wir fügen den `Referrer-Policy`-Header in Antworten für Ressourcen ein, die in der Lage sind, (oder zu) andere Ressourcen anzufordern (oder zu navigieren).

Dazu gehören gängige Ressourcentypen: HTML, CSS, XML/SVG, PDF-Dokumente, Skripte und Worker.

Um den Referrer-Leak vollständig zu verhindern, geben Sie stattdessen den Wert `no-referrer` an. Beachten Sie, dass die Auswirkung die Analysetools negativ beeinflussen könnte.

Verwenden Sie Dienste wie die unten stehenden, um Ihre `Referrer-Policy` zu überprüfen:

- [HTTP Observatory](/en-US/observatory)
- [securityheaders.com](https://securityheaders.com/)

```apacheconf
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

## `TRACE`-HTTP-Methode deaktivieren

Die [TRACE](/de/docs/Web/HTTP/Reference/Methods/TRACE)-Methode, obwohl scheinbar harmlos, kann in einigen Szenarien erfolgreich verwendet werden, um die Anmeldeinformationen legitimer Benutzer zu stehlen. Siehe [Ein Cross-Site Tracing (XST) Angriff](https://owasp.org/www-community/attacks/Cross_Site_Tracing) und [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods#test-xst-potential).

Moderne Browser verhindern nun TRACE-Anfragen, die über JavaScript gestellt werden, allerdings wurden andere Möglichkeiten entdeckt, um TRACE-Anfragen mit Browsern zu senden, zum Beispiel unter Verwendung von Java.

Wenn Sie Zugriff auf die Hauptserverkonfigurationsdatei haben, verwenden Sie stattdessen die [`TraceEnable`](https://httpd.apache.org/docs/current/mod/core.html#traceenable)-Direktive.

```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

## Entfernen des `X-Powered-By`-Antwortheaders

Einige Frameworks wie PHP und ASP.NET setzen einen `X-Powered-By`-Header, der Informationen über sie enthält (z.B. ihren Namen, Versionsnummer).

Dieser Header bietet keinen Mehrwert, und in einigen Fällen kann die Information, die er bietet, Schwachstellen offenlegen.

```apacheconf
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
```

Wenn Sie können, sollten Sie den `X-Powered-By`-Header auf der Sprache/Framework-Ebene deaktivieren (z.B.: für PHP können Sie dies tun, indem Sie folgendes in `php.ini` einstellen).

```ini
expose_php = off;
```

## Entfernen der von Apache generierten Server-Informationssignatur

Verhindern Sie, dass Apache eine nachgestellte Fußzeile enthält, die Informationen über den Server zu den vom Server generierten Dokumenten hinzufügt (zum Beispiel Fehlermeldungen, Verzeichnislisten, usw.). Siehe die [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature)-Direktive für weitere Informationen über das, was die Serversignatur bereitstellt, und die [`ServerTokens`](https://httpd.apache.org/docs/current/mod/core.html#servertokens)-Direktive für Informationen darüber, wie die bereitgestellten Informationen in der Signatur konfiguriert werden.

```apacheconf
ServerSignature Off
```

## Behebung defekter `AcceptEncoding`-Headers

Einige Proxy- und Sicherheitssoftware verwursteln oder entfernen den `Accept-Encoding`-HTTP-Header. Siehe [Pushing Beyond Gzipping](https://calendar.perfplanet.com/2010/pushing-beyond-gzipping/) für eine detailliertere Erklärung.

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

## Erweiterungen Medientypen zuordnen

Ordnen Sie die folgenden Dateinamenerweiterungen dem angegebenen Codierungstyp zu, indem Sie [AddEncoding](https://httpd.apache.org/docs/current/mod/mod_mime.html#addencoding) verwenden, damit Apache die Dateitypen mit dem entsprechenden `Content-Encoding`-Antwortheader bedienen kann (das macht nicht, dass Apache sie komprimiert!). Wenn diese Dateitypen ohne einen entsprechenden `Content-Encoding`-Antwortheader bedient würden, wüssten Clientanwendungen (z.B. Browser) nicht, dass sie die Antwort zuerst dekomprimieren müssen und könnten folglich den Inhalt nicht verstehen.

```apacheconf
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

## Cache-Ablaufdatum

Dienen Sie Ressourcen mit einem weit in der Zukunft liegenden Ablaufdatum, unter Verwendung des [mod_expires](https://httpd.apache.org/docs/current/mod/mod_expires.html)-Moduls und der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) und [Expires](/de/docs/Web/HTTP/Reference/Headers/Expires) Header.

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
